// === Module 10856: ConjureAppInstallSheet ===

// Module 10856 (ConjureAppInstallSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["sheetKey", "dismissOAuthModal"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureAppInstallSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppInstallSheet(sheetKey) {
  const cResult = require("c").c(19);
  if (cResult[0] !== sheetKey) {
    sheetKey = sheetKey.sheetKey;
    importDefault = sheetKey;
    const dismissOAuthModal = sheetKey.dismissOAuthModal;
    _require = dismissOAuthModal;
    const tmp8 = _objectWithoutProperties(sheetKey, ref);
    cResult[0] = sheetKey;
    cResult[1] = dismissOAuthModal;
    cResult[2] = tmp8;
    cResult[3] = sheetKey;
    let tmp4 = tmp8;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
    importDefault = cResult[3];
  }
  context = noop.useContext(require("ActionSheetContext"));
  ref = noop.useRef(false);
  if (cResult[4] !== tmp3) {
    const fn = function v() {
      if (!ref.current) {
        tmp.current = true;
        if (closure_0 != null) {
          tmp2();
        }
      }
    };
    cResult[4] = tmp3;
    cResult[5] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[5];
  }
  _objectWithoutProperties = tmp11;
  if (cResult[6] === context) {
    if (cResult[7] === tmp11) {
      let tmp12 = cResult[8];
      let tmp13 = cResult[9];
    }
    const effect = noop.useEffect(tmp12, tmp13);
    if (cResult[10] !== tmp11) {
      const fn2 = function j() {
        return closure_4;
      };
      const items = [tmp11];
      cResult[10] = tmp11;
      class M {
        constructor() {
          tmp = closure_4();
          obj = closure_1(closure_2[6]);
          hideActionSheetResult = obj.hideActionSheet(closure_1);
          return;
        }
      }
      cResult[11] = fn2;
      cResult[12] = items;
      let tmp16 = items;
      let tmp15 = fn2;
    } else {
      tmp15 = cResult[11];
      tmp16 = cResult[12];
    }
    const effect1 = noop.useEffect(tmp15, tmp16);
    if (cResult[13] === tmp11) {
      if (cResult[14] === tmp5) {
        let tmp18 = cResult[15];
      }
      if (cResult[16] === tmp18) {
        if (cResult[17] === tmp4) {
          let tmp19 = cResult[18];
        }
        return tmp19;
      }
      const obj3 = {};
      class M {
        constructor() {
          tmp = closure_4();
          obj = closure_1(closure_2[6]);
          hideActionSheetResult = obj.hideActionSheet(closure_1);
          return;
        }
      }
      const merged = Object.assign(tmp4);
      obj3.dismissOAuthModal = tmp18;
      const tmp24 = jsx(tmp9(tmp[7]), {});
      cResult[16] = tmp18;
      cResult[17] = tmp4;
      cResult[18] = tmp24;
      tmp19 = tmp24;
      const tmp9Result = tmp9(tmp[7]);
    }
    class M {
      constructor() {
        tmp = closure_4();
        obj = closure_1(closure_2[6]);
        hideActionSheetResult = obj.hideActionSheet(closure_1);
        return;
      }
    }
    cResult[13] = tmp11;
    cResult[14] = tmp5;
    cResult[15] = M;
    tmp18 = M;
  }
  class C {
    constructor() {
      obj = closure_2;
      transitionState = undefined;
      if (closure_2 != null) {
        transitionState = obj.transitionState;
      }
      if ("exiting" === transitionState) {
        tmp2 = closure_4;
        tmp3 = closure_4();
        onLeaveResult = obj.onLeave();
      }
      return;
    }
  }
  const items1 = [context, tmp11];
  cResult[6] = context;
  cResult[7] = tmp11;
  cResult[8] = C;
  cResult[9] = items1;
  tmp13 = items1;
  tmp12 = C;
  const obj = require("c");
  tmp9 = importDefault;
}) : (function ConjureAppInstallSheet(sheetKey) {
  sheetKey = sheetKey.sheetKey;
  const dismissOAuthModal = sheetKey.dismissOAuthModal;
  const merged = Object.assign(sheetKey, Object.assign({ sheetKey: 0, dismissOAuthModal: 0 }));
  let context;
  context = noop.useContext(dismissOAuthModal(context[5]));
  noop.useRef(false);
  const items = [dismissOAuthModal];
  const callback = noop.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      if (dismissOAuthModal != null) {
        tmp2();
      }
    }
  }, items);
  const items1 = [context, callback];
  const effect = noop.useEffect(() => {
    let transitionState;
    if (context != null) {
      transitionState = context.transitionState;
    }
    if ("exiting" === transitionState) {
      callback();
      context.onLeave();
    }
  }, items1);
  const items2 = [callback];
  const effect1 = noop.useEffect(() => callback, items2);
  const items3 = [callback, sheetKey];
  const callback1 = noop.useCallback(() => {
    callback();
    ActionSheetActionCreatorsDefault.hideActionSheet(sheetKey);
  }, items3);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.dismissOAuthModal = callback1;
  return jsx(dismissOAuthModal(context[7]), {});
});