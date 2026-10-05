// === Module 17103: MobileSurvey ===

// Module 17103 (MobileSurvey)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import LinkingDefault from "Linking" /* 4565 */;
import _modDef8756 from "module_8756" /* 8756 */;
import SurveyActionCreators from "SurveyActionCreators" /* 15586 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SurveyStore from "SurveyStore" /* 5081 */;

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({ confirmIcon: { marginLeft: 4 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/MobileSurvey.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(19);
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SurveyStore];
    const fn = function y() {
      return currentSurvey.getCurrentSurvey();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function v() {
      if (null != stateFromStores) {
        const obj2 = { type: "survey", promotion_id: tmp.id };
        stateFromStores(dependencyMap[9]).track(constants.OPEN_MODAL, obj2);
        closure_0 = asyncGeneratorStep(async () => {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else if (null != c1) {
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: v3(dependencyMap[10]).surveySeen(tmp5.key), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c0 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp9) {
              c0 = tmp;
              throw tmp9;
            }
          }
        });
        (function setSurveySeen() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
        let obj = stateFromStores(dependencyMap[9]);
      }
    };
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp10 = items1;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const effect = noop.useEffect(tmp9, tmp10);
  if (null != stateFromStores) {
    const _Symbol = Symbol;
    ({ prompt: _prompt, cta } = stateFromStores);
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.f3Pet9);
      cResult[5] = stringResult;
      let tmp12 = stringResult;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === stateFromStores.key) {
      if (cResult[7] === stateFromStores.url) {
        let tmp14 = cResult[8];
      }
      if (cResult[9] !== stateFromStores.key) {
        class C {
          constructor() {
            obj = closure_0(closure_2[10]);
            return obj.surveyHide(closure_1.key, true);
          }
        }
        cResult[9] = stateFromStores.key;
        cResult[10] = C;
      } else {
        class C {
          constructor() {
            obj = closure_0(closure_2[10]);
            return obj.surveyHide(closure_1.key, true);
          }
        }
      }
      if (cResult[11] !== tmp4.confirmIcon) {
        class L {
          constructor() {
            obj = { style: closure_0.confirmIcon, color: closure_1(closure_2[14]).unsafe_rawColors.WHITE, size: closure_0(closure_2[13]).Icon.Sizes.SMALL, source: closure_1(closure_2[15]) };
            return jsx(closure_0(closure_2[13]).Icon, obj);
          }
        }
        cResult[11] = tmp4.confirmIcon;
        cResult[12] = L;
      } else {
        class L {
          constructor() {
            obj = { style: closure_0.confirmIcon, color: closure_1(closure_2[14]).unsafe_rawColors.WHITE, size: closure_0(closure_2[13]).Icon.Sizes.SMALL, source: closure_1(closure_2[15]) };
            return jsx(closure_0(closure_2[13]).Icon, obj);
          }
        }
      }
      if (cResult[13] === stateFromStores.cta) {
        class L {
          constructor() {
            obj = { style: closure_0.confirmIcon, color: closure_1(closure_2[14]).unsafe_rawColors.WHITE, size: closure_0(closure_2[13]).Icon.Sizes.SMALL, source: closure_1(closure_2[15]) };
            return jsx(closure_0(closure_2[13]).Icon, obj);
          }
        }
      }
      let obj2 = { body: _prompt, confirmText: cta, cancelText: tmp12, onConfirm: tmp14, onCancel: C, renderConfirmRightIcon: L };
      const tmp20 = jsx(stateFromStores(5783), { body: _prompt, confirmText: cta, cancelText: tmp12, onConfirm: tmp14, onCancel: C, renderConfirmRightIcon: L });
      cResult[13] = stateFromStores.cta;
      cResult[14] = stateFromStores.prompt;
      cResult[15] = tmp14;
      cResult[16] = C;
      cResult[17] = L;
      cResult[18] = tmp20;
    }
    const fn3 = function k() {
      LinkingDefault.openURL(stateFromStores.url);
      SurveyActionCreators.surveyHide(stateFromStores.key, false);
    };
    cResult[6] = stateFromStores.key;
    cResult[7] = stateFromStores.url;
    cResult[8] = fn3;
    tmp14 = fn3;
  } else {
    class L {
      constructor() {
        obj = { style: closure_0.confirmIcon, color: closure_1(closure_2[14]).unsafe_rawColors.WHITE, size: closure_0(closure_2[13]).Icon.Sizes.SMALL, source: closure_1(closure_2[15]) };
        return jsx(closure_0(closure_2[13]).Icon, obj);
      }
    }
  }
  const tmpResult = require("initialize");
}) : (() => {
  _require = closure_8();
  const items = [SurveyStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      closure_0 = async function _setSurveySeen2() {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else if (null != c1) {
                c1 = 1;
                c0 = 1;
                const obj5 = { value: confirmIcon(dependencyMap[10]).surveySeen(tmp5.key), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c0 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp9) {
            c0 = tmp;
            throw tmp9;
          }
        }
      };
      const obj2 = { type: "survey", promotion_id: tmp.id };
      stateFromStores(dependencyMap[9]).track(constants.OPEN_MODAL, obj2);
      (function setSurveySeen() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      let obj = stateFromStores(dependencyMap[9]);
    }
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    let obj3 = { body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, renderConfirmRightIcon: null };
    ({ prompt: obj2.body, cta: obj2.confirmText } = stateFromStores);
    const intl = tmp(1126).intl;
    obj3.cancelText = intl.string(tmp(1126).t.f3Pet9);
    obj3.onConfirm = function onConfirm() {
      LinkingDefault.openURL(stateFromStores.url);
      SurveyActionCreators.surveyHide(stateFromStores.key, false);
    };
    obj3.onCancel = function onCancel() {
      return SurveyActionCreators.surveyHide(stateFromStores.key, true);
    };
    obj3.renderConfirmRightIcon = function renderConfirmRightIcon() {
      return jsx(native.Icon, { style: confirmIcon.confirmIcon, color: nativeDefault.unsafe_rawColors.WHITE, size: native.Icon.Sizes.SMALL, source: _modDef8756 });
    };
    tmp5 = jsx(stateFromStores(5783), { body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, renderConfirmRightIcon: null });
    const tmp8 = stateFromStores(5783);
  }
  return tmp5;
});