// discord_app/modules/premium/native/discounts/PremiumDiscountOfferActionSheetContent.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl10 from "../../../../intl/index.native.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FolderIcon from "../../../../design/components/Icon/native/redesign/generated/FolderIcon.tsx";
import NitroFileUploadExperiments from "../../experiments/NitroFileUploadExperiments.tsx";
import NitroWheelIcon2 from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import ChatSmileIcon from "../../../../design/components/Icon/native/redesign/generated/ChatSmileIcon.tsx";
import UserIcon from "../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import NitroWumpusFlightRight3dIllustration from "../../../../design/components/mana-assets/native/generated/NitroWumpusFlightRight3dIllustration.native.tsx";
import PremiumPerksListDefault from "../../../../components_native/premium/PremiumPerksList.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {
  contentContainer: obj2,
  buttonContainer: { marginVertical: 6, width: "100%", height: 48 },
  title: { width: "100%", textAlign: "center" },
  heroIllustrationContainer: { alignItems: "center", justifyContent: "center", height: 188, width: "100%" },
};
obj2 = {
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
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onConfirm) => {
        let PvqncD;
        let first;
        let formatToPlainString;
        let getNitroFileUploadRolloutCopy;
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let intl5;
        let intl6;
        let items1;
        let obj5;
        let obj6;
        let tmp10;
        let tmp13;
        let tmp17;
        let tmp6;
        let tmp7;
        let tmpResult2;
        const obj = react2;
        const cResult = obj.c(26);
        onConfirm = onConfirm.onConfirm;
        const discountOffer = onConfirm.discountOffer;
        const tmp4 = closure_7();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = {
            IconComponent: UserIcon.UserIcon,
            label: intl.string(intl10.t.kpMomJ),
            description: intl2.string(intl10.t.uVUtPw),
          };
          intl = intl10.intl;
          intl2 = intl10.intl;
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            IconComponent: ChatSmileIcon.ChatSmileIcon,
            label: intl3.string(intl10.t["R2IV/Q"]),
            description: intl4.string(intl10.t["3SUJLd"]),
          };
          intl3 = intl10.intl;
          intl4 = intl10.intl;
          cResult[1] = obj3;
          tmp6 = obj3;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [first, tmp6];
          const obj4 = {
            IconComponent: FolderIcon.FolderIcon,
            label: intl5.string(intl10.t["u/NJKc"]),
            description: getNitroFileUploadRolloutCopy(obj5),
          };
          intl5 = intl10.intl;
          obj5 = { legacyCopy: intl6.string(intl10.t.i1UuMk), rolloutCopy: formatToPlainString(PvqncD, obj6) };
          getNitroFileUploadRolloutCopy = NitroFileUploadExperiments.getNitroFileUploadRolloutCopy;
          NitroFileUploadExperiments;
          intl6 = intl10.intl;
          const intl7 = intl10.intl;
          formatToPlainString = intl7.formatToPlainString;
          obj6 = { maxFileSize: tmpResult2.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false }) };
          PvqncD = intl10.t.PvqncD;
          items[2] = obj4;
          cResult[2] = items;
          tmp7 = items;
          tmpResult2 = PremiumUtils;
        } else {
          tmp7 = cResult[2];
        }
        const amount = discountOffer.discount.amount;
        const contentContainer = tmp4.contentContainer;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp12 = hasOwnProperty(NitroWumpusFlightRight3dIllustration.NitroWumpusFlightRight3dIllustration, {
            width: 180,
            height: 180,
          });
          cResult[3] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp4.heroIllustrationContainer) {
          const obj7 = { style: tmp4.heroIllustrationContainer, children: tmp10 };
          const tmp16 = hasOwnProperty(View, obj7);
          cResult[4] = tmp4.heroIllustrationContainer;
          cResult[5] = tmp16;
          tmp13 = tmp16;
        } else {
          tmp13 = cResult[5];
        }
        const title = tmp4.title;
        if (cResult[6] !== amount) {
          const intl8 = intl10.intl;
          const obj8 = { percent: amount };
          const formatToPlainStringResult = intl8.formatToPlainString(intl10.t.qowbUk, obj8);
          cResult[6] = amount;
          cResult[7] = formatToPlainStringResult;
          tmp17 = formatToPlainStringResult;
        } else {
          tmp17 = cResult[7];
        }
        if (cResult[8] === tmp4.title) {
          let tmp19;
          let tmp21;
          let tmp25;
          let tmp27;
          if (cResult[9] === tmp17) {
            tmp19 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj9 = { perks: tmp7 };
            const tmp24 = hasOwnProperty(PremiumPerksListDefault, obj9);
            cResult[11] = tmp24;
            tmp21 = tmp24;
          } else {
            tmp21 = cResult[11];
          }
          const buttonContainer = tmp4.buttonContainer;
          if (cResult[12] !== amount) {
            const intl9 = intl10.intl;
            const obj10 = { percent: amount };
            const formatToPlainStringResult1 = intl9.formatToPlainString(intl10.t.bkQ4bH, obj10);
            cResult[12] = amount;
            cResult[13] = formatToPlainStringResult1;
            tmp25 = formatToPlainStringResult1;
          } else {
            tmp25 = cResult[13];
          }
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const obj11 = { size: "md", color: nativeDefault.unsafe_rawColors.WHITE };
            const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
            const tmp30 = hasOwnProperty(NitroWheelIcon, obj11);
            cResult[14] = tmp30;
            tmp27 = tmp30;
          } else {
            tmp27 = cResult[14];
          }
          if (cResult[15] === onConfirm) {
            let tmp31;
            if (cResult[16] === tmp25) {
              tmp31 = cResult[17];
            }
            if (cResult[18] === tmp4.buttonContainer) {
              let tmp34;
              if (cResult[19] === tmp31) {
                tmp34 = cResult[20];
              }
              if (cResult[21] === tmp4.contentContainer) {
                if (cResult[22] === tmp34) {
                  if (cResult[23] === tmp13) {
                    let tmp38;
                    if (cResult[24] === tmp19) {
                      tmp38 = cResult[25];
                    }
                    return tmp38;
                  }
                }
              }
              const obj12 = { style: contentContainer, children: items1 };
              items1 = [tmp13, tmp19, tmp21, tmp34];
              const tmp41 = metroRequire(View, obj12);
              cResult[21] = tmp4.contentContainer;
              cResult[22] = tmp34;
              cResult[23] = tmp13;
              cResult[24] = tmp19;
              cResult[25] = tmp41;
              tmp38 = tmp41;
            }
            const obj13 = { style: buttonContainer, children: tmp31 };
            const tmp37 = hasOwnProperty(View, obj13);
            cResult[18] = tmp4.buttonContainer;
            cResult[19] = tmp31;
            cResult[20] = tmp37;
            tmp34 = tmp37;
          }
          const obj14 = { size: "lg", text: tmp25, onPress: onConfirm, grow: true, icon: tmp27 };
          const tmp33 = hasOwnProperty(components_Button_Button.Button, obj14);
          cResult[15] = onConfirm;
          cResult[16] = tmp25;
          cResult[17] = tmp33;
          tmp31 = tmp33;
        }
        const tmp20 = hasOwnProperty(Text_Text.Text, {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: title,
          children: tmp17,
        });
        cResult[8] = tmp4.title;
        cResult[9] = tmp17;
        cResult[10] = tmp20;
        tmp19 = tmp20;
      }
    : (arg0) => {
        let Button;
        let NitroWheelIcon;
        let PvqncD;
        let discountOffer;
        let formatToPlainString;
        let getNitroFileUploadRolloutCopy;
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let intl5;
        let intl6;
        let intl8;
        let intl9;
        let items1;
        let obj11;
        let obj12;
        let obj4;
        let obj5;
        let obj6;
        let onConfirm;
        ({ discountOffer, onConfirm } = arg0);
        const tmp = closure_7();
        const obj = {
          IconComponent: UserIcon.UserIcon,
          label: intl.string(intl10.t.kpMomJ),
          description: intl2.string(intl10.t.uVUtPw),
        };
        intl = intl10.intl;
        intl2 = intl10.intl;
        const items = [obj, ,];
        const obj2 = {
          IconComponent: ChatSmileIcon.ChatSmileIcon,
          label: intl3.string(intl10.t["R2IV/Q"]),
          description: intl4.string(intl10.t["3SUJLd"]),
        };
        intl3 = intl10.intl;
        intl4 = intl10.intl;
        items[1] = obj2;
        const obj3 = {
          IconComponent: FolderIcon.FolderIcon,
          label: intl5.string(intl10.t["u/NJKc"]),
          description: getNitroFileUploadRolloutCopy(obj4),
        };
        intl5 = intl10.intl;
        obj4 = { legacyCopy: intl6.string(intl10.t.i1UuMk), rolloutCopy: formatToPlainString(PvqncD, obj5) };
        getNitroFileUploadRolloutCopy = NitroFileUploadExperiments.getNitroFileUploadRolloutCopy;
        NitroFileUploadExperiments;
        intl6 = intl10.intl;
        const intl7 = intl10.intl;
        formatToPlainString = intl7.formatToPlainString;
        obj5 = { maxFileSize: obj6.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false }) };
        PvqncD = intl10.t.PvqncD;
        items[2] = obj3;
        const amount = discountOffer.discount.amount;
        const obj7 = { style: tmp.contentContainer, children: items1 };
        items1 = [, , ,];
        obj6 = PremiumUtils;
        const obj8 = {
          style: tmp.heroIllustrationContainer,
          children: hasOwnProperty(NitroWumpusFlightRight3dIllustration.NitroWumpusFlightRight3dIllustration, {
            width: 180,
            height: 180,
          }),
        };
        items1[0] = hasOwnProperty(View, obj8);
        const obj9 = {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: tmp.title,
          children: intl8.formatToPlainString(intl10.t.qowbUk, { percent: amount }),
        };
        const Text = Text_Text.Text;
        intl8 = intl10.intl;
        items1[1] = hasOwnProperty(Text, obj9);
        items1[2] = hasOwnProperty(PremiumPerksListDefault, { perks: items });
        const obj10 = { style: tmp.buttonContainer, children: hasOwnProperty(Button, obj11) };
        obj11 = {
          size: "lg",
          text: intl9.formatToPlainString(intl10.t.bkQ4bH, { percent: amount }),
          onPress: onConfirm,
          grow: true,
          icon: hasOwnProperty(NitroWheelIcon, obj12),
        };
        Button = components_Button_Button.Button;
        intl9 = intl10.intl;
        obj12 = { size: "md", color: nativeDefault.unsafe_rawColors.WHITE };
        NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
        items1[3] = hasOwnProperty(View, obj10);
        return metroRequire(View, obj7);
      },
);
const result = size.fileFinishedImporting(
  "modules/premium/native/discounts/PremiumDiscountOfferActionSheetContent.tsx",
);

export default memoResult;
