// discord_app/components_native/MobileSurvey.tsx
import closure_3 from "createCacheKey";
import noop from "noop";
import fetchSurveyIfNeeded from "fetchSurveyIfNeeded";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
let closure_8 = createCacheKey.createStyles({ confirmIcon: { marginLeft: 4 } });
const result = require("fetchSurveyIfNeeded").fileFinishedImporting("components_native/MobileSurvey.tsx");

export default function MobileSurvey() {
  const _require = callback();
  let obj = _initialize;
  const items = [fetchSurveyIfNeeded];
  const stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      function _setSurveySeen() {
        const self = this;
        const tmp = outer2_3(function*() {
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
              return { value: "T", done: null };
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
                  let obj1 = v0(outer2_2[8]);
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
              return { value: "T", done: null };
            } catch (tmp9) {
              c0 = tmp;
              throw tmp9;
            }
          }
        });
        const _setSurveySeen = tmp;
        const apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      let obj = stateFromStores(outer1_2[7]);
      obj = { type: "survey", promotion_id: null };
      obj[1] = tmp.id;
      obj.track(outer1_6.OPEN_MODAL, obj);
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
      stateFromStores(outer1_2[11]).openURL(stateFromStores.url);
      const obj = stateFromStores(outer1_2[11]);
      lib(outer1_2[8]).surveyHide(stateFromStores.key, false);
    };
    obj[4] = function onCancel() {
      return lib(outer1_2[8]).surveyHide(stateFromStores.key, true);
    };
    obj[5] = function renderConfirmRightIcon() {
      const obj = { style: lib.confirmIcon, color: null, size: null, source: null };
      obj[1] = stateFromStores(outer1_2[13]).unsafe_rawColors.WHITE;
      obj[2] = lib(outer1_2[12]).Icon.Sizes.SMALL;
      obj[3] = stateFromStores(outer1_2[14]);
      return outer1_7(lib(outer1_2[12]).Icon, obj);
    };
    tmp5 = jsx(stateFromStores(4730), { body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, renderConfirmRightIcon: null });
    const tmp8 = stateFromStores(4730);
  }
  return tmp5;
};