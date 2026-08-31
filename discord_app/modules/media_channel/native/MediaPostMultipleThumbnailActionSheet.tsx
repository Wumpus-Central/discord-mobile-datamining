// === Module 10303: MediaPostThumbnailActionSheet ===

// Module 10303 (MediaPostThumbnailActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, topContainer: null, setAsThumbnailContainer: null, contentContainer: null, title: null, description: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, width: "100%", paddingVertical: 40, paddingHorizontal: 12, backgroundColor: ThemesDefault.colors.TEXT_FEEDBACK_WARNING, borderRadius: ThemesDefault.radii.sm };
let obj1 = { flex: 1, width: "100%", paddingVertical: 40, paddingHorizontal: 12, backgroundColor: ThemesDefault.colors.TEXT_FEEDBACK_WARNING, borderRadius: ThemesDefault.radii.sm };
createCacheKey[2] = { flex: 1, flexDirection: "row", padding: 12, width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: ThemesDefault.radii.sm, alignItems: "center", justifyContent: "space-between" };
createCacheKey[3] = { alignItems: "center", flex: 1 };
createCacheKey[4] = { marginTop: 24 };
createCacheKey[5] = { textAlign: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj2 = { flex: 1, flexDirection: "row", padding: 12, width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: ThemesDefault.radii.sm, alignItems: "center", justifyContent: "space-between" };
const result = require("set").fileFinishedImporting("modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx");

export default function MediaPostThumbnailActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = callback3();
  let obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(closure_1_4.UNKNOWN);
    },
    children: null
  };
  obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: items, children: null };
  items = [tmp.contentContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj1 = { style: tmp.topContainer, children: null };
  const obj2 = { style: tmp.setAsThumbnailContainer, children: null };
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1236).intl;
  obj3[2] = intl.string(markAsDismissed(1236).t.ews2pj);
  const items1 = [callback(markAsDismissed(4444).Text, obj3), callback(markAsDismissed(1297).Checkbox, { selected: true })];
  obj2[1] = items1;
  obj1[1] = callback2(View, obj2);
  const items2 = [callback(View, obj1), , , , , ];
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl2 = markAsDismissed(1236).intl;
  obj4[3] = intl2.string(markAsDismissed(1236).t.WJisip);
  items2[1] = callback(markAsDismissed(4444).Text, obj4);
  items2[2] = callback(markAsDismissed(1297).Spacer, { size: 12 });
  const obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
  const intl3 = markAsDismissed(1236).intl;
  obj5[3] = intl3.string(markAsDismissed(1236).t.X6ZH6d);
  items2[3] = callback(markAsDismissed(4444).Text, obj5);
  items2[4] = callback(markAsDismissed(1297).Spacer, { size: 48 });
  const obj6 = { text: null, grow: true, onPress: null };
  const intl4 = markAsDismissed(1236).intl;
  obj6[0] = intl4.string(markAsDismissed(1236).t["NX+WJN"]);
  obj6[2] = function onPress() {
    return markAsDismissed(closure_1_4.UNKNOWN);
  };
  items2[5] = callback(markAsDismissed(4896).Button, obj6);
  obj[1] = items2;
  obj[1] = callback2(markAsDismissed(5592).BottomSheetScrollView, obj);
  obj[2] = callback(View, obj);
  return callback(markAsDismissed(5590).BottomSheet, obj);
};