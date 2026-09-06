// discord_app/modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx
import _modDef2396 from "../../../parent_tools/FamilyCenter.messages.js";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import LayerActionCreators from "../../../../actions/LayerActionCreators.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const SafetySettingsNoticeType = fn(8399).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let obj = activeLinkUserIds(8645);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = {
    label: _modDef2396.i284fU,
    noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    labelHook() {
      let obj = LayerActionCreators;
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      ChannelActionCreatorsDefault.openPrivateChannel(obj);
    },
    count: activeLinkUserIds.length,
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: _modDef2396.i284fU,
    noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    labelHook() {
      let obj = LayerActionCreators;
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      ChannelActionCreatorsDefault.openPrivateChannel(obj);
    },
    count: activeLinkUserIds.length,
  });
}
