// === Module 11750: ForLaterMessageRow ===

// Module 11750 (ForLaterMessageRow)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { preview: { marginHorizontal: -16, marginTop: -9, overflow: "hidden" }, flushToCardBottom: null, footer: null };
createCacheKey = { marginBottom: -16, borderBottomLeftRadius: ThemesDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: ThemesDefault.modules.mobile.CARD_DEFAULT_RADIUS };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingHorizontal: 16, paddingTop: 8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/saved_messages/native/ForLaterMessageRow.tsx");

export const ForLaterMessageRow = function ForLaterMessageRow(arg0) {
  ({ lineClamp: require, footer } = arg0);
  importDefault = undefined;
  let setting;
  let setting1;
  let setting2;
  ({ message, maxHeight } = arg0);
  const tmp = callback2();
  let obj = require(setting[3]);
  obj = { seeMoreLabelColor: importDefault(setting[4]).colors.TEXT_DEFAULT };
  importDefault = obj.createNativeStyleProperties(obj)(importDefault(setting[5])());
  const RenderEmbeds = require(setting[6]).RenderEmbeds;
  setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = require(setting[6]).InlineEmbedMedia;
  setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = require(setting[6]).InlineAttachmentMedia;
  setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2];
  const items1 = [tmp.preview, ];
  let flushToCardBottom = null;
  const memo = setting1.useMemo(() => {
    let obj = new lib(setting[7])();
    obj = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReplies: false, renderExecutedCommands: false, animateEmoji: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, shouldDisableInteractiveComponents: true };
    obj.setOptions(obj);
    return obj;
  }, items);
  if (null == footer) {
    flushToCardBottom = tmp.flushToCardBottom;
  }
  obj = { style: items1, children: null };
  items1[1] = flushToCardBottom;
  const items2 = [
    callback(importDefault(setting[8]), {
      pointerEvents: "none",
      horizontalOffset: 0,
      modifyRow(arg0) {
        if (null != closure_0) {
          const obj = { numberOfLines: null, expandable: null, seeMoreLabel: null, seeMoreLabelColor: null };
          obj[0] = tmp;
          obj[1] = closure_1_0(setting[9]).isIOS();
          const obj2 = closure_1_0(setting[9]);
          let str = "";
          if (obj3.isIOS()) {
            str = "...";
          }
          obj[2] = str;
          obj[3] = lib.seeMoreLabelColor;
          arg0.truncation = obj;
          obj3 = closure_1_0(setting[9]);
        }
      },
      message,
      rowGenerator: memo,
      maxHeight
    }),

  ];
  let tmp12Result = null;
  if (null != footer) {
    let obj2 = { style: null, children: null };
    obj2[0] = tmp.footer;
    obj2[1] = footer;
    tmp12Result = callback(tmp10, obj2);
  }
  items2[1] = tmp12Result;
  obj[1] = items2;
  return closure_6(setting2, obj);
};