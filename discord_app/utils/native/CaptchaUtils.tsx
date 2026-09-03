// discord_app/utils/native/CaptchaUtils.tsx
import convertStringArrayToSkemaErrorItems from "../../../discord_common/js/packages/http-utils/V8APIError.tsx";
import expandEventPropertiesDefault from "../AnalyticsUtils.tsx";
import siteKeyDefault from "../../../_runtime/17124_siteKey.js";
import closure_3 from "../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../modules/user_settings/LocaleStore.tsx";
import closure_6 from "../../modules/user_settings/ThemeStore.tsx";
import ME from "../../Constants.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = arg1;
({ Keyboard: c4, NativeModules, NativeEventEmitter } = get_ActivityIndicator);
({ CaptchaEvent: error, RECAPTCHA_SITE_KEY: closure_8, AnalyticEvents: c9 } = ME);
const CaptchaManager = NativeModules.CaptchaManager;
const nativeEventEmitter = new NativeEventEmitter(CaptchaManager);
const result = require("set").fileFinishedImporting("utils/native/CaptchaUtils.tsx");

export default {
  showCaptcha() {
    let RECAPTCHA = arg0;
    if (arg0 === undefined) {
      RECAPTCHA = convertStringArrayToSkemaErrorItems.CaptchaTypes.RECAPTCHA;
    }
    const self = this;
    closure_4.dismiss();
    expandEventPropertiesDefault.track(constants.OPEN_MODAL, { type: "CAPTCHA" });
    if (RECAPTCHA === convertStringArrayToSkemaErrorItems.CaptchaTypes.HCAPTCHA) {
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
  showHcaptcha(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return new Promise((arg0, arg1) => {
      const callback = arg0;
      const callback2 = arg1;
      let obj = callback(closure_1_2[10]);
      const v4Result = obj.v4();
      closure_2 = v4Result;
      let HCAPTCHA = callback(closure_1_2[11]).CaptchaTypes.HCAPTCHA;
      obj1 = callback2(closure_1_2[6]);
      obj = {
        captcha_event_name: "initial-load",
        captcha_service: HCAPTCHA,
        sitekey: callback,
        captcha_flow_key: v4Result,
      };
      obj1.track(closure_1_9.CAPTCHA_EVENT, obj);
      obj = { name: callback(closure_1_2[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
      let items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      obj[1] = items;
      callback2(closure_1_2[7]).increment(obj);
      const obj4 = callback2(closure_1_2[7]);
      obj1 = {
        siteKey: callback,
        onMessage(nativeEvent) {
          let data;
          if (nativeEvent != null) {
            data = nativeEvent.nativeEvent.data;
          }
          if (null != data) {
            data = nativeEvent.nativeEvent.data;
            if (data !== callback(closure_2_2[13]).CaptchaError.CANCEL) {
              if (data !== tmp17(closure_2_2[13]).CaptchaError.ERROR) {
                if (data !== tmp17(closure_2_2[13]).CaptchaError.EXPIRED) {
                  const HCAPTCHA2 = tmp17(closure_2_2[11]).CaptchaTypes.HCAPTCHA;
                  let obj = {
                    captcha_event_name: "verify",
                    captcha_service: null,
                    sitekey: null,
                    captcha_flow_key: null,
                  };
                  obj[1] = HCAPTCHA2;
                  obj[2] = callback;
                  obj[3] = closure_2;
                  callback2(closure_2_2[6]).track(closure_2_9.CAPTCHA_EVENT, obj);
                  const obj7 = callback2(closure_2_2[6]);
                  obj = { name: null, tags: null };
                  obj[0] = tmp17(closure_2_2[8]).MetricEvents.CAPTCHA_EVENT;
                  const _HermesInternal3 = HermesInternal;
                  const items = ["event_name:" + "verify"];
                  const _HermesInternal4 = HermesInternal;
                  items[1] = "captcha_service:" + HCAPTCHA2;
                  obj[1] = items;
                  callback2(closure_2_2[7]).increment(obj);
                  callback(data);
                  const obj9 = callback2(closure_2_2[7]);
                }
              }
            }
            const HCAPTCHA = tmp17(closure_2_2[11]).CaptchaTypes.HCAPTCHA;
            obj = callback2(closure_2_2[6]);
            obj1 = { captcha_event_name: null, captcha_service: null, sitekey: null, captcha_flow_key: null };
            obj1[0] = data;
            obj1[1] = HCAPTCHA;
            obj1[2] = callback;
            obj1[3] = closure_2;
            obj.track(closure_2_9.CAPTCHA_EVENT, obj1);
            let obj2 = callback2(closure_2_2[7]);
            obj2 = { name: null, tags: null };
            obj2[0] = callback(closure_2_2[8]).MetricEvents.CAPTCHA_EVENT;
            const _HermesInternal = HermesInternal;
            const items1 = ["event_name:" + data];
            const _HermesInternal2 = HermesInternal;
            items1[1] = "captcha_service:" + HCAPTCHA;
            obj2[1] = items1;
            obj2.increment(obj2);
            const obj3 = { reason: null };
            obj3[0] = data;
            callback2(closure_2_2[6]).track(closure_2_9.CAPTCHA_FAILED, obj3);
            callback2(data);
            const obj5 = callback2(closure_2_2[6]);
          }
          callback2(closure_2_2[14]).pop();
        },
        rqdata: callback2,
      };
      callback2(closure_1_2[14]).pushLazy(
        callback(closure_1_2[16])(closure_1_2[15], closure_1_2.paths),
        obj1,
        "hcaptcha",
      );
    });
  },
  showRecaptcha() {
    const self = this;
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      let obj = self(closure_1_2[10]);
      const v4Result = obj.v4();
      closure_2 = v4Result;
      const HCAPTCHA = self(closure_1_2[11]).CaptchaTypes.HCAPTCHA;
      obj = {
        captcha_event_name: "initial-load",
        captcha_service: HCAPTCHA,
        sitekey: closure_1_8,
        captcha_flow_key: v4Result,
      };
      closure_1_1(closure_1_2[6]).track(closure_1_9.CAPTCHA_EVENT, obj);
      const obj2 = closure_1_1(closure_1_2[6]);
      obj = { name: self(closure_1_2[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
      let items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      obj[1] = items;
      closure_1_1(closure_1_2[7]).increment(obj);
      closure_1_11.showCaptcha(closure_1_8, closure_1_6.theme, "https://cdn.discordapp.com/recaptcha/ios.html");
      closure_1_12.addListener(closure_1_7.SOLVED, (arg0) => {
        lib.closeCaptcha();
        const RECAPTCHA = self(closure_2_2[11]).CaptchaTypes.RECAPTCHA;
        let obj = closure_2_1(closure_2_2[6]);
        obj = {
          captcha_event_name: "verify",
          captcha_service: RECAPTCHA,
          sitekey: closure_2_8,
          captcha_flow_key: closure_2,
        };
        obj.track(closure_2_9.CAPTCHA_EVENT, obj);
        obj = { name: self(closure_2_2[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
        const items = ["event_name:" + "verify", "captcha_service:" + RECAPTCHA];
        obj[1] = items;
        closure_2_1(closure_2_2[7]).increment(obj);
        lib(arg0);
      });
      closure_1_12.addListener(closure_1_7.EXPIRED, () => {
        lib.closeCaptcha();
        const EXPIRED = self(closure_2_2[13]).CaptchaError.EXPIRED;
        const RECAPTCHA = self(closure_2_2[11]).CaptchaTypes.RECAPTCHA;
        let obj = closure_2_1(closure_2_2[6]);
        obj = {
          captcha_event_name: EXPIRED,
          captcha_service: RECAPTCHA,
          sitekey: closure_2_8,
          captcha_flow_key: closure_2,
        };
        obj.track(closure_2_9.CAPTCHA_EVENT, obj);
        obj = { name: self(closure_2_2[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
        const items = ["event_name:" + EXPIRED, "captcha_service:" + RECAPTCHA];
        obj[1] = items;
        closure_2_1(closure_2_2[7]).increment(obj);
        const obj3 = closure_2_1(closure_2_2[7]);
        closure_2_1(closure_2_2[6]).track(closure_2_9.CAPTCHA_FAILED, { reason: "expired" });
        callback(self(closure_2_2[13]).CaptchaError.EXPIRED);
      });
    });
  },
};
export const InlineHcaptcha = function InlineHcaptcha(siteKey) {
  siteKey = siteKey.siteKey;
  ({ onVerify: importDefault, onError: dependencyMap } = siteKey);
  const merged = Object.assign(siteKey, Object.create(null));
  let React;
  let obj = siteKey(586);
  let items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const v4Result = siteKey(511).v4();
  React = v4Result;
  let items1 = [v4Result, siteKey];
  const effect = React.useEffect(() => {
    const HCAPTCHA = siteKey(closure_1_2[11]).CaptchaTypes.HCAPTCHA;
    let obj = closure_1_1(closure_1_2[6]);
    obj = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key: c3 };
    obj.track(closure_1_9.CAPTCHA_EVENT, obj);
    obj = { name: siteKey(closure_1_2[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
    const items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
    obj[1] = items;
    closure_1_1(closure_1_2[7]).increment(obj);
  }, items1);
  obj = {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== siteKey(closure_1_2[13]).CaptchaError.CANCEL) {
          if (data !== tmp10(tmp11[13]).CaptchaError.ERROR) {
            if (data !== tmp10(tmp11[13]).CaptchaError.EXPIRED) {
              const HCAPTCHA2 = tmp10(tmp11[11]).CaptchaTypes.HCAPTCHA;
              let obj = { captcha_event_name: "verify", captcha_service: null, sitekey: null, captcha_flow_key: null };
              obj[1] = HCAPTCHA2;
              obj[2] = siteKey;
              obj[3] = c3;
              closure_1_1(tmp11[6]).track(closure_1_9.CAPTCHA_EVENT, obj);
              const obj7 = closure_1_1(tmp11[6]);
              obj = { name: null, tags: null };
              obj[0] = tmp10(tmp11[8]).MetricEvents.CAPTCHA_EVENT;
              const _HermesInternal3 = HermesInternal;
              const items = ["event_name:" + "verify"];
              const _HermesInternal4 = HermesInternal;
              items[1] = "captcha_service:" + HCAPTCHA2;
              obj[1] = items;
              closure_1_1(tmp11[7]).increment(obj);
              callback(data);
              const obj9 = closure_1_1(tmp11[7]);
            }
          }
        }
        const HCAPTCHA = tmp10(tmp11[11]).CaptchaTypes.HCAPTCHA;
        obj = closure_1_1(tmp11[6]);
        obj1 = { captcha_event_name: null, captcha_service: null, sitekey: null, captcha_flow_key: null };
        obj1[0] = data;
        obj1[1] = HCAPTCHA;
        obj1[2] = siteKey;
        obj1[3] = c3;
        obj.track(closure_1_9.CAPTCHA_EVENT, obj1);
        let obj2 = closure_1_1(tmp11[7]);
        obj2 = { name: null, tags: null };
        obj2[0] = siteKey(closure_1_2[8]).MetricEvents.CAPTCHA_EVENT;
        const _HermesInternal = HermesInternal;
        const items1 = ["event_name:" + data];
        const _HermesInternal2 = HermesInternal;
        items1[1] = "captcha_service:" + HCAPTCHA;
        obj2[1] = items1;
        obj2.increment(obj2);
        const obj3 = { reason: null };
        obj3[0] = data;
        closure_1_1(closure_1_2[6]).track(closure_1_9.CAPTCHA_FAILED, obj3);
        if (callback2 != null) {
          callback2(data);
        }
        const obj5 = closure_1_1(closure_1_2[6]);
      }
    },
    languageCode: stateFromStores,
  };
  let obj2 = siteKey(511);
  const merged1 = Object.assign(merged);
  return jsx(siteKeyDefault, {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== siteKey(closure_1_2[13]).CaptchaError.CANCEL) {
          if (data !== tmp10(tmp11[13]).CaptchaError.ERROR) {
            if (data !== tmp10(tmp11[13]).CaptchaError.EXPIRED) {
              const HCAPTCHA2 = tmp10(tmp11[11]).CaptchaTypes.HCAPTCHA;
              let obj = { captcha_event_name: "verify", captcha_service: null, sitekey: null, captcha_flow_key: null };
              obj[1] = HCAPTCHA2;
              obj[2] = siteKey;
              obj[3] = c3;
              closure_1_1(tmp11[6]).track(closure_1_9.CAPTCHA_EVENT, obj);
              const obj7 = closure_1_1(tmp11[6]);
              obj = { name: null, tags: null };
              obj[0] = tmp10(tmp11[8]).MetricEvents.CAPTCHA_EVENT;
              const _HermesInternal3 = HermesInternal;
              const items = ["event_name:" + "verify"];
              const _HermesInternal4 = HermesInternal;
              items[1] = "captcha_service:" + HCAPTCHA2;
              obj[1] = items;
              closure_1_1(tmp11[7]).increment(obj);
              callback(data);
              const obj9 = closure_1_1(tmp11[7]);
            }
          }
        }
        const HCAPTCHA = tmp10(tmp11[11]).CaptchaTypes.HCAPTCHA;
        obj = closure_1_1(tmp11[6]);
        obj1 = { captcha_event_name: null, captcha_service: null, sitekey: null, captcha_flow_key: null };
        obj1[0] = data;
        obj1[1] = HCAPTCHA;
        obj1[2] = siteKey;
        obj1[3] = c3;
        obj.track(closure_1_9.CAPTCHA_EVENT, obj1);
        let obj2 = closure_1_1(tmp11[7]);
        obj2 = { name: null, tags: null };
        obj2[0] = siteKey(closure_1_2[8]).MetricEvents.CAPTCHA_EVENT;
        const _HermesInternal = HermesInternal;
        const items1 = ["event_name:" + data];
        const _HermesInternal2 = HermesInternal;
        items1[1] = "captcha_service:" + HCAPTCHA;
        obj2[1] = items1;
        obj2.increment(obj2);
        const obj3 = { reason: null };
        obj3[0] = data;
        closure_1_1(closure_1_2[6]).track(closure_1_9.CAPTCHA_FAILED, obj3);
        if (callback2 != null) {
          callback2(data);
        }
        const obj5 = closure_1_1(closure_1_2[6]);
      }
    },
    languageCode: stateFromStores,
  });
};
