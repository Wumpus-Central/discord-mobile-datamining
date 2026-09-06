// === Module 14816: FamilyCenterSettingsNotice ===

// Module 14816 (FamilyCenterSettingsNotice)
import _modDef2396 from "module_2396" /* 2396 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import LayerActionCreators from "LayerActionCreators" /* 7587 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14687 */;
import noop from "module_19" /* 19 */;

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
    count: activeLinkUserIds.length
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
    count: activeLinkUserIds.length
  });
};