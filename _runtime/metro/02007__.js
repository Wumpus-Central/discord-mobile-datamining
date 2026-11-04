// _runtime/metro/02007__.js
import _mod17 from "00017__.js";
import _modDef1652 from "01652__.js";
import _modDef1987 from "01987__.js";
import _modDef1993 from "01993__.js";
import noop_mod from "00019__.js";
import jsxProd from "../react/00021_jsxProd.js";

const require = globalThis.__r;
const module_1652_mod = _modDef1652;

let noop = noop_mod;
({ useCallback: c3, useMemo: closure_4, forwardRef } = noop);
let noop = noop_mod;
const StyleSheet = _mod17.StyleSheet;
({ jsx: hasOwnProperty, Fragment: closure_6, jsxs: metroImportDefault } = jsxProd);
let module_1652 = module_1652_mod;
let closure_8 = module_1652.makeMutable(0);
let module_1652 = module_1652_mod;
let closure_9 = module_1652.makeMutable(0);
let closure_10 = {
  code: '(function pnpm_indexTsx1(){let[freeze]=this.__closure;return typeof freeze==="boolean"?freeze:freeze.value;})',
};
let closure_11 = {
  code: "(function pnpm_indexTsx2(){let[blankSpace,padding,extraContentPadding]=this.__closure;return Math.max(blankSpace.value,padding.value+extraContentPadding.value);})",
};
let closure_12 = {
  code: "(function pnpm_indexTsx3(){let[padding,extraContentPadding]=this.__closure;return padding.value+extraContentPadding.value;})",
};
let closure_13 = {
  code: "(function pnpm_indexTsx4(){let[currentHeight]=this.__closure;return{transform:[{translateY:-currentHeight.value}]};})",
};
const styles = StyleSheet.create({ commitView: { display: "none", position: "absolute" } });

export default forwardRef((onEndVisible, arg1) => {
  let ScrollView = onEndVisible.ScrollViewComponent;
  if (ScrollView === undefined) {
    ScrollView = _modDef1652.ScrollView;
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
  let extraContentPadding = onEndVisible.extraContentPadding;
  if (extraContentPadding === undefined) {
    extraContentPadding = closure_8;
  }
  let blankSpace = onEndVisible.blankSpace;
  if (blankSpace === undefined) {
    blankSpace = closure_9;
  }
  let flag3 = onEndVisible.applyWorkaroundForContentInsetHitTestBug;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const onLayout = onEndVisible.onLayout;
  _require = onLayout;
  const onContentSizeChange = onEndVisible.onContentSizeChange;
  const merged = Object.assign(
    onEndVisible,
    Object.assign({
      children: 0,
      ScrollViewComponent: 0,
      inverted: 0,
      keyboardLiftBehavior: 0,
      freeze: 0,
      offset: 0,
      extraContentPadding: 0,
      blankSpace: 0,
      applyWorkaroundForContentInsetHitTestBug: 0,
      onLayout: 0,
      onContentSizeChange: 0,
      onEndVisible: 0,
    }),
  );
  const animatedRef = require("01652__.js").useAnimatedRef();
  let obj = require("01652__.js");
  const tmp8 = _modDef1987(arg1, animatedRef);
  items = [closure_10, flag2];
  _require = undefined;
  [tmp9, tmp10] = items;
  function pnpm_indexTsx1() {
    value = _undefined;
    if (typeof _undefined !== "boolean") {
      value = _undefined.value;
    }
    return value;
  }
  const items1 = [tmp10];
  pnpm_indexTsx1.__closure = items1;
  pnpm_indexTsx1.__workletHash = 9504393585682;
  pnpm_indexTsx1.__initData = tmp9;
  const derivedValue = require("01652__.js").useDerivedValue(pnpm_indexTsx1);
  const obj2 = require("01652__.js");
  const chatKeyboard = require("02008__.js").useChatKeyboard(animatedRef, {
    inverted: flag,
    keyboardLiftBehavior: str,
    freeze: derivedValue,
    offset: num,
    blankSpace,
    extraContentPadding,
  });
  ({ padding, contentOffsetY, scroll, layout, size, onLayout: onLayout2 } = chatKeyboard);
  const onContentSizeChange2 = chatKeyboard.onContentSizeChange;
  const tmp4Result = require("02008__.js");
  const extraContentPadding1 = require("02010__.js").useExtraContentPadding({
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
  const tmp4Result6 = require("02010__.js");
  const endVisible = require("useEndVisible").useEndVisible({
    scroll,
    layout,
    size,
    inverted: flag,
    onEndVisible: onEndVisible.onEndVisible,
  });
  const tmp4Result7 = require("useEndVisible");
  const items2 = [closure_11, blankSpace, padding, extraContentPadding];
  _require = undefined;
  dependencyMap = undefined;
  [tmp15, tmp16, tmp17, tmp18] = items2;
  function pnpm_indexTsx2() {
    return Math.max(_undefined.value, _undefined2.value + _undefined3.value);
  }
  const items3 = [tmp16, tmp17, tmp18];
  pnpm_indexTsx2.__closure = items3;
  pnpm_indexTsx2.__workletHash = 3831364564688;
  pnpm_indexTsx2.__initData = tmp15;
  const derivedValue1 = require("01652__.js").useDerivedValue(pnpm_indexTsx2);
  const tmp4Result8 = require("01652__.js");
  const items4 = [closure_12, padding, extraContentPadding];
  _require = undefined;
  importDefault = undefined;
  [tmp20, tmp21, tmp22] = items4;
  function pnpm_indexTsx3() {
    return _undefined.value + _undefined2.value;
  }
  const items5 = [tmp21, tmp22];
  pnpm_indexTsx3.__closure = items5;
  pnpm_indexTsx3.__workletHash = 17297715476063;
  pnpm_indexTsx3.__initData = tmp20;
  const items6 = [onLayout2, onLayout];
  const derivedValue2 = require("01652__.js").useDerivedValue(pnpm_indexTsx3);
  const items7 = [onContentSizeChange2, onContentSizeChange];
  const tmp4Result9 = require("01652__.js");
  const tmp24 = onContentSizeChange2((arg0) => {
    _undefined3(arg0);
    if (_undefined != null) {
      _undefined(arg0);
    }
  }, items6);
  const tmp25 = onContentSizeChange2((arg0, arg1) => {
    onContentSizeChange2(arg0, arg1);
    if (_undefined2 != null) {
      _undefined2(arg0, arg1);
    }
  }, items7);
  const items8 = [closure_13, chatKeyboard.currentHeight];
  _require = undefined;
  [tmp26, tmp27] = items8;
  function pnpm_indexTsx4() {
    const obj = { transform: null };
    items = [{ translateY: -_undefined.value }];
    obj.transform = items;
    return obj;
  }
  const items9 = [tmp27];
  pnpm_indexTsx4.__closure = items9;
  pnpm_indexTsx4.__workletHash = 229079233250;
  pnpm_indexTsx4.__initData = tmp26;
  const animatedStyle = require("01652__.js").useAnimatedStyle(pnpm_indexTsx4, []);
  const items10 = [animatedStyle];
  const obj3 = { children: null };
  const tmp4Result10 = require("01652__.js");
  const obj4 = { ref: tmp8 };
  const tmp29 = animatedStyle(() => {
    items = [commitView.commitView, animatedStyle];
    return items;
  }, items10);
  const merged1 = Object.assign(merged);
  obj4.applyWorkaroundForContentInsetHitTestBug = flag3;
  obj4.bottomPadding = derivedValue1;
  obj4.contentOffsetY = contentOffsetY;
  obj4.inverted = flag;
  obj4.scrollIndicatorPadding = derivedValue2;
  obj4.ScrollViewComponent = ScrollView;
  obj4.onContentSizeChange = tmp25;
  obj4.onLayout = tmp24;
  obj4.children = onEndVisible.children;
  const items11 = [closure_5(_modDef1993, obj4), closure_5(_modDef1652.View, { style: tmp29 })];
  obj3.children = items11;
  return closure_7(closure_6, obj3);
});
