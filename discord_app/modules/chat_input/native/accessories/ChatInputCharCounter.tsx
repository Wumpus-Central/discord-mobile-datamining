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
const PremiumUpsellTypes = fn(1392).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 } };
let closure_11 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatCounter(ref) {
  const cResult = analyticsLocations(576).c(41);
  ({ style, analyticsLocations } = ref);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class S {
      constructor() {
        obj = closure_1(closure_2[10]);
        return obj.canUseIncreasedMessageLength(closure_5.getCurrentUser());
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = analyticsLocations(576);
  const stateFromStores = analyticsLocations(504).useStateFromStores(tmp5, S);
  const tmp9 = stateFromStores(9259)();
  dependencyMap = tmp9;
  let result = tmp9 / 10;
  _slicedToArray = result;
  [first, UserStore] = first.useState(-result - 1);
  let obj3 = first;
  const tmpResult = analyticsLocations(504);
  [tmp15, closure_6] = first.useState(false);
  if (cResult[2] === tmp9) {
    if (cResult[3] === result) {
      let tmp16 = cResult[4];
    }
    const imperativeHandle = obj3.useImperativeHandle(ref.ref, tmp16);
    if (cResult[5] === analyticsLocations) {
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === tmp9) {
          if (cResult[8] === first) {
            let tmp18 = cResult[9];
          }
          if (first > 0) {
            if (cResult[10] === style) {
              if (cResult[11] === tmp4.container) {
                let tmp36 = cResult[12];
              }
              const _HermesInternal = HermesInternal;
              class S {
                constructor() {
                  obj = closure_1(closure_2[10]);
                  return obj.canUseIncreasedMessageLength(closure_5.getCurrentUser());
                }
              }
              if (cResult[13] !== tmp37) {
                { color: "text-feedback-critical", lineClamp: 1, variant: "text-xxs/semibold", children: null }.children = tmp37;
                class S {
                  constructor() {
                    obj = closure_1(closure_2[10]);
                    return obj.canUseIncreasedMessageLength(closure_5.getCurrentUser());
                  }
                }
                cResult[13] = tmp37;
                cResult[14] = tmp40;
                let tmp38 = tmp40;
                let obj2 = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xxs/semibold", children: null };
              } else {
                tmp38 = cResult[14];
              }
              if (cResult[15] !== stateFromStores) {
                let tmp42 = null;
                if (!stateFromStores) {
                  tmp42 = closure_9(analyticsLocations(9035).NitroWheelIcon, { size: "xs", color: "icon-muted" });
                }
                class S {
                  constructor() {
                    obj = closure_1(closure_2[10]);
                    return obj.canUseIncreasedMessageLength(closure_5.getCurrentUser());
                  }
                }
                cResult[16] = tmp42;
                let tmp41 = tmp42;
              } else {
                tmp41 = cResult[16];
              }
              if (cResult[17] === tmp18) {
                if (cResult[18] === tmp36) {
                  if (cResult[19] === tmp38) {
                    if (cResult[20] === tmp41) {
                      let tmp44 = cResult[21];
                    }
                    return tmp44;
                  }
                }
              }
              let obj4 = { onPress: tmp18, style: tmp36, children: null };
              const items1 = [tmp38, tmp41];
              obj4.children = items1;
              const tmp46 = closure_10(analyticsLocations(6184).PressableOpacity, obj4);
              cResult[17] = tmp18;
              cResult[18] = tmp36;
              cResult[19] = tmp38;
              cResult[20] = tmp41;
              cResult[21] = tmp46;
              tmp44 = tmp46;
            }
            const items2 = [tmp4.container, ];
            class S {
              constructor() {
                obj = closure_1(closure_2[10]);
                return obj.canUseIncreasedMessageLength(closure_5.getCurrentUser());
              }
            }
            cResult[10] = style;
            cResult[11] = tmp4.container;
            cResult[12] = items2;
            tmp36 = items2;
          } else if (first >= tmp11) {
            if (cResult[22] === style) {
              if (cResult[23] === tmp4.container) {
                let tmp27 = cResult[24];
              }
              if (cResult[25] !== -first) {
                { color: "text-default", lineClamp: 1, variant: "text-xxs/semibold", children: null }.children = tmp28;
                class S {
                  constructor() {
                    obj = closure_1(closure_2[10]);
                    return obj.canUseIncreasedMessageLength(closure_5.getCurrentUser());
                  }
                }
                cResult[25] = tmp28;
                cResult[26] = tmp31;
                let tmp29 = tmp31;
                let obj5 = { color: "text-default", lineClamp: 1, variant: "text-xxs/semibold", children: null };
              } else {
                tmp29 = cResult[26];
              }
              class S {
                constructor() {
                  obj = closure_1(closure_2[10]);
                  return obj.canUseIncreasedMessageLength(closure_5.getCurrentUser());
                }
              }
              if (cResult[29] === tmp18) {
                if (cResult[30] === tmp27) {
                  if (cResult[31] === tmp29) {
                    if (cResult[32] === tmp32) {
                      let tmp33 = cResult[33];
                    }
                    return tmp33;
                  }
                }
              }
              let obj6 = { onPress: tmp18, style: tmp27, children: null };
              const items3 = [tmp29, tmp32];
              obj6.children = items3;
              const tmp35 = closure_10(analyticsLocations(6184).PressableOpacity, obj6);
              cResult[29] = tmp18;
              cResult[30] = tmp27;
              cResult[31] = tmp29;
              cResult[32] = tmp32;
              cResult[33] = tmp35;
              tmp33 = tmp35;
            }
            const items4 = [tmp4.container, ];
            class S {
              constructor() {
                obj = closure_1(closure_2[10]);
                return obj.canUseIncreasedMessageLength(closure_5.getCurrentUser());
              }
            }
            cResult[22] = style;
            cResult[23] = tmp4.container;
            cResult[24] = items4;
            tmp27 = items4;
          } else if (!tmp15) {
            return null;
          } else {
            if (cResult[34] === style) {
              if (cResult[35] === tmp4.container) {
                let tmp20 = cResult[36];
              }
              const _Symbol = Symbol;
              class S {
                constructor() {
                  obj = closure_1(closure_2[10]);
                  return obj.canUseIncreasedMessageLength(closure_5.getCurrentUser());
                }
              }
              if (cResult[38] === tmp18) {
              }
              let obj7 = { onPress: tmp18, style: tmp20, children: tmp22 };
              const tmp25 = closure_9(analyticsLocations(6184).PressableOpacity, obj7);
              cResult[38] = tmp18;
              cResult[39] = tmp20;
              cResult[40] = tmp25;
            }
            const items5 = [tmp4.container, ];
            class S {
              constructor() {
                obj = closure_1(closure_2[10]);
                return obj.canUseIncreasedMessageLength(closure_5.getCurrentUser());
              }
            }
            cResult[34] = style;
            cResult[35] = tmp4.container;
            cResult[36] = items5;
            tmp20 = items5;
          }
        }
      }
    }
    class S {
      constructor() {
        obj = closure_1(closure_2[10]);
        return obj.canUseIncreasedMessageLength(closure_5.getCurrentUser());
      }
    }
    cResult[5] = analyticsLocations;
    cResult[6] = stateFromStores;
    cResult[7] = tmp9;
    cResult[8] = first;
    cResult[9] = tmp19;
    tmp18 = tmp19;
  }
  class E {
    constructor() {
      obj = { onMessageLengthChanged() { ... } };
      return obj;
    }
  }
  cResult[2] = tmp9;
  cResult[3] = result;
  cResult[4] = E;
  tmp16 = E;
  const tmp14 = _slicedToArray(first.useState(false), 2);
}) : (function ChatCounter(ref) {
  ({ style, analyticsLocations } = ref);
  first = undefined;
  currentUser = undefined;
  c6 = undefined;
  const tmp = closure_11();
  const items = [currentUser];
  const stateFromStores = analyticsLocations(504).useStateFromStores(items, () => stateFromStores(maxLength[10]).canUseIncreasedMessageLength(currentUser.getCurrentUser()));
  const tmp5 = stateFromStores(9259)();
  dependencyMap = tmp5;
  let result = tmp5 / 10;
  _slicedToArray = result;
  [first, currentUser] = first.useState(-result - 1);
  let obj = analyticsLocations(504);
  [tmp11, c6] = first.useState(false);
  const imperativeHandle = first.useImperativeHandle(ref.ref, () => ({
    onMessageLengthChanged(arg0) {
      currentUser(Math.max(-closure_1_3 - 1, arg0 - maxLength));
      closure_1_6(arg0 > c6);
    }
  }));
  const items1 = [analyticsLocations, stateFromStores, tmp5, first];
  const callback = first.useCallback(() => {
    if (stateFromStores) {
      if (first > 0) {
        const obj2 = { text: null };
        const intl = util.intl;
        obj2.text = intl.string(util.t.YSRIqa);
        ToastActionCreatorsDefault.open("premium-message-length-info-toast", obj2);
      } else {
        const obj3 = { text: null };
        const intl2 = util.intl;
        const obj5 = { maxLength };
        obj3.text = intl2.formatToPlainString(util.t.vcvHa0, obj5);
        ToastActionCreatorsDefault.open("premium-message-length-info-toast", obj3);
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
    const items3 = [closure_9(analyticsLocations(5088).Text, obj3), ];
    let tmp20Result = null;
    if (!stateFromStores) {
      tmp20Result = closure_9(analyticsLocations(9035).NitroWheelIcon, { size: "xs", color: "icon-muted" });
    }
    items3[1] = tmp20Result;
    obj2.children = items3;
    let tmp16Result = closure_10(analyticsLocations(6184).PressableOpacity, obj2);
  } else if (first >= tmp7) {
    let obj4 = { onPress: callback, style: null, children: null };
    const items4 = [tmp.container, style];
    obj4.style = items4;
    let obj5 = { color: "text-default", lineClamp: 1, variant: "text-xxs/semibold", children: -first };
    const items5 = [closure_9(analyticsLocations(5088).Text, obj5), ];
    let tmp17Result = null;
    if (tmp11) {
      tmp17Result = closure_9(analyticsLocations(9035).NitroWheelIcon, { size: "xs", color: "icon-muted" });
    }
    items5[1] = tmp17Result;
    obj4.children = items5;
    tmp16Result = closure_10(analyticsLocations(6184).PressableOpacity, obj4);
  } else {
    tmp16Result = null;
    if (tmp11) {
      let obj6 = { onPress: callback, style: null, children: null };
      const items6 = [tmp.container, style];
      obj6.style = items6;
      obj6.children = closure_9(analyticsLocations(9035).NitroWheelIcon, { size: "xs", color: "icon-muted" });
      tmp16Result = closure_9(analyticsLocations(6184).PressableOpacity, obj6);
    }
  }
  return tmp16Result;
});
tmp4.displayName = "ChatInputCharCounter";
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default noop.memo(tmp4);