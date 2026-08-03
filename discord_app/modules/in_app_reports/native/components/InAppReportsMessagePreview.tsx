// === Module 7717: MessagePreview ===

// Module 7717 (MessagePreview)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, chatItemContainer: null };
createCacheKey = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { lineHeight: 16, marginBottom: 8 };
createCacheKey[3] = { minHeight: 40, borderRadius: require("Themes").radii.sm, borderWidth: 1, padding: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj5 = new require("setOptions")();
obj5.setOptions({ renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderEmbeds: true, ignoreMentioned: true, inlineAttachmentMedia: false, inlineEmbedMedia: true, renderReactions: false });
const obj1 = { minHeight: 40, borderRadius: require("Themes").radii.sm, borderWidth: 1, padding: 8 };
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx");

export default function MessagePreview(message) {
  const tmp = createCacheKey();
  let obj = require(4037) /* hexToRgba */;
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t.iouM3a);
  const items = [callback(require(4189) /* Text */.Text, obj), ];
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  const items1 = [tmp.chatItemContainer, { borderColor: hexWithOpacityResult }];
  items[1] = callback(View, { style: items1, children: callback(importDefault(9301), obj2) });
  obj[1] = items;
  return callback2(View, obj);
};