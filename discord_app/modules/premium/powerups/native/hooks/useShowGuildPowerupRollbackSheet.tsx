// === Module 12168: useShowGuildPowerupRollbackSheet ===

// Module 12168 (useShowGuildPowerupRollbackSheet)
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import openGuildPowerupRollbackSheetDefault from "openGuildPowerupRollbackSheet" /* 12171 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let closure_2;
  let first;
  let modalConfig;
  let ref;
  let shouldShow;
  let obj = modalConfig(576);
  const cResult = obj.c(9);
  ({ shouldShow, modalConfig } = first(12169)(arg0, arg1));
  first(12169)(arg0, arg1);
  if (cResult[0] === modalConfig) {
    if (cResult[1] === shouldShow) {
      let tmp6;
      if (cResult[2] === (undefined !== arg2 && arg2)) {
        tmp6 = cResult[3];
      }
      const tmpResult = modalConfig(6891);
      const tmp11 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp6), 2);
      first = tmp11[0];
      dependencyMap = tmp13;
      _slicedToArray = react.useRef(false);
      if (cResult[4] === tmp11[1]) {
        if (cResult[5] === modalConfig) {
          let tmp14;
          let tmp15;
          if (cResult[6] === first) {
            tmp14 = cResult[7];
            tmp15 = cResult[8];
          }
          const effect = react.useEffect(tmp14, tmp15);
        }
      }
      let fn = function f() {
        let bodies;
        let fn;
        const current = ref.current || null == modalConfig || first !== modalConfig.dismissibleContent;
        if (!current) {
          ref.current = true;
          let obj = {
            header: null,
            body: bodies.join("\n\n"),
            ctaText: modalConfig.primaryButtonText,
            onCtaPress: fn,
            onDismiss() {
                closure_1_2(constants.USER_DISMISS);
              }
          };
          ({ header: obj.header, bodies } = modalConfig);
          fn = undefined;
          const tmp8 = openGuildPowerupRollbackSheetDefault;
          if (null != modalConfig.primaryButtonText) {
            fn = () => {
              closure_1_2(constants.TAKE_ACTION);
              const obj = first(closure_2[8]);
              obj.hideActionSheet(modalConfig(closure_2[7]).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
            };
          }
          tmp8(obj);
        }
      };
      const items = [first, modalConfig, tmp11[1]];
      cResult[4] = tmp11[1];
      cResult[5] = modalConfig;
      cResult[6] = first;
      cResult[7] = fn;
      cResult[8] = items;
      tmp15 = items;
      tmp14 = fn;
    }
  }
  let tmp7 = shouldShow;
  if (tmp7) {
    let tmp8 = null;
    tmp7 = null != modalConfig;
  }
  if (tmp7) {
    tmp7 = !tmp4;
  }
  const items1 = [];
  if (tmp7) {
    items1.push(modalConfig.dismissibleContent);
  }
  cResult[0] = modalConfig;
  cResult[1] = shouldShow;
  cResult[2] = undefined !== arg2 && arg2;
  cResult[3] = items1;
  tmp6 = items1;
}) : ((arg0, arg1) => {
  let closure_2;
  let modalConfig;
  let ref;
  let shouldShow;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  modalConfig = undefined;
  let first;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  ({ shouldShow, modalConfig } = first(12169)(arg0, arg1));
  first(12169)(arg0, arg1);
  if (shouldShow) {
    shouldShow = null != modalConfig;
  }
  if (shouldShow) {
    shouldShow = !flag;
  }
  const items = [];
  if (shouldShow) {
    items.push(modalConfig.dismissibleContent);
  }
  let obj = modalConfig(6891);
  const tmp5 = _slicedToArray(obj.useSelectedDismissibleContent(items), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  _slicedToArray = react.useRef(false);
  const items1 = [first, modalConfig, tmp5[1]];
  const effect = react.useEffect(() => {
    let bodies;
    let fn;
    const current = ref.current || null == modalConfig || first !== modalConfig.dismissibleContent;
    if (!current) {
      ref.current = true;
      let obj = {
        header: null,
        body: bodies.join("\n\n"),
        ctaText: modalConfig.primaryButtonText,
        onCtaPress: fn,
        onDismiss() {
            closure_1_2(constants.USER_DISMISS);
          }
      };
      ({ header: obj.header, bodies } = modalConfig);
      fn = undefined;
      const tmp8 = openGuildPowerupRollbackSheetDefault;
      if (null != modalConfig.primaryButtonText) {
        fn = () => {
          closure_1_2(constants.TAKE_ACTION);
          const obj = first(closure_2[8]);
          obj.hideActionSheet(modalConfig(closure_2[7]).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
        };
      }
      tmp8(obj);
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx");

export default tmp2;