// discord_app/modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import util from "../../../../../intl/index.native.tsx";
import AvatarUtils from "../../../../../utils/AvatarUtils.tsx";
import utils_AvatarUtils from "../../../../../utils/native/AvatarUtils.tsx";
import _modDef4153 from "../../../../../../_runtime/metro/04153__.js";
import CommunicationDisabledUtils from "../../../../guild_communication_disabled/CommunicationDisabledUtils.tsx";
import DateUtils from "../../../../../utils/DateUtils.tsx";
import shared from "../../../../../design/shared.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import useMessageAuthor from "../../../useMessageAuthor.tsx";
import _modDef6612 from "../../../../../../_runtime/metro/06612__.js";
import RoleIconUtils from "../../../../guild_boosting/native/RoleIconUtils.tsx";
import AutomodMessageUtils from "../../../../guild_automod/AutomodMessageUtils.tsx";
import RowGeneratorStyleSheet from "../RowGeneratorStyleSheet.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import AutomodNotificationEmbedTypeKeys from "../../../../../../discord_common/js/shared/shared-constants/AutomodNotificationEmbedTypeKeys.tsx";
import AutomodRaidAlertTypes from "../../../../../../discord_common/js/shared/shared-constants/AutomodRaidAlertTypes.tsx";
import GuildAntiRaidUtils from "../../../../guild_antiraid/GuildAntiRaidUtils.tsx";
import _modDef8019 from "../../../../../../_runtime/metro/08019__.js";
import get_ActivityIndicator from "../../../../../../_runtime/metro/00017__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../../stores/GuildMemberStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import apply from "../../../../../../_runtime/metro/00012__.js";
import size from "../../../../../../_runtime/metro/00002__.js";

({ processColor: c3, Image: closure_4 } = get_ActivityIndicator);
const Permissions = Constants.Permissions;
let closure_11 = apply.memoize((arg0) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const obj = { defaultUsernameColor: null };
  const isThemeDarkResult = obj.isThemeDark(arg0);
  const tmp4 = obj.isThemeDark(arg0) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_630;
  obj.defaultUsernameColor = RowGeneratorStyleSheet.processColorOrThrow(tmp4);
  return obj;
});
let result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx",
);

export const createAutoModerationActionSystemMessage = function createAutoModerationActionSystemMessage(message) {
  ({ message, theme, roleStyle } = message);
  const defaultUsernameColor = closure_11(theme).defaultUsernameColor;
  let obj = AutomodMessageUtils;
  if (obj.isAutomodMessageRecord(message)) {
    let tmpResult = AutomodMessageUtils;
    const result = tmpResult.extractAutomodMessageFields(message);
    ({ keyword, embedChannel, flaggedMessageId, quarantineType } = result);
    ({ ruleName, content, embedChannelId, interactionUserId } = result);
    const channel = ChannelStore.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    tmpResult = useMessageAuthor;
    const messageAuthor = tmpResult.getMessageAuthor(message);
    ({ guildMemberAvatar, colorString, iconRoleId } = messageAuthor);
    const author = message.author;
    const canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, embedChannel);
    let str = AutomodMessageUtils.getActionHeaderTextMobile(message, author, interactionUserId);
    const intl = util.intl;
    const stringResult = intl.string(util.t["94JbM3"]);
    const tmpResult1 = AutomodMessageUtils;
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
              fromNowResult = _modDef4153(resolvedReason.raidDatetime).fromNow();
              const obj17 = _modDef4153(resolvedReason.raidDatetime);
            }
            obj = {
              subtitleLeft: fromNowResult,
              header: null,
              headerColor: null,
              headerIconURL: null,
              headerIconColor: null,
              body: null,
              shouldShowActions: false,
            };
            const intl5 = util.intl;
            obj.header = intl5.string(util.t.C2uIXE);
            const internal3 = nativeDefault.internal;
            obj.headerColor = RowGeneratorStyleSheet.processColorOrThrow(
              internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL),
            );
            const tmpResult4 = RowGeneratorStyleSheet;
            obj.headerIconURL = React4.resolveAssetSource(AvatarUtils.makeSource(_modDef6612)).uri;
            const tmpResult5 = AvatarUtils;
            const internal4 = nativeDefault.internal;
            obj.headerIconColor = RowGeneratorStyleSheet.processColorOrThrow(
              internal4.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL),
            );
            const intl6 = util.intl;
            obj.body = intl6.string(util.t.SWIWEV);
            str = "";
            tmp14 = obj;
            tmp15 = stringResult;
            const tmpResult6 = RowGeneratorStyleSheet;
          } else if (
            AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED ===
            notificationType
          ) {
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
            const tmpResult7 = AutomodMessageUtils;
            let avatar;
            if (member != null) {
              avatar = member.avatar;
            }
            if (null != avatar) {
              if (null != guildId) {
                obj = { userId: author.id, avatar: null, guildId: null };
                let avatar1;
                if (member != null) {
                  avatar1 = member.avatar;
                }
                obj.avatar = avatar1;
                obj.guildId = guildId;
                let guildMemberAvatarSource = AvatarUtils.getGuildMemberAvatarSource(obj, author);
                const tmpResult9 = AvatarUtils;
              }
              const obj1 = {
                header: null,
                headerColor: null,
                headerIconURL: null,
                headerIconColor: null,
                body: null,
                shouldShowActions: false,
                subtitleRight: null,
                subtitleLeft: null,
                enabledByAvatarURL: null,
                enabledByUsername: null,
                enabledByColor: null,
              };
              const intl2 = util.intl;
              obj1.header = intl2.string(util.t.lVLiFp);
              const ensureAvatarSourceResult = tmpResult8.ensureAvatarSource(guildMemberAvatarSource);
              const internal = nativeDefault.internal;
              obj1.headerColor = RowGeneratorStyleSheet.processColorOrThrow(
                internal.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_POSITIVE),
              );
              const tmpResult10 = RowGeneratorStyleSheet;
              obj1.headerIconURL = React4.resolveAssetSource(AvatarUtils.makeSource(_modDef8019)).uri;
              const tmpResult11 = AvatarUtils;
              const internal2 = nativeDefault.internal;
              obj1.headerIconColor = RowGeneratorStyleSheet.processColorOrThrow(
                internal2.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_POSITIVE),
              );
              const intl3 = util.intl;
              obj1.body = intl3.string(util.t["QV/8u5"]);
              const tmpResult12 = RowGeneratorStyleSheet;
              obj1.subtitleRight = _modDef4153(message.timestamp).fromNow();
              const intl4 = util.intl;
              obj1.subtitleLeft = intl4.string(util.t.qlFrXW);
              obj1.enabledByAvatarURL = ensureAvatarSourceResult.uri;
              obj1.enabledByUsername = nick;
              colorString = undefined;
              if (member != null) {
                colorString = member.colorString;
              }
              let tmp30;
              if (null != colorString) {
                tmp30 = React3(member.colorString);
              }
              obj1.enabledByColor = tmp30;
              str = "";
              tmp14 = obj1;
              tmp15 = stringResult;
              const obj16 = _modDef4153(message.timestamp);
            }
            guildMemberAvatarSource = author.getAvatarSource(undefined, false, 16);
            tmpResult8 = utils_AvatarUtils;
          } else {
            const obj2 = {
              header: null,
              headerColor: null,
              headerIconURL: null,
              headerIconColor: null,
              body: null,
              shouldShowActions: false,
            };
            const intl17 = util.intl;
            obj2.header = intl17.string(util.t.VdZCcC);
            const internal7 = nativeDefault.internal;
            obj2.headerColor = RowGeneratorStyleSheet.processColorOrThrow(
              internal7.resolveSemanticColor(theme, nativeDefault.colors.TEXT_SUBTLE),
            );
            const tmpResult13 = RowGeneratorStyleSheet;
            obj2.headerIconURL = React4.resolveAssetSource(AvatarUtils.makeSource(_modDef6612)).uri;
            const tmpResult14 = AvatarUtils;
            const internal8 = nativeDefault.internal;
            obj2.headerIconColor = RowGeneratorStyleSheet.processColorOrThrow(
              internal8.resolveSemanticColor(theme, nativeDefault.colors.TEXT_SUBTLE),
            );
            const intl18 = util.intl;
            obj2.body = intl18.string(util.t["NxHYX/"]);
            str = "";
            tmp14 = obj2;
            tmp15 = stringResult;
            const tmpResult15 = RowGeneratorStyleSheet;
          }
        }
      }
      let fromNowResult1;
      if (null != resolvedReason.raidDatetime) {
        fromNowResult1 = _modDef4153(resolvedReason.raidDatetime).fromNow();
        const obj22 = _modDef4153(resolvedReason.raidDatetime);
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
        const obj3 = { dmsSent: resolvedReason.dmsSent };
        let formatToPlainStringResult = formatToPlainString(t["5C8Mh3"], obj3);
      } else {
        const obj4 = { joinCount: resolvedReason.joinAttempts };
        formatToPlainStringResult = formatToPlainString(t["4ylIiu"], obj4);
      }
      const obj5 = {
        subtitleLeft: formatToPlainStringResult,
        severity: formatToPlainStringResult,
        subtitleRight: fromNowResult1,
        startTime: fromNowResult1,
        header: null,
        headerColor: null,
        headerIconURL: null,
        headerIconColor: null,
        body: null,
        shouldShowActions: true,
      };
      const intl8 = util.intl;
      const string = intl8.string;
      const t2 = util.t;
      if (tmp42) {
        let stringResult1 = string(t2["8+lHUb"]);
      } else {
        stringResult1 = string(t2.xMwcwV);
      }
      obj5.header = stringResult1;
      const tmpResult3 = AutomodMessageUtils;
      const internal5 = nativeDefault.internal;
      obj5.headerColor = RowGeneratorStyleSheet.processColorOrThrow(
        internal5.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL),
      );
      let getRaidAlertResolveCTAText = React4.resolveAssetSource;
      let internal6 = AvatarUtils;
      let intl9 = internal6.makeSource;
      obj5.headerIconURL = getRaidAlertResolveCTAText(intl9(importDefault(tmp42 ? 8018 : 6612))).uri;
      const tmpResult16 = RowGeneratorStyleSheet;
      internal6 = nativeDefault.internal;
      obj5.headerIconColor = RowGeneratorStyleSheet.processColorOrThrow(
        internal6.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL),
      );
      intl9 = util.intl;
      const obj6 = { dateTime: str2 };
      obj5.body = intl9.formatToPlainString(util.t["4QIIZl"], obj6);
      const intl10 = util.intl;
      intl10.string(util.t.ufawcw);
      const tmpResult18 = AutomodMessageUtils;
      getRaidAlertResolveCTAText = tmpResult18.getRaidAlertResolveCTAText;
      resolvedReason = resolvedReason.resolvedReason;
      const raidAlertResolveCTAText = getRaidAlertResolveCTAText(resolvedReason);
      const tmpResult17 = RowGeneratorStyleSheet;
    }
    if (null == guildId) {
      let member1 = null;
      if (null != guildId) {
        member1 = GuildMemberStore.getMember(guildId, author.id);
      }
      let roleIcon;
      if (null != iconRoleId) {
        if (null != guildId) {
          const obj7 = { guildId, roleId: iconRoleId, size: 18 };
          roleIcon = RoleIconUtils.getRoleIcon(obj7);
          const tmpResult19 = RoleIconUtils;
        }
      }
      const obj8 = {};
      const merged = Object.assign(createCommonMessageDefault(message));
      obj8.roleIcon = roleIcon;
      obj8.authorId = author.id;
      const intl11 = util.intl;
      obj8.username = intl11.string(util.t.hG1StD);
      const tmpResult20 = utils_AvatarUtils;
      const tmpResult21 = AvatarUtils;
      obj8.avatarURL = tmpResult20.ensureAvatarSource(
        tmpResult21.makeSource(utils_AvatarUtils.getAutomodAvatarURL()),
      ).uri;
      obj8.colorString = React3(colorString);
      const obj9 = {
        headerText: str,
        headerBadgeText: null,
        keywordDisplayText: null,
        message: null,
        notification: null,
        ruleDisplayText: null,
        reasonDisplayText: null,
        actionsIconURL: null,
        actionsText: null,
        feedbackText: null,
      };
      const intl12 = util.intl;
      obj9.headerBadgeText = intl12.string(util.t["70CJbT"]);
      let str3 = "";
      if (null != keyword) {
        const intl13 = util.intl;
        const obj10 = { keyword };
        str3 = intl13.formatToPlainString(util.t.SYIUTR, obj10);
      }
      obj9.keywordDisplayText = str3;
      if (flaggedMessageId == null) {
        flaggedMessageId = message.id;
      }
      const obj11 = {
        id: flaggedMessageId,
        channelId: null,
        guildId: null,
        userId: null,
        channelName: null,
        username: null,
        usernameColor: null,
        roleColor: null,
        shouldShowRoleDot: null,
        colorString: null,
        avatarURL: null,
        content: null,
        communicationDisabled: null,
        timestamp: null,
      };
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
      obj11.channelId = id;
      obj11.guildId = guildId;
      obj11.userId = author.id;
      let channelName;
      if (canResult) {
        if (null == quarantineType) {
          if (null != embedChannel) {
            channelName = useChannelName.computeChannelName(embedChannel, UserStore, RelationshipStore);
            const tmpResult23 = useChannelName;
          }
        }
      }
      obj11.channelName = channelName;
      obj11.username = messageAuthor.nick;
      let tmp66 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp60Result = React3(colorString);
        if (tmp60Result == null) {
          tmp60Result = defaultUsernameColor;
        }
        tmp66 = tmp60Result;
      }
      obj11.usernameColor = tmp66;
      obj11.roleColor = React3(colorString);
      obj11.shouldShowRoleDot = "dot" === roleStyle && null != colorString;
      tmp60Result = React3(colorString);
      if (tmp60Result == null) {
        tmp60Result = defaultUsernameColor;
      }
      obj11.colorString = tmp60Result;
      obj11.avatarURL = null;
      obj11.content = content;
      const tmpResult22 = utils_AvatarUtils;
      obj11.communicationDisabled = CommunicationDisabledUtils.isMemberCommunicationDisabled(member1);
      const tmpResult24 = CommunicationDisabledUtils;
      obj11.timestamp = DateUtils.accessibilityLabelCalendarFormat(message.timestamp);
      obj9.message = obj11;
      obj9.notification = tmp14;
      const intl14 = util.intl;
      const obj12 = { ruleName };
      obj9.ruleDisplayText = intl14.formatToPlainString(util.t.ZoOyKB, obj12);
      let formatToPlainStringResult1 = null;
      if (null != quarantineType) {
        const intl15 = util.intl;
        const obj13 = { reason: AutomodMessageUtils.getQuarantineReasonString(quarantineType) };
        formatToPlainStringResult1 = intl15.formatToPlainString(util.t["26bB2M"], obj13);
        const tmpResult26 = AutomodMessageUtils;
      }
      obj9.reasonDisplayText = formatToPlainStringResult1;
      const tmpResult25 = DateUtils;
      obj9.actionsIconURL = React4.resolveAssetSource(AvatarUtils.makeSource(importDefault(result1 ? 8020 : 8021))).uri;
      const intl16 = util.intl;
      const string2 = intl16.string;
      const t3 = util.t;
      if (result1) {
        let string2Result = string2(t3.UgXhdn);
      } else {
        string2Result = string2(t3.DEoVWZ);
      }
      obj9.actionsText = string2Result;
      obj9.feedbackText = tmp15;
      obj8.autoModerationContext = obj9;
      return obj8;
    } else {
      utils_AvatarUtils;
      if (null == guildMemberAvatar) {
        let avatarSource = author.getAvatarSource(undefined);
        const uri = tmp52(avatarSource).uri;
      }
      const obj14 = { userId: author.id, avatar: guildMemberAvatar, guildId };
      avatarSource = AvatarUtils.getGuildMemberAvatarSource(obj14, author);
      const tmpResult29 = AvatarUtils;
    }
    const tmpResult2 = AutomodMessageUtils;
  } else {
    return null;
  }
};
