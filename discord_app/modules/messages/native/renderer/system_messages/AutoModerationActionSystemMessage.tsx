// discord_app/modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx
import get_ActivityIndicator from "DATE_CONFIG";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Permissions } from "ME";
import apply from "useNullableMessageAuthor";
import { t } from "../../../../../../_runtime/03943_t.js";
import { registerAsset } from "../../../../../../_runtime/07861_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/08192_registerAsset.js";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { AccessibilityAnnouncer } from "../../../../../design/shared.tsx";
import { getDecisionOutcomeFromMessage } from "../../../../guild_automod/AutomodMessageUtils.tsx";
import { createCommonMessage } from "createCommonMessage.tsx";

let c3;
let c4;
({ processColor: c3, Image: c4 } = get_ActivityIndicator);
let closure_11 = apply.memoize((arg0) => {
  let obj = AccessibilityAnnouncer;
  const unsafe_rawColors = Themes.unsafe_rawColors;
  obj = { defaultUsernameColor: null };
  const isThemeDarkResult = obj.isThemeDark(arg0);
  const tmp = require;
  const tmp4 = obj.isThemeDark(arg0) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_630;
  obj[0] = tmp(8111).processColorOrThrow(tmp4);
  return obj;
});
let result = require("trackCommunicationDisabled").fileFinishedImporting("modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx");

export const createAutoModerationActionSystemMessage = function createAutoModerationActionSystemMessage(message) {
  let colorString;
  let content;
  let embedChannel;
  let embedChannelId;
  let flaggedMessageId;
  let guildMemberAvatar;
  let iconRoleId;
  let interactionUserId;
  let keyword;
  let quarantineType;
  let roleStyle;
  let ruleName;
  let theme;
  ({ message, theme, roleStyle } = message);
  const defaultUsernameColor = callback2(theme).defaultUsernameColor;
  const tmp = require;
  let obj = getDecisionOutcomeFromMessage;
  if (obj.isAutomodMessageRecord(message)) {
    let tmpResult = tmp(7037);
    const result = tmpResult.extractAutomodMessageFields(message);
    ({ keyword, embedChannel, flaggedMessageId, quarantineType } = result);
    ({ ruleName, content, embedChannelId, interactionUserId } = result);
    channel = channel.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    tmpResult = tmp(4595);
    const messageAuthor = tmpResult.getMessageAuthor(message);
    ({ guildMemberAvatar, colorString, iconRoleId } = messageAuthor);
    const author = message.author;
    const canResult = getUncachedChannelPermissions.can(Permissions.VIEW_CHANNEL, embedChannel);
    let str = tmp(7037).getActionHeaderTextMobile(message, author, interactionUserId);
    const intl = tmp(1236).intl;
    const stringResult = intl.string(tmp(1236).t["94JbM3"]);
    const tmpResult1 = tmp(7037);
    const result1 = tmp(7037).isAutomodNotification(message);
    let tmp14 = null;
    let tmp15 = stringResult;
    if (result1) {
      let resolvedReason = tmp(7037).extractAutomodNotificationFields(message);
      const notificationType = resolvedReason.notificationType;
      if (tmp(7037).IS_BACKWARDS_COMPAT_RAID_TYPE !== notificationType) {
        if (tmp(8164).AutomodNotificationEmbedTypeKeys.RAID !== notificationType) {
          if (tmp(8164).AutomodNotificationEmbedTypeKeys.MENTION_RAID === notificationType) {
            let fromNowResult;
            if (null != resolvedReason.raidDatetime) {
              fromNowResult = t(resolvedReason.raidDatetime).fromNow();
              const obj17 = t(resolvedReason.raidDatetime);
            }
            obj = { subtitleLeft: null, header: null, headerColor: null, headerIconURL: null, headerIconColor: null, body: null, shouldShowActions: false };
            obj[0] = fromNowResult;
            const intl5 = tmp(1236).intl;
            obj[1] = intl5.string(tmp(1236).t.C2uIXE);
            const internal3 = Themes.internal;
            obj[2] = tmp(8111).processColorOrThrow(internal3.resolveSemanticColor(theme, Themes.colors.TEXT_FEEDBACK_CRITICAL));
            const tmpResult4 = tmp(8111);
            obj[3] = closure_4.resolveAssetSource(tmp(1435).makeSource(registerAsset)).uri;
            const tmpResult5 = tmp(1435);
            const internal4 = Themes.internal;
            obj[4] = tmp(8111).processColorOrThrow(internal4.resolveSemanticColor(theme, Themes.colors.TEXT_FEEDBACK_CRITICAL));
            const intl6 = tmp(1236).intl;
            obj[5] = intl6.string(tmp(1236).t.SWIWEV);
            str = "";
            tmp14 = obj;
            tmp15 = stringResult;
            const tmpResult6 = tmp(8111);
          } else if (tmp(8164).AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === notificationType) {
            const userIdOfAutomodAction = tmp(7037).getUserIdOfAutomodAction(message);
            user = user.getUser(userIdOfAutomodAction);
            let member = null;
            if (null != userIdOfAutomodAction) {
              member = null;
              if (null != guildId) {
                member = store.getMember(guildId, userIdOfAutomodAction);
              }
            }
            let nick;
            if (member != null) {
              nick = member.nick;
            }
            if (nick == null) {
              let username;
              if (user != null) {
                username = user.username;
              }
              nick = username;
            }
            const tmpResult7 = tmp(7037);
            let avatar;
            if (member != null) {
              avatar = member.avatar;
            }
            if (null != avatar) {
              if (null != guildId) {
                obj = { userId: null, avatar: null, guildId: null };
                obj[0] = author.id;
                let avatar1;
                if (member != null) {
                  avatar1 = member.avatar;
                }
                obj[1] = avatar1;
                obj[2] = guildId;
                let guildMemberAvatarSource = tmp(1435).getGuildMemberAvatarSource(obj, author);
                const tmpResult9 = tmp(1435);
              }
              const obj1 = { header: null, headerColor: null, headerIconURL: null, headerIconColor: null, body: null, shouldShowActions: false, subtitleRight: null, subtitleLeft: null, enabledByAvatarURL: null, enabledByUsername: null, enabledByColor: null };
              const intl2 = tmp(1236).intl;
              obj1[0] = intl2.string(tmp(1236).t.lVLiFp);
              const ensureAvatarSourceResult = tmpResult8.ensureAvatarSource(guildMemberAvatarSource);
              const internal = Themes.internal;
              obj1[1] = tmp(8111).processColorOrThrow(internal.resolveSemanticColor(theme, Themes.colors.TEXT_FEEDBACK_POSITIVE));
              const tmpResult10 = tmp(8111);
              obj1[2] = closure_4.resolveAssetSource(tmp(1435).makeSource(registerAsset)).uri;
              const tmpResult11 = tmp(1435);
              const internal2 = Themes.internal;
              obj1[3] = tmp(8111).processColorOrThrow(internal2.resolveSemanticColor(theme, Themes.colors.TEXT_FEEDBACK_POSITIVE));
              const intl3 = tmp(1236).intl;
              obj1[4] = intl3.string(tmp(1236).t["QV/8u5"]);
              const tmpResult12 = tmp(8111);
              obj1[6] = t(message.timestamp).fromNow();
              const intl4 = tmp(1236).intl;
              obj1[7] = intl4.string(tmp(1236).t.qlFrXW);
              obj1[8] = ensureAvatarSourceResult.uri;
              obj1[9] = nick;
              colorString = undefined;
              if (member != null) {
                colorString = member.colorString;
              }
              let tmp30;
              if (null != colorString) {
                tmp30 = callback(member.colorString);
              }
              obj1[10] = tmp30;
              str = "";
              tmp14 = obj1;
              tmp15 = stringResult;
              const obj16 = t(message.timestamp);
            }
            guildMemberAvatarSource = author.getAvatarSource(undefined, false, 16);
            tmpResult8 = tmp(1438);
          } else {
            const obj2 = { header: null, headerColor: null, headerIconURL: null, headerIconColor: null, body: null, shouldShowActions: false };
            const intl17 = tmp(1236).intl;
            obj2[0] = intl17.string(tmp(1236).t.VdZCcC);
            const internal7 = Themes.internal;
            obj2[1] = tmp(8111).processColorOrThrow(internal7.resolveSemanticColor(theme, Themes.colors.TEXT_SUBTLE));
            const tmpResult13 = tmp(8111);
            obj2[2] = closure_4.resolveAssetSource(tmp(1435).makeSource(registerAsset)).uri;
            const tmpResult14 = tmp(1435);
            const internal8 = Themes.internal;
            obj2[3] = tmp(8111).processColorOrThrow(internal8.resolveSemanticColor(theme, Themes.colors.TEXT_SUBTLE));
            const intl18 = tmp(1236).intl;
            obj2[4] = intl18.string(tmp(1236).t["NxHYX/"]);
            str = "";
            tmp14 = obj2;
            tmp15 = stringResult;
            const tmpResult15 = tmp(8111);
          }
        }
      }
      let fromNowResult1;
      if (null != resolvedReason.raidDatetime) {
        fromNowResult1 = t(resolvedReason.raidDatetime).fromNow();
        const obj22 = t(resolvedReason.raidDatetime);
      }
      let str2 = "";
      if (null != resolvedReason.raidDatetime) {
        const _Date = Date;
        const date = new Date(resolvedReason.raidDatetime);
        str2 = date.toLocaleString(tmp(1236).intl.currentLocale, tmp(8188).DATE_CONFIG);
      }
      const tmp42 = resolvedReason.raidType === tmp(8187).AutomodRaidAlertTypes.DM_RAID;
      const intl7 = tmp(1236).intl;
      const formatToPlainString = intl7.formatToPlainString;
      const t = tmp(1236).t;
      if (tmp42) {
        const obj3 = { dmsSent: null };
        obj3[0] = resolvedReason.dmsSent;
        let formatToPlainStringResult = formatToPlainString(t["5C8Mh3"], obj3);
      } else {
        const obj4 = { joinCount: null };
        obj4[0] = resolvedReason.joinAttempts;
        formatToPlainStringResult = formatToPlainString(t["4ylIiu"], obj4);
      }
      const obj5 = { subtitleLeft: null, severity: null, subtitleRight: null, startTime: null, header: null, headerColor: null, headerIconURL: null, headerIconColor: null, body: null, shouldShowActions: true };
      obj5[0] = formatToPlainStringResult;
      obj5[1] = formatToPlainStringResult;
      obj5[2] = fromNowResult1;
      obj5[3] = fromNowResult1;
      const intl8 = tmp(1236).intl;
      const string = intl8.string;
      const t2 = tmp(1236).t;
      if (tmp42) {
        let stringResult1 = string(t2["8+lHUb"]);
      } else {
        stringResult1 = string(t2.xMwcwV);
      }
      obj5[4] = stringResult1;
      const tmpResult3 = tmp(7037);
      const internal5 = Themes.internal;
      obj5[5] = tmp(8111).processColorOrThrow(internal5.resolveSemanticColor(theme, Themes.colors.TEXT_FEEDBACK_CRITICAL));
      let tmpResult18 = closure_4;
      let getRaidAlertResolveCTAText = closure_4.resolveAssetSource;
      let internal6 = tmp(1435);
      let intl9 = internal6.makeSource;
      obj5[6] = getRaidAlertResolveCTAText(intl9(importDefault(tmp42 ? 8191 : 7861))).uri;
      const tmpResult16 = tmp(8111);
      internal6 = tmp45(712).internal;
      obj5[7] = tmp(8111).processColorOrThrow(internal6.resolveSemanticColor(theme, Themes.colors.TEXT_FEEDBACK_CRITICAL));
      intl9 = tmp(1236).intl;
      const obj6 = { dateTime: null };
      obj6[0] = str2;
      obj5[8] = intl9.formatToPlainString(tmp(1236).t["4QIIZl"], obj6);
      const intl10 = tmp(1236).intl;
      intl10.string(tmp(1236).t.ufawcw);
      tmpResult18 = tmp(7037);
      getRaidAlertResolveCTAText = tmpResult18.getRaidAlertResolveCTAText;
      resolvedReason = resolvedReason.resolvedReason;
      const raidAlertResolveCTAText = getRaidAlertResolveCTAText(resolvedReason);
      const tmpResult17 = tmp(8111);
    }
    if (null == guildId) {
      let member1 = null;
      if (null != guildId) {
        member1 = store.getMember(guildId, author.id);
      }
      let roleIcon;
      if (null != iconRoleId) {
        if (null != guildId) {
          const obj7 = { guildId: null, roleId: null, size: 18 };
          obj7[0] = guildId;
          obj7[1] = iconRoleId;
          roleIcon = tmp(5813).getRoleIcon(obj7);
          const tmpResult19 = tmp(5813);
        }
      }
      const obj8 = {};
      const merged = Object.assign(createCommonMessage(message));
      obj8.roleIcon = roleIcon;
      obj8.authorId = author.id;
      const intl11 = tmp(1236).intl;
      obj8.username = intl11.string(tmp(1236).t.hG1StD);
      const tmp57 = importDefault;
      const tmpResult20 = tmp(1438);
      const tmpResult21 = tmp(1435);
      obj8.avatarURL = tmpResult20.ensureAvatarSource(tmpResult21.makeSource(tmp(1438).getAutomodAvatarURL())).uri;
      obj8.colorString = callback(colorString);
      const obj9 = { headerText: null, headerBadgeText: null, keywordDisplayText: null, message: null, notification: null, ruleDisplayText: null, reasonDisplayText: null, actionsIconURL: null, actionsText: null, feedbackText: null };
      obj9[0] = str;
      const intl12 = tmp(1236).intl;
      obj9[1] = intl12.string(tmp(1236).t["70CJbT"]);
      let str3 = "";
      if (null != keyword) {
        const intl13 = tmp(1236).intl;
        const obj10 = { keyword: null };
        obj10[0] = keyword;
        str3 = intl13.formatToPlainString(tmp(1236).t.SYIUTR, obj10);
      }
      obj9[2] = str3;
      if (flaggedMessageId == null) {
        flaggedMessageId = message.id;
      }
      const obj11 = { id: null, channelId: null, guildId: null, userId: null, channelName: null, username: null, usernameColor: null, roleColor: null, shouldShowRoleDot: null, colorString: null, avatarURL: null, content: null, communicationDisabled: null, timestamp: null };
      obj11[0] = flaggedMessageId;
      let id;
      if (embedChannel != null) {
        id = embedChannel.id;
      }
      if (id == null) {
        id = embedChannelId;
      }
      if (id == null) {
        id = message.channel_id;
      }
      obj11[1] = id;
      obj11[2] = guildId;
      obj11[3] = author.id;
      let channelName;
      if (canResult) {
        if (null == quarantineType) {
          if (null != embedChannel) {
            channelName = tmp(4535).computeChannelName(embedChannel, user, markAllUserIdListsStale);
            const tmpResult23 = tmp(4535);
          }
        }
      }
      obj11[4] = channelName;
      obj11[5] = messageAuthor.nick;
      let tmp66 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp60Result = tmp60(colorString);
        if (tmp60Result == null) {
          tmp60Result = defaultUsernameColor;
        }
        tmp66 = tmp60Result;
        const tmp67 = colorString;
      }
      obj11[6] = tmp66;
      obj11[7] = callback(colorString);
      obj11[8] = "dot" === roleStyle && null != colorString;
      tmp60Result = tmp60(colorString);
      if (tmp60Result == null) {
        tmp60Result = defaultUsernameColor;
      }
      obj11[9] = tmp60Result;
      obj11[10] = null;
      obj11[11] = content;
      const tmp61 = colorString;
      const tmp69 = colorString;
      const tmpResult22 = tmp(1438);
      obj11[12] = tmp(3978).isMemberCommunicationDisabled(member1);
      const tmpResult24 = tmp(3978);
      obj11[13] = tmp(4031).accessibilityLabelCalendarFormat(message.timestamp);
      obj9[3] = obj11;
      obj9[4] = tmp14;
      const intl14 = tmp(1236).intl;
      const obj12 = { ruleName: null };
      obj12[0] = ruleName;
      obj9[5] = intl14.formatToPlainString(tmp(1236).t.ZoOyKB, obj12);
      let formatToPlainStringResult1 = null;
      if (null != quarantineType) {
        const intl15 = tmp(1236).intl;
        const obj13 = { reason: null };
        obj13[0] = tmp(7037).getQuarantineReasonString(quarantineType);
        formatToPlainStringResult1 = intl15.formatToPlainString(tmp(1236).t["26bB2M"], obj13);
        const tmpResult26 = tmp(7037);
      }
      obj9[6] = formatToPlainStringResult1;
      const tmpResult25 = tmp(4031);
      obj9[7] = closure_4.resolveAssetSource(tmp(1435).makeSource(tmp57(result1 ? 8193 : 8194))).uri;
      const intl16 = tmp(1236).intl;
      const string2 = intl16.string;
      const t3 = tmp(1236).t;
      if (result1) {
        let string2Result = string2(t3.UgXhdn);
      } else {
        string2Result = string2(t3.DEoVWZ);
      }
      obj9[8] = string2Result;
      obj9[9] = tmp15;
      obj8.autoModerationContext = obj9;
      return obj8;
    } else {
      tmp(1438);
      if (null == guildMemberAvatar) {
        let avatarSource = author.getAvatarSource(undefined);
        const uri = tmp52(avatarSource).uri;
      }
      const obj14 = { userId: null, avatar: null, guildId: null };
      obj14[0] = author.id;
      obj14[1] = guildMemberAvatar;
      obj14[2] = guildId;
      avatarSource = tmp(1435).getGuildMemberAvatarSource(obj14, author);
      const tmpResult29 = tmp(1435);
    }
    const tmpResult2 = tmp(7037);
  } else {
    return null;
  }
};