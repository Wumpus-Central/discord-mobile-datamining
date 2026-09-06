// === Module 16254: ChannelsEmpty ===

// Module 16254 (ChannelsEmpty)
import nativeDefault from "native" /* 576 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9737 */;
import _modDef16255 from "module_16255" /* 16255 */;
import _modDef16256 from "module_16256" /* 16256 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4199 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const Permissions = fn(1074).Permissions;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let obj = { wrapper: { flex: 1, paddingTop: 12 }, content: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 48 }, headerText: null, text: null, buttonWrapper: null, buttonPill: null, personalizeButtonWrapper: null };
obj = {};
const merged = Object.assign(fn(4556).TextStyleSheet["heading-md/bold"]);
obj.fontSize = 18;
obj.marginTop = 16;
obj.marginBottom = 8;
obj.headerText = obj;
obj.text = { textAlign: "center" };
obj.buttonWrapper = { marginTop: 24 };
const createStyles = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
obj.buttonPill = createStyles;
obj.personalizeButtonWrapper = { marginHorizontal: 12, marginBottom: 12 };
let closure_10 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default noop.memo(function ChannelsEmpty(guild) {
  guild = guild.guild;
  const tmp = closure_10();
  let obj = guild(563);
  const items = [PermissionStore];
  const items1 = [guild];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ canCustomizeGuild: PermissionStore.can(Permissions.MANAGE_GUILD, guild), canCreateChannel: PermissionStore.can(Permissions.MANAGE_CHANNELS, guild) }), items1);
  ({ canCustomizeGuild, canCreateChannel } = stateFromStoresObject);
  const items2 = [guild.id];
  const items3 = [guild.id];
  const callback = noop.useCallback(() => {
    GuildSettingsActionCreatorsDefault.open(guild.id);
  }, items2);
  const callback1 = noop.useCallback(() => {
    CreateChannelModalActionCreatorsDefault.open(null, guild.id, null, null);
  }, items3);
  let obj1 = guild(15100);
  obj = { style: null, children: null };
  const items4 = [tmp.wrapper, ];
  obj = { paddingBottom: obj1.useYouBarTotalHeight(16) };
  items4[1] = obj;
  obj.style = items4;
  if (canCustomizeGuild) {
    obj1 = { style: tmp.personalizeButtonWrapper, children: null };
    const obj2 = { icon: null, label: null, onPress: null };
    const obj3 = { source: _modDef16255, disableColor: true };
    obj2.icon = closure_8(tmp2(1178).Icon, obj3);
    const intl = tmp2(1114).intl;
    obj2.label = intl.string(tmp2(1114).t["Yhi9/N"]);
    obj2.onPress = callback;
    obj1.children = closure_8(tmp2(8595).RowButton, obj2);
    canCustomizeGuild = closure_8(tmp8, obj1);
  }
  const items5 = [canCustomizeGuild, ];
  const obj4 = { style: tmp.content, children: null };
  const items6 = [closure_8(closure_5, { source: _modDef16256 }), , , ];
  const obj6 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: null, children: null };
  const items7 = [, ];
  ({ text: arr8[0], headerText: arr8[1] } = tmp);
  obj6.style = items7;
  const intl2 = tmp2(1114).intl;
  obj6.children = intl2.string(guild(1114).t.o4s29v);
  items6[1] = closure_8(guild(4556).Text, obj6);
  const obj7 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
  const intl3 = tmp2(1114).intl;
  obj7.children = intl3.string(guild(1114).t.iypvFu);
  items6[2] = closure_8(guild(4556).Text, obj7);
  if (canCreateChannel) {
    const obj8 = { style: tmp.buttonWrapper, children: null };
    const obj9 = { shrink: true, size: "md", pillStyle: tmp.buttonPill, text: null, onPress: null };
    const intl4 = tmp2(1114).intl;
    obj9.text = intl4.string(tmp2(1114).t["63PyJQ"]);
    obj9.onPress = callback1;
    obj8.children = tmp11(tmp2(4976).BaseTextButton, obj9);
    canCreateChannel = tmp11(tmp8, obj8);
  }
  items6[3] = canCreateChannel;
  obj4.children = items6;
  items5[1] = closure_9(closure_4, obj4);
  obj.children = items5;
  return closure_9(closure_4, obj);
});