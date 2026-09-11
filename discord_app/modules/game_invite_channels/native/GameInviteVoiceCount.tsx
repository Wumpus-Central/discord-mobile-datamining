// === Module 12119: GameInviteVoiceCount ===

// Module 12119 (GameInviteVoiceCount)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4630 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4606);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_invite_channels/native/GameInviteVoiceCount.tsx");

export default function GameInviteVoiceCount(channel) {
  channel = channel.channel;
  let obj = channel(504);
  const items = [SortedVoiceStateStore];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStatesForChannel(channel).length, items1);
  let tmp5 = null;
  if (0 !== stateFromStores) {
    obj = { style: tmp.container, children: null };
    obj = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    const items2 = [closure_5(tmp2(5152).VoiceNormalIcon, obj), ];
    const obj1 = { variant: "text-sm/medium", color: "text-feedback-positive", children: stateFromStores };
    items2[1] = closure_5(tmp2(4602).Text, obj1);
    obj.children = items2;
    tmp5 = closure_6(View, obj);
  }
  return tmp5;
};