// discord_app/modules/vibegrations/lib/vibegrationsPreviewNativeSurfaces.tsx
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
    ({ options, subject } = tmp10(cmd, found.answers));
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
    const tmp10Result = tmp10(cmd, found.answers);
  }
}
const RPCCommands = Constants.RPCCommands;
let obj = {
  [RPCCommands.OPEN_CONTEXT_MENU]: (args, contextMenuSelect) => {
    if ("custom" === args.args.type) {
      let items = menuOptionIds(args.args.items);
    } else {
      items = [];
    }
    if ("custom" === args.args.type) {
      contextMenuSelect = contextMenuSelect.contextMenuSelect;
    }
    if ("custom" === args.args.type) {
      if (null == contextMenuSelect) {
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
        } else {
          obj3.result = obj4;
          const _HermesInternal = HermesInternal;
          obj3.answered = 'dismissed \u2014 no item with id "' + contextMenuSelect + '"';
          obj3.options = items;
        }
      }
    } else {
      obj = { result: { opened: true }, answered: "opened, no selection to make" };
      return obj;
    }
  },
  [RPCCommands.SHOW_CONFIRM_MODAL]: (args, confirm) => {
    const title = args.args.title;
    let tmp;
    if (typeof title === "string") {
      if ("" !== title) {
        tmp = title;
      }
    }
    if ("confirm" === args.args.type) {
      const obj2 = { confirmed: tmp2 };
      let result = obj2;
    } else {
      result = { acknowledged: tmp2 };
    }
    const obj3 = { result, answered: null, subject: null };
    let str = "dismissed";
    if (true === confirm.confirm) {
      str = "confirmed";
    }
    obj3.answered = str;
    obj3.subject = tmp;
    return obj3;
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
  [RPCCommands.SHOW_TOOLTIP]: () => ({ result: { shown: true }, answered: "shown" }),
  [RPCCommands.HIDE_TOOLTIP]: () => ({ result: { hidden: true }, answered: "hidden" }),
  [RPCCommands.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.SHOW_TOAST]: () => ({ result: { shown: true }, answered: "shown" }),
  [RPCCommands.OPEN_INVITE_DIALOG]: () => ({ result: "call", answered: false }),
  [RPCCommands.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: "call", answered: false }),
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
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPreviewNativeSurfaces.tsx");

export const ANSWERED_NATIVE_COMMANDS = keys;
export const beginNativeSurfaceSessionForFrame = function beginNativeSurfaceSessionForFrame(
  iframeId,
  native,
  beneathBatches,
) {
  if (null == iframeId) {
    return closure_5;
  } else {
    let answers = native;
    const obj3 = { iframeId, answers: null, recorded: null };
    if (native == null) {
      answers = {};
    }
    obj3.answers = answers;
    obj3.recorded = [];
    beneathBatches = undefined;
    if (beneathBatches != null) {
      beneathBatches = beneathBatches.beneathBatches;
    }
    if (true === beneathBatches) {
      closure_6.push(obj3);
      let arr = closure_6;
    } else {
      arr = closure_6;
      closure_6.unshift(obj3);
    }
    if (1 === arr.length) {
      let result = obj3(13183).setRpcCommandInterceptor(answerFor);
      const obj2 = obj3(13183);
    }
    const obj4 = {
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
            const result = RpcCommandInterception.setRpcCommandInterceptor(null);
          }
        }
      },
    };
    return obj4;
  }
};
