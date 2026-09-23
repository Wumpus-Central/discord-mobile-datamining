// === Module 11280: useShowUnlinkChannelAlert ===

// Module 11280 (useShowUnlinkChannelAlert)
import util from "util" /* 1115 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5194 */;
import common_AlertDefault from "common/Alert" /* 5290 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/integration_settings/native/useShowUnlinkChannelAlert.tsx");

export default function useShowUnlinkChannelAlert(arg0, applicationName, arg2) {
  closure_0 = arg0;
  closure_2 = arg2;
  const items = [arg0, arg2];
  onConfirm = noop.useCallback(onConfirm(function*() {
    yield v2(tmp23[2]).removeLinkedLobby(tmp3);
    if (1 === tmp7) {
      c3 = 0;
      const obj7 = { title: null, body: null };
      const intl = tmp3(tmp23[4]).intl;
      obj7.title = intl.string(tmp3(tmp23[4]).t.vFzPFj);
      const intl2 = tmp3(tmp23[4]).intl;
      obj7.body = intl2.string(tmp3(tmp23[4]).t["6D5WVg"]);
      v2(tmp23[3]).show(obj7);
      c4 = 3;
      v2(tmp23[3]);
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      if (closure_128_2 != null) {
        closure_128_2();
      }
      c3 = 0;
    }
    return value;
  }), items);
  const items1 = [applicationName, onConfirm];
  return noop.useCallback(() => {
    const obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.JmUENg);
    const intl2 = util.intl;
    obj2.body = intl2.format(util.t["6l2osp"], { applicationName });
    const intl3 = util.intl;
    obj2.cancelText = intl3.string(util.t["ETE/oC"]);
    const intl4 = util.intl;
    obj2.confirmText = intl4.string(util.t["cY+Oob"]);
    obj2.onConfirm = onConfirm;
    obj2.confirmColor = common_AlertDefault.Colors.RED;
    actions_AlertActionCreatorsDefault.show(obj2);
  }, items1);
};