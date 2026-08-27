// === Module 12801: createVoiceChannelLinkEmbed ===

// Module 12801 (createVoiceChannelLinkEmbed)
import set from "set" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7787 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { getGuildAcronym } from "GuildNSFWContentLevel" /* 1434 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "createGuildRecordFromRust" /* 1910 */;
import closure_8 from "getUncachedChannelPermissions" /* 4089 */;
import closure_9 from "markAllUserIdListsStale" /* 4098 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import { Permissions } from "ME" /* 676 */;
import { InviteTypes } from "InviteSendStates" /* 7414 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx");

export const createVoiceChannelLinkEmbed = function createVoiceChannelLinkEmbed(code, closure_2) {
  const tmp = callback(code.split("/"), 2);
  channel = channel.getChannel(tmp[1]);
  guild = guild.getGuild(tmp[0]);
  if (null != channel) {
    if (channel.isGuildVocal()) {
      if (null != guild) {
        if (closure_8.can(Permissions.VIEW_CHANNEL, channel)) {
          if (obj9.can(tmp26.CONNECT, channel)) {
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
              const guildIconURL = tmp4(1435).getGuildIconURL(obj);
              const tmp4Result = tmp4(1435);
            } else if (null != guild) {
              const tmp8 = getGuildAcronym(guild);
            }
            obj = {};
            const merged = Object.assign(baseColors);
            tmp4 = importDefault;
            const tmp6 = getEmbedThemeColorsDefault(closure_2);
            let str;
            if (obj5.isAndroid()) {
              str = "";
            }
            obj.headerText = str;
            obj.headerColor = colors.headerColor;
            obj5 = set;
            const intl = tmp16(1236).intl;
            const string = intl.string;
            const t = tmp16(1236).t;
            if (isGuildStageVoiceResult) {
              let stringResult = string(t["7vb2cc"]);
            } else {
              stringResult = string(t.gpqgah);
            }
            obj.acceptLabelText = stringResult;
            obj.onlineText = undefined;
            obj.memberText = undefined;
            let tmp16Result = tmp16(4933);
            const assetSource = Image.resolveAssetSource(tmp16Result.getChannelIcon(channel));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj.channelIcon = uri;
            tmp16Result = tmp16(4639);
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
            const intl2 = tmp16(1236).intl;
            obj1 = { guildName: null };
            obj1[0] = guild.name;
            obj.channelName = intl2.formatToPlainString(getSystemLocale.t["2wimj5"], obj1);
            obj.subtitle = "";
            obj.type = InviteTypes.GUILD;
            obj.inviteSplash = undefined;
            return obj;
          }
        }
        obj9 = closure_8;
        tmp26 = Permissions;
      }
    }
  }
  return null;
};