// === Module 11970: VoicePanelRiveMicButton ===

// Module 11970 (VoicePanelRiveMicButton)
import MicrophoneRive from "MicrophoneRive" /* 5171 */;
import IconSize from "IconSize" /* 7096 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 9242 */;
import MicrophoneIcon2 from "MicrophoneIcon" /* 11971 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
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