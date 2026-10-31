// discord_app/design/components/Sheet/native/ActionSheet.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Sheet_BottomSheet from "BottomSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
const obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, body: { gap: 24 } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export function ActionSheet(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = { ref: ref.ref };
  const merged1 = Object.assign(merged);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = closure_3());
  return jsx(Sheet_BottomSheet.BottomSheet, { ref: ref.ref });
}
