// === Module 5610: HeaderSegment ===

// Module 5610 (HeaderSegment)
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let error;
const require = arg1;
let closure_3 = ["progress", "layout", "modal", "onGoBack", "headerTitle", "headerLeft", "headerRight", "headerBackImage", "headerBackTitle", "headerBackTitleVisible", "headerTruncatedBackTitle", "headerBackAccessibilityLabel", "headerBackTestID", "headerBackAllowFontScaling", "headerBackTitleStyle", "headerTitleContainerStyle", "headerLeftContainerStyle", "headerRightContainerStyle", "headerBackgroundContainerStyle", "headerStyle", "headerStatusBarHeight", "styleInterpolator"];
({ Platform, StyleSheet: error } = get_ActivityIndicator);

export default function HeaderSegment(headerTitle) {
  let backgroundStyle;
  let closure_11;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_17;
  let current;
  let headerBackTitle;
  let headerBackgroundContainerStyle;
  let headerLeftContainerStyle;
  let headerRightContainerStyle;
  let headerStatusBarHeight;
  let headerStyle;
  let headerTitleContainerStyle;
  let layout;
  let leftButtonStyle;
  let modal;
  let next;
  let onGoBack;
  let progress;
  let rightButtonStyle;
  let styleInterpolator;
  let titleStyle;
  let tmp = handleLeftLabelLayout(layout.useState(undefined), 2);
  const first = tmp[0];
  const importDefault = tmp[1];
  const tmp3 = handleLeftLabelLayout(layout.useState(undefined), 2);
  const first1 = tmp3[0];
  let closure_3 = tmp3[1];
  function handleTitleLayout(nativeEvent, closure_3) {
    let closure_1;
    let first;
    ({ height: first, width: closure_1 } = nativeEvent.nativeEvent.layout);
    callback2((arg0) => {
      let size = arg0;
      if (arg0) {
        return size;
      }
      size = { height: closure_0, width: closure_1 };
    });
  }
  handleLeftLabelLayout = function handleLeftLabelLayout(layout, arg1) {
    let height;
    let width;
    ({ height, width } = layout.nativeEvent.layout);
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
  };
  ({ progress, layout } = headerTitle);
  ({ modal, onGoBack } = headerTitle);
  headerTitle = headerTitle.headerTitle;
  let headerLeft = headerTitle.headerLeft;
  if (undefined === headerLeft) {
    let fn;
    if (onGoBack) {
      fn = (arg0) => {
        const merged = Object.assign(arg0);
        return headerTitle(first(first1[6]).HeaderBackButton, {});
      };
    }
    headerLeft = fn;
  }
  const headerRight = headerTitle.headerRight;
  ({ headerBackImage: closure_11, headerBackTitle } = headerTitle);
  const headerBackTitleVisible = headerTitle.headerBackTitleVisible;
  ({ headerTruncatedBackTitle: closure_13, headerBackAccessibilityLabel: closure_14, headerBackTestID: closure_15, headerBackAllowFontScaling: closure_16, headerBackTitleStyle: closure_17, headerStyle, headerStatusBarHeight, styleInterpolator } = headerTitle);
  ({ headerTitleContainerStyle, headerLeftContainerStyle, headerRightContainerStyle, headerBackgroundContainerStyle } = headerTitle);
  const tmp6 = importDefault(first1[5])((arg0, width, progress, arg3, title, leftLabel, height) => {
    obj = { current: obj, next: null, layouts: null };
    obj = { progress };
    let tmp = arg3;
    if (arg3) {
      obj = { progress: null };
      obj[0] = arg3;
      tmp = obj;
    }
    obj[1] = tmp;
    obj[2] = { header: obj2, screen: width, title, leftLabel };
    return arg0(obj);
  });
  const tmp7 = undefined !== headerBackTitleVisible && headerBackTitleVisible;
  let obj = first(tmp5[6]);
  let defaultHeaderHeight = obj.getDefaultHeaderHeight(layout, modal, headerStatusBarHeight);
  obj = headerStyle;
  if (!headerStyle) {
    obj = {};
  }
  let height = onGoBack.flatten(obj).height;
  if (undefined === height) {
    height = defaultHeaderHeight;
  }
  ({ current, next } = progress);
  let tmp12;
  if (headerBackTitle) {
    tmp12 = first;
  }
  if (typeof height !== "__REMOTEDEV__") {
    defaultHeaderHeight = height;
  }
  const tmp6Result = tmp6(styleInterpolator, layout, current, next, first1, tmp12, defaultHeaderHeight);
  const leftLabelStyle = tmp6Result.leftLabelStyle;
  let fn2;
  ({ titleStyle, leftButtonStyle, rightButtonStyle, backgroundStyle } = tmp6Result);
  if (headerLeft) {
    fn2 = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.backImage = closure_11;
      obj.accessibilityLabel = closure_14;
      obj.testID = closure_15;
      obj.allowFontScaling = closure_16;
      obj.onPress = onGoBack;
      obj.label = headerBackTitle;
      obj.truncatedLabel = closure_13;
      const items = [leftLabelStyle, closure_17];
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
    headerTitle: typeof headerTitle === "disabledUntil" ? ((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.onLayout = handleTitleLayout;
      return headerTitle(first(first1[6]).HeaderTitle, obj);
    }) : ((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.onLayout = handleTitleLayout;
      return headerTitle(obj);
    }),
    headerLeft: fn2,
    headerLeftLabelVisible: tmp7,
    headerRight: fn3,
    headerTitleContainerStyle: items,
    headerLeftContainerStyle: items1,
    headerRightContainerStyle: items2,
    headerBackgroundContainerStyle: items3,
    headerStyle,
    headerStatusBarHeight
  };
  items = [titleStyle, headerTitleContainerStyle];
  items1 = [leftButtonStyle, headerLeftContainerStyle];
  items2 = [rightButtonStyle, headerRightContainerStyle];
  items3 = [backgroundStyle, headerBackgroundContainerStyle];
  let merged = Object.assign(handleTitleLayout(headerTitle, closure_3));
  return headerTitle(first(first1[6]).Header, obj);
};