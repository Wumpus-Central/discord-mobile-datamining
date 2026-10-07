// discord_app/modules/oauth2/convertor.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
