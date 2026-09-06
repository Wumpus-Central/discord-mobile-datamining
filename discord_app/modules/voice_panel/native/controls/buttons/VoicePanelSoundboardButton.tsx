// === Module 17198: VoicePanelSoundboardButton ===

// Module 17198 (VoicePanelSoundboardButton)
import nativeDefault from "native" /* 576 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12272 */;
import VoicePanelStyles from "VoicePanelStyles" /* 17184 */;
import useSoundboardConfig from "useSoundboardConfig" /* 17199 */;
import noop from "module_19" /* 19 */;

const useSoundboardConfigDefault = useSoundboardConfig;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
const createStyles = { circle: null, iconContainer: null };
let size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
createStyles.circle = size;
createStyles.iconContainer = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx");

export default function SoundboardButton(arg0) {
  ({ props, wrapperSpecs } = arg0);
  const tmp3 = closure_6();
  let obj = VoicePanelStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  ({ disabled, handlePress, disabledAccessibilityHint, visible } = useSoundboardConfigDefault(noop.useContext(VoicePanelStateContextDefault).channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS));
  if (disabled) {
    let color = tmp(576).colors.ICON_MUTED;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  let tmp8 = null;
  if (visible) {
    const element = { onPress: handlePress, disabled, props, accessibilityLabel: null, accessibilityHint: null, children: null };
    tmp(17185);
    const intl = tmp4(1114).intl;
    element.accessibilityLabel = intl.string(tmp4(1114).t["6EJvHt"]);
    element.accessibilityHint = disabledAccessibilityHint;
    obj = { style: null };
    const items = [tmp3.circle, ];
    obj = { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor };
    items[1] = obj;
    obj.style = items;
    const items1 = [React4(tmp(5589), obj), ];
    const obj1 = { style: tmp3.iconContainer, children: null };
    const tmpResult = tmp(5589);
    const obj2 = { color };
    obj1.children = React4(tmp4(12528).SoundboardIcon, obj2);
    items1[1] = React4(tmpResult, obj1);
    element.children = items1;
    tmp8 = hasOwnProperty(tmpResult, element);
  }
  return tmp8;
};