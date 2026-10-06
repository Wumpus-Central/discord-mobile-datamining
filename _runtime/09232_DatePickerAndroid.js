// _runtime/09232_DatePickerAndroid.js
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";
import react_mod from "00019_react.js";
import module_9233_mod from "metro/09233__.js";

const require = globalThis.__r;
let _require, closure_2, date, size;

let c2;
let c3;
let closure_4;
let react = react_mod;
({ useCallback: c2, useEffect: c3, useRef: closure_4 } = react);
react = react_mod;
const NativeEventEmitter = react_native.NativeEventEmitter;
const jsx = Fragment.jsx;
let module_9233 = module_9233_mod;
const nativeComponent = module_9233.getNativeComponent();
module_9233 = module_9233_mod;
const nativeModule = module_9233.getNativeModule();
const memoResult = react.memo((date) => {
  _require = date;
  const str = Math.random();
  const current = closure_4(str.toString()).current;
  const items = [date, current];
  let tmp = closure_2(function (nativeEvent) {
    let id;
    nativeEvent = nativeEvent.nativeEvent;
    ({ date, id } = nativeEvent);
    if (null === id) {
      if (typeof fromIsoWithTimeZoneOffset === "function") {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date1 = new Date(date);
        if (date.onDateChange) {
          date.onDateChange(date1);
        }
        if (date.onDateStringChange) {
          date.onDateStringChange(tmp);
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
    const spinnerState = nativeEvent.spinnerState;
    if (tmp) {
      tmp = id !== current;
    }
    if (!tmp) {
      if (date.onStateChange) {
        date.onStateChange(spinnerState);
      }
    }
  }, items1);
  let closure_3 = tmp2;
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
  date = date.date;
  if (typeof toIsoWithTimeZoneOffset === "function") {
    let toISOStringResult;
    if (date) {
      toISOStringResult = date.toISOString();
    }
    obj.date = toISOStringResult;
    obj.id = current;
    const minimumDate = date.minimumDate;
    if (typeof toIsoWithTimeZoneOffset === "function") {
      let toISOStringResult1;
      if (minimumDate) {
        toISOStringResult1 = minimumDate.toISOString();
      }
      obj.minimumDate = toISOStringResult1;
      const maximumDate = date.maximumDate;
      if (typeof toIsoWithTimeZoneOffset === "function") {
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
            size = { width: num, height: 180 };
            const items3 = [size, date.style];
            obj.style = items3;
            obj.onChange = tmp;
            obj.onStateChange = tmp2;
            const obj2 = { props: obj, id: current };
            const obj3 = require("metro/09235__.js");
            const modal = obj3.useModal(obj2);
            let tmp16 = null;
            if (!date.modal) {
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
});
function getStyle(arg0) {}
function getTimezoneOffsetInMinutes(arg0) {}
function toIsoWithTimeZoneOffset(arg0) {}
function fromIsoWithTimeZoneOffset(arg0) {}

export default memoResult;
export const DatePickerAndroid = memoResult;
