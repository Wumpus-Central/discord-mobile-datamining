// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx
import react_native from "../../../../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../../../../Constants.tsx";
import intl3 from "../../../../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../../../../utils/PlatformUtils.tsx";
import AvatarUtilsDefault from "../../../../../../../utils/AvatarUtils.tsx";
import GuildRecord from "../../../../../../../records/GuildRecord.tsx";
import useChannelName from "../../../../../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../../../../../utils/native/ChannelUtils.tsx";
import Constants2 from "../../../../../../instant_invite/Constants.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import _slicedToArray from "../../../../../../../../_runtime/metro/00032__slicedToArray.js";
import ChannelStore from "../../../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const Image = react_native.Image;
const getGuildAcronym = GuildRecord.getGuildAcronym;
const Permissions = Constants.Permissions;
const InviteTypes = Constants2.InviteTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx",
);

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
            const obj2 = {
              headerText: str,
              headerColor: colors.headerColor,
              acceptLabelText: stringResult,
              onlineText: undefined,
              memberText: undefined,
              channelIcon: uri,
              titleText: tmp18Result2.computeChannelName(channel, UserStore, RelationshipStore),
              titleColor: colors.titleColor,
              thumbnailUrl: tmp26,
              thumbnailText: tmp9,
              subtitleColor: undefined,
              acceptLabelBackgroundColor: colors.acceptLabelGreenBackgroundColor,
              acceptLabelBorderColor: undefined,
              acceptLabelColor: colors.acceptLabelGreenColor,
              embedCanBeTapped: true,
              canBeAccepted: true,
              channelName: intl2.formatToPlainString(intl3.t["2wimj5"], obj3),
              subtitle: "",
              type: InviteTypes.GUILD,
              inviteSplash: undefined,
            };
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
