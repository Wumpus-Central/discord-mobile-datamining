// === Module 12732: useMemberQueryRequestGate ===

// Module 12732 (useMemberQueryRequestGate)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import Dispatcher from "Dispatcher" /* 572 */;

function createMemberQueryRequestGate() {
  c0 = null;
  function shouldRequest(arg0) {
    const combined = "" + closure_2 + ":" + arg0;
    let flag = combined !== c0;
    if (flag) {
      c0 = combined;
      flag = true;
    }
    return flag;
  }
  shouldRequest.reset = () => {
    c0 = null;
  };
  return shouldRequest;
}
let closure_2 = 0;
const subscription = Dispatcher.subscribe("CONNECTION_OPEN", () => {
  closure_2 = closure_2 + 1;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member/useMemberQueryRequestGate.tsx");

export default function useMemberQueryRequestGate() {
  return _slicedToArray(noop.useState(createMemberQueryRequestGate), 1)[0];
};