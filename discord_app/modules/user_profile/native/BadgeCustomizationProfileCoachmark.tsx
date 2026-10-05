// === Module 16975: BadgeCustomizationProfileCoachmark ===

// Module 16975 (BadgeCustomizationProfileCoachmark)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import BadgesCoachmarkRive from "BadgesCoachmarkRive" /* 4605 */;
import YouBannerDecorations from "YouBannerDecorations" /* 16955 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const PX_64 = nativeDefault.space.PX_64;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_129_2;
  let rect2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = react2;
  const cResult = obj.c(7);
  const height = useWindowDimensionsDefault().height;
  let rect = useSafeAreaInsetsDefault();
  [rect2, closure_129_2] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (cResult[0] === arg0) {
    let tmp5;
    if (cResult[1] === arg1) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === arg0) {
      if (cResult[4] === arg1) {
        let tmp6;
        if (cResult[5] === height) {
          tmp6 = cResult[6];
        }
        const effect = react.useEffect(tmp5, tmp6);
        if (null == rect2) {
          return "bottom";
        } else {
          let str = "bottom";
          const tmpResult = YouBannerDecorations;
          if (height - tmpResult.getFloatingNavBottomMargin(rect.bottom) - PX_64 - rect2.bottom < rect2.top - rect.top) {
            str = "top";
          }
          return str;
        }
      }
    }
    const items = [arg0, arg1, height];
    cResult[3] = arg0;
    cResult[4] = arg1;
    cResult[5] = height;
    cResult[6] = items;
    tmp6 = items;
  }
  const fn = function l() {
    if (closure_1) {
      const current = ref.current;
      if (current != null) {
        current.measureInWindow((arg0, top, arg2, arg3) => {
          if (0 !== arg3) {
            const rect = { top, bottom: top + arg3 };
            closure_1_2(rect);
          }
        });
      }
    }
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((arg0, arg1) => {
  let closure_129_2;
  let rect2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const height = useWindowDimensionsDefault().height;
  let rect = useSafeAreaInsetsDefault();
  [rect2, closure_129_2] = react.useState(null);
  const items = [arg0, arg1, height];
  _slicedToArray(react.useState(null), 2);
  const effect = react.useEffect(() => {
    if (closure_1) {
      const current = ref.current;
      if (current != null) {
        current.measureInWindow((arg0, top, arg2, arg3) => {
          if (0 !== arg3) {
            const rect = { top, bottom: top + arg3 };
            closure_1_2(rect);
          }
        });
      }
    }
  }, items);
  if (null == rect2) {
    return "bottom";
  } else {
    let str = "bottom";
    const obj = YouBannerDecorations;
    if (height - obj.getFloatingNavBottomMargin(rect.bottom) - PX_64 - rect2.bottom < rect2.top - rect.top) {
      str = "top";
    }
    return str;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onTryItOut) => {
  let currentUser;
  let markAsDismissed;
  let obj4;
  let targetRef;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp9;
  let visible;
  let obj = markAsDismissed(576);
  const cResult = obj.c(21);
  ({ targetRef, visible, markAsDismissed } = onTryItOut);
  onTryItOut = onTryItOut.onTryItOut;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      const obj = onTryItOut(dependencyMap[10]);
      return obj.canUsePremiumProfileCustomization(currentUser.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = markAsDismissed(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const reducedMotion = react.useContext(markAsDismissed(4596).AccessibilityPreferencesContext).reducedMotion;
  const tmp8 = closure_8(targetRef, visible);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = markAsDismissed(1126).intl;
    const stringResult = intl.string(markAsDismissed(1126).t["9JoKQb"]);
    cResult[2] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const intl2 = markAsDismissed(1126).intl;
    const string = intl2.string;
    const t = markAsDismissed(1126).t;
    const stringResult1 = string(stateFromStores ? t.p82vky : t.IDh31t);
    cResult[3] = stateFromStores;
    cResult[4] = stringResult1;
    tmp11 = stringResult1;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === reducedMotion.enabled) {
    let tmp13;
    let tmp14;
    let tmp15;
    if (cResult[6] === visible) {
      tmp13 = cResult[7];
    }
    if (cResult[8] !== markAsDismissed) {
      const fn2 = function y() {
        return markAsDismissed(ContentDismissActionType.USER_DISMISS);
      };
      cResult[8] = markAsDismissed;
      cResult[9] = fn2;
      tmp14 = fn2;
    } else {
      tmp14 = cResult[9];
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = markAsDismissed(1126).intl;
      const stringResult2 = intl3.string(markAsDismissed(1126).t["4P5I8V"]);
      cResult[10] = stringResult2;
      tmp15 = stringResult2;
    } else {
      tmp15 = cResult[10];
    }
    if (cResult[11] === markAsDismissed) {
      let tmp17;
      if (cResult[12] === onTryItOut) {
        tmp17 = cResult[13];
      }
      if (cResult[14] === tmp8) {
        if (cResult[15] === tmp11) {
          if (cResult[16] === tmp13) {
            if (cResult[17] === tmp14) {
              if (cResult[18] === tmp17) {
                let tmp18;
                if (cResult[19] === visible) {
                  tmp18 = cResult[20];
                }
                const tmpResult2 = markAsDismissed(9882);
                const coachmark = tmpResult2.useCoachmark(targetRef, tmp18);
                return null;
              }
            }
          }
        }
      }
      const obj2 = { title: tmp9, description: tmp11, visible, position: null, gradientColor: "blue", graphic: tmp13, onDismiss: tmp14, buttonLabel: tmp15, buttonVariant: "primary", onButtonPress: tmp17 };
      class P {
        constructor() {
          markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          onTryItOut();
        }
      }
      cResult[14] = tmp8;
      cResult[15] = tmp11;
      cResult[16] = tmp13;
      cResult[17] = tmp14;
      cResult[18] = tmp17;
      cResult[19] = visible;
      cResult[20] = obj2;
      tmp18 = obj2;
    }
    class P {
      constructor() {
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        onTryItOut();
      }
    }
    cResult[11] = markAsDismissed;
    cResult[12] = onTryItOut;
    cResult[13] = P;
    tmp17 = P;
  }
  const obj3 = { type: "rive", rive: markAsDismissed(4605).BadgesCoachmarkRive, aspectRatio: "16/9", riveProps: obj4 };
  obj4 = { dataBinding: { on: visible, reducedMotion: reducedMotion.enabled } };
  cResult[5] = reducedMotion.enabled;
  cResult[6] = visible;
  cResult[7] = obj3;
  tmp13 = obj3;
}) : ((markAsDismissed) => {
  let targetRef;
  let visible;
  ({ targetRef, visible } = markAsDismissed);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const onTryItOut = markAsDismissed.onTryItOut;
  let reducedMotion;
  let position;
  let obj = visible(onTryItOut[11]);
  const items = [position];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = markAsDismissed(onTryItOut[10]);
    return obj.canUsePremiumProfileCustomization(position.getCurrentUser());
  });
  reducedMotion = reducedMotion.useContext(visible(onTryItOut[12]).AccessibilityPreferencesContext).reducedMotion;
  const tmp2 = closure_8(targetRef, visible);
  position = tmp2;
  const items1 = [stateFromStores, visible, tmp2, markAsDismissed, onTryItOut, reducedMotion.enabled];
  const memo = reducedMotion.useMemo(() => {
    let intl;
    let intl3;
    let obj2;
    let obj3;
    let obj4;
    let string;
    let t;
    const obj = {
      title: intl.string(intl4.t["9JoKQb"]),
      description: string(stateFromStores ? t.p82vky : t.IDh31t),
      visible,
      position,
      gradientColor: "blue",
      graphic: obj2,
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      },
      buttonLabel: intl3.string(intl4.t["4P5I8V"]),
      buttonVariant: "primary",
      onButtonPress() {
        markAsDismissed(constants.TAKE_ACTION);
        onTryItOut();
      }
    };
    intl = intl4.intl;
    const intl2 = intl4.intl;
    string = intl2.string;
    t = intl4.t;
    obj2 = { type: "rive", rive: BadgesCoachmarkRive.BadgesCoachmarkRive, aspectRatio: "16/9", riveProps: obj3 };
    obj3 = { dataBinding: obj4 };
    obj4 = { on: visible, reducedMotion: reducedMotion.enabled };
    intl3 = intl4.intl;
    return obj;
  }, items1);
  let obj2 = visible(onTryItOut[15]);
  const coachmark = obj2.useCoachmark(targetRef, memo);
  return null;
});
const result = size.fileFinishedImporting("modules/user_profile/native/BadgeCustomizationProfileCoachmark.tsx");

export default tmp2;