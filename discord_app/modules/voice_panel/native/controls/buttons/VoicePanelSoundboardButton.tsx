// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import dismissPanelDefault from "../../VoicePanelStateContext.tsx";
import useVoicePanelButtonStyles from "VoicePanelStyles.tsx";
import useSoundboardConfig from "../../hooks/useSoundboardConfig.tsx";
import useSoundboardConfigDefault from "../../hooks/useSoundboardConfig.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { circle: null, iconContainer: null };
createCacheKey = { width: "100%", height: "100%", borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx");

export default function SoundboardButton(arg0) {
  ({ props, wrapperSpecs } = arg0);
  const tmp3 = callback3();
  let obj = useVoicePanelButtonStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp6 = useSoundboardConfigDefault;
  ({ disabled, handlePress, disabledAccessibilityHint, visible } = useSoundboardConfigDefault(React.useContext(dismissPanelDefault).channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS));
  if (disabled) {
    let color = tmp(712).colors.ICON_MUTED;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  let tmp8 = null;
  if (visible) {
    obj = { onPress: null, disabled: null, props: null, accessibilityLabel: null, accessibilityHint: null, children: null };
    obj[0] = handlePress;
    obj[1] = disabled;
    obj[2] = props;
    let tmpResult = tmp(16765);
    const intl = tmp4(1236).intl;
    obj[3] = intl.string(tmp4(1236).t["6EJvHt"]);
    obj[4] = disabledAccessibilityHint;
    obj = { style: null };
    const items = [tmp3.circle, ];
    obj1 = { backgroundColor: null };
    obj1[0] = voicePanelButtonStyles.iconBg.backgroundColor;
    items[1] = obj1;
    obj[0] = items;
    const items1 = [callback(tmp(6006), obj), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp3.iconContainer;
    tmpResult = tmp(6006);
    const obj3 = { color: null };
    obj3[0] = color;
    obj2[1] = callback(tmp4(12092).SoundboardIcon, obj3);
    items1[1] = callback(tmpResult, obj2);
    obj[5] = items1;
    tmp8 = callback2(tmpResult, obj);
  }
  return tmp8;
};