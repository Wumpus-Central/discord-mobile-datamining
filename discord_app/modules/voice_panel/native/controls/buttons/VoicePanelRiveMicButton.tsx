// === Module 10004: VoicePanelRiveMicButton ===

// Module 10004 (VoicePanelRiveMicButton)
import native from "native" /* 4271 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = function VoicePanelRiveMicButton(arg0) {
  ({ color, muted } = arg0);
  let obj = { style: { width: 24, height: 24, pointerEvents: "none" }, children: null };
  obj = { dataBinding: { fill: color, on: !muted }, defaultViewModelInstance: null, fallback: null };
  let str = "On";
  if (muted) {
    str = "Off";
  }
  obj.defaultViewModelInstance = str;
  if (muted) {
    let MicrophoneIcon = tmp3(9127).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp3(10005).MicrophoneIcon;
  }
  obj.fallback = <MicrophoneIcon color={color} />;
  obj.children = jsx(native.MicrophoneRive, { dataBinding: { fill: color, on: !muted }, defaultViewModelInstance: null, fallback: null });
  return <View dataBinding={{ fill: color, on: !muted }} defaultViewModelInstance={null} fallback={null} />;
};