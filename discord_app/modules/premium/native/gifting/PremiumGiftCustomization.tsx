// === Module 12689: PremiumGiftCustomization ===

// Module 12689 (PremiumGiftCustomization)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const PremiumTypes = fn(1392).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scrollViewContainer: null, senderHeaderTitle: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollViewContainer = { paddingBottom: nativeDefault.space.PX_24 };
let obj4 = { paddingBottom: nativeDefault.space.PX_24 };
obj2.senderHeaderTitle = { marginTop: nativeDefault.space.PX_24, marginLeft: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8, fontSize: 14 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginTop: nativeDefault.space.PX_24, marginLeft: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8, fontSize: 14 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomization.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGiftCustomization() {
  const cResult = navigation(ref[8]).c(25);
  let obj = navigation(ref[8]);
  navigation = navigation(ref[9]).useNavigation();
  const tmp5 = closure_11();
  const obj2 = navigation(ref[9]);
  const nativeGiftContext = navigation(ref[10]).useNativeGiftContext();
  ({ recipientUser, premiumType, claimableRewards, selectedGiftingPromotionReward } = nativeGiftContext);
  const obj3 = navigation(ref[10]);
  const giftingPromotionDefaultSelectionV2 = navigation(ref[11]).useGiftingPromotionDefaultSelectionV2(claimableRewards, selectedGiftingPromotionReward);
  let num = 2;
  const tmp8 = nitroTierName(noop.useState(0), 2);
  const first = tmp8[0];
  ref = noop.useRef(null);
  if (cResult[0] !== first) {
    const fn = function o() {
      const timerId = setTimeout(() => {
        const current = ref.current;
        let scrollToResult;
        if (current != null) {
          const obj = { y, animated: true };
          scrollToResult = current.scrollTo(obj);
        }
        return scrollToResult;
      }, 100);
    };
    cResult[0] = first;
    cResult[1] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== premiumType) {
    if (premiumType === PremiumTypes.TIER_2) {
      const intl2 = tmp(tmp2[12]).intl;
      let stringResult = intl2.string(tmp(tmp2[12]).t.lG6a5x);
    } else {
      let intl = tmp(tmp2[12]).intl;
      stringResult = intl.string(tmp(tmp2[12]).t["t9uG/o"]);
    }
    cResult[num] = premiumType;
    num = 3;
    cResult[3] = stringResult;
  } else {
    nitroTierName = tmp12;
    if (cResult[4] === navigation) {
      if (cResult[5] === tmp12) {
        let tmp16 = cResult[6];
        let tmp17 = cResult[7];
      }
      const effect = noop.useEffect(tmp16, tmp17);
      class H {
        constructor() {
          obj = { title: null };
          intl = closure_0(closure_2[12]).intl;
          obj1 = { nitroTierName: closure_3 };
          obj.title = intl.formatToPlainString(closure_0(closure_2[12]).t["RMu0/q"], obj1);
          setOptionsResult = closure_0.setOptions(obj);
          return;
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp24 = closure_8(first(tmp2[13]), {});
        class H {
          constructor() {
            obj = { title: null };
            intl = closure_0(closure_2[12]).intl;
            obj1 = { nitroTierName: closure_3 };
            obj.title = intl.formatToPlainString(closure_0(closure_2[12]).t["RMu0/q"], obj1);
            setOptionsResult = closure_0.setOptions(obj);
            return;
          }
        }
        cResult[8] = tmp24;
        cResult[9] = tmp25;
        let tmp21 = tmp25;
        let tmp20 = tmp24;
      } else {
        tmp20 = cResult[8];
        tmp21 = cResult[9];
      }
      if (cResult[10] === tmp11) {
        if (cResult[11] === recipientUser) {
          if (cResult[12] === tmp5.senderHeaderTitle) {
            let tmp26 = cResult[13];
          }
          if (cResult[14] !== tmp26) {
            const obj6 = { children: null };
            class H {
              constructor() {
                obj = { title: null };
                intl = closure_0(closure_2[12]).intl;
                obj1 = { nitroTierName: closure_3 };
                obj.title = intl.formatToPlainString(closure_0(closure_2[12]).t["RMu0/q"], obj1);
                setOptionsResult = closure_0.setOptions(obj);
                return;
              }
            }
            tmp34[0] = tmp20;
            tmp34[1] = tmp21;
            tmp34[2] = tmp26;
            obj6.children = tmp34;
            const tmp35 = closure_10(closure_5, obj6);
            cResult[14] = tmp26;
            cResult[15] = tmp35;
            let tmp31 = tmp35;
          } else {
            tmp31 = cResult[15];
          }
          if (cResult[16] === tmp5.scrollViewContainer) {
            if (cResult[17] === tmp31) {
              let tmp36 = cResult[18];
            }
            if (cResult[19] !== giftingPromotionDefaultSelectionV2) {
              class H {
                constructor() {
                  obj = { title: null };
                  intl = closure_0(closure_2[12]).intl;
                  obj1 = { nitroTierName: closure_3 };
                  obj.title = intl.formatToPlainString(closure_0(closure_2[12]).t["RMu0/q"], obj1);
                  setOptionsResult = closure_0.setOptions(obj);
                  return;
                }
              }
              const tmp42 = closure_8(first(tmp2[18]), { defaultSelection: null });
              cResult[19] = giftingPromotionDefaultSelectionV2;
              cResult[20] = tmp42;
              let tmp39 = tmp42;
              const obj7 = { defaultSelection: null };
            } else {
              tmp39 = cResult[20];
            }
            if (cResult[21] === tmp5.container) {
              if (cResult[22] === tmp36) {
                if (cResult[23] === tmp39) {
                  let tmp43 = cResult[24];
                }
                return tmp43;
              }
            }
            class H {
              constructor() {
                obj = { title: null };
                intl = closure_0(closure_2[12]).intl;
                obj1 = { nitroTierName: closure_3 };
                obj.title = intl.formatToPlainString(closure_0(closure_2[12]).t["RMu0/q"], obj1);
                setOptionsResult = closure_0.setOptions(obj);
                return;
              }
            }
            const obj8 = { style: tmp5.container, children: null };
            const items = [tmp36, tmp39];
            obj8.children = items;
            const tmp45 = closure_10(closure_5, obj8);
            cResult[21] = tmp5.container;
            cResult[22] = tmp36;
            cResult[23] = tmp39;
            cResult[24] = tmp45;
            tmp43 = tmp45;
          }
          class H {
            constructor() {
              obj = { title: null };
              intl = closure_0(closure_2[12]).intl;
              obj1 = { nitroTierName: closure_3 };
              obj.title = intl.formatToPlainString(closure_0(closure_2[12]).t["RMu0/q"], obj1);
              setOptionsResult = closure_0.setOptions(obj);
              return;
            }
          }
          const obj9 = { ref, contentContainerStyle: tmp5.scrollViewContainer, showsVerticalScrollIndicator: false, children: tmp31 };
          const tmp38 = closure_8(closure_6, obj9);
          cResult[16] = tmp5.scrollViewContainer;
          cResult[17] = tmp31;
          cResult[18] = tmp38;
          tmp36 = tmp38;
        }
      }
      let tmp27 = null != recipientUser;
      if (tmp27) {
        const obj10 = { children: null };
        class H {
          constructor() {
            obj = { title: null };
            intl = closure_0(closure_2[12]).intl;
            obj1 = { nitroTierName: closure_3 };
            obj.title = intl.formatToPlainString(closure_0(closure_2[12]).t["RMu0/q"], obj1);
            setOptionsResult = closure_0.setOptions(obj);
            return;
          }
        }
        const obj11 = { style: tmp5.senderHeaderTitle, variant: "text-md/semibold", children: null };
        const intl3 = tmp(tmp2[12]).intl;
        obj11.children = intl3.string(tmp(tmp2[12]).t.NlkxGS);
        const items1 = [closure_8(tmp(tmp2[15]).Text, obj11), , ];
        const obj12 = { user: recipientUser };
        items1[1] = closure_8(first(tmp2[16]), obj12);
        const obj13 = { onFocusMessage: tmp11, setMessagePosition: tmp8[1] };
        items1[2] = closure_8(first(tmp2[17]), obj13);
        obj10.children = items1;
        tmp27 = closure_10(closure_9, obj10);
      }
      cResult[10] = tmp11;
      cResult[11] = recipientUser;
      cResult[12] = tmp5.senderHeaderTitle;
      cResult[13] = tmp27;
      tmp26 = tmp27;
    }
    class H {
      constructor() {
        obj = { title: null };
        intl = closure_0(closure_2[12]).intl;
        obj1 = { nitroTierName: closure_3 };
        obj.title = intl.formatToPlainString(closure_0(closure_2[12]).t["RMu0/q"], obj1);
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
    const items2 = [navigation, cResult[3]];
    cResult[4] = navigation;
    cResult[5] = cResult[3];
    cResult[6] = H;
    cResult[7] = items2;
    tmp17 = items2;
    tmp16 = H;
  }
  const obj4 = navigation(ref[11]);
}) : (function PremiumGiftCustomization() {
  navigation = navigation(ref[9]).useNavigation();
  const tmp4 = closure_11();
  let obj = navigation(ref[9]);
  const nativeGiftContext = navigation(ref[10]).useNativeGiftContext();
  ({ recipientUser, premiumType, claimableRewards, selectedGiftingPromotionReward } = nativeGiftContext);
  const obj2 = navigation(ref[10]);
  const giftingPromotionDefaultSelectionV2 = navigation(ref[11]).useGiftingPromotionDefaultSelectionV2(claimableRewards, selectedGiftingPromotionReward);
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
    const intl2 = tmp(tmp2[12]).intl;
    let stringResult = intl2.string(tmp(tmp2[12]).t.lG6a5x);
  } else {
    let intl = tmp(tmp2[12]).intl;
    stringResult = intl.string(tmp(tmp2[12]).t["t9uG/o"]);
  }
  _slicedToArray = stringResult;
  const items1 = [navigation, stringResult];
  const effect = noop.useEffect(() => {
    const obj = { title: null };
    const intl = util.intl;
    obj.title = intl.formatToPlainString(util.t["RMu0/q"], { nitroTierName: stringResult });
    navigation.setOptions(obj);
  }, items1);
  const obj5 = { style: tmp4.container, children: null };
  const obj6 = { ref, contentContainerStyle: tmp4.scrollViewContainer, showsVerticalScrollIndicator: false, children: null };
  const items2 = [closure_8(first(ref[13]), {}), closure_8(first(ref[14]), {}), ];
  let tmp13Result = null != recipientUser;
  if (tmp13Result) {
    const obj7 = { children: null };
    const obj8 = { style: tmp4.senderHeaderTitle, variant: "text-md/semibold", children: null };
    const intl3 = tmp(tmp2[12]).intl;
    obj8.children = intl3.string(tmp(tmp2[12]).t.NlkxGS);
    const items3 = [closure_8(tmp(tmp2[15]).Text, obj8), , ];
    const obj9 = { user: recipientUser };
    items3[1] = closure_8(tmp17(tmp2[16]), obj9);
    const obj10 = { onFocusMessage: callback, setMessagePosition: tmp7[1] };
    items3[2] = closure_8(tmp17(tmp2[17]), obj10);
    obj7.children = items3;
    tmp13Result = closure_10(closure_9, obj7);
  }
  items2[2] = tmp13Result;
  obj6.children = closure_10(closure_5, { children: items2 });
  const items4 = [closure_8(closure_6, obj6), closure_8(first(ref[18]), { defaultSelection: giftingPromotionDefaultSelectionV2 })];
  obj5.children = items4;
  return closure_10(closure_5, obj5);
});