// === Module 10878: OrbsBadgeCoachmark ===

// Module 10878 (OrbsBadgeCoachmark)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import useCoachmark from "useCoachmark" /* 9882 */;
import _modDef10879 from "module_10879" /* 10879 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let disabled;

let metroImportDefault;
let metroRequire;
let closure_3 = ["badgeRef"];
({ View: metroRequire, Image: metroImportDefault } = react_native);
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 80, height: 80 }, coachmarkDescription: { marginBottom: -10 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp3 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef10879 };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3.coachmarkImage) {
    const tmp9 = <metroImportDefault source={first} style={tmp3.coachmarkImage} />;
    cResult[1] = tmp3.coachmarkImage;
    cResult[2] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp3.coachmarkImageContainer) {
    let tmp10;
    if (cResult[4] === tmp6) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <metroRequire style={tmp3.coachmarkImageContainer}>{tmp6}</metroRequire>;
  cResult[3] = tmp3.coachmarkImageContainer;
  cResult[4] = tmp6;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  const tmp = closure_9();
  ({ source: { uri: _modDef10879 }, style: tmp.coachmarkImage });
  ({ uri: _modDef10879 });
  return <metroRequire style={tmp.coachmarkImageContainer}>{null}</metroRequire>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((disabled) => {
  let first;
  let tmp12;
  let tmp13;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(11);
  disabled = disabled.disabled;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t["4ivm+P"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.coachmarkDescription) {
    const tmp10 = <metroRequire style={tmp4.coachmarkDescription} />;
    cResult[1] = tmp4.coachmarkDescription;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p() {
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          rootNavigationRef.setParams({ showOrbsBadgeCoachmark: "r" });
        }
      }
      return false;
    };
    const fn2 = function f() {
      return <closure_1_10 />;
    };
    cResult[3] = fn;
    cResult[4] = fn2;
    tmp13 = fn2;
    tmp12 = fn;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  if (cResult[5] === tmp7) {
    let tmp14;
    if (cResult[6] === !disabled) {
      tmp14 = cResult[7];
    }
    if (cResult[8] === disabled) {
      let tmp15;
      if (cResult[9] === tmp14) {
        tmp15 = cResult[10];
      }
      return tmp15;
    }
    let tmp16 = null;
    if (!disabled) {
      tmp16 = { props: tmp14 };
      const obj3 = { props: tmp14 };
    }
    cResult[8] = disabled;
    cResult[9] = tmp14;
    cResult[10] = tmp16;
    tmp15 = tmp16;
  }
  const obj4 = { title: first, description: tmp7, position: "bottom", visible: !disabled, onDismiss: tmp12, renderImgComponent: tmp13 };
  cResult[5] = tmp7;
  cResult[6] = !disabled;
  cResult[7] = obj4;
  tmp14 = obj4;
}) : ((disabled) => {
  disabled = disabled.disabled;
  const tmp = closure_9();
  const coachmarkDescription = tmp;
  const items = [disabled, tmp.coachmarkDescription];
  let tmp3 = null;
  if (!disabled) {
    let obj = { props: tmp2 };
    tmp3 = obj;
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled();
const result = size.fileFinishedImporting("modules/collectibles/native/OrbsBadgeCoachmark.tsx");

export default function OrbsBadgeCoachmark(badgeRef) {
  if (closure_11) {
    let tmp12;
    let tmp11;
    const obj3 = react2;
    const cResult = obj3.c(3);
    if (cResult[0] !== badgeRef) {
      const badgeRef2 = badgeRef.badgeRef;
      const tmp15 = _objectWithoutProperties(badgeRef, closure_3);
      cResult[0] = badgeRef;
      cResult[1] = badgeRef2;
      cResult[2] = tmp15;
      tmp12 = tmp15;
      tmp11 = badgeRef2;
    } else {
      tmp11 = cResult[1];
      tmp12 = cResult[2];
    }
    const tmp8Result = useCoachmark;
    const coachmark = tmp8Result.useCoachmark(tmp11, tmp12);
  } else {
    badgeRef = badgeRef.badgeRef;
    const merged = Object.assign(badgeRef, Object.assign({ badgeRef: 0 }));
    const obj2 = useCoachmark;
    const coachmark1 = obj2.useCoachmark(badgeRef, merged);
  }
  return null;
};
export const useOrbsBadgeCoachmark = tmp3;