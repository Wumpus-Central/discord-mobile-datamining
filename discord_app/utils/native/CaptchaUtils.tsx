// discord_app/utils/native/CaptchaUtils.tsx
import AnalyticsUtilsDefault from "../AnalyticsUtils.tsx";
import V8APIError from "../../../discord_common/js/packages/http-utils/V8APIError.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import MonitoringAgentDefault from "../../modules/monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import SharedCaptchaUtils from "../../modules/captcha/SharedCaptchaUtils.tsx";
import siteKeyDefault from "../../../_runtime/17290_siteKey.js";
import noop from "../../../_runtime/metro/00019__.js";
import LocaleStore from "../../modules/user_settings/LocaleStore.tsx";
import ThemeStore from "../../modules/user_settings/ThemeStore.tsx";

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
      let obj = sitekey(paths[10]);
      const v4Result = obj.v4();
      closure_2 = v4Result;
      let HCAPTCHA = sitekey(paths[11]).CaptchaTypes.HCAPTCHA;
      let obj1 = rqdata(paths[6]);
      obj = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result };
      obj1.track(constants.CAPTCHA_EVENT, obj);
      obj = { name: sitekey(paths[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
      let items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      obj.tags = items;
      rqdata(paths[7]).increment(obj);
      const obj4 = rqdata(paths[7]);
      obj1 = {
        siteKey: sitekey,
        onMessage(nativeEvent) {
          let data;
          if (nativeEvent != null) {
            data = nativeEvent.nativeEvent.data;
          }
          if (null != data) {
            data = nativeEvent.nativeEvent.data;
            if (data !== SharedCaptchaUtils.CaptchaError.CANCEL) {
              if (data !== tmp17(11277).CaptchaError.ERROR) {
                if (data !== tmp17(11277).CaptchaError.EXPIRED) {
                  const HCAPTCHA2 = tmp17(1326).CaptchaTypes.HCAPTCHA;
                  let obj = {
                    captcha_event_name: "verify",
                    captcha_service: HCAPTCHA2,
                    sitekey,
                    captcha_flow_key: v4Result,
                  };
                  AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, obj);
                  obj = { name: tmp17(7607).MetricEvents.CAPTCHA_EVENT, tags: null };
                  const _HermesInternal3 = HermesInternal;
                  const items = ["event_name:" + "verify"];
                  const _HermesInternal4 = HermesInternal;
                  items[1] = "captcha_service:" + HCAPTCHA2;
                  obj.tags = items;
                  MonitoringAgentDefault.increment(obj);
                  sitekey(data);
                }
              }
            }
            const HCAPTCHA = tmp17(1326).CaptchaTypes.HCAPTCHA;
            obj = AnalyticsUtilsDefault;
            const obj1 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result };
            obj.track(constants.CAPTCHA_EVENT, obj1);
            const obj2 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
            const _HermesInternal = HermesInternal;
            const items1 = ["event_name:" + data];
            const _HermesInternal2 = HermesInternal;
            items1[1] = "captcha_service:" + HCAPTCHA;
            obj2.tags = items1;
            obj2.increment(obj2);
            const obj3 = { reason: data };
            AnalyticsUtilsDefault.track(constants.CAPTCHA_FAILED, obj3);
            closure_1(data);
          }
          ModalActionCreatorsDefault.pop();
        },
        rqdata,
      };
      rqdata(paths[14]).pushLazy(sitekey(paths[16])(paths[15], paths.paths), obj1, "hcaptcha");
    });
  },
  showRecaptcha() {
    const self = this;
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      let obj = self(1256);
      const v4Result = obj.v4();
      closure_2 = v4Result;
      const HCAPTCHA = self(1326).CaptchaTypes.HCAPTCHA;
      obj = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result };
      AnalyticsUtilsDefault.track(constants2.CAPTCHA_EVENT, obj);
      obj = { name: self(7607).MetricEvents.CAPTCHA_EVENT, tags: null };
      let items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      obj.tags = items;
      MonitoringAgentDefault.increment(obj);
      CaptchaManager.showCaptcha(sitekey, theme.theme, "https://cdn.discordapp.com/recaptcha/ios.html");
      nativeEventEmitter.addListener(constants.SOLVED, (arg0) => {
        self.closeCaptcha();
        const RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
        let obj = { captcha_event_name: "verify", captcha_service: RECAPTCHA, sitekey, captcha_flow_key: v4Result };
        obj.track(constants.CAPTCHA_EVENT, obj);
        obj = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
        const items = ["event_name:" + "verify", "captcha_service:" + RECAPTCHA];
        obj.tags = items;
        MonitoringAgentDefault.increment(obj);
        closure_0(arg0);
      });
      nativeEventEmitter.addListener(constants.EXPIRED, () => {
        self.closeCaptcha();
        const EXPIRED = SharedCaptchaUtils.CaptchaError.EXPIRED;
        const RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
        let obj = { captcha_event_name: EXPIRED, captcha_service: RECAPTCHA, sitekey, captcha_flow_key: v4Result };
        obj.track(constants.CAPTCHA_EVENT, obj);
        obj = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
        const items = ["event_name:" + EXPIRED, "captcha_service:" + RECAPTCHA];
        obj.tags = items;
        MonitoringAgentDefault.increment(obj);
        AnalyticsUtilsDefault.track(constants.CAPTCHA_FAILED, { reason: "expired" });
        closure_1(SharedCaptchaUtils.CaptchaError.EXPIRED);
      });
    });
  },
};
export const InlineHcaptcha = function InlineHcaptcha(siteKey) {
  siteKey = siteKey.siteKey;
  ({ onVerify: importDefault, onError: dependencyMap } = siteKey);
  const merged = Object.assign(siteKey, Object.assign({ siteKey: 0, onVerify: 0, onError: 0 }));
  let obj = siteKey(504);
  let items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const v4Result = siteKey(1256).v4();
  noop = v4Result;
  let items1 = [v4Result, siteKey];
  const effect = noop.useEffect(() => {
    const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
    let obj = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key };
    obj.track(constants.CAPTCHA_EVENT, obj);
    obj = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
    const items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
    obj.tags = items;
    MonitoringAgentDefault.increment(obj);
  }, items1);
  obj = {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== SharedCaptchaUtils.CaptchaError.CANCEL) {
          if (data !== tmp10(11277).CaptchaError.ERROR) {
            if (data !== tmp10(11277).CaptchaError.EXPIRED) {
              const HCAPTCHA2 = tmp10(1326).CaptchaTypes.HCAPTCHA;
              let obj = {
                captcha_event_name: "verify",
                captcha_service: HCAPTCHA2,
                sitekey: siteKey,
                captcha_flow_key,
              };
              AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, obj);
              obj = { name: tmp10(7607).MetricEvents.CAPTCHA_EVENT, tags: null };
              const _HermesInternal3 = HermesInternal;
              const items = ["event_name:" + "verify"];
              const _HermesInternal4 = HermesInternal;
              items[1] = "captcha_service:" + HCAPTCHA2;
              obj.tags = items;
              MonitoringAgentDefault.increment(obj);
              closure_1_1(data);
            }
          }
        }
        const HCAPTCHA = tmp10(1326).CaptchaTypes.HCAPTCHA;
        obj = AnalyticsUtilsDefault;
        const obj1 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key };
        obj.track(constants.CAPTCHA_EVENT, obj1);
        const obj2 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
        const _HermesInternal = HermesInternal;
        const items1 = ["event_name:" + data];
        const _HermesInternal2 = HermesInternal;
        items1[1] = "captcha_service:" + HCAPTCHA;
        obj2.tags = items1;
        obj2.increment(obj2);
        const obj3 = { reason: data };
        AnalyticsUtilsDefault.track(constants.CAPTCHA_FAILED, obj3);
        if (dependencyMap != null) {
          dependencyMap(data);
        }
      }
    },
    languageCode: stateFromStores,
  };
  let obj2 = siteKey(1256);
  const merged1 = Object.assign(merged);
  return jsx(siteKeyDefault, {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== SharedCaptchaUtils.CaptchaError.CANCEL) {
          if (data !== tmp10(11277).CaptchaError.ERROR) {
            if (data !== tmp10(11277).CaptchaError.EXPIRED) {
              const HCAPTCHA2 = tmp10(1326).CaptchaTypes.HCAPTCHA;
              let obj = {
                captcha_event_name: "verify",
                captcha_service: HCAPTCHA2,
                sitekey: siteKey,
                captcha_flow_key,
              };
              AnalyticsUtilsDefault.track(constants.CAPTCHA_EVENT, obj);
              obj = { name: tmp10(7607).MetricEvents.CAPTCHA_EVENT, tags: null };
              const _HermesInternal3 = HermesInternal;
              const items = ["event_name:" + "verify"];
              const _HermesInternal4 = HermesInternal;
              items[1] = "captcha_service:" + HCAPTCHA2;
              obj.tags = items;
              MonitoringAgentDefault.increment(obj);
              closure_1_1(data);
            }
          }
        }
        const HCAPTCHA = tmp10(1326).CaptchaTypes.HCAPTCHA;
        obj = AnalyticsUtilsDefault;
        const obj1 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key };
        obj.track(constants.CAPTCHA_EVENT, obj1);
        const obj2 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: null };
        const _HermesInternal = HermesInternal;
        const items1 = ["event_name:" + data];
        const _HermesInternal2 = HermesInternal;
        items1[1] = "captcha_service:" + HCAPTCHA;
        obj2.tags = items1;
        obj2.increment(obj2);
        const obj3 = { reason: data };
        AnalyticsUtilsDefault.track(constants.CAPTCHA_FAILED, obj3);
        if (dependencyMap != null) {
          dependencyMap(data);
        }
      }
    },
    languageCode: stateFromStores,
  });
};
