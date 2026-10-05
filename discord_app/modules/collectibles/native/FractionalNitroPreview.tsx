// === Module 12974: FractionalNitroPreview ===

// Module 12974 (FractionalNitroPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Text_Text from "Text/Text" /* 4886 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import FastImageDefault from "FastImage" /* 5974 */;
import CheckmarkSmallIcon2 from "CheckmarkSmallIcon" /* 6628 */;
import _modDef12975 from "module_12975" /* 12975 */;
import NitroIconDefault from "NitroIcon" /* 12976 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const VerticalGradient = Constants.VerticalGradient;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, gradient: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, headerImage: { width: 211, height: 157, resizeMode: "cover" }, nitroIconContainer: { alignSelf: "flex-start" }, benefits: obj3, benefitRow: obj4 };
obj2 = { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.lg, overflow: "hidden", alignSelf: "center", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8 };
obj4 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let closure_8 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let IDAfOy;
  let benefitRow;
  let first;
  let formatToPlainString;
  let intl3;
  let items2;
  let obj3;
  let tmp13;
  let tmp15;
  let tmp19;
  let tmp23;
  let tmp27;
  let tmp7;
  let tmp8;
  let tmpResult2;
  let obj = require("react");
  const cResult = obj.c(21);
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    let items = [intl.string(require("intl").t.E1NP2x), , , , ];
    const intl2 = tmp(1126).intl;
    items[1] = intl2.string(require("intl").t.kpMomJ);
    let obj2 = { legacyCopy: intl3.string(require("intl").t.xT1Vfn), rolloutCopy: formatToPlainString(IDAfOy, obj3) };
    const getNitroFileUploadRolloutCopy = require("NitroFileUploadExperiments").getNitroFileUploadRolloutCopy;
    require("NitroFileUploadExperiments");
    intl3 = tmp(1126).intl;
    const intl4 = tmp(1126).intl;
    formatToPlainString = intl4.formatToPlainString;
    obj3 = { maxFileSize: tmpResult2.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false }) };
    IDAfOy = tmp(1126).t.IDAfOy;
    tmpResult2 = require("PremiumUtils");
    items[2] = getNitroFileUploadRolloutCopy(obj2);
    const intl5 = tmp(1126).intl;
    items[3] = intl5.string(require("intl").t.myyAEr);
    const intl6 = tmp(1126).intl;
    items[4] = intl6.string(require("intl").t.zTk8Ul);
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const container = tmp4.container;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = ["#000000", "#36266d"];
    cResult[1] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp4.gradient) {
    const obj4 = { colors: tmp7, start: null, end: null, style: tmp4.gradient };
    ({ START: obj5.start, END: obj5.end } = VerticalGradient);
    const tmp12 = closure_6(LinearGradientDefault, obj4);
    cResult[2] = tmp4.gradient;
    cResult[3] = tmp12;
    tmp8 = tmp12;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { uri: _modDef12975 };
    cResult[4] = obj6;
    tmp13 = obj6;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.headerImage) {
    const obj7 = { source: tmp13, style: tmp4.headerImage };
    const tmp18 = closure_6(FastImageDefault, obj7);
    cResult[5] = tmp4.headerImage;
    cResult[6] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp22 = closure_6(NitroIconDefault, {});
    cResult[7] = tmp22;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[7];
  }
  if (cResult[8] !== tmp4.nitroIconContainer) {
    const obj8 = { style: tmp4.nitroIconContainer, children: tmp19 };
    const tmp26 = closure_6(View, obj8);
    cResult[8] = tmp4.nitroIconContainer;
    cResult[9] = tmp26;
    tmp23 = tmp26;
  } else {
    tmp23 = cResult[9];
  }
  const benefits = tmp4.benefits;
  if (cResult[10] !== tmp4.benefitRow) {
    const mapped = first.map((children, index) => {
      let items;
      const obj = { style: benefitRow.benefitRow, children: items };
      const obj2 = { color: nativeDefault.colors.WHITE };
      const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
      items = [metroRequire(CheckmarkSmallIcon, obj2), ];
      const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", children };
      items[1] = metroRequire(Text_Text.Text, obj3);
      return metroImportDefault(View, obj, index);
    });
    cResult[10] = tmp4.benefitRow;
    cResult[11] = mapped;
    tmp27 = mapped;
  } else {
    tmp27 = cResult[11];
  }
  if (cResult[12] === tmp4.benefits) {
    let tmp29;
    if (cResult[13] === tmp27) {
      tmp29 = cResult[14];
    }
    if (cResult[15] === tmp4.container) {
      if (cResult[16] === tmp29) {
        if (cResult[17] === tmp8) {
          if (cResult[18] === tmp15) {
            let tmp31;
            if (cResult[19] === tmp23) {
              tmp31 = cResult[20];
            }
            return tmp31;
          }
        }
      }
    }
    const obj9 = { style: container, children: items2 };
    items2 = [tmp8, tmp15, tmp23, tmp29];
    const tmp34 = closure_7(View, obj9);
    cResult[15] = tmp4.container;
    cResult[16] = tmp29;
    cResult[17] = tmp8;
    cResult[18] = tmp15;
    cResult[19] = tmp23;
    cResult[20] = tmp34;
    tmp31 = tmp34;
  }
  const tmp30 = closure_6(View, { style: benefits, children: tmp27 });
  cResult[12] = tmp4.benefits;
  cResult[13] = tmp27;
  cResult[14] = tmp30;
  tmp29 = tmp30;
}) : (() => {
  let IDAfOy;
  let benefitRow;
  let formatToPlainString;
  let intl3;
  let items1;
  let obj2;
  let obj3;
  let obj7;
  const tmp = closure_8();
  _require = tmp;
  const intl = require("intl").intl;
  let items = [intl.string(require("intl").t.E1NP2x), , , , ];
  const intl2 = require("intl").intl;
  items[1] = intl2.string(require("intl").t.kpMomJ);
  let obj = { legacyCopy: intl3.string(require("intl").t.xT1Vfn), rolloutCopy: formatToPlainString(IDAfOy, obj2) };
  const getNitroFileUploadRolloutCopy = require("NitroFileUploadExperiments").getNitroFileUploadRolloutCopy;
  require("NitroFileUploadExperiments");
  intl3 = require("intl").intl;
  const intl4 = require("intl").intl;
  formatToPlainString = intl4.formatToPlainString;
  obj2 = { maxFileSize: obj3.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false }) };
  IDAfOy = require("intl").t.IDAfOy;
  obj3 = require("PremiumUtils");
  items[2] = getNitroFileUploadRolloutCopy(obj);
  const intl5 = require("intl").intl;
  items[3] = intl5.string(require("intl").t.myyAEr);
  const intl6 = require("intl").intl;
  items[4] = intl6.string(require("intl").t.zTk8Ul);
  const obj4 = { style: tmp.container, children: items1 };
  items1 = [, , , ];
  const obj5 = { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
  items1[0] = closure_6(LinearGradientDefault, obj5);
  const obj6 = { source: obj7, style: tmp.headerImage };
  obj7 = { uri: _modDef12975 };
  const tmp3 = FastImageDefault;
  items1[1] = closure_6(tmp3, obj6);
  const obj8 = { style: tmp.nitroIconContainer, children: closure_6(NitroIconDefault, {}) };
  items1[2] = closure_6(View, obj8);
  const obj9 = {
    style: tmp.benefits,
    children: items.map((children, index) => {
      let items;
      const obj = { style: benefitRow.benefitRow, children: items };
      const obj2 = { color: nativeDefault.colors.WHITE };
      const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
      items = [metroRequire(CheckmarkSmallIcon, obj2), ];
      const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", children };
      items[1] = metroRequire(Text_Text.Text, obj3);
      return metroImportDefault(View, obj, index);
    })
  };
  items1[3] = closure_6(View, obj9);
  return closure_7(View, obj4);
});
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = tmp5;