// === Module 13592: GuildActionSheetDirectory ===

// Module 13592 (GuildActionSheetDirectory)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import Background from "Background" /* 5569 */;
import BottomSheetModal from "BottomSheetModal" /* 5571 */;
import HideMutedChannelsOption from "HideMutedChannelsOption" /* 13536 */;
import CommunityPillDefault from "CommunityPill" /* 13593 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, actions: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: 16, gap: 24 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx");

export default function GuildActionSheetDirectory(arg0) {
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = callback3();
  let obj = { scrollable: true, startExpanded: expanded, children: null };
  obj = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const items = [callback(CommunityPillDefault, { guild }), ];
  obj = { style: tmp.actions, children: null };
  const items1 = [callback(HideMutedChannelsOption.GuildActionSheetDirectoryActions, { guild }), callback(HideMutedChannelsOption.GuildDeveloperOptionAction, { guild })];
  obj[1] = items1;
  items[1] = callback2(View, obj);
  obj[3] = items;
  obj[2] = callback2(BottomSheetModal.BottomSheetScrollView, obj);
  return callback(Background.BottomSheet, obj);
};