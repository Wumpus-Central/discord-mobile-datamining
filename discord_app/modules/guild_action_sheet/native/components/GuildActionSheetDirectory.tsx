// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  obj = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: require("../../../safe_area/useSafeAreaInsets.native.tsx")().bottom }, children: null };
  const items = [callback(require("GuildActionSheetHeader.tsx"), { guild }), ];
  obj = { style: tmp.actions, children: null };
  const items1 = [callback(require("GuildActionSheetActions.tsx") /* HideMutedChannelsOption */.GuildActionSheetDirectoryActions, { guild }), callback(require("GuildActionSheetActions.tsx") /* HideMutedChannelsOption */.GuildDeveloperOptionAction, { guild })];
  obj[1] = items1;
  items[1] = callback2(View, obj);
  obj[3] = items;
  obj[2] = callback2(require("../../../../../_runtime/05340_BottomSheetModal.js") /* BottomSheetModal */.BottomSheetScrollView, obj);
  return callback(require("../../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, obj);
};