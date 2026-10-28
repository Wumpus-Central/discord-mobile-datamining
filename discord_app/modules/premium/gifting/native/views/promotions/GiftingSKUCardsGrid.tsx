// === Module 14142: GiftingSKUCardsGrid ===

// Module 14142 (GiftingSKUCardsGrid)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import ColorUtils from "ColorUtils" /* 5001 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5072 */;
import Text_Text from "Text/Text" /* 5270 */;
import useToken from "useToken" /* 5288 */;
import LinearGradientDefault from "LinearGradient" /* 5294 */;
import FastImageDefault from "FastImage" /* 5705 */;
import Pressables from "Pressables" /* 6944 */;
import useCurrentUser from "useCurrentUser" /* 8704 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 9249 */;
import ProfileEffectDefault from "ProfileEffect" /* 9425 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9434 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 9446 */;
import _modDef9447 from "module_9447" /* 9447 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 9448 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11090 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const isAvatarDecorationRecord = fn(7690).isAvatarDecorationRecord;
const isNameplateRecord = fn(1990).isNameplateRecord;
const isProfileEffectRecord = fn(7691).isProfileEffectRecord;
const isProfileFrameRecord = fn(7692).isProfileFrameRecord;
const VerticalGradient = fn(1084).VerticalGradient;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let c13 = 100;
let c14 = 150;
const PX_12 = nativeDefault.space.PX_12;
const previewWidth = 150 - nativeDefault.space.PX_32;
let sum = 100 + nativeDefault.space.PX_40;
const PX_122 = nativeDefault.space.PX_12;
let closure_18 = 2 * nativeDefault.space.PX_24;
let createStyles = fn(5004);
let obj = { card: { width: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16, paddingTop: PX_12, paddingBottom: nativeDefault.space.PX_16, borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderColor: nativeDefault.colors.BORDER_SUBTLE }, previewContainer: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: 100, overflow: "hidden" }, expandedPreviewContainer: { overflow: "visible" }, preview: null, selected: null, claimed: null, checkmark: null, profileEffect: null, sampleProfile: null, profileFrame: null, collectibleTextFade: null, textContainer: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.display = "flex";
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj.preview = obj4;
let obj3 = { width: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16, paddingTop: PX_12, paddingBottom: nativeDefault.space.PX_16, borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj.selected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.claimed = { opacity: 0.4 };
obj.checkmark = { position: "absolute", opacity: 1, fontWeight: "bold" };
const rect = { position: "absolute", top: -PX_12, left: 0, right: 0, overflow: "hidden", height: sum + PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.profileEffect = rect;
obj.sampleProfile = { aspectRatio: fn(9422).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
obj.profileFrame = { position: "absolute", top: 0, left: 0, right: 0, height: sum, alignItems: "center" };
const rect1 = { position: "absolute", left: 0, right: 0, bottom: 0, height: "45%", borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj.collectibleTextFade = rect1;
let obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.textContainer = { alignSelf: "stretch", paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
let closure_19 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingSKUCardItemPreview(arg0) {
  const cResult = c.c(25);
  ({ item, isSelected } = arg0);
  const tmp3 = closure_19();
  const currentUser = useCurrentUser.useCurrentUser();
  if (cResult[0] === currentUser) {
    if (cResult[1] === isSelected) {
      let tmp4 = cResult[2];
    }
    if (isNameplateRecord(item)) {
      if (cResult[3] === isSelected) {
        if (cResult[4] === item) {
          let tmp46 = cResult[5];
        }
        return tmp46;
      }
      const obj3 = { item, animate: isSelected };
      const tmp49 = v65535(NameplateCardPreviewDefault, obj3);
      cResult[3] = isSelected;
      cResult[4] = item;
      cResult[5] = tmp49;
      tmp46 = tmp49;
    } else if (isAvatarDecorationRecord(item)) {
      if (cResult[6] === isSelected) {
        if (cResult[7] === item) {
          if (cResult[8] === tmp4) {
            let tmp41 = cResult[9];
          }
          return tmp41;
        }
      }
      const obj4 = { item, size, animate: isSelected, avatarSource: tmp4 };
      const tmp45 = v65535(AvatarDecorationSampleV2Default, obj4);
      cResult[6] = isSelected;
      cResult[7] = item;
      cResult[8] = tmp4;
      cResult[9] = tmp45;
      tmp41 = tmp45;
    } else if (isProfileEffectRecord(item)) {
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { uri: _modDef9447 };
        cResult[10] = obj5;
        let tmp26 = obj5;
      } else {
        tmp26 = cResult[10];
      }
      if (cResult[11] !== tmp3.sampleProfile) {
        const obj6 = { source: tmp26, style: tmp3.sampleProfile, resizeMode: "cover" };
        const tmp31 = v65535(FastImageDefault, obj6);
        cResult[11] = tmp3.sampleProfile;
        cResult[12] = tmp31;
        let tmp28 = tmp31;
      } else {
        tmp28 = cResult[12];
      }
      if (cResult[13] === item.skuId) {
        if (cResult[14] === tmp32) {
          let tmp33 = cResult[15];
        }
        if (cResult[16] === tmp3.profileEffect) {
          if (cResult[17] === tmp28) {
            if (cResult[18] === tmp33) {
              let tmp37 = cResult[19];
            }
            return tmp37;
          }
        }
        const obj7 = { style: tmp3.profileEffect, children: null };
        const items = [tmp28, tmp33];
        obj7.children = items;
        const tmp40 = closure_1_11(React4, obj7);
        cResult[16] = tmp3.profileEffect;
        cResult[17] = tmp28;
        cResult[18] = tmp33;
        cResult[19] = tmp40;
        tmp37 = tmp40;
      }
      const obj8 = { skuId: item.skuId, useThumbnail: !isSelected };
      const tmp36 = v65535(ProfileEffectDefault, obj8);
      cResult[13] = item.skuId;
      cResult[14] = !isSelected;
      cResult[15] = tmp36;
      tmp33 = tmp36;
    } else if (!isProfileFrameRecord(item)) {
      return null;
    } else {
      if (cResult[20] !== item) {
        const obj9 = { profileFrame: item, previewWidth, previewHeight: sum, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
        const tmp19 = v65535(ProfileFrameSamplePreviewDefault, obj9);
        cResult[20] = item;
        cResult[21] = tmp19;
        let tmp13 = tmp19;
      } else {
        tmp13 = cResult[21];
      }
      if (cResult[22] === tmp3.profileFrame) {
      }
      const obj10 = { style: tmp3.profileFrame, children: tmp13 };
      const tmp23 = v65535(React4, obj10);
      cResult[22] = tmp3.profileFrame;
      cResult[23] = tmp13;
      cResult[24] = tmp23;
    }
  }
  let avatarSource;
  if (isSelected) {
    avatarSource = currentUser.getAvatarSource(null, true, size);
  }
  cResult[0] = currentUser;
  cResult[1] = isSelected;
  cResult[2] = avatarSource;
  tmp4 = avatarSource;
}) : (function GiftingSKUCardItemPreview(arg0) {
  ({ item, isSelected } = arg0);
  const tmp = closure_19();
  const currentUser = isSelected(8704).useCurrentUser();
  const items = [isSelected, currentUser];
  const memo = noop.useMemo(() => {
    let avatarSource;
    if (isSelected) {
      avatarSource = currentUser.getAvatarSource(null, true, c13);
    }
    return avatarSource;
  }, items);
  if (isNameplateRecord(item)) {
    const obj2 = { item, animate: isSelected };
    let tmp8 = closure_10(currentUser(9448), obj2);
  } else if (isAvatarDecorationRecord(item)) {
    const obj3 = { item, size, animate: isSelected, avatarSource: memo };
    tmp8 = closure_10(currentUser(9434), obj3);
  } else if (isProfileEffectRecord(item)) {
    const obj4 = { style: tmp.profileEffect, children: null };
    const obj5 = { source: null, style: null, resizeMode: "cover" };
    const obj6 = { uri: currentUser(9447) };
    obj5.source = obj6;
    obj5.style = tmp.sampleProfile;
    const items1 = [closure_10(currentUser(5705), obj5), ];
    const obj7 = { skuId: item.skuId, useThumbnail: !isSelected };
    items1[1] = closure_10(currentUser(9425), obj7);
    obj4.children = items1;
    tmp8 = closure_11(closure_4, obj4);
    const tmp19 = currentUser(5705);
  } else {
    tmp8 = null;
    if (isProfileFrameRecord(item)) {
      const obj8 = { style: tmp.profileFrame, children: null };
      const obj9 = { profileFrame: item, previewWidth, previewHeight, profileBackgroundColor: currentUser(587).colors.BACKGROUND_BASE_LOW };
      obj8.children = closure_10(currentUser(9446), obj9);
      tmp8 = closure_10(closure_4, obj8);
      const tmp12 = currentUser(9446);
    }
  }
  return tmp8;
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectibleTextFade() {
  const cResult = c.c(12);
  const tmp4 = closure_19();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (cResult[0] !== token) {
    const tmpResult = ColorUtils;
    const hexToRgbaStringResult = tmpResult.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0.9));
    cResult[0] = token;
    cResult[1] = hexToRgbaStringResult;
    let tmp7 = hexToRgbaStringResult;
    const tmpResult4 = ColorUtils;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== token) {
    const tmpResult5 = ColorUtils;
    const hexToRgbaStringResult1 = tmpResult5.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0));
    cResult[2] = token;
    cResult[3] = hexToRgbaStringResult1;
    let tmp9 = hexToRgbaStringResult1;
    const tmpResult6 = ColorUtils;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === token) {
    if (cResult[5] === tmp7) {
      if (cResult[6] === tmp9) {
        let tmp11 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [0, 0.4, 1];
        cResult[8] = items;
        let tmp13 = items;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === tmp4.collectibleTextFade) {
        if (cResult[10] === tmp11) {
          let tmp14 = cResult[11];
        }
        return tmp14;
      }
      const obj3 = { style: tmp4.collectibleTextFade, colors: tmp11, locations: tmp13, start: null, end: null };
      ({ START: obj7.start, END: obj7.end } = VerticalGradient);
      const tmp17 = v65535(LinearGradientDefault, obj3);
      cResult[9] = tmp4.collectibleTextFade;
      cResult[10] = tmp11;
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
  }
  const items1 = [tmp9, tmp7, token];
  cResult[4] = token;
  cResult[5] = tmp7;
  cResult[6] = tmp9;
  cResult[7] = items1;
  tmp11 = items1;
}) : (function CollectibleTextFade() {
  const tmp = closure_19();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  const obj2 = ColorUtils;
  const hexToRgbaStringResult = obj2.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0.9));
  const obj4 = ColorUtils;
  const obj6 = { style: tmp.collectibleTextFade, colors: null, locations: [0, 0.4, 1], start: VerticalGradient.START, end: VerticalGradient.END };
  const items = [obj4.hexToRgbaString(ColorUtils.hexWithOpacity(token, 0)), hexToRgbaStringResult, token];
  obj6.colors = items;
  return v65535(LinearGradientDefault, obj6);
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingSKUCardPreview(arg0) {
  const cResult = c.c(29);
  ({ item, isSelected, claimed } = arg0);
  const tmp4 = closure_19();
  if (cResult[0] !== item) {
    const tmp7 = isProfileEffectRecord(item);
    cResult[0] = item;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== item) {
    const tmp10 = isProfileFrameRecord(item);
    cResult[2] = item;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  let expandedPreviewContainer = tmp5;
  if (!tmp5) {
    expandedPreviewContainer = tmp8;
  }
  if (expandedPreviewContainer) {
    expandedPreviewContainer = tmp4.expandedPreviewContainer;
  }
  if (cResult[4] === tmp4.previewContainer) {
    if (cResult[5] === expandedPreviewContainer) {
      let tmp11 = cResult[6];
    }
    let claimed2 = claimed;
    if (claimed) {
      claimed2 = tmp4.claimed;
    }
    if (cResult[7] === tmp4.preview) {
      if (cResult[8] === claimed2) {
        let tmp12 = cResult[9];
      }
      if (cResult[10] === isSelected) {
        if (cResult[11] === item) {
          let tmp13 = cResult[12];
        }
        if (cResult[13] === tmp12) {
          if (cResult[14] === tmp13) {
            let tmp17 = cResult[15];
          }
          if (cResult[16] === claimed) {
            if (cResult[17] === tmp4.checkmark) {
              let tmp21 = cResult[18];
            }
            if (cResult[19] === tmp11) {
              if (cResult[20] === tmp17) {
                if (cResult[21] === tmp21) {
                  let tmp24 = cResult[22];
                }
                if (cResult[23] === tmp5) {
                  if (cResult[24] === tmp8) {
                    let tmp28 = cResult[25];
                  }
                  if (cResult[26] === tmp24) {
                    if (cResult[27] === tmp28) {
                      let tmp32 = cResult[28];
                    }
                    return tmp32;
                  }
                  const obj2 = { children: null };
                  const items = [tmp24, tmp28];
                  obj2.children = items;
                  const tmp35 = closure_1_11(__initData, obj2);
                  cResult[26] = tmp24;
                  cResult[27] = tmp28;
                  cResult[28] = tmp35;
                  tmp32 = tmp35;
                }
                let tmp29 = tmp5;
                if (!tmp5) {
                  tmp29 = tmp8;
                }
                if (tmp29) {
                  tmp29 = v65535(closure_21, {});
                }
                cResult[23] = tmp5;
                cResult[24] = tmp8;
                cResult[25] = tmp29;
                tmp28 = tmp29;
              }
            }
            const obj3 = { style: tmp11, children: null };
            const items1 = [tmp17, tmp21];
            obj3.children = items1;
            const tmp27 = closure_1_11(React4, obj3);
            cResult[19] = tmp11;
            cResult[20] = tmp17;
            cResult[21] = tmp21;
            cResult[22] = tmp27;
            tmp24 = tmp27;
          }
          let tmp22 = claimed;
          if (claimed) {
            const obj4 = { size: "lg", style: tmp4.checkmark };
            tmp22 = v65535(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj4);
          }
          cResult[16] = claimed;
          cResult[17] = tmp4.checkmark;
          cResult[18] = tmp22;
          tmp21 = tmp22;
        }
        const obj5 = { style: tmp12, children: tmp13 };
        const tmp20 = v65535(React4, obj5);
        cResult[13] = tmp12;
        cResult[14] = tmp13;
        cResult[15] = tmp20;
        tmp17 = tmp20;
      }
      const obj6 = { item, isSelected };
      const tmp16 = v65535(closure_20, obj6);
      cResult[10] = isSelected;
      cResult[11] = item;
      cResult[12] = tmp16;
      tmp13 = tmp16;
    }
    const items2 = [tmp4.preview, claimed2];
    cResult[7] = tmp4.preview;
    cResult[8] = claimed2;
    cResult[9] = items2;
    tmp12 = items2;
  }
  const items3 = [tmp4.previewContainer, expandedPreviewContainer];
  cResult[4] = tmp4.previewContainer;
  cResult[5] = expandedPreviewContainer;
  cResult[6] = items3;
  tmp11 = items3;
}) : (function GiftingSKUCardPreview(isSelected) {
  ({ item, claimed } = isSelected);
  const tmp = closure_19();
  let tmp7Result = isProfileEffectRecord(item);
  const tmp3 = isProfileFrameRecord(item);
  const items = [tmp.previewContainer, ];
  let expandedPreviewContainer = tmp7Result;
  if (!tmp7Result) {
    expandedPreviewContainer = tmp3;
  }
  if (expandedPreviewContainer) {
    expandedPreviewContainer = tmp.expandedPreviewContainer;
  }
  const obj = { style: items, children: null };
  items[1] = expandedPreviewContainer;
  const items1 = [tmp.preview, ];
  let claimed2 = claimed;
  if (claimed) {
    claimed2 = tmp.claimed;
  }
  items1[1] = claimed2;
  const items2 = [v65535(React4, { style: items1, children: v65535(closure_20, { item, isSelected: isSelected.isSelected }) }), ];
  if (claimed) {
    const obj3 = { size: "lg", style: tmp.checkmark };
    claimed = v65535(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj3);
  }
  items2[1] = claimed;
  obj.children = items2;
  const children = [closure_1_11(React4, obj), ];
  if (!tmp7Result) {
    tmp7Result = tmp3;
  }
  if (tmp7Result) {
    tmp7Result = v65535(closure_21, {});
  }
  children[1] = tmp7Result;
  return closure_1_11(__initData, { children });
});
ReactCompilerGating = fn(558);
let closure_23 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingSKUCard(rewardSkuId) {
  const cResult = c.c(30);
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect } = rewardSkuId);
  const isSelected = rewardSkuId.isSelected;
  const tmp4 = closure_19();
  if (cResult[0] !== isSelected) {
    const obj2 = { selected: isSelected };
    cResult[0] = isSelected;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp5);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const tmpResult = useA11yRolesNative;
  const product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(rewardSkuId).product;
  if (null == product) {
    return null;
  } else {
    const first = product.items[0];
    let selected = isSelected;
    if (isSelected) {
      selected = tmp4.selected;
    }
    if (cResult[2] === tmp4.card) {
      if (cResult[3] === selected) {
        let tmp7 = cResult[4];
      }
      if (cResult[5] === onSelect) {
        if (cResult[6] === rewardSkuId) {
          let tmp8 = cResult[7];
        }
        if (cResult[8] === claimed) {
          if (cResult[9] === isSelected) {
            if (cResult[10] === first) {
              let tmp9 = cResult[11];
            }
            if (cResult[12] !== product.name) {
              const obj3 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
              const tmp15 = v65535(Text_Text.Text, obj3);
              cResult[12] = product.name;
              cResult[13] = tmp15;
              let tmp13 = tmp15;
            } else {
              tmp13 = cResult[13];
            }
            if (cResult[14] !== claimed) {
              const intl = util.intl;
              const string = intl.string;
              let t = util.t;
              if (claimed) {
                t = t["6cfuDj"];
                let stringResult = string(t);
              } else {
                stringResult = string(t.QQsaCc);
              }
              cResult[14] = claimed;
              cResult[15] = stringResult;
            } else {
              if (cResult[16] !== cResult[15]) {
                const obj4 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: tmp16 };
                const tmp22 = v65535(Text_Text.Text, obj4);
                cResult[16] = tmp16;
                cResult[17] = tmp22;
                let tmp20 = tmp22;
              } else {
                tmp20 = cResult[17];
              }
              if (cResult[18] === tmp4.textContainer) {
                if (cResult[19] === tmp13) {
                  if (cResult[20] === tmp20) {
                    let tmp23 = cResult[21];
                  }
                  if (cResult[22] === accessibilityRole) {
                    if (cResult[23] === accessibilityState) {
                      if (cResult[24] === claimed) {
                        if (cResult[25] === tmp7) {
                          if (cResult[26] === tmp8) {
                            if (cResult[27] === tmp9) {
                              if (cResult[28] === tmp23) {
                                let tmp27 = cResult[29];
                              }
                              return tmp27;
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj5 = { style: tmp7, onPress: tmp8, activeOpacity: 0.8, disabled: claimed, accessibilityRole, accessibilityState, children: null };
                  const items = [tmp9, tmp23];
                  obj5.children = items;
                  const tmp29 = closure_1_11(Pressables.PressableOpacity, obj5);
                  cResult[22] = accessibilityRole;
                  cResult[23] = accessibilityState;
                  cResult[24] = claimed;
                  cResult[25] = tmp7;
                  cResult[26] = tmp8;
                  cResult[27] = tmp9;
                  cResult[28] = tmp23;
                  cResult[29] = tmp29;
                  tmp27 = tmp29;
                }
              }
              const obj6 = { style: tmp4.textContainer, children: null };
              const items1 = [tmp13, tmp20];
              obj6.children = items1;
              const tmp26 = closure_1_11(React4, obj6);
              cResult[18] = tmp4.textContainer;
              cResult[19] = tmp13;
              cResult[20] = tmp20;
              cResult[21] = tmp26;
              tmp23 = tmp26;
            }
          }
        }
        let tmp10 = null != first;
        if (tmp10) {
          const obj7 = { item: first, isSelected, claimed };
          tmp10 = v65535(closure_22, obj7);
        }
        cResult[8] = claimed;
        cResult[9] = isSelected;
        cResult[10] = first;
        cResult[11] = tmp10;
        tmp9 = tmp10;
      }
      const fn = function x() {
        return onSelect(rewardSkuId);
      };
      cResult[5] = onSelect;
      cResult[6] = rewardSkuId;
      cResult[7] = fn;
      tmp8 = fn;
    }
    const items2 = [tmp4.card, selected];
    cResult[2] = tmp4.card;
    cResult[3] = selected;
    cResult[4] = items2;
    tmp7 = items2;
  }
  const tmpResult2 = useFetchCollectiblesProduct;
}) : (function GiftingSKUCard(rewardSkuId) {
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect: importDefault, isSelected } = rewardSkuId);
  const tmp = closure_19();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(rewardSkuId).product;
  if (null == product) {
    return null;
  } else {
    const first = product.items[0];
    const items = [tmp.card, ];
    let selected = isSelected;
    if (isSelected) {
      selected = tmp.selected;
    }
    const obj3 = { style: null, onPress: null, activeOpacity: 0.8, disabled: null, accessibilityRole: null, accessibilityState: null, children: null };
    items[1] = selected;
    obj3.style = items;
    obj3.onPress = function onPress() {
      return importDefault(rewardSkuId);
    };
    obj3.disabled = claimed;
    obj3.accessibilityRole = accessibilityRole;
    obj3.accessibilityState = accessibilityState;
    let tmp5 = null != first;
    if (tmp5) {
      const obj4 = { item: first, isSelected, claimed };
      tmp5 = v65535(closure_22, obj4);
    }
    const items1 = [tmp5, ];
    const obj5 = { style: tmp.textContainer, children: null };
    const obj6 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
    const items2 = [v65535(Text_Text.Text, obj6), ];
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (claimed) {
      let stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    const obj7 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: stringResult };
    items2[1] = v65535(Text_Text.Text, obj7);
    obj5.children = items2;
    items1[1] = closure_1_11(React4, obj5);
    obj3.children = items1;
    return closure_1_11(Pressables.PressableOpacity, obj3);
  }
}));
createStyles = fn(5004);
let closure_24 = createStyles.createStyles({ grid: { flexDirection: "column", alignSelf: "center", gap: PX_122 }, row: { flexDirection: "row", gap: PX_122 } });
ReactCompilerGating = fn(558);
let obj6 = { alignSelf: "stretch", paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
let obj7 = { grid: { flexDirection: "column", alignSelf: "center", gap: PX_122 }, row: { flexDirection: "row", gap: PX_122 } };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingSKUCardsGrid(onSelect) {
  const cResult = claimableRewards(highlightedSkuId[12]).c(22);
  ({ rewardsToDisplay, claimableRewards } = onSelect);
  onSelect = onSelect.onSelect;
  highlightedSkuId = onSelect.highlightedSkuId;
  let row = closure_24();
  let length = Math.max(1, Math.floor((onSelect(highlightedSkuId[29])().width - closure_18 + PX_122) / (c14 + PX_122)));
  if (cResult[0] === length) {
    if (cResult[1] === rewardsToDisplay) {
      let arr = cResult[2];
    }
    if (arr.length <= 1) {
      length = rewardsToDisplay.length;
    }
    const _Math = Math;
    const result = length * c14;
    const sum = result + Math.max(0, length - 1) * PX_122;
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
                const obj3 = { style: tmp10, children: cResult[13] };
                const tmp18 = closure_10(closure_4, obj3);
                cResult[19] = tmp10;
                cResult[20] = cResult[13];
                cResult[21] = tmp18;
                tmp15 = tmp18;
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
            cResult[8] = claimableRewards;
            cResult[9] = highlightedSkuId;
            cResult[10] = onSelect;
            cResult[11] = arr;
            row = row.row;
            cResult[12] = row;
            cResult[13] = mapped;
          }
        }
      }
      const fn = function x(arr, arg1) {
        return v65535(React4, {
          style: row.row,
          children: arr.map((rewardSkuId) => {
            closure_0 = rewardSkuId;
            return closure_2_10(closure_2_23, { rewardSkuId, claimed: !claimableRewards.some((item) => item === closure_0), isSelected: highlightedSkuId === rewardSkuId, onSelect }, rewardSkuId);
          })
        }, arg1);
      };
      cResult[14] = claimableRewards;
      cResult[15] = highlightedSkuId;
      cResult[16] = onSelect;
      cResult[17] = row.row;
      cResult[18] = fn;
      tmp12 = fn;
    }
    const items = [row.grid, tmp9];
    cResult[5] = row.grid;
    cResult[6] = tmp9;
    cResult[7] = items;
    tmp10 = items;
  }
  const obj = claimableRewards(highlightedSkuId[12]);
  const chunkResult = onSelect(highlightedSkuId[30]).chunk(rewardsToDisplay, length);
  cResult[0] = length;
  cResult[1] = rewardsToDisplay;
  cResult[2] = chunkResult;
  arr = chunkResult;
  const tmp3Result = onSelect(highlightedSkuId[30]);
}) : (function GiftingSKUCardsGrid(rewardsToDisplay) {
  rewardsToDisplay = rewardsToDisplay.rewardsToDisplay;
  ({ claimableRewards: importDefault, onSelect: dependencyMap, highlightedSkuId: noop } = rewardsToDisplay);
  const tmp = closure_24();
  const row = tmp;
  let length = Math.max(1, Math.floor((useWindowDimensionsDefault().width - closure_18 + PX_122) / (c14 + PX_122)));
  const items = [rewardsToDisplay, length];
  const memo = noop.useMemo(() => _modDef12.chunk(rewardsToDisplay, length), items);
  if (memo.length <= 1) {
    length = rewardsToDisplay.length;
  }
  const result = length * c14;
  const obj = { style: null, children: null };
  const items1 = [tmp.grid, { width: result + Math.max(0, length - 1) * PX_122 }];
  obj.style = items1;
  obj.children = memo.map((arr, index) => v65535(React4, {
    style: row.row,
    children: arr.map((rewardSkuId) => {
      closure_0 = rewardSkuId;
      return closure_2_10(closure_2_23, { rewardSkuId, claimed: !closure_1_1.some((item) => item === closure_0), isSelected: closure_1_3 === rewardSkuId, onSelect }, rewardSkuId);
    })
  }, index));
  return closure_10(row, obj);
});