// === Module 9635: OAuth2AuthorizeContent ===

// Module 9635 (OAuth2AuthorizeContent)
import nativeDefault from "native" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 5881 */;
import ObscuredSurfaceDefault from "ObscuredSurface" /* 9058 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { fill: { flex: 1 }, scrollView: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 }, scrollViewContentLandscape: { flexDirection: "row", alignItems: "center", width: "100%", flexGrow: 1, gap: 16 }, scrollViewContentPortrait: { flexDirection: "column", width: "100%", flexGrow: 1, gap: 16 }, header: { paddingTop: 24 }, bodyContainer: { flexDirection: "column", gap: 16, padding: 16 }, bodyContainerBackground: null, footerPortrait: null, separator: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
obj2.bodyContainerBackground = { marginHorizontal: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
obj2.footerPortrait = { flexDirection: "column", padding: 16, gap: 16 };
let obj4 = { marginHorizontal: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
obj2.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeContent.tsx");

export default function OAuth2AuthorizeContent(onScroll) {
  ({ header, footer, appDetails, setAllContentSeen } = onScroll);
  onScroll = onScroll.onScroll;
  height = undefined;
  closure_4 = undefined;
  first1 = undefined;
  closure_6 = undefined;
  closure_8 = undefined;
  ({ body, centerContent, hasContentBackground, obscured } = onScroll);
  const tmp = closure_9();
  const ref = noop.useRef(null);
  const size = useWindowDimensionsDefault();
  ({ left, right, bottom } = useSafeAreaInsetsDefault());
  [height, closure_4] = noop.useState(-1);
  [first1, closure_6] = noop.useState(-1);
  const tmp11 = _slicedToArray(noop.useState(-1), 2);
  closure_7 = tmp11[1];
  let tmp12 = height >= 0;
  if (tmp12) {
    tmp12 = first1 >= 0;
  }
  if (tmp12) {
    tmp12 = null == footer || tmp11[0] >= 0;
    const tmp13 = null == footer || tmp11[0] >= 0;
  }
  closure_8 = tmp12;
  const items = [height, tmp12, first1, setAllContentSeen];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (closure_8) {
      const obj = { layoutMeasurement: null, contentSize: null };
      const obj2 = { height: first1 };
      obj.layoutMeasurement = obj2;
      const obj3 = { height };
      obj.contentSize = obj3;
      let contentOffset = obj.contentOffset;
      if (contentOffset === undefined) {
        contentOffset = { y: 0 };
      }
      if (obj.layoutMeasurement.height + contentOffset.y >= obj.contentSize.height - 5) {
        if (setAllContentSeen != null) {
          tmp6(true);
        }
      } else if (setAllContentSeen != null) {
        tmp3(false);
      }
    }
  }, items);
  let obj2 = { style: null, children: null };
  const items1 = [tmp.fill, { marginBottom: bottom }];
  obj2.style = items1;
  let obj3 = {
    style: null,
    contentContainerStyle: null,
    ref,
    onContentSizeChange(arg0, arg1) {
      const current = ref.current;
      if (current != null) {
        current.scrollTo({ y: 0 });
      }
      closure_4(arg1);
    },
    scrollEventThrottle: 16,
    onLayout(nativeEvent) {
      closure_6(nativeEvent.nativeEvent.layout.height);
    },
    onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      let contentOffset = nativeEvent.contentOffset;
      if (contentOffset === undefined) {
        contentOffset = { y: 0 };
      }
      if (nativeEvent.layoutMeasurement.height + contentOffset.y >= nativeEvent.contentSize.height - 5) {
        if (setAllContentSeen != null) {
          tmp(true);
        }
      }
      if (onScroll != null) {
        onScroll(nativeEvent);
      }
    },
    centerContent,
    children: null
  };
  const items2 = [tmp.scrollView, { paddingLeft: left, paddingRight: right }];
  obj3.style = items2;
  const items3 = [size.width > size.height ? tmp.scrollViewContentLandscape : tmp.scrollViewContentPortrait];
  obj3.contentContainerStyle = items3;
  const tmp6 = useSafeAreaInsetsDefault();
  const obj4 = { obscured, children: null };
  let tmp17Result = null;
  const tmp3Result = KeyboardAwareViewDefault;
  if (null != header) {
    const obj5 = { style: tmp.header, children: header };
    tmp17Result = timestampProducer(React4, obj5);
  }
  const items4 = [tmp17Result, ];
  const items5 = [tmp.bodyContainer, , ];
  let prop = null;
  if (hasContentBackground) {
    prop = tmp.bodyContainerBackground;
  }
  items5[1] = prop;
  const obj6 = { style: items5, children: null };
  items5[2] = size.width > size.height ? { flex: 1 } : {};
  const items6 = [body, ];
  let tmp15Result = null;
  if (null != appDetails) {
    const obj7 = { children: null };
    const obj8 = { style: tmp.separator };
    const items7 = [timestampProducer(React4, obj8), ];
    const obj9 = { children: appDetails };
    items7[1] = timestampProducer(React4, obj9);
    obj7.children = items7;
    tmp15Result = React6(React5, obj7);
  }
  items6[1] = tmp15Result;
  obj6.children = items6;
  items4[1] = React6(React4, obj6);
  obj4.children = items4;
  obj3.children = React6(ObscuredSurfaceDefault, obj4);
  const items8 = [timestampProducer(hasOwnProperty, obj3), ];
  let tmp17Result2 = null;
  if (null != footer) {
    const obj10 = {
      onLayout(nativeEvent) {
          closure_7(nativeEvent.nativeEvent.layout.height);
        },
      style: tmp.footerPortrait,
      children: footer
    };
    tmp17Result2 = timestampProducer(React4, obj10);
  }
  items8[1] = tmp17Result2;
  obj2.children = items8;
  return React6(tmp3Result, obj2);
};