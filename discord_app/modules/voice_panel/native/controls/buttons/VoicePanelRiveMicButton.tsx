// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx
import MicrophoneRive from "../../../../../../discord_common/js/packages/design/components/Rive/native/generated/MicrophoneRive.tsx";
import IconSize from "../../../../../design/components/Icon/IconSize.tsx";
import MicrophoneSlashIcon from "../../../../../design/components/Icon/native/redesign/generated/MicrophoneSlashIcon.tsx";
import MicrophoneIcon2 from "../../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

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
  obj.children = jsx(MicrophoneRive.MicrophoneRive, {
    dataBinding: { fill: color, on: !muted },
    defaultViewModelInstance: null,
    fallback: null,
  });
  return <View style={closure_4(size).container}>{null}</View>;
}
