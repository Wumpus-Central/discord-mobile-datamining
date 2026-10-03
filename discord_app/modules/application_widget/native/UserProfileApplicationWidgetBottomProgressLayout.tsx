// discord_app/modules/application_widget/native/UserProfileApplicationWidgetBottomProgressLayout.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserProfileApplicationWidgetSkeletons from "../../user_profile/native/UserProfileApplicationWidgetSkeletons.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  root: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 },
  image: null,
  content: null,
  progressContainer: null,
  progress: null,
  textContent: null,
  textLeft: null,
  progressText: null,
};
let size = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.image = size;
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.content = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
const size1 = {
  width: "100%",
  height: 6,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.progressContainer = size1;
let obj4 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.progress = { height: 6, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.ICON_STRONG };
let obj5 = { height: 6, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.ICON_STRONG };
obj2.textContent = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
obj2.textLeft = { flex: 1, minWidth: 0 };
obj2.progressText = { flexShrink: 0 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetBottomProgressLayout.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(68);
      ({ bottomConfig, resolveFieldValue } = arg0);
      const tmp4 = closure_6();
      const objective = bottomConfig.components.objective;
      let image;
      if (objective != null) {
        image = objective.fields.image;
      }
      if (cResult[0] === resolveFieldValue) {
        if (cResult[1] === image) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === objective) {
          if (cResult[4] === resolveFieldValue) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === objective) {
            if (cResult[7] === resolveFieldValue) {
              let tmp10 = cResult[8];
            }
            const progress = bottomConfig.components.progress;
            let current;
            if (progress != null) {
              current = progress.fields.current;
            }
            if (cResult[9] === tmp10.status) {
              if (cResult[10] === tmp10.text) {
                if (cResult[11] === tmp6) {
                  if (cResult[12] === tmp8.status) {
                    if (cResult[13] === tmp8.text) {
                      let max;
                      if (progress != null) {
                        max = progress.fields.max;
                      }
                      if (cResult[14] === max) {
                        if (cResult[15] === resolveFieldValue) {
                          if (cResult[16] === tmp4.content) {
                            if (cResult[17] === tmp4.image) {
                              if (cResult[18] === tmp4.progress) {
                                if (cResult[19] === tmp4.progressContainer) {
                                  if (cResult[20] === tmp4.progressText) {
                                    if (cResult[21] === tmp4.root) {
                                      if (cResult[22] === tmp4.textContent) {
                                        if (cResult[23] === tmp4.textLeft) {
                                          if (cResult[24] === current) {
                                            let tmp14 = cResult[25];
                                            let tmp15 = cResult[26];
                                            let tmp16 = cResult[27];
                                            let tmp17 = cResult[28];
                                            let tmp18 = cResult[29];
                                            let tmp19 = cResult[30];
                                            let tmp20 = cResult[31];
                                            let tmp21 = cResult[32];
                                            let tmp22 = cResult[33];
                                            let tmp23 = cResult[34];
                                          }
                                          if (cResult[53] === tmp14) {
                                            if (cResult[54] === tmp20) {
                                              if (cResult[55] === tmp21) {
                                                if (cResult[56] === tmp22) {
                                                  let tmp54 = cResult[57];
                                                }
                                                if (cResult[58] === tmp15) {
                                                  if (cResult[59] === tmp17) {
                                                    if (cResult[60] === tmp54) {
                                                      if (cResult[61] === tmp23) {
                                                        let tmp57 = cResult[62];
                                                      }
                                                      if (cResult[63] === tmp16) {
                                                        if (cResult[64] === tmp18) {
                                                          if (cResult[65] === tmp19) {
                                                            if (cResult[66] === tmp57) {
                                                              let tmp60 = cResult[67];
                                                            }
                                                            return tmp60;
                                                          }
                                                        }
                                                      }
                                                      const obj2 = { style: tmp18, children: null };
                                                      const items = [tmp19, tmp57];
                                                      obj2.children = items;
                                                      const tmp62 = hasOwnProperty(tmp16, obj2);
                                                      cResult[63] = tmp16;
                                                      cResult[64] = tmp18;
                                                      cResult[65] = tmp19;
                                                      cResult[66] = tmp57;
                                                      cResult[67] = tmp62;
                                                      tmp60 = tmp62;
                                                    }
                                                  }
                                                }
                                                const obj3 = { style: tmp23, children: null };
                                                const items1 = [tmp17, tmp54];
                                                obj3.children = items1;
                                                const tmp59 = hasOwnProperty(tmp15, obj3);
                                                cResult[58] = tmp15;
                                                cResult[59] = tmp17;
                                                cResult[60] = tmp54;
                                                cResult[61] = tmp23;
                                                cResult[62] = tmp59;
                                                tmp57 = tmp59;
                                              }
                                            }
                                          }
                                          const obj4 = { style: tmp20, children: null };
                                          const items2 = [tmp21, tmp22];
                                          obj4.children = items2;
                                          const tmp56 = hasOwnProperty(tmp14, obj4);
                                          cResult[53] = tmp14;
                                          cResult[54] = tmp20;
                                          cResult[55] = tmp21;
                                          cResult[56] = tmp22;
                                          cResult[57] = tmp56;
                                          tmp54 = tmp56;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const items3 = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.NUMBER];
            let iter = resolveFieldValue(current, items3);
            let max1;
            if (progress != null) {
              max1 = progress.fields.max;
            }
            const items4 = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.NUMBER];
            let iter2 = resolveFieldValue(max1, items4);
            resolvedValuesFromUserApplicationIdentityProfile;
            const root = tmp4.root;
            if (cResult[35] === tmp6) {
              if (cResult[36] === tmp4.image) {
                const content = tmp4.content;
                let str3 = globalThis;
                const _HermesInternal = HermesInternal;
                const combined = "" + tmp26 + "%";
                if (cResult[38] !== combined) {
                  const obj5 = { width: combined };
                  cResult[38] = combined;
                  cResult[39] = obj5;
                  let tmp35 = obj5;
                } else {
                  tmp35 = cResult[39];
                }
                if (cResult[40] === tmp4.progress) {
                  if (cResult[41] === tmp35) {
                    let tmp36 = cResult[42];
                  }
                  const obj6 = {
                    style: tmp4.progressContainer,
                    accessibilityRole: "progressbar",
                    accessibilityValue: null,
                    children: null,
                  };
                  let num15;
                  if (iter2 != null) {
                    num15 = iter2.value;
                  }
                  if (num15 == null) {
                    num15 = 1;
                  }
                  const range = { min: 0, max: num15, now: null };
                  let num16;
                  if (iter != null) {
                    num16 = iter.value;
                  }
                  if (num16 == null) {
                    num16 = 0;
                  }
                  range.now = num16;
                  obj6.accessibilityValue = range;
                  obj6.children = tmp36;
                  const tmp39Result = React4(React3, obj6);
                  const textContent = tmp4.textContent;
                  if (cResult[43] === tmp8.status) {
                    if (cResult[44] === tmp8.text) {
                      if (cResult[46] === tmp10.status) {
                        if (cResult[47] === tmp10.text) {
                          if (cResult[49] === tmp4.textLeft) {
                            if (cResult[50] === tmp41) {
                              if (cResult[51] === tmp44) {
                                let tmp47 = cResult[52];
                              }
                              if (null != iter) {
                                const obj7 = {
                                  variant: "text-sm/medium",
                                  lineClamp: 1,
                                  style: tmp4.progressText,
                                  children: null,
                                };
                                if (null != iter2) {
                                  iter = iter2.value;
                                  iter2 = str3.HermesInternal.concat;
                                  str3 = "/";
                                  let iter2Result = iter2(iter.value, "/", iter);
                                } else {
                                  const _HermesInternal2 = HermesInternal;
                                  iter2Result =
                                    "" +
                                    resolvedValuesFromUserApplicationIdentityProfile.decimalToClampedPercentage(
                                      iter.value,
                                    ) +
                                    "%";
                                  const tmpResult4 = resolvedValuesFromUserApplicationIdentityProfile;
                                }
                                obj7.children = iter2Result;
                                React4(Text_Text.Text, obj7);
                              } else {
                                const tmp39Result6 = React4(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
                                  variant: "text-sm/medium",
                                  widthChars: 4,
                                });
                                cResult[9] = tmp10.status;
                                cResult[10] = tmp10.text;
                                cResult[11] = tmp6;
                                cResult[12] = tmp8.status;
                                cResult[13] = tmp8.text;
                                let max2;
                                if (progress != null) {
                                  max2 = progress.fields.max;
                                }
                                cResult[14] = max2;
                                cResult[15] = resolveFieldValue;
                                cResult[16] = tmp4.content;
                                cResult[17] = tmp4.image;
                                cResult[18] = tmp4.progress;
                                cResult[19] = tmp4.progressContainer;
                                cResult[20] = tmp4.progressText;
                                cResult[21] = tmp4.root;
                                cResult[22] = tmp4.textContent;
                                cResult[23] = tmp4.textLeft;
                                cResult[24] = current;
                                cResult[25] = React3;
                                cResult[26] = React3;
                                cResult[27] = React3;
                                cResult[28] = tmp39Result;
                                cResult[29] = root;
                                cResult[30] = tmp28;
                                cResult[31] = textContent;
                                cResult[32] = tmp47;
                                cResult[33] = tmp39Result6;
                                cResult[34] = content;
                                tmp23 = content;
                                tmp22 = tmp39Result6;
                                tmp21 = tmp47;
                                tmp20 = textContent;
                                tmp19 = tmp28;
                                tmp18 = root;
                                tmp17 = tmp39Result;
                                tmp16 = React3;
                                tmp15 = React3;
                                tmp14 = React3;
                              }
                            }
                          }
                          const obj8 = { style: tmp4.textLeft, children: null };
                          const items5 = [tmp41, cResult[48]];
                          obj8.children = items5;
                          const tmp49 = hasOwnProperty(React3, obj8);
                          cResult[49] = tmp4.textLeft;
                          cResult[50] = tmp41;
                          cResult[51] = cResult[48];
                          cResult[52] = tmp49;
                          tmp47 = tmp49;
                        }
                      }
                      if ("value" === tmp10.status) {
                        const obj9 = {
                          variant: "text-xs/medium",
                          color: "text-subtle",
                          lineClamp: 2,
                          children: tmp10.text,
                        };
                        let tmp39Result7 = React4(Text_Text.Text, obj9);
                      } else {
                        tmp39Result7 = React4(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
                          variant: "text-xs/medium",
                        });
                      }
                      cResult[46] = tmp10.status;
                      cResult[47] = tmp10.text;
                      cResult[48] = tmp39Result7;
                    }
                  }
                  if ("value" === tmp8.status) {
                    const obj10 = { variant: "heading-sm/medium", lineClamp: 2, children: tmp8.text };
                    let tmp39Result8 = React4(Text_Text.Text, obj10);
                  } else {
                    tmp39Result8 = React4(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
                      variant: "heading-sm/medium",
                    });
                  }
                  cResult[43] = tmp8.status;
                  cResult[44] = tmp8.text;
                  cResult[45] = tmp39Result8;
                }
                const obj11 = { style: null };
                const items6 = [tmp4.progress, tmp35];
                obj11.style = items6;
                const tmp38 = React4(React3, obj11);
                cResult[40] = tmp4.progress;
                cResult[41] = tmp35;
                cResult[42] = tmp38;
                tmp36 = tmp38;
              }
            }
            if (null != tmp6) {
              const obj12 = { source: null, style: null, resizeMode: "contain" };
              const obj13 = { uri: tmp6.media.url };
              obj12.source = obj13;
              obj12.style = tmp4.image;
              let tmp30 = React4(React2, obj12);
            } else {
              const obj14 = { style: tmp4.image };
              tmp30 = React4(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj14);
            }
            cResult[35] = tmp6;
            cResult[36] = tmp4.image;
            cResult[37] = tmp30;
          }
          const singleStringOrSkeleton = resolvedValuesFromUserApplicationIdentityProfile.resolveSingleStringOrSkeleton(
            objective,
            "description",
            resolveFieldValue,
          );
          cResult[6] = objective;
          cResult[7] = resolveFieldValue;
          cResult[8] = singleStringOrSkeleton;
          tmp10 = singleStringOrSkeleton;
          const tmpResult5 = resolvedValuesFromUserApplicationIdentityProfile;
        }
        const singleStringOrSkeleton1 = resolvedValuesFromUserApplicationIdentityProfile.resolveSingleStringOrSkeleton(
          objective,
          "name",
          resolveFieldValue,
        );
        cResult[3] = objective;
        cResult[4] = resolveFieldValue;
        cResult[5] = singleStringOrSkeleton1;
        tmp8 = singleStringOrSkeleton1;
        const tmpResult6 = resolvedValuesFromUserApplicationIdentityProfile;
      }
      const items7 = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
      const fieldValue = resolveFieldValue(image, items7);
      cResult[0] = resolveFieldValue;
      cResult[1] = image;
      cResult[2] = fieldValue;
      tmp6 = fieldValue;
    }
  : (arg0) => {
      ({ bottomConfig, resolveFieldValue } = arg0);
      const tmp = closure_6();
      const objective = bottomConfig.components.objective;
      let image;
      if (objective != null) {
        image = objective.fields.image;
      }
      const items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
      const fieldValue = resolveFieldValue(image, items);
      const singleStringOrSkeleton = resolvedValuesFromUserApplicationIdentityProfile.resolveSingleStringOrSkeleton(
        objective,
        "name",
        resolveFieldValue,
      );
      const singleStringOrSkeleton1 = resolvedValuesFromUserApplicationIdentityProfile.resolveSingleStringOrSkeleton(
        objective,
        "description",
        resolveFieldValue,
      );
      const progress = bottomConfig.components.progress;
      let current;
      if (progress != null) {
        current = progress.fields.current;
      }
      const items1 = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.NUMBER];
      let iter = resolveFieldValue(current, items1);
      let max;
      if (progress != null) {
        max = progress.fields.max;
      }
      const items2 = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.NUMBER];
      let iter2 = resolveFieldValue(max, items2);
      const obj3 = { style: tmp.root, children: null };
      const progressPercentage = resolvedValuesFromUserApplicationIdentityProfile.resolveProgressPercentage(
        iter,
        iter2,
      );
      if (null != fieldValue) {
        const obj4 = { source: null, style: null, resizeMode: "contain" };
        const obj5 = { uri: fieldValue.media.url };
        obj4.source = obj5;
        obj4.style = tmp.image;
        let tmp14 = React4(React2, obj4);
        let tmp15 = React4;
      } else {
        const obj6 = { style: tmp.image };
        tmp14 = React4(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj6);
        tmp15 = React4;
      }
      const items3 = [tmp14];
      const obj7 = { style: tmp.content, children: null };
      const obj8 = {
        style: tmp.progressContainer,
        accessibilityRole: "progressbar",
        accessibilityValue: null,
        children: null,
      };
      let num;
      if (iter2 != null) {
        num = iter2.value;
      }
      if (num == null) {
        num = 1;
      }
      const range = { min: 0, max: num, now: null };
      let num2;
      if (iter != null) {
        num2 = iter.value;
      }
      if (num2 == null) {
        num2 = 0;
      }
      range.now = num2;
      obj8.accessibilityValue = range;
      const obj9 = { style: null };
      const items4 = [tmp.progress];
      const tmp3Result = resolvedValuesFromUserApplicationIdentityProfile;
      let str = globalThis;
      items4[1] = { width: "" + progressPercentage + "%" };
      obj9.style = items4;
      obj8.children = tmp15(React3, obj9);
      const items5 = [tmp15(React3, obj8)];
      const obj11 = { style: tmp.textContent, children: null };
      const obj12 = { style: tmp.textLeft, children: null };
      if ("value" === singleStringOrSkeleton.status) {
        const obj13 = { variant: "heading-sm/medium", lineClamp: 2, children: singleStringOrSkeleton.text };
        let tmp15Result = tmp15(Text_Text.Text, obj13);
      } else {
        tmp15Result = tmp15(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "heading-sm/medium" });
      }
      const items6 = [tmp15Result];
      if ("value" === singleStringOrSkeleton1.status) {
        const obj14 = {
          variant: "text-xs/medium",
          color: "text-subtle",
          lineClamp: 2,
          children: singleStringOrSkeleton1.text,
        };
        let tmp15Result3 = tmp15(Text_Text.Text, obj14);
      } else {
        tmp15Result3 = tmp15(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "text-xs/medium" });
      }
      items6[1] = tmp15Result3;
      obj12.children = items6;
      const items7 = [hasOwnProperty(React3, obj12)];
      if (null != iter) {
        const obj15 = { variant: "text-sm/medium", lineClamp: 1, style: tmp.progressText, children: null };
        if (null != iter2) {
          iter = iter2.value;
          iter2 = str.HermesInternal.concat;
          str = "/";
          let iter2Result = iter2(iter.value, "/", iter);
        } else {
          const _HermesInternal = HermesInternal;
          iter2Result =
            "" + resolvedValuesFromUserApplicationIdentityProfile.decimalToClampedPercentage(iter.value) + "%";
          const tmp3Result2 = resolvedValuesFromUserApplicationIdentityProfile;
        }
        obj15.children = iter2Result;
        tmp15(Text_Text.Text, obj15);
      } else {
        items7[1] = tmp15(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
          variant: "text-sm/medium",
          widthChars: 4,
        });
        obj11.children = items7;
        items5[1] = hasOwnProperty(React3, obj11);
        obj7.children = items5;
        items3[1] = hasOwnProperty(React3, obj7);
        obj3.children = items3;
        return hasOwnProperty(React3, obj3);
      }
      const obj10 = { width: "" + progressPercentage + "%" };
    };
