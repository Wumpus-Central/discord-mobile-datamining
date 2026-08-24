// === Module 12730: ForLaterMessageRow ===

// Module 12730 (ForLaterMessageRow)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/saved_messages/native/ForLaterMessageRow.tsx");

export const ForLaterMessageRow = function ForLaterMessageRow(lineClamp) {
  lineClamp = lineClamp.lineClamp;
  importDefault = undefined;
  let setting;
  let setting1;
  let setting2;
  ({ message, maxHeight } = lineClamp);
  let obj = lineClamp(setting[3]);
  obj = { seeMoreLabelColor: importDefault(setting[4]).colors.TEXT_DEFAULT };
  importDefault = obj.createNativeStyleProperties(obj)(importDefault(setting[2])());
  const RenderEmbeds = lineClamp(setting[5]).RenderEmbeds;
  setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = lineClamp(setting[5]).InlineEmbedMedia;
  setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = lineClamp(setting[5]).InlineAttachmentMedia;
  setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2];
  const memo = setting1.useMemo(() => {
    let obj = new lib(setting[6])();
    obj = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReplies: false, renderExecutedCommands: false, animateEmoji: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, shouldDisableInteractiveComponents: true };
    obj.setOptions(obj);
    return obj;
  }, items);
  obj = {
    pointerEvents: "none",
    horizontalOffset: 0,
    modifyRow(arg0) {
      if (null != lineClamp) {
        const obj = { numberOfLines: null, expandable: null, seeMoreLabel: null, seeMoreLabelColor: null };
        obj[0] = tmp;
        obj[1] = lineClamp(setting[8]).isIOS();
        const obj2 = lineClamp(setting[8]);
        let str = "";
        if (obj3.isIOS()) {
          str = "...";
        }
        obj[2] = str;
        obj[3] = lib.seeMoreLabelColor;
        arg0.truncation = obj;
        obj3 = lineClamp(setting[8]);
      }
    },
    message,
    rowGenerator: memo,
    maxHeight
  };
  return setting2(importDefault(setting[7]), obj);
};