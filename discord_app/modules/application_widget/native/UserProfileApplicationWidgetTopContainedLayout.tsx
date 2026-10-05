// === Module 8685: UserProfileApplicationWidgetTopContainedLayout ===

// Module 8685 (UserProfileApplicationWidgetTopContainedLayout)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _mod8594 from "module_8594" /* 8594 */;
import UserProfileApplicationWidgetFieldUtils from "UserProfileApplicationWidgetFieldUtils" /* 8681 */;
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons" /* 8682 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
let size1;
({ Image: c2, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentRow: obj2, text: obj3, imageContainer: size, image: { width: "100%", height: "100%" }, imageSkeleton: size1 };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_4 };
size = { width: 96, height: 96, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
size1 = { width: 96, height: 96, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let header;
  let items;
  let items1;
  let items2;
  let numberFormat;
  let obj10;
  let obj9;
  let resolveFieldValue;
  let topConfig;
  const obj = react2;
  const cResult = obj.c(45);
  ({ header, topConfig, resolveFieldValue, numberFormat } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === numberFormat) {
    if (cResult[1] === resolveFieldValue) {
      let tmp5;
      if (cResult[2] === topConfig.components.title) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === numberFormat) {
        if (cResult[5] === resolveFieldValue) {
          let tmp7;
          if (cResult[6] === topConfig.components.subtitle_1) {
            tmp7 = cResult[7];
          }
          if (cResult[8] === numberFormat) {
            if (cResult[9] === resolveFieldValue) {
              let tmp9;
              if (cResult[10] === topConfig.components.subtitle_2) {
                tmp9 = cResult[11];
              }
              if (cResult[12] === numberFormat) {
                if (cResult[13] === resolveFieldValue) {
                  let tmp11;
                  if (cResult[14] === topConfig.components.subtitle_3) {
                    tmp11 = cResult[15];
                  }
                  const contained_image = topConfig.components.contained_image;
                  let image;
                  if (contained_image != null) {
                    image = contained_image.fields.image;
                  }
                  if (cResult[16] === resolveFieldValue) {
                    let tmp15;
                    let tmp17;
                    let tmp20;
                    let tmp23;
                    let tmp26;
                    if (cResult[17] === image) {
                      tmp15 = cResult[18];
                    }
                    if (cResult[19] !== tmp5) {
                      const obj2 = { field: tmp5, variant: "text-lg/medium", color: "text-default" };
                      const tmp19 = React3(UserProfileApplicationWidgetFieldUtils.FieldText, obj2);
                      cResult[19] = tmp5;
                      cResult[20] = tmp19;
                      tmp17 = tmp19;
                    } else {
                      tmp17 = cResult[20];
                    }
                    if (cResult[21] !== tmp7) {
                      const obj3 = { field: tmp7, variant: "text-sm/normal", color: "text-muted" };
                      const tmp22 = React3(UserProfileApplicationWidgetFieldUtils.FieldText, obj3);
                      cResult[21] = tmp7;
                      cResult[22] = tmp22;
                      tmp20 = tmp22;
                    } else {
                      tmp20 = cResult[22];
                    }
                    if (cResult[23] !== tmp9) {
                      const obj4 = { field: tmp9, variant: "text-sm/normal", color: "text-muted" };
                      const tmp25 = React3(UserProfileApplicationWidgetFieldUtils.FieldText, obj4);
                      cResult[23] = tmp9;
                      cResult[24] = tmp25;
                      tmp23 = tmp25;
                    } else {
                      tmp23 = cResult[24];
                    }
                    if (cResult[25] !== tmp11) {
                      const obj5 = { field: tmp11, variant: "text-sm/normal", color: "text-muted" };
                      const tmp28 = React3(UserProfileApplicationWidgetFieldUtils.FieldText, obj5);
                      cResult[25] = tmp11;
                      cResult[26] = tmp28;
                      tmp26 = tmp28;
                    } else {
                      tmp26 = cResult[26];
                    }
                    if (cResult[27] === tmp4.text) {
                      if (cResult[28] === tmp26) {
                        if (cResult[29] === tmp17) {
                          if (cResult[30] === tmp20) {
                            let tmp29;
                            let tmp35;
                            if (cResult[31] === tmp23) {
                              tmp29 = cResult[32];
                            }
                            if (cResult[33] === tmp15) {
                              if (cResult[34] === tmp4.image) {
                                if (cResult[35] === tmp4.imageContainer) {
                                  let tmp33;
                                  if (cResult[36] === tmp4.imageSkeleton) {
                                    tmp33 = cResult[37];
                                  }
                                  if (cResult[38] === tmp4.contentRow) {
                                    if (cResult[39] === tmp29) {
                                      let tmp39;
                                      if (cResult[40] === tmp33) {
                                        tmp39 = cResult[41];
                                      }
                                      if (cResult[42] === header) {
                                        let tmp43;
                                        if (cResult[43] === tmp39) {
                                          tmp43 = cResult[44];
                                        }
                                        return tmp43;
                                      }
                                      const obj6 = { children: items };
                                      items = [header, tmp39];
                                      const tmp46 = hasOwnProperty(_false, obj6);
                                      cResult[42] = header;
                                      cResult[43] = tmp39;
                                      cResult[44] = tmp46;
                                      tmp43 = tmp46;
                                    }
                                  }
                                  const obj7 = { style: tmp4.contentRow, children: items1 };
                                  items1 = [tmp29, tmp33];
                                  const tmp42 = hasOwnProperty(_false, obj7);
                                  cResult[38] = tmp4.contentRow;
                                  cResult[39] = tmp29;
                                  cResult[40] = tmp33;
                                  cResult[41] = tmp42;
                                  tmp39 = tmp42;
                                }
                              }
                            }
                            if (null != tmp15) {
                              const obj8 = { style: tmp4.imageContainer, children: React3(React2, obj9) };
                              obj9 = { source: obj10, style: tmp4.image, resizeMode: "contain" };
                              obj10 = { uri: tmp15.media.url };
                              tmp35 = React3(_false, obj8);
                            } else {
                              const obj11 = { style: tmp4.imageSkeleton };
                              tmp35 = React3(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj11);
                            }
                            cResult[33] = tmp15;
                            cResult[34] = tmp4.image;
                            cResult[35] = tmp4.imageContainer;
                            cResult[36] = tmp4.imageSkeleton;
                            cResult[37] = tmp35;
                            tmp33 = tmp35;
                          }
                        }
                      }
                    }
                    const obj12 = { style: tmp4.text, children: items2 };
                    items2 = [tmp17, tmp20, tmp23, tmp26];
                    const tmp32 = hasOwnProperty(_false, obj12);
                    cResult[27] = tmp4.text;
                    cResult[28] = tmp26;
                    cResult[29] = tmp17;
                    cResult[30] = tmp20;
                    cResult[31] = tmp23;
                    cResult[32] = tmp32;
                    tmp29 = tmp32;
                  }
                  const items3 = [_mod8594.ResolvedValueType.MEDIA];
                  const fieldValue = resolveFieldValue(image, items3);
                  cResult[16] = resolveFieldValue;
                  cResult[17] = image;
                  cResult[18] = fieldValue;
                  tmp15 = fieldValue;
                }
              }
              const tmpResult = _mod8594;
              const textComponentValues = tmpResult.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
              cResult[12] = numberFormat;
              cResult[13] = resolveFieldValue;
              cResult[14] = topConfig.components.subtitle_3;
              cResult[15] = textComponentValues;
              tmp11 = textComponentValues;
            }
          }
          const tmpResult4 = _mod8594;
          const textComponentValues1 = tmpResult4.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
          cResult[8] = numberFormat;
          cResult[9] = resolveFieldValue;
          cResult[10] = topConfig.components.subtitle_2;
          cResult[11] = textComponentValues1;
          tmp9 = textComponentValues1;
        }
      }
      const tmpResult5 = _mod8594;
      const textComponentValues2 = tmpResult5.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
      cResult[4] = numberFormat;
      cResult[5] = resolveFieldValue;
      cResult[6] = topConfig.components.subtitle_1;
      cResult[7] = textComponentValues2;
      tmp7 = textComponentValues2;
    }
  }
  const tmpResult6 = _mod8594;
  const textComponentValues3 = tmpResult6.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  cResult[0] = numberFormat;
  cResult[1] = resolveFieldValue;
  cResult[2] = topConfig.components.title;
  cResult[3] = textComponentValues3;
  tmp5 = textComponentValues3;
}) : ((header) => {
  let items2;
  let items3;
  let numberFormat;
  let obj8;
  let obj9;
  let resolveFieldValue;
  let tmp12Result;
  let topConfig;
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  header = header.header;
  const tmp = closure_6();
  const obj = _mod8594;
  const textComponentValues = obj.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  const obj2 = _mod8594;
  const textComponentValues1 = obj2.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  const obj3 = _mod8594;
  const textComponentValues2 = obj3.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  const contained_image = topConfig.components.contained_image;
  let image;
  const obj4 = _mod8594;
  const textComponentValues3 = obj4.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (contained_image != null) {
    image = contained_image.fields.image;
  }
  const items = [_mod8594.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const items1 = [header, ];
  const obj5 = { style: tmp.contentRow, children: items3 };
  const obj6 = { style: tmp.text, children: items2 };
  items2 = [React3(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues, variant: "text-lg/medium", color: "text-default" }), React3(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues1, variant: "text-sm/normal", color: "text-muted" }), React3(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues2, variant: "text-sm/normal", color: "text-muted" }), React3(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues3, variant: "text-sm/normal", color: "text-muted" })];
  items3 = [hasOwnProperty(_false, obj6), ];
  if (null != fieldValue) {
    const obj7 = { style: tmp.imageContainer, children: React3(React2, obj8) };
    obj8 = { source: obj9, style: tmp.image, resizeMode: "contain" };
    obj9 = { uri: fieldValue.media.url };
    tmp12Result = React3(_false, obj7);
  } else {
    const obj10 = { style: tmp.imageSkeleton };
    tmp12Result = React3(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj10);
  }
  const obj11 = { children: items1 };
  items3[1] = tmp12Result;
  items1[1] = hasOwnProperty(_false, obj5);
  return hasOwnProperty(_false, obj11);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetTopContainedLayout.tsx");

export default tmp6;