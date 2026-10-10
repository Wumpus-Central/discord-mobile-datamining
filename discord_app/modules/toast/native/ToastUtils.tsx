// discord_app/modules/toast/native/ToastUtils.tsx
import Constants from "../../../Constants.tsx";
import util from "../../../intl/index.native.tsx";
import v1 from "../../../../_runtime/01279_v1.js";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ToastActionCreatorsDefault from "ToastActionCreators.tsx";
import FriendsIcon from "../../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import UserPlatformIcon from "../../../design/components/Icon/native/redesign/generated/UserPlatformIcon.tsx";
import UserMinusIcon from "../../../design/components/Icon/native/redesign/generated/UserMinusIcon.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import SendMessageIcon from "../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import CopyIcon from "../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import DownloadIcon from "../../../design/components/Icon/native/redesign/generated/DownloadIcon.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import TrashIcon from "../../../design/components/Icon/native/redesign/generated/TrashIcon.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const VerificationCriteria = Constants.VerificationCriteria;
const result = size.fileFinishedImporting("modules/toast/native/ToastUtils.tsx");

export const presentAddedFriendToast = function presentAddedFriendToast() {
  const obj2 = { text: null, icon: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.Fn5bwO);
  obj2.icon = FriendsIcon.FriendsIcon;
  ToastActionCreatorsDefault.open("TOAST_ADD_FRIEND", obj2);
};
export const presentFriendRequestAcceptedToast = function presentFriendRequestAcceptedToast(username) {
  if (null == username) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.UhJna5);
    let tmp2 = require;
  } else {
    tmp2 = require;
    const intl = util.intl;
    const obj2 = { username: username.username };
    stringResult = intl.formatToPlainString(util.t.b3eoD4, obj2);
  }
  const obj = ToastActionCreatorsDefault;
  obj.open("TOAST_FRIEND_REQUEST_ACCEPTED", {
    text: stringResult,
    icon: tmp2(5032).UserPlusIcon,
    iconColor: "status-positive",
  });
  const obj3 = { text: stringResult, icon: tmp2(5032).UserPlusIcon, iconColor: "status-positive" };
};
export const presentGameFriendRequestAcceptedToast = function presentGameFriendRequestAcceptedToast() {
  const obj2 = { text: null, icon: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.xjNLeZ);
  obj2.icon = UserPlatformIcon.UserPlatformIcon;
  ToastActionCreatorsDefault.open("TOAST_GAME_FRIEND_REQUEST_ACCEPTED", obj2);
};
export const presentFriendRequestIgnoredToast = function presentFriendRequestIgnoredToast() {
  const obj2 = { text: null, icon: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.YlavlY);
  obj2.icon = UserMinusIcon.UserMinusIcon;
  ToastActionCreatorsDefault.open("TOAST_FRIEND_REQUEST_IGNORED", obj2);
};
export const presentGameFriendRequestIgnoredToast = function presentGameFriendRequestIgnoredToast() {
  const obj2 = { text: null, icon: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.P6BzJP);
  obj2.icon = UserMinusIcon.UserMinusIcon;
  ToastActionCreatorsDefault.open("TOAST_GAME_FRIEND_REQUEST_IGNORED", obj2);
};
export const presentLinkCopied = function presentLinkCopied() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["+5kSoW"]);
  obj2.icon = LinkIcon.LinkIcon;
  ToastActionCreatorsDefault.open("LINK_COPIED", obj2);
};
export const presentInviteSent = function presentInviteSent() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.sVwWdV);
  obj2.icon = SendMessageIcon.SendMessageIcon;
  ToastActionCreatorsDefault.open("INVITE_SENT", obj2);
};
export const presentIdCopied = function presentIdCopied() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.eNjAah);
  obj2.icon = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open("TOAST_ID_COPIED", obj2);
};
export const presentImageSaved = function presentImageSaved() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.cqpdJW);
  obj2.icon = DownloadIcon.DownloadIcon;
  ToastActionCreatorsDefault.open("TOAST_IMAGE_SAVED", obj2);
};
export const presentVideoSaved = function presentVideoSaved() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["cEK+1g"]);
  obj2.icon = DownloadIcon.DownloadIcon;
  ToastActionCreatorsDefault.open("TOAST_VIDEO_SAVED", obj2);
};
export const presentGifSaved = function presentGifSaved() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.LktEtN);
  obj2.icon = DownloadIcon.DownloadIcon;
  ToastActionCreatorsDefault.open("TOAST_GIF_SAVED", obj2);
};
export const presentMessageCopied = function presentMessageCopied() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.R3o53R);
  obj2.icon = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open("TOAST_MESSAGE_COPIED", obj2);
};
export const presentMessageIdCopied = function presentMessageIdCopied() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.svRBmK);
  obj2.icon = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open("TOAST_MESSAGE_ID_COPIED", obj2);
};
export const presentPostIdCopied = function presentPostIdCopied() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.aBQ2RP);
  obj2.icon = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open("TOAST_FORUM_POST_ID_COPIED", obj2);
};
export const presentUsernameCopied = function presentUsernameCopied() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["FHVR/+"]);
  obj2.icon = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open("TOAST_USERNAME_SAVED", obj2);
};
export const presentFeedbackSent = function presentFeedbackSent() {
  const obj2 = { text: null, variant: "success" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.xpiDtu);
  ToastActionCreatorsDefault.open("TOAST_FEEDBACK_SENT", obj2);
};
export const presentEmoji = function presentEmoji(id) {
  const emojiURL = AvatarUtilsDefault.getEmojiURL({ id: id.id, animated: id.animated, size: 48 });
  const obj2 = { id: id.id, animated: id.animated, size: 48 };
  const obj4 = { text: null, icon: null };
  const combined = "PRESENT_EMOJI-" + id.id;
  obj4.text = ":" + id.name + ":";
  obj4.icon = { type: "emoji", src: emojiURL, alt: id.name };
  ToastActionCreatorsDefault.open(combined, obj4);
};
export const presentNoiseCancellation = function presentNoiseCancellation(arg0) {
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (arg0) {
    let stringResult = string(t["Q+fhfv"]);
  } else {
    stringResult = string(t.hEMHnF);
  }
  const obj2 = { text: stringResult, variant: null };
  let str = "critical";
  if (arg0) {
    str = "success";
  }
  obj2.variant = str;
  ToastActionCreatorsDefault.open("NOISE_CANCELLATION_TOGGLE", obj2);
};
export const presentNoiseCancellationError = function presentNoiseCancellationError() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.DnmX2G);
  ToastActionCreatorsDefault.open("MOBILE_NOISE_CANCELLATION_CPU_OVERUSE", obj2);
};
export const presentError = function presentError(intl) {
  ToastActionCreatorsDefault.open("ERROR", { text: intl, variant: "critical" });
};
export const presentVoiceActivityDetectionError = function presentVoiceActivityDetectionError() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.zz1Tft);
  ToastActionCreatorsDefault.open("MOBILE_ADVANCED_VOICE_ACTIVITY_CPU_OVERUSE", obj2);
};
export const roleIdCopied = function roleIdCopied(combined) {
  const obj2 = { text: null, icon: null };
  combined = "ROLE_ID_COPIED-" + combined;
  const intl = util.intl;
  obj2.text = intl.formatToPlainString(util.t.iOWpeB, { role: combined });
  obj2.icon = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open(combined, obj2);
};
export const communityRequirementSatisfied = function communityRequirementSatisfied() {
  const obj2 = { text: null, variant: "success" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.PHjrpp);
  ToastActionCreatorsDefault.open("ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP", obj2);
};
export const communityAdminOnly = function communityAdminOnly() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["pjG+T3"]);
  obj2.icon = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open("GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY", obj2);
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
    const obj5 = { text: stringResult, icon: CircleInformationIcon.CircleInformationIcon };
    ToastActionCreatorsDefault.open("UNVERIFIED_VOICE_GATE", obj5);
  }
};
export const transferOwnershipProtected = function transferOwnershipProtected() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.wDkfrN);
  obj2.icon = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open("TRANSFER_OWNERSHIP_PROTECTED_GUILD", obj2);
};
export const memberOrRoleRemovedToast = function memberOrRoleRemovedToast(name) {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.formatToPlainString(util.t.vJGtXc, { name });
  obj2.icon = TrashIcon.TrashIcon;
  ToastActionCreatorsDefault.open("PRIVATE_CHANNEL_MEMBERS_REMOVED", obj2);
};
export const memberOrRoleAddedToast = function memberOrRoleAddedToast(count, count2) {
  if (count > 0) {
    if (count2 > 0) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.fRD8wW);
    }
    if (null != stringResult) {
      const obj2 = { text: stringResult, variant: "success" };
      ToastActionCreatorsDefault.open("MEMBER_OR_ROLE_ADDED", obj2);
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
  const obj2 = { text: null, variant: "success" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.e6xHUV);
  ToastActionCreatorsDefault.open("ROLE_PERMISSION_TEMPLATE_SELECT_CONFIRMATION_TOAST", obj2);
};
export const roleCreatedToast = function roleCreatedToast() {
  const obj2 = { text: null, variant: "success" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.kubT4R);
  ToastActionCreatorsDefault.open("ROLE_CREATED_TOAST", obj2);
};
export const roleCreateFailedToast = function roleCreateFailedToast() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.hbr6Uj);
  ToastActionCreatorsDefault.open("ROLE_CREATION_FAILED", obj2);
};
export const presentFailedToast = function presentFailedToast(intl) {
  ToastActionCreatorsDefault.open("FAILED", { text: intl, variant: "critical" });
};
export const presentCommandCopied = function presentCommandCopied() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.U989ct);
  obj2.icon = LinkIcon.LinkIcon;
  ToastActionCreatorsDefault.open("TOAST_COMMAND_COPIED", obj2);
};
export const presentUserPronouns = function presentUserPronouns() {
  const obj2 = { text: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["1w6drw"]);
  ToastActionCreatorsDefault.open("USER_POPOUT_PRONOUNS", obj2);
};
export const presentCopiedToClipboard = function presentCopiedToClipboard() {
  const obj = ToastActionCreatorsDefault;
  const obj3 = { text: null, icon: null };
  const combined = "COPIED_TEXT_" + v1.v4();
  const intl = util.intl;
  obj3.text = intl.string(util.t.mGZ66D);
  obj3.icon = CopyIcon.CopyIcon;
  obj.open(combined, obj3);
};
export const presentGuildRoleSubscriptionTrialTierMonthCost =
  function presentGuildRoleSubscriptionTrialTierMonthCost() {
    const obj2 = { text: null, icon: null };
    const intl = util.intl;
    obj2.text = intl.string(util.t["/q6fpa"]);
    obj2.icon = CircleInformationIcon.CircleInformationIcon;
    ToastActionCreatorsDefault.open("GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO", obj2);
  };
export const showVoiceRecordingFailed = function showVoiceRecordingFailed() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.H03AqF);
  ToastActionCreatorsDefault.open("VOICE_MESSAGES_RECORDING_FAILED", obj2);
};
export const showMaxGroupMembers = function showMaxGroupMembers() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.OtTQDz);
  ToastActionCreatorsDefault.open("GROUP_DM_INVITE_FULL_MAIN", obj2);
};
export const showTransferOwnershipSuccess = function showTransferOwnershipSuccess() {
  const obj2 = { text: null, variant: "success" };
  const intl = util.intl;
  obj2.text = intl.string(util.t["2Eyydu"]);
  ToastActionCreatorsDefault.open("TRANSFER_OWNERSHIP_SUCCESS", obj2);
};
export const showSafetySuccess = function showSafetySuccess(IAR_SHARE_WITH_PARENT_SUCCESS, safetyToastTypeContent) {
  ToastActionCreatorsDefault.open(IAR_SHARE_WITH_PARENT_SUCCESS, { text: safetyToastTypeContent, variant: "success" });
};
export const showVerificationSent = function showVerificationSent() {
  const obj2 = { text: null, variant: "success" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.gI8IST);
  ToastActionCreatorsDefault.open("VERIFICATION_RESENT", obj2);
};
export const presentTimestamp = function presentTimestamp(full) {
  const obj = ToastActionCreatorsDefault;
  obj.open("MESSAGE_TIMESTAMP", { text: full, icon: ClockIcon.ClockIcon });
};
