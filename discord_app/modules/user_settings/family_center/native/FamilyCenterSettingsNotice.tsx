// discord_app/modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx
import _modDef2486 from "../../../parent_tools/FamilyCenter.messages.js";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import LayerActionCreators from "../../../../actions/LayerActionCreators.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const SafetySettingsNoticeType = fn(8749).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(9003).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  let obj = activeLinkUserIds(9003);
  obj2.label = _modDef2486.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function labelHook() {
    LayerActionCreators.popLayer();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
}
