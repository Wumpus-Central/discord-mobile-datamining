// === Module 10225: VoiceActivityStatus ===

// Module 10225 (VoiceActivityStatus)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 10214 */;
import UserProfileVoiceActivityIconDefault from "UserProfileVoiceActivityIcon" /* 10226 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles({ icon: { flexShrink: 0 } });
const ReactCompilerGating = fn(558);
function getVoiceActivityStatusText(voiceChannel) {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/VoiceActivityStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceActivityStatus(arg0) {
  let v9FaEzi = dependencyMap;
  const cResult = c.c(13);
  ({ channel, iconStyle, textStyle, maxFontSizeMultiplier, hideIcon, hideText } = arg0);
  const tmp6 = closure_6();
  if (undefined !== hideIcon && hideIcon) {
    if (tmp5) {
      return null;
    }
  }
  if (cResult[0] === channel) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === iconStyle) {
        if (cResult[3] === tmp6) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] === channel) {
          if (cResult[6] === tmp5) {
            if (cResult[7] === maxFontSizeMultiplier) {
              if (cResult[8] === textStyle) {
                let tmp12 = cResult[9];
              }
              if (cResult[10] === tmp8) {
              }
              const obj2 = { children: null };
              const items = [tmp8, tmp12];
              obj2.children = items;
              const tmp23 = hasOwnProperty(React4, obj2);
              cResult[10] = tmp8;
              cResult[11] = tmp12;
              cResult[12] = tmp23;
            }
          }
        }
        if (tmp5) {
          cResult[5] = channel;
          cResult[6] = tmp5;
          cResult[7] = maxFontSizeMultiplier;
          cResult[8] = textStyle;
          cResult[9] = tmp13;
          tmp12 = tmp13;
        } else {
          const obj3 = { style: textStyle, maxFontSizeMultiplier, children: null };
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
            obj3.children = stringResult;
            React3(tmp16, obj3);
          }
          const intl2 = util.intl;
          v9FaEzi = util.t["9FaEzi"];
          stringResult = intl2.string(v9FaEzi);
          tmp16 = ActivityStatusTextDefault;
        }
      }
    }
  }
  let tmp9 = !tmp4;
  if (!(undefined !== hideIcon && hideIcon)) {
    const obj4 = { channel, size: "xxs", color: "status-positive", style: null };
    const items1 = [tmp6.icon, iconStyle];
    obj4.style = items1;
    tmp9 = React3(UserProfileVoiceActivityIconDefault, obj4);
  }
  cResult[0] = channel;
  cResult[1] = undefined !== hideIcon && hideIcon;
  cResult[2] = iconStyle;
  cResult[3] = tmp6;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function VoiceActivityStatus(hideText) {
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
      const obj = { channel, size: "xxs", color: "status-positive", style: null };
      const items = [tmp.icon, iconStyle];
      obj.style = items;
      tmp5 = React3(UserProfileVoiceActivityIconDefault, obj);
    }
    const items1 = [tmp5, ];
    if (flag) {
      const obj2 = { children: null };
      items1[1] = tmp9;
      obj2.children = items1;
      let tmp3Result = hasOwnProperty(React4, obj2);
    } else {
      let v9FaEzi = dependencyMap;
      const obj3 = { style: textStyle, maxFontSizeMultiplier, children: null };
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
        obj3.children = stringResult;
        React3(tmp13, obj3);
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
});
export { getVoiceActivityStatusText };