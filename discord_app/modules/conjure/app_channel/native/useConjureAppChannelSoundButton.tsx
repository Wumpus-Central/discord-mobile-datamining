// === Module 14468: useConjureAppChannelSoundButton ===

// Module 14468 (useConjureAppChannelSoundButton)
import util from "util" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5664 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10880 */;
import VoiceXIcon from "VoiceXIcon" /* 11718 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6833 */;

const require = globalThis.__r;

require = fn;
const isLaunched = fn(6834).isLaunched;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/useConjureAppChannelSoundButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppChannelSoundButton(channelId, arg1) {
  const cResult = require("c").c(13);
  let obj = require("c");
  let tmp4 = null;
  if (arg1) {
    tmp4 = channelId;
  }
  const isConjureChannelCandidate = require("ConjureUtils").useIsConjureChannelCandidate(tmp4, "useConjureAppChannelSoundButton");
  if (cResult[0] === channelId.guild_id) {
    if (cResult[1] === channelId.id) {
      let tmp6 = cResult[2];
    }
    let tmp9 = null;
    if (isConjureChannelCandidate) {
      let application_id = channelId.application_id;
      if (application_id == null) {
        application_id = null;
      }
      tmp9 = application_id;
    }
    const tmp8Result = stateFromStores(tmp2[7])(tmp9, tmp6);
    _require = tmp8Result;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [FramesStore];
      class C {
        constructor() {
          return closure_1_4.isDeviceMuted();
        }
      }
      cResult[3] = items;
      cResult[4] = C;
      let tmp14 = C;
      let tmp13 = items;
    } else {
      tmp13 = cResult[3];
      tmp14 = cResult[4];
    }
    const tmp7 = stateFromStores;
    const tmp8 = stateFromStores(tmp2[7]);
    stateFromStores = tmp(tmp2[8]).useStateFromStores(tmp13, tmp14);
    if (isConjureChannelCandidate) {
      if (isLaunched(tmp8Result)) {
        if (tmpResult2.showsFrameSoundToggle(tmp8Result)) {
          userMuted = tmp8Result.data.userMuted;
          class C {
            constructor() {
              return closure_1_4.isDeviceMuted();
            }
          }
          if (userMuted) {
            let VoiceNormalIcon = tmp(tmp2[10]).VoiceXIcon;
          } else {
            VoiceNormalIcon = tmp(tmp2[11]).VoiceNormalIcon;
          }
          if (cResult[5] !== userMuted) {
            const string = tmp(tmp2[12]).intl.string;
            tmp7(tmp2[13]);
            class C {
              constructor() {
                return closure_1_4.isDeviceMuted();
              }
            }
            cResult[5] = tmp18;
            cResult[6] = tmp21;
          } else {
            if (cResult[7] === tmp8Result.id) {
              if (cResult[8] === stateFromStores) {
                if (cResult[9] === VoiceNormalIcon) {
                  if (cResult[10] === tmp19) {
                    if (cResult[11] === userMuted) {
                      let tmp23 = cResult[12];
                    }
                    return tmp23;
                  }
                }
              }
            }
            const obj3 = { IconComponent: null, accessibilityLabel: null, onPress: null };
            class C {
              constructor() {
                return closure_1_4.isDeviceMuted();
              }
            }
            obj3.accessibilityLabel = cResult[6];
            obj3.onPress = function onPress() {
              if (stateFromStores) {
                const obj = { text: null, icon: null };
                const intl = util.intl;
                obj.text = intl.string(_modDef3864.W8Q9fy);
                obj.icon = VoiceXIcon.VoiceXIcon;
                ToastActionCreatorsDefault.open("CONJURE_APP_CHANNEL_DEVICE_SILENCED", obj);
                const tmpResult = ToastActionCreatorsDefault;
              } else {
                FramesActionCreatorsDefault.setFrameUserMuted(id.id, !userMuted);
                const tmpResult2 = FramesActionCreatorsDefault;
              }
            };
            cResult[7] = tmp8Result.id;
            cResult[8] = stateFromStores;
            cResult[9] = VoiceNormalIcon;
            cResult[10] = cResult[6];
            cResult[11] = userMuted;
            cResult[12] = obj3;
            tmp23 = obj3;
          }
        }
        tmpResult2 = tmp(tmp2[9]);
      }
    }
    return null;
  }
  const obj4 = { type: require("EmbeddedSurfaceType").EmbeddedSurfaceType.APP_CHANNEL, channelId: channelId.id, guildId: channelId.guild_id };
  cResult[0] = channelId.guild_id;
  cResult[1] = channelId.id;
  cResult[2] = obj4;
  tmp6 = obj4;
  const obj2 = require("ConjureUtils");
}) : (function useConjureAppChannelSoundButton(application_id, arg1) {
  _require = application_id;
  let tmp3 = null;
  if (arg1) {
    tmp3 = application_id;
  }
  const isConjureChannelCandidate = require("ConjureUtils").useIsConjureChannelCandidate(tmp3, "useConjureAppChannelSoundButton");
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = application_id);
  const memo = userMuted.useMemo(() => ({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id }), items);
  let tmp8 = null;
  let obj = require("ConjureUtils");
  const tmp6 = importDefault;
  if (isConjureChannelCandidate) {
    application_id = application_id.application_id;
    if (application_id == null) {
      application_id = null;
    }
    tmp8 = application_id;
  }
  const tmp7Result = require("useFrameBySurface")(tmp8, memo);
  importDefault = tmp7Result;
  const tmp7 = require("useFrameBySurface");
  const items1 = [FramesStore];
  stateFromStores = require("initialize").useStateFromStores(items1, () => deviceMuted.isDeviceMuted());
  if (isConjureChannelCandidate) {
    if (isLaunched(tmp7Result)) {
      if (tmpResult2.showsFrameSoundToggle(tmp7Result)) {
        userMuted = tmp7Result.data.userMuted;
        if (!userMuted) {
          userMuted = stateFromStores;
        }
        if (userMuted) {
          let VoiceNormalIcon = tmp(tmp2[10]).VoiceXIcon;
        } else {
          VoiceNormalIcon = tmp(tmp2[11]).VoiceNormalIcon;
        }
        const obj2 = { IconComponent: VoiceNormalIcon, accessibilityLabel: null, onPress: null };
        let intl = tmp(tmp2[12]).intl;
        const tmp6Result = tmp6(tmp2[13]);
        obj2.accessibilityLabel = intl.string(userMuted ? tmp6Result.bd0Ufh : tmp6Result.dxBzpe);
        obj2.onPress = function onPress() {
          if (stateFromStores) {
            const obj = { text: null, icon: null };
            const intl = util.intl;
            obj.text = intl.string(_modDef3864.W8Q9fy);
            obj.icon = VoiceXIcon.VoiceXIcon;
            ToastActionCreatorsDefault.open("CONJURE_APP_CHANNEL_DEVICE_SILENCED", obj);
            const tmpResult = ToastActionCreatorsDefault;
          } else {
            FramesActionCreatorsDefault.setFrameUserMuted(id.id, !userMuted);
            const tmpResult2 = FramesActionCreatorsDefault;
          }
        };
        return obj2;
      }
      tmpResult2 = tmp(tmp2[9]);
    }
  }
  return null;
});