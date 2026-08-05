// discord_app/utils/native/CaptchaUtils.tsx
import noop from "noop";
import get_ActivityIndicator from "set";
import _getSystemLocale from "_getSystemLocale";
import handleThemeChange from "handleThemeChange";
import ME from "ME";
import { jsx } from "jsxProd";
import { siteKey } from "../../../_runtime/16227_siteKey.js";
import { convertStringArrayToSkemaErrorItems } from "../../../discord_common/js/packages/http-utils/V8APIError.tsx";
import { expandEventProperties } from "../AnalyticsUtils.tsx";

let NativeEventEmitter;
let NativeModules;
let c4;
let c9;
let error;
let metroImportAll;
const require = arg1;
({ Keyboard: c4, NativeModules, NativeEventEmitter } = get_ActivityIndicator);
({ CaptchaEvent: error, RECAPTCHA_SITE_KEY: metroImportAll, AnalyticEvents: c9 } = ME);
const CaptchaManager = NativeModules.CaptchaManager;
const nativeEventEmitter = new NativeEventEmitter(CaptchaManager);
const result = require("_getSystemLocale").fileFinishedImporting("utils/native/CaptchaUtils.tsx");

export default {
  showCaptcha() {
    let RECAPTCHA = arg0;
    if (arg0 === undefined) {
      RECAPTCHA = convertStringArrayToSkemaErrorItems /* convertStringArrayToSkemaErrorItems */.CaptchaTypes.RECAPTCHA;
    }
    const self = this;
    closure_4.dismiss();
    expandEventProperties.track(constants.OPEN_MODAL, { type: "CAPTCHA" });
    if (RECAPTCHA === convertStringArrayToSkemaErrorItems /* convertStringArrayToSkemaErrorItems */.CaptchaTypes.HCAPTCHA) {
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    return new Promise((arg0, arg1) => {
      const callback = arg0;
      const callback2 = arg1;
      let obj = callback(outer1_2[10]);
      const v4Result = obj.v4();
      let closure_2 = v4Result;
      let HCAPTCHA = callback(outer1_2[11]).CaptchaTypes.HCAPTCHA;
      let obj1 = callback2(outer1_2[6]);
      obj = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: callback, captcha_flow_key: v4Result };
      obj1.track(outer1_9.CAPTCHA_EVENT, obj);
      obj = { name: callback(outer1_2[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
      let items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      obj[1] = items;
      callback2(outer1_2[7]).increment(obj);
      const obj4 = callback2(outer1_2[7]);
      obj1 = {
        siteKey: callback,
        onMessage(nativeEvent) {
          let data;
          if (nativeEvent != null) {
            data = nativeEvent.nativeEvent.data;
          }
          if (null != data) {
            data = nativeEvent.nativeEvent.data;
            if (data !== callback(outer2_2[13]).CaptchaError.CANCEL) {
              if (data !== tmp17(outer2_2[13]).CaptchaError.ERROR) {
                if (data !== tmp17(outer2_2[13]).CaptchaError.EXPIRED) {
                  const HCAPTCHA2 = tmp17(outer2_2[11]).CaptchaTypes.HCAPTCHA;
                  let obj = { captcha_event_name: "verify", captcha_service: null, sitekey: null, captcha_flow_key: null };
                  obj[1] = HCAPTCHA2;
                  obj[2] = callback;
                  obj[3] = closure_2;
                  callback2(outer2_2[6]).track(outer2_9.CAPTCHA_EVENT, obj);
                  const obj7 = callback2(outer2_2[6]);
                  obj = { name: null, tags: null };
                  obj[0] = tmp17(outer2_2[8]).MetricEvents.CAPTCHA_EVENT;
                  const _HermesInternal3 = HermesInternal;
                  const items = ["event_name:" + "verify", ];
                  const _HermesInternal4 = HermesInternal;
                  items[1] = "captcha_service:" + HCAPTCHA2;
                  obj[1] = items;
                  callback2(outer2_2[7]).increment(obj);
                  callback(data);
                  const obj9 = callback2(outer2_2[7]);
                }
              }
            }
            const HCAPTCHA = tmp17(outer2_2[11]).CaptchaTypes.HCAPTCHA;
            obj = callback2(outer2_2[6]);
            const obj1 = { captcha_event_name: null, captcha_service: null, sitekey: null, captcha_flow_key: null };
            obj1[0] = data;
            obj1[1] = HCAPTCHA;
            obj1[2] = callback;
            obj1[3] = closure_2;
            obj.track(outer2_9.CAPTCHA_EVENT, obj1);
            let obj2 = callback2(outer2_2[7]);
            obj2 = { name: null, tags: null };
            obj2[0] = callback(outer2_2[8]).MetricEvents.CAPTCHA_EVENT;
            const _HermesInternal = HermesInternal;
            const items1 = ["event_name:" + data, ];
            const _HermesInternal2 = HermesInternal;
            items1[1] = "captcha_service:" + HCAPTCHA;
            obj2[1] = items1;
            obj2.increment(obj2);
            const obj3 = { reason: null };
            obj3[0] = data;
            callback2(outer2_2[6]).track(outer2_9.CAPTCHA_FAILED, obj3);
            callback2(data);
            const obj5 = callback2(outer2_2[6]);
          }
          callback2(outer2_2[14]).pop();
        },
        rqdata: callback2
      };
      callback2(outer1_2[14]).pushLazy(callback(outer1_2[16])(outer1_2[15], outer1_2.paths), obj1, "hcaptcha");
    });
  },
  showRecaptcha() {
    const self = this;
    return new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let obj = self(outer1_2[10]);
      const v4Result = obj.v4();
      let closure_2 = v4Result;
      const HCAPTCHA = self(outer1_2[11]).CaptchaTypes.HCAPTCHA;
      obj = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: outer1_8, captcha_flow_key: v4Result };
      outer1_1(outer1_2[6]).track(outer1_9.CAPTCHA_EVENT, obj);
      const obj2 = outer1_1(outer1_2[6]);
      obj = { name: self(outer1_2[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
      let items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      obj[1] = items;
      outer1_1(outer1_2[7]).increment(obj);
      outer1_11.showCaptcha(outer1_8, outer1_6.theme, "https://cdn.discordapp.com/recaptcha/ios.html");
      outer1_12.addListener(outer1_7.SOLVED, (arg0) => {
        lib.closeCaptcha();
        const RECAPTCHA = self(outer2_2[11]).CaptchaTypes.RECAPTCHA;
        let obj = outer2_1(outer2_2[6]);
        obj = { captcha_event_name: "verify", captcha_service: RECAPTCHA, sitekey: outer2_8, captcha_flow_key: closure_2 };
        obj.track(outer2_9.CAPTCHA_EVENT, obj);
        obj = { name: self(outer2_2[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
        const items = ["event_name:" + "verify", "captcha_service:" + RECAPTCHA];
        obj[1] = items;
        outer2_1(outer2_2[7]).increment(obj);
        lib(arg0);
      });
      outer1_12.addListener(outer1_7.EXPIRED, () => {
        lib.closeCaptcha();
        const EXPIRED = self(outer2_2[13]).CaptchaError.EXPIRED;
        const RECAPTCHA = self(outer2_2[11]).CaptchaTypes.RECAPTCHA;
        let obj = outer2_1(outer2_2[6]);
        obj = { captcha_event_name: EXPIRED, captcha_service: RECAPTCHA, sitekey: outer2_8, captcha_flow_key: closure_2 };
        obj.track(outer2_9.CAPTCHA_EVENT, obj);
        obj = { name: self(outer2_2[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
        const items = ["event_name:" + EXPIRED, "captcha_service:" + RECAPTCHA];
        obj[1] = items;
        outer2_1(outer2_2[7]).increment(obj);
        const obj3 = outer2_1(outer2_2[7]);
        outer2_1(outer2_2[6]).track(outer2_9.CAPTCHA_FAILED, { reason: "expired" });
        callback(self(outer2_2[13]).CaptchaError.EXPIRED);
      });
    });
  }
};
export const InlineHcaptcha = function InlineHcaptcha(siteKey) {
  let dependencyMap;
  let importDefault;
  siteKey = siteKey.siteKey;
  ({ onVerify: importDefault, onError: dependencyMap } = siteKey);
  const merged = Object.assign(siteKey, Object.create(null));
  let React;
  let obj = siteKey(589);
  let items = [_getSystemLocale];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const v4Result = siteKey(514).v4();
  React = v4Result;
  let items1 = [v4Result, siteKey];
  const effect = React.useEffect(() => {
    const HCAPTCHA = siteKey(outer1_2[11]).CaptchaTypes.HCAPTCHA;
    let obj = outer1_1(outer1_2[6]);
    obj = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key: c3 };
    obj.track(outer1_9.CAPTCHA_EVENT, obj);
    obj = { name: siteKey(outer1_2[8]).MetricEvents.CAPTCHA_EVENT, tags: null };
    const items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
    obj[1] = items;
    outer1_1(outer1_2[7]).increment(obj);
  }, items1);
  obj = {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== siteKey(outer1_2[13]).CaptchaError.CANCEL) {
          if (data !== tmp10(tmp11[13]).CaptchaError.ERROR) {
            if (data !== tmp10(tmp11[13]).CaptchaError.EXPIRED) {
              const HCAPTCHA2 = tmp10(tmp11[11]).CaptchaTypes.HCAPTCHA;
              let obj = { captcha_event_name: "verify", captcha_service: null, sitekey: null, captcha_flow_key: null };
              obj[1] = HCAPTCHA2;
              obj[2] = siteKey;
              obj[3] = c3;
              outer1_1(tmp11[6]).track(outer1_9.CAPTCHA_EVENT, obj);
              const obj7 = outer1_1(tmp11[6]);
              obj = { name: null, tags: null };
              obj[0] = tmp10(tmp11[8]).MetricEvents.CAPTCHA_EVENT;
              const _HermesInternal3 = HermesInternal;
              const items = ["event_name:" + "verify", ];
              const _HermesInternal4 = HermesInternal;
              items[1] = "captcha_service:" + HCAPTCHA2;
              obj[1] = items;
              outer1_1(tmp11[7]).increment(obj);
              callback(data);
              const obj9 = outer1_1(tmp11[7]);
            }
          }
        }
        const HCAPTCHA = tmp10(tmp11[11]).CaptchaTypes.HCAPTCHA;
        obj = outer1_1(tmp11[6]);
        const obj1 = { captcha_event_name: null, captcha_service: null, sitekey: null, captcha_flow_key: null };
        obj1[0] = data;
        obj1[1] = HCAPTCHA;
        obj1[2] = siteKey;
        obj1[3] = c3;
        obj.track(outer1_9.CAPTCHA_EVENT, obj1);
        let obj2 = outer1_1(tmp11[7]);
        obj2 = { name: null, tags: null };
        obj2[0] = siteKey(outer1_2[8]).MetricEvents.CAPTCHA_EVENT;
        const _HermesInternal = HermesInternal;
        const items1 = ["event_name:" + data, ];
        const _HermesInternal2 = HermesInternal;
        items1[1] = "captcha_service:" + HCAPTCHA;
        obj2[1] = items1;
        obj2.increment(obj2);
        const obj3 = { reason: null };
        obj3[0] = data;
        outer1_1(outer1_2[6]).track(outer1_9.CAPTCHA_FAILED, obj3);
        if (callback2 != null) {
          callback2(data);
        }
        const obj5 = outer1_1(outer1_2[6]);
      }
    },
    languageCode: stateFromStores
  };
  let obj2 = siteKey(514);
  const merged1 = Object.assign(merged);
  return jsx(siteKey, {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== siteKey(outer1_2[13]).CaptchaError.CANCEL) {
          if (data !== tmp10(tmp11[13]).CaptchaError.ERROR) {
            if (data !== tmp10(tmp11[13]).CaptchaError.EXPIRED) {
              const HCAPTCHA2 = tmp10(tmp11[11]).CaptchaTypes.HCAPTCHA;
              let obj = { captcha_event_name: "verify", captcha_service: null, sitekey: null, captcha_flow_key: null };
              obj[1] = HCAPTCHA2;
              obj[2] = siteKey;
              obj[3] = c3;
              outer1_1(tmp11[6]).track(outer1_9.CAPTCHA_EVENT, obj);
              const obj7 = outer1_1(tmp11[6]);
              obj = { name: null, tags: null };
              obj[0] = tmp10(tmp11[8]).MetricEvents.CAPTCHA_EVENT;
              const _HermesInternal3 = HermesInternal;
              const items = ["event_name:" + "verify", ];
              const _HermesInternal4 = HermesInternal;
              items[1] = "captcha_service:" + HCAPTCHA2;
              obj[1] = items;
              outer1_1(tmp11[7]).increment(obj);
              callback(data);
              const obj9 = outer1_1(tmp11[7]);
            }
          }
        }
        const HCAPTCHA = tmp10(tmp11[11]).CaptchaTypes.HCAPTCHA;
        obj = outer1_1(tmp11[6]);
        const obj1 = { captcha_event_name: null, captcha_service: null, sitekey: null, captcha_flow_key: null };
        obj1[0] = data;
        obj1[1] = HCAPTCHA;
        obj1[2] = siteKey;
        obj1[3] = c3;
        obj.track(outer1_9.CAPTCHA_EVENT, obj1);
        let obj2 = outer1_1(tmp11[7]);
        obj2 = { name: null, tags: null };
        obj2[0] = siteKey(outer1_2[8]).MetricEvents.CAPTCHA_EVENT;
        const _HermesInternal = HermesInternal;
        const items1 = ["event_name:" + data, ];
        const _HermesInternal2 = HermesInternal;
        items1[1] = "captcha_service:" + HCAPTCHA;
        obj2[1] = items1;
        obj2.increment(obj2);
        const obj3 = { reason: null };
        obj3[0] = data;
        outer1_1(outer1_2[6]).track(outer1_9.CAPTCHA_FAILED, obj3);
        if (callback2 != null) {
          callback2(data);
        }
        const obj5 = outer1_1(outer1_2[6]);
      }
    },
    languageCode: stateFromStores
  });
};