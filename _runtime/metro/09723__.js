// _runtime/metro/09723__.js
import noop from "00019__.js";
import get_ActivityIndicator from "00017__.js";
import 09721__ from "09721__.js";

({ useCallback: closure_0, useEffect: closure_1, useRef: c2 } = noop);
({ NativeEventEmitter: c3, Platform } = get_ActivityIndicator);
const nativeModule = module_9721.getNativeModule();

export const useModal = (props) => {
  props = props.props;
  let id = props.id;
  props = undefined;
  closure_4 = props(false);
  const tmp = props();
  closure_3 = tmp;
  id(() => {
    closure_3.current = props;
  });
  const current = tmp.current;
  const items = [id, props];
  const tmp3 = props((id) => {
    if (id.id === id) {
      closure_4.current = true;
      let date = id.date;
      if (props.onConfirm) {
        const _Date = Date;
        date = new Date(date);
        props.onConfirm(date);
      }
    }
  }, items);
  closure_6 = tmp3;
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
  closure_7 = tmp4;
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
  id(() => {
    let flag = false;
    if (props.modal) {
      flag = false;
      if (!props.open) {
        let open;
        if (current != null) {
          open = current.open;
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
    const obj = new React3(closure_4);
    obj.addListener("onConfirm", closure_6);
    obj.addListener("onCancel", closure_7);
    return () => {
      obj.removeAllListeners("onConfirm");
      obj.removeAllListeners("onCancel");
    };
  }, items4);
};