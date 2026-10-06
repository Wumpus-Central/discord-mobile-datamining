// === Module 9894: useBurstToggleCoachmark ===

// Module 9894 (useBurstToggleCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import SuperReactionIcon2 from "SuperReactionIcon" /* 8909 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let size;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_9 = dismissible_content.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE;
let obj = { upsellImageContainer: size };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center" };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const SuperReactionIcon = SuperReactionIcon2.SuperReactionIcon;
    const tmp8 = <SuperReactionIcon color={nativeDefault.colors.WHITE} size="md" />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.upsellImageContainer) {
    const tmp12 = <View style={tmp4.upsellImageContainer}>{first}</View>;
    cResult[1] = tmp4.upsellImageContainer;
    cResult[2] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (() => {
  ({ color: nativeDefault.colors.WHITE, size: "md" });
  const SuperReactionIcon = SuperReactionIcon2.SuperReactionIcon;
  return <View style={closure_10().upsellImageContainer}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let currentUser;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class C {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp4, C);
  if (cResult[2] !== stateFromStores) {
    let items2;
    const tmpResult4 = require("PremiumUtils");
    if (tmpResult4.isPremium(stateFromStores)) {
      const items1 = [closure_9];
      class C {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
    } else {
      items2 = [];
    }
    class C {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[3] = items2;
    tmp8 = items2;
  } else {
    tmp8 = cResult[3];
  }
  const tmpResult5 = require("useSelectedDismissibleContent");
  const tmp10 = _slicedToArray(tmpResult5.useSelectedDismissibleContent(tmp8), 2);
  _require = tmp12;
  const first = tmp10[0];
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t.nyYohm);
    class C {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[4] = stringResult;
    tmp13 = stringResult;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp10[1]) {
    const fn = function f() {
      closure_0(ContentDismissActionType.UNKNOWN);
    };
    cResult[5] = tmp10[1];
    class C {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[6] = fn;
    tmp15 = fn;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return <closure_1_11 />;
      }
    }
    const string = tmp(1126).intl.string;
    class C {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[7] = S;
    cResult[8] = tmp18;
    tmp17 = tmp18;
  } else {
    class S {
      constructor() {
        return <closure_1_11 />;
      }
    }
    tmp17 = cResult[8];
  }
  if (cResult[9] === tmp15) {
    class S {
      constructor() {
        return <closure_1_11 />;
      }
    }
    require("useCoachmark");
    class C {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    return tmp10[1];
  }
  const obj2 = { description: tmp13, onDismiss: tmp15, position: "bottom", renderImgComponent: S, title: tmp17, visible: first === closure_9 };
  cResult[9] = tmp15;
  cResult[10] = first === closure_9;
  cResult[11] = obj2;
}) : ((arg0) => {
  let currentUser;
  let first;
  let items2;
  let obj = first(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = first(4534);
  if (obj2.isPremium(stateFromStores)) {
    const items1 = [closure_9];
    items2 = items1;
  } else {
    items2 = [];
  }
  const tmpResult = first(6901);
  const tmp5 = _slicedToArray(tmpResult.useSelectedDismissibleContent(items2), 2);
  first = tmp5[0];
  let closure_1 = tmp7;
  const items3 = [first, tmp5[1]];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      description: intl.string(intl3.t.nyYohm),
      onDismiss() {
        closure_1_1(constants.UNKNOWN);
      },
      position: "bottom",
      renderImgComponent() {
        return closure_1_8(closure_1_11, {});
      },
      title: intl2.string(intl3.t.ORK94p),
      visible: first === closure_9
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items3);
  const tmpResult2 = first(9895);
  const coachmark = tmpResult2.useCoachmark(arg0, memo);
  return tmp5[1];
});
size = size_mod;
const result = size.fileFinishedImporting("modules/reactions/native/useBurstToggleCoachmark.tsx");

export default tmp2;