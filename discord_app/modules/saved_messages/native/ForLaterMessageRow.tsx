// === Module 12358: ForLaterMessageRow ===

// Module 12358 (ForLaterMessageRow)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import RowGeneratorDefault from "RowGenerator" /* 8048 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4638);
let obj2 = { preview: { marginHorizontal: -16, marginTop: -9, overflow: "hidden" }, flushToCardBottom: { marginBottom: -16, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS }, footer: { paddingHorizontal: 16, paddingTop: 8 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageRow.tsx");

export const ForLaterMessageRow = function ForLaterMessageRow(arg0) {
  ({ lineClamp: require, footer } = arg0);
  importDefault = undefined;
  let setting;
  ({ message, maxHeight } = arg0);
  const tmp = closure_7();
  const tmp2 = importDefault;
  const tmp3 = setting;
  const tmp4 = require("useTheme")();
  let obj = require("createStyles");
  importDefault = obj.createNativeStyleProperties({ seeMoreLabelColor: require("native").colors.TEXT_DEFAULT })(tmp4);
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = require("UserSettings").InlineAttachmentMedia;
  const setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2];
  const items1 = [tmp.preview, ];
  let flushToCardBottom = null;
  const memo = setting1.useMemo(() => {
    const obj = new RowGeneratorDefault();
    obj.setOptions({ renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReplies: false, renderExecutedCommands: false, animateEmoji: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, shouldDisableInteractiveComponents: true });
    return obj;
  }, items);
  if (null == footer) {
    flushToCardBottom = tmp.flushToCardBottom;
  }
  let obj3 = { style: items1, children: null };
  items1[1] = flushToCardBottom;
  const items2 = [
    closure_5(tmp2(tmp3[8]), {
      pointerEvents: "none",
      horizontalOffset: 0,
      modifyRow(arg0) {
        if (null != closure_1_0) {
          const obj = { numberOfLines: tmp, expandable: PlatformUtils.isIOS(), seeMoreLabel: null, seeMoreLabelColor: null };
          let str = "";
          if (obj3.isIOS()) {
            str = "...";
          }
          obj.seeMoreLabel = str;
          obj.seeMoreLabelColor = seeMoreLabelColor.seeMoreLabelColor;
          arg0.truncation = obj;
          obj3 = PlatformUtils;
        }
      },
      message,
      rowGenerator: memo,
      maxHeight
    }),

  ];
  let tmp12Result = null;
  if (null != footer) {
    const obj5 = { style: tmp.footer, children: footer };
    tmp12Result = closure_5(tmp10, obj5);
  }
  items2[1] = tmp12Result;
  obj3.children = items2;
  return closure_6(setting2, obj3);
};