// === Module 4522: ToastUtils ===

// Module 4522 (ToastUtils)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import v1 from "v1" /* 1255 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4523 */;
import FriendsIcon from "FriendsIcon" /* 4524 */;
import UserPlatformIcon from "UserPlatformIcon" /* 4767 */;
import UserMinusIcon from "UserMinusIcon" /* 4769 */;
import LinkIcon from "LinkIcon" /* 4771 */;
import SendMessageIcon from "SendMessageIcon" /* 4773 */;
import CopyIcon from "CopyIcon" /* 4775 */;
import DownloadIcon from "DownloadIcon" /* 4777 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4779 */;
import XLargeIcon2 from "XLargeIcon" /* 4781 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4783 */;
import TrashIcon from "TrashIcon" /* 4786 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4788 */;
import ClockIcon from "ClockIcon" /* 4791 */;
import size from "module_2" /* 2 */;

const VerificationCriteria = Constants.VerificationCriteria;
const result = size.fileFinishedImporting("modules/toast/native/ToastUtils.tsx");

export const presentAddedFriendToast = function presentAddedFriendToast() {
  const obj2 = { key: "TOAST_ADD_FRIEND", content: null, iconColor: "status-positive", IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.Fn5bwO);
  obj2.IconComponent = FriendsIcon.FriendsIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentFriendRequestAcceptedToast = function presentFriendRequestAcceptedToast(dependencyMap) {
  if (null == dependencyMap) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.UhJna5);
    let tmp2 = require;
  } else {
    tmp2 = require;
    const intl = util.intl;
    const obj2 = { username: dependencyMap.username };
    stringResult = intl.formatToPlainString(util.t.b3eoD4, obj2);
  }
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "TOAST_FRIEND_REQUEST_ACCEPTED", content: stringResult, IconComponent: tmp2(4765).UserPlusIcon, iconColor: "status-positive" });
  const obj3 = { key: "TOAST_FRIEND_REQUEST_ACCEPTED", content: stringResult, IconComponent: tmp2(4765).UserPlusIcon, iconColor: "status-positive" };
};
export const presentGameFriendRequestAcceptedToast = function presentGameFriendRequestAcceptedToast() {
  const obj2 = { key: "TOAST_GAME_FRIEND_REQUEST_ACCEPTED", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.xjNLeZ);
  obj2.IconComponent = UserPlatformIcon.UserPlatformIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentFriendRequestIgnoredToast = function presentFriendRequestIgnoredToast() {
  const obj2 = { key: "TOAST_FRIEND_REQUEST_IGNORED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.YlavlY);
  obj2.IconComponent = UserMinusIcon.UserMinusIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentGameFriendRequestIgnoredToast = function presentGameFriendRequestIgnoredToast() {
  const obj2 = { key: "TOAST_GAME_FRIEND_REQUEST_IGNORED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.P6BzJP);
  obj2.IconComponent = UserMinusIcon.UserMinusIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentLinkCopied = function presentLinkCopied() {
  const obj2 = { key: "LINK_COPIED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["+5kSoW"]);
  obj2.IconComponent = LinkIcon.LinkIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentInviteSent = function presentInviteSent() {
  const obj2 = { key: "INVITE_SENT", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.sVwWdV);
  obj2.IconComponent = SendMessageIcon.SendMessageIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentIdCopied = function presentIdCopied() {
  const obj2 = { key: "TOAST_ID_COPIED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.eNjAah);
  obj2.IconComponent = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentImageSaved = function presentImageSaved() {
  const obj2 = { key: "TOAST_IMAGE_SAVED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.cqpdJW);
  obj2.IconComponent = DownloadIcon.DownloadIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentVideoSaved = function presentVideoSaved() {
  const obj2 = { key: "TOAST_VIDEO_SAVED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["cEK+1g"]);
  obj2.IconComponent = DownloadIcon.DownloadIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentGifSaved = function presentGifSaved() {
  const obj2 = { key: "TOAST_GIF_SAVED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.LktEtN);
  obj2.IconComponent = DownloadIcon.DownloadIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentMessageCopied = function presentMessageCopied() {
  const obj2 = { key: "TOAST_MESSAGE_COPIED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.R3o53R);
  obj2.IconComponent = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentMessageIdCopied = function presentMessageIdCopied() {
  const obj2 = { key: "TOAST_MESSAGE_ID_COPIED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.svRBmK);
  obj2.IconComponent = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentPostIdCopied = function presentPostIdCopied() {
  const obj2 = { key: "TOAST_FORUM_POST_ID_COPIED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.aBQ2RP);
  obj2.IconComponent = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentUsernameCopied = function presentUsernameCopied() {
  const obj2 = { key: "TOAST_USERNAME_SAVED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["FHVR/+"]);
  obj2.IconComponent = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentFeedbackSent = function presentFeedbackSent() {
  const obj2 = { key: "TOAST_FEEDBACK_SENT", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.xpiDtu);
  obj2.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentEmoji = function presentEmoji(id) {
  const emojiURL = AvatarUtilsDefault.getEmojiURL({ id: id.id, animated: id.animated, size: 48 });
  const obj2 = { id: id.id, animated: id.animated, size: 48 };
  const obj3 = ToastActionCreatorsDefault;
  obj3.open({ key: "PRESENT_EMOJI-" + id.id, content: ":" + id.name + ":", icon: { uri: emojiURL } });
};
export const presentNoiseCancellation = function presentNoiseCancellation(arg0) {
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (arg0) {
    let stringResult = string(t["Q+fhfv"]);
    let tmp4 = require;
  } else {
    stringResult = string(t.hEMHnF);
    tmp4 = require;
  }
  const obj2 = { key: "NOISE_CANCELLATION_TOGGLE", content: stringResult, IconComponent: null, iconColor: null };
  if (arg0) {
    let XLargeIcon = tmp4(4779).CheckmarkLargeIcon;
  } else {
    XLargeIcon = tmp4(4781).XLargeIcon;
  }
  obj2.IconComponent = XLargeIcon;
  let str = "icon-feedback-critical";
  if (arg0) {
    str = "status-positive";
  }
  obj2.iconColor = str;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentNoiseCancellationError = function presentNoiseCancellationError() {
  const obj2 = { key: "MOBILE_NOISE_CANCELLATION_CPU_OVERUSE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.DnmX2G);
  obj2.IconComponent = XLargeIcon2.XLargeIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentError = function presentError(intl) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "ERROR", content: intl, IconComponent: XLargeIcon2.XLargeIcon, iconColor: "icon-feedback-critical" });
};
export const presentVoiceActivityDetectionError = function presentVoiceActivityDetectionError() {
  const obj2 = { key: "MOBILE_ADVANCED_VOICE_ACTIVITY_CPU_OVERUSE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.zz1Tft);
  obj2.IconComponent = XLargeIcon2.XLargeIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const roleIdCopied = function roleIdCopied(combined) {
  const obj2 = { key: "ROLE_ID_COPIED-" + combined, content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t.iOWpeB, { role: combined });
  obj2.IconComponent = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const communityRequirementSatisfied = function communityRequirementSatisfied() {
  const obj2 = { key: "ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.PHjrpp);
  obj2.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const communityAdminOnly = function communityAdminOnly() {
  const obj2 = { key: "GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["pjG+T3"]);
  obj2.IconComponent = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const unverifiedVoiceGate = function unverifiedVoiceGate(check) {
  ({ missingVerificationRole, verificationRole } = check);
  if (check.notClaimed) {
    const intl6 = util.intl;
    let stringResult = intl6.string(util.t.IRxUlG);
  } else if (tmp2) {
    const intl5 = util.intl;
    stringResult = intl5.string(util.t.vW8iUF);
  } else if (tmp) {
    const intl4 = util.intl;
    stringResult = intl4.string(util.t.vdSOpz);
  } else if (tmp4) {
    const intl3 = util.intl;
    const obj2 = { min: VerificationCriteria.MEMBER_AGE };
    stringResult = intl3.formatToPlainString(util.t.v1ktYb, obj2);
  } else if (tmp3) {
    const intl2 = util.intl;
    const obj3 = { min: VerificationCriteria.ACCOUNT_AGE };
    stringResult = intl2.formatToPlainString(util.t.sncw41, obj3);
  } else {
    if (missingVerificationRole) {
      missingVerificationRole = null != verificationRole;
    }
    stringResult = null;
    if (missingVerificationRole) {
      const intl = util.intl;
      const obj = { roleName: null };
      const _HermesInternal = HermesInternal;
      obj.roleName = "@" + verificationRole.name;
      stringResult = intl.formatToPlainString(util.t.MZbCuG, obj);
    }
  }
  if (null != stringResult) {
    const obj5 = { key: "UNVERIFIED_VOICE_GATE", content: stringResult, IconComponent: CircleInformationIcon.CircleInformationIcon };
    ToastActionCreatorsDefault.open(obj5);
  }
};
export const transferOwnershipProtected = function transferOwnershipProtected() {
  const obj2 = { key: "TRANSFER_OWNERSHIP_PROTECTED_GUILD", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.wDkfrN);
  obj2.IconComponent = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const memberOrRoleRemovedToast = function memberOrRoleRemovedToast(name) {
  const obj2 = { key: "PRIVATE_CHANNEL_MEMBERS_REMOVED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t.vJGtXc, { name });
  obj2.IconComponent = TrashIcon.TrashIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const memberOrRoleAddedToast = function memberOrRoleAddedToast(count, count2) {
  if (count > 0) {
    if (count2 > 0) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.fRD8wW);
    }
    if (null != stringResult) {
      const obj2 = { key: "MEMBER_OR_ROLE_ADDED", content: stringResult, IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon, iconColor: "status-positive" };
      ToastActionCreatorsDefault.open(obj2);
    }
  }
  if (count > 0) {
    const intl2 = util.intl;
    const obj4 = { count };
    stringResult = intl2.formatToPlainString(util.t["yM/8JE"], obj4);
  } else if (count2 > 0) {
    const intl = util.intl;
    const obj = { count: count2 };
    stringResult = intl.formatToPlainString(util.t.yvV5Ye, obj);
  }
};
export const roleTemplateAppliedToast = function roleTemplateAppliedToast() {
  const obj2 = { key: "ROLE_PERMISSION_TEMPLATE_SELECT_CONFIRMATION_TOAST", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.e6xHUV);
  obj2.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const roleCreatedToast = function roleCreatedToast() {
  const obj2 = { key: "ROLE_CREATED_TOAST", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.kubT4R);
  obj2.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const roleCreateFailedToast = function roleCreateFailedToast() {
  const obj2 = { key: "ROLE_CREATION_FAILED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.hbr6Uj);
  obj2.IconComponent = XLargeIcon2.XLargeIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentFailedToast = function presentFailedToast(intl) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "FAILED", content: intl, IconComponent: XLargeIcon2.XLargeIcon, iconColor: "icon-feedback-critical" });
};
export const presentCommandCopied = function presentCommandCopied() {
  const obj2 = { key: "TOAST_COMMAND_COPIED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.U989ct);
  obj2.IconComponent = LinkIcon.LinkIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentGuildMemberBio = function presentGuildMemberBio(guildName, arg1) {
  closure_0 = arg1;
  const obj2 = { key: "GUILD_IDENTITY_BIO_TOAST", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t.pOy2tm, { guildName });
  obj2.icon = function icon() {
    return closure_0;
  };
  ToastActionCreatorsDefault.open(obj2);
};
export const presentGuildMemberPronouns = function presentGuildMemberPronouns(guildName, arg1) {
  closure_0 = arg1;
  const obj2 = { key: "GUILD_IDENTITY_PRONOUNS_TOAST", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t.gPVLS0, { guildName });
  obj2.icon = function icon() {
    return closure_0;
  };
  ToastActionCreatorsDefault.open(obj2);
};
export const presentUserPronouns = function presentUserPronouns() {
  const obj2 = { key: "USER_POPOUT_PRONOUNS", content: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["1w6drw"]);
  ToastActionCreatorsDefault.open(obj2);
};
export const presentCopiedToClipboard = function presentCopiedToClipboard() {
  const obj2 = { key: null, content: null, IconComponent: null };
  const obj = ToastActionCreatorsDefault;
  obj2.key = "COPIED_TEXT_" + v1.v4();
  const intl = util.intl;
  obj2.content = intl.string(util.t.mGZ66D);
  obj2.IconComponent = CopyIcon.CopyIcon;
  obj.open(obj2);
};
export const presentGuildRoleSubscriptionTrialTierMonthCost = function presentGuildRoleSubscriptionTrialTierMonthCost() {
  const obj2 = { key: "GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["/q6fpa"]);
  obj2.IconComponent = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showVoiceRecordingFailed = function showVoiceRecordingFailed() {
  const obj2 = { key: "VOICE_MESSAGES_RECORDING_FAILED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.H03AqF);
  obj2.IconComponent = XLargeIcon2.XLargeIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showMaxGroupMembers = function showMaxGroupMembers() {
  const obj2 = { key: "GROUP_DM_INVITE_FULL_MAIN", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.OtTQDz);
  obj2.IconComponent = XLargeIcon2.XLargeIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showTransferOwnershipSuccess = function showTransferOwnershipSuccess() {
  const obj2 = { key: "TRANSFER_OWNERSHIP_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t["2Eyydu"]);
  obj2.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showSafetySuccess = function showSafetySuccess(BLOCK_SUCCESS, safetyToastTypeContent) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: BLOCK_SUCCESS, content: safetyToastTypeContent, IconComponent: CircleCheckIcon.CircleCheckIcon, iconColor: "status-positive" });
};
export const showVerificationSent = function showVerificationSent() {
  const obj2 = { key: "VERIFICATION_RESENT", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.gI8IST);
  obj2.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const presentTimestamp = function presentTimestamp(full) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "MESSAGE_TIMESTAMP", content: full, IconComponent: ClockIcon.ClockIcon });
};