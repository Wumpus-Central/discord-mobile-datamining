// === Module 14407: BountiesModalCloseButton ===

// Module 14407 (BountiesModalCloseButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PressableBase from "PressableBase" /* 5433 */;
import XSmallIcon from "XSmallIcon" /* 6368 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles(() => {
  let obj = { closeButton: null };
  obj = { alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, width: ThemesDefault.space.PX_32, height: ThemesDefault.space.PX_32 };
  obj[0] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default function BountiesModalCloseButton(onPress) {
  let obj = { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.cpT0Cq);
  obj[3] = onPress.onPress;
  obj[4] = callback().closeButton;
  obj = { size: "sm", color: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
  obj[5] = jsx(XSmallIcon.XSmallIcon, { size: "sm", color: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT });
  return jsx(PressableBase.PressableOpacity, { size: "sm", color: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT });
};