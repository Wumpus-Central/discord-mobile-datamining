// === Module 17205: VoicePanelDrawerToggleButton ===

// Module 17205 (VoicePanelDrawerToggleButton)
import nativeDefault from "native" /* 576 */;
import NativeViewDefault from "NativeView" /* 5589 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11153 */;
import ChevronSmallUpIcon2 from "ChevronSmallUpIcon" /* 13573 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 17170 */;
import VoicePanelStyles from "VoicePanelStyles" /* 17184 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 17185 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
const createStyles = { circle: null, iconContainer: null };
let size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
createStyles.circle = size;
createStyles.iconContainer = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_5 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx");

export default function VoicePanelDrawerToggleButton(arg0) {
  ({ props, openTab, wrapperSpecs } = arg0);
  const tmp = closure_5();
  let obj = VoicePanelStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  ({ isDrawerOpen, handlePress, accessibilityLabel } = useDrawerToggleDefault(openTab));
  const element = { onPress: handlePress, props, accessibilityLabel, children: null };
  const tmp5 = useDrawerToggleDefault(openTab);
  obj = { style: null };
  const items = [tmp.circle, { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor }];
  obj.style = items;
  const items1 = [React3(NativeViewDefault, obj), ];
  obj = { style: tmp.iconContainer, children: null };
  const tmp7 = VoicePanelAnimatedButtonWrapperDefault;
  if (isDrawerOpen) {
    let ChevronSmallUpIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = ChevronSmallUpIcon2.ChevronSmallUpIcon;
  }
  obj.children = React3(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = React3(NativeViewDefault, obj);
  element.children = items1;
  return React4(tmp7, element);
};