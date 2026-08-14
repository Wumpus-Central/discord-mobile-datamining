// discord_app/modules/integration_settings/native/useShowUnlinkChannelAlert.tsx
import componentDidMount from "componentDidMount";
import noop from "noop";

const require = arg1;
const result = require("init").fileFinishedImporting("modules/integration_settings/native/useShowUnlinkChannelAlert.tsx");

export default function useShowUnlinkChannelAlert(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const items = [arg0, arg2];
  callback = React.useCallback(callback(function*() {
    let closure_0 = tmp3;
    let c3 = 1;
    yield v0(outer1_2[2]).removeLinkedLobby(outer1_0);
    if (1 === tmp7) {
      c3 = 0;
      const obj1 = v0(outer1_2[3]);
      const obj2 = { title: null, body: null };
      const intl = outer1_0(outer1_2[4]).intl;
      obj2[0] = intl.string(outer1_0(outer1_2[4]).t.vFzPFj);
      const intl2 = outer1_0(outer1_2[4]).intl;
      obj2[1] = intl2.string(outer1_0(outer1_2[4]).t["6D5WVg"]);
      obj1.show(obj2);
      let c4 = 3;
    } else if (arg0 === 1) {
      c4 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      if (callback != null) {
        callback();
      }
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  }), items);
  const items1 = [arg1, callback];
  return React.useCallback(() => {
    let obj = callback2(4706);
    obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.JmUENg);
    const intl2 = callback(1236).intl;
    obj = { applicationName: callback2 };
    obj[1] = intl2.format(callback(1236).t["6l2osp"], obj);
    const intl3 = callback(1236).intl;
    obj[2] = intl3.string(callback(1236).t["ETE/oC"]);
    const intl4 = callback(1236).intl;
    obj[3] = intl4.string(callback(1236).t["cY+Oob"]);
    obj[4] = callback;
    obj[5] = callback2(4795).Colors.RED;
    obj.show(obj);
  }, items1);
};