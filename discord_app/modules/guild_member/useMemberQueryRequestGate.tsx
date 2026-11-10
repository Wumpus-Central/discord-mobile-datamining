// discord_app/modules/guild_member/useMemberQueryRequestGate.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import Dispatcher from "../../Dispatcher.tsx";

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
}
