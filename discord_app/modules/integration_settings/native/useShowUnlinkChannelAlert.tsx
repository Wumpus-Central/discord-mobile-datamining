// === Module 10684: useShowUnlinkChannelAlert ===

// Module 10684 (useShowUnlinkChannelAlert)
import intl5 from "intl" /* 1126 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import AlertDefault from "Alert" /* 5790 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4;

const result = size.fileFinishedImporting("modules/integration_settings/native/useShowUnlinkChannelAlert.tsx");

export default function useShowUnlinkChannelAlert(arg0, applicationName, arg2) {
  let onConfirm;
  let closure_0 = arg0;
  let closure_2 = arg2;
  const items = [arg0, arg2];
  onConfirm = react.useCallback(onConfirm(function*() {
    let intl;
    let intl2;
    let v1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 1;
            const obj3 = v1(closure_2[2]);
            v1 = 2;
            c4 = 1;
            const obj5 = { value: obj3.removeLinkedLobby(tmp), done: false };
            return obj5;
          }
        } else {
          if (1 === tmp4) {
            c3 = 0;
            const obj6 = { title: intl.string(tmp(closure_2[4]).t.vFzPFj), body: intl2.string(tmp(closure_2[4]).t["6D5WVg"]) };
            const show = v1(closure_2[3]).show;
            const tmp11 = v1(closure_2[3]);
            intl = tmp(closure_2[4]).intl;
            intl2 = tmp(closure_2[4]).intl;
            show(obj6);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (closure_128_2 != null) {
              closure_128_2();
            }
            c3 = 0;
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp21) {
        closure_2 = tmp21;
        if (0 === c3) {
          c4 = 3;
          throw tmp21;
        } else {
          v1 = 1;
        }
      }
    }
  }), items);
  const items1 = [applicationName, onConfirm];
  return react.useCallback(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj2;
    const obj = { title: intl.string(intl5.t.JmUENg), body: intl2.format(intl5.t["6l2osp"], obj2), cancelText: intl3.string(intl5.t["ETE/oC"]), confirmText: intl4.string(intl5.t["cY+Oob"]), onConfirm, confirmColor: AlertDefault.Colors.RED };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl5.intl;
    intl2 = intl5.intl;
    obj2 = { applicationName };
    intl3 = intl5.intl;
    intl4 = intl5.intl;
    show(obj);
  }, items1);
};