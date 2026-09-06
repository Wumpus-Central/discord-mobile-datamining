// discord_app/modules/premium/native/gifting/PremiumGiftCustomization.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, scrollViewContainer: null, senderHeaderTitle: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.scrollViewContainer = { paddingBottom: nativeDefault.space.PX_24 };
let obj1 = { paddingBottom: nativeDefault.space.PX_24 };
createStyles.senderHeaderTitle = {
  marginTop: nativeDefault.space.PX_24,
  marginLeft: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_8,
  fontSize: 14,
};
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomization.tsx");

export default function PremiumGiftCustomization() {
  let obj = navigation(ref[7]);
  navigation = obj.useNavigation();
  const tmp4 = closure_11();
  let obj1 = navigation(ref[8]);
  const nativeGiftContext = obj1.useNativeGiftContext();
  ({ recipientUser, premiumType, claimableRewards, selectedGiftingPromotionReward } = nativeGiftContext);
  let obj2 = navigation(ref[9]);
  let obj3 = noop;
  const giftingPromotionDefaultSelectionV2 = obj2.useGiftingPromotionDefaultSelectionV2(
    claimableRewards,
    selectedGiftingPromotionReward,
  );
  const tmp7 = _slicedToArray(noop.useState(0), 2);
  const first = tmp7[0];
  ref = noop.useRef(null);
  const items = [first];
  const callback = noop.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      let scrollToResult;
      if (current != null) {
        const obj = { y, animated: true };
        scrollToResult = current.scrollTo(obj);
      }
      return scrollToResult;
    }, 100);
  }, items);
  if (premiumType === PremiumTypes.TIER_2) {
    const intl2 = tmp(tmp2[10]).intl;
    let stringResult = intl2.string(tmp(tmp2[10]).t.lG6a5x);
  } else {
    let intl = tmp(tmp2[10]).intl;
    stringResult = intl.string(tmp(tmp2[10]).t["t9uG/o"]);
  }
  _slicedToArray = stringResult;
  const items1 = [navigation, stringResult];
  const effect = obj3.useEffect(() => {
    let obj = { title: null };
    const intl = util.intl;
    obj = { nitroTierName: stringResult };
    obj.title = intl.formatToPlainString(util.t["RMu0/q"], obj);
    navigation.setOptions(obj);
  }, items1);
  obj = { style: tmp4.container, children: null };
  obj = { ref, contentContainerStyle: tmp4.scrollViewContainer, showsVerticalScrollIndicator: false, children: null };
  const items2 = [closure_8(first(ref[11]), {}), closure_8(first(ref[12]), {})];
  let tmp13Result = null != recipientUser;
  if (tmp13Result) {
    obj1 = { children: null };
    obj2 = { style: tmp4.senderHeaderTitle, variant: "text-md/semibold", children: null };
    const intl3 = tmp(tmp2[10]).intl;
    obj2.children = intl3.string(tmp(tmp2[10]).t.NlkxGS);
    const items3 = [closure_8(tmp(tmp2[13]).Text, obj2), ,];
    obj3 = { user: recipientUser };
    items3[1] = closure_8(tmp17(tmp2[14]), obj3);
    const obj4 = { onFocusMessage: callback, setMessagePosition: tmp7[1] };
    items3[2] = closure_8(tmp17(tmp2[15]), obj4);
    obj1.children = items3;
    tmp13Result = closure_10(closure_9, obj1);
  }
  items2[2] = tmp13Result;
  obj.children = closure_10(closure_5, { children: items2 });
  const items4 = [
    closure_8(closure_6, obj),
    closure_8(first(ref[16]), { defaultSelection: giftingPromotionDefaultSelectionV2 }),
  ];
  obj.children = items4;
  return closure_10(closure_5, obj);
}
