// === Module 15517: ? ===

// Module 15517
import ThemesDefault from "Themes" /* 712 */;
import _modDef8849 from "module_8849" /* 8849 */;
import _modDef8874 from "module_8874" /* 8874 */;
import registerAssetDefault from "registerAsset" /* 15518 */;
import registerAssetDefault2 from "registerAsset" /* 15519 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
let c3 = importAllResult;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let obj = {};
const merged = Object.assign(require("Text").TextStyleSheet["heading-md/bold"]);
obj.fontSize = 18;
obj.marginTop = 16;
obj.marginBottom = 8;
obj[2] = obj;
obj[3] = { textAlign: "center" };
obj[4] = { marginTop: 24 };
const createCacheKey = { borderRadius: ThemesDefault.radii.xl, height: 44, paddingHorizontal: 20 };
obj[5] = createCacheKey;
obj[6] = { marginHorizontal: 12, marginBottom: 12 };
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ChannelsEmpty(guild) {
  guild = guild.guild;
  const tmp = callback2();
  let obj = guild(647);
  const items = [closure_6];
  const items1 = [guild];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ canCustomizeGuild: closure_1_6.can(Permissions.MANAGE_GUILD, guild), canCreateChannel: closure_1_6.can(Permissions.MANAGE_CHANNELS, guild) }), items1);
  ({ canCustomizeGuild, canCreateChannel } = stateFromStoresObject);
  const items2 = [guild.id];
  const items3 = [guild.id];
  const callback = importAllResult.useCallback(() => {
    _modDef8874.open(guild.id);
  }, items2);
  const callback1 = importAllResult.useCallback(() => {
    _modDef8849.open(null, guild.id, null, null);
  }, items3);
  obj1 = guild(14452);
  const items4 = [tmp.wrapper, ];
  obj = { paddingBottom: obj1.useYouBarTotalHeight(16) };
  items4[1] = obj;
  obj[0] = items4;
  if (canCustomizeGuild) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.personalizeButtonWrapper;
    const obj2 = { icon: null, label: null, onPress: null };
    const obj3 = { source: null, disableColor: true };
    obj3[0] = registerAssetDefault;
    obj2[0] = callback(tmp2(1297).Icon, obj3);
    const intl = tmp2(1236).intl;
    obj2[1] = intl.string(tmp2(1236).t["Yhi9/N"]);
    obj2[2] = callback;
    obj1[1] = callback(tmp2(8086).RowButton, obj2);
    canCustomizeGuild = callback(closure_4, obj1);
  }
  const items5 = [canCustomizeGuild, ];
  const obj4 = { style: tmp.content, children: null };
  const items6 = [callback(closure_5, { source: registerAssetDefault2 }), , , ];
  const obj6 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items7, children: null };
  items7 = [, ];
  ({ text: arr8[0], headerText: arr8[1] } = tmp);
  const intl2 = tmp2(1236).intl;
  obj6[3] = intl2.string(guild(1236).t.o4s29v);
  items6[1] = callback(guild(4734).Text, obj6);
  const obj7 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
  const intl3 = tmp2(1236).intl;
  obj7[3] = intl3.string(guild(1236).t.iypvFu);
  items6[2] = callback(guild(4734).Text, obj7);
  if (canCreateChannel) {
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.buttonWrapper;
    const obj9 = { shrink: true, size: "md", pillStyle: null, text: null, onPress: null };
    obj9[2] = tmp.buttonPill;
    const intl4 = tmp2(1236).intl;
    obj9[3] = intl4.string(tmp2(1236).t["63PyJQ"]);
    obj9[4] = callback1;
    obj8[1] = tmp11(tmp2(4746).BaseTextButton, obj9);
    canCreateChannel = tmp11(closure_4, obj8);
  }
  items6[3] = canCreateChannel;
  obj4[1] = items6;
  items5[1] = callback(closure_4, obj4);
  obj[1] = items5;
  return callback(closure_4, obj);
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default memoResult;