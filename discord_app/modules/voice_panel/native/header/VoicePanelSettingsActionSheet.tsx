// === Module 16328: ? ===

// Module 16328
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 6803 */;
import Background from "Background" /* 6950 */;
import BottomSheetModal from "BottomSheetModal" /* 6952 */;
import VoicePanelSettingsOverviewHeaderDefault from "VoicePanelSettingsOverviewHeader" /* 16329 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
let closure_4 = createCacheKey.createStyles({ wrapper: { gap: 24 } });
const memoResult = importAllResult.memo(function VoicePanelSettingsActionSheet(arg0) {
  ({ guildId, channelId } = arg0);
  const obj = { bottom: true, style: callback().wrapper, children: jsx(VoicePanelSettingsOverviewHeaderDefault, { guildId, channelId }) };
  obj[0] = jsx(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, style: callback().wrapper, children: jsx(VoicePanelSettingsOverviewHeaderDefault, { guildId, channelId }) });
  obj[2] = jsx(BottomSheetModal.BottomSheetScrollView, { bottom: true, style: callback().wrapper, children: jsx(VoicePanelSettingsOverviewHeaderDefault, { guildId, channelId }) });
  return jsx(Background.BottomSheet, { bottom: true, style: callback().wrapper, children: jsx(VoicePanelSettingsOverviewHeaderDefault, { guildId, channelId }) });
});
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;