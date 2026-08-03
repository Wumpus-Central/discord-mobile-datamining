// === Module 5607: ? ===

// Module 5607
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;

export default importAllResult.memo(function Header(navigation) {
  let back;
  let layout;
  let options;
  let progress;
  let route;
  let styleInterpolator;
  ({ back, options, route } = navigation);
  navigation = navigation.navigation;
  ({ layout, progress, styleInterpolator } = navigation);
  let obj = route(1584);
  const safeAreaInsets = obj.useSafeAreaInsets();
  if (undefined !== options.headerBackTitle) {
    let headerBackTitle = options.headerBackTitle;
  } else if (back) {
    headerBackTitle = back.title;
  }
  const items = [navigation, route.key];
  const callback = importAllResult.useCallback(navigation(5608)(() => {
    let obj = navigation;
    if (tmp) {
      obj = {};
      const StackActions = route(outer1_2[4]).StackActions;
      const merged = Object.assign(StackActions.pop());
      obj.source = route.key;
      obj.dispatch(obj);
    }
  }, 50), items);
  const context = importAllResult.useContext(navigation(5609));
  if (undefined !== options.headerStatusBarHeight) {
    let num = options.headerStatusBarHeight;
  } else {
    num = 0;
    if (!context) {
      num = 0;
      if (!tmp7) {
        num = safeAreaInsets.top;
      }
    }
  }
  obj = {};
  let merged = Object.assign(options);
  const tmp = route;
  const tmp4 = navigation;
  const tmp4Result = navigation(5610);
  const tmp8 = jsx;
  obj.title = route(5583).getHeaderTitle(options, route.name);
  obj.progress = progress;
  obj.layout = layout;
  obj.modal = context;
  if (undefined !== options.headerBackTitle) {
    headerBackTitle = options.headerBackTitle;
  }
  obj.headerBackTitle = headerBackTitle;
  obj.headerStatusBarHeight = num;
  let tmp11;
  if (back) {
    tmp11 = callback;
  }
  obj.onGoBack = tmp11;
  obj.styleInterpolator = styleInterpolator;
  return tmp8(tmp4Result, obj);
});