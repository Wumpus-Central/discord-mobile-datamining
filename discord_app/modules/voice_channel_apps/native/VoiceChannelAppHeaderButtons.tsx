// === Module 19075: VoiceChannelAppHeaderButtons ===

// Module 19075 (VoiceChannelAppHeaderButtons)
import _modDef3962 from "module_3962" /* 3962 */;
import _modDef11633 from "module_11633" /* 11633 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14316 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 19000 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppHeaderButtons.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChannelAppHeaderButtons(arg0) {
  const cResult = id(576).c(14);
  ({ channel, inCall } = arg0);
  const obj = id(576);
  const voiceChannelAppAvailable = id(19076).useVoiceChannelAppAvailable(channel, inCall);
  const obj2 = id(19076);
  const voiceChannelAppOpen = id(19076).useVoiceChannelAppOpen(channel, inCall);
  const obj3 = id(19076);
  const voiceChannelAppVisible = id(19076).useVoiceChannelAppVisible(channel);
  id = channel.id;
  if (voiceChannelAppAvailable) {
    const tmp8Result = importDefault(voiceChannelAppVisible ? 17662 : 8566);
    if (cResult[0] !== voiceChannelAppVisible) {
      const intl = tmp(1125).intl;
      if (voiceChannelAppVisible) {
        let ZtYyOx = tmp(1125).t["3jrUBj"];
      } else {
        ZtYyOx = _modDef3962.ZtYyOx;
      }
      const stringResult = intl.string(ZtYyOx);
      cResult[0] = voiceChannelAppVisible;
      cResult[1] = stringResult;
    } else {
      if (cResult[2] !== id) {
        const fn = function b() {
          return VoiceChannelAppActionCreators.toggleVoiceChannelAppSurface(id);
        };
        cResult[2] = id;
        cResult[3] = fn;
        let tmp13 = fn;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] === tmp8Result) {
        if (cResult[5] === tmp10) {
          if (cResult[6] === tmp13) {
            let tmp14 = cResult[7];
          }
          if (cResult[8] === id) {
            if (cResult[9] === voiceChannelAppOpen) {
              let tmp17 = cResult[10];
            }
            if (cResult[11] === tmp14) {
              if (cResult[12] === tmp17) {
                let tmp21 = cResult[13];
              }
              return tmp21;
            }
            const obj5 = { children: null };
            const items = [tmp14, tmp17];
            obj5.children = items;
            const tmp24 = closure_5(closure_4, obj5);
            cResult[11] = tmp14;
            cResult[12] = tmp17;
            cResult[13] = tmp24;
            tmp21 = tmp24;
          }
          let tmp18 = null;
          if (voiceChannelAppOpen) {
            const obj6 = { icon: _modDef11633, accessibilityLabel: null, onPress: null };
            const intl2 = tmp(1125).intl;
            obj6.accessibilityLabel = intl2.string(_modDef3962["D+wwh8"]);
            obj6.onPress = function onPress() {
              return VoiceChannelAppActionCreators.closeVoiceChannelApp(id);
            };
            tmp18 = closure_3(VoicePanelIconButtonDefault, obj6);
            const tmp8Result2 = VoicePanelIconButtonDefault;
          }
          cResult[8] = id;
          cResult[9] = voiceChannelAppOpen;
          cResult[10] = tmp18;
          tmp17 = tmp18;
        }
      }
      const obj7 = { icon: tmp8Result, accessibilityLabel: cResult[1], onPress: tmp13 };
      const tmp16 = closure_3(VoicePanelIconButtonDefault, obj7);
      cResult[4] = tmp8Result;
      cResult[5] = cResult[1];
      cResult[6] = tmp13;
      cResult[7] = tmp16;
      tmp14 = tmp16;
    }
  } else {
    return null;
  }
  const obj4 = id(19076);
}) : (function VoiceChannelAppHeaderButtons(arg0) {
  ({ channel, inCall } = arg0);
  let id;
  const voiceChannelAppAvailable = id(19076).useVoiceChannelAppAvailable(channel, inCall);
  const obj = id(19076);
  const voiceChannelAppOpen = id(19076).useVoiceChannelAppOpen(channel, inCall);
  const obj2 = id(19076);
  const voiceChannelAppVisible = id(19076).useVoiceChannelAppVisible(channel);
  id = channel.id;
  let tmp7Result = null;
  if (voiceChannelAppAvailable) {
    const obj4 = { icon: importDefault(voiceChannelAppVisible ? 17662 : 8566), accessibilityLabel: null, onPress: null };
    const intl = tmp(1125).intl;
    if (voiceChannelAppVisible) {
      let ZtYyOx = tmp(1125).t["3jrUBj"];
    } else {
      ZtYyOx = _modDef3962.ZtYyOx;
    }
    obj4.accessibilityLabel = intl.string(ZtYyOx);
    obj4.onPress = function onPress() {
      return VoiceChannelAppActionCreators.toggleVoiceChannelAppSurface(id);
    };
    const items = [closure_3(VoicePanelIconButtonDefault, obj4), ];
    let tmp9Result = null;
    if (voiceChannelAppOpen) {
      const obj5 = { icon: _modDef11633, accessibilityLabel: null, onPress: null };
      const intl2 = tmp(1125).intl;
      obj5.accessibilityLabel = intl2.string(_modDef3962["D+wwh8"]);
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
});