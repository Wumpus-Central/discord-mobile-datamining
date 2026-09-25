// discord_app/modules/premium/native/trials/PremiumTrialOfferActionSheetContent.tsx
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
const PremiumTypes = fn(1374).PremiumTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
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

export default noop.memo(function PremiumTrialOfferActionSheetContent(onConfirm) {
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
  const obj10 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
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
});
