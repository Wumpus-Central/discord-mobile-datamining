// === Module 9773: convertOAuth2Authorization ===

// Module 9773 (convertOAuth2Authorization)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/oauth2/convertor.tsx");

export const convertOAuth2Authorization = function convertOAuth2Authorization(closure_0) {
  let tmp = closure_0;
  if (null != closure_0.guilds) {
    let obj = {};
    let merged = Object.assign(closure_0);
    const guilds = closure_0.guilds;
    obj.guilds = guilds.map((permissions) => {
      const obj = {};
      const merged = Object.assign(permissions);
      obj.permissions = callback(table[0]).deserialize(permissions.permissions);
      return obj;
    });
    tmp = obj;
  }
  return tmp;
};