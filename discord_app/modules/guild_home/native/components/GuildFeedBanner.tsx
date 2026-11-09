// discord_app/modules/guild_home/native/components/GuildFeedBanner.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import GuildPopoutActionCreators from "../../../guild_profile/GuildPopoutActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildPopoutStore from "../../../guild_profile/GuildPopoutStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
function GuildFeedBanner(guild) {
  guild = guild.guild;
  _require = guild;
  let description = guild.description;
  dependencyMap = undefined;
  let width;
  let height;
  let drawerWidth;
  ({ hideDescription, hideMemberCount } = guild);
  const tmp = closure_12();
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj = require("../../../../../_runtime/metro/01652__.js");
  items = [closure_13, sharedValue];
  _require = undefined;
  [tmp5, tmp6] = items;
  class GuildFeedBannerTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp6];
  GuildFeedBannerTsx1.__closure = items1;
  GuildFeedBannerTsx1.__workletHash = 17188862726401;
  GuildFeedBannerTsx1.__initData = tmp5;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(GuildFeedBannerTsx1);
  let bound = Math.max(0.22 * sharedValue(1493)().height, closure_8);
  const items2 = [guild];
  let obj2 = require("../../../../../_runtime/metro/01652__.js");
  const effect = width.useEffect(() => {
    const guildForPopout = GuildPopoutActionCreators.fetchGuildForPopout(_undefined.id);
  }, items2);
  const items3 = [guild];
  const memo = width.useMemo(() => {
    const features = _undefined.features;
    let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    if (hasItem) {
      hasItem = !PlatformUtils.isAndroid();
    }
    let guildBannerSource = null;
    if (null != _undefined.banner) {
      ({ id: obj3.id, banner: obj3.banner } = _undefined);
      guildBannerSource = AvatarUtilsDefault.getGuildBannerSource({ id: null, banner: null }, hasItem);
      const obj7 = { id: null, banner: null };
    }
    let guildHomeHeaderSource = guildBannerSource;
    if (null != _undefined) {
      guildHomeHeaderSource = guildBannerSource;
      if (null != _undefined.homeHeader) {
        ({ id: obj5.id, homeHeader: obj5.homeHeader } = _undefined);
        guildHomeHeaderSource = AvatarUtilsDefault.getGuildHomeHeaderSource({ id: null, homeHeader: null });
        const obj8 = { id: null, homeHeader: null };
      }
    }
    return guildHomeHeaderSource;
  }, items3);
  if (description == null) {
    description = guild.description;
  }
  const tmp10 = sharedValue(5369)();
  const guildBadgeSource = require("GuildBadge").getGuildBadgeSource(guild);
  const tmp2Result = require("GuildBadge");
  const items4 = [drawerWidth];
  const items5 = [guild];
  const discoverableGuild = require("initialize").useStateFromStoresObject(
    items4,
    () => ({ discoverableGuild: GuildPopoutStore.getGuild(_undefined.id) }),
    items5,
  ).discoverableGuild;
  const tmp14 = sharedValue(7183)();
  dependencyMap = tmp14;
  const size = tmp8(1493)();
  width = size.width;
  height = size.height;
  const tmp2Result4 = require("initialize");
  drawerWidth = require("useDrawerWidth").useDrawerWidth();
  const items6 = [width, height, tmp14, drawerWidth];
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
  }, items6);
  const obj5 = { style: null, children: null };
  const items7 = [{ height: bound, width: "100%" }, animatedStyle];
  obj5.style = items7;
  const obj6 = { style: tmp.bannerImage, source: null, onLoad: null };
  if (memo != null) {
    obj6.source = memo;
    obj6.onLoad = function handleLoad() {
      const result = sharedValue.set(timing_timing.withTiming(1, timingPresets.timingSlow));
    };
    obj5.children = closure_10(tmp20, obj6);
    const items8 = [closure_10(tmp8(1652).View, obj5)];
    let obj7 = { style: null, children: null };
    const items9 = [,];
    ({ headerContainer: arr10[0], headerBorder: arr10[1] } = tmp);
    obj7.style = items9;
    let obj8 = { style: null, children: null };
    const items10 = [tmp.content];
    const obj9 = { width: memo1, marginTop: -32 };
    items10[1] = obj9;
    obj8.style = items10;
    const obj10 = { style: tmp.guildIconContainer, children: null };
    const obj11 = { style: tmp.avatar, guild, size: tmp2(7020).GuildIconSizes.XLARGE, animate: true };
    obj10.children = closure_10(tmp8(7020), obj11);
    const items11 = [closure_10(tmp18, obj10), , ,];
    const obj12 = { style: null, children: null };
    class GuildFeedBannerTsx1 {
      constructor() {
        obj = { opacity: closure_0.get() };
        return obj;
      }
    }
    const obj13 = {
      lineClamp: 1,
      variant: "heading-xl/semibold",
      color: "mobile-text-heading-primary",
      style: tmp.title,
      children: guild.name,
    };
    const items12 = [closure_10(tmp2(5751).Text, obj13)];
    let tmp19Result = null;
    if (null != guildBadgeSource) {
      const obj14 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
      tmp19Result = closure_10(tmp2(1187).Icon, obj14);
    }
    items12[1] = tmp19Result;
    obj12.children = items12;
    items11[1] = closure_11(tmp18, obj12);
    let tmp19Result2 = null;
    if (null != description) {
      const obj15 = { style: tmp.description, variant: "body-sm/medium", color: "text-default", children: description };
      tmp19Result2 = closure_10(tmp2(5751).Text, obj15);
    }
    items11[2] = tmp19Result2;
    let tmp17Result4 = null != discoverableGuild && !hideMemberCount;
    if (tmp17Result4) {
      const obj16 = { style: tmp.memberInfo, children: null };
      let features = discoverableGuild.features;
      let tmp17Result = null;
      if (features.has(GuildFeatures.DISCOVERABLE)) {
        const obj17 = {
          style: tmp.publicInfo,
          accessibilityRole: "button",
          onPress() {
            const obj2 = { text: null, icon: null };
            const intl = _undefined(1113).intl;
            obj2.text = intl.string(_undefined(1113).t.O8lDI2);
            obj2.icon = _undefined(11473).ExperimentalWebIcon;
            sharedValue(5837).open("DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", obj2);
          },
          children: null,
        };
        const obj18 = {
          size: "custom",
          color: tmp8(575).colors.BADGE_INVERTED_BACKGROUND,
          secondaryColor: tmp8(575).colors.BADGE_INVERTED_TEXT,
          style: tmp.publicIcon,
        };
        const items13 = [closure_10(tmp2(9388).ExperimentalWebBadgeIcon, obj18)];
        const obj19 = { variant: "body-xs/medium", color: "text-default", children: null };
        let intl = tmp2(1113).intl;
        obj19.children = intl.string(tmp2(1113).t["B/vjCu"]);
        items13[1] = closure_10(tmp2(5751).Text, obj19);
        obj17.children = items13;
        tmp17Result = closure_11(tmp2(7043).PressableOpacity, obj17);
      }
      const items14 = [tmp17Result];
      let tmp17Result3 = null;
      if (null != discoverableGuild.presenceCount) {
        tmp17Result3 = null;
        if (null != discoverableGuild.memberCount) {
          const obj20 = { children: null };
          const obj21 = { style: tmp.dotOnline };
          const items15 = [closure_10(tmp18, obj21)];
          const obj22 = { variant: "body-xs/medium", color: "text-default", children: null };
          const intl2 = tmp2(1113).intl;
          ({ presenceCount: obj27.online, memberCount: obj27.offline } = discoverableGuild);
          obj22.children = intl2.format(tmp2(1113).t.QCNv6P, { online: null, offline: null });
          items15[1] = closure_10(tmp2(5751).Text, obj22);
          obj20.children = items15;
          tmp17Result3 = closure_11(obj3.Fragment, obj20);
          const obj23 = { online: null, offline: null };
        }
      }
      items14[1] = tmp17Result3;
      obj16.children = items14;
      tmp17Result4 = closure_11(tmp18, obj16);
    }
    items11[3] = tmp17Result4;
    obj8.children = items11;
    obj7.children = closure_11(tmp18, obj8);
    items8[1] = closure_10(tmp18, obj7);
    obj4.children = items8;
    return closure_11(tmp18, obj4);
  } else {
    if (tmp2Result6.isThemeDark(tmp10)) {
      let tmp8Result2 = tmp8(18992);
    } else {
      tmp8Result2 = tmp8(18993);
    }
    tmp2Result6 = tmp2(5147);
  }
  const tmp2Result5 = require("useDrawerWidth");
}
const View = fn(17).View;
const GuildFeedConstants = fn(18991);
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = GuildFeedConstants.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
let closure_8 = GuildFeedConstants.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = fn(1072).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5140);
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
let closure_13 = {
  code: "(function GuildFeedBannerTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
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
  items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
    tmp2 = closure_10(GuildFeedBanner, obj2);
  }
  return tmp2;
});
