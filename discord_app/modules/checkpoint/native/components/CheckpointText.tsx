// discord_app/modules/checkpoint/native/components/CheckpointText.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let closure_5 = { color: fn(6061).CHECKPOINT_PRIMARY };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointText.tsx");

export default function CheckpointText(isStepHeading) {
  let flag = isStepHeading.isStepHeading;
  ({ children, style } = isStepHeading);
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(isStepHeading, Object.assign({ children: 0, style: 0, isStepHeading: 0 }));
  const context = noop.useContext(CheckpointStepHeaderRefContextDefault);
  const obj = {};
  const merged1 = Object.assign(merged);
  let str = "header";
  if (!flag) {
    str = merged.accessibilityRole;
  }
  obj.accessibilityRole = str;
  let tmp5;
  if (flag) {
    tmp5 = context;
  }
  obj.ref = tmp5;
  const items = [closure_5, style];
  obj.style = items;
  obj.children = children;
  return jsx(Text_Text.Text, {});
}
