// === Module 11050: conjurePreviewNativeSurfaces ===

// Module 11050 (conjurePreviewNativeSurfaces)
import RpcCommandInterception from "RpcCommandInterception" /* 9419 */;
import requestConjureDevicePermissions from "requestConjureDevicePermissions" /* 11056 */;
import FramesStore from "FramesStore" /* 6901 */;

const require = globalThis.__r;

require = fn;
function asString(str) {
  let tmp;
  if (typeof str === "string") {
    if ("" !== "") {
      tmp = str;
    }
  }
  return tmp;
}
function menuOptionIds(items) {
  items = items2;
  if (items2 === undefined) {
    items = [];
  }
  if (Array.isArray(items)) {
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      if (items.length >= 40) {
        iter.return();
        break;
      } else {
        if (null != tmp6) {
          if (typeof tmp6 === "object") {
            let tmp17 = asString(tmp6.id);
            if (null != tmp17) {
              let arr = items.push(tmp18);
            }
            let tmp13 = menuOptionIds(tmp6.items, items);
          }
        }
        continue;
      }
      return items;
    }
  } else {
    return items;
  }
}
function answerFor(cmd) {
  _require = cmd;
  const found = closure_8.find((iframeId) => iframeId.iframeId === iframeId.iframeId);
  closure_129_0 = undefined;
  if (cmd.cmd === RPCCommands.CAPTURE_SCREEN) {
    const frameByIframeId = FramesStore.getFrameByIframeId(cmd.iframeId);
    let applicationId;
    if (frameByIframeId != null) {
      applicationId = frameByIframeId.applicationId;
    }
    closure_129_0 = applicationId;
    let tmp8 = null;
    if (null != applicationId) {
      obj = _require;
      let conjurePreviewGameCapture = dependencyMap;
      tmp8 = null;
      if (obj2.hasConjurePreviewGameCapture(applicationId)) {
        if (cmd.cmd === RPCCommands.CAPTURE_SCREEN) {
          const obj3 = { result: null, answered: "returned the selected game capture" };
          obj = obj(11051);
          conjurePreviewGameCapture = obj.readConjurePreviewGameCapture(applicationId);
          obj3.result = conjurePreviewGameCapture;
          let obj4 = obj3;
        } else {
          obj4 = { result: null, answered: "screen capture allowed for the selected game capture" };
          const obj5 = { permissions: null };
          const prop = obj(11055).CONJURE_DEVICE_PERMISSION_NAMES;
          obj5.permissions = prop.map((permission) => {
            if ("screen_capture" === permission) {
              const obj2 = { permission, state: "granted" };
              let conjureDevicePermissionStatus = obj2;
            } else {
              conjureDevicePermissionStatus = requestConjureDevicePermissions.getConjureDevicePermissionStatus(closure_0, permission);
            }
            return conjureDevicePermissionStatus;
          });
          obj4.result = obj5;
        }
      }
      obj2 = require("conjurePreviewGameCapture");
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = null;
  }
  if (tmp3 == null) {
    let tmp11 = null;
    if (null != found) {
      let tmp12Result;
      if (obj[cmd.cmd] != null) {
        tmp12Result = tmp12(cmd);
      }
      if (tmp12Result == null) {
        tmp12Result = null;
      }
      tmp11 = tmp12Result;
    }
    tmp3 = tmp11;
  }
  if (null == tmp3) {
    return null;
  } else {
    ({ options, subject } = tmp3);
    let tmp14 = null != found;
    ({ result, answered } = tmp3);
    if (tmp14) {
      tmp14 = cmd.cmd !== RPCCommands.GET_DEVICE_PERMISSIONS;
    }
    if (tmp14) {
      tmp14 = found.recorded.length < 20;
    }
    if (!tmp14) {
      const obj6 = { result };
      return obj6;
    } else {
      let obj7 = { command: cmd.cmd, answered };
      if (null != options) {
        if (options.length > 0) {
          const obj8 = { options };
          let obj11 = obj8;
        }
        const merged = Object.assign(obj11);
        if (null != subject) {
          const obj9 = { subject };
          let obj10 = obj9;
        } else {
          obj10 = {};
        }
        const merged1 = Object.assign(obj10);
        obj7 = tmp15(obj7);
      }
      obj11 = {};
    }
  }
}
const RPCCommands = fn(1072).RPCCommands;
let obj = {
  [RPCCommands.OPEN_CONTEXT_MENU]: (args) => {
    if ("custom" !== args.args.type) {
      const obj2 = { result: { opened: true }, answered: "opened, no selection to make" };
      obj = obj2;
    } else {
      obj = { result: { opened: true, selected_id: null }, answered: "dismissed", options: menuOptionIds(args.args.items) };
    }
    return obj;
  },
  [RPCCommands.SHOW_CONFIRM_MODAL]: (args) => {
    obj = { result: "confirm" === args.args.type ? { confirmed: false } : { acknowledged: false }, answered: "dismissed", subject: null };
    const title = args.args.title;
    let tmp;
    if (typeof title === "string") {
      if ("" !== title) {
        tmp = title;
      }
    }
    obj.subject = tmp;
    return obj;
  },
  [RPCCommands.OPEN_EXTERNAL_LINK]: (args) => {
    obj = { result: { opened: false }, answered: "cancelled \u2014 an agent may not open external links", subject: null };
    const url = args.args.url;
    let tmp;
    if (typeof url === "string") {
      if ("" !== url) {
        tmp = url;
      }
    }
    obj.subject = tmp;
    return obj;
  },
  [RPCCommands.SHARE_CONTENT]: (args) => {
    obj = { result: { success: false, didCopyLink: false, didSendMessage: false }, answered: "closed without sharing \u2014 an agent may not send a message for the user", subject: null };
    const preview_title = args.args.preview_title;
    let tmp;
    if (typeof preview_title === "string") {
      if ("" !== preview_title) {
        tmp = preview_title;
      }
    }
    if (tmp == null) {
      const content = args.args.content;
      let tmp2;
      if (typeof content === "string") {
        if ("" !== content) {
          tmp2 = content;
        }
      }
      tmp = tmp2;
    }
    obj.subject = tmp;
    return obj;
  },
  [RPCCommands.REQUEST_DEVICE_PERMISSIONS]: (args) => {
    if (Array.isArray(args.args.permissions)) {
      const permissions = args.args.permissions;
      let found = permissions.filter((item) => typeof item === "string");
    } else {
      found = [];
    }
    obj = { result: { permissions: found.map((permission) => ({ permission, state: "denied" })) }, answered: "denied; an agent may not grant device access", options: found };
    return obj;
  },
  [RPCCommands.CAPTURE_SCREEN]: () => ({ result: { status: "permission_denied" }, answered: "denied; an agent may not capture the screen" }),
  [RPCCommands.SELECT_VOICE_CHANNEL]: (args) => {
    const channel_id = args.args.channel_id;
    let subject;
    if (typeof channel_id === "string") {
      if ("" !== channel_id) {
        subject = channel_id;
      }
    }
    return { result: null, answered: "not joined; an agent may not move the user in or out of voice", subject };
  },
  [RPCCommands.OPEN_USER_PROFILE]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.OPEN_USER_POPOUT]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.OPEN_GAME_PROFILE]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.SHOW_TOOLTIP]: () => ({ result: { shown: true }, answered: "shown" }),
  [RPCCommands.HIDE_TOOLTIP]: () => ({ result: { hidden: true }, answered: "hidden" }),
  [RPCCommands.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.SHOW_TOAST]: () => ({ result: { shown: true }, answered: "shown" }),
  [RPCCommands.OPEN_INVITE_DIALOG]: () => ({ result: "channel", answered: "<string:35806785>" }),
  [RPCCommands.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: "channel", answered: "<string:35806785>" })
};
let closure_7 = {
  drain() {
    return [];
  },
  end() {

  },
  iframeId: null
};
let closure_8 = [];
let closure_10 = 0;
const keys = Object.keys(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewNativeSurfaces.tsx");

export const ANSWERED_NATIVE_COMMANDS = keys;
export function beginNativeSurfaceSessionForFrame(iframeId, beneathBatches) {
  if (null == iframeId) {
    return closure_7;
  } else {
    const obj2 = { iframeId, recorded: [] };
    beneathBatches = undefined;
    if (beneathBatches != null) {
      beneathBatches = beneathBatches.beneathBatches;
    }
    if (true === beneathBatches) {
      closure_8.push(obj2);
      let arr = closure_8;
    } else {
      closure_8.unshift(obj2);
      arr = closure_8;
    }
    if (arr.length > 0) {
      let tmp9 = answerFor;
    } else {
      tmp9 = null;
    }
    let result = obj2(9419).setRpcCommandInterceptor(tmp9);
    const obj3 = {
      iframeId,
      drain() {
          const recorded = obj2.recorded;
          return recorded.splice(0, obj2.recorded.length);
        },
      end() {
          const index = closure_8.indexOf(obj2);
          if (-1 !== index) {
            closure_8.splice(index, 1);
            if (closure_8.length > 0) {
              let tmp6 = answerFor;
            } else {
              tmp6 = null;
            }
            const result = RpcCommandInterception.setRpcCommandInterceptor(tmp6);
          }
        }
    };
    return obj3;
  }
}
export function holdPreviewGameCaptureAnswers() {
  closure_10 = closure_10 + 1;
  if (length.length > 0) {
    let tmp2 = answerFor;
  } else {
    tmp2 = null;
  }
  let result = require("RpcCommandInterception").setRpcCommandInterceptor(tmp2);
  _require = false;
  return () => {
    if (!c0) {
      c0 = true;
      closure_10 = closure_10 - 1;
      if (length.length > 0) {
        let tmp6 = answerFor;
      } else {
        tmp6 = null;
      }
      const result = RpcCommandInterception.setRpcCommandInterceptor(tmp6);
    }
  };
}