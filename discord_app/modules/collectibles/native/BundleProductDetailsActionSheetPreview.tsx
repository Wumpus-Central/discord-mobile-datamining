// === Module 12988: BundleProductDetailsActionSheetPreview ===

// Module 12988 (BundleProductDetailsActionSheetPreview)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7078 */;
import useShopProductItems from "useShopProductItems" /* 7853 */;
import IndividualProductPreview from "IndividualProductPreview" /* 12990 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let activeIndex;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let memo;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let size;
({ memo, useCallback: closure_4, useLayoutEffect: hasOwnProperty, useMemo: metroRequire, useState: metroImportDefault } = react);
({ Pressable: metroImportAll, ScrollView: c9, View: c10 } = react_native);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { previewContainer: obj2, bundleThumbnail: size, selectedRing: rect, bundleThumbnailRow: obj3, bundleContainer: obj4, bundleInfoContainer: obj5 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { width: 56, height: 56, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, overflow: "hidden" };
rect = { position: "absolute", top: -2, left: -2, right: -2, bottom: -2, borderRadius: nativeDefault.radii.sm + 2, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG };
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: 2 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj5 = { gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onTrackPress) => {
  let index;
  let isSelected;
  let item;
  let items;
  let label;
  let setSelected;
  let trackedSkuId;
  const obj = index(trackedSkuId[8]);
  const cResult = obj.c(19);
  ({ item, index } = onTrackPress);
  ({ isSelected, setSelected } = onTrackPress);
  ({ label, trackedSkuId } = onTrackPress);
  onTrackPress = onTrackPress.onTrackPress;
  if (cResult[0] === index) {
    if (cResult[1] === onTrackPress) {
      if (cResult[2] === setSelected) {
        let tmp3;
        let tmp6;
        if (cResult[3] === trackedSkuId) {
          tmp3 = cResult[4];
        }
        const tmp5 = closure_14();
        if (cResult[5] !== item) {
          const obj2 = { item, size: 56 };
          const tmp9 = closure_12(setSelected(trackedSkuId[9]), obj2);
          cResult[5] = item;
          cResult[6] = tmp9;
          tmp6 = tmp9;
        } else {
          tmp6 = cResult[6];
        }
        if (cResult[7] === tmp5.bundleThumbnail) {
          let tmp10;
          if (cResult[8] === tmp6) {
            tmp10 = cResult[9];
          }
          if (cResult[10] === isSelected) {
            let tmp14;
            if (cResult[11] === tmp5.selectedRing) {
              tmp14 = cResult[12];
            }
            if (cResult[13] === tmp3) {
              if (cResult[14] === isSelected) {
                if (cResult[15] === label) {
                  if (cResult[16] === tmp10) {
                    let tmp18;
                    if (cResult[17] === tmp14) {
                      tmp18 = cResult[18];
                    }
                    return tmp18;
                  }
                }
              }
            }
            const obj3 = { role: "radio", "aria-checked": isSelected, onPress: tmp3, "aria-label": label, children: items };
            items = [tmp10, tmp14];
            const tmp21 = closure_13(closure_8, obj3);
            cResult[13] = tmp3;
            cResult[14] = isSelected;
            cResult[15] = label;
            cResult[16] = tmp10;
            cResult[17] = tmp14;
            cResult[18] = tmp21;
            tmp18 = tmp21;
          }
          let tmp15 = isSelected;
          if (tmp15) {
            const obj4 = { style: tmp5.selectedRing, pointerEvents: "none" };
            tmp15 = closure_12(closure_10, obj4);
          }
          cResult[10] = isSelected;
          cResult[11] = tmp5.selectedRing;
          cResult[12] = tmp15;
          tmp14 = tmp15;
        }
        const obj5 = { style: tmp5.bundleThumbnail, children: tmp6 };
        const tmp13 = closure_12(closure_10, obj5);
        cResult[7] = tmp5.bundleThumbnail;
        cResult[8] = tmp6;
        cResult[9] = tmp13;
        tmp10 = tmp13;
      }
    }
  }
  const fn = function n() {
    if (onTrackPress != null) {
      tmp(ShopCtaEnum.BUNDLE_VIEW_PRODUCT, trackedSkuId);
    }
    setSelected(index);
  };
  cResult[0] = index;
  cResult[1] = onTrackPress;
  cResult[2] = setSelected;
  cResult[3] = trackedSkuId;
  cResult[4] = fn;
  tmp3 = fn;
}) : ((index) => {
  let isSelected;
  let item;
  let items1;
  let label;
  let setSelected;
  index = index.index;
  ({ isSelected, setSelected } = index);
  const trackedSkuId = index.trackedSkuId;
  const onTrackPress = index.onTrackPress;
  const items = [setSelected, index, onTrackPress, trackedSkuId];
  ({ item, label } = index);
  const tmp = closure_4(() => {
    if (onTrackPress != null) {
      tmp(ShopCtaEnum.BUNDLE_VIEW_PRODUCT, trackedSkuId);
    }
    setSelected(index);
  }, items);
  const tmp2 = closure_14();
  const obj = { role: "radio", "aria-checked": isSelected, onPress: tmp, "aria-label": label, children: items1 };
  items1 = [, ];
  const obj2 = { style: tmp2.bundleThumbnail, children: closure_12(setSelected(trackedSkuId[9]), { item, size: 56 }) };
  items1[0] = closure_12(closure_10, obj2);
  if (isSelected) {
    const obj3 = { style: tmp2.selectedRing, pointerEvents: "none" };
    isSelected = closure_12(closure_10, obj3);
  }
  items1[1] = isSelected;
  return closure_13(closure_8, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((activeIndex) => {
  let bundledProducts;
  let first;
  let items;
  let onSelect;
  let tmp7;
  let tmp9;
  let obj = bundledProducts(onSelect[8]);
  const cResult = obj.c(19);
  ({ items, bundledProducts } = activeIndex);
  activeIndex = activeIndex.activeIndex;
  onSelect = activeIndex.onSelect;
  const onTrackPress = activeIndex.onTrackPress;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disallowInterruption: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = bundledProducts(onSelect[10]);
  const nativeGesture = tmpResult.useNativeGesture(first);
  const bundleThumbnailRow = tmp4.bundleThumbnailRow;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = bundledProducts(tmp2[11]).intl;
    const stringResult = intl.string(bundledProducts(onSelect[11]).t.cTbdgu);
    cResult[1] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === activeIndex) {
    if (cResult[3] === bundledProducts) {
      if (cResult[4] === items) {
        if (cResult[5] === onSelect) {
          if (cResult[6] === onTrackPress) {
            tmp9 = cResult[7];
          }
          if (cResult[13] === tmp4.bundleThumbnailRow) {
            let tmp12;
            if (cResult[14] === tmp9) {
              tmp12 = cResult[15];
            }
            if (cResult[16] === tmp12) {
              let tmp16;
              if (cResult[17] === nativeGesture) {
                tmp16 = cResult[18];
              }
              return tmp16;
            }
            const obj3 = { gesture: nativeGesture, children: tmp12 };
            const tmp18 = closure_12(bundledProducts(onSelect[10]).GestureDetector, obj3);
            cResult[16] = tmp12;
            cResult[17] = nativeGesture;
            cResult[18] = tmp18;
            tmp16 = tmp18;
          }
          const obj4 = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: bundleThumbnailRow, role: "radiogroup", "aria-label": tmp7, children: tmp9 };
          const tmp15 = closure_12(closure_9, obj4);
          cResult[13] = tmp4.bundleThumbnailRow;
          cResult[14] = tmp9;
          cResult[15] = tmp15;
          tmp12 = tmp15;
        }
      }
    }
  }
  if (cResult[8] === activeIndex) {
    if (cResult[9] === bundledProducts) {
      if (cResult[10] === onSelect) {
        let tmp10;
        if (cResult[11] === onTrackPress) {
          tmp10 = cResult[12];
        }
        const mapped = items.map(tmp10);
        cResult[2] = activeIndex;
        cResult[3] = bundledProducts;
        cResult[4] = items;
        cResult[5] = onSelect;
        cResult[6] = onTrackPress;
        cResult[7] = mapped;
        tmp9 = mapped;
      }
    }
  }
  class P {
    constructor(arg0, arg1) {
      obj = { item: activeIndex, index: arg1, isSelected: arg1 === activeIndex, setSelected: onSelect, label: null, trackedSkuId: null, onTrackPress: null };
      tmp3 = bundledProducts;
      name = undefined;
      tmp = jsx;
      tmp2 = closure_15;
      if (bundledProducts != null) {
        tmp5 = tmp3[arg1];
        if (tmp5 != null) {
          name = tmp5.name;
        }
      }
      if (name == null) {
        name = activeIndex.skuId;
      }
      obj.label = name;
      skuId = undefined;
      if (tmp3 != null) {
        tmp7 = tmp3[arg1];
        if (tmp7 != null) {
          skuId = tmp7.skuId;
        }
      }
      if (skuId == null) {
        skuId = activeIndex.skuId;
      }
      obj.trackedSkuId = skuId;
      obj.onTrackPress = onTrackPress;
      return tmp(tmp2, obj, activeIndex.skuId);
    }
  }
  cResult[8] = activeIndex;
  cResult[9] = bundledProducts;
  cResult[10] = onSelect;
  cResult[11] = onTrackPress;
  cResult[12] = P;
  tmp10 = P;
}) : ((arg0) => {
  let intl;
  let items;
  let obj3;
  let onTrackPress;
  let setSelected;
  ({ items, bundledProducts: require, activeIndex: importDefault, onSelect: dependencyMap, onTrackPress: _slicedToArray } = arg0);
  const tmp = closure_14();
  let obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  const obj2 = { gesture: nativeGesture, children: closure_12(closure_9, obj3) };
  obj3 = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: tmp.bundleThumbnailRow,
    role: "radiogroup",
    "aria-label": intl.string(intl2.t.cTbdgu),
    children: items.map((item, index) => {
      let name;
      let skuId;
      const obj = { item, index, isSelected: index === importDefault, setSelected: dependencyMap, label: name, trackedSkuId: skuId, onTrackPress: _slicedToArray };
      name = undefined;
      if (require != null) {
        if (require[index] != null) {
          name = tmp5.name;
        }
      }
      if (name == null) {
        name = item.skuId;
      }
      skuId = undefined;
      if (require != null) {
        if (require[index] != null) {
          skuId = tmp7.skuId;
        }
      }
      if (skuId == null) {
        skuId = item.skuId;
      }
      return closure_12(closure_15, obj, item.skuId);
    })
  };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  intl = intl2.intl;
  return closure_12(GestureDetector, obj2);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bundleContainer;
  let bundleInfoContainer;
  let bundledProducts;
  let firstAvatarDecoration;
  let firstProfileEffect;
  let firstProfileFrame;
  let handlePreviewPress;
  let items;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let num;
  let onActiveItemChange;
  let onTrackPress;
  let product;
  let tmp6;
  let tmp8;
  let tmp9;
  let width;
  const obj = react2;
  const cResult = obj.c(52);
  ({ product, width, handlePreviewPress, onTrackPress, onActiveItemChange } = arg0);
  const tmp4 = closure_14();
  [num, tmp6] = metroImportDefault(0);
  _slicedToArray(metroImportDefault(0), 2);
  ({ items, bundledProducts } = product);
  [tmp8, tmp9] = metroImportDefault(product.skuId);
  _slicedToArray(metroImportDefault(product.skuId), 2);
  const obj2 = useShopProductItems;
  const shopProductItems = obj2.useShopProductItems(product);
  ({ firstAvatarDecoration, firstProfileFrame, firstProfileEffect } = shopProductItems);
  if (product.skuId !== tmp8) {
    tmp9(product.skuId);
    tmp6(0);
  }
  let closure_1 = tmp13;
  if (cResult[0] === items[num]) {
    let tmp14;
    let tmp15;
    let tmp21;
    let tmp23;
    if (cResult[1] === onActiveItemChange) {
      tmp14 = cResult[2];
      tmp15 = cResult[3];
    }
    hasOwnProperty(tmp14, tmp15);
    let tmp19;
    if (bundledProducts != null) {
      tmp19 = bundledProducts[num];
    }
    let name;
    if (tmp19 != null) {
      name = tmp19.name;
    }
    if (name == null) {
      name = tmp13.skuId;
    }
    if (cResult[4] !== items[num].type) {
      const tmpResult = CollectiblesUtils;
      const collectibleTypeLabel = tmpResult.getCollectibleTypeLabel(tmp13.type);
      cResult[4] = items[num].type;
      cResult[5] = collectibleTypeLabel;
      tmp21 = collectibleTypeLabel;
    } else {
      tmp21 = cResult[5];
    }
    if (cResult[6] !== items[num]) {
      const items1 = [items[num]];
      cResult[6] = items[num];
      cResult[7] = items1;
      tmp23 = items1;
    } else {
      tmp23 = cResult[7];
    }
    if (cResult[8] === items[num].skuId) {
      if (cResult[9] === items[num].type) {
        let tmp24;
        if (cResult[10] === tmp23) {
          tmp24 = cResult[11];
        }
        if (cResult[12] === tmp24) {
          if (cResult[13] === firstAvatarDecoration) {
            if (cResult[14] === firstProfileEffect) {
              if (cResult[15] === firstProfileFrame) {
                if (cResult[16] === handlePreviewPress) {
                  if (cResult[17] === onTrackPress) {
                    let tmp26;
                    let tmp29;
                    let tmp32;
                    let tmp34;
                    if (cResult[18] === width) {
                      tmp26 = cResult[19];
                    }
                    ({ bundleContainer, bundleInfoContainer } = tmp4);
                    if (cResult[20] !== product.name) {
                      const obj3 = { variant: "heading-xl/bold", children: product.name };
                      const tmp31 = closure_12(Text_Text.Text, obj3);
                      cResult[20] = product.name;
                      cResult[21] = tmp31;
                      tmp29 = tmp31;
                    } else {
                      tmp29 = cResult[21];
                    }
                    if (cResult[22] !== items.length) {
                      const intl = intl2.intl;
                      const obj5 = { num: items.length };
                      const formatToPlainStringResult = intl.formatToPlainString(intl2.t["/0Yndu"], obj5);
                      cResult[22] = items.length;
                      cResult[23] = formatToPlainStringResult;
                      tmp32 = formatToPlainStringResult;
                    } else {
                      tmp32 = cResult[23];
                    }
                    if (cResult[24] !== tmp32) {
                      const obj6 = { variant: "text-sm/medium", color: "text-default", children: tmp32 };
                      const tmp36 = closure_12(Text_Text.Text, obj6);
                      cResult[24] = tmp32;
                      cResult[25] = tmp36;
                      tmp34 = tmp36;
                    } else {
                      tmp34 = cResult[25];
                    }
                    if (cResult[26] === tmp4.bundleInfoContainer) {
                      if (cResult[27] === tmp29) {
                        let tmp37;
                        if (cResult[28] === tmp34) {
                          tmp37 = cResult[29];
                        }
                        if (cResult[30] === num) {
                          if (cResult[31] === bundledProducts) {
                            if (cResult[32] === items) {
                              let tmp41;
                              let tmp45;
                              if (cResult[33] === onTrackPress) {
                                tmp41 = cResult[34];
                              }
                              if (cResult[35] !== tmp21) {
                                let tmp46 = null != tmp21;
                                if (tmp46) {
                                  const _HermesInternal = HermesInternal;
                                  const obj7 = { variant: "text-sm/medium", color: "text-muted", children: " - " + tmp21 };
                                  const Text = Text_Text.Text;
                                  tmp46 = closure_12(Text, obj7);
                                }
                                cResult[35] = tmp21;
                                cResult[36] = tmp46;
                                tmp45 = tmp46;
                              } else {
                                tmp45 = cResult[36];
                              }
                              if (cResult[37] === name) {
                                let tmp49;
                                if (cResult[38] === tmp45) {
                                  tmp49 = cResult[39];
                                }
                                if (cResult[40] === tmp4.bundleInfoContainer) {
                                  if (cResult[41] === tmp41) {
                                    let tmp52;
                                    if (cResult[42] === tmp49) {
                                      tmp52 = cResult[43];
                                    }
                                    if (cResult[44] === tmp4.bundleContainer) {
                                      if (cResult[45] === tmp37) {
                                        let tmp56;
                                        if (cResult[46] === tmp52) {
                                          tmp56 = cResult[47];
                                        }
                                        if (cResult[48] === tmp4.previewContainer) {
                                          if (cResult[49] === tmp56) {
                                            let tmp60;
                                            if (cResult[50] === tmp26) {
                                              tmp60 = cResult[51];
                                            }
                                            return tmp60;
                                          }
                                        }
                                        const obj8 = { style: tmp25, children: items2 };
                                        items2 = [tmp26, tmp56];
                                        const tmp63 = map1(authStore, obj8);
                                        cResult[48] = tmp4.previewContainer;
                                        cResult[49] = tmp56;
                                        cResult[50] = tmp26;
                                        cResult[51] = tmp63;
                                        tmp60 = tmp63;
                                      }
                                    }
                                    const obj9 = { style: bundleContainer, children: items3 };
                                    items3 = [tmp37, tmp52];
                                    const tmp59 = map1(authStore, obj9);
                                    cResult[44] = tmp4.bundleContainer;
                                    cResult[45] = tmp37;
                                    cResult[46] = tmp52;
                                    cResult[47] = tmp59;
                                    tmp56 = tmp59;
                                  }
                                }
                                const obj10 = { style: tmp4.bundleInfoContainer, children: items4 };
                                items4 = [tmp41, tmp49];
                                const tmp55 = map1(authStore, obj10);
                                cResult[40] = tmp4.bundleInfoContainer;
                                cResult[41] = tmp41;
                                cResult[42] = tmp49;
                                cResult[43] = tmp55;
                                tmp52 = tmp55;
                              }
                              const obj11 = { variant: "text-sm/medium", color: "text-default", children: items5 };
                              items5 = [name, tmp45];
                              const tmp51 = map1(Text_Text.Text, obj11);
                              cResult[37] = name;
                              cResult[38] = tmp45;
                              cResult[39] = tmp51;
                              tmp49 = tmp51;
                            }
                          }
                        }
                        const obj12 = { items, bundledProducts, activeIndex: num, onSelect: tmp6, onTrackPress };
                        const tmp44 = closure_12(closure_16, obj12);
                        cResult[30] = num;
                        cResult[31] = bundledProducts;
                        cResult[32] = items;
                        cResult[33] = onTrackPress;
                        cResult[34] = tmp44;
                        tmp41 = tmp44;
                      }
                    }
                    const obj13 = { style: bundleInfoContainer, children: items6 };
                    items6 = [tmp29, tmp34];
                    const tmp40 = map1(authStore, obj13);
                    cResult[26] = tmp4.bundleInfoContainer;
                    cResult[27] = tmp29;
                    cResult[28] = tmp34;
                    cResult[29] = tmp40;
                    tmp37 = tmp40;
                  }
                }
              }
            }
          }
        }
        const obj14 = { product: tmp24, width, avatarDecorationOverride: firstAvatarDecoration, profileFrameOverride: firstProfileFrame, profileEffectOverride: firstProfileEffect, handlePreviewPress, onTrackPress };
        const tmp28 = closure_12(IndividualProductPreview.IndividualProductPreview, obj14);
        cResult[12] = tmp24;
        cResult[13] = firstAvatarDecoration;
        cResult[14] = firstProfileEffect;
        cResult[15] = firstProfileFrame;
        cResult[16] = handlePreviewPress;
        cResult[17] = onTrackPress;
        cResult[18] = width;
        cResult[19] = tmp28;
        tmp26 = tmp28;
      }
    }
    const obj15 = { skuId: null, type: null, items: tmp23 };
    ({ skuId: obj4.skuId, type: obj4.type } = items[num]);
    cResult[8] = items[num].skuId;
    cResult[9] = items[num].type;
    cResult[10] = tmp23;
    cResult[11] = obj15;
    tmp24 = obj15;
  }
  class L {
    constructor() {
      if (onActiveItemChange != null) {
        tmp2 = closure_1;
        tmpResult = tmp(closure_1);
      }
      return;
    }
  }
  const items7 = [items[num], onActiveItemChange];
  cResult[0] = items[num];
  cResult[1] = onActiveItemChange;
  cResult[2] = L;
  cResult[3] = items7;
  tmp15 = items7;
  tmp14 = L;
}) : ((arg0) => {
  let bundledProducts;
  let firstAvatarDecoration;
  let firstProfileEffect;
  let firstProfileFrame;
  let handlePreviewPress;
  let intl;
  let items;
  let items3;
  let items4;
  let items5;
  let items6;
  let num;
  let obj7;
  let onActiveItemChange;
  let onTrackPress;
  let product;
  let tmp3;
  let tmp5;
  let tmp6;
  let width;
  ({ product, onTrackPress, onActiveItemChange } = arg0);
  let closure_1;
  ({ width, handlePreviewPress } = arg0);
  const tmp = closure_14();
  [num, tmp3] = metroImportDefault(0);
  _slicedToArray(metroImportDefault(0), 2);
  ({ items, bundledProducts } = product);
  [tmp5, tmp6] = metroImportDefault(product.skuId);
  _slicedToArray(metroImportDefault(product.skuId), 2);
  let obj = useShopProductItems;
  const shopProductItems = obj.useShopProductItems(product);
  ({ firstAvatarDecoration, firstProfileFrame, firstProfileEffect } = shopProductItems);
  if (product.skuId !== tmp5) {
    tmp6(product.skuId);
    tmp3(0);
  }
  closure_1 = tmp12;
  const items1 = [items[num], onActiveItemChange];
  hasOwnProperty(() => {
    if (onActiveItemChange != null) {
      tmp(closure_1);
    }
  }, items1);
  let tmp14;
  if (bundledProducts != null) {
    tmp14 = bundledProducts[num];
  }
  let name;
  if (tmp14 != null) {
    name = tmp14.name;
  }
  if (name == null) {
    name = tmp12.skuId;
  }
  const tmp7Result = CollectiblesUtils;
  const collectibleTypeLabel = tmp7Result.getCollectibleTypeLabel(tmp12.type);
  const items2 = [items[num]];
  const obj2 = { style: tmp.previewContainer, children: items3 };
  items3 = [, ];
  const tmp17 = metroRequire(() => {
    let items;
    const obj = { skuId: closure_1.skuId, type: closure_1.type, items };
    items = [closure_1];
    return obj;
  }, items2);
  items3[0] = closure_12(IndividualProductPreview.IndividualProductPreview, { product: tmp17, width, avatarDecorationOverride: firstAvatarDecoration, profileFrameOverride: firstProfileFrame, profileEffectOverride: firstProfileEffect, handlePreviewPress, onTrackPress });
  const obj4 = { style: tmp.bundleInfoContainer, children: items4 };
  items4 = [, ];
  const obj3 = { style: tmp.bundleContainer, children: items5 };
  const obj5 = { variant: "heading-xl/bold", children: product.name };
  items4[0] = closure_12(Text_Text.Text, obj5);
  const obj6 = { variant: "text-sm/medium", color: "text-default", children: intl.formatToPlainString(intl2.t["/0Yndu"], obj7) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  obj7 = { num: items.length };
  items4[1] = closure_12(Text, obj6);
  items5 = [map1(authStore, obj4), ];
  const obj8 = { style: tmp.bundleInfoContainer, children: items6 };
  items6 = [closure_12(closure_16, { items, bundledProducts, activeIndex: num, onSelect: tmp3, onTrackPress }), ];
  const items7 = [name, ];
  let tmp20Result = null != collectibleTypeLabel;
  const Text2 = Text_Text.Text;
  if (tmp20Result) {
    const _HermesInternal = HermesInternal;
    const obj9 = { variant: "text-sm/medium", color: "text-muted", children: " - " + collectibleTypeLabel };
    const Text3 = Text_Text.Text;
    tmp20Result = closure_12(Text3, obj9);
  }
  items7[1] = tmp20Result;
  items6[1] = map1(Text2, { variant: "text-sm/medium", color: "text-default", children: items7 });
  items5[1] = map1(authStore, obj8);
  items3[1] = map1(authStore, obj3);
  return map1(authStore, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx");

export default tmp6;