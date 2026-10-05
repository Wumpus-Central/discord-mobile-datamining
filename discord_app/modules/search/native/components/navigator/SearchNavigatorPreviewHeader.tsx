// === Module 17039: SearchNavigatorPreviewHeader ===

// Module 17039 (SearchNavigatorPreviewHeader)
import c from "c" /* 576 */;
import ChannelHeaderDefault from "ChannelHeader" /* 13104 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_5 = createStyles.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = c.c(5);
  channelId = channelId.channelId;
  const tmp3 = closure_5();
  if (cResult[0] !== channelId) {
    const obj2 = { channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true };
    const tmp7 = jsx(ChannelHeaderDefault, { channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true });
    cResult[0] = channelId;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp3.container) {
    if (cResult[3] === tmp4) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = <View style={tmp3.container}>{tmp4}</View>;
  cResult[2] = tmp3.container;
  cResult[3] = tmp4;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const obj3 = { style: tmp3.container, children: tmp4 };
}) : ((channelId) => <View style={closure_5().container}>{jsx(ChannelHeaderDefault, { channelId: channelId.channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true })}</View>));