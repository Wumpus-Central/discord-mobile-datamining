// === Module 16922: MobileSurvey ===

// Module 16922 (MobileSurvey)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import LinkingDefault from "Linking" /* 4255 */;
import SurveyActionCreators from "SurveyActionCreators" /* 4752 */;
import _modDef9444 from "module_9444" /* 9444 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SurveyStore from "SurveyStore" /* 4751 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ confirmIcon: { marginLeft: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("components_native/MobileSurvey.tsx");

export default function MobileSurvey() {
  _require = closure_8();
  let obj = require("initialize");
  const items = [SurveyStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      closure_0 = async function _setSurveySeen(arg0, value) {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
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
                obj = { value, done: true };
                return obj;
              } else if (null != c1) {
                let obj1 = confirmIcon(dependencyMap[8]);
                c1 = 1;
                c0 = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.surveySeen(tmp5.key);
                return obj1;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            }
            c0 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp9) {
            c0 = tmp;
            throw tmp9;
          }
        }
      };
      stateFromStores(dependencyMap[7]);
      let obj = { type: "survey", promotion_id: tmp.id };
      obj.track(constants.OPEN_MODAL, obj);
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
    }
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, renderConfirmRightIcon: null };
    ({ prompt: obj2.body, cta: obj2.confirmText } = stateFromStores);
    const intl = tmp(1114).intl;
    obj.cancelText = intl.string(tmp(1114).t.f3Pet9);
    obj.onConfirm = function onConfirm() {
      LinkingDefault.openURL(stateFromStores.url);
      SurveyActionCreators.surveyHide(stateFromStores.key, false);
    };
    obj.onCancel = function onCancel() {
      return SurveyActionCreators.surveyHide(stateFromStores.key, true);
    };
    obj.renderConfirmRightIcon = function renderConfirmRightIcon() {
      return jsx(native.Icon, { style: confirmIcon.confirmIcon, color: nativeDefault.unsafe_rawColors.WHITE, size: native.Icon.Sizes.SMALL, source: _modDef9444 });
    };
    tmp5 = jsx(stateFromStores(4994), { body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, renderConfirmRightIcon: null });
    const tmp8 = stateFromStores(4994);
  }
  return tmp5;
};