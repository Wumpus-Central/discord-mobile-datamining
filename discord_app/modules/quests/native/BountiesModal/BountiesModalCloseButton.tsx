// discord_app/modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles(() => {
  let obj = { closeButton: null };
  obj = {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
    borderRadius: ThemesDefault.radii.round,
    width: ThemesDefault.space.PX_32,
    height: ThemesDefault.space.PX_32,
  };
  obj[0] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default function BountiesModalCloseButton(onPress) {
  let obj = {
    accessibilityLabel: null,
    accessibilityRole: "button",
    hitSlop: 12,
    onPress: null,
    style: null,
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.cpT0Cq);
  obj[3] = onPress.onPress;
  obj[4] = callback().closeButton;
  obj = { size: "sm", color: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
  obj[5] = jsx(XSmallIcon.XSmallIcon, {
    size: "sm",
    color: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
  });
  return jsx(PressableBase.PressableOpacity, {
    size: "sm",
    color: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
  });
}
