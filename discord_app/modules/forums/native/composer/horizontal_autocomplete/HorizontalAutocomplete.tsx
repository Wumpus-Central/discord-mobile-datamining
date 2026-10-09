// discord_app/modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import useMountEffectDefault from "../../../../../hooks/useMountEffect.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import RoleIconUtils from "../../../../guild_boosting/RoleIconUtils.tsx";
import RoleIconDefault from "../../../../roles/native/RoleIcon.tsx";
import _modDef8245 from "../../../../../../_runtime/metro/08245__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import GuildRoleStore from "../../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1085);
({ ChannelTypes: c10, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  emoji: { width: 32, height: 32 },
  emojiImage: { resizeMode: "contain" },
  emojiText: { lineHeight: 32, fontSize: 27, textAlign: "center" },
  emojiName: { marginLeft: 8 },
  nickname: null,
  status: null,
  horizontalAutocompleteOption: null,
  roleIcon: null,
  channelName: null,
};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 14));
obj2.nickname = {};
obj2.status = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj3 = {};
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.horizontalAutocompleteOption = {
  paddingHorizontal: 8,
  flex: 1,
  flexDirection: "row",
  height: 56,
  alignItems: "center",
  borderRightWidth: StyleSheet.hairlineWidth,
  borderRightColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.roleIcon = { marginRight: 4 };
obj2.channelName = { marginLeft: 8 };
let closure_13 = createStyles.createStyles(obj2);
const __initData = {
  code: "function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function HorizontalAutocompleteTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HorizontalAutocompleteOption(arg0) {
      const cResult = sharedValue(576).c(11);
      ({ children, onPress } = arg0);
      const tmp4 = closure_13();
      const obj = sharedValue(576);
      const tmp = sharedValue;
      sharedValue = sharedValue(4811).useSharedValue(0);
      if (cResult[0] !== sharedValue) {
        const fn = function o() {
          const result = sharedValue.set(timing.withTiming(1));
        };
        cResult[0] = sharedValue;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      useMountEffectDefault(tmp6);
      const obj2 = sharedValue(4811);
      const fn2 = function y() {
        return { opacity: sharedValue.get() };
      };
      fn2.__closure = { opacity: sharedValue };
      fn2.__workletHash = 14159604656069;
      fn2.__initData = __initData;
      const animatedStyle = tmp(4811).useAnimatedStyle(fn2);
      if (cResult[2] === animatedStyle) {
        if (cResult[3] === tmp4.horizontalAutocompleteOption) {
          let tmp10 = cResult[4];
        }
        if (cResult[5] === children) {
          if (cResult[6] === tmp10) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === onPress) {
            if (cResult[9] === tmp11) {
              let tmp14 = cResult[10];
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
      const tmpResult = tmp(4811);
    }
  : function HorizontalAutocompleteOption(arg0) {
      let sharedValue;
      ({ children, onPress } = arg0);
      const tmp = closure_13();
      sharedValue = sharedValue(4811).useSharedValue(0);
      useMountEffectDefault(() => {
        const result = sharedValue.set(timing.withTiming(1));
      });
      const obj = sharedValue(4811);
      const fn = function c() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 9120427353030;
      fn.__initData = __initData2;
      const obj3 = { onPress, children: null };
      const animatedStyle = sharedValue(4811).useAnimatedStyle(fn);
      const obj4 = { style: null, children };
      const items = [tmp.horizontalAutocompleteOption, animatedStyle];
      obj4.style = items;
      obj3.children = closure_11(ReanimatedRexportDefault.View, obj4);
      return closure_11(closure_3, obj3);
    };
ReactCompilerGating = fn(558);
let obj8 = {
  User: ReactCompilerGating.isReactCompilerEnabled()
    ? function User(arg0) {
        const cResult = c.c(26);
        ({ user, nick, status, guildId, onPress } = arg0);
        const tmp4 = closure_13();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AccessibilityStore];
          const fn = function n() {
            return useReducedMotion.useReducedMotion;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const tmp8 = !initialize.useStateFromStores(tmp5, tmp6);
        if (cResult[2] === guildId) {
          if (cResult[3] === status) {
            if (cResult[4] === tmp4.status) {
              if (cResult[5] === tmp8) {
                if (cResult[6] === user) {
                  let tmp9 = cResult[7];
                }
                const _Symbol = Symbol;
                if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj2 = {
                    marginLeft: 8,
                    height: 56,
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                  };
                  cResult[8] = obj2;
                  let tmp11 = obj2;
                } else {
                  tmp11 = cResult[8];
                }
                if (cResult[9] === nick) {
                  if (cResult[10] === user) {
                    let tmp12 = cResult[11];
                  }
                  if (cResult[12] === tmp4.nickname) {
                    if (cResult[13] === tmp12) {
                      let tmp16 = cResult[14];
                    }
                    if (cResult[15] !== user) {
                      const userTag = UserUtilsDefault.getUserTag(user, { decoration: "never" });
                      cResult[15] = user;
                      cResult[16] = userTag;
                      let tmp19 = userTag;
                    } else {
                      tmp19 = cResult[16];
                    }
                    if (cResult[17] !== tmp19) {
                      const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
                      const items1 = ["@", tmp19];
                      obj3.children = items1;
                      const tmp24 = __initData(Text_Text.Text, obj3);
                      cResult[17] = tmp19;
                      cResult[18] = tmp24;
                      let tmp22 = tmp24;
                    } else {
                      tmp22 = cResult[18];
                    }
                    if (cResult[19] === tmp16) {
                      if (cResult[20] === tmp22) {
                        let tmp25 = cResult[21];
                      }
                      if (cResult[22] === onPress) {
                        if (cResult[23] === tmp25) {
                          if (cResult[24] === tmp9) {
                            let tmp29 = cResult[25];
                          }
                          return tmp29;
                        }
                      }
                      const obj4 = { onPress, children: null };
                      const items2 = [tmp9, tmp25];
                      obj4.children = items2;
                      const tmp32 = __initData(closure_16, obj4);
                      cResult[22] = onPress;
                      cResult[23] = tmp25;
                      cResult[24] = tmp9;
                      cResult[25] = tmp32;
                      tmp29 = tmp32;
                    }
                    const obj6 = { style: tmp11, children: null };
                    const items3 = [tmp16, tmp22];
                    obj6.children = items3;
                    const tmp28 = __initData(React4, obj6);
                    cResult[19] = tmp16;
                    cResult[20] = tmp22;
                    cResult[21] = tmp28;
                    tmp25 = tmp28;
                  }
                  const obj8 = { style: tmp4.nickname, variant: "text-sm/semibold", children: tmp12 };
                  const tmp18 = closure_1_11(Text_Text.Text, obj8);
                  cResult[12] = tmp4.nickname;
                  cResult[13] = tmp12;
                  cResult[14] = tmp18;
                  tmp16 = tmp18;
                }
                let name = nick;
                if (nick == null) {
                  name = UserUtilsDefault.getName(user);
                }
                cResult[9] = nick;
                cResult[10] = user;
                cResult[11] = name;
                tmp12 = name;
              }
            }
          }
        }
        const tmpResult = initialize;
        const tmp10 = closure_1_11(native.Avatar, {
          status,
          statusStyle: tmp4.status,
          user,
          size: native.AvatarSizes.SMALL,
          guildId,
          animate: tmp8,
        });
        cResult[2] = guildId;
        cResult[3] = status;
        cResult[4] = tmp4.status;
        cResult[5] = tmp8;
        cResult[6] = user;
        cResult[7] = tmp10;
        tmp9 = tmp10;
        const obj9 = { status, statusStyle: tmp4.status, user, size: native.AvatarSizes.SMALL, guildId, animate: tmp8 };
      }
    : function User(arg0) {
        ({ user, nick } = arg0);
        ({ status, guildId, onPress } = arg0);
        const tmp = closure_13();
        const items = [AccessibilityStore];
        const obj2 = { onPress, children: null };
        const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
        const items1 = [
          closure_1_11(native.Avatar, {
            status,
            statusStyle: tmp.status,
            user,
            size: native.AvatarSizes.SMALL,
            guildId,
            animate: !stateFromStores,
          }),
        ];
        const obj4 = {
          style: { marginLeft: 8, height: 56, flex: 1, flexDirection: "column", justifyContent: "center" },
          children: null,
        };
        const obj5 = { style: tmp.nickname, variant: "text-sm/semibold", children: null };
        if (nick == null) {
          nick = UserUtilsDefault.getName(user);
        }
        obj5.children = nick;
        const items2 = [closure_1_11(Text_Text.Text, obj5)];
        const obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const obj3 = {
          status,
          statusStyle: tmp.status,
          user,
          size: native.AvatarSizes.SMALL,
          guildId,
          animate: !stateFromStores,
        };
        const items3 = ["@", UserUtilsDefault.getUserTag(user, { decoration: "never" })];
        obj7.children = items3;
        items2[1] = __initData(Text_Text.Text, obj7);
        obj4.children = items2;
        items1[1] = __initData(React4, obj4);
        obj2.children = items1;
        return __initData(closure_16, obj2);
      },
  Role: null,
  Channel: null,
  Emoji: null,
};
ReactCompilerGating = fn(558);
obj8.Role = ReactCompilerGating.isReactCompilerEnabled()
  ? function Role(colorString) {
      const cResult = guildId(576).c(22);
      ({ onPress, guildId } = colorString);
      ({ name, id } = colorString);
      colorString = colorString.colorString;
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        if (cResult[2] === id) {
          let tmp7 = cResult[3];
        }
        const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
        if (cResult[4] !== stateFromStores) {
          let roleIconData = null;
          if (null != stateFromStores) {
            roleIconData = guildId(6877).getRoleIconData(stateFromStores, 30);
            const tmpResult2 = guildId(6877);
          }
          cResult[4] = stateFromStores;
          cResult[5] = roleIconData;
          let tmp9 = roleIconData;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp9) {
          if (cResult[7] === name) {
            if (cResult[8] === tmp4.roleIcon) {
              let tmp11 = cResult[9];
            }
            if (cResult[10] !== colorString) {
              let tmp18;
              if (null != colorString) {
                const obj2 = { color: colorString };
                tmp18 = obj2;
              }
              cResult[10] = colorString;
              cResult[11] = tmp18;
              let tmp16 = tmp18;
            } else {
              tmp16 = cResult[11];
            }
            if (cResult[12] === tmp4.nickname) {
              if (cResult[13] === tmp16) {
                let tmp19 = cResult[14];
              }
              const _HermesInternal = HermesInternal;
              const combined = "@" + name;
              if (cResult[15] === tmp19) {
                if (cResult[16] === combined) {
                  let tmp21 = cResult[17];
                }
                if (cResult[18] === onPress) {
                  if (cResult[19] === tmp11) {
                    if (cResult[20] === tmp21) {
                      let tmp24 = cResult[21];
                    }
                    return tmp24;
                  }
                }
                const obj3 = { onPress, children: null };
                const items1 = [tmp11, tmp21];
                obj3.children = items1;
                const tmp27 = closure_12(closure_16, obj3);
                cResult[18] = onPress;
                cResult[19] = tmp11;
                cResult[20] = tmp21;
                cResult[21] = tmp27;
                tmp24 = tmp27;
              }
              const obj4 = { style: tmp19, children: combined };
              const tmp23 = closure_11(guildId(1200).LegacyText, obj4);
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
          const obj6 = { style: tmp4.roleIcon, children: null };
          const obj7 = { name, src: null, unicodeEmoji: null, size: 24 };
          ({ customIconSrc: obj5.src, unicodeEmoji: obj5.unicodeEmoji } = tmp9);
          obj6.children = closure_11(id(6895), obj7);
          tmp12 = closure_11(closure_4, obj6);
        }
        cResult[6] = tmp9;
        cResult[7] = name;
        cResult[8] = tmp4.roleIcon;
        cResult[9] = tmp12;
        tmp11 = tmp12;
        const tmpResult = guildId(504);
      }
      const fn = function n() {
        return GuildRoleStore.getRole(guildId, id);
      };
      cResult[1] = guildId;
      cResult[2] = id;
      cResult[3] = fn;
      tmp7 = fn;
      const obj = guildId(576);
    }
  : function Role(onPress) {
      ({ guildId: require, name, id: importDefault, colorString } = onPress);
      const tmp = closure_13();
      const items = [GuildRoleStore];
      const stateFromStores = initialize.useStateFromStores(items, () =>
        GuildRoleStore.getRole(require, importDefault),
      );
      let roleIconData = null;
      if (null != stateFromStores) {
        roleIconData = RoleIconUtils.getRoleIconData(stateFromStores, 30);
        const tmp2Result = RoleIconUtils;
      }
      const obj2 = { onPress: onPress.onPress, children: null };
      let tmp8 = null;
      if (null != roleIconData) {
        const obj3 = { style: tmp.roleIcon, children: null };
        const obj4 = { name, src: null, unicodeEmoji: null, size: 24 };
        ({ customIconSrc: obj5.src, unicodeEmoji: obj5.unicodeEmoji } = roleIconData);
        obj3.children = closure_11(RoleIconDefault, obj4);
        tmp8 = closure_11(closure_4, obj3);
      }
      const items1 = [tmp8];
      const items2 = [tmp.nickname];
      let tmp13;
      if (null != colorString) {
        const obj6 = { color: colorString };
        tmp13 = obj6;
      }
      items2[1] = tmp13;
      items1[1] = closure_11(native.LegacyText, { style: items2, children: "@" + name });
      obj2.children = items1;
      return closure_12(closure_16, obj2);
    };
ReactCompilerGating = fn(558);
obj8.Channel = ReactCompilerGating.isReactCompilerEnabled()
  ? function Channel(channel) {
      const cResult = channel(576).c(18);
      channel = channel.channel;
      const onPress = channel.onPress;
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function n() {
          return GuildStore.getGuild(channel.getGuildId());
        };
        const items1 = [channel];
        cResult[1] = channel;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === channel) {
        if (cResult[5] === stateFromStores) {
          if (cResult[7] !== cResult[6]) {
            const obj2 = { source: tmp10 };
            const tmp15 = closure_11(tmp(1200).Icon, obj2);
            cResult[7] = tmp10;
            cResult[8] = tmp15;
            let tmp13 = tmp15;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] !== channel) {
            const channelName = tmp(5418).computeChannelName(channel, UserStore, RelationshipStore);
            cResult[9] = channel;
            cResult[10] = channelName;
            let tmp16 = channelName;
            const tmpResult3 = tmp(5418);
          } else {
            tmp16 = cResult[10];
          }
          if (cResult[11] === tmp16) {
            if (cResult[12] === tmp4.channelName) {
              let tmp20 = cResult[13];
            }
            if (cResult[14] === tmp13) {
              if (cResult[15] === onPress) {
                if (cResult[16] === tmp20) {
                  let tmp23 = cResult[17];
                }
                return tmp23;
              }
            }
            const obj3 = { onPress, children: null };
            const items2 = [tmp13, tmp20];
            obj3.children = items2;
            const tmp26 = closure_12(closure_16, obj3);
            cResult[14] = tmp13;
            cResult[15] = onPress;
            cResult[16] = tmp20;
            cResult[17] = tmp26;
            tmp23 = tmp26;
          }
          const obj4 = { style: tmp4.channelName, variant: "text-sm/semibold", children: tmp16 };
          const tmp22 = closure_11(tmp(5087).Text, obj4);
          cResult[11] = tmp16;
          cResult[12] = tmp4.channelName;
          cResult[13] = tmp22;
          tmp20 = tmp22;
        }
      }
      if (channel.type === constants.GUILD_CATEGORY) {
        let channelIconWithGuild = _modDef8245;
      } else {
        channelIconWithGuild = tmp(8142).getChannelIconWithGuild(channel, stateFromStores);
        const tmpResult4 = tmp(8142);
      }
      cResult[4] = channel;
      cResult[5] = stateFromStores;
      cResult[6] = channelIconWithGuild;
      const tmpResult = channel(504);
    }
  : function Channel(channel) {
      channel = channel.channel;
      channel(504);
      [][0] = channel;
      if (channel.type === constants.GUILD_CATEGORY) {
        let channelIconWithGuild = _modDef8245;
      } else {
        channelIconWithGuild = tmp2(8142).getChannelIconWithGuild(channel, tmp5);
        const tmp2Result = tmp2(8142);
      }
      const tmp = closure_13();
      const tmp8 = closure_11(channel(1200).Icon, { source: channelIconWithGuild });
      const obj = { onPress: channel.onPress, children: null };
      const items = [tmp8];
      const channelName = channel(5418).computeChannelName(channel, UserStore, RelationshipStore);
      items[1] = closure_11(channel(5087).Text, {
        style: tmp.channelName,
        variant: "text-sm/semibold",
        children: channelName,
      });
      obj.children = items;
      return closure_12(closure_16, obj);
    };
ReactCompilerGating = fn(558);
obj8.Emoji = ReactCompilerGating.isReactCompilerEnabled()
  ? function Emoji(name) {
      const cResult = c.c(23);
      ({ url, surrogates, onPress } = name);
      const tmp4 = closure_13();
      if ("" !== url) {
        if (cResult[0] === tmp4.emoji) {
          if (cResult[1] === tmp4.emojiImage) {
            let tmp9 = cResult[2];
          }
          if (cResult[3] !== url) {
            const obj2 = { uri: url };
            cResult[3] = url;
            cResult[4] = obj2;
            let tmp10 = obj2;
          } else {
            tmp10 = cResult[4];
          }
          if (cResult[5] === tmp9) {
          }
          const obj3 = { style: tmp9, source: tmp10 };
          const tmp14 = closure_1_11(FastImageDefault, obj3);
          cResult[5] = tmp9;
          cResult[6] = tmp10;
          cResult[7] = tmp14;
        }
        const items = [,];
        ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp4);
        cResult[0] = tmp4.emoji;
        cResult[1] = tmp4.emojiImage;
        cResult[2] = items;
        tmp9 = items;
      } else {
        if (cResult[8] === tmp4.emoji) {
          if (cResult[9] === tmp4.emojiText) {
            let tmp5 = cResult[10];
          }
          if (cResult[11] === surrogates) {
            if (cResult[12] === tmp5) {
              let tmp6 = cResult[13];
            }
            if (cResult[14] !== tmp6) {
              const obj4 = { children: tmp6 };
              const tmp19 = closure_1_11(React4, obj4);
              cResult[14] = tmp6;
              cResult[15] = tmp19;
              let tmp16 = tmp19;
            } else {
              tmp16 = cResult[15];
            }
            const _HermesInternal = HermesInternal;
            const combined = ":" + name.name + ":";
            if (cResult[16] === tmp4.emojiName) {
              if (cResult[17] === combined) {
                let tmp22 = cResult[18];
              }
              if (cResult[19] === onPress) {
                if (cResult[20] === tmp16) {
                  if (cResult[21] === tmp22) {
                    let tmp25 = cResult[22];
                  }
                  return tmp25;
                }
              }
              const obj5 = { onPress, children: null };
              const items1 = [tmp16, tmp22];
              obj5.children = items1;
              const tmp28 = __initData(closure_16, obj5);
              cResult[19] = onPress;
              cResult[20] = tmp16;
              cResult[21] = tmp22;
              cResult[22] = tmp28;
              tmp25 = tmp28;
            }
            const obj6 = { style: tmp4.emojiName, variant: "text-sm/semibold", children: combined };
            const tmp24 = closure_1_11(Text_Text.Text, obj6);
            cResult[16] = tmp4.emojiName;
            cResult[17] = combined;
            cResult[18] = tmp24;
            tmp22 = tmp24;
          }
          const obj7 = { style: tmp5, allowFontScaling: false, children: surrogates };
          const tmp8 = closure_1_11(native.LegacyText, obj7);
          cResult[11] = surrogates;
          cResult[12] = tmp5;
          cResult[13] = tmp8;
          tmp6 = tmp8;
        }
        const items2 = [,];
        ({ emoji: arr[0], emojiText: arr[1] } = tmp4);
        cResult[8] = tmp4.emoji;
        cResult[9] = tmp4.emojiText;
        cResult[10] = items2;
        tmp5 = items2;
      }
    }
  : function Emoji(url) {
      url = url.url;
      ({ name, surrogates, onPress } = url);
      const tmp = closure_13();
      if ("" !== url) {
        const obj2 = { style: null, source: null };
        const items = [,];
        ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
        obj2.style = items;
        const obj3 = { uri: url };
        obj2.source = obj3;
        let tmp5 = closure_1_11(FastImageDefault, obj2);
        let tmp6 = closure_1_11;
      } else {
        const obj = { style: null, allowFontScaling: false, children: null };
        const items1 = [,];
        ({ emoji: arr[0], emojiText: arr[1] } = tmp);
        obj.style = items1;
        obj.children = surrogates;
        tmp5 = closure_1_11(native.LegacyText, obj);
        tmp6 = closure_1_11;
      }
      const obj4 = { onPress, children: null };
      const items2 = [
        tmp6(React4, { children: tmp5 }),
        tmp6(Text_Text.Text, { style: tmp.emojiName, variant: "text-sm/semibold", children: ":" + name + ":" }),
      ];
      obj4.children = items2;
      return __initData(closure_16, obj4);
    };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx",
);

export default obj8;
