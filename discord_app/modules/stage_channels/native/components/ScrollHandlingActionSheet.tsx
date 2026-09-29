// === Module 8216: ScrollHandlingActionSheet ===

// Module 8216 (ScrollHandlingActionSheet)
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6737 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default function ScrollHandlingActionSheet(children) {
  const merged = Object.assign(children, Object.assign({ children: 0, scrollableDeviceHeightBreakpoint: 0 }));
  const obj = { startExpanded: true };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true });
};