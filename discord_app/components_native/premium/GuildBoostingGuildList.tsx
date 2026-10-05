// === Module 13343: GuildBoostingGuildList ===

// Module 13343 (GuildBoostingGuildList)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useThemeDefault from "useTheme" /* 4791 */;
import GuildIconDefault from "GuildIcon" /* 5971 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6487 */;
import transitionToGuild from "transitionToGuild" /* 6845 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 7671 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9442 */;
import AssetRegistryDefault from "AssetRegistry" /* 10138 */;
import BoostedGuildTierProgressCircleDefault from "BoostedGuildTierProgressCircle" /* 13312 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2074 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let c9;
let closure_4;
let metroImportAll;
let obj2;
({ View: c3, Image: closure_4 } = react_native);
let closure_7 = Constants.NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { guildCard: obj2, guildIcon: { marginRight: 16 }, guildCardDescription: { flex: 1 }, subscriptionInfo: { flexDirection: "row", alignItems: "center" }, premiumGuildImage: { width: 18, height: 12, marginLeft: -5 } };
obj2 = { padding: 12, paddingLeft: 16, borderRadius: nativeDefault.radii.xs, marginBottom: 8, minHeight: 96, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp8;
  let obj = guildId(576);
  const cResult = obj.c(33);
  guildId = guildId.guildId;
  const tmp4 = closure_10();
  useThemeDefault();
  if (cResult[0] !== guildId) {
    const fn = function s() {
      const obj = transitionToGuild;
      obj.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
      const obj2 = UserSettingsModalActionCreatorsDefault;
      obj2.close();
    };
    cResult[0] = guildId;
    cResult[1] = fn;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[2] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[3] = guildId;
    cResult[4] = S;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, S);
  const tmp5Result = useGuildPowerupsBoostCountDefault;
  if (stateFromStores != null) {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const total = tmp5Result(undefined).total;
  if (null == stateFromStores) {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    let obj2 = { guild: stateFromStores, size: guildId(5971).GuildIconSizes.LARGE, style: tmp4.guildIcon, selected: false };
    const tmp5Result2 = GuildIconDefault;
    cResult[5] = stateFromStores;
    cResult[6] = tmp4.guildIcon;
    cResult[7] = closure_8(tmp5Result2, obj2);
    const tmp16 = closure_8(tmp5Result2, obj2);
  }
}) : ((guildId) => {
  let intl;
  let items1;
  let items2;
  let items3;
  let obj9;
  guildId = guildId.guildId;
  const tmp = closure_10();
  const tmp4 = useThemeDefault();
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  useGuildPowerupsBoostCountDefault;
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  let tmp9 = null;
  if (null != stateFromStores) {
    let obj2 = {
      style: tmp.guildCard,
      activeOpacity: 0.5,
      accessibilityRole: "button",
      onPress() {
          const obj = transitionToGuild;
          obj.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
          const obj2 = UserSettingsModalActionCreatorsDefault;
          obj2.close();
        },
      children: items1
    };
    const obj3 = { guild: stateFromStores, size: guildId(5971).GuildIconSizes.LARGE, style: tmp.guildIcon, selected: false };
    const tmp2Result = TouchableHitBoxDefault;
    const tmp2Result2 = GuildIconDefault;
    items1 = [closure_8(tmp2Result2, obj3), , ];
    const obj4 = { style: tmp.guildCardDescription, children: items2 };
    const obj5 = { variant: "text-md/bold", children: stateFromStores.name };
    items2 = [closure_8(guildId(4886).Text, obj5), ];
    const obj6 = { style: tmp.subscriptionInfo, children: items3 };
    const obj7 = { source: AssetRegistryDefault, style: tmp.premiumGuildImage, resizeMode: "contain", resizeMethod: "resize" };
    items3 = [closure_8(closure_4, obj7), ];
    const obj8 = { variant: "text-xs/medium", children: intl.format(guildId(1126).t.If4iTS, obj9) };
    const Text = tmp5(4886).Text;
    intl = tmp5(1126).intl;
    obj9 = { subscriberCount: tmp8 };
    items3[1] = closure_8(Text, obj8);
    items2[1] = closure_9(closure_3, obj6);
    items1[1] = closure_9(closure_3, obj4);
    const obj10 = { guild: stateFromStores, theme: tmp4 };
    items1[2] = closure_8(BoostedGuildTierProgressCircleDefault, obj10);
    tmp9 = closure_9(tmp2Result, obj2);
  }
  return tmp9;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let flattenedGuildIds;
  let guildCount;
  let style;
  let tmp4;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(9);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === guildCount) {
    let tmp7;
    if (cResult[3] === stateFromStores) {
      tmp7 = cResult[4];
    }
    if (cResult[6] === style) {
      let tmp10;
      if (cResult[7] === tmp7) {
        tmp10 = cResult[8];
      }
      return tmp10;
    }
    const obj2 = { style, children: tmp7 };
    const tmp13 = metroImportAll(_false, obj2);
    cResult[6] = style;
    cResult[7] = tmp7;
    cResult[8] = tmp13;
    tmp10 = tmp13;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(guildId) {
        const obj = { guildId };
        return closure_1_8(closure_1_11, obj, guildId);
      }
    }
    cResult[5] = S;
  } else {
    class S {
      constructor(guildId) {
        const obj = { guildId };
        return closure_1_8(closure_1_11, obj, guildId);
      }
    }
  }
  const substr = stateFromStores.slice(0, guildCount);
  const mapped = substr.map(S);
  cResult[2] = guildCount;
  cResult[3] = stateFromStores;
  cResult[4] = mapped;
  tmp7 = mapped;
}) : ((guildCount) => {
  let flattenedGuildIds;
  let substr;
  guildCount = guildCount.guildCount;
  if (guildCount === undefined) {
    guildCount = closure_7;
  }
  const style = guildCount.style;
  let obj = get_initialized;
  const items = [SortedGuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const obj2 = {
    style,
    children: substr.map((guildId) => {
      const obj = { guildId };
      return closure_1_8(closure_1_11, obj, guildId);
    })
  };
  substr = stateFromStores.slice(0, guildCount);
  return metroImportAll(_false, obj2);
});
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingGuildList.tsx");

export default tmp5;