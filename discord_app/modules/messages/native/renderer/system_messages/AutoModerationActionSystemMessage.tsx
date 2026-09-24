// === Module 8361: AutoModerationActionSystemMessage ===

// Module 8361 (AutoModerationActionSystemMessage)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1400 */;
import _modDef4416 from "module_4416" /* 4416 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4451 */;
import DateUtils from "DateUtils" /* 4507 */;
import shared from "shared" /* 4680 */;
import useChannelName from "useChannelName" /* 4982 */;
import useMessageAuthor from "useMessageAuthor" /* 5075 */;
import _modDef6942 from "module_6942" /* 6942 */;
import AutomodMessageUtils from "AutomodMessageUtils" /* 7838 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8284 */;
import createCommonMessageDefault from "createCommonMessage" /* 8312 */;
import AutomodNotificationEmbedTypeKeys from "AutomodNotificationEmbedTypeKeys" /* 8339 */;
import AutomodRaidAlertTypes from "AutomodRaidAlertTypes" /* 8362 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 8363 */;
import _modDef8367 from "module_8367" /* 8367 */;
import getRoleIcon from "getRoleIcon" /* 8368 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildMemberStore from "GuildMemberStore" /* 2107 */;
import PermissionStore from "PermissionStore" /* 4464 */;
import RelationshipStore from "RelationshipStore" /* 4474 */;
import UserStore from "UserStore" /* 1372 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

({ processColor: c3, Image: closure_4 } = get_ActivityIndicator);
const Permissions = Constants.Permissions;
let closure_11 = apply.memoize((arg0) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const obj2 = { defaultUsernameColor: null };
  const isThemeDarkResult = shared.isThemeDark(arg0);
  const tmp4 = shared.isThemeDark(arg0) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_630;
  obj2.defaultUsernameColor = RowGeneratorStyleSheet.processColorOrThrow(tmp4);
  return obj2;
});
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx");

export const createAutoModerationActionSystemMessage = function createAutoModerationActionSystemMessage(message) {
  ({ message, theme, roleStyle } = message);
  const defaultUsernameColor = closure_11(theme).defaultUsernameColor;
  if (obj.isAutomodMessageRecord(message)) {
    const result = AutomodMessageUtils.extractAutomodMessageFields(message);
    ({ keyword, embedChannel, flaggedMessageId, quarantineType } = result);
    ({ ruleName, content, embedChannelId, interactionUserId } = result);
    const channel = ChannelStore.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const tmpResult = AutomodMessageUtils;
    const messageAuthor = useMessageAuthor.getMessageAuthor(message);
    ({ guildMemberAvatar, colorString, iconRoleId } = messageAuthor);
    const author = message.author;
    const tmpResult31 = useMessageAuthor;
    const canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, embedChannel);
    let str = AutomodMessageUtils.getActionHeaderTextMobile(message, author, interactionUserId);
    const intl = util.intl;
    const stringResult = intl.string(util.t["94JbM3"]);
    const tmpResult32 = AutomodMessageUtils;
    const result1 = AutomodMessageUtils.isAutomodNotification(message);
    let tmp14 = null;
    let tmp15 = stringResult;
    if (result1) {
      let resolvedReason = AutomodMessageUtils.extractAutomodNotificationFields(message);
      const notificationType = resolvedReason.notificationType;
      if (AutomodMessageUtils.IS_BACKWARDS_COMPAT_RAID_TYPE !== notificationType) {
        if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.RAID !== notificationType) {
          if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.MENTION_RAID === notificationType) {
            let fromNowResult;
            if (null != resolvedReason.raidDatetime) {
              fromNowResult = _modDef4416(resolvedReason.raidDatetime).fromNow();
              const obj17 = _modDef4416(resolvedReason.raidDatetime);
            }
            const obj2 = { subtitleLeft: fromNowResult, header: null, headerColor: null, headerIconURL: null, headerIconColor: null, body: null, shouldShowActions: false };
            const intl5 = util.intl;
            obj2.header = intl5.string(util.t.C2uIXE);
            const internal3 = nativeDefault.internal;
            obj2.headerColor = RowGeneratorStyleSheet.processColorOrThrow(internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL));
            const tmpResult35 = RowGeneratorStyleSheet;
            obj2.headerIconURL = React4.resolveAssetSource(AvatarUtils.makeSource(_modDef6942)).uri;
            const tmpResult36 = AvatarUtils;
            const internal4 = nativeDefault.internal;
            obj2.headerIconColor = RowGeneratorStyleSheet.processColorOrThrow(internal4.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL));
            const intl6 = util.intl;
            obj2.body = intl6.string(util.t.SWIWEV);
            str = "";
            tmp14 = obj2;
            tmp15 = stringResult;
            const tmpResult37 = RowGeneratorStyleSheet;
          } else if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === notificationType) {
            const userIdOfAutomodAction = AutomodMessageUtils.getUserIdOfAutomodAction(message);
            const user = UserStore.getUser(userIdOfAutomodAction);
            let member = null;
            if (null != userIdOfAutomodAction) {
              member = null;
              if (null != guildId) {
                member = GuildMemberStore.getMember(guildId, userIdOfAutomodAction);
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
            const tmpResult38 = AutomodMessageUtils;
            let avatar;
            if (member != null) {
              avatar = member.avatar;
            }
            if (null != avatar) {
              if (null != guildId) {
                const obj3 = { userId: author.id, avatar: null, guildId: null };
                let avatar1;
                if (member != null) {
                  avatar1 = member.avatar;
                }
                obj3.avatar = avatar1;
                obj3.guildId = guildId;
                let guildMemberAvatarSource = AvatarUtils.getGuildMemberAvatarSource(obj3, author);
                const tmpResult40 = AvatarUtils;
              }
              const obj4 = { header: null, headerColor: null, headerIconURL: null, headerIconColor: null, body: null, shouldShowActions: false, subtitleRight: null, subtitleLeft: null, enabledByAvatarURL: null, enabledByUsername: null, enabledByColor: null };
              const intl2 = util.intl;
              obj4.header = intl2.string(util.t.lVLiFp);
              const ensureAvatarSourceResult = tmpResult39.ensureAvatarSource(guildMemberAvatarSource);
              const internal = nativeDefault.internal;
              obj4.headerColor = RowGeneratorStyleSheet.processColorOrThrow(internal.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_POSITIVE));
              const tmpResult41 = RowGeneratorStyleSheet;
              obj4.headerIconURL = React4.resolveAssetSource(AvatarUtils.makeSource(_modDef8367)).uri;
              const tmpResult42 = AvatarUtils;
              const internal2 = nativeDefault.internal;
              obj4.headerIconColor = RowGeneratorStyleSheet.processColorOrThrow(internal2.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_POSITIVE));
              const intl3 = util.intl;
              obj4.body = intl3.string(util.t["QV/8u5"]);
              const tmpResult43 = RowGeneratorStyleSheet;
              obj4.subtitleRight = _modDef4416(message.timestamp).fromNow();
              const intl4 = util.intl;
              obj4.subtitleLeft = intl4.string(util.t.qlFrXW);
              obj4.enabledByAvatarURL = ensureAvatarSourceResult.uri;
              obj4.enabledByUsername = nick;
              let colorString1;
              if (member != null) {
                colorString1 = member.colorString;
              }
              let tmp30;
              if (null != colorString1) {
                tmp30 = React3(member.colorString);
              }
              obj4.enabledByColor = tmp30;
              str = "";
              tmp14 = obj4;
              tmp15 = stringResult;
              const obj16 = _modDef4416(message.timestamp);
            }
            guildMemberAvatarSource = author.getAvatarSource(undefined, false, 16);
            tmpResult39 = utils_AvatarUtils;
          } else {
            const obj5 = { header: null, headerColor: null, headerIconURL: null, headerIconColor: null, body: null, shouldShowActions: false };
            const intl17 = util.intl;
            obj5.header = intl17.string(util.t.VdZCcC);
            const internal7 = nativeDefault.internal;
            obj5.headerColor = RowGeneratorStyleSheet.processColorOrThrow(internal7.resolveSemanticColor(theme, nativeDefault.colors.TEXT_SUBTLE));
            const tmpResult44 = RowGeneratorStyleSheet;
            obj5.headerIconURL = React4.resolveAssetSource(AvatarUtils.makeSource(_modDef6942)).uri;
            const tmpResult45 = AvatarUtils;
            const internal8 = nativeDefault.internal;
            obj5.headerIconColor = RowGeneratorStyleSheet.processColorOrThrow(internal8.resolveSemanticColor(theme, nativeDefault.colors.TEXT_SUBTLE));
            const intl18 = util.intl;
            obj5.body = intl18.string(util.t["NxHYX/"]);
            str = "";
            tmp14 = obj5;
            tmp15 = stringResult;
            const tmpResult46 = RowGeneratorStyleSheet;
          }
        }
      }
      let fromNowResult1;
      if (null != resolvedReason.raidDatetime) {
        fromNowResult1 = _modDef4416(resolvedReason.raidDatetime).fromNow();
        const obj22 = _modDef4416(resolvedReason.raidDatetime);
      }
      let str2 = "";
      if (null != resolvedReason.raidDatetime) {
        const _Date = Date;
        const date = new Date(resolvedReason.raidDatetime);
        str2 = date.toLocaleString(util.intl.currentLocale, GuildAntiRaidUtils.DATE_CONFIG);
      }
      const tmp42 = resolvedReason.raidType === AutomodRaidAlertTypes.AutomodRaidAlertTypes.DM_RAID;
      const intl7 = util.intl;
      const formatToPlainString = intl7.formatToPlainString;
      const t = util.t;
      if (tmp42) {
        const obj6 = { dmsSent: resolvedReason.dmsSent };
        let formatToPlainStringResult = formatToPlainString(t["5C8Mh3"], obj6);
      } else {
        const obj7 = { joinCount: resolvedReason.joinAttempts };
        formatToPlainStringResult = formatToPlainString(t["4ylIiu"], obj7);
      }
      const obj8 = { subtitleLeft: formatToPlainStringResult, severity: formatToPlainStringResult, subtitleRight: fromNowResult1, startTime: fromNowResult1, header: null, headerColor: null, headerIconURL: null, headerIconColor: null, body: null, shouldShowActions: true };
      const intl8 = util.intl;
      const string = intl8.string;
      const t2 = util.t;
      if (tmp42) {
        let stringResult1 = string(t2["8+lHUb"]);
      } else {
        stringResult1 = string(t2.xMwcwV);
      }
      obj8.header = stringResult1;
      const tmpResult34 = AutomodMessageUtils;
      const internal5 = nativeDefault.internal;
      obj8.headerColor = RowGeneratorStyleSheet.processColorOrThrow(internal5.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL));
      let getRaidAlertResolveCTAText = React4.resolveAssetSource;
      let internal6 = AvatarUtils;
      let intl9 = internal6.makeSource;
      obj8.headerIconURL = getRaidAlertResolveCTAText(intl9(importDefault(tmp42 ? 8366 : 6942))).uri;
      const tmpResult47 = RowGeneratorStyleSheet;
      internal6 = nativeDefault.internal;
      obj8.headerIconColor = RowGeneratorStyleSheet.processColorOrThrow(internal6.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL));
      intl9 = util.intl;
      const obj9 = { dateTime: str2 };
      obj8.body = intl9.formatToPlainString(util.t["4QIIZl"], obj9);
      const intl10 = util.intl;
      intl10.string(util.t.ufawcw);
      const tmpResult49 = AutomodMessageUtils;
      getRaidAlertResolveCTAText = tmpResult49.getRaidAlertResolveCTAText;
      resolvedReason = resolvedReason.resolvedReason;
      const raidAlertResolveCTAText = getRaidAlertResolveCTAText(resolvedReason);
      const tmpResult48 = RowGeneratorStyleSheet;
    }
    if (null == guildId) {
      let member1 = null;
      if (null != guildId) {
        member1 = GuildMemberStore.getMember(guildId, author.id);
      }
      let roleIcon;
      if (null != iconRoleId) {
        if (null != guildId) {
          const obj10 = { guildId, roleId: iconRoleId, size: 18 };
          roleIcon = getRoleIcon.getRoleIcon(obj10);
          const tmpResult50 = getRoleIcon;
        }
      }
      const obj11 = {};
      const merged = Object.assign(createCommonMessageDefault(message));
      obj11.roleIcon = roleIcon;
      obj11.authorId = author.id;
      const intl11 = util.intl;
      obj11.username = intl11.string(util.t.hG1StD);
      const tmpResult51 = utils_AvatarUtils;
      const tmpResult52 = AvatarUtils;
      obj11.avatarURL = tmpResult51.ensureAvatarSource(tmpResult52.makeSource(utils_AvatarUtils.getAutomodAvatarURL())).uri;
      obj11.colorString = React3(colorString);
      const obj12 = { headerText: str, headerBadgeText: null, keywordDisplayText: null, message: null, notification: null, ruleDisplayText: null, reasonDisplayText: null, actionsIconURL: null, actionsText: null, feedbackText: null };
      const intl12 = util.intl;
      obj12.headerBadgeText = intl12.string(util.t["70CJbT"]);
      let str3 = "";
      if (null != keyword) {
        const intl13 = util.intl;
        const obj13 = { keyword };
        str3 = intl13.formatToPlainString(util.t.SYIUTR, obj13);
      }
      obj12.keywordDisplayText = str3;
      if (flaggedMessageId == null) {
        flaggedMessageId = message.id;
      }
      const obj14 = { id: flaggedMessageId, channelId: null, guildId: null, userId: null, channelName: null, username: null, usernameColor: null, roleColor: null, shouldShowRoleDot: null, colorString: null, avatarURL: null, content: null, communicationDisabled: null, timestamp: null };
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
      obj14.channelId = id;
      obj14.guildId = guildId;
      obj14.userId = author.id;
      let channelName;
      if (canResult) {
        if (null == quarantineType) {
          if (null != embedChannel) {
            channelName = useChannelName.computeChannelName(embedChannel, UserStore, RelationshipStore);
            const tmpResult54 = useChannelName;
          }
        }
      }
      obj14.channelName = channelName;
      obj14.username = messageAuthor.nick;
      let tmp66 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp60Result = React3(colorString);
        if (tmp60Result == null) {
          tmp60Result = defaultUsernameColor;
        }
        tmp66 = tmp60Result;
      }
      obj14.usernameColor = tmp66;
      obj14.roleColor = React3(colorString);
      obj14.shouldShowRoleDot = "dot" === roleStyle && null != colorString;
      let tmp60Result2 = React3(colorString);
      if (tmp60Result2 == null) {
        tmp60Result2 = defaultUsernameColor;
      }
      obj14.colorString = tmp60Result2;
      obj14.avatarURL = null;
      obj14.content = content;
      const tmpResult53 = utils_AvatarUtils;
      obj14.communicationDisabled = CommunicationDisabledUtils.isMemberCommunicationDisabled(member1);
      const tmpResult55 = CommunicationDisabledUtils;
      obj14.timestamp = DateUtils.accessibilityLabelCalendarFormat(message.timestamp);
      obj12.message = obj14;
      obj12.notification = tmp14;
      const intl14 = util.intl;
      const obj15 = { ruleName };
      obj12.ruleDisplayText = intl14.formatToPlainString(util.t.ZoOyKB, obj15);
      let formatToPlainStringResult1 = null;
      if (null != quarantineType) {
        const intl15 = util.intl;
        const obj18 = { reason: AutomodMessageUtils.getQuarantineReasonString(quarantineType) };
        formatToPlainStringResult1 = intl15.formatToPlainString(util.t["26bB2M"], obj18);
        const tmpResult57 = AutomodMessageUtils;
      }
      obj12.reasonDisplayText = formatToPlainStringResult1;
      const tmpResult56 = DateUtils;
      obj12.actionsIconURL = React4.resolveAssetSource(AvatarUtils.makeSource(importDefault(result1 ? 8369 : 8370))).uri;
      const intl16 = util.intl;
      const string2 = intl16.string;
      const t3 = util.t;
      if (result1) {
        let string2Result = string2(t3.UgXhdn);
      } else {
        string2Result = string2(t3.DEoVWZ);
      }
      obj12.actionsText = string2Result;
      obj12.feedbackText = tmp15;
      obj11.autoModerationContext = obj12;
      return obj11;
    } else {
      utils_AvatarUtils;
      if (null == guildMemberAvatar) {
        let avatarSource = author.getAvatarSource(undefined);
        const uri = tmp52(avatarSource).uri;
      }
      const obj19 = { userId: author.id, avatar: guildMemberAvatar, guildId };
      avatarSource = AvatarUtils.getGuildMemberAvatarSource(obj19, author);
      const tmpResult60 = AvatarUtils;
    }
    const tmpResult33 = AutomodMessageUtils;
  } else {
    return null;
  }
  obj = AutomodMessageUtils;
};