// discord_app/modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/05387_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import useFetchStreamPreviewDefault from "../../go_live/useFetchStreamPreview.tsx";
import AvatarPile from "../../../design/components/Pile/native/AvatarPile.native.tsx";
import BlockedUserUtils from "../../blocking/BlockedUserUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const GUILD_VOCAL_CHANNELS_KEY = fn(4705).GUILD_VOCAL_CHANNELS_KEY;
const ChannelTypes = fn(1085).ChannelTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let createStyles = fn(5090);
let obj2 = {
  voiceContainer: { paddingRight: 8, height: 40, gap: 4, justifyContent: "center" },
  streamPreviewShadow: null,
  streamPreview: null,
  streamPreviewDarkGradient: null,
  streamPreviewGradient: null,
  streamPreviewBorder: null,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
obj2.streamPreviewShadow = { borderRadius: nativeDefault.radii.sm };
let size = { width: 72, height: 44, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.streamPreview = size;
obj2.streamPreviewDarkGradient = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.8 };
obj2.streamPreviewGradient = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.2 };
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.sm,
};
obj2.streamPreviewBorder = rect;
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VoiceUsers(arg0) {
      const cResult = guildId(576).c(15);
      ({ voiceUsers, guildId } = arg0);
      if (cResult[0] !== voiceUsers) {
        let substr = voiceUsers;
        if (voiceUsers.length > 3) {
          substr = voiceUsers.slice(0, 3);
        }
        cResult[0] = voiceUsers;
        cResult[1] = substr;
        let arr = substr;
      } else {
        arr = cResult[1];
      }
      if (0 === voiceUsers.length) {
        return null;
      } else {
        const _Symbol2 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { flexDirection: "row", alignItems: "center", gap: 4 };
          cResult[2] = obj2;
          let tmp5 = obj2;
        } else {
          tmp5 = cResult[2];
        }
        if (cResult[3] !== arr) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function v(username) {
              return username.username;
            };
            cResult[5] = fn;
            let tmp7 = fn;
          } else {
            tmp7 = cResult[5];
          }
          const mapped = arr.map(tmp7);
          cResult[3] = arr;
          cResult[4] = mapped;
        } else {
          if (cResult[6] === guildId) {
            if (cResult[7] === arr) {
              if (cResult[11] === tmp6) {
                if (cResult[12] === tmp11) {
                  if (cResult[13] === arr.length) {
                    let tmp15 = cResult[14];
                  }
                  return tmp15;
                }
              }
              const obj3 = { style: tmp5, children: null };
              const obj4 = {
                size: guildId(1200).AvatarSizes.XSMALL,
                names: tmp6,
                totalCount: tmp10,
                children: cResult[8],
              };
              obj3.children = closure_11(guildId(13018).AvatarPile, obj4);
              const tmp18 = closure_11(View, obj3);
              cResult[11] = tmp6;
              cResult[12] = cResult[8];
              cResult[13] = arr.length;
              cResult[14] = tmp18;
              tmp15 = tmp18;
            }
          }
          if (cResult[9] !== guildId) {
            const fn2 = function p(user) {
              return closure_2_11(
                native.Avatar,
                { size: native.AvatarSizes.XSMALL, user, guildId, animate: false },
                user.id,
              );
            };
            cResult[9] = guildId;
            cResult[10] = fn2;
            let tmp12 = fn2;
          } else {
            tmp12 = cResult[10];
          }
          const mapped1 = arr.map(tmp12);
          cResult[6] = guildId;
          cResult[7] = arr;
          cResult[8] = mapped1;
        }
      }
      const obj = guildId(576);
    }
  : function VoiceUsers(arg0) {
      ({ voiceUsers, guildId: require } = arg0);
      let substr = voiceUsers;
      if (voiceUsers.length > 3) {
        substr = voiceUsers.slice(0, 3);
      }
      let tmp = null;
      if (0 !== voiceUsers.length) {
        const obj = { style: { flexDirection: "row", alignItems: "center", gap: 4 }, children: null };
        const obj2 = {
          size: native.AvatarSizes.XSMALL,
          names: substr.map((username) => username.username),
          totalCount: substr.length,
          children: substr.map((user) =>
            closure_2_11(native.Avatar, { size: native.AvatarSizes.XSMALL, user, guildId, animate: false }, user.id),
          ),
        };
        obj.children = closure_11(AvatarPile.AvatarPile, obj2);
        tmp = closure_11(View, obj);
      }
      return tmp;
    };
createStyles = fn(5090);
let obj4 = { tag: null, tagText: null };
const rect1 = {
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
obj4.tag = rect1;
let obj3 = { borderRadius: nativeDefault.radii.sm };
obj4.tagText = { textAlign: "center", color: nativeDefault.unsafe_rawColors.WHITE, includeFontPadding: false };
let closure_15 = createStyles.createStyles(obj4);
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LiveTag() {
      const cResult = c.c(6);
      const tmp4 = closure_15();
      ({ tag, tagText } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const formatted = intl.string(util.t.dI3q4h).toUpperCase();
        cResult[0] = formatted;
        let first = formatted;
        const str = intl.string(util.t.dI3q4h);
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.tagText) {
        const obj2 = { variant: "text-xxs/bold", style: tagText, lineClamp: 1, children: first };
        const tmp9 = closure_1_11(Text_Text.Text, obj2);
        cResult[1] = tmp4.tagText;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.tag) {
        if (cResult[4] === tmp7) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = closure_1_11(View, {
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
  : function LiveTag() {
      const tmp = closure_15();
      const obj = {
        style: tmp.tag,
        importantForAccessibility: "no-hide-descendants",
        accessibilityElementsHidden: true,
        children: null,
      };
      const obj2 = { variant: "text-xxs/bold", style: tmp.tagText, lineClamp: 1, children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.dI3q4h).toUpperCase();
      obj.children = closure_1_11(Text_Text.Text, obj2);
      return closure_1_11(View, obj);
    };
fn(558);
let obj5 = { textAlign: "center", color: nativeDefault.unsafe_rawColors.WHITE, includeFontPadding: false };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildVoiceState(arg0) {
      const cResult = c.c(17);
      ({ voiceUsers, streamingChannelId, streamingUser, guildId } = arg0);
      let streamPreviewShadow = closure_13();
      const tmp3 = voiceUsers.length > 0;
      let id;
      if (streamingUser != null) {
        id = streamingUser.id;
      }
      streamPreviewGradient = useFetchStreamPreviewDefault(guildId, streamingChannelId, id).previewUrl;
      if (tmp3) {
        let num = 32;
        if (null != streamingUser) {
          num = 48;
        }
        if (cResult[0] !== num) {
          const obj2 = { height: num };
          cResult[0] = num;
          cResult[1] = obj2;
          let tmp7 = obj2;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === streamPreviewShadow.voiceContainer) {
          if (cResult[3] === tmp7) {
            let tmp8 = cResult[4];
          }
          if (cResult[5] === guildId) {
            if (cResult[6] === streamPreviewGradient) {
              if (cResult[7] === streamPreviewShadow.streamPreview) {
                if (cResult[8] === streamPreviewShadow.streamPreviewBorder) {
                  if (cResult[9] === streamPreviewShadow.streamPreviewDarkGradient) {
                    if (cResult[10] === streamPreviewShadow.streamPreviewGradient) {
                      if (cResult[11] === streamPreviewShadow.streamPreviewShadow) {
                        if (cResult[12] === voiceUsers) {
                          if (cResult[14] === tmp8) {
                            if (cResult[15] === tmp9) {
                              let tmp14 = cResult[16];
                            }
                            return tmp14;
                          }
                          const obj3 = { style: tmp8, children: cResult[13] };
                          const tmp17 = closure_1_11(View, obj3);
                          cResult[14] = tmp8;
                          cResult[15] = cResult[13];
                          cResult[16] = tmp17;
                          tmp14 = tmp17;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          if (null == streamPreviewGradient) {
            const obj4 = { voiceUsers, guildId };
            let tmp12 = closure_1_11(closure_14, obj4);
          } else {
            const obj5 = { style: streamPreviewShadow.streamPreviewShadow, children: null };
            const obj6 = { style: streamPreviewShadow.streamPreview, children: null };
            const obj7 = { style: streamPreviewShadow.streamPreview, source: null };
            const obj8 = { uri: streamPreviewGradient };
            obj7.source = obj8;
            const items = [closure_1_11(FastImageDefault, obj7), , , ,];
            const obj9 = {
              colors: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"],
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              style: streamPreviewShadow.streamPreviewDarkGradient,
              pointerEvents: "none",
            };
            items[1] = closure_1_11(LinearGradientDefault, obj9);
            const obj10 = {
              colors: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
              style: streamPreviewShadow.streamPreviewGradient,
              pointerEvents: "none",
            };
            items[2] = closure_1_11(LinearGradientDefault, obj10);
            const obj11 = { style: streamPreviewShadow.streamPreviewBorder, pointerEvents: "none" };
            items[3] = closure_1_11(View, obj11);
            items[4] = closure_1_11(closure_16, {});
            obj6.children = items;
            obj5.children = __initData(View, obj6);
            tmp12 = closure_1_11(View, obj5);
          }
          cResult[5] = guildId;
          cResult[6] = streamPreviewGradient;
          cResult[7] = streamPreviewShadow.streamPreview;
          cResult[8] = streamPreviewShadow.streamPreviewBorder;
          ({ streamPreviewDarkGradient: tmp2[9], streamPreviewGradient } = streamPreviewShadow);
          cResult[10] = streamPreviewGradient;
          streamPreviewShadow = streamPreviewShadow.streamPreviewShadow;
          cResult[11] = streamPreviewShadow;
          cResult[12] = voiceUsers;
          cResult[13] = tmp12;
        }
        const items1 = [streamPreviewShadow.voiceContainer, tmp7];
        cResult[2] = streamPreviewShadow.voiceContainer;
        cResult[3] = tmp7;
        cResult[4] = items1;
        tmp8 = items1;
      } else {
        return null;
      }
    }
  : function GuildVoiceState(arg0) {
      ({ voiceUsers, streamingChannelId, streamingUser, guildId } = arg0);
      const tmp = closure_13();
      let id;
      if (streamingUser != null) {
        id = streamingUser.id;
      }
      const previewUrl = useFetchStreamPreviewDefault(guildId, streamingChannelId, id).previewUrl;
      if (!tmp2) {
        return null;
      } else {
        const items = [tmp.voiceContainer];
        let num = 32;
        if (null != streamingUser) {
          num = 48;
        }
        const obj = { style: null, children: null };
        const obj2 = { height: num };
        items[1] = obj2;
        obj.style = items;
        if (null == previewUrl) {
          const obj3 = { voiceUsers, guildId };
          let tmp7Result = closure_1_11(closure_14, obj3);
        } else {
          const obj4 = { style: tmp.streamPreviewShadow, children: null };
          const obj5 = { style: tmp.streamPreview, children: null };
          const obj6 = { style: tmp.streamPreview, source: null };
          const obj7 = { uri: previewUrl };
          obj6.source = obj7;
          const items1 = [closure_1_11(FastImageDefault, obj6), , , ,];
          const obj8 = {
            colors: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"],
            start: { x: 0, y: 0 },
            end: { x: 0, y: 1 },
            style: tmp.streamPreviewDarkGradient,
            pointerEvents: "none",
          };
          items1[1] = closure_1_11(LinearGradientDefault, obj8);
          const obj9 = {
            colors: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"],
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 },
            style: tmp.streamPreviewGradient,
            pointerEvents: "none",
          };
          items1[2] = closure_1_11(LinearGradientDefault, obj9);
          const obj10 = { style: tmp.streamPreviewBorder, pointerEvents: "none" };
          items1[3] = closure_1_11(View, obj10);
          items1[4] = closure_1_11(closure_16, {});
          obj5.children = items1;
          obj4.children = __initData(View, obj5);
          tmp7Result = closure_1_11(View, obj4);
        }
        obj.children = tmp7Result;
        closure_1_11(View, obj);
      }
      tmp2 = voiceUsers.length > 0;
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx");

export const GuildVoiceState = tmp4;
export const useVoiceUsers = ReactCompilerGating.isReactCompilerEnabled()
  ? function useVoiceUsers(id) {
      _require = id;
      const cResult = require("c").c(32);
      id = id.id;
      const obj = require("c");
      isHomeDrawerChannelInChannelList =
        require("isHomeDrawerChannelInChannelList").useIsHomeDrawerChannelInChannelList();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [afkChannelId, UserGuildSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id) {
        if (cResult[2] === isHomeDrawerChannelInChannelList) {
          let tmp8 = cResult[3];
          let tmp9 = cResult[4];
        }
        const stateFromStoresArray = tmp(tmp2[20]).useStateFromStoresArray(first, tmp8, tmp9);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [SortedVoiceStateStore];
          cResult[5] = items1;
          let tmp11 = items1;
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
          let tmp14 = items2;
          let tmp13 = fn2;
        } else {
          tmp13 = cResult[7];
          tmp14 = cResult[8];
        }
        const tmpResult = tmp(tmp2[20]);
        const stateFromStores = tmp(tmp2[20]).useStateFromStores(tmp11, tmp13, tmp14);
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [user];
          class P {
            constructor() {
              return user.getBlockedOrIgnoredIDs();
            }
          }
          cResult[9] = items3;
          cResult[10] = P;
          let tmp17 = P;
          let tmp16 = items3;
        } else {
          tmp16 = cResult[9];
          tmp17 = cResult[10];
        }
        const tmpResult3 = tmp(tmp2[20]);
        afkChannelId = tmp(tmp2[20]).useStateFromStores(tmp16, tmp17);
        if (cResult[11] === afkChannelId) {
          if (cResult[12] === id.afkChannelId) {
            if (cResult[13] === stateFromStores) {
              if (cResult[14] === stateFromStoresArray) {
                if (cResult[20] === id.afkChannelId) {
                  if (cResult[21] === stateFromStores) {
                    if (cResult[22] === stateFromStoresArray) {
                      closure_6 = cResult[23];
                      user = cResult[24];
                    }
                    if (cResult[25] === closure_6) {
                      if (cResult[26] === user) {
                        let tmp30 = cResult[27];
                      }
                      const streamingUser = tmp30.streamingUser;
                      class P {
                        constructor() {
                          return user.getBlockedOrIgnoredIDs();
                        }
                      }
                      if (cResult[28] === tmp35) {
                        if (cResult[29] === streamingUser) {
                          if (cResult[30] === tmp19) {
                            let tmp36 = cResult[31];
                          }
                          return tmp36;
                        }
                      }
                      const obj3 = { voiceUsers: tmp19, streamingUser, streamingChannelId: tmp35 };
                      cResult[28] = tmp35;
                      cResult[29] = streamingUser;
                      cResult[30] = tmp19;
                      cResult[31] = obj3;
                      tmp36 = obj3;
                    }
                    class P {
                      constructor() {
                        return user.getBlockedOrIgnoredIDs();
                      }
                    }
                    tmp31[0] = user;
                    tmp31[1] = closure_6;
                    cResult[25] = closure_6;
                    cResult[26] = user;
                    cResult[27] = tmp31;
                    tmp30 = tmp31;
                  }
                }
                class P {
                  constructor() {
                    return user.getBlockedOrIgnoredIDs();
                  }
                }
                closure_6 = null;
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
                      let tmp5 = null != found;
                      if (tmp5) {
                        tmp5 = null == user;
                      }
                      if (tmp5) {
                        user = found.user;
                        closure_6 = item;
                      }
                    }
                  }
                });
                cResult[20] = id.afkChannelId;
                cResult[21] = stateFromStores;
                cResult[22] = stateFromStoresArray;
                cResult[23] = closure_6;
                cResult[24] = user;
              }
            }
          }
        }
        if (cResult[16] === afkChannelId) {
          if (cResult[17] === id.afkChannelId) {
            id(tmp2[22]);
            class P {
              constructor() {
                return user.getBlockedOrIgnoredIDs();
              }
            }
            cResult[11] = afkChannelId;
            afkChannelId = id.afkChannelId;
            cResult[12] = afkChannelId;
            cResult[13] = stateFromStores;
            cResult[14] = stateFromStoresArray;
            cResult[15] = tmp2;
          }
        }
        const fn3 = function k(arg0) {
          if (arg0 === id.afkChannelId) {
            return [];
          } else {
            let items = stateFromStores[arg0];
            if (items == null) {
              items = [];
            }
            const mapped = items.map((user) => user.user);
            return BlockedUserUtils.filterOutBlockedOrIgnoredUsers(mapped, afkChannelId);
          }
        };
        cResult[16] = afkChannelId;
        cResult[17] = id.afkChannelId;
        cResult[18] = stateFromStores;
        cResult[19] = fn3;
        const tmpResult4 = tmp(tmp2[20]);
      }
      const fn = function v() {
        const found = GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY].filter((channel) => {
          channel = channel.channel;
          let tmp = channel.type === constants.GUILD_VOICE;
          if (tmp) {
            tmp = !guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(id, channel.id);
          }
          if (tmp) {
            tmp = isHomeDrawerChannelInChannelList(channel);
          }
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
      const obj2 = require("isHomeDrawerChannelInChannelList");
    }
  : function useVoiceUsers(id) {
      _require = id;
      id = id.id;
      isHomeDrawerChannelInChannelList =
        require("isHomeDrawerChannelInChannelList").useIsHomeDrawerChannelInChannelList();
      const obj = require("isHomeDrawerChannelInChannelList");
      let items = [stateFromStores1, UserGuildSettingsStore];
      const items1 = [id, isHomeDrawerChannelInChannelList];
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(
        items,
        () => {
          const found = GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY].filter((channel) => {
            channel = channel.channel;
            let tmp = channel.type === constants.GUILD_VOICE;
            if (tmp) {
              tmp = !guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(streamingChannelId, channel.id);
            }
            if (tmp) {
              tmp = isHomeDrawerChannelInChannelList(channel);
            }
            return tmp;
          });
          return found.map((channel) => channel.channel.id);
        },
        items1,
      );
      const obj2 = require("initialize");
      const items2 = [SortedVoiceStateStore];
      const items3 = [id];
      const stateFromStores = require("initialize").useStateFromStores(
        items2,
        () => SortedVoiceStateStore.getVoiceStates(id),
        items3,
      );
      const obj3 = require("initialize");
      const items4 = [RelationshipStore];
      stateFromStores1 = require("initialize").useStateFromStores(items4, () =>
        blockedOrIgnoredIDs.getBlockedOrIgnoredIDs(),
      );
      const items5 = [stateFromStoresArray, stateFromStores, id.afkChannelId, stateFromStores1];
      const items6 = [stateFromStores, id.afkChannelId, stateFromStoresArray];
      const memo = stateFromStoresArray.useMemo(
        () =>
          _modDef12.flatMap(stateFromStoresArray, (arg0) => {
            if (arg0 === id.afkChannelId) {
              return [];
            } else {
              let items = stateFromStores[arg0];
              if (items == null) {
                items = [];
              }
              const mapped = items.map((user) => user.user);
              return closure_0(isHomeDrawerChannelInChannelList[21]).filterOutBlockedOrIgnoredUsers(
                mapped,
                stateFromStores1,
              );
            }
          }),
        items5,
      );
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
              let tmp5 = null != found;
              if (tmp5) {
                tmp5 = null == user;
              }
              if (tmp5) {
                user = found.user;
                closure_1 = item;
              }
            }
          }
        });
        return { streamingUser: user, streamingChannelId };
      }, items6);
      return { voiceUsers: memo, streamingUser: memo1.streamingUser, streamingChannelId: memo1.streamingChannelId };
    };
