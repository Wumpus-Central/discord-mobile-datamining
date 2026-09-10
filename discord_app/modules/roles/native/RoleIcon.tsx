// === Module 7257: RoleIcon ===

// Module 7257 (RoleIcon)
import Text_Text from "Text/Text" /* 4601 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1115);
const size = fn(2);
const result = size.fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

export default function RoleIcon(arg0) {
  ({ src, unicodeEmoji, size } = arg0);
  if (size === undefined) {
    size = 20;
  }
  size = { height: size, width: size };
  let obj = { fontFamily: "System", fontSize: size * num, lineHeight: "call", textAlign: "mp", width: size, marginBottom: "age_gate_modal" };
  if (null != src) {
    obj = { resizeMode: "contain", source: null, style: null };
    const obj1 = { uri: src };
    obj.source = obj1;
    obj.style = size;
    let tmp = <Image resizeMode="contain" source={null} style={null} />;
  } else {
    tmp = null;
    if (null != unicodeEmoji) {
      const obj2 = { allowFontScaling: false, color: "none", style: null, variant: "text-lg/normal", children: null };
      const items = [size, obj];
      obj2.style = items;
      obj2.children = unicodeEmoji.surrogates;
      tmp = jsx(Text_Text.Text, { allowFontScaling: false, color: "none", style: null, variant: "text-lg/normal", children: null });
    }
  }
  return tmp;
};