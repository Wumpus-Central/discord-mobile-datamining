// discord_app/modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import _modDef2521 from "../../../parent_tools/FamilyCenter.messages.js";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import LayerActionCreators from "../../../../actions/LayerActionCreators.tsx";
import Constants from "../../../safety_common/Constants.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let activeLinkUserIds;
      let tmp3;
      let obj = activeLinkUserIds(576);
      const cResult = obj.c(5);
      let obj2 = activeLinkUserIds(8328);
      activeLinkUserIds = obj2.useActiveLinkUserIds();
      if (cResult[0] !== activeLinkUserIds) {
        const fn = function o() {
          const obj = LayerActionCreators;
          obj.popLayer();
          const obj2 = ChannelActionCreatorsDefault;
          const obj3 = { recipientIds: activeLinkUserIds };
          obj2.openPrivateChannel(obj3);
        };
        cResult[0] = activeLinkUserIds;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === tmp3) {
        let tmp4;
        if (cResult[3] === activeLinkUserIds.length) {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
      SafetySettingsNoticeDefault;
      const tmp6 = (
        <tmp5
          label={_modDef2521.i284fU}
          noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE}
          labelHook={tmp3}
          count={activeLinkUserIds.length}
        />
      );
      cResult[2] = tmp3;
      cResult[3] = activeLinkUserIds.length;
      cResult[4] = tmp6;
      tmp4 = tmp6;
    }
  : () => {
      let activeLinkUserIds;
      let obj = activeLinkUserIds(8328);
      activeLinkUserIds = obj.useActiveLinkUserIds();
      SafetySettingsNoticeDefault;
      return (
        <tmp
          label={_modDef2521.i284fU}
          noticeType={SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE}
          labelHook={function labelHook() {
            const obj = LayerActionCreators;
            obj.popLayer();
            const obj2 = ChannelActionCreatorsDefault;
            const obj3 = { recipientIds: activeLinkUserIds };
            obj2.openPrivateChannel(obj3);
          }}
          count={activeLinkUserIds.length}
        />
      );
    };
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default tmp3;
