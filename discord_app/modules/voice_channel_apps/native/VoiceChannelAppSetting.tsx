// === Module 17017: VoiceChannelAppSetting ===

// Module 17017 (VoiceChannelAppSetting)
import c from "c" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import useVoiceChannelApp from "useVoiceChannelApp" /* 17018 */;
import VoiceChannelAppActionSheet from "VoiceChannelAppActionSheet" /* 17021 */;
import noop from "module_19" /* 19 */;

require = fn;
function VoiceChannelAppRow(guildId) {
  guildId = guildId.guildId;
  const onChange = guildId.onChange;
  let application_id = guildId.channel.application_id;
  if (application_id == null) {
    application_id = null;
  }
  options = guildId(application_id[5]).useVoiceChannelAppSettingOptions(guildId, application_id).options;
  const found = options.find((applicationId) => applicationId.applicationId === application_id);
  const intl = guildId(application_id[6]).intl;
  const stringResult = intl.string(onChange(application_id[7]).AdT7SZ);
  let name;
  if (found != null) {
    name = found.name;
  }
  if (name == null) {
    const intl2 = tmp2(tmp3[6]).intl;
    name = intl2.string(tmp5(tmp3[7]).KEB4Rm);
  }
  const obj2 = { title: stringResult, description: null, hasIcons: null, children: null };
  const intl3 = tmp2(tmp3[6]).intl;
  obj2.description = intl3.string(onChange(application_id[7])["wKSjL/"]);
  obj2.hasIcons = null != found;
  const obj3 = { label: name, accessibilityLabel: "" + stringResult + " " + name, icon: null, onPress: null, arrow: true };
  let tmp8Result = null;
  if (null != found) {
    const obj4 = { application: found.iconApplication };
    tmp8Result = jsx(tmp5(tmp3[10]), { application: found.iconApplication });
  }
  obj3.icon = tmp8Result;
  obj3.onPress = function onPress() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(17021, dependencyMap.paths), VoiceChannelAppActionSheet.VOICE_CHANNEL_APP_ACTION_SHEET_KEY, { guildId, selectedApplicationId: application_id, onChange });
  };
  obj2.children = jsx(guildId(application_id[9]).TableRow, { label: name, accessibilityLabel: "" + stringResult + " " + name, icon: null, onPress: null, arrow: true });
  return jsx(guildId(application_id[8]).TableRowGroup, { title: stringResult, description: null, hasIcons: null, children: null });
}
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppSetting.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  ({ channel, guildId, onChange } = arg0);
  if (!obj2.useCanConfigureVoiceChannelApp(channel)) {
    return null;
  } else {
    if (cResult[0] === channel) {
      if (cResult[1] === guildId) {
      }
    }
    const obj3 = { channel, guildId, onChange };
    const tmp5 = <VoiceChannelAppRow channel={channel} guildId={guildId} onChange={onChange} />;
    cResult[0] = channel;
    cResult[1] = guildId;
    cResult[2] = onChange;
    cResult[3] = tmp5;
  }
  obj2 = useVoiceChannelApp;
}) : ((channel) => {
  channel = channel.channel;
  ({ guildId, onChange } = channel);
  let tmp = null;
  if (obj.useCanConfigureVoiceChannelApp(channel)) {
    const obj2 = { channel, guildId, onChange };
    tmp = <VoiceChannelAppRow channel={channel} guildId={guildId} onChange={onChange} />;
  }
  return tmp;
});