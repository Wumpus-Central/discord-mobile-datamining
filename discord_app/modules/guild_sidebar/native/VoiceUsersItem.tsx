// === Module 16052: VoiceUsersItem ===

// Module 16052 (VoiceUsersItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ voiceStates: { paddingRight: 8 }, voiceStatesCollapsed: { paddingRight: 0, flexDirection: "row", flexWrap: "wrap", alignItems: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let collapsed;
  const obj = react2;
  const cResult = obj.c(6);
  ({ collapsed, children } = arg0);
  const tmp2 = closure_4();
  if (collapsed) {
    collapsed = tmp2.voiceStatesCollapsed;
  }
  if (cResult[0] === (!collapsed && tmp2.voiceStates)) {
    let tmp4;
    if (cResult[1] === collapsed) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp5;
      if (cResult[4] === tmp4) {
        tmp5 = cResult[5];
      }
      return tmp5;
    }
    const tmp8 = <View style={tmp4}>{children}</View>;
    cResult[3] = children;
    cResult[4] = tmp4;
    cResult[5] = tmp8;
    tmp5 = tmp8;
  }
  const items = [!collapsed && tmp2.voiceStates, collapsed];
  cResult[0] = !collapsed && tmp2.voiceStates;
  cResult[1] = collapsed;
  cResult[2] = items;
  tmp4 = items;
}) : ((collapsed) => {
  let voiceStatesCollapsed = collapsed.collapsed;
  const children = collapsed.children;
  const tmp = closure_4();
  const voiceStates = !voiceStatesCollapsed && tmp.voiceStates;
  const style = [voiceStates, ];
  if (voiceStatesCollapsed) {
    voiceStatesCollapsed = tmp.voiceStatesCollapsed;
  }
  style[1] = voiceStatesCollapsed;
  return <View style={style}>{children}</View>;
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUsersItem.tsx");

export default tmp3;