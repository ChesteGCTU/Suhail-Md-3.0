const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="iamguest233@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Bless Made It ❤!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233535064232";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_01_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYwLFxuICAgICAgICA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk3LFxuICAgICAgICAzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM2LFxuICAgICAgICA3MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNyxcbiAgICAgICAgNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODksXG4gICAgICAgIDg4LFxuICAgICAgICAyMjksXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk1LFxuICAgICAgICA5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDg4LFxuICAgICAgICA2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEamJEZGdSV082eU0vcU5MLzZldmMzbFhrL1ZYdk8zRHNPVXdhOXhlcFFJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGYlhyRjlUcFRlS3ZjdkxCOGFiN1BBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgwNzg4Y2IyLTA5NzUtNGY5Zi1iMWEwLWM4YWU3MjdjOWU5YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAxMjcsXG4gICAgICAyMTgsXG4gICAgICAxNjAsXG4gICAgICAxMzYsXG4gICAgICAyNDYsXG4gICAgICA0MSxcbiAgICAgIDE3NCxcbiAgICAgIDE3LFxuICAgICAgMjMsXG4gICAgICA5NixcbiAgICAgIDEwNCxcbiAgICAgIDkyLFxuICAgICAgMTU5LFxuICAgICAgMjExLFxuICAgICAgMTQwLFxuICAgICAgMTQ0LFxuICAgICAgMTQ2LFxuICAgICAgMjYsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcyLFxuICAgICAgMjQyLFxuICAgICAgMTYsXG4gICAgICAxNDcsXG4gICAgICAxMDcsXG4gICAgICAxNjEsXG4gICAgICAxNTQsXG4gICAgICA5MSxcbiAgICAgIDIyMSxcbiAgICAgIDExOSxcbiAgICAgIDk0LFxuICAgICAgNjIsXG4gICAgICA1MixcbiAgICAgIDE1MSxcbiAgICAgIDE5NixcbiAgICAgIDQ1LFxuICAgICAgMTQyLFxuICAgICAgMTY3LFxuICAgICAgMjUwLFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHZvNUpJSEVLR000TUVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJocU8zc0NsM1ZubGdxMEtMWmVLZDl0dng5S0Zpc1BES2NkbS9wbkQxajJZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJFdUxEOUY0L0dGZk5scEYrL3RQSGZ5U1MxWFVWMmVIdnIwQ0l6Y29sV2tSSmZJWWVlaGR4enI2Zy9EWHZhTlpUSHplWG9pbWdwWTF2eWpDR0F1RUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInE5dVFFUEFzSndINFV2SVA1T3haNzUreklmVEVCQ2Z5Nm1iT2VPUDEvMkMxZEJvU1Q3Ym01dThrZVlIYlFTVWhZN3pDRXJHZW9GbDJLbDhPSG1BS0N3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTM1MDY0MjMyOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDgzMDU1NTYyOTE2NTg6MTRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MzUwNjQyMzI6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4NTAyMDU0XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Blessy02",
  ownername:process.env.OWNER_NAME|| "Bless 44G",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
