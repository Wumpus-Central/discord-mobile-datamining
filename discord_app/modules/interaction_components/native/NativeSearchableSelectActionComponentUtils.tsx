// === Module 8122: NativeSearchableSelectActionComponentUtils ===

// Module 8122 (NativeSearchableSelectActionComponentUtils)
import nativeDefault from "native" /* 576 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 4792 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5028 */;
import _modDef8123 from "module_8123" /* 8123 */;
import _modDef8124 from "module_8124" /* 8124 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Constants = fn(1074);
({ ChannelTypes: closure_7, DEFAULT_ROLE_COLOR: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx");

export const transformSearchableSelectOptions = function transformSearchableSelectOptions(initialSnowflakeSelectOptions, guildId) {
  _require = guildId;
  const guild = GuildStore.getGuild(guildId);
  const mapped = initialSnowflakeSelectOptions.map((type) => {
    type = type.type;
    if (InteractionComponentTypes.SelectOptionType.USER === type) {
      const user = UserStore.getUser(type.value);
      let tmp34 = type;
      if (null != user) {
        let obj = {};
        const merged = Object.assign(type);
        let tmpResult = tmp(1399);
        obj.iconSrc = tmpResult.ensureAvatarSource(user.getAvatarSource(closure_0, false)).uri;
        tmp34 = obj;
      }
      return tmp34;
    } else if (tmp(4792).SelectOptionType.ROLE === type) {
      let role = null;
      if (null != closure_1) {
        role = GuildRoleStore.getRole(tmp14.id, type.value);
      }
      let tmp18 = type;
      if (null != role) {
        tmp18 = type;
        if (null != tmp14) {
          tmpResult = tmp(7187);
          let roleIconData = null;
          if (tmpResult.canGuildUseRoleIcons(tmp14, role)) {
            roleIconData = tmp(7187).getRoleIconData(role);
            const tmpResult1 = tmp(7187);
          }
          if (null == roleIconData) {
            obj = {};
            const merged1 = Object.assign(type);
            obj.iconSrc = tmp(1399).ensureAvatarSource(_modDef8123).uri;
            if (null != role.colorString) {
              let hex2intResult = tmp(1091).hex2int(role.colorString);
              const tmpResult3 = tmp(1091);
            } else {
              hex2intResult = React6;
            }
            obj.iconColor = 4278190080 | hex2intResult;
            tmp18 = obj;
            const tmpResult2 = tmp(1399);
          } else {
            ({ customIconSrc, unicodeEmoji } = roleIconData);
            if (null != unicodeEmoji) {
              const obj1 = {};
              const merged2 = Object.assign(type);
              ({ id: obj8.id, name: obj8.name, animated: obj8.animated, url: obj8.src, surrogates: obj8.surrogates } = unicodeEmoji);
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
    } else if (tmp(4792).SelectOptionType.CHANNEL === type) {
      const channel = ChannelStore.getChannel(type.value);
      if (null == channel) {
        return type;
      } else {
        const obj4 = {};
        const merged4 = Object.assign(type);
        let tmpResult4 = tmp(1399);
        let hex2int = tmpResult4.ensureAvatarSource;
        if (channel.type === constants.GUILD_CATEGORY) {
          let channelIconWithGuild = _modDef8124;
        } else {
          channelIconWithGuild = tmp(5028).getChannelIconWithGuild(channel, tmp4);
          const tmpResult5 = tmp(5028);
        }
        obj4.iconSrc = hex2int(channelIconWithGuild).uri;
        tmpResult4 = tmp(1091);
        hex2int = tmpResult4.hex2int;
        obj4.iconColor = 4278190080 | hex2int(nativeDefault.unsafe_rawColors.PRIMARY_330);
      }
      tmp4 = closure_1;
    } else {
      return null;
    }
  });
  return mapped.filter(require("GlobalUtils").isNotNullish);
};
export const getChannelIconData = function getChannelIconData(channel, guild) {
  if (channel.type === constants.GUILD_CATEGORY) {
    let channelIconWithGuild = _modDef8124;
  } else {
    channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(channel, guild);
  }
  return channelIconWithGuild;
};