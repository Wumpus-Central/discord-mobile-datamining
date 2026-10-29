// discord_app/modules/conjure/plan/native/ConjurePlanBotPreview.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
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
const createStyles = fn(5005);
let obj2 = { chat: null, menu: null };
let tmp3 = new RowGeneratorDefault();
obj2.chat = {
  paddingVertical: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  overflow: "hidden",
};
let obj3 = {
  paddingVertical: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  overflow: "hidden",
};
obj2.menu = {
  paddingTop: nativeDefault.space.PX_4,
  paddingLeft: fn(12433).MESSAGE_CONTENT_INSET,
  paddingRight: fn(12433).MESSAGE_EDGE_INSET,
};
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SampleMessage(record) {
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
      const fn = function o(message) {
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
    }
  : function SampleMessage(record) {
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
      return hasOwnProperty(ChatItemDefault, {
        rowGenerator,
        message: record,
        modifyRow: callback,
        pointerEvents: "none",
      });
    };
ReactCompilerGating = fn(558);
const obj4 = {
  paddingTop: nativeDefault.space.PX_4,
  paddingLeft: fn(12433).MESSAGE_CONTENT_INSET,
  paddingRight: fn(12433).MESSAGE_EDGE_INSET,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanBotPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePlanBotPreview(arg0) {
      const cResult = require("c").c(12);
      ({ projectId, exchanges } = arg0);
      const tmp2 = closure_8();
      _require = tmp2;
      const obj = require("c");
      const conjurePlanBotPreviewItems = require("useConjurePlanBotPreviewItems").useConjurePlanBotPreviewItems(
        projectId,
        exchanges,
      );
      ({ items, botIcon } = conjurePlanBotPreviewItems);
      appIconSrc = conjurePlanBotPreviewItems.appIconSrc;
      if (0 === items.length) {
        return null;
      } else {
        if (cResult[0] === appIconSrc) {
          if (cResult[1] === botIcon) {
            if (cResult[2] === items) {
              if (cResult[3] === tmp2.menu) {
                if (cResult[9] === tmp2.chat) {
                  if (cResult[10] === tmp4) {
                    let tmp8 = cResult[11];
                  }
                  return tmp8;
                }
                class P {
                  constructor(arg0) {
                    menu = arg0.menu;
                    tmp2 = View;
                    tmp3 = jsx;
                    obj = { record: arg0.record, botIcon };
                    tmp = jsxs;
                    items = [,];
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
                      obj1.children = tmp3(closure_1(closure_2[11]), obj4);
                      tmp3Result = tmp3(tmp2, obj1);
                    }
                    items[1] = tmp3Result;
                    return tmp(tmp2, { children: items }, arg0.key);
                  }
                }
                const obj3 = { style: tmp12, children: cResult[4] };
                const tmp10 = closure_5(View, obj3);
                cResult[9] = tmp2.chat;
                cResult[10] = cResult[4];
                cResult[11] = tmp10;
                tmp8 = tmp10;
              }
            }
          }
        }
        if (cResult[5] === appIconSrc) {
          if (cResult[6] === botIcon) {
            if (cResult[7] === tmp2.menu) {
              let tmp5 = cResult[8];
            }
            const mapped = items.map(tmp5);
            class P {
              constructor(arg0) {
                menu = arg0.menu;
                tmp2 = View;
                tmp3 = jsx;
                obj = { record: arg0.record, botIcon };
                tmp = jsxs;
                items = [,];
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
                  obj1.children = tmp3(closure_1(closure_2[11]), obj4);
                  tmp3Result = tmp3(tmp2, obj1);
                }
                items[1] = tmp3Result;
                return tmp(tmp2, { children: items }, arg0.key);
              }
            }
            cResult[1] = botIcon;
            cResult[2] = items;
            items = tmp2.menu;
            cResult[3] = items;
            cResult[4] = mapped;
          }
        }
        class P {
          constructor(arg0) {
            menu = arg0.menu;
            tmp2 = View;
            tmp3 = jsx;
            obj = { record: arg0.record, botIcon };
            tmp = jsxs;
            items = [,];
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
              obj1.children = tmp3(closure_1(closure_2[11]), obj4);
              tmp3Result = tmp3(tmp2, obj1);
            }
            items[1] = tmp3Result;
            return tmp(tmp2, { children: items }, arg0.key);
          }
        }
        cResult[5] = appIconSrc;
        cResult[6] = botIcon;
        cResult[7] = tmp2.menu;
        cResult[8] = P;
        tmp5 = P;
      }
      let obj2 = require("useConjurePlanBotPreviewItems");
    }
  : function ConjurePlanBotPreview(arg0) {
      c1 = undefined;
      dependencyMap = undefined;
      ({ projectId, exchanges } = arg0);
      const tmp = closure_8();
      _require = tmp;
      const conjurePlanBotPreviewItems = require("useConjurePlanBotPreviewItems").useConjurePlanBotPreviewItems(
        projectId,
        exchanges,
      );
      ({ items, botIcon: c1, appIconSrc: c2 } = conjurePlanBotPreviewItems);
      let tmp3 = null;
      if (0 !== items.length) {
        let obj2 = {
          style: tmp.chat,
          children: items.map((menu) => {
            menu = menu.menu;
            const children = [hasOwnProperty(closure_9, { record: menu.record, botIcon })];
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
          }),
        };
        tmp3 = closure_5(View, obj2);
      }
      return tmp3;
    };
