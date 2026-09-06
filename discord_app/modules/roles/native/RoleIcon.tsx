// === Module 7188: RoleIcon ===

// Module 7188 (RoleIcon)
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

export default function RoleIcon(arg0) {
  ({ source, unicodeEmoji, size } = arg0);
  if (size === undefined) {
    size = 20;
  }
  size = { height: size, width: size, resizeMode: "contain" };
  if (null != source) {
    let obj = { source, style: size };
    let tmp = <Image source={source} style={size} />;
  } else {
    tmp = null;
    if (null != unicodeEmoji) {
      obj = { adjustsFontSizeToFit: true, style: null, children: null };
      const items = [size, { fontFamily: "System", fontSize: size, marginBottom: -2 }];
      obj.style = items;
      obj.children = unicodeEmoji.surrogates;
      tmp = jsx(native.LegacyText, { adjustsFontSizeToFit: true, style: null, children: null });
    }
  }
  return tmp;
};