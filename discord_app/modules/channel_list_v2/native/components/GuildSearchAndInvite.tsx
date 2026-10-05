// === Module 11925: GuildSearchAndInvite ===

// Module 11925 (GuildSearchAndInvite)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import useAlertStore from "useAlertStore" /* 5709 */;
import useStableCallbackDefault from "useStableCallback" /* 6452 */;
import IconButton4 from "IconButton" /* 7575 */;
import AssetRegistryDefault from "AssetRegistry" /* 9276 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9481 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 9484 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9715 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11697 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 11928 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11966 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 12009 */;
import useEventsButtonPropsDefault from "useEventsButtonProps" /* 12011 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let guildId, navigation;

let c10;
let closure_12;
let map1;
let unpackModuleId;
function handleInviteDisabledPress() {
  let paths;
  const lazyResult = react.lazy(() => require("asyncRequire")(paths[11], paths.paths));
  const obj = useAlertStore;
  obj.openAlert("invites-disabled", closure_12(lazyResult, {}));
}
let View = react_native.View;
const SEARCH_BAR_MARGIN_BOTTOM = RedesignChannelListConstants.SEARCH_BAR_MARGIN_BOTTOM;
({ GuildFeatures: c10, InstantInviteSources: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = createStyles.createStyles((arg0) => {
  let num;
  const obj = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: SEARCH_BAR_MARGIN_BOTTOM, flexDirection: "row", gap: num };
  num = 10;
  const tmp3 = arg0;
  if (tmp3) {
    num = nativeDefault.space.PX_12;
  }
  const obj2 = { container: obj, search: { flex: 1 }, badge: size };
  size = { position: "absolute", right: 0, top: 0, width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  return obj2;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let canInvite;
  let guildSearchContext;
  let hasUnreadEvents;
  let intl;
  let intl3;
  let intl4;
  let invitesDisabled;
  let items;
  let items1;
  let onEventsPress;
  let onInvitePress;
  let onPressIn;
  let onPressOut;
  let pressableStyles;
  let str2;
  let useButtonComponent;
  let useEventsButton;
  let obj = guildId(guildSearchContext[15]);
  const cResult = obj.c(39);
  guildId = guildId.guildId;
  ({ canInvite, invitesDisabled, onInvitePress, onEventsPress, hasUnreadEvents, useEventsButton, useButtonComponent } = guildId);
  const tmp4 = closure_14(useButtonComponent);
  let obj2 = guildId(guildSearchContext[16]);
  navigation = obj2.useNavigation();
  let obj3 = guildId(guildSearchContext[17]);
  guildSearchContext = obj3.useGuildSearchContext(guildId);
  if (cResult[0] === guildId) {
    if (cResult[1] === navigation) {
      let tmp7;
      if (cResult[2] === guildSearchContext) {
        tmp7 = cResult[3];
      }
      const tmp9 = navigation(guildSearchContext[20])(tmp7);
      const tmpResult = guildId(guildSearchContext[21]);
      const iOSPressEffects = tmpResult.useIOSPressEffects(4);
      ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
      if (cResult[4] === canInvite) {
        if (cResult[5] === invitesDisabled) {
          let tmp11;
          if (cResult[6] === onInvitePress) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === hasUnreadEvents) {
            if (cResult[9] === onEventsPress) {
              if (cResult[10] === tmp4.badge) {
                let tmp15;
                if (cResult[11] === useEventsButton) {
                  tmp15 = cResult[12];
                }
                if (useButtonComponent) {
                  let tmp38;
                  let tmp40;
                  const _Symbol = Symbol;
                  const container = tmp4.container;
                  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = tmp(tmp2[24]).intl;
                    const stringResult = intl5.string(guildId(guildSearchContext[24]).t["5h0QOP"]);
                    cResult[13] = stringResult;
                    tmp38 = stringResult;
                  } else {
                    tmp38 = cResult[13];
                  }
                  if (cResult[14] !== tmp9) {
                    const obj4 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: navigation(guildSearchContext[27]), onPress: tmp9, text: tmp38, maxFontSizeMultiplier: 2 };
                    const Button = tmp(tmp2[26]).Button;
                    const tmp42 = closure_12(Button, obj4);
                    cResult[14] = tmp9;
                    cResult[15] = tmp42;
                    tmp40 = tmp42;
                  } else {
                    tmp40 = cResult[15];
                  }
                  if (cResult[16] === tmp15) {
                    if (cResult[17] === tmp11) {
                      if (cResult[18] === tmp4.container) {
                        let tmp43;
                        if (cResult[19] === tmp40) {
                          tmp43 = cResult[20];
                        }
                        return tmp43;
                      }
                    }
                  }
                  const obj5 = { style: container, children: items };
                  items = [tmp40, tmp11, tmp15];
                  const tmp46 = closure_13(View, obj5);
                  cResult[16] = tmp15;
                  cResult[17] = tmp11;
                  cResult[18] = tmp4.container;
                  cResult[19] = tmp40;
                  cResult[20] = tmp46;
                  tmp43 = tmp46;
                } else {
                  if (cResult[21] === pressableStyles) {
                    let tmp22;
                    if (cResult[22] === tmp4.search) {
                      tmp22 = cResult[23];
                    }
                    if (cResult[24] === tmp9) {
                      if (cResult[25] === onPressIn) {
                        let tmp23;
                        if (cResult[26] === onPressOut) {
                          tmp23 = cResult[27];
                        }
                        if (cResult[28] === tmp22) {
                          let tmp26;
                          if (cResult[29] === tmp23) {
                            tmp26 = cResult[30];
                          }
                          if (cResult[31] === canInvite) {
                            if (cResult[32] === invitesDisabled) {
                              let tmp29;
                              if (cResult[33] === onInvitePress) {
                                tmp29 = cResult[34];
                              }
                              if (cResult[35] === tmp4.container) {
                                if (cResult[36] === tmp26) {
                                  let tmp33;
                                  if (cResult[37] === tmp29) {
                                    tmp33 = cResult[38];
                                  }
                                  return tmp33;
                                }
                              }
                              const obj6 = { style: tmp4.container, children: items1 };
                              items1 = [tmp26, tmp29];
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
                            const obj7 = { variant: "tertiary", icon: navigation(guildSearchContext[23]), onPress: onInvitePress, onPressDisabled: handleInviteDisabledPress, accessibilityLabel: intl4.string(guildId(guildSearchContext[24]).t.VINpSK), disabled: invitesDisabled };
                            const IconButton3 = tmp(tmp2[22]).IconButton;
                            intl4 = tmp(tmp2[24]).intl;
                            tmp30 = closure_12(IconButton3, obj7);
                          }
                          cResult[31] = canInvite;
                          cResult[32] = invitesDisabled;
                          cResult[33] = onInvitePress;
                          cResult[34] = tmp30;
                          tmp29 = tmp30;
                        }
                        const obj8 = { style: tmp22, children: tmp23 };
                        const tmp28 = closure_12(navigation(guildSearchContext[29]).View, obj8);
                        cResult[28] = tmp22;
                        cResult[29] = tmp23;
                        cResult[30] = tmp28;
                        tmp26 = tmp28;
                      }
                    }
                    const obj9 = { onPress: tmp9, onPressIn, onPressOut };
                    const tmp25 = closure_12(guildId(guildSearchContext[28]).SearchButtonContent, obj9);
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
            const obj10 = { variant: "secondary", size: "sm", icon: navigation(guildSearchContext[25]), accessibilityLabel: str2 + intl3.string(guildId(guildSearchContext[24]).t.tlopTM), onPress: onEventsPress, maxFontSizeMultiplier: 2 };
            const IconButton2 = tmp(tmp2[22]).IconButton;
            str2 = "";
            if (hasUnreadEvents) {
              const intl2 = tmp(tmp2[24]).intl;
              const _HermesInternal = HermesInternal;
              str2 = "" + intl2.string(tmp(tmp2[24]).t.hcaVYl) + ", ";
            }
            intl3 = tmp(tmp2[24]).intl;
            const items3 = [closure_12(IconButton2, obj10), ];
            let tmp19Result = hasUnreadEvents;
            if (tmp19Result) {
              const obj11 = { style: tmp4.badge, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true };
              tmp19Result = closure_12(View, obj11);
            }
            const obj12 = { children: items3 };
            items3[1] = tmp19Result;
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
        const obj13 = { variant: "secondary", size: "sm", icon: navigation(guildSearchContext[23]), onPress: onInvitePress, onPressDisabled: handleInviteDisabledPress, accessibilityLabel: intl.string(guildId(guildSearchContext[24]).t.VINpSK), disabled: invitesDisabled, maxFontSizeMultiplier: 2 };
        const IconButton = tmp(tmp2[22]).IconButton;
        intl = tmp(tmp2[24]).intl;
        tmp12 = closure_12(IconButton, obj13);
      }
      cResult[4] = canInvite;
      cResult[5] = invitesDisabled;
      cResult[6] = onInvitePress;
      cResult[7] = tmp12;
      tmp11 = tmp12;
    }
  }
  const fn = function c() {
    let directoryChannelIds;
    const guild = GuildStore.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.HUB);
    }
    if (hasItem) {
      directoryChannelIds = GuildChannelStore.getDirectoryChannelIds(guildId);
    } else {
      directoryChannelIds = [];
    }
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = ChannelStore.getChannel(directoryChannelIds[0]);
    }
    if (null != channel) {
      const obj3 = { channel };
      const obj2 = GuildDirectorySearchModalActionCreatorsDefault;
      obj2.open(obj3);
    } else {
      const obj = SearchPlatformUtilsDefault;
      const result = obj.navigateToSearchWithPrefetch(navigation, guildSearchContext);
    }
  };
  cResult[0] = guildId;
  cResult[1] = navigation;
  cResult[2] = guildSearchContext;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((guildId) => {
  let intl;
  let intl2;
  let items3;
  let obj7;
  let onPressIn;
  let onPressOut;
  let pressableStyles;
  let tmp14;
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
  let obj = guildId(invitesDisabled[16]);
  let closure_8 = obj.useNavigation();
  let obj2 = guildId(invitesDisabled[17]);
  let closure_9 = obj2.useGuildSearchContext(guildId);
  const tmp5 = canInvite(invitesDisabled[20])(() => {
    let directoryChannelIds;
    const guild = GuildStore.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.HUB);
    }
    if (hasItem) {
      directoryChannelIds = GuildChannelStore.getDirectoryChannelIds(guildId);
    } else {
      directoryChannelIds = [];
    }
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = ChannelStore.getChannel(directoryChannelIds[0]);
    }
    if (null != channel) {
      const obj3 = { channel };
      const obj2 = GuildDirectorySearchModalActionCreatorsDefault;
      obj2.open(obj3);
    } else {
      const obj = SearchPlatformUtilsDefault;
      const result = obj.navigateToSearchWithPrefetch(closure_8, closure_9);
    }
  });
  let obj3 = guildId(invitesDisabled[21]);
  const iOSPressEffects = obj3.useIOSPressEffects(4);
  let items = [canInvite, invitesDisabled, onInvitePress];
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  const items1 = [useEventsButton, onEventsPress, hasUnreadEvents, tmp.badge];
  const memo = onInvitePress.useMemo(() => {
    let intl;
    let tmp = null;
    if (canInvite) {
      const obj = { variant: "secondary", size: "sm", icon: AssetRegistryDefault2, onPress: onInvitePress, onPressDisabled: handleInviteDisabledPress, accessibilityLabel: intl.string(intl6.t.VINpSK), disabled: invitesDisabled, maxFontSizeMultiplier: 2 };
      const IconButton = IconButton4.IconButton;
      intl = intl6.intl;
      tmp = closure_12(IconButton, obj);
    }
    return tmp;
  }, items);
  const obj4 = { style: tmp.container, children: null };
  const tmp10 = onEventsPress;
  if (useButtonComponent) {
    const obj5 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: canInvite(invitesDisabled[27]), onPress: tmp5, text: intl2.string(guildId(invitesDisabled[24]).t["5h0QOP"]), maxFontSizeMultiplier: 2 };
    const Button = tmp2(tmp3[26]).Button;
    intl2 = tmp2(tmp3[24]).intl;
    const items2 = [closure_12(Button, obj5), memo, tmp8];
    obj4.children = items2;
    tmp14 = obj4;
  } else {
    const obj6 = { style: items3, children: closure_12(guildId(invitesDisabled[28]).SearchButtonContent, obj7) };
    items3 = [tmp.search, pressableStyles];
    View = tmp4(tmp3[29]).View;
    obj7 = { onPress: tmp5, onPressIn, onPressOut };
    const items4 = [closure_12(View, obj6), ];
    let tmp11Result = null;
    if (canInvite) {
      const obj8 = { variant: "tertiary", icon: canInvite(invitesDisabled[23]), onPress: onInvitePress, onPressDisabled: handleInviteDisabledPress, accessibilityLabel: intl.string(guildId(invitesDisabled[24]).t.VINpSK), disabled: invitesDisabled };
      let IconButton = tmp2(tmp3[22]).IconButton;
      intl = tmp2(tmp3[24]).intl;
      tmp11Result = closure_12(IconButton, obj8);
    }
    items4[1] = tmp11Result;
    obj4.children = items4;
    tmp14 = obj4;
  }
  return closure_13(tmp10, tmp14);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let first;
  let handleLongPress;
  let handlePress;
  let hasUnread;
  let tmp8;
  let tmp9;
  let useButtonComponent;
  let useEventsButton;
  let obj = guild(576);
  const cResult = obj.c(16);
  guild = guild.guild;
  ({ useButtonComponent, useEventsButton } = guild);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild) {
    const fn = function s() {
      const channels = GuildChannelStore.getChannels(guild.id);
      const obj = utils_InstantInviteUtils;
      return obj.shouldRenderInvite(channels, guild);
    };
    const items1 = [guild];
    cResult[1] = guild;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = guild(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] !== guild) {
    class B {
      constructor() {
        const channelId = SelectedChannelStore.getChannelId(guild.id);
        const channels = GuildChannelStore.getChannels(guild.id);
        const obj = instant_invite_InstantInviteUtils;
        const result = obj.handleOpenInviteActionsheet(guild, channelId, channels, unpackModuleId.GUILD_HEADER);
      }
    }
    cResult[4] = guild;
    cResult[5] = B;
  } else {
    class B {
      constructor() {
        const channelId = SelectedChannelStore.getChannelId(guild.id);
        const channels = GuildChannelStore.getChannels(guild.id);
        const obj = instant_invite_InstantInviteUtils;
        const result = obj.handleOpenInviteActionsheet(guild, channelId, channels, unpackModuleId.GUILD_HEADER);
      }
    }
  }
  const tmp12 = useStableCallbackDefault(B);
  const tmpResult2 = guild(12008);
  const shouldShowInvitesDisabledNotif = tmpResult2.useShouldShowInvitesDisabledNotif(guild);
  useCanSeeEventsInChannelListDefault(guild.id);
  ({ hasUnread, handlePress, handleLongPress } = useEventsButtonPropsDefault(guild));
  useEventsButtonPropsDefault(guild);
  if (undefined !== useEventsButton && useEventsButton) {
    class B {
      constructor() {
        const channelId = SelectedChannelStore.getChannelId(guild.id);
        const channels = GuildChannelStore.getChannels(guild.id);
        const obj = instant_invite_InstantInviteUtils;
        const result = obj.handleOpenInviteActionsheet(guild, channelId, channels, unpackModuleId.GUILD_HEADER);
      }
    }
  }
  if (cResult[6] === guild.id) {
    class B {
      constructor() {
        const channelId = SelectedChannelStore.getChannelId(guild.id);
        const channels = GuildChannelStore.getChannels(guild.id);
        const obj = instant_invite_InstantInviteUtils;
        const result = obj.handleOpenInviteActionsheet(guild, channelId, channels, unpackModuleId.GUILD_HEADER);
      }
    }
  }
  const obj2 = { guildId: guild.id, canInvite: stateFromStores, invitesDisabled: shouldShowInvitesDisabledNotif, onInvitePress: tmp12, onEventsPress: handlePress, onEventsLongPress: handleLongPress, hasUnreadEvents: hasUnread, useEventsButton: undefined !== useEventsButton && useEventsButton, useButtonComponent: undefined !== useButtonComponent && useButtonComponent };
  cResult[6] = guild.id;
  cResult[7] = handleLongPress;
  cResult[8] = handlePress;
  cResult[9] = tmp12;
  cResult[10] = hasUnread;
  cResult[11] = stateFromStores;
  cResult[12] = shouldShowInvitesDisabledNotif;
  cResult[13] = undefined !== useEventsButton && useEventsButton;
  cResult[14] = undefined !== useButtonComponent && useButtonComponent;
  cResult[15] = closure_12(closure_16, obj2);
  closure_12(closure_16, obj2);
}) : ((guild) => {
  guild = guild.guild;
  let flag = guild.useButtonComponent;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guild.useEventsButton;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = guild(504);
  const items = [GuildChannelStore];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channels = GuildChannelStore.getChannels(guild.id);
    const obj = utils_InstantInviteUtils;
    return obj.shouldRenderInvite(channels, guild);
  }, items1);
  const tmp2 = useStableCallbackDefault(() => {
    const channelId = SelectedChannelStore.getChannelId(guild.id);
    const channels = GuildChannelStore.getChannels(guild.id);
    const obj = instant_invite_InstantInviteUtils;
    const result = obj.handleOpenInviteActionsheet(guild, channelId, channels, unpackModuleId.GUILD_HEADER);
  });
  const obj2 = guild(12008);
  const shouldShowInvitesDisabledNotif = obj2.useShouldShowInvitesDisabledNotif(guild);
  const tmp4 = useCanSeeEventsInChannelListDefault(guild.id);
  const tmp5 = useEventsButtonPropsDefault(guild);
  const obj3 = { guildId: guild.id, canInvite: stateFromStores, invitesDisabled: shouldShowInvitesDisabledNotif, onInvitePress: tmp2, onEventsPress: tmp5.handlePress, onEventsLongPress: tmp5.handleLongPress, hasUnreadEvents: tmp5.hasUnread, useEventsButton: flag2, useButtonComponent: flag };
  if (flag2) {
    flag2 = tmp4;
  }
  return closure_12(closure_16, obj3);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx");

export default memoResult;