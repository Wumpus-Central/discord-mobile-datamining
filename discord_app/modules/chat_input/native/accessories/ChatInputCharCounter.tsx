// === Module 12088: ChatInputCharCounter ===

// Module 12088 (ChatInputCharCounter)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8848 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
({ MAX_MESSAGE_LENGTH: metroRequire, UpsellTypes: metroImportDefault } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { container: obj2 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let analyticsLocations;
  let closure_6;
  let currentUser;
  let first;
  let items1;
  let items3;
  let maxLength;
  let style;
  let tmp15;
  let tmp5;
  let tmp6;
  let obj = analyticsLocations(576);
  const cResult = obj.c(41);
  ({ style, analyticsLocations } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [currentUser];
    const fn = function v() {
      const obj = stateFromStores(maxLength[10]);
      return obj.canUseIncreasedMessageLength(currentUser.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = analyticsLocations(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp9 = stateFromStores(8839)();
  dependencyMap = tmp9;
  let result = tmp9 / 10;
  _slicedToArray = result;
  let obj3 = first;
  const tmp11 = -result;
  [first, currentUser] = first.useState(tmp11 - 1);
  [tmp15, closure_6] = first.useState(false);
  _slicedToArray(first.useState(false), 2);
  if (cResult[2] === tmp9) {
    let tmp16;
    if (cResult[3] === result) {
      tmp16 = cResult[4];
    }
    const imperativeHandle = obj3.useImperativeHandle(arg1, tmp16);
    if (cResult[5] === analyticsLocations) {
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === tmp9) {
          let tmp19;
          if (cResult[8] === first) {
            tmp19 = cResult[9];
          }
          if (first > 0) {
            if (cResult[10] === style) {
              let tmp39;
              let tmp41;
              let tmp44;
              if (cResult[11] === tmp4.container) {
                tmp39 = cResult[12];
              }
              const _HermesInternal = HermesInternal;
              const combined = "-" + first;
              if (cResult[13] !== combined) {
                let obj2 = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xxs/semibold", children: combined };
                const tmp43 = closure_9(analyticsLocations(4892).Text, obj2);
                cResult[13] = combined;
                cResult[14] = tmp43;
                tmp41 = tmp43;
              } else {
                tmp41 = cResult[14];
              }
              if (cResult[15] !== stateFromStores) {
                let tmp45 = null;
                if (!stateFromStores) {
                  tmp45 = closure_9(analyticsLocations(8346).NitroWheelIcon, { size: "xs", color: "icon-muted" });
                }
                cResult[15] = stateFromStores;
                cResult[16] = tmp45;
                tmp44 = tmp45;
              } else {
                tmp44 = cResult[16];
              }
              if (cResult[17] === tmp19) {
                if (cResult[18] === tmp39) {
                  if (cResult[19] === tmp41) {
                    let tmp47;
                    if (cResult[20] === tmp44) {
                      tmp47 = cResult[21];
                    }
                    return tmp47;
                  }
                }
              }
              let obj4 = { onPress: tmp19, style: tmp39, children: items1 };
              items1 = [tmp41, tmp44];
              const tmp49 = closure_10(analyticsLocations(5916).PressableOpacity, obj4);
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
              let tmp28;
              let tmp30;
              let tmp33;
              if (cResult[23] === tmp4.container) {
                tmp28 = cResult[24];
              }
              if (cResult[25] !== -first) {
                let obj5 = { color: "text-default", lineClamp: 1, variant: "text-xxs/semibold", children: -first };
                const tmp32 = closure_9(analyticsLocations(4892).Text, obj5);
                cResult[25] = -first;
                cResult[26] = tmp32;
                tmp30 = tmp32;
              } else {
                tmp30 = cResult[26];
              }
              if (cResult[27] !== tmp15) {
                let tmp34 = null;
                if (tmp15) {
                  tmp34 = closure_9(analyticsLocations(8346).NitroWheelIcon, { size: "xs", color: "icon-muted" });
                }
                cResult[27] = tmp15;
                cResult[28] = tmp34;
                tmp33 = tmp34;
              } else {
                tmp33 = cResult[28];
              }
              if (cResult[29] === tmp19) {
                if (cResult[30] === tmp28) {
                  if (cResult[31] === tmp30) {
                    let tmp36;
                    if (cResult[32] === tmp33) {
                      tmp36 = cResult[33];
                    }
                    return tmp36;
                  }
                }
              }
              let obj6 = { onPress: tmp19, style: tmp28, children: items3 };
              items3 = [tmp30, tmp33];
              const tmp38 = closure_10(analyticsLocations(5916).PressableOpacity, obj6);
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
          } else {
            let tmp27 = null;
            if (tmp15) {
              if (cResult[34] === style) {
                let tmp20;
                let tmp21;
                if (cResult[35] === tmp4.container) {
                  tmp20 = cResult[36];
                }
                const _Symbol = Symbol;
                if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp23 = closure_9(analyticsLocations(8346).NitroWheelIcon, { size: "xs", color: "icon-muted" });
                  cResult[37] = tmp23;
                  tmp21 = tmp23;
                } else {
                  tmp21 = cResult[37];
                }
                if (cResult[38] === tmp19) {
                  let tmp24;
                  if (cResult[39] === tmp20) {
                    tmp24 = cResult[40];
                  }
                  tmp27 = tmp24;
                }
                const obj7 = { onPress: tmp19, style: tmp20, children: tmp21 };
                const tmp26 = closure_9(analyticsLocations(5916).PressableOpacity, obj7);
                cResult[38] = tmp19;
                cResult[39] = tmp20;
                cResult[40] = tmp26;
                tmp24 = tmp26;
              }
              const items5 = [tmp4.container, style];
              cResult[34] = style;
              cResult[35] = tmp4.container;
              cResult[36] = items5;
              tmp20 = items5;
            }
            return tmp27;
          }
        }
      }
    }
    const fn3 = function b() {
      let intl;
      let intl2;
      let obj4;
      let obj6;
      if (stateFromStores) {
        if (first > 0) {
          const obj2 = { content: intl.string(intl3.t.YSRIqa), key: "premium-message-length-info-toast" };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl3.intl;
          open(obj2);
        } else {
          const obj3 = { content: intl2.formatToPlainString(intl3.t.vcvHa0, obj4), key: "premium-message-length-info-toast" };
          const open2 = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl2 = intl3.intl;
          obj4 = { maxLength };
          open2(obj3);
        }
      } else {
        const obj5 = { initialUpsellKey: metroImportDefault.LONGER_MESSAGE, analyticsLocations, analyticsProperties: obj6 };
        obj6 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
        const obj = PremiumUpsellUtilsDefault;
        result = obj.handleShowUpsellAlert(obj5);
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
        closure_1_6(arg0 > closure_6);
      }
    };
  };
  cResult[2] = tmp9;
  cResult[3] = result;
  cResult[4] = fn2;
  tmp16 = fn2;
}) : ((arg0, arg1) => {
  let analyticsLocations;
  let c3;
  let c6;
  let currentUser;
  let first;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let maxLength;
  let style;
  let tmp11;
  let tmp16Result;
  ({ style, analyticsLocations } = arg0);
  first = undefined;
  currentUser = undefined;
  c6 = undefined;
  const tmp = closure_11();
  let obj = analyticsLocations(504);
  const items = [currentUser];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = stateFromStores(maxLength[10]);
    return obj.canUseIncreasedMessageLength(currentUser.getCurrentUser());
  });
  const tmp5 = stateFromStores(8839)();
  dependencyMap = tmp5;
  let result = tmp5 / 10;
  _slicedToArray = result;
  [first, currentUser] = first.useState(-result - 1);
  [tmp11, c6] = first.useState(false);
  _slicedToArray(first.useState(false), 2);
  const imperativeHandle = first.useImperativeHandle(arg1, () => ({
    onMessageLengthChanged(arg0) {
      currentUser(Math.max(-closure_1_3 - 1, arg0 - maxLength));
      closure_1_6(arg0 > c6);
    }
  }));
  const items1 = [analyticsLocations, stateFromStores, tmp5, first];
  const callback = first.useCallback(() => {
    let intl;
    let intl2;
    let obj4;
    let obj6;
    if (stateFromStores) {
      if (first > 0) {
        const obj2 = { content: intl.string(intl3.t.YSRIqa), key: "premium-message-length-info-toast" };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl3.intl;
        open(obj2);
      } else {
        const obj3 = { content: intl2.formatToPlainString(intl3.t.vcvHa0, obj4), key: "premium-message-length-info-toast" };
        const open2 = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl2 = intl3.intl;
        obj4 = { maxLength };
        open2(obj3);
      }
    } else {
      const obj5 = { initialUpsellKey: metroImportDefault.LONGER_MESSAGE, analyticsLocations, analyticsProperties: obj6 };
      obj6 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
      const obj = PremiumUpsellUtilsDefault;
      const result = obj.handleShowUpsellAlert(obj5);
    }
  }, items1);
  if (first > 0) {
    let obj2 = { onPress: callback, style: items2, children: items3 };
    items2 = [tmp.container, style];
    const PressableOpacity3 = analyticsLocations(5916).PressableOpacity;
    let obj3 = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xxs/semibold", children: "-" + first };
    const _HermesInternal = HermesInternal;
    const Text = analyticsLocations(4892).Text;
    items3 = [closure_9(Text, obj3), ];
    let tmp20Result = null;
    if (!stateFromStores) {
      tmp20Result = closure_9(analyticsLocations(8346).NitroWheelIcon, { size: "xs", color: "icon-muted" });
    }
    items3[1] = tmp20Result;
    tmp16Result = closure_10(PressableOpacity3, obj2);
  } else if (first >= -result) {
    let obj4 = { onPress: callback, style: items4, children: items5 };
    items4 = [tmp.container, style];
    const PressableOpacity2 = analyticsLocations(5916).PressableOpacity;
    let obj5 = { color: "text-default", lineClamp: 1, variant: "text-xxs/semibold", children: -first };
    items5 = [closure_9(analyticsLocations(4892).Text, obj5), ];
    let tmp17Result = null;
    if (tmp11) {
      tmp17Result = closure_9(analyticsLocations(8346).NitroWheelIcon, { size: "xs", color: "icon-muted" });
    }
    items5[1] = tmp17Result;
    tmp16Result = closure_10(PressableOpacity2, obj4);
  } else {
    tmp16Result = null;
    if (tmp11) {
      let obj6 = { onPress: callback, style: items6, children: closure_9(analyticsLocations(8346).NitroWheelIcon, { size: "xs", color: "icon-muted" }) };
      items6 = [tmp.container, style];
      const PressableOpacity = analyticsLocations(5916).PressableOpacity;
      tmp16Result = closure_9(PressableOpacity, obj6);
    }
  }
  return tmp16Result;
}));
forwardRefResult.displayName = "ChatInputCharCounter";
const memoResult = react.memo(forwardRefResult);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default memoResult;