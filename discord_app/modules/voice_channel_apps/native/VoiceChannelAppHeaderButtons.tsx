// discord_app/modules/voice_channel_apps/native/VoiceChannelAppHeaderButtons.tsx
import _modDef3981 from "../VoiceChannelApps.messages.js";
import _modDef11367 from "../../../../_runtime/metro/11367__.js";
import VoicePanelIconButtonDefault from "../../voice_panel/native/shared/VoicePanelIconButton.tsx";
import VoiceChannelAppActionCreators from "../VoiceChannelAppActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppHeaderButtons.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VoiceChannelAppHeaderButtons(arg0) {
      const cResult = id(576).c(14);
      ({ channel, inCall } = arg0);
      const obj = id(576);
      const voiceChannelAppAvailable = id(18244).useVoiceChannelAppAvailable(channel, inCall);
      const obj2 = id(18244);
      const voiceChannelAppOpen = id(18244).useVoiceChannelAppOpen(channel, inCall);
      const obj3 = id(18244);
      const voiceChannelAppVisible = id(18244).useVoiceChannelAppVisible(channel);
      id = channel.id;
      if (voiceChannelAppAvailable) {
        const tmp8Result = importDefault(voiceChannelAppVisible ? 16852 : 8436);
        if (cResult[0] !== voiceChannelAppVisible) {
          const intl = tmp(1128).intl;
          if (voiceChannelAppVisible) {
            let ZtYyOx = tmp(1128).t["3jrUBj"];
          } else {
            ZtYyOx = _modDef3981.ZtYyOx;
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
                const obj6 = { icon: _modDef11367, accessibilityLabel: null, onPress: null };
                const intl2 = tmp(1128).intl;
                obj6.accessibilityLabel = intl2.string(_modDef3981["D+wwh8"]);
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
      const obj4 = id(18244);
    }
  : function VoiceChannelAppHeaderButtons(arg0) {
      ({ channel, inCall } = arg0);
      let id;
      const voiceChannelAppAvailable = id(18244).useVoiceChannelAppAvailable(channel, inCall);
      const obj = id(18244);
      const voiceChannelAppOpen = id(18244).useVoiceChannelAppOpen(channel, inCall);
      const obj2 = id(18244);
      const voiceChannelAppVisible = id(18244).useVoiceChannelAppVisible(channel);
      id = channel.id;
      let tmp7Result = null;
      if (voiceChannelAppAvailable) {
        const obj4 = {
          icon: importDefault(voiceChannelAppVisible ? 16852 : 8436),
          accessibilityLabel: null,
          onPress: null,
        };
        const intl = tmp(1128).intl;
        if (voiceChannelAppVisible) {
          let ZtYyOx = tmp(1128).t["3jrUBj"];
        } else {
          ZtYyOx = _modDef3981.ZtYyOx;
        }
        obj4.accessibilityLabel = intl.string(ZtYyOx);
        obj4.onPress = function onPress() {
          return VoiceChannelAppActionCreators.toggleVoiceChannelAppSurface(id);
        };
        const items = [closure_3(VoicePanelIconButtonDefault, obj4)];
        let tmp9Result = null;
        if (voiceChannelAppOpen) {
          const obj5 = { icon: _modDef11367, accessibilityLabel: null, onPress: null };
          const intl2 = tmp(1128).intl;
          obj5.accessibilityLabel = intl2.string(_modDef3981["D+wwh8"]);
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
