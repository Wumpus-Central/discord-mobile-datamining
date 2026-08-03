// === Module 15225: ? ===

// Module 15225
import importAllResult from "registerAsset";
import get_ActivityIndicator from "RowButtonWrapper";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let c9;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let obj = { wrapper: { flex: 1, paddingTop: 12 }, content: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 48 }, headerText: null, text: null, buttonWrapper: null, buttonPill: null, personalizeButtonWrapper: null };
obj = {};
const merged = Object.assign(require("Text").TextStyleSheet["heading-md/bold"]);
obj.fontSize = 18;
obj.marginTop = 16;
obj.marginBottom = 8;
obj[2] = obj;
obj[3] = { textAlign: "center" };
obj[4] = { marginTop: 24 };
createCacheKey = { borderRadius: require("Themes").radii.xl, height: 44, paddingHorizontal: 20 };
obj[5] = createCacheKey;
obj[6] = { marginHorizontal: 12, marginBottom: 12 };
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ChannelsEmpty(guild) {
  let canCreateChannel;
  let canCustomizeGuild;
  guild = guild.guild;
  const tmp = callback();
  let obj = guild(647);
  const items = [getUncachedChannelPermissions];
  const items1 = [guild];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ canCustomizeGuild: outer1_6.can(outer1_7.MANAGE_GUILD, guild), canCreateChannel: outer1_6.can(outer1_7.MANAGE_CHANNELS, guild) }), items1);
  ({ canCustomizeGuild, canCreateChannel } = stateFromStoresObject);
  const items2 = [guild.id];
  const items3 = [guild.id];
  callback = importAllResult.useCallback(() => {
    outer1_1(outer1_2[9]).open(guild.id);
  }, items2);
  const callback1 = importAllResult.useCallback(() => {
    outer1_1(outer1_2[10]).open(null, guild.id, null, null);
  }, items3);
  let obj1 = guild(14212);
  const youBarTotalHeight = obj1.useYouBarTotalHeight(16);
  let obj2 = guild(1865);
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(guild.id);
  if (isFavoritesGuildIdResult) {
    let tmp9Result = tmp9(tmp2(5926).FavoritesSpotIllustration, { width: 192, height: 108 });
    let tmp13 = tmp9;
  } else {
    obj = { source: null };
    obj[0] = importDefault(15226);
    tmp9Result = tmp9(closure_5, obj);
    tmp13 = tmp9;
  }
  const intl = tmp2(1236).intl;
  const string = intl.string;
  if (isFavoritesGuildIdResult) {
    let stringResult = string(importDefault(3001)["wh+Rz1"]);
  } else {
    stringResult = string(tmp2(1236).t.o4s29v);
  }
  const intl2 = tmp2(1236).intl;
  const string2 = intl2.string;
  if (isFavoritesGuildIdResult) {
    let string2Result = string2(importDefault(3001)["+SuGKb"]);
  } else {
    string2Result = string2(tmp2(1236).t.iypvFu);
  }
  obj = { style: items4, children: null };
  items4 = [tmp.wrapper, { paddingBottom: youBarTotalHeight }];
  if (canCustomizeGuild) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.personalizeButtonWrapper;
    obj2 = { icon: null, label: null, onPress: null };
    const obj3 = { source: null, disableColor: true };
    obj3[0] = importDefault(15227);
    obj2[0] = tmp13(tmp2(1297).Icon, obj3);
    const intl3 = tmp2(1236).intl;
    obj2[1] = intl3.string(tmp2(1236).t["Yhi9/N"]);
    obj2[2] = callback;
    obj1[1] = tmp13(tmp2(7768).RowButton, obj2);
    canCustomizeGuild = tmp13(tmp19, obj1);
  }
  const items5 = [canCustomizeGuild, ];
  const obj4 = { style: tmp.content, children: null };
  const items6 = [tmp9Result, , , ];
  const items7 = [, ];
  ({ text: arr8[0], headerText: arr8[1] } = tmp);
  items6[1] = tmp13(guild(4251).Text, { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items7, children: stringResult });
  items6[2] = tmp13(guild(4251).Text, { color: "text-default", variant: "text-md/medium", style: tmp.text, children: string2Result });
  if (canCreateChannel) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.buttonWrapper;
    const obj7 = { shrink: true, size: "md", pillStyle: null, text: null, onPress: null };
    obj7[2] = tmp.buttonPill;
    const intl4 = tmp2(1236).intl;
    obj7[3] = intl4.string(tmp2(1236).t["63PyJQ"]);
    obj7[4] = callback1;
    obj6[1] = tmp13(tmp2(4667).BaseTextButton, obj7);
    canCreateChannel = tmp13(tmp19, obj6);
  }
  items6[3] = canCreateChannel;
  obj4[1] = items6;
  items5[1] = closure_9(closure_4, obj4);
  obj[1] = items5;
  return closure_9(closure_4, obj);
});
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default memoResult;