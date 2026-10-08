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
const View = fn(17).View;
const Constants = fn(1085);
({ GuildFeatures: c10, JoinGuildSources: closure_11, AnalyticEvents: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  card: {
    backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.lg,
    overflow: "hidden",
    flex: 1,
    marginBottom: nativeDefault.space.PX_16,
  },
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
let obj3 = {
  backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  flex: 1,
  marginBottom: nativeDefault.space.PX_16,
};
obj2.bannerContainer = { height: 88, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj2.banner = { flex: 1 };
let obj4 = { height: 88, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj2.content = {
  flex: 1,
  justifyContent: "space-between",
  marginTop: 32,
  marginBottom: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_12,
};
obj2.guildIconContainer = { position: "absolute", top: 58, left: 16 };
let size = { width: 56, height: 56, borderRadius: nativeDefault.radii.lg };
obj2.guildIcon = size;
let obj5 = {
  flex: 1,
  justifyContent: "space-between",
  marginTop: 32,
  marginBottom: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_12,
};
obj2.guildNameRow = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_4 };
let obj6 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_4 };
obj2.guildBadge = { marginRight: nativeDefault.space.PX_8 };
obj2.guildName = { flex: 1, minWidth: 0 };
let obj7 = { marginRight: nativeDefault.space.PX_8 };
obj2.description = { marginBottom: nativeDefault.space.PX_8 };
let obj8 = { marginBottom: nativeDefault.space.PX_8 };
obj2.memberCounts = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let obj9 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj2.memberCount = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: nativeDefault.space.PX_12,
  gap: 6,
};
const size1 = { width: 12, height: 12, borderRadius: 6, backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
obj2.dot = size1;
const size2 = { width: 12, height: 12, borderRadius: 6, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj2.dotOnline = size2;
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
obj2.dismissButton = size3;
let closure_15 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx");

export default function GameCommunityMultiGuildUpsellCard(guild) {
  guild = guild.guild;
  const gameId = guild.gameId;
  const onDismiss = guild.onDismiss;
  loading = undefined;
  _slicedToArray = undefined;
  let stateFromStores;
  let useReducedMotion;
  const tmp = closure_15();
  [loading, _slicedToArray] = stateFromStores.useState(false);
  let items = [useReducedMotion];
  stateFromStores = guild(onDismiss[11]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = guild(onDismiss[11]);
  const items1 = [GuildStore, LurkingStore];
  const items2 = [guild.id];
  const stateFromStores1 = guild(onDismiss[11]).useStateFromStores(
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
    const obj2 = { id: guild.id, icon, canAnimate: !stateFromStores, size: null };
    const obj = AvatarUtilsDefault;
    obj2.size = 56 * ImageLoaderUtils.getDevicePixelRatio();
    return obj.getGuildIconSource(obj2);
  }, items3);
  if (!stateFromStores) {
    const features = guild.features;
    tmp9 = true === features.has(constants.ANIMATED_BANNER);
  }
  useReducedMotion = tmp9;
  const items4 = [, , ,];
  ({ id: arr5[0], splash: arr5[1], banner: arr5[2] } = guild);
  items4[3] = tmp9;
  const memo1 = obj.useMemo(() => {
    ({ splash, banner } = banner);
    if (null != splash) {
      const obj3 = { id: tmp.id, splash, size: null };
      const obj2 = gameId(onDismiss[12]);
      const obj4 = guild(onDismiss[14]);
      obj3.size = obj4.getWindowDimensions().width * guild(onDismiss[13]).getDevicePixelRatio();
      let guildSplashSource = obj2.getGuildSplashSource(obj3);
      const obj5 = guild(onDismiss[13]);
    } else {
      guildSplashSource = null;
      if (null != banner) {
        guildSplashSource = gameId(onDismiss[12]).getAnimatableSourceWithFallback(closure_7, (hasItem) =>
          AvatarUtilsDefault.getGuildBannerSource({ id: guild.id, banner }, hasItem),
        );
        const obj = gameId(onDismiss[12]);
      }
    }
    return guildSplashSource;
  }, items4);
  const items5 = [guild.id, stateFromStores1, loading, gameId];
  const items6 = [guild.id];
  const callback = obj.useCallback(
    loading(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
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
              guild = tmp8;
              if (!stateFromStores1) {
                if (!first) {
                  v4(true);
                  const obj7 = { guild_id: guild.id, game_id: gameId };
                  tmp4(tmp48[15]).track(constants2.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_JOINED, obj7);
                  c3 = 2;
                  const obj6 = tmp4(tmp48[15]);
                  const obj9 = { source: constants.GAME_COMMUNITY_UPSELL, autoNavigate: false };
                  c4 = 3;
                  c5 = 1;
                  const obj10 = { value: tmp4(tmp48[16]).joinGuild(guild.id, obj9), done: false };
                  return obj10;
                }
              }
              c5 = 3;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c3 = 1;
              closure_128_0 = tmp48;
              const result = guild(tmp48[17]).ignoreJoinGuildRefused(closure_128_0);
              const obj5 = guild(tmp48[17]);
            } else if (3 === tmp8) {
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
                const obj12 = { value: tmp4(tmp48[16]).waitForGuild(closure_129_0.id), done: false };
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
          c3 = 0;
          closure_129_4(false);
          throw tmp48;
        } catch (tmp48) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp48;
          } else if (tmp2 === tmp50) {
            c4 = tmp2;
          } else {
            c4 = tmp;
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
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
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
              guild = tmp8;
              if (first) {
                c5 = 3;
              } else {
                v4(true);
                c3 = 2;
                const obj7 = { joinSource: constants.GAME_COMMUNITY_UPSELL, shouldNavigate: false };
                c4 = 3;
                c5 = 1;
                const obj8 = { value: guild(tmp41[19]).startLurking(guild.id, {}, obj7), done: false };
                return obj8;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c3 = 1;
              closure_128_0 = tmp41;
              const result = guild(tmp41[17]).ignoreJoinGuildRefused(closure_128_0);
              const obj5 = guild(tmp41[17]);
            } else if (3 === tmp8) {
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
                const obj10 = {
                  value: tmp4(tmp41[16]).transitionToGuildSync(closure_129_0.id, { navigationReplace: true }),
                  done: false,
                };
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
          c3 = 0;
          closure_129_4(false);
          throw tmp41;
        } catch (tmp41) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp41;
          } else if (tmp2 === tmp43) {
            c4 = tmp2;
          } else {
            c4 = tmp;
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
  let obj4 = { style: tmp.card, children: null };
  let obj5 = { style: tmp.bannerContainer, children: null };
  let obj6 = { style: tmp.banner, cutouts: null, children: null };
  const size = { shape: null, x: 12, y: 54, width: 64, height: 64, cornerRadius: null };
  let obj3 = guild(onDismiss[11]);
  size.shape = guild(onDismiss[21]).CutoutShape.RoundedRect;
  size.cornerRadius = gameId(onDismiss[10]).radii.lg + 4;
  const items9 = [size];
  obj6.cutouts = items9;
  if (null != memo1) {
    let obj7 = { style: tmp.banner, source: memo1, resizeMode: "cover" };
    let tmp17Result = closure_13(tmp18(tmp5[22]), obj7);
  } else {
    let obj8 = { style: tmp.banner };
    tmp17Result = closure_13(tmp16, obj8);
  }
  obj6.children = tmp17Result;
  obj5.children = closure_13(gameId(onDismiss[21]), obj6);
  const items10 = [closure_13(stateFromStores1, obj5), , ,];
  let obj9 = {
    style: tmp.guildIconContainer,
    children: closure_13(gameId(onDismiss[22]), { style: tmp.guildIcon, source: memo }),
  };
  items10[1] = closure_13(stateFromStores1, obj9);
  let obj11 = { style: tmp.content, children: null };
  let obj12 = { style: tmp.guildNameRow, children: null };
  const obj13 = { guild, size: null, style: null };
  let obj10 = { style: tmp.guildIcon, source: memo };
  const tmp19 = gameId(onDismiss[21]);
  obj13.size = guild(onDismiss[24]).Icon.Sizes.REFRESH_SMALL_16;
  obj13.style = tmp.guildBadge;
  const items11 = [
    closure_13(gameId(onDismiss[23]), obj13),
    closure_13(guild(onDismiss[25]).Text, {
      variant: "heading-md/bold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      style: tmp.guildName,
      lineClamp: 1,
      children: guild.name,
    }),
  ];
  obj12.children = items11;
  const items12 = [closure_14(stateFromStores1, obj12)];
  let tmp17Result3 = null != description;
  if (tmp17Result3) {
    tmp17Result3 = description.length > 0;
  }
  if (tmp17Result3) {
    const obj15 = { variant: "text-sm/medium", style: tmp.description, lineClamp: 3, children: description };
    tmp17Result3 = closure_13(tmp4(tmp5[25]).Text, obj15);
  }
  items12[1] = tmp17Result3;
  const items13 = [closure_14(stateFromStores1, { children: items12 })];
  const obj16 = { style: tmp.memberCounts, children: null };
  let tmp15Result = num > 0;
  if (tmp15Result) {
    const obj17 = { style: tmp.memberCount, children: null };
    const obj18 = { style: tmp.dotOnline };
    const items14 = [closure_13(tmp16, obj18)];
    const obj19 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    let intl = tmp4(tmp5[20]).intl;
    const obj20 = { membersOnline: num };
    obj19.children = intl.format(tmp4(tmp5[20]).t["LC+S+m"], obj20);
    items14[1] = closure_13(tmp4(tmp5[25]).Text, obj19);
    obj17.children = items14;
    tmp15Result = closure_14(tmp16, obj17);
  }
  const items15 = [tmp15Result];
  let tmp15Result2 = num2 > 0;
  if (tmp15Result2) {
    const obj21 = { style: tmp.memberCount, children: null };
    const obj22 = { style: tmp.dot };
    const items16 = [closure_13(tmp16, obj22)];
    const obj23 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl2 = tmp4(tmp5[20]).intl;
    const obj24 = { count: num2 };
    obj23.children = intl2.format(tmp4(tmp5[20]).t.zRl6XR, obj24);
    items16[1] = closure_13(tmp4(tmp5[25]).Text, obj23);
    obj21.children = items16;
    tmp15Result2 = closure_14(tmp16, obj21);
  }
  items15[1] = tmp15Result2;
  obj16.children = items15;
  const items17 = [closure_14(stateFromStores1, obj16)];
  if (stateFromStores1) {
    const obj25 = { variant: "active", size: "md", text: null, onPress: null, grow: true };
    const intl5 = tmp4(tmp5[20]).intl;
    obj25.text = intl5.string(tmp4(tmp5[20]).t.KLOhbO);
    obj25.onPress = callback1;
    let obj27 = obj25;
  } else if ("preview" === guild.cardAction) {
    const obj26 = { variant: "primary", size: "md", loading, text: null, onPress: null, grow: true };
    const intl4 = tmp4(tmp5[20]).intl;
    obj26.text = intl4.string(tmp4(tmp5[20]).t.SKNnqq);
    obj26.onPress = callback2;
    obj27 = obj26;
  } else {
    obj27 = { variant: "primary", size: "md", loading, text: null, onPress: null, grow: true };
    const intl3 = tmp4(tmp5[20]).intl;
    obj27.text = intl3.string(tmp4(tmp5[20]).t.VJlc0S);
    obj27.onPress = callback;
  }
  const obj28 = { children: null };
  items17[1] = closure_13(guild(onDismiss[26]).Button, obj27);
  obj28.children = items17;
  items13[1] = closure_14(stateFromStores1, obj28);
  obj11.children = items13;
  items10[2] = closure_14(stateFromStores1, obj11);
  let tmp17Result4 = memo2.length > 0;
  if (tmp17Result4) {
    const obj29 = { style: tmp.dismissButton, children: null };
    const obj30 = {
      items: memo2,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.icon = closure_1_13(guild(onDismiss[29]).MoreHorizontalIcon, { size: "sm" });
        obj.size = "sm";
        obj.variant = "secondary-overlay";
        const intl = guild(onDismiss[20]).intl;
        obj.accessibilityLabel = intl.string(guild(onDismiss[20]).t.ogxXGq);
        return closure_1_13(guild(onDismiss[28]).IconButton, obj);
      },
    };
    obj29.children = closure_13(tmp4(tmp5[27]).ContextMenu, obj30);
    tmp17Result4 = closure_13(tmp16, obj29);
  }
  items10[3] = tmp17Result4;
  obj4.children = items10;
  return closure_14(stateFromStores1, obj4);
}
