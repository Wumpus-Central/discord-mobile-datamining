// === Module 19308: VoiceChannelAppHeaderButtons ===

// Module 19308 (VoiceChannelAppHeaderButtons)
import _modDef4290 from "module_4290" /* 4290 */;
import _modDef10173 from "module_10173" /* 10173 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 11363 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 19244 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppHeaderButtons.tsx");

export default function VoiceChannelAppHeaderButtons(arg0) {
  ({ channel, inCall } = arg0);
  let id;
  const voiceChannelAppAvailable = id(19309).useVoiceChannelAppAvailable(channel, inCall);
  const obj = id(19309);
  const voiceChannelAppOpen = id(19309).useVoiceChannelAppOpen(channel, inCall);
  const obj2 = id(19309);
  const voiceChannelAppVisible = id(19309).useVoiceChannelAppVisible(channel);
  id = channel.id;
  let tmp7Result = null;
  if (voiceChannelAppAvailable) {
    const obj4 = { icon: importDefault(voiceChannelAppVisible ? 17269 : 6975), accessibilityLabel: null, onPress: null };
    const intl = tmp(1112).intl;
    if (voiceChannelAppVisible) {
      let ZtYyOx = tmp(1112).t["3jrUBj"];
    } else {
      ZtYyOx = _modDef4290.ZtYyOx;
    }
    obj4.accessibilityLabel = intl.string(ZtYyOx);
    obj4.onPress = function onPress() {
      return VoiceChannelAppActionCreators.toggleVoiceChannelAppSurface(id);
    };
    items = [closure_3(VoicePanelIconButtonDefault, obj4), ];
    let tmp9Result = null;
    if (voiceChannelAppOpen) {
      const obj5 = { icon: _modDef10173, accessibilityLabel: null, onPress: null };
      const intl2 = tmp(1112).intl;
      obj5.accessibilityLabel = intl2.string(_modDef4290["D+wwh8"]);
      obj5.onPress = function onPress() {
        return VoiceChannelAppActionCreators.closeVoiceChannelApp(id);
      };
      tmp9Result = closure_3(VoicePanelIconButtonDefault, obj5);
      const tmp10Result = VoicePanelIconButtonDefault;
    }
    const obj6 = { children: null };
    items[1] = tmp9Result;
    obj6.children = items;
    tmp7Result = closure_5(closure_4, obj6);
  }
  return tmp7Result;
};