// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceChannelRowItem.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native2 from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import GroupDMAvatar from "../../../../group_dm/native/GroupDMAvatar.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const StatusTypes = fn(1085).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  channelItemContainer: {
    flexDirection: "row",
    gap: nativeDefault.space.PX_4,
    borderRadius: nativeDefault.radii.sm,
    paddingVertical: nativeDefault.space.PX_8,
    paddingRight: nativeDefault.space.PX_16,
    paddingLeft: nativeDefault.space.PX_8,
  },
  channelItemLeft: { alignItems: "center", justifyContent: "center" },
  channelItemUnreadIndicator: null,
  channelItemAvatar: null,
  channelItemContent: null,
  channelItemTop: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  height: 8,
  width: 8,
  borderRadius: nativeDefault.radii.round,
  margin: nativeDefault.space.PX_8,
};
obj2.channelItemUnreadIndicator = size;
let obj3 = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.sm,
  paddingVertical: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_8,
};
obj2.channelItemAvatar = { marginRight: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center" };
obj2.channelItemContent = { flexDirection: "column", flex: 1, justifyContent: "center" };
let obj4 = { marginRight: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center" };
obj2.channelItemTop = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  justifyContent: "space-between",
  alignItems: "center",
};
let closure_6 = createStyles.createStyles(obj2);
let obj6 = { direction: fn(1200).CutoutDirection.BOTTOM_RIGHT, radius: null, imageType: null, inset: -4 };
const native = fn(1200);
let num = native.getStatusSize(fn(1200).AvatarSizes.LARGE_48);
if (num == null) {
  num = 0;
}
obj6.radius = num / 2 + 4;
obj6.imageType = fn(1200).CutoutType.CIRCULAR;
const ReactCompilerGating = fn(558);
let obj5 = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  justifyContent: "space-between",
  alignItems: "center",
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceChannelRowItem.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelRowItem(arg0) {
      const cResult = c.c(39);
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
        let tmp7 = obj2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === tmp6.channelItemUnreadIndicator) {
        if (cResult[3] === tmp7) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] === tmp6.channelItemLeft) {
          if (cResult[6] === tmp8) {
            let tmp10 = cResult[7];
          }
          if (cResult[8] === avatar1) {
            if (cResult[9] === avatar2) {
              if (cResult[10] === status) {
                if (cResult[12] === tmp6.channelItemAvatar) {
                  if (cResult[13] === tmp14) {
                    let tmp21 = cResult[14];
                  }
                  const tmp25 = tmp5 ? animatedStyles.textNormal : animatedStyles.textMuted;
                  if (cResult[15] === tmp25) {
                    if (cResult[16] === title) {
                      let tmp26 = cResult[17];
                    }
                    if (cResult[18] === animatedStyles.textMuted) {
                      if (cResult[19] === timestamp) {
                        let tmp29 = cResult[20];
                      }
                      if (cResult[21] === tmp6.channelItemTop) {
                        if (cResult[22] === tmp26) {
                          if (cResult[23] === tmp29) {
                            let tmp32 = cResult[24];
                          }
                          if (cResult[25] === animatedStyles.textMuted) {
                            if (cResult[26] === animatedStyles.textNormal) {
                              if (cResult[27] === tmp5) {
                                if (cResult[28] === preview) {
                                  let tmp36 = cResult[29];
                                }
                                if (cResult[30] === tmp6.channelItemContent) {
                                  if (cResult[31] === tmp32) {
                                    if (cResult[32] === tmp36) {
                                      let tmp40 = cResult[33];
                                    }
                                    if (cResult[34] === tmp6.channelItemContainer) {
                                      if (cResult[35] === tmp40) {
                                        if (cResult[36] === tmp10) {
                                          if (cResult[37] === tmp21) {
                                            let tmp44 = cResult[38];
                                          }
                                          return tmp44;
                                        }
                                      }
                                    }
                                    const obj3 = { style: tmp6.channelItemContainer, children: null };
                                    const items = [tmp10, tmp21, tmp40];
                                    obj3.children = items;
                                    const tmp47 = hasOwnProperty(View, obj3);
                                    cResult[34] = tmp6.channelItemContainer;
                                    cResult[35] = tmp40;
                                    cResult[36] = tmp10;
                                    cResult[37] = tmp21;
                                    cResult[38] = tmp47;
                                    tmp44 = tmp47;
                                  }
                                }
                                const obj4 = { style: tmp6.channelItemContent, children: null };
                                const items1 = [tmp32, tmp36];
                                obj4.children = items1;
                                const tmp43 = hasOwnProperty(View, obj4);
                                cResult[30] = tmp6.channelItemContent;
                                cResult[31] = tmp32;
                                cResult[32] = tmp36;
                                cResult[33] = tmp43;
                                tmp40 = tmp43;
                              }
                            }
                          }
                          if (null == preview) {
                            cResult[25] = animatedStyles.textMuted;
                            cResult[26] = animatedStyles.textNormal;
                            cResult[27] = tmp5;
                            cResult[28] = preview;
                            cResult[29] = null;
                            tmp36 = null;
                          } else {
                            const obj5 = {
                              animated: true,
                              style: tmp5 ? animatedStyles.textNormal : animatedStyles.textMuted,
                              variant: "redesign/message-preview/medium",
                              lineClamp: 1,
                              children: preview,
                            };
                            React4(Text_Text.Text, obj5);
                          }
                        }
                      }
                      obj6 = { style: tmp6.channelItemTop, children: null };
                      const items2 = [tmp26, tmp29];
                      obj6.children = items2;
                      const tmp35 = hasOwnProperty(View, obj6);
                      cResult[21] = tmp6.channelItemTop;
                      cResult[22] = tmp26;
                      cResult[23] = tmp29;
                      cResult[24] = tmp35;
                      tmp32 = tmp35;
                    }
                    const obj7 = {
                      animated: true,
                      style: animatedStyles.textMuted,
                      variant: "text-xs/medium",
                      children: timestamp,
                    };
                    const tmp31 = React4(Text_Text.Text, obj7);
                    cResult[18] = animatedStyles.textMuted;
                    cResult[19] = timestamp;
                    cResult[20] = tmp31;
                    tmp29 = tmp31;
                  }
                  const obj8 = {
                    animated: true,
                    style: tmp25,
                    variant: "redesign/channel-title/semibold",
                    children: title,
                  };
                  const tmp28 = React4(Text_Text.Text, obj8);
                  cResult[15] = tmp25;
                  cResult[16] = title;
                  cResult[17] = tmp28;
                  tmp26 = tmp28;
                }
                const obj9 = { style: tmp6.channelItemAvatar, children: cResult[11] };
                const tmp24 = React4(View, obj9);
                cResult[12] = tmp6.channelItemAvatar;
                cResult[13] = cResult[11];
                cResult[14] = tmp24;
                tmp21 = tmp24;
              }
            }
          }
          if (null != avatar2) {
            const obj10 = { sources: null, size: null };
            const items3 = [avatar1, avatar2];
            obj10.sources = items3;
            obj10.size = native2.AvatarSizes.LARGE_48;
            let tmp18 = React4(GroupDMAvatar.FacepileGroupDMAvatar, obj10);
          } else {
            const obj11 = { status, source: avatar1, cutout: obj6, size: native2.AvatarSizes.LARGE_48 };
            tmp18 = React4(native2.Avatar, obj11);
          }
          cResult[8] = avatar1;
          cResult[9] = avatar2;
          cResult[10] = status;
          cResult[11] = tmp18;
        }
        const obj12 = { style: tmp6.channelItemLeft, children: tmp8 };
        const tmp13 = React4(View, obj12);
        cResult[5] = tmp6.channelItemLeft;
        cResult[6] = tmp8;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
      const obj13 = { style: null };
      const items4 = [tmp6.channelItemUnreadIndicator, tmp7];
      obj13.style = items4;
      const tmp9 = React4(View, obj13);
      cResult[2] = tmp6.channelItemUnreadIndicator;
      cResult[3] = tmp7;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : function ChannelRowItem(isUnread) {
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
      const obj = { style: tmp2.channelItemContainer, children: null };
      const obj2 = { style: tmp2.channelItemLeft, children: null };
      const items = [tmp2.channelItemUnreadIndicator];
      let num = 0;
      if (flag) {
        num = 1;
      }
      items[1] = { opacity: num };
      obj2.children = React4(View, { style: items });
      const items1 = [React4(View, obj2), ,];
      const obj3 = { style: tmp2.channelItemAvatar, children: null };
      if (null != avatar2) {
        const obj4 = { sources: null, size: null };
        const items2 = [avatar1, avatar2];
        obj4.sources = items2;
        obj4.size = native2.AvatarSizes.LARGE_48;
        let tmp5Result = React4(GroupDMAvatar.FacepileGroupDMAvatar, obj4);
        let tmp6 = require;
      } else {
        tmp6 = require;
        const obj5 = { status, source: avatar1, cutout: obj6, size: native2.AvatarSizes.LARGE_48 };
        tmp5Result = React4(native2.Avatar, obj5);
      }
      obj3.children = tmp5Result;
      items1[1] = React4(View, obj3);
      obj6 = { style: tmp2.channelItemContent, children: null };
      const obj7 = { style: tmp2.channelItemTop, children: null };
      const items3 = [
        React4(tmp6(5088).Text, {
          animated: true,
          style: flag ? animatedStyles.textNormal : animatedStyles.textMuted,
          variant: "redesign/channel-title/semibold",
          children: title,
        }),
        React4(tmp6(5088).Text, {
          animated: true,
          style: animatedStyles.textMuted,
          variant: "text-xs/medium",
          children: timestamp,
        }),
      ];
      obj7.children = items3;
      const items4 = [hasOwnProperty(View, obj7)];
      if (null == preview) {
        items4[1] = null;
        obj6.children = items4;
        items1[2] = hasOwnProperty(View, obj6);
        obj.children = items1;
        return hasOwnProperty(View, obj);
      } else {
        animatedStyles = {
          animated: true,
          style: null,
          variant: "redesign/message-preview/medium",
          lineClamp: 1,
          children: null,
        };
        animatedStyles.style = flag ? animatedStyles.textNormal : animatedStyles.textMuted;
        animatedStyles.children = preview;
        React4(tmp6(5088).Text, animatedStyles);
        const tmp12 = flag ? animatedStyles.textNormal : animatedStyles.textMuted;
      }
      const obj8 = {
        animated: true,
        style: flag ? animatedStyles.textNormal : animatedStyles.textMuted,
        variant: "redesign/channel-title/semibold",
        children: title,
      };
      const obj9 = { animated: true, style: animatedStyles.textMuted, variant: "text-xs/medium", children: timestamp };
    };
