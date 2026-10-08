// === Module 12829: ConversationCoachmark ===

// Module 12829 (ConversationCoachmark)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsx = fn(21).jsx;
const TOPICAL_NAVIGATION_HEADER_COACHMARK = fn(2048).DismissibleContent.TOPICAL_NAVIGATION_HEADER_COACHMARK;
let items = [TOPICAL_NAVIGATION_HEADER_COACHMARK];
const createStyles = fn(5090);
let obj2 = { badge: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round }, coachmarkWrapper: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj2.coachmarkWrapper = { marginRight: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function NewBadge() {
  const cResult = c.c(3);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/bold", color: "text-default", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.c2GSIl);
    const tmp7 = jsx(Text_Text.Text, { variant: "text-sm/bold", color: "text-default", children: null });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.badge) {
    const obj3 = { style: tmp4.badge, children: first };
    const tmp11 = <View style={tmp4.badge}>{first}</View>;
    cResult[1] = tmp4.badge;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function NewBadge() {
  const obj = { style: closure_9().badge, children: null };
  const obj2 = { variant: "text-sm/bold", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.c2GSIl);
  obj.children = jsx(Text_Text.Text, { variant: "text-sm/bold", color: "text-default", children: null });
  return <View style={closure_9().badge}>{null}</View>;
});
ReactCompilerGating = fn(558);
let obj4 = { marginRight: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationCoachmark.tsx");

export const ConversationCoachmark = ReactCompilerGating.isReactCompilerEnabled() ? (function ConversationCoachmark(children) {
  const cResult = require("c").c(18);
  children = children.children;
  closure_9();
  const ref = noop.useRef(null);
  const obj = require("c");
  const tmp6 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items), 2);
  _require = tmp7;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.UcQjDe);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.QeJIbA);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp8 = stringResult;
    tmp9 = stringResult1;
  } else {
    [tmp8, tmp9] = cResult;
  }
  if (cResult[2] !== tmp6[1]) {
    const fn = function x() {
      closure_0(ContentDismissActionType.USER_DISMISS);
    };
    cResult[2] = tmp7;
    cResult[3] = fn;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return closure_1_6(closure_1_10, {});
      }
    }
    cResult[4] = E;
  } else {
    class E {
      constructor() {
        return closure_1_6(closure_1_10, {});
      }
    }
  }
  if (cResult[5] === tmp6[0] === TOPICAL_NAVIGATION_HEADER_COACHMARK) {
    class E {
      constructor() {
        return closure_1_6(closure_1_10, {});
      }
    }
    const coachmark = tmp(9375).useCoachmark(ref, obj5);
    if (cResult[8] !== tmp7) {
      class N {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      cResult[8] = tmp7;
      cResult[9] = N;
    } else {
      class N {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    if (!children.isLast) {
      class N {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    if (cResult[10] === children) {
      class N {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      if (cResult[13] !== tmp19) {
        class N {
          constructor() {
            tmp = closure_0(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const obj3 = { ref, children: tmp19 };
        const tmp23 = <View ref={ref}>{tmp19}</View>;
        cResult[13] = tmp19;
        cResult[14] = tmp23;
      } else {
        class N {
          constructor() {
            tmp = closure_0(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[15] === tmp21) {
        class N {
          constructor() {
            tmp = closure_0(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        return tmp24;
      }
      const obj4 = { style: tmp18, children: tmp21 };
      const tmp27 = <View style={tmp18}>{tmp21}</View>;
      cResult[15] = tmp21;
      cResult[16] = tmp18;
      cResult[17] = tmp27;
      tmp24 = tmp27;
    }
    const childrenResult = children(N);
    cResult[10] = children;
    cResult[11] = N;
    cResult[12] = childrenResult;
    const tmpResult = tmp(9375);
  }
  obj5 = { title: tmp8, description: tmp9, position: "bottom", visible: tmp6[0] === TOPICAL_NAVIGATION_HEADER_COACHMARK, onDismiss: tmp13, renderImgComponent: E };
  cResult[5] = tmp6[0] === TOPICAL_NAVIGATION_HEADER_COACHMARK;
  cResult[6] = tmp13;
  cResult[7] = obj5;
  const obj2 = require("useSelectedDismissibleContent");
}) : (function ConversationCoachmark(arg0) {
  let first;
  ({ children, isLast } = arg0);
  const ref = noop.useRef(null);
  const tmp = closure_9();
  const tmp3 = _slicedToArray(first(7090).useSelectedDismissibleContent(items), 2);
  first = tmp3[0];
  dependencyMap = tmp5;
  items = [tmp3[1], first];
  const memo = noop.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.UcQjDe);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.QeJIbA);
    obj.visible = first === TOPICAL_NAVIGATION_HEADER_COACHMARK;
    obj.onDismiss = function onDismiss() {
      closure_1_1(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_6(closure_1_10, {});
    };
    return obj;
  }, items);
  let obj = first(7090);
  const coachmark = first(9375).useCoachmark(ref, memo);
  const items1 = [tmp3[1]];
  let coachmarkWrapper;
  const callback = noop.useCallback(() => {
    closure_1(ContentDismissActionType.USER_DISMISS);
  }, items1);
  if (!isLast) {
    coachmarkWrapper = tmp.coachmarkWrapper;
  }
  const obj3 = { style: coachmarkWrapper, children: null };
  const obj2 = first(9375);
  obj3.children = <View ref={ref}>{children(callback)}</View>;
  return <View style={coachmarkWrapper}>{null}</View>;
});