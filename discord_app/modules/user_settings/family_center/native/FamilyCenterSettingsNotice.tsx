// discord_app/modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx
import "noop";
import { SafetySettingsNoticeType } from "SafetyToastType";
import { jsx } from "jsxProd";
import { messagesProxy } from "../../../parent_tools/FamilyCenter.messages.js";
import { SafetySettingsNotice } from "../../../safety_common/native/SafetySettingsNotice.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let obj = activeLinkUserIds(7621);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = { label: null, noticeType: null, labelHook: null, count: null };
  obj[0] = messagesProxy.i284fU;
  obj[1] = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj[2] = function labelHook() {
    let obj = activeLinkUserIds(outer1_2[6]);
    obj.popLayer();
    obj = { recipientIds: activeLinkUserIds };
    outer1_1(outer1_2[7]).openPrivateChannel(obj);
  };
  obj[3] = activeLinkUserIds.length;
  return jsx(SafetySettingsNotice, { label: null, noticeType: null, labelHook: null, count: null });
};