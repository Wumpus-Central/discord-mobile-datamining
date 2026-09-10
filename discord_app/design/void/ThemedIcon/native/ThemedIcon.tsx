// === Module 14173: ThemedIcon ===

// Module 14173 (ThemedIcon)
import useToken from "useToken" /* 4306 */;
import IconDefault from "Icon" /* 5027 */;
import noop from "module_19" /* 19 */;

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
};