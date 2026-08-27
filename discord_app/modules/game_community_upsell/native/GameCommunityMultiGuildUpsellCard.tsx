// === Module 15771: GameCommunityMultiGuildUpsellCard ===

// Module 15771 (GameCommunityMultiGuildUpsellCard)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "maybeApplyNoTextColorForLightCustomTheme" /* 4437 */;
import closure_9 from "initialize" /* 4090 */;
import closure_10 from "createGuildRecordFromRust" /* 1910 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ Image: closure_6, View: error } = get_ActivityIndicator);
({ GuildFeatures: unpackModuleId, JoinGuildSources: closure_12, AnalyticEvents: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { card: null, bannerContainer: null, banner: null, content: null, guildIconContainer: null, guildIcon: null, guildNameRow: null, guildBadge: null, guildName: null, description: null, memberCounts: null, memberCount: null, dot: null, dotOnline: null, dismissButton: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BG_SURFACE_RAISED, borderColor: ThemesDefault.colors.BORDER_MUTED, borderWidth: 1, borderRadius: ThemesDefault.radii.lg, overflow: "hidden", flex: 1, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 88, backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT };
createCacheKey[2] = { flex: 1 };
let obj1 = { height: 88, backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT };
createCacheKey[3] = { flex: 1, justifyContent: "space-between", marginTop: 32, marginBottom: ThemesDefault.space.PX_12, marginHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[4] = { position: "absolute", top: 58, left: 16 };
let obj2 = { flex: 1, justifyContent: "space-between", marginTop: 32, marginBottom: ThemesDefault.space.PX_12, marginHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[5] = { width: 56, height: 56, borderRadius: ThemesDefault.radii.lg };
let obj3 = { width: 56, height: 56, borderRadius: ThemesDefault.radii.lg };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", marginBottom: ThemesDefault.space.PX_4 };
let obj4 = { flexDirection: "row", alignItems: "center", marginBottom: ThemesDefault.space.PX_4 };
createCacheKey[7] = { marginRight: ThemesDefault.space.PX_8 };
createCacheKey[8] = { flex: 1, minWidth: 0 };
let obj5 = { marginRight: ThemesDefault.space.PX_8 };
createCacheKey[9] = { marginBottom: ThemesDefault.space.PX_8 };
const obj6 = { marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[10] = { flexDirection: "row", gap: ThemesDefault.space.PX_16 };
let obj7 = { flexDirection: "row", gap: ThemesDefault.space.PX_16 };
createCacheKey[11] = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: ThemesDefault.space.PX_12, gap: 6 };
let obj8 = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: ThemesDefault.space.PX_12, gap: 6 };
createCacheKey[12] = { width: 12, height: 12, borderRadius: 6, backgroundColor: ThemesDefault.colors.TEXT_STATUS_OFFLINE };
let obj9 = { width: 12, height: 12, borderRadius: 6, backgroundColor: ThemesDefault.colors.TEXT_STATUS_OFFLINE };
createCacheKey[13] = { width: 12, height: 12, borderRadius: 6, backgroundColor: ThemesDefault.colors.TEXT_STATUS_ONLINE };
const obj10 = { width: 12, height: 12, borderRadius: 6, backgroundColor: ThemesDefault.colors.TEXT_STATUS_ONLINE };
createCacheKey[14] = { position: "absolute", top: 8, right: 8, width: 2 * ThemesDefault.radii.lg, height: 2 * ThemesDefault.radii.lg, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let obj11 = { position: "absolute", top: 8, right: 8, width: 2 * ThemesDefault.radii.lg, height: 2 * ThemesDefault.radii.lg, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
const result = require("set").fileFinishedImporting("modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx");

export default function GameCommunityMultiGuildUpsellCard(guild) {
  guild = guild.guild;
  const gameId = guild.gameId;
  const onDismiss = guild.onDismiss;
  let first;
  let callback;
  let stateFromStores;
  let stateFromStores1;
  closure_7 = undefined;
  const tmp = callback2();
  let obj = stateFromStores;
  let tmp2 = callback(stateFromStores.useState(false), 2);
  first = tmp2[0];
  callback = tmp2[1];
  obj1 = guild(onDismiss[11]);
  let items = [closure_8];
  stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = guild(onDismiss[11]);
  const items1 = [closure_10, closure_9];
  const items2 = [guild.id];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let tmp2 = null != closure_1_10.getGuild(guild.id);
    if (tmp2) {
      tmp2 = !closure_1_9.isLurking(guild.id);
    }
    return tmp2;
  }, items2);
  const items3 = [, , ];
  ({ id: arr4[0], icon: arr4[1] } = guild);
  items3[2] = stateFromStores;
  let tmp9 = !stateFromStores;
  const memo = stateFromStores.useMemo(() => {
    let icon = guild.icon;
    if (icon == null) {
      icon = null;
    }
    let obj = gameId(onDismiss[12]);
    obj = { id: guild.id, icon, canAnimate: !stateFromStores, size: 56 * guild(onDismiss[13]).getDevicePixelRatio() };
    return obj.getGuildIconSource(obj);
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
    ({ splash, banner } = banner);
    if (null != splash) {
      let obj = { id: null, splash: null, size: null };
      obj[0] = tmp.id;
      obj[1] = splash;
      const obj2 = gameId(onDismiss[12]);
      const obj4 = guild(onDismiss[14]);
      obj[2] = obj4.getWindowDimensions().width * guild(onDismiss[13]).getDevicePixelRatio();
      let guildSplashSource = obj2.getGuildSplashSource(obj);
      const obj5 = guild(onDismiss[13]);
    } else {
      guildSplashSource = null;
      if (null != banner) {
        obj = gameId(onDismiss[12]);
        guildSplashSource = obj.getAnimatableSourceWithFallback(closure_7, (hasItem) => {
          let obj = gameId(onDismiss[12]);
          obj = { id: banner.id, banner };
          return obj.getGuildBannerSource(obj, hasItem);
        });
      }
    }
    return guildSplashSource;
  }, items4);
  const items5 = [guild.id, stateFromStores1, first, gameId];
  const items6 = [guild.id];
  callback = obj.useCallback(first(function*() {
    if (v02 === 2) {
      v02 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v02 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const id = tmp3;
            if (!closure_1_6) {
              if (!c3) {
                v02(true);
                let obj4 = v0(closure_1_2[15]);
                obj1 = { guild_id: null, game_id: null };
                obj1[0] = closure_1_0.id;
                obj1[1] = v0;
                obj4.track(closure_1_13.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_JOINED, obj1);
                c3 = 1;
                const obj2 = { source: null, autoNavigate: false };
                obj2[0] = closure_1_12.GAME_COMMUNITY_UPSELL;
                v0 = 2;
                v02 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = v0(closure_1_2[16]).joinGuild(closure_1_0.id, obj2);
                return obj3;
              }
            }
            v02 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          v02(false);
          throw closure_2;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            v02(false);
            v02 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            obj1 = v0(closure_1_2[16]);
            v0 = 3;
            v02 = 1;
            const obj5 = { value: null, done: false };
            obj5[0] = obj1.waitForGuild(id.id);
            return obj5;
          }
        } else if (arg0 === 1) {
          v02 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
          v02(false);
        }
        c3 = 0;
        v02(false);
        v02 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp39) {
        closure_2 = tmp39;
        if (tmp4 === c3) {
          v02 = tmp2;
          throw tmp39;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items5);
  const callback1 = obj.useCallback(() => {
    guild(onDismiss[17]).transitionToGuild(guild.id);
  }, items6);
  const items7 = [guild.id, first];
  const items8 = [guild.id, gameId, onDismiss];
  callback2 = obj.useCallback(first(function*() {
    if (v02 === 2) {
      v02 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v02 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const id = tmp3;
            if (c3) {
              v02 = 3;
            } else {
              v02(true);
              c3 = 1;
              let obj4 = closure_1_0(closure_1_2[18]);
              obj1 = { joinSource: null, shouldNavigate: false };
              obj1[0] = closure_1_12.GAME_COMMUNITY_UPSELL;
              v0 = 2;
              v02 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj4.startLurking(closure_1_0.id, {}, obj1);
              return obj2;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          v02(false);
          throw closure_2;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            v02(false);
            v02 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            obj1 = v0(closure_1_2[16]);
            v0 = 3;
            v02 = 1;
            obj4 = { value: null, done: false };
            obj4[0] = obj1.transitionToGuildSync(id.id, { navigationReplace: true });
            return obj4;
          }
        } else if (arg0 === 1) {
          v02 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
          v02(false);
        }
        c3 = 0;
        v02(false);
        v02 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp32) {
        closure_2 = tmp32;
        if (tmp4 === c3) {
          v02 = tmp2;
          throw tmp32;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items7);
  const memo2 = obj.useMemo(() => {
    if (null == onDismiss) {
      let items = [];
    } else {
      const obj = { label: null, variant: "destructive", action: null };
      const intl = guild(onDismiss[19]).intl;
      obj[0] = intl.string(guild(onDismiss[19]).t.XW1okC);
      obj[2] = function action() {
        return callback(id.id, closure_1);
      };
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
  obj = { style: tmp.card, children: null };
  obj = { style: tmp.bannerContainer, children: null };
  obj1 = { style: tmp.banner, cutouts: null, children: null };
  obj2 = { shape: guild(onDismiss[20]).CutoutShape.RoundedRect, x: 12, y: 54, width: 64, height: 64, cornerRadius: gameId(onDismiss[10]).radii.lg + 4 };
  const items9 = [obj2];
  obj1[1] = items9;
  if (null != memo1) {
    let obj3 = { style: null, source: null, resizeMode: "cover" };
    obj3[0] = tmp.banner;
    obj3[1] = memo1;
    let tmp17Result = tmp17(stateFromStores1, obj3);
  } else {
    let obj4 = { style: null };
    obj4[0] = tmp.banner;
    tmp17Result = tmp17(tmp16, obj4);
  }
  obj1[2] = tmp17Result;
  obj[1] = closure_14(gameId(onDismiss[20]), obj1);
  const items10 = [closure_14(closure_7, obj), , , ];
  const tmp18 = gameId;
  const tmp19 = gameId(onDismiss[20]);
  items10[1] = closure_14(closure_7, { style: tmp.guildIconContainer, children: closure_14(stateFromStores1, obj6) });
  const obj7 = { style: tmp.content, children: null };
  const obj8 = { style: tmp.guildNameRow, children: null };
  const obj9 = { guild, size: null, style: null };
  let obj5 = { style: tmp.guildIconContainer, children: closure_14(stateFromStores1, obj6) };
  obj9[1] = guild(onDismiss[22]).Icon.Sizes.REFRESH_SMALL_16;
  obj9[2] = tmp.guildBadge;
  const items11 = [closure_14(tmp18(onDismiss[21]), obj9), closure_14(guild(onDismiss[23]).Text, { variant: "heading-md/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.guildName, lineClamp: 1, children: guild.name })];
  obj8[1] = items11;
  const items12 = [closure_15(closure_7, obj8), ];
  tmp17Result = null != description;
  if (tmp17Result) {
    tmp17Result = description.length > 0;
  }
  if (tmp17Result) {
    const obj11 = { variant: "text-sm/medium", style: null, lineClamp: 3, children: null };
    obj11[1] = tmp.description;
    obj11[3] = description;
    tmp17Result = tmp17(tmp4(tmp5[23]).Text, obj11);
  }
  items12[1] = tmp17Result;
  const items13 = [closure_15(closure_7, { children: items12 }), ];
  const obj12 = { style: tmp.memberCounts, children: null };
  let tmp15Result = num > 0;
  if (tmp15Result) {
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.memberCount;
    const obj14 = { style: null };
    obj14[0] = tmp.dotOnline;
    const items14 = [tmp17(tmp16, obj14), ];
    const obj15 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    let intl = tmp4(tmp5[19]).intl;
    const obj16 = { membersOnline: null };
    obj16[0] = num;
    obj15[2] = intl.format(tmp4(tmp5[19]).t["LC+S+m"], obj16);
    items14[1] = tmp17(tmp4(tmp5[23]).Text, obj15);
    obj13[1] = items14;
    tmp15Result = tmp15(tmp16, obj13);
  }
  const items15 = [tmp15Result, ];
  tmp15Result = num2 > 0;
  if (tmp15Result) {
    const obj17 = { style: null, children: null };
    obj17[0] = tmp.memberCount;
    const obj18 = { style: null };
    obj18[0] = tmp.dot;
    const items16 = [tmp17(tmp16, obj18), ];
    const obj19 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl2 = tmp4(tmp5[19]).intl;
    const obj20 = { count: null };
    obj20[0] = num2;
    obj19[2] = intl2.format(tmp4(tmp5[19]).t.zRl6XR, obj20);
    items16[1] = tmp17(tmp4(tmp5[23]).Text, obj19);
    obj17[1] = items16;
    tmp15Result = tmp15(tmp16, obj17);
  }
  items15[1] = tmp15Result;
  obj12[1] = items15;
  const items17 = [closure_15(closure_7, obj12), ];
  if (stateFromStores1) {
    const obj21 = { variant: "active", size: "md", text: null, onPress: null, grow: true };
    const intl5 = tmp4(tmp5[19]).intl;
    obj21[2] = intl5.string(tmp4(tmp5[19]).t.KLOhbO);
    obj21[3] = callback1;
    let obj23 = obj21;
  } else if ("preview" === guild.cardAction) {
    const obj22 = { variant: "primary", size: "md", loading: null, text: null, onPress: null, grow: true };
    obj22[2] = first;
    const intl4 = tmp4(tmp5[19]).intl;
    obj22[3] = intl4.string(tmp4(tmp5[19]).t.SKNnqq);
    obj22[4] = callback2;
    obj23 = obj22;
  } else {
    obj23 = { variant: "primary", size: "md", loading: null, text: null, onPress: null, grow: true };
    obj23[2] = first;
    const intl3 = tmp4(tmp5[19]).intl;
    obj23[3] = intl3.string(tmp4(tmp5[19]).t.VJlc0S);
    obj23[4] = callback;
  }
  const obj24 = { children: null };
  items17[1] = closure_14(guild(onDismiss[24]).Button, obj23);
  obj24[0] = items17;
  items13[1] = closure_15(closure_7, obj24);
  obj7[1] = items13;
  items10[2] = closure_15(closure_7, obj7);
  let tmp17Result1 = memo2.length > 0;
  if (tmp17Result1) {
    const obj25 = { style: null, children: null };
    obj25[0] = tmp.dismissButton;
    const obj26 = { items: null, children: null };
    obj26[0] = memo2;
    obj26[1] = function children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.icon = callback(guild(onDismiss[27]).MoreHorizontalIcon, { size: "sm" });
      obj.size = "sm";
      obj.variant = "secondary-overlay";
      const intl = guild(onDismiss[19]).intl;
      obj.accessibilityLabel = intl.string(guild(onDismiss[19]).t.ogxXGq);
      return callback(guild(onDismiss[26]).IconButton, obj);
    };
    obj25[1] = tmp17(tmp4(tmp5[25]).ContextMenu, obj26);
    tmp17Result1 = tmp17(tmp16, obj25);
  }
  items10[3] = tmp17Result1;
  obj[1] = items10;
  return closure_15(closure_7, obj);
};