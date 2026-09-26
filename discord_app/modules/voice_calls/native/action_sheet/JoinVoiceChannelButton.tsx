// discord_app/modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import useIsVoiceChannelFullDefault from "../../useIsVoiceChannelFull.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

const require = fn;
const View = fn(17).View;
const Permissions = fn(1074).Permissions;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_9 = createStyles.createStyles({ container: { flexDirection: "row" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx");

export default function JoinVoiceChannelButton(channel) {
  channel = channel.channel;
  const tmp = closure_9();
  const tmp3 = useIsVoiceChannelFullDefault(channel);
  const items = [PermissionStore];
  const stateFromStores = channel(504).useStateFromStores(
    items,
    () => !PermissionStore.can(Permissions.CONNECT, channel),
  );
  const intl = channel(1115).intl;
  let stringResult = intl.string(channel(1115).t.eIi3Om);
  if (tmp3) {
    const intl3 = tmp4(1115).intl;
    stringResult = intl3.string(tmp4(1115).t.rZfiNq);
    let flag = true;
  } else {
    flag = false;
    if (stateFromStores) {
      const intl2 = tmp4(1115).intl;
      stringResult = intl2.string(tmp4(1115).t.TVBCKZ);
      flag = true;
    }
  }
  const items1 = [channel.id];
  const obj2 = { style: null, children: null };
  const items2 = [tmp.container, channel.style];
  obj2.style = items2;
  const callback = noop.useCallback(() => {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  }, items1);
  obj2.children = jsx(channel(5281).Button, { disabled: flag, text: stringResult, onPress: callback });
  return <View style={null}>{null}</View>;
}
