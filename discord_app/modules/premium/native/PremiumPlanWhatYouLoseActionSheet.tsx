// discord_app/modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils.tsx";
import _modDef13433 from "../../../../_runtime/metro/13433__.js";
import _modDef13475 from "../../../../_runtime/metro/13475__.js";
import _modDef13476 from "../../../../_runtime/metro/13476__.js";
import _modDef13477 from "../../../../_runtime/metro/13477__.js";
import _modDef13478 from "../../../../_runtime/metro/13478__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function WhatYouLoseItem(arg0) {
  ({ imageSource, text } = arg0);
  const tmp = closure_8();
  const obj = { style: tmp.item, children: null };
  const items = [
    timestampProducer(FastImageDefault, { source: imageSource }),
    timestampProducer(Text_Text.Text, { variant: "text-md/medium", style: tmp.itemLabel, children: text }),
  ];
  obj.children = items;
  return React5(View, obj);
}
const View = fn(17).View;
const PremiumTypes = fn(1374).PremiumTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  body: { paddingTop: 24, paddingHorizontal: 24 },
  title: { marginBottom: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY },
  subtitle: null,
  item: null,
  itemLabel: null,
  footer: null,
  button: null,
  keepText: null,
};
let obj3 = { marginBottom: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.subtitle = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj4 = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.item = {
  marginBottom: 16,
  borderRadius: nativeDefault.radii.sm,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  padding: 16,
};
obj2.itemLabel = { marginTop: 8 };
obj2.footer = { paddingHorizontal: 16 };
obj2.button = { marginBottom: 8 };
let obj5 = {
  marginBottom: 16,
  borderRadius: nativeDefault.radii.sm,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  padding: 16,
};
obj2.keepText = { textAlign: "center", paddingVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_8 = createStyles.createStyles(obj2);
let obj7 = { DOWNGRADE: 0, [0]: "DOWNGRADE", CANCEL: 1, [1]: "CANCEL" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx");

export default function PremiumPlanWhatYouLoseActionSheet(arg0) {
  ({ mode, onContinue: require, subscription } = arg0);
  let premiumTypeFromSubscription;
  const tmp = closure_8();
  premiumTypeFromSubscription = require("PremiumUtils").getPremiumTypeFromSubscription(subscription);
  const analyticsLocations = subscription(premiumTypeFromSubscription[9])().analyticsLocations;
  let obj = require("PremiumUtils");
  const whatYouLoseProfileTier1Source = require("WhatYouLoseProfileTier1").useWhatYouLoseProfileTier1Source();
  subscription(premiumTypeFromSubscription[11])(null != premiumTypeFromSubscription, "Expected premium type");
  let items = [premiumTypeFromSubscription, whatYouLoseProfileTier1Source];
  const memo = analyticsLocations.useMemo(() => {
    if (PremiumTypes.TIER_0 === premiumTypeFromSubscription) {
      const obj2 = { imageSource: _modDef13475, text: null };
      const intl7 = util.intl;
      obj2.text = intl7.format(util.t["0hUHi6"], {});
      const items = [obj2];
      const obj3 = { imageSource: _modDef13476, text: null };
      const intl8 = util.intl;
      obj3.text = intl8.format(util.t.wFWO6D, {});
      items[1] = obj3;
      return items;
    } else if (PremiumTypes.TIER_1 === premiumTypeFromSubscription) {
      const obj4 = { imageSource: whatYouLoseProfileTier1Source, text: null };
      const intl4 = util.intl;
      obj4.text = intl4.format(util.t.xCaYwE, {});
      const items1 = [obj4, ,];
      const obj5 = { imageSource: _modDef13433, text: null };
      const intl5 = util.intl;
      obj5.text = intl5.format(util.t.wK04T1, {});
      items1[1] = obj5;
      const obj6 = { imageSource: _modDef13477, text: null };
      const intl6 = util.intl;
      obj6.text = intl6.format(util.t.K4Hv69, {});
      items1[2] = obj6;
      return items1;
    } else if (PremiumTypes.TIER_2 === premiumTypeFromSubscription) {
      const obj = { imageSource: _modDef13478, text: null };
      const intl = util.intl;
      obj.text = intl.format(util.t["gpqr+n"], {});
      const items2 = [obj, ,];
      obj7 = { imageSource: _modDef13477, text: null };
      const intl2 = util.intl;
      obj7.text = intl2.format(util.t.wRxEDW, {});
      items2[1] = obj7;
      const obj8 = { imageSource: _modDef13433, text: null };
      const intl3 = util.intl;
      obj8.text = intl3.format(util.t["4WZ7T2"], {});
      items2[2] = obj8;
      return items2;
    } else {
      return [];
    }
  }, items);
  let items1 = [
    closure_6(subscription(premiumTypeFromSubscription[20]), { premiumType: premiumTypeFromSubscription }),
    ,
  ];
  let obj3 = { style: tmp.body, children: null };
  let obj4 = { variant: "heading-xl/extrabold", style: tmp.title, children: null };
  if (mode === obj7.CANCEL) {
    let intl2 = require("util").intl;
    let stringResult = intl2.string(require("util").t.PWq8TL);
  } else {
    let intl = require("util").intl;
    stringResult = intl.string(require("util").t["7VcWW0"]);
  }
  obj4.children = stringResult;
  let items2 = [closure_6(require("Text/Text").Text, obj4), ,];
  let obj5 = { variant: "text-md/medium", style: tmp.subtitle, children: null };
  if (mode === obj7.CANCEL) {
    let intl4 = require("util").intl;
    let obj6 = {
      subscriptionName: require("PremiumUtils").getPremiumTypeDisplayName(premiumTypeFromSubscription, true),
    };
    let formatResult = intl4.format(require("util").t.jh5mUz, obj6);
    const tmp2Result = require("PremiumUtils");
  } else {
    let intl3 = require("util").intl;
    obj7 = { subscriptionName: require("PremiumUtils").getPremiumTypeDisplayName(premiumTypeFromSubscription, true) };
    formatResult = intl3.format(require("util").t.Qk34Ik, obj7);
    const tmp2Result2 = require("PremiumUtils");
  }
  let obj8 = { children: null };
  obj5.children = formatResult;
  items2[1] = closure_6(require("Text/Text").Text, obj5);
  items2[2] = memo.map((item, index) => {
    const merged = Object.assign(item);
    return closure_1_6(WhatYouLoseItem, {}, index);
  });
  obj3.children = items2;
  items1[1] = closure_7(whatYouLoseProfileTier1Source, obj3);
  const obj9 = { style: tmp.footer, children: null };
  const obj10 = { style: tmp.button, children: null };
  const obj11 = { text: null, grow: true, onPress: null };
  let intl5 = require("util").intl;
  obj11.text = intl5.string(require("util").t["3PatSz"]);
  obj11.onPress = function onPress() {
    closure_1_0(PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE]);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  obj10.children = closure_6(require("components/Button/Button").Button, obj11);
  const items3 = [closure_6(whatYouLoseProfileTier1Source, obj10)];
  const obj12 = {
    variant: "text-sm/medium",
    style: tmp.keepText,
    onPress() {
      const obj = PremiumAnalyticsUtils;
      const result = obj.trackPremiumSubscriptionCancellationFlowStep({
        subscription,
        analyticsLocations,
        fromStep: PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE],
        toStep: null,
      });
      const obj2 = {
        subscription,
        analyticsLocations,
        fromStep: PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE],
        toStep: null,
      };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    children: null,
  };
  let intl6 = require("util").intl;
  obj12.children = intl6.string(require("util").t.rzVN6j);
  items3[1] = closure_6(require("Text/Text").Text, obj12);
  obj9.children = items3;
  items1[2] = closure_7(whatYouLoseProfileTier1Source, obj9);
  obj8.children = items1;
  return closure_7(require("Sheet/BottomSheet").BottomSheet, obj8);
}
export const WhatYouLoseMode = obj7;
