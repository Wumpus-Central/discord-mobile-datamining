// discord_app/modules/guild_automod/native/components/BlockMessageActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let hideActionSheetResult, onRemove, tmp2;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ AutomodActionType: hasOwnProperty, MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onRemove) => {
      let action;
      let first;
      let intl6;
      let intl7;
      let items;
      let onConfirm;
      let triggerType;
      let obj = onConfirm(first[5]);
      const cResult = obj.c(27);
      ({ triggerType, action, onConfirm } = onRemove);
      onRemove = onRemove.onRemove;
      let str;
      const useState = react.useState;
      if (action != null) {
        str = action.metadata.customMessage;
      }
      if (str == null) {
        str = "";
      }
      first = _slicedToArray(useState(str), 2)[0];
      _slicedToArray(useState(str), 2);
      if (cResult[0] === action) {
        let tmp8;
        if (cResult[1] === triggerType) {
          tmp8 = cResult[2];
        }
        if (null == tmp8) {
          return null;
        } else {
          if (cResult[3] === first) {
            let tmp10;
            let tmp12;
            let tmp16;
            let tmp21;
            let tmp27;
            let tmp25;
            let tmp26;
            let tmp32;
            let tmp40;
            if (cResult[4] === onConfirm) {
              tmp10 = cResult[5];
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
              const tmp15 = closure_7(onConfirm(first[8]).BottomSheetTitleHeader, tmp14);
              cResult[8] = tmp8.headerText;
              cResult[9] = tmp15;
              tmp12 = tmp15;
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
              const tmp19 = closure_7(onConfirm(first[9]).Text, tmp18);
              cResult[10] = tmp8.descriptionText;
              cResult[11] = tmp19;
              tmp16 = tmp19;
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
              const Text = onConfirm(tmp2[9]).Text;
              const intl = onConfirm(tmp2[10]).intl;
              tmp23[2] = intl.string(onConfirm(first[10]).t.Oa9oWJ);
              const tmp24 = closure_7(Text, tmp23);
              cResult[12] = tmp24;
              tmp21 = tmp24;
            } else {
              tmp21 = cResult[12];
            }
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = onConfirm(tmp2[10]).intl;
              class C {
                constructor() {
                  obj = closure_1(closure_2[7]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp2 = onConfirm(closure_2);
                  return;
                }
              }
              const tmp28Result = tmp28(onConfirm(first[10]).t.Df4aUN);
              const intl3 = onConfirm(tmp2[10]).intl;
              const stringResult = intl3.string(onConfirm(first[10]).t.eOWEmL);
              const intl4 = onConfirm(tmp2[10]).intl;
              const stringResult1 = intl4.string(onConfirm(first[10]).t.gDZw7A);
              cResult[13] = tmp28Result;
              cResult[14] = stringResult;
              cResult[15] = stringResult1;
              tmp27 = stringResult1;
              tmp25 = tmp28Result;
              tmp26 = stringResult;
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
              const tmp36 = closure_7(onConfirm(first[11]).TextArea, tmp34);
              cResult[16] = first;
              cResult[17] = tmp36;
              tmp32 = tmp36;
            } else {
              tmp32 = cResult[17];
            }
            if (cResult[18] === action) {
              if (cResult[19] === tmp10) {
                let tmp37;
                if (cResult[20] === tmp11) {
                  tmp37 = cResult[21];
                }
                class C {
                  constructor() {
                    obj = closure_1(closure_2[7]);
                    hideActionSheetResult = obj.hideActionSheet();
                    tmp2 = onConfirm(closure_2);
                    return;
                  }
                }
                const obj2 = { keyboardShouldPersistTaps: "handled", header: tmp12, children: items };
                items = [tmp16, tmp21, tmp32, tmp37];
                cResult[22] = tmp32;
                cResult[23] = tmp37;
                cResult[24] = tmp12;
                cResult[25] = tmp16;
                cResult[26] = closure_8(onConfirm(first[14]).ActionSheet, obj2);
                const tmp43 = closure_8(onConfirm(first[14]).ActionSheet, obj2);
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
              const Button = onConfirm(tmp2[12]).Button;
              const intl5 = onConfirm(tmp2[10]).intl;
              tmp39[1] = intl5.string(onConfirm(first[10]).t.JFfins);
              tmp39[2] = tmp10;
              tmp40 = closure_7(Button, tmp39);
            } else {
              class C {
                constructor() {
                  obj = closure_1(closure_2[7]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp2 = onConfirm(closure_2);
                  return;
                }
              }
              const TwinButtons = onConfirm(tmp2[13]).TwinButtons;
              const obj3 = {
                grow: true,
                variant: "secondary",
                text: intl6.string(onConfirm(first[10]).t.R9GHya),
                onPress: tmp11,
              };
              const Button2 = onConfirm(tmp2[12]).Button;
              intl6 = onConfirm(tmp2[10]).intl;
              const items1 = [closure_7(Button2, obj3)];
              const obj4 = { grow: true, text: intl7.string(onConfirm(first[10]).t["R3BPH+"]), onPress: tmp10 };
              const Button3 = onConfirm(tmp2[12]).Button;
              intl7 = onConfirm(tmp2[10]).intl;
              items1[1] = closure_7(Button3, obj4);
              tmp45[0] = items1;
              tmp40 = closure_8(TwinButtons, tmp45);
            }
            cResult[18] = action;
            cResult[19] = tmp10;
            cResult[20] = tmp11;
            cResult[21] = tmp40;
            tmp37 = tmp40;
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
      const tmpResult = onConfirm(first[6]);
      const actionInfo = tmpResult.getActionInfo(constants.BLOCK_MESSAGE, action, triggerType);
      cResult[0] = action;
      cResult[1] = triggerType;
      cResult[2] = actionInfo;
      tmp8 = actionInfo;
    }
  : (triggerType) => {
      let action;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let items;
      let items1;
      let obj3;
      let tmp4;
      let value;
      ({ action, onConfirm: require, onRemove: importDefault } = triggerType);
      value = undefined;
      let str;
      triggerType = triggerType.triggerType;
      const useState = react.useState;
      if (action != null) {
        str = action.metadata.customMessage;
      }
      if (str == null) {
        str = "";
      }
      [value, tmp4] = useState(str);
      let obj = require("getActionInfo");
      const actionInfo = obj.getActionInfo(constants.BLOCK_MESSAGE, action, triggerType);
      if (null == actionInfo) {
        return null;
      } else {
        let tmp9Result;
        function handleConfirm() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          require(first);
        }
        const obj2 = {
          keyboardShouldPersistTaps: "handled",
          header: closure_7(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj3),
          children: items,
        };
        const ActionSheet = require("ActionSheet").ActionSheet;
        obj3 = { title: actionInfo.headerText };
        const obj4 = { variant: "text-md/normal", color: "text-default", children: actionInfo.descriptionText };
        items = [closure_7(require("Text/Text").Text, obj4), , ,];
        const obj5 = {
          variant: "text-md/normal",
          color: "text-default",
          children: intl2.string(require("intl").t.Oa9oWJ),
        };
        const Text = require("Text/Text").Text;
        intl2 = require("intl").intl;
        items[1] = closure_7(Text, obj5);
        const obj6 = {
          label: intl3.string(require("intl").t.Df4aUN),
          description: intl4.string(require("intl").t.eOWEmL),
          placeholder: intl5.string(require("intl").t.gDZw7A),
          maxLength,
          value,
          onChange: tmp4,
        };
        const TextArea = require("TextArea").TextArea;
        intl3 = require("intl").intl;
        intl4 = require("intl").intl;
        intl5 = require("intl").intl;
        items[2] = closure_7(TextArea, obj6);
        if (null == action) {
          const obj7 = { grow: true, text: intl.string(require("intl").t.JFfins), onPress: handleConfirm };
          const Button = require("components/Button/Button").Button;
          intl = require("intl").intl;
          tmp9Result = closure_7(Button, obj7);
        } else {
          const obj8 = { children: items1 };
          const TwinButtons = require("native").TwinButtons;
          const obj9 = {
            grow: true,
            variant: "secondary",
            text: intl6.string(require("intl").t.R9GHya),
            onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              importDefault();
            },
          };
          const Button2 = require("components/Button/Button").Button;
          intl6 = require("intl").intl;
          items1 = [closure_7(Button2, obj9)];
          const obj10 = { grow: true, text: intl7.string(require("intl").t["R3BPH+"]), onPress: handleConfirm };
          const Button3 = require("components/Button/Button").Button;
          intl7 = require("intl").intl;
          items1[1] = closure_7(Button3, obj10);
          tmp9Result = closure_8(TwinButtons, obj8);
        }
        items[3] = tmp9Result;
        return closure_8(ActionSheet, obj2);
      }
    };
const result = size.fileFinishedImporting("modules/guild_automod/native/components/BlockMessageActionSheet.tsx");

export default tmp4;
