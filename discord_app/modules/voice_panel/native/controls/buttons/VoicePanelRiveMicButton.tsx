// === Module 9701: VoicePanelRiveMicButton ===

// Module 9701 (VoicePanelRiveMicButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import MicrophoneRive2 from "MicrophoneRive" /* 4686 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 4826 */;
import MicrophoneIcon2 from "MicrophoneIcon" /* 9702 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let color;
  let first;
  let muted;
  const obj = react2;
  const cResult = obj.c(11);
  ({ color, muted } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    size = { width: 24, height: 24, pointerEvents: "none" };
    cResult[0] = size;
    first = size;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === color) {
    let tmp6;
    if (cResult[2] === !muted) {
      tmp6 = cResult[3];
    }
    let str = "On";
    if (muted) {
      str = "Off";
    }
    if (cResult[4] === color) {
      let tmp7;
      if (cResult[5] === muted) {
        tmp7 = cResult[6];
      }
      if (cResult[7] === tmp6) {
        if (cResult[8] === str) {
          let tmp10;
          if (cResult[9] === tmp7) {
            tmp10 = cResult[10];
          }
          return tmp10;
        }
      }
      const tmp13 = <View style={first}>{null}</View>;
      cResult[7] = tmp6;
      cResult[8] = str;
      cResult[9] = tmp7;
      cResult[10] = tmp13;
      tmp10 = tmp13;
    }
    if (muted) {
      let MicrophoneIcon = MicrophoneSlashIcon.MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = MicrophoneIcon2.MicrophoneIcon;
    }
    const tmp8Result = <MicrophoneIcon color={color} />;
    cResult[4] = color;
    cResult[5] = muted;
    cResult[6] = tmp8Result;
    tmp7 = tmp8Result;
  }
  const obj5 = { fill: color, on: !muted };
  cResult[1] = color;
  cResult[2] = !muted;
  cResult[3] = obj5;
  tmp6 = obj5;
}) : ((arg0) => {
  let color;
  let muted;
  ({ color, muted } = arg0);
  let str = "On";
  const MicrophoneRive = MicrophoneRive2.MicrophoneRive;
  if (muted) {
    str = "Off";
  }
  if (muted) {
    let MicrophoneIcon = MicrophoneSlashIcon.MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = MicrophoneIcon2.MicrophoneIcon;
  }
  return <View style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</View>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = tmp3;