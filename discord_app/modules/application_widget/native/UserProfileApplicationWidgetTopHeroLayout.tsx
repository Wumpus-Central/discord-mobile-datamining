// === Module 8628: UserProfileApplicationWidgetTopHeroLayout ===

// Module 8628 (UserProfileApplicationWidgetTopHeroLayout)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import _modDef6059 from "module_6059" /* 6059 */;
import Constants2 from "Constants" /* 6714 */;
import UserProfileSharedStyles from "UserProfileSharedStyles" /* 7924 */;
import _mod8629 from "module_8629" /* 8629 */;
import UserProfileApplicationWidgetFieldUtils from "UserProfileApplicationWidgetFieldUtils" /* 8716 */;
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons" /* 8717 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let size;
({ Image: hasOwnProperty, View: metroRequire } = react_native);
const HorizontalGradient = Constants.HorizontalGradient;
const CARD_PADDING = Constants2.CARD_PADDING;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const colors = ["transparent", "black"];
let createStyles = createStyles_mod;
let obj = { root: { position: "relative" }, contentRow: obj2, heroText: obj3, heroImageColumn: { flex: 1, alignItems: "flex-end" }, heroImageSkeleton: size, heroImagePositioner: { position: "absolute", left: "50%", right: -CARD_PADDING, top: -CARD_PADDING, bottom: 0, overflow: "hidden" }, heroImageMask: { flex: 1, flexDirection: "row" }, heroImageFadeGradient: { width: 130 }, heroImageMaskRemainder: { flex: 1, backgroundColor: "black" } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, minHeight: 140 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, minWidth: 120, gap: nativeDefault.space.PX_4, justifyContent: "center" };
size = { width: 86, height: 86, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_129_0;
  let header;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let numberFormat;
  let obj10;
  let obj13;
  let obj14;
  let resolveFieldValue;
  let tmp48Result;
  let tmp6;
  let topConfig;
  const obj = react2;
  const cResult = obj.c(57);
  ({ header, topConfig, resolveFieldValue, numberFormat } = arg0);
  const tmp4 = closure_11();
  [tmp6, closure_129_0] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (cResult[0] === numberFormat) {
    if (cResult[1] === resolveFieldValue) {
      let tmp7;
      if (cResult[2] === topConfig.components.title) {
        tmp7 = cResult[3];
      }
      if (cResult[4] === numberFormat) {
        if (cResult[5] === resolveFieldValue) {
          let tmp9;
          if (cResult[6] === topConfig.components.subtitle_1) {
            tmp9 = cResult[7];
          }
          if (cResult[8] === numberFormat) {
            if (cResult[9] === resolveFieldValue) {
              let tmp11;
              if (cResult[10] === topConfig.components.subtitle_2) {
                tmp11 = cResult[11];
              }
              if (cResult[12] === numberFormat) {
                if (cResult[13] === resolveFieldValue) {
                  let tmp13;
                  if (cResult[14] === topConfig.components.subtitle_3) {
                    tmp13 = cResult[15];
                  }
                  const hero_image = topConfig.components.hero_image;
                  let image;
                  if (hero_image != null) {
                    image = hero_image.fields.image;
                  }
                  if (cResult[16] === resolveFieldValue) {
                    let tmp16;
                    let tmp19;
                    let tmp22;
                    let tmp25;
                    let tmp28;
                    if (cResult[17] === image) {
                      tmp16 = cResult[18];
                    }
                    const tmpResult = UserProfileSharedStyles;
                    const userProfileCardRadius = tmpResult.useUserProfileCardRadius();
                    if (cResult[19] !== tmp7) {
                      const obj2 = { field: tmp7, variant: "text-lg/medium", color: "text-default" };
                      const tmp21 = metroImportAll(UserProfileApplicationWidgetFieldUtils.FieldText, obj2);
                      cResult[19] = tmp7;
                      cResult[20] = tmp21;
                      tmp19 = tmp21;
                    } else {
                      tmp19 = cResult[20];
                    }
                    if (cResult[21] !== tmp9) {
                      const obj3 = { field: tmp9, variant: "text-sm/normal", color: "text-muted" };
                      const tmp24 = metroImportAll(UserProfileApplicationWidgetFieldUtils.FieldText, obj3);
                      cResult[21] = tmp9;
                      cResult[22] = tmp24;
                      tmp22 = tmp24;
                    } else {
                      tmp22 = cResult[22];
                    }
                    if (cResult[23] !== tmp11) {
                      const obj4 = { field: tmp11, variant: "text-sm/normal", color: "text-muted" };
                      const tmp27 = metroImportAll(UserProfileApplicationWidgetFieldUtils.FieldText, obj4);
                      cResult[23] = tmp11;
                      cResult[24] = tmp27;
                      tmp25 = tmp27;
                    } else {
                      tmp25 = cResult[24];
                    }
                    if (cResult[25] !== tmp13) {
                      const obj5 = { field: tmp13, variant: "text-sm/normal", color: "text-muted" };
                      const tmp30 = metroImportAll(UserProfileApplicationWidgetFieldUtils.FieldText, obj5);
                      cResult[25] = tmp13;
                      cResult[26] = tmp30;
                      tmp28 = tmp30;
                    } else {
                      tmp28 = cResult[26];
                    }
                    if (cResult[27] === tmp4.heroText) {
                      if (cResult[28] === tmp28) {
                        if (cResult[29] === tmp19) {
                          if (cResult[30] === tmp22) {
                            let tmp31;
                            if (cResult[31] === tmp25) {
                              tmp31 = cResult[32];
                            }
                            if (cResult[33] === tmp16) {
                              if (cResult[34] === tmp6) {
                                let tmp35;
                                if (cResult[35] === tmp4.heroImageSkeleton) {
                                  tmp35 = cResult[36];
                                }
                                if (cResult[37] === tmp4.heroImageColumn) {
                                  let tmp38;
                                  if (cResult[38] === tmp35) {
                                    tmp38 = cResult[39];
                                  }
                                  if (cResult[40] === tmp4.contentRow) {
                                    if (cResult[41] === tmp31) {
                                      let tmp42;
                                      if (cResult[42] === tmp38) {
                                        tmp42 = cResult[43];
                                      }
                                      if (cResult[44] === userProfileCardRadius) {
                                        if (cResult[45] === tmp16) {
                                          if (cResult[46] === tmp6) {
                                            if (cResult[47] === tmp4.heroImageFadeGradient) {
                                              if (cResult[48] === tmp4.heroImageMask) {
                                                if (cResult[49] === tmp4.heroImageMaskRemainder) {
                                                  let tmp46;
                                                  if (cResult[50] === tmp4.heroImagePositioner) {
                                                    tmp46 = cResult[51];
                                                  }
                                                  if (cResult[52] === header) {
                                                    if (cResult[53] === tmp4.root) {
                                                      if (cResult[54] === tmp42) {
                                                        let tmp58;
                                                        if (cResult[55] === tmp46) {
                                                          tmp58 = cResult[56];
                                                        }
                                                        return tmp58;
                                                      }
                                                    }
                                                  }
                                                  const obj6 = { style: tmp4.root, children: items };
                                                  items = [header, tmp42, tmp46];
                                                  const tmp61 = React4(metroRequire, obj6);
                                                  cResult[52] = header;
                                                  cResult[53] = tmp4.root;
                                                  cResult[54] = tmp42;
                                                  cResult[55] = tmp46;
                                                  cResult[56] = tmp61;
                                                  tmp58 = tmp61;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let tmp48Result2 = null != tmp16;
                                      if (tmp48Result2) {
                                        const obj7 = {
                                          style: items1,
                                          pointerEvents: "none",
                                          onLayout(nativeEvent) {
                                                                                  const layout = nativeEvent.nativeEvent.layout;
                                                                                  size = { width: layout.width, height: layout.height };
                                                                                  closure_1_0(size);
                                                                                },
                                          children: tmp48Result
                                        };
                                        items1 = [tmp4.heroImagePositioner, ];
                                        const obj8 = { borderTopRightRadius: userProfileCardRadius };
                                        items1[1] = obj8;
                                        tmp48Result = null != tmp6;
                                        if (tmp48Result) {
                                          const result = tmp16.media.height * (tmp6.width / tmp16.media.width);
                                          const obj9 = { style: size, androidRenderingMode: "software", maskElement: React4(metroRequire, obj10), children: metroImportAll(hasOwnProperty, obj13) };
                                          size = { width: tmp6.width, height: result };
                                          obj10 = { style: tmp4.heroImageMask, children: items2 };
                                          const obj11 = { start: null, end: null, colors, style: tmp4.heroImageFadeGradient };
                                          ({ START: obj20.start, END: obj20.end } = HorizontalGradient);
                                          items2 = [, ];
                                          const tmp53 = _modDef6059;
                                          items2[0] = metroImportAll(LinearGradientDefault, obj11);
                                          const obj12 = { style: tmp4.heroImageMaskRemainder };
                                          items2[1] = metroImportAll(metroRequire, obj12);
                                          obj13 = { source: obj14, style: { width: "100%", height: "100%" } };
                                          obj14 = { uri: tmp16.media.url };
                                          tmp48Result = metroImportAll(tmp53, obj9);
                                        }
                                        tmp48Result2 = metroImportAll(metroRequire, obj7);
                                      }
                                      cResult[44] = userProfileCardRadius;
                                      cResult[45] = tmp16;
                                      cResult[46] = tmp6;
                                      cResult[47] = tmp4.heroImageFadeGradient;
                                      cResult[48] = tmp4.heroImageMask;
                                      cResult[49] = tmp4.heroImageMaskRemainder;
                                      cResult[50] = tmp4.heroImagePositioner;
                                      cResult[51] = tmp48Result2;
                                      tmp46 = tmp48Result2;
                                    }
                                  }
                                  const obj15 = { style: tmp4.contentRow, children: items3 };
                                  items3 = [tmp31, tmp38];
                                  const tmp45 = React4(metroRequire, obj15);
                                  cResult[40] = tmp4.contentRow;
                                  cResult[41] = tmp31;
                                  cResult[42] = tmp38;
                                  cResult[43] = tmp45;
                                  tmp42 = tmp45;
                                }
                                const obj16 = { style: tmp4.heroImageColumn, children: tmp35 };
                                const tmp41 = metroImportAll(metroRequire, obj16);
                                cResult[37] = tmp4.heroImageColumn;
                                cResult[38] = tmp35;
                                cResult[39] = tmp41;
                                tmp38 = tmp41;
                              }
                            }
                            let tmp36 = null == tmp16 || null == tmp6;
                            if (tmp36) {
                              const obj17 = { style: tmp4.heroImageSkeleton };
                              tmp36 = metroImportAll(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj17);
                            }
                            cResult[33] = tmp16;
                            cResult[34] = tmp6;
                            cResult[35] = tmp4.heroImageSkeleton;
                            cResult[36] = tmp36;
                            tmp35 = tmp36;
                          }
                        }
                      }
                    }
                    const obj18 = { style: tmp4.heroText, children: items4 };
                    items4 = [tmp19, tmp22, tmp25, tmp28];
                    const tmp34 = React4(metroRequire, obj18);
                    cResult[27] = tmp4.heroText;
                    cResult[28] = tmp28;
                    cResult[29] = tmp19;
                    cResult[30] = tmp22;
                    cResult[31] = tmp25;
                    cResult[32] = tmp34;
                    tmp31 = tmp34;
                  }
                  const items5 = [_mod8629.ResolvedValueType.MEDIA];
                  const fieldValue = resolveFieldValue(image, items5);
                  cResult[16] = resolveFieldValue;
                  cResult[17] = image;
                  cResult[18] = fieldValue;
                  tmp16 = fieldValue;
                }
              }
              const tmpResult5 = _mod8629;
              const textComponentValues = tmpResult5.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
              cResult[12] = numberFormat;
              cResult[13] = resolveFieldValue;
              cResult[14] = topConfig.components.subtitle_3;
              cResult[15] = textComponentValues;
              tmp13 = textComponentValues;
            }
          }
          const tmpResult6 = _mod8629;
          const textComponentValues1 = tmpResult6.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
          cResult[8] = numberFormat;
          cResult[9] = resolveFieldValue;
          cResult[10] = topConfig.components.subtitle_2;
          cResult[11] = textComponentValues1;
          tmp11 = textComponentValues1;
        }
      }
      const tmpResult7 = _mod8629;
      const textComponentValues2 = tmpResult7.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
      cResult[4] = numberFormat;
      cResult[5] = resolveFieldValue;
      cResult[6] = topConfig.components.subtitle_1;
      cResult[7] = textComponentValues2;
      tmp9 = textComponentValues2;
    }
  }
  const tmpResult8 = _mod8629;
  const textComponentValues3 = tmpResult8.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  cResult[0] = numberFormat;
  cResult[1] = resolveFieldValue;
  cResult[2] = topConfig.components.title;
  cResult[3] = textComponentValues3;
  tmp7 = textComponentValues3;
}) : ((header) => {
  let c0;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let numberFormat;
  let obj13;
  let obj17;
  let obj18;
  let resolveFieldValue;
  let tmp15Result;
  let tmp15Result3;
  let tmp3;
  let topConfig;
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  c0 = undefined;
  header = header.header;
  const tmp = closure_11();
  [tmp3, c0] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const obj = _mod8629;
  const textComponentValues = obj.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  const obj2 = _mod8629;
  const textComponentValues1 = obj2.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  const obj3 = _mod8629;
  const textComponentValues2 = obj3.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  const hero_image = topConfig.components.hero_image;
  let image;
  const obj4 = _mod8629;
  const textComponentValues3 = obj4.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (hero_image != null) {
    image = hero_image.fields.image;
  }
  const items = [_mod8629.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const obj5 = { style: tmp.root, children: items1 };
  items1 = [header, , ];
  const obj6 = { style: tmp.contentRow, children: items3 };
  const obj7 = { style: tmp.heroText, children: items2 };
  const tmp4Result = UserProfileSharedStyles;
  const userProfileCardRadius = tmp4Result.useUserProfileCardRadius();
  items2 = [metroImportAll(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues, variant: "text-lg/medium", color: "text-default" }), metroImportAll(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues1, variant: "text-sm/normal", color: "text-muted" }), metroImportAll(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues2, variant: "text-sm/normal", color: "text-muted" }), metroImportAll(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues3, variant: "text-sm/normal", color: "text-muted" })];
  items3 = [React4(metroRequire, obj7), ];
  const obj8 = { style: tmp.heroImageColumn, children: tmp15Result };
  tmp15Result = null == fieldValue || null == tmp3;
  if (tmp15Result) {
    const obj9 = { style: tmp.heroImageSkeleton };
    tmp15Result = metroImportAll(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj9);
  }
  items3[1] = metroImportAll(metroRequire, obj8);
  items1[1] = React4(metroRequire, obj6);
  let tmp15Result4 = null != fieldValue;
  if (tmp15Result4) {
    const obj10 = {
      style: items4,
      pointerEvents: "none",
      onLayout(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          size = { width: layout.width, height: layout.height };
          _undefined(size);
        },
      children: tmp15Result3
    };
    items4 = [tmp.heroImagePositioner, ];
    const obj11 = { borderTopRightRadius: userProfileCardRadius };
    items4[1] = obj11;
    tmp15Result3 = null != tmp3;
    if (tmp15Result3) {
      const result = fieldValue.media.height * (tmp3.width / fieldValue.media.width);
      const obj12 = { style: size, androidRenderingMode: "software", maskElement: React4(metroRequire, obj13), children: metroImportAll(hasOwnProperty, obj17) };
      size = { width: tmp3.width, height: result };
      obj13 = { style: tmp.heroImageMask, children: items5 };
      const obj14 = { start: null, end: null, colors, style: tmp.heroImageFadeGradient };
      ({ START: obj16.start, END: obj16.end } = HorizontalGradient);
      items5 = [, ];
      const tmp21 = _modDef6059;
      items5[0] = metroImportAll(LinearGradientDefault, obj14);
      const obj15 = { style: tmp.heroImageMaskRemainder };
      items5[1] = metroImportAll(metroRequire, obj15);
      obj17 = { source: obj18, style: { width: "100%", height: "100%" } };
      obj18 = { uri: fieldValue.media.url };
      tmp15Result3 = metroImportAll(tmp21, obj12);
    }
    tmp15Result4 = metroImportAll(metroRequire, obj10);
  }
  items1[2] = tmp15Result4;
  return React4(metroRequire, obj5);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx");

export default tmp5;