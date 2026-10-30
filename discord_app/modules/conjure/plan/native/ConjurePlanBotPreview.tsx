// === Module 12708: ConjurePlanBotPreview ===

// Module 12708 (ConjurePlanBotPreview)
import nativeDefault from "native" /* 575 */;
import RowGeneratorDefault from "RowGenerator" /* 8369 */;
import ChatItemDefault from "ChatItem" /* 9864 */;
import ConjurePlanCommandMenuPreviewDefault from "ConjurePlanCommandMenuPreview" /* 12709 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
function SampleMessage(record) {
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
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const rowGenerator = new RowGeneratorDefault();
const createStyles = fn(5009);
let obj2 = { chat: null, menu: null };
let tmp3 = new RowGeneratorDefault();
obj2.chat = { paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
const obj3 = { paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
obj2.menu = { paddingTop: nativeDefault.space.PX_4, paddingLeft: fn(12587).MESSAGE_CONTENT_INSET, paddingRight: fn(12587).MESSAGE_EDGE_INSET };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanBotPreview.tsx");

export default function ConjurePlanBotPreview(arg0) {
  c1 = undefined;
  dependencyMap = undefined;
  ({ projectId, exchanges } = arg0);
  const tmp = closure_8();
  _require = tmp;
  const conjurePlanBotPreviewItems = require("useConjurePlanBotPreviewItems").useConjurePlanBotPreviewItems(projectId, exchanges);
  ({ items, botIcon: c1, appIconSrc: c2 } = conjurePlanBotPreviewItems);
  let tmp3 = null;
  if (0 !== items.length) {
    let obj2 = {
      style: tmp.chat,
      children: items.map((menu) => {
          menu = menu.menu;
          const children = [hasOwnProperty(SampleMessage, { record: menu.record, botIcon }), ];
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
    tmp3 = closure_5(View, obj2);
  }
  return tmp3;
};