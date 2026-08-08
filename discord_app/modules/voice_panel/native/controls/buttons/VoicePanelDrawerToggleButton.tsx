// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { set } from "../../../../core/native/NativeView.tsx";
import { useDrawerToggle } from "../useDrawerToggle.tsx";
import { AnimatedButtonWrapper } from "VoicePanelAnimatedButtonWrapper.tsx";
import { useVoicePanelButtonStyles } from "VoicePanelStyles.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { circle: null, iconContainer: null };
createCacheKey = { width: "100%", height: "100%", borderRadius: require("Themes").radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx");

export default function VoicePanelDrawerToggleButton(arg0) {
  let accessibilityLabel;
  let handlePress;
  let isDrawerOpen;
  let openTab;
  let props;
  let wrapperSpecs;
  ({ props, openTab, wrapperSpecs } = arg0);
  const tmp = createCacheKey();
  let obj = useVoicePanelButtonStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  ({ isDrawerOpen, handlePress, accessibilityLabel } = useDrawerToggle(openTab));
  obj = { onPress: handlePress, props, accessibilityLabel, children: null };
  const tmp5 = useDrawerToggle(openTab);
  const tmp6 = closure_4;
  const items = [tmp.circle, { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor }];
  const items1 = [callback(set, { style: items }), ];
  obj = { style: tmp.iconContainer, children: null };
  const tmp7 = AnimatedButtonWrapper;
  if (isDrawerOpen) {
    let ChevronSmallUpIcon = tmp2(9478).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp2(12845).ChevronSmallUpIcon;
  }
  obj[1] = callback(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = callback(set, obj);
  obj[3] = items1;
  return tmp6(tmp7, obj);
};