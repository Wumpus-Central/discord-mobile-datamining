// === Module 18274: BlockMessageActionSheet ===

// Module 18274 (BlockMessageActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(11448);
({ AutomodActionType: hasOwnProperty, MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/BlockMessageActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BlockMessageActionSheet(onRemove) {
  const cResult = onConfirm(value[5]).c(27);
  ({ triggerType, action, onConfirm } = onRemove);
  onRemove = onRemove.onRemove;
  let str;
  if (action != null) {
    str = action.metadata.customMessage;
  }
  if (str == null) {
    str = "";
  }
  const obj = onConfirm(value[5]);
  value = _slicedToArray(noop.useState(str), 2)[0];
  if (cResult[0] === action) {
    if (cResult[1] === triggerType) {
      let tmp8 = cResult[2];
    }
    if (null == tmp8) {
      return null;
    } else {
      if (cResult[3] === value) {
        if (cResult[4] === onConfirm) {
          let tmp10 = cResult[5];
        }
        if (cResult[6] !== onRemove) {
          function handleRemove() {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            onRemove();
          }
          cResult[6] = onRemove;
          cResult[7] = handleRemove;
          let tmp11 = handleRemove;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] !== tmp8.headerText) {
          const obj2 = { title: tmp8.headerText };
          const tmp14 = closure_7(onConfirm(tmp2[8]).BottomSheetTitleHeader, obj2);
          cResult[8] = tmp8.headerText;
          cResult[9] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[9];
        }
        if (cResult[10] !== tmp8.descriptionText) {
          const obj3 = { variant: "text-md/normal", color: "text-default", children: tmp8.descriptionText };
          const tmp17 = closure_7(onConfirm(tmp2[9]).Text, obj3);
          cResult[10] = tmp8.descriptionText;
          cResult[11] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[11];
        }
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "text-md/normal", color: "text-default", children: null };
          const intl = onConfirm(tmp2[10]).intl;
          obj4.children = intl.string(onConfirm(tmp2[10]).t.Oa9oWJ);
          const tmp21 = closure_7(onConfirm(tmp2[9]).Text, obj4);
          cResult[12] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = onConfirm(tmp2[10]).intl;
          const stringResult = intl2.string(onConfirm(tmp2[10]).t.Df4aUN);
          const intl3 = onConfirm(tmp2[10]).intl;
          const stringResult1 = intl3.string(onConfirm(tmp2[10]).t.eOWEmL);
          const intl4 = onConfirm(tmp2[10]).intl;
          const stringResult2 = intl4.string(onConfirm(tmp2[10]).t.gDZw7A);
          cResult[13] = stringResult;
          cResult[14] = stringResult1;
          cResult[15] = stringResult2;
          let tmp24 = stringResult2;
          let tmp23 = stringResult1;
          let tmp22 = stringResult;
        } else {
          tmp22 = cResult[13];
          tmp23 = cResult[14];
          tmp24 = cResult[15];
        }
        if (cResult[16] !== value) {
          const obj5 = { label: tmp22, description: tmp23, placeholder: tmp24, maxLength, value, onChange: tmp7 };
          const tmp31 = closure_7(onConfirm(tmp2[11]).TextArea, obj5);
          cResult[16] = value;
          cResult[17] = tmp31;
          let tmp28 = tmp31;
        } else {
          tmp28 = cResult[17];
        }
        if (cResult[18] === action) {
          if (cResult[19] === tmp10) {
            if (cResult[20] === tmp11) {
              if (cResult[22] === tmp28) {
                if (cResult[23] === tmp32) {
                  if (cResult[24] === tmp12) {
                    if (cResult[25] === tmp15) {
                      let tmp36 = cResult[26];
                    }
                    return tmp36;
                  }
                }
              }
              const obj6 = { keyboardShouldPersistTaps: "handled", header: tmp12, children: null };
              const items = [tmp15, tmp19, tmp28, cResult[21]];
              obj6.children = items;
              const tmp38 = closure_8(onConfirm(tmp2[14]).ActionSheet, obj6);
              cResult[22] = tmp28;
              cResult[23] = cResult[21];
              cResult[24] = tmp12;
              cResult[25] = tmp15;
              cResult[26] = tmp38;
              tmp36 = tmp38;
            }
          }
        }
        if (null == action) {
          const obj7 = { grow: true, text: null, onPress: null };
          const intl5 = onConfirm(tmp2[10]).intl;
          obj7.text = intl5.string(onConfirm(tmp2[10]).t.JFfins);
          obj7.onPress = tmp10;
          let tmp34 = closure_7(onConfirm(tmp2[12]).Button, obj7);
        } else {
          const obj8 = { children: null };
          const obj9 = { grow: true, variant: "secondary", text: null, onPress: null };
          const intl6 = onConfirm(tmp2[10]).intl;
          obj9.text = intl6.string(onConfirm(tmp2[10]).t.R9GHya);
          obj9.onPress = tmp11;
          const items1 = [closure_7(onConfirm(tmp2[12]).Button, obj9), ];
          const obj10 = { grow: true, text: null, onPress: null };
          const intl7 = onConfirm(tmp2[10]).intl;
          obj10.text = intl7.string(onConfirm(tmp2[10]).t["R3BPH+"]);
          obj10.onPress = tmp10;
          items1[1] = closure_7(onConfirm(tmp2[12]).Button, obj10);
          obj8.children = items1;
          tmp34 = closure_8(onConfirm(tmp2[13]).TwinButtons, obj8);
        }
        cResult[18] = action;
        cResult[19] = tmp10;
        cResult[20] = tmp11;
        cResult[21] = tmp34;
      }
      function handleConfirm() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        onConfirm(first);
      }
      cResult[3] = value;
      cResult[4] = onConfirm;
      cResult[5] = handleConfirm;
      tmp10 = handleConfirm;
    }
  }
  const tmp5 = _slicedToArray(noop.useState(str), 2);
  const actionInfo = onConfirm(value[6]).getActionInfo(constants.BLOCK_MESSAGE, action, triggerType);
  cResult[0] = action;
  cResult[1] = triggerType;
  cResult[2] = actionInfo;
  tmp8 = actionInfo;
  const tmpResult = onConfirm(value[6]);
}) : (function BlockMessageActionSheet(triggerType) {
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
      obj9.onPress = function handleRemove() {
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