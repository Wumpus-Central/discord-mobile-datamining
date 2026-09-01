// discord_app/modules/premium/native/gifting/PremiumGiftCustomization.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { PremiumTypes } from "../../PremiumConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, scrollViewContainer: null, senderHeaderTitle: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingBottom: ThemesDefault.space.PX_24 };
let obj1 = { paddingBottom: ThemesDefault.space.PX_24 };
createCacheKey[2] = {
  marginTop: ThemesDefault.space.PX_24,
  marginLeft: ThemesDefault.space.PX_16,
  marginBottom: ThemesDefault.space.PX_8,
  fontSize: 14,
};
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj2 = {
  marginTop: ThemesDefault.space.PX_24,
  marginLeft: ThemesDefault.space.PX_16,
  marginBottom: ThemesDefault.space.PX_8,
  fontSize: 14,
};
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomization.tsx");

export default function PremiumGiftCustomization() {
  let obj = navigation(ref[7]);
  navigation = obj.useNavigation();
  const tmp4 = callback3();
  obj1 = navigation(ref[8]);
  const nativeGiftContext = obj1.useNativeGiftContext();
  ({ recipientUser, premiumType, claimableRewards, selectedGiftingPromotionReward } = nativeGiftContext);
  let obj2 = navigation(ref[9]);
  let obj3 = React;
  const giftingPromotionDefaultSelectionV2 = obj2.useGiftingPromotionDefaultSelectionV2(
    claimableRewards,
    selectedGiftingPromotionReward,
  );
  const tmp7 = callback(React.useState(0), 2);
  const first = tmp7[0];
  ref = React.useRef(null);
  const items = [first];
  callback = React.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      let scrollToResult;
      if (current != null) {
        const obj = { y: null, animated: true };
        obj[0] = closure_1;
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
  callback = stringResult;
  const items1 = [navigation, stringResult];
  const effect = obj3.useEffect(() => {
    let obj = { title: null };
    const intl = navigation(ref[10]).intl;
    obj = { nitroTierName: closure_3 };
    obj[0] = intl.formatToPlainString(navigation(ref[10]).t["RMu0/q"], obj);
    navigation.setOptions(obj);
  }, items1);
  obj = { style: tmp4.container, children: null };
  obj = { ref, contentContainerStyle: tmp4.scrollViewContainer, showsVerticalScrollIndicator: false, children: null };
  const items2 = [callback2(first(ref[11]), {}), callback2(first(ref[12]), {})];
  let tmp13Result = null != recipientUser;
  if (tmp13Result) {
    obj1 = { children: null };
    obj2 = { style: null, variant: "text-md/semibold", children: null };
    obj2[0] = tmp4.senderHeaderTitle;
    const intl3 = tmp(tmp2[10]).intl;
    obj2[2] = intl3.string(tmp(tmp2[10]).t.NlkxGS);
    const items3 = [tmp15(tmp(tmp2[13]).Text, obj2), ,];
    obj3 = { user: null };
    obj3[0] = recipientUser;
    items3[1] = tmp15(tmp17(tmp2[14]), obj3);
    const obj4 = { onFocusMessage: null, setMessagePosition: null };
    obj4[0] = callback;
    obj4[1] = tmp7[1];
    items3[2] = tmp15(tmp17(tmp2[15]), obj4);
    obj1[0] = items3;
    tmp13Result = tmp13(closure_9, obj1);
  }
  items2[2] = tmp13Result;
  obj[3] = closure_10(closure_5, { children: items2 });
  const items4 = [
    callback2(closure_6, obj),
    callback2(first(ref[16]), { defaultSelection: giftingPromotionDefaultSelectionV2 }),
  ];
  obj[1] = items4;
  return closure_10(closure_5, obj);
}
