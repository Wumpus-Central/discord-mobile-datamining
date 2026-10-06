// === Module 6516: HeaderSegment ===

// Module 6516 (HeaderSegment)
import Fragment from "Fragment" /* 21 */;
import _mod6026 from "module_6026" /* 6026 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let size;

let Platform;
let metroRequire;
let closure_2 = ["progress", "layout", "modal", "onGoBack", "backHref", "headerTitle", "headerLeft", "headerRight", "headerBackImage", "headerBackTitle", "headerBackButtonDisplayMode", "headerBackTruncatedTitle", "headerBackAccessibilityLabel", "headerBackTestID", "headerBackAllowFontScaling", "headerBackTitleStyle", "headerTitleContainerStyle", "headerLeftContainerStyle", "headerRightContainerStyle", "headerBackgroundContainerStyle", "headerStyle", "headerStatusBarHeight", "styleInterpolator"];
({ Platform, StyleSheet: metroRequire } = react_native);
const jsx = Fragment.jsx;

export const HeaderSegment = function HeaderSegment(progress) {
  let accessibilityLabel;
  let allowFontScaling;
  let backImage;
  let backgroundStyle;
  let closure_10;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_17;
  let closure_18;
  let closure_19;
  let closure_20;
  let closure_4;
  let direction;
  let first1;
  let handleTitleLayout;
  let headerBackButtonDisplayMode;
  let headerBackgroundContainerStyle;
  let headerLeftContainerStyle;
  let headerRightContainerStyle;
  let headerStatusBarHeight;
  let headerStyle;
  let headerTitle;
  let headerTitleContainerStyle;
  let href;
  let items1;
  let items2;
  let items3;
  let items4;
  let label;
  let leftButtonStyle;
  let leftLabel;
  let modal;
  let onGoBack;
  let rightButtonStyle;
  let styleInterpolator;
  let testID;
  let titleStyle;
  let truncatedLabel;
  let tmp = direction;
  let obj = direction(leftLabel[5]);
  direction = obj.useLocale().direction;
  let obj2 = handleTitleLayout;
  [leftLabel, closure_2] = handleTitleLayout.useState(undefined);
  [first1, _slicedToArray] = handleTitleLayout.useState(undefined);
  handleTitleLayout = function handleTitleLayout(nativeEvent) {
    let closure_129_0;
    let closure_129_1;
    ({ height: closure_129_0, width: closure_129_1 } = nativeEvent.nativeEvent.layout);
    closure_4((arg0) => {
      size = arg0;
      if (size) {
        return size;
      }
      const size1 = { height, width };
      size = size1;
    });
  };
  function handleLeftLabelLayout(nativeEvent) {
    let width;
    ({ height, width } = nativeEvent.nativeEvent.layout);
    size = first;
    const tmp = first && height === size.height && width === size.width;
    if (!tmp) {
      const size1 = { height, width };
      closure_2(size1);
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
        const obj = {};
        const HeaderBackButton = direction(first[6]).HeaderBackButton;
        const merged = Object.assign(arg0);
        return progress(HeaderBackButton, obj);
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
  const tmp7 = first1(progress, closure_2);
  const tmpResult = tmp(leftLabel[6]);
  const defaultHeaderHeight = tmpResult.getDefaultHeaderHeight(layout, modal, headerStatusBarHeight);
  let obj3 = headerStyle;
  const flatten = handleLeftLabelLayout.flatten;
  if (!headerStyle) {
    obj3 = {};
  }
  let height = flatten(obj3).height;
  if (undefined === height) {
    height = defaultHeaderHeight;
  }
  let tmp10 = defaultHeaderHeight;
  if (typeof height === "number") {
    tmp10 = height;
  }
  height = tmp10;
  let items = [styleInterpolator, progress, direction, tmp10, layout, first1, leftLabel];
  const memo = obj2.useMemo(() => {
    let next;
    let obj3;
    const obj = { current: { progress: progress.current }, next, direction, layouts: obj3 };
    next = progress.next;
    if (next) {
      next = { progress: iter.next };
      const obj2 = { progress: iter.next };
    }
    obj3 = { header: size, screen: layout, title: first1, leftLabel };
    size = { height, width: layout.width };
    return styleInterpolator(obj);
  }, items);
  const leftLabelStyle = memo.leftLabelStyle;
  let fn2;
  ({ titleStyle, leftButtonStyle, rightButtonStyle, backgroundStyle } = memo);
  if (headerLeft) {
    fn2 = (arg0) => {
      let items;
      const obj = { href, backImage, accessibilityLabel, testID, allowFontScaling, onPress: onGoBack, label, truncatedLabel, labelStyle: items, onLabelLayout: handleLeftLabelLayout, screenLayout: layout, titleLayout: first1, canGoBack: Boolean(onGoBack) };
      const merged = Object.assign(arg0);
      items = [leftLabelStyle, closure_20];
      return headerLeft(obj);
    };
  }
  let fn3;
  if (headerRight) {
    fn3 = (arg0) => {
      const obj = { canGoBack: Boolean(onGoBack) };
      const merged = Object.assign(arg0);
      return headerRight(obj);
    };
  }
  const obj4 = {
    modal,
    layout,
    headerTitle: typeof headerTitle !== "function" ? ((arg0) => {
      const HeaderTitle = _mod6026.HeaderTitle;
      const merged = Object.assign(arg0);
      return <HeaderTitle onLayout={handleTitleLayout} />;
    }) : ((arg0) => {
      const obj = { onLayout: handleTitleLayout };
      const merged = Object.assign(arg0);
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
  const Header = tmp(tmp2[6]).Header;
  let merged = Object.assign(tmp7);
  return progress(Header, obj4);
};