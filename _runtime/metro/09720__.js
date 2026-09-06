// _runtime/metro/09720__.js
import _mod17 from "00017__.js";
import jsxProd from "../react/00021_jsxProd.js";
import noop from "00019__.js";
import 09721__ from "09721__.js";

({ useCallback: c2, useEffect: c3, useRef: closure_4 } = noop);
const NativeEventEmitter = _mod17.NativeEventEmitter;
const jsx = jsxProd.jsx;
const nativeComponent = module_9721.getNativeComponent();
const nativeModule = module_9721.getNativeModule();
const memoResult = noop.memo((date) => {
  _require = date;
  const current = closure_4(Math.random().toString()).current;
  const items = [date, current];
  let tmp = closure_2((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    ({ date, id } = nativeEvent);
    if (null === id) {
      if (typeof fromIsoWithTimeZoneOffset === "function") {
        const _Date = Date;
        date = new Date(date);
        if (date.onDateChange) {
          obj.onDateChange(date);
        }
        if (date.onDateStringChange) {
          obj.onDateStringChange(tmp);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }, items);
  closure_2 = tmp;
  const items1 = [date, current];
  const tmp2 = closure_2((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const id = nativeEvent.id;
    let tmp = null !== id;
    if (tmp) {
      tmp = id !== current;
    }
    if (!tmp) {
      if (date.onStateChange) {
        obj.onStateChange(nativeEvent.spinnerState);
      }
      obj = date;
    }
  }, items1);
  closure_3 = tmp2;
  const items2 = [tmp, tmp2];
  closure_3(() => {
    const obj = new NativeEventEmitter(closure_8);
    obj.addListener("dateChange", closure_2);
    obj.addListener("spinnerStateChange", closure_3);
    return () => {
      obj.removeAllListeners("dateChange");
      obj.removeAllListeners("spinnerStateChange");
    };
  }, items2);
  let obj = {};
  const merged = Object.assign(date);
  if (typeof toIsoWithTimeZoneOffset === "function") {
    let toISOStringResult;
    if (date) {
      toISOStringResult = date.toISOString();
    }
    obj.date = toISOStringResult;
    obj.id = current;
    const minimumDate = date.minimumDate;
    if (typeof tmp5 === "function") {
      let toISOStringResult1;
      if (minimumDate) {
        toISOStringResult1 = minimumDate.toISOString();
      }
      obj.minimumDate = toISOStringResult1;
      const maximumDate = date.maximumDate;
      if (typeof tmp5 === "function") {
        let toISOStringResult2;
        if (maximumDate) {
          toISOStringResult2 = maximumDate.toISOString();
        }
        obj.maximumDate = toISOStringResult2;
        if (typeof getTimezoneOffsetInMinutes === "function") {
          let prop;
          if (null != date.timeZoneOffsetInMinutes) {
            prop = date.timeZoneOffsetInMinutes;
          }
          obj.timezoneOffsetInMinutes = prop;
          if (typeof getStyle === "function") {
            let num = 310;
            if ("time" === date.mode) {
              num = 240;
            }
            const size = { width: num, height: 180 };
            const items3 = [size, date.style];
            obj.style = items3;
            obj.onChange = tmp;
            obj.onStateChange = tmp2;
            obj = { props: null, id: null };
            obj.props = obj;
            obj.id = current;
            const modal = require("09723__.js").useModal(obj);
            let tmp16 = null;
            if (!date.modal) {
              obj = {};
              const merged1 = Object.assign(obj);
              tmp16 = <closure_7 />;
            }
            return tmp16;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const str = Math.random();
});
function getStyle(arg0) {

}
function getTimezoneOffsetInMinutes(arg0) {

}
function toIsoWithTimeZoneOffset(arg0) {

}
function fromIsoWithTimeZoneOffset(arg0) {

}

export default memoResult;
export const DatePickerAndroid = memoResult;