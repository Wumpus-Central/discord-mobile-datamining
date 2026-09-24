// === Module 5242: ? ===

// Module 5242
import _modDef5220 from "module_5220" /* 5220 */;
import _modDef5239 from "module_5239" /* 5239 */;
import styleDefault from "style" /* 5244 */;
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
  importDefault = flag5.useRef(null);
  dependencyMap = flag5.useContext(screenId(5240).RNSScreensRefContext);
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
  closure_4 = obj2.useRef(flag5);
  const items = [flag5, stackPresentation];
  const effect = obj2.useEffect(() => {
    _modDef5239(false, "Dynamically changing header's visibility in modals will result in remounting the screen and losing all local state.");
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
  let obj = screenId(5230);
  const tmp3 = !hidden;
  if (isIOS26OrHigher) {
    isIOS26OrHigher = tmp10;
  }
  if (isIOS26OrHigher) {
    isIOS26OrHigher = screenId(5243).isIOS26OrHigher;
  }
  _modDef5239(isIOS26OrHigher, "[RNScreens] Using both `blurEffect` and `scrollEdgeEffects` simultaneously may cause overlapping effects.");
  if ("formSheet" !== stackPresentation) {
    let container = closure_7.container;
  } else if ("fitToContents" === sheetAllowedDetents) {
    container = closure_7.absoluteWithNoBottom;
  } else {
    container = closure_7.container;
  }
  const obj3 = { value: obj.useEdgeInsetApplication(tmp3, flag, flag2, flag3, flag4).nextContextValue, children: null };
  const obj4 = { contentStyle, style: container, stackPresentation, children: null };
  let tmp19Result = children;
  if (screenId(5243).isIOS26OrHigher) {
    const obj5 = { edges: {}, children };
    tmp19Result = tmp19(screenId(5247).SafeAreaView, obj5);
  }
  obj4.children = tmp19Result;
  obj3.children = closure_4(styleDefault, obj4);
  const items1 = [closure_4(screenId(5230).EdgeInsetApplicationContext.Provider, obj3), , ];
  const merged1 = Object.assign(headerConfig);
  items1[1] = closure_4(screenId(5229).ScreenStackHeaderConfig, {});
  let tmp19Result2 = "formSheet" === stackPresentation && unstable_sheetFooter;
  if (tmp19Result2) {
    const obj7 = { children: unstable_sheetFooter() };
    tmp19Result2 = tmp19(screenId(5249).FooterComponent, obj7);
  }
  items1[2] = tmp19Result2;
  const obj6 = {};
  const tmp11Result = styleDefault;
  const obj8 = {
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
  const tmp17Result = closure_6(closure_5, { children: items1 });
  if (headerConfig != null) {
    flag6 = headerConfig.largeTitle;
  }
  if (flag6 == null) {
    flag6 = false;
  }
  obj8.hasLargeHeader = flag6;
  obj8.sheetAllowedDetents = sheetAllowedDetents;
  const items2 = [style, undefined];
  obj8.style = items2;
  obj8.scrollEdgeEffects = scrollEdgeEffects;
  obj8.onHeaderHeightChange = onHeaderHeightChange;
  const merged2 = Object.assign(merged);
  obj8.children = tmp17Result;
  return closure_4(_modDef5220, obj8);
});