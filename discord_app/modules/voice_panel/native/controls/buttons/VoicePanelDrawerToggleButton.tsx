// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import setDefault from "set" /* 7190 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 16384 */;
import useVoicePanelButtonStyles from "useVoicePanelButtonStyles" /* 16397 */;
import AnimatedButtonWrapperDefault from "AnimatedButtonWrapper" /* 16398 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { circle: null, iconContainer: null };
createCacheKey = { width: "100%", height: "100%", borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx");

export default function VoicePanelDrawerToggleButton(arg0) {
  ({ props, openTab, wrapperSpecs } = arg0);
  const tmp = callback2();
  let obj = useVoicePanelButtonStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  ({ isDrawerOpen, handlePress, accessibilityLabel } = useDrawerToggleDefault(openTab));
  obj = { onPress: handlePress, props, accessibilityLabel, children: null };
  const tmp5 = useDrawerToggleDefault(openTab);
  const tmp6 = closure_4;
  const items = [tmp.circle, { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor }];
  const items1 = [callback(setDefault, { style: items }), ];
  obj = { style: tmp.iconContainer, children: null };
  const tmp7 = AnimatedButtonWrapperDefault;
  if (isDrawerOpen) {
    let ChevronSmallUpIcon = tmp2(9464).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp2(13006).ChevronSmallUpIcon;
  }
  obj[1] = callback(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = callback(setDefault, obj);
  obj[3] = items1;
  return tmp6(tmp7, obj);
};