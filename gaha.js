var objekt={
    "broj":[
        {"vnesi":"контакт1", "ime":"Контакт1", "imee":"Струга"},
          {"vnesi":"контакт2", "ime":"Контакт2", "imee":"Охрид"},
            {"vnesi":"контакт3", "ime":"Контакт3", "imee":"Битола"}
    ],

    "adresa":[
        {"vnesi":"контакт1", "majl":"Јован", "majll":"Белкоски","majlll":"belkoski.jovan@uklo.edu.mk","mesto":"<br/><br/>ул.Едвард Кардељ број-145","mestoo":"<br/><br/>телефонски број:077-585-470","mestooo":"<br/><br/>Адреса: Струга, Мислешевски пат","fb":"<br/><br/>Фејзбук контакт:-Јован Белкоски"},
        {"vnesi":"контакт2", "majl":"Бојан", "majll":"Бојаноски","majlll":"bojanbojanoski22@gmail.com","mesto":"<br/><br/>ул.Туристичка број-24","mestoo":"<br/><br/>телефонски број:075-236-113","mestooo":"<br/><br/>Адреса: Охрид, Даљан","fb":"<br/><br/>Фејзбук контакт:-Бојан Бојаноски"},
        {"vnesi":"контакт3", "majl":"Илија", "majll":"Илиоски","majlll":"ilioskiilija23@gmail.com"}
    ]

};

function funkcija(){
    var inputVnesi=document.getElementById("tekst").value;
    var m=objekt.broj.length;
    for(i=0;i<m;i++){
        if(objekt.broj[i].vnesi===inputVnesi){
            document.getElementById("broj").innerHTML=objekt.broj[i].ime+" "+objekt.broj[i].imee;
        }
    }

    var n=objekt.adresa.length;
    document.getElementById("adresa").innerHTML="";
    for(j=0;j<n;j++){
        if(objekt.adresa[j].vnesi===inputVnesi){
            document.getElementById("adresa").innerHTML=objekt.adresa[j].majl+" "+objekt.adresa[j].majll+" - "+objekt.adresa[j].majlll+" "+objekt.adresa[j].mesto+" "+objekt.adresa[j].mestoo+" "+objekt.adresa[j].mestooo+" "+objekt.adresa[j].fb;
        }
    }

}
