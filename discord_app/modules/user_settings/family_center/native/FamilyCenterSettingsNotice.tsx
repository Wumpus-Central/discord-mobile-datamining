// discord_app/modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx
import _modDef2521 from "../../../parent_tools/FamilyCenter.messages.js";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import LayerActionCreators from "../../../../actions/LayerActionCreators.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const SafetySettingsNoticeType = fn(8108).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = activeLinkUserIds(576).c(5);
      let obj = activeLinkUserIds(576);
      activeLinkUserIds = activeLinkUserIds(8328).useActiveLinkUserIds();
      if (cResult[0] !== activeLinkUserIds) {
        const fn = function o() {
          LayerActionCreators.popLayer();
          ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
        };
        cResult[0] = activeLinkUserIds;
        cResult[1] = fn;
        let tmp3 = fn;
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
      const obj2 = activeLinkUserIds(8328);
      obj3.label = _modDef2521.i284fU;
      obj3.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
      obj3.labelHook = tmp3;
      obj3.count = activeLinkUserIds.length;
      const tmp6 = jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
      cResult[2] = tmp3;
      cResult[3] = activeLinkUserIds.length;
      cResult[4] = tmp6;
      tmp4 = tmp6;
    }
  : () => {
      activeLinkUserIds = activeLinkUserIds(8328).useActiveLinkUserIds();
      const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
      let obj = activeLinkUserIds(8328);
      obj2.label = _modDef2521.i284fU;
      obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
      obj2.labelHook = function labelHook() {
        LayerActionCreators.popLayer();
        ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
      };
      obj2.count = activeLinkUserIds.length;
      return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
    };
