// discord_app/modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import messagesProxyDefault from "../../../parent_tools/FamilyCenter.messages.js";
import _modDef4770 from "../../../../actions/ChannelActionCreators.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import { SafetySettingsNoticeType } from "../../../safety_common/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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