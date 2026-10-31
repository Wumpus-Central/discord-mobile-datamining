// === Module 13431: CheckpointShareCardPowerBar ===

// Module 13431 (CheckpointShareCardPowerBar)
import nativeDefault from "native" /* 575 */;
import inlineStyles from "inlineStyles" /* 8031 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const CHECKPOINT_2026_POWER_BAR_UNITS = fn(6066).CHECKPOINT_2026_POWER_BAR_UNITS;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let items = ["M0 0H10L4.44 8H0V0Z"];
items[HermesBuiltin.arraySpread(Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2).fill("M5.65 0H13L7.35 8H0L5.65 0Z"), 1)] = "M5.56 0H10V8H0L5.56 0Z";
const ArrayResult = Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2);
let items1 = [10];
items1[HermesBuiltin.arraySpread(Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2).fill(13), 1)] = 10;
const createStyles = fn(5014);
let obj = { powerBar: null, powerLevel: null, powerText: null, powerUnits: null };
const rect = { position: "absolute", top: 106, left: 18, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, transform: null, transformOrigin: "top left" };
let items2 = [{ rotate: "90deg" }];
rect.transform = items2;
obj.powerBar = rect;
const ArrayResult1 = Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2);
obj.powerLevel = { flexDirection: "row", gap: nativeDefault.space.PX_4 / 2 };
let obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_4 / 2 };
obj.powerText = { fontSize: 10, lineHeight: 10, letterSpacing: -0.1, color: nativeDefault.colors.BLACK };
obj.powerUnits = { flexDirection: "row" };
let closure_9 = createStyles.createStyles(obj);
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardPowerBar.tsx");

export default function CheckpointShareCardPowerBar(stats) {
  stats = stats.stats;
  const tmp = closure_9();
  importDefault = stats(5596).useToken(nativeDefault.colors.BLACK);
  let obj2 = { style: null, children: null };
  items = [tmp.powerBar, { backgroundColor: noop.useContext(stats(13429).CheckpointShareCardColorsContext).tertiaryBackgroundColor }];
  obj2.style = items;
  const obj3 = { style: tmp.powerLevel, children: null };
  items1 = [closure_5(stats(5624).Text, { variant: "experimental/mono-md/normal", style: tmp.powerText, allowFontScaling: false, children: "LVL" }), closure_5(stats(5624).Text, { variant: "experimental/mono-md/bold", style: tmp.powerText, allowFontScaling: false, children: stats.powerLevel })];
  obj3.children = items1;
  const items2 = [closure_6(View, obj3), ];
  let obj = stats(5596);
  const obj4 = { variant: "experimental/mono-md/normal", style: tmp.powerText, allowFontScaling: false, children: "LVL" };
  const obj5 = { variant: "experimental/mono-md/bold", style: tmp.powerText, allowFontScaling: false, children: stats.powerLevel };
  items2[1] = closure_5(View, {
    style: tmp.powerUnits,
    children: items.map((d, index) => {
      const size = { width: tmp, height: 8, viewBox: "0 0 " + items1[index] + " 8", style: null, children: null };
      let obj;
      if (index > 0) {
        obj = { marginLeft: -4 };
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
    })
  });
  obj2.children = items2;
  return closure_6(View, obj2);
};