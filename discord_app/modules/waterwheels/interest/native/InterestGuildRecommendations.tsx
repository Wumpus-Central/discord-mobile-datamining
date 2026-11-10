// discord_app/modules/waterwheels/interest/native/InterestGuildRecommendations.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import _modDef2534 from "../../WaterwheelsUntranslated.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import GuildBadgeV2Default from "../../../guild/native/GuildBadgeV2.tsx";
import ClipViewDefault from "../../../../design/components/Icon/native/ClipView.tsx";
import InterestGhostDefault from "InterestGhost.tsx";
import InterestGuildProfileSheetDefault from "InterestGuildProfileSheet.tsx";
import InterestGuildJoinButtonDefault from "InterestGuildJoinButton.tsx";
import InterestGuildActions from "InterestGuildActions.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMembershipStore from "../../../../stores/GuildMembershipStore.tsx";

const require = globalThis.__r;

require = fn;
function InterestGuildSkeleton() {
  _require = closure_13();
  let obj = { accessible: true, accessibilityLabel: null, accessibilityState: null, children: null };
  const intl = require("util").intl;
  obj.accessibilityLabel = intl.string(require("util").t.ZTNur7);
  obj.accessibilityState = { busy: true };
  obj.children = closure_9(View, {
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: Array.from({ length: 6 }, (arg0, arg1) => {
      const obj = { style: closure_0.row, children: null };
      const obj2 = { style: closure_0.rowHeader, children: null };
      const obj3 = { style: closure_0.profile, children: null };
      items = [React6(InterestGhostDefault, { style: closure_0.skeletonIcon })];
      const obj5 = { style: closure_0.details, children: null };
      const obj6 = { style: closure_0.skeletonNameFrame, children: null };
      const items1 = [closure_0.skeletonLine, arg1 % 2 === 0 ? closure_0.skeletonName : closure_0.skeletonShortName];
      obj6.children = React6(InterestGhostDefault, { style: items1 });
      const items2 = [React6(View, obj6)];
      const obj7 = { style: closure_0.skeletonCountFrame, children: null };
      const obj8 = { style: null };
      const items3 = [,];
      ({ skeletonLine: arr4[0], skeletonCount: arr4[1] } = closure_0);
      obj8.style = items3;
      obj7.children = React6(InterestGhostDefault, obj8);
      items2[1] = React6(View, obj7);
      obj5.children = items2;
      items[1] = closure_2_10(View, obj5);
      obj3.children = items;
      const items4 = [closure_2_10(View, obj3), React6(InterestGhostDefault, { style: closure_0.skeletonButton })];
      obj2.children = items4;
      const items5 = [closure_2_10(View, obj2)];
      const obj10 = { children: null };
      const obj11 = { style: closure_0.skeletonDescriptionFrame, children: null };
      const obj12 = { style: null };
      const items6 = [,];
      ({ skeletonLine: arr7[0], skeletonDescription: arr7[1] } = closure_0);
      obj12.style = items6;
      obj11.children = React6(InterestGhostDefault, obj12);
      const items7 = [React6(View, obj11)];
      const obj13 = { style: closure_0.skeletonDescriptionFrame, children: null };
      const obj14 = { style: null };
      const items8 = [,];
      ({ skeletonLine: arr9[0], skeletonShortDescription: arr9[1] } = closure_0);
      obj14.style = items8;
      obj13.children = React6(InterestGhostDefault, obj14);
      items7[1] = React6(View, obj13);
      obj10.children = items7;
      items5[1] = closure_2_10(View, obj10);
      obj.children = items5;
      return closure_2_10(View, obj, arg1);
    }),
  });
  return closure_9(View, obj);
}
function ProgressiveGuildRows(arg0) {
  ({
    guilds,
    onRowLayout: require,
    onJoinTapped: importDefault,
    onProfileOpened: dependencyMap,
    onJoinResult: _slicedToArray,
  } = arg0);
  noop = undefined;
  [tmp2, c4] = noop.useState(5);
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => closure_1_4(10), 80);
    const timeout2 = setTimeout(() => closure_1_4(15), 160);
    return () => {
      clearTimeout(closure_0);
      clearTimeout(closure_1);
    };
  }, []);
  const obj = { children: null };
  const substr = guilds.slice(0, tmp2);
  obj.children = substr.map((guild, rowPosition) =>
    React6(closure_15, { guild, rowPosition, onRowLayout, onJoinTapped, onProfileOpened, onJoinResult }, guild.id),
  );
  return closure_9(closure_11, obj);
}
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: metroImportDefault, GuildFeatures: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
const NavigatorHeader = fn(7067);
const headerBackButton = NavigatorHeader.getHeaderBackButton();
const createStyles = fn(5142);
let closure_13 = createStyles.createStyles(() => {
  let PX_64 = arg0;
  if (arg0 === undefined) {
    PX_64 = nativeDefault.space.PX_64;
  }
  const obj = {
    screen: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
    header: null,
    navLeading: null,
    navTrailing: null,
    content: null,
    intro: null,
    completion: null,
    guildIcon: null,
    guildIconImage: null,
    centered: null,
    row: null,
    joinSpace: null,
    joinTarget: null,
    rowHeader: null,
    profile: null,
    details: null,
    name: null,
    nameText: null,
    badge: null,
    online: null,
    dot: null,
    empty: null,
    skeletonIcon: null,
    skeletonNameFrame: null,
    skeletonCountFrame: null,
    skeletonDescriptionFrame: null,
    skeletonLine: null,
    skeletonName: null,
    skeletonShortName: null,
    skeletonCount: null,
    skeletonDescription: null,
    skeletonShortDescription: null,
    skeletonButton: null,
  };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.header = {
    height: nativeDefault.space.PX_64,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  obj.navLeading = { minWidth: PX_64, flexShrink: 0, alignItems: "flex-start" };
  obj.navTrailing = { minWidth: PX_64, flexShrink: 0, alignItems: "flex-end" };
  const obj3 = {
    height: nativeDefault.space.PX_64,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  obj.content = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
  const obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
  obj.intro = {
    alignItems: "center",
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_8,
    gap: nativeDefault.space.PX_4,
  };
  const obj5 = {
    alignItems: "center",
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_8,
    gap: nativeDefault.space.PX_4,
  };
  obj.completion = { color: nativeDefault.colors.TEXT_BRAND };
  const size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40, overflow: "hidden" };
  obj.guildIcon = size;
  const obj6 = { color: nativeDefault.colors.TEXT_BRAND };
  obj.guildIconImage = { borderRadius: nativeDefault.radii.none };
  obj.centered = { textAlign: "center" };
  const obj7 = { borderRadius: nativeDefault.radii.none };
  obj.row = {
    paddingVertical: nativeDefault.space.PX_16,
    borderBottomWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    gap: nativeDefault.space.PX_8,
  };
  const obj8 = {
    paddingVertical: nativeDefault.space.PX_16,
    borderBottomWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    gap: nativeDefault.space.PX_8,
  };
  obj.joinSpace = { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 };
  const rect = { position: "absolute", right: 0, top: nativeDefault.space.PX_24 };
  obj.joinTarget = rect;
  const obj9 = { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 };
  obj.rowHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  const obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  obj.profile = {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_12,
    minHeight: nativeDefault.space.PX_48,
  };
  obj.details = { flex: 1, minWidth: 0 };
  const obj11 = {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_12,
    minHeight: nativeDefault.space.PX_48,
  };
  obj.name = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.nameText = { flexShrink: 1 };
  const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, marginRight: 0 };
  obj.badge = size1;
  const obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.online = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  const size2 = {
    width: nativeDefault.space.PX_6,
    height: nativeDefault.space.PX_6,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE,
  };
  obj.dot = size2;
  const obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.empty = { alignItems: "center", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 };
  const size3 = {
    width: nativeDefault.space.PX_40,
    height: nativeDefault.space.PX_40,
    borderRadius: nativeDefault.radii.sm,
  };
  obj.skeletonIcon = size3;
  const obj14 = { alignItems: "center", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 };
  obj.skeletonNameFrame = { height: Text_Text.TextStyleSheet["body-md/semibold"].lineHeight, justifyContent: "center" };
  const obj15 = { height: Text_Text.TextStyleSheet["body-md/semibold"].lineHeight, justifyContent: "center" };
  obj.skeletonCountFrame = { height: Text_Text.TextStyleSheet["body-xs/medium"].lineHeight, justifyContent: "center" };
  const obj16 = { height: Text_Text.TextStyleSheet["body-xs/medium"].lineHeight, justifyContent: "center" };
  obj.skeletonDescriptionFrame = {
    height: Text_Text.TextStyleSheet["body-sm/normal"].lineHeight,
    justifyContent: "center",
  };
  const obj17 = { height: Text_Text.TextStyleSheet["body-sm/normal"].lineHeight, justifyContent: "center" };
  obj.skeletonLine = { height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round };
  obj.skeletonName = { width: "72%" };
  obj.skeletonShortName = { width: "56%" };
  const size4 = { width: "40%", height: nativeDefault.space.PX_8 };
  obj.skeletonCount = size4;
  obj.skeletonDescription = { width: "96%" };
  obj.skeletonShortDescription = { width: "78%" };
  const size5 = {
    width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8,
    height: nativeDefault.space.PX_32,
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
  };
  obj.skeletonButton = size5;
  return obj;
});
let closure_15 = noop.memo(function InterestGuildRow(guild) {
  guild = guild.guild;
  ({
    rowPosition: importDefault,
    onRowLayout: dependencyMap,
    onJoinTapped: _slicedToArray,
    onProfileOpened: noop,
    onJoinResult: View,
  } = guild);
  const tmp = closure_13();
  const token = guild(5726).useToken(nativeDefault.modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let obj = guild(5726);
  const token1 = guild(5726).useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj2 = guild(5726);
  const obj5 = {
    onLayout(arg0) {
      return dependencyMap(importDefault + 1, arg0);
    },
    children: null,
  };
  const guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: guild.id, icon: guild.icon, size: 40 });
  const obj6 = {
    accessibilityRole: "button",
    accessibilityLabel: guild.name,
    accessibilityHint: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl = guild(1113).intl;
  obj6.accessibilityHint = intl.string(_modDef2534.nkweXX);
  obj6.onPress = function openProfile() {
    noop(guild.id, closure_1_1);
    const obj = ActionSheetActionCreatorsDefault;
    const resolved = Promise.resolve({ default: InterestGuildProfileSheetDefault });
    obj.openLazy(resolved, "GuildProfileActionSheet:" + guild.id, {
      guildId: guild.id,
      guildName: guild.name,
      onJoinTapped() {
        return closure_1_3(user.id, closure_1_1, "profile_sheet");
      },
      onJoinResult(arg0) {
        return closure_1_5(user.id, arg0);
      },
    });
  };
  obj6.style = tmp.row;
  const obj7 = { style: tmp.rowHeader, children: null };
  const obj8 = { style: tmp.profile, children: null };
  const obj9 = { style: null, children: null };
  items = [tmp.guildIcon];
  const obj10 = { borderRadius: null };
  const obj4 = { id: guild.id, icon: guild.icon, size: 40 };
  obj10.borderRadius = (token * nativeDefault.space.PX_40) / token1;
  items[1] = obj10;
  obj9.style = items;
  const obj11 = { icon: guildIconURL, value: guild.name, size: null, selected: false, style: null };
  const tmp11 = ClipViewDefault;
  obj11.size = guild(7023).GuildIconSizes.NORMAL;
  obj11.style = tmp.guildIconImage;
  obj9.children = closure_9(GuildIconDefault, obj11);
  const items1 = [closure_9(tmp11, obj9)];
  const obj12 = { style: tmp.details, spacing: nativeDefault.space.PX_0, children: null };
  const obj13 = { style: tmp.name, children: null };
  const items2 = [
    closure_9(guild(5753).Text, {
      style: tmp.nameText,
      variant: "body-md/semibold",
      color: "text-strong",
      lineClamp: 1,
      children: guild.name,
    }),
    ,
  ];
  const features = guild.features;
  let hasItem = features.includes(constants2.VERIFIED);
  if (!hasItem) {
    const features2 = guild.features;
    hasItem = features2.includes(constants2.PARTNERED);
  }
  if (hasItem) {
    const obj15 = { guild: null, style: null };
    const tmp4Result = GuildBadgeV2Default;
    const obj16 = { id: null, name: null, icon: null, features: null };
    ({ id: obj17.id, name: obj17.name, icon: obj17.icon } = guild);
    const _Set = Set;
    const set = new Set(guild.features);
    obj16.features = set;
    obj15.guild = tmp2(5005).constructFromPartialGuildRecord(obj16);
    obj15.style = tmp.badge;
    hasItem = closure_9(tmp4Result, obj15);
    const tmp2Result = tmp2(5005);
  }
  items2[1] = hasItem;
  items2[2] = closure_9(guild(7441).ChevronSmallRightIcon, { size: "xxs", accessible: false });
  obj13.children = items2;
  const items3 = [closure_10(View, obj13)];
  const obj18 = { style: tmp.online, children: null };
  const items4 = [closure_9(View, { style: tmp.dot })];
  const obj20 = { variant: "body-xs/medium", color: "text-muted", children: null };
  const intl2 = tmp2(1113).intl;
  obj20.children = intl2.format(guild(1113).t["LC+S+m"], { membersOnline: guild.approximate_presence_count });
  items4[1] = closure_9(guild(5753).Text, obj20);
  obj18.children = items4;
  items3[1] = closure_10(View, obj18);
  obj12.children = items3;
  items1[1] = closure_10(guild(6161).Stack, obj12);
  obj8.children = items1;
  const items5 = [closure_10(View, obj8), closure_9(View, { style: tmp.joinSpace })];
  obj7.children = items5;
  const items6 = [closure_10(View, obj7)];
  let tmp10Result = null != guild.description;
  if (tmp10Result) {
    tmp10Result = "" !== guild.description;
  }
  if (tmp10Result) {
    const obj23 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: guild.description };
    tmp10Result = closure_9(tmp2(5753).Text, obj23);
  }
  items6[1] = tmp10Result;
  obj6.children = items6;
  const items7 = [closure_10(guild(7046).PressableHighlight, obj6)];
  const obj24 = {
    style: tmp.joinTarget,
    children: closure_9(InterestGuildJoinButtonDefault, {
      guildId: guild.id,
      guildName: guild.name,
      onJoinTapped() {
        return _slicedToArray(guild.id, importDefault, "row");
      },
      onJoinResult(arg0) {
        return View(guild.id, arg0);
      },
    }),
  };
  items7[1] = closure_9(View, obj24);
  obj5.children = items7;
  return closure_10(View, obj5);
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildRecommendations.tsx");

export default function InterestGuildRecommendations(analyticsContext) {
  analyticsContext = analyticsContext.analyticsContext;
  ({ getMaxRowSeen: importDefault, gameIds } = analyticsContext);
  const resource = analyticsContext.resource;
  ({ onBack: noop, onComplete: View } = analyticsContext);
  c6 = undefined;
  [tmp2, c6] = resource(noop.useState(0), 2);
  const tmp3 = resource(noop.useState(0), 2);
  closure_7 = tmp3[1];
  const tmp6 = closure_13(Math.max(require("native").space.PX_64, tmp2, tmp3[0]));
  const syncExternalStore = noop.useSyncExternalStore(resource.subscribe, resource.getSnapshot);
  const tmp = resource(noop.useState(0), 2);
  items = [c6];
  const items1 = [syncExternalStore.guilds];
  const stateFromStores = analyticsContext(gameIds[25]).useStateFromStores(
    items,
    () => {
      const guilds = syncExternalStore.guilds;
      return guilds.some((id) => member.isMember(id.id));
    },
    items1,
  );
  const tmp10 = require("useInterestRowVisibility")(analyticsContext.onRowSeen);
  let obj2 = analyticsContext(gameIds[25]);
  const interestScrollHeader = analyticsContext(gameIds[27]).useInterestScrollHeader(tmp10.onScroll);
  ({ scrollY, onScroll } = interestScrollHeader);
  const ref = noop.useRef(0);
  const effect = noop.useEffect(() => {
    closure_9.current = Date.now();
  }, []);
  const ref2 = noop.useRef(false);
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
    noop();
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
  let obj3 = analyticsContext(gameIds[27]);
  analyticsContext(gameIds[29]).useNavigatorBackPressHandler(() => {
    AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_SERVERS_BACK, analyticsContext);
    noop();
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
  const obj4 = { style: tmp6.screen, children: null };
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
  const obj5 = { style: tmp6.header, children: null };
  const obj6 = {
    style: tmp6.navLeading,
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.width);
    },
    children: null,
  };
  const obj7 = { accessibilityLabel: null, onPress: null };
  const intl = tmp8(gameIds[10]).intl;
  obj7.accessibilityLabel = intl.string(analyticsContext(gameIds[10]).t["13/7kX"]);
  obj7.onPress = handleBack;
  obj6.children = ref(str, obj7);
  const items6 = [ref(View, obj6), ,];
  const obj8 = { title: null, scrollY: null };
  const intl2 = tmp8(gameIds[10]).intl;
  obj8.title = intl2.string(require("../../WaterwheelsUntranslated.messages.js")["mdhU/Q"]);
  obj8.scrollY = scrollY;
  items6[1] = ref(analyticsContext(gameIds[27]).InterestCompactTitle, obj8);
  const obj9 = {
    style: tmp6.navTrailing,
    onLayout(nativeEvent) {
      return closure_7(nativeEvent.nativeEvent.layout.width);
    },
    children: null,
  };
  const intl3 = tmp8(gameIds[10]).intl;
  const t = tmp8(gameIds[10]).t;
  const obj10 = { top: true, children: null };
  const tmp8Result = analyticsContext(gameIds[29]);
  obj9.children = ref(analyticsContext(gameIds[31]).HeaderTextButton, {
    label: intl3.string(stateFromStores ? t.i4jeWR : t["5Wxrcd"]),
    labelStyle: tmp6.completion,
    onPress: function handleComplete() {
      if (!ref2.current) {
        tmp.current = true;
        const guilds = syncExternalStore.guilds;
        const found = guilds.filter((id) => member.isMember(id.id));
        const mapped = found.map((id) => id.id);
        const obj2 = {};
        const merged = Object.assign(analyticsContext);
        obj2.max_row_seen = closure_1_1();
        obj2.joined_count = mapped.length;
        obj2.joined_guild_ids = mapped;
        const obj = AnalyticsUtilsDefault;
        obj2.pending_join_count = InterestGuildActions.getInterestGuildJoinsInFlight().length;
        let tmp11 = "loading" === syncExternalStore.status;
        if (!tmp11) {
          tmp11 = "idle" === syncExternalStore.status;
        }
        obj2.recommendations_loading = tmp11;
        obj2.recommendations_failed = syncExternalStore.failed;
        const _Math = Math;
        const _Date = Date;
        obj2.duration_ms = Math.max(0, Date.now() - ref.current);
        obj.track(constants.WATERWHEELS_INTEREST_SERVERS_COMPLETE, obj2);
        View();
      }
    },
  });
  items6[2] = ref(View, obj9);
  obj5.children = items6;
  obj10.children = ref2(View, obj5);
  const items7 = [ref(analyticsContext(gameIds[30]).SafeAreaPaddingView, obj10)];
  const obj12 = {
    contentContainerStyle: tmp6.content,
    onScroll,
    onLayout: tmp10.onViewportLayout,
    scrollEventThrottle: 16,
    children: null,
  };
  const obj13 = { style: tmp6.intro, children: null };
  const obj14 = { variant: "heading-xl/semibold", color: "text-strong", children: null };
  const intl4 = tmp8(gameIds[10]).intl;
  obj14.children = intl4.string(require("../../WaterwheelsUntranslated.messages.js").TQdfcH);
  const items8 = [ref(analyticsContext(gameIds[9]).Heading, obj14)];
  const obj15 = {
    variant: "body-sm/normal",
    color: "text-default",
    style: tmp6.centered,
    lineBreakStrategyIOS: "push-out",
    textBreakStrategy: "balanced",
    children: null,
  };
  const intl5 = tmp8(gameIds[10]).intl;
  obj15.children = intl5.string(require("../../WaterwheelsUntranslated.messages.js")["G++b7J"]);
  items8[1] = ref(analyticsContext(gameIds[9]).Text, obj15);
  obj13.children = items8;
  const items9 = [ref2(View, obj13), , , ,];
  let tmp20Result = gameIds.length > 0;
  if (tmp20Result) {
    const obj16 = { gameIds };
    tmp20Result = tmp20(require("InterestPickedGames"), obj16);
  }
  items9[1] = tmp20Result;
  let tmp20Result3 = syncExternalStore.guilds.length > 0;
  if (tmp20Result3) {
    const obj17 = { onLayout: tmp10.onContentLayout, children: null };
    const obj18 = {
      guilds: syncExternalStore.guilds,
      onRowLayout: tmp10.onRowLayout,
      onJoinTapped: callback,
      onProfileOpened: callback1,
      onJoinResult: callback2,
    };
    obj17.children = tmp20(ProgressiveGuildRows, obj18, syncExternalStore.key);
    tmp20Result3 = tmp20(View, obj17);
  }
  items9[2] = tmp20Result3;
  let tmp20Result4 = 0 === syncExternalStore.guilds.length;
  if (tmp20Result4) {
    tmp20Result4 = "loading" === syncExternalStore.status;
  }
  if (tmp20Result4) {
    tmp20Result4 = tmp20(InterestGuildSkeleton, {});
  }
  items9[3] = tmp20Result4;
  let tmp18Result = 0 === syncExternalStore.guilds.length;
  if (tmp18Result) {
    tmp18Result = "loading" !== syncExternalStore.status;
  }
  if (tmp18Result) {
    const obj19 = { style: tmp6.empty, children: null };
    const obj20 = { variant: "body-lg/normal", color: "text-muted", style: tmp6.centered, children: null };
    const intl6 = tmp8(gameIds[10]).intl;
    obj20.children = intl6.string(require("../../WaterwheelsUntranslated.messages.js").A3YsGV);
    const items10 = [tmp20(tmp8(gameIds[9]).Text, obj20)];
    const obj21 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl7 = tmp8(gameIds[10]).intl;
    obj21.text = intl7.string(require("../../WaterwheelsUntranslated.messages.js").uGhymA);
    obj21.onPress = function handleRetry() {
      const obj2 = {};
      const merged = Object.assign(analyticsContext);
      obj2.load_state = str;
      AnalyticsUtilsDefault.track(constants.WATERWHEELS_INTEREST_SERVERS_RETRY, obj2);
      resource.retry();
    };
    items10[1] = tmp20(tmp8(gameIds[35]).Button, obj21);
    obj19.children = items10;
    tmp18Result = tmp18(View, obj19);
  }
  items9[4] = tmp18Result;
  obj12.children = items9;
  items7[1] = ref2(require("../../../../../_runtime/metro/01652__.js").ScrollView, obj12);
  obj4.children = items7;
  return ref2(View, obj4);
}
