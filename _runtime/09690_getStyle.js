// _runtime/09690_getStyle.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import noopDefault from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";
import noop from "00019_noop.js";
import getNativeComponent from "09691_getNativeComponent.js";

({ useCallback: obj1, useEffect: c3, useRef: c4 } = noop);
const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;
const jsx = jsxProd.jsx;
const nativeComponent = getNativeComponent.getNativeComponent();
const nativeModule = getNativeComponent.getNativeModule();
const memoResult = noopDefault.memo((date) => {
  const _require = date;
  const current = callback3(Math.random().toString()).current;
  const items = [date, current];
  let tmp = callback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    ({ date, id } = nativeEvent);
    if (null === id) {
      if (typeof closure_1_12 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const _Date = Date;
      date = new Date(date);
      if (date.onDateChange) {
        obj.onDateChange(date);
      }
      if (date.onDateStringChange) {
        obj.onDateStringChange(tmp);
      }
    }
  }, items);
  callback = tmp;
  const items1 = [date, current];
  const tmp2 = callback((nativeEvent) => {
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
  const callback2 = tmp2;
  const items2 = [tmp, tmp2];
  callback2(() => {
    const obj = new closure_1_5(closure_1_8);
    obj.addListener("dateChange", closure_2);
    obj.addListener("spinnerStateChange", closure_3);
    return () => {
      obj.removeAllListeners("dateChange");
      obj.removeAllListeners("spinnerStateChange");
    };
  }, items2);
  let obj = {};
  const merged = Object.assign(date);
  if (typeof toIsoWithTimeZoneOffset !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let toISOStringResult;
  if (date.date) {
    toISOStringResult = date.toISOString();
  }
  obj.date = toISOStringResult;
  obj.id = current;
  const minimumDate = date.minimumDate;
  if (typeof toIsoWithTimeZoneOffset !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let toISOStringResult1;
  if (minimumDate) {
    toISOStringResult1 = minimumDate.toISOString();
  }
  obj.minimumDate = toISOStringResult1;
  const maximumDate = date.maximumDate;
  if (typeof toIsoWithTimeZoneOffset !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let toISOStringResult2;
  if (maximumDate) {
    toISOStringResult2 = maximumDate.toISOString();
  }
  obj.maximumDate = toISOStringResult2;
  if (typeof getTimezoneOffsetInMinutes !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let prop;
  if (null != date.timeZoneOffsetInMinutes) {
    prop = date.timeZoneOffsetInMinutes;
  }
  obj.timezoneOffsetInMinutes = prop;
  if (typeof getStyle !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let num = 310;
  if ("time" === date.mode) {
    num = 240;
  }
  const items3 = [{ width: num, height: 180 }, date.style];
  obj.style = items3;
  obj.onChange = tmp;
  obj.onStateChange = tmp2;
  const str = Math.random();
  const modal = _require(current[4]).useModal({ props: obj, id: current });
  let tmp11 = null;
  if (!date.modal) {
    obj = {};
    const merged1 = Object.assign(obj);
    tmp11 = <closure_7 />;
  }
  return tmp11;
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