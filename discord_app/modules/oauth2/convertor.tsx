// === Module 9246: convertor ===

// Module 9246 (convertor)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/oauth2/convertor.tsx");

export const convertOAuth2Authorization = function convertOAuth2Authorization(guilds) {
  let tmp = guilds;
  if (null != guilds.guilds) {
    let obj = {};
    let merged = Object.assign(guilds);
    guilds = guilds.guilds;
    obj.guilds = guilds.map((permissions) => {
      const obj = {};
      const merged = Object.assign(permissions);
      const deserializer = BigFlagUtilsAll;
      obj.permissions = deserializer.deserialize(permissions.permissions);
      return obj;
    });
    tmp = obj;
  }
  return tmp;
};