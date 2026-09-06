// === Module 9581: OAuth2AuthorizeContent ===

// Module 9581 (OAuth2AuthorizeContent)
import nativeDefault from "native" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 5578 */;
import ObscuredSurfaceDefault from "ObscuredSurface" /* 8711 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { fill: { flex: 1 }, scrollView: null, scrollViewContentLandscape: null, scrollViewContentPortrait: null, header: null, bodyContainer: null, bodyContainerBackground: null, footerPortrait: null, separator: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
createStyles.scrollView = createStyles;
createStyles.scrollViewContentLandscape = { flexDirection: "row", alignItems: "center", width: "100%", flexGrow: 1, gap: 16 };
createStyles.scrollViewContentPortrait = { flexDirection: "column", width: "100%", flexGrow: 1, gap: 16 };
createStyles.header = { paddingTop: 24 };
createStyles.bodyContainer = { flexDirection: "column", gap: 16, padding: 16 };
createStyles.bodyContainerBackground = { marginHorizontal: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
createStyles.footerPortrait = { flexDirection: "column", padding: 16, gap: 16 };
let obj1 = { marginHorizontal: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
createStyles.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeContent.tsx");

export default function OAuth2AuthorizeContent(onScroll) {
  ({ header, footer, appDetails, setAllContentSeen } = onScroll);
  onScroll = onScroll.onScroll;
  closure_8 = undefined;
  ({ body, centerContent, hasContentBackground, obscured } = onScroll);
  const tmp = closure_9();
  let obj = noop;
  const ref = noop.useRef(null);
  const size = useWindowDimensionsDefault();
  ({ left, right, bottom } = useSafeAreaInsetsDefault());
  const tmp7 = _slicedToArray(noop.useState(-1), 2);
  const height = tmp7[0];
  closure_4 = tmp7[1];
  const tmp9 = _slicedToArray(noop.useState(-1), 2);
  const first1 = tmp9[0];
  closure_6 = tmp9[1];
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
  const layoutEffect = obj.useLayoutEffect(() => {
    if (closure_8) {
      let obj = { layoutMeasurement: null, contentSize: null };
      obj = { height: first1 };
      obj.layoutMeasurement = obj;
      obj = { height };
      obj.contentSize = obj;
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
  obj = { style: null, children: null };
  const items1 = [tmp.fill, { marginBottom: bottom }];
  obj.style = items1;
  obj = {
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
  obj.style = items2;
  const items3 = [size.width > size.height ? tmp.scrollViewContentLandscape : tmp.scrollViewContentPortrait];
  obj.contentContainerStyle = items3;
  const obj1 = { obscured, children: null };
  let tmp17Result = null;
  const tmp3Result = ObscuredSurfaceDefault;
  if (null != header) {
    const obj2 = { style: tmp.header, children: header };
    tmp17Result = timestampProducer(React4, obj2);
  }
  const items4 = [tmp17Result, ];
  const items5 = [tmp.bodyContainer, , ];
  let prop = null;
  if (hasContentBackground) {
    prop = tmp.bodyContainerBackground;
  }
  items5[1] = prop;
  const obj3 = { style: items5, children: null };
  items5[2] = size.width > size.height ? { flex: 1 } : {};
  const items6 = [body, ];
  let tmp15Result = null;
  if (null != appDetails) {
    const obj4 = { children: null };
    const obj5 = { style: tmp.separator };
    const items7 = [timestampProducer(React4, obj5), ];
    const obj6 = { children: appDetails };
    items7[1] = timestampProducer(React4, obj6);
    obj4.children = items7;
    tmp15Result = React6(React5, obj4);
  }
  items6[1] = tmp15Result;
  obj3.children = items6;
  items4[1] = React6(React4, obj3);
  obj1.children = items4;
  obj.children = React6(tmp3Result, obj1);
  const items8 = [timestampProducer(hasOwnProperty, obj), ];
  tmp17Result = null;
  if (null != footer) {
    const obj7 = {
      onLayout(nativeEvent) {
          closure_7(nativeEvent.nativeEvent.layout.height);
        },
      style: tmp.footerPortrait,
      children: footer
    };
    tmp17Result = timestampProducer(React4, obj7);
  }
  items8[1] = tmp17Result;
  obj.children = items8;
  return React6(tmp3Result, obj);
};