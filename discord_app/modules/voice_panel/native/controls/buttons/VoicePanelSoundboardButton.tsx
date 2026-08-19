// === Module 16412: SoundboardButton ===

// Module 16412 (SoundboardButton)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import obj132Default from "obj132" /* 7190 */;
import SoundboardIcon from "SoundboardIcon" /* 7993 */;
import dismissPanelDefault from "dismissPanel" /* 11439 */;
import useVoicePanelButtonStyles from "useVoicePanelButtonStyles" /* 16397 */;
import AnimatedButtonWrapperDefault from "AnimatedButtonWrapper" /* 16398 */;
import useSoundboardConfig from "useSoundboardConfig" /* 16413 */;
import useSoundboardConfigDefault from "useSoundboardConfig" /* 16413 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { width: "100%", height: "100%", borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx");

export default function SoundboardButton(arg0) {
  ({ props, wrapperSpecs } = arg0);
  const tmp3 = callback3();
  let obj = useVoicePanelButtonStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  ({ disabled, handlePress, visible } = useSoundboardConfigDefault(React.useContext(dismissPanelDefault).channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS));
  if (disabled) {
    let color = ThemesDefault.colors.ICON_MUTED;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  let tmp8 = null;
  if (visible) {
    obj = { onPress: null, disabled: null, props: null, accessibilityLabel: null, children: null };
    obj[0] = handlePress;
    obj[1] = disabled;
    obj[2] = props;
    const intl = getSystemLocale.intl;
    obj[3] = intl.string(getSystemLocale.t["6EJvHt"]);
    obj = { style: null };
    const items = [tmp3.circle, ];
    obj1 = { backgroundColor: null };
    obj1[0] = voicePanelButtonStyles.iconBg.backgroundColor;
    items[1] = obj1;
    obj[0] = items;
    const items1 = [callback(obj132Default, obj), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp3.iconContainer;
    const tmpResult = obj132Default;
    const obj3 = { color: null };
    obj3[0] = color;
    obj2[1] = callback(SoundboardIcon.SoundboardIcon, obj3);
    items1[1] = callback(tmpResult, obj2);
    obj[4] = items1;
    tmp8 = callback2(tmpResult, obj);
  }
  return tmp8;
};