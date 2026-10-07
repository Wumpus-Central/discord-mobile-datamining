// === Module 9894: useBurstToggleCoachmark ===

// Module 9894 (useBurstToggleCoachmark)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import SuperReactionIcon from "SuperReactionIcon" /* 8909 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_9 = fn(2036).DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE;
const createStyles = fn(4896);
let obj2 = { upsellImageContainer: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center" };
obj2.upsellImageContainer = size;
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { color: nativeDefault.colors.WHITE, size: "md" };
    const tmp8 = jsx(SuperReactionIcon.SuperReactionIcon, { color: nativeDefault.colors.WHITE, size: "md" });
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.upsellImageContainer) {
    const obj3 = { style: tmp4.upsellImageContainer, children: first };
    const tmp12 = <View style={tmp4.upsellImageContainer}>{first}</View>;
    cResult[1] = tmp4.upsellImageContainer;
    cResult[2] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (() => {
  const obj = { style: closure_10().upsellImageContainer, children: jsx(SuperReactionIcon.SuperReactionIcon, { color: nativeDefault.colors.WHITE, size: "md" }) };
  return <View style={closure_10().upsellImageContainer}>{jsx(SuperReactionIcon.SuperReactionIcon, { color: nativeDefault.colors.WHITE, size: "md" })}</View>;
});
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/useBurstToggleCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class C {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, C);
  if (cResult[2] !== stateFromStores) {
    if (tmpResult4.isPremium(stateFromStores)) {
      const items1 = [closure_9];
      class C {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
    } else {
      const items2 = [];
    }
    class C {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[3] = items2;
    tmpResult4 = tmp(4534);
  } else {
    class C {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    const tmp11 = _slicedToArray(tmp(6901).useSelectedDismissibleContent(cResult[3]), 2);
    _require = tmp12;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.nyYohm);
      class C {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      cResult[4] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] !== tmp11[1]) {
      const fn = function f() {
        closure_0(ContentDismissActionType.UNKNOWN);
      };
      cResult[5] = tmp12;
      class C {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      cResult[6] = fn;
      let tmp15 = fn;
    } else {
      tmp15 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          return closure_1_8(closure_1_11, {});
        }
      }
      const string = tmp(1126).intl.string;
      class C {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      cResult[7] = S;
      cResult[8] = tmp18;
      let tmp17 = tmp18;
    } else {
      class S {
        constructor() {
          return closure_1_8(closure_1_11, {});
        }
      }
      tmp17 = cResult[8];
    }
    if (cResult[9] === tmp15) {
      class S {
        constructor() {
          return closure_1_8(closure_1_11, {});
        }
      }
      tmp(9895);
      class C {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
      return tmp12;
    }
    const obj2 = { description: tmp13, onDismiss: tmp15, position: "bottom", renderImgComponent: S, title: tmp17, visible: tmp11[0] === closure_9 };
    cResult[9] = tmp15;
    cResult[10] = tmp11[0] === closure_9;
    cResult[11] = obj2;
    const tmpResult5 = tmp(6901);
  }
  const tmpResult = require("initialize");
}) : ((arg0) => {
  const items = [UserStore];
  const stateFromStores = first(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = first(504);
  if (obj2.isPremium(stateFromStores)) {
    const items1 = [closure_9];
    let items2 = items1;
  } else {
    items2 = [];
  }
  obj2 = first(4534);
  const tmp5 = _slicedToArray(first(6901).useSelectedDismissibleContent(items2), 2);
  first = tmp5[0];
  closure_1 = tmp7;
  const items3 = [first, tmp5[1]];
  const memo = noop.useMemo(() => {
    const obj = { description: null, onDismiss: null, position: "bottom", renderImgComponent: null, title: null, visible: null };
    const intl = util.intl;
    obj.description = intl.string(util.t.nyYohm);
    obj.onDismiss = function onDismiss() {
      closure_1_1(constants.UNKNOWN);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_8(closure_1_11, {});
    };
    const intl2 = util.intl;
    obj.title = intl2.string(util.t.ORK94p);
    obj.visible = first === closure_9;
    return obj;
  }, items3);
  const tmpResult = first(6901);
  const coachmark = first(9895).useCoachmark(arg0, memo);
  return tmp5[1];
});