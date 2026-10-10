// discord_app/modules/guild_sidebar/native/VoiceUsersItem.tsx
import c from "../../../../_runtime/00576_c.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_4 = createStyles.createStyles({
  voiceStates: { paddingRight: 8 },
  voiceStatesCollapsed: { paddingRight: 0, flexDirection: "row", flexWrap: "wrap", alignItems: "center" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUsersItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VoiceUsersItem(arg0) {
      const cResult = c.c(6);
      ({ collapsed, children } = arg0);
      const tmp2 = closure_4();
      let voiceStates = !collapsed;
      if (!collapsed) {
        voiceStates = tmp2.voiceStates;
      }
      if (collapsed) {
        collapsed = tmp2.voiceStatesCollapsed;
      }
      if (cResult[0] === voiceStates) {
        if (cResult[1] === collapsed) {
          let tmp3 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === tmp3) {
            let tmp4 = cResult[5];
          }
          return tmp4;
        }
        const obj2 = { style: tmp3, children };
        const tmp7 = <View style={tmp3}>{children}</View>;
        cResult[3] = children;
        cResult[4] = tmp3;
        cResult[5] = tmp7;
        tmp4 = tmp7;
      }
      const items = [voiceStates, collapsed];
      cResult[0] = voiceStates;
      cResult[1] = collapsed;
      cResult[2] = items;
      tmp3 = items;
    }
  : function VoiceUsersItem(children) {
      let voiceStatesCollapsed = children.collapsed;
      const tmp = closure_4();
      let voiceStates = !voiceStatesCollapsed;
      if (!voiceStatesCollapsed) {
        voiceStates = tmp.voiceStates;
      }
      const style = [voiceStates];
      if (voiceStatesCollapsed) {
        voiceStatesCollapsed = tmp.voiceStatesCollapsed;
      }
      style[1] = voiceStatesCollapsed;
      return <View style={style}>{children.children}</View>;
    };
