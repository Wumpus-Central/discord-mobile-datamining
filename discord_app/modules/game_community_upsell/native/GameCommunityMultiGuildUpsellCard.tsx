// discord_app/modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _slicedToArray from "_slicedToArray";
import GuildBadgeV2 from "GuildBadgeV2";
import get_ActivityIndicator from "getSystemLocale";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import closure_9 from "createGuildRecordFromRust";
import ME from "ME";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";

let c10;
let closure_12;
let closure_14;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
({ Image: closure_6, View: error } = get_ActivityIndicator);
({ GuildFeatures: c10, JoinGuildSources: unpackModuleId, AnalyticEvents: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles((arg0) => {
  let num = 10;
  if ("one-column" === arg0) {
    num = 12;
  }
  let num2 = 50;
  let num3 = 50;
  if ("one-column" === arg0) {
    num3 = 56;
  }
  let obj = { card: null, bannerContainer: null, banner: null, content: null, guildIconContainer: null, guildIcon: null, guildNameRow: null, guildBadge: null, guildName: null, description: null, memberCounts: null, memberCount: null, dot: null, dotOnline: null, dismissButton: null };
  obj = { backgroundColor: Themes.colors.BG_SURFACE_RAISED, borderColor: Themes.colors.BORDER_MUTED, borderWidth: 1, borderRadius: Themes.radii.lg, overflow: "hidden", flex: 1, marginBottom: Themes.space.PX_16 };
  obj[0] = obj;
  let num4 = 80;
  if ("one-column" === arg0) {
    num4 = 88;
  }
  obj = { height: num4, backgroundColor: tmp2(712).colors.CARD_BACKGROUND_DEFAULT };
  obj[1] = obj;
  obj[2] = { flex: 1 };
  let num5 = 28;
  if ("one-column" === arg0) {
    num5 = 32;
  }
  obj[3] = { flex: 1, justifyContent: "space-between", marginTop: num5, marginBottom: Themes.space.PX_12, marginHorizontal: Themes.space.PX_12 };
  if ("one-column" === arg0) {
    num2 = 56;
  }
  const result = num2 / 2;
  if ("one-column" === arg0) {
    let diff = 88 - result - 2;
  } else {
    diff = 80 - result - 2;
  }
  obj[4] = { position: "absolute", top: diff, left: 16 };
  const obj1 = { flex: 1, justifyContent: "space-between", marginTop: num5, marginBottom: Themes.space.PX_12, marginHorizontal: Themes.space.PX_12 };
  obj[5] = { width: num3, height: num3, borderRadius: Themes.radii.lg };
  const obj2 = { width: num3, height: num3, borderRadius: Themes.radii.lg };
  obj[6] = { flexDirection: "row", alignItems: "center", marginBottom: Themes.space.PX_4 };
  const space = tmp2(712).space;
  obj[7] = { marginRight: "one-column" === arg0 ? space.PX_8 : space.PX_4 };
  obj[8] = { flex: 1, minWidth: 0 };
  const space2 = tmp2(712).space;
  obj[9] = { marginBottom: "one-column" === arg0 ? space2.PX_8 : space2.PX_4 };
  const obj3 = { flexDirection: "row", alignItems: "center", marginBottom: Themes.space.PX_4 };
  obj[10] = { flexDirection: "row", gap: Themes.space.PX_16 };
  const space3 = tmp2(712).space;
  obj[11] = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "one-column" === arg0 ? space3.PX_12 : space3.PX_8, gap: 6 };
  const obj4 = { flexDirection: "row", gap: Themes.space.PX_16 };
  const result1 = num / 2;
  obj[12] = { width: num, height: num, borderRadius: result1, backgroundColor: Themes.colors.TEXT_STATUS_OFFLINE };
  const obj5 = { width: num, height: num, borderRadius: result1, backgroundColor: Themes.colors.TEXT_STATUS_OFFLINE };
  obj[13] = { width: num, height: num, borderRadius: result1, backgroundColor: Themes.colors.TEXT_STATUS_ONLINE };
  const obj6 = { width: num, height: num, borderRadius: result1, backgroundColor: Themes.colors.TEXT_STATUS_ONLINE };
  obj[14] = { position: "absolute", top: 8, right: 8, width: 2 * Themes.radii.lg, height: 2 * Themes.radii.lg, borderRadius: Themes.radii.lg, backgroundColor: Themes.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
  return obj;
});
let result = require("noop").fileFinishedImporting("modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx");

export default function GameCommunityMultiGuildUpsellCard(guild) {
  guild = guild.guild;
  const gameId = guild.gameId;
  const variant = guild.variant;
  const onDismiss = guild.onDismiss;
  let first;
  let React;
  let stateFromStores;
  let stateFromStores1;
  let num2;
  let c9;
  const tmp = callback(variant);
  let obj = React;
  const tmp2 = first(React.useState(false), 2);
  first = tmp2[0];
  React = tmp2[1];
  let obj1 = guild(variant[11]);
  let items = [num2];
  stateFromStores = obj1.useStateFromStores(items, () => num2.useReducedMotion);
  let obj2 = guild(variant[11]);
  const items1 = [c9];
  stateFromStores1 = obj2.useStateFromStores(items1, () => null != _undefined.getGuild(guild.id));
  let tmp15Result = "one-column" === variant;
  let num = 50;
  num2 = 50;
  if (tmp15Result) {
    num2 = 56;
  }
  const items2 = [, , , ];
  ({ id: arr3[0], icon: arr3[1] } = guild);
  items2[2] = stateFromStores;
  items2[3] = num2;
  let tmp10 = !stateFromStores;
  const memo = obj.useMemo(() => {
    let icon = guild.icon;
    if (icon == null) {
      icon = null;
    }
    let obj = gameId(variant[12]);
    obj = { id: guild.id, icon, canAnimate: !stateFromStores, size: null };
    obj[3] = num2 * guild(variant[13]).getDevicePixelRatio();
    return obj.getGuildIconSource(obj);
  }, items2);
  if (!stateFromStores) {
    const features = guild.features;
    tmp10 = true === features.has(constants.ANIMATED_BANNER);
  }
  c9 = tmp10;
  const items3 = [, , , , ];
  ({ id: arr4[0], splash: arr4[1], banner: arr4[2] } = guild);
  items3[3] = tmp10;
  items3[4] = variant;
  const memo1 = obj.useMemo(() => {
    let banner;
    let splash;
    ({ splash, banner } = banner);
    if (null != splash) {
      let obj = { id: null, splash: null, size: null };
      obj[0] = tmp.id;
      obj[1] = splash;
      const obj2 = gameId(variant[12]);
      const tmp9 = guild;
      const width = guild(variant[8]).getWindowDimensions().width;
      let result = width;
      if ("one-column" !== variant) {
        result = width / 2;
      }
      const obj4 = guild(variant[8]);
      obj[2] = result * tmp9(variant[13]).getDevicePixelRatio();
      let guildSplashSource = obj2.getGuildSplashSource(obj);
      const tmp9Result = tmp9(variant[13]);
    } else {
      guildSplashSource = null;
      if (null != banner) {
        obj = gameId(variant[12]);
        guildSplashSource = obj.getAnimatableSourceWithFallback(c9, (hasItem) => {
          let obj = gameId(variant[12]);
          obj = { id: banner.id, banner };
          return obj.getGuildBannerSource(obj, hasItem);
        });
      }
    }
    return guildSplashSource;
  }, items3);
  const items4 = [guild.id, stateFromStores1, first, gameId, variant];
  const items5 = [guild.id];
  callback = obj.useCallback(onDismiss(function*() {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const id = tmp3;
            if (!outer1_7) {
              if (!c4) {
                outer1_5(true);
                let obj4 = v0(outer1_2[14]);
                let obj1 = { guild_id: null, game_id: null, variant: null };
                obj1[0] = outer1_0.id;
                obj1[1] = v0;
                obj1[2] = outer1_2;
                obj4.track(outer1_12.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_JOINED, obj1);
                let c3 = 1;
                const obj2 = { source: null, autoNavigate: false };
                obj2[0] = outer1_11.GAME_COMMUNITY_UPSELL;
                v0 = 2;
                c4 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = v0(outer1_2[15]).joinGuild(outer1_0.id, obj2);
                return obj3;
              }
            }
            c4 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          outer1_5(false);
          throw closure_2;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            callback(false);
            c4 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            obj1 = v0(outer1_2[15]);
            v0 = 3;
            c4 = 1;
            const obj5 = { value: null, done: false };
            obj5[0] = obj1.waitForGuild(id.id);
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
          callback(false);
        }
        c3 = 0;
        callback(false);
        c4 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp40) {
        closure_2 = tmp40;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp40;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items4);
  const items6 = [guild.id, gameId, onDismiss];
  const callback1 = obj.useCallback(() => {
    guild(variant[16]).transitionToGuild(guild.id);
  }, items5);
  const memo2 = obj.useMemo(() => {
    if (null == onDismiss) {
      let items = [];
    } else {
      const obj = { label: null, variant: "destructive", action: null };
      const intl = guild(variant[17]).intl;
      obj[0] = intl.string(guild(variant[17]).t.XW1okC);
      obj[2] = function action() {
        return callback(id.id, closure_1);
      };
      items = [obj];
    }
    return items;
  }, items6);
  let num3 = guild.presenceCount;
  if (num3 == null) {
    num3 = 0;
  }
  let num4 = guild.memberCount;
  if (num4 == null) {
    num4 = 0;
  }
  const description = guild.description;
  obj = { style: tmp.card, children: null };
  obj = { style: tmp.bannerContainer, children: null };
  obj1 = { style: tmp.banner, cutouts: null, children: null };
  obj2 = { shape: null, x: 12, y: null, width: null, height: null, cornerRadius: null };
  obj2[0] = guild(variant[18]).CutoutShape.RoundedRect;
  if (tmp15Result) {
    num = 56;
  }
  let result = num / 2;
  if (tmp15Result) {
    let diff = 88 - result - 2;
  } else {
    diff = 80 - result - 2;
  }
  obj2[2] = diff - 4;
  const sum = num2 + 8;
  obj2[3] = sum;
  obj2[4] = sum;
  obj2[5] = gameId(variant[10]).radii.lg + 4;
  const items7 = [obj2];
  obj1[1] = items7;
  if (null != memo1) {
    let obj3 = { style: null, source: null, resizeMode: "cover" };
    obj3[0] = tmp.banner;
    obj3[1] = memo1;
    let tmp17Result = tmp17(stateFromStores, obj3);
  } else {
    let obj4 = { style: null };
    obj4[0] = tmp.banner;
    tmp17Result = tmp17(tmp16, obj4);
  }
  obj1[2] = tmp17Result;
  obj[1] = closure_13(gameId(variant[18]), obj1);
  const items8 = [closure_13(stateFromStores1, obj), , , ];
  const tmp19 = gameId(variant[18]);
  items8[1] = closure_13(stateFromStores1, { style: tmp.guildIconContainer, children: closure_13(stateFromStores, obj6) });
  const obj7 = { style: tmp.content, children: null };
  const obj8 = { style: tmp.guildNameRow, children: null };
  const obj9 = { guild, size: null, style: null };
  let obj5 = { style: tmp.guildIconContainer, children: closure_13(stateFromStores, obj6) };
  const Sizes = tmp4(tmp5[20]).Icon.Sizes;
  obj9[1] = tmp15Result ? Sizes.REFRESH_SMALL_16 : Sizes.EXTRA_SMALL;
  obj9[2] = tmp.guildBadge;
  const items9 = [closure_13(gameId(variant[19]), obj9), ];
  let str = "heading-sm/bold";
  if (tmp15Result) {
    str = "heading-md/bold";
  }
  items9[1] = closure_13(guild(variant[21]).Text, { variant: str, color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.guildName, lineClamp: 1, children: guild.name });
  obj8[1] = items9;
  const items10 = [closure_14(stateFromStores1, obj8), ];
  tmp17Result = null != description;
  if (tmp17Result) {
    tmp17Result = description.length > 0;
  }
  if (tmp17Result) {
    let str2 = "text-xs/medium";
    if (tmp15Result) {
      str2 = "text-sm/medium";
    }
    const obj11 = { variant: null, style: null, lineClamp: 3, children: null };
    obj11[0] = str2;
    obj11[1] = tmp.description;
    obj11[3] = description;
    tmp17Result = tmp17(tmp4(tmp5[21]).Text, obj11);
  }
  items10[1] = tmp17Result;
  const items11 = [closure_14(stateFromStores1, { children: items10 }), ];
  const obj12 = { style: tmp.memberCounts, children: null };
  tmp15Result = num3 > 0;
  if (tmp15Result) {
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.memberCount;
    const obj14 = { style: null };
    obj14[0] = tmp.dotOnline;
    const items12 = [tmp17(tmp16, obj14), ];
    const obj15 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    let intl = tmp4(tmp5[17]).intl;
    const obj16 = { membersOnline: null };
    obj16[0] = num3;
    obj15[2] = intl.format(tmp4(tmp5[17]).t["LC+S+m"], obj16);
    items12[1] = tmp17(tmp4(tmp5[21]).Text, obj15);
    obj13[1] = items12;
    tmp15Result = tmp15(tmp16, obj13);
  }
  const items13 = [tmp15Result, ];
  if (tmp15Result) {
    tmp15Result = num4 > 0;
  }
  if (tmp15Result) {
    const obj17 = { style: null, children: null };
    obj17[0] = tmp.memberCount;
    const obj18 = { style: null };
    obj18[0] = tmp.dot;
    const items14 = [tmp17(tmp16, obj18), ];
    const obj19 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl2 = tmp4(tmp5[17]).intl;
    const obj20 = { count: null };
    obj20[0] = num4;
    obj19[2] = intl2.format(tmp4(tmp5[17]).t.zRl6XR, obj20);
    items14[1] = tmp17(tmp4(tmp5[21]).Text, obj19);
    obj17[1] = items14;
    tmp15Result = tmp15(tmp16, obj17);
  }
  items13[1] = tmp15Result;
  obj12[1] = items13;
  const items15 = [closure_14(stateFromStores1, obj12), ];
  if (stateFromStores1) {
    const obj21 = { variant: "active", size: "sm", text: null, onPress: null, grow: true };
    const intl4 = tmp4(tmp5[17]).intl;
    obj21[2] = intl4.string(tmp4(tmp5[17]).t.KLOhbO);
    obj21[3] = callback1;
    let obj22 = obj21;
  } else {
    obj22 = { variant: "primary", size: "sm", loading: null, text: null, onPress: null, grow: true };
    obj22[2] = first;
    const intl3 = tmp4(tmp5[17]).intl;
    obj22[3] = intl3.string(tmp4(tmp5[17]).t.VJlc0S);
    obj22[4] = callback;
  }
  const obj23 = { children: null };
  items15[1] = closure_13(guild(variant[22]).Button, obj22);
  obj23[0] = items15;
  items11[1] = closure_14(stateFromStores1, obj23);
  obj7[1] = items11;
  items8[2] = closure_14(stateFromStores1, obj7);
  let tmp17Result1 = memo2.length > 0;
  if (tmp17Result1) {
    const obj24 = { style: null, children: null };
    obj24[0] = tmp.dismissButton;
    const obj25 = { items: null, children: null };
    obj25[0] = memo2;
    obj25[1] = function children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.icon = callback(guild(variant[25]).MoreHorizontalIcon, { size: "sm" });
      obj.size = "sm";
      obj.variant = "secondary-overlay";
      const intl = guild(variant[17]).intl;
      obj.accessibilityLabel = intl.string(guild(variant[17]).t.ogxXGq);
      return callback(guild(variant[24]).IconButton, obj);
    };
    obj24[1] = tmp17(tmp4(tmp5[23]).ContextMenu, obj25);
    tmp17Result1 = tmp17(tmp16, obj24);
  }
  items8[3] = tmp17Result1;
  obj[1] = items8;
  return closure_14(stateFromStores1, obj);
};