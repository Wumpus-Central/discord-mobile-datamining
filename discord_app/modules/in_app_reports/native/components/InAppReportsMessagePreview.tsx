// discord_app/modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import hexToRgba from "../../../../utils/ColorUtils.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import setOptionsDefault from "../../../messages/native/renderer/RowGenerator.tsx";
import DCDChatItemDefault from "../../../../components_native/chat/ChatItem.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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