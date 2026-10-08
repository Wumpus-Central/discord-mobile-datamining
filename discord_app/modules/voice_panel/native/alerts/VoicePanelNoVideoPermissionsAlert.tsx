// === Module 17649: VoicePanelNoVideoPermissionsAlert ===

// Module 17649 (VoicePanelNoVideoPermissionsAlert)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AlertModal from "AlertModal" /* 5303 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoVideoPermissionsAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelNoVideoPermissionsAlert() {
  const cResult = c.c(5);
  const dismissModalCallback = AlertModal.useDismissModalCallback();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.OYzPcW);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.oBH7Y2);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult2 = intl3.string(util.t["NX+WJN"]);
    cResult[2] = stringResult2;
    let tmp9 = stringResult2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== dismissModalCallback) {
    const obj3 = { title: tmp5, content: tmp6, actions: null };
    const obj4 = { variant: "secondary", text: tmp9, onPress: dismissModalCallback };
    obj3.actions = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: tmp9, onPress: dismissModalCallback });
    const tmp13 = jsx(AlertModal.AlertModal, { title: tmp5, content: tmp6, actions: null });
    cResult[3] = dismissModalCallback;
    cResult[4] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  return tmp11;
}) : (function VoicePanelNoVideoPermissionsAlert() {
  const obj2 = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.OYzPcW);
  const intl2 = util.intl;
  obj2.content = intl2.string(util.t.oBH7Y2);
  const obj3 = { variant: "secondary", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  obj3.onPress = AlertModal.useDismissModalCallback();
  obj2.actions = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
});
export const VOICE_PANEL_NO_VIDEO_PERMS_KEY = "voice-panel-no-video-perms";