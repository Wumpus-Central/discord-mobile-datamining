// discord_app/modules/toast/native/ToastUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import v1 from "../../../../_runtime/00514_v1.js";
import ME from "../../../Constants.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import dispatcherDefault from "ToastActionCreators.tsx";
import FriendsIcon from "../../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import UserPlatformIcon from "../../../design/components/Icon/native/redesign/generated/UserPlatformIcon.tsx";
import UserMinusIcon from "../../../design/components/Icon/native/redesign/generated/UserMinusIcon.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import SendMessageIcon from "../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import CopyIcon from "../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import DownloadIcon from "../../../design/components/Icon/native/redesign/generated/DownloadIcon.tsx";
import CheckmarkLargeIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import XLargeIcon2 from "../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import TrashIcon from "../../../design/components/Icon/native/redesign/generated/TrashIcon.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";

const VerificationCriteria = ME.VerificationCriteria;
const result = set.fileFinishedImporting("modules/toast/native/ToastUtils.tsx");

export const presentAddedFriendToast = function presentAddedFriendToast() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_ADD_FRIEND", content: null, iconColor: "status-positive", IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.Fn5bwO);
  obj[3] = FriendsIcon.FriendsIcon;
  obj.open(obj);
};
export const presentFriendRequestAcceptedToast = function presentFriendRequestAcceptedToast(username) {
  let obj = dispatcherDefault;
  if (null == username) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t.UhJna5);
    let tmp2 = require;
  } else {
    tmp2 = require;
    const intl = getSystemLocale.intl;
    obj = { username: null };
    obj[0] = username.username;
    stringResult = intl.formatToPlainString(getSystemLocale.t.b3eoD4, obj);
  }
  obj = { key: "TOAST_FRIEND_REQUEST_ACCEPTED", content: stringResult, IconComponent: tmp2(4382).UserPlusIcon, iconColor: "status-positive" };
  obj.open(obj);
};
export const presentGameFriendRequestAcceptedToast = function presentGameFriendRequestAcceptedToast() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_GAME_FRIEND_REQUEST_ACCEPTED", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.xjNLeZ);
  obj[2] = UserPlatformIcon.UserPlatformIcon;
  obj.open(obj);
};
export const presentFriendRequestIgnoredToast = function presentFriendRequestIgnoredToast() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_FRIEND_REQUEST_IGNORED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.YlavlY);
  obj[2] = UserMinusIcon.UserMinusIcon;
  obj.open(obj);
};
export const presentGameFriendRequestIgnoredToast = function presentGameFriendRequestIgnoredToast() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_GAME_FRIEND_REQUEST_IGNORED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.P6BzJP);
  obj[2] = UserMinusIcon.UserMinusIcon;
  obj.open(obj);
};
export const presentLinkCopied = function presentLinkCopied() {
  let obj = dispatcherDefault;
  obj = { key: "LINK_COPIED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["+5kSoW"]);
  obj[2] = LinkIcon.LinkIcon;
  obj.open(obj);
};
export const presentInviteSent = function presentInviteSent() {
  let obj = dispatcherDefault;
  obj = { key: "INVITE_SENT", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.sVwWdV);
  obj[2] = SendMessageIcon.SendMessageIcon;
  obj.open(obj);
};
export const presentIdCopied = function presentIdCopied() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_ID_COPIED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.eNjAah);
  obj[2] = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const presentImageSaved = function presentImageSaved() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_IMAGE_SAVED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.cqpdJW);
  obj[2] = DownloadIcon.DownloadIcon;
  obj.open(obj);
};
export const presentVideoSaved = function presentVideoSaved() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_VIDEO_SAVED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["cEK+1g"]);
  obj[2] = DownloadIcon.DownloadIcon;
  obj.open(obj);
};
export const presentGifSaved = function presentGifSaved() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_GIF_SAVED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.LktEtN);
  obj[2] = DownloadIcon.DownloadIcon;
  obj.open(obj);
};
export const presentMessageCopied = function presentMessageCopied() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_MESSAGE_COPIED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.R3o53R);
  obj[2] = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const presentMessageIdCopied = function presentMessageIdCopied() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_MESSAGE_ID_COPIED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.svRBmK);
  obj[2] = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const presentPostIdCopied = function presentPostIdCopied() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_FORUM_POST_ID_COPIED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.aBQ2RP);
  obj[2] = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const presentUsernameCopied = function presentUsernameCopied() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_USERNAME_SAVED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["FHVR/+"]);
  obj[2] = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const presentFeedbackSent = function presentFeedbackSent() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_FEEDBACK_SENT", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.xpiDtu);
  obj[2] = CheckmarkLargeIcon.CheckmarkLargeIcon;
  obj.open(obj);
};
export const presentEmoji = function presentEmoji(closure_0) {
  let obj = getAvatarURLDefault;
  obj = { id: closure_0.id, animated: closure_0.animated, size: 48 };
  const emojiURL = obj.getEmojiURL(obj);
  obj = { key: "PRESENT_EMOJI-" + closure_0.id, content: ":" + closure_0.name + ":", icon: { uri: emojiURL } };
  dispatcherDefault.open(obj);
};
export const presentNoiseCancellation = function presentNoiseCancellation(arg0) {
  let obj = dispatcherDefault;
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (arg0) {
    let stringResult = string(t["Q+fhfv"]);
    let tmp4 = tmp2;
  } else {
    stringResult = string(t.hEMHnF);
    tmp4 = tmp2;
  }
  obj = { key: "NOISE_CANCELLATION_TOGGLE", content: stringResult, IconComponent: null, iconColor: null };
  if (arg0) {
    let XLargeIcon = tmp4(4396).CheckmarkLargeIcon;
  } else {
    XLargeIcon = tmp4(4398).XLargeIcon;
  }
  obj[2] = XLargeIcon;
  let str = "icon-feedback-critical";
  if (arg0) {
    str = "status-positive";
  }
  obj[3] = str;
  obj.open(obj);
};
export const presentNoiseCancellationError = function presentNoiseCancellationError() {
  let obj = dispatcherDefault;
  obj = { key: "MOBILE_NOISE_CANCELLATION_CPU_OVERUSE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.DnmX2G);
  obj[2] = XLargeIcon2.XLargeIcon;
  obj.open(obj);
};
export const presentError = function presentError(intl) {
  let obj = dispatcherDefault;
  obj = { key: "ERROR", content: intl, IconComponent: XLargeIcon2.XLargeIcon, iconColor: "icon-feedback-critical" };
  obj.open(obj);
};
export const presentVoiceActivityDetectionError = function presentVoiceActivityDetectionError() {
  let obj = dispatcherDefault;
  obj = { key: "MOBILE_ADVANCED_VOICE_ACTIVITY_CPU_OVERUSE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.zz1Tft);
  obj[2] = XLargeIcon2.XLargeIcon;
  obj.open(obj);
};
export const roleIdCopied = function roleIdCopied(closure_2) {
  let obj = dispatcherDefault;
  obj = { key: "ROLE_ID_COPIED-" + closure_2, content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj = { role: closure_2 };
  obj[1] = intl.formatToPlainString(getSystemLocale.t.iOWpeB, obj);
  obj[2] = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const communityRequirementSatisfied = function communityRequirementSatisfied() {
  let obj = dispatcherDefault;
  obj = { key: "ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.PHjrpp);
  obj[2] = CheckmarkLargeIcon.CheckmarkLargeIcon;
  obj.open(obj);
};
export const communityAdminOnly = function communityAdminOnly() {
  let obj = dispatcherDefault;
  obj = { key: "GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["pjG+T3"]);
  obj[2] = CircleInformationIcon.CircleInformationIcon;
  obj.open(obj);
};
export const unverifiedVoiceGate = function unverifiedVoiceGate(check) {
  ({ missingVerificationRole, verificationRole } = check);
  if (check.notClaimed) {
    const intl6 = getSystemLocale.intl;
    let stringResult = intl6.string(getSystemLocale.t.IRxUlG);
  } else if (tmp2) {
    const intl5 = getSystemLocale.intl;
    stringResult = intl5.string(getSystemLocale.t.vW8iUF);
  } else if (tmp) {
    const intl4 = getSystemLocale.intl;
    stringResult = intl4.string(getSystemLocale.t.vdSOpz);
  } else if (tmp4) {
    const intl3 = getSystemLocale.intl;
    let obj = { min: null };
    obj[0] = VerificationCriteria.MEMBER_AGE;
    stringResult = intl3.formatToPlainString(getSystemLocale.t.v1ktYb, obj);
  } else if (tmp3) {
    const intl2 = getSystemLocale.intl;
    obj = { min: null };
    obj[0] = VerificationCriteria.ACCOUNT_AGE;
    stringResult = intl2.formatToPlainString(getSystemLocale.t.sncw41, obj);
  } else {
    if (missingVerificationRole) {
      missingVerificationRole = null != verificationRole;
    }
    stringResult = null;
    if (missingVerificationRole) {
      const intl = getSystemLocale.intl;
      obj = { roleName: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "@" + verificationRole.name;
      stringResult = intl.formatToPlainString(getSystemLocale.t.MZbCuG, obj);
    }
  }
  if (null != stringResult) {
    obj1 = { key: "UNVERIFIED_VOICE_GATE", content: null, IconComponent: null };
    obj1[1] = stringResult;
    obj1[2] = CircleInformationIcon.CircleInformationIcon;
    dispatcherDefault.open(obj1);
    const obj4 = dispatcherDefault;
  }
};
export const transferOwnershipProtected = function transferOwnershipProtected() {
  let obj = dispatcherDefault;
  obj = { key: "TRANSFER_OWNERSHIP_PROTECTED_GUILD", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.wDkfrN);
  obj[2] = CircleInformationIcon.CircleInformationIcon;
  obj.open(obj);
};
export const memberOrRoleRemovedToast = function memberOrRoleRemovedToast(closure_1) {
  let obj = dispatcherDefault;
  obj = { key: "PRIVATE_CHANNEL_MEMBERS_REMOVED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj = { name: closure_1 };
  obj[1] = intl.formatToPlainString(getSystemLocale.t.vJGtXc, obj);
  obj[2] = TrashIcon.TrashIcon;
  obj.open(obj);
};
export const memberOrRoleAddedToast = function memberOrRoleAddedToast(c1, c0) {
  if (c1 > 0) {
    if (c0 > 0) {
      const intl3 = getSystemLocale.intl;
      let stringResult = intl3.string(getSystemLocale.t.fRD8wW);
    }
    if (null != stringResult) {
      let obj = { key: "MEMBER_OR_ROLE_ADDED", content: null, IconComponent: null, iconColor: "status-positive" };
      obj[1] = stringResult;
      obj[2] = CheckmarkLargeIcon.CheckmarkLargeIcon;
      dispatcherDefault.open(obj);
      const obj3 = dispatcherDefault;
    }
  }
  if (c1 > 0) {
    const intl2 = getSystemLocale.intl;
    obj = { count: null };
    obj[0] = c1;
    stringResult = intl2.formatToPlainString(getSystemLocale.t["yM/8JE"], obj);
  } else if (c0 > 0) {
    const intl = getSystemLocale.intl;
    obj = { count: null };
    obj[0] = c0;
    stringResult = intl.formatToPlainString(getSystemLocale.t.yvV5Ye, obj);
  }
};
export const roleTemplateAppliedToast = function roleTemplateAppliedToast() {
  let obj = dispatcherDefault;
  obj = { key: "ROLE_PERMISSION_TEMPLATE_SELECT_CONFIRMATION_TOAST", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.e6xHUV);
  obj[2] = CheckmarkLargeIcon.CheckmarkLargeIcon;
  obj.open(obj);
};
export const roleCreatedToast = function roleCreatedToast() {
  let obj = dispatcherDefault;
  obj = { key: "ROLE_CREATED_TOAST", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.kubT4R);
  obj[2] = CheckmarkLargeIcon.CheckmarkLargeIcon;
  obj.open(obj);
};
export const roleCreateFailedToast = function roleCreateFailedToast() {
  let obj = dispatcherDefault;
  obj = { key: "ROLE_CREATION_FAILED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.hbr6Uj);
  obj[2] = XLargeIcon2.XLargeIcon;
  obj.open(obj);
};
export const presentFailedToast = function presentFailedToast(intl) {
  let obj = dispatcherDefault;
  obj = { key: "FAILED", content: intl, IconComponent: XLargeIcon2.XLargeIcon, iconColor: "icon-feedback-critical" };
  obj.open(obj);
};
export const presentCommandCopied = function presentCommandCopied() {
  let obj = dispatcherDefault;
  obj = { key: "TOAST_COMMAND_COPIED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.U989ct);
  obj[2] = LinkIcon.LinkIcon;
  obj.open(obj);
};
export const presentGuildMemberBio = function presentGuildMemberBio(guildName) {
  const _require = arg1;
  let obj = dispatcherDefault;
  obj = { key: "GUILD_IDENTITY_BIO_TOAST", content: null, icon: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj = { guildName };
  obj[1] = intl.formatToPlainString(require("../../../intl/index.native.tsx").t.pOy2tm, obj);
  obj[2] = function icon() {
    return closure_0;
  };
  obj.open(obj);
};
export const presentGuildMemberPronouns = function presentGuildMemberPronouns(guildName) {
  const _require = arg1;
  let obj = dispatcherDefault;
  obj = { key: "GUILD_IDENTITY_PRONOUNS_TOAST", content: null, icon: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj = { guildName };
  obj[1] = intl.formatToPlainString(require("../../../intl/index.native.tsx").t.gPVLS0, obj);
  obj[2] = function icon() {
    return closure_0;
  };
  obj.open(obj);
};
export const presentUserPronouns = function presentUserPronouns() {
  let obj = dispatcherDefault;
  obj = { key: "USER_POPOUT_PRONOUNS", content: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["1w6drw"]);
  obj.open(obj);
};
export const presentCopiedToClipboard = function presentCopiedToClipboard() {
  let obj = dispatcherDefault;
  obj = { key: "COPIED_TEXT_" + v1.v4(), content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.mGZ66D);
  obj[2] = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const presentGuildRoleSubscriptionTrialTierMonthCost = function presentGuildRoleSubscriptionTrialTierMonthCost() {
  let obj = dispatcherDefault;
  obj = { key: "GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["/q6fpa"]);
  obj[2] = CircleInformationIcon.CircleInformationIcon;
  obj.open(obj);
};
export const showVoiceRecordingFailed = function showVoiceRecordingFailed() {
  let obj = dispatcherDefault;
  obj = { key: "VOICE_MESSAGES_RECORDING_FAILED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.H03AqF);
  obj[2] = XLargeIcon2.XLargeIcon;
  obj.open(obj);
};
export const showMaxGroupMembers = function showMaxGroupMembers() {
  let obj = dispatcherDefault;
  obj = { key: "GROUP_DM_INVITE_FULL_MAIN", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.OtTQDz);
  obj[2] = XLargeIcon2.XLargeIcon;
  obj.open(obj);
};
export const showTransferOwnershipSuccess = function showTransferOwnershipSuccess() {
  let obj = dispatcherDefault;
  obj = { key: "TRANSFER_OWNERSHIP_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["2Eyydu"]);
  obj[2] = CheckmarkLargeIcon.CheckmarkLargeIcon;
  obj.open(obj);
};
export const showSafetySuccess = function showSafetySuccess(BLOCK_SUCCESS, safetyToastTypeContent) {
  let obj = dispatcherDefault;
  obj = { key: BLOCK_SUCCESS, content: safetyToastTypeContent, IconComponent: CircleCheckIcon.CircleCheckIcon, iconColor: "status-positive" };
  obj.open(obj);
};
export const showVerificationSent = function showVerificationSent() {
  let obj = dispatcherDefault;
  obj = { key: "VERIFICATION_RESENT", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.gI8IST);
  obj[2] = CheckmarkLargeIcon.CheckmarkLargeIcon;
  obj.open(obj);
};
export const presentTimestamp = function presentTimestamp(full) {
  let obj = dispatcherDefault;
  obj = { key: "MESSAGE_TIMESTAMP", content: full, IconComponent: ClockIcon.ClockIcon };
  obj.open(obj);
};