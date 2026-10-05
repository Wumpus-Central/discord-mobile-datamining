// discord_app/modules/application_widget/native/UserProfileApplicationWidgetBottomProgressLayout.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _mod8594 from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserProfileApplicationWidgetSkeletons from "../../user_profile/native/UserProfileApplicationWidgetSkeletons.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
({ Image: c2, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  root: obj2,
  image: size,
  content: obj3,
  progressContainer: size1,
  progress: obj4,
  textContent: obj5,
  textLeft: { flex: 1, minWidth: 0 },
  progressText: { flexShrink: 0 },
};
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
size = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj3 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
size1 = {
  width: "100%",
  height: 6,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj4 = { height: 6, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.ICON_STRONG };
obj5 = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let bottomConfig;
      let combined1;
      let items;
      let items1;
      let items2;
      let items5;
      let items6;
      let num16;
      let obj13;
      let range;
      let resolveFieldValue;
      const obj = react2;
      const cResult = obj.c(68);
      ({ bottomConfig, resolveFieldValue } = arg0);
      const tmp4 = closure_6();
      const objective = bottomConfig.components.objective;
      let image;
      if (objective != null) {
        image = objective.fields.image;
      }
      if (cResult[0] === resolveFieldValue) {
        let tmp6;
        if (cResult[1] === image) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === objective) {
          let tmp8;
          if (cResult[4] === resolveFieldValue) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === objective) {
            let tmp10;
            let tmp23;
            let tmp22;
            let tmp21;
            let tmp20;
            let tmp19;
            let tmp18;
            let tmp17;
            let tmp16;
            let tmp15;
            let tmp14;
            let tmp30;
            if (cResult[7] === resolveFieldValue) {
              tmp10 = cResult[8];
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
                      const tmp60 = cResult[14];
                      if (progress != null) {
                        max = progress.fields.max;
                      }
                      if (tmp60 === max) {
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
                                            tmp14 = cResult[25];
                                            tmp15 = cResult[26];
                                            tmp16 = cResult[27];
                                            tmp17 = cResult[28];
                                            tmp18 = cResult[29];
                                            tmp19 = cResult[30];
                                            tmp20 = cResult[31];
                                            tmp21 = cResult[32];
                                            tmp22 = cResult[33];
                                            tmp23 = cResult[34];
                                          }
                                          if (cResult[53] === tmp14) {
                                            if (cResult[54] === tmp20) {
                                              if (cResult[55] === tmp21) {
                                                let tmp51;
                                                if (cResult[56] === tmp22) {
                                                  tmp51 = cResult[57];
                                                }
                                                if (cResult[58] === tmp15) {
                                                  if (cResult[59] === tmp17) {
                                                    if (cResult[60] === tmp51) {
                                                      let tmp54;
                                                      if (cResult[61] === tmp23) {
                                                        tmp54 = cResult[62];
                                                      }
                                                      if (cResult[63] === tmp16) {
                                                        if (cResult[64] === tmp18) {
                                                          if (cResult[65] === tmp19) {
                                                            let tmp57;
                                                            if (cResult[66] === tmp54) {
                                                              tmp57 = cResult[67];
                                                            }
                                                            return tmp57;
                                                          }
                                                        }
                                                      }
                                                      const obj2 = { style: tmp18, children: items };
                                                      items = [tmp19, tmp54];
                                                      const tmp59 = hasOwnProperty(tmp16, obj2);
                                                      cResult[63] = tmp16;
                                                      cResult[64] = tmp18;
                                                      cResult[65] = tmp19;
                                                      cResult[66] = tmp54;
                                                      cResult[67] = tmp59;
                                                      tmp57 = tmp59;
                                                    }
                                                  }
                                                }
                                                const obj3 = { style: tmp23, children: items1 };
                                                items1 = [tmp17, tmp51];
                                                const tmp56 = hasOwnProperty(tmp15, obj3);
                                                cResult[58] = tmp15;
                                                cResult[59] = tmp17;
                                                cResult[60] = tmp51;
                                                cResult[61] = tmp23;
                                                cResult[62] = tmp56;
                                                tmp54 = tmp56;
                                              }
                                            }
                                          }
                                          const obj4 = { style: tmp20, children: items2 };
                                          items2 = [tmp21, tmp22];
                                          const tmp53 = hasOwnProperty(tmp14, obj4);
                                          cResult[53] = tmp14;
                                          cResult[54] = tmp20;
                                          cResult[55] = tmp21;
                                          cResult[56] = tmp22;
                                          cResult[57] = tmp53;
                                          tmp51 = tmp53;
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
            const items3 = [_mod8594.ResolvedValueType.NUMBER];
            const iter = resolveFieldValue(current, items3);
            let max1;
            if (progress != null) {
              max1 = progress.fields.max;
            }
            const items4 = [_mod8594.ResolvedValueType.NUMBER];
            const iter2 = resolveFieldValue(max1, items4);
            _mod8594;
            const root = tmp4.root;
            if (cResult[35] === tmp6) {
              let tmp28;
              let tmp35;
              if (cResult[36] === tmp4.image) {
                tmp28 = cResult[37];
              }
              const content = tmp4.content;
              const _HermesInternal = HermesInternal;
              const combined = "" + tmp26 + "%";
              if (cResult[38] !== combined) {
                const obj5 = { width: combined };
                cResult[38] = combined;
                cResult[39] = obj5;
                tmp35 = obj5;
              } else {
                tmp35 = cResult[39];
              }
              if (cResult[40] === tmp4.progress) {
                let tmp36;
                let tmp39Result6;
                if (cResult[41] === tmp35) {
                  tmp36 = cResult[42];
                }
                let num15;
                const obj6 = {
                  style: tmp4.progressContainer,
                  accessibilityRole: "progressbar",
                  accessibilityValue: range,
                  children: tmp36,
                };
                if (iter2 != null) {
                  num15 = iter2.value;
                }
                if (num15 == null) {
                  num15 = 1;
                }
                range = { min: 0, max: num15, now: num16 };
                num16 = undefined;
                if (iter != null) {
                  num16 = iter.value;
                }
                if (num16 == null) {
                  num16 = 0;
                }
                const tmp39Result = React3(_false, obj6);
                const textContent = tmp4.textContent;
                if (cResult[43] === tmp8.status) {
                  let tmp41;
                  let tmp39Result5;
                  if (cResult[44] === tmp8.text) {
                    tmp41 = cResult[45];
                  }
                  if (cResult[46] === tmp10.status) {
                    let tmp43;
                    if (cResult[47] === tmp10.text) {
                      tmp43 = cResult[48];
                    }
                    if (cResult[49] === tmp4.textLeft) {
                      if (cResult[50] === tmp41) {
                        let tmp45;
                        let tmp39Result4;
                        if (cResult[51] === tmp43) {
                          tmp45 = cResult[52];
                        }
                        if (null != iter) {
                          const obj7 = {
                            variant: "text-sm/medium",
                            lineClamp: 1,
                            style: tmp4.progressText,
                            children: combined1,
                          };
                          const Text = Text_Text.Text;
                          if (null != iter2) {
                            const _HermesInternal3 = HermesInternal;
                            combined1 = "" + iter.value + "/" + iter2.value;
                          } else {
                            const _HermesInternal2 = HermesInternal;
                            const tmpResult4 = _mod8594;
                            combined1 = "" + tmpResult4.decimalToClampedPercentage(iter.value) + "%";
                          }
                          tmp39Result4 = React3(Text, obj7);
                        } else {
                          tmp39Result4 = React3(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
                            variant: "text-sm/medium",
                            widthChars: 4,
                          });
                        }
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
                        cResult[25] = _false;
                        cResult[26] = _false;
                        cResult[27] = _false;
                        cResult[28] = tmp39Result;
                        cResult[29] = root;
                        cResult[30] = tmp28;
                        cResult[31] = textContent;
                        cResult[32] = tmp45;
                        cResult[33] = tmp39Result4;
                        cResult[34] = content;
                        tmp23 = content;
                        tmp22 = tmp39Result4;
                        tmp21 = tmp45;
                        tmp20 = textContent;
                        tmp19 = tmp28;
                        tmp18 = root;
                        tmp17 = tmp39Result;
                        tmp16 = _false;
                        tmp15 = _false;
                        tmp14 = _false;
                      }
                    }
                    const obj8 = { style: tmp4.textLeft, children: items5 };
                    items5 = [tmp41, tmp43];
                    const tmp47 = hasOwnProperty(_false, obj8);
                    cResult[49] = tmp4.textLeft;
                    cResult[50] = tmp41;
                    cResult[51] = tmp43;
                    cResult[52] = tmp47;
                    tmp45 = tmp47;
                  }
                  if ("value" === tmp10.status) {
                    const obj9 = {
                      variant: "text-xs/medium",
                      color: "text-subtle",
                      lineClamp: 2,
                      children: tmp10.text,
                    };
                    tmp39Result5 = React3(Text_Text.Text, obj9);
                  } else {
                    tmp39Result5 = React3(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
                      variant: "text-xs/medium",
                    });
                  }
                  cResult[46] = tmp10.status;
                  cResult[47] = tmp10.text;
                  cResult[48] = tmp39Result5;
                  tmp43 = tmp39Result5;
                }
                if ("value" === tmp8.status) {
                  const obj10 = { variant: "heading-sm/medium", lineClamp: 2, children: tmp8.text };
                  tmp39Result6 = React3(Text_Text.Text, obj10);
                } else {
                  tmp39Result6 = React3(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
                    variant: "heading-sm/medium",
                  });
                }
                cResult[43] = tmp8.status;
                cResult[44] = tmp8.text;
                cResult[45] = tmp39Result6;
                tmp41 = tmp39Result6;
              }
              const obj11 = { style: items6 };
              items6 = [tmp4.progress, tmp35];
              const tmp38 = React3(_false, obj11);
              cResult[40] = tmp4.progress;
              cResult[41] = tmp35;
              cResult[42] = tmp38;
              tmp36 = tmp38;
            }
            if (null != tmp6) {
              const obj12 = { source: obj13, style: tmp4.image, resizeMode: "contain" };
              obj13 = { uri: tmp6.media.url };
              tmp30 = React3(React2, obj12);
            } else {
              const obj14 = { style: tmp4.image };
              tmp30 = React3(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj14);
            }
            cResult[35] = tmp6;
            cResult[36] = tmp4.image;
            cResult[37] = tmp30;
            tmp28 = tmp30;
          }
          const tmpResult5 = _mod8594;
          const singleStringOrSkeleton = tmpResult5.resolveSingleStringOrSkeleton(
            objective,
            "description",
            resolveFieldValue,
          );
          cResult[6] = objective;
          cResult[7] = resolveFieldValue;
          cResult[8] = singleStringOrSkeleton;
          tmp10 = singleStringOrSkeleton;
        }
        const tmpResult6 = _mod8594;
        const singleStringOrSkeleton1 = tmpResult6.resolveSingleStringOrSkeleton(objective, "name", resolveFieldValue);
        cResult[3] = objective;
        cResult[4] = resolveFieldValue;
        cResult[5] = singleStringOrSkeleton1;
        tmp8 = singleStringOrSkeleton1;
      }
      const items7 = [_mod8594.ResolvedValueType.MEDIA];
      const fieldValue = resolveFieldValue(image, items7);
      cResult[0] = resolveFieldValue;
      cResult[1] = image;
      cResult[2] = fieldValue;
      tmp6 = fieldValue;
    }
  : (arg0) => {
      let bottomConfig;
      let combined;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let num2;
      let obj5;
      let obj9;
      let range;
      let resolveFieldValue;
      let tmp14;
      let tmp15;
      let tmp15Result;
      let tmp15Result3;
      let tmp15Result4;
      ({ bottomConfig, resolveFieldValue } = arg0);
      const tmp = closure_6();
      const objective = bottomConfig.components.objective;
      let image;
      if (objective != null) {
        image = objective.fields.image;
      }
      const items = [_mod8594.ResolvedValueType.MEDIA];
      const fieldValue = resolveFieldValue(image, items);
      const obj = _mod8594;
      const singleStringOrSkeleton = obj.resolveSingleStringOrSkeleton(objective, "name", resolveFieldValue);
      const obj2 = _mod8594;
      const singleStringOrSkeleton1 = obj2.resolveSingleStringOrSkeleton(objective, "description", resolveFieldValue);
      const progress = bottomConfig.components.progress;
      let current;
      if (progress != null) {
        current = progress.fields.current;
      }
      const items1 = [_mod8594.ResolvedValueType.NUMBER];
      const iter = resolveFieldValue(current, items1);
      let max;
      if (progress != null) {
        max = progress.fields.max;
      }
      const items2 = [_mod8594.ResolvedValueType.NUMBER];
      const iter2 = resolveFieldValue(max, items2);
      const obj3 = { style: tmp.root, children: items3 };
      const tmp3Result = _mod8594;
      const progressPercentage = tmp3Result.resolveProgressPercentage(iter, iter2);
      if (null != fieldValue) {
        const obj4 = { source: obj5, style: tmp.image, resizeMode: "contain" };
        obj5 = { uri: fieldValue.media.url };
        tmp14 = React3(React2, obj4);
        tmp15 = React3;
      } else {
        const obj6 = { style: tmp.image };
        tmp14 = React3(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj6);
        tmp15 = React3;
      }
      items3 = [tmp14];
      const obj7 = { style: tmp.content, children: items5 };
      let num;
      const obj8 = {
        style: tmp.progressContainer,
        accessibilityRole: "progressbar",
        accessibilityValue: range,
        children: tmp15(_false, obj9),
      };
      if (iter2 != null) {
        num = iter2.value;
      }
      if (num == null) {
        num = 1;
      }
      range = { min: 0, max: num, now: num2 };
      num2 = undefined;
      if (iter != null) {
        num2 = iter.value;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj9 = { style: items4 };
      items4 = [tmp.progress, { width: "" + progressPercentage + "%" }];
      ({ width: "" + progressPercentage + "%" });
      items5 = [tmp15(_false, obj8)];
      const obj11 = { style: tmp.textContent, children: items7 };
      const obj12 = { style: tmp.textLeft, children: items6 };
      if ("value" === singleStringOrSkeleton.status) {
        const obj13 = { variant: "heading-sm/medium", lineClamp: 2, children: singleStringOrSkeleton.text };
        tmp15Result = tmp15(Text_Text.Text, obj13);
      } else {
        tmp15Result = tmp15(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "heading-sm/medium" });
      }
      items6 = [tmp15Result];
      if ("value" === singleStringOrSkeleton1.status) {
        const obj14 = {
          variant: "text-xs/medium",
          color: "text-subtle",
          lineClamp: 2,
          children: singleStringOrSkeleton1.text,
        };
        tmp15Result3 = tmp15(Text_Text.Text, obj14);
      } else {
        tmp15Result3 = tmp15(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "text-xs/medium" });
      }
      items6[1] = tmp15Result3;
      items7 = [hasOwnProperty(_false, obj12)];
      if (null != iter) {
        const obj15 = { variant: "text-sm/medium", lineClamp: 1, style: tmp.progressText, children: combined };
        const Text = Text_Text.Text;
        if (null != iter2) {
          const _HermesInternal2 = HermesInternal;
          combined = "" + iter.value + "/" + iter2.value;
        } else {
          const _HermesInternal = HermesInternal;
          const tmp3Result2 = _mod8594;
          combined = "" + tmp3Result2.decimalToClampedPercentage(iter.value) + "%";
        }
        tmp15Result4 = tmp15(Text, obj15);
      } else {
        tmp15Result4 = tmp15(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
          variant: "text-sm/medium",
          widthChars: 4,
        });
      }
      items7[1] = tmp15Result4;
      items5[1] = hasOwnProperty(_false, obj11);
      items3[1] = hasOwnProperty(_false, obj7);
      return hasOwnProperty(_false, obj3);
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetBottomProgressLayout.tsx",
);

export default tmp6;
