// discord_app/modules/rpc/helpers/stripSensitiveLoggingData.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";

const RPCCommands = ME.RPCCommands;
let c1 = "<removed>";
const result = set.fileFinishedImporting("modules/rpc/helpers/stripSensitiveLoggingData.tsx");

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
          obj = {};
          const merged1 = Object.assign(merged3);
        }
      }
      obj = {};
      const merged2 = Object.assign(merged3);
      obj1 = {};
      merged3 = Object.assign(merged3.data);
      obj1.access_token = c1;
      obj.data = obj1;
    }
  } else {
    const cmd = obj.cmd;
    if (RPCCommands.AUTHENTICATE !== cmd) {
      if (RPCCommands.GET_PROVIDER_ACCESS_TOKEN !== cmd) {
        let obj2 = {};
        const merged4 = Object.assign(obj);
      }
    }
    const obj3 = {};
    const merged5 = Object.assign(obj);
    const obj4 = {};
    const merged6 = Object.assign(obj.args);
    obj = c1;
    obj4.access_token = c1;
    obj3.args = obj4;
    obj2 = obj3;
  }
}
