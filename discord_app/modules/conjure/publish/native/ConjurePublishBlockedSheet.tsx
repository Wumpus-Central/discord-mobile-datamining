// === Module 16966: ConjurePublishBlockedSheet ===

// Module 16966 (ConjurePublishBlockedSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5055 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ConjurePublishBlockedSheet = "ConjurePublishBlockedSheet";
const createStyles = fn(5091);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishBlockedSheet(arg0) {
  const cResult = onConfirm(576).c(23);
  ({ reason, message, onConfirm } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === message) {
    if (cResult[1] === reason) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      function close() {
        closure_1(dependencyMap[8]).hideActionSheet(ConjurePublishBlockedSheet);
      }
      cResult[3] = close;
      let tmp8 = close;
    } else {
      tmp8 = cResult[3];
    }
    closure_1 = tmp8;
    if (cResult[4] !== tmp5.title) {
      const obj2 = { title: tmp5.title };
      const tmp11 = closure_4(onConfirm(6835).BottomSheetTitleHeader, obj2);
      cResult[4] = tmp5.title;
      cResult[5] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== tmp5.body) {
      const obj3 = { variant: "text-md/normal", color: "text-muted", children: tmp5.body };
      const tmp14 = closure_4(onConfirm(5087).Text, obj3);
      cResult[6] = tmp5.body;
      cResult[7] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] !== onConfirm) {
      const fn = function x() {
        closure_1();
        if (onConfirm != null) {
          onConfirm();
        }
      };
      cResult[8] = onConfirm;
      cResult[9] = fn;
      let tmp15 = fn;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] === tmp5.action) {
      if (cResult[11] === tmp15) {
        let tmp16 = cResult[12];
      }
      if (cResult[13] !== tmp5.cancel) {
        let tmp20 = null;
        if (null != tmp5.cancel) {
          const obj4 = { variant: "secondary", text: tmp5.cancel, onPress: tmp8 };
          tmp20 = closure_4(onConfirm(5376).Button, obj4);
        }
        cResult[13] = tmp5.cancel;
        cResult[14] = tmp20;
        let tmp19 = tmp20;
      } else {
        tmp19 = cResult[14];
      }
      if (cResult[15] === tmp4.content) {
        if (cResult[16] === tmp12) {
          if (cResult[17] === tmp16) {
            if (cResult[18] === tmp19) {
              let tmp22 = cResult[19];
            }
            if (cResult[20] === tmp9) {
              if (cResult[21] === tmp22) {
                let tmp26 = cResult[22];
              }
              return tmp26;
            }
            const obj5 = { header: tmp9, children: tmp22 };
            const tmp28 = closure_4(onConfirm(6892).ActionSheet, obj5);
            cResult[20] = tmp9;
            cResult[21] = tmp22;
            cResult[22] = tmp28;
            tmp26 = tmp28;
          }
        }
      }
      const obj6 = { style: tmp4.content, children: null };
      const items = [tmp12, tmp16, tmp19];
      obj6.children = items;
      const tmp25 = closure_5(View, obj6);
      cResult[15] = tmp4.content;
      cResult[16] = tmp12;
      cResult[17] = tmp16;
      cResult[18] = tmp19;
      cResult[19] = tmp25;
      tmp22 = tmp25;
    }
    const obj7 = { variant: "primary", text: tmp5.action, onPress: tmp15 };
    const tmp18 = closure_4(onConfirm(5376).Button, obj7);
    cResult[10] = tmp5.action;
    cResult[11] = tmp15;
    cResult[12] = tmp18;
    tmp16 = tmp18;
  }
  const obj = onConfirm(576);
  const conjurePublishBlockedCopy = onConfirm(16967).getConjurePublishBlockedCopy(reason, message);
  cResult[0] = message;
  cResult[1] = reason;
  cResult[2] = conjurePublishBlockedCopy;
  tmp5 = conjurePublishBlockedCopy;
  const tmpResult = onConfirm(16967);
}) : (function ConjurePublishBlockedSheet(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  ({ reason, message } = onConfirm);
  const tmp = closure_7();
  const tmp2 = onConfirm;
  const conjurePublishBlockedCopy = onConfirm(16967).getConjurePublishBlockedCopy(reason, message);
  const obj2 = { header: closure_4(onConfirm(6835).BottomSheetTitleHeader, { title: conjurePublishBlockedCopy.title }), children: null };
  const obj4 = { style: tmp.content, children: null };
  const items = [
    closure_4(onConfirm(5087).Text, { variant: "text-md/normal", color: "text-muted", children: conjurePublishBlockedCopy.body }),
    closure_4(onConfirm(5376).Button, {
      variant: "primary",
      text: conjurePublishBlockedCopy.action,
      onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishBlockedSheet);
        if (onConfirm != null) {
          onConfirm();
        }
      }
    }),

  ];
  let tmp5Result = null;
  if (null != conjurePublishBlockedCopy.cancel) {
    function close() {
      ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishBlockedSheet);
    }
    const obj7 = { variant: "secondary", text: conjurePublishBlockedCopy.cancel, onPress: close };
    tmp5Result = closure_4(tmp2(5376).Button, obj7);
  }
  items[2] = tmp5Result;
  obj4.children = items;
  obj2.children = closure_5(View, obj4);
  return closure_4(onConfirm(6892).ActionSheet, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishBlockedSheet.tsx");

export default function showConjurePublishBlockedSheet(reason, message, onConfirm) {
  const obj2 = { key: ConjurePublishBlockedSheet, content: React4(closure_8, { reason, message, onConfirm }) };
  ActionSheetActionCreators.showActionSheet(obj2);
};
export const CONJURE_PUBLISH_BLOCKED_SHEET_KEY = "ConjurePublishBlockedSheet";