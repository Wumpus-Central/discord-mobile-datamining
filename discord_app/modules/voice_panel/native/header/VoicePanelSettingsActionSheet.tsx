// discord_app/modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx
import BottomSheetModal from "../../../../../_runtime/06627_BottomSheetModal.js";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import VoicePanelSettingsOverviewDefault from "VoicePanelSettingsOverview.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  obj = {
    bottom: true,
    style: closure_4().wrapper,
    children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }),
  };
  obj.children = jsx(common_SafeAreaView.SafeAreaPaddingView, {
    bottom: true,
    style: closure_4().wrapper,
    children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }),
  });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, {
    bottom: true,
    style: closure_4().wrapper,
    children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }),
  });
  return jsx(Sheet_BottomSheet.BottomSheet, {
    bottom: true,
    style: closure_4().wrapper,
    children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }),
  });
});
