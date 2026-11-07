// discord_app/modules/chat_input/native/GiftIconTrinketsAnimation.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const PlatformUtils = APNGPlayer(1377);
const StringUtils = APNGPlayer(2150);
const APNGPlayer2 = APNGPlayer(9588);
const DynamicRive = APNGPlayer(14042);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
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

export const GiftIconTrinketsAnimation = noop.memo(function GiftIconTrinketsAnimation(arg0) {
  ({ trinketsAnimationUrl, trinketsRiveAnimationUrl } = arg0);
  let APNGPlayer = require;
  const tmp2 = closure_6(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const trinketsRefresh = tmp2.trinketsRefresh;
  if (obj4.isNullOrEmpty(trinketsRiveAnimationUrl)) {
    if (APNGPlayerResult.isNullOrEmpty(trinketsAnimationUrl)) {
      let tmp6 = null;
    } else {
      const obj5 = { style: tmp2.containerRefresh, pointerEvents: "none", children: null };
      if (APNGPlayerResult1.isAndroid()) {
        APNGPlayer = APNGPlayer2.APNGPlayer;
        const obj = { url: trinketsAnimationUrl, autoplay: !stateFromStores, style: trinketsRefresh };
        let tmp8Result = <APNGPlayer url={trinketsAnimationUrl} autoplay={!stateFromStores} style={trinketsRefresh} />;
      } else {
        const obj6 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
        const obj7 = { uri: trinketsAnimationUrl };
        obj6.source = obj7;
        obj6.style = trinketsRefresh;
        obj6.enableAnimation = !stateFromStores;
        tmp8Result = jsx(FastImageDefault, { source: null, style: null, resizeMode: "contain", enableAnimation: null });
      }
      obj5.children = tmp8Result;
      <View style={tmp2.containerRefresh} pointerEvents="none">
        {null}
      </View>;
      APNGPlayerResult1 = PlatformUtils;
    }
    APNGPlayerResult = StringUtils;
  } else {
    const obj8 = { style: tmp2.containerRefresh, pointerEvents: "none", children: null };
    const obj9 = { style: trinketsRefresh, children: null };
    const obj10 = { src: trinketsRiveAnimationUrl, fit: "contain" };
    obj9.children = jsx(DynamicRive.DynamicRive, { src: trinketsRiveAnimationUrl, fit: "contain" });
    obj8.children = <View style={trinketsRefresh}>{null}</View>;
    tmp6 = (
      <View style={tmp2.containerRefresh} pointerEvents="none">
        {null}
      </View>
    );
  }
  return tmp6;
});
