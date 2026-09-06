// === Module 11040: GiftingSKUSelectScreen ===

// Module 11040 (GiftingSKUSelectScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import GiftingSKUCardsGridDefault from "GiftingSKUCardsGrid" /* 11041 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, scroll: null, contentContainer: null, header: null, subtitle: null, buttonContainer: null, headerContainer: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.scroll = { flex: 1 };
createStyles.contentContainer = { display: "flex", flexDirection: "column", padding: nativeDefault.space.PX_24 };
let obj1 = { display: "flex", flexDirection: "column", padding: nativeDefault.space.PX_24 };
createStyles.header = { textAlign: "center", padding: nativeDefault.space.PX_8 };
createStyles.subtitle = { textAlign: "center" };
let obj2 = { textAlign: "center", padding: nativeDefault.space.PX_8 };
createStyles.buttonContainer = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24 };
let obj3 = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24 };
createStyles.headerContainer = { marginBottom: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx");

export default function GiftingSKUSelectScreen(rewardsToDisplay) {
  const defaultHighlightedReward = rewardsToDisplay.defaultHighlightedReward;
  const claimableRewards = rewardsToDisplay.claimableRewards;
  const onSelect = rewardsToDisplay.onSelect;
  const tmp = closure_9();
  const tmp2 = _slicedToArray(noop.useState(defaultHighlightedReward), 2);
  const highlightedSkuId = tmp2[0];
  closure_4 = tmp2[1];
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  const first1 = tmp4[0];
  closure_6 = tmp4[1];
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
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.scroll, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { style: tmp.headerContainer, children: null };
  const obj1 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t["+ByEeM"]);
  const items3 = [React5(Text_Text.Text, obj1), ];
  const obj2 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.vPeaOS);
  items3[1] = React5(Text_Text.Text, obj2);
  obj.children = items3;
  const items4 = [React6(hasOwnProperty, obj), React5(GiftingSKUCardsGridDefault, { rewardsToDisplay: rewardsToDisplay.allRewards, claimableRewards, onSelect: callback1, highlightedSkuId })];
  obj.children = items4;
  const items5 = [React6(timestampProducer, obj), ];
  const obj3 = { style: null, children: null };
  const items6 = [tmp.buttonContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj3.style = items6;
  const obj4 = { text: null, onPress: null, disabled: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t["3d0Nmb"]);
  obj4.onPress = callback;
  obj4.disabled = null == highlightedSkuId || !memo;
  obj3.children = React5(components_Button_Button.Button, obj4);
  items5[1] = React5(hasOwnProperty, obj3);
  obj.children = items5;
  return React6(hasOwnProperty, obj);
};