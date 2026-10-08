// === Module 16802: GuildFeedBanner ===

// Module 16802 (GuildFeedBanner)
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import timing from "timing" /* 5091 */;
import timingPresets from "timingPresets" /* 5094 */;
import GuildPopoutActionCreators from "GuildPopoutActionCreators" /* 14028 */;
import noop from "module_19" /* 19 */;
import GuildPopoutStore from "GuildPopoutStore" /* 14027 */;
import GuildStore from "GuildStore" /* 2086 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const GuildFeedConstants = fn(16803);
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = GuildFeedConstants.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
let closure_10 = GuildFeedConstants.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = fn(1085).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5090);
let obj = { avatar: null, container: null, description: null, textContainer: null, content: null, icon: null, headerContainer: null, headerBorder: null, guildIconContainer: null, dotOnline: null, publicInfo: null, publicIcon: null, memberInfo: null, title: null };
let size = { borderRadius: nativeDefault.radii.lg, height: 64, width: 64 };
obj.avatar = size;
obj.container = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.description = { marginTop: 4 };
obj.textContainer = { marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL, alignItems: "center", flexDirection: "row" };
obj.content = { width: "100%" };
obj.icon = { marginLeft: 8 };
let obj3 = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.headerContainer = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj4 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.headerBorder = { borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, marginTop: -16 };
let obj5 = { borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, marginTop: -16 };
obj.guildIconContainer = { padding: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let size1 = { width: 4, height: 4, borderRadius: nativeDefault.radii.xs, marginRight: 4, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.dotOnline = size1;
obj.publicInfo = { flexDirection: "row", alignItems: "center", marginRight: 12 };
obj.publicIcon = { marginRight: 4, width: 14, height: 14 };
obj.memberInfo = { marginTop: 4, flexDirection: "row", alignItems: "center" };
obj.title = { maxWidth: "90%" };
let closure_14 = createStyles.createStyles(obj);
const __initData = { code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function GuildFeedBannerTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildFeedBanner(guild) {
  const cResult = guild(576).c(73);
  guild = guild.guild;
  ({ description, hideMemberCount } = guild);
  closure_14();
  const obj = guild(576);
  const sharedValue = guild(4810).useSharedValue(0);
  let obj2 = guild(4810);
  const fn = function s() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10872399645496;
  fn.__initData = __initData;
  const animatedStyle = guild(4810).useAnimatedStyle(fn);
  const bound = Math.max(0.22 * sharedValue(1496)().height, closure_10);
  const tmp9 = sharedValue(4991)();
  if (cResult[0] !== guild.id) {
    const fn2 = function h() {
      const guildForPopout = GuildPopoutActionCreators.fetchGuildForPopout(guild.id);
    };
    cResult[0] = guild.id;
    cResult[1] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== guild) {
    const items = [guild];
    cResult[2] = guild;
    cResult[3] = items;
    let tmp11 = items;
  } else {
    tmp11 = cResult[3];
  }
  const effect = noop.useEffect(tmp10, tmp11);
  if (cResult[4] === guild.banner) {
    if (cResult[5] === guild.features) {
      if (cResult[6] === guild.id) {
        let tmp13 = cResult[7];
      }
      let tmp17 = tmp13;
      if (null != guild) {
        tmp17 = tmp13;
        if (null != guild.homeHeader) {
          if (cResult[8] === guild.homeHeader) {
          }
          ({ id: obj8.id, homeHeader: obj8.homeHeader } = guild);
          const guildHomeHeaderSource = tmp7(1414).getGuildHomeHeaderSource({ id: null, homeHeader: null });
          cResult[8] = guild.homeHeader;
          cResult[9] = guild.id;
          cResult[10] = guildHomeHeaderSource;
          const obj7 = { id: null, homeHeader: null };
          const tmp7Result = tmp7(1414);
        }
      }
      const name = guild.name;
      if (description == null) {
        description = guild.description;
      }
      if (cResult[11] !== guild) {
        const guildBadgeSource = tmp(6167).getGuildBadgeSource(guild);
        cResult[11] = guild;
        cResult[12] = guildBadgeSource;
        const tmpResult = tmp(6167);
      }
      if (cResult[13] !== sharedValue) {
        function handleLoad() {
          const result = sharedValue.set(timing.withTiming(1, timingPresets.timingSlow));
        }
        cResult[13] = sharedValue;
        cResult[14] = handleLoad;
        let tmp23 = handleLoad;
      } else {
        tmp23 = cResult[14];
      }
      const _Symbol = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildPopoutStore];
        cResult[15] = items1;
        let tmp24 = items1;
      } else {
        tmp24 = cResult[15];
      }
      if (cResult[16] !== guild.id) {
        class K {
          constructor() {
            obj = { discoverableGuild: closure_7.getGuild(guild.id) };
            return obj;
          }
        }
        cResult[16] = guild.id;
        cResult[17] = K;
      } else {
        class K {
          constructor() {
            obj = { discoverableGuild: closure_7.getGuild(guild.id) };
            return obj;
          }
        }
      }
      if (cResult[18] !== guild) {
        class K {
          constructor() {
            obj = { discoverableGuild: closure_7.getGuild(guild.id) };
            return obj;
          }
        }
        tmp28[0] = guild;
        cResult[18] = guild;
        cResult[19] = tmp28;
      } else {
        class K {
          constructor() {
            obj = { discoverableGuild: closure_7.getGuild(guild.id) };
            return obj;
          }
        }
      }
      const discoverableGuild = tmp(504).useStateFromStoresObject(tmp24, K, tmp28).discoverableGuild;
      const tmpResult4 = tmp(504);
      const tmp29 = tmp7(6618)();
      ({ width, height } = tmp7(1496)());
      const tmp30 = tmp7(1496)();
      const _Math = Math;
      const drawerWidth = tmp(11278).useDrawerWidth();
      const bound1 = Math.min(width, height);
      if (tmp29) {
        class K {
          constructor() {
            obj = { discoverableGuild: closure_7.getGuild(guild.id) };
            return obj;
          }
        }
        const _Math2 = Math;
        let bound2 = Math.min(Math.max(width, height) - drawerWidth, bound1);
      } else {
        class K {
          constructor() {
            obj = { discoverableGuild: closure_7.getGuild(guild.id) };
            return obj;
          }
        }
        bound2 = bound1 - 2 * GUILD_FEED_CARD_MARGIN_HORIZONTAL;
      }
      if (cResult[20] === bound) {
        class K {
          constructor() {
            obj = { discoverableGuild: closure_7.getGuild(guild.id) };
            return obj;
          }
        }
      }
      if (null != tmp17) {
        class K {
          constructor() {
            obj = { discoverableGuild: closure_7.getGuild(guild.id) };
            return obj;
          }
        }
        const obj9 = { style: null, children: null };
        const size = { height: bound, width: "100%" };
        const items2 = [size, animatedStyle];
        obj9.style = items2;
        const obj10 = { style: closure_6.absoluteFill, source: tmp17, onLoad: tmp23 };
        obj9.children = closure_12(tmp7(6164), obj10);
        let tmp34Result = closure_12(tmp7(4810).View, obj9);
      } else {
        class K {
          constructor() {
            obj = { discoverableGuild: closure_7.getGuild(guild.id) };
            return obj;
          }
        }
        const size1 = { height: bound, width: "100%" };
        const items3 = [size1, animatedStyle];
        tmp36[0] = items3;
        if (tmpResult6.isThemeDark(tmp9)) {
          class K {
            constructor() {
              obj = { discoverableGuild: closure_7.getGuild(guild.id) };
              return obj;
            }
          }
        } else {
          class K {
            constructor() {
              obj = { discoverableGuild: closure_7.getGuild(guild.id) };
              return obj;
            }
          }
        }
        tmp36[1] = tmp37;
        tmp36[2] = tmp23;
        tmp34Result = closure_12(closure_5, tmp36);
        tmpResult6 = tmp(4929);
      }
      cResult[20] = bound;
      cResult[21] = tmp17;
      cResult[22] = tmp23;
      cResult[23] = animatedStyle;
      cResult[24] = tmp9;
      cResult[25] = tmp34Result;
      const tmpResult5 = tmp(11278);
    }
  }
  const features = guild.features;
  let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
  if (hasItem) {
    class K {
      constructor() {
        obj = { discoverableGuild: closure_7.getGuild(guild.id) };
        return obj;
      }
    }
    hasItem = !obj4.isAndroid();
  }
  let guildBannerSource = null;
  if (null != guild.banner) {
    class K {
      constructor() {
        obj = { discoverableGuild: closure_7.getGuild(guild.id) };
        return obj;
      }
    }
    ({ id: obj6.id, banner: obj6.banner } = guild);
    guildBannerSource = obj5.getGuildBannerSource({ id: null, banner: null }, hasItem);
    const obj11 = { id: null, banner: null };
  }
  cResult[4] = guild.banner;
  cResult[5] = guild.features;
  cResult[6] = guild.id;
  cResult[7] = guildBannerSource;
  tmp13 = guildBannerSource;
  const obj3 = guild(4810);
}) : (function GuildFeedBanner(guild) {
  guild = guild.guild;
  let description = guild.description;
  dependencyMap = undefined;
  let width;
  let height;
  let drawerWidth;
  ({ hideDescription, hideMemberCount } = guild);
  const tmp = closure_14();
  const sharedValue = guild(4810).useSharedValue(0);
  let obj = guild(4810);
  const fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 1869475832859;
  fn.__initData = __initData2;
  const animatedStyle = guild(4810).useAnimatedStyle(fn);
  let bound = Math.max(0.22 * sharedValue(1496)().height, closure_10);
  const items = [guild];
  let obj2 = guild(4810);
  const effect = width.useEffect(() => {
    const guildForPopout = GuildPopoutActionCreators.fetchGuildForPopout(guild.id);
  }, items);
  const items1 = [guild];
  const memo = width.useMemo(() => {
    const features = guild.features;
    let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    if (hasItem) {
      hasItem = !PlatformUtils.isAndroid();
    }
    let guildBannerSource = null;
    if (null != guild.banner) {
      ({ id: obj3.id, banner: obj3.banner } = guild);
      guildBannerSource = AvatarUtilsDefault.getGuildBannerSource({ id: null, banner: null }, hasItem);
      const obj7 = { id: null, banner: null };
    }
    let guildHomeHeaderSource = guildBannerSource;
    if (null != guild) {
      guildHomeHeaderSource = guildBannerSource;
      if (null != guild.homeHeader) {
        ({ id: obj5.id, homeHeader: obj5.homeHeader } = guild);
        guildHomeHeaderSource = AvatarUtilsDefault.getGuildHomeHeaderSource({ id: null, homeHeader: null });
        const obj8 = { id: null, homeHeader: null };
      }
    }
    return guildHomeHeaderSource;
  }, items1);
  if (description == null) {
    description = guild.description;
  }
  function handleLoad() {
    const result = sharedValue.set(timing.withTiming(1, timingPresets.timingSlow));
  }
  const tmp8 = sharedValue(4991)();
  const guildBadgeSource = guild(6167).getGuildBadgeSource(guild);
  const tmp2Result = guild(6167);
  const items2 = [GuildPopoutStore];
  const items3 = [guild];
  const discoverableGuild = guild(504).useStateFromStoresObject(items2, () => ({ discoverableGuild: GuildPopoutStore.getGuild(guild.id) }), items3).discoverableGuild;
  const tmp12 = sharedValue(6618)();
  dependencyMap = tmp12;
  const size = tmp6(1496)();
  width = size.width;
  height = size.height;
  const tmp2Result4 = guild(504);
  drawerWidth = guild(11278).useDrawerWidth();
  const items4 = [width, height, tmp12, drawerWidth];
  let obj4 = { style: tmp.container, children: null };
  const memo1 = obj3.useMemo(() => {
    const bound = Math.min(width, height);
    if (closure_2) {
      const _Math = Math;
      const _Math2 = Math;
      return Math.min(Math.max(width, height) - drawerWidth, bound);
    } else {
      return bound - 2 * GUILD_FEED_CARD_MARGIN_HORIZONTAL;
    }
  }, items4);
  if (null != memo) {
    const obj5 = { style: null, children: null };
    const size1 = { height: bound, width: "100%" };
    const items5 = [size1, animatedStyle];
    obj5.style = items5;
    const obj6 = { style: closure_6.absoluteFill, source: memo, onLoad: handleLoad };
    obj5.children = closure_12(tmp6(6164), obj6);
    let tmp17Result = closure_12(tmp6(4810).View, obj5);
    let tmp17 = closure_12;
  } else {
    tmp17 = closure_12;
    let obj7 = { style: null, source: null, onLoad: null };
    const size2 = { height: bound, width: "100%" };
    const items6 = [size2, animatedStyle];
    obj7.style = items6;
    if (tmp2Result6.isThemeDark(tmp8)) {
      let tmp6Result = tmp6(16804);
    } else {
      tmp6Result = tmp6(16805);
    }
    obj7.source = tmp6Result;
    obj7.onLoad = handleLoad;
    tmp17Result = tmp17(drawerWidth, obj7);
    tmp2Result6 = tmp2(4929);
  }
  const items7 = [tmp17Result, ];
  let obj8 = { style: null, children: null };
  const items8 = [, ];
  ({ headerContainer: arr9[0], headerBorder: arr9[1] } = tmp);
  obj8.style = items8;
  const obj9 = { style: null, children: null };
  const items9 = [tmp.content, { width: memo1, marginTop: -32 }];
  obj9.style = items9;
  const obj10 = { style: tmp.guildIconContainer, children: null };
  const obj11 = { style: tmp.avatar, guild, size: null, animate: true };
  const tmp2Result5 = guild(11278);
  obj11.size = guild(6161).GuildIconSizes.XLARGE;
  obj10.children = tmp17(sharedValue(6161), obj11);
  const items10 = [tmp17(height, obj10), , , ];
  const obj12 = { style: tmp.textContainer, children: null };
  const items11 = [tmp17(guild(5086).Text, { lineClamp: 1, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.title, children: guild.name }), ];
  let tmp17Result3 = null;
  if (null != guildBadgeSource) {
    const obj14 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
    tmp17Result3 = tmp17(tmp2(1200).Icon, obj14);
  }
  items11[1] = tmp17Result3;
  obj12.children = items11;
  items10[1] = closure_13(height, obj12);
  let tmp17Result4 = null;
  if (null != description) {
    const obj15 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp17Result4 = tmp17(tmp2(5086).Text, obj15);
  }
  items10[2] = tmp17Result4;
  let tmp15Result4 = null != discoverableGuild && !hideMemberCount;
  if (tmp15Result4) {
    const obj16 = { style: tmp.memberInfo, children: null };
    let features = discoverableGuild.features;
    let tmp15Result = null;
    if (features.has(GuildFeatures.DISCOVERABLE)) {
      const obj17 = {
        style: tmp.publicInfo,
        accessibilityRole: "button",
        onPress() {
              const obj2 = { key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", content: null };
              const intl = guild(1126).intl;
              obj2.content = intl.string(guild(1126).t.O8lDI2);
              sharedValue(4766).open(obj2);
            },
        children: null
      };
      const obj18 = { style: tmp.publicIcon, source: tmp6(16806) };
      const items12 = [tmp17(tmp2(1200).Icon, obj18), ];
      const obj19 = { variant: "text-xs/medium", color: "text-default", children: null };
      let intl = tmp2(1126).intl;
      obj19.children = intl.string(tmp2(1126).t["B/vjCu"]);
      items12[1] = tmp17(tmp2(5086).Text, obj19);
      obj17.children = items12;
      tmp15Result = closure_13(tmp2(6189).PressableOpacity, obj17);
    }
    const items13 = [tmp15Result, ];
    let tmp15Result3 = null;
    if (null != discoverableGuild.presenceCount) {
      tmp15Result3 = null;
      if (null != discoverableGuild.memberCount) {
        const obj20 = { children: null };
        const obj21 = { style: tmp.dotOnline };
        const items14 = [tmp17(tmp16, obj21), ];
        const obj22 = { variant: "text-xs/medium", color: "text-default", children: null };
        const intl2 = tmp2(1126).intl;
        ({ presenceCount: obj29.online, memberCount: obj29.offline } = discoverableGuild);
        obj22.children = intl2.format(tmp2(1126).t.QCNv6P, { online: null, offline: null });
        items14[1] = tmp17(tmp2(5086).Text, obj22);
        obj20.children = items14;
        tmp15Result3 = closure_13(obj3.Fragment, obj20);
        const obj23 = { online: null, offline: null };
      }
    }
    items13[1] = tmp15Result3;
    obj16.children = items13;
    tmp15Result4 = closure_13(tmp16, obj16);
  }
  items10[3] = tmp15Result4;
  obj9.children = items10;
  obj8.children = closure_13(height, obj9);
  items7[1] = tmp17(height, obj8);
  obj4.children = items7;
  return closure_13(height, obj4);
});
ReactCompilerGating = fn(558);
let obj6 = { padding: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_home/native/components/GuildFeedBanner.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildFeedBannerContainer(guildId) {
  const cResult = guildId(576).c(8);
  guildId = guildId.guildId;
  ({ description, hideDescription, hideMemberCount } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = guildId(576);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[3] === description) {
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === hideDescription) {
        }
      }
    }
    const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
    const tmp11 = closure_12(closure_17, obj2);
    cResult[3] = description;
    cResult[4] = stateFromStores;
    cResult[5] = hideDescription;
    cResult[6] = hideMemberCount;
    cResult[7] = tmp11;
  }
  const tmpResult = guildId(504);
}) : (function GuildFeedBannerContainer(guildId) {
  guildId = guildId.guildId;
  ({ description, hideDescription, hideMemberCount } = guildId);
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
    tmp2 = closure_12(closure_17, obj2);
  }
  return tmp2;
}));