const express = require("express");
const path = require("path");
const sql = require("mssql/msnodesqlv8");
require("dotenv").config();

const app = express();

app.use(express.static(__dirname));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    next();
});
const dbConfig = {
    server: "DC01\\SQLEXPRESS",
    database: "FJORDTEKDB",
    driver: "ODBC Driver 18 for SQL Server",
    connectionString:
        "Driver={ODBC Driver 18 for SQL Server};" +
        "Server=DC01\\SQLEXPRESS;" +
        "Database=FJORDTEKDB;" +
        "Trusted_Connection=Yes;" +
        "Encrypt=Yes;" +
        "TrustServerCertificate=Yes;"
};


app.get("/api/kunder", async (req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const tlsTest = await pool.request().query(
    "SELECT encrypt_option, auth_scheme FROM sys.dm_exec_connections WHERE session_id = @@SPID"
);
console.log("TLS-test:", tlsTest.recordset);
      
const result = await pool.request()
  .input("KundeID", sql.Int, 1)
  .query(
    "SELECT KUNDEID, NAVN, EPOST FROM dbo.KUNDE WHERE KUNDEID = @KundeID"
  );

        res.json(result.recordset);
    } catch (feil) {
        console.error("Databasefeil:", feil);
        res.status(500).json({
            error: "Kunne ikke hente kunder"
        });
    }
});


app.listen(3000, "127.0.0.1", () => {
    console.log("FjordTek kjører på http://127.0.0.1:3000");
});
