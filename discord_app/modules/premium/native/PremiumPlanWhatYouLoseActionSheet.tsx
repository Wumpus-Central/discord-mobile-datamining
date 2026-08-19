// discord_app/modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { PremiumTypes } from "../PremiumConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function WhatYouLoseItem(arg0) {
  ({ imageSource, text } = arg0);
  const tmp = callback3();
  const items = [callback(preloadDefault, { source: imageSource }), ];
  const obj = { variant: "text-md/medium", style: tmp.itemLabel, children: text };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { marginBottom: 8, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginBottom: 16, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = { marginBottom: 16, borderRadius: ThemesDefault.radii.sm, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16 };
createCacheKey[4] = { marginTop: 8 };
createCacheKey[5] = { paddingHorizontal: 16 };
createCacheKey[6] = { marginBottom: 8 };
createCacheKey[7] = { textAlign: "center", paddingVertical: 8, color: ThemesDefault.colors.TEXT_SUBTLE };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj4 = { DOWNGRADE: 0, [0]: "DOWNGRADE", CANCEL: 1, [1]: "CANCEL" };
let result = require("obj132").fileFinishedImporting("modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx");

export default function PremiumPlanWhatYouLoseActionSheet(arg0) {
  ({ mode, onContinue: require, subscription } = arg0);
  let premiumTypeFromSubscription;
  const tmp = callback3();
  let obj = require(premiumTypeFromSubscription[8]);
  premiumTypeFromSubscription = obj.getPremiumTypeFromSubscription(subscription);
  const analyticsLocations = subscription(premiumTypeFromSubscription[9])().analyticsLocations;
  obj1 = require(premiumTypeFromSubscription[10]);
  const whatYouLoseProfileTier1Source = obj1.useWhatYouLoseProfileTier1Source();
  subscription(premiumTypeFromSubscription[11])(null != premiumTypeFromSubscription, "Expected premium type");
  let items = [premiumTypeFromSubscription, whatYouLoseProfileTier1Source];
  const memo = analyticsLocations.useMemo(() => {
    if (PremiumTypes.TIER_0 === premiumTypeFromSubscription) {
      let obj = { imageSource: null, text: null };
      obj[0] = subscription(premiumTypeFromSubscription[12]);
      const intl7 = require(premiumTypeFromSubscription[13]).intl;
      obj[1] = intl7.format(require(premiumTypeFromSubscription[13]).t["0hUHi6"], {});
      const items = [obj, ];
      obj = { imageSource: null, text: null };
      obj[0] = subscription(premiumTypeFromSubscription[14]);
      const intl8 = require(premiumTypeFromSubscription[13]).intl;
      obj[1] = intl8.format(require(premiumTypeFromSubscription[13]).t.wFWO6D, {});
      items[1] = obj;
      return items;
    } else if (PremiumTypes.TIER_1 === premiumTypeFromSubscription) {
      obj1 = { imageSource: null, text: null };
      obj1[0] = whatYouLoseProfileTier1Source;
      const intl4 = require(premiumTypeFromSubscription[13]).intl;
      obj1[1] = intl4.format(require(premiumTypeFromSubscription[13]).t.xCaYwE, {});
      const items1 = [obj1, , ];
      const obj2 = { imageSource: null, text: null };
      obj2[0] = subscription(premiumTypeFromSubscription[15]);
      const intl5 = require(premiumTypeFromSubscription[13]).intl;
      obj2[1] = intl5.format(require(premiumTypeFromSubscription[13]).t.wK04T1, {});
      items1[1] = obj2;
      const obj3 = { imageSource: null, text: null };
      obj3[0] = subscription(premiumTypeFromSubscription[16]);
      const intl6 = require(premiumTypeFromSubscription[13]).intl;
      obj3[1] = intl6.format(require(premiumTypeFromSubscription[13]).t.K4Hv69, {});
      items1[2] = obj3;
      return items1;
    } else if (PremiumTypes.TIER_2 === premiumTypeFromSubscription) {
      obj = { imageSource: null, text: null };
      obj[0] = subscription(premiumTypeFromSubscription[17]);
      const intl = require(premiumTypeFromSubscription[13]).intl;
      obj[1] = intl.format(require(premiumTypeFromSubscription[13]).t["gpqr+n"], {});
      const items2 = [obj, , ];
      obj4 = { imageSource: null, text: null };
      obj4[0] = subscription(premiumTypeFromSubscription[16]);
      const intl2 = require(premiumTypeFromSubscription[13]).intl;
      obj4[1] = intl2.format(require(premiumTypeFromSubscription[13]).t.wRxEDW, {});
      items2[1] = obj4;
      const obj5 = { imageSource: null, text: null };
      obj5[0] = subscription(premiumTypeFromSubscription[15]);
      const intl3 = require(premiumTypeFromSubscription[13]).intl;
      obj5[1] = intl3.format(require(premiumTypeFromSubscription[13]).t["4WZ7T2"], {});
      items2[2] = obj5;
      return items2;
    } else {
      return [];
    }
  }, items);
  let items1 = [callback(subscription(premiumTypeFromSubscription[20]), { premiumType: premiumTypeFromSubscription }), , ];
  obj = { variant: "heading-xl/extrabold", style: tmp.title, children: null };
  if (mode === obj4.CANCEL) {
    let intl2 = require(tmp3[13]).intl;
    let stringResult = intl2.string(require(tmp3[13]).t.PWq8TL);
  } else {
    let intl = require(tmp3[13]).intl;
    stringResult = intl.string(require(tmp3[13]).t["7VcWW0"]);
  }
  obj[2] = stringResult;
  let items2 = [callback(require(premiumTypeFromSubscription[7]).Text, obj), , ];
  obj1 = { variant: "text-md/medium", style: tmp.subtitle, children: null };
  if (mode === obj4.CANCEL) {
    let intl4 = require(tmp3[13]).intl;
    let obj2 = { subscriptionName: null };
    let tmp2Result = require(tmp3[8]);
    obj2[0] = tmp2Result.getPremiumTypeDisplayName(premiumTypeFromSubscription, true);
    let formatResult = intl4.format(require(tmp3[13]).t.jh5mUz, obj2);
  } else {
    let intl3 = require(tmp3[13]).intl;
    let obj3 = { subscriptionName: null };
    tmp2Result = require(tmp3[8]);
    obj3[0] = tmp2Result.getPremiumTypeDisplayName(premiumTypeFromSubscription, true);
    formatResult = intl3.format(require(tmp3[13]).t.Qk34Ik, obj3);
  }
  obj4 = { children: null };
  obj1[2] = formatResult;
  items2[1] = callback(require(premiumTypeFromSubscription[7]).Text, obj1);
  items2[2] = memo.map((item, index) => {
    const merged = Object.assign(item);
    return callback2(closure_9, {}, index);
  });
  obj[1] = items2;
  items1[1] = callback(whatYouLoseProfileTier1Source, obj);
  let obj5 = { style: tmp.footer, children: null };
  const obj6 = { style: tmp.button, children: null };
  const obj7 = { text: null, grow: true, onPress: null };
  let intl5 = require(tmp3[13]).intl;
  obj7[0] = intl5.string(require(premiumTypeFromSubscription[13]).t["3PatSz"]);
  obj7[2] = function onPress() {
    callback(require(premiumTypeFromSubscription[22]).STEP_ANALYTICS_NAMES[require(undefined, premiumTypeFromSubscription[22]).CancellationFlowSteps.WHAT_YOU_LOSE]);
    subscription(premiumTypeFromSubscription[18]).hideActionSheet();
  };
  obj6[1] = callback(require(premiumTypeFromSubscription[21]).Button, obj7);
  const items3 = [callback(whatYouLoseProfileTier1Source, obj6), ];
  const obj8 = {
    variant: "text-sm/medium",
    style: tmp.keepText,
    onPress() {
      require(premiumTypeFromSubscription[22]);
      const obj = { subscription, analyticsLocations, fromStep: require(premiumTypeFromSubscription[22]).STEP_ANALYTICS_NAMES[require(undefined, premiumTypeFromSubscription[22]).CancellationFlowSteps.WHAT_YOU_LOSE], toStep: null };
      const result = obj.trackPremiumSubscriptionCancellationFlowStep(obj);
      subscription(premiumTypeFromSubscription[18]).hideActionSheet();
    },
    children: null
  };
  let intl6 = require(tmp3[13]).intl;
  obj8[3] = intl6.string(require(premiumTypeFromSubscription[13]).t.rzVN6j);
  items3[1] = callback(require(premiumTypeFromSubscription[7]).Text, obj8);
  obj5[1] = items3;
  items1[2] = callback(whatYouLoseProfileTier1Source, obj5);
  obj4[0] = items1;
  return callback(require(premiumTypeFromSubscription[19]).BottomSheet, obj4);
};
export const WhatYouLoseMode = obj4;