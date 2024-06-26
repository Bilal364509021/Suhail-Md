const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "989364509021";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_29_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc5LFxuICAgICAgICA0NixcbiAgICAgICAgMjM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MixcbiAgICAgICAgMTUyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjEyUlN4S1k5aWt3WVBodVd2aG9sN1I3RVFBT2x6NFlSbnNnUnlRU1FkWm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTg5MzY0NTA5MDIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFOTk3MTY5Q0FBMDdCMjlGNUU1NUEzQTQ0RUNDQjMzMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzOTQxOTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic1pzNk50c0dTOEdQYlN2ejFXTk16d1wiLFxuICBcInBob25lSWRcIjogXCI1MWFiZjBhYi1jNmYzLTRkM2ItYTAwNC1kNzBhYjIzNWY5MWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgNzMsXG4gICAgICAyNTQsXG4gICAgICAyNTQsXG4gICAgICA3OCxcbiAgICAgIDIxMCxcbiAgICAgIDIzMixcbiAgICAgIDE0MCxcbiAgICAgIDg1LFxuICAgICAgNzksXG4gICAgICA2LFxuICAgICAgMTc0LFxuICAgICAgMTcyLFxuICAgICAgNTcsXG4gICAgICA1MCxcbiAgICAgIDE3NCxcbiAgICAgIDE1NixcbiAgICAgIDI0OSxcbiAgICAgIDcyLFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDIwMyxcbiAgICAgIDIwMixcbiAgICAgIDE5LFxuICAgICAgMjMsXG4gICAgICAxMjIsXG4gICAgICAyMDcsXG4gICAgICAyNDIsXG4gICAgICA0MCxcbiAgICAgIDIwNyxcbiAgICAgIDQ0LFxuICAgICAgMTIsXG4gICAgICAyMTMsXG4gICAgICAwLFxuICAgICAgMjAsXG4gICAgICAyMDMsXG4gICAgICAxNzcsXG4gICAgICAxMTYsXG4gICAgICAyMDEsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1YzUVRaOEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk4OTM2NDUwOTAyMTozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA0NDAxNzg4NjMzMTIxOjMzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcImFsb25lc2hcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbnR4M1FRaGIvdnN3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZaK2dGTGxHYjFoTnQ5YlJMM0J4Z1RuMFBIRGsxZ1NBTk9sVVNBOE5TUWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYllIT1I5UVcvTGw1T0ZSVzFaSytmbHhobUZkbjcrTmNqaVM0YzdrQnpNeG1LTmRHZ1dNOUZJNExLNlhha0hlZVIwWDU0NDJkcXllS3Jsd0JodytmQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibmtXaS9Bd0wzeDhOOVZhcjlHMFREb09wUFpNYW94VFkzbFp1Wnk0SHRtWXhXdTkwbm9VbldpeE9tKzQ0VlpGZzk3RXF3cWZaZXJJYUR2Zjk2Rmo1aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTg5MzY0NTA5MDIxOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTM5NDE4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU43MlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjcyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU2I2RUducjBNRytpYmdiRmFlc3VETHJpRHlQUDBJcGhWcTBOYnhSekdGYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNDQ0NDY5NDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTMwNDcxMTY2M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
