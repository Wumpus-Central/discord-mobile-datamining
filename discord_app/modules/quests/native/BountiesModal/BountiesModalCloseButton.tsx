// discord_app/modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles(() => {
  let obj = { closeButton: null };
  obj = { alignItems: "center", justifyContent: "center", backgroundColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: require("../../../../../discord_common/js/packages/tokens/native.tsx").radii.round, width: require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_32, height: require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_32 };
  obj[0] = obj;
  return obj;
});
const result = require("createCacheKey").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default function BountiesModalCloseButton(onPress) {
  let obj = { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.cpT0Cq);
  obj[3] = onPress.onPress;
  obj[4] = callback().closeButton;
  obj = { size: "sm", color: null };
  obj[1] = require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT;
  obj[5] = jsx(require("../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx") /* XSmallIcon */.XSmallIcon, { size: "sm", color: null });
  return jsx(require("../../../../design/void/Pressables/native/Pressables.tsx") /* PressableBase */.PressableOpacity, { size: "sm", color: null });
};