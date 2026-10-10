// === Module 17863: VoicePanelNoJoinPermissionsAlert ===

// Module 17863 (VoicePanelNoJoinPermissionsAlert)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AlertModal from "AlertModal" /* 5305 */;
import VoicePanelLockedIconDefault from "VoicePanelLockedIcon" /* 17864 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelNoJoinPermissionsAlert() {
  const cResult = c.c(6);
  const dismissModalCallback = AlertModal.useDismissModalCallback();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = jsx(VoicePanelLockedIconDefault, {});
    const intl = util.intl;
    const stringResult = intl.string(util.t["7/2/3M"]);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.xsenup);
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
    const intl3 = util.intl;
    const stringResult2 = intl3.string(util.t["NX+WJN"]);
    cResult[3] = stringResult2;
    let tmp13 = stringResult2;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== dismissModalCallback) {
    const obj3 = { header: tmp5, title: tmp6, content: tmp7, actions: null };
    const obj4 = { variant: "secondary", text: tmp13, onPress: dismissModalCallback };
    obj3.actions = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: tmp13, onPress: dismissModalCallback });
    const tmp17 = jsx(AlertModal.AlertModal, { header: tmp5, title: tmp6, content: tmp7, actions: null });
    cResult[4] = dismissModalCallback;
    cResult[5] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  return tmp15;
}) : (function VoicePanelNoJoinPermissionsAlert() {
  const obj2 = { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["7/2/3M"]);
  const intl2 = util.intl;
  obj2.content = intl2.string(util.t.xsenup);
  const obj3 = { variant: "secondary", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  obj3.onPress = AlertModal.useDismissModalCallback();
  obj2.actions = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(AlertModal.AlertModal, { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null });
});
export const VOICE_PANEL_NO_JOIN_PERMS_KEY = "voice-panel-no-join-perms";