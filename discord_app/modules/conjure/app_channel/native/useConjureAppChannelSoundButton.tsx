// === Module 14538: useConjureAppChannelSoundButton ===

// Module 14538 (useConjureAppChannelSoundButton)
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10928 */;
import VoiceXIcon from "VoiceXIcon" /* 11949 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6846 */;

const require = globalThis.__r;

require = fn;
const isLaunched = fn(6847).isLaunched;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/useConjureAppChannelSoundButton.tsx");

export default function useConjureAppChannelSoundButton(application_id, arg1) {
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
          let VoiceNormalIcon = tmp(tmp2[8]).VoiceXIcon;
        } else {
          VoiceNormalIcon = tmp(tmp2[9]).VoiceNormalIcon;
        }
        const obj2 = { IconComponent: VoiceNormalIcon, accessibilityLabel: null, onPress: null };
        let intl = tmp(tmp2[10]).intl;
        const tmp6Result = tmp6(tmp2[11]);
        obj2.accessibilityLabel = intl.string(userMuted ? tmp6Result.bd0Ufh : tmp6Result.dxBzpe);
        obj2.onPress = function onPress() {
          if (stateFromStores) {
            const obj = { text: null, icon: null };
            const intl = util.intl;
            obj.text = intl.string(_modDef3868.W8Q9fy);
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
      tmpResult2 = tmp(tmp2[7]);
    }
  }
  return null;
};