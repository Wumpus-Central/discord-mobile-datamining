// === Module 8156: MessagePreview ===

// Module 8156 (MessagePreview)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import hexToRgba from "hexToRgba" /* 4223 */;
import Text from "Text" /* 4734 */;
import setOptionsDefault from "setOptions" /* 8157 */;
import DCDChatItemDefault from "DCDChatItem" /* 10066 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, chatItemContainer: null };
createCacheKey = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { lineHeight: 16, marginBottom: 8 };
createCacheKey[3] = { minHeight: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, padding: 8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj5 = new setOptionsDefault();
obj5.setOptions({ renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderEmbeds: true, ignoreMentioned: true, inlineAttachmentMedia: false, inlineEmbedMedia: true, renderReactions: false });
const obj1 = { minHeight: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, padding: 8 };
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx");

export default function MessagePreview(message) {
  const tmp = callback3();
  let obj = hexToRgba;
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.iouM3a);
  const items = [callback(Text.Text, obj), ];
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  const items1 = [tmp.chatItemContainer, { borderColor: hexWithOpacityResult }];
  items[1] = callback(View, { style: items1, children: callback(DCDChatItemDefault, obj2) });
  obj[1] = items;
  return callback2(View, obj);
};