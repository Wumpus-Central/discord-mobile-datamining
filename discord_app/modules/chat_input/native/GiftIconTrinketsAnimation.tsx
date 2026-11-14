// discord_app/modules/chat_input/native/GiftIconTrinketsAnimation.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import DynamicRive from "../../../design/components/Rive/native/DynamicRive.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
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
  const tmp4 = closure_6(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  items = [AccessibilityStore];
  const trinketsRefresh = tmp4.trinketsRefresh;
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (obj3.isNullOrEmpty(trinketsRiveAnimationUrl)) {
    let tmp9 = null;
    if (!tmpResult.isNullOrEmpty(trinketsAnimationUrl)) {
      const obj4 = { style: tmp4.containerRefresh, pointerEvents: "none", children: null };
      const obj5 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj6 = { uri: trinketsAnimationUrl };
      obj5.source = obj6;
      obj5.style = trinketsRefresh;
      obj5.enableAnimation = !stateFromStores;
      obj4.children = jsx(FastImageDefault, {
        source: null,
        style: null,
        resizeMode: "contain",
        enableAnimation: null,
      });
      tmp9 = (
        <View style={tmp4.containerRefresh} pointerEvents="none">
          {null}
        </View>
      );
    }
    let tmp8 = tmp9;
    tmpResult = StringUtils;
  } else {
    const obj7 = { style: tmp4.containerRefresh, pointerEvents: "none", children: null };
    const obj8 = { style: trinketsRefresh, children: null };
    const obj9 = { src: trinketsRiveAnimationUrl, fit: "contain" };
    obj8.children = jsx(DynamicRive.DynamicRive, { src: trinketsRiveAnimationUrl, fit: "contain" });
    obj7.children = <View style={trinketsRefresh}>{null}</View>;
    tmp8 = (
      <View style={tmp4.containerRefresh} pointerEvents="none">
        {null}
      </View>
    );
  }
  return tmp8;
});
