// discord_app/modules/checkpoint/native/components/share/CheckpointShareCardPowerBar.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import inlineStyles from "../../../../../../_runtime/08023_inlineStyles.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const CHECKPOINT_2026_POWER_BAR_UNITS = fn(6061).CHECKPOINT_2026_POWER_BAR_UNITS;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let items = ["M0 0H10L4.44 8H0V0Z"];
items[HermesBuiltin.arraySpread(Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2).fill("M5.65 0H13L7.35 8H0L5.65 0Z"), 1)] =
  "M5.56 0H10V8H0L5.56 0Z";
const ArrayResult = Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2);
let items1 = [10];
items1[HermesBuiltin.arraySpread(Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2).fill(13), 1)] = 10;
const createStyles = fn(5009);
let obj = { powerBar: null, powerLevel: { flexDirection: "row", gap: 2 }, powerText: null, powerUnits: null };
const rect = {
  position: "absolute",
  top: 75,
  left: 12,
  flexDirection: "row",
  alignItems: "center",
  gap: 6,
  paddingHorizontal: 6,
  paddingVertical: 2,
  transform: null,
  transformOrigin: "top left",
};
let items2 = [{ rotate: "90deg" }];
rect.transform = items2;
obj.powerBar = rect;
const ArrayResult1 = Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2);
obj.powerText = { fontSize: 8, lineHeight: 8, letterSpacing: -0.08, color: nativeDefault.colors.BLACK };
obj.powerUnits = { flexDirection: "row" };
let closure_9 = createStyles.createStyles(obj);
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardPowerBar.tsx");

export default function CheckpointShareCardPowerBar(stats) {
  stats = stats.stats;
  const tmp = closure_9();
  importDefault = stats(5591).useToken(nativeDefault.colors.BLACK);
  let obj2 = { style: null, children: null };
  items = [
    tmp.powerBar,
    { backgroundColor: noop.useContext(stats(13391).CheckpointShareCardColorsContext).tertiaryBackgroundColor },
  ];
  obj2.style = items;
  const obj3 = { style: tmp.powerLevel, children: null };
  items1 = [
    closure_5(stats(5619).Text, {
      variant: "experimental/mono-md/normal",
      style: tmp.powerText,
      allowFontScaling: false,
      children: "LVL",
    }),
    closure_5(stats(5619).Text, {
      variant: "experimental/mono-md/bold",
      style: tmp.powerText,
      allowFontScaling: false,
      children: stats.powerLevel,
    }),
  ];
  obj3.children = items1;
  const items2 = [closure_6(View, obj3)];
  let obj = stats(5591);
  const obj4 = {
    variant: "experimental/mono-md/normal",
    style: tmp.powerText,
    allowFontScaling: false,
    children: "LVL",
  };
  const obj5 = {
    variant: "experimental/mono-md/bold",
    style: tmp.powerText,
    allowFontScaling: false,
    children: stats.powerLevel,
  };
  items2[1] = closure_5(View, {
    style: tmp.powerUnits,
    children: items.map((d, index) => {
      const size = {
        width: 0.75 * tmp,
        height: 6,
        viewBox: "0 0 " + items1[index] + " 8",
        style: null,
        children: null,
      };
      let obj;
      if (index > 0) {
        obj = { marginLeft: -3 };
      }
      size.style = obj;
      const obj2 = { d, fill, opacity: null };
      let num = 0.3;
      if (index < stats.powerLevelUnits) {
        num = 1;
      }
      obj2.opacity = num;
      size.children = hasOwnProperty(inlineStyles.Path, obj2);
      return hasOwnProperty(inlineStylesDefault, size, index);
    }),
  });
  obj2.children = items2;
  return closure_6(View, obj2);
}
