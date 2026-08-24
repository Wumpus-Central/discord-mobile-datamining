// === Module 10414: GiftingSKUSelectScreen ===

// Module 10414 (GiftingSKUSelectScreen)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, scroll: null, contentContainer: null, header: null, subtitle: null, buttonContainer: null, headerContainer: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { display: "flex", flexDirection: "column", padding: ThemesDefault.space.PX_24 };
let obj1 = { display: "flex", flexDirection: "column", padding: ThemesDefault.space.PX_24 };
createCacheKey[3] = { textAlign: "center", padding: ThemesDefault.space.PX_8 };
createCacheKey[4] = { textAlign: "center" };
let obj2 = { textAlign: "center", padding: ThemesDefault.space.PX_8 };
createCacheKey[5] = { marginHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_24 };
let obj3 = { marginHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[6] = { marginBottom: ThemesDefault.space.PX_24 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginBottom: ThemesDefault.space.PX_24 };
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx");

export default function GiftingSKUSelectScreen(rewardsToDisplay) {
  const defaultHighlightedReward = rewardsToDisplay.defaultHighlightedReward;
  const claimableRewards = rewardsToDisplay.claimableRewards;
  const onSelect = rewardsToDisplay.onSelect;
  let first;
  let React;
  let first1;
  closure_6 = undefined;
  let memo;
  const tmp = callback2();
  const tmp2 = first(React.useState(defaultHighlightedReward), 2);
  first = tmp2[0];
  React = tmp2[1];
  const tmp4 = first(React.useState(false), 2);
  first1 = tmp4[0];
  closure_6 = tmp4[1];
  const items = [onSelect, first, claimableRewards];
  const callback = React.useCallback(() => {
    const found = claimableRewards.find((arg0) => arg0 === closure_3);
    if (null != found) {
      onSelect(found);
    }
  }, items);
  const items1 = [first, claimableRewards];
  const callback1 = React.useCallback((arg0) => {
    callback(arg0);
    callback2(true);
  }, []);
  memo = React.useMemo(() => {
    let someResult = null != first;
    if (someResult) {
      someResult = claimableRewards.some((arg0) => arg0 === closure_3);
    }
    return someResult;
  }, items1);
  const items2 = [first, claimableRewards, first1, defaultHighlightedReward, memo];
  const effect = React.useEffect(() => {
    if (0 === claimableRewards.length) {
      callback(undefined);
    } else if (!memo) {
      let someResult = !first1;
      if (!first1) {
        someResult = null != defaultHighlightedReward;
      }
      if (someResult) {
        someResult = obj.some((arg0) => arg0 === closure_0);
      }
      let tmp7;
      if (someResult) {
        tmp7 = defaultHighlightedReward;
      }
      callback(tmp7);
      const tmp6 = callback;
    }
  }, items2);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.scroll, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { style: tmp.headerContainer, children: null };
  obj1 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl = defaultHighlightedReward(onSelect[8]).intl;
  obj1[4] = intl.string(defaultHighlightedReward(onSelect[8]).t["+ByEeM"]);
  const items3 = [memo(defaultHighlightedReward(onSelect[7]).Text, obj1), ];
  const obj2 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = defaultHighlightedReward(onSelect[8]).intl;
  obj2[3] = intl2.string(defaultHighlightedReward(onSelect[8]).t.vPeaOS);
  items3[1] = memo(defaultHighlightedReward(onSelect[7]).Text, obj2);
  obj[1] = items3;
  const items4 = [callback(first1, obj), memo(claimableRewards(onSelect[9]), { rewardsToDisplay: rewardsToDisplay.allRewards, claimableRewards, onSelect: callback1, highlightedSkuId: first })];
  obj[2] = items4;
  const items5 = [callback(closure_6, obj), ];
  const obj3 = { style: items6, children: null };
  items6 = [tmp.buttonContainer, { paddingBottom: claimableRewards(onSelect[6])().bottom }];
  const obj4 = { text: null, onPress: null, disabled: null };
  const intl3 = defaultHighlightedReward(onSelect[8]).intl;
  obj4[0] = intl3.string(defaultHighlightedReward(onSelect[8]).t["3d0Nmb"]);
  obj4[1] = callback;
  obj4[2] = null == first || !memo;
  obj3[1] = memo(defaultHighlightedReward(onSelect[10]).Button, obj4);
  items5[1] = memo(first1, obj3);
  obj[1] = items5;
  return callback(first1, obj);
};