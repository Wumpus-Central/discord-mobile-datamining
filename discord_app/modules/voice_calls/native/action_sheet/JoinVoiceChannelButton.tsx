// discord_app/modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/PermissionStore.tsx";
import { Permissions } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let closure_9 = createCacheKey.createStyles({ container: { flexDirection: "row" } });
let result = require("set").fileFinishedImporting("modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx");

export default function JoinVoiceChannelButton(channel) {
  channel = channel.channel;
  const tmp = callback();
  let obj = channel(586);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => !closure_1_6.can(closure_1_7.CONNECT, channel));
  const intl = channel(1233).intl;
  let stringResult = intl.string(channel(1233).t.eIi3Om);
  if (tmp3) {
    const intl3 = tmp4(1233).intl;
    stringResult = intl3.string(tmp4(1233).t.rZfiNq);
    let flag = true;
  } else {
    flag = false;
    if (stateFromStores) {
      const intl2 = tmp4(1233).intl;
      stringResult = intl2.string(tmp4(1233).t.TVBCKZ);
      flag = true;
    }
  }
  const items1 = [channel.id];
  obj = { style: items2, children: null };
  items2 = [tmp.container, channel.style];
  callback = React.useCallback(() => {
    const result = closure_1_2(closure_1_3[9]).dismissGlobalKeyboard();
    const obj = closure_1_2(closure_1_3[9]);
    const voiceChannel = closure_1_1(closure_1_3[10]).selectVoiceChannel(channel.id);
  }, items1);
  obj[1] = jsx(channel(4929).Button, { disabled: flag, text: stringResult, onPress: callback });
  return <View style={items2}>{null}</View>;
}
