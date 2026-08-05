// discord_app/modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { XSmallIcon } from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import { PressableBase } from "../../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const require = arg1;
let closure_4 = createCacheKey.createStyles(() => {
  let obj = { closeButton: null };
  obj = { alignItems: "center", justifyContent: "center", backgroundColor: Themes.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: Themes.radii.round, width: Themes.space.PX_32, height: Themes.space.PX_32 };
  obj[0] = obj;
  return obj;
});
const result = require("createCacheKey").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default function BountiesModalCloseButton(onPress) {
  let obj = { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.cpT0Cq);
  obj[3] = onPress.onPress;
  obj[4] = callback().closeButton;
  obj = { size: "sm", color: null };
  obj[1] = Themes.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT;
  obj[5] = jsx(XSmallIcon.XSmallIcon, { size: "sm", color: null });
  return jsx(PressableBase.PressableOpacity, { size: "sm", color: null });
};