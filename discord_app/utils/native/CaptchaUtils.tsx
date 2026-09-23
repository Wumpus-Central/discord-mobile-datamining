// === Module 17788: CaptchaUtils ===

// Module 17788 (CaptchaUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import V8APIError from "V8APIError" /* 1325 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 5167 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5169 */;
import MetricEvents from "MetricEvents" /* 5174 */;
import siteKeyDefault from "siteKey" /* 17789 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2109 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: closure_4, NativeModules, NativeEventEmitter } = get_ActivityIndicator);
const Constants = fn(1074);
({ CaptchaEvent: closure_7, RECAPTCHA_SITE_KEY: closure_8, AnalyticEvents: closure_9 } = Constants);
const jsx = fn(21).jsx;
const CaptchaManager = NativeModules.CaptchaManager;
const nativeEventEmitter = new NativeEventEmitter(CaptchaManager);
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/CaptchaUtils.tsx");

export default {
  showCaptcha() {
    let RECAPTCHA = arg0;
    if (arg0 === undefined) {
      RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
    }
    const self = this;
    React4.dismiss();
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
      const v4Result = sitekey(paths[10]).v4();
      closure_2 = v4Result;
      let HCAPTCHA = sitekey(paths[11]).CaptchaTypes.HCAPTCHA;
      let obj = sitekey(paths[10]);
      rqdata(paths[6]).track(constants.CAPTCHA_EVENT, { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result });
      let obj2 = rqdata(paths[6]);
      let obj3 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result };
      let obj5 = { name: sitekey(paths[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
      let items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      obj5.tags = items;
      rqdata(paths[7]).increment(obj5);
      let obj4 = rqdata(paths[7]);
      rqdata(paths[14]).pushLazy(sitekey(paths[16])(paths[15], paths.paths), {
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
      const v4Result = self(1255).v4();
      closure_2 = v4Result;
      const HCAPTCHA = self(1325).CaptchaTypes.HCAPTCHA;
      let obj = self(1255);
      AnalyticsUtilsDefault.track(constants2.CAPTCHA_EVENT, { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result });
      let obj3 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result };
      const obj5 = { name: self(5174).MetricEvents.CAPTCHA_EVENT, tags: null };
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
export const InlineHcaptcha = function InlineHcaptcha(siteKey) {
  siteKey = siteKey.siteKey;
  ({ onVerify: importDefault, onError: dependencyMap } = siteKey);
  const merged = Object.assign(siteKey, Object.assign({ siteKey: 0, onVerify: 0, onError: 0 }));
  let items = [LocaleStore];
  const stateFromStores = siteKey(504).useStateFromStores(items, () => locale.locale);
  let obj = siteKey(504);
  const v4Result = siteKey(1255).v4();
  noop = v4Result;
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
  let obj2 = siteKey(1255);
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
};