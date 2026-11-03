// === Module 12108: VoicePanelRiveMicButton ===

// Module 12108 (VoicePanelRiveMicButton)
import MicrophoneRive from "MicrophoneRive" /* 5294 */;
import IconSize from "IconSize" /* 7222 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 9370 */;
import MicrophoneIcon2 from "MicrophoneIcon" /* 12109 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { container: null };
  const size = { width: IconSize.ICON_SIZE[arg0], height: IconSize.ICON_SIZE[arg0], pointerEvents: "none" };
  obj.container = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export function VoicePanelRiveMicButton(arg0) {
  ({ color, muted, size } = arg0);
  if (size === undefined) {
    size = "md";
  }
  const obj = { style: closure_4(size).container, children: null };
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
  obj2.fallback = <MicrophoneIcon color={color} size={size} />;
  obj.children = jsx(MicrophoneRive.MicrophoneRive, { dataBinding: { fill: color, on: !muted }, defaultViewModelInstance: null, fallback: null });
  return <View style={closure_4(size).container}>{null}</View>;
}