// discord_app/modules/auth/native/components/AuthFormView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWideAuthViewDefault from "../useWideAuthView.tsx";
import WideAuthScrollContext from "WideAuthScrollContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles((arg0) => {
  let obj = { container: null, flex: null, content: null, subHeader: null };
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
  obj.container = obj;
  obj.flex = { flex: 1 };
  let num = 0;
  if (arg0) {
    num = 12;
  }
  obj = { paddingTop: num, paddingRight: null, paddingLeft: null, paddingBottom: null, flex: null };
  let num2 = 16;
  if (arg0) {
    num2 = 24;
  }
  obj.paddingRight = num2;
  let num3 = 16;
  if (arg0) {
    num3 = 24;
  }
  obj.paddingLeft = num3;
  let num4 = 0;
  if (arg0) {
    num4 = 16;
  }
  obj.paddingBottom = num4;
  let num5 = 1;
  if (arg0) {
    num5 = 0;
  }
  obj.flex = num5;
  obj.content = obj;
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
    let obj = {
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
      children: null,
    };
    const items = [tmp4.content, contentStyle];
    obj.contentContainerStyle = items;
    let tmp15 = null;
    if (null != headerText) {
      obj = { children: headerText };
      tmp15 = timestampProducer(tmp(6974), obj);
    }
    const items1 = [tmp15, ,];
    let tmp17 = null;
    if (null != subHeader) {
      const obj1 = { style: tmp4.subHeader, children: subHeader };
      tmp17 = timestampProducer(React4, obj1);
    }
    items1[1] = tmp17;
    items1[2] = children;
    obj.children = items1;
    let tmp5Result = tmp5(hasOwnProperty, obj);
  } else {
    obj = { style: null, children: null };
    const items2 = [,];
    ({ container: arr[0], flex: arr[1] } = tmp4);
    obj.style = items2;
    const obj2 = { backgroundImageSource, backgroundImageCover };
    const items3 = [timestampProducer(tmp(6975), obj2), timestampProducer(tmp(6978), {})];
    const obj3 = {
      contentInset: { top: 0 },
      automaticallyAdjustContentInsets: false,
      keyboardShouldPersistTaps: "handled",
      alwaysBounceVertical: false,
      style: tmp4.flex,
      contentContainerStyle: null,
      children: null,
    };
    const items4 = [, ,];
    ({ content: arr3[0], flex: arr3[1] } = tmp4);
    items4[2] = contentStyle;
    obj3.contentContainerStyle = items4;
    let tmp7Result = null;
    if (null != headerText) {
      const obj4 = { children: headerText };
      tmp7Result = tmp7(tmp(6974), obj4);
    }
    const items5 = [tmp7Result, ,];
    tmp7Result = null;
    if (null != subHeader) {
      const obj5 = { style: tmp4.subHeader, children: subHeader };
      tmp7Result = tmp7(tmp6, obj5);
    }
    items5[1] = tmp7Result;
    items5[2] = children;
    obj3.children = items5;
    items3[2] = tmp5(hasOwnProperty, obj3);
    obj.children = items3;
    tmp5Result = tmp5(tmp6, obj);
  }
  return tmp5Result;
}
