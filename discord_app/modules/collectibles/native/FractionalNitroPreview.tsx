// === Module 13141: FractionalNitroPreview ===

// Module 13141 (FractionalNitroPreview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import FastImageDefault from "FastImage" /* 5587 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 7133 */;
import _modDef13142 from "module_13142" /* 13142 */;
import NitroIconDefault from "NitroIcon" /* 13143 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, gradient: null, headerImage: null, nitroIconContainer: null, benefits: null, benefitRow: null };
createStyles = { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.lg, overflow: "hidden", alignSelf: "center", gap: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.gradient = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
createStyles.headerImage = { width: 211, height: 157, resizeMode: "cover" };
createStyles.nitroIconContainer = { alignSelf: "flex-start" };
createStyles.benefits = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8 };
let obj1 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8 };
createStyles.benefitRow = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = function FractionalNitroPreview() {
  const tmp = closure_7();
  _require = tmp;
  let items = [require("util").t.E1NP2x, require("util").t.kpMomJ, require("util").t.xT1Vfn, require("util").t.myyAEr, require("util").t.zTk8Ul];
  let obj = { style: tmp.container, children: null };
  obj = { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
  const items1 = [closure_5(LinearGradientDefault, obj), , , ];
  obj = { source: null, style: null };
  const obj1 = { uri: _modDef13142 };
  obj.source = obj1;
  obj.style = tmp.headerImage;
  items1[1] = closure_5(FastImageDefault, obj);
  items1[2] = closure_5(View, { style: tmp.nitroIconContainer, children: closure_5(NitroIconDefault, {}) });
  const obj2 = { style: tmp.nitroIconContainer, children: closure_5(NitroIconDefault, {}) };
  items1[3] = closure_5(View, {
    style: tmp.benefits,
    children: items.map((item, index) => {
      let obj = { style: benefitRow.benefitRow, children: null };
      obj = { color: nativeDefault.colors.WHITE };
      const items = [hasOwnProperty(CheckmarkSmallIcon.CheckmarkSmallIcon, obj), ];
      obj = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
      const intl = util.intl;
      obj.children = intl.string(item);
      items[1] = hasOwnProperty(Text_Text.Text, obj);
      obj.children = items;
      return timestampProducer(View, obj, index);
    })
  });
  obj.children = items1;
  return closure_6(View, obj);
};