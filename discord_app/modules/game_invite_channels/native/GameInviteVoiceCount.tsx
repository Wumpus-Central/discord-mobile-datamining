// discord_app/modules/game_invite_channels/native/GameInviteVoiceCount.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../stores/views/SortedVoiceStateStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: 8 } });
const result = require("set").fileFinishedImporting("modules/game_invite_channels/native/GameInviteVoiceCount.tsx");

export default function GameInviteVoiceCount(channel) {
  channel = channel.channel;
  let obj = channel(589);
  const items = [closure_4];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getVoiceStatesForChannel(channel).length, items1);
  let tmp5 = null;
  if (0 !== stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { size: "xs", color: null };
    obj[1] = ThemesDefault.colors.ICON_FEEDBACK_POSITIVE;
    const items2 = [callback(tmp2(5002).VoiceNormalIcon, obj), ];
    obj1 = { variant: "text-sm/medium", color: "text-feedback-positive", children: null };
    obj1[2] = stateFromStores;
    items2[1] = callback(tmp2(4441).Text, obj1);
    obj[1] = items2;
    tmp5 = callback2(View, obj);
  }
  return tmp5;
};