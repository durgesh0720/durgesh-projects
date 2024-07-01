#include<stdio.h>
#include<iostream>
#include<sqlite3.h>
using namespace std;
int main(){
    sqlite3* db;
    int rc=sqlite3_open("test.db",&db);
    if(rc){
        cerr<<"Error"<<sqlite3_errmsg(db)<<endl;
        sqlite3_close(db);
        return 1;
    }
    else{
        cout<<"Oppend Database succesfully"<<endl;
    }
    const char* sql = "CREATE TABLE COMPANY("
                  "NAME           TEXT    NOT NULL,"
                  "AGE            INT     NOT NULL,"
                  "ADDRESS        CHAR(50),"
                  "SALARY         REAL );";
    rc = sqlite3_exec(db, sql, nullptr, nullptr, nullptr);
    
    if (rc != SQLITE_OK) {
        std::cerr << "Error creating table: " << sqlite3_errmsg(db) << std::endl;
        sqlite3_close(db);
        return 1;
    } else {
        std::cout << "Table created successfully" << std::endl;
    }

    // Close the connection
    sqlite3_close(db);

    return 0;
}