// === Module 12735: GiftingSKUCardsGrid ===

// Module 12735 (GiftingSKUCardsGrid)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4832 */;
import Text_Text from "Text/Text" /* 5088 */;
import useCurrentUser from "useCurrentUser" /* 8302 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 8848 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 9027 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10506 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const isAvatarDecorationRecord = fn(7268).isAvatarDecorationRecord;
const isNameplateRecord = fn(1991).isNameplateRecord;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 100;
let c10 = 150;
const PX_12 = nativeDefault.space.PX_12;
let closure_12 = 2 * nativeDefault.space.PX_24;
let createStyles = fn(5092);
let obj = { card: { width: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderColor: nativeDefault.colors.BORDER_SUBTLE }, previewContainer: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: 100, overflow: "hidden" }, preview: null, selected: null, claimed: null, checkmark: null, textContainer: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.display = "flex";
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj.preview = obj4;
let obj3 = { width: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj.selected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.claimed = { opacity: 0.4 };
obj.checkmark = { position: "absolute", opacity: 1, fontWeight: "bold" };
let obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.textContainer = { alignSelf: "stretch", paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingSKUCard(rewardSkuId) {
  const cResult = c.c(46);
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect } = rewardSkuId);
  const isSelected = rewardSkuId.isSelected;
  const tmp4 = closure_13();
  const currentUser = useCurrentUser.useCurrentUser();
  if (cResult[0] !== isSelected) {
    const obj3 = { selected: isSelected };
    cResult[0] = isSelected;
    cResult[1] = obj3;
    let tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp5);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const tmpResult = useA11yRolesNative;
  const product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(rewardSkuId).product;
  if (cResult[2] === currentUser) {
    if (cResult[3] === isSelected) {
      let tmp7 = cResult[4];
    }
    if (null == product) {
      return null;
    } else {
      const first = product.items[0];
      let selected = isSelected;
      if (isSelected) {
        selected = tmp4.selected;
      }
      if (cResult[5] === tmp4.card) {
        if (cResult[8] === onSelect) {
          class G {
            constructor() {
              return onSelect(rewardSkuId);
            }
          }
          if (cResult[11] === tmp4.preview) {
            if (cResult[12] === claimed) {
              let tmp14 = cResult[13];
            }
            if (cResult[14] === isSelected) {
              if (cResult[15] === first) {
                if (cResult[16] === tmp7) {
                  if (cResult[18] === tmp14) {
                    if (cResult[19] === tmp15) {
                      let tmp22 = cResult[20];
                    }
                    if (cResult[21] === claimed) {
                      if (cResult[22] === tmp4.checkmark) {
                        let tmp25 = cResult[23];
                      }
                      if (cResult[24] === tmp4.previewContainer) {
                        if (cResult[25] === tmp25) {
                          if (cResult[28] !== product.name) {
                            class G {
                              constructor() {
                                return onSelect(rewardSkuId);
                              }
                            }
                            const tmp33 = React5(Text_Text.Text, { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: null });
                            cResult[28] = product.name;
                            cResult[29] = tmp33;
                            const obj4 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: null };
                          }
                          class G {
                            constructor() {
                              return onSelect(rewardSkuId);
                            }
                          }
                        }
                      }
                      class G {
                        constructor() {
                          return onSelect(rewardSkuId);
                        }
                      }
                      const obj5 = { style: tmp4.previewContainer, children: null };
                      const items = [tmp22, tmp25];
                      obj5.children = items;
                      const tmp30 = closure_1_8(React4, obj5);
                      cResult[24] = tmp4.previewContainer;
                      cResult[25] = tmp25;
                      cResult[26] = tmp22;
                      cResult[27] = tmp30;
                    }
                    class G {
                      constructor() {
                        return onSelect(rewardSkuId);
                      }
                    }
                    if (claimed) {
                      class G {
                        constructor() {
                          return onSelect(rewardSkuId);
                        }
                      }
                      const tmp26 = React5(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, { size: "lg", style: null });
                      const obj6 = { size: "lg", style: null };
                    }
                    cResult[21] = claimed;
                    cResult[22] = tmp4.checkmark;
                    cResult[23] = tmp26;
                    tmp25 = tmp26;
                  }
                  class G {
                    constructor() {
                      return onSelect(rewardSkuId);
                    }
                  }
                  const obj7 = { style: tmp14, children: cResult[17] };
                  const tmp24 = React5(React4, obj7);
                  cResult[18] = tmp14;
                  cResult[19] = cResult[17];
                  cResult[20] = tmp24;
                  tmp22 = tmp24;
                }
              }
            }
            class G {
              constructor() {
                return onSelect(rewardSkuId);
              }
            }
            if (isNameplateRecord(first)) {
              class G {
                constructor() {
                  return onSelect(rewardSkuId);
                }
              }
              tmp20[0] = first;
              tmp20[1] = isSelected;
              const tmp17 = React5(NameplateCardPreviewDefault, tmp20);
            } else {
              class G {
                constructor() {
                  return onSelect(rewardSkuId);
                }
              }
            }
            cResult[14] = isSelected;
            cResult[15] = first;
            cResult[16] = tmp7;
            cResult[17] = tmp17;
          }
          const items1 = [tmp4.preview, claimed];
          cResult[11] = tmp4.preview;
          cResult[12] = claimed;
          cResult[13] = items1;
          tmp14 = items1;
        }
        class G {
          constructor() {
            return onSelect(rewardSkuId);
          }
        }
        cResult[8] = onSelect;
        cResult[9] = rewardSkuId;
        cResult[10] = G;
      }
      const items2 = [tmp4.card, selected];
      cResult[5] = tmp4.card;
      cResult[6] = selected;
      cResult[7] = items2;
    }
  }
  let avatarSource;
  if (isSelected) {
    class G {
      constructor() {
        return onSelect(rewardSkuId);
      }
    }
    avatarSource = currentUser.getAvatarSource(null, true, c9);
  }
  cResult[2] = currentUser;
  cResult[3] = isSelected;
  cResult[4] = avatarSource;
  tmp7 = avatarSource;
  const tmpResult2 = useFetchCollectiblesProduct;
}) : (function GiftingSKUCard(rewardSkuId) {
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect: importDefault, isSelected } = rewardSkuId);
  const tmp = closure_13();
  const currentUser = rewardSkuId(isSelected[9]).useCurrentUser();
  const obj = rewardSkuId(isSelected[9]);
  const radioA11yNative = rewardSkuId(isSelected[10]).useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = rewardSkuId(isSelected[10]);
  const product = rewardSkuId(isSelected[11]).useFetchCollectiblesProduct(rewardSkuId).product;
  const items = [isSelected, currentUser];
  if (null == product) {
    return null;
  } else {
    const first = product.items[0];
    const items1 = [tmp.card, ];
    let selected = isSelected;
    if (isSelected) {
      selected = tmp.selected;
    }
    const obj4 = { style: null, onPress: null, activeOpacity: 0.8, disabled: null, accessibilityRole: null, accessibilityState: null, children: null };
    items1[1] = selected;
    obj4.style = items1;
    obj4.onPress = function onPress() {
      return importDefault(rewardSkuId);
    };
    obj4.disabled = claimed;
    obj4.accessibilityRole = accessibilityRole;
    obj4.accessibilityState = accessibilityState;
    const obj5 = { style: tmp.previewContainer, children: null };
    const items2 = [tmp.preview, ];
    let claimed2 = claimed;
    if (claimed) {
      claimed2 = tmp.claimed;
    }
    const obj6 = { style: null, children: null };
    items2[1] = claimed2;
    obj6.style = items2;
    if (isNameplateRecord(first)) {
      const obj7 = { item: first, animate: isSelected };
      let tmp8Result = closure_7(require("NameplateCardPreview"), obj7);
    } else if (isAvatarDecorationRecord(first)) {
      const obj8 = { item: first, size, animate: isSelected, avatarSource: tmp6 };
      tmp8Result = closure_7(require("AvatarDecorationSampleV2"), obj8);
    }
    obj6.children = tmp8Result;
    const items3 = [closure_7(closure_4, obj6), ];
    let tmp8Result2 = claimed;
    if (claimed) {
      const obj9 = { size: "lg", style: tmp.checkmark };
      tmp8Result2 = closure_7(tmp2(isSelected[14]).CheckmarkLargeBoldIcon, obj9);
    }
    items3[1] = tmp8Result2;
    obj5.children = items3;
    const items4 = [closure_8(closure_4, obj5), ];
    const obj10 = { style: tmp.textContainer, children: null };
    const obj11 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
    const items5 = [closure_7(tmp2(isSelected[15]).Text, obj11), ];
    const intl = tmp2(isSelected[16]).intl;
    const string = intl.string;
    const t = tmp2(isSelected[16]).t;
    if (claimed) {
      let stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    const obj12 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: stringResult };
    items5[1] = closure_7(tmp2(isSelected[15]).Text, obj12);
    obj10.children = items5;
    items4[1] = closure_8(closure_4, obj10);
    obj4.children = items4;
    return closure_8(tmp2(isSelected[17]).PressableOpacity, obj4);
  }
  const obj3 = rewardSkuId(isSelected[11]);
}));
createStyles = fn(5092);
let closure_15 = createStyles.createStyles({ grid: { flexDirection: "column", alignSelf: "center", gap: PX_12 }, row: { flexDirection: "row", gap: PX_12 } });
ReactCompilerGating = fn(558);
let obj6 = { alignSelf: "stretch", paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
let obj7 = { grid: { flexDirection: "column", alignSelf: "center", gap: PX_12 }, row: { flexDirection: "row", gap: PX_12 } };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingSKUCardsGrid(onSelect) {
  const cResult = claimableRewards(highlightedSkuId[8]).c(22);
  ({ rewardsToDisplay, claimableRewards } = onSelect);
  onSelect = onSelect.onSelect;
  highlightedSkuId = onSelect.highlightedSkuId;
  let row = closure_15();
  let length = Math.max(1, Math.floor((onSelect(highlightedSkuId[18])().width - closure_12 + PX_12) / (c10 + PX_12)));
  if (cResult[0] === length) {
    if (cResult[1] === rewardsToDisplay) {
      let arr = cResult[2];
    }
    if (arr.length <= 1) {
      length = rewardsToDisplay.length;
    }
    const _Math = Math;
    const result = length * c10;
    const sum = result + Math.max(0, length - 1) * PX_12;
    if (cResult[3] !== sum) {
      const obj2 = { width: sum };
      cResult[3] = sum;
      cResult[4] = obj2;
      let tmp9 = obj2;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === row.grid) {
      if (cResult[6] === tmp9) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === claimableRewards) {
        if (cResult[9] === highlightedSkuId) {
          if (cResult[10] === onSelect) {
            if (cResult[11] === arr) {
              if (cResult[12] === row.row) {
                if (cResult[19] === tmp10) {
                  if (cResult[20] === tmp11) {
                    let tmp15 = cResult[21];
                  }
                  return tmp15;
                }
                class P {
                  constructor(arg0, arg1) {
                    obj = { style: closure_3.row, children: onSelect.map(() => { ... }) };
                    return jsx(View, obj, arg1);
                  }
                }
                const obj3 = { style: tmp10, children: cResult[13] };
                const tmp17 = closure_7(closure_4, obj3);
                cResult[19] = tmp10;
                cResult[20] = cResult[13];
                cResult[21] = tmp17;
                tmp15 = tmp17;
              }
            }
          }
        }
      }
      if (cResult[14] === claimableRewards) {
        if (cResult[15] === highlightedSkuId) {
          if (cResult[16] === onSelect) {
            if (cResult[17] === row.row) {
              let tmp12 = cResult[18];
            }
            const mapped = arr.map(tmp12);
            class P {
              constructor(arg0, arg1) {
                obj = { style: closure_3.row, children: onSelect.map(() => { ... }) };
                return jsx(View, obj, arg1);
              }
            }
            cResult[9] = highlightedSkuId;
            cResult[10] = onSelect;
            cResult[11] = arr;
            row = row.row;
            cResult[12] = row;
            cResult[13] = mapped;
          }
        }
      }
      class P {
        constructor(arg0, arg1) {
          obj = { style: closure_3.row, children: onSelect.map(() => { ... }) };
          return jsx(View, obj, arg1);
        }
      }
      cResult[14] = claimableRewards;
      cResult[15] = highlightedSkuId;
      cResult[16] = onSelect;
      cResult[17] = row.row;
      cResult[18] = P;
      tmp12 = P;
    }
    const items = [row.grid, tmp9];
    cResult[5] = row.grid;
    cResult[6] = tmp9;
    cResult[7] = items;
    tmp10 = items;
  }
  const obj = claimableRewards(highlightedSkuId[8]);
  const chunkResult = onSelect(highlightedSkuId[19]).chunk(rewardsToDisplay, length);
  cResult[0] = length;
  cResult[1] = rewardsToDisplay;
  cResult[2] = chunkResult;
  arr = chunkResult;
  const tmp3Result = onSelect(highlightedSkuId[19]);
}) : (function GiftingSKUCardsGrid(rewardsToDisplay) {
  rewardsToDisplay = rewardsToDisplay.rewardsToDisplay;
  ({ claimableRewards: importDefault, onSelect: dependencyMap, highlightedSkuId: noop } = rewardsToDisplay);
  const tmp = closure_15();
  const row = tmp;
  let length = Math.max(1, Math.floor((useWindowDimensionsDefault().width - closure_12 + PX_12) / (c10 + PX_12)));
  const items = [rewardsToDisplay, length];
  const memo = noop.useMemo(() => _modDef12.chunk(rewardsToDisplay, length), items);
  if (memo.length <= 1) {
    length = rewardsToDisplay.length;
  }
  const result = length * c10;
  const obj = { style: null, children: null };
  const items1 = [tmp.grid, { width: result + Math.max(0, length - 1) * PX_12 }];
  obj.style = items1;
  obj.children = memo.map((arr, index) => React5(React4, {
    style: row.row,
    children: arr.map((rewardSkuId) => {
      closure_0 = rewardSkuId;
      return closure_2_7(closure_2_14, { rewardSkuId, claimed: !closure_1_1.some((item) => item === closure_0), isSelected: closure_1_3 === rewardSkuId, onSelect }, rewardSkuId);
    })
  }, index));
  return closure_7(row, obj);
});