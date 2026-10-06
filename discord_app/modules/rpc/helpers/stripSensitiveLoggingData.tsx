// === Module 9056: stripSensitiveLoggingData ===

// Module 9056 (stripSensitiveLoggingData)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const RPCCommands = Constants.RPCCommands;
let c1 = "<removed>";
const result = size.fileFinishedImporting("modules/rpc/helpers/stripSensitiveLoggingData.tsx");

export default function stripSensitiveLoggingData(arg0) {
  let obj4;
  let obj7;
  const obj = {};
  const merged = Object.assign(arg0);
  const args = obj.args;
  let tmp2 = typeof args === "object";
  if (typeof args === "object") {
    tmp2 = typeof obj.cmd === "string";
  }
  let tmp3 = obj;
  if (tmp2) {
    const cmd = obj.cmd;
    if (RPCCommands.AUTHENTICATE !== cmd) {
      let obj2;
      if (RPCCommands.GET_PROVIDER_ACCESS_TOKEN !== cmd) {
        obj2 = {};
        const merged1 = Object.assign(obj);
      }
      tmp3 = obj2;
    }
    const obj3 = { args: obj4 };
    const merged2 = Object.assign(obj);
    obj4 = { access_token };
    const merged3 = Object.assign(obj.args);
    obj2 = obj3;
  }
  const data = tmp3.data;
  let tmp13 = typeof data === "object";
  if (typeof data === "object") {
    tmp13 = typeof tmp3.cmd === "string";
  }
  let tmp14 = tmp3;
  if (tmp13) {
    const cmd2 = tmp3.cmd;
    if (RPCCommands.AUTHENTICATE !== cmd2) {
      let obj5;
      if (RPCCommands.GET_PROVIDER_ACCESS_TOKEN !== cmd2) {
        obj5 = {};
        const merged4 = Object.assign(tmp3);
      }
      tmp14 = obj5;
    }
    const obj6 = { data: obj7 };
    const merged5 = Object.assign(tmp3);
    obj7 = { access_token };
    const merged6 = Object.assign(tmp3.data);
    obj5 = obj6;
  }
  return tmp14;
};