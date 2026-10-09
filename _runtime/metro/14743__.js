// === Module 14743: ? ===

// Module 14743
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import SentryInitUtils from "SentryInitUtils" /* 1256 */;
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 5944 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8310 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 14744 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;

require = fn;
function handleNavigationOnReady() {
  ModalDispatchQueueDefault.flush();
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(constants.NAVIGATOR_READY);
  const routingInstrumentation = SentryInitUtils.routingInstrumentation;
  const result = routingInstrumentation.registerNavigationContainer(RootNavigationRef.getRootNavigationRef());
  closure_7();
}
const NativeModules = fn(17).NativeModules;
let closure_7 = fn(6080).handleHistoryStoreNavigationChange;
const Constants = fn(1085);
({ AnalyticEvents: c10, ComponentActions: closure_11, Routes: closure_12 } = Constants);
const isStaticChannelRoute = fn(2071).isStaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { flex: { flex: 1 }, rootBackgroundColor: { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND } };
let closure_16 = createStyles.createStyles(obj2);
const ReanimatedRexport = fn(4811);
let obj3 = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
let result = ReanimatedRexport.configureReanimatedLogger({ level: fn(4811).ReanimatedLogLevel.error, strict: false });
const ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function GestureWrapper(children) {
  const cResult = c.c(6);
  children = children.children;
  const tmp3 = closure_16();
  let rootBackgroundColor;
  if (obj2.useIsScreenLandscape()) {
    rootBackgroundColor = tmp3.rootBackgroundColor;
  }
  if (cResult[0] === tmp3.flex) {
    if (cResult[1] === rootBackgroundColor) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp5) {
        let tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj3 = { style: tmp5, children };
    const tmp9 = state(DiscordGestureHandlerRootViewDefault, obj3);
    cResult[3] = children;
    cResult[4] = tmp5;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const items = [tmp3.flex, rootBackgroundColor];
  cResult[0] = tmp3.flex;
  cResult[1] = rootBackgroundColor;
  cResult[2] = items;
  tmp5 = items;
  obj2 = useIsScreenLandscape;
}) : (function GestureWrapper(children) {
  const tmp = closure_16();
  const styles = tmp;
  const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
  let items = [isScreenLandscape, tmp];
  const style = noop.useMemo(() => {
    const items = [styles.flex, ];
    let rootBackgroundColor;
    if (isScreenLandscape) {
      rootBackgroundColor = styles.rootBackgroundColor;
    }
    items[1] = rootBackgroundColor;
    return items;
  }, items);
  return state(DiscordGestureHandlerRootViewDefault, { style, children: children.children });
});