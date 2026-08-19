// discord_app/modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BottomSheetModal from "../../../../../_runtime/06952_BottomSheetModal.js";
import VoicePanelSettingsOverviewHeaderDefault from "VoicePanelSettingsOverview.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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