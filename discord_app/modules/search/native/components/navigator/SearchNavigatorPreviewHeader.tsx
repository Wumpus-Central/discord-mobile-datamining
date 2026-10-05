// discord_app/modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import ChannelHeaderDefault from "../../../../main_tabs_v2/native/channel/header/ChannelHeader.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let channelId;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({
  container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" },
});
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channelId) => {
        let tmp4;
        const obj = react2;
        const cResult = obj.c(5);
        channelId = channelId.channelId;
        const tmp3 = closure_5();
        if (cResult[0] !== channelId) {
          const tmp7 = jsx(ChannelHeaderDefault, {
            channelId,
            screenIndex: "none",
            pressable: false,
            isGuildMemberCountVisible: false,
            isNavigationScreen: true,
          });
          cResult[0] = channelId;
          cResult[1] = tmp7;
          tmp4 = tmp7;
        } else {
          tmp4 = cResult[1];
        }
        if (cResult[2] === tmp3.container) {
          let tmp8;
          if (cResult[3] === tmp4) {
            tmp8 = cResult[4];
          }
          return tmp8;
        }
        const tmp9 = <View style={tmp3.container}>{tmp4}</View>;
        cResult[2] = tmp3.container;
        cResult[3] = tmp4;
        cResult[4] = tmp9;
        tmp8 = tmp9;
      }
    : (channelId) => {
        channelId = channelId.channelId;
        return (
          <View style={closure_5().container}>
            {jsx(ChannelHeaderDefault, {
              channelId,
              screenIndex: "none",
              pressable: false,
              isGuildMemberCountVisible: false,
              isNavigationScreen: true,
            })}
          </View>
        );
      },
);
const result = size.fileFinishedImporting(
  "modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx",
);

export default memoResult;
