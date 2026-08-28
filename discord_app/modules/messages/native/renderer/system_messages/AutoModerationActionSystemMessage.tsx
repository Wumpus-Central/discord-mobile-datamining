// === Module 7868: createAutoModerationActionSystemMessage ===

// Module 7868 (createAutoModerationActionSystemMessage)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getAvatarURL from "getAvatarURL" /* 1435 */;
import ensureAvatarSource from "ensureAvatarSource" /* 1438 */;
import hooksDefault from "hooks" /* 4044 */;
import isCommunicationDisabled from "isCommunicationDisabled" /* 4079 */;
import resetCache from "resetCache" /* 4132 */;
import computeChannelName from "computeChannelName" /* 4640 */;
import useNullableMessageAuthor from "useNullableMessageAuthor" /* 4712 */;
import useRoleIcon from "useRoleIcon" /* 5942 */;
import getDecisionOutcomeFromMessage from "getDecisionOutcomeFromMessage" /* 7200 */;
import registerAssetDefault from "registerAsset" /* 7657 */;
import processColorOrThrow from "processColorOrThrow" /* 7792 */;
import createCommonMessageDefault from "createCommonMessage" /* 7819 */;
import AutomodNotificationEmbedTypeKeys from "AutomodNotificationEmbedTypeKeys" /* 7846 */;
import AutomodRaidAlertTypes from "AutomodRaidAlertTypes" /* 7869 */;
import DATE_CONFIG from "DATE_CONFIG" /* 7870 */;
import registerAssetDefault2 from "registerAsset" /* 7874 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "trackCommunicationDisabled" /* 1993 */;
import closure_7 from "getUncachedChannelPermissions" /* 4090 */;
import closure_8 from "markAllUserIdListsStale" /* 4099 */;
import closure_9 from "mergeGuildAvatar" /* 1923 */;
import apply from "apply" /* 12 */;

({ processColor: c3, Image: c4 } = get_ActivityIndicator);
const Permissions = ME.Permissions;
let closure_11 = apply.memoize((arg0) => {
  let obj = AccessibilityAnnouncer;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  obj = { defaultUsernameColor: null };
  const isThemeDarkResult = obj.isThemeDark(arg0);
  const tmp = require;
  const tmp4 = obj.isThemeDark(arg0) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_630;
  obj[0] = processColorOrThrow.processColorOrThrow(tmp4);
  return obj;
});
let result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx");

export const createAutoModerationActionSystemMessage = function createAutoModerationActionSystemMessage(message) {
  ({ message, theme, roleStyle } = message);
  const defaultUsernameColor = callback2(theme).defaultUsernameColor;
  const tmp = require;
  let obj = getDecisionOutcomeFromMessage;
  if (obj.isAutomodMessageRecord(message)) {
    let tmpResult = getDecisionOutcomeFromMessage;
    const result = tmpResult.extractAutomodMessageFields(message);
    ({ keyword, embedChannel, flaggedMessageId, quarantineType } = result);
    ({ ruleName, content, embedChannelId, interactionUserId } = result);
    channel = channel.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    tmpResult = useNullableMessageAuthor;
    const messageAuthor = tmpResult.getMessageAuthor(message);
    ({ guildMemberAvatar, colorString, iconRoleId } = messageAuthor);
    const author = message.author;
    const canResult = closure_7.can(Permissions.VIEW_CHANNEL, embedChannel);
    let str = getDecisionOutcomeFromMessage.getActionHeaderTextMobile(message, author, interactionUserId);
    const intl = getSystemLocale.intl;
    const stringResult = intl.string(getSystemLocale.t["94JbM3"]);
    const tmpResult1 = getDecisionOutcomeFromMessage;
    const result1 = getDecisionOutcomeFromMessage.isAutomodNotification(message);
    let tmp14 = null;
    let tmp15 = stringResult;
    if (result1) {
      let resolvedReason = getDecisionOutcomeFromMessage.extractAutomodNotificationFields(message);
      const notificationType = resolvedReason.notificationType;
      if (getDecisionOutcomeFromMessage.IS_BACKWARDS_COMPAT_RAID_TYPE !== notificationType) {
        if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.RAID !== notificationType) {
          if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.MENTION_RAID === notificationType) {
            let fromNowResult;
            if (null != resolvedReason.raidDatetime) {
              fromNowResult = hooksDefault(resolvedReason.raidDatetime).fromNow();
              const obj17 = hooksDefault(resolvedReason.raidDatetime);
            }
            obj = { subtitleLeft: null, header: null, headerColor: null, headerIconURL: null, headerIconColor: null, body: null, shouldShowActions: false };
            obj[0] = fromNowResult;
            const intl5 = getSystemLocale.intl;
            obj[1] = intl5.string(getSystemLocale.t.C2uIXE);
            const internal3 = ThemesDefault.internal;
            obj[2] = processColorOrThrow.processColorOrThrow(internal3.resolveSemanticColor(theme, ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL));
            const tmpResult4 = processColorOrThrow;
            obj[3] = closure_4.resolveAssetSource(getAvatarURL.makeSource(registerAssetDefault)).uri;
            const tmpResult5 = getAvatarURL;
            const internal4 = ThemesDefault.internal;
            obj[4] = processColorOrThrow.processColorOrThrow(internal4.resolveSemanticColor(theme, ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL));
            const intl6 = getSystemLocale.intl;
            obj[5] = intl6.string(getSystemLocale.t.SWIWEV);
            str = "";
            tmp14 = obj;
            tmp15 = stringResult;
            const tmpResult6 = processColorOrThrow;
          } else if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === notificationType) {
            const userIdOfAutomodAction = getDecisionOutcomeFromMessage.getUserIdOfAutomodAction(message);
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
            const tmpResult7 = getDecisionOutcomeFromMessage;
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
                let guildMemberAvatarSource = getAvatarURL.getGuildMemberAvatarSource(obj, author);
                const tmpResult9 = getAvatarURL;
              }
              obj1 = { header: null, headerColor: null, headerIconURL: null, headerIconColor: null, body: null, shouldShowActions: false, subtitleRight: null, subtitleLeft: null, enabledByAvatarURL: null, enabledByUsername: null, enabledByColor: null };
              const intl2 = getSystemLocale.intl;
              obj1[0] = intl2.string(getSystemLocale.t.lVLiFp);
              const ensureAvatarSourceResult = tmpResult8.ensureAvatarSource(guildMemberAvatarSource);
              const internal = ThemesDefault.internal;
              obj1[1] = processColorOrThrow.processColorOrThrow(internal.resolveSemanticColor(theme, ThemesDefault.colors.TEXT_FEEDBACK_POSITIVE));
              const tmpResult10 = processColorOrThrow;
              obj1[2] = closure_4.resolveAssetSource(getAvatarURL.makeSource(registerAssetDefault2)).uri;
              const tmpResult11 = getAvatarURL;
              const internal2 = ThemesDefault.internal;
              obj1[3] = processColorOrThrow.processColorOrThrow(internal2.resolveSemanticColor(theme, ThemesDefault.colors.TEXT_FEEDBACK_POSITIVE));
              const intl3 = getSystemLocale.intl;
              obj1[4] = intl3.string(getSystemLocale.t["QV/8u5"]);
              const tmpResult12 = processColorOrThrow;
              obj1[6] = hooksDefault(message.timestamp).fromNow();
              const intl4 = getSystemLocale.intl;
              obj1[7] = intl4.string(getSystemLocale.t.qlFrXW);
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
              const obj16 = hooksDefault(message.timestamp);
            }
            guildMemberAvatarSource = author.getAvatarSource(undefined, false, 16);
            tmpResult8 = ensureAvatarSource;
          } else {
            const obj2 = { header: null, headerColor: null, headerIconURL: null, headerIconColor: null, body: null, shouldShowActions: false };
            const intl17 = getSystemLocale.intl;
            obj2[0] = intl17.string(getSystemLocale.t.VdZCcC);
            const internal7 = ThemesDefault.internal;
            obj2[1] = processColorOrThrow.processColorOrThrow(internal7.resolveSemanticColor(theme, ThemesDefault.colors.TEXT_SUBTLE));
            const tmpResult13 = processColorOrThrow;
            obj2[2] = closure_4.resolveAssetSource(getAvatarURL.makeSource(registerAssetDefault)).uri;
            const tmpResult14 = getAvatarURL;
            const internal8 = ThemesDefault.internal;
            obj2[3] = processColorOrThrow.processColorOrThrow(internal8.resolveSemanticColor(theme, ThemesDefault.colors.TEXT_SUBTLE));
            const intl18 = getSystemLocale.intl;
            obj2[4] = intl18.string(getSystemLocale.t["NxHYX/"]);
            str = "";
            tmp14 = obj2;
            tmp15 = stringResult;
            const tmpResult15 = processColorOrThrow;
          }
        }
      }
      let fromNowResult1;
      if (null != resolvedReason.raidDatetime) {
        fromNowResult1 = hooksDefault(resolvedReason.raidDatetime).fromNow();
        const obj22 = hooksDefault(resolvedReason.raidDatetime);
      }
      let str2 = "";
      if (null != resolvedReason.raidDatetime) {
        const _Date = Date;
        const date = new Date(resolvedReason.raidDatetime);
        str2 = date.toLocaleString(getSystemLocale.intl.currentLocale, DATE_CONFIG.DATE_CONFIG);
      }
      const tmp42 = resolvedReason.raidType === AutomodRaidAlertTypes.AutomodRaidAlertTypes.DM_RAID;
      const intl7 = getSystemLocale.intl;
      const formatToPlainString = intl7.formatToPlainString;
      const t = getSystemLocale.t;
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
      const intl8 = getSystemLocale.intl;
      const string = intl8.string;
      const t2 = getSystemLocale.t;
      if (tmp42) {
        let stringResult1 = string(t2["8+lHUb"]);
      } else {
        stringResult1 = string(t2.xMwcwV);
      }
      obj5[4] = stringResult1;
      const tmpResult3 = getDecisionOutcomeFromMessage;
      const internal5 = ThemesDefault.internal;
      obj5[5] = processColorOrThrow.processColorOrThrow(internal5.resolveSemanticColor(theme, ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL));
      let tmpResult18 = closure_4;
      let getRaidAlertResolveCTAText = closure_4.resolveAssetSource;
      let internal6 = getAvatarURL;
      let intl9 = internal6.makeSource;
      obj5[6] = getRaidAlertResolveCTAText(intl9(importDefault(tmp42 ? 7873 : 7657))).uri;
      const tmpResult16 = processColorOrThrow;
      internal6 = tmp45(712).internal;
      obj5[7] = processColorOrThrow.processColorOrThrow(internal6.resolveSemanticColor(theme, ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL));
      intl9 = getSystemLocale.intl;
      const obj6 = { dateTime: null };
      obj6[0] = str2;
      obj5[8] = intl9.formatToPlainString(getSystemLocale.t["4QIIZl"], obj6);
      const intl10 = getSystemLocale.intl;
      intl10.string(getSystemLocale.t.ufawcw);
      tmpResult18 = getDecisionOutcomeFromMessage;
      getRaidAlertResolveCTAText = tmpResult18.getRaidAlertResolveCTAText;
      resolvedReason = resolvedReason.resolvedReason;
      const raidAlertResolveCTAText = getRaidAlertResolveCTAText(resolvedReason);
      const tmpResult17 = processColorOrThrow;
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
          roleIcon = useRoleIcon.getRoleIcon(obj7);
          const tmpResult19 = useRoleIcon;
        }
      }
      const obj8 = {};
      const merged = Object.assign(createCommonMessageDefault(message));
      obj8.roleIcon = roleIcon;
      obj8.authorId = author.id;
      const intl11 = getSystemLocale.intl;
      obj8.username = intl11.string(getSystemLocale.t.hG1StD);
      const tmp57 = importDefault;
      const tmpResult20 = ensureAvatarSource;
      const tmpResult21 = getAvatarURL;
      obj8.avatarURL = tmpResult20.ensureAvatarSource(tmpResult21.makeSource(ensureAvatarSource.getAutomodAvatarURL())).uri;
      obj8.colorString = callback(colorString);
      const obj9 = { headerText: null, headerBadgeText: null, keywordDisplayText: null, message: null, notification: null, ruleDisplayText: null, reasonDisplayText: null, actionsIconURL: null, actionsText: null, feedbackText: null };
      obj9[0] = str;
      const intl12 = getSystemLocale.intl;
      obj9[1] = intl12.string(getSystemLocale.t["70CJbT"]);
      let str3 = "";
      if (null != keyword) {
        const intl13 = getSystemLocale.intl;
        const obj10 = { keyword: null };
        obj10[0] = keyword;
        str3 = intl13.formatToPlainString(getSystemLocale.t.SYIUTR, obj10);
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
            channelName = computeChannelName.computeChannelName(embedChannel, user, closure_8);
            const tmpResult23 = computeChannelName;
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
      const tmpResult22 = ensureAvatarSource;
      obj11[12] = isCommunicationDisabled.isMemberCommunicationDisabled(member1);
      const tmpResult24 = isCommunicationDisabled;
      obj11[13] = resetCache.accessibilityLabelCalendarFormat(message.timestamp);
      obj9[3] = obj11;
      obj9[4] = tmp14;
      const intl14 = getSystemLocale.intl;
      const obj12 = { ruleName: null };
      obj12[0] = ruleName;
      obj9[5] = intl14.formatToPlainString(getSystemLocale.t.ZoOyKB, obj12);
      let formatToPlainStringResult1 = null;
      if (null != quarantineType) {
        const intl15 = getSystemLocale.intl;
        const obj13 = { reason: null };
        obj13[0] = getDecisionOutcomeFromMessage.getQuarantineReasonString(quarantineType);
        formatToPlainStringResult1 = intl15.formatToPlainString(getSystemLocale.t["26bB2M"], obj13);
        const tmpResult26 = getDecisionOutcomeFromMessage;
      }
      obj9[6] = formatToPlainStringResult1;
      const tmpResult25 = resetCache;
      obj9[7] = closure_4.resolveAssetSource(getAvatarURL.makeSource(tmp57(result1 ? 7875 : 7876))).uri;
      const intl16 = getSystemLocale.intl;
      const string2 = intl16.string;
      const t3 = getSystemLocale.t;
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
      ensureAvatarSource;
      if (null == guildMemberAvatar) {
        let avatarSource = author.getAvatarSource(undefined);
        const uri = tmp52(avatarSource).uri;
      }
      const obj14 = { userId: null, avatar: null, guildId: null };
      obj14[0] = author.id;
      obj14[1] = guildMemberAvatar;
      obj14[2] = guildId;
      avatarSource = getAvatarURL.getGuildMemberAvatarSource(obj14, author);
      const tmpResult29 = getAvatarURL;
    }
    const tmpResult2 = getDecisionOutcomeFromMessage;
  } else {
    return null;
  }
};