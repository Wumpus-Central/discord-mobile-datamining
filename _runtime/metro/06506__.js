// === Module 6506: ? ===

// Module 6506
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1491 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const Header = react.memo(function Header(navigation) {
  let back;
  let headerBackTitle;
  let layout;
  let num;
  let options;
  let progress;
  let route;
  let styleInterpolator;
  ({ back, options, route } = navigation);
  navigation = navigation.navigation;
  ({ layout, progress, styleInterpolator } = navigation);
  const obj = route(navigation[2]);
  const safeAreaInsets = obj.useSafeAreaInsets();
  if (undefined !== options.headerBackTitle) {
    headerBackTitle = options.headerBackTitle;
  } else if (back) {
    headerBackTitle = back.title;
  }
  const items = [navigation, route.key];
  const useCallback = react.useCallback;
  const tmpResult = route(navigation[3]);
  const callback = useCallback(tmpResult.throttle(() => {
    const tmp = navigation.isFocused() && navigation.canGoBack();
    if (tmp) {
      const dispatch = navigation.dispatch;
      const obj2 = { source: route.key };
      const StackActions = Link.StackActions;
      const merged = Object.assign(StackActions.pop());
      dispatch(obj2);
    }
  }, 50), items);
  const context = react.useContext(route(tmp2[5]).ModalPresentationContext);
  if (undefined !== options.headerStatusBarHeight) {
    num = options.headerStatusBarHeight;
  } else {
    num = 0;
    if (!context) {
      num = 0;
      if (!tmp6) {
        num = safeAreaInsets.top;
      }
    }
  }
  const HeaderSegment = route(tmp2[7]).HeaderSegment;
  let merged = Object.assign(options);
  const tmpResult2 = route(navigation[6]);
  if (undefined !== options.headerBackTitle) {
    headerBackTitle = options.headerBackTitle;
  }
  let tmp9;
  if (back) {
    tmp9 = callback;
  }
  let href;
  if (back) {
    href = back.href;
  }
  return <HeaderSegment title={tmpResult2.getHeaderTitle(options, route.name)} progress={progress} layout={layout} modal={context} headerBackTitle={headerBackTitle} headerStatusBarHeight={num} onGoBack={tmp9} backHref={href} styleInterpolator={styleInterpolator} />;
});