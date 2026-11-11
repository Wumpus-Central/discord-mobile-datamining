// discord_app/modules/clips/useClipMessageNoticeStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import Dispatcher from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = module_560.create(() => ({}));
const subscription = Dispatcher.subscribe("LOGOUT", () => closure_0.setState({}, true));
const result = size.fileFinishedImporting("modules/clips/useClipMessageNoticeStore.tsx");

export function claimClipMessageNotice(manual_sent, id) {
  let flag = null == closure_0.getState()[manual_sent];
  if (flag) {
    const obj2 = {};
    obj2[manual_sent] = id;
    closure_0.setState(obj2);
    flag = true;
  }
  return flag;
}
export function releaseClipMessageNotice(arg0, arg1) {
  if (closure_0.getState()[arg0] === arg1) {
    const obj2 = {};
    obj2[arg0] = undefined;
    closure_0.setState(obj2);
  }
}
export function useClipMessageNoticeOwner(arg0) {
  closure_0 = arg0;
  return closure_0((arg0) => arg0[closure_0]);
}