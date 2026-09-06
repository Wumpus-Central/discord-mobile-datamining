// discord_app/modules/chat_input/native/GiftIconTrinketsAnimation.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const PlatformUtils = APNGPlayer(1115);
const APNGPlayer2 = APNGPlayer(8808);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles((width) => ({
  containerRefresh: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height: width,
    overflow: "visible",
    marginLeft: 0,
    zIndex: 0,
  },
  trinketsRefresh: {
    zIndex: 4,
    position: "absolute",
    pointerEvents: "none",
    width: "175%",
    height: "175%",
    top: "-37.5%",
    left: "-37.5%",
  },
}));
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = noop.memo((trinketsAnimationUrl) => {
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  let APNGPlayer = require;
  let obj = dependencyMap;
  let obj1 = useToken;
  const tmp2 = closure_6(obj1.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const trinketsRefresh = tmp2.trinketsRefresh;
  if (obj4.isNullOrEmpty(trinketsAnimationUrl)) {
    return null;
  } else {
    obj = { style: tmp2.containerRefresh, pointerEvents: "none", children: null };
    if (APNGPlayerResult.isAndroid()) {
      APNGPlayer = APNGPlayer2.APNGPlayer;
      obj = { url: trinketsAnimationUrl, autoplay: !stateFromStores, style: trinketsRefresh };
      let tmp4Result = <APNGPlayer url={trinketsAnimationUrl} autoplay={!stateFromStores} style={trinketsRefresh} />;
    } else {
      obj = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      obj1 = { uri: trinketsAnimationUrl };
      obj.source = obj1;
      obj.style = trinketsRefresh;
      obj.enableAnimation = !stateFromStores;
      tmp4Result = jsx(FastImageDefault, { source: null, style: null, resizeMode: "contain", enableAnimation: null });
    }
    obj.children = tmp4Result;
    tmp4Result = (
      <View style={tmp2.containerRefresh} pointerEvents="none">
        {null}
      </View>
    );
    APNGPlayerResult = PlatformUtils;
  }
  obj4 = StringUtils;
});
