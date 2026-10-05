// discord_app/modules/toast/native/ToastUtils.tsx
import Constants from "../../../Constants.tsx";
import intl7 from "../../../intl/index.native.tsx";
import v1 from "../../../../_runtime/01266_v1.js";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ToastActionCreatorsDefault from "ToastActionCreators.tsx";
import DesignSystemsNotificationComponentsExperiment from "../../design/DesignSystemsNotificationComponentsExperiment.tsx";
import CheckmarkLargeIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import XLargeIcon2 from "../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import FriendsIcon from "../../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import UserPlatformIcon from "../../../design/components/Icon/native/redesign/generated/UserPlatformIcon.tsx";
import UserMinusIcon from "../../../design/components/Icon/native/redesign/generated/UserMinusIcon.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import SendMessageIcon from "../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import CopyIcon from "../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import DownloadIcon from "../../../design/components/Icon/native/redesign/generated/DownloadIcon.tsx";
import TrashIcon from "../../../design/components/Icon/native/redesign/generated/TrashIcon.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const VerificationCriteria = Constants.VerificationCriteria;
const result = size.fileFinishedImporting("modules/toast/native/ToastUtils.tsx");

export const presentAddedFriendToast = function presentAddedFriendToast() {
  let intl;
  const obj = {
    key: "TOAST_ADD_FRIEND",
    content: intl.string(intl7.t.Fn5bwO),
    iconColor: "status-positive",
    IconComponent: FriendsIcon.FriendsIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentFriendRequestAcceptedToast = function presentFriendRequestAcceptedToast(username) {
  let stringResult;
  let tmp3;
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  if (null == username) {
    const intl2 = intl7.intl;
    stringResult = intl2.string(intl7.t.UhJna5);
    tmp3 = require;
  } else {
    tmp3 = require;
    const intl = intl7.intl;
    const obj = { username: username.username };
    stringResult = intl.formatToPlainString(intl7.t.b3eoD4, obj);
  }
  const obj2 = {
    key: "TOAST_FRIEND_REQUEST_ACCEPTED",
    content: stringResult,
    IconComponent: tmp3(4833).UserPlusIcon,
    iconColor: "status-positive",
  };
  open(obj2);
};
export const presentGameFriendRequestAcceptedToast = function presentGameFriendRequestAcceptedToast() {
  let intl;
  const obj = {
    key: "TOAST_GAME_FRIEND_REQUEST_ACCEPTED",
    content: intl.string(intl7.t.xjNLeZ),
    IconComponent: UserPlatformIcon.UserPlatformIcon,
    iconColor: "status-positive",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentFriendRequestIgnoredToast = function presentFriendRequestIgnoredToast() {
  let intl;
  const obj = {
    key: "TOAST_FRIEND_REQUEST_IGNORED",
    content: intl.string(intl7.t.YlavlY),
    IconComponent: UserMinusIcon.UserMinusIcon,
    iconColor: "icon-feedback-critical",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentGameFriendRequestIgnoredToast = function presentGameFriendRequestIgnoredToast() {
  let intl;
  const obj = {
    key: "TOAST_GAME_FRIEND_REQUEST_IGNORED",
    content: intl.string(intl7.t.P6BzJP),
    IconComponent: UserMinusIcon.UserMinusIcon,
    iconColor: "icon-feedback-critical",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentLinkCopied = function presentLinkCopied() {
  let intl;
  const obj = { key: "LINK_COPIED", content: intl.string(intl7.t["+5kSoW"]), IconComponent: LinkIcon.LinkIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentInviteSent = function presentInviteSent() {
  let intl;
  const obj = {
    key: "INVITE_SENT",
    content: intl.string(intl7.t.sVwWdV),
    IconComponent: SendMessageIcon.SendMessageIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentIdCopied = function presentIdCopied() {
  let intl;
  const obj = { key: "TOAST_ID_COPIED", content: intl.string(intl7.t.eNjAah), IconComponent: CopyIcon.CopyIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentImageSaved = function presentImageSaved() {
  let intl;
  const obj = {
    key: "TOAST_IMAGE_SAVED",
    content: intl.string(intl7.t.cqpdJW),
    IconComponent: DownloadIcon.DownloadIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentVideoSaved = function presentVideoSaved() {
  let intl;
  const obj = {
    key: "TOAST_VIDEO_SAVED",
    content: intl.string(intl7.t["cEK+1g"]),
    IconComponent: DownloadIcon.DownloadIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentGifSaved = function presentGifSaved() {
  let intl;
  const obj = {
    key: "TOAST_GIF_SAVED",
    content: intl.string(intl7.t.LktEtN),
    IconComponent: DownloadIcon.DownloadIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentMessageCopied = function presentMessageCopied() {
  let intl;
  const obj = { key: "TOAST_MESSAGE_COPIED", content: intl.string(intl7.t.R3o53R), IconComponent: CopyIcon.CopyIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentMessageIdCopied = function presentMessageIdCopied() {
  let intl;
  const obj = {
    key: "TOAST_MESSAGE_ID_COPIED",
    content: intl.string(intl7.t.svRBmK),
    IconComponent: CopyIcon.CopyIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentPostIdCopied = function presentPostIdCopied() {
  let intl;
  const obj = {
    key: "TOAST_FORUM_POST_ID_COPIED",
    content: intl.string(intl7.t.aBQ2RP),
    IconComponent: CopyIcon.CopyIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentUsernameCopied = function presentUsernameCopied() {
  let intl;
  const obj = {
    key: "TOAST_USERNAME_SAVED",
    content: intl.string(intl7.t["FHVR/+"]),
    IconComponent: CopyIcon.CopyIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentFeedbackSent = function presentFeedbackSent() {
  let intl;
  const obj = {
    key: "TOAST_FEEDBACK_SENT",
    content: intl.string(intl7.t.xpiDtu),
    IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon,
    iconColor: "status-positive",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentEmoji = function presentEmoji(id) {
  let obj5;
  let obj7;
  const obj = AvatarUtilsDefault;
  const obj2 = { id: id.id, animated: id.animated, size: 48 };
  const emojiURL = obj.getEmojiURL(obj2);
  const obj3 = DesignSystemsNotificationComponentsExperiment;
  const designSystemsNotificationComponents = obj3.getDesignSystemsNotificationComponents("presentEmoji");
  const tmp3 = ToastActionCreatorsDefault;
  if (designSystemsNotificationComponents) {
    const _HermesInternal3 = HermesInternal;
    const openMana = tmp3.openMana;
    const _HermesInternal4 = HermesInternal;
    const obj4 = { text: ":" + id.name + ":", icon: obj5 };
    const combined = "PRESENT_EMOJI-" + id.id;
    obj5 = { type: "emoji", src: emojiURL, alt: id.name };
    openMana(combined, obj4);
  } else {
    const _HermesInternal = HermesInternal;
    const open = tmp3.open;
    const _HermesInternal2 = HermesInternal;
    const obj6 = { key: "PRESENT_EMOJI-" + id.id, content: ":" + id.name + ":", icon: obj7 };
    obj7 = { uri: emojiURL };
    open(obj6);
  }
};
export const presentNoiseCancellation = function presentNoiseCancellation(arg0) {
  let XLargeIcon;
  let str;
  let stringResult;
  let tmp5;
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  const intl = intl7.intl;
  const string = intl.string;
  const t = intl7.t;
  if (arg0) {
    stringResult = string(t["Q+fhfv"]);
    tmp5 = require;
  } else {
    stringResult = string(t.hEMHnF);
    tmp5 = require;
  }
  const obj = { key: "NOISE_CANCELLATION_TOGGLE", content: stringResult, IconComponent: XLargeIcon, iconColor: str };
  if (arg0) {
    XLargeIcon = tmp5(4577).CheckmarkLargeIcon;
  } else {
    XLargeIcon = tmp5(4795).XLargeIcon;
  }
  str = "icon-feedback-critical";
  if (arg0) {
    str = "status-positive";
  }
  open(obj);
};
export const presentNoiseCancellationError = function presentNoiseCancellationError() {
  let intl;
  const obj = {
    key: "MOBILE_NOISE_CANCELLATION_CPU_OVERUSE",
    content: intl.string(intl7.t.DnmX2G),
    IconComponent: XLargeIcon2.XLargeIcon,
    iconColor: "icon-feedback-critical",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentError = function presentError(intl) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = {
    key: "ERROR",
    content: intl,
    IconComponent: XLargeIcon2.XLargeIcon,
    iconColor: "icon-feedback-critical",
  };
  obj.open(obj2);
};
export const presentVoiceActivityDetectionError = function presentVoiceActivityDetectionError() {
  let intl;
  const obj = {
    key: "MOBILE_ADVANCED_VOICE_ACTIVITY_CPU_OVERUSE",
    content: intl.string(intl7.t.zz1Tft),
    IconComponent: XLargeIcon2.XLargeIcon,
    iconColor: "icon-feedback-critical",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const roleIdCopied = function roleIdCopied(combined) {
  let intl;
  let obj2;
  const tmp = ToastActionCreatorsDefault;
  const open = tmp.open;
  const obj = {
    key: "ROLE_ID_COPIED-" + combined,
    content: intl.formatToPlainString(intl7.t.iOWpeB, obj2),
    IconComponent: CopyIcon.CopyIcon,
  };
  intl = intl7.intl;
  obj2 = { role: combined };
  open(obj);
};
export const communityRequirementSatisfied = function communityRequirementSatisfied() {
  let intl;
  const obj = {
    key: "ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP",
    content: intl.string(intl7.t.PHjrpp),
    IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon,
    iconColor: "status-positive",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const communityAdminOnly = function communityAdminOnly() {
  let intl;
  const obj = {
    key: "GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY",
    content: intl.string(intl7.t["pjG+T3"]),
    IconComponent: CircleInformationIcon.CircleInformationIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const unverifiedVoiceGate = function unverifiedVoiceGate(check) {
  let missingVerificationRole;
  let stringResult;
  let verificationRole;
  ({ missingVerificationRole, verificationRole } = check);
  if (check.notClaimed) {
    const intl6 = intl7.intl;
    stringResult = intl6.string(intl7.t.IRxUlG);
  } else if (tmp2) {
    const intl5 = intl7.intl;
    stringResult = intl5.string(intl7.t.vW8iUF);
  } else if (tmp) {
    const intl4 = intl7.intl;
    stringResult = intl4.string(intl7.t.vdSOpz);
  } else if (tmp4) {
    const intl3 = intl7.intl;
    const obj2 = { min: VerificationCriteria.MEMBER_AGE };
    stringResult = intl3.formatToPlainString(intl7.t.v1ktYb, obj2);
  } else if (tmp3) {
    const intl2 = intl7.intl;
    const obj3 = { min: VerificationCriteria.ACCOUNT_AGE };
    stringResult = intl2.formatToPlainString(intl7.t.sncw41, obj3);
  } else {
    if (missingVerificationRole) {
      missingVerificationRole = null != verificationRole;
    }
    stringResult = null;
    if (missingVerificationRole) {
      const intl = intl7.intl;
      const formatToPlainString = intl.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj = { roleName: "@" + verificationRole.name };
      const MZbCuG = intl7.t.MZbCuG;
      stringResult = formatToPlainString(MZbCuG, obj);
    }
  }
  if (null != stringResult) {
    const obj4 = {
      key: "UNVERIFIED_VOICE_GATE",
      content: stringResult,
      IconComponent: CircleInformationIcon.CircleInformationIcon,
    };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    open(obj4);
  }
};
export const transferOwnershipProtected = function transferOwnershipProtected() {
  let intl;
  const obj = {
    key: "TRANSFER_OWNERSHIP_PROTECTED_GUILD",
    content: intl.string(intl7.t.wDkfrN),
    IconComponent: CircleInformationIcon.CircleInformationIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const memberOrRoleRemovedToast = function memberOrRoleRemovedToast(name) {
  let intl;
  let obj2;
  const obj = {
    key: "PRIVATE_CHANNEL_MEMBERS_REMOVED",
    content: intl.formatToPlainString(intl7.t.vJGtXc, obj2),
    IconComponent: TrashIcon.TrashIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  obj2 = { name };
  open(obj);
};
export const memberOrRoleAddedToast = function memberOrRoleAddedToast(c1, c0) {
  let stringResult;
  if (importDefault > 0) {
    if (_require > 0) {
      const intl3 = intl7.intl;
      stringResult = intl3.string(intl7.t.fRD8wW);
    }
    if (null != stringResult) {
      const obj2 = {
        key: "MEMBER_OR_ROLE_ADDED",
        content: stringResult,
        IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon,
        iconColor: "status-positive",
      };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      open(obj2);
    }
  }
  if (importDefault > 0) {
    const intl2 = intl7.intl;
    const obj3 = { count: importDefault };
    stringResult = intl2.formatToPlainString(intl7.t["yM/8JE"], obj3);
  } else if (_require > 0) {
    const intl = intl7.intl;
    const obj = { count: _require };
    stringResult = intl.formatToPlainString(intl7.t.yvV5Ye, obj);
  }
};
export const roleTemplateAppliedToast = function roleTemplateAppliedToast() {
  let intl;
  const obj = {
    key: "ROLE_PERMISSION_TEMPLATE_SELECT_CONFIRMATION_TOAST",
    content: intl.string(intl7.t.e6xHUV),
    IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon,
    iconColor: "status-positive",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const roleCreatedToast = function roleCreatedToast() {
  let intl;
  const obj = {
    key: "ROLE_CREATED_TOAST",
    content: intl.string(intl7.t.kubT4R),
    IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon,
    iconColor: "status-positive",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const roleCreateFailedToast = function roleCreateFailedToast() {
  let intl;
  const obj = {
    key: "ROLE_CREATION_FAILED",
    content: intl.string(intl7.t.hbr6Uj),
    IconComponent: XLargeIcon2.XLargeIcon,
    iconColor: "icon-feedback-critical",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentFailedToast = function presentFailedToast(intl) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = {
    key: "FAILED",
    content: intl,
    IconComponent: XLargeIcon2.XLargeIcon,
    iconColor: "icon-feedback-critical",
  };
  obj.open(obj2);
};
export const presentCommandCopied = function presentCommandCopied() {
  let intl;
  const obj = { key: "TOAST_COMMAND_COPIED", content: intl.string(intl7.t.U989ct), IconComponent: LinkIcon.LinkIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentGuildMemberBio = function presentGuildMemberBio(guildName, arg1) {
  let intl;
  let obj2;
  let closure_0 = arg1;
  const obj = {
    key: "GUILD_IDENTITY_BIO_TOAST",
    content: intl.formatToPlainString(intl7.t.pOy2tm, obj2),
    icon() {
      return closure_0;
    },
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  obj2 = { guildName };
  open(obj);
};
export const presentGuildMemberPronouns = function presentGuildMemberPronouns(guildName, arg1) {
  let intl;
  let obj2;
  let closure_0 = arg1;
  const obj = {
    key: "GUILD_IDENTITY_PRONOUNS_TOAST",
    content: intl.formatToPlainString(intl7.t.gPVLS0, obj2),
    icon() {
      return closure_0;
    },
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  obj2 = { guildName };
  open(obj);
};
export const presentUserPronouns = function presentUserPronouns() {
  let intl;
  const obj = { key: "USER_POPOUT_PRONOUNS", content: intl.string(intl7.t["1w6drw"]) };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentCopiedToClipboard = function presentCopiedToClipboard() {
  let intl;
  let obj2;
  const obj = {
    key: "COPIED_TEXT_" + obj2.v4(),
    content: intl.string(intl7.t.mGZ66D),
    IconComponent: CopyIcon.CopyIcon,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  obj2 = v1;
  intl = intl7.intl;
  open(obj);
};
export const presentGuildRoleSubscriptionTrialTierMonthCost =
  function presentGuildRoleSubscriptionTrialTierMonthCost() {
    let intl;
    const obj = {
      key: "GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO",
      content: intl.string(intl7.t["/q6fpa"]),
      IconComponent: CircleInformationIcon.CircleInformationIcon,
    };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl7.intl;
    open(obj);
  };
export const showVoiceRecordingFailed = function showVoiceRecordingFailed() {
  let intl;
  const obj = {
    key: "VOICE_MESSAGES_RECORDING_FAILED",
    content: intl.string(intl7.t.H03AqF),
    IconComponent: XLargeIcon2.XLargeIcon,
    iconColor: "icon-feedback-critical",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const showMaxGroupMembers = function showMaxGroupMembers() {
  let intl;
  const obj = {
    key: "GROUP_DM_INVITE_FULL_MAIN",
    content: intl.string(intl7.t.OtTQDz),
    IconComponent: XLargeIcon2.XLargeIcon,
    iconColor: "icon-feedback-critical",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const showTransferOwnershipSuccess = function showTransferOwnershipSuccess() {
  let intl;
  const obj = {
    key: "TRANSFER_OWNERSHIP_SUCCESS",
    content: intl.string(intl7.t["2Eyydu"]),
    IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon,
    iconColor: "status-positive",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const showSafetySuccess = function showSafetySuccess(IAR_SHARE_WITH_PARENT_SUCCESS, safetyToastTypeContent) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = {
    key: IAR_SHARE_WITH_PARENT_SUCCESS,
    content: safetyToastTypeContent,
    IconComponent: CircleCheckIcon.CircleCheckIcon,
    iconColor: "status-positive",
  };
  obj.open(obj2);
};
export const showVerificationSent = function showVerificationSent() {
  let intl;
  const obj = {
    key: "VERIFICATION_RESENT",
    content: intl.string(intl7.t.gI8IST),
    IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon,
    iconColor: "status-positive",
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open(obj);
};
export const presentTimestamp = function presentTimestamp(full) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { key: "MESSAGE_TIMESTAMP", content: full, IconComponent: ClockIcon.ClockIcon };
  obj.open(obj2);
};
