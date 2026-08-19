// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import obj132Default from "../../../../core/native/NativeView.tsx";
import ChevronSmallDownIcon from "../../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import ChevronSmallUpIcon2 from "../../../../../design/components/Icon/native/redesign/generated/ChevronSmallUpIcon.tsx";
import useDrawerToggleDefault from "../useDrawerToggle.tsx";
import useVoicePanelButtonStyles from "VoicePanelStyles.tsx";
import AnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
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