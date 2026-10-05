// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceChannelRowItem.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import GroupDMAvatar from "../../../../group_dm/native/GroupDMAvatar.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import native_mod from "../../../../../design/void/native.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let native;
let num;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
const StatusTypes = Constants.StatusTypes;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  channelItemContainer: obj2,
  channelItemLeft: { alignItems: "center", justifyContent: "center" },
  channelItemUnreadIndicator: size,
  channelItemAvatar: obj3,
  channelItemContent: { flexDirection: "column", flex: 1, justifyContent: "center" },
  channelItemTop: obj4,
};
obj2 = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.sm,
  paddingVertical: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_8,
};
createStyles = createStyles.createStyles;
size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  height: 8,
  width: 8,
  borderRadius: nativeDefault.radii.round,
  margin: nativeDefault.space.PX_8,
};
obj3 = { marginRight: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center" };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_4, justifyContent: "space-between", alignItems: "center" };
let closure_6 = createStyles(obj);
let obj5 = {
  direction: native.CutoutDirection.BOTTOM_RIGHT,
  radius: num / 2 + 4,
  imageType: native.CutoutType.CIRCULAR,
  inset: -4,
};
native = native_mod;
num = native.getStatusSize(native.AvatarSizes.LARGE_48);
if (num == null) {
  num = 0;
}
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let animatedStyles;
      let avatar1;
      let avatar2;
      let isUnread;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let preview;
      let status;
      let timestamp;
      let title;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(39);
      ({ animatedStyles, title, timestamp, preview, avatar1, avatar2, status, isUnread } = arg0);
      if (undefined === status) {
        status = StatusTypes.ONLINE;
      }
      const tmp6 = closure_6();
      let num = 0;
      if (undefined !== isUnread && isUnread) {
        num = 1;
      }
      if (cResult[0] !== num) {
        const obj2 = { opacity: num };
        cResult[0] = num;
        cResult[1] = obj2;
        tmp7 = obj2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === tmp6.channelItemUnreadIndicator) {
        let tmp8;
        if (cResult[3] === tmp7) {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp6.channelItemLeft) {
          let tmp10;
          let tmp18;
          if (cResult[6] === tmp8) {
            tmp10 = cResult[7];
          }
          if (cResult[8] === avatar1) {
            if (cResult[9] === avatar2) {
              let tmp14;
              if (cResult[10] === status) {
                tmp14 = cResult[11];
              }
              if (cResult[12] === tmp6.channelItemAvatar) {
                let tmp20;
                if (cResult[13] === tmp14) {
                  tmp20 = cResult[14];
                }
                const tmp24 = undefined !== isUnread && isUnread ? animatedStyles.textNormal : animatedStyles.textMuted;
                if (cResult[15] === tmp24) {
                  let tmp25;
                  if (cResult[16] === title) {
                    tmp25 = cResult[17];
                  }
                  if (cResult[18] === animatedStyles.textMuted) {
                    let tmp28;
                    if (cResult[19] === timestamp) {
                      tmp28 = cResult[20];
                    }
                    if (cResult[21] === tmp6.channelItemTop) {
                      if (cResult[22] === tmp25) {
                        let tmp31;
                        if (cResult[23] === tmp28) {
                          tmp31 = cResult[24];
                        }
                        if (cResult[25] === animatedStyles.textMuted) {
                          if (cResult[26] === animatedStyles.textNormal) {
                            if (cResult[27] === (undefined !== isUnread && isUnread)) {
                              let tmp35;
                              if (cResult[28] === preview) {
                                tmp35 = cResult[29];
                              }
                              if (cResult[30] === tmp6.channelItemContent) {
                                if (cResult[31] === tmp31) {
                                  let tmp38;
                                  if (cResult[32] === tmp35) {
                                    tmp38 = cResult[33];
                                  }
                                  if (cResult[34] === tmp6.channelItemContainer) {
                                    if (cResult[35] === tmp38) {
                                      if (cResult[36] === tmp10) {
                                        let tmp42;
                                        if (cResult[37] === tmp20) {
                                          tmp42 = cResult[38];
                                        }
                                        return tmp42;
                                      }
                                    }
                                  }
                                  const obj3 = { style: tmp6.channelItemContainer, children: items };
                                  items = [tmp10, tmp20, tmp38];
                                  const tmp45 = hasOwnProperty(View, obj3);
                                  cResult[34] = tmp6.channelItemContainer;
                                  cResult[35] = tmp38;
                                  cResult[36] = tmp10;
                                  cResult[37] = tmp20;
                                  cResult[38] = tmp45;
                                  tmp42 = tmp45;
                                }
                              }
                              const obj4 = { style: tmp6.channelItemContent, children: items1 };
                              items1 = [tmp31, tmp35];
                              const tmp41 = hasOwnProperty(View, obj4);
                              cResult[30] = tmp6.channelItemContent;
                              cResult[31] = tmp31;
                              cResult[32] = tmp35;
                              cResult[33] = tmp41;
                              tmp38 = tmp41;
                            }
                          }
                        }
                        let tmp37Result = null;
                        if (null != preview) {
                          obj5 = {
                            animated: true,
                            style:
                              undefined !== isUnread && isUnread ? animatedStyles.textNormal : animatedStyles.textMuted,
                            variant: "redesign/message-preview/medium",
                            lineClamp: 1,
                            children: preview,
                          };
                          tmp37Result = React3(Text_Text.Text, obj5);
                        }
                        cResult[25] = animatedStyles.textMuted;
                        cResult[26] = animatedStyles.textNormal;
                        cResult[27] = undefined !== isUnread && isUnread;
                        cResult[28] = preview;
                        cResult[29] = tmp37Result;
                        tmp35 = tmp37Result;
                      }
                    }
                    const obj6 = { style: tmp6.channelItemTop, children: items2 };
                    items2 = [tmp25, tmp28];
                    const tmp34 = hasOwnProperty(View, obj6);
                    cResult[21] = tmp6.channelItemTop;
                    cResult[22] = tmp25;
                    cResult[23] = tmp28;
                    cResult[24] = tmp34;
                    tmp31 = tmp34;
                  }
                  const obj7 = {
                    animated: true,
                    style: animatedStyles.textMuted,
                    variant: "text-xs/medium",
                    children: timestamp,
                  };
                  const tmp30 = React3(Text_Text.Text, obj7);
                  cResult[18] = animatedStyles.textMuted;
                  cResult[19] = timestamp;
                  cResult[20] = tmp30;
                  tmp28 = tmp30;
                }
                const obj8 = {
                  animated: true,
                  style: tmp24,
                  variant: "redesign/channel-title/semibold",
                  children: title,
                };
                const tmp27 = React3(Text_Text.Text, obj8);
                cResult[15] = tmp24;
                cResult[16] = title;
                cResult[17] = tmp27;
                tmp25 = tmp27;
              }
              const obj9 = { style: tmp6.channelItemAvatar, children: tmp14 };
              const tmp23 = React3(View, obj9);
              cResult[12] = tmp6.channelItemAvatar;
              cResult[13] = tmp14;
              cResult[14] = tmp23;
              tmp20 = tmp23;
            }
          }
          if (null != avatar2) {
            const obj10 = { sources: items3, size: native.AvatarSizes.LARGE_48 };
            items3 = [avatar1, avatar2];
            const FacepileGroupDMAvatar = GroupDMAvatar.FacepileGroupDMAvatar;
            tmp18 = React3(FacepileGroupDMAvatar, obj10);
          } else {
            const obj11 = { status, source: avatar1, cutout: obj5, size: native.AvatarSizes.LARGE_48 };
            const Avatar = native.Avatar;
            tmp18 = React3(Avatar, obj11);
          }
          cResult[8] = avatar1;
          cResult[9] = avatar2;
          cResult[10] = status;
          cResult[11] = tmp18;
          tmp14 = tmp18;
        }
        const obj12 = { style: tmp6.channelItemLeft, children: tmp8 };
        const tmp13 = React3(View, obj12);
        cResult[5] = tmp6.channelItemLeft;
        cResult[6] = tmp8;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
      const obj13 = { style: items4 };
      items4 = [tmp6.channelItemUnreadIndicator, tmp7];
      const tmp9 = React3(View, obj13);
      cResult[2] = tmp6.channelItemUnreadIndicator;
      cResult[3] = tmp7;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (isUnread) => {
      let animatedStyles;
      let avatar1;
      let avatar2;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let preview;
      let status;
      let timestamp;
      let title;
      let tmp5Result;
      let tmp6;
      ({ animatedStyles, preview, avatar1, avatar2, status } = isUnread);
      ({ title, timestamp } = isUnread);
      if (status === undefined) {
        status = StatusTypes.ONLINE;
      }
      let flag = isUnread.isUnread;
      if (flag === undefined) {
        flag = false;
      }
      const tmp2 = closure_6();
      const obj = { style: tmp2.channelItemContainer, children: items1 };
      const obj2 = { style: tmp2.channelItemLeft, children: React3(View, { style: items }) };
      items = [tmp2.channelItemUnreadIndicator];
      let num = 0;
      if (flag) {
        num = 1;
      }
      items[1] = { opacity: num };
      items1 = [React3(View, obj2), ,];
      const obj3 = { style: tmp2.channelItemAvatar, children: tmp5Result };
      if (null != avatar2) {
        const obj4 = { sources: items2, size: native.AvatarSizes.LARGE_48 };
        items2 = [avatar1, avatar2];
        const FacepileGroupDMAvatar = GroupDMAvatar.FacepileGroupDMAvatar;
        tmp5Result = React3(FacepileGroupDMAvatar, obj4);
        tmp6 = require;
      } else {
        tmp6 = require;
        obj5 = { status, source: avatar1, cutout: obj5, size: native.AvatarSizes.LARGE_48 };
        const Avatar = native.Avatar;
        tmp5Result = React3(Avatar, obj5);
      }
      items1[1] = React3(View, obj3);
      const obj7 = { style: tmp2.channelItemTop, children: items3 };
      items3 = [,];
      const obj6 = { style: tmp2.channelItemContent, children: items4 };
      const obj8 = {
        animated: true,
        style: flag ? animatedStyles.textNormal : animatedStyles.textMuted,
        variant: "redesign/channel-title/semibold",
        children: title,
      };
      items3[0] = React3(tmp6(4886).Text, obj8);
      const obj9 = { animated: true, style: animatedStyles.textMuted, variant: "text-xs/medium", children: timestamp };
      items3[1] = React3(tmp6(4886).Text, obj9);
      items4 = [hasOwnProperty(View, obj7)];
      let tmp5Result2 = null;
      if (null != preview) {
        const obj10 = {
          animated: true,
          style: flag ? animatedStyles.textNormal : animatedStyles.textMuted,
          variant: "redesign/message-preview/medium",
          lineClamp: 1,
          children: preview,
        };
        tmp5Result2 = React3(tmp6(4886).Text, obj10);
      }
      items4[1] = tmp5Result2;
      items1[2] = hasOwnProperty(View, obj6);
      return hasOwnProperty(View, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceChannelRowItem.tsx",
);

export default tmp5;
