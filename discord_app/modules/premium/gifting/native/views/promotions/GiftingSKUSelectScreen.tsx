// === Module 9937: GiftingSKUSelectScreen ===

// Module 9937 (GiftingSKUSelectScreen)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, scroll: null, contentContainer: null, header: null, subtitle: null, buttonContainer: null, headerContainer: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { display: "flex", flexDirection: "column", padding: require("Themes").space.PX_24 };
let obj1 = { display: "flex", flexDirection: "column", padding: require("Themes").space.PX_24 };
createCacheKey[3] = { textAlign: "center", padding: require("Themes").space.PX_8 };
createCacheKey[4] = { textAlign: "center" };
let obj2 = { textAlign: "center", padding: require("Themes").space.PX_8 };
createCacheKey[5] = { marginHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_24 };
let obj3 = { marginHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_24 };
createCacheKey[6] = { marginBottom: require("Themes").space.PX_24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginBottom: require("Themes").space.PX_24 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx");

export default function GiftingSKUSelectScreen(rewardsToDisplay) {
  const defaultHighlightedReward = rewardsToDisplay.defaultHighlightedReward;
  const claimableRewards = rewardsToDisplay.claimableRewards;
  const onSelect = rewardsToDisplay.onSelect;
  let first;
  let React;
  let first1;
  let closure_6;
  let memo;
  const tmp = createCacheKey();
  const tmp2 = first(React.useState(defaultHighlightedReward), 2);
  first = tmp2[0];
  React = tmp2[1];
  const tmp4 = first(React.useState(false), 2);
  first1 = tmp4[0];
  closure_6 = tmp4[1];
  const items = [onSelect, first, claimableRewards];
  const callback = React.useCallback(() => {
    const found = claimableRewards.find((arg0) => arg0 === _slicedToArray);
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
      someResult = claimableRewards.some((arg0) => arg0 === _slicedToArray);
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
  const obj1 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
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