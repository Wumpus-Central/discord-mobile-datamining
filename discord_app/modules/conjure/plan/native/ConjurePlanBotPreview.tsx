// discord_app/modules/conjure/plan/native/ConjurePlanBotPreview.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import RowGeneratorDefault from "../../../messages/native/renderer/RowGenerator.tsx";
import ChatItemDefault from "../../../../components_native/chat/ChatItem.tsx";
import ConjurePlanCommandMenuPreviewDefault from "ConjurePlanCommandMenuPreview.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const rowGenerator = new RowGeneratorDefault();
const createStyles = fn(5096);
let obj2 = { chat: null, menu: null };
let tmp3 = new RowGeneratorDefault();
obj2.chat = { paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
let obj3 = { paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
obj2.menu = { paddingTop: nativeDefault.space.PX_4, paddingLeft: fn(11832).MESSAGE_CONTENT_INSET, paddingRight: fn(11832).MESSAGE_EDGE_INSET };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function SampleMessage(record) {
  const cResult = c.c(6);
  record = record.record;
  const botIcon = record.botIcon;
  if (cResult[0] === botIcon) {
    if (cResult[1] === record.author.bot) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === tmp3) {
      if (cResult[4] === record) {
        let tmp4 = cResult[5];
      }
      return tmp4;
    }
    const obj2 = { rowGenerator, message: record, modifyRow: tmp3, pointerEvents: "none" };
    const tmp8 = hasOwnProperty(ChatItemDefault, obj2);
    cResult[3] = tmp3;
    cResult[4] = record;
    cResult[5] = tmp8;
    tmp4 = tmp8;
  }
  const fn = function t(message) {
    let bot = record.author.bot;
    if (bot) {
      bot = null != botIcon;
    }
    if (bot) {
      bot = null != message.message;
    }
    if (bot) {
      message.message.avatarURL = botIcon;
    }
  };
  cResult[0] = botIcon;
  cResult[1] = record.author.bot;
  cResult[2] = fn;
  tmp3 = fn;
}) : (function SampleMessage(record) {
  record = record.record;
  const botIcon = record.botIcon;
  const items = [record, botIcon];
  const callback = noop.useCallback((message) => {
    let bot = record.author.bot;
    if (bot) {
      bot = null != botIcon;
    }
    if (bot) {
      bot = null != message.message;
    }
    if (bot) {
      message.message.avatarURL = botIcon;
    }
  }, items);
  return hasOwnProperty(ChatItemDefault, { rowGenerator, message: record, modifyRow: callback, pointerEvents: "none" });
});
ReactCompilerGating = fn(558);
let obj4 = { paddingTop: nativeDefault.space.PX_4, paddingLeft: fn(11832).MESSAGE_CONTENT_INSET, paddingRight: fn(11832).MESSAGE_EDGE_INSET };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanBotPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanBotPreview(arg0) {
  const cResult = require("c").c(13);
  ({ projectId, exchanges } = arg0);
  const tmp4 = closure_8();
  _require = tmp4;
  const obj = require("c");
  const conjurePlanBotPreviewItems = require("useConjurePlanBotPreviewItems").useConjurePlanBotPreviewItems(projectId, exchanges);
  ({ items, botIcon } = conjurePlanBotPreviewItems);
  appIconSrc = conjurePlanBotPreviewItems.appIconSrc;
  if (0 === items.length) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const Text = tmp(tmp2[11]).Text;
      const intl = tmp(tmp2[12]).intl;
      { variant: "text-sm/semibold", color: "text-muted", children: null }.children = intl.string(botIcon(tmp2[13]).sA1lTv);
      class P {
        constructor(arg0) {
          menu = arg0.menu;
          tmp2 = View;
          tmp3 = jsx;
          obj = { record: arg0.record, botIcon };
          tmp = jsxs;
          items = [, ];
          items[0] = jsx(SampleMessage, obj);
          tmp3Result = null;
          if (null != menu) {
            obj1 = { style: null, children: null };
            tmp5 = closure_0;
            obj1.style = closure_0.menu;
            tmp6 = closure_1;
            tmp7 = closure_2;
            obj4 = { target: null, commandName: null, appIconSrc: null };
            ({ target: obj3.target, commandName: obj3.commandName } = menu);
            tmp8 = appIconSrc;
            obj4.appIconSrc = appIconSrc;
            obj1.children = tmp3(closure_1(closure_2[14]), obj4);
            tmp3Result = tmp3(tmp2, obj1);
          }
          items[1] = tmp3Result;
          return tmp(tmp2, { children: items }, arg0.key);
        }
      }
      cResult[0] = tmp9;
      let first = tmp9;
      const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    } else {
      first = cResult[0];
    }
    if (cResult[1] === appIconSrc) {
      if (cResult[2] === botIcon) {
        if (cResult[3] === items) {
          if (cResult[4] === tmp4.menu) {
            if (cResult[10] === tmp4.chat) {
              if (cResult[11] === tmp11) {
                let tmp15 = cResult[12];
              }
              return tmp15;
            }
            const obj4 = { direction: "vertical", spacing: 4, children: null };
            const items1 = [first, ];
            class P {
              constructor(arg0) {
                menu = arg0.menu;
                tmp2 = View;
                tmp3 = jsx;
                obj = { record: arg0.record, botIcon };
                tmp = jsxs;
                items = [, ];
                items[0] = jsx(SampleMessage, obj);
                tmp3Result = null;
                if (null != menu) {
                  obj1 = { style: null, children: null };
                  tmp5 = closure_0;
                  obj1.style = closure_0.menu;
                  tmp6 = closure_1;
                  tmp7 = closure_2;
                  obj4 = { target: null, commandName: null, appIconSrc: null };
                  ({ target: obj3.target, commandName: obj3.commandName } = menu);
                  tmp8 = appIconSrc;
                  obj4.appIconSrc = appIconSrc;
                  obj1.children = tmp3(closure_1(closure_2[14]), obj4);
                  tmp3Result = tmp3(tmp2, obj1);
                }
                items[1] = tmp3Result;
                return tmp(tmp2, { children: items }, arg0.key);
              }
            }
            let obj5 = { style: tmp10, children: cResult[5] };
            items1[1] = closure_5(View, obj5);
            obj4.children = items1;
            const tmp18 = closure_6(tmp(tmp2[15]).Stack, obj4);
            cResult[10] = tmp4.chat;
            cResult[11] = cResult[5];
            cResult[12] = tmp18;
            tmp15 = tmp18;
          }
        }
      }
    }
    if (cResult[6] === appIconSrc) {
      if (cResult[7] === botIcon) {
        if (cResult[8] === tmp4.menu) {
          let tmp12 = cResult[9];
        }
        const mapped = items.map(tmp12);
        cResult[1] = appIconSrc;
        cResult[2] = botIcon;
        class P {
          constructor(arg0) {
            menu = arg0.menu;
            tmp2 = View;
            tmp3 = jsx;
            obj = { record: arg0.record, botIcon };
            tmp = jsxs;
            items = [, ];
            items[0] = jsx(SampleMessage, obj);
            tmp3Result = null;
            if (null != menu) {
              obj1 = { style: null, children: null };
              tmp5 = closure_0;
              obj1.style = closure_0.menu;
              tmp6 = closure_1;
              tmp7 = closure_2;
              obj4 = { target: null, commandName: null, appIconSrc: null };
              ({ target: obj3.target, commandName: obj3.commandName } = menu);
              tmp8 = appIconSrc;
              obj4.appIconSrc = appIconSrc;
              obj1.children = tmp3(closure_1(closure_2[14]), obj4);
              tmp3Result = tmp3(tmp2, obj1);
            }
            items[1] = tmp3Result;
            return tmp(tmp2, { children: items }, arg0.key);
          }
        }
        items = tmp4.menu;
        cResult[4] = items;
        cResult[5] = mapped;
      }
    }
    class P {
      constructor(arg0) {
        menu = arg0.menu;
        tmp2 = View;
        tmp3 = jsx;
        obj = { record: arg0.record, botIcon };
        tmp = jsxs;
        items = [, ];
        items[0] = jsx(SampleMessage, obj);
        tmp3Result = null;
        if (null != menu) {
          obj1 = { style: null, children: null };
          tmp5 = closure_0;
          obj1.style = closure_0.menu;
          tmp6 = closure_1;
          tmp7 = closure_2;
          obj4 = { target: null, commandName: null, appIconSrc: null };
          ({ target: obj3.target, commandName: obj3.commandName } = menu);
          tmp8 = appIconSrc;
          obj4.appIconSrc = appIconSrc;
          obj1.children = tmp3(closure_1(closure_2[14]), obj4);
          tmp3Result = tmp3(tmp2, obj1);
        }
        items[1] = tmp3Result;
        return tmp(tmp2, { children: items }, arg0.key);
      }
    }
    cResult[6] = appIconSrc;
    cResult[7] = botIcon;
    cResult[8] = tmp4.menu;
    cResult[9] = P;
    tmp12 = P;
  }
  let obj2 = require("useConjurePlanBotPreviewItems");
}) : (function ConjurePlanBotPreview(arg0) {
  importDefault = undefined;
  dependencyMap = undefined;
  ({ projectId, exchanges } = arg0);
  const tmp = closure_8();
  _require = tmp;
  const conjurePlanBotPreviewItems = require("useConjurePlanBotPreviewItems").useConjurePlanBotPreviewItems(projectId, exchanges);
  ({ items, botIcon: c1, appIconSrc: c2 } = conjurePlanBotPreviewItems);
  let tmp5 = null;
  if (0 !== items.length) {
    let obj2 = { direction: "vertical", spacing: 4, children: null };
    const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl = tmp2(1126).intl;
    obj3.children = intl.string(_modDef3849.sA1lTv);
    const items1 = [closure_5(tmp2(5092).Text, obj3), ];
    const obj4 = {
      style: tmp.chat,
      children: items.map((menu) => {
          menu = menu.menu;
          const children = [hasOwnProperty(closure_9, { record: menu.record, botIcon }), ];
          let tmp3Result = null;
          if (null != menu) {
            const obj2 = { style: menu.menu, children: null };
            const obj5 = { target: null, commandName: null, appIconSrc: null };
            ({ target: obj3.target, commandName: obj3.commandName } = menu);
            obj5.appIconSrc = appIconSrc;
            obj2.children = hasOwnProperty(ConjurePlanCommandMenuPreviewDefault, obj5);
            tmp3Result = hasOwnProperty(View, obj2);
          }
          children[1] = tmp3Result;
          return timestampProducer(View, { children }, menu.key);
        })
    };
    items1[1] = closure_5(View, obj4);
    obj2.children = items1;
    tmp5 = closure_6(tmp2(5382).Stack, obj2);
  }
  return tmp5;
});