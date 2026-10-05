// discord_app/components_native/premium/OutboundPromotionClaimAlert.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import ClipboardUtils from "../../utils/ClipboardUtils.native.tsx";
import PromotionUtils from "../../modules/premium/promotions/PromotionUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let onCancel;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let react = react_mod;
({
  ActivityIndicator: hasOwnProperty,
  View: metroRequire,
  Image: metroImportDefault,
  ScrollView: metroImportAll,
} = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  loading: { marginVertical: 80 },
  body: { alignItems: "center" },
  title: { marginBottom: 8 },
  errorTitle: { lineHeight: 24, marginBottom: 8 },
  bodyText: { textAlign: "center", lineHeight: 20 },
  copyInputContainer: obj2,
  copyInputLabel: { lineHeight: 20, marginBottom: 8 },
  copyInput: obj3,
  copyInputCopied: obj4,
  copyButton: { paddingHorizontal: 8, marginLeft: 8 },
  promotionArt: { width: 200, height: 100, marginBottom: 20 },
  errorArt: { width: 141, height: 99, marginBottom: 20 },
};
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginTop: 16,
  padding: 12,
  borderRadius: nativeDefault.radii.sm,
};
createStyles = createStyles.createStyles;
obj3 = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  marginBottom: 8,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj4 = { borderColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
let closure_11 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onCancel) => {
      let closure_5;
      let code;
      let items;
      let tmp10;
      let tmp6;
      let tmp9;
      const tmp = onCancel;
      let obj = onCancel(code[7]);
      const cResult = obj.c(51);
      onCancel = onCancel.onCancel;
      const onClaim = onCancel.onClaim;
      code = onCancel.code;
      const outboundPromotion = onCancel.outboundPromotion;
      const tmp4 = closure_11();
      const tmp5 = outboundPromotion(react.useState(null), 2);
      [tmp6, react] = tmp5;
      [tmp9, tmp10] = outboundPromotion(onClaim(code[8])(false, 2000), 2);
      let closure_6 = tmp11;
      const tmp8 = outboundPromotion(onClaim(code[8])(false, 2000), 2);
      const tmp12 = onClaim(code[9]);
      const analyticsLocations = tmp12(onClaim(code[10]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
      if (cResult[0] === analyticsLocations) {
        if ((cResult[1] === null) != code) {
          if (cResult[2] === onClaim) {
            if (cResult[3] === outboundPromotion.id) {
              if (cResult[4] === outboundPromotion.outboundTitle) {
                let tmp13;
                let tmp14;
                if (cResult[5] === outboundPromotion.partnerId) {
                  tmp13 = cResult[6];
                  tmp14 = cResult[7];
                }
                const effect = react.useEffect(tmp13, tmp14);
                if (cResult[8] === code) {
                  if (cResult[9] === tmp9) {
                    if (cResult[10] === outboundPromotion.outboundRedemptionModalBody) {
                      if (cResult[11] === tmp10) {
                        if (cResult[12] === tmp4.body) {
                          if (cResult[13] === tmp4.bodyText) {
                            if (cResult[14] === tmp4.copyButton) {
                              if (cResult[15] === tmp4.copyInput) {
                                if (cResult[16] === tmp4.copyInputContainer) {
                                  if (cResult[17] === tmp4.copyInputCopied) {
                                    if (cResult[18] === tmp4.copyInputLabel) {
                                      if (cResult[19] === tmp4.loading) {
                                        if (cResult[20] === tmp4.promotionArt) {
                                          let tmp16;
                                          let tmp18;
                                          let tmp23;
                                          let tmp25;
                                          let tmp28;
                                          let tmp30;
                                          if (cResult[21] === tmp4.title) {
                                            tmp16 = cResult[22];
                                          }
                                          const body = tmp4.body;
                                          if (cResult[23] !== tmp4.errorArt) {
                                            let obj3 = { source: onClaim(tmp2[17]), style: tmp4.errorArt };
                                            const tmp21 = closure_9(analyticsLocations, obj3);
                                            cResult[23] = tmp4.errorArt;
                                            cResult[24] = tmp21;
                                            tmp18 = tmp21;
                                          } else {
                                            tmp18 = cResult[24];
                                          }
                                          const _Symbol = Symbol;
                                          const errorTitle = tmp4.errorTitle;
                                          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                                            const intl = tmp(tmp2[14]).intl;
                                            const stringResult = intl.string(tmp(code[14]).t.iufib1);
                                            cResult[25] = stringResult;
                                            tmp23 = stringResult;
                                          } else {
                                            tmp23 = cResult[25];
                                          }
                                          if (cResult[26] !== tmp4.errorTitle) {
                                            const obj4 = {
                                              style: errorTitle,
                                              variant: "text-lg/bold",
                                              color: "mobile-text-heading-primary",
                                              children: tmp23,
                                            };
                                            const tmp27 = closure_9(tmp(code[13]).Text, obj4);
                                            cResult[26] = tmp4.errorTitle;
                                            cResult[27] = tmp27;
                                            tmp25 = tmp27;
                                          } else {
                                            tmp25 = cResult[27];
                                          }
                                          const _Symbol2 = Symbol;
                                          const bodyText = tmp4.bodyText;
                                          if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                                            const intl2 = tmp(tmp2[14]).intl;
                                            const stringResult1 = intl2.string(tmp(code[14]).t.eAn6z2);
                                            cResult[28] = stringResult1;
                                            tmp28 = stringResult1;
                                          } else {
                                            tmp28 = cResult[28];
                                          }
                                          if (cResult[29] !== tmp4.bodyText) {
                                            const obj5 = {
                                              style: bodyText,
                                              variant: "text-md/medium",
                                              children: tmp28,
                                            };
                                            const tmp32 = closure_9(tmp(code[13]).Text, obj5);
                                            cResult[29] = tmp4.bodyText;
                                            cResult[30] = tmp32;
                                            tmp30 = tmp32;
                                          } else {
                                            tmp30 = cResult[30];
                                          }
                                          if (cResult[31] === tmp4.body) {
                                            if (cResult[32] === tmp30) {
                                              if (cResult[33] === tmp18) {
                                                let tmp37;
                                                if (cResult[36] !== tmp6) {
                                                  let stringResult2;
                                                  if (null != tmp6) {
                                                    const intl4 = tmp(tmp2[14]).intl;
                                                    stringResult2 = intl4.string(tmp(tmp2[14]).t.cpT0Cq);
                                                  } else {
                                                    const intl3 = tmp(tmp2[14]).intl;
                                                    stringResult2 = intl3.string(tmp(tmp2[14]).t["+zx47d"]);
                                                  }
                                                  cResult[36] = tmp6;
                                                  class Q {
                                                    constructor() {
                                                      if (null != code) {
                                                        const obj = PromotionUtils;
                                                        const outboundPromotionRedemptionUrl =
                                                          obj.getOutboundPromotionRedemptionUrl(tmp, outboundPromotion);
                                                        const obj2 = LinkingDefault;
                                                        obj2.openURL(outboundPromotionRedemptionUrl);
                                                      }
                                                      onCancel();
                                                    }
                                                  }
                                                  cResult[37] = stringResult2;
                                                  tmp37 = stringResult2;
                                                } else {
                                                  tmp37 = cResult[37];
                                                }
                                                if (cResult[38] === code) {
                                                  if (cResult[39] === onCancel) {
                                                    let tmp39;
                                                    let tmp40;
                                                    if (cResult[40] === outboundPromotion) {
                                                      tmp39 = cResult[41];
                                                    }
                                                    if (cResult[42] !== tmp6) {
                                                      let stringResult3;
                                                      if (null == tmp6) {
                                                        const intl5 = tmp(tmp2[14]).intl;
                                                        stringResult3 = intl5.string(tmp(tmp2[14]).t.TulDPl);
                                                      }
                                                      class Q {
                                                        constructor() {
                                                          if (null != code) {
                                                            const obj = PromotionUtils;
                                                            const outboundPromotionRedemptionUrl =
                                                              obj.getOutboundPromotionRedemptionUrl(
                                                                tmp,
                                                                outboundPromotion,
                                                              );
                                                            const obj2 = LinkingDefault;
                                                            obj2.openURL(outboundPromotionRedemptionUrl);
                                                          }
                                                          onCancel();
                                                        }
                                                      }
                                                      cResult[43] = stringResult3;
                                                      tmp40 = stringResult3;
                                                    } else {
                                                      tmp40 = cResult[43];
                                                    }
                                                    class Q {
                                                      constructor() {
                                                        if (null != code) {
                                                          const obj = PromotionUtils;
                                                          const outboundPromotionRedemptionUrl =
                                                            obj.getOutboundPromotionRedemptionUrl(
                                                              tmp,
                                                              outboundPromotion,
                                                            );
                                                          const obj2 = LinkingDefault;
                                                          obj2.openURL(outboundPromotionRedemptionUrl);
                                                        }
                                                        onCancel();
                                                      }
                                                    }
                                                    if (cResult[44] === onCancel) {
                                                      if (cResult[45] === tmp37) {
                                                        if (cResult[46] === tmp39) {
                                                          if (cResult[47] === tmp40) {
                                                            if (cResult[48] === (null == code && null == tmp6)) {
                                                              let tmp43;
                                                              if (cResult[49] === tmp16) {
                                                                tmp43 = cResult[50];
                                                              }
                                                              return tmp43;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj6 = {
                                                      onCancel,
                                                      confirmText: tmp37,
                                                      onConfirm: tmp39,
                                                      cancelText: tmp40,
                                                      noDefaultButtons: null == code && null == tmp6,
                                                      children: tmp16,
                                                    };
                                                    const tmp45 = closure_9(onClaim(code[19]), obj6);
                                                    cResult[44] = onCancel;
                                                    cResult[45] = tmp37;
                                                    cResult[46] = tmp39;
                                                    cResult[47] = tmp40;
                                                    cResult[48] = null == code && null == tmp6;
                                                    cResult[49] = tmp16;
                                                    cResult[50] = tmp45;
                                                    tmp43 = tmp45;
                                                  }
                                                }
                                                class Q {
                                                  constructor() {
                                                    if (null != code) {
                                                      const obj = PromotionUtils;
                                                      const outboundPromotionRedemptionUrl =
                                                        obj.getOutboundPromotionRedemptionUrl(tmp, outboundPromotion);
                                                      const obj2 = LinkingDefault;
                                                      obj2.openURL(outboundPromotionRedemptionUrl);
                                                    }
                                                    onCancel();
                                                  }
                                                }
                                                cResult[38] = code;
                                                cResult[39] = onCancel;
                                                cResult[40] = outboundPromotion;
                                                cResult[41] = Q;
                                                tmp39 = Q;
                                              }
                                            }
                                          }
                                          const obj7 = { style: body, children: items };
                                          items = [tmp18, tmp25, tmp30];
                                          cResult[31] = tmp4.body;
                                          cResult[32] = tmp30;
                                          cResult[33] = tmp18;
                                          cResult[34] = tmp25;
                                          cResult[35] = closure_10(closure_6, obj7);
                                          const tmp36 = closure_10(closure_6, obj7);
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
                cResult[8] = code;
                cResult[9] = tmp9;
                cResult[10] = outboundPromotion.outboundRedemptionModalBody;
                cResult[11] = tmp10;
                cResult[12] = tmp4.body;
                cResult[13] = tmp4.bodyText;
                cResult[14] = tmp4.copyButton;
                cResult[15] = tmp4.copyInput;
                cResult[16] = tmp4.copyInputContainer;
                cResult[17] = tmp4.copyInputCopied;
                cResult[18] = tmp4.copyInputLabel;
                cResult[19] = tmp4.loading;
                cResult[20] = tmp4.promotionArt;
                cResult[21] = tmp4.title;
                cResult[22] = tmp17;
                tmp16 = tmp17;
              }
            }
          }
        }
      }
      const fn = function p() {
        if (!closure_6) {
          const obj3 = { promotionId: null, promotionTitle: null, partnerId: null, analyticsLocations };
          ({ id: obj2.promotionId, outboundTitle: obj2.promotionTitle, partnerId: obj2.partnerId } = outboundPromotion);
          const obj = PromotionUtils;
          const result = obj.claimOutboundPromotion(obj3);
          const nextPromise = result.then((result) => onClaim(result));
          nextPromise.catch((error) => closure_1_4(error));
        }
      };
      const items1 = [null != code, , , , ,];
      ({ id: arr[1], outboundTitle: arr[2], partnerId: arr[3] } = outboundPromotion);
      items1[4] = onClaim;
      items1[5] = analyticsLocations;
      cResult[0] = analyticsLocations;
      cResult[1] = null != code;
      cResult[2] = onClaim;
      cResult[3] = outboundPromotion.id;
      cResult[4] = outboundPromotion.outboundTitle;
      cResult[5] = outboundPromotion.partnerId;
      cResult[6] = fn;
      cResult[7] = items1;
      tmp14 = items1;
      tmp13 = fn;
    }
  : (onCancel) => {
      let Button;
      let _undefined;
      let c4;
      let c5;
      let intl;
      let intl2;
      let intl4;
      let intl5;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj11;
      let obj12;
      let obj14;
      let stringResult1;
      let stringResult2;
      let tmp11;
      let tmp14Result;
      let tmp3;
      let tmp7;
      onCancel = onCancel.onCancel;
      const onClaim = onCancel.onClaim;
      const code = onCancel.code;
      const outboundPromotion = onCancel.outboundPromotion;
      react = undefined;
      c5 = undefined;
      const tmp = closure_11();
      [tmp3, c4] = outboundPromotion(react.useState(null), 2);
      const tmp2 = outboundPromotion(react.useState(null), 2);
      [tmp7, c5] = outboundPromotion(onClaim(code[8])(false, 2000), 2);
      let closure_6 = tmp8;
      outboundPromotion(onClaim(code[8])(false, 2000), 2);
      const tmp9 = onClaim(code[9]);
      const analyticsLocations = tmp9(onClaim(code[10]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
      const items = [tmp8, , , , ,];
      ({ id: arr[1], outboundTitle: arr[2], partnerId: arr[3] } = outboundPromotion);
      items[4] = onClaim;
      items[5] = analyticsLocations;
      const effect = react.useEffect(() => {
        if (!closure_6) {
          const obj3 = { promotionId: null, promotionTitle: null, partnerId: null, analyticsLocations };
          ({ id: obj2.promotionId, outboundTitle: obj2.promotionTitle, partnerId: obj2.partnerId } = outboundPromotion);
          const obj = PromotionUtils;
          const result = obj.claimOutboundPromotion(obj3);
          const nextPromise = result.then((result) => onClaim(result));
          nextPromise.catch((error) => closure_1_4(error));
        }
      }, items);
      if (null != code) {
        let tmp19;
        let stringResult;
        let obj2 = { style: tmp.body, children: items1 };
        let obj3 = { source: onClaim(code[12]), style: tmp.promotionArt };
        items1 = [closure_9(analyticsLocations, obj3), , ,];
        const obj4 = {
          style: tmp.title,
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          children: intl.string(onCancel(code[14]).t["23BfZh"]),
        };
        const Heading = onCancel(tmp5[13]).Heading;
        intl = onCancel(tmp5[14]).intl;
        items1[1] = closure_9(Heading, obj4);
        const obj5 = {
          style: tmp.bodyText,
          variant: "text-md/medium",
          children: outboundPromotion.outboundRedemptionModalBody,
        };
        items1[2] = closure_9(onCancel(code[13]).Text, obj5);
        const obj6 = { style: tmp.copyInputContainer, children: items2 };
        const obj7 = {
          style: tmp.copyInputLabel,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: intl2.string(onCancel(code[14]).t.s9LFQh),
        };
        const Text = onCancel(tmp5[13]).Text;
        intl2 = onCancel(tmp5[14]).intl;
        items2 = [closure_9(Text, obj7), ,];
        const copyInput = tmp.copyInput;
        if (tmp7) {
          const obj8 = {};
          const merged = Object.assign(copyInput);
          const merged1 = Object.assign(tmp.copyInputCopied);
          tmp19 = obj8;
        } else {
          tmp19 = copyInput;
        }
        const obj9 = { style: tmp19, children: items3 };
        const obj10 = {
          style: { flex: 1 },
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          children: closure_9(closure_6, obj11),
        };
        obj11 = {
          onStartShouldSetResponderCapture() {
            return true;
          },
          children: closure_9(onCancel(code[13]).Text, obj12),
        };
        obj12 = { lineClamp: 1, variant: "text-sm/medium", color: "interactive-text-active", children: code };
        items3 = [closure_9(closure_8, obj10)];
        const obj13 = { style: tmp.copyButton, children: closure_9(Button, obj14) };
        Button = tmp18(tmp5[15]).Button;
        const intl3 = tmp18(tmp5[14]).intl;
        const string = intl3.string;
        const t = tmp18(tmp5[14]).t;
        if (tmp7) {
          stringResult = string(t.t5VZ88);
        } else {
          stringResult = string(t.OpuAlK);
        }
        obj14 = {
          text: stringResult,
          size: "sm",
          onPress() {
            const obj = ClipboardUtils;
            obj.copy(code);
            _undefined(true);
          },
        };
        items3[1] = closure_9(closure_6, obj13);
        items2[1] = closure_10(closure_6, obj9);
        items2[2] = closure_9(onCancel(code[13]).Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: "This code is included in your confirmation email",
        });
        items1[3] = closure_10(closure_6, obj6);
        tmp14Result = closure_10(tmp15, obj2);
        tmp11 = closure_9;
      } else {
        tmp11 = closure_9;
        let obj = { style: tmp.loading };
        tmp14Result = closure_9(c5, obj);
      }
      const obj15 = { style: tmp.body, children: items4 };
      items4 = [, ,];
      const obj16 = { source: onClaim(code[17]), style: tmp.errorArt };
      items4[0] = tmp11(analyticsLocations, obj16);
      const obj17 = {
        style: tmp.errorTitle,
        variant: "text-lg/bold",
        color: "mobile-text-heading-primary",
        children: intl4.string(onCancel(code[14]).t.iufib1),
      };
      const Text2 = onCancel(tmp5[13]).Text;
      intl4 = onCancel(tmp5[14]).intl;
      items4[1] = tmp11(Text2, obj17);
      const obj18 = {
        style: tmp.bodyText,
        variant: "text-md/medium",
        children: intl5.string(onCancel(code[14]).t.eAn6z2),
      };
      const Text3 = onCancel(tmp5[13]).Text;
      intl5 = onCancel(tmp5[14]).intl;
      items4[2] = tmp11(Text3, obj18);
      const obj19 = {
        onCancel,
        confirmText: stringResult1,
        onConfirm() {
          if (null != code) {
            const obj = PromotionUtils;
            const outboundPromotionRedemptionUrl = obj.getOutboundPromotionRedemptionUrl(tmp, outboundPromotion);
            const obj2 = LinkingDefault;
            obj2.openURL(outboundPromotionRedemptionUrl);
          }
          onCancel();
        },
        cancelText: stringResult2,
        noDefaultButtons: null == code && null == tmp3,
        children: tmp14Result,
      };
      const tmp28 = closure_10(closure_6, obj15);
      const tmp4Result = onClaim(code[19]);
      if (null != tmp3) {
        const intl7 = tmp27(tmp5[14]).intl;
        stringResult1 = intl7.string(tmp27(tmp5[14]).t.cpT0Cq);
      } else {
        const intl6 = tmp27(tmp5[14]).intl;
        stringResult1 = intl6.string(tmp27(tmp5[14]).t["+zx47d"]);
      }
      stringResult2 = undefined;
      if (null == tmp3) {
        const intl8 = tmp27(tmp5[14]).intl;
        stringResult2 = intl8.string(tmp27(tmp5[14]).t.TulDPl);
      }
      if (null != tmp3) {
        tmp14Result = tmp28;
      }
      return tmp11(tmp4Result, obj19);
    };
let result = size.fileFinishedImporting("components_native/premium/OutboundPromotionClaimAlert.tsx");

export default tmp5;
