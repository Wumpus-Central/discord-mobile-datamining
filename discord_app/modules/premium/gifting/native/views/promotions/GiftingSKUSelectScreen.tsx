// discord_app/modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { display: "flex", flexDirection: "column", padding: ThemesDefault.space.PX_24 };
createCacheKey[3] = { textAlign: "center", padding: ThemesDefault.space.PX_8 };
createCacheKey[4] = { textAlign: "center" };
createCacheKey[5] = { marginHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[6] = { marginBottom: ThemesDefault.space.PX_24 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx");

export default function GiftingSKUSelectScreen(rewardsToDisplay) {
  const defaultHighlightedReward = rewardsToDisplay.defaultHighlightedReward;
  const claimableRewards = rewardsToDisplay.claimableRewards;
  const onSelect = rewardsToDisplay.onSelect;
  let first;
  let React;
  const tmp = callback2();
  const tmp2 = first(React.useState(defaultHighlightedReward), 2);
  first = tmp2[0];
  React = tmp2[1];
  const tmp4 = first(React.useState(false), 2);
  const first1 = tmp4[0];
  closure_6 = tmp4[1];
  const items = [onSelect, first, claimableRewards];
  const callback = React.useCallback(() => {
    const found = claimableRewards.find((item, index) => item === closure_3);
    if (null != found) {
      onSelect(found);
    }
  }, items);
  const items1 = [first, claimableRewards];
  const callback1 = React.useCallback((arg0) => {
    callback(arg0);
    callback2(true);
  }, []);
  const memo = React.useMemo(() => {
    let someResult = null != first;
    if (someResult) {
      someResult = claimableRewards.some((item, index) => item === closure_3);
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
        someResult = claimableRewards.some((item, index) => item === closure_0);
      }
      let tmp7;
      if (someResult) {
        tmp7 = defaultHighlightedReward;
      }
      callback(tmp7);
    }
  }, items2);
  const obj = { style: tmp.headerContainer, children: null };
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