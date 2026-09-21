// === Module 16901: GuildFeedBanner ===

// Module 16901 (GuildFeedBanner)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import timing from "timing" /* 4757 */;
import timingPresets from "timingPresets" /* 4760 */;
import GuildPopoutActionCreators from "GuildPopoutActionCreators" /* 14238 */;
import noop from "module_19" /* 19 */;
import GuildPopoutStore from "GuildPopoutStore" /* 14237 */;
import GuildStore from "GuildStore" /* 2063 */;

require = fn;
function GuildFeedBanner(guild) {
  guild = guild.guild;
  let description = guild.description;
  dependencyMap = undefined;
  let width;
  let height;
  let drawerWidth;
  ({ hideDescription, hideMemberCount } = guild);
  const tmp = closure_13();
  const sharedValue = guild(4492).useSharedValue(0);
  let obj = guild(4492);
  class G {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  G.__closure = { opacity: sharedValue };
  G.__workletHash = 10872399645496;
  G.__initData = __initData;
  const animatedStyle = guild(4492).useAnimatedStyle(G);
  let bound = Math.max(0.22 * sharedValue(1478)().height, closure_9);
  const items = [guild];
  let obj2 = guild(4492);
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
  const tmp8 = sharedValue(4690)();
  const guildBadgeSource = guild(5807).getGuildBadgeSource(guild);
  const tmp2Result = guild(5807);
  const items2 = [GuildPopoutStore];
  const items3 = [guild];
  const discoverableGuild = guild(504).useStateFromStoresObject(items2, () => ({ discoverableGuild: GuildPopoutStore.getGuild(guild.id) }), items3).discoverableGuild;
  const tmp12 = sharedValue(7188)();
  dependencyMap = tmp12;
  const size = tmp6(1478)();
  width = size.width;
  height = size.height;
  const tmp2Result4 = guild(504);
  drawerWidth = guild(11779).useDrawerWidth();
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
    const obj5 = { style: null, source: null, onLoad: null };
    const size1 = { height: bound, width: "100%" };
    const items5 = [size1, animatedStyle];
    obj5.style = items5;
    obj5.source = memo;
    obj5.onLoad = handleLoad;
    let obj6 = obj5;
  } else {
    obj6 = { style: null, source: null, onLoad: null };
    const size2 = { height: bound, width: "100%" };
    const items6 = [size2, animatedStyle];
    obj6.style = items6;
    if (tmp2Result6.isThemeDark(tmp8)) {
      let tmp6Result = tmp6(16903);
    } else {
      tmp6Result = tmp6(16904);
    }
    obj6.source = tmp6Result;
    obj6.onLoad = handleLoad;
    tmp2Result6 = tmp2(4607);
  }
  const items7 = [closure_11(drawerWidth, obj6), ];
  let obj7 = { style: null, children: null };
  const items8 = [, ];
  ({ headerContainer: arr9[0], headerBorder: arr9[1] } = tmp);
  obj7.style = items8;
  let obj8 = { style: null, children: null };
  const items9 = [tmp.content, { width: memo1, marginTop: -32 }];
  obj8.style = items9;
  const obj9 = { style: tmp.guildIconContainer, children: null };
  const obj10 = { style: tmp.avatar, guild, size: null, animate: true };
  const tmp2Result5 = guild(11779);
  obj10.size = guild(5801).GuildIconSizes.XLARGE;
  obj9.children = closure_11(sharedValue(5801), obj10);
  const items10 = [closure_11(height, obj9), , , ];
  const obj11 = { style: tmp.textContainer, children: null };
  const items11 = [closure_11(guild(4752).Text, { lineClamp: 1, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.title, children: guild.name }), ];
  let tmp17Result = null;
  if (null != guildBadgeSource) {
    const obj13 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
    tmp17Result = closure_11(tmp2(1177).Icon, obj13);
  }
  items11[1] = tmp17Result;
  obj11.children = items11;
  items10[1] = closure_12(height, obj11);
  let tmp17Result2 = null;
  if (null != description) {
    const obj14 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp17Result2 = closure_11(tmp2(4752).Text, obj14);
  }
  items10[2] = tmp17Result2;
  let tmp15Result4 = null != discoverableGuild && !hideMemberCount;
  if (tmp15Result4) {
    const obj15 = { style: tmp.memberInfo, children: null };
    let features = discoverableGuild.features;
    let tmp15Result = null;
    if (features.has(GuildFeatures.DISCOVERABLE)) {
      const obj16 = {
        style: tmp.publicInfo,
        accessibilityRole: "button",
        onPress() {
              const obj2 = { key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", content: null };
              const intl = guild(1115).intl;
              obj2.content = intl.string(guild(1115).t.O8lDI2);
              sharedValue(4454).open(obj2);
            },
        children: null
      };
      const obj17 = { style: tmp.publicIcon, source: tmp6(16905) };
      const items12 = [closure_11(tmp2(1177).Icon, obj17), ];
      const obj18 = { variant: "text-xs/medium", color: "text-default", children: null };
      let intl = tmp2(1115).intl;
      obj18.children = intl.string(tmp2(1115).t["B/vjCu"]);
      items12[1] = closure_11(tmp2(4752).Text, obj18);
      obj16.children = items12;
      tmp15Result = closure_12(tmp2(5339).PressableOpacity, obj16);
    }
    const items13 = [tmp15Result, ];
    let tmp15Result3 = null;
    if (null != discoverableGuild.presenceCount) {
      tmp15Result3 = null;
      if (null != discoverableGuild.memberCount) {
        const obj19 = { children: null };
        const obj20 = { style: tmp.dotOnline };
        const items14 = [closure_11(tmp16, obj20), ];
        const obj21 = { variant: "text-xs/medium", color: "text-default", children: null };
        const intl2 = tmp2(1115).intl;
        ({ presenceCount: obj28.online, memberCount: obj28.offline } = discoverableGuild);
        obj21.children = intl2.format(tmp2(1115).t.QCNv6P, { online: null, offline: null });
        items14[1] = closure_11(tmp2(4752).Text, obj21);
        obj19.children = items14;
        tmp15Result3 = closure_12(obj3.Fragment, obj19);
        const obj22 = { online: null, offline: null };
      }
    }
    items13[1] = tmp15Result3;
    obj15.children = items13;
    tmp15Result4 = closure_12(tmp16, obj15);
  }
  items10[3] = tmp15Result4;
  obj8.children = items10;
  obj7.children = closure_12(height, obj8);
  items7[1] = closure_11(height, obj7);
  obj4.children = items7;
  return closure_12(height, obj4);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const GuildFeedConstants = fn(16902);
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = GuildFeedConstants.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
let closure_9 = GuildFeedConstants.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4756);
let obj = { avatar: null, container: null, description: null, textContainer: null, content: null, icon: null, headerContainer: null, headerBorder: null, guildIconContainer: null, dotOnline: null, publicInfo: null, publicIcon: null, memberInfo: null, title: null };
let size = { borderRadius: nativeDefault.radii.lg, height: 64, width: 64 };
obj.avatar = size;
obj.container = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.description = { marginTop: 4 };
obj.textContainer = { marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL, alignItems: "center", flexDirection: "row" };
obj.content = { width: "100%" };
obj.icon = { marginLeft: 8 };
const obj3 = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
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
let closure_13 = createStyles.createStyles(obj);
const __initData = { code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let obj6 = { padding: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_home/native/components/GuildFeedBanner.tsx");

export default noop.memo(function GuildFeedBannerContainer(guildId) {
  guildId = guildId.guildId;
  ({ description, hideDescription, hideMemberCount } = guildId);
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
    tmp2 = closure_11(GuildFeedBanner, obj2);
  }
  return tmp2;
});