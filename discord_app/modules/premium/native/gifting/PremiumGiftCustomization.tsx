// discord_app/modules/premium/native/gifting/PremiumGiftCustomization.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let navigation, nitroTierName;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollViewContainer: obj3, senderHeaderTitle: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: nativeDefault.space.PX_24 };
obj4 = {
  marginTop: nativeDefault.space.PX_24,
  marginLeft: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_8,
  fontSize: 14,
};
let closure_11 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let claimableRewards;
      let intl3;
      let items;
      let items1;
      let items2;
      let premiumType;
      let recipientUser;
      let ref;
      let selectedGiftingPromotionReward;
      let tmp12;
      let tmp13;
      let obj = navigation(ref[8]);
      const cResult = obj.c(25);
      let obj2 = navigation(ref[9]);
      navigation = obj2.useNavigation();
      const tmp5 = closure_11();
      const obj3 = navigation(ref[10]);
      const nativeGiftContext = obj3.useNativeGiftContext();
      ({ recipientUser, premiumType, claimableRewards, selectedGiftingPromotionReward } = nativeGiftContext);
      const obj4 = navigation(ref[11]);
      const giftingPromotionDefaultSelectionV2 = obj4.useGiftingPromotionDefaultSelectionV2(
        claimableRewards,
        selectedGiftingPromotionReward,
      );
      const tmp8 = nitroTierName(react.useState(0), 2);
      const first = tmp8[0];
      const tmp10 = tmp8[1];
      ref = react.useRef(null);
      if (cResult[0] !== first) {
        const fn = function l() {
          let closure_1;
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
        tmp12 = fn;
      } else {
        tmp12 = cResult[1];
      }
      if (cResult[2] !== premiumType) {
        let stringResult;
        if (premiumType === PremiumTypes.TIER_2) {
          const intl2 = tmp(tmp2[12]).intl;
          stringResult = intl2.string(tmp(tmp2[12]).t.lG6a5x);
        } else {
          let intl = tmp(tmp2[12]).intl;
          stringResult = intl.string(tmp(tmp2[12]).t["t9uG/o"]);
        }
        cResult[2] = premiumType;
        cResult[3] = stringResult;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[3];
      }
      nitroTierName = tmp13;
      if (cResult[4] === navigation) {
        let tmp16;
        let tmp17;
        let tmp21;
        let tmp20;
        if (cResult[5] === tmp13) {
          tmp16 = cResult[6];
          tmp17 = cResult[7];
        }
        const effect = react.useEffect(tmp16, tmp17);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp24 = closure_8(first(ref[13]), {});
          const tmp25 = closure_8(first(ref[14]), {});
          cResult[8] = tmp24;
          cResult[9] = tmp25;
          tmp21 = tmp25;
          tmp20 = tmp24;
        } else {
          tmp20 = cResult[8];
          tmp21 = cResult[9];
        }
        if (cResult[10] === tmp12) {
          if (cResult[11] === recipientUser) {
            let tmp26;
            let tmp32;
            if (cResult[12] === tmp5.senderHeaderTitle) {
              tmp26 = cResult[13];
            }
            if (cResult[14] !== tmp26) {
              const obj6 = { children: items };
              items = [tmp20, tmp21, tmp26];
              const tmp35 = closure_10(closure_5, obj6);
              cResult[14] = tmp26;
              cResult[15] = tmp35;
              tmp32 = tmp35;
            } else {
              tmp32 = cResult[15];
            }
            if (cResult[16] === tmp5.scrollViewContainer) {
              let tmp36;
              let tmp40;
              if (cResult[17] === tmp32) {
                tmp36 = cResult[18];
              }
              if (cResult[19] !== giftingPromotionDefaultSelectionV2) {
                const obj7 = { defaultSelection: giftingPromotionDefaultSelectionV2 };
                const tmp43 = closure_8(first(ref[18]), obj7);
                cResult[19] = giftingPromotionDefaultSelectionV2;
                cResult[20] = tmp43;
                tmp40 = tmp43;
              } else {
                tmp40 = cResult[20];
              }
              if (cResult[21] === tmp5.container) {
                if (cResult[22] === tmp36) {
                  let tmp44;
                  if (cResult[23] === tmp40) {
                    tmp44 = cResult[24];
                  }
                  return tmp44;
                }
              }
              const obj8 = { style: tmp5.container, children: items1 };
              items1 = [tmp36, tmp40];
              const tmp47 = closure_10(closure_5, obj8);
              cResult[21] = tmp5.container;
              cResult[22] = tmp36;
              cResult[23] = tmp40;
              cResult[24] = tmp47;
              tmp44 = tmp47;
            }
            const obj9 = {
              ref,
              contentContainerStyle: tmp5.scrollViewContainer,
              showsVerticalScrollIndicator: false,
              children: tmp32,
            };
            const tmp39 = closure_8(closure_6, obj9);
            cResult[16] = tmp5.scrollViewContainer;
            cResult[17] = tmp32;
            cResult[18] = tmp39;
            tmp36 = tmp39;
          }
        }
        let tmp27 = null != recipientUser;
        if (tmp27) {
          const obj10 = { children: items2 };
          const obj11 = {
            style: tmp5.senderHeaderTitle,
            variant: "text-md/semibold",
            children: intl3.string(navigation(ref[12]).t.NlkxGS),
          };
          const Text = tmp(tmp2[15]).Text;
          intl3 = tmp(tmp2[12]).intl;
          items2 = [closure_8(Text, obj11), ,];
          const obj12 = { user: recipientUser };
          items2[1] = closure_8(first(ref[16]), obj12);
          const obj13 = { onFocusMessage: tmp12, setMessagePosition: tmp10 };
          items2[2] = closure_8(first(ref[17]), obj13);
          tmp27 = closure_10(closure_9, obj10);
        }
        cResult[10] = tmp12;
        cResult[11] = recipientUser;
        cResult[12] = tmp5.senderHeaderTitle;
        cResult[13] = tmp27;
        tmp26 = tmp27;
      }
      class H {
        constructor() {
          let intl;
          let obj2;
          const setOptions = navigation.setOptions;
          const obj = { title: intl.formatToPlainString(intl4.t["RMu0/q"], obj2) };
          intl = intl4.intl;
          obj2 = { nitroTierName };
          setOptions(obj);
        }
      }
      const items3 = [navigation, tmp13];
      cResult[4] = navigation;
      cResult[5] = tmp13;
      cResult[6] = H;
      cResult[7] = items3;
      tmp17 = items3;
      tmp16 = H;
    }
  : () => {
      let claimableRewards;
      let first;
      let intl3;
      let items2;
      let items3;
      let items4;
      let premiumType;
      let recipientUser;
      let ref;
      let selectedGiftingPromotionReward;
      let stringResult;
      let tmp9;
      let obj = navigation(ref[9]);
      navigation = obj.useNavigation();
      const tmp4 = closure_11();
      let obj2 = navigation(ref[10]);
      const nativeGiftContext = obj2.useNativeGiftContext();
      ({ recipientUser, premiumType, claimableRewards, selectedGiftingPromotionReward } = nativeGiftContext);
      const obj3 = navigation(ref[11]);
      const giftingPromotionDefaultSelectionV2 = obj3.useGiftingPromotionDefaultSelectionV2(
        claimableRewards,
        selectedGiftingPromotionReward,
      );
      [first, tmp9] = react.useState(0);
      ref = react.useRef(null);
      const items = [first];
      const callback = react.useCallback(() => {
        let closure_1;
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
        stringResult = intl2.string(tmp(tmp2[12]).t.lG6a5x);
      } else {
        let intl = tmp(tmp2[12]).intl;
        stringResult = intl.string(tmp(tmp2[12]).t["t9uG/o"]);
      }
      const _slicedToArray = stringResult;
      const items1 = [navigation, stringResult];
      const effect = react.useEffect(() => {
        let intl;
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { title: intl.formatToPlainString(intl4.t["RMu0/q"], obj2) };
        intl = intl4.intl;
        obj2 = { nitroTierName: _slicedToArray };
        setOptions(obj);
      }, items1);
      const obj5 = { style: tmp4.container, children: items4 };
      const obj6 = {
        ref,
        contentContainerStyle: tmp4.scrollViewContainer,
        showsVerticalScrollIndicator: false,
        children: closure_10(closure_5, { children: items2 }),
      };
      items2 = [closure_8(first(ref[13]), {}), closure_8(first(ref[14]), {})];
      let tmp14Result = null != recipientUser;
      if (tmp14Result) {
        const obj7 = { children: items3 };
        const obj8 = {
          style: tmp4.senderHeaderTitle,
          variant: "text-md/semibold",
          children: intl3.string(navigation(ref[12]).t.NlkxGS),
        };
        const Text = tmp(tmp2[15]).Text;
        intl3 = tmp(tmp2[12]).intl;
        items3 = [closure_8(Text, obj8), ,];
        const obj9 = { user: recipientUser };
        items3[1] = closure_8(first(ref[16]), obj9);
        const obj10 = { onFocusMessage: callback, setMessagePosition: tmp9 };
        items3[2] = closure_8(first(ref[17]), obj10);
        tmp14Result = closure_10(closure_9, obj7);
      }
      items2[2] = tmp14Result;
      items4 = [
        closure_8(closure_6, obj6),
        closure_8(first(ref[18]), { defaultSelection: giftingPromotionDefaultSelectionV2 }),
      ];
      return closure_10(closure_5, obj5);
    };
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomization.tsx");

export default tmp5;
