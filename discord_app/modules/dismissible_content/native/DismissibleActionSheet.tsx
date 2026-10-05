// === Module 10355: DismissibleActionSheet ===

// Module 10355 (DismissibleActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((actionSheetKey) => {
  let tmp3;
  _require = actionSheetKey;
  let obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] !== actionSheetKey) {
    const fn = function o() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      let obj = {
        markAsDismissed(arg0) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(actionSheetKey.actionSheetKey);
          actionSheetKey.markAsDismissed(arg0);
        }
      };
      ActionSheetActionCreatorsDefault;
      const importerResult = actionSheetKey.importer();
      actionSheetKey = actionSheetKey.actionSheetKey;
      const merged = Object.assign(actionSheetKey);
      openLazy(importerResult, actionSheetKey, obj);
    };
    cResult[0] = actionSheetKey;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  useMountEffectDefault(tmp3);
  if (cResult[2] === actionSheetKey.actionSheetKey) {
    let tmp5;
    let tmp6;
    if (cResult[3] === actionSheetKey.hideSheetOnUnmount) {
      tmp5 = cResult[4];
      tmp6 = cResult[5];
    }
    const effect = react.useEffect(tmp5, tmp6);
    return null;
  }
  const fn2 = function h() {
    let hideSheetOnUnmount;
    return () => {
      const tmp2 = null != hideSheetOnUnmount.hideSheetOnUnmount && hideSheetOnUnmount.hideSheetOnUnmount;
      if (tmp2) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(hideSheetOnUnmount.actionSheetKey);
      }
    };
  };
  const items = [, ];
  ({ actionSheetKey: arr[0], hideSheetOnUnmount: arr[1] } = actionSheetKey);
  cResult[2] = actionSheetKey.actionSheetKey;
  cResult[3] = actionSheetKey.hideSheetOnUnmount;
  cResult[4] = fn2;
  cResult[5] = items;
  tmp6 = items;
  tmp5 = fn2;
}) : ((arg0) => {
  let closure_0 = arg0;
  const tmp = useMountEffectDefault(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      markAsDismissed(arg0) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(closure_1_0.actionSheetKey);
        closure_1_0.markAsDismissed(arg0);
      }
    };
    ActionSheetActionCreatorsDefault;
    const actionSheetKey = closure_0.actionSheetKey;
    const importerResult = closure_0.importer();
    const merged = Object.assign(closure_0);
    openLazy(importerResult, actionSheetKey, obj);
  });
  const items = [, ];
  ({ actionSheetKey: arr[0], hideSheetOnUnmount: arr[1] } = arg0);
  const effect = react.useEffect(() => {
    let hideSheetOnUnmount;
    return () => {
      const tmp2 = null != hideSheetOnUnmount.hideSheetOnUnmount && hideSheetOnUnmount.hideSheetOnUnmount;
      if (tmp2) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(hideSheetOnUnmount.actionSheetKey);
      }
    };
  }, items);
  return null;
});
const result = size.fileFinishedImporting("modules/dismissible_content/native/DismissibleActionSheet.tsx");

export const DismissibleActionSheet = tmp2;