// discord_app/modules/collectibles/native/FractionalNitroPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/05387_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import CheckmarkSmallIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import _modDef13272 from "../../../../discord_assets/assets/orbs/fn_pdp_preview_header.png.js";
import NitroIconDefault from "NitroIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1085).VerticalGradient;
const PremiumTypes = fn(1391).PremiumTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: nativeDefault.space.PX_24,
    borderRadius: nativeDefault.radii.lg,
    overflow: "hidden",
    alignSelf: "center",
    gap: nativeDefault.space.PX_16,
  },
  gradient: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
  headerImage: { width: 211, height: 157, resizeMode: "cover" },
  nitroIconContainer: { alignSelf: "flex-start" },
  benefits: null,
  benefitRow: null,
};
let obj3 = {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: nativeDefault.space.PX_24,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  alignSelf: "center",
  gap: nativeDefault.space.PX_16,
};
obj2.benefits = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8 };
let obj4 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8 };
obj2.benefitRow = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = ReactCompilerGating.isReactCompilerEnabled()
  ? function FractionalNitroPreview() {
      const cResult = require("c").c(21);
      const tmp4 = closure_8();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        let items = [intl.string(tmp(1126).t.E1NP2x), , , ,];
        const intl2 = tmp(1126).intl;
        items[1] = intl2.string(tmp(1126).t.kpMomJ);
        const obj2 = { legacyCopy: null, rolloutCopy: null };
        const intl3 = tmp(1126).intl;
        obj2.legacyCopy = intl3.string(tmp(1126).t.xT1Vfn);
        const intl4 = tmp(1126).intl;
        const obj3 = { maxFileSize: null };
        const tmpResult = tmp(7733);
        obj3.maxFileSize = tmp(4726).getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false });
        obj2.rolloutCopy = intl4.formatToPlainString(tmp(1126).t.IDAfOy, obj3);
        items[2] = tmpResult.getNitroFileUploadRolloutCopy(obj2);
        const intl5 = tmp(1126).intl;
        items[3] = intl5.string(tmp(1126).t.myyAEr);
        const intl6 = tmp(1126).intl;
        items[4] = intl6.string(tmp(1126).t.zTk8Ul);
        cResult[0] = items;
        let first = items;
        const tmpResult2 = tmp(4726);
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = ["#000000", "#36266d"];
        cResult[1] = items1;
        let tmp6 = items1;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== tmp4.gradient) {
        const obj4 = { colors: tmp6, start: null, end: null, style: null };
        ({ START: obj6.start, END: obj6.end } = VerticalGradient);
        obj4.style = tmp4.gradient;
        const tmp11 = closure_6(LinearGradientDefault, obj4);
        cResult[2] = tmp4.gradient;
        cResult[3] = tmp11;
        let tmp7 = tmp11;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { uri: _modDef13272 };
        cResult[4] = obj5;
        let tmp12 = obj5;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== tmp4.headerImage) {
        const obj7 = { source: tmp12, style: tmp4.headerImage };
        const tmp17 = closure_6(FastImageDefault, obj7);
        cResult[5] = tmp4.headerImage;
        cResult[6] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = closure_6(NitroIconDefault, {});
        cResult[7] = tmp21;
        let tmp18 = tmp21;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] !== tmp4.nitroIconContainer) {
        const obj8 = { style: tmp4.nitroIconContainer, children: tmp18 };
        const tmp25 = closure_6(View, obj8);
        cResult[8] = tmp4.nitroIconContainer;
        cResult[9] = tmp25;
        let tmp22 = tmp25;
      } else {
        tmp22 = cResult[9];
      }
      if (cResult[10] !== tmp4.benefitRow) {
        const mapped = first.map((children, index) => {
          const obj = { style: benefitRow.benefitRow, children: null };
          const items = [
            timestampProducer(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: nativeDefault.colors.WHITE }),
            timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children }),
          ];
          obj.children = items;
          return React5(View, obj, index);
        });
        cResult[10] = tmp4.benefitRow;
        cResult[11] = mapped;
        let tmp26 = mapped;
      } else {
        tmp26 = cResult[11];
      }
      if (cResult[12] === tmp4.benefits) {
        if (cResult[13] === tmp26) {
          let tmp28 = cResult[14];
        }
        if (cResult[15] === tmp4.container) {
          if (cResult[16] === tmp28) {
            if (cResult[17] === tmp7) {
              if (cResult[18] === tmp14) {
                if (cResult[19] === tmp22) {
                  let tmp30 = cResult[20];
                }
                return tmp30;
              }
            }
          }
        }
        const obj9 = { style: tmp4.container, children: null };
        const items2 = [tmp7, tmp14, tmp22, tmp28];
        obj9.children = items2;
        const tmp33 = closure_7(View, obj9);
        cResult[15] = tmp4.container;
        cResult[16] = tmp28;
        cResult[17] = tmp7;
        cResult[18] = tmp14;
        cResult[19] = tmp22;
        cResult[20] = tmp33;
        tmp30 = tmp33;
      }
      const tmp29 = closure_6(View, { style: tmp4.benefits, children: tmp26 });
      cResult[12] = tmp4.benefits;
      cResult[13] = tmp26;
      cResult[14] = tmp29;
      tmp28 = tmp29;
      let obj = require("c");
    }
  : function FractionalNitroPreview() {
      const tmp = closure_8();
      _require = tmp;
      const intl = require("util").intl;
      let items = [intl.string(require("util").t.E1NP2x), , , ,];
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
      const items1 = [
        closure_6(LinearGradientDefault, {
          colors: ["#000000", "#36266d"],
          start: VerticalGradient.START,
          end: VerticalGradient.END,
          style: tmp.gradient,
        }),
        ,
        ,
      ];
      const obj7 = { source: null, style: null };
      const obj8 = { uri: null };
      const obj4 = require("PremiumUtils");
      const obj6 = {
        colors: ["#000000", "#36266d"],
        start: VerticalGradient.START,
        end: VerticalGradient.END,
        style: tmp.gradient,
      };
      obj8.uri = _modDef13272;
      obj7.source = obj8;
      obj7.style = tmp.headerImage;
      items1[1] = closure_6(FastImageDefault, obj7);
      items1[2] = closure_6(View, { style: tmp.nitroIconContainer, children: closure_6(NitroIconDefault, {}) });
      const obj9 = { style: tmp.nitroIconContainer, children: closure_6(NitroIconDefault, {}) };
      items1[3] = closure_6(View, {
        style: tmp.benefits,
        children: items.map((children, index) => {
          const obj = { style: benefitRow.benefitRow, children: null };
          const items = [
            timestampProducer(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: nativeDefault.colors.WHITE }),
            timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children }),
          ];
          obj.children = items;
          return React5(View, obj, index);
        }),
      });
      obj5.children = items1;
      return closure_7(View, obj5);
    };
