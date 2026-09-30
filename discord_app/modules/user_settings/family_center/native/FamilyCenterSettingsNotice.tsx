// === Module 14556: FamilyCenterSettingsNotice ===

// Module 14556 (FamilyCenterSettingsNotice)
import _modDef2487 from "module_2487" /* 2487 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4879 */;
import LayerActionCreators from "LayerActionCreators" /* 7201 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14452 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(8042).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8301).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  let obj = activeLinkUserIds(8301);
  obj2.label = _modDef2487.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function labelHook() {
    LayerActionCreators.popLayer();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};