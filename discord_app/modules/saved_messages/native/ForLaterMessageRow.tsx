// discord_app/modules/saved_messages/native/ForLaterMessageRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import RowGeneratorDefault from "../../messages/native/renderer/RowGenerator.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  preview: { marginHorizontal: -16, marginTop: -9, overflow: "hidden" },
  flushToCardBottom: null,
  footer: null,
};
createStyles = {
  marginBottom: -16,
  borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS,
  borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS,
};
createStyles.flushToCardBottom = createStyles;
createStyles.footer = { paddingHorizontal: 16, paddingTop: 8 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageRow.tsx");

export const ForLaterMessageRow = function ForLaterMessageRow(arg0) {
  ({ lineClamp: require, footer } = arg0);
  importDefault = undefined;
  let setting;
  ({ message, maxHeight } = arg0);
  const tmp = closure_7();
  require("createStyles");
  let obj = { seeMoreLabelColor: require("native").colors.TEXT_DEFAULT };
  importDefault = obj.createNativeStyleProperties(obj)(require("useTheme")());
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = require("UserSettings").InlineAttachmentMedia;
  const setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2];
  const items1 = [tmp.preview];
  let flushToCardBottom = null;
  const memo = setting1.useMemo(() => {
    new RowGeneratorDefault();
    const obj = {
      renderEmbeds: setting,
      inlineEmbedMedia: setting1,
      inlineAttachmentMedia: setting2,
      renderReplies: false,
      renderExecutedCommands: false,
      animateEmoji: false,
      renderGiftCode: false,
      renderActivityInstanceEmbed: false,
      renderActivityInviteEmbed: false,
      renderThreadEmbeds: false,
      renderForumPostActions: false,
      ignoreMentioned: true,
      shouldDisableInteractiveComponents: true,
    };
    obj.setOptions(obj);
    return obj;
  }, items);
  if (null == footer) {
    flushToCardBottom = tmp.flushToCardBottom;
  }
  obj = { style: items1, children: null };
  items1[1] = flushToCardBottom;
  const items2 = [
    closure_5(require("ChatItem"), {
      pointerEvents: "none",
      horizontalOffset: 0,
      modifyRow(arg0) {
        if (null != closure_1_0) {
          const obj = {
            numberOfLines: tmp,
            expandable: PlatformUtils.isIOS(),
            seeMoreLabel: null,
            seeMoreLabelColor: null,
          };
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
      maxHeight,
    }),
  ];
  let tmp12Result = null;
  if (null != footer) {
    let obj2 = { style: tmp.footer, children: footer };
    tmp12Result = closure_5(tmp10, obj2);
  }
  items2[1] = tmp12Result;
  obj.children = items2;
  return closure_6(setting2, obj);
};
