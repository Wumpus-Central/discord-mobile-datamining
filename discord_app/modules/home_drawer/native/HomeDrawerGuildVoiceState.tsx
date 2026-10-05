// discord_app/modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import GuildChannelStore2 from "../../../stores/GuildChannelStore.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import useFetchStreamPreviewDefault from "../../go_live/useFetchStreamPreview.tsx";
import AvatarPile2 from "../../../design/components/Pile/native/AvatarPile.native.tsx";
import BlockedUserUtils from "../../blocking/BlockedUserUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, c1, c6, channel, streamingChannelId;

let closure_12;
let obj2;
let obj4;
let rect;
let rect1;
let size;
let unpackModuleId;
const View = react_native.View;
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
const ChannelTypes = Constants.ChannelTypes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  voiceContainer: { paddingRight: 8, height: 40, gap: 4, justifyContent: "center" },
  streamPreviewShadow: obj2,
  streamPreview: size,
  streamPreviewDarkGradient: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.8 },
  streamPreviewGradient: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.2 },
  streamPreviewBorder: rect,
};
obj2 = { borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
size = { width: 72, height: 44, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.sm,
};
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let AvatarPile;
      let arr;
      let guildId;
      let obj4;
      let voiceUsers;
      let obj = guildId(576);
      const cResult = obj.c(15);
      ({ voiceUsers, guildId } = arg0);
      if (cResult[0] !== voiceUsers) {
        let substr = voiceUsers;
        if (voiceUsers.length > 3) {
          substr = voiceUsers.slice(0, 3);
        }
        cResult[0] = voiceUsers;
        cResult[1] = substr;
        arr = substr;
      } else {
        arr = cResult[1];
      }
      if (0 === voiceUsers.length) {
        return null;
      } else {
        let tmp5;
        let tmp6;
        let tmp11;
        const _Symbol2 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { flexDirection: "row", alignItems: "center", gap: 4 };
          cResult[2] = obj2;
          tmp5 = obj2;
        } else {
          tmp5 = cResult[2];
        }
        if (cResult[3] !== arr) {
          let tmp7;
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function v(username) {
              return username.username;
            };
            cResult[5] = fn;
            tmp7 = fn;
          } else {
            tmp7 = cResult[5];
          }
          const mapped = arr.map(tmp7);
          cResult[3] = arr;
          cResult[4] = mapped;
          tmp6 = mapped;
        } else {
          tmp6 = cResult[4];
        }
        if (cResult[6] === guildId) {
          let tmp10;
          if (cResult[7] === arr) {
            tmp10 = cResult[8];
          }
          if (cResult[11] === tmp6) {
            if (cResult[12] === tmp10) {
              let tmp13;
              if (cResult[13] === arr.length) {
                tmp13 = cResult[14];
              }
              return tmp13;
            }
          }
          const obj3 = { style: tmp5, children: closure_11(AvatarPile, obj4) };
          obj4 = { size: guildId(1188).AvatarSizes.XSMALL, names: tmp6, totalCount: tmp9, children: tmp10 };
          AvatarPile = guildId(12850).AvatarPile;
          const tmp16 = closure_11(View, obj3);
          cResult[11] = tmp6;
          cResult[12] = tmp10;
          cResult[13] = arr.length;
          cResult[14] = tmp16;
          tmp13 = tmp16;
        }
        if (cResult[9] !== guildId) {
          const fn2 = function p(user) {
            const obj = { size: native.AvatarSizes.XSMALL, user, guildId, animate: false };
            const Avatar = native.Avatar;
            return unpackModuleId(Avatar, obj, user.id);
          };
          cResult[9] = guildId;
          cResult[10] = fn2;
          tmp11 = fn2;
        } else {
          tmp11 = cResult[10];
        }
        const mapped1 = arr.map(tmp11);
        cResult[6] = guildId;
        cResult[7] = arr;
        cResult[8] = mapped1;
        tmp10 = mapped1;
      }
    }
  : (arg0) => {
      let AvatarPile;
      let guildId;
      let obj2;
      let require;
      let voiceUsers;
      ({ voiceUsers, guildId: require } = arg0);
      let substr = voiceUsers;
      if (voiceUsers.length > 3) {
        substr = voiceUsers.slice(0, 3);
      }
      let tmp = null;
      if (0 !== voiceUsers.length) {
        let obj = {
          style: { flexDirection: "row", alignItems: "center", gap: 4 },
          children: closure_11(AvatarPile, obj2),
        };
        obj2 = {
          size: native.AvatarSizes.XSMALL,
          names: substr.map((username) => username.username),
          totalCount: substr.length,
          children: substr.map((user) => {
            const obj = { size: native.AvatarSizes.XSMALL, user, guildId: require, animate: false };
            const Avatar = native.Avatar;
            return unpackModuleId(Avatar, obj, user.id);
          }),
        };
        AvatarPile = AvatarPile2.AvatarPile;
        tmp = closure_11(View, obj);
      }
      return tmp;
    };
createStyles = createStyles_mod;
let obj3 = { tag: rect1, tagText: obj4 };
rect1 = {
  paddingHorizontal: 4,
  paddingVertical: 1,
  borderBottomRightRadius: nativeDefault.radii.xs,
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  position: "absolute",
  top: 0,
  left: 0,
};
const createStyles2 = createStyles.createStyles;
obj4 = { textAlign: "center", color: nativeDefault.unsafe_rawColors.WHITE, includeFontPadding: false };
let closure_15 = createStyles2(obj3);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tag;
      let tagText;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(6);
      const tmp4 = closure_15();
      ({ tag, tagText } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const str = intl.string(intl2.t.dI3q4h);
        const formatted = str.toUpperCase();
        cResult[0] = formatted;
        first = formatted;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.tagText) {
        const obj2 = { variant: "text-xxs/bold", style: tagText, lineClamp: 1, children: first };
        const tmp9 = unpackModuleId(Text_Text.Text, obj2);
        cResult[1] = tmp4.tagText;
        cResult[2] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.tag) {
        let tmp10;
        if (cResult[4] === tmp7) {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = unpackModuleId(View, {
        style: tag,
        importantForAccessibility: "no-hide-descendants",
        accessibilityElementsHidden: true,
        children: tmp7,
      });
      cResult[3] = tmp4.tag;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : () => {
      let Text;
      let obj2;
      let str;
      const tmp = closure_15();
      const obj = {
        style: tmp.tag,
        importantForAccessibility: "no-hide-descendants",
        accessibilityElementsHidden: true,
        children: unpackModuleId(Text, obj2),
      };
      obj2 = { variant: "text-xxs/bold", style: tmp.tagText, lineClamp: 1, children: str.toUpperCase() };
      Text = Text_Text.Text;
      const intl = intl2.intl;
      str = intl.string(intl2.t.dI3q4h);
      return unpackModuleId(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guildId;
      let items;
      let obj6;
      let obj8;
      let streamingUser;
      let voiceUsers;
      const obj = react2;
      const cResult = obj.c(17);
      ({ voiceUsers, streamingChannelId, streamingUser, guildId } = arg0);
      const tmp3 = closure_13();
      let id;
      const tmp4 = voiceUsers.length > 0;
      const tmp6 = useFetchStreamPreviewDefault;
      if (streamingUser != null) {
        id = streamingUser.id;
      }
      const previewUrl = tmp6(guildId, streamingChannelId, id).previewUrl;
      if (tmp4) {
        let tmp8;
        let num = 32;
        if (null != streamingUser) {
          num = 48;
        }
        if (cResult[0] !== num) {
          const obj2 = { height: num };
          cResult[0] = num;
          cResult[1] = obj2;
          tmp8 = obj2;
        } else {
          tmp8 = cResult[1];
        }
        if (cResult[2] === tmp3.voiceContainer) {
          let tmp9;
          let tmp13;
          if (cResult[3] === tmp8) {
            tmp9 = cResult[4];
          }
          if (cResult[5] === guildId) {
            if (cResult[6] === previewUrl) {
              if (cResult[7] === tmp3.streamPreview) {
                if (cResult[8] === tmp3.streamPreviewBorder) {
                  if (cResult[9] === tmp3.streamPreviewDarkGradient) {
                    if (cResult[10] === tmp3.streamPreviewGradient) {
                      if (cResult[11] === tmp3.streamPreviewShadow) {
                        let tmp10;
                        if (cResult[12] === voiceUsers) {
                          tmp10 = cResult[13];
                        }
                        if (cResult[14] === tmp9) {
                          let tmp14;
                          if (cResult[15] === tmp10) {
                            tmp14 = cResult[16];
                          }
                          return tmp14;
                        }
                        const obj3 = { style: tmp9, children: tmp10 };
                        const tmp17 = unpackModuleId(View, obj3);
                        cResult[14] = tmp9;
                        cResult[15] = tmp10;
                        cResult[16] = tmp17;
                        tmp14 = tmp17;
                      }
                    }
                  }
                }
              }
            }
          }
          if (null == previewUrl) {
            const obj4 = { voiceUsers, guildId };
            tmp13 = unpackModuleId(closure_14, obj4);
          } else {
            const obj5 = { style: tmp3.streamPreviewShadow, children: closure_12(View, obj6) };
            const obj7 = { style: tmp3.streamPreview, source: obj8 };
            obj6 = { style: tmp3.streamPreview, children: items };
            obj8 = { uri: previewUrl };
            items = [unpackModuleId(FastImageDefault, obj7), , , ,];
            const obj9 = {
              colors: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"],
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              style: tmp3.streamPreviewDarkGradient,
              pointerEvents: "none",
            };
            items[1] = unpackModuleId(LinearGradientDefault, obj9);
            const obj10 = {
              colors: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
              style: tmp3.streamPreviewGradient,
              pointerEvents: "none",
            };
            items[2] = unpackModuleId(LinearGradientDefault, obj10);
            const obj11 = { style: tmp3.streamPreviewBorder, pointerEvents: "none" };
            items[3] = unpackModuleId(View, obj11);
            items[4] = unpackModuleId(closure_16, {});
            tmp13 = unpackModuleId(View, obj5);
          }
          cResult[5] = guildId;
          cResult[6] = previewUrl;
          cResult[7] = tmp3.streamPreview;
          cResult[8] = tmp3.streamPreviewBorder;
          cResult[9] = tmp3.streamPreviewDarkGradient;
          cResult[10] = tmp3.streamPreviewGradient;
          cResult[11] = tmp3.streamPreviewShadow;
          cResult[12] = voiceUsers;
          cResult[13] = tmp13;
          tmp10 = tmp13;
        }
        const items1 = [tmp3.voiceContainer, tmp8];
        cResult[2] = tmp3.voiceContainer;
        cResult[3] = tmp8;
        cResult[4] = items1;
        tmp9 = items1;
      } else {
        return null;
      }
    }
  : (arg0) => {
      let guildId;
      let items1;
      let obj5;
      let obj7;
      let streamingUser;
      let tmp8Result;
      let voiceUsers;
      ({ voiceUsers, streamingChannelId, streamingUser, guildId } = arg0);
      const tmp = closure_13();
      let id;
      const tmp2 = voiceUsers.length > 0;
      const tmp5 = useFetchStreamPreviewDefault;
      if (streamingUser != null) {
        id = streamingUser.id;
      }
      const previewUrl = tmp5(guildId, streamingChannelId, id).previewUrl;
      let tmp8Result2 = null;
      if (tmp2) {
        const items = [tmp.voiceContainer];
        let num = 32;
        if (null != streamingUser) {
          num = 48;
        }
        const obj = { style: items, children: tmp8Result };
        const obj2 = { height: num };
        items[1] = obj2;
        if (null == previewUrl) {
          const obj3 = { voiceUsers, guildId };
          tmp8Result = unpackModuleId(closure_14, obj3);
        } else {
          const obj4 = { style: tmp.streamPreviewShadow, children: closure_12(View, obj5) };
          const obj6 = { style: tmp.streamPreview, source: obj7 };
          obj5 = { style: tmp.streamPreview, children: items1 };
          obj7 = { uri: previewUrl };
          items1 = [unpackModuleId(FastImageDefault, obj6), , , ,];
          const obj8 = {
            colors: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"],
            start: { x: 0, y: 0 },
            end: { x: 0, y: 1 },
            style: tmp.streamPreviewDarkGradient,
            pointerEvents: "none",
          };
          items1[1] = unpackModuleId(LinearGradientDefault, obj8);
          const obj9 = {
            colors: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"],
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 },
            style: tmp.streamPreviewGradient,
            pointerEvents: "none",
          };
          items1[2] = unpackModuleId(LinearGradientDefault, obj9);
          const obj10 = { style: tmp.streamPreviewBorder, pointerEvents: "none" };
          items1[3] = unpackModuleId(View, obj10);
          items1[4] = unpackModuleId(closure_16, {});
          tmp8Result = unpackModuleId(View, obj4);
        }
        tmp8Result2 = unpackModuleId(View, obj);
      }
      return tmp8Result2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let first;
      let guildOrCategoryOrChannelMuted;
      let isHomeDrawerChannelInChannelList;
      let stateFromStores1;
      let streamingUser;
      let user;
      _require = id;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(32);
      id = id.id;
      const obj2 = require("isHomeDrawerChannelInChannelList");
      isHomeDrawerChannelInChannelList = obj2.useIsHomeDrawerChannelInChannelList();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [stateFromStores1, UserGuildSettingsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id) {
        let tmp8;
        let tmp9;
        let tmp11;
        let tmp14;
        let tmp13;
        let tmp17;
        let tmp16;
        let tmp20;
        if (cResult[2] === isHomeDrawerChannelInChannelList) {
          tmp8 = cResult[3];
          tmp9 = cResult[4];
        }
        const tmpResult = tmp(isHomeDrawerChannelInChannelList[20]);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp8, tmp9);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [SortedVoiceStateStore];
          cResult[5] = items1;
          tmp11 = items1;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] !== id) {
          const fn2 = function w() {
            return SortedVoiceStateStore.getVoiceStates(id);
          };
          const items2 = [id];
          cResult[6] = id;
          cResult[7] = fn2;
          cResult[8] = items2;
          tmp14 = items2;
          tmp13 = fn2;
        } else {
          tmp13 = cResult[7];
          tmp14 = cResult[8];
        }
        const tmpResult3 = tmp(isHomeDrawerChannelInChannelList[20]);
        const stateFromStores = tmpResult3.useStateFromStores(tmp11, tmp13, tmp14);
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [user];
          const fn3 = function x() {
            return user.getBlockedOrIgnoredIDs();
          };
          cResult[9] = items3;
          cResult[10] = fn3;
          tmp17 = fn3;
          tmp16 = items3;
        } else {
          tmp16 = cResult[9];
          tmp17 = cResult[10];
        }
        const tmpResult4 = tmp(isHomeDrawerChannelInChannelList[20]);
        stateFromStores1 = tmpResult4.useStateFromStores(tmp16, tmp17);
        if (cResult[11] === stateFromStores1) {
          if (cResult[12] === id.afkChannelId) {
            if (cResult[13] === stateFromStores) {
              if (cResult[14] === stateFromStoresArray) {
                tmp20 = cResult[15];
              }
              if (cResult[20] === id.afkChannelId) {
                if (cResult[21] === stateFromStores) {
                  if (cResult[22] === stateFromStoresArray) {
                    streamingChannelId = cResult[23];
                    user = cResult[24];
                  }
                  if (cResult[25] === streamingChannelId) {
                    let tmp30;
                    if (cResult[26] === user) {
                      tmp30 = cResult[27];
                    }
                    ({ streamingUser, streamingChannelId } = tmp30);
                    if (cResult[28] === streamingChannelId) {
                      if (cResult[29] === streamingUser) {
                        let tmp34;
                        if (cResult[30] === tmp20) {
                          tmp34 = cResult[31];
                        }
                        return tmp34;
                      }
                    }
                    const obj3 = { voiceUsers: tmp20, streamingUser, streamingChannelId };
                    cResult[28] = streamingChannelId;
                    cResult[29] = streamingUser;
                    cResult[30] = tmp20;
                    cResult[31] = obj3;
                    tmp34 = obj3;
                  }
                  const obj4 = { streamingUser: user, streamingChannelId };
                  cResult[25] = streamingChannelId;
                  cResult[26] = user;
                  cResult[27] = obj4;
                  tmp30 = obj4;
                }
              }
              user = null;
              streamingChannelId = null;
              const _Object = Object;
              const keys = Object.keys(stateFromStores);
              const item = keys.forEach((item) => {
                if (item !== id.afkChannelId) {
                  if (stateFromStoresArray.includes(item)) {
                    let items = stateFromStores[item];
                    if (items == null) {
                      items = [];
                    }
                    const found = items.find((voiceState) => voiceState.voiceState.selfStream);
                    const tmp5 = null != found && null == user;
                    if (tmp5) {
                      user = found.user;
                      c6 = item;
                    }
                  }
                }
              });
              cResult[20] = id.afkChannelId;
              cResult[21] = stateFromStores;
              cResult[22] = stateFromStoresArray;
              cResult[23] = streamingChannelId;
              cResult[24] = user;
            }
          }
        }
        if (cResult[16] === stateFromStores1) {
          if (cResult[17] === id.afkChannelId) {
            let tmp21;
            if (cResult[18] === stateFromStores) {
              tmp21 = cResult[19];
            }
            const obj6 = id(isHomeDrawerChannelInChannelList[22]);
            const flatMapResult = obj6.flatMap(stateFromStoresArray, tmp21);
            cResult[11] = stateFromStores1;
            cResult[12] = id.afkChannelId;
            cResult[13] = stateFromStores;
            cResult[14] = stateFromStoresArray;
            cResult[15] = flatMapResult;
            tmp20 = flatMapResult;
          }
        }
        const fn4 = function k(arg0) {
          if (arg0 === id.afkChannelId) {
            return [];
          } else {
            let items = stateFromStores[arg0];
            if (items == null) {
              items = [];
            }
            const mapped = items.map((user) => user.user);
            const obj = BlockedUserUtils;
            return obj.filterOutBlockedOrIgnoredUsers(mapped, stateFromStores1);
          }
        };
        cResult[16] = stateFromStores1;
        cResult[17] = id.afkChannelId;
        cResult[18] = stateFromStores;
        cResult[19] = fn4;
        tmp21 = fn4;
      }
      const fn = function v() {
        const arr = GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY];
        const found = arr.filter((channel) => {
          channel = channel.channel;
          const tmp =
            channel.type === constants.GUILD_VOICE &&
            !guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(id, channel.id) &&
            isHomeDrawerChannelInChannelList(channel);
          return tmp;
        });
        return found.map((channel) => channel.channel.id);
      };
      const items4 = [id, isHomeDrawerChannelInChannelList];
      cResult[1] = id;
      cResult[2] = isHomeDrawerChannelInChannelList;
      cResult[3] = fn;
      cResult[4] = items4;
      tmp9 = items4;
      tmp8 = fn;
    }
  : (id) => {
      let blockedOrIgnoredIDs;
      let guildOrCategoryOrChannelMuted;
      let isHomeDrawerChannelInChannelList;
      let stateFromStores1;
      _require = id;
      id = id.id;
      let obj = require("isHomeDrawerChannelInChannelList");
      isHomeDrawerChannelInChannelList = obj.useIsHomeDrawerChannelInChannelList();
      let items = [stateFromStores1, UserGuildSettingsStore];
      const items1 = [id, isHomeDrawerChannelInChannelList];
      const obj2 = require("get initialized");
      const stateFromStoresArray = obj2.useStateFromStoresArray(
        items,
        () => {
          const arr = GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY];
          const found = arr.filter((channel) => {
            channel = channel.channel;
            const tmp =
              channel.type === constants.GUILD_VOICE &&
              !guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(streamingChannelId, channel.id) &&
              isHomeDrawerChannelInChannelList(channel);
            return tmp;
          });
          return found.map((channel) => channel.channel.id);
        },
        items1,
      );
      const items2 = [SortedVoiceStateStore];
      const items3 = [id];
      const obj3 = require("get initialized");
      const stateFromStores = obj3.useStateFromStores(items2, () => SortedVoiceStateStore.getVoiceStates(id), items3);
      const items4 = [RelationshipStore];
      const obj4 = require("get initialized");
      stateFromStores1 = obj4.useStateFromStores(items4, () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs());
      const items5 = [stateFromStoresArray, stateFromStores, id.afkChannelId, stateFromStores1];
      const items6 = [stateFromStores, id.afkChannelId, stateFromStoresArray];
      const memo = stateFromStoresArray.useMemo(() => {
        let obj = _modDef12;
        return obj.flatMap(stateFromStoresArray, (arg0) => {
          if (arg0 === closure_1_0.afkChannelId) {
            return [];
          } else {
            let items = stateFromStores[arg0];
            if (items == null) {
              items = [];
            }
            const mapped = items.map((user) => user.user);
            const obj = closure_0(isHomeDrawerChannelInChannelList[21]);
            return obj.filterOutBlockedOrIgnoredUsers(mapped, stateFromStores1);
          }
        });
      }, items5);
      const memo1 = stateFromStoresArray.useMemo(() => {
        let user = null;
        streamingChannelId = null;
        const keys = Object.keys(stateFromStores);
        const item = keys.forEach((item) => {
          if (item !== user.afkChannelId) {
            if (stateFromStoresArray.includes(item)) {
              let items = stateFromStores[item];
              if (items == null) {
                items = [];
              }
              const found = items.find((voiceState) => voiceState.voiceState.selfStream);
              const tmp5 = null != found && null == user;
              if (tmp5) {
                user = found.user;
                c1 = item;
              }
            }
          }
        });
        return { streamingUser: user, streamingChannelId };
      }, items6);
      return { voiceUsers: memo, streamingUser: memo1.streamingUser, streamingChannelId: memo1.streamingChannelId };
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx");

export const GuildVoiceState = tmp6;
export const useVoiceUsers = tmp7;
