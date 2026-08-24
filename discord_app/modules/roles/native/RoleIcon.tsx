// === Module 7165: RoleIcon ===

// Module 7165 (RoleIcon)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

export default function RoleIcon(arg0) {
  ({ source, unicodeEmoji, size } = arg0);
  if (size === undefined) {
    size = 20;
  }
  let obj = { height: size, width: size, resizeMode: "contain" };
  if (null != source) {
    obj = { source: null, style: null };
    obj[0] = source;
    obj[1] = obj;
    let tmp = <Image source={null} style={null} />;
  } else {
    tmp = null;
    if (null != unicodeEmoji) {
      obj = { adjustsFontSizeToFit: true, style: null, children: null };
      const items = [obj, { fontFamily: "System", fontSize: size, marginBottom: -2 }];
      obj[1] = items;
      obj[2] = unicodeEmoji.surrogates;
      tmp = jsx(Button.LegacyText, { adjustsFontSizeToFit: true, style: null, children: null });
    }
  }
  return tmp;
};