import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = function VoicePanelRiveMicButton(arg0) {
  let color;
  let muted;
  ({ color, muted } = arg0);
  let obj = { style: { width: 24, height: 24, pointerEvents: "none" }, children: null };
  obj = { dataBinding: obj, defaultViewModelInstance: null, fallback: null };
  obj = { fill: color, on: !muted };
  let str = "On";
  if (muted) {
    str = "Off";
  }
  obj[1] = str;
  if (muted) {
    let MicrophoneIcon = tmp3(9055).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp3(10913).MicrophoneIcon;
  }
  obj[2] = <MicrophoneIcon color={color} />;
  obj[1] = jsx(require(3967) /* ManaContext */.MicrophoneRive, { fill: color, on: !muted });
  return <View fill={color} on={!muted} />;
};