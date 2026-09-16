// === Module 17315: VoicePanelSettingsActionSheet ===

// Module 17315 (VoicePanelSettingsActionSheet)
import BottomSheetModal from "BottomSheetModal" /* 6735 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7233 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7260 */;
import VoicePanelSettingsOverviewDefault from "VoicePanelSettingsOverview" /* 17316 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_4 = createStyles.createStyles({ wrapper: { gap: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default noop.memo(function VoicePanelSettingsActionSheet(arg0) {
  ({ guildId, channelId } = arg0);
  const obj = { startExpanded: true, scrollable: true, children: null };
  const obj2 = { children: null };
  const tmp = closure_4();
  obj2.children = jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: closure_4().wrapper, children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }) });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, { children: null });
  return jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true, scrollable: true, children: null });
});