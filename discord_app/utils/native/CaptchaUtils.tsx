// === Module 17457: CaptchaUtils ===

// Module 17457 (CaptchaUtils)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import V8APIError from "V8APIError" /* 1336 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 5414 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5416 */;
import MetricEvents from "MetricEvents" /* 5421 */;
import _modDef17458 from "module_17458" /* 17458 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, siteKey;

let NativeEventEmitter;
let NativeModules;
let c10;
let c9;
let metroRequire;
let unpackModuleId;
let captcha_flow_key = ["siteKey", "onVerify", "onError"];
({ Keyboard: metroRequire, NativeModules, NativeEventEmitter } = react_native);
({ CaptchaEvent: c9, RECAPTCHA_SITE_KEY: c10, AnalyticEvents: unpackModuleId } = Constants);
const jsx = Fragment.jsx;
const CaptchaManager = NativeModules.CaptchaManager;
const nativeEventEmitter = new NativeEventEmitter(CaptchaManager);
let obj = {
  showCaptcha() {
    let RECAPTCHA = arg0;
    if (arg0 === undefined) {
      RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
    }
    const self = this;
    metroRequire.dismiss();
    const obj = AnalyticsUtilsDefault;
    obj.track(unpackModuleId.OPEN_MODAL, { type: "CAPTCHA" });
    if (RECAPTCHA === V8APIError.CaptchaTypes.HCAPTCHA) {
      let showHcaptchaResult;
      if (null != arg1) {
        showHcaptchaResult = self.showHcaptcha(arg1, arg2);
      }
      return showHcaptchaResult;
    }
    showHcaptchaResult = self.showRecaptcha();
  },
  closeCaptcha() {
    CaptchaManager.closeCaptcha();
  },
  showHcaptcha(arg0, rqdata) {
    let paths;
    let closure_0 = arg0;
    const promise = new Promise((sitekey, arg1) => {
      let closure_1;
      let items;
      rqdata = arg1;
      let obj = sitekey(paths[13]);
      const v4Result = obj.v4();
      captcha_flow_key = v4Result;
      let HCAPTCHA = sitekey(paths[14]).CaptchaTypes.HCAPTCHA;
      let obj2 = rqdata(paths[7]);
      let obj3 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result };
      obj2.track(constants.CAPTCHA_EVENT, obj3);
      const tmp3 = rqdata(paths[8]);
      let obj4 = { name: sitekey(paths[9]).MetricEvents.CAPTCHA_EVENT, tags: items };
      let increment = tmp3.increment;
      items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      increment(obj4);
      let obj5 = rqdata(paths[17]);
      let obj6 = {
        siteKey: sitekey,
        onMessage(nativeEvent) {
          let items;
          let items1;
          let data1;
          if (nativeEvent != null) {
            data1 = nativeEvent.nativeEvent.data;
          }
          if (null != data1) {
            const data = nativeEvent.nativeEvent.data;
            if (data !== SharedCaptchaUtils.CaptchaError.CANCEL) {
              if (data !== SharedCaptchaUtils.CaptchaError.ERROR) {
                if (data !== SharedCaptchaUtils.CaptchaError.EXPIRED) {
                  const HCAPTCHA2 = V8APIError.CaptchaTypes.HCAPTCHA;
                  const obj2 = { captcha_event_name: "verify", captcha_service: HCAPTCHA2, sitekey, captcha_flow_key };
                  const obj6 = AnalyticsUtilsDefault;
                  obj6.track(unpackModuleId.CAPTCHA_EVENT, obj2);
                  const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
                  const increment2 = MonitoringAgentDefault.increment;
                  MonitoringAgentDefault;
                  const _HermesInternal3 = HermesInternal;
                  items = ["event_name:" + "verify", ];
                  const _HermesInternal4 = HermesInternal;
                  items[1] = "captcha_service:" + HCAPTCHA2;
                  increment2(obj3);
                  sitekey(data);
                }
              }
            }
            const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
            const obj5 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey, captcha_flow_key };
            const obj = AnalyticsUtilsDefault;
            obj.track(unpackModuleId.CAPTCHA_EVENT, obj5);
            const obj7 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items1 };
            const increment = MonitoringAgentDefault.increment;
            MonitoringAgentDefault;
            const _HermesInternal = HermesInternal;
            items1 = ["event_name:" + data, ];
            const _HermesInternal2 = HermesInternal;
            items1[1] = "captcha_service:" + HCAPTCHA;
            increment(obj7);
            const obj8 = { reason: data };
            const obj4 = AnalyticsUtilsDefault;
            obj4.track(unpackModuleId.CAPTCHA_FAILED, obj8);
            closure_1(data);
          }
          const arr2 = ModalActionCreatorsDefault;
          arr2.pop();
        },
        rqdata
      };
      obj5.pushLazy(sitekey(paths[19])(paths[18], paths.paths), obj6, "hcaptcha");
    });
    return promise;
  },
  showRecaptcha() {
    let constants2;
    let theme;
    const self = this;
    const promise = new Promise((arg0, arg1) => {
      let items;
      let closure_0 = arg0;
      let closure_1 = arg1;
      let obj = self(dependencyMap[13]);
      const v4Result = obj.v4();
      captcha_flow_key = v4Result;
      const HCAPTCHA = self(dependencyMap[14]).CaptchaTypes.HCAPTCHA;
      let obj2 = AnalyticsUtilsDefault;
      let obj3 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result };
      obj2.track(constants2.CAPTCHA_EVENT, obj3);
      let tmp3 = MonitoringAgentDefault;
      let obj4 = { name: self(dependencyMap[9]).MetricEvents.CAPTCHA_EVENT, tags: items };
      let increment = tmp3.increment;
      items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      increment(obj4);
      CaptchaManager.showCaptcha(sitekey, theme.theme, "https://cdn.discordapp.com/recaptcha/ios.html");
      nativeEventEmitter.addListener(constants.SOLVED, (arg0) => {
        let items;
        self.closeCaptcha();
        const RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { captcha_event_name: "verify", captcha_service: RECAPTCHA, sitekey, captcha_flow_key };
        obj.track(unpackModuleId.CAPTCHA_EVENT, obj2);
        const tmp3 = MonitoringAgentDefault;
        const increment = tmp3.increment;
        const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
        items = ["event_name:" + "verify", "captcha_service:" + RECAPTCHA];
        increment(obj3);
        closure_0(arg0);
      });
      nativeEventEmitter.addListener(constants.EXPIRED, () => {
        let items;
        self.closeCaptcha();
        const EXPIRED = SharedCaptchaUtils.CaptchaError.EXPIRED;
        const RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { captcha_event_name: EXPIRED, captcha_service: RECAPTCHA, sitekey, captcha_flow_key };
        obj.track(unpackModuleId.CAPTCHA_EVENT, obj2);
        const tmp3 = MonitoringAgentDefault;
        const increment = tmp3.increment;
        const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
        items = ["event_name:" + EXPIRED, "captcha_service:" + RECAPTCHA];
        increment(obj3);
        const obj4 = AnalyticsUtilsDefault;
        obj4.track(unpackModuleId.CAPTCHA_FAILED, { reason: "expired" });
        closure_1(SharedCaptchaUtils.CaptchaError.EXPIRED);
      });
    });
    return promise;
  }
};
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((siteKey) => {
  let closure_0;
  let closure_1;
  let locale;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp18;
  let tmp5;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(20);
  if (cResult[0] !== siteKey) {
    siteKey = siteKey.siteKey;
    dependencyMap = siteKey;
    const onVerify = siteKey.onVerify;
    importDefault = onVerify;
    const onError = siteKey.onError;
    _require = onError;
    const tmp10 = _objectWithoutProperties(siteKey, captcha_flow_key);
    cResult[0] = siteKey;
    cResult[1] = onError;
    cResult[2] = onVerify;
    cResult[3] = tmp10;
    cResult[4] = siteKey;
    tmp5 = onVerify;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    dependencyMap = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [LocaleStore];
    const fn = function v() {
      return locale.locale;
    };
    cResult[5] = items;
    cResult[6] = fn;
    tmp12 = fn;
    tmp11 = items;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp11, tmp12);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult2 = require("v1");
    const v4Result = tmpResult2.v4();
    cResult[7] = v4Result;
    tmp15 = v4Result;
  } else {
    tmp15 = cResult[7];
  }
  captcha_flow_key = tmp15;
  if (cResult[8] !== tmp7) {
    class P {
      constructor() {
        let items;
        const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key };
        obj.track(unpackModuleId.CAPTCHA_EVENT, obj2);
        const tmp2 = MonitoringAgentDefault;
        const increment = tmp2.increment;
        const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
        items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
        increment(obj3);
      }
    }
    let items1 = [tmp15, tmp7];
    cResult[8] = tmp7;
    cResult[9] = P;
    cResult[10] = items1;
    tmp18 = items1;
  } else {
    class P {
      constructor() {
        let items;
        const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key };
        obj.track(unpackModuleId.CAPTCHA_EVENT, obj2);
        const tmp2 = MonitoringAgentDefault;
        const increment = tmp2.increment;
        const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
        items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
        increment(obj3);
      }
    }
    tmp18 = cResult[10];
  }
  const effect = react.useEffect(P, tmp18);
  if (cResult[11] === tmp4) {
    class P {
      constructor() {
        let items;
        const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key };
        obj.track(unpackModuleId.CAPTCHA_EVENT, obj2);
        const tmp2 = MonitoringAgentDefault;
        const increment = tmp2.increment;
        const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
        items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
        increment(obj3);
      }
    }
  }
  const fn2 = function f(nativeEvent) {
    let items;
    let items1;
    if (null != nativeEvent.nativeEvent.data) {
      const data = nativeEvent.nativeEvent.data;
      if (data !== SharedCaptchaUtils.CaptchaError.CANCEL) {
        if (data !== SharedCaptchaUtils.CaptchaError.ERROR) {
          if (data !== SharedCaptchaUtils.CaptchaError.EXPIRED) {
            const HCAPTCHA2 = V8APIError.CaptchaTypes.HCAPTCHA;
            const obj2 = { captcha_event_name: "verify", captcha_service: HCAPTCHA2, sitekey, captcha_flow_key };
            const obj6 = AnalyticsUtilsDefault;
            obj6.track(unpackModuleId.CAPTCHA_EVENT, obj2);
            const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
            const increment2 = MonitoringAgentDefault.increment;
            MonitoringAgentDefault;
            const _HermesInternal3 = HermesInternal;
            items = ["event_name:" + "verify", ];
            const _HermesInternal4 = HermesInternal;
            items[1] = "captcha_service:" + HCAPTCHA2;
            increment2(obj3);
            closure_1(data);
          }
        }
      }
      const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
      const obj5 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey, captcha_flow_key };
      const obj = AnalyticsUtilsDefault;
      obj.track(unpackModuleId.CAPTCHA_EVENT, obj5);
      const obj7 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items1 };
      const increment = MonitoringAgentDefault.increment;
      MonitoringAgentDefault;
      const _HermesInternal = HermesInternal;
      items1 = ["event_name:" + data, ];
      const _HermesInternal2 = HermesInternal;
      items1[1] = "captcha_service:" + HCAPTCHA;
      increment(obj7);
      const obj8 = { reason: data };
      const obj4 = AnalyticsUtilsDefault;
      obj4.track(unpackModuleId.CAPTCHA_FAILED, obj8);
      if (closure_0 != null) {
        closure_0(data);
      }
    }
  };
  cResult[11] = tmp4;
  cResult[12] = tmp5;
  cResult[13] = tmp7;
  cResult[14] = fn2;
}) : ((siteKey) => {
  let locale;
  siteKey = siteKey.siteKey;
  ({ onVerify: importDefault, onError: dependencyMap } = siteKey);
  const merged = Object.assign(siteKey, Object.assign({ siteKey: 0, onVerify: 0, onError: 0 }));
  let obj = siteKey(504);
  let items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  let obj2 = siteKey(1266);
  const v4Result = obj2.v4();
  let c3 = v4Result;
  let items1 = [v4Result, siteKey];
  const effect = react.useEffect(() => {
    let items;
    const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
    const obj = AnalyticsUtilsDefault;
    const obj2 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key };
    obj.track(unpackModuleId.CAPTCHA_EVENT, obj2);
    const tmp2 = MonitoringAgentDefault;
    const increment = tmp2.increment;
    const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
    items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
    increment(obj3);
  }, items1);
  _modDef17458;
  const merged1 = Object.assign(merged);
  return <tmp5 siteKey={siteKey} onMessage={function onMessage(nativeEvent) {
    let items;
    let items1;
    if (null != nativeEvent.nativeEvent.data) {
      const data = nativeEvent.nativeEvent.data;
      if (data !== SharedCaptchaUtils.CaptchaError.CANCEL) {
        if (data !== SharedCaptchaUtils.CaptchaError.ERROR) {
          if (data !== SharedCaptchaUtils.CaptchaError.EXPIRED) {
            const HCAPTCHA2 = V8APIError.CaptchaTypes.HCAPTCHA;
            const obj2 = { captcha_event_name: "verify", captcha_service: HCAPTCHA2, sitekey: siteKey, captcha_flow_key };
            const obj6 = AnalyticsUtilsDefault;
            obj6.track(unpackModuleId.CAPTCHA_EVENT, obj2);
            const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
            const increment2 = MonitoringAgentDefault.increment;
            MonitoringAgentDefault;
            const _HermesInternal3 = HermesInternal;
            items = ["event_name:" + "verify", ];
            const _HermesInternal4 = HermesInternal;
            items[1] = "captcha_service:" + HCAPTCHA2;
            increment2(obj3);
            importDefault(data);
          }
        }
      }
      const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
      const obj5 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key };
      const obj = AnalyticsUtilsDefault;
      obj.track(unpackModuleId.CAPTCHA_EVENT, obj5);
      const obj7 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items1 };
      const increment = MonitoringAgentDefault.increment;
      MonitoringAgentDefault;
      const _HermesInternal = HermesInternal;
      items1 = ["event_name:" + data, ];
      const _HermesInternal2 = HermesInternal;
      items1[1] = "captcha_service:" + HCAPTCHA;
      increment(obj7);
      const obj8 = { reason: data };
      const obj4 = AnalyticsUtilsDefault;
      obj4.track(unpackModuleId.CAPTCHA_FAILED, obj8);
      if (dependencyMap != null) {
        dependencyMap(data);
      }
    }
  }} languageCode={stateFromStores} />;
});
const result = size.fileFinishedImporting("utils/native/CaptchaUtils.tsx");

export default obj;
export const InlineHcaptcha = tmp5;