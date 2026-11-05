// === Module 16988: FamilyCenterSettingsNotice ===

// Module 16988 (FamilyCenterSettingsNotice)
import _modDef2667 from "module_2667" /* 2667 */;
import LayerActionCreators from "LayerActionCreators" /* 7905 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10754 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16856 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(7632).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8515).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  const obj = activeLinkUserIds(8515);
  obj2.label = _modDef2667.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function handleMessageParentClick() {
    openLinkedUsersChannelDefault(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const intl = activeLinkUserIds(1113).intl;
      return activeLinkUserIds(5848).presentFailedToast(intl.formatToPlainString(_modDef2667.D1BwNC, { count: length.length }));
    });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};