// === Module 12452: GuildWelcomeActionSheet ===

// Module 12452 (GuildWelcomeActionSheet)
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1096 */;
import router_utils from "router_utils" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import WelcomeScreenStore2 from "WelcomeScreenStore" /* 12449 */;
import WelcomeScreenConstants from "WelcomeScreenConstants" /* 12453 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmojiStore_mod from "EmojiStore" /* 5638 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import TextStyles_mod from "TextStyles" /* 5915 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const WelcomeScreenStore = WelcomeScreenStore2;
let c2, dependencyMap, guildId, has_custom_emojis, welcomeChannel;

let Fonts;
let closure_14;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
let EmojiStore = EmojiStore_mod;
const NO_WELCOME_SCREEN = WelcomeScreenStore2.NO_WELCOME_SCREEN;
const WELCOME_SCREEN_TYPE = WelcomeScreenConstants.WELCOME_SCREEN_TYPE;
({ AnalyticEvents: map1, Fonts, Routes: closure_14 } = Constants);
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const Permissions = Constants2.Permissions;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, guildIcon: size, header: obj3, headerGuildName: obj4, guildDescription: { textAlign: "center", marginBottom: 30 }, welcomeChannel: obj5, channelsTitle: { alignSelf: "flex-start" }, emoji: { width: 24, height: 24 }, placeholderEmojiWrapper: obj6 };
obj2 = { alignItems: "center", justifyContent: "center", paddingHorizontal: 16, width: "100%", paddingVertical: 32, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.sm, width: 64, height: 64, marginBottom: 16 };
obj3 = { marginBottom: 8, textAlign: "center" };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 24));
obj4 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: nativeDefault.radii.sm };
obj6 = { padding: 4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs };
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((welcomeChannel) => {
  let first;
  let stateFromStores;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp17;
  let tmp7;
  const tmp = welcomeChannel;
  let obj = welcomeChannel(stateFromStores[16]);
  const cResult = obj.c(39);
  welcomeChannel = welcomeChannel.welcomeChannel;
  const trackOptionSelect = welcomeChannel.trackOptionSelect;
  closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== welcomeChannel.channel_id) {
    const fn = function o() {
      return ChannelStore.getChannel(welcomeChannel.channel_id);
    };
    cResult[1] = welcomeChannel.channel_id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(stateFromStores[17]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  trackOptionSelect(stateFromStores[18])(stateFromStores, true);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function p() {
      const canResult = null != stateFromStores && PermissionStore.can(Permissions.VIEW_CHANNEL, tmp);
      return canResult;
    };
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult3 = tmp(stateFromStores[17]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp10, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [EmojiStore];
    cResult[6] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== welcomeChannel.emoji_id) {
    class A {
      constructor() {
        let customEmojiById = null;
        if (null != welcomeChannel.emoji_id) {
          customEmojiById = EmojiStore.getCustomEmojiById(tmp.emoji_id);
        }
        return customEmojiById;
      }
    }
    const items3 = [welcomeChannel.emoji_id];
    cResult[7] = welcomeChannel.emoji_id;
    cResult[8] = A;
    cResult[9] = items3;
    tmp17 = items3;
  } else {
    class A {
      constructor() {
        let customEmojiById = null;
        if (null != welcomeChannel.emoji_id) {
          customEmojiById = EmojiStore.getCustomEmojiById(tmp.emoji_id);
        }
        return customEmojiById;
      }
    }
    tmp17 = cResult[9];
  }
  const tmpResult4 = tmp(stateFromStores[17]);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp14, A, tmp17);
  if (cResult[10] === stateFromStores) {
    class A {
      constructor() {
        let customEmojiById = null;
        if (null != welcomeChannel.emoji_id) {
          customEmojiById = EmojiStore.getCustomEmojiById(tmp.emoji_id);
        }
        return customEmojiById;
      }
    }
    if (null != stateFromStores) {
      class A {
        constructor() {
          let customEmojiById = null;
          if (null != welcomeChannel.emoji_id) {
            customEmojiById = EmojiStore.getCustomEmojiById(tmp.emoji_id);
          }
          return customEmojiById;
        }
      }
    }
    return null;
  }
  class I {
    constructor() {
      if (null != stateFromStores) {
        trackOptionSelect();
        const obj = router_utils;
        obj.transitionTo(authStore2.CHANNEL(stateFromStores.guild_id, stateFromStores.id));
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
      }
    }
  }
  cResult[10] = stateFromStores;
  cResult[11] = trackOptionSelect;
  cResult[12] = I;
}) : ((welcomeChannel) => {
  let Icon;
  let obj12;
  let obj5;
  let obj6;
  let obj9;
  let tmp12Result;
  let tmp5Result4;
  welcomeChannel = welcomeChannel.welcomeChannel;
  const trackOptionSelect = welcomeChannel.trackOptionSelect;
  let stateFromStores;
  const tmp = closure_19();
  let obj = welcomeChannel(stateFromStores[17]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(welcomeChannel.channel_id));
  const tmp6 = trackOptionSelect(stateFromStores[18])(stateFromStores, true);
  let obj2 = welcomeChannel(stateFromStores[17]);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const canResult = null != stateFromStores && PermissionStore.can(Permissions.VIEW_CHANNEL, tmp);
    return canResult;
  });
  const items2 = [EmojiStore];
  const items3 = [welcomeChannel.emoji_id];
  const obj3 = welcomeChannel(stateFromStores[17]);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let customEmojiById = null;
    if (null != welcomeChannel.emoji_id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.emoji_id);
    }
    return customEmojiById;
  }, items3);
  const items4 = [stateFromStores, trackOptionSelect];
  let tmp12Result2 = null;
  if (null != stateFromStores) {
    tmp12Result2 = null;
    if (stateFromStores1) {
      let tmp14;
      let tmp12;
      if (null != stateFromStores2) {
        const obj4 = { style: tmp.emoji, source: obj5, resizeMode: "contain" };
        obj5 = { uri: tmp5Result4.getEmojiURL(obj6) };
        obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
        ({ id: obj11.id, animated: obj11.animated } = stateFromStores2);
        const tmp5Result = trackOptionSelect(stateFromStores[22]);
        tmp5Result4 = trackOptionSelect(stateFromStores[21]);
        tmp14 = closure_17(tmp5Result, obj4);
        tmp12 = closure_17;
      } else {
        if (null != welcomeChannel.emoji_name) {
          const getByName = trackOptionSelect(tmp3[23]).getByName;
          trackOptionSelect(stateFromStores[23]);
          const tmp5Result6 = trackOptionSelect(stateFromStores[23]);
          if (null != getByName(tmp5Result6.convertSurrogateToName(welcomeChannel.emoji_name, false))) {
            const obj7 = { style: tmp.emoji, variant: "text-sm/medium", children: welcomeChannel.emoji_name };
            tmp14 = closure_17(tmp2(tmp3[24]).Text, obj7);
            tmp12 = closure_17;
          }
        }
        tmp12 = closure_17;
        const obj8 = { style: tmp.placeholderEmojiWrapper, children: closure_17(Icon, obj9) };
        obj9 = { size: welcomeChannel(stateFromStores[25]).Icon.Sizes.REFRESH_SMALL_16, source: trackOptionSelect(stateFromStores[26]) };
        Icon = tmp2(tmp3[25]).Icon;
        tmp14 = closure_17(closure_4, obj8);
      }
      const obj10 = { DEPRECATED_style: tmp.welcomeChannel, leading: tmp14, label: tmp12(welcomeChannel(stateFromStores[24]).Text, obj12), subLabel: tmp12Result, onPress: tmp9, trailing: tmp12(welcomeChannel(stateFromStores[27]).FormRow.Arrow, {}) };
      const FormRow = tmp2(tmp3[27]).FormRow;
      tmp12Result = null;
      obj12 = { variant: "text-sm/semibold", color: "interactive-text-active", children: welcomeChannel.description };
      if (null != stateFromStores) {
        const obj13 = { variant: "text-sm/medium", color: "text-default", children: tmp6 };
        tmp12Result = tmp12(tmp2(tmp3[24]).Text, obj13);
      }
      tmp12Result2 = tmp12(FormRow, obj10);
    }
  }
  return tmp12Result2;
});
let closure_20 = tmp10;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_6;
  let first;
  let tmp11;
  let tmp7;
  let tmp9;
  let tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(58);
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  dependencyMap = closure_19();
  closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [WelcomeScreenStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function j() {
      const obj = { welcomeScreen: WelcomeScreenStore.get(guildId), fetching: WelcomeScreenStore.isFetching(), hasError: WelcomeScreenStore.hasError() };
      return obj;
    };
    cResult[4] = guildId;
    cResult[5] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult2 = tmp(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp9, tmp11);
  const welcomeScreen = stateFromStoresObject.welcomeScreen;
  const fetching = stateFromStoresObject.fetching;
  const hasError = stateFromStoresObject.hasError;
  if (cResult[6] === guildId) {
    let tmp13;
    let tmp14;
    if (cResult[7] === welcomeScreen) {
      tmp13 = cResult[8];
      tmp14 = cResult[9];
    }
    const effect = welcomeScreen.useEffect(tmp13, tmp14);
    if (cResult[10] === fetching) {
      let tmp16;
      let tmp17;
      if (cResult[11] === hasError) {
        tmp16 = cResult[12];
        tmp17 = cResult[13];
      }
      const effect1 = obj4.useEffect(tmp16, tmp17);
      if (cResult[14] === guildId) {
        let tmp19;
        let tmp20;
        let tmp29;
        if (cResult[15] === welcomeScreen) {
          tmp19 = cResult[16];
          tmp20 = cResult[17];
        }
        const effect2 = obj4.useEffect(tmp20, tmp19);
        if (cResult[18] !== welcomeScreen) {
          class D {
            constructor() {
              if (welcomeScreen === NO_WELCOME_SCREEN) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet();
              }
            }
          }
          const items2 = [welcomeScreen];
          class O {
            constructor() {
              if (null != welcomeScreen) {
                let obj = DispatcherDefault;
                obj.wait(() => {
                  const obj = guildId(has_custom_emojis[29]);
                  return obj.welcomeScreenViewed(closure_1_0);
                });
              }
            }
          }
          class R {
            constructor() {
              const tmp = false === fetching && true === hasError;
              if (tmp) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet();
              }
            }
          }
          cResult[19] = D;
          cResult[20] = items2;
          class G {
            constructor(index) {
              if (null != welcomeScreen) {
                const items = [];
                const items1 = [];
                has_custom_emojis = false;
                const welcome_channels = welcomeScreen.welcome_channels;
                const item = welcome_channels.forEach((description) => {
                  items.push(description.description);
                  items1.push(description.channel_id);
                  if (null != description.emoji_id) {
                    c2 = true;
                  }
                });
                const obj2 = { index, guild_id: guildId, options: items, options_channel_ids: items1, guild_description: welcomeScreen.description, has_custom_emojis };
                const obj = AnalyticsUtilsDefault;
                obj.track(map1.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj2);
              }
            }
          }
        } else {
          class D {
            constructor() {
              if (welcomeScreen === NO_WELCOME_SCREEN) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet();
              }
            }
          }
        }
        class O {
          constructor() {
            if (null != welcomeScreen) {
              let obj = DispatcherDefault;
              obj.wait(() => {
                const obj = guildId(has_custom_emojis[29]);
                return obj.welcomeScreenViewed(closure_1_0);
              });
            }
          }
        }
        class R {
          constructor() {
            const tmp = false === fetching && true === hasError;
            if (tmp) {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
          }
        }
        const effect3 = obj4.useEffect(tmp25, tmp26);
        if (cResult[24] !== onHide) {
          class W {
            constructor() {
              return () => {
                if (onHide != null) {
                  tmp();
                }
              };
            }
          }
          const items3 = [onHide];
          class O {
            constructor() {
              if (null != welcomeScreen) {
                let obj = DispatcherDefault;
                obj.wait(() => {
                  const obj = guildId(has_custom_emojis[29]);
                  return obj.welcomeScreenViewed(closure_1_0);
                });
              }
            }
          }
          class R {
            constructor() {
              const tmp = false === fetching && true === hasError;
              if (tmp) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet();
              }
            }
          }
          cResult[25] = W;
          cResult[26] = items3;
          class G {
            constructor(index) {
              if (null != welcomeScreen) {
                const items = [];
                const items1 = [];
                has_custom_emojis = false;
                const welcome_channels = welcomeScreen.welcome_channels;
                const item = welcome_channels.forEach((description) => {
                  items.push(description.description);
                  items1.push(description.channel_id);
                  if (null != description.emoji_id) {
                    c2 = true;
                  }
                });
                const obj2 = { index, guild_id: guildId, options: items, options_channel_ids: items1, guild_description: welcomeScreen.description, has_custom_emojis };
                const obj = AnalyticsUtilsDefault;
                obj.track(map1.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj2);
              }
            }
          }
        } else {
          class W {
            constructor() {
              return () => {
                if (onHide != null) {
                  tmp();
                }
              };
            }
          }
          tmp29 = cResult[26];
        }
        const effect4 = obj4.useEffect(W, tmp29);
        if (cResult[27] === guildId) {
          class W {
            constructor() {
              return () => {
                if (onHide != null) {
                  tmp();
                }
              };
            }
          }
          EmojiStore = G;
          class O {
            constructor() {
              if (null != welcomeScreen) {
                let obj = DispatcherDefault;
                obj.wait(() => {
                  const obj = guildId(has_custom_emojis[29]);
                  return obj.welcomeScreenViewed(closure_1_0);
                });
              }
            }
          }
          class R {
            constructor() {
              const tmp = false === fetching && true === hasError;
              if (tmp) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet();
              }
            }
          }
        }
        class G {
          constructor(index) {
            if (null != welcomeScreen) {
              const items = [];
              const items1 = [];
              has_custom_emojis = false;
              const welcome_channels = welcomeScreen.welcome_channels;
              const item = welcome_channels.forEach((description) => {
                items.push(description.description);
                items1.push(description.channel_id);
                if (null != description.emoji_id) {
                  c2 = true;
                }
              });
              const obj2 = { index, guild_id: guildId, options: items, options_channel_ids: items1, guild_description: welcomeScreen.description, has_custom_emojis };
              const obj = AnalyticsUtilsDefault;
              obj.track(map1.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj2);
            }
          }
        }
        cResult[27] = guildId;
        cResult[28] = welcomeScreen;
        cResult[29] = G;
      }
      class O {
        constructor() {
          if (null != welcomeScreen) {
            let obj = DispatcherDefault;
            obj.wait(() => {
              const obj = guildId(has_custom_emojis[29]);
              return obj.welcomeScreenViewed(closure_1_0);
            });
          }
        }
      }
      class R {
        constructor() {
          const tmp = false === fetching && true === hasError;
          if (tmp) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      tmp21[0] = guildId;
      tmp21[1] = welcomeScreen;
      cResult[14] = guildId;
      cResult[15] = welcomeScreen;
      cResult[16] = tmp21;
      cResult[17] = O;
      tmp20 = O;
      tmp19 = tmp21;
    }
    class R {
      constructor() {
        const tmp = false === fetching && true === hasError;
        if (tmp) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
      }
    }
    const items4 = [fetching, hasError];
    cResult[11] = hasError;
    cResult[12] = R;
    cResult[13] = items4;
    tmp17 = items4;
    tmp16 = R;
  }
  const fn3 = function v() {
    if (null == welcomeScreen) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = guildId(has_custom_emojis[29]);
        return obj.fetchWelcomeScreen(closure_1_0);
      });
    }
  };
  const items5 = [guildId, welcomeScreen];
  cResult[6] = guildId;
  cResult[7] = welcomeScreen;
  cResult[8] = fn3;
  cResult[9] = items5;
  tmp14 = items5;
  tmp13 = fn3;
}) : ((guildId) => {
  let intl;
  let items9;
  let obj4;
  let obj7;
  let str;
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  let tmp = closure_19();
  dependencyMap = tmp;
  let obj = guildId(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(504);
  let items1 = [WelcomeScreenStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { welcomeScreen: WelcomeScreenStore.get(guildId), fetching: WelcomeScreenStore.isFetching(), hasError: WelcomeScreenStore.hasError() };
    return obj;
  });
  const welcomeScreen = stateFromStoresObject.welcomeScreen;
  const fetching = stateFromStoresObject.fetching;
  const hasError = stateFromStoresObject.hasError;
  const items2 = [guildId, welcomeScreen];
  const effect = welcomeScreen.useEffect(() => {
    if (null == welcomeScreen) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = guildId(has_custom_emojis[29]);
        return obj.fetchWelcomeScreen(closure_1_0);
      });
    }
  }, items2);
  const items3 = [fetching, hasError];
  const effect1 = welcomeScreen.useEffect(() => {
    const tmp = false === fetching && true === hasError;
    if (tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }, items3);
  const items4 = [guildId, welcomeScreen];
  const effect2 = welcomeScreen.useEffect(() => {
    if (null != welcomeScreen) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = guildId(has_custom_emojis[29]);
        return obj.welcomeScreenViewed(closure_1_0);
      });
    }
  }, items4);
  const items5 = [welcomeScreen];
  const effect3 = welcomeScreen.useEffect(() => {
    if (welcomeScreen === NO_WELCOME_SCREEN) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }, items5);
  const items6 = [guildId];
  const effect4 = welcomeScreen.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: WELCOME_SCREEN_TYPE, guild_id: guildId };
    obj.track(map1.OPEN_MODAL, obj2);
  }, items6);
  const items7 = [onHide];
  const effect5 = welcomeScreen.useEffect(() => () => {
    if (onHide != null) {
      tmp();
    }
  }, items7);
  const items8 = [guildId, welcomeScreen];
  let closure_6 = welcomeScreen.useCallback((index) => {
    if (null != welcomeScreen) {
      const items = [];
      const items1 = [];
      has_custom_emojis = false;
      const welcome_channels = welcomeScreen.welcome_channels;
      const item = welcome_channels.forEach((description) => {
        items.push(description.description);
        items1.push(description.channel_id);
        if (null != description.emoji_id) {
          c2 = true;
        }
      });
      const obj2 = { index, guild_id: guildId, options: items, options_channel_ids: items1, guild_description: welcomeScreen.description, has_custom_emojis };
      const obj = AnalyticsUtilsDefault;
      obj.track(map1.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj2);
    }
  }, items8);
  let tmp12 = null;
  if (null != stateFromStores) {
    tmp12 = null;
    if (null != welcomeScreen) {
      const obj3 = { startExpanded: true, children: closure_18(hasError, obj4) };
      obj4 = { contentContainerStyle: tmp.container, children: items9 };
      const ActionSheet = tmp2(6701).ActionSheet;
      const obj5 = { style: tmp.guildIcon, guild: stateFromStores, size: onHide(12386).Sizes.MEDIUM, textScale: 2 };
      const tmp17 = onHide(12386);
      items9 = [closure_17(tmp17, obj5), , , , ];
      const obj6 = { style: tmp.header, variant: "heading-xl/extrabold", color: "text-default", children: intl.format(guildId(1126).t["0aydCN"], obj7) };
      const Text = tmp2(4886).Text;
      intl = tmp2(1126).intl;
      obj7 = {
        guildName: stateFromStores.name,
        guildNameHook(children, arg1) {
              const obj = { style: has_custom_emojis.headerGuildName, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children };
              return closure_17(Text_Text.Text, obj, arg1);
            }
      };
      items9[1] = closure_17(Text, obj6);
      const obj8 = { style: tmp.guildDescription, variant: "text-sm/medium", color: "text-default", children: welcomeScreen.description };
      items9[2] = closure_17(guildId(4886).Text, obj8);
      const obj9 = { style: tmp.channelsTitle, variant: "eyebrow", color: "text-default", children: str.toUpperCase() };
      const Text2 = tmp2(4886).Text;
      const intl2 = tmp2(1126).intl;
      str = intl2.string(guildId(1126).t["haj5+i"]);
      items9[3] = closure_17(Text2, obj9);
      let welcome_channels = welcomeScreen.welcome_channels;
      items9[4] = welcome_channels.map((welcomeChannel, index) => {
        let closure_0 = index;
        const obj = {
          welcomeChannel,
          trackOptionSelect() {
            return closure_6(index);
          }
        };
        return closure_1_17(closure_1_20, obj, index);
      });
      tmp12 = closure_17(ActionSheet, obj3);
    }
  }
  return tmp12;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/welcome_screen/native/GuildWelcomeActionSheet.tsx");

export default tmp11;
export const WelcomeChannelRow = tmp10;