// discord_app/modules/premium/native/trials/PremiumTrialOfferActionSheetContent.tsx
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
    ? (arg0) => {
        let PvqncD;
        let first;
        let formatToPlainString;
        let getNitroFileUploadRolloutCopy;
        let intervalDuration;
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let intl5;
        let intl6;
        let items1;
        let obj5;
        let obj6;
        let onConfirm;
        let tmp11;
        let tmp14;
        let tmp7;
        let tmp8;
        let tmpResult3;
        let trialOffer;
        const obj = react2;
        const cResult = obj.c(27);
        ({ trialOffer, intervalDuration, onConfirm } = arg0);
        const tmp4 = closure_7();
        let subscriptionTrial;
        if (trialOffer != null) {
          subscriptionTrial = trialOffer.subscriptionTrial;
        }
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
          tmp7 = obj3;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [first, tmp7];
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
          obj6 = { maxFileSize: tmpResult3.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false }) };
          PvqncD = intl10.t.PvqncD;
          items[2] = obj4;
          cResult[2] = items;
          tmp8 = items;
          tmpResult3 = PremiumUtils;
        } else {
          tmp8 = cResult[2];
        }
        const contentContainer = tmp4.contentContainer;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = hasOwnProperty(NitroWumpusFlightRight3dIllustration.NitroWumpusFlightRight3dIllustration, {
            width: 180,
            height: 180,
          });
          cResult[3] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== tmp4.heroIllustrationContainer) {
          const obj7 = { style: tmp4.heroIllustrationContainer, children: tmp11 };
          const tmp17 = hasOwnProperty(View, obj7);
          cResult[4] = tmp4.heroIllustrationContainer;
          cResult[5] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[5];
        }
        if (cResult[6] === intervalDuration) {
          let tmp21;
          let skuId;
          const tmp19 = cResult[7];
          if (subscriptionTrial != null) {
            skuId = subscriptionTrial.skuId;
          }
          if (tmp19 === skuId) {
            tmp21 = cResult[8];
          }
          if (cResult[9] === tmp4.title) {
            let tmp28;
            let tmp31;
            let tmp35;
            let tmp37;
            if (cResult[10] === tmp21) {
              tmp28 = cResult[11];
            }
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const obj8 = { perks: tmp8 };
              const tmp34 = hasOwnProperty(PremiumPerksListDefault, obj8);
              cResult[12] = tmp34;
              tmp31 = tmp34;
            } else {
              tmp31 = cResult[12];
            }
            const buttonContainer = tmp4.buttonContainer;
            if (cResult[13] !== intervalDuration) {
              const intl9 = intl10.intl;
              const obj9 = { duration: intervalDuration };
              const formatToPlainStringResult = intl9.formatToPlainString(intl10.t.xASjq5, obj9);
              cResult[13] = intervalDuration;
              cResult[14] = formatToPlainStringResult;
              tmp35 = formatToPlainStringResult;
            } else {
              tmp35 = cResult[14];
            }
            const _Symbol2 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const obj10 = { size: "md", color: nativeDefault.unsafe_rawColors.WHITE };
              const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
              const tmp40 = hasOwnProperty(NitroWheelIcon, obj10);
              cResult[15] = tmp40;
              tmp37 = tmp40;
            } else {
              tmp37 = cResult[15];
            }
            if (cResult[16] === onConfirm) {
              let tmp41;
              if (cResult[17] === tmp35) {
                tmp41 = cResult[18];
              }
              if (cResult[19] === tmp4.buttonContainer) {
                let tmp44;
                if (cResult[20] === tmp41) {
                  tmp44 = cResult[21];
                }
                if (cResult[22] === tmp4.contentContainer) {
                  if (cResult[23] === tmp44) {
                    if (cResult[24] === tmp14) {
                      let tmp48;
                      if (cResult[25] === tmp28) {
                        tmp48 = cResult[26];
                      }
                      return tmp48;
                    }
                  }
                }
                const obj11 = { style: contentContainer, children: items1 };
                items1 = [tmp14, tmp28, tmp31, tmp44];
                const tmp51 = metroRequire(View, obj11);
                cResult[22] = tmp4.contentContainer;
                cResult[23] = tmp44;
                cResult[24] = tmp14;
                cResult[25] = tmp28;
                cResult[26] = tmp51;
                tmp48 = tmp51;
              }
              const obj12 = { style: buttonContainer, children: tmp41 };
              const tmp47 = hasOwnProperty(View, obj12);
              cResult[19] = tmp4.buttonContainer;
              cResult[20] = tmp41;
              cResult[21] = tmp47;
              tmp44 = tmp47;
            }
            const obj13 = { size: "lg", text: tmp35, onPress: onConfirm, grow: true, icon: tmp37 };
            const tmp43 = hasOwnProperty(components_Button_Button.Button, obj13);
            cResult[16] = onConfirm;
            cResult[17] = tmp35;
            cResult[18] = tmp43;
            tmp41 = tmp43;
          }
          const obj14 = {
            variant: "heading-xl/bold",
            color: "mobile-text-heading-primary",
            style: tmp18,
            children: tmp21,
          };
          const tmp30 = hasOwnProperty(Text_Text.Text, obj14);
          cResult[9] = tmp4.title;
          cResult[10] = tmp21;
          cResult[11] = tmp30;
          tmp28 = tmp30;
        }
        const intl8 = intl10.intl;
        const formatToPlainString2 = intl8.formatToPlainString;
        let skuId1;
        const q8eMc0 = intl10.t.q8eMc0;
        if (subscriptionTrial != null) {
          skuId1 = subscriptionTrial.skuId;
        }
        let displayNameFromSku = null;
        if (null != skuId1) {
          let skuId2;
          const getDisplayNameFromSku = PremiumUtils.getDisplayNameFromSku;
          PremiumUtils;
          if (subscriptionTrial != null) {
            skuId2 = subscriptionTrial.skuId;
          }
          displayNameFromSku = getDisplayNameFromSku(skuId2);
        }
        const formatToPlainString2Result = formatToPlainString2(q8eMc0, {
          displayName: displayNameFromSku,
          duration: intervalDuration,
        });
        cResult[6] = intervalDuration;
        let skuId3;
        if (subscriptionTrial != null) {
          skuId3 = subscriptionTrial.skuId;
        }
        cResult[7] = skuId3;
        cResult[8] = formatToPlainString2Result;
        tmp21 = formatToPlainString2Result;
      }
    : (onConfirm) => {
        let Button;
        let NitroWheelIcon;
        let PvqncD;
        let displayNameFromSku;
        let formatToPlainString;
        let formatToPlainString2;
        let getNitroFileUploadRolloutCopy;
        let intervalDuration;
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let intl5;
        let intl6;
        let intl9;
        let items1;
        let obj11;
        let obj12;
        let obj4;
        let obj5;
        let obj6;
        let q8eMc0;
        let trialOffer;
        ({ trialOffer, intervalDuration } = onConfirm);
        onConfirm = onConfirm.onConfirm;
        const tmp = closure_7();
        let subscriptionTrial;
        if (trialOffer != null) {
          subscriptionTrial = trialOffer.subscriptionTrial;
        }
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
          children: formatToPlainString2(q8eMc0, { displayName: displayNameFromSku, duration: intervalDuration }),
        };
        const Text = Text_Text.Text;
        const intl8 = intl10.intl;
        formatToPlainString2 = intl8.formatToPlainString;
        let skuId;
        q8eMc0 = intl10.t.q8eMc0;
        if (subscriptionTrial != null) {
          skuId = subscriptionTrial.skuId;
        }
        displayNameFromSku = null;
        if (null != skuId) {
          let skuId1;
          const getDisplayNameFromSku = PremiumUtils.getDisplayNameFromSku;
          PremiumUtils;
          if (subscriptionTrial != null) {
            skuId1 = subscriptionTrial.skuId;
          }
          displayNameFromSku = getDisplayNameFromSku(skuId1);
        }
        items1[1] = hasOwnProperty(Text, obj9);
        items1[2] = hasOwnProperty(PremiumPerksListDefault, { perks: items });
        const obj10 = { style: tmp.buttonContainer, children: hasOwnProperty(Button, obj11) };
        obj11 = {
          size: "lg",
          text: intl9.formatToPlainString(intl10.t.xASjq5, { duration: intervalDuration }),
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
const result = size.fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheetContent.tsx");

export default memoResult;
