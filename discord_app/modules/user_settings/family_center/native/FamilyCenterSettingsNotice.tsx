// === Module 17220: FamilyCenterSettingsNotice ===

// Module 17220 (FamilyCenterSettingsNotice)
import _modDef2685 from "module_2685" /* 2685 */;
import LayerActionCreators from "LayerActionCreators" /* 8460 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9553 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 17088 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(6847).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(9549).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  const obj = activeLinkUserIds(9549);
  obj2.label = _modDef2685.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function handleMessageParentClick() {
    openLinkedUsersChannelDefault(activeLinkUserIds, LayerActionCreators.popLayer, () => {
      const intl = activeLinkUserIds(1113).intl;
      return activeLinkUserIds(5951).presentFailedToast(intl.formatToPlainString(_modDef2685.D1BwNC, { count: length.length }));
    });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};