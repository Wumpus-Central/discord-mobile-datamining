// === Module 11327: ForLaterMessageRow ===

// Module 11327 (ForLaterMessageRow)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import RowGeneratorDefault from "RowGenerator" /* 8469 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5170);
let obj2 = { preview: { marginHorizontal: -16, marginTop: -9, overflow: "hidden" }, withoutFooter: { marginTop: -nativeDefault.space.PX_4, marginBottom: -nativeDefault.space.PX_16, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS }, contentWithoutFooter: null, footer: null };
let obj3 = { marginTop: -nativeDefault.space.PX_4, marginBottom: -nativeDefault.space.PX_16, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
obj2.contentWithoutFooter = { paddingBottom: nativeDefault.space.PX_10 };
obj2.footer = { paddingHorizontal: 16, paddingTop: 8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageRow.tsx");

export function ForLaterMessageRow(arg0) {
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
  items = [setting, setting1, setting2];
  const items1 = [tmp.preview, ];
  let withoutFooter = null;
  const memo = setting1.useMemo(() => {
    const obj = new RowGeneratorDefault();
    obj.setOptions({ renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReplies: false, renderExecutedCommands: false, animateEmoji: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, shouldDisableInteractiveComponents: true });
    return obj;
  }, items);
  if (null == footer) {
    withoutFooter = tmp.withoutFooter;
  }
  let obj3 = { style: items1, children: null };
  items1[1] = withoutFooter;
  let contentWithoutFooter = null;
  let obj2 = { seeMoreLabelColor: require("native").colors.TEXT_DEFAULT };
  if (null == footer) {
    contentWithoutFooter = tmp.contentWithoutFooter;
  }
  const items2 = [
    closure_5(tmp2(tmp3[8]), {
      style: contentWithoutFooter,
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
}