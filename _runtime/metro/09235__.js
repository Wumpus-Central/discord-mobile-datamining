// === Module 9235: ? ===

// Module 9235
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_9233 from "module_9233" /* 9233 */;

let closure_4;

let Platform;
let _window;
let c2;
let c3;
let map;
({ useCallback: _window, useEffect: map, useRef: c2 } = react);
({ NativeEventEmitter: c3, Platform } = react_native);
const nativeModule = module_9233.getNativeModule();

export const useModal = (props) => {
  props = props.props;
  let id = props.id;
  props = undefined;
  closure_4 = props(false);
  const tmp = props();
  let closure_3 = tmp;
  id(() => {
    closure_3.current = props;
  });
  const current = tmp.current;
  const items = [id, props];
  const tmp3 = props(function(id) {
    if (id.id === id) {
      closure_4.current = true;
      if (props.onConfirm) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const onConfirm = props.onConfirm;
        const date1 = new Date(id.date);
        onConfirm(date1);
      }
    }
  }, items);
  let closure_6 = tmp3;
  const items1 = [id, props];
  const tmp4 = props((id) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    if (id === id) {
      closure_4.current = true;
      if (props.onCancel) {
        props.onCancel();
      }
    }
  }, items1);
  let closure_7 = tmp4;
  const items2 = [tmp4, tmp3, current, props];
  id(() => {
    let flag = false;
    if (props.modal) {
      flag = false;
      if (props.open) {
        let open;
        if (current != null) {
          open = current.open;
        }
        flag = !open;
      }
    }
    if (flag) {
      closure_4.current = false;
      closure_4.openPicker(props, closure_6, closure_7);
    }
  }, items2);
  const items3 = [current, props];
  const tmp6 = id(() => {
    let flag = false;
    if (props.modal) {
      flag = false;
      if (!props.open) {
        let open;
        if (current != null) {
          open = current.open;
        }
        flag = open && !tmp3;
      }
    }
    if (flag) {
      closure_4.current = true;
      closure_4.closePicker();
    }
  }, items3);
  const items4 = [tmp4, tmp3];
  id(() => {
    const obj = new _false(closure_4);
    obj.addListener("onConfirm", closure_6);
    obj.addListener("onCancel", closure_7);
    return () => {
      obj.removeAllListeners("onConfirm");
      obj.removeAllListeners("onCancel");
    };
  }, items4);
};