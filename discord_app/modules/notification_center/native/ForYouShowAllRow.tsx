// discord_app/modules/notification_center/native/ForYouShowAllRow.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import _modDef6645 from "../../../../_runtime/metro/06645__.js";
import ChannelListLayout from "../../main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx";
import AvatarDuoPile from "../../../design/components/Pile/native/AvatarDuoPile.native.tsx";
import ChannelPressableWrapper from "../../main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx";
import ChannelWrapper from "../../main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const Sections = fn(12363).Sections;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let closure_10 = createStyles.createStyles((layout) => {
  const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
  const sizeStyle = ChannelListLayout.makeSizeStyle(layoutStyles.icon.wrapper.size);
  const obj3 = {
    rowActive: null,
    pressable: null,
    textContainer: null,
    nameText: null,
    avatar: null,
    icon: null,
    iconColor: null,
  };
  obj3.rowActive = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
  obj3.pressable = { flex: 1 };
  const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
  obj3.textContainer = {
    flexDirection: "column",
    flexGrow: 2,
    flexShrink: 2,
    alignSelf: "center",
    overflow: "hidden",
    marginTop: -2,
    marginRight: nativeDefault.space.PX_8,
  };
  const obj5 = {
    flexDirection: "column",
    flexGrow: 2,
    flexShrink: 2,
    alignSelf: "center",
    overflow: "hidden",
    marginTop: -2,
    marginRight: nativeDefault.space.PX_8,
  };
  let num = 0;
  if (obj6.isAndroid()) {
    num = 2;
  }
  obj3.nameText = { flexShrink: 1, marginBottom: num };
  const obj7 = {
    position: "relative",
    borderRadius: nativeDefault.radii.round,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    flexGrow: 0,
  };
  const merged = Object.assign(sizeStyle);
  obj7.marginRight = layoutStyles.icon.margin.marginRight + 4;
  obj3.avatar = obj7;
  const size = { width: 8, height: 32, paddingRight: nativeDefault.space.PX_24 };
  obj3.icon = size;
  obj6 = PlatformUtils;
  obj3.iconColor = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  return obj3;
});
fn(558);
const ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(43);
      ({ children, count, onPress, panelVariant } = arg0);
      const messagesTabLayout = ChannelListLayout.useMessagesTabLayout(tmp4);
      const tmp6 = closure_10(messagesTabLayout);
      if (cResult[0] !== messagesTabLayout) {
        const layoutStyles = ChannelListLayout.getLayoutStyles(messagesTabLayout);
        cResult[0] = messagesTabLayout;
        cResult[1] = layoutStyles;
        let tmp7 = layoutStyles;
        const tmpResult6 = ChannelListLayout;
      } else {
        tmp7 = cResult[1];
      }
      const tmpResult = ChannelListLayout;
      const fontScale = useFontScale.useFontScale();
      if (cResult[2] !== tmp7.container.borderRadius) {
        const obj2 = { borderRadius: tmp7.container.borderRadius };
        cResult[2] = tmp7.container.borderRadius;
        cResult[3] = obj2;
        let tmp10 = obj2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === tmp6.pressable) {
        if (cResult[5] === tmp10) {
          let tmp11 = cResult[6];
        }
        const tmpResult8 = ChannelListLayout;
        const AvatarSizes = native.AvatarSizes;
        const tmp13 = ChannelListLayout.isLayoutCompact(messagesTabLayout) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL;
        if (cResult[7] === children) {
          if (cResult[8] === tmp13) {
            let tmp14 = cResult[9];
          }
          if (cResult[10] === tmp6.avatar) {
            if (cResult[11] === tmp14) {
              let tmp17 = cResult[12];
            }
            if (cResult[13] !== count) {
              const intl = util.intl;
              const obj3 = { count };
              const formatResult = intl.format(util.t.NrzztX, obj3);
              cResult[13] = count;
              cResult[14] = formatResult;
              let tmp21 = formatResult;
            } else {
              tmp21 = cResult[14];
            }
            if (cResult[15] === tmp7.channelName.text.variant) {
              if (cResult[16] === tmp6.nameText) {
                if (cResult[17] === tmp21) {
                  let tmp23 = cResult[18];
                }
                if (cResult[19] === tmp6.textContainer) {
                  if (cResult[20] === tmp23) {
                    let tmp26 = cResult[21];
                  }
                  if (cResult[22] === tmp6.icon) {
                    if (cResult[23] === tmp6.iconColor.color) {
                      let tmp30 = cResult[24];
                    }
                    if (cResult[25] === tmp26) {
                      if (cResult[26] === tmp30) {
                        if (cResult[27] === tmp17) {
                          let tmp34 = cResult[28];
                        }
                        if (cResult[29] === fontScale) {
                          if (cResult[30] === messagesTabLayout) {
                            if (cResult[31] === tmp4) {
                              if (cResult[32] === tmp34) {
                                let tmp38 = cResult[33];
                              }
                              if (cResult[34] === onPress) {
                                if (cResult[35] === tmp6.rowActive.backgroundColor) {
                                  if (cResult[36] === tmp38) {
                                    if (cResult[37] === tmp11) {
                                      let tmp40 = cResult[38];
                                    }
                                    if (cResult[39] === messagesTabLayout) {
                                      if (cResult[40] === tmp4) {
                                        if (cResult[41] === tmp40) {
                                          let tmp43 = cResult[42];
                                        }
                                        return tmp43;
                                      }
                                    }
                                    const obj4 = { layout: messagesTabLayout, panelVariant: tmp4 };
                                    const result = ChannelPressableWrapper.renderChannelPressableWrapper(tmp40, obj4);
                                    cResult[39] = messagesTabLayout;
                                    cResult[40] = tmp4;
                                    cResult[41] = tmp40;
                                    cResult[42] = result;
                                    tmp43 = result;
                                    const tmpResult9 = ChannelPressableWrapper;
                                  }
                                }
                              }
                              const obj5 = {
                                accessibilityRole: "button",
                                underlayColor: tmp6.rowActive.backgroundColor,
                                onPress,
                                style: tmp11,
                                children: tmp38,
                              };
                              const tmp42 = React5(Pressables.PressableHighlight, obj5);
                              cResult[34] = onPress;
                              cResult[35] = tmp6.rowActive.backgroundColor;
                              cResult[36] = tmp38;
                              cResult[37] = tmp11;
                              cResult[38] = tmp42;
                              tmp40 = tmp42;
                            }
                          }
                        }
                        const obj6 = { layout: messagesTabLayout, fontScale, panelVariant: tmp4 };
                        const renderChannelWrapperResult = ChannelWrapper.renderChannelWrapper(tmp34, obj6);
                        cResult[29] = fontScale;
                        cResult[30] = messagesTabLayout;
                        cResult[31] = tmp4;
                        cResult[32] = tmp34;
                        cResult[33] = renderChannelWrapperResult;
                        tmp38 = renderChannelWrapperResult;
                        const tmpResult10 = ChannelWrapper;
                      }
                    }
                    const obj7 = { children: null };
                    const items = [tmp17, tmp26, tmp30];
                    obj7.children = items;
                    const tmp37 = options(closure_1_8, obj7);
                    cResult[25] = tmp26;
                    cResult[26] = tmp30;
                    cResult[27] = tmp17;
                    cResult[28] = tmp37;
                    tmp34 = tmp37;
                  }
                  const obj8 = {
                    style: tmp6.icon,
                    color: tmp6.iconColor.color,
                    source: _modDef6645,
                    size: native.IconSizes.CUSTOM,
                  };
                  const tmp33 = React5(native.Icon, obj8);
                  cResult[22] = tmp6.icon;
                  cResult[23] = tmp6.iconColor.color;
                  cResult[24] = tmp33;
                  tmp30 = tmp33;
                }
                const obj9 = { style: tmp6.textContainer, children: tmp23 };
                const tmp29 = React5(View, obj9);
                cResult[19] = tmp6.textContainer;
                cResult[20] = tmp23;
                cResult[21] = tmp29;
                tmp26 = tmp29;
              }
            }
            const obj10 = {
              lineClamp: 1,
              variant: tmp7.channelName.text.variant,
              color: "text-brand",
              style: tmp6.nameText,
              children: tmp21,
            };
            const tmp25 = React5(Text_Text.Text, obj10);
            cResult[15] = tmp7.channelName.text.variant;
            cResult[16] = tmp6.nameText;
            cResult[17] = tmp21;
            cResult[18] = tmp25;
            tmp23 = tmp25;
          }
          const obj11 = { style: tmp6.avatar, children: tmp14 };
          const tmp20 = React5(View, obj11);
          cResult[10] = tmp6.avatar;
          cResult[11] = tmp14;
          cResult[12] = tmp20;
          tmp17 = tmp20;
        }
        const obj12 = { size: tmp13, "aria-label": "", children };
        const tmp16 = React5(AvatarDuoPile.AvatarDuoPile, obj12);
        cResult[7] = children;
        cResult[8] = tmp13;
        cResult[9] = tmp16;
        tmp14 = tmp16;
        const isLayoutCompactResult = ChannelListLayout.isLayoutCompact(messagesTabLayout);
      }
      const items1 = [tmp6.pressable, tmp10];
      cResult[4] = tmp6.pressable;
      cResult[5] = tmp10;
      cResult[6] = items1;
      tmp11 = items1;
      const tmpResult7 = useFontScale;
    }
  : (panelVariant) => {
      panelVariant = panelVariant.panelVariant;
      ({ children, count, onPress } = panelVariant);
      if (panelVariant === undefined) {
        panelVariant = false;
      }
      const layout = ChannelListLayout.useMessagesTabLayout(panelVariant);
      const tmp4 = closure_10(layout);
      const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
      const fontScale = useFontScale.useFontScale();
      const obj5 = {
        accessibilityRole: "button",
        underlayColor: tmp4.rowActive.backgroundColor,
        onPress,
        style: null,
        children: null,
      };
      const items = [tmp4.pressable, { borderRadius: layoutStyles.container.borderRadius }];
      obj5.style = items;
      const obj4 = ChannelPressableWrapper;
      const obj7 = { style: tmp4.avatar, children: null };
      const obj6 = ChannelWrapper;
      const AvatarSizes = native.AvatarSizes;
      const obj9 = { children: null };
      const isLayoutCompactResult = ChannelListLayout.isLayoutCompact(layout);
      obj7.children = React5(AvatarDuoPile.AvatarDuoPile, {
        size: ChannelListLayout.isLayoutCompact(layout) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL,
        "aria-label": "",
        children,
      });
      const items1 = [React5(View, obj7), ,];
      const obj11 = { style: tmp4.textContainer, children: null };
      const obj12 = {
        lineClamp: 1,
        variant: layoutStyles.channelName.text.variant,
        color: "text-brand",
        style: tmp4.nameText,
        children: null,
      };
      const intl = util.intl;
      obj12.children = intl.format(util.t.NrzztX, { count });
      obj11.children = React5(Text_Text.Text, obj12);
      items1[1] = React5(View, obj11);
      const obj10 = {
        size: ChannelListLayout.isLayoutCompact(layout) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL,
        "aria-label": "",
        children,
      };
      items1[2] = React5(native.Icon, {
        style: tmp4.icon,
        color: tmp4.iconColor.color,
        source: _modDef6645,
        size: native.IconSizes.CUSTOM,
      });
      obj9.children = items1;
      obj5.children = obj6.renderChannelWrapper(options(closure_1_8, obj9), { layout, fontScale, panelVariant });
      return obj4.renderChannelPressableWrapper(React5(Pressables.PressableHighlight, obj5), { layout, panelVariant });
    };
let size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouShowAllRow.tsx");

export const ForYouSuggestedFriendShowAllRow = ReactCompilerGating.isReactCompilerEnabled()
  ? (suggestedFriends) => {
      const cResult = suggestedFriends(messagesTabLayout[10]).c(13);
      suggestedFriends = suggestedFriends.suggestedFriends;
      const panelVariant = suggestedFriends.panelVariant;
      let obj = suggestedFriends(messagesTabLayout[10]);
      const navigation = suggestedFriends(messagesTabLayout[11]).useNavigation();
      const tmpResult = suggestedFriends(messagesTabLayout[11]);
      messagesTabLayout = suggestedFriends(messagesTabLayout[6]).useMessagesTabLayout(tmp4);
      if (cResult[0] === navigation) {
        if (cResult[1] === suggestedFriends.length) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === messagesTabLayout) {
          if (cResult[4] === suggestedFriends) {
            if (cResult[8] === cResult[5]) {
              if (cResult[9] === tmp7) {
                if (cResult[10] === tmp4) {
                  if (cResult[11] === suggestedFriends.length) {
                    let tmp12 = cResult[12];
                  }
                  return tmp12;
                }
              }
            }
            let obj2 = { children: cResult[5], count: suggestedFriends.length, onPress: tmp7, panelVariant: tmp4 };
            const tmp15 = closure_7(closure_11, obj2);
            cResult[8] = cResult[5];
            cResult[9] = tmp7;
            cResult[10] = tmp4;
            cResult[11] = suggestedFriends.length;
            cResult[12] = tmp15;
            tmp12 = tmp15;
          }
        }
        if (cResult[6] !== messagesTabLayout) {
          class C {
            constructor(arg0) {
              tmp = jsx;
              obj = {
                user: suggestedFriends.user,
                guildId: "Array",
                size: "function pnpm_presetsTs1(event){return{transform:[{translateX:event.translationX}]};}",
              };
              obj2 = closure_0(closure_2[6]);
              isLayoutCompactResult = obj2.isLayoutCompact(closure_2);
              AvatarSizes = closure_0(closure_2[13]).AvatarSizes;
              obj.size = isLayoutCompactResult ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL;
              return tmp(closure_0(closure_2[13]).Avatar, obj, suggestedFriends.user.id);
            }
          }
          cResult[6] = messagesTabLayout;
          cResult[7] = C;
        } else {
          class C {
            constructor(arg0) {
              tmp = jsx;
              obj = {
                user: suggestedFriends.user,
                guildId: "Array",
                size: "function pnpm_presetsTs1(event){return{transform:[{translateX:event.translationX}]};}",
              };
              obj2 = closure_0(closure_2[6]);
              isLayoutCompactResult = obj2.isLayoutCompact(closure_2);
              AvatarSizes = closure_0(closure_2[13]).AvatarSizes;
              obj.size = isLayoutCompactResult ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL;
              return tmp(closure_0(closure_2[13]).Avatar, obj, suggestedFriends.user.id);
            }
          }
        }
        const substr = suggestedFriends.slice(2, 4);
        const mapped = substr.map(C);
        cResult[3] = messagesTabLayout;
        cResult[4] = suggestedFriends;
        cResult[5] = mapped;
      }
      const fn = function n() {
        AnalyticsUtilsDefault.track(AnalyticEvents.FRIEND_FINDER_SECTION_EXPANDED, {
          section_id: Sections.FRIEND_SUGGESTIONS,
          truncated_count: 2,
          expanded_count: suggestedFriends.length,
          location: "NotificationsTab",
        });
        navigation.navigate("friends", { screen: "suggested-friends", params: { presentation: "card" } });
      };
      cResult[0] = navigation;
      cResult[1] = suggestedFriends.length;
      cResult[2] = fn;
      tmp7 = fn;
      const tmpResult2 = suggestedFriends(messagesTabLayout[6]);
    }
  : (suggestedFriends) => {
      suggestedFriends = suggestedFriends.suggestedFriends;
      let flag = suggestedFriends.panelVariant;
      if (flag === undefined) {
        flag = false;
      }
      let messagesTabLayout;
      const navigation = suggestedFriends(messagesTabLayout[11]).useNavigation();
      let obj = suggestedFriends(messagesTabLayout[11]);
      messagesTabLayout = suggestedFriends(messagesTabLayout[6]).useMessagesTabLayout(flag);
      const items = [navigation, suggestedFriends];
      const items1 = [messagesTabLayout, suggestedFriends];
      const callback = noop.useCallback(() => {
        AnalyticsUtilsDefault.track(AnalyticEvents.FRIEND_FINDER_SECTION_EXPANDED, {
          section_id: Sections.FRIEND_SUGGESTIONS,
          truncated_count: 2,
          expanded_count: suggestedFriends.length,
          location: "NotificationsTab",
        });
        navigation.navigate("friends", { screen: "suggested-friends", params: { presentation: "card" } });
      }, items);
      let obj2 = suggestedFriends(messagesTabLayout[6]);
      return closure_7(closure_11, {
        children: noop.useMemo(() => {
          const substr = suggestedFriends.slice(2, 4);
          return substr.map((user) => {
            const obj = {
              user: user.user,
              guildId: "Array",
              size: "function pnpm_presetsTs1(event){return{transform:[{translateX:event.translationX}]};}",
            };
            const obj2 = suggestedFriends(messagesTabLayout[6]);
            const AvatarSizes = suggestedFriends(messagesTabLayout[13]).AvatarSizes;
            obj.size = suggestedFriends(messagesTabLayout[6]).isLayoutCompact(closure_1_2)
              ? AvatarSizes.XSMALL_20
              : AvatarSizes.SMALL;
            return closure_2_7(suggestedFriends(messagesTabLayout[13]).Avatar, obj, user.user.id);
          });
        }, items1),
        count: suggestedFriends.length,
        onPress: callback,
        panelVariant: flag,
      });
    };
