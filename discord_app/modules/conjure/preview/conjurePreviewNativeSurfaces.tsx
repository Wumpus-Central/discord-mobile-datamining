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
  const iframeId = cmd;
  const found = closure_6.find((iframeId) => iframeId.iframeId === iframeId.iframeId);
  if (null == found) {
    return null;
  } else if (null == obj[cmd.cmd]) {
    return null;
  } else {
    ({ options, subject } = tmp10(cmd));
    if (found.recorded.length >= 20) {
      obj = { result: tmp12 };
      return obj;
    } else {
      let obj2 = { command: cmd.cmd, answered: tmp13 };
      if (null != options) {
        if (options.length > 0) {
          const obj3 = { options };
          let obj6 = obj3;
        }
        const merged = Object.assign(obj6);
        if (null != subject) {
          const obj4 = { subject };
          let obj5 = obj4;
        } else {
          obj5 = {};
        }
        const merged1 = Object.assign(obj5);
        obj2 = tmp2(obj2);
      }
      obj6 = {};
    }
    const tmp10Result = tmp10(cmd);
  }
}
const RPCCommands = Constants.RPCCommands;
let obj = {
  [RPCCommands.OPEN_CONTEXT_MENU]: (args) => {
    if ("custom" !== args.args.type) {
      const obj2 = { result: { opened: true }, answered: "opened, no selection to make" };
      obj = obj2;
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
    obj = {
      result: "confirm" === args.args.type ? { confirmed: false } : { acknowledged: false },
      answered: "dismissed",
      subject: null,
    };
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
    obj = {
      result: { opened: false },
      answered: "cancelled \u2014 an agent may not open external links",
      subject: null,
    };
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
    obj = {
      result: { success: false, didCopyLink: false, didSendMessage: false },
      answered: "closed without sharing \u2014 an agent may not send a message for the user",
      subject: null,
    };
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
  [RPCCommands.OPEN_USER_PROFILE]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.OPEN_USER_POPOUT]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.OPEN_GAME_PROFILE]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.SHOW_TOOLTIP]: () => ({ result: { shown: true }, answered: "shown" }),
  [RPCCommands.HIDE_TOOLTIP]: () => ({ result: { hidden: true }, answered: "hidden" }),
  [RPCCommands.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.SHOW_TOAST]: () => ({ result: { shown: true }, answered: "shown" }),
  [RPCCommands.OPEN_INVITE_DIALOG]: () => ({ result: "code", answered: "Error" }),
  [RPCCommands.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: "code", answered: "Error" }),
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
    const obj2 = { iframeId, recorded: [] };
    beneathBatches = undefined;
    if (beneathBatches != null) {
      beneathBatches = beneathBatches.beneathBatches;
    }
    if (true === beneathBatches) {
      closure_6.push(obj2);
      let arr = closure_6;
    } else {
      arr = closure_6;
      closure_6.unshift(obj2);
    }
    if (1 === arr.length) {
      let result = obj2(11421).setRpcCommandInterceptor(answerFor);
      obj = obj2(11421);
    }
    const obj3 = {
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
            const result = RpcCommandInterception.setRpcCommandInterceptor(null);
          }
        }
      },
    };
    return obj3;
  }
};
