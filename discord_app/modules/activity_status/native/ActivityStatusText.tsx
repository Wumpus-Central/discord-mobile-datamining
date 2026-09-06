// discord_app/modules/activity_status/native/ActivityStatusText.tsx
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_3 = createStyles.createStyles({ text: { flexShrink: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatusText.tsx");

export default function ActivityStatusText(variant) {
  let str = variant.variant;
  ({ children, style } = variant);
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const merged = Object.assign(variant, Object.assign({ children: 0, style: 0, variant: 0 }));
  const obj = { variant: str, color: "text-muted", style: null, lineClamp: 1 };
  const items = [closure_3().text, style];
  obj.style = items;
  const merged1 = Object.assign(merged);
  obj.children = children;
  return jsx(Text_Text.Text, { variant: str, color: "text-muted", style: null, lineClamp: 1 });
}
