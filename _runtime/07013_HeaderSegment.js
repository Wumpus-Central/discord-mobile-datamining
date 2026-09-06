// _runtime/07013_HeaderSegment.js
import _mod5631 from "metro/05631__.js";
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
  let obj = direction(leftLabel[5]);
  direction = obj.useLocale().direction;
  const tmp3 = _slicedToArray(handleTitleLayout.useState(undefined), 2);
  leftLabel = tmp3[0];
  closure_2 = tmp3[1];
  const tmp5 = _slicedToArray(handleTitleLayout.useState(undefined), 2);
  const first1 = tmp5[0];
  _slicedToArray = tmp5[1];
  handleTitleLayout = function handleTitleLayout(nativeEvent) {
    ({ height: direction, width: first } = nativeEvent.nativeEvent.layout);
    closure_4((arg0) => {
      let size = arg0;
      if (arg0) {
        return size;
      }
      size = { height, width };
    });
  };
  function handleLeftLabelLayout(nativeEvent) {
    ({ height, width } = nativeEvent.nativeEvent.layout);
    let size = first;
    let tmp = first;
    if (first) {
      tmp = height === size.height;
    }
    if (tmp) {
      tmp = width === size.width;
    }
    if (!tmp) {
      size = { height, width };
      closure_2(size);
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
  const obj2 = handleTitleLayout;
  const tmp7 = first1(progress, closure_2);
  const defaultHeaderHeight = direction(leftLabel[6]).getDefaultHeaderHeight(layout, modal, headerStatusBarHeight);
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
  let items = [styleInterpolator, progress, direction, tmp10, layout, first1, leftLabel];
  const memo = obj2.useMemo(() => {
    let obj = { current: { progress: progress.current }, next: null, direction: null, layouts: null };
    let next = progress.next;
    if (next) {
      obj = { progress: iter.next };
      next = obj;
    }
    obj.next = next;
    obj.direction = direction;
    obj = { header: null, screen: layout, title: first1, leftLabel };
    const size = { height, width: layout.width };
    obj.header = size;
    obj.layouts = obj;
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
  obj = {
    modal,
    layout,
    headerTitle:
      typeof headerTitle !== "function"
        ? (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.onLayout = handleTitleLayout;
            return jsx(_mod5631.HeaderTitle, {});
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
  obj.headerTitleContainerStyle = items1;
  const items2 = [leftButtonStyle, headerLeftContainerStyle];
  obj.headerLeftContainerStyle = items2;
  const items3 = [rightButtonStyle, headerRightContainerStyle];
  obj.headerRightContainerStyle = items3;
  const items4 = [backgroundStyle, headerBackgroundContainerStyle];
  obj.headerBackgroundContainerStyle = items4;
  let merged = Object.assign(tmp7);
  return progress(direction(leftLabel[6]).Header, obj);
};
