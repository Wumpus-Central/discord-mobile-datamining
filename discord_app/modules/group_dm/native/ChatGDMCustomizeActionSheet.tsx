// discord_app/modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import useNavigatorConfirmChangesOnBackDefault from "../../main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx";
import ModalStackNavigatorDefault from "../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import ChatGDMCustomizeDefault from "ChatGDMCustomize.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channelId, dependencyMap, importDefault;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let onGoBack;
      let ref;
      const obj = channelId(ref[3]);
      const cResult = obj.c(5);
      channelId = channelId.channelId;
      const tmp5 = onGoBack(ref[4])();
      const tmp4 = onGoBack;
      onGoBack = tmp5.onGoBack;
      ref = tmp5.ref;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[5]).intl;
        const stringResult = intl.string(channelId(ref[5]).t["1r5E+m"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === onGoBack) {
          let tmp8;
          if (cResult[3] === ref) {
            tmp8 = cResult[4];
          }
          return tmp8;
        }
      }
      const tmp9 = jsx(tmp4(ref[6]), {
        screenKey: "kick",
        title: first,
        render() {
          return jsx(ChatGDMCustomizeDefault, { ref, onFinish: onGoBack, channelId });
        },
      });
      cResult[1] = channelId;
      cResult[2] = onGoBack;
      cResult[3] = ref;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (channelId) => {
      let c1;
      let c2;
      let onFinish;
      let ref;
      channelId = channelId.channelId;
      importDefault = undefined;
      dependencyMap = undefined;
      ({ onGoBack: c1, ref: c2 } = useNavigatorConfirmChangesOnBackDefault());
      useNavigatorConfirmChangesOnBackDefault();
      ModalStackNavigatorDefault;
      const intl = channelId(1126).intl;
      return (
        <tmp2
          screenKey="kick"
          title={intl.string(channelId(1126).t["1r5E+m"])}
          render={function render() {
            return jsx(ChatGDMCustomizeDefault, { ref, onFinish, channelId });
          }}
        />
      );
    };
const result = size.fileFinishedImporting("modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx");

export default tmp3;
