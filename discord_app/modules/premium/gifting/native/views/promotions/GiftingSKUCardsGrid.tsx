// discord_app/modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isAvatarDecorationRecord, isNameplateRecord } from "fromServer" /* 5306 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { card: null, overlayContainer: null, selected: null, claimed: null, checkmark: null, checkmarkContainer: null, textContainer: null };
obj = { height: 178, width: 150, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderWidth: 1, borderRadius: ThemesDefault.radii.sm, overflow: "hidden", borderColor: ThemesDefault.colors.BORDER_SUBTLE, margin: ThemesDefault.space.PX_4 };
obj[0] = obj;
obj[1] = { position: "absolute", top: 10, zIndex: 2, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "75%" };
createCacheKey = { borderColor: ThemesDefault.colors.BACKGROUND_BRAND };
obj[2] = createCacheKey;
obj[3] = { opacity: 0.4 };
obj[4] = { position: "absolute", opacity: 1, fontWeight: "bold" };
obj[5] = { position: "absolute", top: 10, zIndex: 3, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "75%" };
obj[6] = { position: "absolute", bottom: 20, left: 0, right: 0, paddingHorizontal: ThemesDefault.space.PX_16, alignItems: "flex-start" };
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = importAllResult.memo((rewardSkuId) => {
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect: importDefault, isSelected } = rewardSkuId);
  let currentUser;
  const tmp = callback2();
  let obj = rewardSkuId(isSelected[7]);
  currentUser = obj.useCurrentUser();
  obj1 = rewardSkuId(isSelected[8]);
  const radioA11yNative = obj1.useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  let obj2 = rewardSkuId(isSelected[9]);
  const product = obj2.useFetchCollectiblesProduct(rewardSkuId).product;
  const items = [isSelected, currentUser];
  if (null == product) {
    return null;
  } else {
    const first = product.items[0];
    const items1 = [tmp.card, ];
    let selected = isSelected;
    if (isSelected) {
      selected = tmp.selected;
    }
    obj = { style: null, onPress: null, activeOpacity: 0.8, disabled: null, accessibilityRole: null, accessibilityState: null, children: null };
    items1[1] = selected;
    obj[0] = items1;
    obj[1] = function onPress() {
      return callback(rewardSkuId);
    };
    obj[3] = claimed;
    obj[4] = accessibilityRole;
    obj[5] = accessibilityState;
    const items2 = [tmp.overlayContainer, ];
    let claimed2 = claimed;
    if (claimed) {
      claimed2 = tmp.claimed;
    }
    obj = { style: null, children: null };
    items2[1] = claimed2;
    obj[0] = items2;
    if (isNameplateRecord(first)) {
      obj1 = { item: null, animate: null };
      obj1[0] = first;
      obj1[1] = isSelected;
      let tmp7Result = tmp7(importDefault(tmp3[11]), obj1);
    } else if (isAvatarDecorationRecord(first)) {
      obj2 = { item: null, size: 100, animate: null, avatarSource: null };
      obj2[0] = first;
      obj2[2] = isSelected;
      obj2[3] = tmp6;
      tmp7Result = tmp7(importDefault(tmp3[12]), obj2);
    }
    obj[1] = tmp7Result;
    const items3 = [closure_7(View, obj), , ];
    tmp7Result = claimed;
    if (claimed) {
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.checkmarkContainer;
      const obj4 = { size: "lg", style: null };
      obj4[1] = tmp.checkmark;
      obj3[1] = tmp7(tmp2(tmp3[13]).CheckmarkLargeBoldIcon, obj4);
      tmp7Result = tmp7(tmp8, obj3);
    }
    items3[1] = tmp7Result;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.textContainer;
    const obj6 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: null };
    obj6[4] = product.name;
    const items4 = [closure_7(tmp2(tmp3[14]).Text, obj6), ];
    const intl = tmp2(tmp3[15]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[15]).t;
    if (claimed) {
      let stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    const obj7 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
    obj7[3] = stringResult;
    items4[1] = closure_7(tmp2(tmp3[14]).Text, obj7);
    obj5[1] = items4;
    items3[2] = closure_8(View, obj5);
    obj[6] = items3;
    return closure_8(tmp2(tmp3[10]).PressableOpacity, obj);
  }
});
let closure_11 = createCacheKey.createStyles({ grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" } });
let obj2 = { position: "absolute", bottom: 20, left: 0, right: 0, paddingHorizontal: ThemesDefault.space.PX_16, alignItems: "flex-start" };
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default function GiftingSKUCardsGrid(arg0) {
  ({ rewardsToDisplay, claimableRewards: require, onSelect: importDefault, highlightedSkuId: dependencyMap } = arg0);
  return callback(View, {
    style: callback3().grid,
    children: rewardsToDisplay.map((rewardSkuId) => {
      closure_0 = rewardSkuId;
      return closure_1_7(closure_1_10, { rewardSkuId, claimed: !closure_0.some((arg0) => arg0 === closure_0), isSelected: closure_2 === rewardSkuId, onSelect: closure_1 }, rewardSkuId);
    })
  });
};