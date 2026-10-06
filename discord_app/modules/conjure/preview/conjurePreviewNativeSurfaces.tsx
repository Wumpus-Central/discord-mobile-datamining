// discord_app/modules/conjure/preview/conjurePreviewNativeSurfaces.tsx
import Constants from "../../../Constants.tsx";
import RpcCommandInterception from "../../rpc/RpcCommandInterception.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  let options;
  let subject;
  let closure_0 = cmd;
  const found = closure_6.find((iframeId) => iframeId.iframeId === iframeId.iframeId);
  if (null == found) {
    return null;
  } else if (null == obj[cmd.cmd]) {
    return null;
  } else {
    const tmp11Result = obj[cmd.cmd](cmd);
    ({ options, subject } = tmp11Result);
    const result = tmp11Result.result;
    if (found.recorded.length < 20) {
      const recorded = found.recorded;
      obj = { command: cmd.cmd, answered: tmp13 };
      if (null != options) {
        let obj5;
        let obj4;
        if (options.length > 0) {
          obj5 = { options };
          const obj2 = { options };
        }
        const merged = Object.assign(obj5);
        if (null != subject) {
          obj4 = { subject };
          const obj3 = { subject };
        } else {
          obj4 = {};
        }
        const merged1 = Object.assign(obj4);
        tmp2(obj);
      }
      obj5 = {};
    }
    return { result };
  }
}
const RPCCommands = Constants.RPCCommands;
let obj = {
  [RPCCommands.OPEN_CONTEXT_MENU]: (args) => {
    if ("custom" !== args.args.type) {
      obj = { result: { opened: true }, answered: "opened, no selection to make" };
      const obj2 = { result: { opened: true }, answered: "opened, no selection to make" };
    } else {
      obj = {
        result: { opened: true, selected_id: null },
        answered: "dismissed",
        options: menuOptionIds(args.args.items),
      };
    }
    return obj;
  },
  [RPCCommands.SHOW_CONFIRM_MODAL]: (args) => {
    let tmp;
    const title = args.args.title;
    obj = {
      result: "confirm" === args.args.type ? { confirmed: false } : { acknowledged: false },
      answered: "dismissed",
      subject: tmp,
    };
    tmp = undefined;
    if (typeof title === "string") {
      if ("" !== title) {
        tmp = title;
      }
    }
    return obj;
  },
  [RPCCommands.OPEN_EXTERNAL_LINK]: (args) => {
    let tmp;
    const url = args.args.url;
    obj = {
      result: { opened: false },
      answered: "cancelled \u2014 an agent may not open external links",
      subject: tmp,
    };
    tmp = undefined;
    if (typeof url === "string") {
      if ("" !== url) {
        tmp = url;
      }
    }
    return obj;
  },
  [RPCCommands.SHARE_CONTENT]: (args) => {
    let tmp;
    const preview_title = args.args.preview_title;
    obj = {
      result: { success: false, didCopyLink: false, didSendMessage: false },
      answered: "closed without sharing \u2014 an agent may not send a message for the user",
      subject: tmp,
    };
    tmp = undefined;
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
    return obj;
  },
  [RPCCommands.OPEN_USER_PROFILE]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.OPEN_USER_POPOUT]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.SHOW_TOOLTIP]: () => ({ result: { shown: true }, answered: "shown" }),
  [RPCCommands.HIDE_TOOLTIP]: () => ({ result: { hidden: true }, answered: "hidden" }),
  [RPCCommands.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.SHOW_TOAST]: () => ({ result: { shown: true }, answered: "shown" }),
  [RPCCommands.OPEN_INVITE_DIALOG]: () => ({ result: "unicodeVersion", answered: true }),
  [RPCCommands.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: "unicodeVersion", answered: true }),
};
let closure_5 = {
  drain() {
    return [];
  },
  end() {},
  iframeId: null,
};
let closure_6 = [];
const keys = Object.keys(obj);
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewNativeSurfaces.tsx");

export const ANSWERED_NATIVE_COMMANDS = keys;
export const beginNativeSurfaceSessionForFrame = function beginNativeSurfaceSessionForFrame(iframeId, beneathBatches) {
  if (null == iframeId) {
    return closure_5;
  } else {
    let arr;
    const obj2 = { iframeId, recorded: [] };
    beneathBatches = undefined;
    if (beneathBatches != null) {
      beneathBatches = beneathBatches.beneathBatches;
    }
    if (true === beneathBatches) {
      closure_6.push(obj2);
      arr = closure_6;
    } else {
      arr = closure_6;
      closure_6.unshift(obj2);
    }
    if (1 === arr.length) {
      obj = obj2(9008);
      let result = obj.setRpcCommandInterceptor(answerFor);
    }
    return {
      iframeId,
      drain() {
        const recorded = obj2.recorded;
        return recorded.splice(0, obj2.recorded.length);
      },
      end() {
        const index = closure_6.indexOf(obj2);
        if (-1 !== index) {
          closure_6.splice(index, 1);
          if (0 === closure_6.length) {
            obj = RpcCommandInterception;
            const result = obj.setRpcCommandInterceptor(null);
          }
        }
      },
    };
  }
};
