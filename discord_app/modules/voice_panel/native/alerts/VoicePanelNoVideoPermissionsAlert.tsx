// discord_app/modules/voice_panel/native/alerts/VoicePanelNoVideoPermissionsAlert.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import AlertModal2 from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp11;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(5);
      const obj2 = AlertModal2;
      const dismissModalCallback = obj2.useDismissModalCallback();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t.OYzPcW);
        const intl2 = intl4.intl;
        const stringResult1 = intl2.string(intl4.t.oBH7Y2);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp5 = stringResult;
        tmp6 = stringResult1;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl4.intl;
        const stringResult2 = intl3.string(intl4.t["NX+WJN"]);
        cResult[2] = stringResult2;
      }
      if (cResult[3] !== dismissModalCallback) {
        const AlertModal = AlertModal2.AlertModal;
        const tmp13 = <AlertModal title={tmp5} content={tmp6} actions={null} />;
        cResult[3] = dismissModalCallback;
        cResult[4] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      return tmp11;
    }
  : () => {
      let intl3;
      const obj = AlertModal2;
      const dismissModalCallback = obj.useDismissModalCallback();
      const AlertModal = AlertModal2.AlertModal;
      const intl = intl4.intl;
      const intl2 = intl4.intl;
      ({ variant: "secondary", text: intl3.string(intl4.t["NX+WJN"]), onPress: dismissModalCallback });
      const AlertActionButton = AlertModal2.AlertActionButton;
      intl3 = intl4.intl;
      return <AlertModal title={intl.string(intl4.t.OYzPcW)} content={intl2.string(intl4.t.oBH7Y2)} actions={null} />;
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoVideoPermissionsAlert.tsx");

export default tmp3;
export const VOICE_PANEL_NO_VIDEO_PERMS_KEY = "voice-panel-no-video-perms";
