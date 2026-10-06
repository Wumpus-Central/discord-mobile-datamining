// === Module 17358: VoicePanelNoJoinPermissionsAlert ===

// Module 17358 (VoicePanelNoJoinPermissionsAlert)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import AlertModal2 from "AlertModal" /* 5720 */;
import VoicePanelLockedIconDefault from "VoicePanelLockedIcon" /* 17359 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp15;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  const obj2 = AlertModal2;
  const dismissModalCallback = obj2.useDismissModalCallback();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = jsx(VoicePanelLockedIconDefault, {});
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t["7/2/3M"]);
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t.xsenup);
    cResult[0] = tmp10;
    cResult[1] = stringResult;
    cResult[2] = stringResult1;
    tmp5 = tmp10;
    tmp6 = stringResult;
    tmp7 = stringResult1;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl4.intl;
    const stringResult2 = intl3.string(intl4.t["NX+WJN"]);
    cResult[3] = stringResult2;
  }
  if (cResult[4] !== dismissModalCallback) {
    const AlertModal = AlertModal2.AlertModal;
    const tmp17 = <AlertModal header={tmp5} title={tmp6} content={tmp7} actions={null} />;
    cResult[4] = dismissModalCallback;
    cResult[5] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  return tmp15;
}) : (() => {
  let intl3;
  const obj = AlertModal2;
  const dismissModalCallback = obj.useDismissModalCallback();
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  ({ variant: "secondary", text: intl3.string(intl4.t["NX+WJN"]), onPress: dismissModalCallback });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal header={null} title={intl.string(intl4.t["7/2/3M"])} content={intl2.string(intl4.t.xsenup)} actions={null} />;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx");

export default tmp3;
export const VOICE_PANEL_NO_JOIN_PERMS_KEY = "voice-panel-no-join-perms";