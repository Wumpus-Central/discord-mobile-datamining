// discord_app/modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import RowGeneratorDefault from "../../../messages/native/renderer/RowGenerator.tsx";
import ChatItemDefault from "../../../../components_native/chat/ChatItem.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 },
  borderColor: null,
  title: null,
  chatItemContainer: null,
};
createStyles = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.borderColor = createStyles;
createStyles.title = { lineHeight: 16, marginBottom: 8 };
createStyles.chatItemContainer = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
let closure_6 = createStyles.createStyles(createStyles);
const obj5 = new RowGeneratorDefault();
obj5.setOptions({
  renderCodedLinks: false,
  renderGiftCode: false,
  renderActivityInstanceEmbed: false,
  renderActivityInviteEmbed: false,
  renderEmbeds: true,
  ignoreMentioned: true,
  inlineAttachmentMedia: false,
  inlineEmbedMedia: true,
  renderReactions: false,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx");

export default function MessagePreview(message) {
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.iouM3a);
  const items = [React4(Text_Text.Text, obj)];
  const obj1 = { accessible: true, style: null, children: null };
  const items1 = [tmp.chatItemContainer, { borderColor: obj.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj1.style = items1;
  obj1.children = React4(ChatItemDefault, {
    rowGenerator: obj5,
    maxHeight: 120,
    message: message.message,
    pointerEvents: "none",
  });
  items[1] = React4(View, obj1);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
