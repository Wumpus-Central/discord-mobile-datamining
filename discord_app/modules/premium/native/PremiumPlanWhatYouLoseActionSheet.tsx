// === Module 7944: WhatYouLoseItem ===

// Module 7944 (WhatYouLoseItem)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4739 */;
import preloadDefault from "preload" /* 5454 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function WhatYouLoseItem(arg0) {
  ({ imageSource, text } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.item, children: null };
  const items = [callback(preloadDefault, { source: imageSource }), ];
  obj = { variant: "text-md/medium", style: tmp.itemLabel, children: text };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { body: { paddingTop: 24, paddingHorizontal: 24 }, title: null, subtitle: null, item: null, itemLabel: null, footer: null, button: null, keepText: null };
createCacheKey = { marginBottom: 8, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginBottom: 16, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj1 = { marginBottom: 16, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = { marginBottom: 16, borderRadius: ThemesDefault.radii.sm, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16 };
createCacheKey[4] = { marginTop: 8 };
createCacheKey[5] = { paddingHorizontal: 16 };
createCacheKey[6] = { marginBottom: 8 };
let obj2 = { marginBottom: 16, borderRadius: ThemesDefault.radii.sm, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16 };
createCacheKey[7] = { textAlign: "center", paddingVertical: 8, color: ThemesDefault.colors.TEXT_SUBTLE };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj4 = { DOWNGRADE: 0, [0]: "DOWNGRADE", CANCEL: 1, [1]: "CANCEL" };
let obj3 = { textAlign: "center", paddingVertical: 8, color: ThemesDefault.colors.TEXT_SUBTLE };
let result = require("set").fileFinishedImporting("modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx");

export default function PremiumPlanWhatYouLoseActionSheet(arg0) {
  ({ mode, onContinue: require, subscription } = arg0);
  let premiumTypeFromSubscription;
  let analyticsLocations;
  let whatYouLoseProfileTier1Source;
  const tmp = callback3();
  let obj = require(premiumTypeFromSubscription[8]);
  premiumTypeFromSubscription = obj.getPremiumTypeFromSubscription(subscription);
  analyticsLocations = subscription(premiumTypeFromSubscription[9])().analyticsLocations;
  obj1 = require(premiumTypeFromSubscription[10]);
  whatYouLoseProfileTier1Source = obj1.useWhatYouLoseProfileTier1Source();
  subscription(premiumTypeFromSubscription[11])(null != premiumTypeFromSubscription, "Expected premium type");
  let items = [premiumTypeFromSubscription, whatYouLoseProfileTier1Source];
  const memo = analyticsLocations.useMemo(() => {
    if (closure_1_5.TIER_0 === premiumTypeFromSubscription) {
      let obj = { imageSource: null, text: null };
      obj[0] = subscription(premiumTypeFromSubscription[12]);
      const intl7 = closure_1_0(premiumTypeFromSubscription[13]).intl;
      obj[1] = intl7.format(closure_1_0(premiumTypeFromSubscription[13]).t["0hUHi6"], {});
      const items = [obj, ];
      obj = { imageSource: null, text: null };
      obj[0] = subscription(premiumTypeFromSubscription[14]);
      const intl8 = closure_1_0(premiumTypeFromSubscription[13]).intl;
      obj[1] = intl8.format(closure_1_0(premiumTypeFromSubscription[13]).t.wFWO6D, {});
      items[1] = obj;
      return items;
    } else if (tmp2.TIER_1 === tmp) {
      obj1 = { imageSource: null, text: null };
      obj1[0] = whatYouLoseProfileTier1Source;
      const intl4 = closure_1_0(premiumTypeFromSubscription[13]).intl;
      obj1[1] = intl4.format(closure_1_0(premiumTypeFromSubscription[13]).t.xCaYwE, {});
      const items1 = [obj1, , ];
      const obj2 = { imageSource: null, text: null };
      obj2[0] = subscription(premiumTypeFromSubscription[15]);
      const intl5 = closure_1_0(premiumTypeFromSubscription[13]).intl;
      obj2[1] = intl5.format(closure_1_0(premiumTypeFromSubscription[13]).t.wK04T1, {});
      items1[1] = obj2;
      const obj3 = { imageSource: null, text: null };
      obj3[0] = subscription(premiumTypeFromSubscription[16]);
      const intl6 = closure_1_0(premiumTypeFromSubscription[13]).intl;
      obj3[1] = intl6.format(closure_1_0(premiumTypeFromSubscription[13]).t.K4Hv69, {});
      items1[2] = obj3;
      return items1;
    } else if (tmp2.TIER_2 === tmp) {
      obj = { imageSource: null, text: null };
      obj[0] = subscription(premiumTypeFromSubscription[17]);
      const intl = closure_1_0(premiumTypeFromSubscription[13]).intl;
      obj[1] = intl.format(closure_1_0(premiumTypeFromSubscription[13]).t["gpqr+n"], {});
      const items2 = [obj, , ];
      obj4 = { imageSource: null, text: null };
      obj4[0] = subscription(premiumTypeFromSubscription[16]);
      const intl2 = closure_1_0(premiumTypeFromSubscription[13]).intl;
      obj4[1] = intl2.format(closure_1_0(premiumTypeFromSubscription[13]).t.wRxEDW, {});
      items2[1] = obj4;
      const obj5 = { imageSource: null, text: null };
      obj5[0] = subscription(premiumTypeFromSubscription[15]);
      const intl3 = closure_1_0(premiumTypeFromSubscription[13]).intl;
      obj5[1] = intl3.format(closure_1_0(premiumTypeFromSubscription[13]).t["4WZ7T2"], {});
      items2[2] = obj5;
      return items2;
    } else {
      return [];
    }
  }, items);
  let items1 = [callback(subscription(premiumTypeFromSubscription[20]), { premiumType: premiumTypeFromSubscription }), , ];
  obj = { style: tmp.body, children: null };
  obj = { variant: "heading-xl/extrabold", style: tmp.title, children: null };
  if (mode === obj4.CANCEL) {
    let intl2 = tmp2(tmp3[13]).intl;
    let stringResult = intl2.string(tmp2(tmp3[13]).t.PWq8TL);
  } else {
    let intl = tmp2(tmp3[13]).intl;
    stringResult = intl.string(tmp2(tmp3[13]).t["7VcWW0"]);
  }
  obj[2] = stringResult;
  let items2 = [callback(require(premiumTypeFromSubscription[7]).Text, obj), , ];
  obj1 = { variant: "text-md/medium", style: tmp.subtitle, children: null };
  if (mode === obj4.CANCEL) {
    let intl4 = tmp2(tmp3[13]).intl;
    let obj2 = { subscriptionName: null };
    let tmp2Result = tmp2(tmp3[8]);
    obj2[0] = tmp2Result.getPremiumTypeDisplayName(premiumTypeFromSubscription, true);
    let formatResult = intl4.format(tmp2(tmp3[13]).t.jh5mUz, obj2);
  } else {
    let intl3 = tmp2(tmp3[13]).intl;
    let obj3 = { subscriptionName: null };
    tmp2Result = tmp2(tmp3[8]);
    obj3[0] = tmp2Result.getPremiumTypeDisplayName(premiumTypeFromSubscription, true);
    formatResult = intl3.format(tmp2(tmp3[13]).t.Qk34Ik, obj3);
  }
  obj4 = { children: null };
  obj1[2] = formatResult;
  items2[1] = callback(require(premiumTypeFromSubscription[7]).Text, obj1);
  items2[2] = memo.map((arg0, arg1) => {
    const merged = Object.assign(arg0);
    return callback2(closure_9, {}, arg1);
  });
  obj[1] = items2;
  items1[1] = closure_7(whatYouLoseProfileTier1Source, obj);
  let obj5 = { style: tmp.footer, children: null };
  const obj6 = { style: tmp.button, children: null };
  const obj7 = { text: null, grow: true, onPress: null };
  let intl5 = tmp2(tmp3[13]).intl;
  obj7[0] = intl5.string(require(premiumTypeFromSubscription[13]).t["3PatSz"]);
  obj7[2] = function onPress() {
    callback(closure_1_0(premiumTypeFromSubscription[22]).STEP_ANALYTICS_NAMES[closure_1_0(undefined, premiumTypeFromSubscription[22]).CancellationFlowSteps.WHAT_YOU_LOSE]);
    subscription(premiumTypeFromSubscription[18]).hideActionSheet();
  };
  obj6[1] = callback(require(premiumTypeFromSubscription[21]).Button, obj7);
  const items3 = [callback(whatYouLoseProfileTier1Source, obj6), ];
  const obj8 = {
    variant: "text-sm/medium",
    style: tmp.keepText,
    onPress() {
      let obj = closure_1_0(premiumTypeFromSubscription[22]);
      obj = { subscription, analyticsLocations, fromStep: closure_1_0(premiumTypeFromSubscription[22]).STEP_ANALYTICS_NAMES[closure_1_0(undefined, premiumTypeFromSubscription[22]).CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
      const result = obj.trackPremiumSubscriptionCancellationFlowStep(obj);
      subscription(premiumTypeFromSubscription[18]).hideActionSheet();
    },
    children: null
  };
  let intl6 = tmp2(tmp3[13]).intl;
  obj8[3] = intl6.string(require(premiumTypeFromSubscription[13]).t.rzVN6j);
  items3[1] = callback(require(premiumTypeFromSubscription[7]).Text, obj8);
  obj5[1] = items3;
  items1[2] = closure_7(whatYouLoseProfileTier1Source, obj5);
  obj4[0] = items1;
  return closure_7(require(premiumTypeFromSubscription[19]).BottomSheet, obj4);
};
export const WhatYouLoseMode = obj4;