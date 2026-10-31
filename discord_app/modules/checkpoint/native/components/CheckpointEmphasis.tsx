// === Module 13638: CheckpointEmphasis ===

// Module 13638 (CheckpointEmphasis)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import useFontScale from "useFontScale" /* 5642 */;
import inlineStyles from "inlineStyles" /* 8031 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11047 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const CHECKPOINT_PRIMARY = fn(6066).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const PlatformUtils = fn(1376);
const CheckpointCustomizationUtils = fn(6434);
const points = CheckpointCustomizationUtils.getChamferedRectPoints(75, 22, 5.5);
const createStyles = fn(5014);
let obj4 = { container: { paddingHorizontal: nativeDefault.space.PX_6 }, emphasis: { flexDirection: "row", alignItems: "center" }, text: null };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_6 };
obj4.text = { color: "black", textTransform: "uppercase", paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_6, fontSize: 14, lineHeight: 19 };
let closure_10 = createStyles.createStyles(obj4);
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointEmphasis.tsx");

export default function CheckpointEmphasis(children) {
  let fill = children.fill;
  if (fill === undefined) {
    fill = CHECKPOINT_PRIMARY;
  }
  const tmp = closure_10();
  const fontScale = useFontScale.useFontScale();
  const obj3 = { style: null, children: null };
  const items = [tmp.container, ];
  const obj4 = { transform: null };
  const items1 = [{ translateY: num * useScaledTextLineHeight.scaleLineHeight(14, fontScale) / 14 }];
  obj4.transform = items1;
  items[1] = obj4;
  obj3.style = items;
  const obj6 = { style: tmp.emphasis, children: null };
  const size = { style: absoluteFill.absoluteFill, width: "100%", height: "100%", viewBox: "0 0 75 22", preserveAspectRatio: "none", children: null };
  const obj5 = { translateY: num * useScaledTextLineHeight.scaleLineHeight(14, fontScale) / 14 };
  size.children = timestampProducer(inlineStyles.Polygon, { points, fill });
  const items2 = [timestampProducer(inlineStylesDefault, size), timestampProducer(Text_Text.Text, { variant: "experimental/mono-md/bold", style: tmp.text, lineClamp: 1, children: children.children })];
  obj6.children = items2;
  obj3.children = React5(React4, obj6);
  return timestampProducer(React4, obj3);
};