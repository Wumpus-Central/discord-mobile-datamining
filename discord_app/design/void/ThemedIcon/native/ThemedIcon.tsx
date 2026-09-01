// discord_app/design/void/ThemedIcon/native/ThemedIcon.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import map from "../../../tokens/native/useToken.tsx";
import IconSizesDefault from "../../Icon/native/Icon.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  const merged = Object.assign(themedColor, Object.create(null));
  let obj = map;
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(IconSizesDefault, { color: token });
}
