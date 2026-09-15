// discord_app/modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx
import BottomSheetModal from "../../../../../_runtime/06732_BottomSheetModal.js";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import VoicePanelSettingsOverviewDefault from "VoicePanelSettingsOverview.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let closure_4 = createStyles.createStyles({ wrapper: { gap: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default noop.memo(function VoicePanelSettingsActionSheet(arg0) {
  ({ guildId, channelId } = arg0);
  const obj = { startExpanded: true, scrollable: true, children: null };
  const obj2 = { children: null };
  const tmp = closure_4();
  obj2.children = jsx(common_SafeAreaView.SafeAreaPaddingView, {
    bottom: true,
    style: closure_4().wrapper,
    children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }),
  });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, { children: null });
  return jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true, scrollable: true, children: null });
});
