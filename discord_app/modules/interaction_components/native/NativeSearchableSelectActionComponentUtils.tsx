// discord_app/modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { registerAsset } from "../../../../_runtime/08232_registerAsset.js";
import { isDiscordFrontendDevelopment } from "../../../utils/GlobalUtils.tsx";
import { getChannelIcon } from "../../../utils/native/ChannelUtils.tsx";

let error;
let metroImportAll;
const require = arg1;
({ ChannelTypes: error, DEFAULT_ROLE_COLOR: metroImportAll } = ME);
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx");

export const transformSearchableSelectOptions = function transformSearchableSelectOptions(initialSnowflakeSelectOptions, guildId) {
  const _require = guildId;
  const guild2 = guild.getGuild(guildId);
  const mapped = initialSnowflakeSelectOptions.map((type) => {
    let customIconSrc;
    let unicodeEmoji;
    type = type.type;
    if (guildId(outer1_2[5]).SelectOptionType.USER === type) {
      const user = outer1_6.getUser(type.value);
      let tmp34 = type;
      if (null != user) {
        let obj = {};
        const merged = Object.assign(type);
        let tmpResult = tmp(tmp2[7]);
        obj.iconSrc = tmpResult.ensureAvatarSource(user.getAvatarSource(guildId, false)).uri;
        tmp34 = obj;
      }
      return tmp34;
    } else if (tmp(tmp2[5]).SelectOptionType.ROLE === type) {
      let role = null;
      if (null != callback) {
        role = outer1_4.getRole(tmp14.id, type.value);
      }
      let tmp18 = type;
      if (null != role) {
        tmp18 = type;
        if (null != tmp14) {
          tmpResult = tmp(tmp2[8]);
          let roleIconData = null;
          if (tmpResult.canGuildUseRoleIcons(tmp14, role)) {
            roleIconData = tmp(tmp2[8]).getRoleIconData(role);
            const tmpResult1 = tmp(tmp2[8]);
          }
          if (null == roleIconData) {
            obj = {};
            const merged1 = Object.assign(type);
            obj.iconSrc = tmp(tmp2[7]).ensureAvatarSource(callback(tmp2[9])).uri;
            if (null != role.colorString) {
              let hex2intResult = tmp(tmp2[10]).hex2int(role.colorString);
              const tmpResult3 = tmp(tmp2[10]);
            } else {
              hex2intResult = outer1_8;
            }
            obj.iconColor = 4278190080 | hex2intResult;
            tmp18 = obj;
            const tmpResult2 = tmp(tmp2[7]);
          } else {
            ({ customIconSrc, unicodeEmoji } = roleIconData);
            if (null != unicodeEmoji) {
              const obj1 = {};
              const merged2 = Object.assign(type);
              ({ id: obj8[0], name: obj8[1], animated: obj8[2], url: obj8[3], surrogates: obj8[4] } = unicodeEmoji);
              obj1.iconEmoji = { id: null, name: null, animated: null, src: null, surrogates: null };
              tmp18 = obj1;
              const obj2 = { id: null, name: null, animated: null, src: null, surrogates: null };
            } else if (null != customIconSrc) {
              const obj3 = {};
              const merged3 = Object.assign(type);
              obj3.iconSrc = customIconSrc;
              tmp18 = obj3;
            }
          }
        }
      }
      return tmp18;
    } else if (tmp(tmp2[5]).SelectOptionType.CHANNEL === type) {
      const channel = outer1_3.getChannel(type.value);
      if (null == channel) {
        return type;
      } else {
        const obj4 = {};
        const merged4 = Object.assign(type);
        let tmpResult4 = tmp(tmp2[7]);
        let hex2int = tmpResult4.ensureAvatarSource;
        if (channel.type === outer1_7.GUILD_CATEGORY) {
          let channelIconWithGuild = callback(tmp2[12]);
        } else {
          channelIconWithGuild = tmp(tmp2[13]).getChannelIconWithGuild(channel, tmp4);
          const tmpResult5 = tmp(tmp2[13]);
        }
        obj4.iconSrc = hex2int(channelIconWithGuild).uri;
        tmpResult4 = tmp(tmp2[10]);
        hex2int = tmpResult4.hex2int;
        obj4.iconColor = 4278190080 | hex2int(callback(tmp2[11]).unsafe_rawColors.PRIMARY_330);
      }
      tmp4 = callback;
    } else {
      return null;
    }
  });
  return mapped.filter(_isDiscordFrontendDevelopment.isNotNullish);
};
export const getChannelIconData = function getChannelIconData(channel, guild) {
  if (channel.type === constants.GUILD_CATEGORY) {
    let channelIconWithGuild = registerAsset;
  } else {
    channelIconWithGuild = getChannelIcon.getChannelIconWithGuild(channel, guild);
    const obj = getChannelIcon;
  }
  return channelIconWithGuild;
};