// === Module 16644: useForLaterCoachmark ===

// Module 16644 (useForLaterCoachmark)
import util from "util" /* 1126 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_6 = fn(2048).DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useForLaterCoachmark(arg0) {
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_6];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  const obj = require("c");
  const tmp6 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(first, undefined, true), 2);
  _require = tmp7;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.qPbFK2);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.b2yxYL);
    cResult[1] = stringResult;
    cResult[2] = stringResult1;
    let tmp9 = stringResult1;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp6[1]) {
    const fn = function p() {
      closure_0(ContentDismissActionType.USER_DISMISS);
    };
    cResult[3] = tmp7;
    cResult[4] = fn;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_1_5(closure_0(closure_1_1[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    }
    cResult[5] = I;
  } else {
    class I {
      constructor() {
        return closure_1_5(closure_0(closure_1_1[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    }
  }
  if (cResult[6] === tmp6[0] === closure_6) {
    class I {
      constructor() {
        return closure_1_5(closure_0(closure_1_1[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    }
    const coachmark = tmp(9375).useCoachmark(arg0, obj2);
    return tmp7;
  }
  obj2 = { title: tmp8, description: tmp9, position: "bottom", visible: tmp6[0] === closure_6, onDismiss: tmp13, renderImgComponent: I };
  cResult[6] = tmp6[0] === closure_6;
  cResult[7] = tmp13;
  cResult[8] = obj2;
  const tmpResult = require("useSelectedDismissibleContent");
}) : (function useForLaterCoachmark(arg0) {
  const items = [closure_6];
  const tmp = _slicedToArray(first(7090).useSelectedDismissibleContent(items, undefined, true), 2);
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
      return closure_1_5(first(12686).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
    };
    return obj;
  }, items1);
  let obj = first(7090);
  const coachmark = first(9375).useCoachmark(arg0, memo);
  return tmp[1];
});