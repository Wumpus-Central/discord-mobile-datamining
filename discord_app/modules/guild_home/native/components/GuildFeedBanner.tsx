// discord_app/modules/guild_home/native/components/GuildFeedBanner.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import GuildPopoutActionCreators from "../../../guild_profile/GuildPopoutActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildPopoutStore from "../../../guild_profile/GuildPopoutStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
function GuildFeedBanner(guild) {
  guild = guild.guild;
  let description = guild.description;
  dependencyMap = undefined;
  let width;
  let height;
  let drawerWidth;
  ({ hideDescription, hideMemberCount } = guild);
  let tmp = closure_13();
  let obj = guild(4296);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = guild(4296);
  class G {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  G.__closure = { opacity: sharedValue };
  G.__workletHash = 10872399645496;
  G.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(G);
  let bound = Math.max(0.22 * sharedValue(1477)().height, closure_9);
  let obj2 = width;
  const items = [guild];
  const effect = width.useEffect(() => {
    const guildForPopout = GuildPopoutActionCreators.fetchGuildForPopout(guild.id);
  }, items);
  const items1 = [guild];
  const memo = width.useMemo(() => {
    const features = guild.features;
    let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    if (hasItem) {
      let obj = PlatformUtils;
      hasItem = !obj.isAndroid();
    }
    let guildBannerSource = null;
    if (null != guild.banner) {
      obj = { id: null, banner: null };
      ({ id: obj3.id, banner: obj3.banner } = tmp);
      guildBannerSource = AvatarUtilsDefault.getGuildBannerSource(obj, hasItem);
    }
    let guildHomeHeaderSource = guildBannerSource;
    if (null != guild) {
      guildHomeHeaderSource = guildBannerSource;
      if (null != tmp.homeHeader) {
        obj = { id: null, homeHeader: null };
        ({ id: obj5.id, homeHeader: obj5.homeHeader } = tmp);
        guildHomeHeaderSource = AvatarUtilsDefault.getGuildHomeHeaderSource(obj);
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
  let tmp2Result = tmp2(5590);
  const guildBadgeSource = tmp2Result.getGuildBadgeSource(guild);
  tmp2Result = tmp2(504);
  const items2 = [GuildPopoutStore];
  const items3 = [guild];
  const discoverableGuild = tmp2Result.useStateFromStoresObject(
    items2,
    () => ({ discoverableGuild: GuildPopoutStore.getGuild(guild.id) }),
    items3,
  ).discoverableGuild;
  const tmp12 = sharedValue(6945)();
  dependencyMap = tmp12;
  let size = tmp6(1477)();
  width = size.width;
  height = size.height;
  const tmp8 = sharedValue(4495)();
  drawerWidth = guild(11528).useDrawerWidth();
  const items4 = [width, height, tmp12, drawerWidth];
  obj = { style: tmp.container, children: null };
  const memo1 = obj2.useMemo(() => {
    const bound = Math.min(width, height);
    if (closure_2) {
      const _Math = Math;
      const _Math2 = Math;
      return Math.min(Math.max(tmp, tmp2) - drawerWidth, bound);
    } else {
      return bound - 2 * GUILD_FEED_CARD_MARGIN_HORIZONTAL;
    }
    tmp = width;
    tmp2 = height;
  }, items4);
  if (null != memo) {
    obj = { style: null, source: null, onLoad: null };
    size = { height: bound, width: "100%" };
    const items5 = [size, animatedStyle];
    obj.style = items5;
    obj.source = memo;
    obj.onLoad = handleLoad;
    obj1 = obj;
  } else {
    obj1 = { style: null, source: null, onLoad: null };
    const size1 = { height: bound, width: "100%" };
    const items6 = [size1, animatedStyle];
    obj1.style = items6;
    if (tmp2Result2.isThemeDark(tmp8)) {
      let tmp6Result = tmp6(16554);
    } else {
      tmp6Result = tmp6(16555);
    }
    obj1.source = tmp6Result;
    obj1.onLoad = handleLoad;
    tmp2Result2 = tmp2(4411);
  }
  const items7 = [closure_11(drawerWidth, obj1)];
  obj2 = { style: null, children: null };
  const items8 = [,];
  ({ headerContainer: arr9[0], headerBorder: arr9[1] } = tmp);
  obj2.style = items8;
  const obj3 = { style: null, children: null };
  const items9 = [tmp.content, { width: memo1, marginTop: -32 }];
  obj3.style = items9;
  let obj4 = { style: tmp.guildIconContainer, children: null };
  const obj5 = { style: tmp.avatar, guild, size: null, animate: true };
  tmp6Result = tmp6(5584);
  obj5.size = guild(5584).GuildIconSizes.XLARGE;
  obj4.children = closure_11(tmp6Result, obj5);
  const items10 = [closure_11(height, obj4), , ,];
  const obj6 = { style: tmp.textContainer, children: null };
  const items11 = [
    closure_11(guild(4556).Text, {
      lineClamp: 1,
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      style: tmp.title,
      children: guild.name,
    }),
  ];
  let tmp17Result = null;
  if (null != guildBadgeSource) {
    const obj8 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
    tmp17Result = tmp17(tmp2(1178).Icon, obj8);
  }
  items11[1] = tmp17Result;
  obj6.children = items11;
  items10[1] = closure_12(height, obj6);
  tmp17Result = null;
  if (null != description) {
    const obj9 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp17Result = tmp17(tmp2(4556).Text, obj9);
  }
  items10[2] = tmp17Result;
  let tmp15Result1 = null != discoverableGuild && !hideMemberCount;
  if (tmp15Result1) {
    const obj10 = { style: tmp.memberInfo, children: null };
    let features = discoverableGuild.features;
    let tmp15Result = null;
    if (features.has(GuildFeatures.DISCOVERABLE)) {
      const obj11 = {
        style: tmp.publicInfo,
        accessibilityRole: "button",
        onPress() {
          sharedValue(4259);
          const obj = { key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", content: null };
          const intl = guild(1114).intl;
          obj.content = intl.string(guild(1114).t.O8lDI2);
          obj.open(obj);
        },
        children: null,
      };
      const obj12 = { style: tmp.publicIcon, source: tmp6(16556) };
      const items12 = [tmp17(tmp2(1178).Icon, obj12)];
      const obj13 = { variant: "text-xs/medium", color: "text-default", children: null };
      let intl = tmp2(1114).intl;
      obj13.children = intl.string(tmp2(1114).t["B/vjCu"]);
      items12[1] = tmp17(tmp2(4556).Text, obj13);
      obj11.children = items12;
      tmp15Result = tmp15(tmp2(5123).PressableOpacity, obj11);
    }
    const items13 = [tmp15Result];
    tmp15Result = null;
    if (null != discoverableGuild.presenceCount) {
      tmp15Result = null;
      if (null != discoverableGuild.memberCount) {
        const obj14 = { children: null };
        const obj15 = { style: tmp.dotOnline };
        const items14 = [tmp17(tmp16, obj15)];
        const obj16 = { variant: "text-xs/medium", color: "text-default", children: null };
        const intl2 = tmp2(1114).intl;
        ({ presenceCount: obj28.online, memberCount: obj28.offline } = discoverableGuild);
        obj16.children = intl2.format(tmp2(1114).t.QCNv6P, { online: null, offline: null });
        items14[1] = tmp17(tmp2(4556).Text, obj16);
        obj14.children = items14;
        tmp15Result = tmp15(obj2.Fragment, obj14);
        const obj17 = { online: null, offline: null };
      }
    }
    items13[1] = tmp15Result;
    obj10.children = items13;
    tmp15Result1 = tmp15(tmp16, obj10);
  }
  items10[3] = tmp15Result1;
  obj3.children = items10;
  obj2.children = closure_12(height, obj3);
  items7[1] = closure_11(height, obj2);
  obj.children = items7;
  return closure_12(height, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const GuildFeedConstants = fn(16553);
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = GuildFeedConstants.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
let closure_9 = GuildFeedConstants.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let obj = {
  avatar: null,
  container: null,
  description: null,
  textContainer: null,
  content: null,
  icon: null,
  headerContainer: null,
  headerBorder: null,
  guildIconContainer: null,
  dotOnline: null,
  publicInfo: null,
  publicIcon: null,
  memberInfo: null,
  title: null,
};
let size = { borderRadius: nativeDefault.radii.lg, height: 64, width: 64 };
obj.avatar = size;
obj = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
obj.description = { marginTop: 4 };
obj.textContainer = { marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL, alignItems: "center", flexDirection: "row" };
obj.content = { width: "100%" };
obj.icon = { marginLeft: 8 };
const createStyles = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.headerContainer = createStyles;
obj.headerBorder = {
  borderTopRightRadius: nativeDefault.radii.lg,
  borderTopLeftRadius: nativeDefault.radii.lg,
  marginTop: -16,
};
let obj2 = {
  borderTopRightRadius: nativeDefault.radii.lg,
  borderTopLeftRadius: nativeDefault.radii.lg,
  marginTop: -16,
};
obj.guildIconContainer = {
  padding: 4,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let size1 = {
  width: 4,
  height: 4,
  borderRadius: nativeDefault.radii.xs,
  marginRight: 4,
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
};
obj.dotOnline = size1;
obj.publicInfo = { flexDirection: "row", alignItems: "center", marginRight: 12 };
obj.publicIcon = { marginRight: 4, width: 14, height: 14 };
obj.memberInfo = { marginTop: 4, flexDirection: "row", alignItems: "center" };
obj.title = { maxWidth: "90%" };
let closure_13 = createStyles.createStyles(obj);
const __initData = {
  code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let obj3 = {
  padding: 4,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_home/native/components/GuildFeedBanner.tsx");

export default noop.memo(function GuildFeedBannerContainer(guildId) {
  guildId = guildId.guildId;
  ({ description, hideDescription, hideMemberCount } = guildId);
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, description, hideDescription, hideMemberCount };
    tmp2 = closure_11(GuildFeedBanner, obj);
  }
  return tmp2;
});
