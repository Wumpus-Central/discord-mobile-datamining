// discord_app/modules/guild_sidebar/native/VoiceUsersItem.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_2 = createStyles.createStyles({
  voiceStates: { paddingRight: 8 },
  voiceStatesCollapsed: { paddingRight: 0, flexDirection: "row", flexWrap: "wrap", alignItems: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUsersItem.tsx");

export default function VoiceUsersItem(children) {
  let voiceStatesCollapsed = children.collapsed;
  const tmp = closure_2();
  let voiceStates = !voiceStatesCollapsed;
  if (!voiceStatesCollapsed) {
    voiceStates = tmp.voiceStates;
  }
  const style = [voiceStates];
  if (voiceStatesCollapsed) {
    voiceStatesCollapsed = tmp.voiceStatesCollapsed;
  }
  style[1] = voiceStatesCollapsed;
  return <View style={style}>{arg0.children}</View>;
}
