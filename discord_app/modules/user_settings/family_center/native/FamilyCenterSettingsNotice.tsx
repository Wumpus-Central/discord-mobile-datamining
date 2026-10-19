// === Module 15860: FamilyCenterSettingsNotice ===

// Module 15860 (FamilyCenterSettingsNotice)
import _modDef2589 from "module_2589" /* 2589 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7290 */;
import LayerActionCreators from "LayerActionCreators" /* 7573 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 15730 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(7295).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterSettingsParentalControlsNotice() {
  const cResult = activeLinkUserIds(576).c(5);
  let obj = activeLinkUserIds(576);
  activeLinkUserIds = activeLinkUserIds(8005).useActiveLinkUserIds();
  if (cResult[0] !== activeLinkUserIds) {
    function handleMessageParentClick() {
      LayerActionCreators.popLayer();
      ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
    }
    cResult[0] = activeLinkUserIds;
    cResult[1] = handleMessageParentClick;
    let tmp3 = handleMessageParentClick;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp3) {
    if (cResult[3] === activeLinkUserIds.length) {
      let tmp4 = cResult[4];
    }
    return tmp4;
  }
  const obj3 = { label: null, noticeType: null, labelHook: null, count: null };
  const obj2 = activeLinkUserIds(8005);
  obj3.label = _modDef2589.i284fU;
  obj3.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj3.labelHook = tmp3;
  obj3.count = activeLinkUserIds.length;
  const tmp6 = jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
  cResult[2] = tmp3;
  cResult[3] = activeLinkUserIds.length;
  cResult[4] = tmp6;
  tmp4 = tmp6;
}) : (function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8005).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  let obj = activeLinkUserIds(8005);
  obj2.label = _modDef2589.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function handleMessageParentClick() {
    LayerActionCreators.popLayer();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
});