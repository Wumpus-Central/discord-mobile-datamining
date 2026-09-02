// _runtime/06026_Header.js
import importAllResult from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;

export const Header = importAllResult.memo(function Header(navigation) {
  ({ back, options, route } = navigation);
  navigation = navigation.navigation;
  ({ layout, progress, styleInterpolator } = navigation);
  let obj = route(navigation[2]);
  const safeAreaInsets = obj.useSafeAreaInsets();
  if (undefined !== options.headerBackTitle) {
    let headerBackTitle = options.headerBackTitle;
  } else if (back) {
    headerBackTitle = back.title;
  }
  let tmpResult = tmp(tmp2[3]);
  const items = [navigation, route.key];
  const callback = importAllResult.useCallback(
    tmpResult.throttle(() => {
      let obj = navigation;
      if (tmp) {
        obj = {};
        const StackActions = route(navigation[4]).StackActions;
        const merged = Object.assign(StackActions.pop());
        obj.source = route.key;
        obj.dispatch(obj);
      }
    }, 50),
    items,
  );
  const context = importAllResult.useContext(tmp(tmp2[5]).ModalPresentationContext);
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
  obj = {};
  let merged = Object.assign(options);
  tmpResult = tmp(tmp2[6]);
  obj.title = tmpResult.getHeaderTitle(options, route.name);
  obj.progress = progress;
  obj.layout = layout;
  obj.modal = context;
  if (undefined !== options.headerBackTitle) {
    headerBackTitle = options.headerBackTitle;
  }
  obj.headerBackTitle = headerBackTitle;
  obj.headerStatusBarHeight = num;
  let tmp9;
  if (back) {
    tmp9 = callback;
  }
  obj.onGoBack = tmp9;
  let href;
  if (back) {
    href = back.href;
  }
  obj.backHref = href;
  obj.styleInterpolator = styleInterpolator;
  return jsx(route(navigation[7]).HeaderSegment, {});
});
