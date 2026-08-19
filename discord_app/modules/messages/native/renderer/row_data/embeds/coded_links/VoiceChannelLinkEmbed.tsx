// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx
import obj132 from "../../../../../../../utils/PlatformUtils.tsx";
import getSystemLocale from "../../../../../../../intl/index.native.tsx";
import getAvatarURLDefault from "../../../../../../../utils/AvatarUtils.tsx";
import computeChannelName from "../../../../../../channel/useChannelName.tsx";
import getChannelIcon from "../../../../../../../utils/native/ChannelUtils.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import _slicedToArray from "../../../../../../../../_runtime/metro/00032__slicedToArray.js";
import { Image } from "../../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { getGuildAcronym } from "../../../../../../../records/GuildRecord.tsx";
import ensureGuildLoaded from "../../../../../../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../../../../../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../../../../../../stores/PermissionStore.tsx";
import markAllUserIdListsStale from "../../../../../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../../../../../stores/UserStore.tsx";
import { Permissions } from "../../../../../../../Constants.tsx";
import { InviteTypes } from "../../../../../../instant_invite/Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx");

export const createVoiceChannelLinkEmbed = function createVoiceChannelLinkEmbed(code, closure_2) {
  const tmp = callback(code.split("/"), 2);
  channel = channel.getChannel(tmp[1]);
  guild = guild.getGuild(tmp[0]);
  if (null != channel) {
    if (channel.isGuildVocal()) {
      if (null != guild) {
        if (closure_8.can(Permissions.VIEW_CHANNEL, channel)) {
          if (closure_8.can(Permissions.CONNECT, channel)) {
            ({ colors, baseColors } = getEmbedThemeColorsDefault(closure_2));
            let icon;
            if (guild != null) {
              icon = guild.icon;
            }
            if (null != icon) {
              let id;
              if (guild != null) {
                id = guild.id;
              }
              let obj = { id: null, icon: null, canAnimate: true, size: 128 };
              obj[0] = id;
              let icon1;
              if (guild != null) {
                icon1 = guild.icon;
              }
              obj[1] = icon1;
              const guildIconURL = getAvatarURLDefault.getGuildIconURL(obj);
              const tmp4Result = getAvatarURLDefault;
            } else if (null != guild) {
              const tmp8 = getGuildAcronym(guild);
            }
            obj = {};
            const merged = Object.assign(baseColors);
            const tmp6 = getEmbedThemeColorsDefault(closure_2);
            let str;
            if (obj5.isAndroid()) {
              str = "";
            }
            obj.headerText = str;
            obj.headerColor = colors.headerColor;
            obj5 = obj132;
            const intl = getSystemLocale.intl;
            const string = intl.string;
            const t = getSystemLocale.t;
            if (isGuildStageVoiceResult) {
              let stringResult = string(t["7vb2cc"]);
            } else {
              stringResult = string(t.gpqgah);
            }
            obj.acceptLabelText = stringResult;
            obj.onlineText = undefined;
            obj.memberText = undefined;
            let tmp16Result = getChannelIcon;
            const assetSource = Image.resolveAssetSource(tmp16Result.getChannelIcon(channel));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.channelIcon = uri;
            tmp16Result = computeChannelName;
            obj.titleText = tmp16Result.computeChannelName(channel, closure_10, closure_9);
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
            const intl2 = getSystemLocale.intl;
            obj1 = { guildName: null };
            obj1[0] = guild.name;
            obj.channelName = intl2.formatToPlainString(getSystemLocale.t["2wimj5"], obj1);
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