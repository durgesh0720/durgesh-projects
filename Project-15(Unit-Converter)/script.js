
const MassUnitsValues={
    'mg':0.001,
    'g':1,
    'kg':1000,
    't':1e6,
    'st':6350.29,
    'lb':453.592
};

function MassConversion(event){
    event.preventDefault();
    let SelectUnit=document.getElementById("mass-select-1").value;
    let InputMass=document.getElementById("mass-input").value;
    let ToConvertUnit=document.getElementById("mass-select-2").value;

    const valueIngram=InputMass*MassUnitsValues[SelectUnit];
    const ConvertedValue=valueIngram/MassUnitsValues[ToConvertUnit];
    document.getElementById("show-1").innerHTML="";
    document.getElementById("show-1").innerHTML="<strong>"+ConvertedValue+"</strong>";
}

const DataUnitsValues={
    'B':1,
    'KB':1024,
    'MB':1024**2,
    'GB':1024**3,
    'TB':1024**4,
    'PB':1024**5
};
function DataConversion(event){
    event.preventDefault();
    
    var SelectData1=document.getElementById("data-select-1").value;
    var inputData=document.getElementById("data-input").value;
    var SelectData2=document.getElementById("data-select-2").value;

    const valueInBytes=inputData*DataUnitsValues[SelectData1];
    const ConvertDataUnit=valueInBytes/DataUnitsValues[SelectData2];

    let show=document.getElementById("show-2");
    show.innerHTML="";
    show.innerHTML="<strong>"+ConvertDataUnit+"</strong>";
}
const LengthUnitValues={
    'KM':100000,
    'DM':10,
    'CM':1,
    'MM':0.1,
    'MI':160934.4,
    'M':100
};
function LengthConversion(event){
    event.preventDefault();

    let LengthUnit1=document.getElementById("length-select-1").value;
    let InputLength=document.getElementById("length-input").value;
    let LengthUnit2=document.getElementById("length-select-2").value;

    const valueInCM=InputLength*LengthUnitValues[LengthUnit1];
    const ConvertedLength=valueInCM/LengthUnitValues[LengthUnit2];

    document.getElementById("show-3").innerHTML="";
    document.getElementById("show-3").innerHTML="<strong>"+ConvertedLength+"</strong>";
}

