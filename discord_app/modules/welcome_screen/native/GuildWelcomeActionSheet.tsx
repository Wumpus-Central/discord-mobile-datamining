// === Module 12503: GuildWelcomeActionSheet ===

// Module 12503 (GuildWelcomeActionSheet)
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5994 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import WelcomeScreenStore from "WelcomeScreenStore" /* 12500 */;
import TextStyles_mod from "TextStyles" /* 5903 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const NO_WELCOME_SCREEN = fn(12500).NO_WELCOME_SCREEN;
const WELCOME_SCREEN_TYPE = fn(12504).WELCOME_SCREEN_TYPE;
const Constants = fn(1085);
({ AnalyticEvents: map1, Fonts, Routes: closure_14 } = Constants);
const EMOJI_URL_BASE_SIZE = fn(1393).EMOJI_URL_BASE_SIZE;
const Permissions = fn(1096).Permissions;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { alignItems: "center", justifyContent: "center", paddingHorizontal: 16, width: "100%", paddingVertical: 32, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, guildIcon: null, header: null, headerGuildName: null, guildDescription: null, welcomeChannel: null, channelsTitle: null, emoji: null, placeholderEmojiWrapper: null };
let size = { borderRadius: nativeDefault.radii.sm, width: 64, height: 64, marginBottom: 16 };
obj2.guildIcon = size;
let obj4 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 24));
obj4.marginBottom = 8;
obj4.textAlign = "center";
obj2.header = obj4;
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj2.headerGuildName = {};
obj2.guildDescription = { textAlign: "center", marginBottom: 30 };
let obj3 = { alignItems: "center", justifyContent: "center", paddingHorizontal: 16, width: "100%", paddingVertical: 32, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj5 = {};
obj2.welcomeChannel = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: nativeDefault.radii.sm };
obj2.channelsTitle = { alignSelf: "flex-start" };
obj2.emoji = { width: 24, height: 24 };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: nativeDefault.radii.sm };
obj2.placeholderEmojiWrapper = { padding: 4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs };
let closure_19 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function WelcomeChannelRow(welcomeChannel) {
  const cResult = welcomeChannel(stateFromStores[16]).c(39);
  welcomeChannel = welcomeChannel.welcomeChannel;
  const trackOptionSelect = welcomeChannel.trackOptionSelect;
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== welcomeChannel.channel_id) {
    const fn = function o() {
      return ChannelStore.getChannel(welcomeChannel.channel_id);
    };
    cResult[1] = welcomeChannel.channel_id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = welcomeChannel(stateFromStores[16]);
  stateFromStores = welcomeChannel(stateFromStores[17]).useStateFromStores(first, tmp7);
  let emoji = trackOptionSelect;
  const tmp9 = trackOptionSelect(stateFromStores[18])(stateFromStores, true);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function p() {
      let canResult = null != stateFromStores;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, tmp);
      }
      return canResult;
    };
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult = welcomeChannel(stateFromStores[17]);
  const stateFromStores1 = welcomeChannel(stateFromStores[17]).useStateFromStores(tmp10, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [EmojiStore];
    cResult[6] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== welcomeChannel.emoji_id) {
    const fn3 = function b() {
      let customEmojiById = null;
      if (null != welcomeChannel.emoji_id) {
        customEmojiById = EmojiStore.getCustomEmojiById(tmp.emoji_id);
      }
      return customEmojiById;
    };
    const items3 = [welcomeChannel.emoji_id];
    cResult[7] = welcomeChannel.emoji_id;
    cResult[8] = fn3;
    cResult[9] = items3;
    let tmp17 = items3;
    let tmp16 = fn3;
  } else {
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  const tmpResult3 = welcomeChannel(stateFromStores[17]);
  const stateFromStores2 = welcomeChannel(stateFromStores[17]).useStateFromStores(tmp14, tmp16, tmp17);
  if (cResult[10] === stateFromStores) {
    if (cResult[11] === trackOptionSelect) {
      let tmp19 = cResult[12];
    }
    if (null != stateFromStores) {
      if (stateFromStores1) {
        if (null != stateFromStores2) {
          if (cResult[13] === stateFromStores2.animated) {
            if (cResult[14] === stateFromStores2.id) {
              let tmp32 = cResult[15];
            }
            if (cResult[16] !== tmp32) {
              let obj2 = { uri: tmp32 };
              cResult[16] = tmp32;
              cResult[17] = obj2;
              let tmp35 = obj2;
            } else {
              tmp35 = cResult[17];
            }
            if (cResult[18] === tmp4.emoji) {
            }
            const obj3 = { style: tmp31, source: tmp35, resizeMode: "contain" };
            const tmp38 = closure_17(emoji(tmp2[22]), obj3);
            emoji = tmp4.emoji;
            cResult[18] = emoji;
            cResult[19] = tmp35;
            cResult[20] = tmp38;
          }
          const obj4 = { id: null, animated: null, size: null };
          ({ id: obj11.id, animated: obj11.animated } = stateFromStores2);
          obj4.size = EMOJI_URL_BASE_SIZE;
          const emojiURL = emoji(tmp2[21]).getEmojiURL(obj4);
          cResult[13] = stateFromStores2.animated;
          cResult[14] = stateFromStores2.id;
          cResult[15] = emojiURL;
          tmp32 = emojiURL;
          const emojiResult = emoji(tmp2[21]);
        } else {
          if (null != welcomeChannel.emoji_name) {
            const emojiResult1 = emoji(tmp2[23]);
            if (null != emojiResult1.getByName(emojiResult2.convertSurrogateToName(welcomeChannel.emoji_name, false))) {
              if (cResult[21] === tmp4.emoji) {
                if (cResult[22] === welcomeChannel.emoji_name) {
                  let tmp28 = cResult[23];
                }
                let tmp24 = tmp28;
              }
              const obj5 = { style: tmp4.emoji, variant: "text-sm/medium", children: welcomeChannel.emoji_name };
              const tmp30 = closure_17(tmp(tmp2[24]).Text, obj5);
              cResult[21] = tmp4.emoji;
              cResult[22] = welcomeChannel.emoji_name;
              cResult[23] = tmp30;
              tmp28 = tmp30;
            }
            if (cResult[27] !== welcomeChannel.description) {
              const obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", children: welcomeChannel.description };
              const tmp42 = closure_17(tmp(tmp2[24]).Text, obj6);
              cResult[27] = welcomeChannel.description;
              cResult[28] = tmp42;
              let tmp40 = tmp42;
            } else {
              tmp40 = cResult[28];
            }
            if (cResult[29] === stateFromStores) {
              if (cResult[30] === tmp9) {
                let tmp43 = cResult[31];
              }
              const _Symbol2 = Symbol;
              if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp48 = closure_17(tmp(tmp2[27]).FormRow.Arrow, {});
                cResult[32] = tmp48;
                let tmp46 = tmp48;
              } else {
                tmp46 = cResult[32];
              }
              if (cResult[33] === tmp19) {
                if (cResult[34] === tmp24) {
                  if (cResult[35] === tmp4.welcomeChannel) {
                    if (cResult[36] === tmp43) {
                      if (cResult[37] === tmp40) {
                        let tmp49 = cResult[38];
                      }
                      return tmp49;
                    }
                  }
                }
              }
              const obj7 = { DEPRECATED_style: tmp4.welcomeChannel, leading: tmp24, label: tmp40, subLabel: tmp43, onPress: tmp19, trailing: tmp46 };
              const tmp51 = closure_17(tmp(tmp2[27]).FormRow, obj7);
              cResult[33] = tmp19;
              cResult[34] = tmp24;
              cResult[35] = tmp4.welcomeChannel;
              cResult[36] = tmp43;
              cResult[37] = tmp40;
              cResult[38] = tmp51;
              tmp49 = tmp51;
            }
            let tmp44 = null;
            if (null != stateFromStores) {
              const obj8 = { variant: "text-sm/medium", color: "text-default", children: tmp9 };
              tmp44 = closure_17(tmp(tmp2[24]).Text, obj8);
            }
            cResult[29] = stateFromStores;
            cResult[30] = tmp9;
            cResult[31] = tmp44;
            tmp43 = tmp44;
            emojiResult2 = emoji(tmp2[23]);
          }
          const _Symbol = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const obj9 = { size: tmp(tmp2[25]).Icon.Sizes.REFRESH_SMALL_16, source: emoji(tmp2[26]) };
            const tmp23 = closure_17(tmp(tmp2[25]).Icon, obj9);
            cResult[24] = tmp23;
            let tmp21 = tmp23;
          } else {
            tmp21 = cResult[24];
          }
          if (cResult[25] !== tmp4.placeholderEmojiWrapper) {
            const obj10 = { style: tmp4.placeholderEmojiWrapper, children: tmp21 };
            const tmp27 = closure_17(closure_4, obj10);
            cResult[25] = tmp4.placeholderEmojiWrapper;
            cResult[26] = tmp27;
            tmp24 = tmp27;
          } else {
            tmp24 = cResult[26];
          }
        }
      }
    }
    return null;
  }
  class I {
    constructor() {
      tmp = closure_2;
      if (null != closure_2) {
        tmp2 = trackOptionSelect;
        tmp3 = trackOptionSelect();
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[19]);
        tmp6 = Routes;
        transitionToResult = obj.transitionTo(Routes.CHANNEL(tmp.guild_id, tmp.id));
        tmp8 = closure_1;
        obj2 = closure_1(closure_2[20]);
        hideActionSheetResult = obj2.hideActionSheet();
      }
      return;
    }
  }
  cResult[10] = stateFromStores;
  cResult[11] = trackOptionSelect;
  cResult[12] = I;
  tmp19 = I;
  const tmpResult4 = welcomeChannel(stateFromStores[17]);
}) : (function WelcomeChannelRow(welcomeChannel) {
  welcomeChannel = welcomeChannel.welcomeChannel;
  const trackOptionSelect = welcomeChannel.trackOptionSelect;
  let stateFromStores;
  const tmp = closure_19();
  const items = [ChannelStore];
  stateFromStores = welcomeChannel(stateFromStores[17]).useStateFromStores(items, () => ChannelStore.getChannel(welcomeChannel.channel_id));
  let obj = welcomeChannel(stateFromStores[17]);
  const tmp6 = trackOptionSelect(stateFromStores[18])(stateFromStores, true);
  const items1 = [PermissionStore];
  const stateFromStores1 = welcomeChannel(stateFromStores[17]).useStateFromStores(items1, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, tmp);
    }
    return canResult;
  });
  let obj2 = welcomeChannel(stateFromStores[17]);
  const items2 = [EmojiStore];
  const items3 = [welcomeChannel.emoji_id];
  const stateFromStores2 = welcomeChannel(stateFromStores[17]).useStateFromStores(items2, () => {
    let customEmojiById = null;
    if (null != welcomeChannel.emoji_id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.emoji_id);
    }
    return customEmojiById;
  }, items3);
  const items4 = [stateFromStores, trackOptionSelect];
  let tmp11Result2 = null;
  if (null != stateFromStores) {
    tmp11Result2 = null;
    if (stateFromStores1) {
      if (null != stateFromStores2) {
        const obj4 = { style: tmp.emoji, source: null, resizeMode: "contain" };
        const obj5 = { uri: null };
        const tmp5Result = tmp5(tmp3[22]);
        const obj6 = { id: null, animated: null, size: null };
        ({ id: obj12.id, animated: obj12.animated } = stateFromStores2);
        obj6.size = EMOJI_URL_BASE_SIZE;
        obj5.uri = tmp5(tmp3[21]).getEmojiURL(obj6);
        obj4.source = obj5;
        let tmp13 = closure_17(tmp5Result, obj4);
        let tmp11 = closure_17;
        const tmp5Result4 = tmp5(tmp3[21]);
      } else {
        if (null != welcomeChannel.emoji_name) {
          const tmp5Result5 = tmp5(tmp3[23]);
          if (null != tmp5Result5.getByName(tmp5Result6.convertSurrogateToName(welcomeChannel.emoji_name, false))) {
            const obj7 = { style: tmp.emoji, variant: "text-sm/medium", children: welcomeChannel.emoji_name };
            tmp13 = closure_17(tmp2(tmp3[24]).Text, obj7);
            tmp11 = closure_17;
          }
          tmp5Result6 = tmp5(tmp3[23]);
        }
        tmp11 = closure_17;
        const obj8 = { style: tmp.placeholderEmojiWrapper, children: null };
        const obj9 = { size: tmp2(tmp3[25]).Icon.Sizes.REFRESH_SMALL_16, source: tmp5(tmp3[26]) };
        obj8.children = closure_17(tmp2(tmp3[25]).Icon, obj9);
        tmp13 = closure_17(closure_4, obj8);
      }
      const obj10 = { DEPRECATED_style: tmp.welcomeChannel, leading: tmp13, label: null, subLabel: null, onPress: null, trailing: null };
      const obj11 = { variant: "text-sm/semibold", color: "interactive-text-active", children: welcomeChannel.description };
      obj10.label = tmp11(tmp2(tmp3[24]).Text, obj11);
      let tmp11Result = null;
      if (null != stateFromStores) {
        const obj13 = { variant: "text-sm/medium", color: "text-default", children: tmp6 };
        tmp11Result = tmp11(tmp2(tmp3[24]).Text, obj13);
      }
      obj10.subLabel = tmp11Result;
      obj10.onPress = tmp9;
      obj10.trailing = tmp11(tmp2(tmp3[27]).FormRow.Arrow, {});
      tmp11Result2 = tmp11(tmp2(tmp3[27]).FormRow, obj10);
    }
  }
  return tmp11Result2;
});
let closure_20 = tmp9;
ReactCompilerGating = fn(558);
let obj7 = { padding: 4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs };
size = fn(2);
const result = size.fileFinishedImporting("modules/welcome_screen/native/GuildWelcomeActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildWelcomeActionSheet(guildId) {
  const cResult = guildId(576).c(58);
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  let obj = guildId(576);
  dependencyMap = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmp4 = closure_19();
  const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [WelcomeScreenStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function j() {
      return { welcomeScreen: WelcomeScreenStore.get(guildId), fetching: WelcomeScreenStore.isFetching(), hasError: WelcomeScreenStore.hasError() };
    };
    cResult[4] = guildId;
    cResult[5] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult = guildId(504);
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(tmp9, tmp11);
  const welcomeScreen = stateFromStoresObject.welcomeScreen;
  const fetching = stateFromStoresObject.fetching;
  const hasError = stateFromStoresObject.hasError;
  if (cResult[6] === guildId) {
    if (cResult[7] === welcomeScreen) {
      let tmp13 = cResult[8];
      let tmp14 = cResult[9];
    }
    const effect = welcomeScreen.useEffect(tmp13, tmp14);
    if (cResult[10] === fetching) {
      if (cResult[11] === hasError) {
        let tmp16 = cResult[12];
        let tmp17 = cResult[13];
      }
      const effect1 = obj4.useEffect(tmp16, tmp17);
      if (cResult[14] === guildId) {
        if (cResult[15] === welcomeScreen) {
          let tmp19 = cResult[16];
          let tmp20 = cResult[17];
        }
        const effect2 = obj4.useEffect(tmp20, tmp19);
        if (cResult[18] !== welcomeScreen) {
          class D {
            constructor() {
              if (welcomeScreen === NO_WELCOME_SCREEN) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[20]);
                hideActionSheetResult = obj.hideActionSheet();
              }
              return;
            }
          }
          const items2 = [welcomeScreen];
          class O {
            constructor() {
              if (null != welcomeScreen) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[28]);
                waitResult = obj.wait(() => guildId(closure_2[29]).welcomeScreenViewed(closure_1_0));
              }
              return;
            }
          }
          class R {
            constructor() {
              tmp = false === fetching;
              if (tmp) {
                tmp2 = hasError;
                flag = true;
                tmp = true === hasError;
              }
              if (tmp) {
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = closure_1(closure_2[20]);
                hideActionSheetResult = obj.hideActionSheet();
              }
              return;
            }
          }
          cResult[19] = D;
          cResult[20] = items2;
        } else {
          class D {
            constructor() {
              if (welcomeScreen === NO_WELCOME_SCREEN) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[20]);
                hideActionSheetResult = obj.hideActionSheet();
              }
              return;
            }
          }
        }
        class O {
          constructor() {
            if (null != welcomeScreen) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[28]);
              waitResult = obj.wait(() => guildId(closure_2[29]).welcomeScreenViewed(closure_1_0));
            }
            return;
          }
        }
        class R {
          constructor() {
            tmp = false === fetching;
            if (tmp) {
              tmp2 = hasError;
              flag = true;
              tmp = true === hasError;
            }
            if (tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[20]);
              hideActionSheetResult = obj.hideActionSheet();
            }
            return;
          }
        }
        const effect3 = obj4.useEffect(tmp25, tmp26);
        if (cResult[24] !== onHide) {
          class B {
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
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[28]);
                waitResult = obj.wait(() => guildId(closure_2[29]).welcomeScreenViewed(closure_1_0));
              }
              return;
            }
          }
          class R {
            constructor() {
              tmp = false === fetching;
              if (tmp) {
                tmp2 = hasError;
                flag = true;
                tmp = true === hasError;
              }
              if (tmp) {
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = closure_1(closure_2[20]);
                hideActionSheetResult = obj.hideActionSheet();
              }
              return;
            }
          }
          cResult[25] = B;
          cResult[26] = items3;
          let tmp29 = items3;
        } else {
          class B {
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
        const effect4 = obj4.useEffect(B, tmp29);
        if (cResult[27] === guildId) {
          class B {
            constructor() {
              return () => {
                if (onHide != null) {
                  tmp();
                }
              };
            }
          }
          EmojiStore = tmp31;
          class O {
            constructor() {
              if (null != welcomeScreen) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[28]);
                waitResult = obj.wait(() => guildId(closure_2[29]).welcomeScreenViewed(closure_1_0));
              }
              return;
            }
          }
          class R {
            constructor() {
              tmp = false === fetching;
              if (tmp) {
                tmp2 = hasError;
                flag = true;
                tmp = true === hasError;
              }
              if (tmp) {
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = closure_1(closure_2[20]);
                hideActionSheetResult = obj.hideActionSheet();
              }
              return;
            }
          }
        }
        const fn4 = function k(index) {
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
            AnalyticsUtilsDefault.track(constants.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj2);
          }
        };
        cResult[27] = guildId;
        cResult[28] = welcomeScreen;
        cResult[29] = fn4;
        tmp31 = fn4;
      }
      class O {
        constructor() {
          if (null != welcomeScreen) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[28]);
            waitResult = obj.wait(() => guildId(closure_2[29]).welcomeScreenViewed(closure_1_0));
          }
          return;
        }
      }
      class R {
        constructor() {
          tmp = false === fetching;
          if (tmp) {
            tmp2 = hasError;
            flag = true;
            tmp = true === hasError;
          }
          if (tmp) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[20]);
            hideActionSheetResult = obj.hideActionSheet();
          }
          return;
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
        tmp = false === fetching;
        if (tmp) {
          tmp2 = hasError;
          flag = true;
          tmp = true === hasError;
        }
        if (tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[20]);
          hideActionSheetResult = obj.hideActionSheet();
        }
        return;
      }
    }
    const items4 = [fetching, hasError];
    cResult[10] = fetching;
    cResult[11] = hasError;
    cResult[12] = R;
    cResult[13] = items4;
    tmp17 = items4;
    tmp16 = R;
  }
  const fn3 = function y() {
    if (null == welcomeScreen) {
      DispatcherDefault.wait(() => guildId(closure_2[29]).fetchWelcomeScreen(closure_1_0));
    }
  };
  const items5 = [guildId, welcomeScreen];
  cResult[6] = guildId;
  cResult[7] = welcomeScreen;
  cResult[8] = fn3;
  cResult[9] = items5;
  tmp14 = items5;
  tmp13 = fn3;
  const tmpResult2 = guildId(504);
}) : (function GuildWelcomeActionSheet(guildId) {
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  let tmp = closure_19();
  dependencyMap = tmp;
  let items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(504);
  let items1 = [WelcomeScreenStore];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(items1, () => ({ welcomeScreen: WelcomeScreenStore.get(guildId), fetching: WelcomeScreenStore.isFetching(), hasError: WelcomeScreenStore.hasError() }));
  const welcomeScreen = stateFromStoresObject.welcomeScreen;
  const fetching = stateFromStoresObject.fetching;
  const hasError = stateFromStoresObject.hasError;
  const items2 = [guildId, welcomeScreen];
  const effect = welcomeScreen.useEffect(() => {
    if (null == welcomeScreen) {
      DispatcherDefault.wait(() => guildId(closure_2[29]).fetchWelcomeScreen(closure_1_0));
    }
  }, items2);
  const items3 = [fetching, hasError];
  const effect1 = welcomeScreen.useEffect(() => {
    let tmp = false === fetching;
    if (tmp) {
      tmp = true === hasError;
    }
    if (tmp) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items3);
  const items4 = [guildId, welcomeScreen];
  const effect2 = welcomeScreen.useEffect(() => {
    if (null != welcomeScreen) {
      DispatcherDefault.wait(() => guildId(closure_2[29]).welcomeScreenViewed(closure_1_0));
    }
  }, items4);
  const items5 = [welcomeScreen];
  const effect3 = welcomeScreen.useEffect(() => {
    if (welcomeScreen === NO_WELCOME_SCREEN) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items5);
  const items6 = [guildId];
  const effect4 = welcomeScreen.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: WELCOME_SCREEN_TYPE, guild_id: guildId });
  }, items6);
  const items7 = [onHide];
  const effect5 = welcomeScreen.useEffect(() => () => {
    if (onHide != null) {
      tmp();
    }
  }, items7);
  const items8 = [guildId, welcomeScreen];
  closure_6 = welcomeScreen.useCallback((index) => {
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
      AnalyticsUtilsDefault.track(constants.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj2);
    }
  }, items8);
  let tmp12 = null;
  if (null != stateFromStores) {
    tmp12 = null;
    if (null != welcomeScreen) {
      const obj3 = { startExpanded: true, children: null };
      const obj4 = { contentContainerStyle: tmp.container, children: null };
      const obj5 = { style: tmp.guildIcon, guild: stateFromStores, size: onHide(12434).Sizes.MEDIUM, textScale: 2 };
      const items9 = [closure_17(onHide(12434), obj5), , , , ];
      const obj6 = { style: tmp.header, variant: "heading-xl/extrabold", color: "text-default", children: null };
      const intl = tmp2(1126).intl;
      const obj7 = {
        guildName: stateFromStores.name,
        guildNameHook(children, arg1) {
              return constants(Text_Text.Text, { style: has_custom_emojis.headerGuildName, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children }, arg1);
            }
      };
      obj6.children = intl.format(tmp2(1126).t["0aydCN"], obj7);
      items9[1] = closure_17(tmp2(5087).Text, obj6);
      const obj8 = { style: tmp.guildDescription, variant: "text-sm/medium", color: "text-default", children: welcomeScreen.description };
      items9[2] = closure_17(tmp2(5087).Text, obj8);
      const obj9 = { style: tmp.channelsTitle, variant: "eyebrow", color: "text-default", children: null };
      const intl2 = tmp2(1126).intl;
      const tmp17 = onHide(12434);
      obj9.children = intl2.string(tmp2(1126).t["haj5+i"]).toUpperCase();
      items9[3] = closure_17(tmp2(5087).Text, obj9);
      let welcome_channels = welcomeScreen.welcome_channels;
      items9[4] = welcome_channels.map((welcomeChannel, index) => {
        closure_0 = index;
        return closure_1_17(closure_1_20, {
          welcomeChannel,
          trackOptionSelect() {
            return closure_6(closure_0);
          }
        }, index);
      });
      obj4.children = items9;
      obj3.children = closure_18(hasError, obj4);
      tmp12 = closure_17(tmp2(6892).ActionSheet, obj3);
      const str = intl2.string(tmp2(1126).t["haj5+i"]);
    }
  }
  return tmp12;
});
export const WelcomeChannelRow = tmp9;