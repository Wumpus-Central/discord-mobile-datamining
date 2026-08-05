// discord_app/modules/activity_status/native/VoiceActivityStatus.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { UserProfileVoiceActivityIcon } from "../../user_profile/native/UserProfileVoiceActivityIcon.tsx";
import { ActivityStatusText } from "ActivityStatusText.tsx";

let c3;
let c4;
let c5;
const require = arg1;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ icon: { flexShrink: 0 } });
const result = require("createCacheKey").fileFinishedImporting("modules/activity_status/native/VoiceActivityStatus.tsx");

export default function VoiceActivityStatus(hideText) {
  let channel;
  let hideIcon;
  let maxFontSizeMultiplier;
  let textStyle;
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
      tmp5 = callback(UserProfileVoiceActivityIcon, obj);
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
          const tmp14 = ActivityStatusText;
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
      const obj1 = { style: null, maxFontSizeMultiplier: null, children: null };
      obj1[0] = textStyle;
      obj1[1] = maxFontSizeMultiplier;
      textStyle = require;
      maxFontSizeMultiplier = getSystemLocale.intl;
      obj1[2] = maxFontSizeMultiplier.string(getSystemLocale.t["9FaEzi"]);
      tmp11Result = callback(ActivityStatusText, obj1);
      const tmp20 = ActivityStatusText;
    }
    tmp3 = closure_5;
    tmp4 = closure_4;
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
};