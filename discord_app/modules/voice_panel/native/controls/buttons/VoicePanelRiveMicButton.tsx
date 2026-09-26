// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx
import MicrophoneRive from "../../../../../../discord_common/js/packages/design/components/Rive/native/generated/MicrophoneRive.tsx";
import MicrophoneSlashIcon from "../../../../../design/components/Icon/native/redesign/generated/MicrophoneSlashIcon.tsx";
import MicrophoneIcon2 from "../../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = function VoicePanelRiveMicButton(arg0) {
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
  obj.children = jsx(MicrophoneRive.MicrophoneRive, {
    dataBinding: { fill: color, on: !muted },
    defaultViewModelInstance: null,
    fallback: null,
  });
  return <View style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</View>;
};
