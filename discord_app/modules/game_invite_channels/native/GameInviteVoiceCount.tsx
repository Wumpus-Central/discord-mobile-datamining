// discord_app/modules/game_invite_channels/native/GameInviteVoiceCount.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: 8 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_invite_channels/native/GameInviteVoiceCount.tsx");

export default function GameInviteVoiceCount(channel) {
  channel = channel.channel;
  const tmp = closure_7();
  const items = [SortedVoiceStateStore];
  const items1 = [channel];
  const stateFromStores = channel(504).useStateFromStores(
    items,
    () => SortedVoiceStateStore.getVoiceStatesForChannel(channel).length,
    items1,
  );
  let tmp5 = null;
  if (0 !== stateFromStores) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    const items2 = [closure_5(tmp2(5312).VoiceNormalIcon, obj3)];
    const obj4 = { variant: "text-sm/medium", color: "text-feedback-positive", children: stateFromStores };
    items2[1] = closure_5(tmp2(4752).Text, obj4);
    obj2.children = items2;
    tmp5 = closure_6(View, obj2);
  }
  return tmp5;
}
