// === Module 13222: VoiceChannelLinkEmbed ===

// Module 13222 (VoiceChannelLinkEmbed)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7945 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Image = fn(17).Image;
const getGuildAcronym = fn(1975).getGuildAcronym;
const Permissions = fn(1074).Permissions;
const InviteTypes = fn(7736).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx");

export const createVoiceChannelLinkEmbed = function createVoiceChannelLinkEmbed(code, arg1) {
  const tmp = _slicedToArray(code.split("/"), 2);
  const channel = ChannelStore.getChannel(tmp[1]);
  const guild = GuildStore.getGuild(tmp[0]);
  if (null != channel) {
    if (channel.isGuildVocal()) {
      if (null != guild) {
        if (PermissionStore.can(Permissions.VIEW_CHANNEL, channel)) {
          if (obj9.can(tmp26.CONNECT, channel)) {
            ({ colors, baseColors } = getEmbedThemeColorsDefault(arg1));
            let icon;
            if (guild != null) {
              icon = guild.icon;
            }
            if (null != icon) {
              let id;
              if (guild != null) {
                id = guild.id;
              }
              let obj = { id, icon: null, canAnimate: true, size: 128 };
              let icon1;
              if (guild != null) {
                icon1 = guild.icon;
              }
              obj.icon = icon1;
              const guildIconURL = tmp4(1396).getGuildIconURL(obj);
              const tmp4Result = tmp4(1396);
            } else if (null != guild) {
              const tmp8 = getGuildAcronym(guild);
            }
            obj = {};
            const merged = Object.assign(baseColors);
            tmp4 = importDefault;
            const tmp6 = getEmbedThemeColorsDefault(arg1);
            let str;
            if (obj5.isAndroid()) {
              str = "";
            }
            obj.headerText = str;
            obj.headerColor = colors.headerColor;
            obj5 = PlatformUtils;
            const intl = tmp16(1114).intl;
            const string = intl.string;
            const t = tmp16(1114).t;
            if (isGuildStageVoiceResult) {
              let stringResult = string(t["7vb2cc"]);
            } else {
              stringResult = string(t.gpqgah);
            }
            obj.acceptLabelText = stringResult;
            obj.onlineText = undefined;
            obj.memberText = undefined;
            let tmp16Result = tmp16(5028);
            const assetSource = Image.resolveAssetSource(tmp16Result.getChannelIcon(channel));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.channelIcon = uri;
            tmp16Result = tmp16(4713);
            obj.titleText = tmp16Result.computeChannelName(channel, UserStore, RelationshipStore);
            obj.titleColor = colors.titleColor;
            let tmp24;
            if (null != guildIconURL) {
              tmp24 = guildIconURL;
            }
            obj.thumbnailUrl = tmp24;
            obj.thumbnailText = tmp8;
            obj.subtitleColor = undefined;
            obj.acceptLabelBackgroundColor = colors.acceptLabelGreenBackgroundColor;
            obj.acceptLabelBorderColor = undefined;
            obj.acceptLabelColor = colors.acceptLabelGreenColor;
            obj.embedCanBeTapped = true;
            obj.canBeAccepted = true;
            const intl2 = tmp16(1114).intl;
            const obj1 = { guildName: guild.name };
            obj.channelName = intl2.formatToPlainString(util.t["2wimj5"], obj1);
            obj.subtitle = "";
            obj.type = InviteTypes.GUILD;
            obj.inviteSplash = undefined;
            return obj;
          }
        }
        obj9 = PermissionStore;
        tmp26 = Permissions;
      }
    }
  }
  return null;
};