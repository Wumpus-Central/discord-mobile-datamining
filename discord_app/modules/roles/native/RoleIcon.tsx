// discord_app/modules/roles/native/RoleIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import Button from "../../../design/void/native.tsx";
import { Image } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

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