// discord_app/modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import GiftingSKUCardsGridDefault from "GiftingSKUCardsGrid.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  scroll: { flex: 1 },
  contentContainer: null,
  header: null,
  subtitle: null,
  buttonContainer: null,
  headerContainer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.contentContainer = { display: "flex", flexDirection: "column", padding: nativeDefault.space.PX_24 };
let obj4 = { display: "flex", flexDirection: "column", padding: nativeDefault.space.PX_24 };
obj2.header = { textAlign: "center", padding: nativeDefault.space.PX_8 };
obj2.subtitle = { textAlign: "center" };
let obj5 = { textAlign: "center", padding: nativeDefault.space.PX_8 };
obj2.buttonContainer = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24 };
let obj6 = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24 };
obj2.headerContainer = { marginBottom: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx");

export default function GiftingSKUSelectScreen(rewardsToDisplay) {
  const defaultHighlightedReward = rewardsToDisplay.defaultHighlightedReward;
  const claimableRewards = rewardsToDisplay.claimableRewards;
  const onSelect = rewardsToDisplay.onSelect;
  highlightedSkuId = undefined;
  closure_4 = undefined;
  first1 = undefined;
  closure_6 = undefined;
  const tmp = closure_9();
  [highlightedSkuId, closure_4] = noop.useState(defaultHighlightedReward);
  [first1, closure_6] = noop.useState(false);
  const items = [onSelect, highlightedSkuId, claimableRewards];
  const callback = noop.useCallback(() => {
    const found = claimableRewards.find((item) => item === highlightedSkuId);
    if (null != found) {
      onSelect(found);
    }
  }, items);
  const items1 = [highlightedSkuId, claimableRewards];
  const callback1 = noop.useCallback((arg0) => {
    closure_4(arg0);
    closure_6(true);
  }, []);
  const memo = noop.useMemo(() => {
    let someResult = null != first;
    if (someResult) {
      someResult = claimableRewards.some((item) => item === highlightedSkuId);
    }
    return someResult;
  }, items1);
  const items2 = [highlightedSkuId, claimableRewards, first1, defaultHighlightedReward, memo];
  const effect = noop.useEffect(() => {
    if (0 === claimableRewards.length) {
      closure_4(undefined);
    } else if (!memo) {
      let someResult = !first1;
      if (!first1) {
        someResult = null != defaultHighlightedReward;
      }
      if (someResult) {
        someResult = claimableRewards.some((item) => item === defaultHighlightedReward);
      }
      let tmp7;
      if (someResult) {
        tmp7 = defaultHighlightedReward;
      }
      closure_4(tmp7);
    }
  }, items2);
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.scroll, contentContainerStyle: tmp.contentContainer, children: null };
  const obj3 = { style: tmp.headerContainer, children: null };
  const obj4 = {
    style: tmp.header,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    accessibilityRole: "header",
    children: null,
  };
  const intl = util.intl;
  obj4.children = intl.string(util.t["+ByEeM"]);
  const items3 = [React5(Text_Text.Text, obj4)];
  const obj5 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.vPeaOS);
  items3[1] = React5(Text_Text.Text, obj5);
  obj3.children = items3;
  const items4 = [
    React6(hasOwnProperty, obj3),
    React5(GiftingSKUCardsGridDefault, {
      rewardsToDisplay: rewardsToDisplay.allRewards,
      claimableRewards,
      onSelect: callback1,
      highlightedSkuId,
    }),
  ];
  obj2.children = items4;
  const items5 = [React6(timestampProducer, obj2)];
  const obj6 = { style: null, children: null };
  const items6 = [tmp.buttonContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj6.style = items6;
  const obj7 = { text: null, onPress: null, disabled: null };
  const intl3 = util.intl;
  obj7.text = intl3.string(util.t["3d0Nmb"]);
  obj7.onPress = callback;
  obj7.disabled = null == highlightedSkuId || !memo;
  obj6.children = React5(components_Button_Button.Button, obj7);
  items5[1] = React5(hasOwnProperty, obj6);
  obj.children = items5;
  return React6(hasOwnProperty, obj);
}
