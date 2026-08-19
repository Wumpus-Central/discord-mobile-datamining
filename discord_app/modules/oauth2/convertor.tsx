// === Module 9773: convertOAuth2Authorization ===

// Module 9773 (convertOAuth2Authorization)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/oauth2/convertor.tsx");

export const convertOAuth2Authorization = function convertOAuth2Authorization(closure_0) {
  let tmp = importAll;
  if (null != importAll.guilds) {
    let obj = {};
    let merged = Object.assign(importAll);
    const guilds = importAll.guilds;
    obj.guilds = guilds.map((item, index) => {
      const obj = {};
      const merged = Object.assign(item);
      const deserializer = callback(table[0]);
      obj.permissions = deserializer.deserialize(item.permissions);
      return obj;
    });
    tmp = obj;
  }
  return tmp;
};