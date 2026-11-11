// discord_app/modules/checkpoint/native/components/CheckpointEmphasis.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useFontScale from "../../../screen/native/useFontScale.tsx";
import useScaledTextLineHeight from "../../../screen/native/useScaledTextLineHeight.android.tsx";
import inlineStyles from "../../../../../_runtime/08197_inlineStyles.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const CHECKPOINT_PRIMARY = fn(6314).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const PlatformUtils = fn(1357);
const CheckpointCustomizationUtils = fn(6681);
const points = CheckpointCustomizationUtils.getChamferedRectPoints(75, 22, 5.5);
const createStyles = fn(5243);
let obj4 = {
  container: { paddingHorizontal: nativeDefault.space.PX_6 },
  emphasis: { flexDirection: "row", alignItems: "center" },
  text: null,
};
let obj5 = { paddingHorizontal: nativeDefault.space.PX_6 };
obj4.text = {
  color: "black",
  textTransform: "uppercase",
  paddingVertical: 2,
  paddingHorizontal: nativeDefault.space.PX_6,
  fontSize: 14,
  lineHeight: 19,
};
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
  items = [tmp.container];
  const obj4 = { transform: null };
  const items1 = [{ translateY: (num * useScaledTextLineHeight.scaleLineHeight(14, fontScale)) / 14 }];
  obj4.transform = items1;
  items[1] = obj4;
  obj3.style = items;
  const obj6 = { style: tmp.emphasis, children: null };
  const size = {
    style: absoluteFill.absoluteFill,
    width: "100%",
    height: "100%",
    viewBox: "0 0 75 22",
    preserveAspectRatio: "none",
    children: null,
  };
  const obj5 = { translateY: (num * useScaledTextLineHeight.scaleLineHeight(14, fontScale)) / 14 };
  size.children = timestampProducer(inlineStyles.Polygon, { points, fill });
  const items2 = [
    timestampProducer(inlineStylesDefault, size),
    timestampProducer(Text_Text.Text, {
      variant: "mono-md/bold",
      style: tmp.text,
      lineClamp: 1,
      children: children.children,
    }),
  ];
  obj6.children = items2;
  obj3.children = metroImportDefault(React4, obj6);
  return timestampProducer(React4, obj3);
}
