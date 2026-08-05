import { map } from "../../../tokens/native/useToken.tsx";
import { IconSizes } from "../../Icon/native/Icon.tsx";
// discord_app/design/void/ThemedIcon/native/ThemedIcon.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  const merged = Object.assign(themedColor, Object.create(null));
  let obj = map /* map */;
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(IconSizes, { color: token });
};