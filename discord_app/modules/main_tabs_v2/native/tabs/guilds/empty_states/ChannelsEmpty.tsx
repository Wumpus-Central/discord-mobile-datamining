// discord_app/modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx
import importAllResult from "noop";
import get_ActivityIndicator from "CollapsingText";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../../../_runtime/15397_registerAsset.js";
import { registerAsset } from "../../../../../../../_runtime/15398_registerAsset.js";

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
  const tmp = callback2();
  let obj = guild(647);
  const items = [getUncachedChannelPermissions];
  const items1 = [guild];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ canCustomizeGuild: outer1_6.can(outer1_7.MANAGE_GUILD, guild), canCreateChannel: outer1_6.can(outer1_7.MANAGE_CHANNELS, guild) }), items1);
  ({ canCustomizeGuild, canCreateChannel } = stateFromStoresObject);
  const items2 = [guild.id];
  const items3 = [guild.id];
  const callback = importAllResult.useCallback(() => {
    outer1_1(outer1_2[9]).open(guild.id);
  }, items2);
  const callback1 = importAllResult.useCallback(() => {
    outer1_1(outer1_2[10]).open(null, guild.id, null, null);
  }, items3);
  let obj1 = guild(14350);
  obj = { style: null, children: null };
  const items4 = [tmp.wrapper, ];
  obj = { paddingBottom: obj1.useYouBarTotalHeight(16) };
  items4[1] = obj;
  obj[0] = items4;
  if (canCustomizeGuild) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.personalizeButtonWrapper;
    const obj2 = { icon: null, label: null, onPress: null };
    const obj3 = { source: null, disableColor: true };
    obj3[0] = registerAsset;
    obj2[0] = callback(tmp2(1297).Icon, obj3);
    const intl = tmp2(1236).intl;
    obj2[1] = intl.string(tmp2(1236).t["Yhi9/N"]);
    obj2[2] = callback;
    obj1[1] = callback(tmp2(7972).RowButton, obj2);
    canCustomizeGuild = callback(tmp8, obj1);
  }
  const items5 = [canCustomizeGuild, ];
  const obj4 = { style: tmp.content, children: null };
  const items6 = [callback(closure_5, { source: registerAsset }), , , ];
  const obj6 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items7, children: null };
  items7 = [, ];
  ({ text: arr8[0], headerText: arr8[1] } = tmp);
  const intl2 = tmp2(1236).intl;
  obj6[3] = intl2.string(guild(1236).t.o4s29v);
  items6[1] = callback(guild(4299).Text, obj6);
  const obj7 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
  const intl3 = tmp2(1236).intl;
  obj7[3] = intl3.string(guild(1236).t.iypvFu);
  items6[2] = callback(guild(4299).Text, obj7);
  if (canCreateChannel) {
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.buttonWrapper;
    const obj9 = { shrink: true, size: "md", pillStyle: null, text: null, onPress: null };
    obj9[2] = tmp.buttonPill;
    const intl4 = tmp2(1236).intl;
    obj9[3] = intl4.string(tmp2(1236).t["63PyJQ"]);
    obj9[4] = callback1;
    obj8[1] = tmp11(tmp2(4715).BaseTextButton, obj9);
    canCreateChannel = tmp11(tmp8, obj8);
  }
  items6[3] = canCreateChannel;
  obj4[1] = items6;
  items5[1] = closure_9(closure_4, obj4);
  obj[1] = items5;
  return closure_9(closure_4, obj);
});
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default memoResult;