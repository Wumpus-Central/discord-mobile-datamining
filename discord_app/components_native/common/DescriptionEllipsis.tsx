// === Module 12556: DescriptionEllipsis ===

// Module 12556 (DescriptionEllipsis)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_1, jsxs: c2 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { topicEllipsis: null, topicEllipsisDot: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", flexDirection: "row", borderRadius: nativeDefault.radii.xs, marginTop: 4, height: 12, width: 24 };
obj2.topicEllipsis = size;
const size1 = { backgroundColor: nativeDefault.colors.TEXT_MUTED, borderRadius: 2, margin: 1, height: 4, width: 4 };
obj2.topicEllipsisDot = size1;
let closure_3 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("components_native/common/DescriptionEllipsis.tsx");

export default function DescriptionEllipsis(dotStyle) {
  dotStyle = dotStyle.dotStyle;
  const tmp = closure_3();
  const obj = { style: null, children: null };
  const items = [tmp.topicEllipsis, dotStyle.style];
  obj.style = items;
  const obj2 = { style: null };
  const items1 = [tmp.topicEllipsisDot, dotStyle];
  obj2.style = items1;
  const items2 = [framebus(View, obj2), , ];
  const obj3 = { style: null };
  const items3 = [tmp.topicEllipsisDot, dotStyle];
  obj3.style = items3;
  items2[1] = framebus(View, obj3);
  const obj4 = { style: null };
  const items4 = [tmp.topicEllipsisDot, dotStyle];
  obj4.style = items4;
  items2[2] = framebus(View, obj4);
  obj.children = items2;
  return React2(View, obj);
};