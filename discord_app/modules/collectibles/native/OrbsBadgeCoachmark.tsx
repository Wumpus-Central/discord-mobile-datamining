// === Module 10532: OrbsBadgeCoachmark ===

// Module 10532 (OrbsBadgeCoachmark)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import FastImageDefault from "FastImage" /* 6163 */;
import useCoachmark from "useCoachmark" /* 9413 */;
import _modDef10533 from "module_10533" /* 10533 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["badgeRef"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_8 = createStyles.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 80, height: 80 }, coachmarkDescription: { marginBottom: -10 } });
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsBadgeCoachmarkImg() {
  const cResult = c.c(6);
  const tmp3 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef10533 };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3.coachmarkImage) {
    const obj3 = { source: first, style: tmp3.coachmarkImage };
    const tmp9 = jsx(FastImageDefault, { source: first, style: tmp3.coachmarkImage });
    cResult[1] = tmp3.coachmarkImage;
    cResult[2] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp3.coachmarkImageContainer) {
    if (cResult[4] === tmp6) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <View style={tmp3.coachmarkImageContainer}>{tmp6}</View>;
  cResult[3] = tmp3.coachmarkImageContainer;
  cResult[4] = tmp6;
  cResult[5] = tmp11;
  tmp10 = tmp11;
  const obj4 = { style: tmp3.coachmarkImageContainer, children: tmp6 };
}) : (function OrbsBadgeCoachmarkImg() {
  const tmp = closure_8();
  const obj = { style: tmp.coachmarkImageContainer, children: null };
  const obj2 = { source: null, style: null };
  const obj3 = { uri: _modDef10533 };
  obj2.source = obj3;
  obj2.style = tmp.coachmarkImage;
  obj.children = jsx(FastImageDefault, { source: null, style: null });
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
});
fn(558);
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/OrbsBadgeCoachmark.tsx");

export default function OrbsBadgeCoachmark(badgeRef) {
  if (closure_10) {
    let obj3 = require;
    let coachmark = dependencyMap;
    const cResult = c.c(3);
    if (cResult[0] !== badgeRef) {
      badgeRef = badgeRef.badgeRef;
      const tmp13 = _objectWithoutProperties(badgeRef, closure_3);
      cResult[0] = badgeRef;
      cResult[1] = badgeRef;
      cResult[2] = tmp13;
      let tmp10 = tmp13;
      let tmp9 = badgeRef;
    } else {
      tmp9 = cResult[1];
      tmp10 = cResult[2];
    }
    obj3 = obj3(9413);
    coachmark = obj3.useCoachmark(tmp9, tmp10);
  } else {
    const merged = Object.assign(badgeRef, Object.assign({ badgeRef: 0 }));
    const coachmark1 = useCoachmark.useCoachmark(badgeRef.badgeRef, merged);
    return null;
  }
};
export const useOrbsBadgeCoachmark = ReactCompilerGating.isReactCompilerEnabled() ? (function useOrbsBadgeCoachmark(disabled) {
  const cResult = c.c(11);
  disabled = disabled.disabled;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["4ivm+P"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.coachmarkDescription) {
    const obj2 = { style: tmp4.coachmarkDescription };
    const tmp10 = <View style={tmp4.coachmarkDescription} />;
    cResult[1] = tmp4.coachmarkDescription;
    cResult[2] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        obj = closure_1_0(closure_1_2[10]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            setParamsResult = rootNavigationRef.setParams({ showOrbsBadgeCoachmark: "r" });
            return;
          }
        }
        return false;
      }
    }
    const fn = function p() {
      return <closure_1_9 />;
    };
    cResult[3] = C;
    cResult[4] = fn;
    let tmp13 = fn;
  } else {
    class C {
      constructor() {
        obj = closure_1_0(closure_1_2[10]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            setParamsResult = rootNavigationRef.setParams({ showOrbsBadgeCoachmark: "r" });
            return;
          }
        }
        return false;
      }
    }
    tmp13 = cResult[4];
  }
  if (cResult[5] === tmp7) {
    class C {
      constructor() {
        obj = closure_1_0(closure_1_2[10]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            setParamsResult = rootNavigationRef.setParams({ showOrbsBadgeCoachmark: "r" });
            return;
          }
        }
        return false;
      }
    }
    if (cResult[8] === disabled) {
      class C {
        constructor() {
          obj = closure_1_0(closure_1_2[10]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              setParamsResult = rootNavigationRef.setParams({ showOrbsBadgeCoachmark: "r" });
              return;
            }
          }
          return false;
        }
      }
      return tmp15;
    }
    let tmp16 = null;
    if (!disabled) {
      class C {
        constructor() {
          obj = closure_1_0(closure_1_2[10]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              setParamsResult = rootNavigationRef.setParams({ showOrbsBadgeCoachmark: "r" });
              return;
            }
          }
          return false;
        }
      }
      tmp17[0] = tmp14;
      tmp16 = tmp17;
    }
    cResult[8] = disabled;
    cResult[9] = tmp14;
    cResult[10] = tmp16;
    tmp15 = tmp16;
  }
  const obj3 = { title: first, description: tmp7, position: "bottom", visible: !disabled, onDismiss: C, renderImgComponent: tmp13 };
  cResult[5] = tmp7;
  cResult[6] = !disabled;
  cResult[7] = obj3;
}) : (function useOrbsBadgeCoachmark(disabled) {
  disabled = disabled.disabled;
  const tmp = closure_8();
  const coachmarkDescription = tmp;
  const items = [disabled, tmp.coachmarkDescription];
  let tmp3 = null;
  if (!disabled) {
    let obj = { props: tmp2 };
    tmp3 = obj;
  }
  return tmp3;
});