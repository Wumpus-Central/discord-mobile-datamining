// === Module 9578: stripSensitiveLoggingData ===

// Module 9578 (stripSensitiveLoggingData)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const RPCCommands = Constants.RPCCommands;
let c1 = "<removed>";
const result = size.fileFinishedImporting("modules/rpc/helpers/stripSensitiveLoggingData.tsx");

export default function stripSensitiveLoggingData(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  const args = obj.args;
  let tmp2 = typeof args === "object";
  if (typeof args === "object") {
    tmp2 = typeof obj.cmd === "string";
  }
  let merged3 = obj;
  if (!tmp2) {
    const data = merged3.data;
    let tmp13 = typeof data === "object";
    if (typeof data === "object") {
      tmp13 = typeof merged3.cmd === "string";
    }
    if (!tmp13) {
      return merged3;
    } else {
      const cmd2 = merged3.cmd;
      if (RPCCommands.AUTHENTICATE !== cmd2) {
        if (RPCCommands.GET_PROVIDER_ACCESS_TOKEN !== cmd2) {
          const obj2 = {};
          const merged1 = Object.assign(merged3);
        }
      }
      const obj3 = {};
      const merged2 = Object.assign(merged3);
      const obj4 = {};
      merged3 = Object.assign(merged3.data);
      obj4.access_token = access_token;
      obj3.data = obj4;
    }
  } else {
    const cmd = obj.cmd;
    if (RPCCommands.AUTHENTICATE !== cmd) {
      if (RPCCommands.GET_PROVIDER_ACCESS_TOKEN !== cmd) {
        const obj5 = {};
        const merged4 = Object.assign(obj);
      }
    }
    const obj6 = {};
    const merged5 = Object.assign(obj);
    const obj7 = {};
    const merged6 = Object.assign(obj.args);
    obj = access_token;
    obj7.access_token = access_token;
    obj6.args = obj7;
  }
};