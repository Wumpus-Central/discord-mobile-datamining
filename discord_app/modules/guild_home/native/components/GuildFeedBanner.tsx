// discord_app/modules/guild_home/native/components/GuildFeedBanner.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import initialize from "../../../guild_profile/GuildPopoutStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import GUILD_FEED_CARD_MARGIN_HORIZONTAL from "../GuildFeedConstants.tsx";
import { GuildFeatures } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
function GuildFeedBanner(guild) {
  guild = guild.guild;
  let description = guild.description;
  dependencyMap = undefined;
  let width;
  let height;
  let drawerWidth;
  ({ hideDescription, hideMemberCount } = guild);
  const tmp = callback2();
  let obj = guild(4115);
  const sharedValue = obj.useSharedValue(0);
  obj1 = guild(4115);
  class G {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  G.__closure = { opacity: sharedValue };
  G.__workletHash = 10872399645496;
  G.__initData = closure_14;
  const animatedStyle = obj1.useAnimatedStyle(G);
  let bound = Math.max(0.22 * sharedValue(1494)().height, closure_9);
  let obj2 = width;
  const items = [guild];
  const effect = width.useEffect(() => {
    const guildForPopout = guild(13429).fetchGuildForPopout(guild.id);
  }, items);
  const items1 = [guild];
  const memo = width.useMemo(() => {
    const features = guild.features;
    let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    if (hasItem) {
      let obj = guild(500);
      hasItem = !obj.isAndroid();
    }
    let guildBannerSource = null;
    if (null != guild.banner) {
      obj = { id: null, banner: null };
      ({ id: obj3[0], banner: obj3[1] } = guild);
      guildBannerSource = sharedValue(1435).getGuildBannerSource(obj, hasItem);
      const obj2 = sharedValue(1435);
    }
    let guildHomeHeaderSource = guildBannerSource;
    if (null != guild) {
      guildHomeHeaderSource = guildBannerSource;
      if (null != guild.homeHeader) {
        obj = { id: null, homeHeader: null };
        ({ id: obj5[0], homeHeader: obj5[1] } = guild);
        guildHomeHeaderSource = sharedValue(1435).getGuildHomeHeaderSource(obj);
        const obj4 = sharedValue(1435);
      }
    }
    return guildHomeHeaderSource;
  }, items1);
  if (description == null) {
    description = guild.description;
  }
  function handleLoad() {
    const result = sharedValue.set(guild(4664).withTiming(1, guild(4667).timingSlow));
  }
  let tmp2Result = tmp2(8548);
  const guildBadgeSource = tmp2Result.getGuildBadgeSource(guild);
  tmp2Result = tmp2(589);
  const items2 = [closure_6];
  const items3 = [guild];
  const discoverableGuild = tmp2Result.useStateFromStoresObject(items2, () => ({ discoverableGuild: closure_1_6.getGuild(guild.id) }), items3).discoverableGuild;
  const tmp12 = sharedValue(7925)();
  dependencyMap = tmp12;
  const size = tmp6(1494)();
  width = size.width;
  height = size.height;
  const tmp8 = sharedValue(4310)();
  drawerWidth = guild(10719).useDrawerWidth();
  const items4 = [width, height, tmp12, drawerWidth];
  obj = { style: tmp.container, children: null };
  const memo1 = obj2.useMemo(() => {
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
    obj = { style: null, source: null, onLoad: null };
    obj1 = { height: null, width: "100%" };
    obj1[0] = bound;
    const items5 = [obj1, animatedStyle];
    obj[0] = items5;
    obj[1] = memo;
    obj[2] = handleLoad;
    obj2 = obj;
  } else {
    obj2 = { style: null, source: null, onLoad: null };
    const obj3 = { height: null, width: "100%" };
    obj3[0] = bound;
    const items6 = [obj3, animatedStyle];
    obj2[0] = items6;
    if (tmp2Result2.isThemeDark(tmp8)) {
      let tmp6Result = tmp6(15810);
    } else {
      tmp6Result = tmp6(15811);
    }
    obj2[1] = tmp6Result;
    obj2[2] = handleLoad;
    tmp2Result2 = tmp2(1363);
  }
  const items7 = [callback(drawerWidth, obj2), ];
  let obj4 = { style: items8, children: null };
  items8 = [, ];
  ({ headerContainer: arr9[0], headerBorder: arr9[1] } = tmp);
  const obj5 = { style: items9, children: null };
  items9 = [tmp.content, { width: memo1, marginTop: -32 }];
  const obj6 = { style: tmp.guildIconContainer, children: null };
  const obj7 = { style: tmp.avatar, guild, size: null, animate: true };
  tmp6Result = tmp6(7188);
  obj7[2] = guild(7188).GuildIconSizes.XLARGE;
  obj6[1] = callback(tmp6Result, obj7);
  const items10 = [callback(height, obj6), , , ];
  const obj8 = { style: tmp.textContainer, children: null };
  const items11 = [callback(guild(4734).Text, { lineClamp: 1, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.title, children: guild.name }), ];
  let tmp17Result = null;
  if (null != guildBadgeSource) {
    const obj10 = { style: null, source: null, disableColor: true };
    obj10[0] = tmp.icon;
    obj10[1] = guildBadgeSource;
    tmp17Result = callback(tmp2(1297).Icon, obj10);
  }
  items11[1] = tmp17Result;
  obj8[1] = items11;
  items10[1] = callback2(height, obj8);
  tmp17Result = null;
  if (null != description) {
    const obj11 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj11[0] = tmp.description;
    obj11[3] = description;
    tmp17Result = callback(tmp2(4734).Text, obj11);
  }
  items10[2] = tmp17Result;
  let tmp15Result1 = null != discoverableGuild && !hideMemberCount;
  if (tmp15Result1) {
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.memberInfo;
    let features = discoverableGuild.features;
    let tmp15Result = null;
    if (features.has(GuildFeatures.DISCOVERABLE)) {
      const obj13 = { style: null, accessibilityRole: "button", onPress: null, children: null };
      obj13[0] = tmp.publicInfo;
      obj13[2] = function onPress() {
        sharedValue(4094);
        const obj = { key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", content: null };
        const intl = guild(1236).intl;
        obj[1] = intl.string(guild(1236).t.O8lDI2);
        obj.open(obj);
      };
      const obj14 = { style: null, source: null };
      obj14[0] = tmp.publicIcon;
      obj14[1] = tmp6(15812);
      const items12 = [callback(tmp2(1297).Icon, obj14), ];
      const obj15 = { variant: "text-xs/medium", color: "text-default", children: null };
      let intl = tmp2(1236).intl;
      obj15[2] = intl.string(tmp2(1236).t["B/vjCu"]);
      items12[1] = callback(tmp2(4734).Text, obj15);
      obj13[3] = items12;
      tmp15Result = callback2(tmp2(5433).PressableOpacity, obj13);
    }
    const items13 = [tmp15Result, ];
    tmp15Result = null;
    if (null != discoverableGuild.presenceCount) {
      tmp15Result = null;
      if (null != discoverableGuild.memberCount) {
        const obj16 = { children: null };
        const obj17 = { style: null };
        obj17[0] = tmp.dotOnline;
        const items14 = [callback(tmp16, obj17), ];
        const obj18 = { variant: "text-xs/medium", color: "text-default", children: null };
        const intl2 = tmp2(1236).intl;
        ({ presenceCount: obj28[0], memberCount: obj28[1] } = discoverableGuild);
        obj18[2] = intl2.format(tmp2(1236).t.QCNv6P, { online: null, offline: null });
        items14[1] = callback(tmp2(4734).Text, obj18);
        obj16[0] = items14;
        tmp15Result = callback2(obj2.Fragment, obj16);
      }
    }
    items13[1] = tmp15Result;
    obj12[1] = items13;
    tmp15Result1 = callback2(tmp16, obj12);
  }
  items10[3] = tmp15Result1;
  obj5[1] = items10;
  obj4[1] = callback2(height, obj5);
  items7[1] = callback(height, obj4);
  obj[1] = items7;
  return callback2(height, obj);
}
let c3 = importAllResult;
({ View: c4, Image: c5 } = get_ActivityIndicator);
GUILD_FEED_CARD_MARGIN_HORIZONTAL = GUILD_FEED_CARD_MARGIN_HORIZONTAL.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
let closure_9 = GUILD_FEED_CARD_MARGIN_HORIZONTAL.GUILD_FEED_MIN_BANNER_HEIGHT;
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { borderRadius: ThemesDefault.radii.lg, height: 64, width: 64 };
obj[0] = obj;
const createCacheKey = { paddingBottom: 24, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[1] = createCacheKey;
obj[2] = { marginTop: 4 };
obj[3] = { marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL, alignItems: "center", flexDirection: "row" };
obj[4] = { width: "100%" };
obj[5] = { marginLeft: 8 };
obj[6] = { alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[7] = { borderTopRightRadius: ThemesDefault.radii.lg, borderTopLeftRadius: ThemesDefault.radii.lg, marginTop: -16 };
obj[8] = { padding: 4, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[9] = { width: 4, height: 4, borderRadius: ThemesDefault.radii.xs, marginRight: 4, backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
obj[10] = { flexDirection: "row", alignItems: "center", marginRight: 12 };
obj[11] = { marginRight: 4, width: 14, height: 14 };
obj[12] = { marginTop: 4, flexDirection: "row", alignItems: "center" };
obj[13] = { maxWidth: "90%" };
let closure_13 = createCacheKey.createStyles(obj);
let closure_14 = { code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const memoResult = importAllResult.memo(function GuildFeedBannerContainer(guildId) {
  guildId = guildId.guildId;
  ({ description, hideDescription, hideMemberCount } = guildId);
  let obj = guildId(589);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getGuild(guildId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { guild: null, description: null, hideDescription: null, hideMemberCount: null };
    obj[0] = stateFromStores;
    obj[1] = description;
    obj[2] = hideDescription;
    obj[3] = hideMemberCount;
    tmp2 = callback(GuildFeedBanner, obj);
  }
  return tmp2;
});
let result = require("obj132").fileFinishedImporting("modules/guild_home/native/components/GuildFeedBanner.tsx");

export default memoResult;