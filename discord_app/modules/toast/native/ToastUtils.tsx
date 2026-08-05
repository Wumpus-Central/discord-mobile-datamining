// discord_app/modules/toast/native/ToastUtils.tsx
import { VerificationCriteria } from "ME";

const result = require("getSystemLocale").fileFinishedImporting("modules/toast/native/ToastUtils.tsx");

export const presentAddedFriendToast = function presentAddedFriendToast() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_ADD_FRIEND", content: null, iconColor: "status-positive", IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.Fn5bwO);
  obj[3] = require("../../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx") /* FriendsIcon */.FriendsIcon;
  obj.open(obj);
};
export const presentFriendRequestAcceptedToast = function presentFriendRequestAcceptedToast(username) {
  let obj = require("ToastActionCreators.tsx");
  if (null == username) {
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let stringResult = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.UhJna5);
    let tmp2 = require;
  } else {
    tmp2 = require;
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { username: null };
    obj[0] = username.username;
    stringResult = intl.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.b3eoD4, obj);
  }
  obj = { key: "TOAST_FRIEND_REQUEST_ACCEPTED", content: stringResult, IconComponent: tmp2(4223).UserPlusIcon, iconColor: "status-positive" };
  obj.open(obj);
};
export const presentGameFriendRequestAcceptedToast = function presentGameFriendRequestAcceptedToast() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_GAME_FRIEND_REQUEST_ACCEPTED", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.xjNLeZ);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/UserPlatformIcon.tsx") /* UserPlatformIcon */.UserPlatformIcon;
  obj.open(obj);
};
export const presentFriendRequestIgnoredToast = function presentFriendRequestIgnoredToast() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_FRIEND_REQUEST_IGNORED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.YlavlY);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/UserMinusIcon.tsx") /* UserMinusIcon */.UserMinusIcon;
  obj.open(obj);
};
export const presentGameFriendRequestIgnoredToast = function presentGameFriendRequestIgnoredToast() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_GAME_FRIEND_REQUEST_IGNORED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.P6BzJP);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/UserMinusIcon.tsx") /* UserMinusIcon */.UserMinusIcon;
  obj.open(obj);
};
export const presentLinkCopied = function presentLinkCopied() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "LINK_COPIED", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["+5kSoW"]);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx") /* LinkIcon */.LinkIcon;
  obj.open(obj);
};
export const presentInviteSent = function presentInviteSent() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "INVITE_SENT", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.sVwWdV);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx") /* SendMessageIcon */.SendMessageIcon;
  obj.open(obj);
};
export const presentIdCopied = function presentIdCopied() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_ID_COPIED", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.eNjAah);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx") /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const presentImageSaved = function presentImageSaved() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_IMAGE_SAVED", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.cqpdJW);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/DownloadIcon.tsx") /* DownloadIcon */.DownloadIcon;
  obj.open(obj);
};
export const presentVideoSaved = function presentVideoSaved() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_VIDEO_SAVED", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["cEK+1g"]);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/DownloadIcon.tsx") /* DownloadIcon */.DownloadIcon;
  obj.open(obj);
};
export const presentGifSaved = function presentGifSaved() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_GIF_SAVED", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.LktEtN);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/DownloadIcon.tsx") /* DownloadIcon */.DownloadIcon;
  obj.open(obj);
};
export const presentMessageCopied = function presentMessageCopied() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_MESSAGE_COPIED", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.R3o53R);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx") /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const presentMessageIdCopied = function presentMessageIdCopied() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_MESSAGE_ID_COPIED", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.svRBmK);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx") /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const presentPostIdCopied = function presentPostIdCopied() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_FORUM_POST_ID_COPIED", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.aBQ2RP);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx") /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const presentUsernameCopied = function presentUsernameCopied() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_USERNAME_SAVED", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["FHVR/+"]);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx") /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const presentFeedbackSent = function presentFeedbackSent() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_FEEDBACK_SENT", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.xpiDtu);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx") /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
  obj.open(obj);
};
export const presentEmoji = function presentEmoji(closure_0) {
  let obj = require("../../../utils/AvatarUtils.tsx");
  obj = { id: closure_0.id, animated: closure_0.animated, size: 48 };
  const emojiURL = obj.getEmojiURL(obj);
  obj = { key: "PRESENT_EMOJI-" + closure_0.id, content: ":" + closure_0.name + ":", icon: { uri: emojiURL } };
  require("ToastActionCreators.tsx").open(obj);
};
export const presentNoiseCancellation = function presentNoiseCancellation(arg0) {
  let obj = require("ToastActionCreators.tsx");
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require("../../../intl/index.native.tsx") /* getSystemLocale */.t;
  if (arg0) {
    let stringResult = string(t["Q+fhfv"]);
    let tmp4 = tmp2;
  } else {
    stringResult = string(t.hEMHnF);
    tmp4 = tmp2;
  }
  obj = { key: "NOISE_CANCELLATION_TOGGLE", content: stringResult, IconComponent: null, iconColor: null };
  if (arg0) {
    let XLargeIcon = tmp4(4237).CheckmarkLargeIcon;
  } else {
    XLargeIcon = tmp4(4239).XLargeIcon;
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
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "MOBILE_NOISE_CANCELLATION_CPU_OVERUSE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.DnmX2G);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx") /* XLargeIcon */.XLargeIcon;
  obj.open(obj);
};
export const presentError = function presentError(intl) {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "ERROR", content: intl, IconComponent: require("../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx") /* XLargeIcon */.XLargeIcon, iconColor: "icon-feedback-critical" };
  obj.open(obj);
};
export const presentVoiceActivityDetectionError = function presentVoiceActivityDetectionError() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "MOBILE_ADVANCED_VOICE_ACTIVITY_CPU_OVERUSE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.zz1Tft);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx") /* XLargeIcon */.XLargeIcon;
  obj.open(obj);
};
export const roleIdCopied = function roleIdCopied(closure_2) {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "ROLE_ID_COPIED-" + closure_2, content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = { role: closure_2 };
  obj[1] = intl.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.iOWpeB, obj);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx") /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const communityRequirementSatisfied = function communityRequirementSatisfied() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.PHjrpp);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx") /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
  obj.open(obj);
};
export const communityAdminOnly = function communityAdminOnly() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["pjG+T3"]);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx") /* CircleInformationIcon */.CircleInformationIcon;
  obj.open(obj);
};
export const unverifiedVoiceGate = function unverifiedVoiceGate(check) {
  let missingVerificationRole;
  let verificationRole;
  ({ missingVerificationRole, verificationRole } = check);
  if (check.notClaimed) {
    const intl6 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let stringResult = intl6.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.IRxUlG);
  } else if (tmp2) {
    const intl5 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    stringResult = intl5.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.vW8iUF);
  } else if (tmp) {
    const intl4 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    stringResult = intl4.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.vdSOpz);
  } else if (tmp4) {
    const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let obj = { min: null };
    obj[0] = VerificationCriteria.MEMBER_AGE;
    stringResult = intl3.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.v1ktYb, obj);
  } else if (tmp3) {
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { min: null };
    obj[0] = VerificationCriteria.ACCOUNT_AGE;
    stringResult = intl2.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.sncw41, obj);
  } else {
    if (missingVerificationRole) {
      missingVerificationRole = null != verificationRole;
    }
    stringResult = null;
    if (missingVerificationRole) {
      const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj = { roleName: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "@" + verificationRole.name;
      stringResult = intl.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.MZbCuG, obj);
    }
  }
  if (null != stringResult) {
    const obj1 = { key: "UNVERIFIED_VOICE_GATE", content: null, IconComponent: null };
    obj1[1] = stringResult;
    obj1[2] = require("../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx") /* CircleInformationIcon */.CircleInformationIcon;
    require("ToastActionCreators.tsx").open(obj1);
    const obj4 = require("ToastActionCreators.tsx");
  }
};
export const transferOwnershipProtected = function transferOwnershipProtected() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TRANSFER_OWNERSHIP_PROTECTED_GUILD", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.wDkfrN);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx") /* CircleInformationIcon */.CircleInformationIcon;
  obj.open(obj);
};
export const memberOrRoleRemovedToast = function memberOrRoleRemovedToast(closure_1) {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "PRIVATE_CHANNEL_MEMBERS_REMOVED", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = { name: closure_1 };
  obj[1] = intl.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.vJGtXc, obj);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/TrashIcon.tsx") /* TrashIcon */.TrashIcon;
  obj.open(obj);
};
export const memberOrRoleAddedToast = function memberOrRoleAddedToast(c1, c0) {
  if (c1 > 0) {
    if (c0 > 0) {
      const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      let stringResult = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.fRD8wW);
    }
    if (null != stringResult) {
      let obj = { key: "MEMBER_OR_ROLE_ADDED", content: null, IconComponent: null, iconColor: "status-positive" };
      obj[1] = stringResult;
      obj[2] = require("../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx") /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
      require("ToastActionCreators.tsx").open(obj);
      const obj3 = require("ToastActionCreators.tsx");
    }
  }
  if (c1 > 0) {
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { count: null };
    obj[0] = c1;
    stringResult = intl2.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["yM/8JE"], obj);
  } else if (c0 > 0) {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { count: null };
    obj[0] = c0;
    stringResult = intl.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.yvV5Ye, obj);
  }
};
export const roleTemplateAppliedToast = function roleTemplateAppliedToast() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "ROLE_PERMISSION_TEMPLATE_SELECT_CONFIRMATION_TOAST", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.e6xHUV);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx") /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
  obj.open(obj);
};
export const roleCreatedToast = function roleCreatedToast() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "ROLE_CREATED_TOAST", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.kubT4R);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx") /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
  obj.open(obj);
};
export const roleCreateFailedToast = function roleCreateFailedToast() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "ROLE_CREATION_FAILED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.hbr6Uj);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx") /* XLargeIcon */.XLargeIcon;
  obj.open(obj);
};
export const presentFailedToast = function presentFailedToast(intl) {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "FAILED", content: intl, IconComponent: require("../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx") /* XLargeIcon */.XLargeIcon, iconColor: "icon-feedback-critical" };
  obj.open(obj);
};
export const presentCommandCopied = function presentCommandCopied() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TOAST_COMMAND_COPIED", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.U989ct);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx") /* LinkIcon */.LinkIcon;
  obj.open(obj);
};
export const presentGuildMemberBio = function presentGuildMemberBio(guildName) {
  const _require = arg1;
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "GUILD_IDENTITY_BIO_TOAST", content: null, icon: null };
  const intl = _require("../../../intl/index.native.tsx").intl;
  obj = { guildName };
  obj[1] = intl.formatToPlainString(_require("../../../intl/index.native.tsx").t.pOy2tm, obj);
  obj[2] = function icon() {
    return closure_0;
  };
  obj.open(obj);
};
export const presentGuildMemberPronouns = function presentGuildMemberPronouns(guildName) {
  const _require = arg1;
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "GUILD_IDENTITY_PRONOUNS_TOAST", content: null, icon: null };
  const intl = _require("../../../intl/index.native.tsx").intl;
  obj = { guildName };
  obj[1] = intl.formatToPlainString(_require("../../../intl/index.native.tsx").t.gPVLS0, obj);
  obj[2] = function icon() {
    return closure_0;
  };
  obj.open(obj);
};
export const presentUserPronouns = function presentUserPronouns() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "USER_POPOUT_PRONOUNS", content: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["1w6drw"]);
  obj.open(obj);
};
export const presentCopiedToClipboard = function presentCopiedToClipboard() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: null, content: null, IconComponent: null };
  obj[0] = "COPIED_TEXT_" + require("../../../../_runtime/00514_v1.js") /* v1 */.v4();
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.mGZ66D);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx") /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const presentGuildRoleSubscriptionTrialTierMonthCost = function presentGuildRoleSubscriptionTrialTierMonthCost() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO", content: null, IconComponent: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["/q6fpa"]);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx") /* CircleInformationIcon */.CircleInformationIcon;
  obj.open(obj);
};
export const showVoiceRecordingFailed = function showVoiceRecordingFailed() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "VOICE_MESSAGES_RECORDING_FAILED", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.H03AqF);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx") /* XLargeIcon */.XLargeIcon;
  obj.open(obj);
};
export const showMaxGroupMembers = function showMaxGroupMembers() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "GROUP_DM_INVITE_FULL_MAIN", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.OtTQDz);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx") /* XLargeIcon */.XLargeIcon;
  obj.open(obj);
};
export const showTransferOwnershipSuccess = function showTransferOwnershipSuccess() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "TRANSFER_OWNERSHIP_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["2Eyydu"]);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx") /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
  obj.open(obj);
};
export const showSafetySuccess = function showSafetySuccess(BLOCK_SUCCESS, safetyToastTypeContent) {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: BLOCK_SUCCESS, content: safetyToastTypeContent, IconComponent: require("../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx") /* CircleCheckIcon */.CircleCheckIcon, iconColor: "status-positive" };
  obj.open(obj);
};
export const showVerificationSent = function showVerificationSent() {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "VERIFICATION_RESENT", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.gI8IST);
  obj[2] = require("../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx") /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
  obj.open(obj);
};
export const presentTimestamp = function presentTimestamp(full) {
  let obj = require("ToastActionCreators.tsx");
  obj = { key: "MESSAGE_TIMESTAMP", content: full, IconComponent: require("../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx") /* ClockIcon */.ClockIcon };
  obj.open(obj);
};