// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx
import noop from "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { useSoundboardConfig } from "../../hooks/useSoundboardConfig.tsx";
import { dismissPanel } from "../../VoicePanelStateContext.tsx";
import { useVoicePanelButtonStyles } from "VoicePanelStyles.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { circle: null, iconContainer: null };
createCacheKey = { width: "100%", height: "100%", borderRadius: require("Themes").radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx");

export default function SoundboardButton(arg0) {
  let disabled;
  let handlePress;
  let props;
  let visible;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  const tmp3 = createCacheKey();
  let obj = useVoicePanelButtonStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp6 = useSoundboardConfig;
  ({ disabled, handlePress, visible } = useSoundboardConfig(React.useContext(dismissPanel).channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS));
  if (disabled) {
    let color = tmp(712).colors.ICON_MUTED;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  let tmp8 = null;
  if (visible) {
    obj = { onPress: null, disabled: null, props: null, accessibilityLabel: null, children: null };
    obj[0] = handlePress;
    obj[1] = disabled;
    obj[2] = props;
    let tmpResult = tmp(16105);
    const intl = tmp4(1236).intl;
    obj[3] = intl.string(tmp4(1236).t["6EJvHt"]);
    obj = { style: null };
    const items = [tmp3.circle, ];
    const obj1 = { backgroundColor: null };
    obj1[0] = voicePanelButtonStyles.iconBg.backgroundColor;
    items[1] = obj1;
    obj[0] = items;
    const items1 = [callback(tmp(5648), obj), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp3.iconContainer;
    tmpResult = tmp(5648);
    const obj3 = { color: null };
    obj3[0] = color;
    obj2[1] = callback(tmp4(7602).SoundboardIcon, obj3);
    items1[1] = callback(tmpResult, obj2);
    obj[4] = items1;
    tmp8 = callback2(tmpResult, obj);
  }
  return tmp8;
};