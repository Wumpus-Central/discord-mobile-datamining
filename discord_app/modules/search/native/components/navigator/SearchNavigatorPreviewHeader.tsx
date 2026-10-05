// === Module 17039: SearchNavigatorPreviewHeader ===

// Module 17039 (SearchNavigatorPreviewHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ChannelHeaderDefault from "ChannelHeader" /* 13104 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  channelId = channelId.channelId;
  const tmp3 = closure_5();
  if (cResult[0] !== channelId) {
    const tmp7 = jsx(ChannelHeaderDefault, { channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true });
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
}) : ((channelId) => {
  channelId = channelId.channelId;
  return <View style={closure_5().container}>{jsx(ChannelHeaderDefault, { channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true })}</View>;
}));
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default memoResult;