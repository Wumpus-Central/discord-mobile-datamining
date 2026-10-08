// discord_app/modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils.tsx";
import _modDef12869 from "../../../../_runtime/metro/12869__.js";
import _modDef13506 from "../../../../_runtime/metro/13506__.js";
import _modDef13507 from "../../../../_runtime/metro/13507__.js";
import _modDef13508 from "../../../../_runtime/metro/13508__.js";
import _modDef13509 from "../../../../_runtime/metro/13509__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1391).PremiumTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  body: { paddingTop: 24, paddingHorizontal: 24 },
  title: { marginBottom: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY },
  subtitle: null,
  item: null,
  itemLabel: null,
  footer: null,
  button: null,
  keepText: null,
};
let obj3 = { marginBottom: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.subtitle = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj4 = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.item = {
  marginBottom: 16,
  borderRadius: nativeDefault.radii.sm,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  padding: 16,
};
obj2.itemLabel = { marginTop: 8 };
obj2.footer = { paddingHorizontal: 16 };
obj2.button = { marginBottom: 8 };
let obj5 = {
  marginBottom: 16,
  borderRadius: nativeDefault.radii.sm,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  padding: 16,
};
obj2.keepText = { textAlign: "center", paddingVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function WhatYouLoseItem(arg0) {
      const cResult = c.c(9);
      ({ imageSource, text } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] !== imageSource) {
        const obj2 = { source: imageSource };
        const tmp8 = timestampProducer(FastImageDefault, obj2);
        cResult[0] = imageSource;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.itemLabel) {
        if (cResult[3] === text) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.item) {
          if (cResult[6] === tmp5) {
            if (cResult[7] === tmp9) {
              let tmp11 = cResult[8];
            }
            return tmp11;
          }
        }
        const obj3 = { style: tmp4.item, children: null };
        const items = [tmp5, tmp9];
        obj3.children = items;
        const tmp14 = React5(View, obj3);
        cResult[5] = tmp4.item;
        cResult[6] = tmp5;
        cResult[7] = tmp9;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      }
      const tmp10 = timestampProducer(Text_Text.Text, {
        variant: "text-md/medium",
        style: tmp4.itemLabel,
        children: text,
      });
      cResult[2] = tmp4.itemLabel;
      cResult[3] = text;
      cResult[4] = tmp10;
      tmp9 = tmp10;
      const obj4 = { variant: "text-md/medium", style: tmp4.itemLabel, children: text };
    }
  : function WhatYouLoseItem(arg0) {
      ({ imageSource, text } = arg0);
      const tmp = closure_8();
      const obj = { style: tmp.item, children: null };
      const items = [
        timestampProducer(FastImageDefault, { source: imageSource }),
        timestampProducer(Text_Text.Text, { variant: "text-md/medium", style: tmp.itemLabel, children: text }),
      ];
      obj.children = items;
      return React5(View, obj);
    };
let obj8 = { DOWNGRADE: 0, [0]: "DOWNGRADE", CANCEL: 1, [1]: "CANCEL" };
ReactCompilerGating = fn(558);
let obj6 = { textAlign: "center", paddingVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumPlanWhatYouLoseActionSheet(subscription) {
      const cResult = onContinue(analyticsLocations[7]).c(69);
      ({ mode, onContinue } = subscription);
      subscription = subscription.subscription;
      const tmp4 = closure_8();
      if (cResult[0] !== subscription) {
        const premiumTypeFromSubscription = onContinue(tmp2[10]).getPremiumTypeFromSubscription(subscription);
        cResult[0] = subscription;
        cResult[1] = premiumTypeFromSubscription;
        let tmp5 = premiumTypeFromSubscription;
        const tmpResult = onContinue(tmp2[10]);
      } else {
        tmp5 = cResult[1];
      }
      analyticsLocations = subscription(tmp2[11])().analyticsLocations;
      let obj = onContinue(analyticsLocations[7]);
      const whatYouLoseProfileTier1Source = onContinue(analyticsLocations[12]).useWhatYouLoseProfileTier1Source();
      subscription(analyticsLocations[13])(null != tmp5, "Expected premium type");
      if (PremiumTypes.TIER_0 === tmp5) {
        const _Symbol8 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { imageSource: tmp7(tmp2[14]), text: null };
          const intl7 = onContinue(tmp2[15]).intl;
          obj2.text = intl7.format(onContinue(tmp2[15]).t["0hUHi6"], {});
          cResult[2] = obj2;
          let tmp25 = obj2;
        } else {
          tmp25 = cResult[2];
        }
        const _Symbol9 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { imageSource: tmp7(tmp2[16]), text: null };
          const intl8 = onContinue(tmp2[15]).intl;
          obj3.text = intl8.format(onContinue(tmp2[15]).t.wFWO6D, {});
          cResult[3] = obj3;
          let tmp26 = obj3;
        } else {
          tmp26 = cResult[3];
        }
        if (cResult[4] === tmp25) {
        }
        const items = [tmp25, tmp26];
        cResult[4] = tmp25;
        cResult[5] = tmp26;
        cResult[6] = items;
      } else {
        if (PremiumTypes.TIER_1 === tmp5) {
          const _Symbol5 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = onContinue(tmp2[15]).intl;
            const formatResult = intl4.format(onContinue(tmp2[15]).t.xCaYwE, {});
            cResult[7] = formatResult;
            let tmp18 = formatResult;
          } else {
            tmp18 = cResult[7];
          }
          if (cResult[8] === tmp18) {
            if (cResult[9] === whatYouLoseProfileTier1Source) {
              let tmp20 = cResult[10];
            }
            const _Symbol6 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { imageSource: tmp7(tmp2[17]), text: null };
              const intl5 = onContinue(tmp2[15]).intl;
              obj4.text = intl5.format(onContinue(tmp2[15]).t.wK04T1, {});
              cResult[11] = obj4;
              let tmp21 = obj4;
            } else {
              tmp21 = cResult[11];
            }
            const _Symbol7 = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { imageSource: tmp7(tmp2[18]), text: null };
              const intl6 = onContinue(tmp2[15]).intl;
              obj5.text = intl6.format(onContinue(tmp2[15]).t.K4Hv69, {});
              cResult[12] = obj5;
              let tmp22 = obj5;
            } else {
              tmp22 = cResult[12];
            }
            if (cResult[13] === tmp20) {
              if (cResult[14] === tmp21) {
                if (cResult[15] === tmp22) {
                  let tmp23 = cResult[16];
                }
                let arr = tmp23;
              }
            }
            const items1 = [tmp20, tmp21, tmp22];
            cResult[13] = tmp20;
            cResult[14] = tmp21;
            cResult[15] = tmp22;
            cResult[16] = items1;
            tmp23 = items1;
          }
          const obj6 = { imageSource: whatYouLoseProfileTier1Source, text: tmp18 };
          cResult[8] = tmp18;
          cResult[9] = whatYouLoseProfileTier1Source;
          cResult[10] = obj6;
          tmp20 = obj6;
        } else if (PremiumTypes.TIER_2 === tmp5) {
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { imageSource: tmp7(tmp2[19]), text: null };
            const intl = onContinue(tmp2[15]).intl;
            obj7.text = intl.format(onContinue(tmp2[15]).t["gpqr+n"], {});
            cResult[17] = obj7;
            let tmp13 = obj7;
          } else {
            tmp13 = cResult[17];
          }
          const _Symbol3 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            obj8 = { imageSource: tmp7(tmp2[18]), text: null };
            const intl2 = onContinue(tmp2[15]).intl;
            obj8.text = intl2.format(onContinue(tmp2[15]).t.wRxEDW, {});
            cResult[18] = obj8;
            let tmp14 = obj8;
          } else {
            tmp14 = cResult[18];
          }
          const _Symbol4 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            const obj9 = { imageSource: tmp7(tmp2[17]), text: null };
            const intl3 = onContinue(tmp2[15]).intl;
            obj9.text = intl3.format(onContinue(tmp2[15]).t["4WZ7T2"], {});
            cResult[19] = obj9;
            let tmp15 = obj9;
          } else {
            tmp15 = cResult[19];
          }
          if (cResult[20] === tmp13) {
            if (cResult[21] === tmp14) {
              if (cResult[22] === tmp15) {
                let tmp16 = cResult[23];
              }
              arr = tmp16;
            }
          }
          const items2 = [tmp13, tmp14, tmp15];
          cResult[20] = tmp13;
          cResult[21] = tmp14;
          cResult[22] = tmp15;
          cResult[23] = items2;
          tmp16 = items2;
        } else {
          const _Symbol = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const items3 = [];
            cResult[24] = items3;
            arr = items3;
          } else {
            arr = cResult[24];
          }
        }
        const _Symbol10 = Symbol;
        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
          function onClose() {
            subscription(analyticsLocations[20]).hideActionSheet();
          }
          cResult[25] = onClose;
          let tmp30 = onClose;
        } else {
          tmp30 = cResult[25];
        }
        closure_3 = tmp30;
        if (cResult[26] === analyticsLocations) {
          if (cResult[27] === subscription) {
            let tmp31 = cResult[28];
          }
          if (cResult[29] !== onContinue) {
            function onContinueDowngradeOrCancellation(arg0) {
              onContinue(arg0);
              closure_3();
            }
            cResult[29] = onContinue;
            cResult[30] = onContinueDowngradeOrCancellation;
            let tmp32 = onContinueDowngradeOrCancellation;
          } else {
            tmp32 = cResult[30];
          }
          closure_4 = tmp32;
          if (cResult[31] !== tmp5) {
            const obj10 = { premiumType: tmp5 };
            const tmp35 = closure_6(tmp7(tmp2[22]), obj10);
            cResult[31] = tmp5;
            cResult[32] = tmp35;
            let tmp33 = tmp35;
          } else {
            tmp33 = cResult[32];
          }
          if (cResult[33] !== mode) {
            if (mode === obj8.CANCEL) {
              const intl10 = onContinue(tmp2[15]).intl;
              let stringResult = intl10.string(onContinue(tmp2[15]).t.PWq8TL);
            } else {
              const intl9 = onContinue(tmp2[15]).intl;
              stringResult = intl9.string(onContinue(tmp2[15]).t["7VcWW0"]);
            }
            cResult[33] = mode;
            cResult[34] = stringResult;
          } else {
            if (cResult[35] === tmp4.title) {
              if (cResult[36] === tmp37) {
                let tmp41 = cResult[37];
              }
              if (cResult[38] === mode) {
                if (cResult[39] === tmp5) {
                  if (cResult[41] === tmp4.subtitle) {
                    if (cResult[42] === tmp44) {
                      let tmp48 = cResult[43];
                    }
                    if (cResult[44] !== arr) {
                      const mapped = arr.map((item, index) => {
                        const merged = Object.assign(item);
                        return closure_1_6(closure_1_9, {}, index);
                      });
                      cResult[44] = arr;
                      cResult[45] = mapped;
                      let tmp51 = mapped;
                    } else {
                      tmp51 = cResult[45];
                    }
                    if (cResult[46] === tmp4.body) {
                      if (cResult[47] === tmp48) {
                        if (cResult[48] === tmp51) {
                          if (cResult[49] === tmp41) {
                            let tmp53 = cResult[50];
                          }
                          const _Symbol11 = Symbol;
                          ({ footer, button } = tmp4);
                          if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl13 = onContinue(tmp2[15]).intl;
                            const stringResult1 = intl13.string(onContinue(tmp2[15]).t["3PatSz"]);
                            cResult[51] = stringResult1;
                            let tmp57 = stringResult1;
                          } else {
                            tmp57 = cResult[51];
                          }
                          if (cResult[52] !== tmp32) {
                            const obj11 = {
                              text: tmp57,
                              grow: true,
                              onPress() {
                                closure_4(
                                  PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[
                                    PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE
                                  ],
                                );
                              },
                            };
                            const tmp61 = closure_6(onContinue(tmp2[23]).Button, obj11);
                            cResult[52] = tmp32;
                            cResult[53] = tmp61;
                            let tmp59 = tmp61;
                          } else {
                            tmp59 = cResult[53];
                          }
                          if (cResult[54] === tmp4.button) {
                            if (cResult[55] === tmp59) {
                              let tmp62 = cResult[56];
                            }
                            const _Symbol12 = Symbol;
                            if (cResult[57] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl14 = onContinue(tmp2[15]).intl;
                              const stringResult2 = intl14.string(onContinue(tmp2[15]).t.rzVN6j);
                              cResult[57] = stringResult2;
                              let tmp66 = stringResult2;
                            } else {
                              tmp66 = cResult[57];
                            }
                            if (cResult[58] === tmp31) {
                              if (cResult[59] === tmp4.keepText) {
                                let tmp68 = cResult[60];
                              }
                              if (cResult[61] === tmp4.footer) {
                                if (cResult[62] === tmp62) {
                                  if (cResult[63] === tmp68) {
                                    let tmp71 = cResult[64];
                                  }
                                  if (cResult[65] === tmp53) {
                                    if (cResult[66] === tmp71) {
                                      if (cResult[67] === tmp33) {
                                        let tmp75 = cResult[68];
                                      }
                                      return tmp75;
                                    }
                                  }
                                  const obj12 = { children: null };
                                  const items4 = [tmp33, tmp53, tmp71];
                                  obj12.children = items4;
                                  const tmp77 = closure_7(onContinue(tmp2[24]).BottomSheet, obj12);
                                  cResult[65] = tmp53;
                                  cResult[66] = tmp71;
                                  cResult[67] = tmp33;
                                  cResult[68] = tmp77;
                                  tmp75 = tmp77;
                                }
                              }
                              const obj13 = { style: footer, children: null };
                              const items5 = [tmp62, tmp68];
                              obj13.children = items5;
                              const tmp74 = closure_7(closure_4, obj13);
                              cResult[61] = tmp4.footer;
                              cResult[62] = tmp62;
                              cResult[63] = tmp68;
                              cResult[64] = tmp74;
                              tmp71 = tmp74;
                            }
                            const obj14 = {
                              variant: "text-sm/medium",
                              style: tmp4.keepText,
                              onPress: tmp31,
                              children: tmp66,
                            };
                            const tmp70 = closure_6(onContinue(tmp2[9]).Text, obj14);
                            cResult[58] = tmp31;
                            cResult[59] = tmp4.keepText;
                            cResult[60] = tmp70;
                            tmp68 = tmp70;
                          }
                          const obj15 = { style: button, children: tmp59 };
                          const tmp65 = closure_6(closure_4, obj15);
                          cResult[54] = tmp4.button;
                          cResult[55] = tmp59;
                          cResult[56] = tmp65;
                          tmp62 = tmp65;
                        }
                      }
                    }
                    const obj16 = { style: tmp36, children: null };
                    const items6 = [tmp41, tmp48, tmp51];
                    obj16.children = items6;
                    const tmp56 = closure_7(closure_4, obj16);
                    cResult[46] = tmp4.body;
                    cResult[47] = tmp48;
                    cResult[48] = tmp51;
                    cResult[49] = tmp41;
                    cResult[50] = tmp56;
                    tmp53 = tmp56;
                  }
                  const obj17 = { variant: "text-md/medium", style: tmp4.subtitle, children: cResult[40] };
                  const tmp50 = closure_6(onContinue(tmp2[9]).Text, obj17);
                  cResult[41] = tmp4.subtitle;
                  cResult[42] = cResult[40];
                  cResult[43] = tmp50;
                  tmp48 = tmp50;
                }
              }
              if (mode === obj8.CANCEL) {
                const intl12 = onContinue(tmp2[15]).intl;
                const obj18 = { subscriptionName: onContinue(tmp2[10]).getPremiumTypeDisplayName(tmp5, true) };
                let formatResult1 = intl12.format(onContinue(tmp2[15]).t.jh5mUz, obj18);
                const tmpResult5 = onContinue(tmp2[10]);
              } else {
                const intl11 = onContinue(tmp2[15]).intl;
                const obj19 = { subscriptionName: onContinue(tmp2[10]).getPremiumTypeDisplayName(tmp5, true) };
                formatResult1 = intl11.format(onContinue(tmp2[15]).t.Qk34Ik, obj19);
                const tmpResult6 = onContinue(tmp2[10]);
              }
              cResult[38] = mode;
              cResult[39] = tmp5;
              cResult[40] = formatResult1;
            }
            const obj20 = { variant: "heading-xl/extrabold", style: tmp4.title, children: cResult[34] };
            const tmp43 = closure_6(onContinue(tmp2[9]).Text, obj20);
            cResult[35] = tmp4.title;
            cResult[36] = cResult[34];
            cResult[37] = tmp43;
            tmp41 = tmp43;
          }
        }
        function onCloseWithTracking() {
          const obj = PremiumAnalyticsUtils;
          const result = obj.trackPremiumSubscriptionCancellationFlowStep({
            subscription,
            analyticsLocations,
            fromStep:
              PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE],
            toStep: null,
          });
          closure_3();
        }
        cResult[26] = analyticsLocations;
        cResult[27] = subscription;
        cResult[28] = onCloseWithTracking;
        tmp31 = onCloseWithTracking;
      }
      const tmpResult4 = onContinue(analyticsLocations[12]);
    }
  : function PremiumPlanWhatYouLoseActionSheet(arg0) {
      ({ mode, onContinue: require, subscription } = arg0);
      let premiumTypeFromSubscription;
      const tmp = closure_8();
      premiumTypeFromSubscription = require("PremiumUtils").getPremiumTypeFromSubscription(subscription);
      const analyticsLocations = subscription(premiumTypeFromSubscription[11])().analyticsLocations;
      let obj = require("PremiumUtils");
      const whatYouLoseProfileTier1Source = require("WhatYouLoseProfileTier1").useWhatYouLoseProfileTier1Source();
      subscription(premiumTypeFromSubscription[13])(null != premiumTypeFromSubscription, "Expected premium type");
      let items = [premiumTypeFromSubscription, whatYouLoseProfileTier1Source];
      const memo = analyticsLocations.useMemo(() => {
        if (PremiumTypes.TIER_0 === premiumTypeFromSubscription) {
          const obj2 = { imageSource: _modDef13506, text: null };
          const intl7 = util.intl;
          obj2.text = intl7.format(util.t["0hUHi6"], {});
          const items = [obj2];
          const obj3 = { imageSource: _modDef13507, text: null };
          const intl8 = util.intl;
          obj3.text = intl8.format(util.t.wFWO6D, {});
          items[1] = obj3;
          return items;
        } else if (PremiumTypes.TIER_1 === premiumTypeFromSubscription) {
          const obj4 = { imageSource: whatYouLoseProfileTier1Source, text: null };
          const intl4 = util.intl;
          obj4.text = intl4.format(util.t.xCaYwE, {});
          const items1 = [obj4, ,];
          const obj5 = { imageSource: _modDef12869, text: null };
          const intl5 = util.intl;
          obj5.text = intl5.format(util.t.wK04T1, {});
          items1[1] = obj5;
          const obj6 = { imageSource: _modDef13508, text: null };
          const intl6 = util.intl;
          obj6.text = intl6.format(util.t.K4Hv69, {});
          items1[2] = obj6;
          return items1;
        } else if (PremiumTypes.TIER_2 === premiumTypeFromSubscription) {
          const obj = { imageSource: _modDef13509, text: null };
          const intl = util.intl;
          obj.text = intl.format(util.t["gpqr+n"], {});
          const items2 = [obj, ,];
          const obj7 = { imageSource: _modDef13508, text: null };
          const intl2 = util.intl;
          obj7.text = intl2.format(util.t.wRxEDW, {});
          items2[1] = obj7;
          obj8 = { imageSource: _modDef12869, text: null };
          const intl3 = util.intl;
          obj8.text = intl3.format(util.t["4WZ7T2"], {});
          items2[2] = obj8;
          return items2;
        } else {
          return [];
        }
      }, items);
      let items1 = [
        closure_6(subscription(premiumTypeFromSubscription[22]), { premiumType: premiumTypeFromSubscription }),
        ,
      ];
      let obj3 = { style: tmp.body, children: null };
      let obj4 = { variant: "heading-xl/extrabold", style: tmp.title, children: null };
      if (mode === obj8.CANCEL) {
        let intl2 = require("util").intl;
        let stringResult = intl2.string(require("util").t.PWq8TL);
      } else {
        let intl = require("util").intl;
        stringResult = intl.string(require("util").t["7VcWW0"]);
      }
      obj4.children = stringResult;
      let items2 = [closure_6(require("Text/Text").Text, obj4), ,];
      let obj5 = { variant: "text-md/medium", style: tmp.subtitle, children: null };
      if (mode === obj8.CANCEL) {
        let intl4 = require("util").intl;
        let obj6 = {
          subscriptionName: require("PremiumUtils").getPremiumTypeDisplayName(premiumTypeFromSubscription, true),
        };
        let formatResult = intl4.format(require("util").t.jh5mUz, obj6);
        const tmp2Result = require("PremiumUtils");
      } else {
        let intl3 = require("util").intl;
        let obj7 = {
          subscriptionName: require("PremiumUtils").getPremiumTypeDisplayName(premiumTypeFromSubscription, true),
        };
        formatResult = intl3.format(require("util").t.Qk34Ik, obj7);
        const tmp2Result2 = require("PremiumUtils");
      }
      obj8 = { children: null };
      obj5.children = formatResult;
      items2[1] = closure_6(require("Text/Text").Text, obj5);
      items2[2] = memo.map((item, index) => {
        const merged = Object.assign(item);
        return closure_1_6(closure_1_9, {}, index);
      });
      obj3.children = items2;
      items1[1] = closure_7(whatYouLoseProfileTier1Source, obj3);
      const obj9 = { style: tmp.footer, children: null };
      const obj10 = { style: tmp.button, children: null };
      const obj11 = { text: null, grow: true, onPress: null };
      let intl5 = require("util").intl;
      obj11.text = intl5.string(require("util").t["3PatSz"]);
      obj11.onPress = function onPress() {
        closure_1_0(
          PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE],
        );
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      obj10.children = closure_6(require("components/Button/Button").Button, obj11);
      const items3 = [closure_6(whatYouLoseProfileTier1Source, obj10)];
      const obj12 = {
        variant: "text-sm/medium",
        style: tmp.keepText,
        onPress: function onCloseWithTracking() {
          const obj = PremiumAnalyticsUtils;
          const result = obj.trackPremiumSubscriptionCancellationFlowStep({
            subscription,
            analyticsLocations,
            fromStep:
              PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE],
            toStep: null,
          });
          const obj2 = {
            subscription,
            analyticsLocations,
            fromStep:
              PremiumAnalyticsUtils.STEP_ANALYTICS_NAMES[PremiumAnalyticsUtils.CancellationFlowSteps.WHAT_YOU_LOSE],
            toStep: null,
          };
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
        children: null,
      };
      let intl6 = require("util").intl;
      obj12.children = intl6.string(require("util").t.rzVN6j);
      items3[1] = closure_6(require("Text/Text").Text, obj12);
      obj9.children = items3;
      items1[2] = closure_7(whatYouLoseProfileTier1Source, obj9);
      obj8.children = items1;
      return closure_7(require("Sheet/BottomSheet").BottomSheet, obj8);
    };
export const WhatYouLoseMode = obj8;
