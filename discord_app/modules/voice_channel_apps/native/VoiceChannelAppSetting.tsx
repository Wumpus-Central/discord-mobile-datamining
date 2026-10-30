// === Module 18844: VoiceChannelAppSetting ===

// Module 18844 (VoiceChannelAppSetting)
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import VoiceChannelAppActionSheet from "VoiceChannelAppActionSheet" /* 18848 */;
import noop from "module_19" /* 19 */;

require = fn;
function VoiceChannelAppRow(guildId) {
  guildId = guildId.guildId;
  const onChange = guildId.onChange;
  let application_id = guildId.channel.application_id;
  if (application_id == null) {
    application_id = null;
  }
  const options = guildId(application_id[3]).useVoiceChannelAppSettingOptions(guildId, application_id).options;
  const found = options.find((applicationId) => applicationId.applicationId === application_id);
  const intl = guildId(application_id[4]).intl;
  const stringResult = intl.string(onChange(application_id[5]).AdT7SZ);
  let name;
  if (found != null) {
    name = found.name;
  }
  if (name == null) {
    const intl2 = tmp2(tmp3[4]).intl;
    name = intl2.string(tmp5(tmp3[5]).KEB4Rm);
  }
  const obj2 = { title: stringResult, description: null, hasIcons: null, children: null };
  const intl3 = tmp2(tmp3[4]).intl;
  obj2.description = intl3.string(onChange(application_id[5])["wKSjL/"]);
  obj2.hasIcons = null != found;
  const obj3 = { label: name, accessibilityLabel: "" + stringResult + " " + name, icon: null, onPress: null, arrow: true };
  let tmp8Result = null;
  if (null != found) {
    const obj4 = { application: found.iconApplication };
    tmp8Result = jsx(tmp5(tmp3[8]), { application: found.iconApplication });
  }
  obj3.icon = tmp8Result;
  obj3.onPress = function handlePress() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(18848, dependencyMap.paths), VoiceChannelAppActionSheet.VOICE_CHANNEL_APP_ACTION_SHEET_KEY, { guildId, selectedApplicationId: application_id, onChange });
  };
  obj2.children = jsx(guildId(application_id[7]).TableRow, { label: name, accessibilityLabel: "" + stringResult + " " + name, icon: null, onPress: null, arrow: true });
  return jsx(guildId(application_id[6]).TableRowGroup, { title: stringResult, description: null, hasIcons: null, children: null });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppSetting.tsx");

export default function VoiceChannelAppSetting(channel) {
  channel = channel.channel;
  ({ guildId, onChange } = channel);
  let tmp = null;
  if (obj.useCanConfigureVoiceChannelApp(channel)) {
    const obj2 = { channel, guildId, onChange };
    tmp = <VoiceChannelAppRow channel={channel} guildId={guildId} onChange={onChange} />;
  }
  return tmp;
};