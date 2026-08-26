// === Module 9873: VoiceActivityStatus ===

// Module 9873 (VoiceActivityStatus)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 9863 */;
import UserProfileVoiceActivityIconDefault from "UserProfileVoiceActivityIcon" /* 9874 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ icon: { flexShrink: 0 } });
const result = require("set").fileFinishedImporting("modules/activity_status/native/VoiceActivityStatus.tsx");

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
      let obj = { channel: null, size: "xxs", color: "status-positive", style: null };
      obj[0] = channel;
      const items = [tmp.icon, hideText.iconStyle];
      obj[3] = items;
      tmp5 = callback(UserProfileVoiceActivityIconDefault, obj);
    }
    const items1 = [tmp5, ];
    if (flag) {
      obj = { children: null };
      items1[1] = tmp9;
      obj[0] = items1;
      let tmp3Result = tmp3(tmp4, obj);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          const tmp14 = ActivityStatusTextDefault;
          obj = { style: null, maxFontSizeMultiplier: null, children: null };
          obj[0] = textStyle;
          obj[1] = maxFontSizeMultiplier;
          const intl = getSystemLocale.intl;
          const string = intl.string;
          const t = getSystemLocale.t;
          if (isGuildStageVoiceResult) {
            obj[2] = string(t.QygGCN);
            let tmp11Result = tmp11(tmp14, obj);
          } else {
            obj[2] = string(t.msxteM);
            tmp11Result = tmp11(tmp14, obj);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
      }
      obj1 = { style: null, maxFontSizeMultiplier: null, children: null };
      obj1[0] = textStyle;
      obj1[1] = maxFontSizeMultiplier;
      textStyle = require;
      maxFontSizeMultiplier = getSystemLocale.intl;
      obj1[2] = maxFontSizeMultiplier.string(getSystemLocale.t["9FaEzi"]);
      tmp11Result = callback(ActivityStatusTextDefault, obj1);
      const tmp20 = ActivityStatusTextDefault;
    }
    tmp3 = closure_5;
    tmp4 = closure_4;
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
};