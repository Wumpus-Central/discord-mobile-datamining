// discord_app/components_native/MobileSurvey.tsx
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import native from "../design/void/native.tsx";
import LinkingDefault from "../lib/native/Linking.tsx";
import SurveyActionCreators from "../actions/SurveyActionCreators.tsx";
import _modDef9587 from "../../_runtime/metro/09587__.js";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../_runtime/metro/00019__.js";
import SurveyStore from "../stores/SurveyStore.tsx";

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_8 = createStyles.createStyles({ confirmIcon: { marginLeft: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("components_native/MobileSurvey.tsx");

export default function MobileSurvey() {
  _require = closure_8();
  const items = [SurveyStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      closure_0 = async function _setSurveySeen() {
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
                const obj4 = { value, done: true };
                return obj4;
              } else if (null != c1) {
                c1 = 1;
                c0 = 1;
                const obj5 = { value: confirmIcon(dependencyMap[8]).surveySeen(tmp5.key), done: false };
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
            return { value: "HermesInternal", done: null };
          } catch (tmp9) {
            c0 = tmp;
            throw tmp9;
          }
        }
      };
      const obj2 = { type: "survey", promotion_id: tmp.id };
      stateFromStores(dependencyMap[7]).track(constants.OPEN_MODAL, obj2);
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
      let obj = stateFromStores(dependencyMap[7]);
    }
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    let obj3 = {
      body: null,
      confirmText: null,
      cancelText: null,
      onConfirm: null,
      onCancel: null,
      renderConfirmRightIcon: null,
    };
    ({ prompt: obj2.body, cta: obj2.confirmText } = stateFromStores);
    const intl = tmp(1115).intl;
    obj3.cancelText = intl.string(tmp(1115).t.f3Pet9);
    obj3.onConfirm = function onConfirm() {
      LinkingDefault.openURL(stateFromStores.url);
      SurveyActionCreators.surveyHide(stateFromStores.key, false);
    };
    obj3.onCancel = function onCancel() {
      return SurveyActionCreators.surveyHide(stateFromStores.key, true);
    };
    obj3.renderConfirmRightIcon = function renderConfirmRightIcon() {
      return jsx(native.Icon, {
        style: confirmIcon.confirmIcon,
        color: nativeDefault.unsafe_rawColors.WHITE,
        size: native.Icon.Sizes.SMALL,
        source: _modDef9587,
      });
    };
    tmp5 = jsx(stateFromStores(5079), {
      body: null,
      confirmText: null,
      cancelText: null,
      onConfirm: null,
      onCancel: null,
      renderConfirmRightIcon: null,
    });
    const tmp8 = stateFromStores(5079);
  }
  return tmp5;
}
