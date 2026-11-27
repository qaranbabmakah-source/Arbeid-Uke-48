# Mandag – Fra ER-modell til database
## Steg 1 – hva er SQL Server?

<img width="2560" height="1440" alt="Skjermbilde (1)" src="https://github.com/user-attachments/assets/cfc21055-6889-41d3-bb9d-db5d974386db" />

I denne oppgaven har jeg lært hva SQL Server er, og forskjellen mellom en databasemotor, en database og en tabell.

Jeg brukte Microsoft SQL Server som databasemotor og SQL Server Management Studio (SSMS) for å administrere databasen.

Jeg koblet til SQL Server med servernavnet LOCALHOST\SQLEXPRESS.

I Object Explorer kunne jeg se databasen FJORDTEKDB.

Forklaring:

SQL Server: Databasemotoren som lagrer og behandler data.

FJORDTEKDB: Databasen jeg arbeider med.

KUNDE, ANSATT og SAK: Tabellene som inneholder data.

Resultat:

Jeg klarte å koble til SQL Server lokalt og se databasen FJORDTEKDB i SSMS. Dette viser at tilkoblingen fungerer.

Skjermbilde: SQL Server og FJORDTEKDB i Object Explorer.


## Steg 2 – sett opp SQL Server hvis det ikke allerede er gjort

<img width="2560" height="1440" alt="Skjermbilde (6)" src="https://github.com/user-attachments/assets/b4c91303-f523-48b9-a9be-df780d8ee6d2" />

Jeg har installert Microsoft SQL Server Express og SQL Server Management Studio (SSMS).

Jeg åpnet Windows Services (Tjenester) for å kontrollere at SQL Server-tjenesten fungerer.

Jeg fant tjenesten SQL Server (SQLEXPRESS) og bekreftet at den kjører.

Jeg har også testet lokal tilkobling til SQL Server gjennom SSMS med Windows Authentication.

Resultat: SQL Server-tjenesten kjører, og jeg kan koble til databasen lokalt.

Skjermbilde: SQL Server (SQLEXPRESS) kjører i Windows Services.

## Steg 3 – opprett FjordTekDB

<img width="2560" height="1440" alt="Skjermbilde (7)" src="https://github.com/user-attachments/assets/27692679-67d5-473e-925b-59ac32d69fc6" />

Jeg har opprettet databasen FJORDTEKDB i Microsoft SQL Server ved hjelp av SQL Server Management Studio (SSMS).

I Object Explorer åpnet jeg Databases og kontrollerte at FJORDTEKDB finnes.

Jeg har også opprettet tabellene KUNDE, ANSATT og SAK i databasen.

Resultat: FJORDTEKDB er opprettet og tilgjengelig i SQL Server.

Skjermbilde: FJORDTEKDB og tabellene i Object Explorer.

## Steg 4 – lag tabeller fra ER-modellen

<img width="2560" height="1440" alt="Skjermbilde (8)" src="https://github.com/user-attachments/assets/6e09ee51-f8fe-4702-9b2a-cdef9578a21d" />

I dette steget har jeg laget tre tabeller i databasen FJORDTEKDB ved hjelp av SQL Server Management Studio (SSMS).

Tabellene er:

KUNDE: Lagrer informasjon om kunder.

ANSATT: Lagrer informasjon om ansatte.

SAK: Lagrer informasjon om saker og kobler dem til kunder og ansatte.

Jeg har brukt PRIMARY KEY for å identifisere radene i tabellene.

Jeg har også opprettet to FOREIGN KEY-relasjoner:

FK_SAK_KUNDE kobler SAK til KUNDE.

FK_SAK_ANSATT kobler SAK til ANSATT.

Dette følger ER-modellen, der én kunde kan ha mange saker, og én ansatt kan være knyttet til mange saker.

Jeg har også lagt til kolonnen OPPRETTETDATO med datatypen datetime i SAK-tabellen.

Resultat: Jeg har opprettet tre tabeller og koblet dem sammen med fremmednøkler.

Skjermbilde: Tabellene KUNDE, ANSATT og SAK med kolonner og fremmednøkler i Object Explorer.

## Steg 5 – legg inn noen testdata

<img width="2560" height="1440" alt="Skjermbilde (9)" src="https://github.com/user-attachments/assets/e354fdab-46d0-4c76-a9e9-66939e259268" />

I dette steget har jeg brukt SQL-kommandoen INSERT INTO for å legge inn testdata i databasen FJORDTEKDB.

Jeg har lagt inn følgende data:

KUNDE: 2 kunder – Kari Hansen og Per Olsen.

ANSATT: 2 ansatte – Sara Ali og Anne Berg.

SAK: 3 saker – Problem med PC, Problem med internett og Kan ikke logge inn.

Jeg har brukt KundeID og AnsattID for å koble sakene til eksisterende kunder og ansatte.

Disse koblingene bruker FOREIGN KEY for å sikre at sakene refererer til kunder og ansatte som finnes i databasen.

Resultat: Jeg har lagt inn testdata i alle tre tabellene og kontrollert at informasjonen er lagret.

Skjermbilde: Testdata fra KUNDE, ANSATT og SAK i SQL Server.

## Steg 6 – hent og kontroller data

<img width="2560" height="1440" alt="Skjermbilde (10)" src="https://github.com/user-attachments/assets/00cf04dc-0b4d-43d5-ab26-649aa44fa19e" />

I dette steget har jeg brukt SQL-kommandoen SELECT for å hente og kontrollere data fra databasen FJORDTEKDB.

Jeg har hentet informasjon fra tabellene KUNDE, ANSATT og SAK.

Jeg brukte først SELECT * for å vise alle kolonnene i tabellene.

Deretter brukte jeg følgende SQL-spørring for å hente bare de kolonnene jeg trengte:

SELECT KUNDEID, NAVN, EPOST
FROM dbo.KUNDE;

Denne spørringen viser kundenummer, navn og e-postadresse, men ikke telefonnummer.

Resultat: Jeg klarte å hente data fra databasen og kontrollere at informasjonen var riktig lagret.

Skjermbilde: SELECT med KUNDEID, NAVN og EPOST i SSMS.

## Steg 7 – sammenlign ER-modell og database

<img width="944" height="498" alt="image" src="https://github.com/user-attachments/assets/803ff4e9-9ac7-4e35-bbb2-57c4c68c7dd7" />

<img width="2560" height="1440" alt="Skjermbilde (11)" src="https://github.com/user-attachments/assets/fef21f18-015f-45de-9a7e-9c4897da41c4" />

I dette steget har jeg sammenlignet ER-modellen fra forrige uke med databasen FJORDTEKDB i SQL Server.

Jeg brukte dbdiagram.io for å se ER-modellen og SQL Server Management Studio (SSMS) for å kontrollere databasestrukturen.

Kontroll av tabeller og nøkler

Jeg kontrollerte at alle tre tabellene finnes i databasen:

KUNDE

ANSATT

SAK

Jeg kontrollerte også at alle tabellene har riktig primærnøkkel (PK):

KUNDE: PK_KUNDE

ANSATT: PK_ANSATT

SAK: PK_SAK

Jeg oppdaget at SAK manglet en primærnøkkel. Derfor brukte jeg følgende SQL-kommando:

ALTER TABLE dbo.SAK
ADD CONSTRAINT PK_SAK PRIMARY KEY (SAKID);

Kommandoen ble utført uten feil, og jeg bekreftet at PK_SAK ble opprettet.

Kontroll av relasjoner

Jeg kontrollerte at SAK har to fremmednøkler (FK):

FK_SAK_KUNDE: Kobler SAK til KUNDE.

FK_SAK_ANSATT: Kobler SAK til ANSATT.

Dette betyr at én kunde kan ha mange saker, og én ansatt kan være knyttet til mange saker.

Resultat

Jeg har kontrollert at tabellene KUNDE, ANSATT og SAK har primærnøkler og riktige fremmednøkkelrelasjoner.

Databasen følger hovedstrukturen i mandagsoppgaven. Det finnes noen mindre forskjeller i kolonnenavn og NULL-innstillinger sammenlignet med SQL-eksempelet.

Skjermbilde 1: ER-modellen i dbdiagram.io.

Skjermbilde 2: Tabeller, primærnøkler og fremmednøkler i SSMS.


## Mandagens grunnoppgave

1. Hva er forskjellen mellom SQL Server, FjordTekDB og en tabell?

SQL Server er databasemotoren som lagrer og behandler data. FjordTekDB er databasen jeg har opprettet. En tabell lagrer informasjon, for eksempel KUNDE, ANSATT og SAK.

2. Hva er forskjellen mellom SQL Server og SSMS?

SQL Server er databasemotoren som kjører databasen. SSMS er et program jeg bruker for å koble til SQL Server, administrere databasen og skrive SQL-kommandoer.

3. Hva gjør CREATE TABLE?

CREATE TABLE brukes til å opprette en ny tabell i databasen med kolonner og datatyper.

4. Hva gjør INSERT og SELECT?

INSERT brukes til å legge inn nye data i en tabell. SELECT brukes til å hente og vise data fra databasen.

5. Hvorfor må KundeID i Sak peke på en kunde som faktisk finnes?

Fordi KundeID er en fremmednøkkel (Foreign Key). Den sørger for at en sak er koblet til en kunde som finnes i KUNDE-tabellen. Dette beskytter relasjonen og hindrer ugyldige data.

## Videre utforskning – mandag

<img width="2560" height="1440" alt="Skjermbilde (12)" src="https://github.com/user-attachments/assets/6e0d917b-b708-4b6e-a142-d63a5e48fb6f" />

I denne oppgaven har jeg utvidet databasen FJORDTEKDB med to nye tabeller: KATEGORI og PRODUKT.

Jeg opprettet en primærnøkkel (PK) i begge tabellene og en fremmednøkkel (FK) i PRODUKT som peker til KATEGORI.

Relasjonen er én-til-mange (1:M). Det betyr at én kategori kan inneholde flere produkter, mens hvert produkt tilhører én kategori.

Testdata

Jeg brukte INSERT INTO for å legge inn:

2 kategorier: Datamaskiner og Tilbehor.

3 produkter: Laptop, Stasjonaer PC og Mus.

Kontroll med SELECT og JOIN

Jeg brukte SELECT og INNER JOIN for å hente produkter sammen med kategorinavnene.

Resultatet viste at Laptop og Stasjonaer PC tilhører Datamaskiner, mens Mus tilhører Tilbehor.

Resultat

Jeg har opprettet tabellene KATEGORI og PRODUKT, lagt inn testdata og bekreftet at 1:M-relasjonen fungerer ved hjelp av SQL.

Skjermbilde: Resultatet av INNER JOIN mellom PRODUKT og KATEGORI i SSMS.


## Tirsdag – rolig SQL-trening

## Steg 1 – filtrer med WHERE

<img width="2560" height="1440" alt="Skjermbilde (13)" src="https://github.com/user-attachments/assets/a7545df4-5e1c-4c7f-81cf-5d33faabbba7" />

<img width="2560" height="1440" alt="Skjermbilde (14)" src="https://github.com/user-attachments/assets/72930a0f-494f-434f-b64f-cc8a07eaf3f3" />

I dette steget har jeg brukt SQL-kommandoen WHERE for å filtrere data i databasen FJORDTEKDB.

Først brukte jeg WHERE for å finne alle saker med status «Åpen».

SELECT *
FROM dbo.SAK
WHERE STATUS = 'Åpen';

Resultatet viste to åpne saker: «Problem med internett» og «Kan ikke logge inn».

Deretter brukte jeg WHERE for å finne en bestemt kunde med KundeID 1.

SELECT *
FROM dbo.KUNDE
WHERE KUNDEID = 1;

Resultatet viste kunden Kari Hansen.

Resultat: Jeg har lært hvordan WHERE brukes til å hente bestemte rader fra databasen.

Skjermbilde 1: Åpne saker med WHERE.

Skjermbilde 2: Kunde med KundeID 1.

## Steg 2 – sorter resultatet

<img width="2560" height="1440" alt="Skjermbilde (15)" src="https://github.com/user-attachments/assets/f7966f33-ca9d-41b5-8da3-3ee408695463" />

<img width="2560" height="1440" alt="Skjermbilde (16)" src="https://github.com/user-attachments/assets/8fcba075-63e1-4a0d-a121-367c2d577116" />

<img width="2560" height="1440" alt="Skjermbilde (17)" src="https://github.com/user-attachments/assets/d416f81f-0613-46ce-ac0f-e1b22395e921" />

I dette steget har jeg brukt SQL-kommandoen ORDER BY for å sortere saker etter opprettelsesdato.

Først oppdaget jeg at feltet OPPRETTETDATO hadde verdien NULL i alle tre sakene. Derfor la jeg inn tre testdatoer med UPDATE.

Deretter kjørte jeg denne SQL-spørringen:

SELECT *
FROM dbo.SAK
ORDER BY OPPRETTETDATO DESC;

Resultat:

Sak 3 – Kan ikke logge inn – 23.11.2026

Sak 2 – Problem med internett – 21.11.2026

Sak 1 – Problem med PC – 20.11.2026

Jeg lærte at DESC sorterer fra nyeste til eldste dato, mens ASC sorterer fra eldste til nyeste.

ORDER BY endrer ikke dataene i tabellen, men bestemmer rekkefølgen på resultatene.

Skjermbilde: Saker sortert etter OPPRETTETDATO med ORDER BY DESC.

## Steg 3 – trygg UPDATE

<img width="2560" height="1440" alt="Skjermbilde (18)" src="https://github.com/user-attachments/assets/35c52db8-5834-4848-a6e0-ffe227b0fd81" />

<img width="2560" height="1440" alt="Skjermbilde (20)" src="https://github.com/user-attachments/assets/ec8673e9-7d3a-469b-ad25-207c6bcb628a" />

<img width="2560" height="1440" alt="Skjermbilde (21)" src="https://github.com/user-attachments/assets/f4a401df-372d-4270-bfe7-bbfd7c66244d" />

I dette steget har jeg lært hvordan jeg kan endre data på en trygg måte ved hjelp av SQL-kommandoen UPDATE.

Først brukte jeg SELECT for å kontrollere hvilken sak jeg skulle endre.

SELECT *
FROM dbo.SAK
WHERE SAKID = 2;

Resultatet viste saken «Problem med internett» med status «Åpen».

Deretter brukte jeg UPDATE for å endre statusen til «Lukket».

UPDATE dbo.SAK
SET STATUS = 'Lukket'
WHERE SAKID = 2;

SQL Server viste (1 row affected), som betyr at én rad ble oppdatert.

Til slutt brukte jeg SELECT igjen for å kontrollere resultatet.

Resultat: Saken med SAKID 2 fikk status «Lukket». Jeg lærte hvorfor det er viktig å bruke WHERE sammen med UPDATE, slik at jeg ikke endrer feil rader.

Skjermbilde 1: SELECT før UPDATE.

Skjermbilde 2: UPDATE med WHERE.

Skjermbilde 3: SELECT etter UPDATE.

## SELECT først → kontroller raden → UPDATE → SELECT igjen

### Trygg UPDATE – Kontroll før og etter endring

Jeg fulgte metoden **SELECT → kontroll → UPDATE → SELECT**.

Jeg valgte saken med SakID 2 og kontrollerte at statusen var «Åpen». Deretter endret jeg statusen til «Lukket» med UPDATE og WHERE.

Til slutt brukte jeg SELECT igjen og bekreftet at statusen var endret.

Jeg brukte SakID 2 i stedet for SakID 1 fra eksempelet. Dette ga samme læringsresultat.

Jeg lærte at WHERE er viktig ved UPDATE, fordi en UPDATE uten WHERE kan endre alle radene i tabellen.


## Tirsdagens grunnoppgave

I denne oppgaven har jeg jobbet med SQL-kommandoene WHERE, ORDER BY og UPDATE i databasen FJORDTEKDB.

1. SELECT med WHERE

Jeg brukte WHERE for å finne saker med status «Åpen» og for å finne en bestemt kunde med KundeID.

2. SELECT med ORDER BY

Jeg brukte ORDER BY OPPRETTETDATO DESC for å sortere sakene etter dato, med den nyeste først. Jeg la inn testdatoer for å kunne kontrollere sorteringen.

3. Trygg UPDATE

Jeg brukte SELECT for å kontrollere saken med SakID 2 før jeg endret den.

Deretter brukte jeg UPDATE med WHERE for å endre statusen fra «Åpen» til «Lukket».

Til slutt brukte jeg SELECT igjen for å kontrollere at endringen var lagret.

4. Hvorfor er WHERE viktig ved UPDATE?

WHERE bestemmer hvilke rader som skal endres. Uten WHERE kan UPDATE endre alle radene i tabellen ved en feil.

Resultat

Jeg har gjennomført Tirsdagens grunnoppgave og kontrollert at SQL-kommandoene fungerer i SQL Server.

## Videre utforskning – tirsdag: enkel JOIN

<img width="2560" height="1440" alt="Skjermbilde (22)" src="https://github.com/user-attachments/assets/d9dc0961-3d7b-4749-823a-a74604e2c457" />

I denne oppgaven har jeg brukt INNER JOIN for å kombinere data fra tabellene SAK og KUNDE i databasen FJORDTEKDB.

Jeg brukte følgende SQL-spørring:

SELECT
    S.SAKID,
    S.TITTEL,
    K.NAVN
FROM dbo.SAK AS S
INNER JOIN dbo.KUNDE AS K
    ON S.KUNDEID = K.KUNDEID;

PK/FK-relasjonen

KUNDE.KUNDEID er en primærnøkkel (PK), mens SAK.KUNDEID er en fremmednøkkel (FK).

Fremmednøkkelen gjør det mulig å koble hver sak til riktig kunde. Dette er en én-til-mange-relasjon (1:M), fordi én kunde kan ha flere saker.

Resultat

SQL-spørringen viste tre saker med tilhørende kundenavn:

Problem med PC – Kari Hansen

Problem med internett – Per Olsen

Kan ikke logge inn – Kari Hansen

Jeg har lært hvordan JOIN brukes til å kombinere informasjon fra to tabeller ved hjelp av PK og FK.

Skjermbilde: Resultatet av INNER JOIN mellom SAK og KUNDE i SSMS.

## Onsdag – SQL Server i nettverket

## Steg 1 – forstå klient/server-modellen

<img width="2560" height="1440" alt="Skjermbilde (25)" src="https://github.com/user-attachments/assets/7f503297-f017-44c0-90c7-171c527d08b0" />


I dette steget har jeg lært hvordan klient/server-modellen fungerer i et nettverk.

Jeg bruker DC01 som server. På DC01 har jeg installert SQL Server Express, og databasen FJORDTEKDB ligger i SQL Server-instansen SQLEXPRESS.

Jeg bruker Client1 som klient. Client1 er en virtuell maskin som kjører i Hyper-V på DC01.

Målet er at klienten skal kunne koble seg til SQL Server på DC01 ved hjelp av TCP/IP.

Kommunikasjonsvei:

Client1 → TCP/IP → DC01\SQLEXPRESS → FJORDTEKDB

Resultat:

Jeg har kontrollert at Client1 kjører i Hyper-V på DC01. Jeg har forstått hvordan klienten og databaseserveren skal kommunisere gjennom nettverket.

Selve nettverkstilkoblingen til SQL Server skal testes i de neste stegene.

Skjermbilde 1: Hyper-V Manager viser DC01 og den virtuelle maskinen Client1 med status «Kjører».


## Steg 2 – aktiver TCP/IP for SQL Server

<img width="2560" height="1440" alt="Skjermbilde (26)" src="https://github.com/user-attachments/assets/e2a5da7e-29db-40e1-9cd7-f6319578f5da" />

<img width="2560" height="1440" alt="Skjermbilde (27)" src="https://github.com/user-attachments/assets/ff3fca51-1cfd-457c-9f6c-e1131033a96a" />

<img width="2560" height="1440" alt="Skjermbilde (28)" src="https://github.com/user-attachments/assets/40749e39-a00e-420e-a51a-406061707dc9" />

<img width="2560" height="1440" alt="Skjermbilde (29)" src="https://github.com/user-attachments/assets/3e2f0d0e-0207-4f53-b298-ead23879ab58" />

I dette steget har jeg konfigurert SQL Server for nettverkstilkobling mellom DC01 og Client1.

Først åpnet jeg SQL Server Configuration Manager på DC01 og gikk til:

SQL Server Network Configuration → Protocols for SQLEXPRESS

Jeg oppdaget at TCP/IP var deaktivert. Derfor endret jeg innstillingen fra Disabled til Enabled.

Etter tillatelse fra læreren startet jeg SQL Server-tjenesten på nytt. Jeg kontrollerte at SQL Server (SQLEXPRESS) hadde status Running etter omstarten.

Testing av nettverksforbindelsen

Jeg åpnet Command Prompt på Client1 og kjørte ping DC01.

Resultatet viste at alle fire pakker fikk svar, med 0 % pakketap.

Deretter brukte jeg PowerShell på Client1 og kjørte:

Test-NetConnection DC01 -Port 49638

Resultatet viste TcpTestSucceeded: True, som bekrefter at Client1 kan nå DC01 på TCP-port 49638.

Resultat

Jeg har aktivert TCP/IP for SQL Server Express og bekreftet at tjenesten kjører.

Jeg har også testet at Client1 kan kommunisere med DC01 gjennom nettverket og nå SQL Server-porten.

Selve tilkoblingen til databasen FJORDTEKDB fra Client1 er ennå ikke testet.

Skjermbilder

Skjermbilde 1: TCP/IP viser Enabled i SQL Server Configuration Manager.

Skjermbilde 2: SQL Server (SQLEXPRESS) viser Running etter omstart.

Skjermbilde 3: Ping fra Client1 til DC01.

Skjermbilde 4: Test-NetConnection viser TcpTestSucceeded: True.

## Steg 3 – velg en kjent port i laben

<img width="2560" height="1440" alt="Skjermbilde (30)" src="https://github.com/user-attachments/assets/6a808bbb-ab8e-4366-8281-2342f6f6bec0" />

<img width="2560" height="1440" alt="Skjermbilde (31)" src="https://github.com/user-attachments/assets/a70b9b1d-63f4-43b6-a39e-180cd0bec50e" />

<img width="2560" height="1440" alt="Skjermbilde (32)" src="https://github.com/user-attachments/assets/2c20dac2-c03e-4974-99dd-fda4c640101f" />

I dette steget har jeg konfigurert SQL Server Express til å bruke en fast TCP-port.

Først åpnet jeg SQL Server Configuration Manager på DC01 og gikk til:

SQL Server Network Configuration → Protocols for SQLEXPRESS → TCP/IP → Properties → IP Addresses → IPAll

Under IPAll fjernet jeg verdien i TCP Dynamic Ports og satte TCP Port til 1433.

Deretter startet jeg SQL Server (SQLEXPRESS) på nytt slik at endringen skulle tre i kraft.

Jeg brukte PowerShell for å kontrollere at serveren lyttet på TCP-port 1433.

Resultat:

SQL Server kjører og lytter på port 1433.

En test fra Client1 viste at TCP-forbindelsen ennå ikke lyktes. Jeg fant at den eksisterende brannmurregelen fortsatt brukte port 49638. Dette skal undersøkes videre.

Jeg har lært at en fast port gjør nettverkstesting og feilsøking enklere.

Skjermbilder

Skjermbilde 1: IPAll med TCP Port 1433.

Skjermbilde 2: SQL Server (SQLEXPRESS) – Running.

Skjermbilde 3: PowerShell viser at port 1433 har status Listen.

## Steg 4 – åpne Windows Firewall

<img width="2560" height="1440" alt="Skjermbilde (33)" src="https://github.com/user-attachments/assets/a95d77c1-29c3-4b7d-b8f9-1129d1cca20d" />

<img width="2560" height="1440" alt="Skjermbilde (34)" src="https://github.com/user-attachments/assets/958ebfb4-632d-4498-981c-7a38550a8883" />

<img width="2560" height="1440" alt="Skjermbilde (35)" src="https://github.com/user-attachments/assets/d55ceaf7-3bc2-4976-8e0d-f051caa7bde8" />

I dette steget har jeg konfigurert Windows Firewall på DC01 slik at Client1 kan koble til SQL Server via TCP-port 1433.

Først åpnet jeg Windows Defender Brannmur med avansert sikkerhet ved å skrive wf.msc.

Deretter gikk jeg til Innkommende regler og opprettet en ny regel med følgende innstillinger:

Navn: SQL Server SQLEXPRESS TCP 1433

Regeltype: Port

Protokoll: TCP

Lokal port: 1433

Handling: Tillat tilkoblingen

Profiler: Domene og Offentlig

Ekstern IP-adresse: 192.168.1.108 (Client1)

Jeg begrenset regelen til Client1 for å unngå å åpne SQL Server-porten for alle maskiner i nettverket.

Testing av forbindelsen

Etter at brannmurregelen var opprettet, åpnet jeg PowerShell på Client1 og kjørte:

Test-NetConnection DC01 -Port 1433

Resultat:

RemoteAddress: 192.168.1.104

RemotePort: 1433

SourceAddress: 192.168.1.108

TcpTestSucceeded: True

Testen bekreftet at Client1 kunne nå TCP-port 1433 på DC01.

Konklusjon

Jeg har lært at selv om SQL Server kjører og lytter på riktig port, kan Windows Firewall blokkere nettverkstilkoblingen.

Etter at jeg opprettet og konfigurerte brannmurregelen, fungerte TCP-forbindelsen fra Client1 til DC01.

Selve påloggingen til databasen FjordTekDB skal testes senere.

Skjermbilder

Skjermbilde 1: Windows Firewall – Innkommende regler med regelen SQL Server SQLEXPRESS TCP 1433.

Skjermbilde 2: Egenskaper → Område, der Client1 (192.168.1.108) er valgt som tillatt ekstern IP-adresse.

Skjermbilde 3: PowerShell på Client1 viser TcpTestSucceeded: True.


## Steg 5 – test fra CLIENT01

<img width="2560" height="1440" alt="Skjermbilde (36)" src="https://github.com/user-attachments/assets/ec3d7fe4-4ba6-499b-9c26-1ff884f22d3b" />

I dette steget har jeg testet nettverksforbindelsen mellom Client1 og DC01.

Målet var å kontrollere at Client1 kunne finne serveren via DNS og få kontakt med SQL Server på TCP-port 1433.

1. Test av DNS

Jeg åpnet Windows PowerShell på Client1 og kjørte kommandoen:

nslookup DC01

Resultatet viste:

Servernavn: DC01.firma.local

IP-adresser: 192.168.1.10 og 192.168.1.104

Dette viser at DNS kan oversette servernavnet DC01 til IP-adresser.

Skjermbilde 1: PowerShell viser resultatet av nslookup DC01.

2. Test av TCP-port 1433

Deretter testet jeg forbindelsen til SQL Server med kommandoen:

Test-NetConnection DC01 -Port 1433

Resultatet viste:

ComputerName: DC01

RemoteAddress: 192.168.1.104

RemotePort: 1433

SourceAddress: 192.168.1.108

TcpTestSucceeded: True

Dette bekrefter at Client1 kan opprette en TCP-forbindelse til port 1433 på DC01.

Skjermbilde 2: PowerShell viser TcpTestSucceeded: True.

Resultat og konklusjon

Begge nettverkstestene var vellykkede.

Jeg har bekreftet at Client1 kan finne DC01 gjennom DNS og kontakte TCP-port 1433.

Jeg har lært at det er viktig å kontrollere DNS, nettverk og brannmur før man begynner å feilsøke en eventuell tilkobling i SQL Server Management Studio.

## Steg 6 – koble til fra CLIENT01

<img width="2560" height="1440" alt="Skjermbilde (37)" src="https://github.com/user-attachments/assets/f8bbf7bd-d278-42c2-9231-ba7771e920b4" />

Jeg installerte SQL Server Management Studio (SSMS 22) på Client1.

Deretter koblet jeg til SQL Server på DC01 med følgende innstillinger:

Server: tcp:192.168.1.104,1433

Autentisering: Windows Authentication

Bruker: FIRMA\testbruker1

Først fikk jeg ikke tilgang til databasen FjordTekDB fordi brukeren manglet nødvendige rettigheter.

På DC01 opprettet jeg derfor en SQL Server-pålogging for FIRMA\testbruker1 og ga brukeren rollen db_datareader i FjordTekDB.

Etter dette kunne jeg åpne databasen fra Client1 og kjøre:

USE FJORDTEKDB;
GO

SELECT * FROM dbo.KUNDE;

Resultat: Spørringen ble utført uten feil og viste to kunder: Kari Hansen og Per Olsen.

Dette bekrefter at hele forbindelsen fungerer:

CLIENT01 → DNS/nettverk → TCP-port 1433 → SQL Server → FjordTekDB → data.

Skjermbilde: SSMS på Client1 viser SELECT-spørringen og resultatene fra KUNDE-tabellen.

## Onsdagens grunnoppgave

<img width="2560" height="1440" alt="Skjermbilde (38)" src="https://github.com/user-attachments/assets/ea2e4c0f-c452-48a2-85e8-8ffbbb9bfe0f" />

<img width="2560" height="1440" alt="Skjermbilde (37)" src="https://github.com/user-attachments/assets/a657870c-b9df-4b15-9b7d-f5f84c11eec4" />

Gjennomføring

Jeg har konfigurert SQL Server Express på DC01 slik at Client1 kan koble til databasen over nettverket.

Jeg utførte følgende:

Aktiverte TCP/IP for SQL Server (SQLEXPRESS).

Konfigurerte en fast TCP-port, 1433, og startet SQL Server-tjenesten på nytt.

Opprettet en innkommende brannmurregel for TCP-port 1433. Regelen ble begrenset til IP-adressen 192.168.1.108 (Client1).

Testet forbindelsen fra Client1 med PowerShell:

Test-NetConnection DC01 -Port 1433

Resultat: TcpTestSucceeded: True.

Installerte SSMS på Client1 og koblet til SQL Server på DC01 med Windows Authentication.

Jeg kjørte følgende SQL-spørring:

USE FJORDTEKDB;
GO

SELECT * FROM dbo.KUNDE;

Resultat: Spørringen fungerte og viste to kunder: Kari Hansen og Per Olsen.

Feilsøking – symptom → hypotese → test → funn → løsning

Symptom: Jeg kunne koble til SQL Server fra Client1, men fikk ikke tilgang til databasen FJORDTEKDB.

Hypotese: Brukeren FIRMA\testbruker1 manglet nødvendige tilgangsrettigheter.

Test: Jeg kjørte USE FJORDTEKDB og kontrollerte deretter Security → Logins i SSMS på DC01.

Funn: SQL Server viste feilmelding 916, og brukeren FIRMA\testbruker1 manglet en egen pålogging med tilgang til FJORDTEKDB.

Løsning: Jeg opprettet en pålogging for FIRMA\testbruker1, koblet brukeren til FJORDTEKDB og ga rollen db_datareader.

Etterpå kjørte jeg SELECT-spørringen på nytt fra Client1. Den fungerte og viste kundedataene.

Konklusjon

Jeg har lært hvordan TCP/IP, porter, Windows Firewall, brukertilganger og SQL Server samarbeider.

Jeg har testet hele forbindelsen:

CLIENT01 → DNS/nettverk → TCP-port 1433 → SQL Server → FJORDTEKDB → data

Alle hovedtestene fungerte til slutt.

### Videre utforskning – onsdag

## Forskjellen mellom dynamisk port og fast port

En dynamisk port velges automatisk av SQL Server og kan endres når SQL Server-tjenesten starter på nytt. Dette er vanlig for navngitte instanser som SQLEXPRESS.

En fast port er konfigurert manuelt og forblir den samme til innstillingen endres. Dette gjør det enklere å konfigurere brannmurregler og teste nettverksforbindelsen.

I min lab brukte SQL Server Express tidligere en dynamisk port (49638). Jeg konfigurerte deretter en fast TCP-port (1433).

**Hva brukes SQL Server Browser til?**

SQL Server Browser hjelper klienter med å finne riktig port til en navngitt SQL Server-instans. Tjenesten bruker UDP-port 1434.

SQL Server Browser er spesielt nyttig når instansen bruker dynamiske porter.

I min lab koblet jeg Client1 direkte til `tcp:192.168.1.104,1433`. Derfor var ikke SQL Server Browser nødvendig for denne tilkoblingen.

**Konklusjon**

Jeg har lært at en fast port gjør nettverkstesting og feilsøking enklere. SQL Server Browser brukes for å finne riktig port når klienten kobler til en navngitt instans uten å oppgi portnummeret.

## Torsdag – webside, forbindelse og kryptering

## Steg 1 – frontend skal ikke koble direkte til databasen

I dette steget har jeg lært hvordan en webapplikasjon kommuniserer med en database.

En vanlig webapplikasjon består av en frontend, en backend/API og en database.

Frontend er delen brukeren ser i nettleseren. Backend tar imot forespørsler fra frontend og kommuniserer med SQL Server.

Databasen FJORDTEKDB lagrer informasjon om kunder, ansatte og saker.

Kommunikasjonsvei:

Nettleser → Backend/API → SQL Server → FJORDTEKDB

Hvorfor skal ikke nettleseren koble direkte til databasen?

Nettleseren skal ikke koble direkte til SQL Server fordi databaseinformasjon og hemmeligheter kan bli eksponert for brukeren.

Backenden beskytter påloggingsinformasjonen og kontrollerer hvilke data brukeren får tilgang til.

Resultat

Jeg har forstått forskjellen mellom frontend, backend og database, og hvorfor en backend brukes som et sikkert mellomledd mellom nettleseren og SQL Server.

## Steg 2 – hva er en connection string?

I dette steget har jeg lært hva en connection string er, og hvordan den brukes til å koble en applikasjon til SQL Server.

En connection string beskriver hvilken server og database applikasjonen skal bruke, og hvordan tilkoblingen skal opprettes.

Eksempel fra mitt labmiljø:

Server=tcp:DC01,1433;Database=FJORDTEKDB;Integrated Security=true;Encrypt=true

Forklaring

Server: Angir SQL Server-maskinen DC01 og TCP-port 1433.

Database: Velger databasen FJORDTEKDB.

Integrated Security=true: Bruker Windows Authentication.

Encrypt=true: Ber om en kryptert forbindelse til SQL Server.

Sikkerhet

Connection strings med passord eller andre hemmeligheter skal ikke legges i frontend-kode eller offentlige GitHub-repositorier.

Connection string bør håndteres på backend-siden. Det er også viktig å kontrollere serverens sertifikat når forbindelsen krypteres.

Resultat

Jeg har forstått hvordan en connection string beskriver forbindelsen mellom backend og SQL Server, og hvorfor tilkoblingsinformasjonen må beskyttes.

## Steg 3 – enkel webflyt

Målet var å lage en enkel nettside som henter en kundeliste via et backend-API. Frontend skal ikke koble seg direkte til SQL Server.

Gjennomføring

Jeg opprettet prosjektmappen FjordTek-Web i Visual Studio Code og laget index.html med knappen «Hent kunder».

<img width="2560" height="1440" alt="Skjermbilde (41)" src="https://github.com/user-attachments/assets/e56fc3b8-67d6-4cbb-ba17-374417322e46" />

Jeg installerte Node.js, opprettet package.json og installerte Express og SQL Server-pakker.

<img width="2560" height="1440" alt="Skjermbilde (40)" src="https://github.com/user-attachments/assets/6a5a1eae-c941-4715-a108-2f8d9fc1f29a" />

Jeg laget server.js med endepunktet /api/kunder. Backend bruker Windows-autentisering og utfører SQL-spørringen:

SELECT KUNDEID, NAVN, EPOST FROM dbo.KUNDE

mot databasen FJORDTEKDB.

Jeg testet API-et på http://127.0.0.1:3000/api/kunder og fikk JSON med kunde-ID, navn og e-post.

Jeg åpnet frontend med Go Live på http://127.0.0.1:5500 og konfigurerte fetch til API-et på port 3000. Backend tillater forespørsler fra denne lokale frontend-adressen.

Resultat og skjermbilde

<img width="2560" height="1440" alt="Skjermbilde (39)" src="https://github.com/user-attachments/assets/064decd7-33c4-4be9-bbdf-28842c7eb2a8" />


Ved å trykke på «Hent kunder» viste nettsiden:

Kari Hansen – kari@example.no

Per Olsen – per@example.no

Skjermbildet viser den vellykkede testen fra Go Live på 127.0.0.1:5500.



Feilsøking

Symptom: Først fikk jeg meldingen «Feil: Kunne ikke hente kunder».

Hypotese: Databasetilkoblingen eller ODBC-konfigurasjonen var feil.

Test og funn: Terminalen viste en ODBC Driver Manager-feil om manglende datakilde eller driver. Jeg kontrollerte at ODBC Driver 17 og 18 var installert.

Løsning: Jeg justerte driverkonfigurasjonen og testet API-et på nytt. Deretter hentet nettsiden kundelisten. For Go Live måtte jeg også bruke riktig API-adresse og tillate CORS fra port 5500.

Sikkerhet og læring

Nettleseren kommuniserer med backend-API-et, og det er backend som kobler seg til SQL Server.

Databasens tilkoblingsinnstillinger ligger ikke i frontend-koden. Jeg brukte Windows-autentisering uten å legge inn databasepassord i nettsiden.

I laboratoriet er trustServerCertificate aktivert. Det innebærer at serversertifikatet ikke valideres, og dette er ikke en anbefalt produksjonsinnstilling. Kryptering og sertifikatvalidering må vurderes separat.

Konklusjon

Steg 3 er gjennomført. Frontend, backend og SQL Server fungerte sammen i den lokale testen.

Frontend → Backend/API → SQL Server → FJORDTEKDB → Kundeliste


## Steg 4 – kryptering av forbindelsen

I denne oppgaven var målet å forstå hvordan TLS-kryptering beskytter data som sendes mellom en webapplikasjon og SQL Server.

Jeg skulle også forstå forskjellen mellom kryptering og autentisering.

 Gjennomføring

Jeg brukte webapplikasjonen FjordTek, som består av en frontend (index.html) og en backend (server.js).

Backenden kobler seg til SQL Server og henter kundedata fra databasen FJORDTEKDB.

Først undersøkte jeg forbindelsen i SQL Server Management Studio (SSMS) ved å kjøre denne SQL-spørringen:

SELECT
    session_id,
    encrypt_option,
    auth_scheme
FROM sys.dm_exec_connections
WHERE session_id = @@SPID;

Resultatet viste:

encrypt_option = TRUE

auth_scheme = NTLM

Deretter undersøkte jeg forbindelsen mellom Node.js og SQL Server.

Den første testen viste encrypt_option = FALSE. Jeg endret derfor konfigurasjonen i server.js for å aktivere kryptering.

Jeg brukte ODBC Driver 18 for SQL Server og konfigurerte tilkoblingen med Encrypt=Yes og TrustServerCertificate=Yes.

Feilsøking

Symptom: Etter at jeg aktiverte kryptering, fikk jeg en feilmelding om at forbindelsen til SQL Server ikke kunne opprettes.

Hypotese: Feilen kunne skyldes sertifikatinnstillingene eller feil tilkoblingskonfigurasjon.

Test: Jeg undersøkte feilmeldingene i terminalen og kontrollerte tilkoblingsinnstillingene i server.js.

Funn: Jeg fikk blant annet feil knyttet til ODBC og tilkoblingskonfigurasjonen.

Løsning: Jeg justerte connection string og konfigurasjonen for SQL Server. Deretter startet jeg Node.js-serveren på nytt og testet forbindelsen.

4. Resultat

Etter endringene viste terminalen:

encrypt_option = TRUE

auth_scheme = NTLM

Dette bekreftet at forbindelsen mellom Node.js og SQL Server var kryptert.

Jeg testet også nettsiden via Go Live på:

http://127.0.0.1:5500

Da jeg trykket på knappen «Hent kunder», fikk jeg følgende resultat:

Kari Hansen – kari@example.no

Per Olsen – per@example.no

Dette viste at webapplikasjonen fortsatt kunne hente kundedata etter at kryptering var aktivert.

Sikkerhet

Kryptering og autentisering er to forskjellige sikkerhetsmekanismer.

Kryptering (TLS) beskytter dataene mens de overføres mellom applikasjonen og SQL Server.

Autentisering kontrollerer identiteten til brukeren eller tjenesten som kobler seg til databasen.

Jeg brukte Windows-autentisering, og SQL Server rapporterte autentiseringsmetoden NTLM.

I denne isolerte laboratorieoppgaven brukte jeg TrustServerCertificate=Yes. Dette betyr at klienten godtar serversertifikatet uten vanlig sertifikatvalidering.

I et produksjonsmiljø bør man bruke et sertifikat fra en betrodd sertifikatutsteder (CA) og validere serverens identitet.



Skjermbilde 1: Resultat fra TLS-testen i terminalen med encrypt_option = TRUE og auth_scheme = NTLM.

<img width="2560" height="1440" alt="Skjermbilde (42)" src="https://github.com/user-attachments/assets/06d1e3f4-0260-4ef7-bbc3-81c55b42f693" />


Skjermbilde 2: FjordTek-nettsiden som viser kundene Kari Hansen og Per Olsen etter at kryptering ble aktivert.

<img width="2560" height="1440" alt="Skjermbilde (43)" src="https://github.com/user-attachments/assets/1a7f222f-ea76-4c1b-9085-c3fc224b34c8" />


Konklusjon

Jeg har lært hvordan TLS-kryptering brukes til å beskytte forbindelsen mellom en webapplikasjon og SQL Server.

Jeg har også lært forskjellen mellom kryptering og autentisering, og hvorfor sertifikatvalidering er viktig.

Testene viste at Node.js-backenden kunne koble seg til FJORDTEKDB med kryptert forbindelse og hente kundedata.

## Steg 5 – kontroller kryptering

<img width="2560" height="1440" alt="Skjermbilde (44)" src="https://github.com/user-attachments/assets/8515555a-2a6d-40e6-ba0b-129464b33df5" />

<img width="2560" height="1440" alt="Skjermbilde (45)" src="https://github.com/user-attachments/assets/2aa49cff-ffd0-4d64-96c7-9ce4a77c8b62" />

I dette steget har jeg kontrollert at forbindelsen mellom SQL Server Management Studio (SSMS) og SQL Server på DC01 er kryptert.

Først åpnet jeg SQL Server Management Studio og koblet meg til SQL Server-instansen DC01\SQLEXPRESS.

Deretter åpnet jeg New Query, valgte databasen FJORDTEKDB og kjørte følgende SQL-spørring:

USE FJORDTEKDB;
GO

SELECT encrypt_option
FROM sys.dm_exec_connections
WHERE session_id = @@SPID;

Testing av kryptering

Etter at jeg kjørte SQL-spørringen, fikk jeg følgende resultat:

encrypt_option: TRUE

Resultatet bekreftet at den aktuelle forbindelsen mellom SSMS og SQL Server var kryptert.

Jeg hadde også tidligere kontrollert forbindelsen mellom Node.js-backenden og SQL Server. Denne testen viste:

encrypt_option: TRUE

auth_scheme: NTLM

Dette viste at backend-forbindelsen også var kryptert, og at Windows-autentisering ble brukt.

Konklusjon

Jeg har lært hvordan jeg kan kontrollere om en SQL Server-forbindelse er kryptert ved å bruke sys.dm_exec_connections.

Når encrypt_option viser TRUE, betyr det at den aktuelle SQL-forbindelsen er kryptert.

Testene viste at både SSMS og Node.js-backenden kunne opprette krypterte forbindelser til SQL Server.

Skjermbilder

Skjermbilde 1: SQL Server Management Studio viser SQL-spørringen og resultatet encrypt_option = TRUE.

Skjermbilde 2: Terminalen i Visual Studio Code viser TLS-test med encrypt_option = TRUE og auth_scheme = NTLM.

## Torsdagens grunnoppgave

1. Hvorfor bør nettleseren ikke koble direkte til SQL Server?

Nettleseren bør ikke koble direkte til SQL Server fordi databaseinformasjon og passord kan bli eksponert. Backend beskytter tilkoblingen og kontrollerer hvem som får tilgang til dataene.

2. Hva er backendens rolle?

Backend fungerer som et mellomledd mellom frontend og databasen. Den mottar forespørsler fra nettsiden, henter data fra SQL Server og sender resultatet tilbake til frontend.

3. Hva beskytter TLS?

TLS beskytter data som sendes mellom applikasjonen og SQL Server ved å kryptere trafikken. Dette gjør det vanskeligere for uvedkommende å lese informasjonen under overføring.

4. Hvorfor er et sertifikat klienten stoler på bedre enn bare å godta et selvsignert sertifikat?

Et sertifikat fra en betrodd sertifikatutsteder (CA) gjør det mulig for klienten å kontrollere serverens identitet. Hvis klienten bare godtar et selvsignert sertifikat uten validering, kan den ikke være like sikker på at den kommuniserer med riktig server.

Konklusjon

I denne oppgaven har jeg lært hvordan frontend, backend og database samarbeider. Jeg har også lært hva en connection string brukes til, hvordan TLS beskytter data, og hvordan jeg kan kontrollere kryptering med encrypt_option.

Jeg testet FjordTek-nettsiden og hentet kundedata fra SQL Server gjennom backend-API-et. Resultatet viste at forbindelsen fungerte og at SQL-forbindelsen kunne krypteres.

## Når noe ikke virker

I denne oppgaven har jeg lært hvordan jeg kan feilsøke SQL Server og webapplikasjonen FjordTek.

Hvis noe ikke fungerer, kontrollerer jeg først SQL Server-tjenesten, nettverket, TCP/IP, port 1433 og Windows Firewall.

Deretter sjekker jeg tilkoblingen fra Client1 og feilmeldingene i backend.

Jeg har lært at det er viktig å finne årsaken til feilen før jeg endrer flere innstillinger samtidig.

## Oppsummering av uka

Denne uka har jeg lært sammenhengen mellom ER-modell, SQL Server, database, tabeller, SQL, nettverk, klient og backend.

Jeg har opprettet databasen FJORDTEKDB, jobbet med SQL-spørringer og testet forbindelsen mellom klienten og SQL Server.

Jeg har også laget en enkel webside som henter kundedata gjennom en backend, og kontrollert at databaseforbindelsen er kryptert.

Jeg har lært hvorfor vi bruker en fast TCP-port i laben, og hvorfor det er viktig å validere sertifikater i et produksjonsmiljø.

Denne kunnskapen skal jeg bruke videre i prosjektuka.  

## Videre utforskning – torsdag

<img width="2560" height="1440" alt="Skjermbilde (46)" src="https://github.com/user-attachments/assets/2982bc03-e6d7-403a-bc46-2b908586b6ac" />

<img width="2560" height="1440" alt="Skjermbilde (48)" src="https://github.com/user-attachments/assets/c842cf84-bd98-4a2c-a75b-cd41dab43134" />

<img width="2560" height="1440" alt="Skjermbilde (49)" src="https://github.com/user-attachments/assets/efda5fce-55d7-4817-a527-212c4935bd31" />

I denne oppgaven valgte jeg å undersøke parameteriserte SQL-spørringer og SQL injection.

Målet var å forstå hvordan parameteriserte spørringer kan bidra til å beskytte databasen mot SQL injection.

Gjennomføring

Først åpnet jeg SQL Server Management Studio (SSMS) og koblet meg til databasen FJORDTEKDB.

Deretter testet jeg følgende SQL-spørring:

USE FJORDTEKDB;
GO

DECLARE @KundeID INT = 1;

SELECT KUNDEID, NAVN, EPOST
FROM dbo.KUNDE
WHERE KUNDEID = @KundeID;

Spørringen returnerte kunden Kari Hansen med KUNDEID = 1.

Etterpå åpnet jeg server.js i Visual Studio Code og endret SQL-spørringen i backend til en parameterisert spørring:

const result = await pool.request()
  .input("KundeID", sql.Int, 1)
  .query(
    "SELECT KUNDEID, NAVN, EPOST FROM dbo.KUNDE WHERE KUNDEID = @KundeID"
  );

Jeg lagret filen og startet Node.js-serveren på nytt med:

node server.js

Testing og feilsøking

Under testingen fikk jeg først feilmeldingen «Kunne ikke hente kunder» på nettsiden.

Jeg undersøkte koden i server.js og fant en ekstra ); som førte til en syntaksfeil.

Jeg fjernet den ekstra linjen, lagret filen og startet serveren på nytt.

Deretter åpnet jeg FjordTek-nettsiden på http://127.0.0.1:5500 og trykket på Hent kunder.

Resultat

Nettsiden viste:

KUNDEID: 1

Navn: Kari Hansen

E-post: kari@example.no

Resultatet bekreftet at den parameteriserte SQL-spørringen fungerte i backend.

Sikkerhet

SQL injection er en sikkerhetsrisiko som kan oppstå når brukerinput settes direkte inn i SQL-spørringer.

Parameteriserte SQL-spørringer skiller data fra SQL-kode og bidrar derfor til å beskytte databasen mot SQL injection.

Konklusjon

Jeg har lært hvordan jeg kan bruke parametere i SQL-spørringer.

Jeg testet dette både i SSMS og i Node.js-backenden. Etter å ha rettet en syntaksfeil fungerte nettsiden og viste riktig kunde.

Skjermbilder

Skjermbilde 1: SSMS viser SQL-spørringen med @KundeID og resultatet Kari Hansen.

Skjermbilde 2: Visual Studio Code viser den parameteriserte SQL-spørringen i server.js.

Skjermbilde 3: FjordTek-nettsiden viser Kari Hansen etter at jeg trykket på «Hent kunder».

# Fredag – Prosjektklar oppsummering

## Jobbklar – Mine ferdigheter og praktiske erfaringer

Gjennom denne uka har jeg fått praktisk erfaring med SQL Server, databaser, nettverk, webutvikling og sikkerhet. Jeg har jobbet med FjordTek-prosjektet, der jeg har opprettet en database, konfigurert databaseforbindelser og utviklet en enkel webapplikasjon.

Jeg har ikke bare lært teorien, men også gjennomført praktiske oppgaver, testet løsningene og feilsøkt når noe ikke fungerte.

Her er fem konkrete ferdigheter jeg nå kan beskrive til en arbeidsgiver.

### 1. Jeg kan opprette og strukturere databaser i SQL Server

Jeg har praktisk erfaring med å bruke SQL Server Management Studio (SSMS) til å opprette og administrere databaser.

I FjordTek-prosjektet jobbet jeg med databasen `FJORDTEKDB`, der jeg opprettet tabellene `KUNDE`, `ANSATT` og `SAK`.

Jeg har lært hvordan et ER-diagram kan brukes som utgangspunkt for å bygge en database med tabeller og relasjoner.

Jeg har også jobbet med primærnøkler (*Primary Keys*) og fremmednøkler (*Foreign Keys*) for å koble tabellene sammen og sikre en ryddig databasestruktur.

Denne erfaringen er nyttig i arbeidslivet fordi mange virksomheter trenger systemer som lagrer og organiserer informasjon på en strukturert måte.

### 2. Jeg kan bruke SQL til å arbeide med data

Jeg har praktisk erfaring med å skrive og kjøre SQL-spørringer i SQL Server Management Studio.

Jeg har brukt SQL til å legge inn testdata, hente informasjon fra tabeller og arbeide med data i databasen.

I FjordTek-prosjektet jobbet jeg blant annet med kundedata og brukte `SELECT` for å hente informasjon fra tabellen `dbo.KUNDE`.

Jeg har også undersøkt parameteriserte SQL-spørringer og testet hvordan en parameter som `@KundeID` kan brukes til å hente en bestemt kunde.

Under testingen klarte jeg å hente informasjonen til Kari Hansen fra databasen og vise resultatet på nettsiden.

Jeg har lært at parameteriserte spørringer er viktige for sikkerhet fordi de bidrar til å beskytte databasen mot SQL injection.

Dette er nyttig i arbeidslivet når man skal utvikle, vedlikeholde eller feilsøke systemer som bruker databaser.

### 3. Jeg kan konfigurere og teste databaseforbindelser over nettverk

Jeg har praktisk erfaring med å konfigurere SQL Server slik at andre maskiner kan koble seg til databasen gjennom et nettverk.

I laboratoriemiljøet jobbet jeg med SQL Server-instansen `DC01\SQLEXPRESS`.

Jeg konfigurerte TCP/IP og brukte TCP-port `1433` for databaseforbindelsen.

Jeg jobbet også med Windows Firewall og opprettet en innkommende regel som tillot nødvendig nettverkstrafikk fra klientmaskinen.

For å kontrollere forbindelsen brukte jeg PowerShell-kommandoen:

`Test-NetConnection DC01 -Port 1433`

Testen viste `TcpTestSucceeded: True`, som bekreftet at klientmaskinen kunne nå SQL Server-porten.

Jeg har også lært hvordan jeg kan bruke SSMS fra en klientmaskin til å kontrollere at databaseforbindelsen fungerer.

Denne erfaringen har gitt meg bedre forståelse av samspillet mellom servere, nettverk, brannmur og klientmaskiner.

### 4. Jeg kan utvikle en enkel webapplikasjon med frontend og backend

Jeg har praktisk erfaring med å lage en enkel webapplikasjon som henter informasjon fra en SQL Server-database.

I FjordTek-prosjektet brukte jeg Visual Studio Code, HTML, JavaScript, Node.js og Express.

Jeg laget en frontend i `index.html` med knappen **Hent kunder**.

Jeg opprettet også en backend i `server.js`, som koblet seg til SQL Server og hentet kundedata fra `FJORDTEKDB`.

Når brukeren trykket på knappen, sendte nettsiden en forespørsel til backend, som hentet data fra databasen og sendte resultatet tilbake til nettsiden.

Jeg testet løsningen og fikk vist kundene Kari Hansen og Per Olsen på nettsiden.

Jeg har lært hvorfor nettleseren ikke bør koble seg direkte til SQL Server, og hvordan backend fungerer som et mellomledd som håndterer databaseforespørsler.

Denne erfaringen er nyttig innen webutvikling, IT-drift og systemutvikling.

### 5. Jeg kan kontrollere kryptering og feilsøke databaseforbindelser

Jeg har praktisk erfaring med å undersøke sikkerheten i forbindelsen mellom en applikasjon og SQL Server.

Jeg har lært forskjellen mellom kryptering og autentisering.

Kryptering beskytter informasjonen mens den overføres, mens autentisering kontrollerer hvem som får koble seg til systemet.

I FjordTek-prosjektet brukte jeg en SQL-spørring mot `sys.dm_exec_connections` for å undersøke om forbindelsen var kryptert.

Resultatet viste:

- `encrypt_option = TRUE`
- `auth_scheme = NTLM`

Jeg kontrollerte både forbindelsen fra SSMS og forbindelsen fra Node.js-backenden.

Jeg fikk også erfaring med feilsøking da backend ikke klarte å koble seg til SQL Server på grunn av tilkoblings- og sertifikatinnstillinger.

Jeg undersøkte feilmeldingene, endret konfigurasjonen og testet forbindelsen på nytt.

Til slutt fungerte forbindelsen, og webapplikasjonen kunne hente kundedata gjennom en kryptert SQL Server-forbindelse.

Jeg har også lært at et sertifikat som klienten stoler på, er viktig for å kunne kontrollere serverens identitet i et produksjonsmiljø.

Denne erfaringen har lært meg å arbeide systematisk med feilsøking og sikkerhet.

## Konklusjon – Hva jeg kan tilby en arbeidsgiver

Gjennom FjordTek-prosjektet har jeg fått praktisk erfaring med flere viktige områder innen IT.

Jeg kan opprette databaser, arbeide med SQL, konfigurere nettverksforbindelser, utvikle en enkel webapplikasjon og kontrollere sikkerheten i databaseforbindelser.

Jeg har også fått erfaring med å lese feilmeldinger, finne årsaker til problemer og teste løsninger etter at jeg har gjort endringer.

En viktig ting jeg har lært, er at forskjellige deler av et IT-system må fungere sammen. Databasen, nettverket, backend og frontend er avhengige av hverandre.

Jeg er fortsatt i en læringsfase, men gjennom praktisk arbeid har jeg fått et godt grunnlag for å utvikle ferdighetene mine videre.

Jeg kan bruke denne erfaringen i fremtidige utviklingsprosjekter og i arbeidsoppgaver innen IT-drift, databaser og systemutvikling.






































