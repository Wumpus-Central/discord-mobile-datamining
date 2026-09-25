// === Module 12696: FractionalNitroPreview ===

// Module 12696 (FractionalNitroPreview)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4825 */;
import LinearGradientDefault from "LinearGradient" /* 5286 */;
import FastImageDefault from "FastImage" /* 5894 */;
import CheckmarkSmallIcon from "CheckmarkSmallIcon" /* 6549 */;
import _modDef12697 from "module_12697" /* 12697 */;
import NitroIconDefault from "NitroIcon" /* 12698 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1074).VerticalGradient;
const PremiumTypes = fn(1374).PremiumTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.lg, overflow: "hidden", alignSelf: "center", gap: nativeDefault.space.PX_16 }, gradient: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, headerImage: { width: 211, height: 157, resizeMode: "cover" }, nitroIconContainer: { alignSelf: "flex-start" }, benefits: null, benefitRow: null };
let obj3 = { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.lg, overflow: "hidden", alignSelf: "center", gap: nativeDefault.space.PX_16 };
obj2.benefits = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8 };
let obj4 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8 };
obj2.benefitRow = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = function FractionalNitroPreview() {
  const tmp = closure_8();
  _require = tmp;
  const intl = require("util").intl;
  let items = [intl.string(require("util").t.E1NP2x), , , , ];
  const intl2 = require("util").intl;
  items[1] = intl2.string(require("util").t.kpMomJ);
  const obj2 = { legacyCopy: null, rolloutCopy: null };
  const intl3 = require("util").intl;
  obj2.legacyCopy = intl3.string(require("util").t.xT1Vfn);
  const intl4 = require("util").intl;
  const obj3 = { maxFileSize: null };
  let obj = require("NitroFileUploadExperiments");
  obj3.maxFileSize = require("PremiumUtils").getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false });
  obj2.rolloutCopy = intl4.formatToPlainString(require("util").t.IDAfOy, obj3);
  items[2] = obj.getNitroFileUploadRolloutCopy(obj2);
  const intl5 = require("util").intl;
  items[3] = intl5.string(require("util").t.myyAEr);
  const intl6 = require("util").intl;
  items[4] = intl6.string(require("util").t.zTk8Ul);
  const obj5 = { style: tmp.container, children: null };
  const items1 = [closure_6(LinearGradientDefault, { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient }), , , ];
  const obj7 = { source: null, style: null };
  const obj8 = { uri: null };
  const obj4 = require("PremiumUtils");
  const obj6 = { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
  obj8.uri = _modDef12697;
  obj7.source = obj8;
  obj7.style = tmp.headerImage;
  items1[1] = closure_6(FastImageDefault, obj7);
  items1[2] = closure_6(View, { style: tmp.nitroIconContainer, children: closure_6(NitroIconDefault, {}) });
  const obj9 = { style: tmp.nitroIconContainer, children: closure_6(NitroIconDefault, {}) };
  items1[3] = closure_6(View, {
    style: tmp.benefits,
    children: items.map((children, index) => {
      const obj = { style: benefitRow.benefitRow, children: null };
      const items = [timestampProducer(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: nativeDefault.colors.WHITE }), timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children })];
      obj.children = items;
      return React5(View, obj, index);
    })
  });
  obj5.children = items1;
  return closure_7(View, obj5);
};