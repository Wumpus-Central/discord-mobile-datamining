// discord_app/modules/guild_sidebar/native/VoiceChannelUserLimit.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _modDef13533 from "../../../../_runtime/metro/13533__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let rect = { videoIcon: null, wrapper: null, left: null, mid: null, right: null };
let size = { height: 16, width: 16, marginRight: 4, tintColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ICON };
rect.videoIcon = size;
rect.wrapper = {
  backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND,
  alignItems: "center",
  flexDirection: "row",
  borderRadius: 10,
  borderWidth: nativeDefault.modules.mobile.VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
};
let obj = {
  backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND,
  alignItems: "center",
  flexDirection: "row",
  borderRadius: 10,
  borderWidth: nativeDefault.modules.mobile.VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
};
rect.left = {
  height: 20,
  flexDirection: "row",
  paddingLeft: 6,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND,
};
let obj3 = {
  height: 20,
  flexDirection: "row",
  paddingLeft: 6,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND,
};
rect.mid = {
  borderTopWidth: 20,
  borderBottomWidth: 0,
  borderTopColor: "transparent",
  borderBottomColor: "transparent",
  borderRightWidth: 6,
  borderRightColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND,
  paddingRight: 2,
};
let obj4 = {
  borderTopWidth: 20,
  borderBottomWidth: 0,
  borderTopColor: "transparent",
  borderBottomColor: "transparent",
  borderRightWidth: 6,
  borderRightColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND,
  paddingRight: 2,
};
rect.right = {
  height: 20,
  flexDirection: "row",
  paddingRight: 6,
  paddingLeft: 2,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND,
};
let closure_6 = createStyles.createStyles(rect);
const ReactCompilerGating = fn(558);
let obj5 = {
  height: 20,
  flexDirection: "row",
  paddingRight: 6,
  paddingLeft: 2,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceChannelUserLimit.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoiceChannelUserLimit(arg0) {
        const cResult = c.c(25);
        ({ users, total, videoLimit } = arg0);
        const rect = closure_6();
        if (cResult[0] === rect.videoIcon) {
          if (cResult[1] === videoLimit) {
            let tmp6 = cResult[2];
          }
          if (cResult[3] !== users) {
            const padStartResult = users.toString().padStart(2, "0");
            cResult[3] = users;
            cResult[4] = padStartResult;
            let tmp10 = padStartResult;
            const str1 = users.toString();
          } else {
            tmp10 = cResult[4];
          }
          if (cResult[5] !== tmp10) {
            const obj2 = {
              variant: "text-xs/medium",
              lineClamp: 1,
              color: "voice-channel-user-limit-text",
              children: tmp10,
            };
            const tmp14 = React4(Text_Text.Text, obj2);
            cResult[5] = tmp10;
            cResult[6] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[6];
          }
          if (cResult[7] === rect.left) {
            if (cResult[8] === tmp6) {
              if (cResult[9] === tmp12) {
                let tmp15 = cResult[10];
              }
              if (cResult[11] !== rect.mid) {
                const obj3 = { style: rect.mid };
                const tmp22 = React4(View, obj3);
                cResult[11] = rect.mid;
                cResult[12] = tmp22;
                let tmp19 = tmp22;
              } else {
                tmp19 = cResult[12];
              }
              if (cResult[13] !== total) {
                const padStartResult1 = total.toString().padStart(2, "0");
                cResult[13] = total;
                cResult[14] = padStartResult1;
                let tmp23 = padStartResult1;
                const str3 = total.toString();
              } else {
                tmp23 = cResult[14];
              }
              if (cResult[15] !== tmp23) {
                const obj4 = {
                  variant: "text-xs/medium",
                  lineClamp: 1,
                  color: "voice-channel-user-limit-text",
                  children: tmp23,
                };
                const tmp27 = React4(Text_Text.Text, obj4);
                cResult[15] = tmp23;
                cResult[16] = tmp27;
                let tmp25 = tmp27;
              } else {
                tmp25 = cResult[16];
              }
              if (cResult[17] === rect.right) {
                if (cResult[18] === tmp25) {
                  let tmp28 = cResult[19];
                }
                if (cResult[20] === rect.wrapper) {
                  if (cResult[21] === tmp28) {
                    if (cResult[22] === tmp15) {
                      if (cResult[23] === tmp19) {
                        let tmp32 = cResult[24];
                      }
                      return tmp32;
                    }
                  }
                }
                const obj5 = { style: tmp4, children: null };
                const items = [tmp15, tmp19, tmp28];
                obj5.children = items;
                const tmp35 = hasOwnProperty(View, obj5);
                cResult[20] = rect.wrapper;
                cResult[21] = tmp28;
                cResult[22] = tmp15;
                cResult[23] = tmp19;
                cResult[24] = tmp35;
                tmp32 = tmp35;
              }
              const obj6 = { style: rect.right, children: tmp25 };
              const tmp31 = React4(View, obj6);
              cResult[17] = rect.right;
              cResult[18] = tmp25;
              cResult[19] = tmp31;
              tmp28 = tmp31;
            }
          }
          const obj7 = { style: tmp5, children: null };
          const items1 = [tmp6, tmp12];
          obj7.children = items1;
          const tmp18 = hasOwnProperty(View, obj7);
          cResult[7] = rect.left;
          cResult[8] = tmp6;
          cResult[9] = tmp12;
          cResult[10] = tmp18;
          tmp15 = tmp18;
        }
        let tmp7 = null;
        if (videoLimit) {
          const obj8 = { source: _modDef13533, size: native.Icon.Sizes.REFRESH_SMALL_16, style: rect.videoIcon };
          tmp7 = React4(native.Icon, obj8);
        }
        cResult[0] = rect.videoIcon;
        cResult[1] = videoLimit;
        cResult[2] = tmp7;
        tmp6 = tmp7;
      }
    : function VoiceChannelUserLimit(videoLimit) {
        ({ users, total } = videoLimit);
        const rect = closure_6();
        const obj = { style: rect.wrapper, children: null };
        const obj2 = { style: rect.left, children: null };
        let tmp3 = null;
        if (videoLimit.videoLimit) {
          const obj3 = { source: _modDef13533, size: native.Icon.Sizes.REFRESH_SMALL_16, style: rect.videoIcon };
          tmp3 = React4(native.Icon, obj3);
        }
        const items = [tmp3];
        const obj4 = {
          variant: "text-xs/medium",
          lineClamp: 1,
          color: "voice-channel-user-limit-text",
          children: users.toString().padStart(2, "0"),
        };
        items[1] = React4(Text_Text.Text, obj4);
        obj2.children = items;
        const items1 = [hasOwnProperty(View, obj2), React4(View, { style: rect.mid })];
        const obj6 = { style: rect.right, children: null };
        const obj7 = {
          variant: "text-xs/medium",
          lineClamp: 1,
          color: "voice-channel-user-limit-text",
          children: null,
        };
        const obj5 = { style: rect.mid };
        const str = users.toString();
        obj7.children = total.toString().padStart(2, "0");
        obj6.children = React4(Text_Text.Text, obj7);
        items1[2] = React4(View, obj6);
        obj.children = items1;
        return hasOwnProperty(View, obj);
      },
);
