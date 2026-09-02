// _runtime/01880_forwardRef.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import noopDefault from "00019_noop.js";
import noop from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";
import cancelAnimation from "01652_cancelAnimation.js";
import closure_8 from "../discord_app/index.native.tsx";
import closure_9 from "../discord_app/index.native.tsx";

({ useCallback: c3, useMemo: c4, forwardRef } = noop);
noopDefault;
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_10 = {
  code: 'function pnpm_indexTsx1(){const{freeze}=this.__closure;return typeof freeze==="boolean"?freeze:freeze.value;}',
};
let closure_11 = {
  code: "function pnpm_indexTsx2(){const{blankSpace,padding,extraContentPadding}=this.__closure;return Math.max(blankSpace.value,padding.value+extraContentPadding.value);}",
};
let closure_12 = {
  code: "function pnpm_indexTsx3(){const{padding,extraContentPadding}=this.__closure;return padding.value+extraContentPadding.value;}",
};
let closure_13 = {
  code: "function pnpm_indexTsx4(){const{currentHeight}=this.__closure;return{transform:[{translateY:-currentHeight.value}]};}",
};
const styles = StyleSheet.create({ commitView: { display: "none", position: "absolute" } });

export default forwardRef((onEndVisible) => {
  let ScrollView = onEndVisible.ScrollViewComponent;
  if (ScrollView === undefined) {
    ScrollView = extraContentPadding(blankSpace[3]).ScrollView;
  }
  let flag = onEndVisible.inverted;
  if (flag === undefined) {
    flag = false;
  }
  let str = onEndVisible.keyboardLiftBehavior;
  if (str === undefined) {
    str = "always";
  }
  let flag2 = onEndVisible.freeze;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let num = onEndVisible.offset;
  if (num === undefined) {
    num = 0;
  }
  extraContentPadding = onEndVisible.extraContentPadding;
  if (extraContentPadding === undefined) {
    extraContentPadding = onContentSizeChange2;
  }
  blankSpace = onEndVisible.blankSpace;
  if (blankSpace === undefined) {
    blankSpace = animatedStyle;
  }
  let flag3 = onEndVisible.applyWorkaroundForContentInsetHitTestBug;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const onLayout = onEndVisible.onLayout;
  const onContentSizeChange = onEndVisible.onContentSizeChange;
  const merged = Object.assign(onEndVisible, Object.create(null));
  let padding;
  let currentHeight;
  onLayout2 = undefined;
  onContentSizeChange2 = undefined;
  animatedStyle = undefined;
  let obj = flag2(blankSpace[3]);
  const animatedRef = obj.useAnimatedRef();
  const tmp5 = extraContentPadding(blankSpace[4])(arg1, animatedRef);
  class M {
    constructor() {
      value = c0;
      if (typeof c0 !== "boolean") {
        value = c0.value;
      }
      return value;
    }
  }
  M.__closure = { freeze: flag2 };
  M.__workletHash = 1441280506731;
  M.__initData = closure_10;
  const derivedValue = flag2(blankSpace[3]).useDerivedValue(M);
  const obj2 = flag2(blankSpace[3]);
  const chatKeyboard = flag2(blankSpace[5]).useChatKeyboard(animatedRef, {
    inverted: flag,
    keyboardLiftBehavior: str,
    freeze: derivedValue,
    offset: num,
    blankSpace,
    extraContentPadding,
  });
  padding = chatKeyboard.padding;
  currentHeight = chatKeyboard.currentHeight;
  ({ contentOffsetY, scroll, layout, size, onLayout: onLayout2 } = chatKeyboard);
  onContentSizeChange2 = chatKeyboard.onContentSizeChange;
  const obj3 = flag2(blankSpace[5]);
  extraContentPadding = flag2(blankSpace[6]).useExtraContentPadding({
    scrollViewRef: animatedRef,
    extraContentPadding,
    keyboardPadding: padding,
    blankSpace,
    scroll,
    layout,
    size,
    contentOffsetY,
    inverted: flag,
    keyboardLiftBehavior: str,
    freeze: derivedValue,
  });
  const obj4 = flag2(blankSpace[6]);
  const endVisible = flag2(blankSpace[7]).useEndVisible({
    scroll,
    layout,
    size,
    inverted: flag,
    onEndVisible: onEndVisible.onEndVisible,
  });
  const obj5 = flag2(blankSpace[7]);
  const fn = function q() {
    return Math.max(blankSpace.value, padding.value + extraContentPadding.value);
  };
  fn.__closure = { blankSpace, padding, extraContentPadding };
  fn.__workletHash = 5812718828105;
  fn.__initData = closure_11;
  const derivedValue1 = flag2(blankSpace[3]).useDerivedValue(fn);
  const obj6 = flag2(blankSpace[3]);
  class G {
    constructor() {
      return padding.value + closure_1.value;
    }
  }
  G.__closure = { padding, extraContentPadding };
  G.__workletHash = 17005251423398;
  G.__initData = closure_12;
  let items = [onLayout2, onLayout];
  const derivedValue2 = flag2(blankSpace[3]).useDerivedValue(G);
  const items1 = [onContentSizeChange2, onContentSizeChange];
  const obj7 = flag2(blankSpace[3]);
  const tmp12 = onLayout((arg0) => {
    onLayout2(arg0);
    if (onLayout != null) {
      onLayout(arg0);
    }
  }, items);
  const tmp13 = onLayout((arg0, arg1) => {
    onContentSizeChange2(arg0, arg1);
    if (onContentSizeChange != null) {
      onContentSizeChange(arg0, arg1);
    }
  }, items1);
  class J {
    constructor() {
      obj = { translateY: -currentHeight.value };
      items = [];
      items[0] = obj;
      return { transform: items };
    }
  }
  J.__closure = { currentHeight };
  J.__workletHash = 2509855764315;
  J.__initData = closure_13;
  animatedStyle = flag2(blankSpace[3]).useAnimatedStyle(J, []);
  const items2 = [animatedStyle];
  obj = { children: null };
  const obj8 = flag2(blankSpace[3]);
  obj = { ref: tmp5 };
  const tmp15 = onContentSizeChange(() => {
    const items = [closure_1_14.commitView, animatedStyle];
    return items;
  }, items2);
  const merged1 = Object.assign(merged);
  obj.applyWorkaroundForContentInsetHitTestBug = flag3;
  obj.bottomPadding = derivedValue1;
  obj.contentOffsetY = contentOffsetY;
  obj.inverted = flag;
  obj.scrollIndicatorPadding = derivedValue2;
  obj.ScrollViewComponent = ScrollView;
  obj.onContentSizeChange = tmp13;
  obj.onLayout = tmp12;
  obj.children = onEndVisible.children;
  const items3 = [
    padding(extraContentPadding(blankSpace[8]), obj),
    padding(extraContentPadding(blankSpace[3]).View, { style: tmp15 }),
  ];
  obj[0] = items3;
  return onLayout2(currentHeight, obj);
});
