// discord_app/modules/conjure/design_feedback/native/ConjureDesignRemarkSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";
import ConjureDesignFeedback from "../ConjureDesignFeedback.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let projectId;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let View = react_native.View;
const sendUserMessage = ConjureConnectionStore.sendUserMessage;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const ConjureDesignRemarkSheet = "ConjureDesignRemarkSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, actions: obj3 };
obj2 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let first;
      let onClose;
      let obj = projectId(onClose[8]);
      const cResult = obj.c(41);
      projectId = projectId.projectId;
      const target = projectId.target;
      onClose = projectId.onClose;
      closure_10();
      const tmp3 = first(S.useState(""), 2);
      first = tmp3[0];
      if (cResult[0] !== onClose) {
        class S {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjureDesignRemarkSheet);
            onClose();
          }
        }
        cResult[0] = onClose;
        cResult[1] = S;
      } else {
        class S {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjureDesignRemarkSheet);
            onClose();
          }
        }
      }
      S = tmp5;
      if (cResult[2] !== first) {
        class S {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjureDesignRemarkSheet);
            onClose();
          }
        }
        const result = obj2.isConjureDesignCommentUsable(first);
        cResult[2] = first;
        cResult[3] = result;
      } else {
        class S {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjureDesignRemarkSheet);
            onClose();
          }
        }
      }
      View = tmp6;
      if (cResult[4] === tmp5) {
        class S {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjureDesignRemarkSheet);
            onClose();
          }
        }
      }
      const fn = function f() {
        if (View) {
          const obj = ConjureDesignFeedback;
          sendUserMessage(projectId, obj.formatConjureDesignRemark(target, first));
          S();
        }
      };
      cResult[4] = tmp5;
      cResult[5] = first;
      cResult[6] = projectId;
      cResult[7] = target;
      cResult[8] = tmp6;
      cResult[9] = fn;
    }
  : (projectId) => {
      let BottomSheetTitleHeader;
      let intl;
      let intl3;
      let intl4;
      let items2;
      let items3;
      let obj4;
      let obj5;
      let obj6;
      let stringResult;
      projectId = projectId.projectId;
      const target = projectId.target;
      const onClose = projectId.onClose;
      let value;
      let onPress;
      const tmp = closure_10();
      const tmp2 = value(onPress.useState(""), 2);
      value = tmp2[0];
      const items = [onClose];
      const tmp4 = tmp2[1];
      onPress = onPress.useCallback(() => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(ConjureDesignRemarkSheet);
        onClose();
      }, items);
      let obj = projectId(onClose[10]);
      const result = obj.isConjureDesignCommentUsable(value);
      let c5 = result;
      const items1 = [result, projectId, target, value, onPress];
      const callback1 = onPress.useCallback(() => {
        if (c5) {
          const obj = ConjureDesignFeedback;
          sendUserMessage(projectId, obj.formatConjureDesignRemark(target, first));
          callback();
        }
      }, items1);
      const obj2 = projectId(onClose[10]);
      const kind = obj2.labelConjureDesignTarget(target).kind;
      const obj3 = {
        startExpanded: true,
        keyboardShouldPersistTaps: "handled",
        onDismiss: onClose,
        header: closure_7(BottomSheetTitleHeader, obj4),
        children: closure_8(c5, obj6),
      };
      const ActionSheet = projectId(onClose[16]).ActionSheet;
      obj4 = { title: obj5.describeConjureDesignTarget(target) };
      BottomSheetTitleHeader = projectId(onClose[11]).BottomSheetTitleHeader;
      obj5 = projectId(onClose[10]);
      obj6 = { style: tmp.content, children: items2 };
      const obj7 = {
        autoFocus: true,
        label: intl.string(target(onClose[13]).KCYqWL),
        placeholder: stringResult,
        maxLength: projectId(onClose[10]).CONJURE_DESIGN_COMMENT_MAX,
        value,
        onChange: tmp4,
      };
      const TextArea = projectId(onClose[14]).TextArea;
      intl = projectId(onClose[12]).intl;
      if ("" === kind) {
        const intl2 = tmp6(tmp7[12]).intl;
        stringResult = intl2.string(tmp13(tmp7[13]).MPPV1Q);
      } else {
        const _HermesInternal = HermesInternal;
        stringResult = "Edit " + kind;
      }
      items2 = [closure_7(TextArea, obj7)];
      const obj8 = { style: tmp.actions, children: items3 };
      const obj9 = { variant: "tertiary", grow: true, text: intl3.string(target(onClose[13])["W/HWvP"]), onPress };
      const Button = tmp6(tmp7[15]).Button;
      intl3 = tmp6(tmp7[12]).intl;
      items3 = [closure_7(Button, obj9)];
      const obj10 = {
        variant: "primary",
        grow: true,
        text: intl4.string(projectId(onClose[12]).t.TXNS7S),
        disabled: !result,
        onPress: callback1,
      };
      const Button2 = tmp6(tmp7[15]).Button;
      intl4 = tmp6(tmp7[12]).intl;
      items3[1] = closure_7(Button2, obj10);
      items2[1] = closure_8(c5, obj8);
      return closure_7(ActionSheet, obj3);
    };
let result = size.fileFinishedImporting("modules/conjure/design_feedback/native/ConjureDesignRemarkSheet.tsx");

export default tmp4;
export const CONJURE_DESIGN_REMARK_SHEET_KEY = "ConjureDesignRemarkSheet";
