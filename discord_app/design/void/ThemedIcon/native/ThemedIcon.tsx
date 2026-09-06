// discord_app/design/void/ThemedIcon/native/ThemedIcon.tsx
import useToken from "../../../tokens/native/useToken.tsx";
import IconDefault from "../../Icon/native/Icon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  const merged = Object.assign(themedColor, Object.assign({ themedColor: 0 }));
  let obj = useToken;
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(IconDefault, { color: token });
}
