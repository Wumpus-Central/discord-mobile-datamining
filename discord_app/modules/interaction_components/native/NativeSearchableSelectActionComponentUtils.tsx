// === Module 8391: NativeSearchableSelectActionComponentUtils ===

// Module 8391 (NativeSearchableSelectActionComponentUtils)
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1400 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 4987 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5239 */;
import RoleIconUtils from "RoleIconUtils" /* 7432 */;
import _modDef8392 from "module_8392" /* 8392 */;
import _modDef8393 from "module_8393" /* 8393 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildRoleStore from "GuildRoleStore" /* 2099 */;
import GuildStore from "GuildStore" /* 2063 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

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
        const obj = {};
        const merged = Object.assign(type);
        obj.iconSrc = utils_AvatarUtils.ensureAvatarSource(user.getAvatarSource(closure_0, false)).uri;
        tmp34 = obj;
        const tmpResult = utils_AvatarUtils;
      }
      return tmp34;
    } else if (InteractionComponentTypes.SelectOptionType.ROLE === type) {
      let role = null;
      if (null != id) {
        role = GuildRoleStore.getRole(id.id, type.value);
      }
      let tmp18 = type;
      if (null != role) {
        tmp18 = type;
        if (null != id) {
          let roleIconData = null;
          if (tmpResult7.canGuildUseRoleIcons(id, role)) {
            roleIconData = RoleIconUtils.getRoleIconData(role);
            const tmpResult8 = RoleIconUtils;
          }
          if (null == roleIconData) {
            const obj2 = {};
            const merged1 = Object.assign(type);
            obj2.iconSrc = utils_AvatarUtils.ensureAvatarSource(_modDef8392).uri;
            if (null != role.colorString) {
              let hex2intResult = utils_ColorUtils.hex2int(role.colorString);
              const tmpResult10 = utils_ColorUtils;
            } else {
              hex2intResult = React6;
            }
            obj2.iconColor = 4278190080 | hex2intResult;
            tmp18 = obj2;
            const tmpResult9 = utils_AvatarUtils;
          } else {
            ({ customIconSrc, unicodeEmoji } = roleIconData);
            if (null != unicodeEmoji) {
              const obj3 = {};
              const merged2 = Object.assign(type);
              ({ id: obj8.id, name: obj8.name, animated: obj8.animated, url: obj8.src, surrogates: obj8.surrogates } = unicodeEmoji);
              obj3.iconEmoji = { id: null, name: null, animated: null, src: null, surrogates: null };
              tmp18 = obj3;
              const obj4 = { id: null, name: null, animated: null, src: null, surrogates: null };
            } else if (null != customIconSrc) {
              const obj5 = {};
              const merged3 = Object.assign(type);
              obj5.iconSrc = customIconSrc;
              tmp18 = obj5;
            }
          }
          tmpResult7 = RoleIconUtils;
        }
      }
      return tmp18;
    } else if (InteractionComponentTypes.SelectOptionType.CHANNEL === type) {
      const channel = ChannelStore.getChannel(type.value);
      if (null == channel) {
        return type;
      } else {
        const obj6 = {};
        const merged4 = Object.assign(type);
        let tmpResult11 = utils_AvatarUtils;
        let hex2int = tmpResult11.ensureAvatarSource;
        if (channel.type === constants.GUILD_CATEGORY) {
          let channelIconWithGuild = _modDef8393;
        } else {
          channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(channel, id);
          const tmpResult12 = utils_ChannelUtils;
        }
        obj6.iconSrc = hex2int(channelIconWithGuild).uri;
        tmpResult11 = utils_ColorUtils;
        hex2int = tmpResult11.hex2int;
        obj6.iconColor = 4278190080 | hex2int(nativeDefault.unsafe_rawColors.PRIMARY_330);
      }
    } else {
      return null;
    }
  });
  return mapped.filter(require("GlobalUtils").isNotNullish);
};
export const getChannelIconData = function getChannelIconData(channel, guild) {
  if (channel.type === constants.GUILD_CATEGORY) {
    let channelIconWithGuild = _modDef8393;
  } else {
    channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(channel, guild);
  }
  return channelIconWithGuild;
};