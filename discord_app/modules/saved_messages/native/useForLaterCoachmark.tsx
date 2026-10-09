// === Module 16769: useForLaterCoachmark ===

// Module 16769 (useForLaterCoachmark)
import util from "util" /* 1126 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_6 = fn(2049).DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useForLaterCoachmark(arg0) {
  const cResult = require("c").c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_6];
    const obj2 = { bypassAutoDismiss: true };
    cResult[0] = items;
    cResult[1] = obj2;
    tmp4 = items;
    tmp5 = obj2;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = require("c");
  const tmp7 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(tmp4, tmp5), 2);
  _require = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.qPbFK2);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.b2yxYL);
    cResult[2] = stringResult;
    cResult[3] = stringResult1;
    let tmp10 = stringResult1;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp7[1]) {
    const fn = function v() {
      closure_0(ContentDismissActionType.USER_DISMISS);
    };
    cResult[4] = tmp8;
    cResult[5] = fn;
    let tmp14 = fn;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        return closure_1_5(closure_0(closure_1_1[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    }
    cResult[6] = D;
  } else {
    class D {
      constructor() {
        return closure_1_5(closure_0(closure_1_1[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    }
  }
  if (cResult[7] === tmp7[0] === closure_6) {
    class D {
      constructor() {
        return closure_1_5(closure_0(closure_1_1[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    }
    const coachmark = tmp(9413).useCoachmark(arg0, obj3);
    return tmp8;
  }
  obj3 = { title: tmp9, description: tmp10, position: "bottom", visible: tmp7[0] === closure_6, onDismiss: tmp14, renderImgComponent: D };
  cResult[7] = tmp7[0] === closure_6;
  cResult[8] = tmp14;
  cResult[9] = obj3;
  const tmpResult = require("useSelectedDismissibleContent");
}) : (function useForLaterCoachmark(arg0) {
  const items = [closure_6];
  const tmp = _slicedToArray(first(7093).useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  first = tmp[0];
  dependencyMap = tmp3;
  const items1 = [tmp[1], first];
  const memo = noop.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.qPbFK2);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.b2yxYL);
    obj.visible = first === closure_6;
    obj.onDismiss = function onDismiss() {
      dependencyMap(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_5(first(12629).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
    };
    return obj;
  }, items1);
  let obj = first(7093);
  const coachmark = first(9413).useCoachmark(arg0, memo);
  return tmp[1];
});