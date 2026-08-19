// === Module 12662: JoinVoiceChannelButton ===

// Module 12662 (JoinVoiceChannelButton)
import dismissGlobalKeyboardAll from "dismissGlobalKeyboard" /* 1892 */;
import _modDef4975 from "module_4975" /* 4975 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_9 = createCacheKey.createStyles({ container: { flexDirection: "row" } });
let result = require("obj132").fileFinishedImporting("modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx");

export default function JoinVoiceChannelButton(channel) {
  channel = channel.channel;
  const tmp = callback();
  let obj = channel(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => !closure_1_6.can(Permissions.CONNECT, channel));
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
    const result = dismissGlobalKeyboardAll.dismissGlobalKeyboard();
    const voiceChannel = _modDef4975.selectVoiceChannel(channel.id);
  }, items1);
  obj[1] = jsx(channel(4745).Button, { disabled: flag, text: stringResult, onPress: callback });
  return <View style={items2}>{null}</View>;
};