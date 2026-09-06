// discord_app/modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils.tsx";
import _modDef13295 from "../../../../_runtime/metro/13295__.js";
import _modDef13339 from "../../../../_runtime/metro/13339__.js";
import _modDef13340 from "../../../../_runtime/metro/13340__.js";
import _modDef13341 from "../../../../_runtime/metro/13341__.js";
import _modDef13342 from "../../../../_runtime/metro/13342__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function WhatYouLoseItem(arg0) {
  ({ imageSource, text } = arg0);
  const tmp = closure_8();
  let obj = { style: tmp.item, children: null };
  const items = [timestampProducer(FastImageDefault, { source: imageSource })];
  obj = { variant: "text-md/medium", style: tmp.itemLabel, children: text };
  items[1] = timestampProducer(Text_Text.Text, obj);
  obj.children = items;
  return React5(View, obj);
}
const View = fn(17).View;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  body: { paddingTop: 24, paddingHorizontal: 24 },
  title: null,
  subtitle: null,
  item: null,
  itemLabel: null,
  footer: null,
  button: null,
  keepText: null,
};
createStyles = { marginBottom: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.title = createStyles;
createStyles.subtitle = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj1 = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.item = {
  marginBottom: 16,
  borderRadius: nativeDefault.radii.sm,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  padding: 16,
};
createStyles.itemLabel = { marginTop: 8 };
createStyles.footer = { paddingHorizontal: 16 };
createStyles.button = { marginBottom: 8 };
let obj2 = {
  marginBottom: 16,
  borderRadius: nativeDefault.radii.sm,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  padding: 16,
};
createStyles.keepText = { textAlign: "center", paddingVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_8 = createStyles.createStyles(createStyles);
let obj4 = { DOWNGRADE: 0, [0]: "DOWNGRADE", CANCEL: 1, [1]: "CANCEL" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx");

export default function PremiumPlanWhatYouLoseActionSheet(arg0) {
  ({ mode, onContinue: require, subscription } = arg0);
  let premiumTypeFromSubscription;
  const tmp = closure_8();
  let obj = require("PremiumUtils");
  premiumTypeFromSubscription = obj.getPremiumTypeFromSubscription(subscription);
  const analyticsLocations = subscription(premiumTypeFromSubscription[9])().analyticsLocations;
  let obj1 = require("WhatYouLoseProfileTier1");
  const whatYouLoseProfileTier1Source = obj1.useWhatYouLoseProfileTier1Source();
  subscription(premiumTypeFromSubscription[11])(null != premiumTypeFromSubscription, "Expected premium type");
  let items = [premiumTypeFromSubscription, whatYouLoseProfileTier1Source];
  const memo = analyticsLocations.useMemo(() => {
    if (PremiumTypes.TIER_0 === premiumTypeFromSubscription) {
      let obj = { imageSource: _modDef13339, text: null };
      const intl7 = util.intl;
      obj.text = intl7.format(util.t["0hUHi6"], {});
      const items = [obj];
      obj = { imageSource: _modDef13340, text: null };
      const intl8 = util.intl;
      obj.text = intl8.format(util.t.wFWO6D, {});
      items[1] = obj;
      return items;
    } else if (PremiumTypes.TIER_1 === premiumTypeFromSubscription) {
      const obj1 = { imageSource: whatYouLoseProfileTier1Source, text: null };
      const intl4 = util.intl;
      obj1.text = intl4.format(util.t.xCaYwE, {});
      const items1 = [obj1, ,];
      const obj2 = { imageSource: _modDef13295, text: null };
      const intl5 = util.intl;
      obj2.text = intl5.format(util.t.wK04T1, {});
      items1[1] = obj2;
      const obj3 = { imageSource: _modDef13341, text: null };
      const intl6 = util.intl;
      obj3.text = intl6.format(util.t.K4Hv69, {});
      items1[2] = obj3;
      return items1;
    } else if (PremiumTypes.TIER_2 === premiumTypeFromSubscription) {
      obj = { imageSource: _modDef13342, text: null };
      const intl = util.intl;
      obj.text = intl.format(util.t["gpqr+n"], {});
      const items2 = [obj, ,];
      obj4 = { imageSource: _modDef13341, text: null };
      const intl2 = util.intl;
      obj4.text = intl2.format(util.t.wRxEDW, {});
      items2[1] = obj4;
      const obj5 = { imageSource: _modDef13295, text: null };
      const intl3 = util.intl;
      obj5.text = intl3.format(util.t["4WZ7T2"], {});
      items2[2] = obj5;
      return items2;
    } else {
      return [];
    }
  }, items);
  let items1 = [
    closure_6(subscription(premiumTypeFromSubscription[20]), { premiumType: premiumTypeFromSubscription }),
    ,
  ];
  obj = { style: tmp.body, children: null };
  obj = { variant: "heading-xl/extrabold", style: tmp.title, children: null };
  if (mode === obj4.CANCEL) {
    let intl2 = require("util").intl;
    let stringResult = intl2.string(require("util").t.PWq8TL);
  } else {
    let intl = require("util").intl;
    stringResult = intl.string(require("util").t["7VcWW0"]);
  }
  obj.children = stringResult;
  let items2 = [closure_6(require("Text/Text").Text, obj), ,];
  obj1 = { variant: "text-md/medium", style: tmp.subtitle, children: null };
  if (mode === obj4.CANCEL) {
    let intl4 = require("util").intl;
    let obj2 = { subscriptionName: null };
    let tmp2Result = require("PremiumUtils");
    obj2.subscriptionName = tmp2Result.getPremiumTypeDisplayName(premiumTypeFromSubscription, true);
    let formatResult = intl4.format(require("util").t.jh5mUz, obj2);
  } else {
    let intl3 = require("util").intl;
    let obj3 = { subscriptionName: null };
    tmp2Result = require("PremiumUtils");
    obj3.subscriptionName = tmp2Result.getPremiumTypeDisplayName(premiumTypeFromSubscription, true);
    formatResult = intl3.format(require("util").t.Qk34Ik, obj3);
  }
  obj4 = { children: null };
  obj1.children = formatResult;
  items2[1] = closure_6(require("Text/Text").Text, obj1);
  items2[2] = memo.map((item, index) => {
    const merged = Object.assign(item);
    return closure_1_6(WhatYouLoseItem, {}, index);
  });
  obj.children = items2;
  items1[1] = closure_7(whatYouLoseProfileTier1Source, obj);
  let obj5 = { style: tmp.footer, children: null };
  const obj6 = { style: tmp.button, children: null };
  const obj7 = { text: null, grow: true, onPress: null };
  let intl5 = require("util").intl;
  obj7.text = intl5.string(require("util").t["3PatSz"]);
  obj7.onPress = function onPress() {
    closure_1_0(PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE]);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  obj6.children = closure_6(require("components/Button/Button").Button, obj7);
  const items3 = [closure_6(whatYouLoseProfileTier1Source, obj6)];
  const obj8 = {
    variant: "text-sm/medium",
    style: tmp.keepText,
    onPress() {
      const obj = {
        subscription,
        analyticsLocations,
        fromStep: PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE],
        toStep: null,
      };
      const result = obj.trackPremiumSubscriptionCancellationFlowStep(obj);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    children: null,
  };
  let intl6 = require("util").intl;
  obj8.children = intl6.string(require("util").t.rzVN6j);
  items3[1] = closure_6(require("Text/Text").Text, obj8);
  obj5.children = items3;
  items1[2] = closure_7(whatYouLoseProfileTier1Source, obj5);
  obj4.children = items1;
  return closure_7(require("Sheet/BottomSheet").BottomSheet, obj4);
}
export const WhatYouLoseMode = obj4;
