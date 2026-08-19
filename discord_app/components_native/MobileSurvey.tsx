// === Module 16138: MobileSurvey ===

// Module 16138 (MobileSurvey)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "noop" /* 19 */;
import fetchSurveyIfNeeded from "fetchSurveyIfNeeded" /* 9874 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_8 = createCacheKey.createStyles({ confirmIcon: { marginLeft: 4 } });
const result = require("obj132").fileFinishedImporting("components_native/MobileSurvey.tsx");

export default function MobileSurvey() {
  const _require = callback();
  let obj = _require(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      function _setSurveySeen() {
        const self = this;
        const tmp = closure_2_3(function*() {
          if (c0 === 2) {
            c0 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c0 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else if (null != c1) {
                  obj1 = v0(closure_2_2[8]);
                  c1 = 1;
                  c0 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj1.surveySeen(tmp5.key);
                  return obj1;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              c0 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } catch (tmp9) {
              c0 = tmp;
              throw tmp9;
            }
          }
        });
        closure_0 = tmp;
        const apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      stateFromStores(dependencyMap[7]);
      let obj = { type: "survey", promotion_id: null };
      obj[1] = tmp.id;
      obj.track(AnalyticEvents.OPEN_MODAL, obj);
      (function setSurveySeen() {
        const self = this;
        const apply = _setSurveySeen.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, renderConfirmRightIcon: null };
    ({ prompt: obj2[0], cta: obj2[1] } = stateFromStores);
    const intl = tmp(1236).intl;
    obj[2] = intl.string(tmp(1236).t.f3Pet9);
    obj[3] = function onConfirm() {
      stateFromStores(dependencyMap[11]).openURL(stateFromStores.url);
      const obj = stateFromStores(dependencyMap[11]);
      lib(dependencyMap[8]).surveyHide(stateFromStores.key, false);
    };
    obj[4] = function onCancel() {
      return lib(dependencyMap[8]).surveyHide(stateFromStores.key, true);
    };
    obj[5] = function renderConfirmRightIcon() {
      return jsx(lib(dependencyMap[12]).Icon, { style: lib.confirmIcon, color: stateFromStores(dependencyMap[13]).unsafe_rawColors.WHITE, size: lib(dependencyMap[12]).Icon.Sizes.SMALL, source: stateFromStores(dependencyMap[14]) });
    };
    tmp5 = jsx(stateFromStores(4763), { body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, renderConfirmRightIcon: null });
    const tmp8 = stateFromStores(4763);
  }
  return tmp5;
};