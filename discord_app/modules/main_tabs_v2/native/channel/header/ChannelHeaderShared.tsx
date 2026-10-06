// discord_app/modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../../../utils/native/ChannelUtils.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import ManaTypeConsolidationExperiment from "../../../../design/ManaTypeConsolidationExperiment.tsx";
import UsernameWithEffectsDefault from "../../../../display_name_styles/native/UsernameWithEffects.tsx";
import GroupDMAvatarDefault from "../../../../group_dm/native/GroupDMAvatar.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/13131_AssetRegistry.js";
import GuildActionSheetMemberCountDefault from "../../../../guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let channel;

let c10;
let c9;
let metroImportAll;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
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
    guildChannelIcon: { tintColor: nativeDefault.colors.TEXT_STRONG },
    subTitleContainer: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 },
    parentChannelName: { lineHeight: 20, flexShrink: 1 },
  };
  ({
    tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
    flexShrink: 0,
    flexGrow: 0,
    marginTop: 2,
    marginLeft: 2,
  });
  ({ tintColor: nativeDefault.colors.TEXT_STRONG });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let closure_129_0;
      let first;
      let headerAccessibilityLabel;
      let onPress;
      let titleContentHeight;
      let tmp13;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(14);
      ({ children, onPress, headerAccessibilityLabel, titleContentHeight } = arg0);
      const tmp4 = closure_11();
      [tmp6, closure_129_0] = react.useState(undefined);
      _slicedToArray(react.useState(undefined), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c(nativeEvent) {
          const obj = { borderless: true, radius: nativeEvent.nativeEvent.layout.width };
          closure_1_0(obj);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (null != titleContentHeight) {
        const _Math = Math;
        const bound = Math.max(0, (64 - titleContentHeight) / 2);
        if (cResult[1] !== bound) {
          const rect = { top: bound, bottom: bound };
          cResult[1] = bound;
          cResult[2] = rect;
        }
      }
      if (null == onPress) {
        if (cResult[3] === children) {
          let tmp16;
          if (cResult[4] === tmp4.wrapper) {
            tmp16 = cResult[5];
          }
          tmp13 = tmp16;
        }
        const obj2 = { style: tmp4.wrapper, accessibilityRole: "header", children };
        const tmp19 = metroImportAll(View, obj2);
        cResult[3] = children;
        cResult[4] = tmp4.wrapper;
        cResult[5] = tmp19;
        tmp16 = tmp19;
      } else {
        let tmp11;
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          let tmp12;
          const tmpResult = PlatformUtils;
          if (tmpResult.isAndroid()) {
            tmp12 = first;
          }
          cResult[6] = tmp12;
          tmp11 = tmp12;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          if (cResult[8] === children) {
            if (cResult[9] === headerAccessibilityLabel) {
              if (cResult[10] === onPress) {
                if (cResult[11] === tmp4.wrapper) {
                  if (cResult[12] === tmp8) {
                    tmp13 = cResult[13];
                  }
                }
              }
            }
          }
        }
        const obj3 = {
          onLayout: tmp11,
          onPress,
          androidRippleConfig: tmp6,
          accessibilityRole: "header",
          accessibilityLabel: headerAccessibilityLabel,
          hitSlop: tmp8,
          style: tmp4.wrapper,
          children,
        };
        const tmp15 = metroImportAll(Pressables.PressableOpacity, obj3);
        cResult[7] = tmp6;
        cResult[8] = children;
        cResult[9] = headerAccessibilityLabel;
        cResult[10] = onPress;
        cResult[11] = tmp4.wrapper;
        cResult[12] = tmp8;
        cResult[13] = tmp15;
        tmp13 = tmp15;
      }
      return tmp13;
    }
  : (headerAccessibilityLabel) => {
      let c1;
      let children;
      let onPress;
      let titleContentHeight;
      let tmp3;
      let tmp6Result;
      ({ children, onPress, titleContentHeight } = headerAccessibilityLabel);
      c1 = undefined;
      headerAccessibilityLabel = headerAccessibilityLabel.headerAccessibilityLabel;
      const tmp = closure_11();
      [tmp3, c1] = react.useState(undefined);
      [][0] = titleContentHeight;
      _slicedToArray(react.useState(undefined), 2);
      const callback = react.useCallback((nativeEvent) => {
        const obj = { borderless: true, radius: nativeEvent.nativeEvent.layout.width };
        _undefined(obj);
      }, []);
      if (null == onPress) {
        const obj2 = { style: tmp.wrapper, accessibilityRole: "header", children };
        tmp6Result = metroImportAll(View, obj2);
      } else {
        const PressableOpacity = Pressables.PressableOpacity;
        let obj = PlatformUtils;
        let tmp9;
        if (obj.isAndroid()) {
          tmp9 = callback;
        }
        const obj3 = {
          onLayout: tmp9,
          onPress,
          androidRippleConfig: tmp3,
          accessibilityRole: "header",
          accessibilityLabel: headerAccessibilityLabel,
          hitSlop: tmp5,
          style: tmp.wrapper,
          children,
        };
        tmp6Result = metroImportAll(PressableOpacity, obj3);
      }
      return tmp6Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibleTitle;
      let disableArrow;
      let guildId;
      let icon;
      let items;
      let items1;
      let subtitle;
      let title;
      let tmp9;
      let userId;
      const obj = react2;
      const cResult = obj.c(22);
      ({ title, accessibleTitle, subtitle, disableArrow, userId, guildId, icon } = arg0);
      const tmp5 = closure_11();
      let tmp6 = null;
      if (null != icon) {
        tmp6 = icon;
      }
      if (cResult[0] === accessibleTitle) {
        if (cResult[1] === guildId) {
          if (cResult[2] === tmp5.channelName) {
            if (cResult[3] === tmp5.channelNameContainer) {
              if (cResult[4] === title) {
                let tmp7;
                if (cResult[5] === userId) {
                  tmp7 = cResult[6];
                }
                if (cResult[7] === (undefined !== disableArrow && disableArrow)) {
                  let tmp12;
                  if (cResult[8] === tmp5.arrowIcon) {
                    tmp12 = cResult[9];
                  }
                  if (cResult[10] === tmp5.nameWithArrow) {
                    if (cResult[11] === tmp6) {
                      if (cResult[12] === tmp7) {
                        let tmp16;
                        if (cResult[13] === tmp12) {
                          tmp16 = cResult[14];
                        }
                        if (cResult[15] === tmp5.subTitleContainer) {
                          let tmp20;
                          if (cResult[16] === subtitle) {
                            tmp20 = cResult[17];
                          }
                          if (cResult[18] === tmp5.channelContent) {
                            if (cResult[19] === tmp16) {
                              let tmp24;
                              if (cResult[20] === tmp20) {
                                tmp24 = cResult[21];
                              }
                              return tmp24;
                            }
                          }
                          const obj2 = { style: tmp5.channelContent, children: items };
                          items = [tmp16, tmp20];
                          const tmp27 = React4(View, obj2);
                          cResult[18] = tmp5.channelContent;
                          cResult[19] = tmp16;
                          cResult[20] = tmp20;
                          cResult[21] = tmp27;
                          tmp24 = tmp27;
                        }
                        let tmp21 = null != subtitle;
                        if (tmp21) {
                          const obj4 = { style: tmp5.subTitleContainer, children: subtitle };
                          tmp21 = metroImportAll(View, obj4);
                        }
                        cResult[15] = tmp5.subTitleContainer;
                        cResult[16] = subtitle;
                        cResult[17] = tmp21;
                        tmp20 = tmp21;
                      }
                    }
                  }
                  const obj5 = { style: tmp5.nameWithArrow, children: items1 };
                  items1 = [tmp6, tmp7, tmp12];
                  const tmp19 = React4(View, obj5);
                  cResult[10] = tmp5.nameWithArrow;
                  cResult[11] = tmp6;
                  cResult[12] = tmp7;
                  cResult[13] = tmp12;
                  cResult[14] = tmp19;
                  tmp16 = tmp19;
                }
                let tmp13 = !tmp4;
                if (tmp13) {
                  const obj6 = {
                    source: AssetRegistryDefault,
                    size: native.Icon.Sizes.REFRESH_SMALL_16,
                    style: tmp5.arrowIcon,
                  };
                  const Icon = native.Icon;
                  tmp13 = metroImportAll(Icon, obj6);
                }
                cResult[7] = undefined !== disableArrow && disableArrow;
                cResult[8] = tmp5.arrowIcon;
                cResult[9] = tmp13;
                tmp12 = tmp13;
              }
            }
          }
        }
      }
      if (null != userId) {
        const obj7 = {
          userId,
          guildId,
          userName: title,
          variant: "redesign/heading-18/semibold",
          defaultColor: "mobile-text-heading-primary",
          lineClamp: 1,
          style: null,
          containerStyle: null,
          accessibilityLabel: accessibleTitle,
          accessibilityRole: "header",
          maxFontSizeMultiplier: 2,
        };
        ({ channelName: obj3.style, channelNameContainer: obj3.containerStyle } = tmp5);
        tmp9 = metroImportAll(UsernameWithEffectsDefault, obj7);
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
        tmp9 = metroImportAll(Text_Text.Text, obj13);
      }
      cResult[0] = accessibleTitle;
      cResult[1] = guildId;
      cResult[2] = tmp5.channelName;
      cResult[3] = tmp5.channelNameContainer;
      cResult[4] = title;
      cResult[5] = userId;
      cResult[6] = tmp9;
      tmp7 = tmp9;
    }
  : (guildId) => {
      let accessibleTitle;
      let disableArrow;
      let icon;
      let items;
      let items1;
      let subtitle;
      let title;
      let tmp5;
      let tmp8;
      let userId;
      ({ title, accessibleTitle, subtitle, disableArrow } = guildId);
      if (disableArrow === undefined) {
        disableArrow = false;
      }
      ({ userId, icon } = guildId);
      guildId = guildId.guildId;
      const tmp = closure_11();
      let tmp4 = null;
      const obj = { style: tmp.channelContent, children: items1 };
      const obj2 = { style: tmp.nameWithArrow, children: items };
      if (null != icon) {
        tmp4 = icon;
      }
      items = [tmp4, ,];
      if (null != userId) {
        const obj3 = {
          userId,
          guildId,
          userName: title,
          variant: "redesign/heading-18/semibold",
          defaultColor: "mobile-text-heading-primary",
          lineClamp: 1,
          style: null,
          containerStyle: null,
          accessibilityLabel: accessibleTitle,
          accessibilityRole: "header",
          maxFontSizeMultiplier: 2,
        };
        ({ channelName: obj4.style, channelNameContainer: obj4.containerStyle } = tmp);
        tmp8 = metroImportAll(UsernameWithEffectsDefault, obj3);
        tmp5 = metroImportAll;
      } else {
        tmp5 = metroImportAll;
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
        tmp8 = metroImportAll(Text_Text.Text, obj5);
      }
      items[1] = tmp8;
      let tmp5Result = !disableArrow;
      if (tmp5Result) {
        const obj6 = { source: AssetRegistryDefault, size: native.Icon.Sizes.REFRESH_SMALL_16, style: tmp.arrowIcon };
        const Icon = native.Icon;
        tmp5Result = tmp5(Icon, obj6);
      }
      items[2] = tmp5Result;
      items1 = [React4(View, obj2)];
      let tmp5Result2 = null != subtitle;
      if (tmp5Result2) {
        const obj11 = { style: tmp.subTitleContainer, children: subtitle };
        tmp5Result2 = tmp5(View, obj11);
      }
      items1[1] = tmp5Result2;
      return React4(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      channel = channel.channel;
      if (cResult[0] !== channel) {
        const obj2 = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
        const tmp7 = GroupDMAvatarDefault;
        const tmp8 = metroImportAll(tmp7, obj2);
        cResult[0] = channel;
        cResult[1] = tmp8;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (channel) => {
      channel = channel.channel;
      const obj = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
      const tmp = GroupDMAvatarDefault;
      return metroImportAll(tmp, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (status) => {
      let isMobileOnline;
      let isVROnline;
      let user;
      const obj = react2;
      const cResult = obj.c(6);
      ({ user, isMobileOnline, isVROnline } = status);
      status = status.status;
      const tmp4 = closure_11();
      let tmp5 = null;
      if (!user.isSystemUser()) {
        tmp5 = status;
      }
      if (cResult[0] === isMobileOnline) {
        if (cResult[1] === isVROnline) {
          if (cResult[2] === tmp4.channelIcon) {
            if (cResult[3] === tmp5) {
              let tmp6;
              if (cResult[4] === user) {
                tmp6 = cResult[5];
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
        status: tmp5,
        isMobileOnline,
        isVROnline,
        style: tmp4.channelIcon,
        autoStatusCutout: false,
      };
      const Avatar = native.Avatar;
      const tmp7 = metroImportAll(Avatar, obj2);
      cResult[0] = isMobileOnline;
      cResult[1] = isVROnline;
      cResult[2] = tmp4.channelIcon;
      cResult[3] = tmp5;
      cResult[4] = user;
      cResult[5] = tmp7;
      tmp6 = tmp7;
    }
  : (user) => {
      let isMobileOnline;
      let isVROnline;
      let status;
      let tmp;
      let tmp3;
      user = user.user;
      ({ status, isMobileOnline, isVROnline } = user);
      const obj = {
        user,
        avatarDecoration: user.avatarDecoration,
        guildId: "Boolean",
        size: native.AvatarSizes.REFRESH_MEDIUM_32,
        status: tmp3,
        isMobileOnline,
        isVROnline,
        style: tmp.channelIcon,
        autoStatusCutout: false,
      };
      tmp = closure_11();
      const Avatar = native.Avatar;
      tmp3 = null;
      if (!user.isSystemUser()) {
        tmp3 = status;
      }
      return metroImportAll(Avatar, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let IconComponent;
      let icon;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(5);
      ({ icon, IconComponent } = arg0);
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
      const tmp5 = closure_11();
      if (cResult[0] === IconComponent) {
        if (cResult[1] === icon) {
          if (cResult[2] === token) {
            let tmp6;
            if (cResult[3] === tmp5) {
              tmp6 = cResult[4];
            }
            return tmp6;
          }
        }
      }
      if (null != IconComponent) {
        const obj3 = { size: token, color: "icon-strong", style: { marginEnd: 4 } };
        tmp8 = metroImportAll(IconComponent, obj3);
      } else {
        const obj4 = { size: native.Icon.Sizes.SMALL_20, source: icon, color: tmp5.guildChannelIcon.tintColor };
        const Icon = native.Icon;
        tmp8 = metroImportAll(Icon, obj4);
      }
      cResult[0] = IconComponent;
      cResult[1] = icon;
      cResult[2] = token;
      cResult[3] = tmp5;
      cResult[4] = tmp8;
      tmp6 = tmp8;
    }
  : (IconComponent) => {
      let tmp6;
      IconComponent = IconComponent.IconComponent;
      const icon = IconComponent.icon;
      const obj = useToken;
      const token = obj.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
      if (null != IconComponent) {
        const obj2 = { size: token, color: "icon-strong", style: { marginEnd: 4 } };
        tmp6 = metroImportAll(IconComponent, obj2);
      } else {
        const obj3 = { size: native.Icon.Sizes.SMALL_20, source: icon, color: tmp4.guildChannelIcon.tintColor };
        const Icon = native.Icon;
        tmp6 = metroImportAll(Icon, obj3);
      }
      return tmp6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let leadingAccessoryWidth;
      let memberCount;
      let presenceCount;
      let withSeparator;
      const obj = react2;
      const cResult = obj.c(11);
      ({ presenceCount, memberCount, withSeparator, leadingAccessoryWidth } = arg0);
      let str = "online";
      if (0 === presenceCount) {
        str = "online";
        if (null !== memberCount) {
          str = "total";
        }
      }
      let str2 = "text-sm/normal";
      const tmpResult = ManaTypeConsolidationExperiment;
      if (tmpResult.useManaTypeConsolidationExperiment("ChannelHeaderMemberCount")) {
        str2 = "text-xs/normal";
      }
      if ("online" === str) {
        memberCount = presenceCount;
      }
      if (cResult[0] === leadingAccessoryWidth) {
        if (cResult[1] === memberCount) {
          if (cResult[2] === str2) {
            let tmp5;
            if (cResult[3] === str) {
              tmp5 = cResult[4];
            }
            if (cResult[5] === str2) {
              let tmp7;
              if (cResult[6] === withSeparator) {
                tmp7 = cResult[7];
              }
              if (cResult[8] === tmp5) {
                let tmp10;
                if (cResult[9] === tmp7) {
                  tmp10 = cResult[10];
                }
                return tmp10;
              }
              const obj2 = { children: items };
              items = [tmp5, tmp7];
              const tmp13 = React4(authStore, obj2);
              cResult[8] = tmp5;
              cResult[9] = tmp7;
              cResult[10] = tmp13;
              tmp10 = tmp13;
            }
            let tmp8 = null;
            if (withSeparator) {
              const obj3 = { variant: str2, color: "text-subtle", children: "\u2022" };
              tmp8 = metroImportAll(Text_Text.Text, obj3);
            }
            cResult[5] = str2;
            cResult[6] = withSeparator;
            cResult[7] = tmp8;
            tmp7 = tmp8;
          }
        }
      }
      const tmp6 = metroImportAll(GuildActionSheetMemberCountDefault, {
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
    }
  : (arg0) => {
      let leadingAccessoryWidth;
      let memberCount;
      let presenceCount;
      let withSeparator;
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
      const obj = ManaTypeConsolidationExperiment;
      if (obj.useManaTypeConsolidationExperiment("ChannelHeaderMemberCount")) {
        str2 = "text-xs/normal";
      }
      const obj2 = {
        type: str,
        count: memberCount,
        color: "text-subtle",
        dotContainerWidth: leadingAccessoryWidth,
        textVariant: str2,
      };
      const tmp7 = GuildActionSheetMemberCountDefault;
      if ("online" === str) {
        memberCount = presenceCount;
      }
      const children = [metroImportAll(tmp7, obj2)];
      let tmp6Result = null;
      if (withSeparator) {
        const obj3 = { variant: str2, color: "text-subtle", children: "\u2022" };
        tmp6Result = metroImportAll(Text_Text.Text, obj3);
      }
      children[1] = tmp6Result;
      return React4(authStore, { children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp5;
      let tmp9;
      let tmpResult;
      const obj = react2;
      const cResult = obj.c(8);
      channel = channel.channel;
      const tmp4 = closure_11();
      if (cResult[0] !== channel) {
        const intl = intl2.intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj2 = { channelName: tmpResult.computeChannelName(channel, UserStore, RelationshipStore) };
        const BjYvHO = intl2.t.BjYvHO;
        tmpResult = useChannelName;
        const formatToPlainStringResult = formatToPlainString(BjYvHO, obj2);
        cResult[0] = channel;
        cResult[1] = formatToPlainStringResult;
        tmp5 = formatToPlainStringResult;
      } else {
        tmp5 = cResult[1];
      }
      const parentChannelName = tmp4.parentChannelName;
      if (cResult[2] !== channel) {
        const tmpResult2 = useChannelName;
        const channelName = tmpResult2.computeChannelName(channel, UserStore, RelationshipStore);
        cResult[2] = channel;
        cResult[3] = channelName;
        tmp9 = channelName;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp4.parentChannelName) {
        if (cResult[5] === tmp5) {
          let tmp13;
          if (cResult[6] === tmp9) {
            tmp13 = cResult[7];
          }
          return tmp13;
        }
      }
      const tmp14 = metroImportAll(Text_Text.Text, {
        lineClamp: 1,
        accessibilityLabel: tmp5,
        maxFontSizeMultiplier: 2,
        variant: "text-sm/medium",
        color: "text-subtle",
        style: parentChannelName,
        children: tmp9,
      });
      cResult[4] = tmp4.parentChannelName;
      cResult[5] = tmp5;
      cResult[6] = tmp9;
      cResult[7] = tmp14;
      tmp13 = tmp14;
    }
  : (channel) => {
      let BjYvHO;
      let formatToPlainString;
      let obj2;
      let obj3;
      let obj4;
      let tmp;
      channel = channel.channel;
      const obj = {
        lineClamp: 1,
        accessibilityLabel: formatToPlainString(BjYvHO, obj2),
        maxFontSizeMultiplier: 2,
        variant: "text-sm/medium",
        color: "text-subtle",
        style: tmp.parentChannelName,
        children: obj4.computeChannelName(channel, UserStore, RelationshipStore),
      };
      tmp = closure_11();
      const Text = Text_Text.Text;
      const intl = intl2.intl;
      formatToPlainString = intl.formatToPlainString;
      obj2 = { channelName: obj3.computeChannelName(channel, UserStore, RelationshipStore) };
      BjYvHO = intl2.t.BjYvHO;
      obj3 = useChannelName;
      obj4 = useChannelName;
      return metroImportAll(Text, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_11();
      if (cResult[0] !== tmp2.channelIconWrapper) {
        const obj2 = { style: tmp2.channelIconWrapper };
        const tmp6 = metroImportAll(View, obj2);
        cResult[0] = tmp2.channelIconWrapper;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const obj = { style: closure_11().channelIconWrapper };
      return metroImportAll(View, obj);
    };
function renderChannelIconRaw(icon, IconComponent) {
  const obj = { icon, IconComponent };
  return metroImportAll(closure_16, obj);
}
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx");

export const renderTitleWrapper = function renderTitleWrapper(tmp11Result, callback, combined, titleContentHeight) {
  const obj = { onPress: callback, headerAccessibilityLabel: combined, titleContentHeight, children: tmp11Result };
  return metroImportAll(closure_12, obj);
};
export const renderChannelTitle = function renderChannelTitle(visibleChannelName, arg1) {
  let accessibleTitle;
  let subtitle;
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
  const obj2 = {
    title: visibleChannelName,
    accessibleTitle,
    subtitle,
    disableArrow: tmp,
    userId: obj.userId,
    guildId: obj.guildId,
    icon: obj.icon,
  };
  return metroImportAll(closure_13, obj2);
};
export const renderGroupDMIcon = function renderGroupDMIcon(stateFromStores) {
  const obj = { channel: stateFromStores };
  return metroImportAll(closure_14, obj);
};
export const renderUserAvatar = function renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline) {
  const obj = { user: stateFromStores1, status, isMobileOnline, isVROnline };
  return metroImportAll(closure_15, obj);
};
export { renderChannelIconRaw };
export const renderChannelIcon = function renderChannelIcon(stateFromStores, stateFromStores3) {
  const obj = utils_ChannelUtils;
  const channelIconWithGuild = obj.getChannelIconWithGuild(stateFromStores, stateFromStores3);
  let rulesChannelId;
  const getChannelIconComponent = utils_ChannelUtils.getChannelIconComponent;
  utils_ChannelUtils;
  if (stateFromStores3 != null) {
    rulesChannelId = stateFromStores3.rulesChannelId;
  }
  const obj2 = { isRulesChannel: rulesChannelId === stateFromStores.id };
  const obj3 = { icon: channelIconWithGuild, IconComponent: getChannelIconComponent(stateFromStores, obj2) };
  return metroImportAll(closure_16, obj3);
};
export const renderMemberCountText = function renderMemberCountText(online, total) {
  let tmp;
  if (null != online) {
    const obj = { presenceCount: online, memberCount: total, withSeparator: flag, leadingAccessoryWidth };
    tmp = metroImportAll(closure_17, obj);
  } else {
    tmp = null;
  }
  return tmp;
};
export const renderParentChannelSubTitle = function renderParentChannelSubTitle(parentChannel) {
  const obj = { channel: parentChannel };
  return metroImportAll(closure_18, obj);
};
export const renderEmptyIcon = function renderEmptyIcon() {
  return metroImportAll(closure_19, {});
};
