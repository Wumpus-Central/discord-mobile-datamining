// === Module 13662: GuildBoostingGuildList ===

// Module 13662 (GuildBoostingGuildList)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useThemeDefault from "useTheme" /* 4991 */;
import GuildIconDefault from "GuildIcon" /* 6161 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6671 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 7013 */;
import transitionToGuild from "transitionToGuild" /* 7043 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 8003 */;
import _modDef9737 from "module_9737" /* 9737 */;
import BoostedGuildTierProgressCircleDefault from "BoostedGuildTierProgressCircle" /* 13631 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import SortedGuildStore from "SortedGuildStore" /* 5968 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
let closure_7 = fn(1085).NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { guildCard: { padding: 12, paddingLeft: 16, borderRadius: nativeDefault.radii.xs, marginBottom: 8, minHeight: 96, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, guildIcon: { marginRight: 16 }, guildCardDescription: { flex: 1 }, subscriptionInfo: { flexDirection: "row", alignItems: "center" }, premiumGuildImage: { width: 18, height: 12, marginLeft: -5 } };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBoostingGuildListItem(guildId) {
  const cResult = guildId(576).c(33);
  guildId = guildId.guildId;
  const tmp4 = closure_10();
  useThemeDefault();
  if (cResult[0] !== guildId) {
    function handleSelectGuild() {
      transitionToGuild.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
      UserSettingsModalActionCreatorsDefault.close();
    }
    cResult[0] = guildId;
    cResult[1] = handleSelectGuild;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[2] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    class S {
      constructor() {
        return closure_5.getGuild(guildId);
      }
    }
    cResult[3] = guildId;
    cResult[4] = S;
  } else {
    class S {
      constructor() {
        return closure_5.getGuild(guildId);
      }
    }
  }
  let obj = guildId(576);
  const stateFromStores = guildId(504).useStateFromStores(tmp8, S);
  const tmpResult = guildId(504);
  if (stateFromStores != null) {
    class S {
      constructor() {
        return closure_5.getGuild(guildId);
      }
    }
  }
  const total = useGuildPowerupsBoostCountDefault(undefined).total;
  if (null == stateFromStores) {
    class S {
      constructor() {
        return closure_5.getGuild(guildId);
      }
    }
  } else {
    class S {
      constructor() {
        return closure_5.getGuild(guildId);
      }
    }
    const obj2 = { guild: stateFromStores, size: tmp(6161).GuildIconSizes.LARGE, style: tmp4.guildIcon, selected: false };
    const tmp16 = closure_8(GuildIconDefault, obj2);
    cResult[5] = stateFromStores;
    cResult[6] = tmp4.guildIcon;
    cResult[7] = tmp16;
    const tmp5Result2 = GuildIconDefault;
  }
  const tmp5Result = useGuildPowerupsBoostCountDefault;
}) : (function GuildBoostingGuildListItem(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_10();
  const tmp4 = useThemeDefault();
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  useGuildPowerupsBoostCountDefault;
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj2 = {
      style: tmp.guildCard,
      activeOpacity: 0.5,
      accessibilityRole: "button",
      onPress: function handleSelectGuild() {
          transitionToGuild.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
          UserSettingsModalActionCreatorsDefault.close();
        },
      children: null
    };
    const obj3 = { guild: stateFromStores, size: null, style: null, selected: false };
    const tmp2Result = TouchableHitBoxDefault;
    obj3.size = tmp5(6161).GuildIconSizes.LARGE;
    obj3.style = tmp.guildIcon;
    const items1 = [closure_8(GuildIconDefault, obj3), , ];
    const obj4 = { style: tmp.guildCardDescription, children: null };
    const obj5 = { variant: "text-md/bold", children: stateFromStores.name };
    const items2 = [closure_8(tmp5(5086).Text, obj5), ];
    const obj6 = { style: tmp.subscriptionInfo, children: null };
    const obj7 = { source: _modDef9737, style: tmp.premiumGuildImage, resizeMode: "contain", resizeMethod: "resize" };
    const items3 = [closure_8(closure_4, obj7), ];
    const obj8 = { variant: "text-xs/medium", children: null };
    const intl = tmp5(1126).intl;
    const obj9 = { subscriberCount: tmp8 };
    obj8.children = intl.format(tmp5(1126).t.If4iTS, obj9);
    items3[1] = closure_8(tmp5(5086).Text, obj8);
    obj6.children = items3;
    items2[1] = closure_9(closure_3, obj6);
    obj4.children = items2;
    items1[1] = closure_9(closure_3, obj4);
    const obj10 = { guild: stateFromStores, theme: tmp4 };
    items1[2] = closure_8(BoostedGuildTierProgressCircleDefault, obj10);
    obj2.children = items1;
    tmp9 = closure_9(tmp2Result, obj2);
    const tmp2Result2 = GuildIconDefault;
  }
  return tmp9;
});
ReactCompilerGating = fn(558);
let obj3 = { padding: 12, paddingLeft: 16, borderRadius: nativeDefault.radii.xs, marginBottom: 8, minHeight: 96, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingGuildList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBoostingGuildList(arg0) {
  const cResult = c.c(9);
  ({ guildCount, style } = arg0);
  if (undefined === guildCount) {
    guildCount = closure_7;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedGuildStore];
    const fn = function o() {
      return flattenedGuildIds.getFlattenedGuildIds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === guildCount) {
    if (cResult[3] === stateFromStores) {
      if (cResult[6] === style) {
        if (cResult[7] === tmp7) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
      const obj2 = { style, children: cResult[4] };
      const tmp13 = closure_1_8(React3, obj2);
      cResult[6] = style;
      cResult[7] = cResult[4];
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0) {
        obj = { guildId: arg0 };
        return closure_1_8(closure_1_11, obj, arg0);
      }
    }
    cResult[5] = S;
  } else {
    class S {
      constructor(arg0) {
        obj = { guildId: arg0 };
        return closure_1_8(closure_1_11, obj, arg0);
      }
    }
  }
  const substr = stateFromStores.slice(0, guildCount);
  const mapped = substr.map(S);
  cResult[2] = guildCount;
  cResult[3] = stateFromStores;
  cResult[4] = mapped;
  const tmpResult = initialize;
}) : (function GuildBoostingGuildList(guildCount) {
  guildCount = guildCount.guildCount;
  if (guildCount === undefined) {
    guildCount = closure_7;
  }
  const items = [SortedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const obj2 = { style: guildCount.style, children: null };
  const substr = stateFromStores.slice(0, guildCount);
  obj2.children = substr.map((guildId) => closure_1_8(closure_1_11, { guildId }, guildId));
  return closure_1_8(React3, obj2);
});