// discord_app/modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import ManaTypeConsolidationExperiment from "../../../../design/ManaTypeConsolidationExperiment.tsx";
import utils_ChannelUtils from "../../../../../utils/native/ChannelUtils.tsx";
import UsernameWithEffectsDefault from "../../../../display_name_styles/native/UsernameWithEffects.tsx";
import GroupDMAvatarDefault from "../../../../group_dm/native/GroupDMAvatar.tsx";
import _modDef12846 from "../../../../../../_runtime/metro/12846__.js";
import GuildActionSheetMemberCountDefault from "../../../../guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(5090);
let closure_11 = createStyles.createStyles(() => {
  const obj = {
    wrapper: { flex: 1, alignItems: "center", flexShrink: 1, flexDirection: "row", paddingEnd: 8 },
    channelContent: { flex: 1, flexShrink: 1, justifyContent: "center", marginTop: 4 },
    nameWithArrow: { flexDirection: "row", alignItems: "center", flexShrink: 1 },
    channelNameContainer: { flexShrink: 1 },
    channelName: { flexShrink: 1 },
    arrowIcon: {
      tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
      flexShrink: 0,
      flexGrow: 0,
      marginTop: 2,
      marginLeft: 2,
    },
    channelIcon: { marginRight: 12, flexShrink: 0 },
    channelIconWrapper: { width: 32, height: 32, justifyContent: "center", alignItems: "center" },
    guildChannelIcon: null,
    subTitleContainer: null,
    parentChannelName: null,
  };
  const obj2 = {
    tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
    flexShrink: 0,
    flexGrow: 0,
    marginTop: 2,
    marginLeft: 2,
  };
  obj.guildChannelIcon = { tintColor: nativeDefault.colors.TEXT_STRONG };
  obj.subTitleContainer = { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 };
  obj.parentChannelName = { lineHeight: 20, flexShrink: 1 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TitleWrapper(arg0) {
      const cResult = c.c(14);
      ({ children, onPress, headerAccessibilityLabel, titleContentHeight } = arg0);
      let wrapper = closure_11();
      [tmp5, require] = noop.useState(undefined);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c(nativeEvent) {
          require({ borderless: true, radius: nativeEvent.nativeEvent.layout.width });
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (null == titleContentHeight) {
        if (null == onPress) {
          if (cResult[3] === children) {
          }
          const obj2 = { style: wrapper.wrapper, accessibilityRole: "header", children };
          const tmp18 = closure_1_8(View, obj2);
          cResult[3] = children;
          wrapper = wrapper.wrapper;
          cResult[4] = wrapper;
          cResult[5] = tmp18;
        } else {
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            let tmp11;
            if (tmpResult.isAndroid()) {
              tmp11 = first;
            }
            cResult[6] = tmp11;
            let tmp10 = tmp11;
            tmpResult = PlatformUtils;
          } else {
            tmp10 = cResult[6];
          }
          if (cResult[7] === tmp5) {
            if (cResult[8] === children) {
              if (cResult[9] === headerAccessibilityLabel) {
                if (cResult[10] === onPress) {
                  if (cResult[11] === wrapper.wrapper) {
                    if (cResult[12] === undefined) {
                      let tmp12 = cResult[13];
                    }
                    return tmp12;
                  }
                }
              }
            }
          }
          const obj3 = {
            onLayout: tmp10,
            onPress,
            androidRippleConfig: tmp5,
            accessibilityRole: "header",
            accessibilityLabel: headerAccessibilityLabel,
            hitSlop: undefined,
            style: wrapper.wrapper,
            children,
          };
          const tmp14 = closure_1_8(Pressables.PressableOpacity, obj3);
          cResult[7] = tmp5;
          cResult[8] = children;
          cResult[9] = headerAccessibilityLabel;
          cResult[10] = onPress;
          cResult[11] = wrapper.wrapper;
          cResult[12] = undefined;
          cResult[13] = tmp14;
          tmp12 = tmp14;
        }
      } else {
        const _Math = Math;
        const bound = Math.max(0, (64 - titleContentHeight) / 2);
        if (cResult[1] !== bound) {
          const rect = { top: bound, bottom: bound };
          cResult[1] = bound;
          cResult[2] = rect;
        }
      }
      const tmp4 = _slicedToArray(noop.useState(undefined), 2);
    }
  : function TitleWrapper(headerAccessibilityLabel) {
      ({ children, onPress, titleContentHeight } = headerAccessibilityLabel);
      c1 = undefined;
      const tmp = closure_11();
      [tmp3, c1] = noop.useState(undefined);
      [][0] = titleContentHeight;
      const callback = noop.useCallback((nativeEvent) => {
        _undefined({ borderless: true, radius: nativeEvent.nativeEvent.layout.width });
      }, []);
      if (null == onPress) {
        const obj2 = { style: tmp.wrapper, accessibilityRole: "header", children };
        let tmp6Result = closure_1_8(View, obj2);
      } else {
        let tmp9;
        if (obj.isAndroid()) {
          tmp9 = callback;
        }
        const obj3 = {
          onLayout: tmp9,
          onPress,
          androidRippleConfig: tmp3,
          accessibilityRole: "header",
          accessibilityLabel: headerAccessibilityLabel.headerAccessibilityLabel,
          hitSlop: tmp5,
          style: tmp.wrapper,
          children,
        };
        tmp6Result = closure_1_8(Pressables.PressableOpacity, obj3);
        obj = PlatformUtils;
      }
      return tmp6Result;
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelTitle(arg0) {
      const cResult = c.c(22);
      ({ title, accessibleTitle, subtitle, disableArrow, userId, guildId: channelNameContainer, icon } = arg0);
      const tmp5 = closure_11();
      let tmp6 = null;
      if (null != icon) {
        tmp6 = icon;
      }
      if (cResult[0] === accessibleTitle) {
        if (cResult[1] === channelNameContainer) {
          if (cResult[2] === tmp5.channelName) {
            if (cResult[3] === tmp5.channelNameContainer) {
              if (cResult[4] === title) {
                if (cResult[5] === userId) {
                  if (cResult[7] === tmp4) {
                    if (cResult[8] === tmp5.arrowIcon) {
                      let tmp12 = cResult[9];
                    }
                    if (cResult[10] === tmp5.nameWithArrow) {
                      if (cResult[11] === tmp6) {
                        if (cResult[12] === tmp7) {
                          if (cResult[13] === tmp12) {
                            let tmp16 = cResult[14];
                          }
                          if (cResult[15] === tmp5.subTitleContainer) {
                            if (cResult[16] === subtitle) {
                              let tmp20 = cResult[17];
                            }
                            if (cResult[18] === tmp5.channelContent) {
                              if (cResult[19] === tmp16) {
                                if (cResult[20] === tmp20) {
                                  let tmp24 = cResult[21];
                                }
                                return tmp24;
                              }
                            }
                            const obj2 = { style: tmp5.channelContent, children: null };
                            const items = [tmp16, tmp20];
                            obj2.children = items;
                            const tmp27 = options(View, obj2);
                            cResult[18] = tmp5.channelContent;
                            cResult[19] = tmp16;
                            cResult[20] = tmp20;
                            cResult[21] = tmp27;
                            tmp24 = tmp27;
                          }
                          let tmp21 = null != subtitle;
                          if (tmp21) {
                            const obj4 = { style: tmp5.subTitleContainer, children: subtitle };
                            tmp21 = closure_1_8(View, obj4);
                          }
                          cResult[15] = tmp5.subTitleContainer;
                          cResult[16] = subtitle;
                          cResult[17] = tmp21;
                          tmp20 = tmp21;
                        }
                      }
                    }
                    const obj5 = { style: tmp5.nameWithArrow, children: null };
                    const items1 = [tmp6, tmp7, tmp12];
                    obj5.children = items1;
                    const tmp19 = options(View, obj5);
                    cResult[10] = tmp5.nameWithArrow;
                    cResult[11] = tmp6;
                    cResult[12] = tmp7;
                    cResult[13] = tmp12;
                    cResult[14] = tmp19;
                    tmp16 = tmp19;
                  }
                  let tmp13 = !tmp4;
                  if (!tmp4) {
                    const obj6 = {
                      source: _modDef12846,
                      size: native.Icon.Sizes.REFRESH_SMALL_16,
                      style: tmp5.arrowIcon,
                    };
                    tmp13 = closure_1_8(native.Icon, obj6);
                  }
                  cResult[7] = tmp4;
                  cResult[8] = tmp5.arrowIcon;
                  cResult[9] = tmp13;
                  tmp12 = tmp13;
                }
              }
            }
          }
        }
      }
      if (null != userId) {
        const obj7 = {
          userId,
          guildId: channelNameContainer,
          userName: title,
          variant: "redesign/heading-18/semibold",
          defaultColor: "mobile-text-heading-primary",
          lineClamp: 1,
          style: null,
          containerStyle: null,
          accessibilityLabel: null,
          accessibilityRole: "header",
          maxFontSizeMultiplier: 2,
        };
        ({ channelName: obj3.style, channelNameContainer: obj3.containerStyle } = tmp5);
        obj7.accessibilityLabel = accessibleTitle;
        let tmp9 = closure_1_8(UsernameWithEffectsDefault, obj7);
      } else {
        const obj13 = {
          variant: "redesign/heading-18/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          style: tmp5.channelName,
          accessibilityLabel: accessibleTitle,
          accessibilityRole: "header",
          maxFontSizeMultiplier: 2,
          children: title,
        };
        tmp9 = closure_1_8(Text_Text.Text, obj13);
      }
      cResult[0] = accessibleTitle;
      cResult[1] = channelNameContainer;
      ({ channelName: tmp3[2], channelNameContainer } = tmp5);
      cResult[3] = channelNameContainer;
      cResult[4] = title;
      cResult[5] = userId;
      cResult[6] = tmp9;
    }
  : function ChannelTitle(guildId) {
      ({ title, accessibleTitle, subtitle, disableArrow } = guildId);
      if (disableArrow === undefined) {
        disableArrow = false;
      }
      ({ userId, icon } = guildId);
      const tmp = closure_11();
      const obj = { style: tmp.channelContent, children: null };
      const obj2 = { style: tmp.nameWithArrow, children: null };
      let tmp4 = null;
      if (null != icon) {
        tmp4 = icon;
      }
      const items = [tmp4, ,];
      if (null != userId) {
        const obj3 = {
          userId,
          guildId: guildId.guildId,
          userName: title,
          variant: "redesign/heading-18/semibold",
          defaultColor: "mobile-text-heading-primary",
          lineClamp: 1,
          style: null,
          containerStyle: null,
          accessibilityLabel: null,
          accessibilityRole: "header",
          maxFontSizeMultiplier: 2,
        };
        ({ channelName: obj4.style, channelNameContainer: obj4.containerStyle } = tmp);
        obj3.accessibilityLabel = accessibleTitle;
        let tmp8 = closure_1_8(UsernameWithEffectsDefault, obj3);
        let tmp5 = closure_1_8;
      } else {
        tmp5 = closure_1_8;
        const obj5 = {
          variant: "redesign/heading-18/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          style: tmp.channelName,
          accessibilityLabel: accessibleTitle,
          accessibilityRole: "header",
          maxFontSizeMultiplier: 2,
          children: title,
        };
        tmp8 = closure_1_8(Text_Text.Text, obj5);
      }
      items[1] = tmp8;
      let tmp5Result = !disableArrow;
      if (!disableArrow) {
        const obj6 = { source: _modDef12846, size: native.Icon.Sizes.REFRESH_SMALL_16, style: tmp.arrowIcon };
        tmp5Result = tmp5(native.Icon, obj6);
      }
      items[2] = tmp5Result;
      obj2.children = items;
      const items1 = [options(View, obj2)];
      let tmp5Result2 = null != subtitle;
      if (tmp5Result2) {
        const obj11 = { style: tmp.subTitleContainer, children: subtitle };
        tmp5Result2 = tmp5(View, obj11);
      }
      items1[1] = tmp5Result2;
      obj.children = items1;
      return options(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GroupDMIcon(channel) {
      const cResult = c.c(2);
      channel = channel.channel;
      if (cResult[0] !== channel) {
        const obj2 = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
        const tmp8 = closure_1_8(GroupDMAvatarDefault, obj2);
        cResult[0] = channel;
        cResult[1] = tmp8;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function GroupDMIcon(channel) {
      const obj = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel: channel.channel };
      return closure_1_8(GroupDMAvatarDefault, obj);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserAvatar(status) {
      const cResult = c.c(6);
      ({ user, isMobileOnline, isVROnline } = status);
      const tmp4 = closure_11();
      status = null;
      if (!user.isSystemUser()) {
        status = status.status;
      }
      if (cResult[0] === isMobileOnline) {
        if (cResult[1] === isVROnline) {
          if (cResult[2] === tmp4.channelIcon) {
            if (cResult[3] === status) {
              if (cResult[4] === user) {
                let tmp6 = cResult[5];
              }
              return tmp6;
            }
          }
        }
      }
      const obj2 = {
        user,
        avatarDecoration: user.avatarDecoration,
        guildId: "Boolean",
        size: native.AvatarSizes.REFRESH_MEDIUM_32,
        status,
        isMobileOnline,
        isVROnline,
        style: tmp4.channelIcon,
        autoStatusCutout: false,
      };
      const tmp7 = closure_1_8(native.Avatar, obj2);
      cResult[0] = isMobileOnline;
      cResult[1] = isVROnline;
      cResult[2] = tmp4.channelIcon;
      cResult[3] = status;
      cResult[4] = user;
      cResult[5] = tmp7;
      tmp6 = tmp7;
    }
  : function UserAvatar(user) {
      user = user.user;
      ({ status, isMobileOnline, isVROnline } = user);
      const obj = {
        user,
        avatarDecoration: user.avatarDecoration,
        guildId: "Boolean",
        size: native.AvatarSizes.REFRESH_MEDIUM_32,
        status: false,
        isMobileOnline: null,
        isVROnline: true,
        style: null,
        autoStatusCutout: false,
      };
      let tmp3 = null;
      if (!user.isSystemUser()) {
        tmp3 = status;
      }
      obj.status = tmp3;
      obj.isMobileOnline = isMobileOnline;
      obj.isVROnline = isVROnline;
      obj.style = closure_11().channelIcon;
      return closure_1_8(native.Avatar, obj);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelIconRaw(arg0) {
      const cResult = c.c(5);
      ({ icon, IconComponent } = arg0);
      const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
      const tmp5 = closure_11();
      if (cResult[0] === IconComponent) {
        if (cResult[1] === icon) {
          if (cResult[2] === token) {
            if (cResult[3] === tmp5) {
              return cResult[4];
            }
          }
        }
      }
      if (null != IconComponent) {
        const obj3 = { size: token, color: "icon-strong", style: { marginEnd: 4 } };
        let tmp7 = closure_1_8(IconComponent, obj3);
      } else {
        const obj4 = { size: native.Icon.Sizes.SMALL_20, source: icon, color: tmp5.guildChannelIcon.tintColor };
        tmp7 = closure_1_8(native.Icon, obj4);
      }
      cResult[0] = IconComponent;
      cResult[1] = icon;
      cResult[2] = token;
      cResult[3] = tmp5;
      cResult[4] = tmp7;
    }
  : function ChannelIconRaw(IconComponent) {
      IconComponent = IconComponent.IconComponent;
      const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
      if (null != IconComponent) {
        const obj2 = { size: token, color: "icon-strong", style: { marginEnd: 4 } };
        let tmp6 = closure_1_8(IconComponent, obj2);
      } else {
        const obj3 = {
          size: native.Icon.Sizes.SMALL_20,
          source: IconComponent.icon,
          color: tmp4.guildChannelIcon.tintColor,
        };
        tmp6 = closure_1_8(native.Icon, obj3);
      }
      return tmp6;
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MemberCountText(arg0) {
      const cResult = c.c(11);
      ({ presenceCount, memberCount, withSeparator, leadingAccessoryWidth } = arg0);
      let str = "online";
      if (0 === presenceCount) {
        str = "online";
        if (null !== memberCount) {
          str = "total";
        }
      }
      let str2 = "text-sm/normal";
      if (tmpResult.useManaTypeConsolidationExperiment("ChannelHeaderMemberCount")) {
        str2 = "text-xs/normal";
      }
      if ("online" === str) {
        memberCount = presenceCount;
      }
      if (cResult[0] === leadingAccessoryWidth) {
        if (cResult[1] === memberCount) {
          if (cResult[2] === str2) {
            if (cResult[3] === str) {
              let tmp5 = cResult[4];
            }
            if (cResult[5] === str2) {
              if (cResult[6] === withSeparator) {
                let tmp7 = cResult[7];
              }
              if (cResult[8] === tmp5) {
                if (cResult[9] === tmp7) {
                  let tmp10 = cResult[10];
                }
                return tmp10;
              }
              const obj2 = { children: null };
              const items = [tmp5, tmp7];
              obj2.children = items;
              const tmp13 = options(collapsed, obj2);
              cResult[8] = tmp5;
              cResult[9] = tmp7;
              cResult[10] = tmp13;
              tmp10 = tmp13;
            }
            let tmp8 = null;
            if (withSeparator) {
              const obj3 = { variant: str2, color: "text-subtle", children: "\u2022" };
              tmp8 = closure_1_8(Text_Text.Text, obj3);
            }
            cResult[5] = str2;
            cResult[6] = withSeparator;
            cResult[7] = tmp8;
            tmp7 = tmp8;
          }
        }
      }
      const tmp6 = closure_1_8(GuildActionSheetMemberCountDefault, {
        type: str,
        count: memberCount,
        color: "text-subtle",
        dotContainerWidth: leadingAccessoryWidth,
        textVariant: str2,
      });
      cResult[0] = leadingAccessoryWidth;
      cResult[1] = memberCount;
      cResult[2] = str2;
      cResult[3] = str;
      cResult[4] = tmp6;
      tmp5 = tmp6;
      tmpResult = ManaTypeConsolidationExperiment;
    }
  : function MemberCountText(arg0) {
      ({ presenceCount, memberCount } = arg0);
      let str = "online";
      ({ withSeparator, leadingAccessoryWidth } = arg0);
      if (0 === presenceCount) {
        str = "online";
        if (null !== memberCount) {
          str = "total";
        }
      }
      let str2 = "text-sm/normal";
      if (obj.useManaTypeConsolidationExperiment("ChannelHeaderMemberCount")) {
        str2 = "text-xs/normal";
      }
      const obj2 = { type: str, count: null, color: "text-subtle", dotContainerWidth: null, textVariant: null };
      obj = ManaTypeConsolidationExperiment;
      if ("online" === str) {
        memberCount = presenceCount;
      }
      obj2.count = memberCount;
      obj2.dotContainerWidth = leadingAccessoryWidth;
      obj2.textVariant = str2;
      const children = [closure_1_8(GuildActionSheetMemberCountDefault, obj2)];
      let tmp6Result = null;
      if (withSeparator) {
        const obj3 = { variant: str2, color: "text-subtle", children: "\u2022" };
        tmp6Result = closure_1_8(Text_Text.Text, obj3);
      }
      children[1] = tmp6Result;
      return options(collapsed, { children });
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ParentChannelSubTitle(channel) {
      const cResult = c.c(8);
      channel = channel.channel;
      const tmp4 = closure_11();
      if (cResult[0] !== channel) {
        const intl = util.intl;
        const obj2 = { channelName: useChannelName.computeChannelName(channel, UserStore, RelationshipStore) };
        const formatToPlainStringResult = intl.formatToPlainString(util.t.BjYvHO, obj2);
        cResult[0] = channel;
        cResult[1] = formatToPlainStringResult;
        let tmp5 = formatToPlainStringResult;
        const tmpResult = useChannelName;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== channel) {
        const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
        cResult[2] = channel;
        cResult[3] = channelName;
        let tmp9 = channelName;
        const tmpResult2 = useChannelName;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp4.parentChannelName) {
        if (cResult[5] === tmp5) {
          if (cResult[6] === tmp9) {
            let tmp13 = cResult[7];
          }
          return tmp13;
        }
      }
      const tmp14 = closure_1_8(Text_Text.Text, {
        lineClamp: 1,
        accessibilityLabel: tmp5,
        maxFontSizeMultiplier: 2,
        variant: "text-sm/medium",
        color: "text-subtle",
        style: tmp4.parentChannelName,
        children: tmp9,
      });
      cResult[4] = tmp4.parentChannelName;
      cResult[5] = tmp5;
      cResult[6] = tmp9;
      cResult[7] = tmp14;
      tmp13 = tmp14;
    }
  : function ParentChannelSubTitle(channel) {
      channel = channel.channel;
      const obj = {
        lineClamp: 1,
        accessibilityLabel: null,
        maxFontSizeMultiplier: 2,
        variant: "text-sm/medium",
        color: "text-subtle",
        style: null,
        children: null,
      };
      const intl = util.intl;
      const obj2 = { channelName: null };
      const tmp = closure_11();
      obj2.channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      obj.accessibilityLabel = intl.formatToPlainString(util.t.BjYvHO, obj2);
      obj.style = tmp.parentChannelName;
      obj.children = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      return closure_1_8(Text_Text.Text, obj);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmptyIcon() {
      const cResult = c.c(2);
      const tmp2 = closure_11();
      if (cResult[0] !== tmp2.channelIconWrapper) {
        const obj2 = { style: tmp2.channelIconWrapper };
        const tmp6 = closure_1_8(View, obj2);
        cResult[0] = tmp2.channelIconWrapper;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function EmptyIcon() {
      return closure_1_8(View, { style: closure_11().channelIconWrapper });
    };
function renderChannelIconRaw(icon, IconComponent) {
  return closure_1_8(closure_16, { icon, IconComponent });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx");

export const renderTitleWrapper = function renderTitleWrapper(tmp11Result, callback, combined, titleContentHeight) {
  return closure_1_8(closure_12, {
    onPress: callback,
    headerAccessibilityLabel: combined,
    titleContentHeight,
    children: tmp11Result,
  });
};
export const renderChannelTitle = function renderChannelTitle(visibleChannelName, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const disableArrow = obj.disableArrow;
  let tmp = undefined !== disableArrow;
  ({ accessibleTitle, subtitle } = obj);
  if (tmp) {
    tmp = disableArrow;
  }
  return closure_1_8(closure_13, {
    title: visibleChannelName,
    accessibleTitle,
    subtitle,
    disableArrow: tmp,
    userId: obj.userId,
    guildId: obj.guildId,
    icon: obj.icon,
  });
};
export const renderGroupDMIcon = function renderGroupDMIcon(stateFromStores) {
  return closure_1_8(closure_14, { channel: stateFromStores });
};
export const renderUserAvatar = function renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline) {
  return closure_1_8(closure_15, { user: stateFromStores1, status, isMobileOnline, isVROnline });
};
export { renderChannelIconRaw };
export const renderChannelIcon = function renderChannelIcon(stateFromStores, stateFromStores3) {
  const channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(stateFromStores, stateFromStores3);
  let rulesChannelId;
  if (stateFromStores3 != null) {
    rulesChannelId = stateFromStores3.rulesChannelId;
  }
  const obj3 = { isRulesChannel: rulesChannelId === stateFromStores.id };
  return closure_1_8(closure_16, {
    icon: channelIconWithGuild,
    IconComponent: utils_ChannelUtils.getChannelIconComponent(stateFromStores, {
      isRulesChannel: rulesChannelId === stateFromStores.id,
    }),
  });
};
export const renderMemberCountText = function renderMemberCountText(online, total) {
  if (flag === undefined) {
    flag = false;
  }
  if (null != online) {
    const obj = { presenceCount: online, memberCount: total, withSeparator: flag, leadingAccessoryWidth };
    let tmp = closure_1_8(closure_17, obj);
  } else {
    tmp = null;
  }
  return tmp;
};
export const renderParentChannelSubTitle = function renderParentChannelSubTitle(parentChannel) {
  return closure_1_8(closure_18, { channel: parentChannel });
};
export const renderEmptyIcon = function renderEmptyIcon() {
  return closure_1_8(closure_19, {});
};
