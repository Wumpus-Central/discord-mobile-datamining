// discord_app/modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ wrapper: { gap: 24 } });
const memoResult = require("noop").memo(function VoicePanelSettingsActionSheet(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  let obj = { startExpanded: true, scrollable: true, children: null };
  obj = { children: null };
  obj = { bottom: true, style: callback().wrapper, children: null };
  obj[2] = jsx(require("VoicePanelSettingsOverview.tsx"), { guildId, channelId });
  obj[0] = jsx(require("../../../../components_native/common/SafeAreaView.tsx") /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, style: callback().wrapper, children: null });
  obj[2] = jsx(require("../../../../../_runtime/05340_BottomSheetModal.js") /* BottomSheetModal */.BottomSheetScrollView, { bottom: true, style: callback().wrapper, children: null });
  return jsx(require("../../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, { bottom: true, style: callback().wrapper, children: null });
});
const result = require("createCacheKey").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;