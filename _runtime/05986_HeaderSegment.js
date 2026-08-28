// _runtime/05986_HeaderSegment.js
import closure_3 from "metro/00109__objectWithoutProperties.js";
import closure_4 from "metro/00032__slicedToArray.js";
import closure_5 from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
let closure_2 = ["progress", "layout", "modal", "onGoBack", "backHref", "headerTitle", "headerLeft", "headerRight", "headerBackImage", "headerBackTitle", "headerBackButtonDisplayMode", "headerBackTruncatedTitle", "headerBackAccessibilityLabel", "headerBackTestID", "headerBackAllowFontScaling", "headerBackTitleStyle", "headerTitleContainerStyle", "headerLeftContainerStyle", "headerRightContainerStyle", "headerBackgroundContainerStyle", "headerStyle", "headerStatusBarHeight", "styleInterpolator"];
({ Platform, StyleSheet: closure_6 } = get_ActivityIndicator);

export const HeaderSegment = function HeaderSegment(progress) {
  let obj = direction(first[5]);
  direction = obj.useLocale().direction;
  const tmp3 = callback(handleTitleLayout.useState(undefined), 2);
  first = tmp3[0];
  closure_2 = tmp3[1];
  const tmp5 = callback(handleTitleLayout.useState(undefined), 2);
  const first1 = tmp5[0];
  callback = tmp5[1];
  handleTitleLayout = function handleTitleLayout(nativeEvent) {
    ({ height: direction, width: first } = nativeEvent.nativeEvent.layout);
    callback2((arg0) => {
      let size = arg0;
      if (arg0) {
        return size;
      }
      size = { height: closure_0, width: closure_1 };
    });
  };
  function handleLeftLabelLayout(nativeEvent) {
    ({ height, width } = nativeEvent.nativeEvent.layout);
    const size = first;
    let tmp = first;
    if (first) {
      tmp = height === size.height;
    }
    if (tmp) {
      tmp = width === size.width;
    }
    if (!tmp) {
      const obj = { height: null, width: null };
      obj[0] = height;
      obj[1] = width;
      callback(obj);
    }
  }
  progress = progress.progress;
  const layout = progress.layout;
  ({ modal, onGoBack } = progress);
  ({ backHref: closure_10, headerTitle } = progress);
  let headerLeft = progress.headerLeft;
  if (undefined === headerLeft) {
    let fn;
    if (onGoBack) {
      fn = (arg0) => {
        const merged = Object.assign(arg0);
        return progress(direction(first[6]).HeaderBackButton, {});
      };
    }
    headerLeft = fn;
  }
  const headerRight = progress.headerRight;
  ({ headerBackImage: closure_14, headerBackTitle: closure_15, headerBackButtonDisplayMode } = progress);
  let str = "minimal";
  if (undefined !== headerBackButtonDisplayMode) {
    str = headerBackButtonDisplayMode;
  }
  ({ headerBackTruncatedTitle: closure_16, headerBackAccessibilityLabel: closure_17, headerBackTestID: closure_18, headerBackAllowFontScaling: closure_19, headerBackTitleStyle: closure_20, headerStyle, headerStatusBarHeight, styleInterpolator } = progress);
  ({ headerTitleContainerStyle, headerLeftContainerStyle, headerRightContainerStyle, headerBackgroundContainerStyle } = progress);
  const obj2 = handleTitleLayout;
  const tmp7 = first1(progress, closure_2);
  const defaultHeaderHeight = direction(first[6]).getDefaultHeaderHeight(layout, modal, headerStatusBarHeight);
  obj = headerStyle;
  if (!headerStyle) {
    obj = {};
  }
  let height = handleLeftLabelLayout.flatten(obj).height;
  if (undefined === height) {
    height = defaultHeaderHeight;
  }
  let tmp10 = defaultHeaderHeight;
  if (typeof height === "number") {
    tmp10 = height;
  }
  height = tmp10;
  let items = [styleInterpolator, progress, direction, tmp10, layout, first1, first];
  const memo = obj2.useMemo(() => {
    obj = { current: obj, next: null, direction: null, layouts: null };
    obj = { progress: progress.current };
    let next = progress.next;
    if (next) {
      obj = { progress: null };
      obj[0] = iter.next;
      next = obj;
    }
    obj[1] = next;
    obj[2] = direction;
    obj[3] = { header: obj2, screen: layout, title: first1, leftLabel: first };
    return styleInterpolator(obj);
  }, items);
  const leftLabelStyle = memo.leftLabelStyle;
  let fn2;
  ({ titleStyle, leftButtonStyle, rightButtonStyle, backgroundStyle } = memo);
  if (headerLeft) {
    fn2 = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.href = closure_10;
      obj.backImage = closure_14;
      obj.accessibilityLabel = closure_17;
      obj.testID = closure_18;
      obj.allowFontScaling = closure_19;
      obj.onPress = onGoBack;
      obj.label = closure_15;
      obj.truncatedLabel = closure_16;
      const items = [leftLabelStyle, closure_20];
      obj.labelStyle = items;
      obj.onLabelLayout = handleLeftLabelLayout;
      obj.screenLayout = layout;
      obj.titleLayout = first1;
      obj.canGoBack = Boolean(onGoBack);
      return headerLeft(obj);
    };
  }
  let fn3;
  if (headerRight) {
    fn3 = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.canGoBack = Boolean(onGoBack);
      return headerRight(obj);
    };
  }
  obj = {
    modal,
    layout,
    headerTitle: typeof headerTitle !== "function" ? ((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.onLayout = handleTitleLayout;
      return progress(direction(first[6]).HeaderTitle, obj);
    }) : ((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.onLayout = handleTitleLayout;
      return headerTitle(obj);
    }),
    headerLeft: fn2,
    headerRight: fn3,
    headerTitleContainerStyle: items1,
    headerLeftContainerStyle: items2,
    headerRightContainerStyle: items3,
    headerBackButtonDisplayMode: str,
    headerBackgroundContainerStyle: items4,
    headerStyle,
    headerStatusBarHeight
  };
  items1 = [titleStyle, headerTitleContainerStyle];
  items2 = [leftButtonStyle, headerLeftContainerStyle];
  items3 = [rightButtonStyle, headerRightContainerStyle];
  items4 = [backgroundStyle, headerBackgroundContainerStyle];
  let merged = Object.assign(tmp7);
  return progress(direction(first[6]).Header, obj);
};