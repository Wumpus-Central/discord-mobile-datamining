// discord_app/modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { BottomSheetModal } from "../../../../../_runtime/05439_BottomSheetModal.js";
import { SafeAreaPaddingView } from "../../../../components_native/common/SafeAreaView.tsx";
import { Background } from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { VoicePanelSettingsOverviewHeader } from "VoicePanelSettingsOverview.tsx";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ wrapper: { gap: 24 } });
const memoResult = require("noop").memo(function VoicePanelSettingsActionSheet(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  let obj = { startExpanded: true, scrollable: true, children: null };
  obj = { children: null };
  obj = { bottom: true, style: callback().wrapper, children: null };
  obj[2] = jsx(VoicePanelSettingsOverviewHeader, { guildId, channelId });
  obj[0] = jsx(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, style: callback().wrapper, children: null });
  obj[2] = jsx(BottomSheetModal.BottomSheetScrollView, { bottom: true, style: callback().wrapper, children: null });
  return jsx(Background.BottomSheet, { bottom: true, style: callback().wrapper, children: null });
});
const result = require("createCacheKey").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;