// discord_app/components_native/premium/GuildBoostingGuildList.tsx
import "set";
import get_ActivityIndicator from "getSystemLocale";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import { NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING as closure_7 } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c9;
let metroImportAll;
const require = arg1;
function GuildBoostingGuildListItem(guildId) {
  guildId = guildId.guildId;
  const tmp = createCacheKey();
  let obj = guildId(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuild(guildId));
  require("../../modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx");
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  let tmp9 = null;
  if (null != stateFromStores) {
    obj = { style: null, activeOpacity: 0.5, accessibilityRole: "button", onPress: null, children: null };
    obj[0] = tmp.guildCard;
    obj[3] = function onPress() {
      guildId(outer1_2[12]).transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
      const obj = guildId(outer1_2[12]);
      outer1_1(outer1_2[13]).close();
    };
    let tmp2Result = tmp2(8979);
    obj = { guild: null, size: null, style: null, selected: false };
    obj[0] = stateFromStores;
    tmp2Result = tmp2(5661);
    obj[1] = tmp5(5661).GuildIconSizes.LARGE;
    obj[2] = tmp.guildIcon;
    const items1 = [callback(tmp2Result, obj), , ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.guildCardDescription;
    const obj2 = { variant: "text-md/bold", children: null };
    obj2[1] = stateFromStores.name;
    const items2 = [callback(tmp5(4281).Text, obj2), ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.subscriptionInfo;
    const obj4 = { source: null, style: null, resizeMode: "contain", resizeMethod: "resize" };
    obj4[0] = tmp2(9895);
    obj4[1] = tmp.premiumGuildImage;
    const items3 = [callback(closure_4, obj4), ];
    const obj5 = { variant: "text-xs/medium", children: null };
    const intl = tmp5(1236).intl;
    const obj6 = { subscriberCount: null };
    obj6[0] = tmp8;
    obj5[1] = intl.format(tmp5(1236).t.If4iTS, obj6);
    items3[1] = callback(tmp5(4281).Text, obj5);
    obj3[1] = items3;
    items2[1] = callback2(closure_3, obj3);
    obj1[1] = items2;
    items1[1] = callback2(closure_3, obj1);
    const obj7 = { guild: null, theme: null };
    obj7[0] = stateFromStores;
    obj7[1] = tmp4;
    items1[2] = callback(tmp2(12683), obj7);
    obj[4] = items1;
    tmp9 = callback2(tmp2Result, obj);
  }
  return tmp9;
}
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { guildCard: null, guildIcon: null, guildCardDescription: null, subscriptionInfo: null, premiumGuildImage: null };
createCacheKey = { padding: 12, paddingLeft: 16, borderRadius: require("Themes").radii.xs, marginBottom: 8, minHeight: 96, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginRight: 16 };
createCacheKey[2] = { flex: 1 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center" };
createCacheKey[4] = { width: 18, height: 12, marginLeft: -5 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createGuildRecordFromRust").fileFinishedImporting("components_native/premium/GuildBoostingGuildList.tsx");

export default function GuildBoostingGuildList(guildCount) {
  guildCount = guildCount.guildCount;
  if (guildCount === undefined) {
    guildCount = closure_7;
  }
  let obj = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [insertUnsortedGuilds];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  obj = { style: guildCount.style, children: null };
  const substr = stateFromStores.slice(0, guildCount);
  obj[1] = substr.map((guildId) => callback(closure_11, { guildId }, guildId));
  return callback(closure_3, obj);
};