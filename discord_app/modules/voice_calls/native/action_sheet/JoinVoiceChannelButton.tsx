// === Module 13783: JoinVoiceChannelButton ===

// Module 13783 (JoinVoiceChannelButton)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1874 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4199 */;

const require = fn;
const View = fn(17).View;
const Permissions = fn(1074).Permissions;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ container: { flexDirection: "row" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx");

export default function JoinVoiceChannelButton(channel) {
  channel = channel.channel;
  const tmp = closure_9();
  let obj = channel(504);
  const items = [PermissionStore];
  const stateFromStores = obj.useStateFromStores(items, () => !PermissionStore.can(Permissions.CONNECT, channel));
  const intl = channel(1114).intl;
  let stringResult = intl.string(channel(1114).t.eIi3Om);
  if (tmp3) {
    const intl3 = tmp4(1114).intl;
    stringResult = intl3.string(tmp4(1114).t.rZfiNq);
    let flag = true;
  } else {
    flag = false;
    if (stateFromStores) {
      const intl2 = tmp4(1114).intl;
      stringResult = intl2.string(tmp4(1114).t.TVBCKZ);
      flag = true;
    }
  }
  const items1 = [channel.id];
  obj = { style: null, children: null };
  const items2 = [tmp.container, channel.style];
  obj.style = items2;
  const callback = noop.useCallback(() => {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  }, items1);
  obj.children = jsx(channel(4975).Button, { disabled: flag, text: stringResult, onPress: callback });
  return <View style={null}>{null}</View>;
};