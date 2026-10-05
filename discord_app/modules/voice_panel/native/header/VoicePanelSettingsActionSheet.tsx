// === Module 17250: VoicePanelSettingsActionSheet ===

// Module 17250 (VoicePanelSettingsActionSheet)
import c from "c" /* 576 */;
import BottomSheetModal from "BottomSheetModal" /* 6112 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import VoicePanelSettingsOverviewDefault from "VoicePanelSettingsOverview" /* 17251 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_4 = createStyles.createStyles({ wrapper: { gap: 24 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ guildId, channelId } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] === channelId) {
    if (cResult[1] === guildId) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.wrapper) {
      if (cResult[4] === tmp5) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj2 = { startExpanded: true, scrollable: true, children: null };
    const obj3 = { children: null };
    const obj4 = { bottom: true, style: tmp4.wrapper, children: tmp5 };
    obj3.children = jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: tmp4.wrapper, children: tmp5 });
    obj2.children = jsx(BottomSheetModal.BottomSheetScrollView, { children: null });
    const tmp9 = jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true, scrollable: true, children: null });
    cResult[3] = tmp4.wrapper;
    cResult[4] = tmp5;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId });
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  ({ guildId, channelId } = arg0);
  const obj = { startExpanded: true, scrollable: true, children: null };
  const obj2 = { children: null };
  const tmp = closure_4();
  obj2.children = jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: closure_4().wrapper, children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }) });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, { children: null });
  return jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true, scrollable: true, children: null });
}));