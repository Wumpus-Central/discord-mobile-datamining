// discord_app/modules/auth/native/components/AuthFormView.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { useWideAuthView } from "../useWideAuthView.tsx";
import { context } from "WideAuthScrollContext.tsx";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, flex: null, content: null, subHeader: null };
  obj = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOW, flex: 1 };
  obj[0] = obj;
  obj[1] = { flex: 1 };
  let num = 0;
  if (arg0) {
    num = 12;
  }
  obj = { paddingTop: num, paddingRight: null, paddingLeft: null, paddingBottom: null, flex: null };
  let num2 = 16;
  if (arg0) {
    num2 = 24;
  }
  obj[1] = num2;
  let num3 = 16;
  if (arg0) {
    num3 = 24;
  }
  obj[2] = num3;
  let num4 = 0;
  if (arg0) {
    num4 = 16;
  }
  obj[3] = num4;
  let num5 = 1;
  if (arg0) {
    num5 = 0;
  }
  obj[4] = num5;
  obj[2] = obj;
  obj[3] = { marginTop: 8, alignItems: "center" };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/auth/native/components/AuthFormView.tsx");

export default function AuthFormView(arg0) {
  let backgroundImageCover;
  let backgroundImageSource;
  let children;
  let contentStyle;
  let headerText;
  let subHeader;
  ({ children, headerText, subHeader, contentStyle } = arg0);
  let _require;
  ({ backgroundImageSource, backgroundImageCover } = arg0);
  const tmp3 = useWideAuthView();
  const tmp4 = callback2(tmp3);
  _require = React.useContext(_context.WideAuthScrollContext);
  if (tmp3) {
    let obj = { contentInset: null, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, scrollEventThrottle: 16, onScroll: null, style: null, contentContainerStyle: null, children: null };
    obj[0] = { top: 0 };
    obj[5] = function onScroll(nativeEvent) {
      return callback(nativeEvent.nativeEvent.contentOffset.y > 0);
    };
    obj[6] = tmp4.container;
    const items = [tmp4.content, contentStyle];
    obj[7] = items;
    let tmp15 = null;
    if (null != headerText) {
      obj = { children: null };
      obj[0] = headerText;
      tmp15 = callback(tmp(8572), obj);
    }
    const items1 = [tmp15, , ];
    let tmp17 = null;
    if (null != subHeader) {
      const obj1 = { style: null, children: null };
      obj1[0] = tmp4.subHeader;
      obj1[1] = subHeader;
      tmp17 = callback(closure_4, obj1);
    }
    items1[1] = tmp17;
    items1[2] = children;
    obj[8] = items1;
    let tmp5Result = tmp5(closure_5, obj);
    const tmp13 = closure_5;
  } else {
    obj = { style: null, children: null };
    const items2 = [, ];
    ({ container: arr[0], flex: arr[1] } = tmp4);
    obj[0] = items2;
    const obj2 = { backgroundImageSource: null, backgroundImageCover: null };
    obj2[0] = backgroundImageSource;
    obj2[1] = backgroundImageCover;
    const items3 = [callback(tmp(8573), obj2), callback(tmp(8576), {}), ];
    const obj3 = { contentInset: null, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, style: null, contentContainerStyle: null, children: null };
    obj3[0] = { top: 0 };
    obj3[4] = tmp4.flex;
    const items4 = [, , ];
    ({ content: arr3[0], flex: arr3[1] } = tmp4);
    items4[2] = contentStyle;
    obj3[5] = items4;
    let tmp7Result = null;
    if (null != headerText) {
      const obj4 = { children: null };
      obj4[0] = headerText;
      tmp7Result = tmp7(tmp(8572), obj4);
    }
    const items5 = [tmp7Result, , ];
    tmp7Result = null;
    if (null != subHeader) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp4.subHeader;
      obj5[1] = subHeader;
      tmp7Result = tmp7(tmp6, obj5);
    }
    items5[1] = tmp7Result;
    items5[2] = children;
    obj3[6] = items5;
    items3[2] = tmp5(closure_5, obj3);
    obj[1] = items3;
    tmp5Result = tmp5(tmp6, obj);
    const tmp8 = closure_5;
  }
  return tmp5Result;
};