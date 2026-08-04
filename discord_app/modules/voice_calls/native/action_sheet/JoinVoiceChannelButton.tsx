// discord_app/modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_9 = createCacheKey.createStyles({ container: { flexDirection: "row" } });
let result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx");

export default function JoinVoiceChannelButton(channel) {
  channel = channel.channel;
  const tmp = callback();
  let obj = channel(589);
  const items = [getUncachedChannelPermissions];
  const stateFromStores = obj.useStateFromStores(items, () => !outer1_6.can(outer1_7.CONNECT, channel));
  const intl = channel(1236).intl;
  let stringResult = intl.string(channel(1236).t.eIi3Om);
  if (tmp3) {
    const intl3 = tmp4(1236).intl;
    stringResult = intl3.string(tmp4(1236).t.rZfiNq);
    let flag = true;
  } else {
    flag = false;
    if (stateFromStores) {
      const intl2 = tmp4(1236).intl;
      stringResult = intl2.string(tmp4(1236).t.TVBCKZ);
      flag = true;
    }
  }
  const items1 = [channel.id];
  obj = { style: items2, children: null };
  items2 = [tmp.container, channel.style];
  callback = React.useCallback(() => {
    const result = outer1_2(outer1_3[9]).dismissGlobalKeyboard();
    const obj = outer1_2(outer1_3[9]);
    const voiceChannel = outer1_1(outer1_3[10]).selectVoiceChannel(channel.id);
  }, items1);
  obj[1] = jsx(channel(4604).Button, { disabled: flag, text: stringResult, onPress: callback });
  return <View style={items2}>{null}</View>;
};