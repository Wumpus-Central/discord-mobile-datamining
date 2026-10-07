// === Module 8720: UserProfileApplicationWidgetTopContainedLayout ===

// Module 8720 (UserProfileApplicationWidgetTopContainedLayout)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 8629 */;
import UserProfileApplicationWidgetFieldUtils from "UserProfileApplicationWidgetFieldUtils" /* 8716 */;
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons" /* 8717 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = { contentRow: { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" }, text: null, imageContainer: null, image: null, imageSkeleton: null };
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
obj2.text = { flex: 1, gap: nativeDefault.space.PX_4 };
let size = { width: 96, height: 96, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.imageContainer = size;
obj2.image = { width: "100%", height: "100%" };
const size1 = { width: 96, height: 96, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
obj2.imageSkeleton = size1;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetTopContainedLayout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(45);
  ({ header, topConfig, resolveFieldValue, numberFormat } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === numberFormat) {
    if (cResult[1] === resolveFieldValue) {
      if (cResult[2] === topConfig.components.title) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] === numberFormat) {
        if (cResult[5] === resolveFieldValue) {
          if (cResult[6] === topConfig.components.subtitle_1) {
            let tmp7 = cResult[7];
          }
          if (cResult[8] === numberFormat) {
            if (cResult[9] === resolveFieldValue) {
              if (cResult[10] === topConfig.components.subtitle_2) {
                let tmp9 = cResult[11];
              }
              if (cResult[12] === numberFormat) {
                if (cResult[13] === resolveFieldValue) {
                  if (cResult[14] === topConfig.components.subtitle_3) {
                    let tmp11 = cResult[15];
                  }
                  const contained_image = topConfig.components.contained_image;
                  let image;
                  if (contained_image != null) {
                    image = contained_image.fields.image;
                  }
                  if (cResult[16] === resolveFieldValue) {
                    if (cResult[17] === image) {
                      imageSkeleton = cResult[18];
                    }
                    if (cResult[19] !== tmp5) {
                      const obj2 = { field: tmp5, variant: "text-lg/medium", color: "text-default" };
                      const tmp18 = React4(UserProfileApplicationWidgetFieldUtils.FieldText, obj2);
                      cResult[19] = tmp5;
                      cResult[20] = tmp18;
                      let tmp16 = tmp18;
                    } else {
                      tmp16 = cResult[20];
                    }
                    if (cResult[21] !== tmp7) {
                      const obj3 = { field: tmp7, variant: "text-sm/normal", color: "text-muted" };
                      const tmp21 = React4(UserProfileApplicationWidgetFieldUtils.FieldText, obj3);
                      cResult[21] = tmp7;
                      cResult[22] = tmp21;
                      let tmp19 = tmp21;
                    } else {
                      tmp19 = cResult[22];
                    }
                    if (cResult[23] !== tmp9) {
                      const obj4 = { field: tmp9, variant: "text-sm/normal", color: "text-muted" };
                      const tmp24 = React4(UserProfileApplicationWidgetFieldUtils.FieldText, obj4);
                      cResult[23] = tmp9;
                      cResult[24] = tmp24;
                      let tmp22 = tmp24;
                    } else {
                      tmp22 = cResult[24];
                    }
                    if (cResult[25] !== tmp11) {
                      const obj5 = { field: tmp11, variant: "text-sm/normal", color: "text-muted" };
                      const tmp27 = React4(UserProfileApplicationWidgetFieldUtils.FieldText, obj5);
                      cResult[25] = tmp11;
                      cResult[26] = tmp27;
                      let tmp25 = tmp27;
                    } else {
                      tmp25 = cResult[26];
                    }
                    if (cResult[27] === tmp4.text) {
                      if (cResult[28] === tmp25) {
                        if (cResult[29] === tmp16) {
                          if (cResult[30] === tmp19) {
                            if (cResult[31] === tmp22) {
                              let tmp28 = cResult[32];
                            }
                            if (cResult[33] === imageSkeleton) {
                              if (cResult[34] === tmp4.image) {
                                if (cResult[35] === tmp4.imageContainer) {
                                  if (cResult[36] === tmp4.imageSkeleton) {
                                    if (cResult[38] === tmp4.contentRow) {
                                      if (cResult[39] === tmp28) {
                                        if (cResult[40] === tmp32) {
                                          let tmp39 = cResult[41];
                                        }
                                        if (cResult[42] === header) {
                                          if (cResult[43] === tmp39) {
                                            let tmp43 = cResult[44];
                                          }
                                          return tmp43;
                                        }
                                        const obj6 = { children: null };
                                        const items = [header, tmp39];
                                        obj6.children = items;
                                        const tmp46 = hasOwnProperty(React3, obj6);
                                        cResult[42] = header;
                                        cResult[43] = tmp39;
                                        cResult[44] = tmp46;
                                        tmp43 = tmp46;
                                      }
                                    }
                                    const obj7 = { style: tmp4.contentRow, children: null };
                                    const items1 = [tmp28, cResult[37]];
                                    obj7.children = items1;
                                    const tmp42 = hasOwnProperty(React3, obj7);
                                    cResult[38] = tmp4.contentRow;
                                    cResult[39] = tmp28;
                                    cResult[40] = cResult[37];
                                    cResult[41] = tmp42;
                                    tmp39 = tmp42;
                                  }
                                }
                              }
                            }
                            if (null != imageSkeleton) {
                              const obj8 = { style: tmp4.imageContainer, children: null };
                              const obj9 = { source: null, style: null, resizeMode: "contain" };
                              const obj10 = { uri: imageSkeleton.media.url };
                              obj9.source = obj10;
                              obj9.style = tmp4.image;
                              obj8.children = React4(React2, obj9);
                              let tmp34 = React4(React3, obj8);
                            } else {
                              const obj11 = { style: tmp4.imageSkeleton };
                              tmp34 = React4(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj11);
                            }
                            cResult[33] = imageSkeleton;
                            cResult[34] = tmp4.image;
                            ({ imageContainer: tmp3[35], imageSkeleton } = tmp4);
                            cResult[36] = imageSkeleton;
                            cResult[37] = tmp34;
                          }
                        }
                      }
                    }
                    const obj12 = { style: tmp4.text, children: null };
                    const items2 = [tmp16, tmp19, tmp22, tmp25];
                    obj12.children = items2;
                    const tmp31 = hasOwnProperty(React3, obj12);
                    cResult[27] = tmp4.text;
                    cResult[28] = tmp25;
                    cResult[29] = tmp16;
                    cResult[30] = tmp19;
                    cResult[31] = tmp22;
                    cResult[32] = tmp31;
                    tmp28 = tmp31;
                  }
                  const items3 = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
                  const fieldValue = resolveFieldValue(image, items3);
                  cResult[16] = resolveFieldValue;
                  cResult[17] = image;
                  cResult[18] = fieldValue;
                  imageSkeleton = fieldValue;
                }
              }
              const textComponentValues = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
              cResult[12] = numberFormat;
              cResult[13] = resolveFieldValue;
              cResult[14] = topConfig.components.subtitle_3;
              cResult[15] = textComponentValues;
              tmp11 = textComponentValues;
              const tmpResult = resolvedValuesFromUserApplicationIdentityProfile;
            }
          }
          const textComponentValues1 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
          cResult[8] = numberFormat;
          cResult[9] = resolveFieldValue;
          cResult[10] = topConfig.components.subtitle_2;
          cResult[11] = textComponentValues1;
          tmp9 = textComponentValues1;
          const tmpResult4 = resolvedValuesFromUserApplicationIdentityProfile;
        }
      }
      const textComponentValues2 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
      cResult[4] = numberFormat;
      cResult[5] = resolveFieldValue;
      cResult[6] = topConfig.components.subtitle_1;
      cResult[7] = textComponentValues2;
      tmp7 = textComponentValues2;
      const tmpResult5 = resolvedValuesFromUserApplicationIdentityProfile;
    }
  }
  const textComponentValues3 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  cResult[0] = numberFormat;
  cResult[1] = resolveFieldValue;
  cResult[2] = topConfig.components.title;
  cResult[3] = textComponentValues3;
  tmp5 = textComponentValues3;
  const tmpResult6 = resolvedValuesFromUserApplicationIdentityProfile;
}) : ((header) => {
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  const tmp = closure_6();
  const textComponentValues = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  const textComponentValues1 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  const textComponentValues2 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  const contained_image = topConfig.components.contained_image;
  let image;
  const textComponentValues3 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (contained_image != null) {
    image = contained_image.fields.image;
  }
  const items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const items1 = [header.header, ];
  const obj5 = { style: tmp.contentRow, children: null };
  const obj6 = { style: tmp.text, children: null };
  const items2 = [React4(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues, variant: "text-lg/medium", color: "text-default" }), React4(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues1, variant: "text-sm/normal", color: "text-muted" }), React4(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues2, variant: "text-sm/normal", color: "text-muted" }), React4(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues3, variant: "text-sm/normal", color: "text-muted" })];
  obj6.children = items2;
  const items3 = [hasOwnProperty(React3, obj6), ];
  if (null != fieldValue) {
    const obj7 = { style: tmp.imageContainer, children: null };
    const obj8 = { source: null, style: null, resizeMode: "contain" };
    const obj9 = { uri: fieldValue.media.url };
    obj8.source = obj9;
    obj8.style = tmp.image;
    obj7.children = React4(React2, obj8);
    let tmp12Result = React4(React3, obj7);
  } else {
    const obj10 = { style: tmp.imageSkeleton };
    tmp12Result = React4(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj10);
  }
  const obj11 = { children: null };
  items3[1] = tmp12Result;
  obj5.children = items3;
  items1[1] = hasOwnProperty(React3, obj5);
  obj11.children = items1;
  return hasOwnProperty(React3, obj11);
});