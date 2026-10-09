// discord_app/modules/premium/native/discounts/PremiumDiscountOfferActionSheetContent.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import NitroFileUploadExperiments from "../../experiments/NitroFileUploadExperiments.tsx";
import FolderIcon from "../../../../design/components/Icon/native/redesign/generated/FolderIcon.tsx";
import NitroWheelIcon from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import UserIcon from "../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import ChatSmileIcon from "../../../../design/components/Icon/native/redesign/generated/ChatSmileIcon.tsx";
import NitroWumpusFlightRight3dIllustration from "../../../../design/components/mana-assets/native/generated/NitroWumpusFlightRight3dIllustration.native.tsx";
import PremiumPerksListDefault from "../../../../components_native/premium/PremiumPerksList.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1392).PremiumTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj = {
  contentContainer: {
    paddingHorizontal: 36,
    paddingTop: 18,
    paddingBottom: 36,
    width: "100%",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  buttonContainer: { marginVertical: 6, width: "100%", height: 48 },
  title: { width: "100%", textAlign: "center" },
  heroIllustrationContainer: { alignItems: "center", justifyContent: "center", height: 188, width: "100%" },
};
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = {
  paddingHorizontal: 36,
  paddingTop: 18,
  paddingBottom: 36,
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: 0,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/native/discounts/PremiumDiscountOfferActionSheetContent.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function PremiumDiscountOfferActionSheetContent(onConfirm) {
        const cResult = c.c(26);
        onConfirm = onConfirm.onConfirm;
        const tmp4 = closure_7();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { IconComponent: UserIcon.UserIcon, label: null, description: null };
          const intl = util.intl;
          obj2.label = intl.string(util.t.kpMomJ);
          const intl2 = util.intl;
          obj2.description = intl2.string(util.t.uVUtPw);
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { IconComponent: ChatSmileIcon.ChatSmileIcon, label: null, description: null };
          const intl3 = util.intl;
          obj3.label = intl3.string(util.t["R2IV/Q"]);
          const intl4 = util.intl;
          obj3.description = intl4.string(util.t["3SUJLd"]);
          cResult[1] = obj3;
          let tmp6 = obj3;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [first, tmp6];
          const obj4 = { IconComponent: FolderIcon.FolderIcon, label: null, description: null };
          const intl5 = util.intl;
          obj4.label = intl5.string(util.t["u/NJKc"]);
          const obj5 = { legacyCopy: null, rolloutCopy: null };
          const intl6 = util.intl;
          obj5.legacyCopy = intl6.string(util.t.i1UuMk);
          const intl7 = util.intl;
          const obj6 = { maxFileSize: null };
          const tmpResult = NitroFileUploadExperiments;
          obj6.maxFileSize = PremiumUtils.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false });
          obj5.rolloutCopy = intl7.formatToPlainString(util.t.PvqncD, obj6);
          obj4.description = tmpResult.getNitroFileUploadRolloutCopy(obj5);
          items[2] = obj4;
          cResult[2] = items;
          let tmp7 = items;
          const tmpResult2 = PremiumUtils;
        } else {
          tmp7 = cResult[2];
        }
        const amount = onConfirm.discountOffer.discount.amount;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp11 = hasOwnProperty(NitroWumpusFlightRight3dIllustration.NitroWumpusFlightRight3dIllustration, {
            width: 180,
            height: 180,
          });
          cResult[3] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] !== tmp4.heroIllustrationContainer) {
          const obj7 = { style: tmp4.heroIllustrationContainer, children: tmp9 };
          const tmp15 = hasOwnProperty(View, obj7);
          cResult[4] = tmp4.heroIllustrationContainer;
          cResult[5] = tmp15;
          let tmp12 = tmp15;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] !== amount) {
          const intl8 = util.intl;
          const obj8 = { percent: amount };
          const formatToPlainStringResult = intl8.formatToPlainString(util.t.qowbUk, obj8);
          cResult[6] = amount;
          cResult[7] = formatToPlainStringResult;
          let tmp16 = formatToPlainStringResult;
        } else {
          tmp16 = cResult[7];
        }
        if (cResult[8] === tmp4.title) {
          if (cResult[9] === tmp16) {
            let tmp18 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj9 = { perks: tmp7 };
            const tmp23 = hasOwnProperty(PremiumPerksListDefault, obj9);
            cResult[11] = tmp23;
            let tmp20 = tmp23;
          } else {
            tmp20 = cResult[11];
          }
          if (cResult[12] !== amount) {
            const intl9 = util.intl;
            const obj10 = { percent: amount };
            const formatToPlainStringResult1 = intl9.formatToPlainString(util.t.bkQ4bH, obj10);
            cResult[12] = amount;
            cResult[13] = formatToPlainStringResult1;
            let tmp24 = formatToPlainStringResult1;
          } else {
            tmp24 = cResult[13];
          }
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const obj11 = { size: "md", color: nativeDefault.unsafe_rawColors.WHITE };
            const tmp29 = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj11);
            cResult[14] = tmp29;
            let tmp26 = tmp29;
          } else {
            tmp26 = cResult[14];
          }
          if (cResult[15] === onConfirm) {
            if (cResult[16] === tmp24) {
              let tmp30 = cResult[17];
            }
            if (cResult[18] === tmp4.buttonContainer) {
              if (cResult[19] === tmp30) {
                let tmp33 = cResult[20];
              }
              if (cResult[21] === tmp4.contentContainer) {
                if (cResult[22] === tmp33) {
                  if (cResult[23] === tmp12) {
                    if (cResult[24] === tmp18) {
                      let tmp37 = cResult[25];
                    }
                    return tmp37;
                  }
                }
              }
              const obj12 = { style: tmp4.contentContainer, children: null };
              const items1 = [tmp12, tmp18, tmp20, tmp33];
              obj12.children = items1;
              const tmp40 = timestampProducer(View, obj12);
              cResult[21] = tmp4.contentContainer;
              cResult[22] = tmp33;
              cResult[23] = tmp12;
              cResult[24] = tmp18;
              cResult[25] = tmp40;
              tmp37 = tmp40;
            }
            const obj13 = { style: tmp4.buttonContainer, children: tmp30 };
            const tmp36 = hasOwnProperty(View, obj13);
            cResult[18] = tmp4.buttonContainer;
            cResult[19] = tmp30;
            cResult[20] = tmp36;
            tmp33 = tmp36;
          }
          const obj14 = { size: "lg", text: tmp24, onPress: onConfirm, grow: true, icon: tmp26 };
          const tmp32 = hasOwnProperty(components_Button_Button.Button, obj14);
          cResult[15] = onConfirm;
          cResult[16] = tmp24;
          cResult[17] = tmp32;
          tmp30 = tmp32;
        }
        const tmp19 = hasOwnProperty(Text_Text.Text, {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: tmp4.title,
          children: tmp16,
        });
        cResult[8] = tmp4.title;
        cResult[9] = tmp16;
        cResult[10] = tmp19;
        tmp18 = tmp19;
      }
    : function PremiumDiscountOfferActionSheetContent(arg0) {
        ({ discountOffer, onConfirm } = arg0);
        const tmp = closure_7();
        const obj = { IconComponent: UserIcon.UserIcon, label: null, description: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.kpMomJ);
        const intl2 = util.intl;
        obj.description = intl2.string(util.t.uVUtPw);
        const items = [obj, ,];
        const obj2 = { IconComponent: ChatSmileIcon.ChatSmileIcon, label: null, description: null };
        const intl3 = util.intl;
        obj2.label = intl3.string(util.t["R2IV/Q"]);
        const intl4 = util.intl;
        obj2.description = intl4.string(util.t["3SUJLd"]);
        items[1] = obj2;
        const obj3 = { IconComponent: FolderIcon.FolderIcon, label: null, description: null };
        const intl5 = util.intl;
        obj3.label = intl5.string(util.t["u/NJKc"]);
        const obj5 = { legacyCopy: null, rolloutCopy: null };
        const intl6 = util.intl;
        obj5.legacyCopy = intl6.string(util.t.i1UuMk);
        const intl7 = util.intl;
        const obj6 = { maxFileSize: null };
        const obj4 = NitroFileUploadExperiments;
        obj6.maxFileSize = PremiumUtils.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false });
        obj5.rolloutCopy = intl7.formatToPlainString(util.t.PvqncD, obj6);
        obj3.description = obj4.getNitroFileUploadRolloutCopy(obj5);
        items[2] = obj3;
        const amount = discountOffer.discount.amount;
        const obj8 = { style: tmp.contentContainer, children: null };
        const items1 = [
          hasOwnProperty(View, {
            style: tmp.heroIllustrationContainer,
            children: hasOwnProperty(NitroWumpusFlightRight3dIllustration.NitroWumpusFlightRight3dIllustration, {
              width: 180,
              height: 180,
            }),
          }),
          ,
          ,
        ];
        const obj10 = {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: tmp.title,
          children: null,
        };
        const intl8 = util.intl;
        obj10.children = intl8.formatToPlainString(util.t.qowbUk, { percent: amount });
        items1[1] = hasOwnProperty(Text_Text.Text, obj10);
        items1[2] = hasOwnProperty(PremiumPerksListDefault, { perks: items });
        const obj11 = { style: tmp.buttonContainer, children: null };
        const obj12 = { size: "lg", text: null, onPress: null, grow: true, icon: null };
        const intl9 = util.intl;
        obj12.text = intl9.formatToPlainString(util.t.bkQ4bH, { percent: amount });
        obj12.onPress = onConfirm;
        const obj9 = {
          style: tmp.heroIllustrationContainer,
          children: hasOwnProperty(NitroWumpusFlightRight3dIllustration.NitroWumpusFlightRight3dIllustration, {
            width: 180,
            height: 180,
          }),
        };
        obj12.icon = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, {
          size: "md",
          color: nativeDefault.unsafe_rawColors.WHITE,
        });
        obj11.children = hasOwnProperty(components_Button_Button.Button, obj12);
        items1[3] = hasOwnProperty(View, obj11);
        obj8.children = items1;
        return timestampProducer(View, obj8);
      },
);
