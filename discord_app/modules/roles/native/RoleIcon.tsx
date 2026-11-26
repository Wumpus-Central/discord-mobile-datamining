// === Module 7554: RoleIcon ===

// Module 7554 (RoleIcon)
import PlatformUtils2 from "PlatformUtils" /* 1379 */;
import Text_Text from "Text/Text" /* 5634 */;
import FastImageDefault from "FastImage" /* 5730 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1379);
let c6 = 1.25;
const size = fn(2);
let result = size.fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

export default function RoleIcon(layout) {
  ({ src, unicodeEmoji, size } = layout);
  if (size === undefined) {
    size = 20;
  }
  let str = layout.layout;
  if (str === undefined) {
    str = "inline";
  }
  let isIOSResult = PlatformUtils2.isIOS();
  if (isIOSResult) {
    isIOSResult = "pill" === str;
  }
  const size1 = { height: size, width: size };
  let str3 = "System";
  if (isIOSResult) {
    str3 = "system-ui";
  }
  const obj2 = { fontFamily: str3, fontSize: null, lineHeight: "Array" };
  if (isIOSResult) {
    let result = size / c6;
  } else {
    result = size * num;
  }
  obj2.fontSize = result;
  if (isIOSResult) {
    const obj3 = { height: size * c6, paddingTop: size / 6 };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  obj2.textAlign = "center";
  let result1 = size;
  if (isIOSResult) {
    result1 = size * c6;
  }
  obj2.width = result1;
  let num2 = -2;
  if (isIOSResult) {
    num2 = 0;
  }
  obj2.marginBottom = num2;
  if (null != src) {
    const obj5 = { resizeMode: "contain", source: null, style: null };
    const obj6 = { uri: src };
    obj5.source = obj6;
    obj5.style = size1;
    return jsx(FastImageDefault, { resizeMode: "contain", source: null, style: null });
  } else if (null != unicodeEmoji) {
    let num3;
    if (isIOSResult) {
      num3 = 1;
    }
    const obj7 = { lineClamp: num3, allowFontScaling: false, color: "none", style: null, variant: "body-lg/normal", children: null };
    items = [size1, obj2];
    obj7.style = items;
    obj7.children = unicodeEmoji.surrogates;
    const tmp11Result = jsx(Text_Text.Text, { lineClamp: num3, allowFontScaling: false, color: "none", style: null, variant: "body-lg/normal", children: null });
    let tmp11Result2 = tmp11Result;
    if (isIOSResult) {
      const obj8 = { style: null, children: null };
      const items1 = [size1, { alignItems: "center", justifyContent: "center" }];
      obj8.style = items1;
      obj8.children = tmp11Result;
      tmp11Result2 = <View style={null}>{null}</View>;
    }
    return tmp11Result2;
  } else {
    return null;
  }
};