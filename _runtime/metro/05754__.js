// _runtime/metro/05754__.js
import InnerScreenDefault from "../05732_InnerScreen.js";
import warnOnceDefault from "../05751_warnOnce.js";
import _modDef5756 from "05756__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import react from "../00019_react.js";
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";

let dependencyMap, importDefault;

let Platform;
let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Platform, StyleSheet } = react_native);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const forwardRefResult = react.forwardRef(function ScreenStackItem(arg0, arg1) {
  let activityState;
  let children;
  let container;
  let contentStyle;
  let flag6;
  let headerConfig;
  let items2;
  let obj3;
  let onHeaderHeightChange;
  let ref;
  let ref2;
  let screenId;
  let scrollEdgeEffects;
  let sheetAllowedDetents;
  let shouldFreeze;
  let stackPresentation;
  let style;
  let tmp12Result;
  let tmp18Result;
  let tmp20Result;
  let unstable_sheetFooter;
  ({ children, headerConfig, stackPresentation, sheetAllowedDetents, screenId } = arg0);
  ({ scrollEdgeEffects, unstable_sheetFooter } = arg0);
  ({ activityState, shouldFreeze, contentStyle, style, onHeaderHeightChange } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({
      children: 0,
      headerConfig: 0,
      activityState: 0,
      shouldFreeze: 0,
      stackPresentation: 0,
      sheetAllowedDetents: 0,
      contentStyle: 0,
      style: 0,
      screenId: 0,
      onHeaderHeightChange: 0,
      scrollEdgeEffects: 0,
      unstable_sheetFooter: 0,
    }),
  );
  importDefault = undefined;
  dependencyMap = undefined;
  let flag5;
  let closure_4;
  let hidden;
  if (headerConfig != null) {
    hidden = headerConfig.hidden;
  }
  let flag;
  const tmp3 = !hidden;
  const useEdgeInsetApplication = screenId(5742).useEdgeInsetApplication;
  screenId(5742);
  if (headerConfig != null) {
    flag = headerConfig.disableTopInsetApplication;
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (headerConfig != null) {
    flag2 = headerConfig.disableLeftInsetApplication;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  let flag3;
  if (headerConfig != null) {
    flag3 = headerConfig.disableRightInsetApplication;
  }
  if (flag3 == null) {
    flag3 = false;
  }
  let flag4;
  if (headerConfig != null) {
    flag4 = headerConfig.disableBottomInsetApplication;
  }
  if (flag4 == null) {
    flag4 = false;
  }
  let obj = flag5;
  const nextContextValue = useEdgeInsetApplication(tmp3, flag, flag2, flag3, flag4).nextContextValue;
  importDefault = flag5.useRef(null);
  dependencyMap = flag5.useContext(screenId(5752).RNSScreensRefContext);
  const imperativeHandle = flag5.useImperativeHandle(arg1, () => ref.current);
  if (stackPresentation == null) {
    stackPresentation = "push";
  }
  flag5 = undefined;
  if (headerConfig != null) {
    flag5 = headerConfig.hidden;
  }
  if (flag5 == null) {
    flag5 = false;
  }
  closure_4 = obj.useRef(flag5);
  const items = [flag5, stackPresentation];
  const effect = obj.useEffect(() => {
    warnOnceDefault(
      false,
      "Dynamically changing header's visibility in modals will result in remounting the screen and losing all local state.",
    );
    closure_4.current = flag5;
  }, items);
  let isIOS26OrHigher = undefined === scrollEdgeEffects;
  if (!isIOS26OrHigher) {
    const _Object = Object;
    const values = Object.values(scrollEdgeEffects);
    isIOS26OrHigher = values.some((item) => "hidden" !== item);
  }
  let blurEffect;
  if (headerConfig != null) {
    blurEffect = headerConfig.blurEffect;
  }
  let tmp11 = undefined !== blurEffect;
  if (tmp11) {
    tmp11 = "none" !== headerConfig.blurEffect;
  }
  const tmp13 = warnOnceDefault;
  if (isIOS26OrHigher) {
    isIOS26OrHigher = tmp11;
  }
  if (isIOS26OrHigher) {
    isIOS26OrHigher = screenId(5755).isIOS26OrHigher;
  }
  tmp13(
    isIOS26OrHigher,
    "[RNScreens] Using both `blurEffect` and `scrollEdgeEffects` simultaneously may cause overlapping effects.",
  );
  if ("formSheet" !== stackPresentation) {
    container = closure_7.container;
  } else if ("fitToContents" === sheetAllowedDetents) {
    container = closure_7.absoluteWithNoBottom;
  } else {
    container = closure_7.container;
  }
  const isIOS26OrHigher2 = screenId(5755).isIOS26OrHigher;
  const obj2 = { value: nextContextValue, children: closure_4(tmp12Result, obj3) };
  const Provider = screenId(5742).EdgeInsetApplicationContext.Provider;
  obj3 = { contentStyle, style: container, stackPresentation, children: tmp20Result };
  tmp20Result = children;
  tmp12Result = _modDef5756;
  if (isIOS26OrHigher2) {
    const obj4 = { edges: {}, children };
    tmp20Result = tmp20(screenId(5759).SafeAreaView, obj4);
  }
  const items1 = [closure_4(Provider, obj2), ,];
  const obj5 = {};
  const ScreenStackHeaderConfig = screenId(5741).ScreenStackHeaderConfig;
  const merged1 = Object.assign(headerConfig);
  items1[1] = closure_4(ScreenStackHeaderConfig, obj5);
  let tmp20Result2 = "formSheet" === stackPresentation && unstable_sheetFooter;
  if (tmp20Result2) {
    const obj6 = { children: unstable_sheetFooter() };
    const FooterComponent = screenId(5761).FooterComponent;
    tmp20Result2 = tmp20(FooterComponent, obj6);
  }
  items1[2] = tmp20Result2;
  const obj7 = {
    ref(current) {
      ref.current = current;
      if (null !== ref2) {
        current = ref2.current;
        if (null === current) {
          delete current[screenId];
        } else {
          const obj = { current };
          current[screenId] = obj;
        }
      } else {
        const _console = console;
        console.warn(
          "Looks like RNSScreensRefContext is missing. Make sure the ScreenStack component is wrapped in it",
        );
      }
    },
    enabled: true,
    isNativeStack: true,
    activityState,
    shouldFreeze,
    screenId,
    stackPresentation,
    hasLargeHeader: flag6,
    sheetAllowedDetents,
    style: items2,
    scrollEdgeEffects,
    onHeaderHeightChange,
    children: tmp18Result,
  };
  flag6 = undefined;
  tmp18Result = closure_6(closure_5, { children: items1 });
  const tmp12Result2 = InnerScreenDefault;
  if (headerConfig != null) {
    flag6 = headerConfig.largeTitle;
  }
  if (flag6 == null) {
    flag6 = false;
  }
  items2 = [style, undefined];
  const merged2 = Object.assign(merged);
  return closure_4(tmp12Result2, obj7);
});
const styles = StyleSheet.create({
  container: { flex: 1 },
  absoluteWithNoBottom: { position: "absolute", top: 0, start: 0, end: 0 },
});

export default forwardRefResult;
