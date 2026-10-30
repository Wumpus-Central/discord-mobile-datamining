// === Module 16663: FamilyCenterSettingsNotice ===

// Module 16663 (FamilyCenterSettingsNotice)
import _modDef2537 from "module_2537" /* 2537 */;
import LayerActionCreators from "LayerActionCreators" /* 7753 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10550 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16531 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(7484).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8361).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  const obj = activeLinkUserIds(8361);
  obj2.label = _modDef2537.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function handleMessageParentClick() {
    openLinkedUsersChannelDefault(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const intl = activeLinkUserIds(1114).intl;
      return activeLinkUserIds(5706).presentFailedToast(intl.formatToPlainString(_modDef2537.D1BwNC, { count: length.length }));
    });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};