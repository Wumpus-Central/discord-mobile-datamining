// discord_app/modules/chat_input/native/accessories/ChatInputCharCounter.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import PremiumUpsellUtilsDefault from "../../../../utils/native/PremiumUpsellUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1085);
({ MAX_MESSAGE_LENGTH: metroRequire, UpsellTypes: closure_7 } = Constants);
const PremiumUpsellTypes = fn(1379).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 } };
let closure_11 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, arg1) => {
        const cResult = analyticsLocations(576).c(41);
        ({ style, analyticsLocations } = arg0);
        const tmp4 = closure_11();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [currentUser];
          const fn = function v() {
            return stateFromStores(maxLength[10]).canUseIncreasedMessageLength(currentUser.getCurrentUser());
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        let obj = analyticsLocations(576);
        const stateFromStores = analyticsLocations(504).useStateFromStores(tmp5, tmp6);
        const tmp9 = stateFromStores(8809)();
        dependencyMap = tmp9;
        let result = tmp9 / 10;
        _slicedToArray = result;
        [first, currentUser] = first.useState(-result - 1);
        let obj3 = first;
        const tmpResult = analyticsLocations(504);
        [tmp15, closure_6] = first.useState(false);
        if (cResult[2] === tmp9) {
          if (cResult[3] === result) {
            let tmp16 = cResult[4];
          }
          const imperativeHandle = obj3.useImperativeHandle(arg1, tmp16);
          if (cResult[5] === analyticsLocations) {
            if (cResult[6] === stateFromStores) {
              if (cResult[7] === tmp9) {
                if (cResult[8] === first) {
                  let tmp19 = cResult[9];
                }
                if (first > 0) {
                  if (cResult[10] === style) {
                    if (cResult[11] === tmp4.container) {
                      let tmp39 = cResult[12];
                    }
                    const _HermesInternal = HermesInternal;
                    const combined = "-" + first;
                    if (cResult[13] !== combined) {
                      let obj2 = {
                        color: "text-feedback-critical",
                        lineClamp: 1,
                        variant: "text-xxs/semibold",
                        children: combined,
                      };
                      const tmp43 = closure_9(analyticsLocations(4886).Text, obj2);
                      cResult[13] = combined;
                      cResult[14] = tmp43;
                      let tmp41 = tmp43;
                    } else {
                      tmp41 = cResult[14];
                    }
                    if (cResult[15] !== stateFromStores) {
                      let tmp45 = null;
                      if (!stateFromStores) {
                        tmp45 = closure_9(analyticsLocations(8313).NitroWheelIcon, { size: "xs", color: "icon-muted" });
                      }
                      cResult[15] = stateFromStores;
                      cResult[16] = tmp45;
                      let tmp44 = tmp45;
                    } else {
                      tmp44 = cResult[16];
                    }
                    if (cResult[17] === tmp19) {
                      if (cResult[18] === tmp39) {
                        if (cResult[19] === tmp41) {
                          if (cResult[20] === tmp44) {
                            let tmp47 = cResult[21];
                          }
                          return tmp47;
                        }
                      }
                    }
                    let obj4 = { onPress: tmp19, style: tmp39, children: null };
                    const items1 = [tmp41, tmp44];
                    obj4.children = items1;
                    const tmp49 = closure_10(analyticsLocations(5909).PressableOpacity, obj4);
                    cResult[17] = tmp19;
                    cResult[18] = tmp39;
                    cResult[19] = tmp41;
                    cResult[20] = tmp44;
                    cResult[21] = tmp49;
                    tmp47 = tmp49;
                  }
                  const items2 = [tmp4.container, style];
                  cResult[10] = style;
                  cResult[11] = tmp4.container;
                  cResult[12] = items2;
                  tmp39 = items2;
                } else if (first >= tmp11) {
                  if (cResult[22] === style) {
                    if (cResult[23] === tmp4.container) {
                      let tmp28 = cResult[24];
                    }
                    if (cResult[25] !== -first) {
                      let obj5 = { color: "text-default", lineClamp: 1, variant: "text-xxs/semibold", children: tmp29 };
                      const tmp32 = closure_9(analyticsLocations(4886).Text, obj5);
                      cResult[25] = tmp29;
                      cResult[26] = tmp32;
                      let tmp30 = tmp32;
                    } else {
                      tmp30 = cResult[26];
                    }
                    if (cResult[27] !== tmp15) {
                      let tmp34 = null;
                      if (tmp15) {
                        tmp34 = closure_9(analyticsLocations(8313).NitroWheelIcon, { size: "xs", color: "icon-muted" });
                      }
                      cResult[27] = tmp15;
                      cResult[28] = tmp34;
                      let tmp33 = tmp34;
                    } else {
                      tmp33 = cResult[28];
                    }
                    if (cResult[29] === tmp19) {
                      if (cResult[30] === tmp28) {
                        if (cResult[31] === tmp30) {
                          if (cResult[32] === tmp33) {
                            let tmp36 = cResult[33];
                          }
                          return tmp36;
                        }
                      }
                    }
                    let obj6 = { onPress: tmp19, style: tmp28, children: null };
                    const items3 = [tmp30, tmp33];
                    obj6.children = items3;
                    const tmp38 = closure_10(analyticsLocations(5909).PressableOpacity, obj6);
                    cResult[29] = tmp19;
                    cResult[30] = tmp28;
                    cResult[31] = tmp30;
                    cResult[32] = tmp33;
                    cResult[33] = tmp38;
                    tmp36 = tmp38;
                  }
                  const items4 = [tmp4.container, style];
                  cResult[22] = style;
                  cResult[23] = tmp4.container;
                  cResult[24] = items4;
                  tmp28 = items4;
                } else if (!tmp15) {
                  return null;
                } else {
                  if (cResult[34] === style) {
                    if (cResult[35] === tmp4.container) {
                      let tmp20 = cResult[36];
                    }
                    const _Symbol = Symbol;
                    if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp23 = closure_9(analyticsLocations(8313).NitroWheelIcon, {
                        size: "xs",
                        color: "icon-muted",
                      });
                      cResult[37] = tmp23;
                      let tmp21 = tmp23;
                    } else {
                      tmp21 = cResult[37];
                    }
                    if (cResult[38] === tmp19) {
                    }
                    let obj7 = { onPress: tmp19, style: tmp20, children: tmp21 };
                    const tmp26 = closure_9(analyticsLocations(5909).PressableOpacity, obj7);
                    cResult[38] = tmp19;
                    cResult[39] = tmp20;
                    cResult[40] = tmp26;
                  }
                  const items5 = [tmp4.container, style];
                  cResult[34] = style;
                  cResult[35] = tmp4.container;
                  cResult[36] = items5;
                  tmp20 = items5;
                }
              }
            }
          }
          const fn3 = function b() {
            if (stateFromStores) {
              if (first > 0) {
                const obj2 = { content: null, key: "premium-message-length-info-toast" };
                const intl = util.intl;
                obj2.content = intl.string(util.t.YSRIqa);
                ToastActionCreatorsDefault.open(obj2);
              } else {
                const obj3 = { content: null, key: "premium-message-length-info-toast" };
                const intl2 = util.intl;
                const obj5 = { maxLength };
                obj3.content = intl2.formatToPlainString(util.t.vcvHa0, obj5);
                ToastActionCreatorsDefault.open(obj3);
              }
            } else {
              const obj7 = {
                initialUpsellKey: constants.LONGER_MESSAGE,
                analyticsLocations,
                analyticsProperties: null,
              };
              const obj8 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
              obj7.analyticsProperties = obj8;
              result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj7);
            }
          };
          cResult[5] = analyticsLocations;
          cResult[6] = stateFromStores;
          cResult[7] = tmp9;
          cResult[8] = first;
          cResult[9] = fn3;
          tmp19 = fn3;
        }
        const fn2 = function _() {
          return {
            onMessageLengthChanged(arg0) {
              currentUser(Math.max(-closure_1_3 - 1, arg0 - maxLength));
              closure_1_6(arg0 > closure_2_6);
            },
          };
        };
        cResult[2] = tmp9;
        cResult[3] = result;
        cResult[4] = fn2;
        tmp16 = fn2;
        const tmp14 = _slicedToArray(first.useState(false), 2);
      }
    : (arg0, arg1) => {
        ({ style, analyticsLocations } = arg0);
        first = undefined;
        currentUser = undefined;
        c6 = undefined;
        const tmp = closure_11();
        const items = [currentUser];
        const stateFromStores = analyticsLocations(504).useStateFromStores(items, () =>
          stateFromStores(maxLength[10]).canUseIncreasedMessageLength(currentUser.getCurrentUser()),
        );
        const tmp5 = stateFromStores(8809)();
        dependencyMap = tmp5;
        let result = tmp5 / 10;
        _slicedToArray = result;
        [first, currentUser] = first.useState(-result - 1);
        let obj = analyticsLocations(504);
        [tmp11, c6] = first.useState(false);
        const imperativeHandle = first.useImperativeHandle(arg1, () => ({
          onMessageLengthChanged(arg0) {
            currentUser(Math.max(-closure_1_3 - 1, arg0 - maxLength));
            closure_1_6(arg0 > c6);
          },
        }));
        const items1 = [analyticsLocations, stateFromStores, tmp5, first];
        const callback = first.useCallback(() => {
          if (stateFromStores) {
            if (first > 0) {
              const obj2 = { content: null, key: "premium-message-length-info-toast" };
              const intl = util.intl;
              obj2.content = intl.string(util.t.YSRIqa);
              ToastActionCreatorsDefault.open(obj2);
            } else {
              const obj3 = { content: null, key: "premium-message-length-info-toast" };
              const intl2 = util.intl;
              const obj5 = { maxLength };
              obj3.content = intl2.formatToPlainString(util.t.vcvHa0, obj5);
              ToastActionCreatorsDefault.open(obj3);
            }
          } else {
            const obj7 = { initialUpsellKey: constants.LONGER_MESSAGE, analyticsLocations, analyticsProperties: null };
            const obj8 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
            obj7.analyticsProperties = obj8;
            const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj7);
          }
        }, items1);
        if (first > 0) {
          let obj2 = { onPress: callback, style: null, children: null };
          const items2 = [tmp.container, style];
          obj2.style = items2;
          let obj3 = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xxs/semibold", children: null };
          const _HermesInternal = HermesInternal;
          obj3.children = "-" + first;
          const items3 = [closure_9(analyticsLocations(4886).Text, obj3)];
          let tmp20Result = null;
          if (!stateFromStores) {
            tmp20Result = closure_9(analyticsLocations(8313).NitroWheelIcon, { size: "xs", color: "icon-muted" });
          }
          items3[1] = tmp20Result;
          obj2.children = items3;
          let tmp16Result = closure_10(analyticsLocations(5909).PressableOpacity, obj2);
        } else if (first >= tmp7) {
          let obj4 = { onPress: callback, style: null, children: null };
          const items4 = [tmp.container, style];
          obj4.style = items4;
          let obj5 = { color: "text-default", lineClamp: 1, variant: "text-xxs/semibold", children: -first };
          const items5 = [closure_9(analyticsLocations(4886).Text, obj5)];
          let tmp17Result = null;
          if (tmp11) {
            tmp17Result = closure_9(analyticsLocations(8313).NitroWheelIcon, { size: "xs", color: "icon-muted" });
          }
          items5[1] = tmp17Result;
          obj4.children = items5;
          tmp16Result = closure_10(analyticsLocations(5909).PressableOpacity, obj4);
        } else {
          tmp16Result = null;
          if (tmp11) {
            let obj6 = { onPress: callback, style: null, children: null };
            const items6 = [tmp.container, style];
            obj6.style = items6;
            obj6.children = closure_9(analyticsLocations(8313).NitroWheelIcon, { size: "xs", color: "icon-muted" });
            tmp16Result = closure_9(analyticsLocations(5909).PressableOpacity, obj6);
          }
        }
        return tmp16Result;
      },
);
forwardRefResult.displayName = "ChatInputCharCounter";
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default noop.memo(forwardRefResult);
