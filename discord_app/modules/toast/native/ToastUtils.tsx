// discord_app/modules/toast/native/ToastUtils.tsx
import Constants from "../../../Constants.tsx";
import util from "../../../intl/index.native.tsx";
import v1 from "../../../../_runtime/01256_v1.js";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ToastActionCreatorsDefault from "ToastActionCreators.tsx";
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
import size from "../../../../_runtime/metro/00002__.js";

const VerificationCriteria = Constants.VerificationCriteria;
const result = size.fileFinishedImporting("modules/toast/native/ToastUtils.tsx");

export const presentAddedFriendToast = function presentAddedFriendToast() {
  const obj = { key: "TOAST_ADD_FRIEND", content: null, iconColor: "status-positive", IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.Fn5bwO);
  obj.IconComponent = FriendsIcon.FriendsIcon;
  obj.open(obj);
};
export const presentFriendRequestAcceptedToast = function presentFriendRequestAcceptedToast(dependencyMap) {
  let obj = ToastActionCreatorsDefault;
  if (null == dependencyMap) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.UhJna5);
    let tmp2 = require;
  } else {
    tmp2 = require;
    const intl = util.intl;
    obj = { username: dependencyMap.username };
    stringResult = intl.formatToPlainString(util.t.b3eoD4, obj);
  }
  obj = {
    key: "TOAST_FRIEND_REQUEST_ACCEPTED",
    content: stringResult,
    IconComponent: tmp2(4497).UserPlusIcon,
    iconColor: "status-positive",
  };
  obj.open(obj);
};
export const presentGameFriendRequestAcceptedToast = function presentGameFriendRequestAcceptedToast() {
  const obj = {
    key: "TOAST_GAME_FRIEND_REQUEST_ACCEPTED",
    content: null,
    IconComponent: null,
    iconColor: "status-positive",
  };
  const intl = util.intl;
  obj.content = intl.string(util.t.xjNLeZ);
  obj.IconComponent = UserPlatformIcon.UserPlatformIcon;
  obj.open(obj);
};
export const presentFriendRequestIgnoredToast = function presentFriendRequestIgnoredToast() {
  const obj = {
    key: "TOAST_FRIEND_REQUEST_IGNORED",
    content: null,
    IconComponent: null,
    iconColor: "icon-feedback-critical",
  };
  const intl = util.intl;
  obj.content = intl.string(util.t.YlavlY);
  obj.IconComponent = UserMinusIcon.UserMinusIcon;
  obj.open(obj);
};
export const presentGameFriendRequestIgnoredToast = function presentGameFriendRequestIgnoredToast() {
  const obj = {
    key: "TOAST_GAME_FRIEND_REQUEST_IGNORED",
    content: null,
    IconComponent: null,
    iconColor: "icon-feedback-critical",
  };
  const intl = util.intl;
  obj.content = intl.string(util.t.P6BzJP);
  obj.IconComponent = UserMinusIcon.UserMinusIcon;
  obj.open(obj);
};
export const presentLinkCopied = function presentLinkCopied() {
  const obj = { key: "LINK_COPIED", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["+5kSoW"]);
  obj.IconComponent = LinkIcon.LinkIcon;
  obj.open(obj);
};
export const presentInviteSent = function presentInviteSent() {
  const obj = { key: "INVITE_SENT", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.sVwWdV);
  obj.IconComponent = SendMessageIcon.SendMessageIcon;
  obj.open(obj);
};
export const presentIdCopied = function presentIdCopied() {
  const obj = { key: "TOAST_ID_COPIED", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.eNjAah);
  obj.IconComponent = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const presentImageSaved = function presentImageSaved() {
  const obj = { key: "TOAST_IMAGE_SAVED", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.cqpdJW);
  obj.IconComponent = DownloadIcon.DownloadIcon;
  obj.open(obj);
};
export const presentVideoSaved = function presentVideoSaved() {
  const obj = { key: "TOAST_VIDEO_SAVED", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["cEK+1g"]);
  obj.IconComponent = DownloadIcon.DownloadIcon;
  obj.open(obj);
};
export const presentGifSaved = function presentGifSaved() {
  const obj = { key: "TOAST_GIF_SAVED", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.LktEtN);
  obj.IconComponent = DownloadIcon.DownloadIcon;
  obj.open(obj);
};
export const presentMessageCopied = function presentMessageCopied() {
  const obj = { key: "TOAST_MESSAGE_COPIED", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.R3o53R);
  obj.IconComponent = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const presentMessageIdCopied = function presentMessageIdCopied() {
  const obj = { key: "TOAST_MESSAGE_ID_COPIED", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.svRBmK);
  obj.IconComponent = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const presentPostIdCopied = function presentPostIdCopied() {
  const obj = { key: "TOAST_FORUM_POST_ID_COPIED", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.aBQ2RP);
  obj.IconComponent = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const presentUsernameCopied = function presentUsernameCopied() {
  const obj = { key: "TOAST_USERNAME_SAVED", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["FHVR/+"]);
  obj.IconComponent = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const presentFeedbackSent = function presentFeedbackSent() {
  const obj = { key: "TOAST_FEEDBACK_SENT", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj.content = intl.string(util.t.xpiDtu);
  obj.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
  obj.open(obj);
};
export const presentEmoji = function presentEmoji(id) {
  let obj = { id: id.id, animated: id.animated, size: 48 };
  const emojiURL = obj.getEmojiURL(obj);
  obj = { key: "PRESENT_EMOJI-" + id.id, content: ":" + id.name + ":", icon: { uri: emojiURL } };
  ToastActionCreatorsDefault.open(obj);
};
export const presentNoiseCancellation = function presentNoiseCancellation(arg0) {
  let obj = ToastActionCreatorsDefault;
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (arg0) {
    let stringResult = string(t["Q+fhfv"]);
    let tmp4 = tmp2;
  } else {
    stringResult = string(t.hEMHnF);
    tmp4 = tmp2;
  }
  obj = { key: "NOISE_CANCELLATION_TOGGLE", content: stringResult, IconComponent: null, iconColor: null };
  if (arg0) {
    let XLargeIcon = tmp4(4511).CheckmarkLargeIcon;
  } else {
    XLargeIcon = tmp4(4513).XLargeIcon;
  }
  obj.IconComponent = XLargeIcon;
  let str = "icon-feedback-critical";
  if (arg0) {
    str = "status-positive";
  }
  obj.iconColor = str;
  obj.open(obj);
};
export const presentNoiseCancellationError = function presentNoiseCancellationError() {
  const obj = {
    key: "MOBILE_NOISE_CANCELLATION_CPU_OVERUSE",
    content: null,
    IconComponent: null,
    iconColor: "icon-feedback-critical",
  };
  const intl = util.intl;
  obj.content = intl.string(util.t.DnmX2G);
  obj.IconComponent = XLargeIcon2.XLargeIcon;
  obj.open(obj);
};
export const presentError = function presentError(intl) {
  const obj = {
    key: "ERROR",
    content: intl,
    IconComponent: XLargeIcon2.XLargeIcon,
    iconColor: "icon-feedback-critical",
  };
  obj.open(obj);
};
export const presentVoiceActivityDetectionError = function presentVoiceActivityDetectionError() {
  const obj = {
    key: "MOBILE_ADVANCED_VOICE_ACTIVITY_CPU_OVERUSE",
    content: null,
    IconComponent: null,
    iconColor: "icon-feedback-critical",
  };
  const intl = util.intl;
  obj.content = intl.string(util.t.zz1Tft);
  obj.IconComponent = XLargeIcon2.XLargeIcon;
  obj.open(obj);
};
export const roleIdCopied = function roleIdCopied(combined) {
  let obj = { key: "ROLE_ID_COPIED-" + combined, content: null, IconComponent: null };
  const intl = util.intl;
  obj = { role: combined };
  obj.content = intl.formatToPlainString(util.t.iOWpeB, obj);
  obj.IconComponent = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const communityRequirementSatisfied = function communityRequirementSatisfied() {
  const obj = {
    key: "ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP",
    content: null,
    IconComponent: null,
    iconColor: "status-positive",
  };
  const intl = util.intl;
  obj.content = intl.string(util.t.PHjrpp);
  obj.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
  obj.open(obj);
};
export const communityAdminOnly = function communityAdminOnly() {
  const obj = { key: "GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["pjG+T3"]);
  obj.IconComponent = CircleInformationIcon.CircleInformationIcon;
  obj.open(obj);
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
    let obj = { min: VerificationCriteria.MEMBER_AGE };
    stringResult = intl3.formatToPlainString(util.t.v1ktYb, obj);
  } else if (tmp3) {
    const intl2 = util.intl;
    obj = { min: VerificationCriteria.ACCOUNT_AGE };
    stringResult = intl2.formatToPlainString(util.t.sncw41, obj);
  } else {
    if (missingVerificationRole) {
      missingVerificationRole = null != verificationRole;
    }
    stringResult = null;
    if (missingVerificationRole) {
      const intl = util.intl;
      obj = { roleName: null };
      const _HermesInternal = HermesInternal;
      obj.roleName = "@" + verificationRole.name;
      stringResult = intl.formatToPlainString(util.t.MZbCuG, obj);
    }
  }
  if (null != stringResult) {
    const obj1 = {
      key: "UNVERIFIED_VOICE_GATE",
      content: stringResult,
      IconComponent: CircleInformationIcon.CircleInformationIcon,
    };
    ToastActionCreatorsDefault.open(obj1);
  }
};
export const transferOwnershipProtected = function transferOwnershipProtected() {
  const obj = { key: "TRANSFER_OWNERSHIP_PROTECTED_GUILD", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.wDkfrN);
  obj.IconComponent = CircleInformationIcon.CircleInformationIcon;
  obj.open(obj);
};
export const memberOrRoleRemovedToast = function memberOrRoleRemovedToast(name) {
  let obj = { key: "PRIVATE_CHANNEL_MEMBERS_REMOVED", content: null, IconComponent: null };
  const intl = util.intl;
  obj = { name };
  obj.content = intl.formatToPlainString(util.t.vJGtXc, obj);
  obj.IconComponent = TrashIcon.TrashIcon;
  obj.open(obj);
};
export const memberOrRoleAddedToast = function memberOrRoleAddedToast(count, count2) {
  if (count > 0) {
    if (count2 > 0) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.fRD8wW);
    }
    if (null != stringResult) {
      let obj = {
        key: "MEMBER_OR_ROLE_ADDED",
        content: stringResult,
        IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon,
        iconColor: "status-positive",
      };
      ToastActionCreatorsDefault.open(obj);
    }
  }
  if (count > 0) {
    const intl2 = util.intl;
    obj = { count };
    stringResult = intl2.formatToPlainString(util.t["yM/8JE"], obj);
  } else if (count2 > 0) {
    const intl = util.intl;
    obj = { count: count2 };
    stringResult = intl.formatToPlainString(util.t.yvV5Ye, obj);
  }
};
export const roleTemplateAppliedToast = function roleTemplateAppliedToast() {
  const obj = {
    key: "ROLE_PERMISSION_TEMPLATE_SELECT_CONFIRMATION_TOAST",
    content: null,
    IconComponent: null,
    iconColor: "status-positive",
  };
  const intl = util.intl;
  obj.content = intl.string(util.t.e6xHUV);
  obj.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
  obj.open(obj);
};
export const roleCreatedToast = function roleCreatedToast() {
  const obj = { key: "ROLE_CREATED_TOAST", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj.content = intl.string(util.t.kubT4R);
  obj.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
  obj.open(obj);
};
export const roleCreateFailedToast = function roleCreateFailedToast() {
  const obj = { key: "ROLE_CREATION_FAILED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj.content = intl.string(util.t.hbr6Uj);
  obj.IconComponent = XLargeIcon2.XLargeIcon;
  obj.open(obj);
};
export const presentFailedToast = function presentFailedToast(intl) {
  const obj = {
    key: "FAILED",
    content: intl,
    IconComponent: XLargeIcon2.XLargeIcon,
    iconColor: "icon-feedback-critical",
  };
  obj.open(obj);
};
export const presentCommandCopied = function presentCommandCopied() {
  const obj = { key: "TOAST_COMMAND_COPIED", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.U989ct);
  obj.IconComponent = LinkIcon.LinkIcon;
  obj.open(obj);
};
export const presentGuildMemberBio = function presentGuildMemberBio(guildName, arg1) {
  closure_0 = arg1;
  let obj = { key: "GUILD_IDENTITY_BIO_TOAST", content: null, icon: null };
  const intl = util.intl;
  obj = { guildName };
  obj.content = intl.formatToPlainString(util.t.pOy2tm, obj);
  obj.icon = function icon() {
    return closure_0;
  };
  obj.open(obj);
};
export const presentGuildMemberPronouns = function presentGuildMemberPronouns(guildName, arg1) {
  closure_0 = arg1;
  let obj = { key: "GUILD_IDENTITY_PRONOUNS_TOAST", content: null, icon: null };
  const intl = util.intl;
  obj = { guildName };
  obj.content = intl.formatToPlainString(util.t.gPVLS0, obj);
  obj.icon = function icon() {
    return closure_0;
  };
  obj.open(obj);
};
export const presentUserPronouns = function presentUserPronouns() {
  const obj = { key: "USER_POPOUT_PRONOUNS", content: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["1w6drw"]);
  obj.open(obj);
};
export const presentCopiedToClipboard = function presentCopiedToClipboard() {
  const obj = { key: "COPIED_TEXT_" + v1.v4(), content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.mGZ66D);
  obj.IconComponent = CopyIcon.CopyIcon;
  obj.open(obj);
};
export const presentGuildRoleSubscriptionTrialTierMonthCost =
  function presentGuildRoleSubscriptionTrialTierMonthCost() {
    const obj = {
      key: "GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO",
      content: null,
      IconComponent: null,
    };
    const intl = util.intl;
    obj.content = intl.string(util.t["/q6fpa"]);
    obj.IconComponent = CircleInformationIcon.CircleInformationIcon;
    obj.open(obj);
  };
export const showVoiceRecordingFailed = function showVoiceRecordingFailed() {
  const obj = {
    key: "VOICE_MESSAGES_RECORDING_FAILED",
    content: null,
    IconComponent: null,
    iconColor: "icon-feedback-critical",
  };
  const intl = util.intl;
  obj.content = intl.string(util.t.H03AqF);
  obj.IconComponent = XLargeIcon2.XLargeIcon;
  obj.open(obj);
};
export const showMaxGroupMembers = function showMaxGroupMembers() {
  const obj = {
    key: "GROUP_DM_INVITE_FULL_MAIN",
    content: null,
    IconComponent: null,
    iconColor: "icon-feedback-critical",
  };
  const intl = util.intl;
  obj.content = intl.string(util.t.OtTQDz);
  obj.IconComponent = XLargeIcon2.XLargeIcon;
  obj.open(obj);
};
export const showTransferOwnershipSuccess = function showTransferOwnershipSuccess() {
  const obj = { key: "TRANSFER_OWNERSHIP_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj.content = intl.string(util.t["2Eyydu"]);
  obj.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
  obj.open(obj);
};
export const showSafetySuccess = function showSafetySuccess(BLOCK_SUCCESS, safetyToastTypeContent) {
  const obj = {
    key: BLOCK_SUCCESS,
    content: safetyToastTypeContent,
    IconComponent: CircleCheckIcon.CircleCheckIcon,
    iconColor: "status-positive",
  };
  obj.open(obj);
};
export const showVerificationSent = function showVerificationSent() {
  const obj = { key: "VERIFICATION_RESENT", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj.content = intl.string(util.t.gI8IST);
  obj.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
  obj.open(obj);
};
export const presentTimestamp = function presentTimestamp(full) {
  const obj = { key: "MESSAGE_TIMESTAMP", content: full, IconComponent: ClockIcon.ClockIcon };
  obj.open(obj);
};
