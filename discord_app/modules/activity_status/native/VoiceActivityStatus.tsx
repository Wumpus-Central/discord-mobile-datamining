// === Module 10627: VoiceActivityStatus ===

// Module 10627 (VoiceActivityStatus)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 10618 */;
import UserProfileVoiceActivityIconDefault from "UserProfileVoiceActivityIcon" /* 10628 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ icon: { flexShrink: 0 } });
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let hideIcon;
  let hideText;
  let iconStyle;
  let items;
  let items1;
  let maxFontSizeMultiplier;
  let textStyle;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(13);
  ({ channel, iconStyle, textStyle, maxFontSizeMultiplier, hideIcon, hideText } = arg0);
  const tmp6 = closure_6();
  if (!(undefined !== hideIcon && hideIcon)) {
    if (cResult[0] === channel) {
      if (cResult[1] === (undefined !== hideIcon && hideIcon)) {
        if (cResult[2] === iconStyle) {
          let tmp8;
          if (cResult[3] === tmp6) {
            tmp8 = cResult[4];
          }
          if (cResult[5] === channel) {
            if (cResult[6] === (undefined !== hideText && hideText)) {
              if (cResult[7] === maxFontSizeMultiplier) {
                let tmp12;
                if (cResult[8] === textStyle) {
                  tmp12 = cResult[9];
                }
                if (cResult[10] === tmp8) {
                  let tmp19;
                  if (cResult[11] === tmp12) {
                    tmp19 = cResult[12];
                  }
                  tmp7 = tmp19;
                }
                const obj2 = { children: items };
                items = [tmp8, tmp12];
                const tmp22 = hasOwnProperty(React3, obj2);
                cResult[10] = tmp8;
                cResult[11] = tmp12;
                cResult[12] = tmp22;
                tmp19 = tmp22;
              }
            }
          }
          let tmp14Result = !tmp5;
          if (tmp14Result) {
            const obj3 = { style: textStyle, maxFontSizeMultiplier, children: null };
            const tmp16 = ActivityStatusTextDefault;
            if (!channel.isDM()) {
              let stringResult;
              if (!channel.isGroupDM()) {
                const isGuildStageVoiceResult = channel.isGuildStageVoice();
                const intl = intl3.intl;
                const string = intl.string;
                const t = intl3.t;
                if (isGuildStageVoiceResult) {
                  stringResult = string(t.QygGCN);
                } else {
                  stringResult = string(t.msxteM);
                }
              }
              obj3.children = stringResult;
              tmp14Result = _false(tmp16, obj3);
            }
            const intl2 = intl3.intl;
            stringResult = intl2.string(intl3.t["9FaEzi"]);
          }
          cResult[5] = channel;
          cResult[6] = undefined !== hideText && hideText;
          cResult[7] = maxFontSizeMultiplier;
          cResult[8] = textStyle;
          cResult[9] = tmp14Result;
          tmp12 = tmp14Result;
        }
      }
    }
    let tmp9 = !tmp4;
    if (tmp9) {
      const obj4 = { channel, size: "xxs", color: "status-positive", style: items1 };
      items1 = [tmp6.icon, iconStyle];
      tmp9 = _false(UserProfileVoiceActivityIconDefault, obj4);
    }
    cResult[0] = channel;
    cResult[1] = undefined !== hideIcon && hideIcon;
    cResult[2] = iconStyle;
    cResult[3] = tmp6;
    cResult[4] = tmp9;
    tmp8 = tmp9;
  } else {
    tmp7 = null;
  }
  return tmp7;
}) : ((hideText) => {
  let channel;
  let hideIcon;
  let iconStyle;
  let items;
  let maxFontSizeMultiplier;
  let textStyle;
  let tmp3Result;
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
    if (tmp5) {
      const obj = { channel, size: "xxs", color: "status-positive", style: items };
      items = [tmp.icon, iconStyle];
      tmp5 = _false(UserProfileVoiceActivityIconDefault, obj);
    }
    const items1 = [tmp5, ];
    let tmp10Result = !flag;
    if (tmp10Result) {
      const obj2 = { style: textStyle, maxFontSizeMultiplier, children: null };
      const tmp13 = ActivityStatusTextDefault;
      if (!channel.isDM()) {
        let stringResult;
        if (!channel.isGroupDM()) {
          const isGuildStageVoiceResult = channel.isGuildStageVoice();
          const intl = intl3.intl;
          const string = intl.string;
          const t = intl3.t;
          if (isGuildStageVoiceResult) {
            stringResult = string(t.QygGCN);
          } else {
            stringResult = string(t.msxteM);
          }
        }
        obj2.children = stringResult;
        tmp10Result = _false(tmp13, obj2);
      }
      const intl2 = intl3.intl;
      stringResult = intl2.string(intl3.t["9FaEzi"]);
    }
    const obj3 = { children: items1 };
    items1[1] = tmp10Result;
    tmp3Result = hasOwnProperty(React3, obj3);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
});
function getVoiceActivityStatusText(voiceChannel) {
  if (!voiceChannel.isDM()) {
    let stringResult;
    if (!voiceChannel.isGroupDM()) {
      const isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
      const intl = intl3.intl;
      const string = intl.string;
      const t = intl3.t;
      if (isGuildStageVoiceResult) {
        stringResult = string(t.QygGCN);
      } else {
        stringResult = string(t.msxteM);
      }
    }
    return stringResult;
  }
  const intl2 = intl3.intl;
  stringResult = intl2.string(intl3.t["9FaEzi"]);
}
const result = size.fileFinishedImporting("modules/activity_status/native/VoiceActivityStatus.tsx");

export default tmp4;
export { getVoiceActivityStatusText };