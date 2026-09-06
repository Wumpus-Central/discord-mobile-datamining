// === Module 12404: DescriptionEllipsis ===

// Module 12404 (DescriptionEllipsis)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_1, jsxs: c2 } = jsxProd);
fn(4560);
const createStyles = { topicEllipsis: null, topicEllipsisDot: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", flexDirection: "row", borderRadius: nativeDefault.radii.xs, marginTop: 4, height: 12, width: 24 };
createStyles.topicEllipsis = size;
const size1 = { backgroundColor: nativeDefault.colors.TEXT_MUTED, borderRadius: 2, margin: 1, height: 4, width: 4 };
createStyles.topicEllipsisDot = size1;
let closure_3 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("components_native/common/DescriptionEllipsis.tsx");

export default function DescriptionEllipsis(dotStyle) {
  dotStyle = dotStyle.dotStyle;
  const tmp = closure_3();
  let obj = { style: null, children: null };
  const items = [tmp.topicEllipsis, dotStyle.style];
  obj.style = items;
  obj = { style: null };
  const items1 = [tmp.topicEllipsisDot, dotStyle];
  obj.style = items1;
  const items2 = [framebus(View, obj), , ];
  obj = { style: null };
  const items3 = [tmp.topicEllipsisDot, dotStyle];
  obj.style = items3;
  items2[1] = framebus(View, obj);
  const obj1 = { style: null };
  const items4 = [tmp.topicEllipsisDot, dotStyle];
  obj1.style = items4;
  items2[2] = framebus(View, obj1);
  obj.children = items2;
  return React2(View, obj);
};