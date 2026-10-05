// === Module 10353: HorizontalAutocomplete ===

// Module 10353 (HorizontalAutocomplete)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import Text_Text from "Text/Text" /* 4886 */;
import timing from "timing" /* 4891 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import FastImageDefault from "FastImage" /* 5974 */;
import RoleIconUtils from "RoleIconUtils" /* 6686 */;
import RoleIconDefault from "RoleIcon" /* 6704 */;
import AssetRegistryDefault from "AssetRegistry" /* 7807 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import TextStyles from "TextStyles" /* 5915 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import size from "module_2" /* 2 */;

let channel, set;

let Fonts;
let StyleSheet;
let c10;
let c3;
let closure_12;
let closure_4;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
({ TouchableOpacity: c3, View: closure_4, StyleSheet } = react_native);
({ ChannelTypes: c10, Fonts } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { emoji: { width: 32, height: 32 }, emojiImage: { resizeMode: "contain" }, emojiText: { lineHeight: 32, fontSize: 27, textAlign: "center" }, emojiName: { marginLeft: 8 }, nickname: obj2, status: obj3, horizontalAutocompleteOption: obj4, roleIcon: { marginRight: 4 }, channelName: { marginLeft: 8 } };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 14));
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { paddingHorizontal: 8, flex: 1, flexDirection: "row", height: 56, alignItems: "center", borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_13 = createStyles(obj);
const __initData = { code: "function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function HorizontalAutocompleteTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let onPress;
  let sharedValue;
  let tmp6;
  let obj = sharedValue(576);
  const cResult = obj.c(11);
  ({ children, onPress } = arg0);
  const tmp4 = closure_13();
  const obj2 = sharedValue(4612);
  const tmp = sharedValue;
  sharedValue = obj2.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function n() {
      set = sharedValue.set;
      const obj = timing;
      const result = set(obj.withTiming(1));
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  useMountEffectDefault(tmp6);
  const fn2 = function y() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn2.__closure = { opacity: sharedValue };
  fn2.__workletHash = 14159604656069;
  fn2.__initData = __initData;
  const tmpResult = tmp(4612);
  const animatedStyle = tmpResult.useAnimatedStyle(fn2);
  if (cResult[2] === animatedStyle) {
    let tmp10;
    if (cResult[3] === tmp4.horizontalAutocompleteOption) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === children) {
      let tmp11;
      if (cResult[6] === tmp10) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === onPress) {
        let tmp14;
        if (cResult[9] === tmp11) {
          tmp14 = cResult[10];
        }
        return tmp14;
      }
      const obj3 = { onPress, children: tmp11 };
      const tmp17 = closure_11(closure_3, obj3);
      cResult[8] = onPress;
      cResult[9] = tmp11;
      cResult[10] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { style: tmp10, children };
    const tmp13 = closure_11(ReanimatedRexportDefault.View, obj4);
    cResult[5] = children;
    cResult[6] = tmp10;
    cResult[7] = tmp13;
    tmp11 = tmp13;
  }
  const items = [tmp4.horizontalAutocompleteOption, animatedStyle];
  cResult[2] = animatedStyle;
  cResult[3] = tmp4.horizontalAutocompleteOption;
  cResult[4] = items;
  tmp10 = items;
}) : ((arg0) => {
  let children;
  let items;
  let obj4;
  let onPress;
  let sharedValue;
  ({ children, onPress } = arg0);
  const tmp = closure_13();
  let obj = sharedValue(4612);
  sharedValue = obj.useSharedValue(0);
  useMountEffectDefault(() => {
    set = sharedValue.set;
    const obj = timing;
    const result = set(obj.withTiming(1));
  });
  const fn = function c() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 9120427353030;
  fn.__initData = __initData2;
  const obj3 = { onPress, children: closure_11(ReanimatedRexportDefault.View, obj4) };
  const obj2 = sharedValue(4612);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj4 = { style: items, children };
  items = [tmp.horizontalAutocompleteOption, animatedStyle];
  return closure_11(closure_3, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let obj5 = {
  User: ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
    let guildId;
    let items2;
    let items3;
    let items4;
    let nick;
    let onPress;
    let status;
    let tmp5;
    let tmp6;
    let useReducedMotion;
    let user;
    const obj = react2;
    const cResult = obj.c(28);
    ({ user, nick, status, guildId, onPress } = arg0);
    const tmp4 = closure_13();
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      const fn = function o() {
        return useReducedMotion.useReducedMotion;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp5 = items;
      tmp6 = fn;
    } else {
      [tmp5, tmp6] = cResult;
    }
    const tmpResult = get_initialized;
    const tmp8 = !tmpResult.useStateFromStores(tmp5, tmp6);
    if (cResult[2] === guildId) {
      if (cResult[3] === status) {
        if (cResult[4] === tmp4.status) {
          if (cResult[5] === tmp8) {
            let tmp9;
            let tmp11;
            let tmp12;
            if (cResult[6] === user) {
              tmp9 = cResult[7];
            }
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { marginLeft: 8, height: 56, flex: 1, flexDirection: "column", justifyContent: "center" };
              cResult[8] = obj2;
              tmp11 = obj2;
            } else {
              tmp11 = cResult[8];
            }
            if (cResult[9] !== tmp4.nickname) {
              const items1 = [tmp4.nickname];
              cResult[9] = tmp4.nickname;
              cResult[10] = items1;
              tmp12 = items1;
            } else {
              tmp12 = cResult[10];
            }
            if (cResult[11] === nick) {
              let tmp13;
              if (cResult[12] === user) {
                tmp13 = cResult[13];
              }
              if (cResult[14] === tmp12) {
                let tmp17;
                let tmp20;
                let tmp23;
                if (cResult[15] === tmp13) {
                  tmp17 = cResult[16];
                }
                if (cResult[17] !== user) {
                  const obj7 = UserUtilsDefault;
                  const userTag = obj7.getUserTag(user, { decoration: "never" });
                  cResult[17] = user;
                  cResult[18] = userTag;
                  tmp20 = userTag;
                } else {
                  tmp20 = cResult[18];
                }
                if (cResult[19] !== tmp20) {
                  const obj3 = { variant: "text-xs/medium", color: "text-muted", children: items2 };
                  items2 = ["@", tmp20];
                  const tmp25 = closure_12(Text_Text.Text, obj3);
                  cResult[19] = tmp20;
                  cResult[20] = tmp25;
                  tmp23 = tmp25;
                } else {
                  tmp23 = cResult[20];
                }
                if (cResult[21] === tmp23) {
                  let tmp26;
                  if (cResult[22] === tmp17) {
                    tmp26 = cResult[23];
                  }
                  if (cResult[24] === onPress) {
                    if (cResult[25] === tmp26) {
                      let tmp30;
                      if (cResult[26] === tmp9) {
                        tmp30 = cResult[27];
                      }
                      return tmp30;
                    }
                  }
                  const obj4 = { onPress, children: items3 };
                  items3 = [tmp9, tmp26];
                  const tmp33 = closure_12(closure_16, obj4);
                  cResult[24] = onPress;
                  cResult[25] = tmp26;
                  cResult[26] = tmp9;
                  cResult[27] = tmp33;
                  tmp30 = tmp33;
                }
                const obj6 = { style: tmp11, children: items4 };
                items4 = [tmp17, tmp23];
                const tmp29 = closure_12(React3, obj6);
                cResult[21] = tmp23;
                cResult[22] = tmp17;
                cResult[23] = tmp29;
                tmp26 = tmp29;
              }
              const obj8 = { style: tmp12, variant: "text-sm/semibold", children: tmp13 };
              const tmp19 = unpackModuleId(Text_Text.Text, obj8);
              cResult[14] = tmp12;
              cResult[15] = tmp13;
              cResult[16] = tmp19;
              tmp17 = tmp19;
            }
            let name = nick;
            if (nick == null) {
              const obj5 = UserUtilsDefault;
              name = obj5.getName(user);
            }
            cResult[11] = nick;
            cResult[12] = user;
            cResult[13] = name;
            tmp13 = name;
          }
        }
      }
    }
    const obj9 = { status, statusStyle: tmp4.status, user, size: native.AvatarSizes.SMALL, guildId, animate: tmp8 };
    const Avatar = native.Avatar;
    const tmp10 = unpackModuleId(Avatar, obj9);
    cResult[2] = guildId;
    cResult[3] = status;
    cResult[4] = tmp4.status;
    cResult[5] = tmp8;
    cResult[6] = user;
    cResult[7] = tmp10;
    tmp9 = tmp10;
  }) : ((arg0) => {
    let guildId;
    let items1;
    let items2;
    let items3;
    let items4;
    let nick;
    let onPress;
    let status;
    let useReducedMotion;
    let user;
    ({ user, nick } = arg0);
    ({ status, guildId, onPress } = arg0);
    const tmp = closure_13();
    const items = [AccessibilityStore];
    const obj2 = { onPress, children: items1 };
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    const obj3 = { status, statusStyle: tmp.status, user, size: native.AvatarSizes.SMALL, guildId, animate: !stateFromStores };
    const Avatar = native.Avatar;
    items1 = [unpackModuleId(Avatar, obj3), ];
    const obj5 = { style: items2, variant: "text-sm/semibold", children: nick };
    items2 = [tmp.nickname];
    const obj4 = { style: { marginLeft: 8, height: 56, flex: 1, flexDirection: "column", justifyContent: "center" }, children: items3 };
    const Text = Text_Text.Text;
    if (nick == null) {
      const obj6 = UserUtilsDefault;
      nick = obj6.getName(user);
    }
    items3 = [unpackModuleId(Text, obj5), ];
    const obj7 = { variant: "text-xs/medium", color: "text-muted", children: items4 };
    const Text2 = Text_Text.Text;
    items4 = ["@"];
    const obj8 = UserUtilsDefault;
    items4[1] = obj8.getUserTag(user, { decoration: "never" });
    items3[1] = closure_12(Text2, obj7);
    items1[1] = closure_12(React3, obj4);
    return closure_12(closure_16, obj2);
  }),
  Role: ReactCompilerGating.isReactCompilerEnabled() ? ((colorString) => {
    let first;
    let guildId;
    let id;
    let items1;
    let name;
    let obj7;
    let onPress;
    const obj = guildId(576);
    const cResult = obj.c(22);
    ({ onPress, guildId } = colorString);
    ({ name, id } = colorString);
    colorString = colorString.colorString;
    const tmp4 = closure_13();
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildRoleStore];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === guildId) {
      let tmp7;
      let tmp9;
      if (cResult[2] === id) {
        tmp7 = cResult[3];
      }
      const tmpResult = guildId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[4] !== stateFromStores) {
        let roleIconData = null;
        if (null != stateFromStores) {
          const tmpResult2 = guildId(6686);
          roleIconData = tmpResult2.getRoleIconData(stateFromStores, 30);
        }
        cResult[4] = stateFromStores;
        cResult[5] = roleIconData;
        tmp9 = roleIconData;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === tmp9) {
        if (cResult[7] === name) {
          let tmp11;
          let tmp16;
          if (cResult[8] === tmp4.roleIcon) {
            tmp11 = cResult[9];
          }
          if (cResult[10] !== colorString) {
            let tmp18;
            if (null != colorString) {
              tmp18 = { color: colorString };
              const obj2 = { color: colorString };
            }
            cResult[10] = colorString;
            cResult[11] = tmp18;
            tmp16 = tmp18;
          } else {
            tmp16 = cResult[11];
          }
          if (cResult[12] === tmp4.nickname) {
            let tmp19;
            if (cResult[13] === tmp16) {
              tmp19 = cResult[14];
            }
            const _HermesInternal = HermesInternal;
            const combined = "@" + name;
            if (cResult[15] === tmp19) {
              let tmp21;
              if (cResult[16] === combined) {
                tmp21 = cResult[17];
              }
              if (cResult[18] === onPress) {
                if (cResult[19] === tmp11) {
                  let tmp24;
                  if (cResult[20] === tmp21) {
                    tmp24 = cResult[21];
                  }
                  return tmp24;
                }
              }
              const obj3 = { onPress, children: items1 };
              items1 = [tmp11, tmp21];
              const tmp27 = closure_12(closure_16, obj3);
              cResult[18] = onPress;
              cResult[19] = tmp11;
              cResult[20] = tmp21;
              cResult[21] = tmp27;
              tmp24 = tmp27;
            }
            const obj4 = { style: tmp19, children: combined };
            const tmp23 = closure_11(guildId(1188).LegacyText, obj4);
            cResult[15] = tmp19;
            cResult[16] = combined;
            cResult[17] = tmp23;
            tmp21 = tmp23;
          }
          const items2 = [tmp4.nickname, tmp16];
          cResult[12] = tmp4.nickname;
          cResult[13] = tmp16;
          cResult[14] = items2;
          tmp19 = items2;
        }
      }
      let tmp12 = null;
      if (null != tmp9) {
        const obj6 = { style: tmp4.roleIcon, children: closure_11(id(6704), obj7) };
        obj7 = { name, src: null, unicodeEmoji: null, size: 24 };
        ({ customIconSrc: obj5.src, unicodeEmoji: obj5.unicodeEmoji } = tmp9);
        tmp12 = closure_11(closure_4, obj6);
      }
      cResult[6] = tmp9;
      cResult[7] = name;
      cResult[8] = tmp4.roleIcon;
      cResult[9] = tmp12;
      tmp11 = tmp12;
    }
    const fn = function o() {
      return GuildRoleStore.getRole(guildId, id);
    };
    cResult[1] = guildId;
    cResult[2] = id;
    cResult[3] = fn;
    tmp7 = fn;
  }) : ((onPress) => {
    let colorString;
    let items1;
    let name;
    let obj4;
    ({ guildId: require, name, id: importDefault, colorString } = onPress);
    onPress = onPress.onPress;
    const tmp = closure_13();
    const items = [GuildRoleStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getRole(require, importDefault));
    let roleIconData = null;
    if (null != stateFromStores) {
      const tmp2Result = RoleIconUtils;
      roleIconData = tmp2Result.getRoleIconData(stateFromStores, 30);
    }
    let tmp8 = null;
    const obj2 = { onPress, children: items1 };
    if (null != roleIconData) {
      const obj3 = { style: tmp.roleIcon, children: closure_11(RoleIconDefault, obj4) };
      obj4 = { name, src: null, unicodeEmoji: null, size: 24 };
      ({ customIconSrc: obj5.src, unicodeEmoji: obj5.unicodeEmoji } = roleIconData);
      tmp8 = closure_11(closure_4, obj3);
    }
    items1 = [tmp8, ];
    const items2 = [tmp.nickname, ];
    let tmp13;
    const LegacyText = native.LegacyText;
    if (null != colorString) {
      tmp13 = { color: colorString };
      const obj6 = { color: colorString };
    }
    items2[1] = tmp13;
    const obj7 = { style: items2, children: "@" + name };
    items1[1] = closure_11(LegacyText, obj7);
    return closure_12(closure_16, obj2);
  }),
  Channel: ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
    let channelIconWithGuild;
    let first;
    let items2;
    let tmp7;
    let tmp8;
    const obj = channel(576);
    const cResult = obj.c(18);
    channel = channel.channel;
    const onPress = channel.onPress;
    const tmp4 = closure_13();
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildStore];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== channel) {
      const fn = function o() {
        return GuildStore.getGuild(channel.getGuildId());
      };
      const items1 = [channel];
      cResult[1] = channel;
      cResult[2] = fn;
      cResult[3] = items1;
      tmp8 = items1;
      tmp7 = fn;
    } else {
      tmp7 = cResult[2];
      tmp8 = cResult[3];
    }
    const tmpResult = channel(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (cResult[4] === channel) {
      let tmp10;
      let tmp13;
      let tmp16;
      if (cResult[5] === stateFromStores) {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== tmp10) {
        const obj2 = { source: tmp10 };
        const tmp15 = closure_11(channel(1188).Icon, obj2);
        cResult[7] = tmp10;
        cResult[8] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] !== channel) {
        const tmpResult3 = channel(5043);
        const channelName = tmpResult3.computeChannelName(channel, UserStore, RelationshipStore);
        cResult[9] = channel;
        cResult[10] = channelName;
        tmp16 = channelName;
      } else {
        tmp16 = cResult[10];
      }
      if (cResult[11] === tmp16) {
        let tmp20;
        if (cResult[12] === tmp4.channelName) {
          tmp20 = cResult[13];
        }
        if (cResult[14] === tmp13) {
          if (cResult[15] === onPress) {
            let tmp23;
            if (cResult[16] === tmp20) {
              tmp23 = cResult[17];
            }
            return tmp23;
          }
        }
        const obj3 = { onPress, children: items2 };
        items2 = [tmp13, tmp20];
        const tmp26 = closure_12(closure_16, obj3);
        cResult[14] = tmp13;
        cResult[15] = onPress;
        cResult[16] = tmp20;
        cResult[17] = tmp26;
        tmp23 = tmp26;
      }
      const obj4 = { style: tmp4.channelName, variant: "text-sm/semibold", children: tmp16 };
      const tmp22 = closure_11(channel(4886).Text, obj4);
      cResult[11] = tmp16;
      cResult[12] = tmp4.channelName;
      cResult[13] = tmp22;
      tmp20 = tmp22;
    }
    if (channel.type === constants.GUILD_CATEGORY) {
      channelIconWithGuild = AssetRegistryDefault;
    } else {
      const tmpResult4 = channel(5812);
      channelIconWithGuild = tmpResult4.getChannelIconWithGuild(channel, stateFromStores);
    }
    cResult[4] = channel;
    cResult[5] = stateFromStores;
    cResult[6] = channelIconWithGuild;
    tmp10 = channelIconWithGuild;
  }) : ((channel) => {
    let channelIconWithGuild;
    let items;
    channel = channel.channel;
    const onPress = channel.onPress;
    const tmp = closure_13();
    channel(504);
    [][0] = channel;
    if (channel.type === constants.GUILD_CATEGORY) {
      channelIconWithGuild = AssetRegistryDefault;
    } else {
      const tmp2Result = channel(5812);
      channelIconWithGuild = tmp2Result.getChannelIconWithGuild(channel, tmp5);
    }
    const obj = { onPress, children: items };
    items = [closure_11(channel(1188).Icon, { source: channelIconWithGuild }), ];
    const tmp8 = closure_11(channel(1188).Icon, { source: channelIconWithGuild });
    const tmp2Result2 = channel(5043);
    const channelName = tmp2Result2.computeChannelName(channel, UserStore, RelationshipStore);
    const obj2 = { style: tmp.channelName, variant: "text-sm/semibold", children: channelName };
    items[1] = closure_11(channel(4886).Text, obj2);
    return closure_12(closure_16, obj);
  }),
  Emoji: ReactCompilerGating.isReactCompilerEnabled() ? ((name) => {
    let items2;
    let onPress;
    let surrogates;
    let tmp15;
    let tmp6;
    let url;
    const obj = react2;
    const cResult = obj.c(23);
    ({ url, surrogates, onPress } = name);
    name = name.name;
    const tmp4 = closure_13();
    if ("" !== url) {
      if (cResult[0] === tmp4.emoji) {
        let tmp9;
        let tmp10;
        if (cResult[1] === tmp4.emojiImage) {
          tmp9 = cResult[2];
        }
        if (cResult[3] !== url) {
          const obj2 = { uri: url };
          cResult[3] = url;
          cResult[4] = obj2;
          tmp10 = obj2;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] === tmp9) {
          let tmp11;
          if (cResult[6] === tmp10) {
            tmp11 = cResult[7];
          }
          tmp6 = tmp11;
        }
        const obj3 = { style: tmp9, source: tmp10 };
        const tmp14 = unpackModuleId(FastImageDefault, obj3);
        cResult[5] = tmp9;
        cResult[6] = tmp10;
        cResult[7] = tmp14;
        tmp11 = tmp14;
      }
      const items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp4);
      cResult[0] = tmp4.emoji;
      cResult[1] = tmp4.emojiImage;
      cResult[2] = items;
      tmp9 = items;
    } else {
      if (cResult[8] === tmp4.emoji) {
        let tmp5;
        if (cResult[9] === tmp4.emojiText) {
          tmp5 = cResult[10];
        }
        if (cResult[11] === surrogates) {
          if (cResult[12] === tmp5) {
            tmp6 = cResult[13];
          }
        }
        const obj4 = { style: tmp5, allowFontScaling: false, children: surrogates };
        const tmp8 = unpackModuleId(native.LegacyText, obj4);
        cResult[11] = surrogates;
        cResult[12] = tmp5;
        cResult[13] = tmp8;
        tmp6 = tmp8;
      }
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp4);
      cResult[8] = tmp4.emoji;
      cResult[9] = tmp4.emojiText;
      cResult[10] = items1;
      tmp5 = items1;
    }
    if (cResult[14] !== tmp6) {
      const obj5 = { children: tmp6 };
      const tmp18 = unpackModuleId(React3, obj5);
      cResult[14] = tmp6;
      cResult[15] = tmp18;
      tmp15 = tmp18;
    } else {
      tmp15 = cResult[15];
    }
    const combined = ":" + name + ":";
    if (cResult[16] === tmp4.emojiName) {
      let tmp20;
      if (cResult[17] === combined) {
        tmp20 = cResult[18];
      }
      if (cResult[19] === onPress) {
        if (cResult[20] === tmp15) {
          let tmp22;
          if (cResult[21] === tmp20) {
            tmp22 = cResult[22];
          }
          return tmp22;
        }
      }
      const obj6 = { onPress, children: items2 };
      items2 = [tmp15, tmp20];
      const tmp25 = closure_12(closure_16, obj6);
      cResult[19] = onPress;
      cResult[20] = tmp15;
      cResult[21] = tmp20;
      cResult[22] = tmp25;
      tmp22 = tmp25;
    }
    const obj7 = { style: tmp4.emojiName, variant: "text-sm/semibold", children: combined };
    const tmp21 = unpackModuleId(Text_Text.Text, obj7);
    cResult[16] = tmp4.emojiName;
    cResult[17] = combined;
    cResult[18] = tmp21;
    tmp20 = tmp21;
  }) : ((url) => {
    let items;
    let items1;
    let items2;
    let name;
    let obj3;
    let onPress;
    let surrogates;
    let tmp5;
    let tmp6;
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = closure_13();
    if ("" !== url) {
      const obj2 = { style: items, source: obj3 };
      items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj3 = { uri: url };
      tmp5 = unpackModuleId(FastImageDefault, obj2);
      tmp6 = unpackModuleId;
    } else {
      const obj = { style: items1, allowFontScaling: false, children: surrogates };
      items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      tmp5 = unpackModuleId(native.LegacyText, obj);
      tmp6 = unpackModuleId;
    }
    const obj4 = { onPress, children: items2 };
    items2 = [tmp6(React3, { children: tmp5 }), ];
    const obj5 = { style: tmp.emojiName, variant: "text-sm/semibold", children: ":" + name + ":" };
    const Text = Text_Text.Text;
    items2[1] = tmp6(Text, obj5);
    return closure_12(closure_16, obj4);
  })
};
ReactCompilerGating = ReactCompilerGating_mod;
let result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx");

export default obj5;