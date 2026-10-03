// discord_app/modules/premium/native/trials/PremiumTrialOfferActionSheetContent.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FolderIcon from "../../../../design/components/Icon/native/redesign/generated/FolderIcon.tsx";
import NitroFileUploadExperiments from "../../experiments/NitroFileUploadExperiments.tsx";
import NitroWheelIcon from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import ChatSmileIcon from "../../../../design/components/Icon/native/redesign/generated/ChatSmileIcon.tsx";
import UserIcon from "../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import NitroWumpusFlightRight3dIllustration from "../../../../design/components/mana-assets/native/generated/NitroWumpusFlightRight3dIllustration.native.tsx";
import PremiumPerksListDefault from "../../../../components_native/premium/PremiumPerksList.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1379).PremiumTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
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
const result = size.fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheetContent.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(27);
        ({ trialOffer, intervalDuration, onConfirm } = arg0);
        const tmp4 = closure_7();
        let subscriptionTrial;
        if (trialOffer != null) {
          subscriptionTrial = trialOffer.subscriptionTrial;
        }
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
          let tmp7 = obj3;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [first, tmp7];
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
          let tmp8 = items;
          const tmpResult3 = PremiumUtils;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp12 = hasOwnProperty(NitroWumpusFlightRight3dIllustration.NitroWumpusFlightRight3dIllustration, {
            width: 180,
            height: 180,
          });
          cResult[3] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp4.heroIllustrationContainer) {
          const obj7 = { style: tmp4.heroIllustrationContainer, children: tmp10 };
          const tmp16 = hasOwnProperty(View, obj7);
          cResult[4] = tmp4.heroIllustrationContainer;
          cResult[5] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] === intervalDuration) {
          let skuId;
          if (subscriptionTrial != null) {
            skuId = subscriptionTrial.skuId;
          }
          if (cResult[7] === skuId) {
            let tmp19 = cResult[8];
          }
          if (cResult[9] === tmp4.title) {
            if (cResult[10] === tmp19) {
              let tmp25 = cResult[11];
            }
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const obj8 = { perks: tmp8 };
              const tmp31 = hasOwnProperty(PremiumPerksListDefault, obj8);
              cResult[12] = tmp31;
              let tmp28 = tmp31;
            } else {
              tmp28 = cResult[12];
            }
            if (cResult[13] !== intervalDuration) {
              const intl9 = util.intl;
              const obj9 = { duration: intervalDuration };
              const formatToPlainStringResult = intl9.formatToPlainString(util.t.xASjq5, obj9);
              cResult[13] = intervalDuration;
              cResult[14] = formatToPlainStringResult;
              let tmp32 = formatToPlainStringResult;
            } else {
              tmp32 = cResult[14];
            }
            const _Symbol2 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const obj10 = { size: "md", color: nativeDefault.unsafe_rawColors.WHITE };
              const tmp37 = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj10);
              cResult[15] = tmp37;
              let tmp34 = tmp37;
            } else {
              tmp34 = cResult[15];
            }
            if (cResult[16] === onConfirm) {
              if (cResult[17] === tmp32) {
                let tmp38 = cResult[18];
              }
              if (cResult[19] === tmp4.buttonContainer) {
                if (cResult[20] === tmp38) {
                  let tmp41 = cResult[21];
                }
                if (cResult[22] === tmp4.contentContainer) {
                  if (cResult[23] === tmp41) {
                    if (cResult[24] === tmp13) {
                      if (cResult[25] === tmp25) {
                        let tmp45 = cResult[26];
                      }
                      return tmp45;
                    }
                  }
                }
                const obj11 = { style: tmp4.contentContainer, children: null };
                const items1 = [tmp13, tmp25, tmp28, tmp41];
                obj11.children = items1;
                const tmp48 = timestampProducer(View, obj11);
                cResult[22] = tmp4.contentContainer;
                cResult[23] = tmp41;
                cResult[24] = tmp13;
                cResult[25] = tmp25;
                cResult[26] = tmp48;
                tmp45 = tmp48;
              }
              const obj12 = { style: tmp4.buttonContainer, children: tmp38 };
              const tmp44 = hasOwnProperty(View, obj12);
              cResult[19] = tmp4.buttonContainer;
              cResult[20] = tmp38;
              cResult[21] = tmp44;
              tmp41 = tmp44;
            }
            const obj13 = { size: "lg", text: tmp32, onPress: onConfirm, grow: true, icon: tmp34 };
            const tmp40 = hasOwnProperty(components_Button_Button.Button, obj13);
            cResult[16] = onConfirm;
            cResult[17] = tmp32;
            cResult[18] = tmp40;
            tmp38 = tmp40;
          }
          const obj14 = {
            variant: "heading-xl/bold",
            color: "mobile-text-heading-primary",
            style: tmp17,
            children: tmp19,
          };
          const tmp27 = hasOwnProperty(Text_Text.Text, obj14);
          cResult[9] = tmp4.title;
          cResult[10] = tmp19;
          cResult[11] = tmp27;
          tmp25 = tmp27;
        }
        const intl8 = util.intl;
        let skuId1;
        if (subscriptionTrial != null) {
          skuId1 = subscriptionTrial.skuId;
        }
        let displayNameFromSku = null;
        if (null != skuId1) {
          let skuId2;
          if (subscriptionTrial != null) {
            skuId2 = subscriptionTrial.skuId;
          }
          displayNameFromSku = PremiumUtils.getDisplayNameFromSku(skuId2);
          const tmpResult4 = PremiumUtils;
        }
        const formatToPlainStringResult1 = intl8.formatToPlainString(util.t.q8eMc0, {
          displayName: displayNameFromSku,
          duration: intervalDuration,
        });
        cResult[6] = intervalDuration;
        let skuId3;
        if (subscriptionTrial != null) {
          skuId3 = subscriptionTrial.skuId;
        }
        cResult[7] = skuId3;
        cResult[8] = formatToPlainStringResult1;
        tmp19 = formatToPlainStringResult1;
      }
    : (onConfirm) => {
        ({ trialOffer, intervalDuration } = onConfirm);
        const tmp = closure_7();
        let subscriptionTrial;
        if (trialOffer != null) {
          subscriptionTrial = trialOffer.subscriptionTrial;
        }
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
        let skuId;
        if (subscriptionTrial != null) {
          skuId = subscriptionTrial.skuId;
        }
        let displayNameFromSku = null;
        if (null != skuId) {
          let skuId1;
          if (subscriptionTrial != null) {
            skuId1 = subscriptionTrial.skuId;
          }
          displayNameFromSku = PremiumUtils.getDisplayNameFromSku(skuId1);
          const tmp3Result = PremiumUtils;
        }
        obj10.children = intl8.formatToPlainString(util.t.q8eMc0, {
          displayName: displayNameFromSku,
          duration: intervalDuration,
        });
        items1[1] = hasOwnProperty(Text_Text.Text, obj10);
        items1[2] = hasOwnProperty(PremiumPerksListDefault, { perks: items });
        const obj11 = { style: tmp.buttonContainer, children: null };
        const obj12 = { size: "lg", text: null, onPress: null, grow: true, icon: null };
        const intl9 = util.intl;
        obj12.text = intl9.formatToPlainString(util.t.xASjq5, { duration: intervalDuration });
        obj12.onPress = onConfirm.onConfirm;
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
