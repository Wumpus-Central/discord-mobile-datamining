// === Module 12568: VoicePanelRiveMicButton ===

// Module 12568 (VoicePanelRiveMicButton)
import noopAll from "noop" /* 19 */;
import ManaContext from "ManaContext" /* 4104 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 9685 */;
import MicrophoneIcon2 from "MicrophoneIcon" /* 11422 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = function VoicePanelRiveMicButton(arg0) {
  ({ color, muted } = arg0);
  let obj = { style: { width: 24, height: 24, pointerEvents: "none" }, children: null };
  obj = { fill: color, on: !muted };
  let str = "On";
  if (muted) {
    str = "Off";
  }
  obj[1] = str;
  if (muted) {
    let MicrophoneIcon = MicrophoneSlashIcon.MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = MicrophoneIcon2.MicrophoneIcon;
  }
  obj[2] = <MicrophoneIcon color={color} />;
  obj[1] = jsx(ManaContext.MicrophoneRive, { fill: color, on: !muted });
  return <View fill={color} on={!muted} />;
};