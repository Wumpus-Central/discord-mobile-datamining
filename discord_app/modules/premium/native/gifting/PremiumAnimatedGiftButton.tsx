// discord_app/modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { useRef } from "../../../../../_runtime/00019_noop.js";
import closure_5 from "../../../a11y/AccessibilityStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";

const require = arg1;
let closure_7 = createCacheKey.createStyles((width, marginHorizontal) => {
  let obj = { containerRefresh: null, animationRefresh: null };
  obj = {
    width,
    height: width,
    borderRadius: ThemesDefault.radii.sm,
    marginHorizontal,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  obj[0] = obj;
  obj[1] = { width: 24, height: 24 };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx");

export const PremiumAnimatedGiftButton = function PremiumAnimatedGiftButton(arg0) {
  ({ active, disabled, accessibilityState } = arg0);
  ({ style, activeStyle, channelId, animationDataUrl, onAnimationFinished, loop } = arg0);
  let obj = map;
  const token = obj.useToken(stateFromStores(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  obj1 = map;
  const token1 = obj1.useToken(stateFromStores(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj2 = map;
  const token2 = obj2.useToken(stateFromStores(576).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = callback(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const tmp9 = useRef(null);
  _require = tmp9;
  const items = [closure_5];
  stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => useReducedMotion.useReducedMotion,
  );
  const items1 = [channelId, stateFromStores];
  const effect = React.useEffect(() => {
    if (!stateFromStores) {
      if (obj.isIOS()) {
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.reset();
          }
        }
      }
      if (ref != null) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.play();
        }
      }
      obj = ref(closure_1_2[7]);
    }
  }, items1);
  let FadeOut;
  if (!stateFromStores) {
    FadeOut = tmp(4296).FadeOut;
  }
  obj = { exiting: FadeOut, children: null };
  const items2 = [tmp7.containerRefresh, style];
  if (active) {
    active = !disabled;
  }
  if (active) {
    active = activeStyle;
  }
  obj = { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null };
  items2[2] = active;
  let tmp14;
  if (bound > 0) {
    tmp14 = bound;
  }
  obj[1] = tmp14;
  obj1 = { disabled };
  const merged = Object.assign(accessibilityState);
  obj[3] = obj1;
  const merged1 = Object.assign(arg0);
  obj2 = {
    ref: tmp9,
    style: tmp7.animationRefresh,
    source: { uri: animationDataUrl },
    loop,
    autoPlay: false,
    onAnimationFinish: onAnimationFinished,
  };
  obj.children = jsx(stateFromStores(5529), {
    ref: tmp9,
    style: tmp7.animationRefresh,
    source: { uri: animationDataUrl },
    loop,
    autoPlay: false,
    onAnimationFinish: onAnimationFinished,
  });
  obj[1] = jsx(require("../../../../design/void/Pressables/native/Pressables.tsx").PressableOpacity, {
    style: items2,
    hitSlop: null,
    accessibilityRole: "button",
    accessibilityState: null,
  });
  return jsx(stateFromStores(4296).View, {
    style: items2,
    hitSlop: null,
    accessibilityRole: "button",
    accessibilityState: null,
  });
};
