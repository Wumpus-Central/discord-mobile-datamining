// _runtime/07260_HeaderSegment.js
import _mod5850 from "metro/05850__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

require = fn;
let closure_2 = [
  "progress",
  "layout",
  "modal",
  "onGoBack",
  "backHref",
  "headerTitle",
  "headerLeft",
  "headerRight",
  "headerBackImage",
  "headerBackTitle",
  "headerBackButtonDisplayMode",
  "headerBackTruncatedTitle",
  "headerBackAccessibilityLabel",
  "headerBackTestID",
  "headerBackAllowFontScaling",
  "headerBackTitleStyle",
  "headerTitleContainerStyle",
  "headerLeftContainerStyle",
  "headerRightContainerStyle",
  "headerBackgroundContainerStyle",
  "headerStyle",
  "headerStatusBarHeight",
  "styleInterpolator",
];
get_ActivityIndicator = fn(17);
({ Platform, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;

export const HeaderSegment = function HeaderSegment(progress) {
  direction = direction(leftLabel[5]).useLocale().direction;
  [leftLabel, closure_2] = handleTitleLayout.useState(undefined);
  [first1, _slicedToArray] = handleTitleLayout.useState(undefined);
  handleTitleLayout = function handleTitleLayout(nativeEvent) {
    ({ height: direction, width: first } = nativeEvent.nativeEvent.layout);
    closure_4((arg0) => {
      let size = arg0;
      if (arg0) {
        return size;
      }
      const size1 = { height, width };
      size = size1;
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
  ({
    headerBackTruncatedTitle: closure_16,
    headerBackAccessibilityLabel: closure_17,
    headerBackTestID: closure_18,
    headerBackAllowFontScaling: closure_19,
    headerBackTitleStyle: closure_20,
    headerStyle,
    headerStatusBarHeight,
    styleInterpolator,
  } = progress);
  ({ headerTitleContainerStyle, headerLeftContainerStyle, headerRightContainerStyle, headerBackgroundContainerStyle } =
    progress);
  let obj = direction(leftLabel[5]);
  let obj2 = handleTitleLayout;
  const tmp7 = first1(progress, closure_2);
  const defaultHeaderHeight = direction(leftLabel[6]).getDefaultHeaderHeight(layout, modal, headerStatusBarHeight);
  let obj3 = headerStyle;
  if (!headerStyle) {
    obj3 = {};
  }
  let height = handleLeftLabelLayout.flatten(obj3).height;
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
    const obj = { current: { progress: progress.current }, next: null, direction: null, layouts: null };
    let next = progress.next;
    if (next) {
      const obj2 = { progress: iter.next };
      next = obj2;
    }
    obj.next = next;
    obj.direction = direction;
    const obj3 = { header: null, screen: layout, title: first1, leftLabel };
    const size = { height, width: layout.width };
    obj3.header = size;
    obj.layouts = obj3;
    return styleInterpolator(obj);
  }, items);
  const leftLabelStyle = memo.leftLabelStyle;
  let fn2;
  ({ titleStyle, leftButtonStyle, rightButtonStyle, backgroundStyle } = memo);
  if (headerLeft) {
    fn2 = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.href = href;
      obj.backImage = backImage;
      obj.accessibilityLabel = accessibilityLabel;
      obj.testID = testID;
      obj.allowFontScaling = allowFontScaling;
      obj.onPress = onGoBack;
      obj.label = label;
      obj.truncatedLabel = truncatedLabel;
      const items = [leftLabelStyle, closure_1_20];
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
  const obj4 = {
    modal,
    layout,
    headerTitle:
      typeof headerTitle !== "function"
        ? (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.onLayout = handleTitleLayout;
            return jsx(_mod5850.HeaderTitle, {});
          }
        : (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.onLayout = handleTitleLayout;
            return headerTitle(obj);
          },
    headerLeft: fn2,
    headerRight: fn3,
    headerTitleContainerStyle: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerBackButtonDisplayMode: str,
    headerBackgroundContainerStyle: null,
    headerStyle,
    headerStatusBarHeight,
  };
  const items1 = [titleStyle, headerTitleContainerStyle];
  obj4.headerTitleContainerStyle = items1;
  const items2 = [leftButtonStyle, headerLeftContainerStyle];
  obj4.headerLeftContainerStyle = items2;
  const items3 = [rightButtonStyle, headerRightContainerStyle];
  obj4.headerRightContainerStyle = items3;
  const items4 = [backgroundStyle, headerBackgroundContainerStyle];
  obj4.headerBackgroundContainerStyle = items4;
  let merged = Object.assign(tmp7);
  return progress(direction(leftLabel[6]).Header, obj4);
};
