// === Module 8336: transformSearchableSelectOptions ===

// Module 8336 (transformSearchableSelectOptions)
import getChannelIcon from "getChannelIcon" /* 6832 */;
import registerAssetDefault from "registerAsset" /* 8338 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

require = fn;
({ ChannelTypes: error, DEFAULT_ROLE_COLOR: closure_8 } = ME);
const result = require("obj132").fileFinishedImporting("modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx");

export const transformSearchableSelectOptions = function transformSearchableSelectOptions(initialSnowflakeSelectOptions, guildId) {
  const _require = guildId;
  const guild2 = guild.getGuild(guildId);
  const mapped = initialSnowflakeSelectOptions.map((item, index) => {
    const type = item.type;
    if (guildId(dependencyMap[5]).SelectOptionType.USER === type) {
      const user = closure_1_6.getUser(item.value);
      let tmp34 = item;
      if (null != user) {
        let obj = {};
        const merged = Object.assign(item);
        let tmpResult = guildId(dependencyMap[7]);
        obj.iconSrc = tmpResult.ensureAvatarSource(user.getAvatarSource(guildId, false)).uri;
        tmp34 = obj;
      }
      return tmp34;
    } else if (guildId(dependencyMap[5]).SelectOptionType.ROLE === type) {
      let role = null;
      if (null != callback) {
        role = closure_1_4.getRole(callback.id, item.value);
      }
      let tmp18 = item;
      if (null != role) {
        tmp18 = item;
        if (null != callback) {
          tmpResult = guildId(dependencyMap[8]);
          let roleIconData = null;
          if (tmpResult.canGuildUseRoleIcons(callback, role)) {
            roleIconData = guildId(dependencyMap[8]).getRoleIconData(role);
            const tmpResult1 = guildId(dependencyMap[8]);
          }
          if (null == roleIconData) {
            obj = {};
            const merged1 = Object.assign(item);
            obj.iconSrc = guildId(dependencyMap[7]).ensureAvatarSource(callback(dependencyMap[9])).uri;
            if (null != role.colorString) {
              let hex2intResult = guildId(dependencyMap[10]).hex2int(role.colorString);
              const tmpResult3 = guildId(dependencyMap[10]);
            } else {
              hex2intResult = closure_1_8;
            }
            obj.iconColor = 4278190080 | hex2intResult;
            tmp18 = obj;
            const tmpResult2 = guildId(dependencyMap[7]);
          } else {
            ({ customIconSrc, unicodeEmoji } = roleIconData);
            if (null != unicodeEmoji) {
              obj1 = {};
              const merged2 = Object.assign(item);
              ({ id: obj8[0], name: obj8[1], animated: obj8[2], url: obj8[3], surrogates: obj8[4] } = unicodeEmoji);
              obj1.iconEmoji = { id: null, name: null, animated: null, src: null, surrogates: null };
              tmp18 = obj1;
            } else if (null != customIconSrc) {
              const obj3 = {};
              const merged3 = Object.assign(item);
              obj3.iconSrc = customIconSrc;
              tmp18 = obj3;
            }
          }
        }
      }
      return tmp18;
    } else if (guildId(dependencyMap[5]).SelectOptionType.CHANNEL === type) {
      const channel = closure_1_3.getChannel(item.value);
      if (null == channel) {
        return item;
      } else {
        const obj4 = {};
        const merged4 = Object.assign(item);
        let tmpResult4 = guildId(dependencyMap[7]);
        let hex2int = tmpResult4.ensureAvatarSource;
        if (channel.type === closure_1_7.GUILD_CATEGORY) {
          let channelIconWithGuild = callback(dependencyMap[12]);
        } else {
          channelIconWithGuild = guildId(dependencyMap[13]).getChannelIconWithGuild(channel, callback);
          const tmpResult5 = guildId(dependencyMap[13]);
        }
        obj4.iconSrc = hex2int(channelIconWithGuild).uri;
        tmpResult4 = guildId(dependencyMap[10]);
        hex2int = tmpResult4.hex2int;
        obj4.iconColor = 4278190080 | hex2int(callback(dependencyMap[11]).unsafe_rawColors.PRIMARY_330);
      }
    } else {
      return null;
    }
  });
  return mapped.filter(_require(1370).isNotNullish);
};
export const getChannelIconData = function getChannelIconData(channel, guild) {
  if (channel.type === constants.GUILD_CATEGORY) {
    let channelIconWithGuild = registerAssetDefault;
  } else {
    channelIconWithGuild = getChannelIcon.getChannelIconWithGuild(channel, guild);
  }
  return channelIconWithGuild;
};