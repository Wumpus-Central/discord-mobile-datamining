// === Module 16248: GameCommunityMultiGuildUpsellCard ===

// Module 16248 (GameCommunityMultiGuildUpsellCard)
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1437 */;
import transitionToGuild from "transitionToGuild" /* 6855 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import LurkingStore from "LurkingStore" /* 4516 */;
import GuildStore from "GuildStore" /* 2074 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size_mod from "module_2" /* 2 */;

let c4, c5;

let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
let size3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ Image: metroRequire, View: metroImportDefault } = react_native);
({ GuildFeatures: unpackModuleId, JoinGuildSources: closure_12, AnalyticEvents: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, bannerContainer: obj3, banner: { flex: 1 }, content: obj4, guildIconContainer: { position: "absolute", top: 58, left: 16 }, guildIcon: size, guildNameRow: obj5, guildBadge: obj6, guildName: { flex: 1, minWidth: 0 }, description: obj7, memberCounts: obj8, memberCount: obj9, dot: size1, dotOnline: size2, dismissButton: size3 };
obj2 = { backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg, overflow: "hidden", flex: 1, marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { height: 88, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj4 = { flex: 1, justifyContent: "space-between", marginTop: 32, marginBottom: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_12 };
size = { width: 56, height: 56, borderRadius: nativeDefault.radii.lg };
obj5 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_4 };
obj6 = { marginRight: nativeDefault.space.PX_8 };
obj7 = { marginBottom: nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj9 = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_12, gap: 6 };
size1 = { width: 12, height: 12, borderRadius: 6, backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
size2 = { width: 12, height: 12, borderRadius: 6, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
size3 = { position: "absolute", top: 8, right: 8, width: 2 * nativeDefault.radii.lg, height: 2 * nativeDefault.radii.lg, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_16 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx");

export default function GameCommunityMultiGuildUpsellCard(guild) {
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items11;
  let items13;
  let items14;
  let items15;
  let items16;
  let items9;
  let loading;
  let obj10;
  let obj20;
  let obj24;
  let obj27;
  let obj30;
  let obj6;
  let tmp17Result;
  let tmp19;
  let useReducedMotion;
  guild = guild.guild;
  const gameId = guild.gameId;
  let onDismiss = guild.onDismiss;
  loading = undefined;
  _slicedToArray = undefined;
  let stateFromStores;
  let closure_7;
  const cardAction = guild.cardAction;
  const tmp = closure_16();
  let obj = stateFromStores;
  [loading, _slicedToArray] = stateFromStores.useState(false);
  const tmp4 = guild;
  let obj2 = guild(onDismiss[11]);
  let items = [AccessibilityStore];
  stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj3 = guild(onDismiss[11]);
  const items1 = [GuildStore, LurkingStore];
  const items2 = [guild.id];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const tmp2 = null != GuildStore.getGuild(guild.id) && !LurkingStore.isLurking(guild.id);
    return tmp2;
  }, items2);
  const items3 = [, , ];
  ({ id: arr4[0], icon: arr4[1] } = guild);
  items3[2] = stateFromStores;
  let tmp9 = !stateFromStores;
  const memo = stateFromStores.useMemo(() => {
    let obj2;
    let icon = guild.icon;
    if (icon == null) {
      icon = null;
    }
    const obj = { id: guild.id, icon, canAnimate: !stateFromStores, size: 56 * obj2.getDevicePixelRatio() };
    const getGuildIconSource = AvatarUtilsDefault.getGuildIconSource;
    AvatarUtilsDefault;
    obj2 = ImageLoaderUtils;
    return getGuildIconSource(obj);
  }, items3);
  if (!stateFromStores) {
    const features = guild.features;
    tmp9 = true === features.has(constants.ANIMATED_BANNER);
  }
  closure_7 = tmp9;
  const items4 = [, , , ];
  ({ id: arr5[0], splash: arr5[1], banner: arr5[2] } = guild);
  items4[3] = tmp9;
  const memo1 = obj.useMemo(() => {
    let banner;
    let guildSplashSource;
    let obj4;
    let splash;
    let width;
    ({ splash, banner } = banner);
    if (null != splash) {
      let obj2 = { id: tmp.id, splash, size: width * obj4.getDevicePixelRatio() };
      const getGuildSplashSource = gameId(onDismiss[12]).getGuildSplashSource;
      gameId(onDismiss[12]);
      const obj3 = guild(onDismiss[14]);
      width = obj3.getWindowDimensions().width;
      obj4 = guild(onDismiss[13]);
      guildSplashSource = getGuildSplashSource(obj2);
    } else {
      guildSplashSource = null;
      if (null != banner) {
        let obj = gameId(onDismiss[12]);
        guildSplashSource = obj.getAnimatableSourceWithFallback(closure_7, (hasItem) => {
          const obj = AvatarUtilsDefault;
          const obj2 = { id: guild.id, banner };
          return obj.getGuildBannerSource(obj2, hasItem);
        });
      }
    }
    return guildSplashSource;
  }, items4);
  const items5 = [guild.id, stateFromStores1, loading, gameId];
  const items6 = [guild.id];
  const callback = obj.useCallback(loading(function*() {
    let closure_0;
    let closure_1;
    let closure_2;
    let obj2;
    let obj8;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            guild = tmp4;
            if (!stateFromStores1) {
              if (!first) {
                v2(true);
                const obj7 = { guild_id: guild.id, game_id: gameId };
                const obj6 = tmp(onDismiss[15]);
                obj6.track(constants2.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_JOINED, obj7);
                c3 = 2;
                const obj9 = { source: constants.GAME_COMMUNITY_UPSELL, autoNavigate: false };
                c4 = 3;
                c5 = 1;
                const obj10 = { value: obj8.joinGuild(guild.id, obj9), done: false };
                obj8 = tmp(onDismiss[16]);
                return obj10;
              }
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_4(false);
          throw onDismiss;
        } else {
          if (2 === c4) {
            c3 = 1;
            guild = onDismiss;
            const obj5 = guild(onDismiss[17]);
            const result = obj5.ignoreJoinGuildRefused(guild);
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_4(false);
              c5 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              c4 = 4;
              c5 = 1;
              const obj12 = { value: obj2.waitForGuild(closure_129_0.id), done: false };
              obj2 = tmp(onDismiss[16]);
              return obj12;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_4(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 1;
          }
          c3 = 0;
          closure_129_4(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp44) {
        onDismiss = tmp44;
        if (0 === c3) {
          c5 = 3;
          throw tmp44;
        } else if (1 === tmp46) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items5);
  const callback1 = obj.useCallback(() => {
    const obj = transitionToGuild;
    obj.transitionToGuild(guild.id);
  }, items6);
  const items7 = [guild.id, loading];
  const items8 = [guild.id, gameId, onDismiss];
  const callback2 = obj.useCallback(loading(function*() {
    let closure_0;
    let closure_1;
    let closure_2;
    let obj2;
    let obj6;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            guild = tmp4;
            if (!first) {
              v2(true);
              c3 = 2;
              const obj7 = { joinSource: constants.GAME_COMMUNITY_UPSELL, shouldNavigate: false };
              c4 = 3;
              c5 = 1;
              const obj8 = { value: obj6.startLurking(guild.id, {}, obj7), done: false };
              obj6 = guild(onDismiss[19]);
              return obj8;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_4(false);
          throw onDismiss;
        } else {
          if (2 === c4) {
            c3 = 1;
            guild = onDismiss;
            const obj5 = guild(onDismiss[17]);
            const result = obj5.ignoreJoinGuildRefused(guild);
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_4(false);
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              c4 = 4;
              c5 = 1;
              const obj10 = { value: obj2.transitionToGuildSync(closure_129_0.id, { navigationReplace: true }), done: false };
              obj2 = tmp(onDismiss[16]);
              return obj10;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_4(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 1;
          }
          c3 = 0;
          closure_129_4(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp37) {
        onDismiss = tmp37;
        if (0 === c3) {
          c5 = 3;
          throw tmp37;
        } else if (1 === tmp39) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items7);
  const memo2 = obj.useMemo(() => {
    let id;
    let intl;
    let items;
    if (null == onDismiss) {
      items = [];
    } else {
      const obj = {
        label: intl.string(intl6.t.XW1okC),
        variant: "destructive",
        action() {
            return onDismiss(id.id, gameId);
          }
      };
      intl = intl6.intl;
      items = [obj];
    }
    return items;
  }, items8);
  let num = guild.presenceCount;
  if (num == null) {
    num = 0;
  }
  let num2 = guild.memberCount;
  if (num2 == null) {
    num2 = 0;
  }
  const description = guild.description;
  let obj4 = { style: tmp.card, children: items10 };
  let obj5 = { style: tmp.bannerContainer, children: closure_14(tmp19, obj6) };
  const name = guild.name;
  obj6 = { style: tmp.banner, cutouts: items9, children: tmp17Result };
  size = { shape: tmp4(onDismiss[21]).CutoutShape.RoundedRect, x: 12, y: 54, width: 64, height: 64, cornerRadius: gameId(onDismiss[10]).radii.lg + 4 };
  items9 = [size];
  const tmp18 = gameId;
  tmp19 = gameId(tmp5[21]);
  if (null != memo1) {
    let obj7 = { style: tmp.banner, source: memo1, resizeMode: "cover" };
    tmp17Result = closure_14(stateFromStores1, obj7);
  } else {
    let obj8 = { style: tmp.banner };
    tmp17Result = closure_14(tmp16, obj8);
  }
  items10 = [closure_14(closure_7, obj5), , , ];
  let obj9 = { style: tmp.guildIconContainer, children: closure_14(stateFromStores1, obj10) };
  obj10 = { style: tmp.guildIcon, source: memo };
  items10[1] = closure_14(closure_7, obj9);
  let obj11 = { style: tmp.content, children: items13 };
  let obj12 = { style: tmp.guildNameRow, children: items11 };
  const obj13 = { guild, size: tmp4(onDismiss[23]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.guildBadge };
  const tmp18Result = tmp18(onDismiss[22]);
  items11 = [closure_14(tmp18Result, obj13), ];
  const obj14 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.guildName, lineClamp: 1, children: name };
  items11[1] = closure_14(tmp4(onDismiss[24]).Text, obj14);
  const items12 = [closure_15(closure_7, obj12), ];
  let tmp17Result3 = null != description;
  if (tmp17Result3) {
    tmp17Result3 = description.length > 0;
  }
  if (tmp17Result3) {
    const obj15 = { variant: "text-sm/medium", style: tmp.description, lineClamp: 3, children: description };
    tmp17Result3 = closure_14(tmp4(tmp5[24]).Text, obj15);
  }
  items12[1] = tmp17Result3;
  items13 = [closure_15(closure_7, { children: items12 }), ];
  let tmp15Result = num > 0;
  const obj16 = { style: tmp.memberCounts, children: items15 };
  if (tmp15Result) {
    const obj17 = { style: tmp.memberCount, children: items14 };
    const obj18 = { style: tmp.dotOnline };
    items14 = [closure_14(closure_7, obj18), ];
    const obj19 = { variant: "text-xs/medium", color: "text-subtle", children: intl.format(tmp4(onDismiss[20]).t["LC+S+m"], obj20) };
    const Text = tmp4(tmp5[24]).Text;
    intl = tmp4(tmp5[20]).intl;
    obj20 = { membersOnline: num };
    items14[1] = closure_14(Text, obj19);
    tmp15Result = closure_15(tmp16, obj17);
  }
  items15 = [tmp15Result, ];
  let tmp15Result2 = num2 > 0;
  if (tmp15Result2) {
    const obj21 = { style: tmp.memberCount, children: items16 };
    const obj22 = { style: tmp.dot };
    items16 = [closure_14(closure_7, obj22), ];
    const obj23 = { variant: "text-xs/medium", color: "text-subtle", children: intl2.format(tmp4(onDismiss[20]).t.zRl6XR, obj24) };
    const Text2 = tmp4(tmp5[24]).Text;
    intl2 = tmp4(tmp5[20]).intl;
    obj24 = { count: num2 };
    items16[1] = closure_14(Text2, obj23);
    tmp15Result2 = closure_15(tmp16, obj21);
  }
  items15[1] = tmp15Result2;
  const items17 = [closure_15(closure_7, obj16), ];
  const Button = tmp4(tmp5[25]).Button;
  if (stateFromStores1) {
    const obj25 = { variant: "active", size: "md", text: intl5.string(tmp4(onDismiss[20]).t.KLOhbO), onPress: callback1, grow: true };
    intl5 = tmp4(tmp5[20]).intl;
    obj27 = obj25;
  } else if ("preview" === cardAction) {
    const obj26 = { variant: "primary", size: "md", loading, text: intl4.string(tmp4(onDismiss[20]).t.SKNnqq), onPress: callback2, grow: true };
    intl4 = tmp4(tmp5[20]).intl;
    obj27 = obj26;
  } else {
    obj27 = { variant: "primary", size: "md", loading, text: intl3.string(tmp4(onDismiss[20]).t.VJlc0S), onPress: callback, grow: true };
    intl3 = tmp4(tmp5[20]).intl;
  }
  const obj28 = { children: items17 };
  items17[1] = closure_14(Button, obj27);
  items13[1] = closure_15(closure_7, obj28);
  items10[2] = closure_15(closure_7, obj11);
  let tmp17Result4 = memo2.length > 0;
  if (tmp17Result4) {
    const obj29 = { style: tmp.dismissButton, children: closure_14(tmp4(onDismiss[26]).ContextMenu, obj30) };
    obj30 = {
      items: memo2,
      children(ref) {
          let intl;
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref, icon: closure_1_14(guild(onDismiss[28]).MoreHorizontalIcon, { size: "sm" }), size: "sm", variant: "secondary-overlay", accessibilityLabel: intl.string(guild(onDismiss[20]).t.ogxXGq) };
          const IconButton = guild(onDismiss[27]).IconButton;
          const merged1 = Object.assign(merged);
          intl = guild(onDismiss[20]).intl;
          return closure_1_14(IconButton, obj);
        }
    };
    tmp17Result4 = closure_14(tmp16, obj29);
  }
  items10[3] = tmp17Result4;
  return closure_15(closure_7, obj4);
};