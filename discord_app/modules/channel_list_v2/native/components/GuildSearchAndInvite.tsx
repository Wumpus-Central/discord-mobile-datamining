// discord_app/modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import useStableCallbackDefault from "../../../../hooks/useStableCallback.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import _modDef9276 from "../../../../../_runtime/metro/09276__.js";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import utils_InstantInviteUtils from "../../../../utils/native/InstantInviteUtils.tsx";
import _modDef9715 from "../../../../../_runtime/metro/09715__.js";
import GuildDirectorySearchModalActionCreatorsDefault from "../../../directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx";
import SearchPlatformUtilsDefault from "../../../search/native/SearchPlatformUtils.tsx";
import useCanSeeEventsInChannelListDefault from "../../../guild_scheduled_events/useCanSeeEventsInChannelList.tsx";
import useEventsButtonPropsDefault from "../../../guild_scheduled_events/native/hooks/useEventsButtonProps.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";

require = fn;
function handleInviteDisabledPress() {
  const lazyResult = noop.lazy(() => require("asyncRequireImpl")(paths[11], paths.paths));
  useAlertStore.openAlert("invites-disabled", __initData(lazyResult, {}));
}
const View = fn(17).View;
const SEARCH_BAR_MARGIN_BOTTOM = fn(11697).SEARCH_BAR_MARGIN_BOTTOM;
const Constants = fn(1085);
({ GuildFeatures: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4890);
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = {
    paddingHorizontal: nativeDefault.space.PX_16,
    marginBottom: SEARCH_BAR_MARGIN_BOTTOM,
    flexDirection: "row",
    gap: null,
  };
  let num = 10;
  if (arg0) {
    num = nativeDefault.space.PX_12;
  }
  const obj2 = { container: obj, search: { flex: 1 }, badge: null };
  obj.gap = num;
  const size = {
    position: "absolute",
    right: 0,
    top: 0,
    width: 8,
    height: 8,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  };
  obj2.badge = size;
  return obj2;
});
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(guildSearchContext[15]).c(39);
      guildId = guildId.guildId;
      ({
        canInvite,
        invitesDisabled,
        onInvitePress,
        onEventsPress,
        hasUnreadEvents,
        useEventsButton,
        useButtonComponent,
      } = guildId);
      const tmp4 = closure_14(useButtonComponent);
      let obj = guildId(guildSearchContext[15]);
      const navigation = guildId(guildSearchContext[16]).useNavigation();
      let obj2 = guildId(guildSearchContext[16]);
      guildSearchContext = guildId(guildSearchContext[17]).useGuildSearchContext(guildId);
      if (cResult[0] === guildId) {
        if (cResult[1] === navigation) {
          if (cResult[2] === guildSearchContext) {
            let tmp7 = cResult[3];
          }
          const tmp9 = navigation(tmp2[20])(tmp7);
          const iOSPressEffects = tmp(tmp2[21]).useIOSPressEffects(4);
          ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
          if (cResult[4] === canInvite) {
            if (cResult[5] === invitesDisabled) {
              if (cResult[6] === onInvitePress) {
                let tmp11 = cResult[7];
              }
              if (cResult[8] === hasUnreadEvents) {
                if (cResult[9] === onEventsPress) {
                  if (cResult[10] === tmp4.badge) {
                    if (cResult[11] === useEventsButton) {
                      let tmp15 = cResult[12];
                    }
                    if (useButtonComponent) {
                      const _Symbol = Symbol;
                      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl5 = tmp(tmp2[24]).intl;
                        const stringResult = intl5.string(tmp(tmp2[24]).t["5h0QOP"]);
                        cResult[13] = stringResult;
                        let tmp38 = stringResult;
                      } else {
                        tmp38 = cResult[13];
                      }
                      if (cResult[14] !== tmp9) {
                        const obj4 = {
                          variant: "secondary",
                          grow: true,
                          shrink: true,
                          size: "sm",
                          icon: tmp8(tmp2[27]),
                          onPress: tmp9,
                          text: tmp38,
                          maxFontSizeMultiplier: 2,
                        };
                        const tmp42 = closure_12(tmp(tmp2[26]).Button, obj4);
                        cResult[14] = tmp9;
                        cResult[15] = tmp42;
                        let tmp40 = tmp42;
                      } else {
                        tmp40 = cResult[15];
                      }
                      if (cResult[16] === tmp15) {
                        if (cResult[17] === tmp11) {
                          if (cResult[18] === tmp4.container) {
                            if (cResult[19] === tmp40) {
                              let tmp43 = cResult[20];
                            }
                            return tmp43;
                          }
                        }
                      }
                      const obj5 = { style: tmp4.container, children: null };
                      const items = [tmp40, tmp11, tmp15];
                      obj5.children = items;
                      const tmp46 = closure_13(View, obj5);
                      cResult[16] = tmp15;
                      cResult[17] = tmp11;
                      cResult[18] = tmp4.container;
                      cResult[19] = tmp40;
                      cResult[20] = tmp46;
                      tmp43 = tmp46;
                    } else {
                      if (cResult[21] === pressableStyles) {
                        if (cResult[22] === tmp4.search) {
                          let tmp22 = cResult[23];
                        }
                        if (cResult[24] === tmp9) {
                          if (cResult[25] === onPressIn) {
                            if (cResult[26] === onPressOut) {
                              let tmp23 = cResult[27];
                            }
                            if (cResult[28] === tmp22) {
                              if (cResult[29] === tmp23) {
                                let tmp26 = cResult[30];
                              }
                              if (cResult[31] === canInvite) {
                                if (cResult[32] === invitesDisabled) {
                                  if (cResult[33] === onInvitePress) {
                                    let tmp29 = cResult[34];
                                  }
                                  if (cResult[35] === tmp4.container) {
                                    if (cResult[36] === tmp26) {
                                      if (cResult[37] === tmp29) {
                                        let tmp33 = cResult[38];
                                      }
                                      return tmp33;
                                    }
                                  }
                                  const obj6 = { style: tmp4.container, children: null };
                                  const items1 = [tmp26, tmp29];
                                  obj6.children = items1;
                                  const tmp36 = closure_13(View, obj6);
                                  cResult[35] = tmp4.container;
                                  cResult[36] = tmp26;
                                  cResult[37] = tmp29;
                                  cResult[38] = tmp36;
                                  tmp33 = tmp36;
                                }
                              }
                              let tmp30 = null;
                              if (canInvite) {
                                const obj7 = {
                                  variant: "tertiary",
                                  icon: tmp8(tmp2[23]),
                                  onPress: onInvitePress,
                                  onPressDisabled: handleInviteDisabledPress,
                                  accessibilityLabel: null,
                                  disabled: null,
                                };
                                const intl4 = tmp(tmp2[24]).intl;
                                obj7.accessibilityLabel = intl4.string(tmp(tmp2[24]).t.VINpSK);
                                obj7.disabled = invitesDisabled;
                                tmp30 = closure_12(tmp(tmp2[22]).IconButton, obj7);
                              }
                              cResult[31] = canInvite;
                              cResult[32] = invitesDisabled;
                              cResult[33] = onInvitePress;
                              cResult[34] = tmp30;
                              tmp29 = tmp30;
                            }
                            const obj8 = { style: tmp22, children: tmp23 };
                            const tmp28 = closure_12(tmp8(tmp2[29]).View, obj8);
                            cResult[28] = tmp22;
                            cResult[29] = tmp23;
                            cResult[30] = tmp28;
                            tmp26 = tmp28;
                          }
                        }
                        const obj9 = { onPress: tmp9, onPressIn, onPressOut };
                        const tmp25 = closure_12(tmp(tmp2[28]).SearchButtonContent, obj9);
                        cResult[24] = tmp9;
                        cResult[25] = onPressIn;
                        cResult[26] = onPressOut;
                        cResult[27] = tmp25;
                        tmp23 = tmp25;
                      }
                      const items2 = [tmp4.search, pressableStyles];
                      cResult[21] = pressableStyles;
                      cResult[22] = tmp4.search;
                      cResult[23] = items2;
                      tmp22 = items2;
                    }
                  }
                }
              }
              let tmp17Result = null;
              if (useEventsButton) {
                const obj10 = {
                  variant: "secondary",
                  size: "sm",
                  icon: tmp8(tmp2[25]),
                  accessibilityLabel: null,
                  onPress: null,
                  maxFontSizeMultiplier: 2,
                };
                let str2 = "";
                if (hasUnreadEvents) {
                  const intl2 = tmp(tmp2[24]).intl;
                  const _HermesInternal = HermesInternal;
                  str2 = "" + intl2.string(tmp(tmp2[24]).t.hcaVYl) + ", ";
                }
                const intl3 = tmp(tmp2[24]).intl;
                obj10.accessibilityLabel = str2 + intl3.string(tmp(tmp2[24]).t.tlopTM);
                obj10.onPress = onEventsPress;
                const items3 = [closure_12(tmp(tmp2[22]).IconButton, obj10)];
                let tmp19Result = hasUnreadEvents;
                if (hasUnreadEvents) {
                  const obj11 = {
                    style: tmp4.badge,
                    importantForAccessibility: "no-hide-descendants",
                    accessibilityElementsHidden: true,
                  };
                  tmp19Result = closure_12(View, obj11);
                }
                const obj12 = { children: null };
                items3[1] = tmp19Result;
                obj12.children = items3;
                tmp17Result = closure_13(View, obj12);
              }
              cResult[8] = hasUnreadEvents;
              cResult[9] = onEventsPress;
              cResult[10] = tmp4.badge;
              cResult[11] = useEventsButton;
              cResult[12] = tmp17Result;
              tmp15 = tmp17Result;
            }
          }
          let tmp12 = null;
          if (canInvite) {
            const obj13 = {
              variant: "secondary",
              size: "sm",
              icon: tmp8(tmp2[23]),
              onPress: onInvitePress,
              onPressDisabled: handleInviteDisabledPress,
              accessibilityLabel: null,
              disabled: null,
              maxFontSizeMultiplier: 2,
            };
            const intl = tmp(tmp2[24]).intl;
            obj13.accessibilityLabel = intl.string(tmp(tmp2[24]).t.VINpSK);
            obj13.disabled = invitesDisabled;
            tmp12 = closure_12(tmp(tmp2[22]).IconButton, obj13);
          }
          cResult[4] = canInvite;
          cResult[5] = invitesDisabled;
          cResult[6] = onInvitePress;
          cResult[7] = tmp12;
          tmp11 = tmp12;
          const tmpResult = tmp(tmp2[21]);
        }
      }
      const fn = function c() {
        guild = GuildStore.getGuild(guildId);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(constants.HUB);
        }
        if (hasItem) {
          let directoryChannelIds = GuildChannelStore.getDirectoryChannelIds(guildId);
        } else {
          directoryChannelIds = [];
        }
        let channel = null;
        if (0 !== directoryChannelIds.length) {
          channel = ChannelStore.getChannel(directoryChannelIds[0]);
        }
        if (null != channel) {
          const obj3 = { channel };
          GuildDirectorySearchModalActionCreatorsDefault.open(obj3);
        } else {
          const result = SearchPlatformUtilsDefault.navigateToSearchWithPrefetch(navigation, guildSearchContext);
        }
      };
      cResult[0] = guildId;
      cResult[1] = navigation;
      cResult[2] = guildSearchContext;
      cResult[3] = fn;
      tmp7 = fn;
      let obj3 = guildId(guildSearchContext[17]);
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const canInvite = guildId.canInvite;
      const invitesDisabled = guildId.invitesDisabled;
      const onInvitePress = guildId.onInvitePress;
      const onEventsPress = guildId.onEventsPress;
      const hasUnreadEvents = guildId.hasUnreadEvents;
      const useEventsButton = guildId.useEventsButton;
      const useButtonComponent = guildId.useButtonComponent;
      let tmp = closure_14(useButtonComponent);
      const badge = tmp;
      closure_8 = guildId(invitesDisabled[16]).useNavigation();
      let obj = guildId(invitesDisabled[16]);
      closure_9 = guildId(invitesDisabled[17]).useGuildSearchContext(guildId);
      const tmp5 = canInvite(invitesDisabled[20])(() => {
        guild = GuildStore.getGuild(guildId);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(constants.HUB);
        }
        if (hasItem) {
          let directoryChannelIds = GuildChannelStore.getDirectoryChannelIds(guildId);
        } else {
          directoryChannelIds = [];
        }
        let channel = null;
        if (0 !== directoryChannelIds.length) {
          channel = ChannelStore.getChannel(directoryChannelIds[0]);
        }
        if (null != channel) {
          const obj3 = { channel };
          GuildDirectorySearchModalActionCreatorsDefault.open(obj3);
        } else {
          const result = SearchPlatformUtilsDefault.navigateToSearchWithPrefetch(closure_8, closure_9);
        }
      });
      let obj2 = guildId(invitesDisabled[17]);
      const iOSPressEffects = guildId(invitesDisabled[21]).useIOSPressEffects(4);
      let items = [canInvite, invitesDisabled, onInvitePress];
      ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
      const items1 = [useEventsButton, onEventsPress, hasUnreadEvents, tmp.badge];
      const memo = onInvitePress.useMemo(() => {
        let tmp = null;
        if (canInvite) {
          const obj = {
            variant: "secondary",
            size: "sm",
            icon: _modDef9715,
            onPress: onInvitePress,
            onPressDisabled: handleInviteDisabledPress,
            accessibilityLabel: null,
            disabled: null,
            maxFontSizeMultiplier: 2,
          };
          const intl = util.intl;
          obj.accessibilityLabel = intl.string(util.t.VINpSK);
          obj.disabled = invitesDisabled;
          tmp = __initData(IconButton.IconButton, obj);
        }
        return tmp;
      }, items);
      const obj4 = { style: tmp.container, children: null };
      if (useButtonComponent) {
        const obj5 = {
          variant: "secondary",
          grow: true,
          shrink: true,
          size: "sm",
          icon: tmp4(tmp3[27]),
          onPress: tmp5,
          text: null,
          maxFontSizeMultiplier: 2,
        };
        let intl2 = tmp2(tmp3[24]).intl;
        obj5.text = intl2.string(tmp2(tmp3[24]).t["5h0QOP"]);
        const items2 = [closure_12(tmp2(tmp3[26]).Button, obj5), memo, tmp8];
        obj4.children = items2;
        let tmp14 = obj4;
      } else {
        const obj6 = { style: null, children: null };
        const items3 = [tmp.search, pressableStyles];
        obj6.style = items3;
        const obj7 = { onPress: tmp5, onPressIn, onPressOut };
        obj6.children = closure_12(tmp2(tmp3[28]).SearchButtonContent, obj7);
        const items4 = [closure_12(tmp4(tmp3[29]).View, obj6)];
        let tmp11Result = null;
        if (canInvite) {
          const obj8 = {
            variant: "tertiary",
            icon: tmp4(tmp3[23]),
            onPress: onInvitePress,
            onPressDisabled: handleInviteDisabledPress,
            accessibilityLabel: null,
            disabled: null,
          };
          let intl = tmp2(tmp3[24]).intl;
          obj8.accessibilityLabel = intl.string(tmp2(tmp3[24]).t.VINpSK);
          obj8.disabled = invitesDisabled;
          tmp11Result = closure_12(tmp2(tmp3[22]).IconButton, obj8);
        }
        items4[1] = tmp11Result;
        obj4.children = items4;
        tmp14 = obj4;
      }
      return closure_13(onEventsPress, tmp14);
    };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guild) => {
        const cResult = guild(576).c(16);
        guild = guild.guild;
        ({ useButtonComponent, useEventsButton } = guild);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildChannelStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== guild) {
          const fn = function s() {
            const channels = GuildChannelStore.getChannels(guild.id);
            return utils_InstantInviteUtils.shouldRenderInvite(channels, guild);
          };
          const items1 = [guild];
          cResult[1] = guild;
          cResult[2] = fn;
          cResult[3] = items1;
          let tmp9 = items1;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[2];
          tmp9 = cResult[3];
        }
        const obj = guild(576);
        const stateFromStores = guild(504).useStateFromStores(first, tmp8, tmp9);
        if (cResult[4] !== guild) {
          class B {
            constructor() {
              channelId = closure_8.getChannelId(guild.id);
              channels = closure_6.getChannels(guild.id);
              obj = closure_0(closure_2[32]);
              result = obj.handleOpenInviteActionsheet(guild, channelId, channels, InstantInviteSources.GUILD_HEADER);
              return;
            }
          }
          cResult[4] = guild;
          cResult[5] = B;
        } else {
          class B {
            constructor() {
              channelId = closure_8.getChannelId(guild.id);
              channels = closure_6.getChannels(guild.id);
              obj = closure_0(closure_2[32]);
              result = obj.handleOpenInviteActionsheet(guild, channelId, channels, InstantInviteSources.GUILD_HEADER);
              return;
            }
          }
        }
        const tmp12 = useStableCallbackDefault(B);
        const tmpResult = guild(504);
        const shouldShowInvitesDisabledNotif = guild(12008).useShouldShowInvitesDisabledNotif(guild);
        useCanSeeEventsInChannelListDefault(guild.id);
        const tmpResult2 = guild(12008);
        ({ hasUnread, handlePress, handleLongPress } = useEventsButtonPropsDefault(guild));
        if (undefined !== useEventsButton && useEventsButton) {
          class B {
            constructor() {
              channelId = closure_8.getChannelId(guild.id);
              channels = closure_6.getChannels(guild.id);
              obj = closure_0(closure_2[32]);
              result = obj.handleOpenInviteActionsheet(guild, channelId, channels, InstantInviteSources.GUILD_HEADER);
              return;
            }
          }
        }
        if (cResult[6] === guild.id) {
          class B {
            constructor() {
              channelId = closure_8.getChannelId(guild.id);
              channels = closure_6.getChannels(guild.id);
              obj = closure_0(closure_2[32]);
              result = obj.handleOpenInviteActionsheet(guild, channelId, channels, InstantInviteSources.GUILD_HEADER);
              return;
            }
          }
        }
        const obj2 = {
          guildId: guild.id,
          canInvite: stateFromStores,
          invitesDisabled: shouldShowInvitesDisabledNotif,
          onInvitePress: tmp12,
          onEventsPress: handlePress,
          onEventsLongPress: handleLongPress,
          hasUnreadEvents: hasUnread,
          useEventsButton: undefined !== useEventsButton && useEventsButton,
          useButtonComponent: undefined !== useButtonComponent && useButtonComponent,
        };
        const tmp15 = useEventsButtonPropsDefault(guild);
        cResult[6] = guild.id;
        cResult[7] = handleLongPress;
        cResult[8] = handlePress;
        cResult[9] = tmp12;
        cResult[10] = hasUnread;
        cResult[11] = stateFromStores;
        cResult[12] = shouldShowInvitesDisabledNotif;
        cResult[13] = undefined !== useEventsButton && useEventsButton;
        cResult[14] = undefined !== useButtonComponent && useButtonComponent;
        cResult[15] = closure_12(closure_16, {
          guildId: guild.id,
          canInvite: stateFromStores,
          invitesDisabled: shouldShowInvitesDisabledNotif,
          onInvitePress: tmp12,
          onEventsPress: handlePress,
          onEventsLongPress: handleLongPress,
          hasUnreadEvents: hasUnread,
          useEventsButton: undefined !== useEventsButton && useEventsButton,
          useButtonComponent: undefined !== useButtonComponent && useButtonComponent,
        });
        const tmp16 = closure_12(closure_16, {
          guildId: guild.id,
          canInvite: stateFromStores,
          invitesDisabled: shouldShowInvitesDisabledNotif,
          onInvitePress: tmp12,
          onEventsPress: handlePress,
          onEventsLongPress: handleLongPress,
          hasUnreadEvents: hasUnread,
          useEventsButton: undefined !== useEventsButton && useEventsButton,
          useButtonComponent: undefined !== useButtonComponent && useButtonComponent,
        });
      }
    : (guild) => {
        guild = guild.guild;
        let flag = guild.useButtonComponent;
        if (flag === undefined) {
          flag = false;
        }
        let flag2 = guild.useEventsButton;
        if (flag2 === undefined) {
          flag2 = false;
        }
        const items = [GuildChannelStore];
        const items1 = [guild];
        const stateFromStores = guild(504).useStateFromStores(
          items,
          () => {
            const channels = GuildChannelStore.getChannels(guild.id);
            return utils_InstantInviteUtils.shouldRenderInvite(channels, guild);
          },
          items1,
        );
        const obj = guild(504);
        const tmp2 = useStableCallbackDefault(() => {
          const channelId = SelectedChannelStore.getChannelId(guild.id);
          const channels = GuildChannelStore.getChannels(guild.id);
          const result = instant_invite_InstantInviteUtils.handleOpenInviteActionsheet(
            guild,
            channelId,
            channels,
            constants2.GUILD_HEADER,
          );
        });
        const shouldShowInvitesDisabledNotif = guild(12008).useShouldShowInvitesDisabledNotif(guild);
        const obj2 = guild(12008);
        const tmp5 = useEventsButtonPropsDefault(guild);
        const obj3 = {
          guildId: guild.id,
          canInvite: stateFromStores,
          invitesDisabled: shouldShowInvitesDisabledNotif,
          onInvitePress: tmp2,
          onEventsPress: tmp5.handlePress,
          onEventsLongPress: tmp5.handleLongPress,
          hasUnreadEvents: tmp5.hasUnread,
          useEventsButton: null,
          useButtonComponent: null,
        };
        if (flag2) {
          flag2 = tmp4;
        }
        obj3.useEventsButton = flag2;
        obj3.useButtonComponent = flag;
        return closure_12(closure_16, obj3);
      },
);
