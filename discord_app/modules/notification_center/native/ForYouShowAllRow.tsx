// discord_app/modules/notification_center/native/ForYouShowAllRow.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import AssetRegistryDefault from "../../../../_runtime/06645_AssetRegistry.js";
import ChannelListLayout from "../../main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx";
import FriendsScreenConstants from "../../main_tabs_v2/native/friends/screens/FriendsScreenConstants.tsx";
import AvatarDuoPile2 from "../../../design/components/Pile/native/AvatarDuoPile.native.tsx";
import ChannelPressableWrapper from "../../main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx";
import ChannelWrapper from "../../main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let navigation, suggestedFriends;

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const Sections = FriendsScreenConstants.Sections;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((layout) => {
  let num;
  let obj7;
  const obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout);
  const obj2 = ChannelListLayout;
  const sizeStyle = obj2.makeSizeStyle(layoutStyles.icon.wrapper.size);
  const obj3 = {
    rowActive: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED },
    pressable: { flex: 1 },
    textContainer: {
      flexDirection: "column",
      flexGrow: 2,
      flexShrink: 2,
      alignSelf: "center",
      overflow: "hidden",
      marginTop: -2,
      marginRight: nativeDefault.space.PX_8,
    },
    nameText: { flexShrink: 1, marginBottom: num },
    avatar: obj7,
    icon: size,
    iconColor: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT },
  };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED });
  ({
    flexDirection: "column",
    flexGrow: 2,
    flexShrink: 2,
    alignSelf: "center",
    overflow: "hidden",
    marginTop: -2,
    marginRight: nativeDefault.space.PX_8,
  });
  num = 0;
  const obj6 = PlatformUtils;
  if (obj6.isAndroid()) {
    num = 2;
  }
  obj7 = {
    position: "relative",
    borderRadius: nativeDefault.radii.round,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    flexGrow: 0,
    marginRight: layoutStyles.icon.margin.marginRight + 4,
  };
  const merged = Object.assign(sizeStyle);
  size = { width: 8, height: 32, paddingRight: nativeDefault.space.PX_24 };
  ({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  return obj3;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (suggestedFriends) => {
      let messagesTabLayout;
      let obj = suggestedFriends(messagesTabLayout[10]);
      const cResult = obj.c(13);
      suggestedFriends = suggestedFriends.suggestedFriends;
      const panelVariant = suggestedFriends.panelVariant;
      const tmpResult = suggestedFriends(messagesTabLayout[11]);
      navigation = tmpResult.useNavigation();
      const tmpResult2 = suggestedFriends(messagesTabLayout[6]);
      messagesTabLayout = tmpResult2.useMessagesTabLayout(tmp4);
      if (cResult[0] === navigation) {
        let tmp7;
        if (cResult[1] === suggestedFriends.length) {
          tmp7 = cResult[2];
        }
        if (cResult[3] === messagesTabLayout) {
          let tmp8;
          if (cResult[4] === suggestedFriends) {
            tmp8 = cResult[5];
          }
          if (cResult[8] === tmp8) {
            if (cResult[9] === tmp7) {
              if (cResult[10] === (undefined !== panelVariant && panelVariant)) {
                let tmp11;
                if (cResult[11] === suggestedFriends.length) {
                  tmp11 = cResult[12];
                }
                return tmp11;
              }
            }
          }
          let obj2 = {
            children: tmp8,
            count: suggestedFriends.length,
            onPress: tmp7,
            panelVariant: undefined !== panelVariant && panelVariant,
          };
          const tmp14 = closure_7(closure_11, obj2);
          cResult[8] = tmp8;
          cResult[9] = tmp7;
          cResult[10] = undefined !== panelVariant && panelVariant;
          cResult[11] = suggestedFriends.length;
          cResult[12] = tmp14;
          tmp11 = tmp14;
        }
        if (cResult[6] !== messagesTabLayout) {
          class C {
            constructor(user) {
              let AvatarSizes;
              let isLayoutCompactResult;
              const obj = {
                user: user.user,
                guildId: "Array",
                size: isLayoutCompactResult ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL,
              };
              const Avatar = native.Avatar;
              const obj2 = ChannelListLayout;
              isLayoutCompactResult = obj2.isLayoutCompact(messagesTabLayout);
              AvatarSizes = native.AvatarSizes;
              return metroImportDefault(Avatar, obj, user.user.id);
            }
          }
          cResult[6] = messagesTabLayout;
          cResult[7] = C;
        } else {
          class C {
            constructor(user) {
              let AvatarSizes;
              let isLayoutCompactResult;
              const obj = {
                user: user.user,
                guildId: "Array",
                size: isLayoutCompactResult ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL,
              };
              const Avatar = native.Avatar;
              const obj2 = ChannelListLayout;
              isLayoutCompactResult = obj2.isLayoutCompact(messagesTabLayout);
              AvatarSizes = native.AvatarSizes;
              return metroImportDefault(Avatar, obj, user.user.id);
            }
          }
        }
        const substr = suggestedFriends.slice(2, 4);
        const mapped = substr.map(C);
        cResult[3] = messagesTabLayout;
        cResult[4] = suggestedFriends;
        cResult[5] = mapped;
        tmp8 = mapped;
      }
      const fn = function n() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = {
          section_id: Sections.FRIEND_SUGGESTIONS,
          truncated_count: 2,
          expanded_count: suggestedFriends.length,
          location: "NotificationsTab",
        };
        obj.track(AnalyticEvents.FRIEND_FINDER_SECTION_EXPANDED, obj2);
        navigation.navigate("friends", { screen: "suggested-friends", params: { presentation: "card" } });
      };
      cResult[0] = navigation;
      cResult[1] = suggestedFriends.length;
      cResult[2] = fn;
      tmp7 = fn;
    }
  : (suggestedFriends) => {
      suggestedFriends = suggestedFriends.suggestedFriends;
      let flag = suggestedFriends.panelVariant;
      if (flag === undefined) {
        flag = false;
      }
      let messagesTabLayout;
      let obj = suggestedFriends(messagesTabLayout[11]);
      navigation = obj.useNavigation();
      let obj2 = suggestedFriends(messagesTabLayout[6]);
      messagesTabLayout = obj2.useMessagesTabLayout(flag);
      const items = [navigation, suggestedFriends];
      const items1 = [messagesTabLayout, suggestedFriends];
      const callback = react.useCallback(() => {
        const obj = AnalyticsUtilsDefault;
        const obj2 = {
          section_id: Sections.FRIEND_SUGGESTIONS,
          truncated_count: 2,
          expanded_count: suggestedFriends.length,
          location: "NotificationsTab",
        };
        obj.track(AnalyticEvents.FRIEND_FINDER_SECTION_EXPANDED, obj2);
        navigation.navigate("friends", { screen: "suggested-friends", params: { presentation: "card" } });
      }, items);
      const obj3 = {
        children: react.useMemo(() => {
          const substr = suggestedFriends.slice(2, 4);
          return substr.map((user) => {
            let AvatarSizes;
            let isLayoutCompactResult;
            const obj = {
              user: user.user,
              guildId: "Array",
              size: isLayoutCompactResult ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL,
            };
            const Avatar = suggestedFriends(messagesTabLayout[13]).Avatar;
            const obj2 = suggestedFriends(messagesTabLayout[6]);
            isLayoutCompactResult = obj2.isLayoutCompact(closure_1_2);
            AvatarSizes = suggestedFriends(messagesTabLayout[13]).AvatarSizes;
            return closure_2_7(Avatar, obj, user.user.id);
          });
        }, items1),
        count: suggestedFriends.length,
        onPress: callback,
        panelVariant: flag,
      };
      return closure_7(closure_11, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let count;
      let items;
      let onPress;
      let panelVariant;
      let tmp10;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(43);
      ({ children, count, onPress, panelVariant } = arg0);
      const tmpResult = ChannelListLayout;
      const messagesTabLayout = tmpResult.useMessagesTabLayout(tmp4);
      const tmp6 = closure_10(messagesTabLayout);
      if (cResult[0] !== messagesTabLayout) {
        const tmpResult6 = ChannelListLayout;
        const layoutStyles = tmpResult6.getLayoutStyles(messagesTabLayout);
        cResult[0] = messagesTabLayout;
        cResult[1] = layoutStyles;
        tmp7 = layoutStyles;
      } else {
        tmp7 = cResult[1];
      }
      const tmpResult7 = useFontScale;
      const fontScale = tmpResult7.useFontScale();
      const backgroundColor = tmp6.rowActive.backgroundColor;
      if (cResult[2] !== tmp7.container.borderRadius) {
        const obj2 = { borderRadius: tmp7.container.borderRadius };
        cResult[2] = tmp7.container.borderRadius;
        cResult[3] = obj2;
        tmp10 = obj2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === tmp6.pressable) {
        let tmp11;
        if (cResult[5] === tmp10) {
          tmp11 = cResult[6];
        }
        const tmpResult8 = ChannelListLayout;
        const isLayoutCompactResult = tmpResult8.isLayoutCompact(messagesTabLayout);
        const AvatarSizes = native.AvatarSizes;
        const tmp13 = isLayoutCompactResult ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL;
        if (cResult[7] === children) {
          let tmp14;
          if (cResult[8] === tmp13) {
            tmp14 = cResult[9];
          }
          if (cResult[10] === tmp6.avatar) {
            let tmp17;
            let tmp21;
            if (cResult[11] === tmp14) {
              tmp17 = cResult[12];
            }
            const textContainer = tmp6.textContainer;
            const variant = tmp7.channelName.text.variant;
            const nameText = tmp6.nameText;
            if (cResult[13] !== count) {
              const intl = intl2.intl;
              const obj3 = { count };
              const formatResult = intl.format(intl2.t.NrzztX, obj3);
              cResult[13] = count;
              cResult[14] = formatResult;
              tmp21 = formatResult;
            } else {
              tmp21 = cResult[14];
            }
            if (cResult[15] === tmp7.channelName.text.variant) {
              if (cResult[16] === tmp6.nameText) {
                let tmp23;
                if (cResult[17] === tmp21) {
                  tmp23 = cResult[18];
                }
                if (cResult[19] === tmp6.textContainer) {
                  let tmp26;
                  if (cResult[20] === tmp23) {
                    tmp26 = cResult[21];
                  }
                  if (cResult[22] === tmp6.icon) {
                    let tmp30;
                    if (cResult[23] === tmp6.iconColor.color) {
                      tmp30 = cResult[24];
                    }
                    if (cResult[25] === tmp26) {
                      if (cResult[26] === tmp30) {
                        let tmp34;
                        if (cResult[27] === tmp17) {
                          tmp34 = cResult[28];
                        }
                        if (cResult[29] === fontScale) {
                          if (cResult[30] === messagesTabLayout) {
                            if (cResult[31] === (undefined !== panelVariant && panelVariant)) {
                              let tmp38;
                              if (cResult[32] === tmp34) {
                                tmp38 = cResult[33];
                              }
                              if (cResult[34] === onPress) {
                                if (cResult[35] === tmp6.rowActive.backgroundColor) {
                                  if (cResult[36] === tmp38) {
                                    let tmp40;
                                    if (cResult[37] === tmp11) {
                                      tmp40 = cResult[38];
                                    }
                                    if (cResult[39] === messagesTabLayout) {
                                      if (cResult[40] === (undefined !== panelVariant && panelVariant)) {
                                        let tmp43;
                                        if (cResult[41] === tmp40) {
                                          tmp43 = cResult[42];
                                        }
                                        return tmp43;
                                      }
                                    }
                                    const obj4 = {
                                      layout: messagesTabLayout,
                                      panelVariant: undefined !== panelVariant && panelVariant,
                                    };
                                    const tmpResult9 = ChannelPressableWrapper;
                                    const result = tmpResult9.renderChannelPressableWrapper(tmp40, obj4);
                                    cResult[39] = messagesTabLayout;
                                    cResult[40] = undefined !== panelVariant && panelVariant;
                                    cResult[41] = tmp40;
                                    cResult[42] = result;
                                    tmp43 = result;
                                  }
                                }
                              }
                              const obj5 = {
                                accessibilityRole: "button",
                                underlayColor: backgroundColor,
                                onPress,
                                style: tmp11,
                                children: tmp38,
                              };
                              const tmp42 = metroImportDefault(Pressables.PressableHighlight, obj5);
                              cResult[34] = onPress;
                              cResult[35] = tmp6.rowActive.backgroundColor;
                              cResult[36] = tmp38;
                              cResult[37] = tmp11;
                              cResult[38] = tmp42;
                              tmp40 = tmp42;
                            }
                          }
                        }
                        const obj6 = {
                          layout: messagesTabLayout,
                          fontScale,
                          panelVariant: undefined !== panelVariant && panelVariant,
                        };
                        const tmpResult10 = ChannelWrapper;
                        const renderChannelWrapperResult = tmpResult10.renderChannelWrapper(tmp34, obj6);
                        cResult[29] = fontScale;
                        cResult[30] = messagesTabLayout;
                        cResult[31] = undefined !== panelVariant && panelVariant;
                        cResult[32] = tmp34;
                        cResult[33] = renderChannelWrapperResult;
                        tmp38 = renderChannelWrapperResult;
                      }
                    }
                    const obj7 = { children: items };
                    items = [tmp17, tmp26, tmp30];
                    const tmp37 = React4(metroImportAll, obj7);
                    cResult[25] = tmp26;
                    cResult[26] = tmp30;
                    cResult[27] = tmp17;
                    cResult[28] = tmp37;
                    tmp34 = tmp37;
                  }
                  const obj8 = {
                    style: tmp6.icon,
                    color: tmp6.iconColor.color,
                    source: AssetRegistryDefault,
                    size: native.IconSizes.CUSTOM,
                  };
                  const Icon = native.Icon;
                  const tmp33 = metroImportDefault(Icon, obj8);
                  cResult[22] = tmp6.icon;
                  cResult[23] = tmp6.iconColor.color;
                  cResult[24] = tmp33;
                  tmp30 = tmp33;
                }
                const obj9 = { style: textContainer, children: tmp23 };
                const tmp29 = metroImportDefault(View, obj9);
                cResult[19] = tmp6.textContainer;
                cResult[20] = tmp23;
                cResult[21] = tmp29;
                tmp26 = tmp29;
              }
            }
            const obj10 = { lineClamp: 1, variant, color: "text-brand", style: nameText, children: tmp21 };
            const tmp25 = metroImportDefault(Text_Text.Text, obj10);
            cResult[15] = tmp7.channelName.text.variant;
            cResult[16] = tmp6.nameText;
            cResult[17] = tmp21;
            cResult[18] = tmp25;
            tmp23 = tmp25;
          }
          const obj11 = { style: tmp6.avatar, children: tmp14 };
          const tmp20 = metroImportDefault(View, obj11);
          cResult[10] = tmp6.avatar;
          cResult[11] = tmp14;
          cResult[12] = tmp20;
          tmp17 = tmp20;
        }
        const obj12 = { size: tmp13, "aria-label": "", children };
        const tmp16 = metroImportDefault(AvatarDuoPile2.AvatarDuoPile, obj12);
        cResult[7] = children;
        cResult[8] = tmp13;
        cResult[9] = tmp16;
        tmp14 = tmp16;
      }
      const items1 = [tmp6.pressable, tmp10];
      cResult[4] = tmp6.pressable;
      cResult[5] = tmp10;
      cResult[6] = items1;
      tmp11 = items1;
    }
  : (panelVariant) => {
      let AvatarDuoPile;
      let Text;
      let children;
      let count;
      let intl;
      let items;
      let items1;
      let obj10;
      let obj7;
      let obj8;
      let onPress;
      let renderChannelWrapper;
      panelVariant = panelVariant.panelVariant;
      ({ children, count, onPress } = panelVariant);
      if (panelVariant === undefined) {
        panelVariant = false;
      }
      const obj = ChannelListLayout;
      const layout = obj.useMessagesTabLayout(panelVariant);
      const tmp4 = closure_10(layout);
      const obj2 = ChannelListLayout;
      const layoutStyles = obj2.getLayoutStyles(layout);
      const obj3 = useFontScale;
      const fontScale = obj3.useFontScale();
      const obj4 = {
        accessibilityRole: "button",
        underlayColor: tmp4.rowActive.backgroundColor,
        onPress,
        style: items,
        children: renderChannelWrapper(React4(metroImportAll, obj7), { layout, fontScale, panelVariant }),
      };
      items = [tmp4.pressable, { borderRadius: layoutStyles.container.borderRadius }];
      const renderChannelPressableWrapper = ChannelPressableWrapper.renderChannelPressableWrapper;
      const PressableHighlight = Pressables.PressableHighlight;
      const obj5 = { style: tmp4.avatar, children: metroImportDefault(AvatarDuoPile, obj8) };
      renderChannelWrapper = ChannelWrapper.renderChannelWrapper;
      AvatarDuoPile = AvatarDuoPile2.AvatarDuoPile;
      const obj6 = ChannelListLayout;
      const isLayoutCompactResult = obj6.isLayoutCompact(layout);
      const AvatarSizes = native.AvatarSizes;
      obj7 = { children: items1 };
      obj8 = { size: isLayoutCompactResult ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL, "aria-label": "", children };
      items1 = [metroImportDefault(View, obj5), ,];
      const obj9 = { style: tmp4.textContainer, children: metroImportDefault(Text, obj10) };
      obj10 = {
        lineClamp: 1,
        variant: layoutStyles.channelName.text.variant,
        color: "text-brand",
        style: tmp4.nameText,
        children: intl.format(intl2.t.NrzztX, { count }),
      };
      Text = Text_Text.Text;
      intl = intl2.intl;
      items1[1] = metroImportDefault(View, obj9);
      const obj11 = {
        style: tmp4.icon,
        color: tmp4.iconColor.color,
        source: AssetRegistryDefault,
        size: native.IconSizes.CUSTOM,
      };
      const Icon = native.Icon;
      items1[2] = metroImportDefault(Icon, obj11);
      return renderChannelPressableWrapper(metroImportDefault(PressableHighlight, obj4), { layout, panelVariant });
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouShowAllRow.tsx");

export const ForYouSuggestedFriendShowAllRow = tmp3;
