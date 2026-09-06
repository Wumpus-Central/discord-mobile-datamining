// discord_app/modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ImageLoaderUtils from "../../image_upload/ImageLoaderUtils.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import LurkingStore from "../../lurker_mode/LurkingStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ GuildFeatures: closure_11, JoinGuildSources: closure_12, AnalyticEvents: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = {
  card: null,
  bannerContainer: null,
  banner: null,
  content: null,
  guildIconContainer: null,
  guildIcon: null,
  guildNameRow: null,
  guildBadge: null,
  guildName: null,
  description: null,
  memberCounts: null,
  memberCount: null,
  dot: null,
  dotOnline: null,
  dismissButton: null,
};
createStyles = {
  backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  flex: 1,
  marginBottom: nativeDefault.space.PX_16,
};
createStyles.card = createStyles;
createStyles.bannerContainer = { height: 88, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
createStyles.banner = { flex: 1 };
let obj1 = { height: 88, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
createStyles.content = {
  flex: 1,
  justifyContent: "space-between",
  marginTop: 32,
  marginBottom: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_12,
};
createStyles.guildIconContainer = { position: "absolute", top: 58, left: 16 };
let size = { width: 56, height: 56, borderRadius: nativeDefault.radii.lg };
createStyles.guildIcon = size;
let obj2 = {
  flex: 1,
  justifyContent: "space-between",
  marginTop: 32,
  marginBottom: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_12,
};
createStyles.guildNameRow = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_4 };
let obj3 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_4 };
createStyles.guildBadge = { marginRight: nativeDefault.space.PX_8 };
createStyles.guildName = { flex: 1, minWidth: 0 };
let obj4 = { marginRight: nativeDefault.space.PX_8 };
createStyles.description = { marginBottom: nativeDefault.space.PX_8 };
let obj5 = { marginBottom: nativeDefault.space.PX_8 };
createStyles.memberCounts = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
createStyles.memberCount = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: nativeDefault.space.PX_12,
  gap: 6,
};
const size1 = { width: 12, height: 12, borderRadius: 6, backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
createStyles.dot = size1;
const size2 = { width: 12, height: 12, borderRadius: 6, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
createStyles.dotOnline = size2;
const size3 = {
  position: "absolute",
  top: 8,
  right: 8,
  width: 2 * nativeDefault.radii.lg,
  height: 2 * nativeDefault.radii.lg,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignItems: "center",
  justifyContent: "center",
};
createStyles.dismissButton = size3;
let closure_16 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx");

export default function GameCommunityMultiGuildUpsellCard(guild) {
  guild = guild.guild;
  const gameId = guild.gameId;
  const onDismiss = guild.onDismiss;
  _slicedToArray = undefined;
  let stateFromStores;
  closure_7 = undefined;
  const tmp = closure_16();
  let obj = stateFromStores;
  let tmp2 = _slicedToArray(stateFromStores.useState(false), 2);
  const loading = tmp2[0];
  _slicedToArray = tmp2[1];
  let obj1 = guild(onDismiss[11]);
  let items = [AccessibilityStore];
  stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = guild(onDismiss[11]);
  const items1 = [GuildStore, LurkingStore];
  const items2 = [guild.id];
  const stateFromStores1 = obj2.useStateFromStores(
    items1,
    () => {
      let tmp2 = null != GuildStore.getGuild(guild.id);
      if (tmp2) {
        tmp2 = !LurkingStore.isLurking(guild.id);
      }
      return tmp2;
    },
    items2,
  );
  const items3 = [, ,];
  ({ id: arr4[0], icon: arr4[1] } = guild);
  items3[2] = stateFromStores;
  let tmp9 = !stateFromStores;
  const memo = stateFromStores.useMemo(() => {
    let icon = guild.icon;
    if (icon == null) {
      icon = null;
    }
    const obj = { id: guild.id, icon, canAnimate: !stateFromStores, size: 56 * ImageLoaderUtils.getDevicePixelRatio() };
    return obj.getGuildIconSource(obj);
  }, items3);
  if (!stateFromStores) {
    const features = guild.features;
    tmp9 = true === features.has(constants.ANIMATED_BANNER);
  }
  closure_7 = tmp9;
  const items4 = [, , ,];
  ({ id: arr5[0], splash: arr5[1], banner: arr5[2] } = guild);
  items4[3] = tmp9;
  const memo1 = obj.useMemo(() => {
    ({ splash, banner } = banner);
    if (null != splash) {
      let obj = { id: tmp.id, splash, size: null };
      const obj2 = gameId(onDismiss[12]);
      const obj4 = guild(onDismiss[14]);
      obj.size = obj4.getWindowDimensions().width * guild(onDismiss[13]).getDevicePixelRatio();
      let guildSplashSource = obj2.getGuildSplashSource(obj);
      const obj5 = guild(onDismiss[13]);
    } else {
      guildSplashSource = null;
      if (null != banner) {
        obj = gameId(onDismiss[12]);
        guildSplashSource = obj.getAnimatableSourceWithFallback(closure_7, (hasItem) => {
          const obj = { id: guild.id, banner };
          return obj.getGuildBannerSource(obj, hasItem);
        });
      }
    }
    return guildSplashSource;
  }, items4);
  const items5 = [guild.id, stateFromStores1, loading, gameId];
  const items6 = [guild.id];
  const callback = obj.useCallback(
    loading(function* () {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp3;
              if (!stateFromStores1) {
                if (!first) {
                  v32(true);
                  let obj4 = v3(tmp39[15]);
                  let obj1 = { guild_id: guild.id, game_id: gameId };
                  obj4.track(constants2.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_JOINED, obj1);
                  c3 = 1;
                  const obj2 = { source: constants.GAME_COMMUNITY_UPSELL, autoNavigate: false };
                  v3 = 2;
                  c4 = 1;
                  const obj3 = { value: v3(tmp39[16]).joinGuild(guild.id, obj2), done: false };
                  return obj3;
                }
              }
              c4 = 3;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_4(false);
            throw tmp39;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_4(false);
              c4 = 3;
              obj4 = { value, done: true };
              return obj4;
            } else {
              obj1 = v3(tmp39[16]);
              v3 = 3;
              c4 = 1;
              const obj5 = { value: obj1.waitForGuild(closure_128_0.id), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c3 = 0;
            closure_128_4(false);
          }
          c3 = 0;
          closure_128_4(false);
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp39) {
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp39;
          } else {
            v3 = tmp;
          }
        }
      }
    }),
    items5,
  );
  const callback1 = obj.useCallback(() => {
    transitionToGuild.transitionToGuild(guild.id);
  }, items6);
  const items7 = [guild.id, loading];
  const items8 = [guild.id, gameId, onDismiss];
  const callback2 = obj.useCallback(
    loading(function* () {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else if (first) {
              c4 = 3;
            } else {
              v32(true);
              c3 = 1;
              let obj4 = tmp3(tmp32[18]);
              let obj1 = { joinSource: constants.GAME_COMMUNITY_UPSELL, shouldNavigate: false };
              v3 = 2;
              c4 = 1;
              const obj2 = { value: obj4.startLurking(guild.id, {}, obj1), done: false };
              return obj2;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_4(false);
            throw tmp32;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_4(false);
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              obj1 = v3(tmp32[16]);
              v3 = 3;
              c4 = 1;
              obj4 = { value: obj1.transitionToGuildSync(closure_128_0.id, { navigationReplace: true }), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c3 = 0;
            closure_128_4(false);
          }
          c3 = 0;
          closure_128_4(false);
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp32) {
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp32;
          } else {
            v3 = tmp;
          }
        }
      }
    }),
    items7,
  );
  const memo2 = obj.useMemo(() => {
    if (null == onDismiss) {
      let items = [];
    } else {
      const obj = { label: null, variant: "destructive", action: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.XW1okC);
      obj.action = function action() {
        return onDismiss(id.id, gameId);
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
  const size = {
    shape: guild(onDismiss[20]).CutoutShape.RoundedRect,
    x: 12,
    y: 54,
    width: 64,
    height: 64,
    cornerRadius: gameId(onDismiss[10]).radii.lg + 4,
  };
  const items9 = [size];
  obj1.cutouts = items9;
  if (null != memo1) {
    obj2 = { style: tmp.banner, source: memo1, resizeMode: "cover" };
    let tmp17Result = closure_14(stateFromStores1, obj2);
  } else {
    let obj3 = { style: tmp.banner };
    tmp17Result = closure_14(tmp16, obj3);
  }
  obj1.children = tmp17Result;
  obj.children = closure_14(gameId(onDismiss[20]), obj1);
  const items10 = [closure_14(closure_7, obj), , ,];
  let obj4 = {
    style: tmp.guildIconContainer,
    children: closure_14(stateFromStores1, { style: tmp.guildIcon, source: memo }),
  };
  items10[1] = closure_14(closure_7, obj4);
  const obj6 = { style: tmp.content, children: null };
  const obj7 = { style: tmp.guildNameRow, children: null };
  const obj8 = { guild, size: null, style: null };
  let obj5 = { style: tmp.guildIcon, source: memo };
  const tmp19 = gameId(onDismiss[20]);
  obj8.size = guild(onDismiss[22]).Icon.Sizes.REFRESH_SMALL_16;
  obj8.style = tmp.guildBadge;
  const items11 = [
    closure_14(gameId(onDismiss[21]), obj8),
    closure_14(guild(onDismiss[23]).Text, {
      variant: "heading-md/bold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      style: tmp.guildName,
      lineClamp: 1,
      children: guild.name,
    }),
  ];
  obj7.children = items11;
  const items12 = [closure_15(closure_7, obj7)];
  tmp17Result = null != description;
  if (tmp17Result) {
    tmp17Result = description.length > 0;
  }
  if (tmp17Result) {
    const obj10 = { variant: "text-sm/medium", style: tmp.description, lineClamp: 3, children: description };
    tmp17Result = closure_14(tmp4(tmp5[23]).Text, obj10);
  }
  items12[1] = tmp17Result;
  const items13 = [closure_15(closure_7, { children: items12 })];
  const obj11 = { style: tmp.memberCounts, children: null };
  let tmp15Result = num > 0;
  if (tmp15Result) {
    const obj12 = { style: tmp.memberCount, children: null };
    const obj13 = { style: tmp.dotOnline };
    const items14 = [closure_14(tmp16, obj13)];
    const obj14 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    let intl = tmp4(tmp5[19]).intl;
    const obj15 = { membersOnline: num };
    obj14.children = intl.format(tmp4(tmp5[19]).t["LC+S+m"], obj15);
    items14[1] = closure_14(tmp4(tmp5[23]).Text, obj14);
    obj12.children = items14;
    tmp15Result = closure_15(tmp16, obj12);
  }
  const items15 = [tmp15Result];
  tmp15Result = num2 > 0;
  if (tmp15Result) {
    const obj16 = { style: tmp.memberCount, children: null };
    const obj17 = { style: tmp.dot };
    const items16 = [closure_14(tmp16, obj17)];
    const obj18 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl2 = tmp4(tmp5[19]).intl;
    const obj19 = { count: num2 };
    obj18.children = intl2.format(tmp4(tmp5[19]).t.zRl6XR, obj19);
    items16[1] = closure_14(tmp4(tmp5[23]).Text, obj18);
    obj16.children = items16;
    tmp15Result = closure_15(tmp16, obj16);
  }
  items15[1] = tmp15Result;
  obj11.children = items15;
  const items17 = [closure_15(closure_7, obj11)];
  if (stateFromStores1) {
    const obj20 = { variant: "active", size: "md", text: null, onPress: null, grow: true };
    const intl5 = tmp4(tmp5[19]).intl;
    obj20.text = intl5.string(tmp4(tmp5[19]).t.KLOhbO);
    obj20.onPress = callback1;
    let obj22 = obj20;
  } else if ("preview" === guild.cardAction) {
    const obj21 = { variant: "primary", size: "md", loading, text: null, onPress: null, grow: true };
    const intl4 = tmp4(tmp5[19]).intl;
    obj21.text = intl4.string(tmp4(tmp5[19]).t.SKNnqq);
    obj21.onPress = callback2;
    obj22 = obj21;
  } else {
    obj22 = { variant: "primary", size: "md", loading, text: null, onPress: null, grow: true };
    const intl3 = tmp4(tmp5[19]).intl;
    obj22.text = intl3.string(tmp4(tmp5[19]).t.VJlc0S);
    obj22.onPress = callback;
  }
  const obj23 = { children: null };
  items17[1] = closure_14(guild(onDismiss[24]).Button, obj22);
  obj23.children = items17;
  items13[1] = closure_15(closure_7, obj23);
  obj6.children = items13;
  items10[2] = closure_15(closure_7, obj6);
  let tmp17Result1 = memo2.length > 0;
  if (tmp17Result1) {
    const obj24 = { style: tmp.dismissButton, children: null };
    const obj25 = {
      items: memo2,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.icon = closure_1_14(guild(onDismiss[27]).MoreHorizontalIcon, { size: "sm" });
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = guild(onDismiss[19]).intl;
        obj.accessibilityLabel = intl.string(guild(onDismiss[19]).t.ogxXGq);
        return closure_1_14(guild(onDismiss[26]).IconButton, obj);
      },
    };
    obj24.children = closure_14(tmp4(tmp5[25]).ContextMenu, obj25);
    tmp17Result1 = closure_14(tmp16, obj24);
  }
  items10[3] = tmp17Result1;
  obj.children = items10;
  return closure_15(closure_7, obj);
}
