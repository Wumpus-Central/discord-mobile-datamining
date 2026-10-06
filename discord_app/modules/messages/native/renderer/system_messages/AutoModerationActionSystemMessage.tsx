// discord_app/modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import intl19 from "../../../../../intl/index.native.tsx";
import AvatarUtils from "../../../../../utils/AvatarUtils.tsx";
import utils_AvatarUtils from "../../../../../utils/native/AvatarUtils.tsx";
import _modDef4467 from "../../../../../../_runtime/metro/04467__.js";
import CommunicationDisabledUtils from "../../../../guild_communication_disabled/CommunicationDisabledUtils.tsx";
import DateUtils from "../../../../../utils/DateUtils.tsx";
import shared from "../../../../../design/shared.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/04808_AssetRegistry.js";
import useChannelName from "../../../../channel/useChannelName.tsx";
import useMessageAuthor from "../../../useMessageAuthor.tsx";
import AutomodMessageUtils from "../../../../guild_automod/AutomodMessageUtils.tsx";
import react_native from "../RowGeneratorStyleSheet.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import AutomodNotificationEmbedTypeKeys from "../../../../../../discord_common/js/shared/shared-constants/AutomodNotificationEmbedTypeKeys.tsx";
import AutomodRaidAlertTypes from "../../../../../../discord_common/js/shared/shared-constants/AutomodRaidAlertTypes.tsx";
import GuildAntiRaidUtils from "../../../../guild_antiraid/GuildAntiRaidUtils.tsx";
import AssetRegistryDefault2 from "../../../../../../_runtime/07700_AssetRegistry.js";
import getRoleIcon from "../getRoleIcon.tsx";
import react_native2 from "../../../../../../_runtime/00017_react-native.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../../stores/GuildMemberStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import 00012__ from "../../../../../../_runtime/metro/00012__.js";
import size from "../../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ processColor: c3, Image: closure_4 } = react_native2);
const Permissions = Constants.Permissions;
let closure_11 = module_12.memoize((arg0) => {
  let tmp4;
  let tmpResult;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(arg0);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const obj2 = { defaultUsernameColor: tmpResult.processColorOrThrow(tmp4) };
  tmp4 = isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_630;
  tmpResult = react_native;
  return obj2;
});
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx");

export const createAutoModerationActionSystemMessage = function createAutoModerationActionSystemMessage(message) {
  let avatar1;
  let channelName;
  let colorString;
  let content;
  let embedChannel;
  let embedChannelId;
  let ensureAvatarSource2;
  let ensureAvatarSourceResult;
  let flaggedMessageId;
  let formatToPlainString2Result;
  let guildMemberAvatar;
  let iconRoleId;
  let id;
  let interactionUserId;
  let internal;
  let internal2;
  let internal3;
  let internal4;
  let internal5;
  let internal6;
  let internal7;
  let internal8;
  let intl11;
  let intl12;
  let intl14;
  let intl17;
  let intl18;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl9;
  let keyword;
  let makeSource;
  let obj12;
  let obj15;
  let obj18;
  let obj19;
  let obj9;
  let processColorOrThrow;
  let processColorOrThrow2;
  let processColorOrThrow3;
  let processColorOrThrow4;
  let processColorOrThrow5;
  let processColorOrThrow6;
  let processColorOrThrow7;
  let processColorOrThrow8;
  let quarantineType;
  let resolveAssetSource;
  let resolveAssetSource2;
  let resolveAssetSource3;
  let resolveAssetSource4;
  let resolveAssetSource5;
  let roleStyle;
  let ruleName;
  let str3;
  let string2Result;
  let stringResult1;
  let theme;
  let tmp35;
  let tmp67Result2;
  let tmp73;
  let tmpResult37;
  let tmpResult43;
  let tmpResult46;
  let tmpResult49;
  let tmpResult57;
  let tmpResult59;
  let tmpResult60;
  let tmpResult61;
  let tmpResult62;
  ({ message, theme, roleStyle } = message);
  const defaultUsernameColor = closure_11(theme).defaultUsernameColor;
  const obj = AutomodMessageUtils;
  if (obj.isAutomodMessageRecord(message)) {
    const tmpResult = AutomodMessageUtils;
    const result = tmpResult.extractAutomodMessageFields(message);
    ({ keyword, embedChannel, flaggedMessageId, quarantineType } = result);
    ({ ruleName, content, embedChannelId, interactionUserId } = result);
    const channel = ChannelStore.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const tmpResult32 = useMessageAuthor;
    const messageAuthor = tmpResult32.getMessageAuthor(message);
    ({ guildMemberAvatar, colorString, iconRoleId } = messageAuthor);
    const author = message.author;
    const nick = messageAuthor.nick;
    const canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, embedChannel);
    const tmpResult33 = AutomodMessageUtils;
    let str = tmpResult33.getActionHeaderTextMobile(message, author, interactionUserId);
    const intl = intl19.intl;
    const stringResult = intl.string(intl19.t["94JbM3"]);
    const tmpResult34 = AutomodMessageUtils;
    const result1 = tmpResult34.isAutomodNotification(message);
    let tmp14 = null;
    let raidAlertResolveCTAText = stringResult;
    if (result1) {
      let formatToPlainStringResult;
      const tmpResult35 = AutomodMessageUtils;
      const result2 = tmpResult35.extractAutomodNotificationFields(message);
      const notificationType = result2.notificationType;
      if (AutomodMessageUtils.IS_BACKWARDS_COMPAT_RAID_TYPE !== notificationType) {
        if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.RAID !== notificationType) {
          if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.MENTION_RAID === notificationType) {
            let fromNowResult;
            if (null != result2.raidDatetime) {
              const obj13 = _modDef4467(result2.raidDatetime);
              fromNowResult = obj13.fromNow();
            }
            const obj2 = { subtitleLeft: fromNowResult, header: intl5.string(intl19.t.C2uIXE), headerColor: processColorOrThrow3(internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL)), headerIconURL: resolveAssetSource2(tmpResult37.makeSource(AssetRegistryDefault)).uri, headerIconColor: processColorOrThrow4(internal4.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL)), body: intl6.string(intl19.t.SWIWEV), shouldShowActions: false };
            intl5 = intl19.intl;
            processColorOrThrow3 = react_native.processColorOrThrow;
            react_native;
            internal3 = nativeDefault.internal;
            resolveAssetSource2 = React3.resolveAssetSource;
            tmpResult37 = AvatarUtils;
            processColorOrThrow4 = react_native.processColorOrThrow;
            react_native;
            internal4 = nativeDefault.internal;
            intl6 = intl19.intl;
            str = "";
            tmp14 = obj2;
            raidAlertResolveCTAText = stringResult;
          } else if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === notificationType) {
            const tmpResult39 = AutomodMessageUtils;
            const userIdOfAutomodAction = tmpResult39.getUserIdOfAutomodAction(message);
            const user = UserStore.getUser(userIdOfAutomodAction);
            let member = null;
            if (null != userIdOfAutomodAction) {
              member = null;
              if (null != guildId) {
                member = GuildMemberStore.getMember(guildId, userIdOfAutomodAction);
              }
            }
            let nick1;
            if (member != null) {
              nick1 = member.nick;
            }
            if (nick1 == null) {
              let username;
              if (user != null) {
                username = user.username;
              }
              nick1 = username;
            }
            let avatar;
            const ensureAvatarSource = utils_AvatarUtils.ensureAvatarSource;
            utils_AvatarUtils;
            if (member != null) {
              avatar = member.avatar;
            }
            if (null != avatar) {
              let guildMemberAvatarSource;
              if (null != guildId) {
                const obj3 = { userId: author.id, avatar: avatar1, guildId };
                avatar1 = undefined;
                const getGuildMemberAvatarSource = AvatarUtils.getGuildMemberAvatarSource;
                AvatarUtils;
                if (member != null) {
                  avatar1 = member.avatar;
                }
                guildMemberAvatarSource = getGuildMemberAvatarSource(obj3, author);
              }
              const obj4 = { header: intl2.string(intl19.t.lVLiFp), headerColor: processColorOrThrow(internal.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_POSITIVE)), headerIconURL: resolveAssetSource(tmpResult43.makeSource(AssetRegistryDefault2)).uri, headerIconColor: processColorOrThrow2(internal2.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_POSITIVE)), body: intl3.string(intl19.t["QV/8u5"]), shouldShowActions: false, subtitleRight: obj12.fromNow(), subtitleLeft: intl4.string(intl19.t.qlFrXW), enabledByAvatarURL: ensureAvatarSourceResult.uri, enabledByUsername: nick1, enabledByColor: tmp35 };
              ensureAvatarSourceResult = ensureAvatarSource(guildMemberAvatarSource);
              intl2 = intl19.intl;
              processColorOrThrow = react_native.processColorOrThrow;
              react_native;
              internal = nativeDefault.internal;
              resolveAssetSource = React3.resolveAssetSource;
              tmpResult43 = AvatarUtils;
              processColorOrThrow2 = react_native.processColorOrThrow;
              react_native;
              internal2 = nativeDefault.internal;
              intl3 = intl19.intl;
              obj12 = _modDef4467(message.timestamp);
              intl4 = intl19.intl;
              let colorString1;
              if (member != null) {
                colorString1 = member.colorString;
              }
              tmp35 = undefined;
              if (null != colorString1) {
                tmp35 = _false(member.colorString);
              }
              str = "";
              tmp14 = obj4;
              raidAlertResolveCTAText = stringResult;
            }
            guildMemberAvatarSource = author.getAvatarSource(undefined, false, 16);
          } else {
            const obj5 = { header: intl17.string(intl19.t.VdZCcC), headerColor: processColorOrThrow7(internal7.resolveSemanticColor(theme, nativeDefault.colors.TEXT_SUBTLE)), headerIconURL: resolveAssetSource5(tmpResult46.makeSource(AssetRegistryDefault)).uri, headerIconColor: processColorOrThrow8(internal8.resolveSemanticColor(theme, nativeDefault.colors.TEXT_SUBTLE)), body: intl18.string(intl19.t["NxHYX/"]), shouldShowActions: false };
            intl17 = intl19.intl;
            processColorOrThrow7 = react_native.processColorOrThrow;
            react_native;
            internal7 = nativeDefault.internal;
            resolveAssetSource5 = React3.resolveAssetSource;
            tmpResult46 = AvatarUtils;
            processColorOrThrow8 = react_native.processColorOrThrow;
            react_native;
            internal8 = nativeDefault.internal;
            intl18 = intl19.intl;
            str = "";
            tmp14 = obj5;
            raidAlertResolveCTAText = stringResult;
          }
        }
      }
      let fromNowResult1;
      if (null != result2.raidDatetime) {
        const obj16 = _modDef4467(result2.raidDatetime);
        fromNowResult1 = obj16.fromNow();
      }
      const raidType = result2.raidType;
      let str2 = "";
      const DM_RAID = AutomodRaidAlertTypes.AutomodRaidAlertTypes.DM_RAID;
      if (null != result2.raidDatetime) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const toLocaleString = new Date(result2.raidDatetime).toLocaleString;
        const date = new Date(result2.raidDatetime);
        str2 = toLocaleString(intl19.intl.currentLocale, GuildAntiRaidUtils.DATE_CONFIG);
      }
      const intl7 = intl19.intl;
      const formatToPlainString = intl7.formatToPlainString;
      const t = intl19.t;
      if (raidType === DM_RAID) {
        const obj6 = { dmsSent: result2.dmsSent };
        formatToPlainStringResult = formatToPlainString(t["5C8Mh3"], obj6);
      } else {
        const obj7 = { joinCount: result2.joinAttempts };
        formatToPlainStringResult = formatToPlainString(t["4ylIiu"], obj7);
      }
      const obj8 = { subtitleLeft: formatToPlainStringResult, severity: formatToPlainStringResult, subtitleRight: fromNowResult1, startTime: fromNowResult1, header: stringResult1, headerColor: processColorOrThrow5(internal5.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL)), headerIconURL: resolveAssetSource3(tmpResult49.makeSource(importDefault(raidType === DM_RAID ? 7699 : 4808))).uri, headerIconColor: processColorOrThrow6(internal6.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL)), body: intl9.formatToPlainString(intl19.t["4QIIZl"], obj9), shouldShowActions: true };
      const intl8 = intl19.intl;
      const string = intl8.string;
      const t2 = intl19.t;
      if (raidType === DM_RAID) {
        stringResult1 = string(t2["8+lHUb"]);
      } else {
        stringResult1 = string(t2.xMwcwV);
      }
      processColorOrThrow5 = react_native.processColorOrThrow;
      react_native;
      internal5 = nativeDefault.internal;
      resolveAssetSource3 = React3.resolveAssetSource;
      tmpResult49 = AvatarUtils;
      processColorOrThrow6 = react_native.processColorOrThrow;
      react_native;
      internal6 = nativeDefault.internal;
      intl9 = intl19.intl;
      obj9 = { dateTime: str2 };
      const intl10 = intl19.intl;
      str = intl10.string(intl19.t.ufawcw);
      const tmpResult51 = AutomodMessageUtils;
      raidAlertResolveCTAText = tmpResult51.getRaidAlertResolveCTAText(result2.resolvedReason);
      tmp14 = obj8;
    }
    let uri = null;
    if (null != guildId) {
      utils_AvatarUtils;
      if (null != guildMemberAvatar) {
        let guildMemberAvatarSource1;
        if (null != guildId) {
          const obj10 = { userId: author.id, avatar: guildMemberAvatar, guildId };
          const tmpResult53 = AvatarUtils;
          guildMemberAvatarSource1 = tmpResult53.getGuildMemberAvatarSource(obj10, author);
        }
        uri = tmp57(guildMemberAvatarSource1).uri;
      }
      guildMemberAvatarSource1 = author.getAvatarSource(undefined);
    }
    let member1 = null;
    if (null != guildId) {
      member1 = GuildMemberStore.getMember(guildId, author.id);
    }
    let roleIcon;
    if (null != iconRoleId) {
      if (null != guildId) {
        const obj11 = { guildId, roleId: iconRoleId, size: 18 };
        const tmpResult54 = getRoleIcon;
        roleIcon = tmpResult54.getRoleIcon(obj11);
      }
    }
    const obj14 = { roleIcon, authorId: author.id, username: intl11.string(intl19.t.hG1StD), avatarURL: ensureAvatarSource2(makeSource(tmpResult57.getAutomodAvatarURL())).uri, colorString: _false(colorString), autoModerationContext: obj15 };
    const merged = Object.assign(createCommonMessageDefault(message));
    intl11 = intl19.intl;
    ensureAvatarSource2 = utils_AvatarUtils.ensureAvatarSource;
    utils_AvatarUtils;
    makeSource = AvatarUtils.makeSource;
    AvatarUtils;
    tmpResult57 = utils_AvatarUtils;
    obj15 = { headerText: str, headerBadgeText: intl12.string(intl19.t["70CJbT"]), keywordDisplayText: str3, message: obj18, notification: tmp14, ruleDisplayText: intl14.formatToPlainString(intl19.t.ZoOyKB, obj19), reasonDisplayText: formatToPlainString2Result, actionsIconURL: resolveAssetSource4(tmpResult62.makeSource(importDefault(result1 ? 7702 : 7703))).uri, actionsText: string2Result, feedbackText: raidAlertResolveCTAText };
    intl12 = intl19.intl;
    str3 = "";
    if (null != keyword) {
      const intl13 = intl19.intl;
      const obj17 = { keyword };
      str3 = intl13.formatToPlainString(intl19.t.SYIUTR, obj17);
    }
    if (flaggedMessageId == null) {
      flaggedMessageId = message.id;
    }
    obj18 = { id: flaggedMessageId, channelId: id, guildId, userId: author.id, channelName, username: nick, usernameColor: tmp73, roleColor: _false(colorString), shouldShowRoleDot: "dot" === roleStyle && null != colorString, colorString: tmp67Result2, avatarURL: uri, content, communicationDisabled: tmpResult59.isMemberCommunicationDisabled(member1), timestamp: tmpResult60.accessibilityLabelCalendarFormat(message.timestamp) };
    id = undefined;
    if (embedChannel != null) {
      id = embedChannel.id;
    }
    if (id == null) {
      id = embedChannelId;
    }
    if (id == null) {
      id = message.channel_id;
    }
    channelName = undefined;
    if (canResult) {
      if (null == quarantineType) {
        if (null != embedChannel) {
          const tmpResult58 = useChannelName;
          channelName = tmpResult58.computeChannelName(embedChannel, UserStore, RelationshipStore);
        }
      }
    }
    tmp73 = defaultUsernameColor;
    if ("username" === roleStyle) {
      let tmp67Result = _false(colorString);
      if (tmp67Result == null) {
        tmp67Result = defaultUsernameColor;
      }
      tmp73 = tmp67Result;
    }
    tmp67Result2 = _false(colorString);
    if (tmp67Result2 == null) {
      tmp67Result2 = defaultUsernameColor;
    }
    tmpResult59 = CommunicationDisabledUtils;
    tmpResult60 = DateUtils;
    intl14 = intl19.intl;
    formatToPlainString2Result = null;
    obj19 = { ruleName };
    if (null != quarantineType) {
      const intl15 = intl19.intl;
      const formatToPlainString2 = intl15.formatToPlainString;
      const obj20 = { reason: tmpResult61.getQuarantineReasonString(quarantineType) };
      const v26bB2M = intl19.t["26bB2M"];
      tmpResult61 = AutomodMessageUtils;
      formatToPlainString2Result = formatToPlainString2(v26bB2M, obj20);
    }
    resolveAssetSource4 = React3.resolveAssetSource;
    tmpResult62 = AvatarUtils;
    const intl16 = intl19.intl;
    const string2 = intl16.string;
    const t3 = intl19.t;
    if (result1) {
      string2Result = string2(t3.UgXhdn);
    } else {
      string2Result = string2(t3.DEoVWZ);
    }
    return obj14;
  } else {
    return null;
  }
};