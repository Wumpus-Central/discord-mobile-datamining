// === Module 16327: FamilyCenterSettingsNotice ===

// Module 16327 (FamilyCenterSettingsNotice)
import _modDef2847 from "module_2847" /* 2847 */;
import LayerActionCreators from "LayerActionCreators" /* 6355 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9158 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16195 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(7840).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8212).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  const obj = activeLinkUserIds(8212);
  obj2.label = _modDef2847.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function handleMessageParentClick() {
    openLinkedUsersChannelDefault(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const intl = activeLinkUserIds(1112).intl;
      return activeLinkUserIds(5724).presentFailedToast(intl.formatToPlainString(_modDef2847.D1BwNC, { count: length.length }));
    });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};