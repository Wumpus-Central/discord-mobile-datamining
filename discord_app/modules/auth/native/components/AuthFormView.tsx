// === Module 7210: AuthFormView ===

// Module 7210 (AuthFormView)
import nativeDefault from "native" /* 576 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7182 */;
import WideAuthScrollContext from "WideAuthScrollContext" /* 7211 */;
import AuthHeaderDefault from "AuthHeader" /* 7212 */;
import BackgroundImageDefault from "BackgroundImage" /* 7213 */;
import AuthNavbarPlaceholderDefault from "AuthNavbarPlaceholder" /* 7216 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let closure_8 = createStyles.createStyles((arg0) => {
  const obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, flex: { flex: 1 }, content: null, subHeader: null };
  let num = 0;
  if (arg0) {
    num = 12;
  }
  const obj3 = { paddingTop: num, paddingRight: null, paddingLeft: null, paddingBottom: null, flex: null };
  let num2 = 16;
  if (arg0) {
    num2 = 24;
  }
  obj3.paddingRight = num2;
  let num3 = 16;
  if (arg0) {
    num3 = 24;
  }
  obj3.paddingLeft = num3;
  let num4 = 0;
  if (arg0) {
    num4 = 16;
  }
  obj3.paddingBottom = num4;
  let num5 = 1;
  if (arg0) {
    num5 = 0;
  }
  obj3.flex = num5;
  obj.content = obj3;
  obj.subHeader = { marginTop: 8, alignItems: "center" };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/AuthFormView.tsx");

export default function AuthFormView(arg0) {
  ({ children, headerText, subHeader, contentStyle } = arg0);
  ({ backgroundImageSource, backgroundImageCover } = arg0);
  const tmp3 = useWideAuthViewDefault();
  const tmp4 = closure_8(tmp3);
  closure_0 = noop.useContext(WideAuthScrollContext.WideAuthScrollContext);
  if (tmp3) {
    const obj2 = {
      contentInset: { top: 0 },
      automaticallyAdjustContentInsets: false,
      keyboardShouldPersistTaps: "handled",
      alwaysBounceVertical: false,
      scrollEventThrottle: 16,
      onScroll(nativeEvent) {
          return closure_0(nativeEvent.nativeEvent.contentOffset.y > 0);
        },
      style: tmp4.container,
      contentContainerStyle: null,
      children: null
    };
    const items = [tmp4.content, contentStyle];
    obj2.contentContainerStyle = items;
    let tmp15 = null;
    if (null != headerText) {
      const obj3 = { children: headerText };
      tmp15 = timestampProducer(AuthHeaderDefault, obj3);
    }
    const items1 = [tmp15, , ];
    let tmp17 = null;
    if (null != subHeader) {
      const obj4 = { style: tmp4.subHeader, children: subHeader };
      tmp17 = timestampProducer(React4, obj4);
    }
    items1[1] = tmp17;
    items1[2] = children;
    obj2.children = items1;
    let tmp5Result = React5(hasOwnProperty, obj2);
  } else {
    const obj = { style: null, children: null };
    const items2 = [, ];
    ({ container: arr[0], flex: arr[1] } = tmp4);
    obj.style = items2;
    const obj5 = { backgroundImageSource, backgroundImageCover };
    const items3 = [timestampProducer(BackgroundImageDefault, obj5), timestampProducer(AuthNavbarPlaceholderDefault, {}), ];
    const obj6 = { contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, style: tmp4.flex, contentContainerStyle: null, children: null };
    const items4 = [, , ];
    ({ content: arr3[0], flex: arr3[1] } = tmp4);
    items4[2] = contentStyle;
    obj6.contentContainerStyle = items4;
    let tmp7Result = null;
    if (null != headerText) {
      const obj7 = { children: headerText };
      tmp7Result = timestampProducer(AuthHeaderDefault, obj7);
    }
    const items5 = [tmp7Result, , ];
    let tmp7Result2 = null;
    if (null != subHeader) {
      const obj8 = { style: tmp4.subHeader, children: subHeader };
      tmp7Result2 = timestampProducer(React4, obj8);
    }
    items5[1] = tmp7Result2;
    items5[2] = children;
    obj6.children = items5;
    items3[2] = React5(hasOwnProperty, obj6);
    obj.children = items3;
    tmp5Result = React5(React4, obj);
  }
  return tmp5Result;
};