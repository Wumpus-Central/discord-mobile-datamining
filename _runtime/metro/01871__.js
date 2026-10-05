// === Module 1871: ? ===

// Module 1871
import react_native from "react-native" /* 17 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import cancelAnimation_mod from "module_1643" /* 1643 */;

let value;

let c3;
let closure_4;
let forwardRef;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useCallback: c3, useMemo: closure_4, forwardRef } = react);
react = react_mod;
const StyleSheet = react_native.StyleSheet;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let cancelAnimation = cancelAnimation_mod;
let closure_8 = cancelAnimation.makeMutable(0);
cancelAnimation = cancelAnimation_mod;
let closure_9 = cancelAnimation.makeMutable(0);
const __initData = { code: "function pnpm_indexTsx1(){const{freeze}=this.__closure;return typeof freeze===\"boolean\"?freeze:freeze.value;}" };
const __initData2 = { code: "function pnpm_indexTsx2(){const{blankSpace,padding,extraContentPadding}=this.__closure;return Math.max(blankSpace.value,padding.value+extraContentPadding.value);}" };
const __initData3 = { code: "function pnpm_indexTsx3(){const{padding,extraContentPadding}=this.__closure;return padding.value+extraContentPadding.value;}" };
const __initData4 = { code: "function pnpm_indexTsx4(){const{currentHeight}=this.__closure;return{transform:[{translateY:-currentHeight.value}]};}" };
const forwardRefResult = forwardRef((ScrollViewComponent, arg1) => {
  let animatedStyle;
  let blankSpace;
  let commitView;
  let contentOffsetY;
  let extraContentPadding;
  let items3;
  let layout;
  let onContentSizeChange2;
  let onLayout2;
  let scroll;
  let ScrollView = ScrollViewComponent.ScrollViewComponent;
  const children = ScrollViewComponent.children;
  if (ScrollView === undefined) {
    ScrollView = extraContentPadding(blankSpace[3]).ScrollView;
  }
  let flag = ScrollViewComponent.inverted;
  if (flag === undefined) {
    flag = false;
  }
  let str = ScrollViewComponent.keyboardLiftBehavior;
  if (str === undefined) {
    str = "always";
  }
  let flag2 = ScrollViewComponent.freeze;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let num = ScrollViewComponent.offset;
  if (num === undefined) {
    num = 0;
  }
  extraContentPadding = ScrollViewComponent.extraContentPadding;
  if (extraContentPadding === undefined) {
    extraContentPadding = onContentSizeChange2;
  }
  blankSpace = ScrollViewComponent.blankSpace;
  if (blankSpace === undefined) {
    blankSpace = animatedStyle;
  }
  let flag3 = ScrollViewComponent.applyWorkaroundForContentInsetHitTestBug;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const onLayout = ScrollViewComponent.onLayout;
  const onContentSizeChange = ScrollViewComponent.onContentSizeChange;
  const onEndVisible = ScrollViewComponent.onEndVisible;
  const merged = Object.assign(ScrollViewComponent, Object.assign({ children: 0, ScrollViewComponent: 0, inverted: 0, keyboardLiftBehavior: 0, freeze: 0, offset: 0, extraContentPadding: 0, blankSpace: 0, applyWorkaroundForContentInsetHitTestBug: 0, onLayout: 0, onContentSizeChange: 0, onEndVisible: 0 }));
  let padding;
  let currentHeight;
  onLayout2 = undefined;
  onContentSizeChange2 = undefined;
  animatedStyle = undefined;
  let obj = flag2(blankSpace[3]);
  const animatedRef = obj.useAnimatedRef();
  const tmp5 = extraContentPadding(blankSpace[4])(arg1, animatedRef);
  let obj2 = flag2(blankSpace[3]);
  class M {
    constructor() {
      value = flag2;
      if (typeof flag2 !== "boolean") {
        value = flag2.value;
      }
      return value;
    }
  }
  M.__closure = { freeze: flag2 };
  M.__workletHash = 1441280506731;
  M.__initData = __initData;
  const derivedValue = obj2.useDerivedValue(M);
  const obj3 = flag2(blankSpace[5]);
  const chatKeyboard = obj3.useChatKeyboard(animatedRef, { inverted: flag, keyboardLiftBehavior: str, freeze: derivedValue, offset: num, blankSpace, extraContentPadding });
  padding = chatKeyboard.padding;
  currentHeight = chatKeyboard.currentHeight;
  ({ contentOffsetY, scroll, layout, size, onLayout: onLayout2 } = chatKeyboard);
  onContentSizeChange2 = chatKeyboard.onContentSizeChange;
  const obj4 = flag2(blankSpace[6]);
  const extraContentPadding1 = obj4.useExtraContentPadding({ scrollViewRef: animatedRef, extraContentPadding, keyboardPadding: padding, blankSpace, scroll, layout, size, contentOffsetY, inverted: flag, keyboardLiftBehavior: str, freeze: derivedValue });
  const obj5 = flag2(blankSpace[7]);
  const endVisible = obj5.useEndVisible({ scroll, layout, size, inverted: flag, onEndVisible });
  const fn = function q() {
    return Math.max(blankSpace.value, padding.value + extraContentPadding.value);
  };
  fn.__closure = { blankSpace, padding, extraContentPadding };
  fn.__workletHash = 5812718828105;
  fn.__initData = __initData2;
  const obj6 = flag2(blankSpace[3]);
  const derivedValue1 = obj6.useDerivedValue(fn);
  const obj7 = flag2(blankSpace[3]);
  class G {
    constructor() {
      return padding.value + extraContentPadding.value;
    }
  }
  G.__closure = { padding, extraContentPadding };
  G.__workletHash = 17005251423398;
  G.__initData = __initData3;
  let items = [onLayout2, onLayout];
  const derivedValue2 = obj7.useDerivedValue(G);
  const items1 = [onContentSizeChange2, onContentSizeChange];
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
  const obj8 = flag2(blankSpace[3]);
  class J {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [];
      const obj2 = { translateY: -currentHeight.value };
      items[0] = obj2;
      return obj;
    }
  }
  J.__closure = { currentHeight };
  J.__workletHash = 2509855764315;
  J.__initData = __initData4;
  animatedStyle = obj8.useAnimatedStyle(J, []);
  const items2 = [animatedStyle];
  const obj10 = { ref: tmp5, applyWorkaroundForContentInsetHitTestBug: flag3, bottomPadding: derivedValue1, contentOffsetY, inverted: flag, scrollIndicatorPadding: derivedValue2, ScrollViewComponent: ScrollView, onContentSizeChange: tmp13, onLayout: tmp12, children };
  const obj9 = { children: items3 };
  const tmp15 = onContentSizeChange(() => {
    const items = [commitView.commitView, animatedStyle];
    return items;
  }, items2);
  const tmp16 = extraContentPadding(blankSpace[8]);
  const merged1 = Object.assign(merged);
  items3 = [padding(tmp16, obj10), padding(extraContentPadding(blankSpace[3]).View, { style: tmp15 })];
  return onLayout2(currentHeight, obj9);
});
const styles = StyleSheet.create({ commitView: { display: "none", position: "absolute" } });

export default forwardRefResult;