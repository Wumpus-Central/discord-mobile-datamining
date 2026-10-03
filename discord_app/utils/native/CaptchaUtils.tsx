// === Module 17404: CaptchaUtils ===

// Module 17404 (CaptchaUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import V8APIError from "V8APIError" /* 1336 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 5407 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5409 */;
import MetricEvents from "MetricEvents" /* 5414 */;
import siteKeyDefault from "siteKey" /* 17405 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import ThemeStore from "ThemeStore" /* 1193 */;

const require = globalThis.__r;

require = fn;
let captcha_flow_key = ["siteKey", "onVerify", "onError"];
get_ActivityIndicator = fn(17);
({ Keyboard: metroRequire, NativeModules, NativeEventEmitter } = get_ActivityIndicator);
const Constants = fn(1085);
({ CaptchaEvent: closure_9, RECAPTCHA_SITE_KEY: c10, AnalyticEvents: closure_11 } = Constants);
const jsx = fn(21).jsx;
const CaptchaManager = NativeModules.CaptchaManager;
const nativeEventEmitter = new NativeEventEmitter(CaptchaManager);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/CaptchaUtils.tsx");

export default {
  showCaptcha() {
    let RECAPTCHA = arg0;
    if (arg0 === undefined) {
      RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
    }
    const self = this;
    timestampProducer.dismiss();
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: "CAPTCHA" });
    if (RECAPTCHA === V8APIError.CaptchaTypes.HCAPTCHA) {
      if (null != arg1) {
        let showHcaptchaResult = self.showHcaptcha(arg1, arg2);
      }
      return showHcaptchaResult;
    }
    showHcaptchaResult = self.showRecaptcha();
  },
  closeCaptcha() {
    CaptchaManager.closeCaptcha();
  },
  showHcaptcha(arg0, rqdata) {
    closure_0 = arg0;
    return new Promise((sitekey, arg1) => {
      rqdata = arg1;
      const v4Result = sitekey(paths[13]).v4();
      closure_2 = v4Result;
      let HCAPTCHA = sitekey(paths[14]).CaptchaTypes.HCAPTCHA;
      let obj = sitekey(paths[13]);
      rqdata(paths[7]).track(constants.CAPTCHA_EVENT, { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result });
      let obj2 = rqdata(paths[7]);
      let obj3 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result };
      let obj5 = { name: sitekey(paths[9]).MetricEvents.CAPTCHA_EVENT, tags: null };
      let items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      obj5.tags = items;
      rqdata(paths[8]).increment(obj5);
      let obj4 = rqdata(paths[8]);
      rqdata(paths[17]).pushLazy(sitekey(paths[19])(paths[18], paths.paths), {
        siteKey: sitekey,
        onMessage(nativeEvent) {
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
                  const obj2 = { captcha_event_name: "verify", captcha_service: HCAPTCHA2, sitekey, captcha_flow_key: v4Result };
                  AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, obj2);
                  const obj4 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
                  const _HermesInternal3 = HermesInternal;
                  const items = ["event_name:" + "verify", ];
                  const _HermesInternal4 = HermesInternal;
                  items[1] = "captcha_service:" + HCAPTCHA2;
                  obj4.tags = items;
                  MonitoringAgentDefault.increment(obj4);
                  sitekey(data);
                }
              }
            }
            const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
            const obj6 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result };
            AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, obj6);
            const obj8 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
            const _HermesInternal = HermesInternal;
            const items1 = ["event_name:" + data, ];
            const _HermesInternal2 = HermesInternal;
            items1[1] = "captcha_service:" + HCAPTCHA;
            obj8.tags = items1;
            MonitoringAgentDefault.increment(obj8);
            const obj10 = { reason: data };
            AnalyticsUtilsDefault.track(constants.CAPTCHA_FAILED, obj10);
            closure_1(data);
          }
          ModalActionCreatorsDefault.pop();
        },
        rqdata
      }, "hcaptcha");
    });
  },
  showRecaptcha() {
    const self = this;
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const v4Result = self(1266).v4();
      closure_2 = v4Result;
      const HCAPTCHA = self(1336).CaptchaTypes.HCAPTCHA;
      let obj = self(1266);
      AnalyticsUtilsDefault.track(constants2.CAPTCHA_EVENT, { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result });
      let obj3 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result };
      const obj5 = { name: self(5414).MetricEvents.CAPTCHA_EVENT, tags: null };
      let items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      obj5.tags = items;
      MonitoringAgentDefault.increment(obj5);
      CaptchaManager.showCaptcha(sitekey, theme.theme, "https://cdn.discordapp.com/recaptcha/ios.html");
      nativeEventEmitter.addListener(constants.SOLVED, (arg0) => {
        self.closeCaptcha();
        const RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
        AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, { captcha_event_name: "verify", captcha_service: RECAPTCHA, sitekey, captcha_flow_key: v4Result });
        const obj2 = { captcha_event_name: "verify", captcha_service: RECAPTCHA, sitekey, captcha_flow_key: v4Result };
        const obj4 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
        const items = ["event_name:" + "verify", "captcha_service:" + RECAPTCHA];
        obj4.tags = items;
        MonitoringAgentDefault.increment(obj4);
        closure_0(arg0);
      });
      nativeEventEmitter.addListener(constants.EXPIRED, () => {
        self.closeCaptcha();
        const EXPIRED = SharedCaptchaUtils.CaptchaError.EXPIRED;
        const RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
        AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, { captcha_event_name: EXPIRED, captcha_service: RECAPTCHA, sitekey, captcha_flow_key: v4Result });
        const obj2 = { captcha_event_name: EXPIRED, captcha_service: RECAPTCHA, sitekey, captcha_flow_key: v4Result };
        const obj4 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
        const items = ["event_name:" + EXPIRED, "captcha_service:" + RECAPTCHA];
        obj4.tags = items;
        MonitoringAgentDefault.increment(obj4);
        AnalyticsUtilsDefault.track(constants.CAPTCHA_FAILED, { reason: "expired" });
        closure_1(SharedCaptchaUtils.CaptchaError.EXPIRED);
      });
    });
  }
};
export const InlineHcaptcha = ReactCompilerGating.isReactCompilerEnabled() ? ((siteKey) => {
  const cResult = require("c").c(20);
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
    const tmp5 = onVerify;
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
    let tmp12 = fn;
    let tmp11 = items;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp11, tmp12);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const v4Result = tmp(1266).v4();
    cResult[7] = v4Result;
    let tmp15 = v4Result;
    const tmpResult2 = tmp(1266);
  } else {
    tmp15 = cResult[7];
  }
  captcha_flow_key = tmp15;
  if (cResult[8] !== tmp7) {
    class P {
      constructor() {
        HCAPTCHA = closure_0(closure_2[14]).CaptchaTypes.HCAPTCHA;
        obj = closure_1(closure_2[7]);
        obj1 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: closure_2, captcha_flow_key: closure_3 };
        trackResult = obj.track(AnalyticEvents.CAPTCHA_EVENT, obj1);
        obj3 = closure_1(closure_2[8]);
        obj5 = { name: closure_0(closure_2[9]).MetricEvents.CAPTCHA_EVENT, tags: null };
        items = [, ];
        items[0] = "event_name:" + "initial-load";
        items[1] = "captcha_service:" + HCAPTCHA;
        obj5.tags = items;
        incrementResult = obj3.increment(obj5);
        return;
      }
    }
    let items1 = [tmp15, tmp7];
    cResult[8] = tmp7;
    cResult[9] = P;
    cResult[10] = items1;
    let tmp18 = items1;
  } else {
    class P {
      constructor() {
        HCAPTCHA = closure_0(closure_2[14]).CaptchaTypes.HCAPTCHA;
        obj = closure_1(closure_2[7]);
        obj1 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: closure_2, captcha_flow_key: closure_3 };
        trackResult = obj.track(AnalyticEvents.CAPTCHA_EVENT, obj1);
        obj3 = closure_1(closure_2[8]);
        obj5 = { name: closure_0(closure_2[9]).MetricEvents.CAPTCHA_EVENT, tags: null };
        items = [, ];
        items[0] = "event_name:" + "initial-load";
        items[1] = "captcha_service:" + HCAPTCHA;
        obj5.tags = items;
        incrementResult = obj3.increment(obj5);
        return;
      }
    }
    tmp18 = cResult[10];
  }
  const effect = noop.useEffect(P, tmp18);
  if (cResult[11] === tmp4) {
    class P {
      constructor() {
        HCAPTCHA = closure_0(closure_2[14]).CaptchaTypes.HCAPTCHA;
        obj = closure_1(closure_2[7]);
        obj1 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: closure_2, captcha_flow_key: closure_3 };
        trackResult = obj.track(AnalyticEvents.CAPTCHA_EVENT, obj1);
        obj3 = closure_1(closure_2[8]);
        obj5 = { name: closure_0(closure_2[9]).MetricEvents.CAPTCHA_EVENT, tags: null };
        items = [, ];
        items[0] = "event_name:" + "initial-load";
        items[1] = "captcha_service:" + HCAPTCHA;
        obj5.tags = items;
        incrementResult = obj3.increment(obj5);
        return;
      }
    }
  }
  const fn2 = function f(nativeEvent) {
    if (null != nativeEvent.nativeEvent.data) {
      const data = nativeEvent.nativeEvent.data;
      if (data !== SharedCaptchaUtils.CaptchaError.CANCEL) {
        if (data !== SharedCaptchaUtils.CaptchaError.ERROR) {
          if (data !== SharedCaptchaUtils.CaptchaError.EXPIRED) {
            const HCAPTCHA2 = V8APIError.CaptchaTypes.HCAPTCHA;
            const obj2 = { captcha_event_name: "verify", captcha_service: HCAPTCHA2, sitekey, captcha_flow_key };
            AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, obj2);
            const obj4 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
            const _HermesInternal3 = HermesInternal;
            const items = ["event_name:" + "verify", ];
            const _HermesInternal4 = HermesInternal;
            items[1] = "captcha_service:" + HCAPTCHA2;
            obj4.tags = items;
            MonitoringAgentDefault.increment(obj4);
            closure_1(data);
          }
        }
      }
      const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
      const obj6 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey, captcha_flow_key };
      AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, obj6);
      const obj8 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
      const _HermesInternal = HermesInternal;
      const items1 = ["event_name:" + data, ];
      const _HermesInternal2 = HermesInternal;
      items1[1] = "captcha_service:" + HCAPTCHA;
      obj8.tags = items1;
      MonitoringAgentDefault.increment(obj8);
      const obj10 = { reason: data };
      AnalyticsUtilsDefault.track(constants.CAPTCHA_FAILED, obj10);
      if (closure_0 != null) {
        closure_0(data);
      }
    }
  };
  cResult[11] = tmp4;
  cResult[12] = tmp5;
  cResult[13] = tmp7;
  cResult[14] = fn2;
  const tmpResult = require("initialize");
}) : ((siteKey) => {
  siteKey = siteKey.siteKey;
  ({ onVerify: importDefault, onError: dependencyMap } = siteKey);
  const merged = Object.assign(siteKey, Object.assign({ siteKey: 0, onVerify: 0, onError: 0 }));
  let items = [LocaleStore];
  const stateFromStores = siteKey(504).useStateFromStores(items, () => locale.locale);
  let obj = siteKey(504);
  const v4Result = siteKey(1266).v4();
  c3 = v4Result;
  let items1 = [v4Result, siteKey];
  const effect = noop.useEffect(() => {
    const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
    AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key });
    const obj2 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key };
    const obj4 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
    const items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
    obj4.tags = items;
    MonitoringAgentDefault.increment(obj4);
  }, items1);
  let obj2 = siteKey(1266);
  let obj3 = {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== SharedCaptchaUtils.CaptchaError.CANCEL) {
          if (data !== SharedCaptchaUtils.CaptchaError.ERROR) {
            if (data !== SharedCaptchaUtils.CaptchaError.EXPIRED) {
              const HCAPTCHA2 = V8APIError.CaptchaTypes.HCAPTCHA;
              const obj2 = { captcha_event_name: "verify", captcha_service: HCAPTCHA2, sitekey: siteKey, captcha_flow_key };
              AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, obj2);
              const obj4 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
              const _HermesInternal3 = HermesInternal;
              const items = ["event_name:" + "verify", ];
              const _HermesInternal4 = HermesInternal;
              items[1] = "captcha_service:" + HCAPTCHA2;
              obj4.tags = items;
              MonitoringAgentDefault.increment(obj4);
              closure_1_1(data);
            }
          }
        }
        const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
        const obj6 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key };
        AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, obj6);
        const obj8 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
        const _HermesInternal = HermesInternal;
        const items1 = ["event_name:" + data, ];
        const _HermesInternal2 = HermesInternal;
        items1[1] = "captcha_service:" + HCAPTCHA;
        obj8.tags = items1;
        MonitoringAgentDefault.increment(obj8);
        const obj10 = { reason: data };
        AnalyticsUtilsDefault.track(constants.CAPTCHA_FAILED, obj10);
        if (dependencyMap != null) {
          dependencyMap(data);
        }
      }
    },
    languageCode: stateFromStores
  };
  const merged1 = Object.assign(merged);
  return jsx(siteKeyDefault, {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== SharedCaptchaUtils.CaptchaError.CANCEL) {
          if (data !== SharedCaptchaUtils.CaptchaError.ERROR) {
            if (data !== SharedCaptchaUtils.CaptchaError.EXPIRED) {
              const HCAPTCHA2 = V8APIError.CaptchaTypes.HCAPTCHA;
              const obj2 = { captcha_event_name: "verify", captcha_service: HCAPTCHA2, sitekey: siteKey, captcha_flow_key };
              AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, obj2);
              const obj4 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
              const _HermesInternal3 = HermesInternal;
              const items = ["event_name:" + "verify", ];
              const _HermesInternal4 = HermesInternal;
              items[1] = "captcha_service:" + HCAPTCHA2;
              obj4.tags = items;
              MonitoringAgentDefault.increment(obj4);
              closure_1_1(data);
            }
          }
        }
        const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
        const obj6 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key };
        AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, obj6);
        const obj8 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
        const _HermesInternal = HermesInternal;
        const items1 = ["event_name:" + data, ];
        const _HermesInternal2 = HermesInternal;
        items1[1] = "captcha_service:" + HCAPTCHA;
        obj8.tags = items1;
        MonitoringAgentDefault.increment(obj8);
        const obj10 = { reason: data };
        AnalyticsUtilsDefault.track(constants.CAPTCHA_FAILED, obj10);
        if (dependencyMap != null) {
          dependencyMap(data);
        }
      }
    },
    languageCode: stateFromStores
  });
});