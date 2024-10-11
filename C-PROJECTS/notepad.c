#include <stdio.h>
#include <string.h>

// Function prototypes
void READ_FILE(char fn[]);
void WRITE_FILE(char fn[]);
void ADD_FILE(char fn[]);

int main(int argc, char *argv[]) {
    char cho;
    if (argc != 2) {
        printf("Usage: %s <filename>\n", argv[0]);
        return 1;
    }

    char *fn = argv[1];

    printf("\n\t NotePad\n");

    printf("\n\nWhat Can you do? write:w/read:r/add:a/quit:q : ");
    scanf(" %c", &cho); 

    if (cho == 'r') {
        READ_FILE(fn);
    } 
    else if (cho == 'w') {
        WRITE_FILE(fn);
    } 
    else if (cho == 'a') {
        ADD_FILE(fn);
    } 
    else if (cho == 'q') {
        printf("\nQuitting Notepad\n");
    } 
    else {
        printf("\nInvalid option selected.\n");
    }

    return 0;
}


void READ_FILE(char fn[]) {
    FILE *fp;
    char in;

    fp = fopen(fn, "r");
    if (fp == NULL) {
        printf("\nError opening file for reading.\n");
        return;
    }

    printf("\n\n\t\t\tREAD MODE\n");
    while ((in = getc(fp)) != EOF) {
        putchar(in);
    }
    fclose(fp);
}


void WRITE_FILE(char fn[]) {
    FILE *fp;
    char in;

    fp = fopen(fn, "w");
    if (fp == NULL) {
        printf("\nError opening file for writing.\n");
        return;
    }

    printf("\n\n\t\t\tWRITE MODE\n");
    printf("\n\n\t\t\tTo save the file, press Ctrl+D (EOF)\n");

    getchar(); // consume the newline left by scanf
    while ((in = getchar()) != EOF) {
        putc(in, fp);
    }
    fclose(fp);
}


void ADD_FILE(char fn[]) {
    FILE *fp;
    char in;

    fp = fopen(fn, "a");
    if (fp == NULL) {
        printf("\nError opening file for appending.\n");
        return;
    }

    printf("\n\n\t\t\tADD MODE\n");
    printf("\n\n\t\t\tTo save the file, press Ctrl+D (EOF)\n");

    getchar(); // consume the newline left by scanf
    while ((in = getchar()) != EOF) {
        putc(in, fp);
    }
    fclose(fp);
}
