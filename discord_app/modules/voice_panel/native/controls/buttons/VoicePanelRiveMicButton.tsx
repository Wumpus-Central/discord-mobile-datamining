// === Module 11063: VoicePanelRiveMicButton ===

// Module 11063 (VoicePanelRiveMicButton)
import c from "c" /* 576 */;
import MicrophoneRive from "MicrophoneRive" /* 4881 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 5021 */;
import MicrophoneIcon2 from "MicrophoneIcon" /* 11064 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelRiveMicButton(arg0) {
  const cResult = c.c(11);
  ({ color, muted } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const size = { width: 24, height: 24, pointerEvents: "none" };
    cResult[0] = size;
    let first = size;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === color) {
    if (cResult[2] === tmp5) {
      let tmp6 = cResult[3];
    }
    let str = "On";
    if (muted) {
      str = "Off";
    }
    if (cResult[4] === color) {
      if (cResult[5] === muted) {
        if (cResult[7] === tmp6) {
          if (cResult[8] === str) {
            if (cResult[9] === tmp7) {
              let tmp11 = cResult[10];
            }
            return tmp11;
          }
        }
        const obj2 = { style: first, children: null };
        const obj3 = { dataBinding: tmp6, defaultViewModelInstance: str, fallback: cResult[6] };
        obj2.children = jsx(MicrophoneRive.MicrophoneRive, { dataBinding: tmp6, defaultViewModelInstance: str, fallback: cResult[6] });
        const tmp14 = <View style={first}>{null}</View>;
        cResult[7] = tmp6;
        cResult[8] = str;
        cResult[9] = cResult[6];
        cResult[10] = tmp14;
        tmp11 = tmp14;
      }
    }
    if (muted) {
      let MicrophoneIcon = MicrophoneSlashIcon.MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = MicrophoneIcon2.MicrophoneIcon;
    }
    const obj4 = { color };
    const tmp8Result = <MicrophoneIcon color={color} />;
    cResult[4] = color;
    cResult[5] = muted;
    cResult[6] = tmp8Result;
  }
  const obj5 = { fill: color, on: !muted };
  cResult[1] = color;
  cResult[2] = !muted;
  cResult[3] = obj5;
  tmp6 = obj5;
}) : (function VoicePanelRiveMicButton(arg0) {
  ({ color, muted } = arg0);
  const obj = { style: { width: 24, height: 24, pointerEvents: "none" }, children: null };
  const obj2 = { dataBinding: { fill: color, on: !muted }, defaultViewModelInstance: null, fallback: null };
  let str = "On";
  if (muted) {
    str = "Off";
  }
  obj2.defaultViewModelInstance = str;
  if (muted) {
    let MicrophoneIcon = MicrophoneSlashIcon.MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = MicrophoneIcon2.MicrophoneIcon;
  }
  obj2.fallback = <MicrophoneIcon color={color} />;
  obj.children = jsx(MicrophoneRive.MicrophoneRive, { dataBinding: { fill: color, on: !muted }, defaultViewModelInstance: null, fallback: null });
  return <View style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</View>;
});