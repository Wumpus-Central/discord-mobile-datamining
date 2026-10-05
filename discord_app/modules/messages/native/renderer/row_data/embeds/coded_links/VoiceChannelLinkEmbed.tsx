// === Module 13061: VoiceChannelLinkEmbed ===

// Module 13061 (VoiceChannelLinkEmbed)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import useChannelName from "useChannelName" /* 5043 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import Constants2 from "Constants" /* 7226 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7604 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const getGuildAcronym = GuildRecord.getGuildAcronym;
const Permissions = Constants.Permissions;
const InviteTypes = Constants2.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx");

export const createVoiceChannelLinkEmbed = function createVoiceChannelLinkEmbed(code, theme) {
  let baseColors;
  let colors;
  let icon1;
  let intl2;
  let str;
  let stringResult;
  let tmp18Result2;
  let tmp26;
  let uri;
  const tmp = _slicedToArray(code.split("/"), 2);
  const first = tmp[0];
  const channel = ChannelStore.getChannel(tmp[1]);
  const guild = GuildStore.getGuild(first);
  if (null != channel) {
    if (channel.isGuildVocal()) {
      if (null != guild) {
        if (PermissionStore.can(Permissions.VIEW_CHANNEL, channel)) {
          if (PermissionStore.can(Permissions.CONNECT, channel)) {
            let guildIconURL;
            let tmp9;
            ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
            let icon;
            getEmbedThemeColorsDefault(theme);
            if (guild != null) {
              icon = guild.icon;
            }
            if (null != icon) {
              let id;
              const getGuildIconURL = AvatarUtilsDefault.getGuildIconURL;
              AvatarUtilsDefault;
              if (guild != null) {
                id = guild.id;
              }
              const obj = { id, icon: icon1, canAnimate: true, size: 128 };
              icon1 = undefined;
              if (guild != null) {
                icon1 = guild.icon;
              }
              guildIconURL = getGuildIconURL(obj);
            } else if (null != guild) {
              tmp9 = getGuildAcronym(guild);
            }
            const obj2 = { headerText: str, headerColor: colors.headerColor, acceptLabelText: stringResult, onlineText: undefined, memberText: undefined, channelIcon: uri, titleText: tmp18Result2.computeChannelName(channel, UserStore, RelationshipStore), titleColor: colors.titleColor, thumbnailUrl: tmp26, thumbnailText: tmp9, subtitleColor: undefined, acceptLabelBackgroundColor: colors.acceptLabelGreenBackgroundColor, acceptLabelBorderColor: undefined, acceptLabelColor: colors.acceptLabelGreenColor, embedCanBeTapped: true, canBeAccepted: true, channelName: intl2.formatToPlainString(intl3.t["2wimj5"], obj3), subtitle: "", type: InviteTypes.GUILD, inviteSplash: undefined };
            const merged = Object.assign(baseColors);
            str = undefined;
            const obj4 = PlatformUtils;
            if (obj4.isAndroid()) {
              str = "";
            }
            const isGuildStageVoiceResult = channel.isGuildStageVoice();
            const intl = intl3.intl;
            const string = intl.string;
            const t = intl3.t;
            if (isGuildStageVoiceResult) {
              stringResult = string(t["7vb2cc"]);
            } else {
              stringResult = string(t.gpqgah);
            }
            const resolveAssetSource = Image.resolveAssetSource;
            const tmp18Result = utils_ChannelUtils;
            const assetSource = resolveAssetSource(tmp18Result.getChannelIcon(channel));
            uri = undefined;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            tmp26 = undefined;
            tmp18Result2 = useChannelName;
            if (null != guildIconURL) {
              tmp26 = guildIconURL;
            }
            intl2 = intl3.intl;
            return obj2;
          }
        }
      }
    }
  }
  return null;
};