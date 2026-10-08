// === Module 17282: BadgeCustomizationProfileCoachmark ===

// Module 17282 (BadgeCustomizationProfileCoachmark)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import BadgesCoachmarkRive from "BadgesCoachmarkRive" /* 4803 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const PX_64 = nativeDefault.space.PX_64;
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCoachmarkPosition(arg0, arg1) {
  closure_1 = arg1;
  const cResult = c.c(7);
  const height = useWindowDimensionsDefault().height;
  let rect = useSafeAreaInsetsDefault();
  [rect2, dependencyMap] = noop.useState(null);
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === arg0) {
      if (cResult[4] === arg1) {
        if (cResult[5] === height) {
          let tmp6 = cResult[6];
        }
        const effect = noop.useEffect(tmp5, tmp6);
        if (null == rect2) {
          return "bottom";
        } else {
          let str = "bottom";
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
  const tmp4 = _slicedToArray(noop.useState(null), 2);
}) : (function useCoachmarkPosition(arg0, arg1) {
  closure_1 = arg1;
  const height = useWindowDimensionsDefault().height;
  let rect = useSafeAreaInsetsDefault();
  [rect2, dependencyMap] = noop.useState(null);
  const items = [arg0, arg1, height];
  const effect = noop.useEffect(() => {
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
    if (height - obj.getFloatingNavBottomMargin(rect.bottom) - PX_64 - rect2.bottom < rect2.top - rect.top) {
      str = "top";
    }
    return str;
  }
  const tmp2 = _slicedToArray(noop.useState(null), 2);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/BadgeCustomizationProfileCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BadgeCustomizationProfileCoachmark(onTryItOut) {
  const cResult = markAsDismissed(576).c(21);
  ({ targetRef, visible, markAsDismissed } = onTryItOut);
  onTryItOut = onTryItOut.onTryItOut;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return onTryItOut(dependencyMap[10]).canUsePremiumProfileCustomization(currentUser.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = markAsDismissed(576);
  const stateFromStores = markAsDismissed(504).useStateFromStores(tmp4, tmp5);
  const reducedMotion = noop.useContext(markAsDismissed(4794).AccessibilityPreferencesContext).reducedMotion;
  const tmp8 = closure_8(targetRef, visible);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = markAsDismissed(1126).intl;
    const stringResult = intl.string(markAsDismissed(1126).t["9JoKQb"]);
    cResult[2] = stringResult;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const intl2 = markAsDismissed(1126).intl;
    const t = markAsDismissed(1126).t;
    const stringResult1 = intl2.string(stateFromStores ? t.p82vky : t.IDh31t);
    cResult[3] = stateFromStores;
    cResult[4] = stringResult1;
  } else {
    if (cResult[5] === reducedMotion.enabled) {
      if (cResult[6] === visible) {
        let tmp14 = cResult[7];
      }
      if (cResult[8] !== markAsDismissed) {
        const fn2 = function _() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        };
        cResult[8] = markAsDismissed;
        cResult[9] = fn2;
        let tmp15 = fn2;
      } else {
        tmp15 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = markAsDismissed(1126).intl;
        const stringResult2 = intl3.string(markAsDismissed(1126).t["4P5I8V"]);
        cResult[10] = stringResult2;
        let tmp16 = stringResult2;
      } else {
        tmp16 = cResult[10];
      }
      if (cResult[11] === markAsDismissed) {
        if (cResult[12] === onTryItOut) {
          let tmp18 = cResult[13];
        }
        if (cResult[14] === tmp8) {
          if (cResult[15] === tmp11) {
            if (cResult[16] === tmp14) {
              if (cResult[17] === tmp15) {
                if (cResult[18] === tmp18) {
                  if (cResult[19] === visible) {
                    let tmp19 = cResult[20];
                  }
                  const coachmark = markAsDismissed(9375).useCoachmark(targetRef, tmp19);
                  return null;
                }
              }
            }
          }
        }
        const obj2 = { title: tmp9, description: tmp11, visible, position: null, gradientColor: "blue", graphic: null, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
        class I {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            tmp2 = onTryItOut();
            return;
          }
        }
        obj2.graphic = tmp14;
        obj2.onDismiss = tmp15;
        obj2.buttonLabel = tmp16;
        obj2.onButtonPress = tmp18;
        cResult[14] = tmp8;
        cResult[15] = tmp11;
        cResult[16] = tmp14;
        cResult[17] = tmp15;
        cResult[18] = tmp18;
        cResult[19] = visible;
        cResult[20] = obj2;
        tmp19 = obj2;
      }
      class I {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          tmp2 = onTryItOut();
          return;
        }
      }
      cResult[11] = markAsDismissed;
      cResult[12] = onTryItOut;
      cResult[13] = I;
      tmp18 = I;
    }
    const obj3 = { type: "rive", rive: markAsDismissed(4803).BadgesCoachmarkRive, aspectRatio: "16/9", riveProps: null };
    const obj4 = { dataBinding: null };
    const obj5 = { on: null, reducedMotion: reducedMotion.enabled };
    obj4.dataBinding = obj5;
    obj3.riveProps = obj4;
    cResult[5] = reducedMotion.enabled;
    cResult[6] = visible;
    cResult[7] = obj3;
    tmp14 = obj3;
  }
  const tmpResult = markAsDismissed(504);
}) : (function BadgeCustomizationProfileCoachmark(markAsDismissed) {
  ({ targetRef, visible } = markAsDismissed);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const onTryItOut = markAsDismissed.onTryItOut;
  let reducedMotion;
  let position;
  const items = [position];
  const stateFromStores = visible(onTryItOut[11]).useStateFromStores(items, () => markAsDismissed(onTryItOut[10]).canUsePremiumProfileCustomization(position.getCurrentUser()));
  reducedMotion = reducedMotion.useContext(visible(onTryItOut[12]).AccessibilityPreferencesContext).reducedMotion;
  const tmp2 = closure_8(targetRef, visible);
  position = tmp2;
  const items1 = [stateFromStores, visible, tmp2, markAsDismissed, onTryItOut, reducedMotion.enabled];
  const memo = reducedMotion.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: null, gradientColor: "blue", graphic: null, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["9JoKQb"]);
    const intl2 = util.intl;
    const t = util.t;
    obj.description = intl2.string(stateFromStores ? t.p82vky : t.IDh31t);
    obj.visible = visible;
    obj.position = position;
    const obj2 = { type: "rive", rive: BadgesCoachmarkRive.BadgesCoachmarkRive, aspectRatio: "16/9", riveProps: null };
    const obj3 = { dataBinding: { on: visible, reducedMotion: reducedMotion.enabled } };
    obj2.riveProps = obj3;
    obj.graphic = obj2;
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants.USER_DISMISS);
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t["4P5I8V"]);
    obj.onButtonPress = function onButtonPress() {
      markAsDismissed(constants.TAKE_ACTION);
      onTryItOut();
    };
    return obj;
  }, items1);
  let obj = visible(onTryItOut[11]);
  const coachmark = visible(onTryItOut[15]).useCoachmark(targetRef, memo);
  return null;
});