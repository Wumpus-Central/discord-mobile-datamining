// === Module 10776: GiftingSKUSelectScreen ===

// Module 10776 (GiftingSKUSelectScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import GiftingSKUCardsGridDefault from "GiftingSKUCardsGrid" /* 10777 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scroll: { flex: 1 }, contentContainer: null, header: null, subtitle: null, buttonContainer: null, headerContainer: null };
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
const ReactCompilerGating = fn(558);
let obj7 = { marginBottom: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((defaultHighlightedReward) => {
  const cResult = c.c(52);
  defaultHighlightedReward = defaultHighlightedReward.defaultHighlightedReward;
  ({ allRewards, claimableRewards } = defaultHighlightedReward);
  const onSelect = defaultHighlightedReward.onSelect;
  closure_9();
  const bottom = useSafeAreaInsetsDefault().bottom;
  [first, noop] = noop.useState(defaultHighlightedReward);
  [first1, closure_6] = noop.useState(false);
  if (cResult[0] === claimableRewards) {
    if (cResult[1] === first) {
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor(arg0) {
            tmp = closure_4(defaultHighlightedReward);
            tmp2 = closure_6(true);
            return;
          }
        }
        cResult[4] = O;
      } else {
        class O {
          constructor(arg0) {
            tmp = closure_4(defaultHighlightedReward);
            tmp2 = closure_6(true);
            return;
          }
        }
      }
      if (null == first) {
        class O {
          constructor(arg0) {
            tmp = closure_4(defaultHighlightedReward);
            tmp2 = closure_6(true);
            return;
          }
        }
        if (cResult[10] === claimableRewards) {
          class O {
            constructor(arg0) {
              tmp = closure_4(defaultHighlightedReward);
              tmp2 = closure_6(true);
              return;
            }
          }
        }
        class H {
          constructor() {
            obj = claimableRewards;
            if (0 === claimableRewards.length) {
              tmp9 = closure_4;
              tmp10 = closure_4(undefined);
            } else {
              tmp = c7;
              if (!c7) {
                tmp2 = closure_5;
                someResult = !closure_5;
                if (!closure_5) {
                  tmp4 = defaultHighlightedReward;
                  tmp5 = null;
                  someResult = null != defaultHighlightedReward;
                }
                if (someResult) {
                  someResult = obj.some((item) => item === defaultHighlightedReward);
                }
                tmp7 = undefined;
                tmp6 = closure_4;
                if (someResult) {
                  tmp7 = defaultHighlightedReward;
                }
                tmp6Result = tmp6(tmp7);
              }
            }
            return;
          }
        }
        const items = [first, claimableRewards, first1, defaultHighlightedReward, false];
        cResult[10] = claimableRewards;
        cResult[11] = defaultHighlightedReward;
        cResult[12] = first1;
        cResult[13] = first;
        cResult[14] = false;
        cResult[15] = H;
        cResult[16] = items;
      } else {
        class O {
          constructor(arg0) {
            tmp = closure_4(defaultHighlightedReward);
            tmp2 = closure_6(true);
            return;
          }
        }
        if (cResult[8] !== first) {
          class O {
            constructor(arg0) {
              tmp = closure_4(defaultHighlightedReward);
              tmp2 = closure_6(true);
              return;
            }
          }
          class H {
            constructor() {
              obj = claimableRewards;
              if (0 === claimableRewards.length) {
                tmp9 = closure_4;
                tmp10 = closure_4(undefined);
              } else {
                tmp = c7;
                if (!c7) {
                  tmp2 = closure_5;
                  someResult = !closure_5;
                  if (!closure_5) {
                    tmp4 = defaultHighlightedReward;
                    tmp5 = null;
                    someResult = null != defaultHighlightedReward;
                  }
                  if (someResult) {
                    someResult = obj.some((item) => item === defaultHighlightedReward);
                  }
                  tmp7 = undefined;
                  tmp6 = closure_4;
                  if (someResult) {
                    tmp7 = defaultHighlightedReward;
                  }
                  tmp6Result = tmp6(tmp7);
                }
              }
              return;
            }
          }
          cResult[9] = tmp12;
        } else {
          class O {
            constructor(arg0) {
              tmp = closure_4(defaultHighlightedReward);
              tmp2 = closure_6(true);
              return;
            }
          }
        }
        class H {
          constructor() {
            obj = claimableRewards;
            if (0 === claimableRewards.length) {
              tmp9 = closure_4;
              tmp10 = closure_4(undefined);
            } else {
              tmp = c7;
              if (!c7) {
                tmp2 = closure_5;
                someResult = !closure_5;
                if (!closure_5) {
                  tmp4 = defaultHighlightedReward;
                  tmp5 = null;
                  someResult = null != defaultHighlightedReward;
                }
                if (someResult) {
                  someResult = obj.some((item) => item === defaultHighlightedReward);
                }
                tmp7 = undefined;
                tmp6 = closure_4;
                if (someResult) {
                  tmp7 = defaultHighlightedReward;
                }
                tmp6Result = tmp6(tmp7);
              }
            }
            return;
          }
        }
        cResult[5] = claimableRewards;
        cResult[6] = first;
        cResult[7] = tmp13;
      }
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
}) : ((rewardsToDisplay) => {
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
  const obj4 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["+ByEeM"]);
  const items3 = [React5(Text_Text.Text, obj4), ];
  const obj5 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.vPeaOS);
  items3[1] = React5(Text_Text.Text, obj5);
  obj3.children = items3;
  const items4 = [closure_1_8(hasOwnProperty, obj3), React5(GiftingSKUCardsGridDefault, { rewardsToDisplay: rewardsToDisplay.allRewards, claimableRewards, onSelect: callback1, highlightedSkuId })];
  obj2.children = items4;
  const items5 = [closure_1_8(timestampProducer, obj2), ];
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
  return closure_1_8(hasOwnProperty, obj);
});