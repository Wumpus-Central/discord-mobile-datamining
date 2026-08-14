// _runtime/09044_useModal.js
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import getNativeComponent from "getNativeComponent";

let Platform;
let c0;
let c3;
let closure_1;
let obj1;
({ useCallback: c0, useEffect: closure_1, useRef: obj1 } = noop);
({ NativeEventEmitter: c3, Platform } = get_ActivityIndicator);
getNativeComponent = getNativeComponent.getNativeModule();

export const useModal = (props) => {
  props = props.props;
  let id = props.id;
  props = undefined;
  let c3;
  let closure_4;
  let current;
  let c6;
  let c7;
  closure_4 = props(false);
  const tmp = props();
  c3 = tmp;
  id(() => {
    c3.current = props;
  });
  current = tmp.current;
  const items = [id, props];
  const tmp3 = props((id) => {
    if (id.id === id) {
      closure_4.current = true;
      let date = id.date;
      if (props.onConfirm) {
        const _Date = Date;
        date = new Date(date);
        obj.onConfirm(date);
      }
      obj = props;
    }
  }, items);
  c6 = tmp3;
  const items1 = [id, props];
  const tmp4 = props((id) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    if (id === id) {
      closure_4.current = true;
      if (props.onCancel) {
        obj.onCancel();
      }
      obj = props;
    }
  }, items1);
  c7 = tmp4;
  const items2 = [tmp4, tmp3, current, props];
  id(() => {
    let flag = false;
    if (props.modal) {
      flag = false;
      if (tmp.open) {
        let open;
        if (tmp2 != null) {
          open = tmp2.open;
        }
        flag = !open;
      }
    }
    if (flag) {
      closure_4.current = false;
      closure_4.openPicker(tmp, c6, c7);
    }
  }, items2);
  const items3 = [current, props];
  id(() => {
    let flag = false;
    if (props.modal) {
      flag = false;
      if (!props.open) {
        let open;
        if (tmp != null) {
          open = tmp.open;
        }
        flag = open && !tmp3;
        const tmp6 = open && !tmp3;
      }
    }
    if (flag) {
      closure_4.current = true;
      closure_4.closePicker();
    }
  }, items3);
  const items4 = [tmp4, tmp3];
  id(() => {
    const obj = new c3(closure_4);
    obj.addListener("onConfirm", c6);
    obj.addListener("onCancel", c7);
    return () => {
      obj.removeAllListeners("onConfirm");
      obj.removeAllListeners("onCancel");
    };
  }, items4);
};