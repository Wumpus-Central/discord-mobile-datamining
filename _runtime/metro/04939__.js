// _runtime/metro/04939__.js
import _modDef4916 from "04916__.js";
import _modDef4921 from "04921__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import noop from "00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ Platform: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const styles = StyleSheet.create({
  container: { flex: 1 },
  absoluteWithNoBottom: { position: "absolute", top: 0, start: 0, end: 0 },
});

export default noop.forwardRef(function ScreenStackItem(unstable_sheetFooter, arg1) {
  ({ headerConfig, stackPresentation, sheetAllowedDetents, screenId } = unstable_sheetFooter);
  unstable_sheetFooter = unstable_sheetFooter.unstable_sheetFooter;
  ({ children, activityState, shouldFreeze, contentStyle, style, onHeaderHeightChange } = unstable_sheetFooter);
  const merged = Object.assign(
    unstable_sheetFooter,
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
      unstable_sheetFooter: 0,
    }),
  );
  let flag4;
  closure_4 = undefined;
  let obj = flag4;
  importDefault = flag4.useRef(null);
  dependencyMap = flag4.useContext(screenId(4937).RNSScreensRefContext);
  const imperativeHandle = flag4.useImperativeHandle(arg1, () => ref.current);
  let obj1 = screenId(4928);
  let flag;
  if (headerConfig != null) {
    flag = headerConfig.disableLeftInsetApplication;
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (headerConfig != null) {
    flag2 = headerConfig.disableRightInsetApplication;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  let flag3;
  if (headerConfig != null) {
    flag3 = headerConfig.disableBottomInsetApplication;
  }
  if (flag3 == null) {
    flag3 = false;
  }
  if (stackPresentation == null) {
    stackPresentation = "push";
  }
  flag4 = undefined;
  if (headerConfig != null) {
    flag4 = headerConfig.hidden;
  }
  if (flag4 == null) {
    flag4 = false;
  }
  closure_4 = obj.useRef(flag4);
  const items = [flag4, stackPresentation];
  const effect = obj.useEffect(() => {
    _modDef4921(
      false,
      "Dynamically changing header's visibility in modals will result in remounting the screen and losing all local state.",
    );
    closure_4.current = flag4;
  }, items);
  let scrollEdgeEffects;
  if (merged != null) {
    scrollEdgeEffects = merged.scrollEdgeEffects;
  }
  let flag5 = undefined === scrollEdgeEffects;
  if (!flag5) {
    const _Object = Object;
    const values = Object.values(merged.scrollEdgeEffects);
    flag5 = values.some((item) => "hidden" !== item);
  }
  let blurEffect;
  if (headerConfig != null) {
    blurEffect = headerConfig.blurEffect;
  }
  let tmp9 = undefined !== blurEffect;
  if (tmp9) {
    tmp9 = "none" !== headerConfig.blurEffect;
  }
  if (flag5) {
    flag5 = tmp9;
  }
  if (flag5) {
    flag5 = false;
  }
  _modDef4921(
    flag5,
    "[RNScreens] Using both `blurEffect` and `scrollEdgeEffects` simultaneously may cause overlapping effects.",
  );
  if ("formSheet" !== stackPresentation) {
    let container = closure_8.container;
  } else if ("fitToContents" === sheetAllowedDetents) {
    container = closure_8.absoluteWithNoBottom;
  } else {
    container = closure_8.container;
  }
  obj = {
    value: obj1.useEdgeInsetApplication(flag, flag2, flag3).nextContextValue,
    children: closure_5(tmp10(4940), { contentStyle, style: container, stackPresentation, children }),
  };
  const items1 = [closure_5(screenId(4928).EdgeInsetApplicationContext.Provider, obj), ,];
  obj = {};
  const merged1 = Object.assign(headerConfig);
  items1[1] = closure_5(screenId(4927).ScreenStackHeaderConfig, obj);
  let tmp18Result = "formSheet" === stackPresentation && unstable_sheetFooter;
  if (tmp18Result) {
    obj1 = { children: unstable_sheetFooter() };
    tmp18Result = closure_5(screenId(4943).FooterComponent, obj1);
  }
  items1[2] = tmp18Result;
  const obj2 = {
    ref(current) {
      closure_1.current = current;
      if (null !== closure_2) {
        if (null === current) {
          delete tmp2[tmp];
        } else {
          const obj = { current };
          tmp5[screenId] = obj;
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
    hasLargeHeader: null,
    sheetAllowedDetents: null,
    style: null,
    onHeaderHeightChange: null,
  };
  let flag6;
  const tmp16Result = closure_7(closure_6, { children: items1 });
  if (headerConfig != null) {
    flag6 = headerConfig.largeTitle;
  }
  if (flag6 == null) {
    flag6 = false;
  }
  obj2.hasLargeHeader = flag6;
  obj2.sheetAllowedDetents = sheetAllowedDetents;
  const items2 = [style, undefined];
  obj2.style = items2;
  obj2.onHeaderHeightChange = onHeaderHeightChange;
  const merged2 = Object.assign(merged);
  obj2.children = tmp16Result;
  return closure_5(_modDef4916, obj2);
});
