// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BottomSheetModal from "../../../../../_runtime/05505_BottomSheetModal.js";
import HideMutedChannelsOption from "GuildActionSheetActions.tsx";
import CommunityPillDefault from "GuildActionSheetHeader.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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