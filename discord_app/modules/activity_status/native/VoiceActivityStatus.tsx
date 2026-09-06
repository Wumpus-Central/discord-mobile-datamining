// discord_app/modules/activity_status/native/VoiceActivityStatus.tsx
import util from "../../../intl/index.native.tsx";
import ActivityStatusTextDefault from "ActivityStatusText.tsx";
import UserProfileVoiceActivityIconDefault from "../../user_profile/native/UserProfileVoiceActivityIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ icon: { flexShrink: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/VoiceActivityStatus.tsx");

export default function VoiceActivityStatus(hideText) {
  ({ channel, textStyle, maxFontSizeMultiplier, hideIcon } = hideText);
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
      const items = [tmp.icon, hideText.iconStyle];
      obj.style = items;
      tmp5 = React3(UserProfileVoiceActivityIconDefault, obj);
    }
    const items1 = [tmp5];
    if (flag) {
      obj = { children: null };
      items1[1] = tmp9;
      obj.children = items1;
      let tmp3Result = tmp3(tmp4, obj);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          const tmp14 = ActivityStatusTextDefault;
          obj = { style: textStyle, maxFontSizeMultiplier, children: null };
          const intl = util.intl;
          const string = intl.string;
          const t = util.t;
          if (isGuildStageVoiceResult) {
            obj.children = string(t.QygGCN);
            let tmp11Result = tmp11(tmp14, obj);
          } else {
            obj.children = string(t.msxteM);
            tmp11Result = tmp11(tmp14, obj);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
      }
      const obj1 = { style: textStyle, maxFontSizeMultiplier, children: null };
      textStyle = require;
      maxFontSizeMultiplier = util.intl;
      obj1.children = maxFontSizeMultiplier.string(util.t["9FaEzi"]);
      tmp11Result = React3(ActivityStatusTextDefault, obj1);
    }
    tmp3 = hasOwnProperty;
    tmp4 = React4;
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
}
