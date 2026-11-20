// === Module 15992: FamilyCenterSettingsNotice ===

// Module 15992 (FamilyCenterSettingsNotice)
import _modDef2725 from "module_2725" /* 2725 */;
import LayerActionCreators from "LayerActionCreators" /* 7996 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9020 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 15860 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(6385).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(9016).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  const obj = activeLinkUserIds(9016);
  obj2.label = _modDef2725.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function handleMessageParentClick() {
    openLinkedUsersChannelDefault(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const intl = activeLinkUserIds(1112).intl;
      return activeLinkUserIds(5475).presentFailedToast(intl.formatToPlainString(_modDef2725.D1BwNC, { count: length.length }));
    });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};