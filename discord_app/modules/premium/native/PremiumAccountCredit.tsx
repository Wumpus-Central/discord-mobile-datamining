// discord_app/modules/premium/native/PremiumAccountCredit.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl6 from "../../../intl/index.native.tsx";
import _modDef3233 from "../premium_group/PremiumGroup.messages.js";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import BoostGemIcon2 from "../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GameIcon from "../../game_detection/native/GameIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import EntitlementStore from "../../../stores/game_store/EntitlementStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const PremiumUtilsDefault = PremiumUtils;
const GameIconDefault = GameIcon;
let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let View = react_native.View;
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  title: { marginBottom: 12 },
  creditList: obj2,
  creditItem: { flexDirection: "row", alignItems: "center", padding: 16 },
  boostIcon: size,
  textContainer: { marginLeft: 16, marginRight: 16, flexDirection: "column", flex: 1 },
  headerText: { lineHeight: 20 },
  subText: { lineHeight: 16 },
  timeText: { lineHeight: 20, alignSelf: "flex-start" },
  divider: obj3,
  creditDescription: { marginTop: 8 },
};
obj2 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
size = {
  width: GameIcon.GameIconImageSize[GameIcon.GameIconSizes.SMALL],
  height: GameIcon.GameIconImageSize[GameIcon.GameIconSizes.SMALL],
  alignItems: "center",
  justifyContent: "center",
};
obj3 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      let BoostGemIcon;
      let currentSubscription;
      let displayName;
      let formatToPlainStringResult1;
      let hasPremiumGroup;
      let items;
      let items1;
      let months;
      let obj14;
      let planId;
      let shouldAddDivider;
      let str;
      let str2;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp20;
      let tmp23;
      let tmp5;
      let tmp9;
      let unconsumedFractionalPremiumUnits;
      const obj = react2;
      const cResult = obj.c(67);
      ({ planId, months, currentSubscription, shouldAddDivider, unconsumedFractionalPremiumUnits, hasPremiumGroup } =
        arg0);
      const tmp4 = closure_8();
      if (cResult[0] !== planId) {
        const castPremiumSubscriptionAsSkuId = PremiumUtils.castPremiumSubscriptionAsSkuId;
        PremiumUtils;
        const obj2 = PremiumUtilsDefault;
        const result = castPremiumSubscriptionAsSkuId(obj2.getSkuIdForPlan(planId));
        cResult[0] = planId;
        cResult[1] = result;
        tmp5 = result;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== planId) {
        const tmpResult3 = PremiumUtils;
        const result1 = tmpResult3.isPremiumGuildSubscriptionPlan(planId);
        cResult[2] = planId;
        cResult[3] = result1;
        tmp9 = result1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === currentSubscription) {
        if (cResult[5] === hasPremiumGroup) {
          if (cResult[6] === tmp9) {
            if (cResult[7] === planId) {
              if (cResult[8] === shouldAddDivider) {
                if (cResult[9] === tmp5) {
                  if (cResult[10] === tmp4.boostIcon) {
                    if (cResult[11] === tmp4.creditItem) {
                      if (cResult[12] === tmp4.divider) {
                        if (cResult[13] === tmp4.headerText) {
                          if (cResult[14] === tmp4.textContainer) {
                            if (cResult[15] === unconsumedFractionalPremiumUnits) {
                              tmp11 = cResult[16];
                              tmp12 = cResult[17];
                              tmp13 = cResult[18];
                              tmp14 = cResult[19];
                              tmp15 = cResult[20];
                              tmp16 = cResult[21];
                              str = cResult[22];
                              str2 = cResult[23];
                              tmp17 = cResult[24];
                              tmp18 = cResult[25];
                              tmp19 = cResult[26];
                              tmp20 = cResult[27];
                            }
                            if (cResult[41] === tmp11) {
                              if (cResult[42] === tmp16) {
                                if (cResult[43] === str) {
                                  if (cResult[44] === str2) {
                                    let tmp47;
                                    if (cResult[45] === tmp17) {
                                      tmp47 = cResult[46];
                                    }
                                    if (cResult[47] === tmp14) {
                                      if (cResult[48] === tmp15) {
                                        let tmp50;
                                        if (cResult[49] === tmp4.subText) {
                                          tmp50 = cResult[50];
                                        }
                                        if (cResult[51] === tmp12) {
                                          if (cResult[52] === tmp47) {
                                            if (cResult[53] === tmp50) {
                                              let tmp53;
                                              let tmp56;
                                              if (cResult[54] === tmp18) {
                                                tmp53 = cResult[55];
                                              }
                                              const timeText = tmp4.timeText;
                                              if (cResult[56] !== months) {
                                                const intl5 = intl6.intl;
                                                const obj3 = { count: months };
                                                const formatResult = intl5.format(intl6.t["ess/xl"], obj3);
                                                cResult[56] = months;
                                                cResult[57] = formatResult;
                                                tmp56 = formatResult;
                                              } else {
                                                tmp56 = cResult[57];
                                              }
                                              if (cResult[58] === tmp4.timeText) {
                                                let tmp58;
                                                if (cResult[59] === tmp56) {
                                                  tmp58 = cResult[60];
                                                }
                                                if (cResult[61] === tmp13) {
                                                  if (cResult[62] === tmp53) {
                                                    if (cResult[63] === tmp58) {
                                                      if (cResult[64] === tmp19) {
                                                        let tmp61;
                                                        if (cResult[65] === tmp20) {
                                                          tmp61 = cResult[66];
                                                        }
                                                        return tmp61;
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj5 = { style: tmp19, children: items };
                                                items = [tmp20, tmp53, tmp58];
                                                const tmp63 = metroImportDefault(tmp13, obj5);
                                                cResult[61] = tmp13;
                                                cResult[62] = tmp53;
                                                cResult[63] = tmp58;
                                                cResult[64] = tmp19;
                                                cResult[65] = tmp20;
                                                cResult[66] = tmp63;
                                                tmp61 = tmp63;
                                              }
                                              const obj6 = {
                                                style: timeText,
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: tmp56,
                                              };
                                              const tmp60 = metroRequire(Text_Text.Text, obj6);
                                              cResult[58] = tmp4.timeText;
                                              cResult[59] = tmp56;
                                              cResult[60] = tmp60;
                                              tmp58 = tmp60;
                                            }
                                          }
                                        }
                                        const obj7 = { style: tmp18, children: items1 };
                                        items1 = [tmp47, tmp50];
                                        const tmp55 = metroImportDefault(tmp12, obj7);
                                        cResult[51] = tmp12;
                                        cResult[52] = tmp47;
                                        cResult[53] = tmp50;
                                        cResult[54] = tmp18;
                                        cResult[55] = tmp55;
                                        tmp53 = tmp55;
                                      }
                                    }
                                    let tmp51 = !tmp15;
                                    if (tmp51) {
                                      const obj8 = {
                                        style: tmp4.subText,
                                        variant: "text-xs/medium",
                                        color: "text-default",
                                        children: tmp14,
                                      };
                                      tmp51 = metroRequire(Text_Text.Text, obj8);
                                    }
                                    cResult[47] = tmp14;
                                    cResult[48] = tmp15;
                                    cResult[49] = tmp4.subText;
                                    cResult[50] = tmp51;
                                    tmp50 = tmp51;
                                  }
                                }
                              }
                            }
                            const obj9 = { style: tmp16, variant: str, color: str2, children: tmp17 };
                            const tmp49 = metroRequire(tmp11, obj9);
                            cResult[41] = tmp11;
                            cResult[42] = tmp16;
                            cResult[43] = str;
                            cResult[44] = str2;
                            cResult[45] = tmp17;
                            cResult[46] = tmp49;
                            tmp47 = tmp49;
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
      const obj4 = PremiumUtilsDefault;
      if (tmp9) {
        displayName = obj4.getDisplayName(planId);
        tmp23 = importDefault;
      } else {
        displayName = obj4.getTierDisplayNameByPlanId(planId);
        tmp23 = importDefault;
      }
      if (hasPremiumGroup) {
        let tmp34;
        const _Symbol = Symbol;
        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl6.intl;
          const stringResult = intl3.string(tmp23(3233)["5asczk"]);
          cResult[28] = stringResult;
          tmp34 = stringResult;
        } else {
          tmp34 = cResult[28];
        }
        formatToPlainStringResult1 = tmp34;
      } else {
        if (null != currentSubscription) {
          if (currentSubscription.planId === planId) {
            let tmp26;
            if (cResult[29] === currentSubscription.currentPeriodEnd) {
              if (cResult[30] === currentSubscription.pauseEndsAt) {
                if (cResult[31] === currentSubscription.status) {
                  if (cResult[32] === unconsumedFractionalPremiumUnits) {
                    tmp26 = cResult[33];
                  }
                  formatToPlainStringResult1 = tmp26;
                }
              }
            }
            if (currentSubscription.status === SubscriptionStatusTypes.PAUSED) {
              let date;
              if (null != currentSubscription.pauseEndsAt) {
                const _Date2 = Date;
                const self3 = this;
                const self4 = this;
                date = new Date(currentSubscription.pauseEndsAt);
              }
              const tmpResult4 = PremiumUtils;
              let num5 = tmpResult4.extendDateWithUnconsumedFractionalPremium(date, unconsumedFractionalPremiumUnits);
              const intl2 = intl6.intl;
              const formatToPlainString = intl2.formatToPlainString;
              const v5CNRRA = intl6.t["5CNRRA"];
              if (num5 == null) {
                num5 = 0;
              }
              const obj10 = { date: num5 };
              const formatToPlainStringResult = formatToPlainString(v5CNRRA, obj10);
              cResult[29] = currentSubscription.currentPeriodEnd;
              cResult[30] = currentSubscription.pauseEndsAt;
              cResult[31] = currentSubscription.status;
              cResult[32] = unconsumedFractionalPremiumUnits;
              cResult[33] = formatToPlainStringResult;
              tmp26 = formatToPlainStringResult;
            }
            const _Date = Date;
            const self = this;
            const self2 = this;
            date = new Date(currentSubscription.currentPeriodEnd);
          }
        }
        const intl = intl6.intl;
        const obj11 = { planName: displayName };
        formatToPlainStringResult1 = intl.formatToPlainString(intl6.t.eNXZ5O, obj11);
      }
      let tmp36 = tmp9;
      if (!tmp36) {
        tmp36 = null != currentSubscription && currentSubscription.isPurchasedExternally;
      }
      let divider = null;
      if (shouldAddDivider) {
        divider = tmp4.divider;
      }
      if (cResult[34] === tmp4.creditItem) {
        let tmp41;
        let tmp43Result;
        if (cResult[35] === divider) {
          tmp41 = cResult[36];
        }
        if (cResult[37] === tmp9) {
          if (cResult[38] === tmp5) {
            let tmp42;
            if (cResult[39] === tmp4.boostIcon) {
              tmp42 = cResult[40];
            }
            const textContainer = tmp4.textContainer;
            const Text = Text_Text.Text;
            const headerText = tmp4.headerText;
            const intl4 = intl6.intl;
            const obj12 = { planName: displayName };
            const formatResult1 = intl4.format(intl6.t.LzobT9, obj12);
            cResult[4] = currentSubscription;
            cResult[5] = hasPremiumGroup;
            cResult[6] = tmp9;
            cResult[7] = planId;
            cResult[8] = shouldAddDivider;
            cResult[9] = tmp5;
            cResult[10] = tmp4.boostIcon;
            cResult[11] = tmp4.creditItem;
            cResult[12] = tmp4.divider;
            cResult[13] = tmp4.headerText;
            cResult[14] = tmp4.textContainer;
            cResult[15] = unconsumedFractionalPremiumUnits;
            cResult[16] = Text;
            cResult[17] = View;
            cResult[18] = View;
            cResult[19] = formatToPlainStringResult1;
            cResult[20] = tmp36;
            cResult[21] = headerText;
            cResult[22] = "text-md/semibold";
            cResult[23] = "mobile-text-heading-primary";
            cResult[24] = formatResult1;
            cResult[25] = textContainer;
            cResult[26] = tmp41;
            cResult[27] = tmp42;
            tmp20 = tmp42;
            tmp19 = tmp41;
            tmp18 = textContainer;
            tmp17 = formatResult1;
            str2 = "mobile-text-heading-primary";
            str = "text-md/semibold";
            tmp16 = headerText;
            tmp15 = tmp36;
            tmp14 = formatToPlainStringResult1;
            tmp13 = View;
            tmp12 = View;
            tmp11 = Text;
          }
        }
        if (tmp9) {
          const obj13 = { style: tmp4.boostIcon, children: metroRequire(BoostGemIcon, obj14) };
          obj14 = { size: "md", color: tmp23(587).unsafe_rawColors.GUILD_BOOSTING_PINK };
          BoostGemIcon = BoostGemIcon2.BoostGemIcon;
          tmp43Result = metroRequire(View, obj13);
        } else {
          const obj15 = { size: GameIcon.GameIconSizes.SMALL, skuId: tmp5 };
          const tmp23Result = tmp23(6674);
          tmp43Result = metroRequire(tmp23Result, obj15);
        }
        cResult[37] = tmp9;
        cResult[38] = tmp5;
        cResult[39] = tmp4.boostIcon;
        cResult[40] = tmp43Result;
        tmp42 = tmp43Result;
      }
      const items2 = [tmp4.creditItem, divider];
      cResult[34] = tmp4.creditItem;
      cResult[35] = divider;
      cResult[36] = items2;
      tmp41 = items2;
    }
  : function (arg0) {
      let BoostGemIcon;
      let currentSubscription;
      let displayName;
      let hasPremiumGroup;
      let intl4;
      let intl5;
      let items1;
      let items2;
      let months;
      let obj8;
      let planId;
      let shouldAddDivider;
      let stringResult;
      let tmp22Result;
      let tmp25;
      let unconsumedFractionalPremiumUnits;
      ({ planId, currentSubscription } = arg0);
      ({ months, shouldAddDivider, unconsumedFractionalPremiumUnits, hasPremiumGroup } = arg0);
      const tmp = closure_8();
      const castPremiumSubscriptionAsSkuId = PremiumUtils.castPremiumSubscriptionAsSkuId;
      PremiumUtils;
      const obj = PremiumUtilsDefault;
      const result = castPremiumSubscriptionAsSkuId(obj.getSkuIdForPlan(planId));
      const obj2 = PremiumUtils;
      const result1 = obj2.isPremiumGuildSubscriptionPlan(planId);
      const obj3 = PremiumUtilsDefault;
      if (result1) {
        displayName = obj3.getDisplayName(planId);
      } else {
        displayName = obj3.getTierDisplayNameByPlanId(planId);
      }
      if (hasPremiumGroup) {
        const intl3 = intl6.intl;
        stringResult = intl3.string(_modDef3233["5asczk"]);
      } else {
        if (null != currentSubscription) {
          if (currentSubscription.planId === planId) {
            if (currentSubscription.status === SubscriptionStatusTypes.PAUSED) {
              let date;
              if (null != currentSubscription.pauseEndsAt) {
                const _Date2 = Date;
                const self3 = this;
                const self4 = this;
                date = new Date(currentSubscription.pauseEndsAt);
              }
              const tmp2Result = PremiumUtils;
              let num = tmp2Result.extendDateWithUnconsumedFractionalPremium(date, unconsumedFractionalPremiumUnits);
              const intl2 = intl6.intl;
              const formatToPlainString = intl2.formatToPlainString;
              const v5CNRRA = intl6.t["5CNRRA"];
              if (num == null) {
                num = 0;
              }
              const obj4 = { date: num };
              stringResult = formatToPlainString(v5CNRRA, obj4);
            }
            const _Date = Date;
            const self = this;
            const self2 = this;
            date = new Date(currentSubscription.currentPeriodEnd);
          }
        }
        const intl = intl6.intl;
        const obj5 = { planName: displayName };
        stringResult = intl.formatToPlainString(intl6.t.eNXZ5O, obj5);
      }
      let tmp16 = result1;
      if (!tmp16) {
        tmp16 = null != currentSubscription && currentSubscription.isPurchasedExternally;
      }
      const items = [tmp.creditItem];
      let divider = null;
      if (shouldAddDivider) {
        divider = tmp.divider;
      }
      const obj6 = { style: items, children: items1 };
      items[1] = divider;
      if (result1) {
        const obj7 = { style: tmp.boostIcon, children: metroRequire(BoostGemIcon, obj8) };
        obj8 = { size: "md", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
        BoostGemIcon = BoostGemIcon2.BoostGemIcon;
        tmp22Result = metroRequire(View, obj7);
        tmp25 = metroRequire;
      } else {
        const obj9 = { size: GameIcon.GameIconSizes.SMALL, skuId: result };
        const tmp5Result = GameIconDefault;
        tmp22Result = metroRequire(tmp5Result, obj9);
        tmp25 = metroRequire;
      }
      items1 = [tmp22Result, ,];
      const obj10 = { style: tmp.textContainer, children: items2 };
      const obj11 = {
        style: tmp.headerText,
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children: intl4.format(intl6.t.LzobT9, { planName: displayName }),
      };
      const Text = Text_Text.Text;
      intl4 = intl6.intl;
      items2 = [tmp25(Text, obj11)];
      let tmp25Result = !tmp16;
      if (tmp25Result) {
        const obj12 = { style: tmp.subText, variant: "text-xs/medium", color: "text-default", children: stringResult };
        tmp25Result = tmp25(Text_Text.Text, obj12);
      }
      items2[1] = tmp25Result;
      items1[1] = metroImportDefault(View, obj10);
      const obj13 = {
        style: tmp.timeText,
        variant: "text-md/medium",
        color: "text-default",
        children: intl5.format(intl6.t["ess/xl"], { count: months }),
      };
      const Text2 = Text_Text.Text;
      intl5 = intl6.intl;
      items1[2] = tmp25(Text2, obj13);
      return metroImportDefault(View, obj6);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (currentSubscription) => {
      let creditListContainerStyle;
      let entitlements;
      let hasPremiumGroup;
      let stateFromStoresArray;
      let style;
      let tmp5;
      let tmp6;
      let unactivatedFractionalPremiumUnits;
      let tmp = currentSubscription;
      let obj = currentSubscription(stateFromStoresArray[9]);
      const cResult = obj.c(35);
      currentSubscription = currentSubscription.currentSubscription;
      ({ entitlements, style, creditListContainerStyle, hasPremiumGroup } = currentSubscription);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EntitlementStore];
        const fn = function x() {
          return unactivatedFractionalPremiumUnits.getUnactivatedFractionalPremiumUnits();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(stateFromStoresArray[15]);
      stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp5, tmp6);
      if (null != entitlements) {
        const obj6 = hasPremiumGroup(stateFromStoresArray[10]);
        if (obj6.hasAccountCredit(entitlements)) {
          let tmp14;
          if (cResult[2] !== entitlements) {
            const _Symbol = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              class T {
                constructor(subscriptionPlanId) {
                  let tmp = null != subscriptionPlanId.subscriptionPlanId;
                  const consumed = subscriptionPlanId.consumed;
                  if (tmp) {
                    tmp = null != subscriptionPlanId.parentId;
                  }
                  if (tmp) {
                    tmp = !consumed;
                  }
                  return tmp;
                }
              }
              cResult[4] = T;
            } else {
              class T {
                constructor(subscriptionPlanId) {
                  let tmp = null != subscriptionPlanId.subscriptionPlanId;
                  const consumed = subscriptionPlanId.consumed;
                  if (tmp) {
                    tmp = null != subscriptionPlanId.parentId;
                  }
                  if (tmp) {
                    tmp = !consumed;
                  }
                  return tmp;
                }
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              class D {
                constructor(subscriptionPlanId) {
                  return subscriptionPlanId.subscriptionPlanId;
                }
              }
              cResult[5] = D;
            } else {
              class D {
                constructor(subscriptionPlanId) {
                  return subscriptionPlanId.subscriptionPlanId;
                }
              }
            }
            const _Array = Array;
            const tmp22Result = hasPremiumGroup(stateFromStoresArray[16]);
            const tmp22ResultResult = tmp22Result(Array.from(entitlements));
            const found = tmp22ResultResult.filter(T);
            const iter = found.groupBy(D);
            cResult[2] = entitlements;
            cResult[3] = iter.value();
            const valueResult = iter.value();
          } else {
            class D {
              constructor(subscriptionPlanId) {
                return subscriptionPlanId.subscriptionPlanId;
              }
            }
          }
          View = tmp9;
          const _Symbol3 = Symbol;
          const title = tmp4.title;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class D {
              constructor(subscriptionPlanId) {
                return subscriptionPlanId.subscriptionPlanId;
              }
            }
            const stringResult = obj4.string(tmp(stateFromStoresArray[11]).t.YugZY0);
            cResult[6] = stringResult;
            tmp14 = stringResult;
          } else {
            class D {
              constructor(subscriptionPlanId) {
                return subscriptionPlanId.subscriptionPlanId;
              }
            }
          }
          if (cResult[7] !== tmp4.title) {
            class D {
              constructor(subscriptionPlanId) {
                return subscriptionPlanId.subscriptionPlanId;
              }
            }
            const obj2 = {
              style: title,
              accessibilityRole: "header",
              variant: "eyebrow",
              color: "text-default",
              children: tmp14,
            };
            cResult[7] = tmp4.title;
            cResult[8] = closure_6(tmp(stateFromStoresArray[14]).Text, obj2);
            const tmp17 = closure_6(tmp(stateFromStoresArray[14]).Text, obj2);
          } else {
            class D {
              constructor(subscriptionPlanId) {
                return subscriptionPlanId.subscriptionPlanId;
              }
            }
          }
          if (cResult[9] === creditListContainerStyle) {
            class D {
              constructor(subscriptionPlanId) {
                return subscriptionPlanId.subscriptionPlanId;
              }
            }
            if (cResult[12] !== tmp9) {
              class D {
                constructor(subscriptionPlanId) {
                  return subscriptionPlanId.subscriptionPlanId;
                }
              }
              let keys = Object.keys(tmp9);
              cResult[12] = tmp9;
              cResult[13] = keys;
            } else {
              class D {
                constructor(subscriptionPlanId) {
                  return subscriptionPlanId.subscriptionPlanId;
                }
              }
            }
            if (cResult[14] === currentSubscription) {
              class D {
                constructor(subscriptionPlanId) {
                  return subscriptionPlanId.subscriptionPlanId;
                }
              }
            }
            const mapped = arr4.map((planId) => {
              const keys = Object.keys(View);
              const obj = {
                planId,
                months: View[planId].length,
                currentSubscription,
                shouldAddDivider: planId !== keys[Object.keys(Object, View).length - 1],
                unconsumedFractionalPremiumUnits: stateFromStoresArray,
                hasPremiumGroup,
              };
              return metroRequire(closure_9, obj, planId);
            });
            cResult[14] = currentSubscription;
            cResult[15] = tmp9;
            cResult[16] = hasPremiumGroup;
            cResult[17] = arr4;
            cResult[18] = stateFromStoresArray;
            cResult[19] = mapped;
          }
          const items1 = [tmp4.creditList, creditListContainerStyle];
          cResult[9] = creditListContainerStyle;
          cResult[10] = tmp4.creditList;
          cResult[11] = items1;
        }
      }
      return null;
    }
  : (currentSubscription) => {
      let _undefined;
      let creditListContainerStyle;
      let entitlements;
      let hasPremiumGroup;
      let intl;
      let intl2;
      let intl3;
      let items1;
      let items2;
      let keys;
      let style;
      let unactivatedFractionalPremiumUnits;
      let unconsumedFractionalPremiumUnits;
      currentSubscription = currentSubscription.currentSubscription;
      ({ entitlements, hasPremiumGroup: importDefault } = currentSubscription);
      let c3;
      ({ style, creditListContainerStyle } = currentSubscription);
      let tmp = closure_8();
      let obj = currentSubscription(504);
      const items = [EntitlementStore];
      dependencyMap = obj.useStateFromStoresArray(items, () =>
        unactivatedFractionalPremiumUnits.getUnactivatedFractionalPremiumUnits(),
      );
      if (null != entitlements) {
        const obj8 = PremiumUtilsDefault;
        if (obj8.hasAccountCredit(entitlements)) {
          const _Array = Array;
          const tmp11Result = _modDef12;
          const tmp11ResultResult = tmp11Result(Array.from(entitlements));
          const found = tmp11ResultResult.filter((subscriptionPlanId) => {
            let tmp = null != subscriptionPlanId.subscriptionPlanId;
            const consumed = subscriptionPlanId.consumed;
            if (tmp) {
              tmp = null != subscriptionPlanId.parentId;
            }
            if (tmp) {
              tmp = !consumed;
            }
            return tmp;
          });
          const iter = found.groupBy((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId);
          const valueResult = iter.value();
          c3 = valueResult;
          const obj2 = { style, children: items1 };
          const obj3 = {
            style: tmp.title,
            accessibilityRole: "header",
            variant: "eyebrow",
            color: "text-default",
            children: intl.string(currentSubscription(1126).t.YugZY0),
          };
          const Text = tmp2(4892).Text;
          intl = tmp2(1126).intl;
          items1 = [closure_6(Text, obj3), , ,];
          const obj4 = {
            style: items2,
            children: keys.map((planId) => {
              const keys = Object.keys(c3);
              const obj = {
                planId,
                months: c3[planId].length,
                currentSubscription,
                shouldAddDivider: planId !== keys[Object.keys(Object, c3).length - 1],
                unconsumedFractionalPremiumUnits,
                hasPremiumGroup: importDefault,
              };
              return metroRequire(closure_9, obj, planId);
            }),
          };
          items2 = [tmp.creditList, creditListContainerStyle];
          const _Object = Object;
          keys = Object.keys(valueResult);
          items1[1] = closure_6(c3, obj4);
          const obj5 = {
            style: tmp.creditDescription,
            variant: "text-sm/medium",
            children: intl2.string(currentSubscription(1126).t.Z5b2Gf),
          };
          const Text2 = tmp2(4892).Text;
          intl2 = tmp2(1126).intl;
          items1[2] = closure_6(Text2, obj5);
          let tmp9Result = null;
          const tmp8 = c3;
          if (null != currentSubscription) {
            tmp9Result = null;
            if (currentSubscription.isPurchasedExternally) {
              const obj6 = {
                style: tmp.creditDescription,
                variant: "text-sm/medium",
                children: intl3.string(currentSubscription(1126).t.azRP0E),
              };
              const Text3 = tmp2(4892).Text;
              intl3 = tmp2(1126).intl;
              tmp9Result = closure_6(Text3, obj6);
            }
          }
          items1[3] = tmp9Result;
          return closure_7(tmp8, obj2);
        }
      }
      return null;
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/premium/native/PremiumAccountCredit.tsx");

export default tmp5;
