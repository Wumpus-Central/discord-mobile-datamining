// === Module 16082: VoiceChannelUserLimit ===

// Module 16082 (VoiceChannelUserLimit)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import AssetRegistryDefault from "AssetRegistry" /* 13618 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let rect = { videoIcon: size, wrapper: obj, left: obj2, mid: obj3, right: obj4 };
size = { height: 16, width: 16, marginRight: 4, tintColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ICON };
createStyles = createStyles.createStyles;
obj = { backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND, alignItems: "center", flexDirection: "row", borderRadius: 10, borderWidth: nativeDefault.modules.mobile.VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
obj2 = { height: 20, flexDirection: "row", paddingLeft: 6, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND };
obj3 = { borderTopWidth: 20, borderBottomWidth: 0, borderTopColor: "transparent", borderBottomColor: "transparent", borderRightWidth: 6, borderRightColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND, paddingRight: 2 };
obj4 = { height: 20, flexDirection: "row", paddingRight: 6, paddingLeft: 2, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND };
let closure_6 = createStyles(rect);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let items1;
  let total;
  let users;
  let videoLimit;
  const obj = react2;
  const cResult = obj.c(25);
  ({ users, total, videoLimit } = arg0);
  const rect = closure_6();
  if (cResult[0] === rect.videoIcon) {
    let tmp6;
    let tmp10;
    let tmp12;
    if (cResult[1] === videoLimit) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== users) {
      const str1 = users.toString();
      const padStartResult = str1.padStart(2, "0");
      cResult[3] = users;
      cResult[4] = padStartResult;
      tmp10 = padStartResult;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== tmp10) {
      const obj2 = { variant: "text-xs/medium", lineClamp: 1, color: "voice-channel-user-limit-text", children: tmp10 };
      const tmp14 = React3(Text_Text.Text, obj2);
      cResult[5] = tmp10;
      cResult[6] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === rect.left) {
      if (cResult[8] === tmp6) {
        let tmp15;
        let tmp19;
        let tmp23;
        let tmp25;
        if (cResult[9] === tmp12) {
          tmp15 = cResult[10];
        }
        if (cResult[11] !== rect.mid) {
          const obj3 = { style: rect.mid };
          const tmp22 = React3(View, obj3);
          cResult[11] = rect.mid;
          cResult[12] = tmp22;
          tmp19 = tmp22;
        } else {
          tmp19 = cResult[12];
        }
        const right = rect.right;
        if (cResult[13] !== total) {
          const str3 = total.toString();
          const padStartResult1 = str3.padStart(2, "0");
          cResult[13] = total;
          cResult[14] = padStartResult1;
          tmp23 = padStartResult1;
        } else {
          tmp23 = cResult[14];
        }
        if (cResult[15] !== tmp23) {
          const obj4 = { variant: "text-xs/medium", lineClamp: 1, color: "voice-channel-user-limit-text", children: tmp23 };
          const tmp27 = React3(Text_Text.Text, obj4);
          cResult[15] = tmp23;
          cResult[16] = tmp27;
          tmp25 = tmp27;
        } else {
          tmp25 = cResult[16];
        }
        if (cResult[17] === rect.right) {
          let tmp28;
          if (cResult[18] === tmp25) {
            tmp28 = cResult[19];
          }
          if (cResult[20] === rect.wrapper) {
            if (cResult[21] === tmp28) {
              if (cResult[22] === tmp15) {
                let tmp32;
                if (cResult[23] === tmp19) {
                  tmp32 = cResult[24];
                }
                return tmp32;
              }
            }
          }
          const obj5 = { style: tmp4, children: items };
          items = [tmp15, tmp19, tmp28];
          const tmp35 = hasOwnProperty(View, obj5);
          cResult[20] = rect.wrapper;
          cResult[21] = tmp28;
          cResult[22] = tmp15;
          cResult[23] = tmp19;
          cResult[24] = tmp35;
          tmp32 = tmp35;
        }
        const obj6 = { style: right, children: tmp25 };
        const tmp31 = React3(View, obj6);
        cResult[17] = rect.right;
        cResult[18] = tmp25;
        cResult[19] = tmp31;
        tmp28 = tmp31;
      }
    }
    const obj7 = { style: tmp5, children: items1 };
    items1 = [tmp6, tmp12];
    const tmp18 = hasOwnProperty(View, obj7);
    cResult[7] = rect.left;
    cResult[8] = tmp6;
    cResult[9] = tmp12;
    cResult[10] = tmp18;
    tmp15 = tmp18;
  }
  let tmp7 = null;
  if (videoLimit) {
    const obj8 = { source: AssetRegistryDefault, size: native.Icon.Sizes.REFRESH_SMALL_16, style: rect.videoIcon };
    const Icon = native.Icon;
    tmp7 = React3(Icon, obj8);
  }
  cResult[0] = rect.videoIcon;
  cResult[1] = videoLimit;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((videoLimit) => {
  let Text2;
  let items;
  let items1;
  let obj7;
  let str;
  let str1;
  let total;
  let users;
  ({ users, total } = videoLimit);
  videoLimit = videoLimit.videoLimit;
  const rect = closure_6();
  let tmp3 = null;
  const obj = { style: rect.wrapper, children: items1 };
  const obj2 = { style: rect.left, children: items };
  if (videoLimit) {
    const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.REFRESH_SMALL_16, style: rect.videoIcon };
    const Icon = native.Icon;
    tmp3 = React3(Icon, obj3);
  }
  items = [tmp3, ];
  const obj4 = { variant: "text-xs/medium", lineClamp: 1, color: "voice-channel-user-limit-text", children: str.padStart(2, "0") };
  const Text = Text_Text.Text;
  str = users.toString();
  items[1] = React3(Text, obj4);
  items1 = [hasOwnProperty(View, obj2), , ];
  const obj5 = { style: rect.mid };
  items1[1] = React3(View, obj5);
  const obj6 = { style: rect.right, children: React3(Text2, obj7) };
  obj7 = { variant: "text-xs/medium", lineClamp: 1, color: "voice-channel-user-limit-text", children: str1.padStart(2, "0") };
  Text2 = Text_Text.Text;
  str1 = total.toString();
  items1[2] = React3(View, obj6);
  return hasOwnProperty(View, obj);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceChannelUserLimit.tsx");

export default memoResult;