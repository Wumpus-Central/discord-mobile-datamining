// discord_app/modules/chat_input/native/GiftIconTrinketsAnimation.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import set from "../../../utils/PlatformUtils.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import useAPNGPlayerControls from "../../image/native/APNGPlayer.android.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../a11y/AccessibilityStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = arg1;
let closure_6 = createCacheKey.createStyles((width) => {
  const containerRefresh = {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height: width,
    overflow: "visible",
    marginLeft: 0,
    zIndex: 0,
  };
  return {
    containerRefresh,
    trinketsRefresh: {
      zIndex: 4,
      position: "absolute",
      pointerEvents: "none",
      width: "175%",
      height: "175%",
      top: "-37.5%",
      left: "-37.5%",
    },
  };
});
const memoResult = importAllResult.memo((trinketsAnimationUrl) => {
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  let APNGPlayer = require;
  let obj = dependencyMap;
  obj1 = map;
  const tmp2 = callback(obj1.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const trinketsRefresh = tmp2.trinketsRefresh;
  const obj3 = initialize;
  const tmp = importDefault;
  if (obj4.isNullOrEmpty(trinketsAnimationUrl)) {
    return null;
  } else {
    obj = { style: null, pointerEvents: "none", children: null };
    obj[0] = tmp2.containerRefresh;
    if (APNGPlayerResult.isAndroid()) {
      APNGPlayer = useAPNGPlayerControls.APNGPlayer;
      obj = { url: null, autoplay: null, style: null };
      obj[0] = trinketsAnimationUrl;
      obj[1] = !stateFromStores;
      obj[2] = trinketsRefresh;
      let tmp4Result = tmp4(APNGPlayer, obj);
    } else {
      obj = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      obj1 = { uri: null };
      obj1[0] = trinketsAnimationUrl;
      obj[0] = obj1;
      obj[1] = trinketsRefresh;
      obj[3] = !stateFromStores;
      tmp4Result = tmp4(preloadDefault, obj);
    }
    obj[2] = tmp4Result;
    tmp4Result = tmp4(View, obj);
    APNGPlayerResult = set;
    const tmp5 = View;
  }
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = memoResult;
