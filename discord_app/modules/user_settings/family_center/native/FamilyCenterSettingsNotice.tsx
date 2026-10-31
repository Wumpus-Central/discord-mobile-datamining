// === Module 16705: FamilyCenterSettingsNotice ===

// Module 16705 (FamilyCenterSettingsNotice)
import _modDef2538 from "module_2538" /* 2538 */;
import LayerActionCreators from "LayerActionCreators" /* 7760 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10570 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16573 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(7490).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8369).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  const obj = activeLinkUserIds(8369);
  obj2.label = _modDef2538.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function handleMessageParentClick() {
    openLinkedUsersChannelDefault(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const intl = activeLinkUserIds(1113).intl;
      return activeLinkUserIds(5711).presentFailedToast(intl.formatToPlainString(_modDef2538.D1BwNC, { count: length.length }));
    });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};