// === Module 7250: Header ===

// Module 7250 (Header)
import Link from "Link" /* 1485 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const Header = noop.memo(function Header(navigation) {
  ({ back, options, route } = navigation);
  navigation = navigation.navigation;
  ({ layout, progress, styleInterpolator } = navigation);
  const safeAreaInsets = route(navigation[2]).useSafeAreaInsets();
  if (undefined !== options.headerBackTitle) {
    let headerBackTitle = options.headerBackTitle;
  } else if (back) {
    headerBackTitle = back.title;
  }
  const obj = route(navigation[2]);
  const items = [navigation, route.key];
  const callback = noop.useCallback(route(navigation[3]).throttle(() => {
    if (tmp) {
      const obj2 = {};
      const StackActions = Link.StackActions;
      const merged = Object.assign(StackActions.pop());
      obj2.source = route.key;
      navigation.dispatch(obj2);
    }
    tmp = navigation.isFocused() && navigation.canGoBack();
  }, 50), items);
  const context = noop.useContext(route(tmp2[5]).ModalPresentationContext);
  if (undefined !== options.headerStatusBarHeight) {
    let num = options.headerStatusBarHeight;
  } else {
    num = 0;
    if (!context) {
      num = 0;
      if (!tmp6) {
        num = safeAreaInsets.top;
      }
    }
  }
  let obj2 = {};
  let merged = Object.assign(options);
  const tmpResult = route(navigation[3]);
  obj2.title = route(navigation[6]).getHeaderTitle(options, route.name);
  obj2.progress = progress;
  obj2.layout = layout;
  obj2.modal = context;
  if (undefined !== options.headerBackTitle) {
    headerBackTitle = options.headerBackTitle;
  }
  obj2.headerBackTitle = headerBackTitle;
  obj2.headerStatusBarHeight = num;
  let tmp9;
  if (back) {
    tmp9 = callback;
  }
  obj2.onGoBack = tmp9;
  let href;
  if (back) {
    href = back.href;
  }
  obj2.backHref = href;
  obj2.styleInterpolator = styleInterpolator;
  return jsx(route(navigation[7]).HeaderSegment, {});
});