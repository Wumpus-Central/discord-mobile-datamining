// === Module 16269: FamilyCenterSettingsNotice ===

// Module 16269 (FamilyCenterSettingsNotice)
import _modDef2846 from "module_2846" /* 2846 */;
import LayerActionCreators from "LayerActionCreators" /* 6324 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9115 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16137 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(7806).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8169).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  const obj = activeLinkUserIds(8169);
  obj2.label = _modDef2846.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function handleMessageParentClick() {
    openLinkedUsersChannelDefault(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const intl = activeLinkUserIds(1112).intl;
      return activeLinkUserIds(5693).presentFailedToast(intl.formatToPlainString(_modDef2846.D1BwNC, { count: length.length }));
    });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};