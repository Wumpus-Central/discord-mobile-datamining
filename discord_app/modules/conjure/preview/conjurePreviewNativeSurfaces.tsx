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
    const tmp11Result = obj[cmd.cmd](cmd, found.answers);
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
  [RPCCommands.OPEN_CONTEXT_MENU]: (args, contextMenuSelect) => {
    let items;
    if ("custom" === args.args.type) {
      items = menuOptionIds(args.args.items);
    } else {
      items = [];
    }
    if ("custom" === args.args.type) {
      contextMenuSelect = contextMenuSelect.contextMenuSelect;
    }
    if ("custom" === args.args.type) {
      let tmp6;
      if (null == contextMenuSelect) {
        tmp6 = { result: { opened: true, selected_id: null }, answered: "dismissed", options: items };
        const obj2 = { result: { opened: true, selected_id: null }, answered: "dismissed", options: items };
      } else {
        const obj3 = { result: null, answered: null, options: null };
        const obj4 = { opened: true, selected_id: null };
        if (items.includes(contextMenuSelect)) {
          obj4.selected_id = contextMenuSelect;
          obj3.result = obj4;
          const _HermesInternal2 = HermesInternal;
          obj3.answered = 'selected "' + contextMenuSelect + '"';
          obj3.options = items;
          tmp6 = obj3;
        } else {
          obj3.result = obj4;
          const _HermesInternal = HermesInternal;
          obj3.answered = 'dismissed \u2014 no item with id "' + contextMenuSelect + '"';
          obj3.options = items;
          tmp6 = obj3;
        }
      }
      obj = tmp6;
    } else {
      obj = { result: { opened: true }, answered: "opened, no selection to make" };
    }
    return obj;
  },
  [RPCCommands.SHOW_CONFIRM_MODAL]: (args, confirm) => {
    let result;
    let str;
    const title = args.args.title;
    let tmp;
    const _confirm = confirm.confirm;
    if (typeof title === "string") {
      if ("" !== title) {
        tmp = title;
      }
    }
    if ("confirm" === args.args.type) {
      result = { confirmed: true === _confirm };
      const obj2 = { confirmed: true === _confirm };
    } else {
      result = { acknowledged: true === _confirm };
    }
    const obj3 = { result, answered: str, subject: tmp };
    str = "dismissed";
    if (true === _confirm) {
      str = "confirmed";
    }
    return obj3;
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
  [RPCCommands.OPEN_INVITE_DIALOG]: () => ({ result: "unicodeVersion", answered: "ripple" }),
  [RPCCommands.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: "unicodeVersion", answered: "ripple" }),
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
export const beginNativeSurfaceSessionForFrame = function beginNativeSurfaceSessionForFrame(
  iframeId,
  native,
  beneathBatches,
) {
  if (null == iframeId) {
    return closure_5;
  } else {
    let arr;
    let answers = native;
    const obj3 = { iframeId, answers, recorded: [] };
    if (native == null) {
      answers = {};
    }
    beneathBatches = undefined;
    if (beneathBatches != null) {
      beneathBatches = beneathBatches.beneathBatches;
    }
    if (true === beneathBatches) {
      closure_6.push(obj3);
      arr = closure_6;
    } else {
      arr = closure_6;
      closure_6.unshift(obj3);
    }
    if (1 === arr.length) {
      const obj2 = obj3(8975);
      let result = obj2.setRpcCommandInterceptor(answerFor);
    }
    return {
      iframeId,
      drain() {
        const recorded = obj3.recorded;
        return recorded.splice(0, obj3.recorded.length);
      },
      end() {
        const index = closure_6.indexOf(obj3);
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
