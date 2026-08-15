// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { BottomSheetModal } from "../../../../../_runtime/06952_BottomSheetModal.js";
import { Background } from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";
import { HideMutedChannelsOption } from "GuildActionSheetActions.tsx";
import { CommunityPill } from "GuildActionSheetHeader.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, actions: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: 16, gap: 24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx");

export default function GuildActionSheetDirectory(arg0) {
  let expanded;
  let guild;
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = createCacheKey();
  let obj = { scrollable: true, startExpanded: expanded, children: null };
  obj = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: useSafeAreaInsets().bottom }, children: null };
  const items = [callback(CommunityPill, { guild }), ];
  obj = { style: tmp.actions, children: null };
  const items1 = [callback(HideMutedChannelsOption.GuildActionSheetDirectoryActions, { guild }), callback(HideMutedChannelsOption.GuildDeveloperOptionAction, { guild })];
  obj[1] = items1;
  items[1] = callback2(View, obj);
  obj[3] = items;
  obj[2] = callback2(BottomSheetModal.BottomSheetScrollView, obj);
  return callback(Background.BottomSheet, obj);
};