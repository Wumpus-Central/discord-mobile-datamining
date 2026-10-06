// === Module 13122: VoicePanelVideoGuardErrorAlert ===

// Module 13122 (VoicePanelVideoGuardErrorAlert)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import AlertModal2 from "AlertModal" /* 5720 */;
import VideoGuardExperiment from "VideoGuardExperiment" /* 13120 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let title;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((title) => {
  let first;
  let tmp10;
  let tmp12;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  title = title.title;
  const obj2 = AlertModal2;
  const dismissModalCallback = obj2.useDismissModalCallback();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.UoW002);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const Text = Text_Text.Text;
    const intl2 = intl4.intl;
    const format = intl2.format;
    const obj4 = { helpdeskArticle: VideoGuardExperiment.VIDEO_GUARD_BLOG_POST_URL };
    const BPDKoA = intl4.t.BPDKoA;
    const tmp9 = <Text variant="text-sm/normal" color="text-subtle">{format(BPDKoA, obj4)}</Text>;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl4.intl;
    const stringResult1 = intl3.string(intl4.t["NX+WJN"]);
    cResult[2] = stringResult1;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== dismissModalCallback) {
    const tmp14 = jsx(AlertModal2.AlertActionButton, { variant: "secondary", text: tmp10, onPress: dismissModalCallback });
    cResult[3] = dismissModalCallback;
    cResult[4] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp12) {
    let tmp15;
    if (cResult[6] === title) {
      tmp15 = cResult[7];
    }
    return tmp15;
  }
  const tmp16 = jsx(AlertModal2.AlertModal, { title, content: first, extraContent: tmp7, actions: tmp12 });
  cResult[5] = tmp12;
  cResult[6] = title;
  cResult[7] = tmp16;
  tmp15 = tmp16;
}) : ((title) => {
  let BPDKoA;
  let format;
  let intl3;
  let obj4;
  title = title.title;
  const obj = AlertModal2;
  const dismissModalCallback = obj.useDismissModalCallback();
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  ({ variant: "text-sm/normal", color: "text-subtle", children: format(BPDKoA, obj4) });
  const Text = Text_Text.Text;
  const intl2 = intl4.intl;
  format = intl2.format;
  obj4 = { helpdeskArticle: VideoGuardExperiment.VIDEO_GUARD_BLOG_POST_URL };
  BPDKoA = intl4.t.BPDKoA;
  ({ variant: "secondary", text: intl3.string(intl4.t["NX+WJN"]), onPress: dismissModalCallback });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal title={title} content={intl.string(intl4.t.UoW002)} extraContent={null} actions={null} />;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelVideoGuardErrorAlert.tsx");

export default tmp3;
export const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = "voice-panel-video-guard-error";