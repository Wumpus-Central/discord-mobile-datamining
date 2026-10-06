// === Module 7816: NativeSearchableSelectActionComponentUtils ===

// Module 7816 (NativeSearchableSelectActionComponentUtils)
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1405 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5129 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5819 */;
import RoleIconUtils from "RoleIconUtils" /* 6693 */;
import AssetRegistryDefault from "AssetRegistry" /* 7817 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7818 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, type;

let metroImportAll;
let metroImportDefault;
({ ChannelTypes: metroImportDefault, DEFAULT_ROLE_COLOR: metroImportAll } = Constants);
const result = size.fileFinishedImporting("modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx");

export const transformSearchableSelectOptions = function transformSearchableSelectOptions(initialSnowflakeSelectOptions, guildId) {
  let id;
  _require = guildId;
  const guild = GuildStore.getGuild(guildId);
  const mapped = initialSnowflakeSelectOptions.map((type) => {
    let channelIconWithGuild;
    let customIconSrc;
    let ensureAvatarSource;
    let hex2intResult;
    let obj4;
    let tmpResult;
    let tmpResult10;
    let tmpResult14;
    let unicodeEmoji;
    type = type.type;
    if (InteractionComponentTypes.SelectOptionType.USER === type) {
      const user = UserStore.getUser(type.value);
      let tmp32 = type;
      if (null != user) {
        const obj = { iconSrc: tmpResult.ensureAvatarSource(user.getAvatarSource(guildId, false)).uri };
        const merged = Object.assign(type);
        tmp32 = obj;
        tmpResult = utils_AvatarUtils;
      }
      return tmp32;
    } else if (InteractionComponentTypes.SelectOptionType.ROLE === type) {
      let role = null;
      if (null != id) {
        role = GuildRoleStore.getRole(id.id, type.value);
      }
      let tmp16 = type;
      if (null != role) {
        tmp16 = type;
        if (null != id) {
          let roleIconData = null;
          const tmpResult8 = RoleIconUtils;
          if (tmpResult8.canGuildUseRoleIcons(id, role)) {
            const tmpResult9 = RoleIconUtils;
            roleIconData = tmpResult9.getRoleIconData(role);
          }
          if (null == roleIconData) {
            const obj2 = { iconSrc: tmpResult10.ensureAvatarSource(AssetRegistryDefault).uri, iconColor: 4278190080 | hex2intResult };
            const merged1 = Object.assign(type);
            tmpResult10 = utils_AvatarUtils;
            if (null != role.colorString) {
              const tmpResult11 = utils_ColorUtils;
              hex2intResult = tmpResult11.hex2int(role.colorString);
            } else {
              hex2intResult = metroImportAll;
            }
            tmp16 = obj2;
          } else {
            ({ customIconSrc, unicodeEmoji } = roleIconData);
            if (null != unicodeEmoji) {
              const obj3 = { iconEmoji: obj4 };
              const merged2 = Object.assign(type);
              obj4 = { id: null, name: null, animated: null, src: null, surrogates: null };
              ({ id: obj9.id, name: obj9.name, animated: obj9.animated, url: obj9.src, surrogates: obj9.surrogates } = unicodeEmoji);
              tmp16 = obj3;
            } else if (null != customIconSrc) {
              const obj5 = { iconSrc: customIconSrc };
              const merged3 = Object.assign(type);
              tmp16 = obj5;
            }
          }
        }
      }
      return tmp16;
    } else if (InteractionComponentTypes.SelectOptionType.CHANNEL === type) {
      const channel = ChannelStore.getChannel(type.value);
      let tmp8 = type;
      if (null != channel) {
        const obj6 = { iconSrc: ensureAvatarSource(channelIconWithGuild).uri, iconColor: 4278190080 | tmpResult14.hex2int(nativeDefault.unsafe_rawColors.PRIMARY_330) };
        const merged4 = Object.assign(type);
        ensureAvatarSource = utils_AvatarUtils.ensureAvatarSource;
        utils_AvatarUtils;
        if (channel.type === metroImportDefault.GUILD_CATEGORY) {
          channelIconWithGuild = AssetRegistryDefault2;
        } else {
          const tmpResult13 = utils_ChannelUtils;
          channelIconWithGuild = tmpResult13.getChannelIconWithGuild(channel, id);
        }
        tmp8 = obj6;
        tmpResult14 = utils_ColorUtils;
      }
      return tmp8;
    } else {
      return null;
    }
  });
  return mapped.filter(require("GlobalUtils").isNotNullish);
};
export const getChannelIconData = function getChannelIconData(channel, guild) {
  let channelIconWithGuild;
  if (channel.type === metroImportDefault.GUILD_CATEGORY) {
    channelIconWithGuild = AssetRegistryDefault2;
  } else {
    const obj = utils_ChannelUtils;
    channelIconWithGuild = obj.getChannelIconWithGuild(channel, guild);
  }
  return channelIconWithGuild;
};