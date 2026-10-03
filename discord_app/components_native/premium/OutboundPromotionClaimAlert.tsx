// discord_app/components_native/premium/OutboundPromotionClaimAlert.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import ClipboardUtils from "../../utils/ClipboardUtils.native.tsx";
import PromotionUtils from "../../modules/premium/promotions/PromotionUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: hasOwnProperty,
  View: metroRequire,
  Image: closure_7,
  ScrollView: closure_8,
} = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  loading: { marginVertical: 80 },
  body: { alignItems: "center" },
  title: { marginBottom: 8 },
  errorTitle: { lineHeight: 24, marginBottom: 8 },
  bodyText: { textAlign: "center", lineHeight: 20 },
  copyInputContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    marginTop: 16,
    padding: 12,
    borderRadius: nativeDefault.radii.sm,
  },
  copyInputLabel: { lineHeight: 20, marginBottom: 8 },
  copyInput: null,
  copyInputCopied: null,
  copyButton: null,
  promotionArt: null,
  errorArt: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginTop: 16,
  padding: 12,
  borderRadius: nativeDefault.radii.sm,
};
obj2.copyInput = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  marginBottom: 8,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
let obj4 = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  marginBottom: 8,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj2.copyInputCopied = { borderColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
obj2.copyButton = { paddingHorizontal: 8, marginLeft: 8 };
obj2.promotionArt = { width: 200, height: 100, marginBottom: 20 };
obj2.errorArt = { width: 141, height: 99, marginBottom: 20 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { borderColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/OutboundPromotionClaimAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onCancel) => {
      const cResult = onCancel(code[7]).c(51);
      onCancel = onCancel.onCancel;
      const onClaim = onCancel.onClaim;
      code = onCancel.code;
      const outboundPromotion = onCancel.outboundPromotion;
      const tmp4 = closure_11();
      let obj = onCancel(code[7]);
      [tmp6, noop] = outboundPromotion(noop.useState(null), 2);
      const tmp5 = outboundPromotion(noop.useState(null), 2);
      [outboundRedemptionModalBody, tmp9] = outboundPromotion(onClaim(code[8])(false, 2000), 2);
      closure_6 = tmp10;
      const tmp8 = outboundPromotion(onClaim(code[8])(false, 2000), 2);
      const analyticsLocations = onClaim(code[9])(onClaim(code[10]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === tmp10) {
          if (cResult[2] === onClaim) {
            if (cResult[3] === outboundPromotion.id) {
              if (cResult[4] === outboundPromotion.outboundTitle) {
                if (cResult[5] === outboundPromotion.partnerId) {
                  let tmp12 = cResult[6];
                  let tmp13 = cResult[7];
                }
                const effect = noop.useEffect(tmp12, tmp13);
                if (cResult[8] === code) {
                  if (cResult[9] === outboundRedemptionModalBody) {
                    if (cResult[10] === outboundPromotion.outboundRedemptionModalBody) {
                      if (cResult[11] === tmp9) {
                        if (cResult[12] === tmp4.body) {
                          if (cResult[13] === tmp4.bodyText) {
                            if (cResult[14] === tmp4.copyButton) {
                              if (cResult[15] === tmp4.copyInput) {
                                if (cResult[16] === tmp4.copyInputContainer) {
                                  if (cResult[17] === tmp4.copyInputCopied) {
                                    if (cResult[18] === tmp4.copyInputLabel) {
                                      if (cResult[19] === tmp4.loading) {
                                        if (cResult[20] === tmp4.promotionArt) {
                                          if (cResult[21] === tmp4.title) {
                                            let tmp15 = cResult[22];
                                            if (cResult[23] !== tmp4.errorArt) {
                                              let obj3 = { source: tmp7(tmp2[17]), style: tmp4.errorArt };
                                              const tmp36 = closure_9(analyticsLocations, obj3);
                                              cResult[23] = tmp4.errorArt;
                                              cResult[24] = tmp36;
                                              let tmp33 = tmp36;
                                            } else {
                                              tmp33 = cResult[24];
                                            }
                                            const _Symbol = Symbol;
                                            if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl4 = tmp(tmp2[14]).intl;
                                              const stringResult = intl4.string(tmp(tmp2[14]).t.iufib1);
                                              cResult[25] = stringResult;
                                              let tmp38 = stringResult;
                                            } else {
                                              tmp38 = cResult[25];
                                            }
                                            if (cResult[26] !== tmp4.errorTitle) {
                                              const obj4 = {
                                                style: tmp4.errorTitle,
                                                variant: "text-lg/bold",
                                                color: "mobile-text-heading-primary",
                                                children: tmp38,
                                              };
                                              const tmp42 = closure_9(tmp(tmp2[13]).Text, obj4);
                                              cResult[26] = tmp4.errorTitle;
                                              cResult[27] = tmp42;
                                              let tmp40 = tmp42;
                                            } else {
                                              tmp40 = cResult[27];
                                            }
                                            const _Symbol2 = Symbol;
                                            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl5 = tmp(tmp2[14]).intl;
                                              const stringResult1 = intl5.string(tmp(tmp2[14]).t.eAn6z2);
                                              cResult[28] = stringResult1;
                                              let tmp43 = stringResult1;
                                            } else {
                                              tmp43 = cResult[28];
                                            }
                                            if (cResult[29] !== tmp4.bodyText) {
                                              const obj5 = {
                                                style: tmp4.bodyText,
                                                variant: "text-md/medium",
                                                children: tmp43,
                                              };
                                              const tmp47 = closure_9(tmp(tmp2[13]).Text, obj5);
                                              cResult[29] = tmp4.bodyText;
                                              cResult[30] = tmp47;
                                              let tmp45 = tmp47;
                                            } else {
                                              tmp45 = cResult[30];
                                            }
                                            if (cResult[31] === tmp4.body) {
                                              if (cResult[32] === tmp45) {
                                                if (cResult[33] === tmp33) {
                                                  if (cResult[34] === tmp40) {
                                                    let tmp48 = cResult[35];
                                                  }
                                                  if (cResult[36] !== tmp6) {
                                                    if (null != tmp6) {
                                                      const intl7 = tmp(tmp2[14]).intl;
                                                      let stringResult2 = intl7.string(tmp(tmp2[14]).t.cpT0Cq);
                                                    } else {
                                                      const intl6 = tmp(tmp2[14]).intl;
                                                      stringResult2 = intl6.string(tmp(tmp2[14]).t["+zx47d"]);
                                                    }
                                                    cResult[36] = tmp6;
                                                    cResult[37] = stringResult2;
                                                  } else {
                                                    if (cResult[38] === code) {
                                                      if (cResult[39] === onCancel) {
                                                        if (cResult[40] === outboundPromotion) {
                                                          let tmp55 = cResult[41];
                                                        }
                                                        if (cResult[42] !== tmp6) {
                                                          if (null == tmp6) {
                                                            const string2 = tmp(tmp2[14]).intl.string;
                                                            class Q {
                                                              constructor() {
                                                                if (null != code) {
                                                                  tmp2 = closure_0;
                                                                  tmp3 = closure_2;
                                                                  obj = closure_0(closure_2[11]);
                                                                  tmp4 = outboundPromotion;
                                                                  tmp6 = closure_1;
                                                                  outboundPromotionRedemptionUrl =
                                                                    obj.getOutboundPromotionRedemptionUrl(
                                                                      tmp,
                                                                      outboundPromotion,
                                                                    );
                                                                  obj2 = closure_1(closure_2[18]);
                                                                  openURLResult =
                                                                    obj2.openURL(outboundPromotionRedemptionUrl);
                                                                }
                                                                tmp8 = onCancel();
                                                                return;
                                                              }
                                                            }
                                                          }
                                                          class Q {
                                                            constructor() {
                                                              if (null != code) {
                                                                tmp2 = closure_0;
                                                                tmp3 = closure_2;
                                                                obj = closure_0(closure_2[11]);
                                                                tmp4 = outboundPromotion;
                                                                tmp6 = closure_1;
                                                                outboundPromotionRedemptionUrl =
                                                                  obj.getOutboundPromotionRedemptionUrl(
                                                                    tmp,
                                                                    outboundPromotion,
                                                                  );
                                                                obj2 = closure_1(closure_2[18]);
                                                                openURLResult =
                                                                  obj2.openURL(outboundPromotionRedemptionUrl);
                                                              }
                                                              tmp8 = onCancel();
                                                              return;
                                                            }
                                                          }
                                                          cResult[42] = tmp6;
                                                          cResult[43] = undefined;
                                                          let tmp56 = tmp57;
                                                        } else {
                                                          tmp56 = cResult[43];
                                                        }
                                                        class Q {
                                                          constructor() {
                                                            if (null != code) {
                                                              tmp2 = closure_0;
                                                              tmp3 = closure_2;
                                                              obj = closure_0(closure_2[11]);
                                                              tmp4 = outboundPromotion;
                                                              tmp6 = closure_1;
                                                              outboundPromotionRedemptionUrl =
                                                                obj.getOutboundPromotionRedemptionUrl(
                                                                  tmp,
                                                                  outboundPromotion,
                                                                );
                                                              obj2 = closure_1(closure_2[18]);
                                                              openURLResult =
                                                                obj2.openURL(outboundPromotionRedemptionUrl);
                                                            }
                                                            tmp8 = onCancel();
                                                            return;
                                                          }
                                                        }
                                                        if (null != tmp6) {
                                                          tmp15 = tmp48;
                                                        }
                                                        if (cResult[44] === onCancel) {
                                                          if (cResult[45] === tmp52) {
                                                            if (cResult[46] === tmp55) {
                                                              if (cResult[47] === tmp56) {
                                                                if (cResult[48] === tmp58) {
                                                                  if (cResult[49] === tmp15) {
                                                                    let tmp59 = cResult[50];
                                                                  }
                                                                  return tmp59;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const obj6 = {
                                                          onCancel,
                                                          confirmText: tmp52,
                                                          onConfirm: tmp55,
                                                          cancelText: tmp56,
                                                          noDefaultButtons: tmp58,
                                                          children: tmp15,
                                                        };
                                                        const tmp61 = closure_9(tmp7(tmp2[19]), obj6);
                                                        cResult[44] = onCancel;
                                                        cResult[45] = tmp52;
                                                        cResult[46] = tmp55;
                                                        cResult[47] = tmp56;
                                                        cResult[48] = tmp58;
                                                        cResult[49] = tmp15;
                                                        cResult[50] = tmp61;
                                                        tmp59 = tmp61;
                                                      }
                                                    }
                                                    class Q {
                                                      constructor() {
                                                        if (null != code) {
                                                          tmp2 = closure_0;
                                                          tmp3 = closure_2;
                                                          obj = closure_0(closure_2[11]);
                                                          tmp4 = outboundPromotion;
                                                          tmp6 = closure_1;
                                                          outboundPromotionRedemptionUrl =
                                                            obj.getOutboundPromotionRedemptionUrl(
                                                              tmp,
                                                              outboundPromotion,
                                                            );
                                                          obj2 = closure_1(closure_2[18]);
                                                          openURLResult = obj2.openURL(outboundPromotionRedemptionUrl);
                                                        }
                                                        tmp8 = onCancel();
                                                        return;
                                                      }
                                                    }
                                                    cResult[38] = code;
                                                    cResult[39] = onCancel;
                                                    cResult[40] = outboundPromotion;
                                                    cResult[41] = Q;
                                                    tmp55 = Q;
                                                  }
                                                }
                                              }
                                            }
                                            const obj7 = { style: tmp4.body, children: null };
                                            const items = [tmp33, tmp40, tmp45];
                                            obj7.children = items;
                                            const tmp51 = closure_10(closure_6, obj7);
                                            cResult[31] = tmp4.body;
                                            cResult[32] = tmp45;
                                            cResult[33] = tmp33;
                                            cResult[34] = tmp40;
                                            cResult[35] = tmp51;
                                            tmp48 = tmp51;
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
                if (null == code) {
                  class Q {
                    constructor() {
                      if (null != code) {
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = closure_0(closure_2[11]);
                        tmp4 = outboundPromotion;
                        tmp6 = closure_1;
                        outboundPromotionRedemptionUrl = obj.getOutboundPromotionRedemptionUrl(tmp, outboundPromotion);
                        obj2 = closure_1(closure_2[18]);
                        openURLResult = obj2.openURL(outboundPromotionRedemptionUrl);
                      }
                      tmp8 = onCancel();
                      return;
                    }
                  }
                  tmp18[0] = tmp4.loading;
                  const tmp19 = closure_9(tmp9, tmp18);
                  cResult[8] = code;
                  cResult[9] = outboundRedemptionModalBody;
                  outboundRedemptionModalBody = outboundPromotion.outboundRedemptionModalBody;
                  cResult[10] = outboundRedemptionModalBody;
                  cResult[11] = tmp9;
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
                  cResult[22] = tmp19;
                }
                const obj8 = { style: tmp4.body, children: null };
                const obj9 = { source: tmp7(tmp2[12]), style: tmp4.promotionArt };
                const items1 = [closure_9(analyticsLocations, obj9), , ,];
                const obj10 = {
                  style: tmp4.title,
                  variant: "heading-xl/bold",
                  color: "mobile-text-heading-primary",
                  children: null,
                };
                const intl = tmp(tmp2[14]).intl;
                obj10.children = intl.string(tmp(tmp2[14]).t["23BfZh"]);
                items1[1] = closure_9(tmp(tmp2[13]).Heading, obj10);
                const obj11 = {
                  style: tmp4.bodyText,
                  variant: "text-md/medium",
                  children: outboundPromotion.outboundRedemptionModalBody,
                };
                items1[2] = closure_9(tmp(tmp2[13]).Text, obj11);
                let obj12 = { style: tmp4.copyInputContainer, children: null };
                const obj13 = {
                  style: tmp4.copyInputLabel,
                  variant: "text-md/semibold",
                  color: "mobile-text-heading-primary",
                  children: null,
                };
                const intl2 = tmp(tmp2[14]).intl;
                obj13.children = intl2.string(tmp(tmp2[14]).t.s9LFQh);
                const items2 = [closure_9(tmp(tmp2[13]).Text, obj13), ,];
                const copyInput = tmp4.copyInput;
                if (outboundRedemptionModalBody) {
                  const obj14 = {};
                  class Q {
                    constructor() {
                      if (null != code) {
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = closure_0(closure_2[11]);
                        tmp4 = outboundPromotion;
                        tmp6 = closure_1;
                        outboundPromotionRedemptionUrl = obj.getOutboundPromotionRedemptionUrl(tmp, outboundPromotion);
                        obj2 = closure_1(closure_2[18]);
                        openURLResult = obj2.openURL(outboundPromotionRedemptionUrl);
                      }
                      tmp8 = onCancel();
                      return;
                    }
                  }
                  const merged = Object.assign(copyInput);
                  const merged1 = Object.assign(tmp4.copyInputCopied);
                  let tmp24 = obj14;
                } else {
                  tmp24 = copyInput;
                }
                let obj15 = { style: tmp24, children: null };
                const obj16 = {
                  style: { flex: 1 },
                  horizontal: true,
                  showsHorizontalScrollIndicator: false,
                  children: null,
                };
                const obj17 = {
                  onStartShouldSetResponderCapture() {
                    return true;
                  },
                  children: null,
                };
                const obj18 = {
                  lineClamp: 1,
                  variant: "text-sm/medium",
                  color: "interactive-text-active",
                  children: code,
                };
                obj17.children = closure_9(tmp(tmp2[13]).Text, obj18);
                obj16.children = closure_9(closure_6, obj17);
                let items3 = [closure_9(closure_8, obj16)];
                let obj19 = { style: tmp4.copyButton, children: null };
                const intl3 = tmp(tmp2[14]).intl;
                const string = intl3.string;
                let t = tmp(tmp2[14]).t;
                if (outboundRedemptionModalBody) {
                  let stringResult3 = string(t.t5VZ88);
                } else {
                  stringResult3 = string(t.OpuAlK);
                }
                const obj20 = {
                  text: stringResult3,
                  size: "sm",
                  onPress() {
                    ClipboardUtils.copy(code);
                    tmp9(true);
                  },
                };
                t = closure_9(tmp(tmp2[15]).Button, obj20);
                obj19.children = t;
                obj19 = closure_9(tmp21, obj19);
                items3[1] = obj19;
                obj15.children = items3;
                items2[1] = closure_10(closure_6, obj15);
                items3 = tmp(tmp2[13]).Text;
                obj15 = closure_9(items3, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  children: "This code is included in your confirmation email",
                });
                items2[2] = obj15;
                obj12.children = items2;
                obj12 = closure_10(tmp21, obj12);
                items1[3] = obj12;
                obj8.children = items1;
                closure_10(closure_6, obj8);
              }
            }
          }
        }
      }
      const fn = function p() {
        if (!closure_6) {
          const obj3 = { promotionId: null, promotionTitle: null, partnerId: null, analyticsLocations: null };
          ({ id: obj2.promotionId, outboundTitle: obj2.promotionTitle, partnerId: obj2.partnerId } = outboundPromotion);
          obj3.analyticsLocations = analyticsLocations;
          const result = PromotionUtils.claimOutboundPromotion(obj3);
          result.then((result) => onClaim(result)).catch((error) => closure_1_4(error));
          const nextPromise = result.then((result) => onClaim(result));
        }
      };
      const items4 = [null != code, , , , ,];
      ({ id: arr[1], outboundTitle: arr[2], partnerId: arr[3] } = outboundPromotion);
      items4[4] = onClaim;
      items4[5] = analyticsLocations;
      cResult[0] = analyticsLocations;
      cResult[1] = null != code;
      cResult[2] = onClaim;
      cResult[3] = outboundPromotion.id;
      cResult[4] = outboundPromotion.outboundTitle;
      cResult[5] = outboundPromotion.partnerId;
      cResult[6] = fn;
      cResult[7] = items4;
      tmp13 = items4;
      tmp12 = fn;
      const tmp11 = onClaim(code[9]);
    }
  : (onCancel) => {
      onCancel = onCancel.onCancel;
      const onClaim = onCancel.onClaim;
      const code = onCancel.code;
      const outboundPromotion = onCancel.outboundPromotion;
      noop = undefined;
      c5 = undefined;
      const tmp = closure_11();
      [tmp3, c4] = outboundPromotion(noop.useState(null), 2);
      const tmp2 = outboundPromotion(noop.useState(null), 2);
      [tmp7, c5] = outboundPromotion(onClaim(code[8])(false, 2000), 2);
      closure_6 = tmp8;
      const tmp6 = outboundPromotion(onClaim(code[8])(false, 2000), 2);
      const analyticsLocations = onClaim(code[9])(onClaim(code[10]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
      const items = [null != code, , , , ,];
      ({ id: arr[1], outboundTitle: arr[2], partnerId: arr[3] } = outboundPromotion);
      items[4] = onClaim;
      items[5] = analyticsLocations;
      const effect = noop.useEffect(() => {
        if (!closure_6) {
          const obj3 = { promotionId: null, promotionTitle: null, partnerId: null, analyticsLocations: null };
          ({ id: obj2.promotionId, outboundTitle: obj2.promotionTitle, partnerId: obj2.partnerId } = outboundPromotion);
          obj3.analyticsLocations = analyticsLocations;
          const result = PromotionUtils.claimOutboundPromotion(obj3);
          result.then((result) => onClaim(result)).catch((error) => closure_1_4(error));
          const nextPromise = result.then((result) => onClaim(result));
        }
      }, items);
      if (null != code) {
        let obj2 = { style: tmp.body, children: null };
        let obj3 = { source: tmp4(tmp5[12]), style: tmp.promotionArt };
        const items1 = [closure_9(analyticsLocations, obj3), , ,];
        let Text = onCancel;
        const obj4 = {
          style: tmp.title,
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl = onCancel(tmp5[14]).intl;
        obj4.children = intl.string(onCancel(tmp5[14]).t["23BfZh"]);
        items1[1] = closure_9(onCancel(tmp5[13]).Heading, obj4);
        const obj5 = {
          style: tmp.bodyText,
          variant: "text-md/medium",
          children: outboundPromotion.outboundRedemptionModalBody,
        };
        items1[2] = closure_9(onCancel(tmp5[13]).Text, obj5);
        let obj6 = { style: tmp.copyInputContainer, children: null };
        const obj7 = {
          style: tmp.copyInputLabel,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl2 = onCancel(tmp5[14]).intl;
        obj7.children = intl2.string(onCancel(tmp5[14]).t.s9LFQh);
        const items2 = [closure_9(onCancel(tmp5[13]).Text, obj7), ,];
        const copyInput = tmp.copyInput;
        if (tmp7) {
          const obj8 = {};
          const merged = Object.assign(copyInput);
          const merged1 = Object.assign(tmp.copyInputCopied);
          let tmp18 = obj8;
        } else {
          tmp18 = copyInput;
        }
        let obj9 = { style: tmp18, children: null };
        const obj10 = { style: { flex: 1 }, horizontal: true, showsHorizontalScrollIndicator: false, children: null };
        const obj11 = {
          onStartShouldSetResponderCapture() {
            return true;
          },
          children: null,
        };
        const obj12 = { lineClamp: 1, variant: "text-sm/medium", color: "interactive-text-active", children: code };
        obj11.children = closure_9(Text(tmp5[13]).Text, obj12);
        obj10.children = closure_9(closure_6, obj11);
        const items3 = [closure_9(closure_8, obj10)];
        let obj13 = { style: tmp.copyButton, children: null };
        const intl3 = Text(tmp5[14]).intl;
        const string = intl3.string;
        let t = Text(tmp5[14]).t;
        if (tmp7) {
          let stringResult = string(t.t5VZ88);
        } else {
          stringResult = string(t.OpuAlK);
        }
        const obj14 = {
          text: stringResult,
          size: "sm",
          onPress() {
            ClipboardUtils.copy(code);
            _undefined(true);
          },
        };
        t = closure_9(Text(tmp5[15]).Button, obj14);
        obj13.children = t;
        obj13 = closure_9(tmp15, obj13);
        items3[1] = obj13;
        obj9.children = items3;
        items2[1] = closure_10(closure_6, obj9);
        Text = Text(tmp5[13]).Text;
        obj9 = closure_9(Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: "This code is included in your confirmation email",
        });
        items2[2] = obj9;
        obj6.children = items2;
        obj6 = closure_10(tmp15, obj6);
        items1[3] = obj6;
        obj2.children = items1;
        closure_10(closure_6, obj2);
      } else {
        let obj = { style: tmp.loading };
        let tmp13 = closure_9(c5, obj);
        const obj15 = { style: tmp.body, children: null };
        const obj16 = { source: tmp4(tmp5[17]), style: tmp.errorArt };
        const items4 = [closure_9(analyticsLocations, obj16), ,];
        const obj17 = {
          style: tmp.errorTitle,
          variant: "text-lg/bold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl4 = onCancel(tmp5[14]).intl;
        obj17.children = intl4.string(onCancel(tmp5[14]).t.iufib1);
        items4[1] = closure_9(onCancel(tmp5[13]).Text, obj17);
        const obj18 = { style: tmp.bodyText, variant: "text-md/medium", children: null };
        const intl5 = onCancel(tmp5[14]).intl;
        obj18.children = intl5.string(onCancel(tmp5[14]).t.eAn6z2);
        items4[2] = closure_9(onCancel(tmp5[13]).Text, obj18);
        obj15.children = items4;
        const obj19 = {
          onCancel,
          confirmText: null,
          onConfirm: null,
          cancelText: null,
          noDefaultButtons: null,
          children: null,
        };
        const tmp32 = closure_10(closure_6, obj15);
        if (null != tmp3) {
          const intl7 = tmp31(tmp5[14]).intl;
          let stringResult1 = intl7.string(tmp31(tmp5[14]).t.cpT0Cq);
        } else {
          const intl6 = tmp31(tmp5[14]).intl;
          stringResult1 = intl6.string(tmp31(tmp5[14]).t["+zx47d"]);
        }
        obj19.confirmText = stringResult1;
        obj19.onConfirm = function onConfirm() {
          if (null != code) {
            const outboundPromotionRedemptionUrl = PromotionUtils.getOutboundPromotionRedemptionUrl(
              tmp,
              outboundPromotion,
            );
            LinkingDefault.openURL(outboundPromotionRedemptionUrl);
          }
          onCancel();
        };
        let stringResult2;
        if (null == tmp3) {
          const intl8 = tmp31(tmp5[14]).intl;
          stringResult2 = intl8.string(tmp31(tmp5[14]).t.TulDPl);
        }
        obj19.cancelText = stringResult2;
        let tmp36 = !tmp8;
        if (!tmp8) {
          tmp36 = null == tmp3;
        }
        obj19.noDefaultButtons = tmp36;
        if (null != tmp3) {
          tmp13 = tmp32;
        }
        obj19.children = tmp13;
        return closure_9(tmp4(tmp5[19]), obj19);
      }
      const tmp9 = onClaim(code[9]);
    };
