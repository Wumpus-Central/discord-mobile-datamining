// === Module 17753: BlockMessageActionSheet ===

// Module 17753 (BlockMessageActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(11487);
({ AutomodActionType: hasOwnProperty, MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/BlockMessageActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onRemove) => {
  const cResult = onConfirm(first[5]).c(27);
  ({ triggerType, action, onConfirm } = onRemove);
  onRemove = onRemove.onRemove;
  let str;
  if (action != null) {
    str = action.metadata.customMessage;
  }
  if (str == null) {
    str = "";
  }
  const obj = onConfirm(first[5]);
  first = _slicedToArray(noop.useState(str), 2)[0];
  if (cResult[0] === action) {
    if (cResult[1] === triggerType) {
      let tmp8 = cResult[2];
    }
    if (null == tmp8) {
      return null;
    } else {
      if (cResult[3] === first) {
        if (cResult[4] === onConfirm) {
          let tmp10 = cResult[5];
        }
        class C {
          constructor() {
            obj = closure_1(closure_2[7]);
            hideActionSheetResult = obj.hideActionSheet();
            tmp2 = onConfirm(closure_2);
            return;
          }
        }
        if (cResult[8] !== tmp8.headerText) {
          class C {
            constructor() {
              obj = closure_1(closure_2[7]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = onConfirm(closure_2);
              return;
            }
          }
          tmp14[0] = tmp8.headerText;
          const tmp15 = closure_7(onConfirm(tmp2[8]).BottomSheetTitleHeader, tmp14);
          cResult[8] = tmp8.headerText;
          cResult[9] = tmp15;
          let tmp12 = tmp15;
        } else {
          tmp12 = cResult[9];
        }
        if (cResult[10] !== tmp8.descriptionText) {
          class C {
            constructor() {
              obj = closure_1(closure_2[7]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = onConfirm(closure_2);
              return;
            }
          }
          tmp18[2] = tmp8.descriptionText;
          const tmp19 = closure_7(onConfirm(tmp2[9]).Text, tmp18);
          cResult[10] = tmp8.descriptionText;
          cResult[11] = tmp19;
          let tmp16 = tmp19;
        } else {
          tmp16 = cResult[11];
        }
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              obj = closure_1(closure_2[7]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = onConfirm(closure_2);
              return;
            }
          }
          const intl = onConfirm(tmp2[10]).intl;
          tmp23[2] = intl.string(onConfirm(tmp2[10]).t.Oa9oWJ);
          const tmp24 = closure_7(onConfirm(tmp2[9]).Text, tmp23);
          cResult[12] = tmp24;
          let tmp21 = tmp24;
        } else {
          tmp21 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              obj = closure_1(closure_2[7]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = onConfirm(closure_2);
              return;
            }
          }
          const tmp28Result = tmp28(onConfirm(tmp2[10]).t.Df4aUN);
          const intl2 = onConfirm(tmp2[10]).intl;
          const stringResult = intl2.string(onConfirm(tmp2[10]).t.eOWEmL);
          const intl3 = onConfirm(tmp2[10]).intl;
          const stringResult1 = intl3.string(onConfirm(tmp2[10]).t.gDZw7A);
          cResult[13] = tmp28Result;
          cResult[14] = stringResult;
          cResult[15] = stringResult1;
          let tmp27 = stringResult1;
          let tmp25 = tmp28Result;
          const tmp26 = stringResult;
        } else {
          tmp25 = cResult[13];
          class C {
            constructor() {
              obj = closure_1(closure_2[7]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = onConfirm(closure_2);
              return;
            }
          }
          tmp27 = cResult[15];
        }
        if (cResult[16] !== first) {
          class C {
            constructor() {
              obj = closure_1(closure_2[7]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = onConfirm(closure_2);
              return;
            }
          }
          tmp34[0] = tmp25;
          tmp34[1] = tmp26;
          tmp34[2] = tmp27;
          tmp34[3] = closure_6;
          tmp34[4] = first;
          tmp34[5] = tmp7;
          const tmp36 = closure_7(onConfirm(tmp2[11]).TextArea, tmp34);
          cResult[16] = first;
          cResult[17] = tmp36;
          let tmp32 = tmp36;
        } else {
          tmp32 = cResult[17];
        }
        if (cResult[18] === action) {
          if (cResult[19] === tmp10) {
            if (cResult[20] === tmp11) {
              class C {
                constructor() {
                  obj = closure_1(closure_2[7]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp2 = onConfirm(closure_2);
                  return;
                }
              }
              const obj2 = { keyboardShouldPersistTaps: "handled", header: tmp12, children: null };
              const items = [tmp16, tmp21, tmp32, cResult[21]];
              obj2.children = items;
              const tmp44 = closure_8(onConfirm(tmp2[14]).ActionSheet, obj2);
              cResult[22] = tmp32;
              cResult[23] = cResult[21];
              cResult[24] = tmp12;
              cResult[25] = tmp16;
              cResult[26] = tmp44;
            }
          }
        }
        if (null == action) {
          class C {
            constructor() {
              obj = closure_1(closure_2[7]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = onConfirm(closure_2);
              return;
            }
          }
          const intl4 = onConfirm(tmp2[10]).intl;
          tmp39[1] = intl4.string(onConfirm(tmp2[10]).t.JFfins);
          tmp39[2] = tmp10;
          let tmp40 = closure_7(onConfirm(tmp2[12]).Button, tmp39);
        } else {
          class C {
            constructor() {
              obj = closure_1(closure_2[7]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = onConfirm(closure_2);
              return;
            }
          }
          const obj3 = { grow: true, variant: "secondary", text: null, onPress: null };
          const intl5 = onConfirm(tmp2[10]).intl;
          obj3.text = intl5.string(onConfirm(tmp2[10]).t.R9GHya);
          obj3.onPress = tmp11;
          const items1 = [closure_7(onConfirm(tmp2[12]).Button, obj3), ];
          const obj4 = { grow: true, text: null, onPress: null };
          const intl6 = onConfirm(tmp2[10]).intl;
          obj4.text = intl6.string(onConfirm(tmp2[10]).t["R3BPH+"]);
          obj4.onPress = tmp10;
          items1[1] = closure_7(onConfirm(tmp2[12]).Button, obj4);
          tmp46[0] = items1;
          tmp40 = closure_8(onConfirm(tmp2[13]).TwinButtons, tmp46);
        }
        cResult[18] = action;
        cResult[19] = tmp10;
        cResult[20] = tmp11;
        cResult[21] = tmp40;
      }
      class C {
        constructor() {
          obj = closure_1(closure_2[7]);
          hideActionSheetResult = obj.hideActionSheet();
          tmp2 = onConfirm(closure_2);
          return;
        }
      }
      cResult[3] = first;
      cResult[4] = onConfirm;
      cResult[5] = C;
      tmp10 = C;
    }
  }
  const tmp5 = _slicedToArray(noop.useState(str), 2);
  const actionInfo = onConfirm(first[6]).getActionInfo(constants.BLOCK_MESSAGE, action, triggerType);
  cResult[0] = action;
  cResult[1] = triggerType;
  cResult[2] = actionInfo;
  tmp8 = actionInfo;
  const tmpResult = onConfirm(first[6]);
}) : ((triggerType) => {
  ({ action, onConfirm: require, onRemove: importDefault } = triggerType);
  value = undefined;
  let str;
  if (action != null) {
    str = action.metadata.customMessage;
  }
  if (str == null) {
    str = "";
  }
  const tmp2 = _slicedToArray(noop.useState(str), 2);
  value = tmp2[0];
  const actionInfo = require("getActionInfo").getActionInfo(constants.BLOCK_MESSAGE, action, triggerType.triggerType);
  if (null == actionInfo) {
    return null;
  } else {
    function handleConfirm() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(first);
    }
    const obj2 = { keyboardShouldPersistTaps: "handled", header: null, children: null };
    const obj3 = { title: actionInfo.headerText };
    obj2.header = closure_7(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj3);
    const obj4 = { variant: "text-md/normal", color: "text-default", children: actionInfo.descriptionText };
    const items = [closure_7(require("Text/Text").Text, obj4), , , ];
    const obj5 = { variant: "text-md/normal", color: "text-default", children: null };
    const intl2 = require("util").intl;
    obj5.children = intl2.string(require("util").t.Oa9oWJ);
    items[1] = closure_7(require("Text/Text").Text, obj5);
    const obj6 = { label: null, description: null, placeholder: null, maxLength: null, value: null, onChange: null };
    const intl3 = require("util").intl;
    obj6.label = intl3.string(require("util").t.Df4aUN);
    const intl4 = require("util").intl;
    obj6.description = intl4.string(require("util").t.eOWEmL);
    const intl5 = require("util").intl;
    obj6.placeholder = intl5.string(require("util").t.gDZw7A);
    obj6.maxLength = maxLength;
    obj6.value = value;
    obj6.onChange = tmp2[1];
    items[2] = closure_7(require("TextArea").TextArea, obj6);
    if (null == action) {
      const obj7 = { grow: true, text: null, onPress: null };
      const intl = require("util").intl;
      obj7.text = intl.string(require("util").t.JFfins);
      obj7.onPress = handleConfirm;
      let tmp8Result = closure_7(require("components/Button/Button").Button, obj7);
    } else {
      const obj8 = { children: null };
      const obj9 = { grow: true, variant: "secondary", text: null, onPress: null };
      const intl6 = require("util").intl;
      obj9.text = intl6.string(require("util").t.R9GHya);
      obj9.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        closure_1_1();
      };
      const items1 = [closure_7(require("components/Button/Button").Button, obj9), ];
      const obj10 = { grow: true, text: null, onPress: null };
      const intl7 = require("util").intl;
      obj10.text = intl7.string(require("util").t["R3BPH+"]);
      obj10.onPress = handleConfirm;
      items1[1] = closure_7(require("components/Button/Button").Button, obj10);
      obj8.children = items1;
      tmp8Result = closure_8(require("native").TwinButtons, obj8);
    }
    items[3] = tmp8Result;
    obj2.children = items;
    return closure_8(require("ActionSheet").ActionSheet, obj2);
  }
  const obj = require("getActionInfo");
});