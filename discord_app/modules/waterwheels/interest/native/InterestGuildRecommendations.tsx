// === Module 19882: InterestGuildRecommendations ===

// Module 19882 (InterestGuildRecommendations)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _modDef2537 from "module_2537" /* 2537 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import GuildIconDefault from "GuildIcon" /* 7101 */;
import GuildBadgeV2Default from "GuildBadgeV2" /* 9459 */;
import ClipViewDefault from "ClipView" /* 9662 */;
import InterestGhostDefault from "InterestGhost" /* 18721 */;
import InterestGuildProfileSheetDefault from "InterestGuildProfileSheet" /* 19883 */;
import InterestGuildJoinButtonDefault from "InterestGuildJoinButton" /* 19886 */;
import InterestGuildActions from "InterestGuildActions" /* 19887 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMembershipStore from "GuildMembershipStore" /* 4994 */;

require = fn;
function InterestGuildSkeleton() {
  _require = closure_14();
  let obj = { accessible: true, accessibilityLabel: null, accessibilityState: null, children: null };
  const intl = require("util").intl;
  obj.accessibilityLabel = intl.string(require("util").t.ZTNur7);
  obj.accessibilityState = { busy: true };
  obj.children = closure_10(closure_6, {
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: Array.from({ length: 6 }, (arg0, arg1) => {
      const obj = { style: closure_0.row, children: null };
      const obj2 = { style: closure_0.rowHeader, children: null };
      const obj3 = { style: closure_0.profile, children: null };
      items = [closure_2_10(InterestGhostDefault, { style: closure_0.skeletonIcon }), ];
      const obj5 = { style: closure_0.details, children: null };
      const obj6 = { style: closure_0.skeletonNameFrame, children: null };
      const items1 = [closure_0.skeletonLine, arg1 % 2 === 0 ? closure_0.skeletonName : closure_0.skeletonShortName];
      obj6.children = closure_2_10(InterestGhostDefault, { style: items1 });
      const items2 = [closure_2_10(timestampProducer, obj6), ];
      const obj7 = { style: closure_0.skeletonCountFrame, children: null };
      const obj8 = { style: null };
      const items3 = [, ];
      ({ skeletonLine: arr4[0], skeletonCount: arr4[1] } = closure_0);
      obj8.style = items3;
      obj7.children = closure_2_10(InterestGhostDefault, obj8);
      items2[1] = closure_2_10(timestampProducer, obj7);
      obj5.children = items2;
      items[1] = closure_2_11(timestampProducer, obj5);
      obj3.children = items;
      const items4 = [closure_2_11(timestampProducer, obj3), closure_2_10(InterestGhostDefault, { style: closure_0.skeletonButton })];
      obj2.children = items4;
      const items5 = [closure_2_11(timestampProducer, obj2), ];
      const obj10 = { children: null };
      const obj11 = { style: closure_0.skeletonDescriptionFrame, children: null };
      const obj12 = { style: null };
      const items6 = [, ];
      ({ skeletonLine: arr7[0], skeletonDescription: arr7[1] } = closure_0);
      obj12.style = items6;
      obj11.children = closure_2_10(InterestGhostDefault, obj12);
      const items7 = [closure_2_10(timestampProducer, obj11), ];
      const obj13 = { style: closure_0.skeletonDescriptionFrame, children: null };
      const obj14 = { style: null };
      const items8 = [, ];
      ({ skeletonLine: arr9[0], skeletonShortDescription: arr9[1] } = closure_0);
      obj14.style = items8;
      obj13.children = closure_2_10(InterestGhostDefault, obj14);
      items7[1] = closure_2_10(timestampProducer, obj13);
      obj10.children = items7;
      items5[1] = closure_2_11(timestampProducer, obj10);
      obj.children = items5;
      return closure_2_11(timestampProducer, obj, arg1);
    })
  });
  return closure_10(closure_6, obj);
}
function ProgressiveGuildRows(arg0) {
  ({ guilds, onJoinTapped: require, onProfileOpened: importDefault, onJoinResult: dependencyMap } = arg0);
  _slicedToArray = undefined;
  [tmp2, c3] = noop.useState(5);
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => closure_1_3(10), 80);
    const timeout2 = setTimeout(() => closure_1_3(15), 160);
    return () => {
      clearTimeout(closure_0);
      clearTimeout(closure_1);
    };
  }, []);
  const obj = { children: null };
  const substr = guilds.slice(0, tmp2);
  obj.children = substr.map((guild, rowPosition) => closure_2_10(closure_16, { guild, rowPosition, onJoinTapped, onProfileOpened, onJoinResult }, guild.id));
  return closure_10(closure_12, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticEvents: closure_8, GuildFeatures: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const NavigatorHeader = fn(7142);
const headerBackButton = NavigatorHeader.getHeaderBackButton();
const createStyles = fn(5143);
let obj = { screen: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: null, content: null, intro: null, completion: null, guildIcon: null, guildIconImage: null, centered: null, row: null, joinSpace: null, joinTarget: null, rowHeader: null, profile: null, details: null, name: null, nameText: null, badge: null, online: null, dot: null, empty: null, skeletonIcon: null, skeletonNameFrame: null, skeletonCountFrame: null, skeletonDescriptionFrame: null, skeletonLine: null, skeletonName: null, skeletonShortName: null, skeletonCount: null, skeletonDescription: null, skeletonShortDescription: null, skeletonButton: null };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.header = { height: nativeDefault.space.PX_64, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj5 = { height: nativeDefault.space.PX_64, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.content = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj.intro = { alignItems: "center", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
let obj7 = { alignItems: "center", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
obj.completion = { color: nativeDefault.colors.TEXT_BRAND };
let size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40, overflow: "hidden" };
obj.guildIcon = size;
let obj8 = { color: nativeDefault.colors.TEXT_BRAND };
obj.guildIconImage = { borderRadius: nativeDefault.radii.none };
obj.centered = { textAlign: "center" };
let obj9 = { borderRadius: nativeDefault.radii.none };
obj.row = { paddingVertical: nativeDefault.space.PX_16, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, gap: nativeDefault.space.PX_8 };
let obj10 = { paddingVertical: nativeDefault.space.PX_16, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, gap: nativeDefault.space.PX_8 };
obj.joinSpace = { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 };
const rect = { position: "absolute", right: 0, top: nativeDefault.space.PX_24 };
obj.joinTarget = rect;
let obj11 = { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 };
obj.rowHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj.profile = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, minHeight: nativeDefault.space.PX_48 };
obj.details = { flex: 1, minWidth: 0 };
let obj13 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, minHeight: nativeDefault.space.PX_48 };
obj.name = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.nameText = { flexShrink: 1 };
const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, marginRight: 0 };
obj.badge = size1;
let obj14 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.online = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size2 = { width: nativeDefault.space.PX_6, height: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj.dot = size2;
let obj15 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.empty = { alignItems: "center", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 };
const size3 = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40, borderRadius: nativeDefault.radii.sm };
obj.skeletonIcon = size3;
let obj16 = { alignItems: "center", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 };
obj.skeletonNameFrame = { height: fn(5763).TextStyleSheet["body-md/semibold"].lineHeight, justifyContent: "center" };
let obj17 = { height: fn(5763).TextStyleSheet["body-md/semibold"].lineHeight, justifyContent: "center" };
obj.skeletonCountFrame = { height: fn(5763).TextStyleSheet["body-xs/medium"].lineHeight, justifyContent: "center" };
let obj18 = { height: fn(5763).TextStyleSheet["body-xs/medium"].lineHeight, justifyContent: "center" };
obj.skeletonDescriptionFrame = { height: fn(5763).TextStyleSheet["body-sm/normal"].lineHeight, justifyContent: "center" };
let obj19 = { height: fn(5763).TextStyleSheet["body-sm/normal"].lineHeight, justifyContent: "center" };
obj.skeletonLine = { height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round };
obj.skeletonName = { width: "72%" };
obj.skeletonShortName = { width: "56%" };
const size4 = { width: "40%", height: nativeDefault.space.PX_8 };
obj.skeletonCount = size4;
obj.skeletonDescription = { width: "96%" };
obj.skeletonShortDescription = { width: "78%" };
const size5 = { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.modules.button.BORDER_RADIUS };
obj.skeletonButton = size5;
let closure_14 = createStyles.createStyles(obj);
let closure_16 = noop.memo(function InterestGuildRow(guild) {
  guild = guild.guild;
  ({ rowPosition: importDefault, onJoinTapped: dependencyMap, onProfileOpened: _slicedToArray, onJoinResult: noop } = guild);
  const tmp = closure_14();
  const token = guild(5734).useToken(nativeDefault.modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let obj = guild(5734);
  const token1 = guild(5734).useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj2 = guild(5734);
  const guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: guild.id, icon: guild.icon, size: 40 });
  const obj5 = { accessibilityRole: "button", accessibilityLabel: guild.name, accessibilityHint: null, onPress: null, style: null, children: null };
  const intl = guild(1113).intl;
  obj5.accessibilityHint = intl.string(_modDef2537.nkweXX);
  obj5.onPress = function openProfile() {
    _slicedToArray(guild.id, closure_1_1);
    const obj = ActionSheetActionCreatorsDefault;
    const resolved = Promise.resolve({ default: InterestGuildProfileSheetDefault });
    obj.openLazy(resolved, "GuildProfileActionSheet:" + guild.id, {
      guildId: guild.id,
      guildName: guild.name,
      onJoinTapped() {
        return closure_1_2(user.id, closure_1_1, "profile_sheet");
      },
      onJoinResult(arg0) {
        return closure_1_4(user.id, arg0);
      }
    });
  };
  obj5.style = tmp.row;
  const obj6 = { style: tmp.rowHeader, children: null };
  const obj7 = { style: tmp.profile, children: null };
  const obj8 = { style: null, children: null };
  items = [tmp.guildIcon, ];
  const obj9 = { borderRadius: null };
  const obj4 = { id: guild.id, icon: guild.icon, size: 40 };
  obj9.borderRadius = token * nativeDefault.space.PX_40 / token1;
  items[1] = obj9;
  obj8.style = items;
  const obj10 = { icon: guildIconURL, value: guild.name, size: null, selected: false, style: null };
  const tmp11 = ClipViewDefault;
  obj10.size = guild(7101).GuildIconSizes.NORMAL;
  obj10.style = tmp.guildIconImage;
  obj8.children = closure_10(GuildIconDefault, obj10);
  const items1 = [closure_10(tmp11, obj8), ];
  const obj11 = { style: tmp.details, spacing: nativeDefault.space.PX_0, children: null };
  const obj12 = { style: tmp.name, children: null };
  const items2 = [closure_10(guild(5763).Text, { style: tmp.nameText, variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: guild.name }), , ];
  const features = guild.features;
  let hasItem = features.includes(constants2.VERIFIED);
  if (!hasItem) {
    const features2 = guild.features;
    hasItem = features2.includes(constants2.PARTNERED);
  }
  if (hasItem) {
    const obj14 = { guild: null, style: null };
    const tmp4Result = GuildBadgeV2Default;
    const obj15 = { id: null, name: null, icon: null, features: null };
    ({ id: obj16.id, name: obj16.name, icon: obj16.icon } = guild);
    const _Set = Set;
    const set = new Set(guild.features);
    obj15.features = set;
    obj14.guild = tmp2(5006).constructFromPartialGuildRecord(obj15);
    obj14.style = tmp.badge;
    hasItem = closure_10(tmp4Result, obj14);
    const tmp2Result = tmp2(5006);
  }
  items2[1] = hasItem;
  items2[2] = closure_10(guild(7516).ChevronSmallRightIcon, { size: "xxs", accessible: false });
  obj12.children = items2;
  const items3 = [closure_11(closure_6, obj12), ];
  const obj17 = { style: tmp.online, children: null };
  const items4 = [closure_10(closure_6, { style: tmp.dot }), ];
  const obj19 = { variant: "body-xs/medium", color: "text-muted", children: null };
  const intl2 = tmp2(1113).intl;
  obj19.children = intl2.format(guild(1113).t["LC+S+m"], { membersOnline: guild.approximate_presence_count });
  items4[1] = closure_10(guild(5763).Text, obj19);
  obj17.children = items4;
  items3[1] = closure_11(closure_6, obj17);
  obj11.children = items3;
  items1[1] = closure_11(guild(6165).Stack, obj11);
  obj7.children = items1;
  const items5 = [closure_11(closure_6, obj7), closure_10(closure_6, { style: tmp.joinSpace })];
  obj6.children = items5;
  const items6 = [closure_11(closure_6, obj6), ];
  let tmp10Result = null != guild.description;
  if (tmp10Result) {
    tmp10Result = "" !== guild.description;
  }
  if (tmp10Result) {
    const obj22 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: guild.description };
    tmp10Result = closure_10(tmp2(5763).Text, obj22);
  }
  const obj23 = { children: null };
  items6[1] = tmp10Result;
  obj5.children = items6;
  const items7 = [closure_11(guild(7124).PressableHighlight, obj5), ];
  const obj24 = {
    style: tmp.joinTarget,
    children: closure_10(InterestGuildJoinButtonDefault, {
      guildId: guild.id,
      guildName: guild.name,
      onJoinTapped() {
        return dependencyMap(guild.id, importDefault, "row");
      },
      onJoinResult(arg0) {
        return noop(guild.id, arg0);
      }
    })
  };
  items7[1] = closure_10(closure_6, obj24);
  obj23.children = items7;
  return closure_11(closure_6, obj23);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildRecommendations.tsx");

export default function InterestGuildRecommendations(analyticsContext) {
  analyticsContext = analyticsContext.analyticsContext;
  const gameIds = analyticsContext.gameIds;
  const resource = analyticsContext.resource;
  ({ onBack: _slicedToArray, onComplete: noop } = analyticsContext);
  let ref2;
  const tmp = closure_14();
  const syncExternalStore = noop.useSyncExternalStore(resource.subscribe, resource.getSnapshot);
  items = [ref2];
  const items1 = [syncExternalStore.guilds];
  const stateFromStores = analyticsContext(resource[25]).useStateFromStores(items, () => {
    const guilds = syncExternalStore.guilds;
    return guilds.some((id) => member.isMember(id.id));
  }, items1);
  let obj2 = analyticsContext(resource[25]);
  const interestScrollHeader = analyticsContext(resource[26]).useInterestScrollHeader();
  ({ scrollY, onScroll } = interestScrollHeader);
  const ref = noop.useRef(0);
  const effect = noop.useEffect(() => {
    closure_6.current = Date.now();
  }, []);
  ref2 = noop.useRef(false);
  noop.useRef(null);
  let str = "error";
  if (!syncExternalStore.failed) {
    let str2 = "loaded";
    if ("ready" !== syncExternalStore.status) {
      let str4 = "loading";
      if ("unavailable" === syncExternalStore.status) {
        str4 = "empty";
      }
      str2 = str4;
    }
    str = str2;
  }
  const items2 = [analyticsContext, gameIds.length, syncExternalStore, str];
  function handleBack() {
    AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_SERVERS_BACK, analyticsContext);
    _slicedToArray();
  }
  const effect1 = noop.useEffect(() => {
    let tmp2 = "loading" !== str;
    if (tmp2) {
      tmp2 = ref3.current !== syncExternalStore;
    }
    if (tmp2) {
      ref3.current = syncExternalStore;
      const obj2 = {};
      const merged = Object.assign(analyticsContext);
      obj2.pick_count = gameIds.length;
      obj2.recommendation_count = syncExternalStore.guilds.length;
      obj2.load_state = str;
      AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_SERVERS_VIEWED, obj2);
    }
  }, items2);
  let obj3 = analyticsContext(resource[26]);
  analyticsContext(resource[28]).useNavigatorBackPressHandler(() => {
    AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_SERVERS_BACK, analyticsContext);
    _slicedToArray();
    return true;
  });
  const items3 = [analyticsContext, gameIds];
  const items4 = [analyticsContext];
  const callback = noop.useCallback((guild_id, row_position, source) => {
    const obj2 = {};
    const merged = Object.assign(analyticsContext);
    obj2.guild_id = guild_id;
    obj2.row_position = row_position;
    items = [...gameIds];
    obj2.pick_ids = items;
    obj2.source = source;
    AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_SERVERS_JOIN_TAPPED, obj2);
  }, items3);
  const items5 = [analyticsContext];
  const callback1 = noop.useCallback((guild_id, row_position) => {
    const obj2 = {};
    const merged = Object.assign(analyticsContext);
    obj2.guild_id = guild_id;
    obj2.row_position = row_position;
    AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_SERVERS_PROFILE_OPENED, obj2);
  }, items4);
  const obj4 = { style: tmp.screen, children: null };
  const callback2 = noop.useCallback((guild_id, result) => {
    const obj2 = {};
    const merged = Object.assign(analyticsContext);
    obj2.guild_id = guild_id;
    let tmp2 = null;
    if ("pending" !== result) {
      tmp2 = "joined" === result;
    }
    obj2.success = tmp2;
    obj2.result = result;
    AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_SERVERS_JOIN_RESULT, obj2);
  }, items5);
  const obj5 = { style: tmp.header, children: null };
  const obj6 = { accessibilityLabel: null, onPress: null };
  const intl = tmp3(tmp4[10]).intl;
  obj6.accessibilityLabel = intl.string(analyticsContext(resource[10]).t["13/7kX"]);
  obj6.onPress = handleBack;
  const items6 = [closure_10(closure_13, obj6), , ];
  const obj7 = { title: null, scrollY: null };
  const intl2 = tmp3(tmp4[10]).intl;
  obj7.title = intl2.string(gameIds(resource[15])["mdhU/Q"]);
  obj7.scrollY = scrollY;
  items6[1] = closure_10(analyticsContext(resource[26]).InterestCompactTitle, obj7);
  const intl3 = tmp3(tmp4[10]).intl;
  const t = tmp3(tmp4[10]).t;
  function handleComplete() {
    if (!ref2.current) {
      tmp.current = true;
      const guilds = syncExternalStore.guilds;
      const found = guilds.filter((id) => member.isMember(id.id));
      const mapped = found.map((id) => id.id);
      const obj2 = {};
      const merged = Object.assign(analyticsContext);
      obj2.joined_count = mapped.length;
      obj2.joined_guild_ids = mapped;
      const obj = AnalyticsUtilsDefault;
      obj2.pending_join_count = InterestGuildActions.getInterestGuildJoinsInFlight().length;
      let tmp10 = "loading" === syncExternalStore.status;
      if (!tmp10) {
        tmp10 = "idle" === syncExternalStore.status;
      }
      obj2.recommendations_loading = tmp10;
      obj2.recommendations_failed = syncExternalStore.failed;
      const _Math = Math;
      const _Date = Date;
      obj2.duration_ms = Math.max(0, Date.now() - ref.current);
      obj.track(constants.WATERWHEELS_INTEREST_SERVERS_COMPLETE, obj2);
      noop();
    }
  }
  const obj8 = { top: true, children: null };
  const tmp3Result = analyticsContext(resource[28]);
  items6[2] = closure_10(analyticsContext(resource[31]).HeaderTextButton, { label: intl3.string(stateFromStores ? t.i4jeWR : t["5Wxrcd"]), labelStyle: tmp.completion, onPress: handleComplete });
  obj5.children = items6;
  obj8.children = closure_11(ref, obj5);
  const items7 = [closure_10(analyticsContext(resource[30]).SafeAreaPaddingView, obj8), ];
  const obj10 = { contentContainerStyle: tmp.content, onScroll, scrollEventThrottle: 16, children: null };
  const obj11 = { style: tmp.intro, children: null };
  const obj12 = { variant: "heading-xl/semibold", color: "text-strong", children: null };
  const intl4 = tmp3(tmp4[10]).intl;
  obj12.children = intl4.string(gameIds(resource[15]).TQdfcH);
  const items8 = [closure_10(analyticsContext(resource[9]).Heading, obj12), ];
  const obj13 = { variant: "body-sm/normal", color: "text-default", style: tmp.centered, children: null };
  const intl5 = tmp3(tmp4[10]).intl;
  obj13.children = intl5.string(gameIds(resource[15])["G++b7J"]);
  items8[1] = closure_10(analyticsContext(resource[9]).Text, obj13);
  obj11.children = items8;
  const items9 = [closure_11(ref, obj11), closure_10(gameIds(resource[32]), { gameIds }), , , ];
  let tmp15Result = syncExternalStore.guilds.length > 0;
  if (tmp15Result) {
    const obj14 = { guilds: syncExternalStore.guilds, onJoinTapped: callback, onProfileOpened: callback1, onJoinResult: callback2 };
    tmp15Result = closure_10(ProgressiveGuildRows, obj14, syncExternalStore.key);
  }
  items9[2] = tmp15Result;
  let tmp15Result2 = 0 === syncExternalStore.guilds.length;
  if (tmp15Result2) {
    tmp15Result2 = "loading" === syncExternalStore.status;
  }
  if (tmp15Result2) {
    tmp15Result2 = closure_10(InterestGuildSkeleton, {});
  }
  items9[3] = tmp15Result2;
  let tmp13Result = 0 === syncExternalStore.guilds.length;
  if (tmp13Result) {
    tmp13Result = "loading" !== syncExternalStore.status;
  }
  if (tmp13Result) {
    const obj15 = { style: tmp.empty, children: null };
    const obj16 = { variant: "heading-sm/semibold", color: "text-strong", children: null };
    const intl6 = tmp3(tmp4[10]).intl;
    obj16.children = intl6.string(tmp16(tmp4[15]).rtXXRe);
    const items10 = [closure_10(tmp3(tmp4[9]).Heading, obj16), , , ];
    const obj17 = { variant: "body-sm/normal", color: "text-muted", style: tmp.centered, children: null };
    const intl7 = tmp3(tmp4[10]).intl;
    obj17.children = intl7.string(tmp16(tmp4[15]).A3YsGV);
    items10[1] = closure_10(tmp3(tmp4[9]).Text, obj17);
    const obj18 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl8 = tmp3(tmp4[10]).intl;
    obj18.text = intl8.string(tmp16(tmp4[15]).uGhymA);
    obj18.onPress = function handleRetry() {
      const obj2 = {};
      const merged = Object.assign(analyticsContext);
      obj2.load_state = str;
      AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_SERVERS_RETRY, obj2);
      resource.retry();
    };
    items10[2] = closure_10(tmp3(tmp4[33]).Button, obj18);
    const obj19 = { label: null, labelStyle: null, onPress: null };
    const intl9 = tmp3(tmp4[10]).intl;
    obj19.label = intl9.string(tmp3(tmp4[10]).t.i4jeWR);
    obj19.labelStyle = tmp.completion;
    obj19.onPress = handleComplete;
    items10[3] = closure_10(tmp3(tmp4[31]).HeaderTextButton, obj19);
    obj15.children = items10;
    tmp13Result = closure_11(tmp14, obj15);
  }
  items9[4] = tmp13Result;
  obj10.children = items9;
  items7[1] = closure_11(syncExternalStore, obj10);
  obj4.children = items7;
  return closure_11(ref, obj4);
};