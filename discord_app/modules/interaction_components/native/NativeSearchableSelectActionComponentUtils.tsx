// === Module 8122: transformSearchableSelectOptions ===

// Module 8122 (transformSearchableSelectOptions)
import getChannelIcon from "getChannelIcon" /* 5028 */;
import registerAssetDefault from "registerAsset" /* 8124 */;
import closure_3 from "ensureGuildLoaded" /* 1957 */;
import closure_4 from "createGuildRoleRecordFromRust" /* 2015 */;
import closure_5 from "createGuildRecordFromRust" /* 1979 */;
import closure_6 from "mergeGuildAvatar" /* 1371 */;
import ME from "ME" /* 1074 */;

require = arg1;
({ ChannelTypes: error, DEFAULT_ROLE_COLOR: closure_8 } = ME);
const result = require("set").fileFinishedImporting("modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx");

export const transformSearchableSelectOptions = function transformSearchableSelectOptions(initialSnowflakeSelectOptions, guildId) {
  const _require = guildId;
  const guild2 = guild.getGuild(guildId);
  const mapped = initialSnowflakeSelectOptions.map((type) => {
    type = type.type;
    if (guildId(closure_1_2[5]).SelectOptionType.USER === type) {
      const user = closure_1_6.getUser(type.value);
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
        role = closure_1_4.getRole(tmp14.id, type.value);
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
              hex2intResult = closure_1_8;
            }
            obj.iconColor = 4278190080 | hex2intResult;
            tmp18 = obj;
            const tmpResult2 = tmp(tmp2[7]);
          } else {
            ({ customIconSrc, unicodeEmoji } = roleIconData);
            if (null != unicodeEmoji) {
              obj1 = {};
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
      const channel = closure_1_3.getChannel(type.value);
      if (null == channel) {
        return type;
      } else {
        const obj4 = {};
        const merged4 = Object.assign(type);
        let tmpResult4 = tmp(tmp2[7]);
        let hex2int = tmpResult4.ensureAvatarSource;
        if (channel.type === closure_1_7.GUILD_CATEGORY) {
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
  return mapped.filter(_require(1369).isNotNullish);
};
export const getChannelIconData = function getChannelIconData(channel, guild) {
  if (channel.type === constants.GUILD_CATEGORY) {
    let channelIconWithGuild = registerAssetDefault;
  } else {
    channelIconWithGuild = getChannelIcon.getChannelIconWithGuild(channel, guild);
    const obj = getChannelIcon;
  }
  return channelIconWithGuild;
};