// === Module 13660: JoinVoiceChannelButton ===

// Module 13660 (JoinVoiceChannelButton)
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "getUncachedChannelPermissions" /* 4120 */;
import { Permissions } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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
  obj[1] = jsx(channel(4928).Button, { disabled: flag, text: stringResult, onPress: callback });
  return <View style={items2}>{null}</View>;
};