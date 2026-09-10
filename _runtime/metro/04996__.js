// === Module 4996: ? ===

// Module 4996
import _modDef4993 from "module_4993" /* 4993 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Platform, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const styles = StyleSheet.create({ container: { flex: 1 }, absoluteWithNoBottom: { position: "absolute", top: 0, start: 0, end: 0 } });

export default noop.forwardRef(function ScreenStackItem(arg0, arg1) {
  ({ children, headerConfig, stackPresentation, sheetAllowedDetents, screenId } = arg0);
  ({ scrollEdgeEffects, unstable_sheetFooter } = arg0);
  ({ activityState, shouldFreeze, contentStyle, style, onHeaderHeightChange } = arg0);
  const merged = Object.assign(arg0, Object.assign({ children: 0, headerConfig: 0, activityState: 0, shouldFreeze: 0, stackPresentation: 0, sheetAllowedDetents: 0, contentStyle: 0, style: 0, screenId: 0, onHeaderHeightChange: 0, scrollEdgeEffects: 0, unstable_sheetFooter: 0 }));
  importDefault = undefined;
  dependencyMap = undefined;
  let flag5;
  closure_4 = undefined;
  let hidden;
  if (headerConfig != null) {
    hidden = headerConfig.hidden;
  }
  let obj = screenId(4984);
  let flag;
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
  let obj1 = flag5;
  importDefault = flag5.useRef(null);
  dependencyMap = flag5.useContext(screenId(4994).RNSScreensRefContext);
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
  closure_4 = obj1.useRef(flag5);
  const items = [flag5, stackPresentation];
  const effect = obj1.useEffect(() => {
    _modDef4993(false, "Dynamically changing header's visibility in modals will result in remounting the screen and losing all local state.");
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
  let tmp10 = undefined !== blurEffect;
  if (tmp10) {
    tmp10 = "none" !== headerConfig.blurEffect;
  }
  if (isIOS26OrHigher) {
    isIOS26OrHigher = tmp10;
  }
  if (isIOS26OrHigher) {
    isIOS26OrHigher = screenId(4997).isIOS26OrHigher;
  }
  _modDef4993(isIOS26OrHigher, "[RNScreens] Using both `blurEffect` and `scrollEdgeEffects` simultaneously may cause overlapping effects.");
  if ("formSheet" !== stackPresentation) {
    let container = closure_7.container;
  } else if ("fitToContents" === sheetAllowedDetents) {
    container = closure_7.absoluteWithNoBottom;
  } else {
    container = closure_7.container;
  }
  obj = { value: obj.useEdgeInsetApplication(!hidden, flag, flag2, flag3, flag4).nextContextValue, children: null };
  obj = { contentStyle, style: container, stackPresentation, children: null };
  let tmp19Result = children;
  let tmp11Result = tmp11(4998);
  if (screenId(4997).isIOS26OrHigher) {
    obj1 = { edges: {}, children };
    tmp19Result = tmp19(screenId(5001).SafeAreaView, obj1);
  }
  obj.children = tmp19Result;
  obj.children = closure_4(tmp11Result, obj);
  const items1 = [closure_4(screenId(4984).EdgeInsetApplicationContext.Provider, obj), , ];
  const merged1 = Object.assign(headerConfig);
  items1[1] = closure_4(screenId(4983).ScreenStackHeaderConfig, {});
  tmp19Result = "formSheet" === stackPresentation && unstable_sheetFooter;
  if (tmp19Result) {
    const obj3 = { children: unstable_sheetFooter() };
    tmp19Result = tmp19(screenId(5003).FooterComponent, obj3);
  }
  items1[2] = tmp19Result;
  const obj2 = {};
  const tmp3 = !hidden;
  const obj4 = {
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
        console.warn("Looks like RNSScreensRefContext is missing. Make sure the ScreenStack component is wrapped in it");
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
    scrollEdgeEffects: null,
    onHeaderHeightChange: null
  };
  let flag6;
  tmp11Result = tmp11(4974);
  if (headerConfig != null) {
    flag6 = headerConfig.largeTitle;
  }
  if (flag6 == null) {
    flag6 = false;
  }
  obj4.hasLargeHeader = flag6;
  obj4.sheetAllowedDetents = sheetAllowedDetents;
  const items2 = [style, undefined];
  obj4.style = items2;
  obj4.scrollEdgeEffects = scrollEdgeEffects;
  obj4.onHeaderHeightChange = onHeaderHeightChange;
  const merged2 = Object.assign(merged);
  obj4.children = closure_6(closure_5, { children: items1 });
  return closure_4(tmp11Result, obj4);
});