// === Module 7457: RoleIcon ===

// Module 7457 (RoleIcon)
import Text_Text from "Text/Text" /* 5781 */;
import FastImageDefault from "FastImage" /* 5872 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1377);
const size = fn(2);
const result = size.fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

export default function RoleIcon(arg0) {
  ({ src, unicodeEmoji, size } = arg0);
  if (size === undefined) {
    size = 20;
  }
  const size1 = { height: size, width: size };
  const obj = { fontFamily: "System", fontSize: size * num, lineHeight: "channel", textAlign: -26148451, width: size, marginBottom: 1359021349 };
  if (null != src) {
    const obj2 = { resizeMode: "contain", source: null, style: null };
    const obj3 = { uri: src };
    obj2.source = obj3;
    obj2.style = size1;
    let tmp = jsx(FastImageDefault, { resizeMode: "contain", source: null, style: null });
  } else {
    tmp = null;
    if (null != unicodeEmoji) {
      const obj4 = { allowFontScaling: false, color: "none", style: null, variant: "body-lg/normal", children: null };
      items = [size1, obj];
      obj4.style = items;
      obj4.children = unicodeEmoji.surrogates;
      tmp = jsx(Text_Text.Text, { allowFontScaling: false, color: "none", style: null, variant: "body-lg/normal", children: null });
    }
  }
  return tmp;
};