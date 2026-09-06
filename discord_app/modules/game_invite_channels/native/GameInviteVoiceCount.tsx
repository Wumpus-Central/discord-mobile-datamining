// discord_app/modules/game_invite_channels/native/GameInviteVoiceCount.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: 8 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_invite_channels/native/GameInviteVoiceCount.tsx");

export default function GameInviteVoiceCount(channel) {
  channel = channel.channel;
  let obj = channel(504);
  const items = [SortedVoiceStateStore];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => SortedVoiceStateStore.getVoiceStatesForChannel(channel).length,
    items1,
  );
  let tmp5 = null;
  if (0 !== stateFromStores) {
    obj = { style: tmp.container, children: null };
    obj = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    const items2 = [closure_5(tmp2(5101).VoiceNormalIcon, obj)];
    const obj1 = { variant: "text-sm/medium", color: "text-feedback-positive", children: stateFromStores };
    items2[1] = closure_5(tmp2(4556).Text, obj1);
    obj.children = items2;
    tmp5 = closure_6(View, obj);
  }
  return tmp5;
}
