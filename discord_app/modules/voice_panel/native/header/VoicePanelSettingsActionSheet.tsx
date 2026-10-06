// discord_app/modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import BottomSheetModal from "../../../../../_runtime/06119_BottomSheetModal.js";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import VoicePanelSettingsOverviewDefault from "VoicePanelSettingsOverview.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ wrapper: { gap: 24 } });
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let channelId;
        let guildId;
        const obj = react2;
        const cResult = obj.c(6);
        ({ guildId, channelId } = arg0);
        const tmp4 = closure_4();
        if (cResult[0] === channelId) {
          let tmp5;
          if (cResult[1] === guildId) {
            tmp5 = cResult[2];
          }
          if (cResult[3] === tmp4.wrapper) {
            let tmp7;
            if (cResult[4] === tmp5) {
              tmp7 = cResult[5];
            }
            return tmp7;
          }
          BottomSheet = Sheet_BottomSheet.BottomSheet;
          const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
          const tmp9 = (
            <BottomSheet startExpanded scrollable>
              {null}
            </BottomSheet>
          );
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
      }
    : (arg0) => {
        let channelId;
        let guildId;
        ({ guildId, channelId } = arg0);
        const tmp = closure_4();
        BottomSheet = Sheet_BottomSheet.BottomSheet;
        const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
        const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
        return (
          <BottomSheet startExpanded scrollable>
            {null}
          </BottomSheet>
        );
      },
);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;
