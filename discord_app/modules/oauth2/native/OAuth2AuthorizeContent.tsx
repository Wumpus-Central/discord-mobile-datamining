// === Module 9301: OAuth2AuthorizeContent ===

// Module 9301 (OAuth2AuthorizeContent)
import ThemesDefault from "Themes" /* 712 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { fill: { flex: 1 }, scrollView: null, scrollViewContentLandscape: null, scrollViewContentPortrait: null, header: null, bodyContainer: null, bodyContainerBackground: null, footerPortrait: null, separator: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row", alignItems: "center", width: "100%", flexGrow: 1, gap: 16 };
createCacheKey[3] = { flexDirection: "column", width: "100%", flexGrow: 1, gap: 16 };
createCacheKey[4] = { paddingTop: 24 };
createCacheKey[5] = { flexDirection: "column", gap: 16, padding: 16 };
createCacheKey[6] = { marginHorizontal: 16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.lg };
createCacheKey[7] = { flexDirection: "column", padding: 16, gap: 16 };
let obj1 = { marginHorizontal: 16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.lg };
createCacheKey[8] = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj2 = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
const result = require("set").fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeContent.tsx");

export default function OAuth2AuthorizeContent(onScroll) {
  ({ header, footer, appDetails, setAllContentSeen } = onScroll);
  onScroll = onScroll.onScroll;
  let ref;
  let first;
  closure_4 = undefined;
  let first1;
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  ({ body, centerContent, hasContentBackground, obscured } = onScroll);
  const tmp = callback();
  let obj = first;
  ref = first.useRef(null);
  const size = setAllContentSeen(onScroll[6])();
  ({ left, right, bottom } = setAllContentSeen(onScroll[7])());
  const tmp7 = ref(first.useState(-1), 2);
  first = tmp7[0];
  closure_4 = tmp7[1];
  const tmp9 = ref(first.useState(-1), 2);
  first1 = tmp9[0];
  closure_6 = tmp9[1];
  const tmp11 = ref(first.useState(-1), 2);
  closure_7 = tmp11[1];
  let tmp12 = first >= 0;
  if (tmp12) {
    tmp12 = first1 >= 0;
  }
  if (tmp12) {
    tmp12 = null == footer || tmp11[0] >= 0;
    const tmp13 = null == footer || tmp11[0] >= 0;
  }
  closure_8 = tmp12;
  const items = [first, tmp12, first1, setAllContentSeen];
  const layoutEffect = obj.useLayoutEffect(() => {
    if (closure_8) {
      let obj = { layoutMeasurement: null, contentSize: null };
      obj = { height: null };
      obj[0] = first1;
      obj[0] = obj;
      obj = { height: null };
      obj[0] = first;
      obj[1] = obj;
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
  obj = { style: items1, children: null };
  items1 = [tmp.fill, { marginBottom: bottom }];
  obj = {
    style: items2,
    contentContainerStyle: items3,
    ref,
    onContentSizeChange(arg0, arg1) {
      const current = ref.current;
      if (current != null) {
        current.scrollTo({ y: 0 });
      }
      callback(arg1);
    },
    scrollEventThrottle: 16,
    onLayout(nativeEvent) {
      callback2(nativeEvent.nativeEvent.layout.height);
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
  items2 = [tmp.scrollView, { paddingLeft: left, paddingRight: right }];
  items3 = [size.width > size.height ? tmp.scrollViewContentLandscape : tmp.scrollViewContentPortrait];
  let tmp3Result = tmp3(tmp4[8]);
  obj1 = { obscured, children: null };
  let tmp17Result = null;
  tmp3Result = tmp3(tmp4[9]);
  if (null != header) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.header;
    obj2[1] = header;
    tmp17Result = tmp17(closure_4, obj2);
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
    const obj5 = { style: null };
    obj5[0] = tmp.separator;
    const items7 = [tmp17(tmp22, obj5), ];
    const obj6 = { children: null };
    obj6[0] = appDetails;
    items7[1] = tmp17(tmp22, obj6);
    obj4[0] = items7;
    tmp15Result = tmp15(closure_7, obj4);
  }
  items6[1] = tmp15Result;
  obj3[1] = items6;
  items4[1] = closure_8(closure_4, obj3);
  obj1[1] = items4;
  obj[8] = closure_8(tmp3Result, obj1);
  const items8 = [closure_6(first1, obj), ];
  tmp17Result = null;
  if (null != footer) {
    const obj7 = { onLayout: null, style: null, children: null };
    obj7[0] = function onLayout(nativeEvent) {
      callback3(nativeEvent.nativeEvent.layout.height);
    };
    obj7[1] = tmp.footerPortrait;
    obj7[2] = footer;
    tmp17Result = tmp17(tmp22, obj7);
  }
  items8[1] = tmp17Result;
  obj[1] = items8;
  return closure_8(tmp3Result, obj);
};