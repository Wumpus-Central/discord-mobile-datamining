// discord_app/modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../_runtime/05388_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef6247 from "../../../../_runtime/metro/06247__.js";
import UserProfileSharedStyles from "../../user_profile/native/UserProfileSharedStyles.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserProfileApplicationWidgetFieldUtils from "../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx";
import UserProfileApplicationWidgetSkeletons from "../../user_profile/native/UserProfileApplicationWidgetSkeletons.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const HorizontalGradient = fn(1085).HorizontalGradient;
const CARD_PADDING = fn(6898).CARD_PADDING;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const colors = ["transparent", "black"];
const createStyles = fn(5091);
let obj2 = {
  root: { position: "relative" },
  contentRow: { flexDirection: "row", gap: nativeDefault.space.PX_12, minHeight: 140 },
  heroText: null,
  heroImageColumn: null,
  heroImageSkeleton: null,
  heroImagePositioner: null,
  heroImageMask: null,
  heroImageFadeGradient: null,
  heroImageMaskRemainder: null,
};
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, minHeight: 140 };
obj2.heroText = { flex: 1, minWidth: 120, gap: nativeDefault.space.PX_4, justifyContent: "center" };
obj2.heroImageColumn = { flex: 1, alignItems: "flex-end" };
let size = { width: 86, height: 86, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
obj2.heroImageSkeleton = size;
obj2.heroImagePositioner = {
  position: "absolute",
  left: "50%",
  right: -CARD_PADDING,
  top: -CARD_PADDING,
  bottom: 0,
  overflow: "hidden",
};
obj2.heroImageMask = { flex: 1, flexDirection: "row" };
obj2.heroImageFadeGradient = { width: 130 };
obj2.heroImageMaskRemainder = { flex: 1, backgroundColor: "black" };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flex: 1, minWidth: 120, gap: nativeDefault.space.PX_4, justifyContent: "center" };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileApplicationWidgetTopHeroLayout(arg0) {
      const cResult = c.c(57);
      ({ header, topConfig, resolveFieldValue, numberFormat } = arg0);
      const tmp4 = closure_10();
      [tmp6, require] = noop.useState(null);
      if (cResult[0] === numberFormat) {
        if (cResult[1] === resolveFieldValue) {
          if (cResult[2] === topConfig.components.title) {
            let tmp7 = cResult[3];
          }
          if (cResult[4] === numberFormat) {
            if (cResult[5] === resolveFieldValue) {
              if (cResult[6] === topConfig.components.subtitle_1) {
                let tmp9 = cResult[7];
              }
              if (cResult[8] === numberFormat) {
                if (cResult[9] === resolveFieldValue) {
                  if (cResult[10] === topConfig.components.subtitle_2) {
                    let tmp11 = cResult[11];
                  }
                  if (cResult[12] === numberFormat) {
                    if (cResult[13] === resolveFieldValue) {
                      if (cResult[14] === topConfig.components.subtitle_3) {
                        let tmp13 = cResult[15];
                      }
                      const hero_image = topConfig.components.hero_image;
                      let image;
                      if (hero_image != null) {
                        image = hero_image.fields.image;
                      }
                      if (cResult[16] === resolveFieldValue) {
                        if (cResult[17] === image) {
                          let tmp16 = cResult[18];
                        }
                        const userProfileCardRadius = UserProfileSharedStyles.useUserProfileCardRadius();
                        if (cResult[19] !== tmp7) {
                          const obj2 = { field: tmp7, variant: "text-lg/medium", color: "text-default" };
                          const tmp21 = React5(UserProfileApplicationWidgetFieldUtils.FieldText, obj2);
                          cResult[19] = tmp7;
                          cResult[20] = tmp21;
                          let tmp19 = tmp21;
                        } else {
                          tmp19 = cResult[20];
                        }
                        if (cResult[21] !== tmp9) {
                          const obj3 = { field: tmp9, variant: "text-sm/normal", color: "text-muted" };
                          const tmp24 = React5(UserProfileApplicationWidgetFieldUtils.FieldText, obj3);
                          cResult[21] = tmp9;
                          cResult[22] = tmp24;
                          let tmp22 = tmp24;
                        } else {
                          tmp22 = cResult[22];
                        }
                        if (cResult[23] !== tmp11) {
                          const obj4 = { field: tmp11, variant: "text-sm/normal", color: "text-muted" };
                          const tmp27 = React5(UserProfileApplicationWidgetFieldUtils.FieldText, obj4);
                          cResult[23] = tmp11;
                          cResult[24] = tmp27;
                          let tmp25 = tmp27;
                        } else {
                          tmp25 = cResult[24];
                        }
                        if (cResult[25] !== tmp13) {
                          const obj5 = { field: tmp13, variant: "text-sm/normal", color: "text-muted" };
                          const tmp30 = React5(UserProfileApplicationWidgetFieldUtils.FieldText, obj5);
                          cResult[25] = tmp13;
                          cResult[26] = tmp30;
                          let tmp28 = tmp30;
                        } else {
                          tmp28 = cResult[26];
                        }
                        if (cResult[27] === tmp4.heroText) {
                          if (cResult[28] === tmp28) {
                            if (cResult[29] === tmp19) {
                              if (cResult[30] === tmp22) {
                                if (cResult[31] === tmp25) {
                                  let tmp31 = cResult[32];
                                }
                                if (cResult[33] === tmp16) {
                                  if (cResult[34] === tmp6) {
                                    if (cResult[35] === tmp4.heroImageSkeleton) {
                                      let tmp35 = cResult[36];
                                    }
                                    if (cResult[37] === tmp4.heroImageColumn) {
                                      if (cResult[38] === tmp35) {
                                        let tmp38 = cResult[39];
                                      }
                                      if (cResult[40] === tmp4.contentRow) {
                                        if (cResult[41] === tmp31) {
                                          if (cResult[42] === tmp38) {
                                            let tmp42 = cResult[43];
                                          }
                                          if (cResult[44] === userProfileCardRadius) {
                                            if (cResult[45] === tmp16) {
                                              if (cResult[46] === tmp6) {
                                                if (cResult[47] === tmp4.heroImageFadeGradient) {
                                                  if (cResult[48] === tmp4.heroImageMask) {
                                                    if (cResult[49] === tmp4.heroImageMaskRemainder) {
                                                      if (cResult[50] === tmp4.heroImagePositioner) {
                                                        let tmp46 = cResult[51];
                                                      }
                                                      if (cResult[52] === header) {
                                                        if (cResult[53] === tmp4.root) {
                                                          if (cResult[54] === tmp42) {
                                                            if (cResult[55] === tmp46) {
                                                              let tmp57 = cResult[56];
                                                            }
                                                            return tmp57;
                                                          }
                                                        }
                                                      }
                                                      const obj6 = { style: tmp4.root, children: null };
                                                      const items = [header, tmp42, tmp46];
                                                      obj6.children = items;
                                                      const tmp60 = closure_1_8(View, obj6);
                                                      cResult[52] = header;
                                                      cResult[53] = tmp4.root;
                                                      cResult[54] = tmp42;
                                                      cResult[55] = tmp46;
                                                      cResult[56] = tmp60;
                                                      tmp57 = tmp60;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          let tmp48Result2 = null != tmp16;
                                          if (tmp48Result2) {
                                            const obj7 = {
                                              style: null,
                                              pointerEvents: "none",
                                              onLayout: null,
                                              children: null,
                                            };
                                            const items1 = [tmp4.heroImagePositioner];
                                            const obj8 = { borderTopRightRadius: userProfileCardRadius };
                                            items1[1] = obj8;
                                            obj7.style = items1;
                                            obj7.onLayout = function onLayout(nativeEvent) {
                                              const layout = nativeEvent.nativeEvent.layout;
                                              const size = { width: layout.width, height: layout.height };
                                              require(size);
                                            };
                                            let tmp48Result = null != tmp6;
                                            if (tmp48Result) {
                                              const result = tmp16.media.height * (tmp6.width / tmp16.media.width);
                                              const obj9 = {
                                                style: null,
                                                androidRenderingMode: "software",
                                                maskElement: null,
                                                children: null,
                                              };
                                              let size = { width: tmp6.width, height: result };
                                              obj9.style = size;
                                              const obj10 = { style: tmp4.heroImageMask, children: null };
                                              const obj11 = { start: null, end: null, colors: null, style: null };
                                              ({ START: obj20.start, END: obj20.end } = HorizontalGradient);
                                              obj11.colors = colors;
                                              obj11.style = tmp4.heroImageFadeGradient;
                                              const items2 = [React5(LinearGradientDefault, obj11)];
                                              const obj12 = { style: tmp4.heroImageMaskRemainder };
                                              items2[1] = React5(View, obj12);
                                              obj10.children = items2;
                                              obj9.maskElement = closure_1_8(View, obj10);
                                              const obj13 = { source: null, style: null };
                                              const obj14 = { uri: tmp16.media.url };
                                              obj13.source = obj14;
                                              obj13.style = { width: "100%", height: "100%" };
                                              obj9.children = React5(FastImageDefault, obj13);
                                              tmp48Result = React5(_modDef6247, obj9);
                                            }
                                            obj7.children = tmp48Result;
                                            tmp48Result2 = React5(View, obj7);
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
                                      const obj15 = { style: tmp4.contentRow, children: null };
                                      const items3 = [tmp31, tmp38];
                                      obj15.children = items3;
                                      const tmp45 = closure_1_8(View, obj15);
                                      cResult[40] = tmp4.contentRow;
                                      cResult[41] = tmp31;
                                      cResult[42] = tmp38;
                                      cResult[43] = tmp45;
                                      tmp42 = tmp45;
                                    }
                                    const obj16 = { style: tmp4.heroImageColumn, children: tmp35 };
                                    const tmp41 = React5(View, obj16);
                                    cResult[37] = tmp4.heroImageColumn;
                                    cResult[38] = tmp35;
                                    cResult[39] = tmp41;
                                    tmp38 = tmp41;
                                  }
                                }
                                let tmp36 = null == tmp16 || null == tmp6;
                                if (tmp36) {
                                  const obj17 = { style: tmp4.heroImageSkeleton };
                                  tmp36 = React5(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj17);
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
                        const obj18 = { style: tmp4.heroText, children: null };
                        const items4 = [tmp19, tmp22, tmp25, tmp28];
                        obj18.children = items4;
                        const tmp34 = closure_1_8(View, obj18);
                        cResult[27] = tmp4.heroText;
                        cResult[28] = tmp28;
                        cResult[29] = tmp19;
                        cResult[30] = tmp22;
                        cResult[31] = tmp25;
                        cResult[32] = tmp34;
                        tmp31 = tmp34;
                        const tmpResult = UserProfileSharedStyles;
                      }
                      const items5 = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
                      const fieldValue = resolveFieldValue(image, items5);
                      cResult[16] = resolveFieldValue;
                      cResult[17] = image;
                      cResult[18] = fieldValue;
                      tmp16 = fieldValue;
                    }
                  }
                  const textComponentValues =
                    resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
                      topConfig.components.subtitle_3,
                      resolveFieldValue,
                      numberFormat,
                    );
                  cResult[12] = numberFormat;
                  cResult[13] = resolveFieldValue;
                  cResult[14] = topConfig.components.subtitle_3;
                  cResult[15] = textComponentValues;
                  tmp13 = textComponentValues;
                  const tmpResult5 = resolvedValuesFromUserApplicationIdentityProfile;
                }
              }
              const textComponentValues1 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
                topConfig.components.subtitle_2,
                resolveFieldValue,
                numberFormat,
              );
              cResult[8] = numberFormat;
              cResult[9] = resolveFieldValue;
              cResult[10] = topConfig.components.subtitle_2;
              cResult[11] = textComponentValues1;
              tmp11 = textComponentValues1;
              const tmpResult6 = resolvedValuesFromUserApplicationIdentityProfile;
            }
          }
          const textComponentValues2 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
            topConfig.components.subtitle_1,
            resolveFieldValue,
            numberFormat,
          );
          cResult[4] = numberFormat;
          cResult[5] = resolveFieldValue;
          cResult[6] = topConfig.components.subtitle_1;
          cResult[7] = textComponentValues2;
          tmp9 = textComponentValues2;
          const tmpResult7 = resolvedValuesFromUserApplicationIdentityProfile;
        }
      }
      const tmp5 = _slicedToArray(noop.useState(null), 2);
      const textComponentValues3 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
        topConfig.components.title,
        resolveFieldValue,
        numberFormat,
        true,
      );
      cResult[0] = numberFormat;
      cResult[1] = resolveFieldValue;
      cResult[2] = topConfig.components.title;
      cResult[3] = textComponentValues3;
      tmp7 = textComponentValues3;
      const tmpResult8 = resolvedValuesFromUserApplicationIdentityProfile;
    }
  : function UserProfileApplicationWidgetTopHeroLayout(header) {
      ({ topConfig, resolveFieldValue, numberFormat } = header);
      c0 = undefined;
      const tmp = closure_10();
      [tmp3, c0] = noop.useState(null);
      const tmp2 = _slicedToArray(noop.useState(null), 2);
      const textComponentValues = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
        topConfig.components.title,
        resolveFieldValue,
        numberFormat,
        true,
      );
      const textComponentValues1 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
        topConfig.components.subtitle_1,
        resolveFieldValue,
        numberFormat,
      );
      const textComponentValues2 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
        topConfig.components.subtitle_2,
        resolveFieldValue,
        numberFormat,
      );
      const hero_image = topConfig.components.hero_image;
      let image;
      const textComponentValues3 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
        topConfig.components.subtitle_3,
        resolveFieldValue,
        numberFormat,
      );
      if (hero_image != null) {
        image = hero_image.fields.image;
      }
      const items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
      const fieldValue = resolveFieldValue(image, items);
      const obj5 = { style: tmp.root, children: null };
      const items1 = [header.header, ,];
      const obj6 = { style: tmp.contentRow, children: null };
      const obj7 = { style: tmp.heroText, children: null };
      const userProfileCardRadius = UserProfileSharedStyles.useUserProfileCardRadius();
      const items2 = [
        React5(UserProfileApplicationWidgetFieldUtils.FieldText, {
          field: textComponentValues,
          variant: "text-lg/medium",
          color: "text-default",
        }),
        React5(UserProfileApplicationWidgetFieldUtils.FieldText, {
          field: textComponentValues1,
          variant: "text-sm/normal",
          color: "text-muted",
        }),
        React5(UserProfileApplicationWidgetFieldUtils.FieldText, {
          field: textComponentValues2,
          variant: "text-sm/normal",
          color: "text-muted",
        }),
        React5(UserProfileApplicationWidgetFieldUtils.FieldText, {
          field: textComponentValues3,
          variant: "text-sm/normal",
          color: "text-muted",
        }),
      ];
      obj7.children = items2;
      const items3 = [closure_1_8(View, obj7)];
      const obj8 = { style: tmp.heroImageColumn, children: null };
      let tmp15Result = null == fieldValue || null == tmp3;
      if (tmp15Result) {
        const obj9 = { style: tmp.heroImageSkeleton };
        tmp15Result = React5(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj9);
      }
      obj8.children = tmp15Result;
      items3[1] = React5(View, obj8);
      obj6.children = items3;
      items1[1] = closure_1_8(View, obj6);
      let tmp15Result4 = null != fieldValue;
      if (tmp15Result4) {
        const obj10 = { style: null, pointerEvents: "none", onLayout: null, children: null };
        const items4 = [tmp.heroImagePositioner];
        const obj11 = { borderTopRightRadius: userProfileCardRadius };
        items4[1] = obj11;
        obj10.style = items4;
        obj10.onLayout = function onLayout(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          const size = { width: layout.width, height: layout.height };
          _undefined(size);
        };
        let tmp15Result3 = null != tmp3;
        if (tmp15Result3) {
          const result = fieldValue.media.height * (tmp3.width / fieldValue.media.width);
          const obj12 = { style: null, androidRenderingMode: "software", maskElement: null, children: null };
          let size = { width: tmp3.width, height: result };
          obj12.style = size;
          const obj13 = { style: tmp.heroImageMask, children: null };
          const obj14 = { start: null, end: null, colors: null, style: null };
          ({ START: obj16.start, END: obj16.end } = HorizontalGradient);
          obj14.colors = colors;
          obj14.style = tmp.heroImageFadeGradient;
          const items5 = [React5(LinearGradientDefault, obj14)];
          const obj15 = { style: tmp.heroImageMaskRemainder };
          items5[1] = React5(View, obj15);
          obj13.children = items5;
          obj12.maskElement = closure_1_8(View, obj13);
          const obj17 = { source: null, style: null };
          const obj18 = { uri: fieldValue.media.url };
          obj17.source = obj18;
          obj17.style = { width: "100%", height: "100%" };
          obj12.children = React5(FastImageDefault, obj17);
          tmp15Result3 = React5(_modDef6247, obj12);
        }
        obj10.children = tmp15Result3;
        tmp15Result4 = React5(View, obj10);
      }
      items1[2] = tmp15Result4;
      obj5.children = items1;
      return closure_1_8(View, obj5);
    };
