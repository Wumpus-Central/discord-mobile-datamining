// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx
import util from "../../../../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../../../../utils/PlatformUtils.tsx";
import AvatarUtilsDefault from "../../../../../../../utils/AvatarUtils.tsx";
import useChannelName from "../../../../../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../../../../../utils/native/ChannelUtils.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import _slicedToArray from "../../../../../../../../_runtime/metro/00032__.js";
import ChannelStore from "../../../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";

require = fn;
const Image = fn(17).Image;
const getGuildAcronym = fn(1975).getGuildAcronym;
const Permissions = fn(1074).Permissions;
const InviteTypes = fn(7736).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx",
);

export const createVoiceChannelLinkEmbed = function createVoiceChannelLinkEmbed(code, theme) {
  const tmp = _slicedToArray(code.split("/"), 2);
  const channel = ChannelStore.getChannel(tmp[1]);
  const guild = GuildStore.getGuild(tmp[0]);
  if (null != channel) {
    if (channel.isGuildVocal()) {
      if (null != guild) {
        if (PermissionStore.can(Permissions.VIEW_CHANNEL, channel)) {
          if (PermissionStore.can(Permissions.CONNECT, channel)) {
            ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
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
              const guildIconURL = AvatarUtilsDefault.getGuildIconURL(obj);
              const tmp4Result = AvatarUtilsDefault;
            } else if (null != guild) {
              const tmp8 = getGuildAcronym(guild);
            }
            obj = {};
            const merged = Object.assign(baseColors);
            const tmp6 = getEmbedThemeColorsDefault(theme);
            let str;
            if (obj5.isAndroid()) {
              str = "";
            }
            obj.headerText = str;
            obj.headerColor = colors.headerColor;
            obj5 = PlatformUtils;
            const intl = util.intl;
            const string = intl.string;
            const t = util.t;
            if (isGuildStageVoiceResult) {
              let stringResult = string(t["7vb2cc"]);
            } else {
              stringResult = string(t.gpqgah);
            }
            obj.acceptLabelText = stringResult;
            obj.onlineText = undefined;
            obj.memberText = undefined;
            let tmp16Result = utils_ChannelUtils;
            const assetSource = Image.resolveAssetSource(tmp16Result.getChannelIcon(channel));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.channelIcon = uri;
            tmp16Result = useChannelName;
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
            const intl2 = util.intl;
            const obj1 = { guildName: guild.name };
            obj.channelName = intl2.formatToPlainString(util.t["2wimj5"], obj1);
            obj.subtitle = "";
            obj.type = InviteTypes.GUILD;
            obj.inviteSplash = undefined;
            return obj;
          }
        }
      }
    }
  }
  return null;
};
