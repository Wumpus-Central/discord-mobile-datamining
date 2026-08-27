// === Module 4844: ? ===

// Module 4844
import _objectWithoutPropertiesDefault from "_objectWithoutProperties" /* 109 */;
import AnimatedDefault from "Animated" /* 4821 */;
import warnOnceDefault from "warnOnce" /* 4826 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
_objectWithoutPropertiesDefault;
let c3 = importAllResult;
({ Platform: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const styles = StyleSheet.create({ container: { flex: 1 }, absoluteWithNoBottom: { position: "absolute", top: 0, start: 0, end: 0 } });

export default importAllResult.forwardRef(function ScreenStackItem(unstable_sheetFooter, ref) {
  ({ headerConfig, stackPresentation, sheetAllowedDetents, screenId } = unstable_sheetFooter);
  unstable_sheetFooter = unstable_sheetFooter.unstable_sheetFooter;
  ({ children, activityState, shouldFreeze, contentStyle, style, onHeaderHeightChange } = unstable_sheetFooter);
  const merged = Object.assign(unstable_sheetFooter, Object.create(null));
  importDefault = undefined;
  dependencyMap = undefined;
  let flag4;
  closure_4 = undefined;
  let obj = flag4;
  importDefault = flag4.useRef(null);
  dependencyMap = flag4.useContext(screenId(4842).RNSScreensRefContext);
  const imperativeHandle = flag4.useImperativeHandle(ref, () => ref.current);
  obj1 = screenId(4833);
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
    ref(table[6])(false, "Dynamically changing header's visibility in modals will result in remounting the screen and losing all local state.");
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
    flag5 = values.some((arg0) => "hidden" !== arg0);
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
  warnOnceDefault(flag5, "[RNScreens] Using both `blurEffect` and `scrollEdgeEffects` simultaneously may cause overlapping effects.");
  if ("formSheet" !== stackPresentation) {
    let container = closure_8.container;
  } else if ("fitToContents" === sheetAllowedDetents) {
    container = closure_8.absoluteWithNoBottom;
  } else {
    container = closure_8.container;
  }
  obj = { value: obj1.useEdgeInsetApplication(flag, flag2, flag3).nextContextValue, children: callback(tmp10(4845), { contentStyle, style: container, stackPresentation, children }) };
  const items1 = [callback(screenId(4833).EdgeInsetApplicationContext.Provider, obj), , ];
  obj = {};
  const merged1 = Object.assign(headerConfig);
  items1[1] = callback(screenId(4832).ScreenStackHeaderConfig, obj);
  let tmp18Result = "formSheet" === stackPresentation && unstable_sheetFooter;
  if (tmp18Result) {
    obj1 = { children: null };
    obj1[0] = unstable_sheetFooter();
    tmp18Result = tmp18(tmp2(4848).FooterComponent, obj1);
  }
  items1[2] = tmp18Result;
  const tmp11 = warnOnceDefault;
  const tmp16 = closure_7;
  const tmp17 = closure_6;
  const obj2 = {
    ref(current) {
      closure_1.current = current;
      if (null !== closure_2) {
        if (null === current) {
          delete tmp2[tmp];
        } else {
          const obj = { current: null };
          obj[0] = current;
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
    onHeaderHeightChange: null
  };
  let flag6;
  const tmp16Result = closure_7(closure_6, { children: items1 });
  if (headerConfig != null) {
    flag6 = headerConfig.largeTitle;
  }
  if (flag6 == null) {
    flag6 = false;
  }
  obj2[7] = flag6;
  obj2[8] = sheetAllowedDetents;
  const items2 = [style, undefined];
  obj2[9] = items2;
  obj2[10] = onHeaderHeightChange;
  const merged2 = Object.assign(merged);
  obj2.children = tmp16Result;
  return callback(AnimatedDefault, obj2);
});