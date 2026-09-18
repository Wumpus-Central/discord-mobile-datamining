// === Module 17581: VoicePanelDrawerToggleButton ===

// Module 17581 (VoicePanelDrawerToggleButton)
import nativeDefault from "native" /* 576 */;
import NativeViewDefault from "NativeView" /* 5759 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11406 */;
import ChevronSmallUpIcon2 from "ChevronSmallUpIcon" /* 13775 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 17546 */;
import VoicePanelStyles from "VoicePanelStyles" /* 17560 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 17561 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { circle: null, iconContainer: null };
let size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
obj2.circle = size;
obj2.iconContainer = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx");

export default function VoicePanelDrawerToggleButton(arg0) {
  ({ props, openTab, wrapperSpecs } = arg0);
  const tmp = closure_5();
  const voicePanelButtonStyles = VoicePanelStyles.useVoicePanelButtonStyles(wrapperSpecs);
  ({ isDrawerOpen, handlePress, accessibilityLabel } = useDrawerToggleDefault(openTab));
  const element = { onPress: handlePress, props, accessibilityLabel, children: null };
  const tmp5 = useDrawerToggleDefault(openTab);
  const obj2 = { style: null };
  const items = [tmp.circle, { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor }];
  obj2.style = items;
  const items1 = [React3(NativeViewDefault, obj2), ];
  const obj3 = { style: tmp.iconContainer, children: null };
  const tmp7 = VoicePanelAnimatedButtonWrapperDefault;
  if (isDrawerOpen) {
    let ChevronSmallUpIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = ChevronSmallUpIcon2.ChevronSmallUpIcon;
  }
  obj3.children = React3(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = React3(NativeViewDefault, obj3);
  element.children = items1;
  return React4(tmp7, element);
};