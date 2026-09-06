// discord_app/design/components/Sheet/native/ActionSheet.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Sheet_BottomSheet from "BottomSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { content: null, body: null };
obj = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.content = obj;
obj.body = { gap: 24 };
let closure_3 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = noop.forwardRef((arg0, ref) => {
  const obj = { ref };
  const merged = Object.assign(arg0);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = closure_3());
  return jsx(Sheet_BottomSheet.BottomSheet, { ref });
});
