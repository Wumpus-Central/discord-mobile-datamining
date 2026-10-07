// discord_app/modules/welcome_screen/native/GuildWelcomeActionSheet.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../routing/router_utils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import WelcomeScreenStore from "../WelcomeScreenStore.tsx";
import TextStyles_mod from "../../rebrand/native/TextStyles.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const NO_WELCOME_SCREEN = fn(12464).NO_WELCOME_SCREEN;
const WELCOME_SCREEN_TYPE = fn(12468).WELCOME_SCREEN_TYPE;
const Constants = fn(1085);
({ AnalyticEvents: map1, Fonts, Routes: closure_14 } = Constants);
const EMOJI_URL_BASE_SIZE = fn(1380).EMOJI_URL_BASE_SIZE;
const Permissions = fn(1096).Permissions;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    width: "100%",
    paddingVertical: 32,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  guildIcon: null,
  header: null,
  headerGuildName: null,
  guildDescription: null,
  welcomeChannel: null,
  channelsTitle: null,
  emoji: null,
  placeholderEmojiWrapper: null,
};
let size = { borderRadius: nativeDefault.radii.sm, width: 64, height: 64, marginBottom: 16 };
obj2.guildIcon = size;
let obj4 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 24));
obj4.marginBottom = 8;
obj4.textAlign = "center";
obj2.header = obj4;
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(
  TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24),
);
obj2.headerGuildName = {};
obj2.guildDescription = { textAlign: "center", marginBottom: 30 };
let obj3 = {
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 16,
  width: "100%",
  paddingVertical: 32,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let obj5 = {};
obj2.welcomeChannel = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginTop: 8,
  borderRadius: nativeDefault.radii.sm,
};
obj2.channelsTitle = { alignSelf: "flex-start" };
obj2.emoji = { width: 24, height: 24 };
let obj6 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginTop: 8,
  borderRadius: nativeDefault.radii.sm,
};
obj2.placeholderEmojiWrapper = {
  padding: 4,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
};
let closure_19 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (welcomeChannel) => {
      const cResult = welcomeChannel(stateFromStores[16]).c(39);
      welcomeChannel = welcomeChannel.welcomeChannel;
      const trackOptionSelect = welcomeChannel.trackOptionSelect;
      closure_19();
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
      trackOptionSelect(stateFromStores[18])(stateFromStores, true);
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
        class A {
          constructor() {
            customEmojiById = null;
            if (null != welcomeChannel.emoji_id) {
              tmp3 = closure_6;
              customEmojiById = closure_6.getCustomEmojiById(tmp.emoji_id);
            }
            return customEmojiById;
          }
        }
        const items3 = [welcomeChannel.emoji_id];
        cResult[7] = welcomeChannel.emoji_id;
        cResult[8] = A;
        cResult[9] = items3;
        let tmp17 = items3;
      } else {
        class A {
          constructor() {
            customEmojiById = null;
            if (null != welcomeChannel.emoji_id) {
              tmp3 = closure_6;
              customEmojiById = closure_6.getCustomEmojiById(tmp.emoji_id);
            }
            return customEmojiById;
          }
        }
        tmp17 = cResult[9];
      }
      const tmpResult3 = welcomeChannel(stateFromStores[17]);
      const stateFromStores2 = welcomeChannel(stateFromStores[17]).useStateFromStores(tmp14, A, tmp17);
      if (cResult[10] === stateFromStores) {
        class A {
          constructor() {
            customEmojiById = null;
            if (null != welcomeChannel.emoji_id) {
              tmp3 = closure_6;
              customEmojiById = closure_6.getCustomEmojiById(tmp.emoji_id);
            }
            return customEmojiById;
          }
        }
        if (null != stateFromStores) {
          class A {
            constructor() {
              customEmojiById = null;
              if (null != welcomeChannel.emoji_id) {
                tmp3 = closure_6;
                customEmojiById = closure_6.getCustomEmojiById(tmp.emoji_id);
              }
              return customEmojiById;
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
      const tmpResult4 = welcomeChannel(stateFromStores[17]);
    }
  : (welcomeChannel) => {
      welcomeChannel = welcomeChannel.welcomeChannel;
      const trackOptionSelect = welcomeChannel.trackOptionSelect;
      let stateFromStores;
      const tmp = closure_19();
      const items = [ChannelStore];
      stateFromStores = welcomeChannel(stateFromStores[17]).useStateFromStores(items, () =>
        ChannelStore.getChannel(welcomeChannel.channel_id),
      );
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
      const stateFromStores2 = welcomeChannel(stateFromStores[17]).useStateFromStores(
        items2,
        () => {
          let customEmojiById = null;
          if (null != welcomeChannel.emoji_id) {
            customEmojiById = EmojiStore.getCustomEmojiById(tmp.emoji_id);
          }
          return customEmojiById;
        },
        items3,
      );
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
          const obj10 = {
            DEPRECATED_style: tmp.welcomeChannel,
            leading: tmp13,
            label: null,
            subLabel: null,
            onPress: null,
            trailing: null,
          };
          const obj11 = {
            variant: "text-sm/semibold",
            color: "interactive-text-active",
            children: welcomeChannel.description,
          };
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
    };
let closure_20 = tmp9;
ReactCompilerGating = fn(558);
let obj7 = {
  padding: 4,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/welcome_screen/native/GuildWelcomeActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
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
          return {
            welcomeScreen: WelcomeScreenStore.get(guildId),
            fetching: WelcomeScreenStore.isFetching(),
            hasError: WelcomeScreenStore.hasError(),
          };
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
              class G {
                constructor(arg0) {
                  tmp = welcomeScreen;
                  if (null != welcomeScreen) {
                    tmp2 = guildId;
                    items = [];
                    closure_0 = items;
                    items1 = [];
                    closure_1 = items1;
                    flag = false;
                    c2 = false;
                    welcome_channels = tmp.welcome_channels;
                    item = welcome_channels.forEach((description) => {
                      items.push(description.description);
                      items1.push(description.channel_id);
                      if (null != description.emoji_id) {
                        c2 = true;
                      }
                    });
                    tmp4 = closure_1;
                    tmp5 = closure_2;
                    obj = closure_1(closure_2[30]);
                    tmp6 = AnalyticEvents;
                    obj1 = {
                      index: null,
                      guild_id: null,
                      options: null,
                      options_channel_ids: null,
                      guild_description: null,
                      has_custom_emojis: null,
                    };
                    obj1.index = guildId;
                    tmp7 = guildId;
                    obj1.guild_id = guildId;
                    obj1.options = items;
                    obj1.options_channel_ids = items1;
                    obj1.guild_description = tmp.description;
                    tmp8 = c2;
                    obj1.has_custom_emojis = c2;
                    trackResult = obj.track(AnalyticEvents.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj1);
                  }
                  return;
                }
              }
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
              cResult[25] = W;
              cResult[26] = items3;
              class G {
                constructor(arg0) {
                  tmp = welcomeScreen;
                  if (null != welcomeScreen) {
                    tmp2 = guildId;
                    items = [];
                    closure_0 = items;
                    items1 = [];
                    closure_1 = items1;
                    flag = false;
                    c2 = false;
                    welcome_channels = tmp.welcome_channels;
                    item = welcome_channels.forEach((description) => {
                      items.push(description.description);
                      items1.push(description.channel_id);
                      if (null != description.emoji_id) {
                        c2 = true;
                      }
                    });
                    tmp4 = closure_1;
                    tmp5 = closure_2;
                    obj = closure_1(closure_2[30]);
                    tmp6 = AnalyticEvents;
                    obj1 = {
                      index: null,
                      guild_id: null,
                      options: null,
                      options_channel_ids: null,
                      guild_description: null,
                      has_custom_emojis: null,
                    };
                    obj1.index = guildId;
                    tmp7 = guildId;
                    obj1.guild_id = guildId;
                    obj1.options = items;
                    obj1.options_channel_ids = items1;
                    obj1.guild_description = tmp.description;
                    tmp8 = c2;
                    obj1.has_custom_emojis = c2;
                    trackResult = obj.track(AnalyticEvents.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj1);
                  }
                  return;
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
              const tmp29 = cResult[26];
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
            class G {
              constructor(arg0) {
                tmp = welcomeScreen;
                if (null != welcomeScreen) {
                  tmp2 = guildId;
                  items = [];
                  closure_0 = items;
                  items1 = [];
                  closure_1 = items1;
                  flag = false;
                  c2 = false;
                  welcome_channels = tmp.welcome_channels;
                  item = welcome_channels.forEach((description) => {
                    items.push(description.description);
                    items1.push(description.channel_id);
                    if (null != description.emoji_id) {
                      c2 = true;
                    }
                  });
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj = closure_1(closure_2[30]);
                  tmp6 = AnalyticEvents;
                  obj1 = {
                    index: null,
                    guild_id: null,
                    options: null,
                    options_channel_ids: null,
                    guild_description: null,
                    has_custom_emojis: null,
                  };
                  obj1.index = guildId;
                  tmp7 = guildId;
                  obj1.guild_id = guildId;
                  obj1.options = items;
                  obj1.options_channel_ids = items1;
                  obj1.guild_description = tmp.description;
                  tmp8 = c2;
                  obj1.has_custom_emojis = c2;
                  trackResult = obj.track(AnalyticEvents.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj1);
                }
                return;
              }
            }
            cResult[27] = guildId;
            cResult[28] = welcomeScreen;
            cResult[29] = G;
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
        cResult[11] = hasError;
        cResult[12] = R;
        cResult[13] = items4;
        tmp17 = items4;
        tmp16 = R;
      }
      const fn3 = function v() {
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
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const onHide = guildId.onHide;
      let tmp = closure_19();
      dependencyMap = tmp;
      let items = [GuildStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let obj = guildId(504);
      let items1 = [WelcomeScreenStore];
      const stateFromStoresObject = guildId(504).useStateFromStoresObject(items1, () => ({
        welcomeScreen: WelcomeScreenStore.get(guildId),
        fetching: WelcomeScreenStore.isFetching(),
        hasError: WelcomeScreenStore.hasError(),
      }));
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
      const effect5 = welcomeScreen.useEffect(
        () => () => {
          if (onHide != null) {
            tmp();
          }
        },
        items7,
      );
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
          const obj2 = {
            index,
            guild_id: guildId,
            options: items,
            options_channel_ids: items1,
            guild_description: welcomeScreen.description,
            has_custom_emojis,
          };
          AnalyticsUtilsDefault.track(constants.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj2);
        }
      }, items8);
      let tmp12 = null;
      if (null != stateFromStores) {
        tmp12 = null;
        if (null != welcomeScreen) {
          const obj3 = { startExpanded: true, children: null };
          const obj4 = { contentContainerStyle: tmp.container, children: null };
          const obj5 = { style: tmp.guildIcon, guild: stateFromStores, size: onHide(12401).Sizes.MEDIUM, textScale: 2 };
          const items9 = [closure_17(onHide(12401), obj5), , , ,];
          const obj6 = { style: tmp.header, variant: "heading-xl/extrabold", color: "text-default", children: null };
          const intl = tmp2(1126).intl;
          const obj7 = {
            guildName: stateFromStores.name,
            guildNameHook(children, arg1) {
              return constants(
                Text_Text.Text,
                {
                  style: has_custom_emojis.headerGuildName,
                  variant: "heading-xl/extrabold",
                  color: "mobile-text-heading-primary",
                  children,
                },
                arg1,
              );
            },
          };
          obj6.children = intl.format(tmp2(1126).t["0aydCN"], obj7);
          items9[1] = closure_17(tmp2(4892).Text, obj6);
          const obj8 = {
            style: tmp.guildDescription,
            variant: "text-sm/medium",
            color: "text-default",
            children: welcomeScreen.description,
          };
          items9[2] = closure_17(tmp2(4892).Text, obj8);
          const obj9 = { style: tmp.channelsTitle, variant: "eyebrow", color: "text-default", children: null };
          const intl2 = tmp2(1126).intl;
          const tmp17 = onHide(12401);
          obj9.children = intl2.string(tmp2(1126).t["haj5+i"]).toUpperCase();
          items9[3] = closure_17(tmp2(4892).Text, obj9);
          let welcome_channels = welcomeScreen.welcome_channels;
          items9[4] = welcome_channels.map((welcomeChannel, index) => {
            closure_0 = index;
            return closure_1_17(
              closure_1_20,
              {
                welcomeChannel,
                trackOptionSelect() {
                  return closure_6(closure_0);
                },
              },
              index,
            );
          });
          obj4.children = items9;
          obj3.children = closure_18(hasError, obj4);
          tmp12 = closure_17(tmp2(6708).ActionSheet, obj3);
          const str = intl2.string(tmp2(1126).t["haj5+i"]);
        }
      }
      return tmp12;
    };
export const WelcomeChannelRow = tmp9;
