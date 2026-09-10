// discord_app/modules/activity_status/native/VoiceActivityStatus.tsx
import util from "../../../intl/index.native.tsx";
import ActivityStatusTextDefault from "ActivityStatusText.tsx";
import UserProfileVoiceActivityIconDefault from "../../user_profile/native/UserProfileVoiceActivityIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4605);
let closure_6 = createStyles.createStyles({ icon: { flexShrink: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/VoiceActivityStatus.tsx");

export default function VoiceActivityStatus(hideText) {
  ({ channel, hideIcon } = hideText);
  ({ iconStyle, textStyle, maxFontSizeMultiplier } = hideText);
  if (hideIcon === undefined) {
    hideIcon = false;
  }
  let flag = hideText.hideText;
  if (flag === undefined) {
    flag = false;
  }
  if (!hideIcon) {
    let tmp5 = !hideIcon;
    if (!hideIcon) {
      let obj = { channel, size: "xxs", color: "status-positive", style: null };
      const items = [tmp.icon, iconStyle];
      obj.style = items;
      tmp5 = React3(UserProfileVoiceActivityIconDefault, obj);
    }
    const items1 = [tmp5];
    if (flag) {
      obj = { children: null };
      items1[1] = tmp9;
      obj.children = items1;
      let tmp3Result = hasOwnProperty(React4, obj);
    } else {
      let v9FaEzi = dependencyMap;
      obj = { style: textStyle, maxFontSizeMultiplier, children: null };
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          const intl = util.intl;
          const string = intl.string;
          const t = util.t;
          if (isGuildStageVoiceResult) {
            let stringResult = string(t.QygGCN);
          } else {
            stringResult = string(t.msxteM);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        obj.children = stringResult;
        React3(tmp13, obj);
      }
      const intl2 = util.intl;
      v9FaEzi = util.t["9FaEzi"];
      stringResult = intl2.string(v9FaEzi);
      tmp13 = ActivityStatusTextDefault;
    }
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
}
export const getVoiceActivityStatusText = function getVoiceActivityStatusText(voiceChannel) {
  if (!voiceChannel.isDM()) {
    if (!voiceChannel.isGroupDM()) {
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (isGuildStageVoiceResult) {
        let stringResult = string(t.QygGCN);
      } else {
        stringResult = string(t.msxteM);
      }
      isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
    }
    return stringResult;
  }
  const intl2 = util.intl;
  stringResult = intl2.string(util.t["9FaEzi"]);
};
