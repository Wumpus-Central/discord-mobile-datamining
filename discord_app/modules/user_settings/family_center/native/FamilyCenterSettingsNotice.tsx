// === Module 14173: FamilyCenterSettingsParentalControlsNotice ===

// Module 14173 (FamilyCenterSettingsParentalControlsNotice)
import noopAll from "noop" /* 19 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import _modDef4770 from "module_4770" /* 4770 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14104 */;
import { SafetySettingsNoticeType } from "SafetyToastType" /* 5430 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let obj = activeLinkUserIds(7621);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = {
    label: messagesProxyDefault.i284fU,
    noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    labelHook() {
      let obj = activeLinkUserIds(dependencyMap[6]);
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      _modDef4770.openPrivateChannel(obj);
    },
    count: activeLinkUserIds.length
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: messagesProxyDefault.i284fU,
    noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    labelHook() {
      let obj = activeLinkUserIds(dependencyMap[6]);
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      _modDef4770.openPrivateChannel(obj);
    },
    count: activeLinkUserIds.length
  });
};