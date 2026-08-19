// === Module 16417: VoicePanelDrawerToggleButton ===

// Module 16417 (VoicePanelDrawerToggleButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import obj132Default from "obj132" /* 7190 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 9464 */;
import ChevronSmallUpIcon2 from "ChevronSmallUpIcon" /* 13006 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 16384 */;
import useVoicePanelButtonStyles from "useVoicePanelButtonStyles" /* 16397 */;
import AnimatedButtonWrapperDefault from "AnimatedButtonWrapper" /* 16398 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const createCacheKey = { width: "100%", height: "100%", borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx");

export default function VoicePanelDrawerToggleButton(arg0) {
  ({ props, openTab, wrapperSpecs } = arg0);
  const tmp = callback2();
  let obj = useVoicePanelButtonStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  ({ isDrawerOpen, handlePress, accessibilityLabel } = useDrawerToggleDefault(openTab));
  const tmp5 = useDrawerToggleDefault(openTab);
  const items = [tmp.circle, { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor }];
  const items1 = [callback(obj132Default, { style: items }), ];
  obj = { style: tmp.iconContainer, children: null };
  const tmp7 = AnimatedButtonWrapperDefault;
  if (isDrawerOpen) {
    let ChevronSmallUpIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = ChevronSmallUpIcon2.ChevronSmallUpIcon;
  }
  obj[1] = callback(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = callback(obj132Default, obj);
  obj[3] = items1;
  return callback(tmp7, obj);
};