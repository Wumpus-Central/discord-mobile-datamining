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
  const tmp = closure_12();
  const sharedValue = guild(5090).useSharedValue(0);
  let obj = guild(5090);
  const fn = function x() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10872399645496;
  fn.__initData = __initData;
  const animatedStyle = guild(5090).useAnimatedStyle(fn);
  let bound = Math.max(0.22 * sharedValue(1492)().height, closure_8);
  const items = [guild];
  let obj2 = guild(5090);
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
  const tmp8 = sharedValue(5248)();
  const guildBadgeSource = guild(6955).getGuildBadgeSource(guild);
  const tmp2Result = guild(6955);
  const items2 = [drawerWidth];
  const items3 = [guild];
  const discoverableGuild = guild(504).useStateFromStoresObject(
    items2,
    () => ({ discoverableGuild: GuildPopoutStore.getGuild(guild.id) }),
    items3,
  ).discoverableGuild;
  const tmp12 = sharedValue(7106)();
  dependencyMap = tmp12;
  const size = tmp6(1492)();
  width = size.width;
  height = size.height;
  const tmp2Result4 = guild(504);
  drawerWidth = guild(11522).useDrawerWidth();
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
  const obj5 = { style: null, children: null };
  const items5 = [{ height: bound, width: "100%" }, animatedStyle];
  obj5.style = items5;
  const obj6 = { style: tmp.bannerImage, source: null, onLoad: null };
  if (memo != null) {
    obj6.source = memo;
    obj6.onLoad = function handleLoad() {
      const result = sharedValue.set(timing.withTiming(1, timingPresets.timingSlow));
    };
    obj5.children = closure_10(tmp18, obj6);
    const items6 = [closure_10(tmp6(5090).View, obj5)];
    let obj7 = { style: null, children: null };
    const items7 = [,];
    ({ headerContainer: arr8[0], headerBorder: arr8[1] } = tmp);
    obj7.style = items7;
    let obj8 = { style: null, children: null };
    const items8 = [tmp.content];
    const obj9 = { width: memo1, marginTop: -32 };
    items8[1] = obj9;
    obj8.style = items8;
    const obj10 = { style: tmp.guildIconContainer, children: null };
    const obj11 = { style: tmp.avatar, guild, size: tmp2(6951).GuildIconSizes.XLARGE, animate: true };
    obj10.children = closure_10(tmp6(6951), obj11);
    const items9 = [closure_10(tmp16, obj10), , ,];
    const obj12 = { style: tmp.textContainer, children: null };
    const obj13 = {
      lineClamp: 1,
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      style: tmp.title,
      children: guild.name,
    };
    const items10 = [closure_10(tmp2(5619).Text, obj13)];
    let tmp17Result = null;
    if (null != guildBadgeSource) {
      const obj14 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
      tmp17Result = closure_10(tmp2(1188).Icon, obj14);
    }
    items10[1] = tmp17Result;
    obj12.children = items10;
    items9[1] = closure_11(tmp16, obj12);
    let tmp17Result2 = null;
    if (null != description) {
      const obj15 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
      tmp17Result2 = closure_10(tmp2(5619).Text, obj15);
    }
    items9[2] = tmp17Result2;
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
            const obj2 = { text: null };
            const intl = guild(1114).intl;
            obj2.text = intl.string(guild(1114).t.O8lDI2);
            sharedValue(5707).open("DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", obj2);
          },
          children: null,
        };
        const obj18 = { style: tmp.publicIcon, source: tmp6(18582) };
        const items11 = [closure_10(tmp2(1188).Icon, obj18)];
        const obj19 = { variant: "text-xs/medium", color: "text-default", children: null };
        let intl = tmp2(1114).intl;
        obj19.children = intl.string(tmp2(1114).t["B/vjCu"]);
        items11[1] = closure_10(tmp2(5619).Text, obj19);
        obj17.children = items11;
        tmp15Result = closure_11(tmp2(6974).PressableOpacity, obj17);
      }
      const items12 = [tmp15Result];
      let tmp15Result3 = null;
      if (null != discoverableGuild.presenceCount) {
        tmp15Result3 = null;
        if (null != discoverableGuild.memberCount) {
          const obj20 = { children: null };
          const obj21 = { style: tmp.dotOnline };
          const items13 = [closure_10(tmp16, obj21)];
          const obj22 = { variant: "text-xs/medium", color: "text-default", children: null };
          const intl2 = tmp2(1114).intl;
          ({ presenceCount: obj27.online, memberCount: obj27.offline } = discoverableGuild);
          obj22.children = intl2.format(tmp2(1114).t.QCNv6P, { online: null, offline: null });
          items13[1] = closure_10(tmp2(5619).Text, obj22);
          obj20.children = items13;
          tmp15Result3 = closure_11(obj3.Fragment, obj20);
          const obj23 = { online: null, offline: null };
        }
      }
      items12[1] = tmp15Result3;
      obj16.children = items12;
      tmp15Result4 = closure_11(tmp16, obj16);
    }
    items9[3] = tmp15Result4;
    obj8.children = items9;
    obj7.children = closure_11(tmp16, obj8);
    items6[1] = closure_10(tmp16, obj7);
    obj4.children = items6;
    return closure_11(tmp16, obj4);
  } else {
    if (tmp2Result6.isThemeDark(tmp8)) {
      let tmp6Result2 = tmp6(18580);
    } else {
      tmp6Result2 = tmp6(18581);
    }
    tmp2Result6 = tmp2(5016);
  }
  const tmp2Result5 = guild(11522);
}
const View = fn(17).View;
const GuildFeedConstants = fn(18579);
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = GuildFeedConstants.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
let closure_8 = GuildFeedConstants.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = fn(1072).GuildFeatures;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5009);
let obj = {
  avatar: null,
  container: null,
  bannerImage: null,
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
obj.container = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.bannerImage = { width: "100%", height: "100%" };
obj.description = { marginTop: 4 };
obj.textContainer = { marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL, alignItems: "center", flexDirection: "row" };
obj.content = { width: "100%" };
obj.icon = { marginLeft: 8 };
const obj3 = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.headerContainer = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj4 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.headerBorder = {
  borderTopRightRadius: nativeDefault.radii.lg,
  borderTopLeftRadius: nativeDefault.radii.lg,
  marginTop: -16,
};
let obj5 = {
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
const size1 = {
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
let closure_12 = createStyles.createStyles(obj);
const __initData = {
  code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let obj6 = {
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
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
    tmp2 = closure_10(GuildFeedBanner, obj2);
  }
  return tmp2;
});
