// === Module 13237: CheckpointShareActionSheet ===

// Module 13237 (CheckpointShareActionSheet)
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import _modDef3090 from "module_3090" /* 3090 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6075 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6078 */;
import ForwardingIconDefault from "ForwardingIcon" /* 13191 */;
import CheckpointShareCardDefault from "CheckpointShareCard" /* 13238 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ACTION_SHEET_MAX_WIDTH = fn(5303).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj[fn(6078).CheckpointCardTypes.DEFAULT] = _modDef3090.DZQzJn;
obj[fn(6078).CheckpointCardTypes.CHARACTER_ONLY] = _modDef3090.tUU3fe;
obj[fn(6078).CheckpointCardTypes.STATS_ONLY] = _modDef3090.e2UHGT;
const createStyles = fn(5005);
let obj3 = { carousel: { marginHorizontal: -nativeDefault.space.PX_16, height: 284 }, carouselContent: { alignItems: "center", gap: 48 }, pageDots: null, pageDot: null, activePageDot: null };
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16, height: 284 };
obj3.pageDots = { flexDirection: "row", justifyContent: "center", gap: nativeDefault.space.PX_16 };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.ICON_MUTED };
obj3.pageDot = size;
let obj5 = { flexDirection: "row", justifyContent: "center", gap: nativeDefault.space.PX_16 };
obj3.activePageDot = { borderColor: nativeDefault.colors.ICON_STRONG, backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_11 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let obj6 = { borderColor: nativeDefault.colors.ICON_STRONG, backgroundColor: nativeDefault.colors.ICON_STRONG };
size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointShareActionSheet(character) {
  const cResult = character(576).c(52);
  character = character.character;
  ({ stats, onForward: importDefault } = character);
  const tmp4 = closure_11();
  dependencyMap = tmp4;
  const bound = Math.min(useWindowDimensionsDefault().width, items6);
  const ref = first1.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { disallowInterruption: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  obj = character(576);
  let obj2 = first1;
  const nativeGesture = character(5334).useNativeGesture(first);
  let tmp10 = ref(obj2.useState(0), 2);
  first1 = tmp10[0];
  closure_5 = tmp10[1];
  if (cResult[1] !== stats) {
    const stats2 = tmp(6075).toCheckpointMessageComponentData(tmp(6078).CheckpointCardTypes.STATS_ONLY, null, stats).stats;
    let result = null;
    if (null != stats2) {
      result = tmp(6075).transformCheckpoint2026StatsToRowGeneratedComponent(stats2);
      const tmpResult4 = tmp(6075);
    }
    cResult[1] = stats;
    cResult[2] = result;
    let tmp12 = result;
    const tmpResult3 = tmp(6075);
  } else {
    tmp12 = cResult[2];
  }
  stats = tmp12;
  if (null != character) {
    if (tmp14) {
      const items = [tmp(6078).CheckpointCardTypes.CHARACTER_ONLY, tmp(6078).CheckpointCardTypes.DEFAULT, tmp(6078).CheckpointCardTypes.STATS_ONLY];
      items6 = items;
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function x(item) {
        return character(closure_2[14]).getCheckpointShareCardSize(item).width;
      };
      cResult[3] = fn;
      let tmp15 = fn;
    } else {
      tmp15 = cResult[3];
    }
    const mapped = items6.map(tmp15);
    let num4 = mapped[0];
    if (num4 == null) {
      num4 = 0;
    }
    let num6 = mapped[mapped.length - 1];
    if (num6 == null) {
      num6 = 0;
    }
    const mapped1 = mapped.map((item, index) => {
      const substr = mapped.slice(0, index);
      return substr.reduce((acc, item) => acc + item + 48, 0) + (item - num4) / 2;
    });
    closure_11 = tmp17;
    function scrollToIndex(arg0) {

    }
    const ActionSheet = tmp(7358).ActionSheet;
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { title: null };
      const intl = tmp(1125).intl;
      obj4.title = intl.string(tmp(1125).t.RDE0Sc);
      const tmp20 = mapped(tmp(7308).BottomSheetTitleHeader, obj4);
      cResult[4] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[4];
    }
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1125).intl;
      const stringResult = intl2.string(_modDef3090.KXDPot);
      cResult[5] = stringResult;
      let tmp22 = stringResult;
    } else {
      tmp22 = cResult[5];
    }
    if (null != items6[first1]) {
      const obj5 = { text: null };
      const intl3 = tmp(1125).intl;
      obj5.text = intl3.string(mapped1[tmp17]);
    }
    const _Symbol4 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [{ name: "increment" }, { name: "decrement" }];
      cResult[6] = items1;
      let tmp26 = items1;
    } else {
      tmp26 = cResult[6];
    }
    const GestureDetector = tmp(5334).GestureDetector;
    const result1 = (bound - num4) / 2;
    const result2 = (bound - num6) / 2;
    if (cResult[7] === result1) {
      if (cResult[8] === result2) {
        let tmp31 = cResult[9];
      }
      if (cResult[10] === tmp4.carouselContent) {
        if (cResult[11] === tmp31) {
          let tmp32 = cResult[12];
        }
        if (cResult[13] === character) {
          if (cResult[14] === tmp12) {
            let tmp33 = cResult[15];
          }
          function handleMomentumScrollEnd(nativeEvent) {
            const x = nativeEvent.nativeEvent.contentOffset.x;
            closure_1 = 0;
            const item = mapped1.forEach((item, index) => {
              const absolute = Math.abs(item - closure_0);
              if (absolute < Math.abs(mapped1[closure_1] - closure_0)) {
                closure_1 = index;
              }
            });
            closure_5(closure_1);
          }
          const mapped2 = items6.map(tmp33);
          if (cResult[16] === tmp27) {
            if (cResult[17] === handleMomentumScrollEnd) {
              if (cResult[18] === ref) {
                if (cResult[19] === mapped1) {
                  if (cResult[20] === tmp4.carousel) {
                    if (cResult[21] === tmp32) {
                      if (cResult[22] === mapped2) {
                        let tmp35 = cResult[23];
                      }
                      if (cResult[24] === GestureDetector) {
                        if (cResult[25] === nativeGesture) {
                          if (cResult[26] === tmp35) {
                            let tmp38 = cResult[27];
                          }
                          function handleAccessibilityAction(nativeEvent) {
                            const actionName = nativeEvent.nativeEvent.actionName;
                            if ("increment" === actionName) {
                              const sum = first1 + 1;
                              if (typeof scrollToIndex === "function") {
                                let tmp10 = sum < 0;
                                if (!tmp10) {
                                  tmp10 = sum >= items6.length;
                                }
                                if (!tmp10) {
                                  closure_5(sum);
                                  const current2 = ref.current;
                                  if (current2 != null) {
                                    obj = { x: mapped1[sum], animated: true };
                                    current2.scrollTo(obj);
                                  }
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else if ("decrement" === actionName) {
                              const diff = first1 - 1;
                              if (typeof scrollToIndex === "function") {
                                let tmp = diff < 0;
                                if (diff >= 0) {
                                  tmp = diff >= items6.length;
                                }
                                if (!tmp) {
                                  closure_5(diff);
                                  const current = ref.current;
                                  if (current != null) {
                                    const obj2 = { x: mapped1[diff], animated: true };
                                    current.scrollTo(obj2);
                                  }
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                          }
                          if (cResult[28] === tmp21) {
                            if (cResult[29] === handleAccessibilityAction) {
                              if (cResult[30] === tmp26) {
                                if (cResult[31] === tmp38) {
                                  if (cResult[32] === tmp22) {
                                    if (cResult[33] === tmp24) {
                                      let tmp41 = cResult[34];
                                    }
                                    if (cResult[35] === items6) {
                                      if (cResult[36] === first1) {
                                        if (cResult[37] === tmp4.activePageDot) {
                                          if (cResult[38] === tmp4.pageDot) {
                                            if (cResult[39] === tmp4.pageDots) {
                                              let tmp44 = cResult[40];
                                            }
                                            const _Symbol5 = Symbol;
                                            if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl4 = tmp(1125).intl;
                                              const stringResult1 = intl4.string(tmp(1125).t.I3ltXO);
                                              const obj6 = { IconComponent: ForwardingIconDefault };
                                              const tmp51 = mapped(tmp(6971).TableRowIcon, obj6);
                                              cResult[41] = stringResult1;
                                              cResult[42] = tmp51;
                                              let tmp48 = tmp51;
                                              let tmp47 = stringResult1;
                                            } else {
                                              tmp47 = cResult[41];
                                              tmp48 = cResult[42];
                                            }
                                            function handleForward() {
                                              if (null != closure_11) {
                                                ActionSheetActionCreatorsDefault.hideActionSheet();
                                                closure_1_1(tmp);
                                              }
                                            }
                                            if (cResult[43] === handleForward) {
                                              if (cResult[44] === tmp52) {
                                                let tmp53 = cResult[45];
                                              }
                                              if (cResult[46] === ActionSheet) {
                                                if (cResult[47] === tmp41) {
                                                  if (cResult[48] === tmp44) {
                                                    if (cResult[49] === tmp53) {
                                                      if (cResult[50] === tmp18) {
                                                        let tmp56 = cResult[51];
                                                      }
                                                      return tmp56;
                                                    }
                                                  }
                                                }
                                              }
                                              const obj7 = { startExpanded: true, header: tmp18, children: null };
                                              const items2 = [tmp41, tmp44, tmp53];
                                              obj7.children = items2;
                                              const tmp58 = num4(ActionSheet, obj7);
                                              cResult[46] = ActionSheet;
                                              cResult[47] = tmp41;
                                              cResult[48] = tmp44;
                                              cResult[49] = tmp53;
                                              cResult[50] = tmp18;
                                              cResult[51] = tmp58;
                                              tmp56 = tmp58;
                                            }
                                            const obj8 = { hasIcons: true, children: null };
                                            const obj9 = { label: tmp47, icon: tmp48, onPress: handleForward, disabled: null == tmp17 };
                                            obj8.children = mapped(tmp(6963).TableRow, obj9);
                                            const tmp55 = mapped(tmp(7047).TableRowGroup, obj8);
                                            cResult[43] = handleForward;
                                            cResult[44] = null == tmp17;
                                            cResult[45] = tmp55;
                                            tmp53 = tmp55;
                                          }
                                        }
                                      }
                                    }
                                    let tmp45 = items6.length > 1;
                                    if (tmp45) {
                                      const obj10 = {
                                        style: tmp4.pageDots,
                                        accessibilityElementsHidden: true,
                                        importantForAccessibility: "no-hide-descendants",
                                        children: items6.map((item, index) => {
                                                                              const style = [closure_2.pageDot, ];
                                                                              let activePageDot = index === first1;
                                                                              if (activePageDot) {
                                                                                activePageDot = closure_2.activePageDot;
                                                                              }
                                                                              style[1] = activePageDot;
                                                                              return closure_2_8(timestampProducer, { style }, item);
                                                                            })
                                      };
                                      tmp45 = mapped(tmp21, obj10);
                                    }
                                    cResult[35] = items6;
                                    cResult[36] = first1;
                                    cResult[37] = tmp4.activePageDot;
                                    cResult[38] = tmp4.pageDot;
                                    cResult[39] = tmp4.pageDots;
                                    cResult[40] = tmp45;
                                    tmp44 = tmp45;
                                  }
                                }
                              }
                            }
                          }
                          const obj11 = { accessible: true, accessibilityRole: "adjustable", accessibilityLabel: tmp22, accessibilityValue: tmp24, accessibilityActions: tmp26, onAccessibilityAction: handleAccessibilityAction, children: tmp38 };
                          const tmp43 = mapped(tmp21, obj11);
                          cResult[28] = tmp21;
                          cResult[29] = handleAccessibilityAction;
                          cResult[30] = tmp26;
                          cResult[31] = tmp38;
                          cResult[32] = tmp22;
                          cResult[33] = tmp24;
                          cResult[34] = tmp43;
                          tmp41 = tmp43;
                        }
                      }
                      const obj12 = { gesture: nativeGesture, children: tmp35 };
                      const tmp40 = mapped(GestureDetector, obj12);
                      cResult[24] = GestureDetector;
                      cResult[25] = nativeGesture;
                      cResult[26] = tmp35;
                      cResult[27] = tmp40;
                      tmp38 = tmp40;
                    }
                  }
                }
              }
            }
          }
          const obj13 = { ref, horizontal: true, nestedScrollEnabled: true, style: tmp28, contentContainerStyle: tmp32, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: mapped1, onMomentumScrollEnd: handleMomentumScrollEnd, children: mapped2 };
          const tmp37 = mapped(tmp27, obj13);
          cResult[16] = tmp27;
          cResult[17] = handleMomentumScrollEnd;
          cResult[18] = ref;
          cResult[19] = mapped1;
          cResult[20] = tmp4.carousel;
          cResult[21] = tmp32;
          cResult[22] = mapped2;
          cResult[23] = tmp37;
          tmp35 = tmp37;
        }
        const fn2 = function $(cardType) {
          return closure_2_8(CheckpointShareCardDefault, { cardType, character, stats }, cardType);
        };
        cResult[13] = character;
        cResult[14] = tmp12;
        cResult[15] = fn2;
        tmp33 = fn2;
      }
      const items3 = [tmp4.carouselContent, tmp31];
      cResult[10] = tmp4.carouselContent;
      cResult[11] = tmp31;
      cResult[12] = items3;
      tmp32 = items3;
    }
    const obj14 = { paddingLeft: result1, paddingRight: result2 };
    cResult[7] = result1;
    cResult[8] = result2;
    cResult[9] = obj14;
    tmp31 = obj14;
  }
  if (null != character) {
    const items4 = [tmp(6078).CheckpointCardTypes.CHARACTER_ONLY];
    items6 = items4;
  } else if (tmp14) {
    const items5 = [tmp(6078).CheckpointCardTypes.STATS_ONLY];
    items6 = items5;
  } else {
    items6 = [];
  }
  const tmpResult = character(5334);
}) : (function CheckpointShareActionSheet(character) {
  character = character.character;
  let stats = character.stats;
  const onForward = character.onForward;
  let ref;
  first = undefined;
  closure_6 = undefined;
  let memo;
  let items7;
  let mapped;
  let num;
  let mapped1;
  closure_12 = undefined;
  const tmp = mapped1();
  _slicedToArray = tmp;
  const bound = Math.min(stats(onForward[11])().width, memo);
  ref = ref.useRef(null);
  const nativeGesture = character(onForward[12]).useNativeGesture({ disallowInterruption: true });
  [first, closure_6] = ref.useState(0);
  const items = [stats];
  memo = ref.useMemo(() => {
    stats = checkpoint_CheckpointMessageComponentUtils.toCheckpointMessageComponentData(CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY, null, stats).stats;
    let result = null;
    if (null != stats) {
      result = checkpoint_CheckpointMessageComponentUtils.transformCheckpoint2026StatsToRowGeneratedComponent(stats);
      const tmpResult = checkpoint_CheckpointMessageComponentUtils;
    }
    return result;
  }, items);
  if (null != character) {
    if (tmp11) {
      const items1 = [tmp6(tmp3[5]).CheckpointCardTypes.CHARACTER_ONLY, tmp6(tmp3[5]).CheckpointCardTypes.DEFAULT, tmp6(tmp3[5]).CheckpointCardTypes.STATS_ONLY];
      items7 = items1;
    }
    mapped = items7.map((item) => character(onForward[14]).getCheckpointShareCardSize(item).width);
    num = mapped[0];
    if (num == null) {
      num = 0;
    }
    let num3 = mapped[mapped.length - 1];
    if (num3 == null) {
      num3 = 0;
    }
    mapped1 = mapped.map((item, index) => {
      const substr = mapped.slice(0, index);
      return substr.reduce((acc, item) => acc + item + 48, 0) + (item - num) / 2;
    });
    closure_12 = tmp14;
    let obj2 = { startExpanded: true, header: null, children: null };
    const obj3 = { title: null };
    const intl = tmp6(tmp3[18]).intl;
    obj3.title = intl.string(tmp6(tmp3[18]).t.RDE0Sc);
    obj2.header = items7(tmp6(tmp3[17]).BottomSheetTitleHeader, obj3);
    const obj4 = { accessible: true, accessibilityRole: "adjustable", accessibilityLabel: null, accessibilityValue: null, accessibilityActions: null, onAccessibilityAction: null, children: null };
    const intl2 = tmp6(tmp3[18]).intl;
    obj4.accessibilityLabel = intl2.string(tmp2(tmp3[6]).KXDPot);
    let tmp18;
    if (null != items7[first]) {
      const obj5 = { text: null };
      const intl3 = tmp6(tmp3[18]).intl;
      obj5.text = intl3.string(num[tmp14]);
      tmp18 = obj5;
    }
    obj4.accessibilityValue = tmp18;
    const items2 = [{ name: "increment" }, { name: "decrement" }];
    obj4.accessibilityActions = items2;
    obj4.onAccessibilityAction = function handleAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("increment" === actionName) {
        const sum = first + 1;
        let tmp9 = sum < 0;
        if (!tmp9) {
          tmp9 = sum >= items7.length;
        }
        if (!tmp9) {
          closure_6(sum);
          const current2 = ref.current;
          if (current2 != null) {
            obj = { x: mapped1[sum], animated: true };
            current2.scrollTo(obj);
          }
        }
      } else if ("decrement" === actionName) {
        const diff = first - 1;
        let tmp2 = diff < 0;
        if (diff >= 0) {
          tmp2 = diff >= items7.length;
        }
        if (!tmp2) {
          closure_6(diff);
          const current = ref.current;
          if (current != null) {
            const obj2 = { x: mapped1[diff], animated: true };
            current.scrollTo(obj2);
          }
        }
      }
    };
    const obj6 = { gesture: nativeGesture, children: null };
    const obj7 = { ref, horizontal: true, nestedScrollEnabled: true, style: tmp.carousel, contentContainerStyle: null, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: null, onMomentumScrollEnd: null, children: null };
    const items3 = [tmp.carouselContent, ];
    const obj8 = { paddingLeft: (bound - num) / 2, paddingRight: (bound - num3) / 2 };
    items3[1] = obj8;
    obj7.contentContainerStyle = items3;
    obj7.snapToOffsets = mapped1;
    obj7.onMomentumScrollEnd = function handleMomentumScrollEnd(nativeEvent) {
      const x = nativeEvent.nativeEvent.contentOffset.x;
      closure_1 = 0;
      const item = mapped1.forEach((item, index) => {
        const absolute = Math.abs(item - closure_0);
        if (absolute < Math.abs(mapped1[closure_1] - closure_0)) {
          closure_1 = index;
        }
      });
      closure_6(closure_1);
    };
    obj7.children = items7.map((cardType) => closure_2_8(CheckpointShareCardDefault, { cardType, character, stats: memo }, cardType));
    obj6.children = items7(first, obj7);
    obj4.children = items7(tmp6(tmp3[12]).GestureDetector, obj6);
    const items4 = [items7(closure_6, obj4), , ];
    let tmp16Result = items7.length > 1;
    if (tmp16Result) {
      const obj9 = {
        style: tmp.pageDots,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: items7.map((item, index) => {
              const style = [closure_3.pageDot, ];
              let activePageDot = index === first;
              if (activePageDot) {
                activePageDot = closure_3.activePageDot;
              }
              style[1] = activePageDot;
              return closure_2_8(timestampProducer, { style }, item);
            })
      };
      tmp16Result = tmp16(tmp17, obj9);
    }
    items4[1] = tmp16Result;
    const obj10 = { hasIcons: true, children: null };
    const obj11 = { label: null, icon: null, onPress: null, disabled: null };
    const intl4 = tmp6(tmp3[18]).intl;
    obj11.label = intl4.string(tmp6(tmp3[18]).t.I3ltXO);
    const obj12 = { IconComponent: tmp2(tmp3[20]) };
    obj11.icon = items7(tmp6(tmp3[19]).TableRowIcon, obj12);
    obj11.onPress = function handleForward() {
      if (null != closure_12) {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        onForward(tmp);
      }
    };
    obj11.disabled = null == items7[first];
    obj10.children = items7(tmp6(tmp3[22]).TableRow, obj11);
    items4[2] = items7(tmp6(tmp3[21]).TableRowGroup, obj10);
    obj2.children = items4;
    return mapped(tmp6(tmp3[16]).ActionSheet, obj2);
  }
  if (null != character) {
    const items5 = [tmp6(tmp3[5]).CheckpointCardTypes.CHARACTER_ONLY];
    items7 = items5;
  } else if (tmp11) {
    const items6 = [tmp6(tmp3[5]).CheckpointCardTypes.STATS_ONLY];
    items7 = items6;
  } else {
    items7 = [];
  }
});