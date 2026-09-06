// === Module 17110: VoicePanelSettingsActionSheet ===

// Module 17110 (VoicePanelSettingsActionSheet)
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import VoicePanelSettingsOverviewDefault from "VoicePanelSettingsOverview" /* 17111 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ wrapper: { gap: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default noop.memo(function VoicePanelSettingsActionSheet(arg0) {
  ({ guildId, channelId } = arg0);
  let obj = { startExpanded: true, scrollable: true, children: null };
  obj = { children: null };
  obj = { bottom: true, style: closure_4().wrapper, children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }) };
  obj.children = jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: closure_4().wrapper, children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }) });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, { bottom: true, style: closure_4().wrapper, children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }) });
  return jsx(Sheet_BottomSheet.BottomSheet, { bottom: true, style: closure_4().wrapper, children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }) });
});