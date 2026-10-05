// discord_app/modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import GiftingSKUCardsGridDefault from "GiftingSKUCardsGrid.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let defaultHighlightedReward;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  scroll: { flex: 1 },
  contentContainer: obj3,
  header: obj4,
  subtitle: { textAlign: "center" },
  buttonContainer: obj5,
  headerContainer: obj6,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "column", padding: nativeDefault.space.PX_24 };
obj4 = { textAlign: "center", padding: nativeDefault.space.PX_8 };
obj5 = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24 };
obj6 = { marginBottom: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (defaultHighlightedReward) => {
      let allRewards;
      let claimableRewards;
      let closure_6;
      let first;
      let first1;
      const obj = react2;
      const cResult = obj.c(52);
      defaultHighlightedReward = defaultHighlightedReward.defaultHighlightedReward;
      ({ allRewards, claimableRewards } = defaultHighlightedReward);
      const onSelect = defaultHighlightedReward.onSelect;
      closure_9();
      const bottom = useSafeAreaInsetsDefault().bottom;
      [first, react] = react.useState(defaultHighlightedReward);
      [first1, closure_6] = react.useState(false);
      if (cResult[0] === claimableRewards) {
        if (cResult[1] === first) {
          if (cResult[2] === onSelect) {
            let tmp7 = cResult[3];
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor(arg0) {
                closure_4(arg0);
                closure_6(true);
              }
            }
            cResult[4] = O;
          } else {
            class O {
              constructor(arg0) {
                closure_4(arg0);
                closure_6(true);
              }
            }
          }
          const flag = false;
          if (null != first) {
            class O {
              constructor(arg0) {
                closure_4(arg0);
                closure_6(true);
              }
            }
            if (cResult[8] !== first) {
              class O {
                constructor(arg0) {
                  closure_4(arg0);
                  closure_6(true);
                }
              }
              cResult[8] = first;
              cResult[9] = tmp13;
            } else {
              class O {
                constructor(arg0) {
                  closure_4(arg0);
                  closure_6(true);
                }
              }
            }
            let someResult = claimableRewards.some(tmp13);
            cResult[5] = claimableRewards;
            cResult[6] = first;
            cResult[7] = someResult;
          }
          if (cResult[10] === claimableRewards) {
            class O {
              constructor(arg0) {
                closure_4(arg0);
                closure_6(true);
              }
            }
          }
          class H {
            constructor() {
              if (0 === claimableRewards.length) {
                closure_4(undefined);
              } else if (!flag) {
                let tmp7;
                const someResult =
                  !first1 &&
                  null != defaultHighlightedReward &&
                  claimableRewards.some((item) => item === defaultHighlightedReward);
                if (someResult) {
                  tmp7 = defaultHighlightedReward;
                }
                closure_4(tmp7);
              }
            }
          }
          const items = [first, claimableRewards, first1, defaultHighlightedReward, flag];
          cResult[10] = claimableRewards;
          cResult[11] = defaultHighlightedReward;
          cResult[12] = first1;
          cResult[13] = first;
          cResult[14] = flag;
          cResult[15] = H;
          cResult[16] = items;
        }
      }
      const fn = function c() {
        const found = claimableRewards.find((item) => item === first);
        if (null != found) {
          onSelect(found);
        }
      };
      cResult[0] = claimableRewards;
      cResult[1] = first;
      cResult[2] = onSelect;
      cResult[3] = fn;
    }
  : (defaultHighlightedReward) => {
      let Button;
      let closure_4;
      let first;
      let first1;
      let intl;
      let intl2;
      let intl3;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj7;
      defaultHighlightedReward = defaultHighlightedReward.defaultHighlightedReward;
      const claimableRewards = defaultHighlightedReward.claimableRewards;
      const onSelect = defaultHighlightedReward.onSelect;
      first = undefined;
      closure_4 = undefined;
      first1 = undefined;
      metroRequire = undefined;
      const allRewards = defaultHighlightedReward.allRewards;
      const tmp = closure_9();
      const bottom = useSafeAreaInsetsDefault().bottom;
      [first, closure_4] = react.useState(defaultHighlightedReward);
      [first1, metroRequire] = react.useState(false);
      const items = [onSelect, first, claimableRewards];
      const callback = react.useCallback(() => {
        const found = claimableRewards.find((item) => item === first);
        if (null != found) {
          onSelect(found);
        }
      }, items);
      const items1 = [first, claimableRewards];
      const callback1 = react.useCallback((arg0) => {
        closure_4(arg0);
        closure_6(true);
      }, []);
      const memo = react.useMemo(() => {
        const someResult = null != first && claimableRewards.some((item) => item === first);
        return someResult;
      }, items1);
      const items2 = [first, claimableRewards, first1, defaultHighlightedReward, memo];
      const effect = react.useEffect(() => {
        if (0 === claimableRewards.length) {
          closure_4(undefined);
        } else if (!memo) {
          let tmp7;
          const someResult =
            !first1 &&
            null != defaultHighlightedReward &&
            claimableRewards.some((item) => item === defaultHighlightedReward);
          if (someResult) {
            tmp7 = defaultHighlightedReward;
          }
          closure_4(tmp7);
        }
      }, items2);
      const obj = { style: tmp.container, children: items5 };
      const obj2 = { style: tmp.scroll, contentContainerStyle: tmp.contentContainer, children: items4 };
      const obj3 = { style: tmp.headerContainer, children: items3 };
      const obj4 = {
        style: tmp.header,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        children: intl.string(intl4.t["+ByEeM"]),
      };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items3 = [metroImportDefault(Text, obj4)];
      const obj5 = {
        style: tmp.subtitle,
        variant: "text-md/medium",
        color: "text-default",
        children: intl2.string(intl4.t.vPeaOS),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl4.intl;
      items3[1] = metroImportDefault(Text2, obj5);
      items4 = [
        metroImportAll(hasOwnProperty, obj3),
        metroImportDefault(GiftingSKUCardsGridDefault, {
          rewardsToDisplay: allRewards,
          claimableRewards,
          onSelect: callback1,
          highlightedSkuId: first,
        }),
      ];
      items5 = [metroImportAll(metroRequire, obj2)];
      const obj6 = { style: items6, children: metroImportDefault(Button, obj7) };
      items6 = [tmp.buttonContainer, { paddingBottom: bottom }];
      obj7 = { text: intl3.string(intl4.t["3d0Nmb"]), onPress: callback, disabled: null == first || !memo };
      Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      items5[1] = metroImportDefault(hasOwnProperty, obj6);
      return metroImportAll(hasOwnProperty, obj);
    };
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx");

export default tmp5;
