// === Module 8111: InAppReportsMessagePreview ===

// Module 8111 (InAppReportsMessagePreview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import Text_Text from "Text/Text" /* 4832 */;
import RowGeneratorDefault from "RowGenerator" /* 7374 */;
import ChatItemDefault from "ChatItem" /* 8112 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, title: { lineHeight: 16, marginBottom: 8 }, chatItemContainer: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.chatItemContainer = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
let closure_6 = createStyles.createStyles(obj2);
let obj5 = new RowGeneratorDefault();
obj5.setOptions({ renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderEmbeds: true, ignoreMentioned: true, inlineAttachmentMedia: false, inlineEmbedMedia: true, renderReactions: false });
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx");

export default function MessagePreview(message) {
  const tmp = closure_6();
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.iouM3a);
  const items = [React4(Text_Text.Text, obj3), ];
  const obj4 = { accessible: true, style: null, children: null };
  const items1 = [tmp.chatItemContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj4.style = items1;
  obj5 = { rowGenerator: obj5, maxHeight: 120, message: message.message, pointerEvents: "none" };
  obj4.children = React4(ChatItemDefault, obj5);
  items[1] = React4(View, obj4);
  obj2.children = items;
  return hasOwnProperty(View, obj2);
};