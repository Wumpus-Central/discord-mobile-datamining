// === Module 13217: FractionalNitroPreview ===

// Module 13217 (FractionalNitroPreview)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4601 */;
import LinearGradientDefault from "LinearGradient" /* 5037 */;
import FastImageDefault from "FastImage" /* 5637 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 7185 */;
import _modDef13218 from "module_13218" /* 13218 */;
import NitroIconDefault from "NitroIcon" /* 13219 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1074).VerticalGradient;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4605);
let createStyles = { container: null, gradient: null, headerImage: null, nitroIconContainer: null, benefits: null, benefitRow: null };
createStyles = { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.lg, overflow: "hidden", alignSelf: "center", gap: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.gradient = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
createStyles.headerImage = { width: 211, height: 157, resizeMode: "cover" };
createStyles.nitroIconContainer = { alignSelf: "flex-start" };
createStyles.benefits = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8 };
let obj1 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8 };
createStyles.benefitRow = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = function FractionalNitroPreview() {
  const tmp = closure_8();
  _require = tmp;
  const intl = require("util").intl;
  let items = [intl.string(require("util").t.E1NP2x), , , , ];
  const intl2 = require("util").intl;
  items[1] = intl2.string(require("util").t.kpMomJ);
  require("NitroFileUploadExperiments");
  let obj = { legacyCopy: null, rolloutCopy: null };
  const intl3 = require("util").intl;
  obj.legacyCopy = intl3.string(require("util").t.xT1Vfn);
  const intl4 = require("util").intl;
  obj = { maxFileSize: null };
  let obj3 = require("PremiumUtils");
  obj.maxFileSize = obj3.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false });
  obj.rolloutCopy = intl4.formatToPlainString(require("util").t.IDAfOy, obj);
  items[2] = obj.getNitroFileUploadRolloutCopy(obj);
  const intl5 = require("util").intl;
  items[3] = intl5.string(require("util").t.myyAEr);
  const intl6 = require("util").intl;
  items[4] = intl6.string(require("util").t.zTk8Ul);
  const obj1 = { style: tmp.container, children: null };
  const items1 = [closure_6(LinearGradientDefault, { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient }), , , ];
  obj3 = { source: null, style: null };
  const obj4 = { uri: _modDef13218 };
  obj3.source = obj4;
  obj3.style = tmp.headerImage;
  items1[1] = closure_6(FastImageDefault, obj3);
  const obj2 = { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
  items1[2] = closure_6(View, { style: tmp.nitroIconContainer, children: closure_6(NitroIconDefault, {}) });
  const obj5 = { style: tmp.nitroIconContainer, children: closure_6(NitroIconDefault, {}) };
  items1[3] = closure_6(View, {
    style: tmp.benefits,
    children: items.map((children, index) => {
      let obj = { style: benefitRow.benefitRow, children: null };
      obj = { color: nativeDefault.colors.WHITE };
      const items = [timestampProducer(CheckmarkSmallIcon.CheckmarkSmallIcon, obj), ];
      obj = { variant: "text-sm/medium", color: "text-overlay-light", children };
      items[1] = timestampProducer(Text_Text.Text, obj);
      obj.children = items;
      return React5(View, obj, index);
    })
  });
  obj1.children = items1;
  return closure_7(View, obj1);
};