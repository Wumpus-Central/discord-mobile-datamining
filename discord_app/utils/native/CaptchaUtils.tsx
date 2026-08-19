// === Module 16502: CaptchaManager ===

// Module 16502 (CaptchaManager)
import convertStringArrayToSkemaErrorItems from "convertStringArrayToSkemaErrorItems" /* 585 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import setDefault from "set" /* 5006 */;
import siteKeyDefault from "siteKey" /* 16503 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
({ Keyboard: c4, NativeModules, NativeEventEmitter } = get_ActivityIndicator);
({ CaptchaEvent: error, RECAPTCHA_SITE_KEY: closure_8, AnalyticEvents: c9 } = ME);
const CaptchaManager = NativeModules.CaptchaManager;
const nativeEventEmitter = new NativeEventEmitter(CaptchaManager);
const result = require("obj132").fileFinishedImporting("utils/native/CaptchaUtils.tsx");

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
      let obj = callback(dependencyMap[10]);
      const v4Result = obj.v4();
      closure_2 = v4Result;
      let HCAPTCHA = callback(dependencyMap[11]).CaptchaTypes.HCAPTCHA;
      obj1 = callback2(dependencyMap[6]);
      obj = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: callback, captcha_flow_key: v4Result };
      obj1.track(closure_1_9.CAPTCHA_EVENT, obj);
      obj = { name: callback(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
      let items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      obj[1] = items;
      callback2(dependencyMap[7]).increment(obj);
      const obj4 = callback2(dependencyMap[7]);
      obj1 = {
        siteKey: callback,
        onMessage(nativeEvent) {
          let data;
          if (nativeEvent != null) {
            data = nativeEvent.nativeEvent.data;
          }
          if (null != data) {
            data = nativeEvent.nativeEvent.data;
            if (data !== callback(dependencyMap[13]).CaptchaError.CANCEL) {
              if (data !== callback(dependencyMap[13]).CaptchaError.ERROR) {
                if (data !== callback(dependencyMap[13]).CaptchaError.EXPIRED) {
                  const HCAPTCHA2 = callback(dependencyMap[11]).CaptchaTypes.HCAPTCHA;
                  let obj = { captcha_event_name: "verify", captcha_service: null, sitekey: null, captcha_flow_key: null };
                  obj[1] = HCAPTCHA2;
                  obj[2] = callback;
                  obj[3] = closure_2;
                  callback2(dependencyMap[6]).track(closure_2_9.CAPTCHA_EVENT, obj);
                  const obj7 = callback2(dependencyMap[6]);
                  obj = { name: null, tags: null };
                  obj[0] = callback(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT;
                  const _HermesInternal3 = HermesInternal;
                  const items = ["event_name:" + "verify", ];
                  const _HermesInternal4 = HermesInternal;
                  items[1] = "captcha_service:" + HCAPTCHA2;
                  obj[1] = items;
                  callback2(dependencyMap[7]).increment(obj);
                  callback(data);
                  const obj9 = callback2(dependencyMap[7]);
                }
              }
            }
            const HCAPTCHA = callback(dependencyMap[11]).CaptchaTypes.HCAPTCHA;
            obj = callback2(dependencyMap[6]);
            obj1 = { captcha_event_name: null, captcha_service: null, sitekey: null, captcha_flow_key: null };
            obj1[0] = data;
            obj1[1] = HCAPTCHA;
            obj1[2] = callback;
            obj1[3] = closure_2;
            obj.track(closure_2_9.CAPTCHA_EVENT, obj1);
            callback2(dependencyMap[7]);
            const obj2 = { name: null, tags: null };
            obj2[0] = callback(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT;
            const _HermesInternal = HermesInternal;
            const items1 = ["event_name:" + data, ];
            const _HermesInternal2 = HermesInternal;
            items1[1] = "captcha_service:" + HCAPTCHA;
            obj2[1] = items1;
            obj2.increment(obj2);
            const obj3 = { reason: null };
            obj3[0] = data;
            callback2(dependencyMap[6]).track(closure_2_9.CAPTCHA_FAILED, obj3);
            callback2(data);
            const obj5 = callback2(dependencyMap[6]);
          }
          callback2(dependencyMap[14]).pop();
          const arr2 = callback2(dependencyMap[14]);
        },
        rqdata: callback2
      };
      callback2(dependencyMap[14]).pushLazy(callback(dependencyMap[16])(dependencyMap[15], dependencyMap.paths), obj1, "hcaptcha");
    });
  },
  showRecaptcha() {
    const self = this;
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      let obj = self(dependencyMap[10]);
      const v4Result = obj.v4();
      closure_2 = v4Result;
      const HCAPTCHA = self(dependencyMap[11]).CaptchaTypes.HCAPTCHA;
      obj = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: closure_1_8, captcha_flow_key: v4Result };
      expandEventPropertiesDefault.track(closure_1_9.CAPTCHA_EVENT, obj);
      obj = { name: self(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
      let items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      obj[1] = items;
      setDefault.increment(obj);
      CaptchaManager.showCaptcha(closure_1_8, closure_1_6.theme, "https://cdn.discordapp.com/recaptcha/ios.html");
      nativeEventEmitter.addListener(closure_1_7.SOLVED, (arg0) => {
        lib.closeCaptcha();
        const RECAPTCHA = self(dependencyMap[11]).CaptchaTypes.RECAPTCHA;
        let obj = { captcha_event_name: "verify", captcha_service: RECAPTCHA, sitekey: closure_2_8, captcha_flow_key: closure_2 };
        obj.track(closure_2_9.CAPTCHA_EVENT, obj);
        obj = { name: self(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
        const items = ["event_name:" + "verify", "captcha_service:" + RECAPTCHA];
        obj[1] = items;
        setDefault.increment(obj);
        lib(arg0);
      });
      nativeEventEmitter.addListener(closure_1_7.EXPIRED, () => {
        lib.closeCaptcha();
        const EXPIRED = self(dependencyMap[13]).CaptchaError.EXPIRED;
        const RECAPTCHA = self(dependencyMap[11]).CaptchaTypes.RECAPTCHA;
        let obj = { captcha_event_name: EXPIRED, captcha_service: RECAPTCHA, sitekey: closure_2_8, captcha_flow_key: closure_2 };
        obj.track(closure_2_9.CAPTCHA_EVENT, obj);
        obj = { name: self(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
        const items = ["event_name:" + EXPIRED, "captcha_service:" + RECAPTCHA];
        obj[1] = items;
        setDefault.increment(obj);
        expandEventPropertiesDefault.track(closure_2_9.CAPTCHA_FAILED, { reason: "expired" });
        callback(self(dependencyMap[13]).CaptchaError.EXPIRED);
      });
    });
  }
};
export const InlineHcaptcha = function InlineHcaptcha(siteKey) {
  siteKey = siteKey.siteKey;
  ({ onVerify: importDefault, onError: dependencyMap } = siteKey);
  const merged = Object.assign(siteKey, Object.create(null));
  let obj = siteKey(589);
  let items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const v4Result = siteKey(514).v4();
  const React = v4Result;
  let items1 = [v4Result, siteKey];
  const effect = React.useEffect(() => {
    const HCAPTCHA = siteKey(dependencyMap[11]).CaptchaTypes.HCAPTCHA;
    let obj = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key: c3 };
    obj.track(closure_1_9.CAPTCHA_EVENT, obj);
    obj = { name: siteKey(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
    const items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
    obj[1] = items;
    setDefault.increment(obj);
  }, items1);
  obj = {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== siteKey(dependencyMap[13]).CaptchaError.CANCEL) {
          if (data !== siteKey(dependencyMap[13]).CaptchaError.ERROR) {
            if (data !== siteKey(dependencyMap[13]).CaptchaError.EXPIRED) {
              const HCAPTCHA2 = siteKey(dependencyMap[11]).CaptchaTypes.HCAPTCHA;
              let obj = { captcha_event_name: "verify", captcha_service: null, sitekey: null, captcha_flow_key: null };
              obj[1] = HCAPTCHA2;
              obj[2] = siteKey;
              obj[3] = c3;
              expandEventPropertiesDefault.track(closure_1_9.CAPTCHA_EVENT, obj);
              obj = { name: null, tags: null };
              obj[0] = siteKey(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT;
              const _HermesInternal3 = HermesInternal;
              const items = ["event_name:" + "verify", ];
              const _HermesInternal4 = HermesInternal;
              items[1] = "captcha_service:" + HCAPTCHA2;
              obj[1] = items;
              setDefault.increment(obj);
              callback(data);
            }
          }
        }
        const HCAPTCHA = siteKey(dependencyMap[11]).CaptchaTypes.HCAPTCHA;
        obj = expandEventPropertiesDefault;
        obj1 = { captcha_event_name: null, captcha_service: null, sitekey: null, captcha_flow_key: null };
        obj1[0] = data;
        obj1[1] = HCAPTCHA;
        obj1[2] = siteKey;
        obj1[3] = c3;
        obj.track(closure_1_9.CAPTCHA_EVENT, obj1);
        const obj2 = { name: null, tags: null };
        obj2[0] = siteKey(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT;
        const _HermesInternal = HermesInternal;
        const items1 = ["event_name:" + data, ];
        const _HermesInternal2 = HermesInternal;
        items1[1] = "captcha_service:" + HCAPTCHA;
        obj2[1] = items1;
        obj2.increment(obj2);
        const obj3 = { reason: null };
        obj3[0] = data;
        expandEventPropertiesDefault.track(closure_1_9.CAPTCHA_FAILED, obj3);
        if (callback2 != null) {
          callback2(data);
        }
      }
    },
    languageCode: stateFromStores
  };
  let obj2 = siteKey(514);
  const merged1 = Object.assign(merged);
  return jsx(siteKeyDefault, {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== siteKey(dependencyMap[13]).CaptchaError.CANCEL) {
          if (data !== siteKey(dependencyMap[13]).CaptchaError.ERROR) {
            if (data !== siteKey(dependencyMap[13]).CaptchaError.EXPIRED) {
              const HCAPTCHA2 = siteKey(dependencyMap[11]).CaptchaTypes.HCAPTCHA;
              let obj = { captcha_event_name: "verify", captcha_service: null, sitekey: null, captcha_flow_key: null };
              obj[1] = HCAPTCHA2;
              obj[2] = siteKey;
              obj[3] = c3;
              expandEventPropertiesDefault.track(closure_1_9.CAPTCHA_EVENT, obj);
              obj = { name: null, tags: null };
              obj[0] = siteKey(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT;
              const _HermesInternal3 = HermesInternal;
              const items = ["event_name:" + "verify", ];
              const _HermesInternal4 = HermesInternal;
              items[1] = "captcha_service:" + HCAPTCHA2;
              obj[1] = items;
              setDefault.increment(obj);
              callback(data);
            }
          }
        }
        const HCAPTCHA = siteKey(dependencyMap[11]).CaptchaTypes.HCAPTCHA;
        obj = expandEventPropertiesDefault;
        obj1 = { captcha_event_name: null, captcha_service: null, sitekey: null, captcha_flow_key: null };
        obj1[0] = data;
        obj1[1] = HCAPTCHA;
        obj1[2] = siteKey;
        obj1[3] = c3;
        obj.track(closure_1_9.CAPTCHA_EVENT, obj1);
        const obj2 = { name: null, tags: null };
        obj2[0] = siteKey(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT;
        const _HermesInternal = HermesInternal;
        const items1 = ["event_name:" + data, ];
        const _HermesInternal2 = HermesInternal;
        items1[1] = "captcha_service:" + HCAPTCHA;
        obj2[1] = items1;
        obj2.increment(obj2);
        const obj3 = { reason: null };
        obj3[0] = data;
        expandEventPropertiesDefault.track(closure_1_9.CAPTCHA_FAILED, obj3);
        if (callback2 != null) {
          callback2(data);
        }
      }
    },
    languageCode: stateFromStores
  });
};