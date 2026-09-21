// discord_app/modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import CreateChannelModalActionCreatorsDefault from "../../../../../../actions/native/CreateChannelModalActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../../../../guild_settings/GuildSettingsActionCreators.tsx";
import _modDef16594 from "../../../../../../../_runtime/metro/16594__.js";
import _modDef16595 from "../../../../../../../_runtime/metro/16595__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../../../stores/PermissionStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const Permissions = fn(1074).Permissions;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
let obj = {
  wrapper: { flex: 1, paddingTop: 12 },
  content: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 48 },
  headerText: null,
  text: null,
  buttonWrapper: null,
  buttonPill: null,
  personalizeButtonWrapper: null,
};
let obj3 = {};
const merged = Object.assign(fn(4752).TextStyleSheet["heading-md/bold"]);
obj3.fontSize = 18;
obj3.marginTop = 16;
obj3.marginBottom = 8;
obj.headerText = obj3;
obj.text = { textAlign: "center" };
obj.buttonWrapper = { marginTop: 24 };
obj.buttonPill = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
obj.personalizeButtonWrapper = { marginHorizontal: 12, marginBottom: 12 };
let closure_10 = createStyles.createStyles(obj);
let obj4 = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default noop.memo(function ChannelsEmpty(guild) {
  guild = guild.guild;
  const tmp = closure_10();
  const items = [PermissionStore];
  const items1 = [guild];
  const stateFromStoresObject = guild(563).useStateFromStoresObject(
    items,
    () => ({
      canCustomizeGuild: PermissionStore.can(Permissions.MANAGE_GUILD, guild),
      canCreateChannel: PermissionStore.can(Permissions.MANAGE_CHANNELS, guild),
    }),
    items1,
  );
  ({ canCustomizeGuild, canCreateChannel } = stateFromStoresObject);
  const items2 = [guild.id];
  const items3 = [guild.id];
  const callback = noop.useCallback(() => {
    GuildSettingsActionCreatorsDefault.open(guild.id);
  }, items2);
  const callback1 = noop.useCallback(() => {
    CreateChannelModalActionCreatorsDefault.open(null, guild.id, null, null);
  }, items3);
  const obj = guild(563);
  const obj3 = { style: null, children: null };
  const items4 = [tmp.wrapper];
  const obj2 = guild(15367);
  items4[1] = { paddingBottom: guild(15367).useYouBarTotalHeight(16) };
  obj3.style = items4;
  if (canCustomizeGuild) {
    const obj5 = { style: tmp.personalizeButtonWrapper, children: null };
    const obj6 = { icon: null, label: null, onPress: null };
    const obj7 = { source: _modDef16594, disableColor: true };
    obj6.icon = closure_8(tmp2(1177).Icon, obj7);
    const intl = tmp2(1115).intl;
    obj6.label = intl.string(tmp2(1115).t["Yhi9/N"]);
    obj6.onPress = callback;
    obj5.children = closure_8(tmp2(8873).RowButton, obj6);
    canCustomizeGuild = closure_8(closure_4, obj5);
  }
  const items5 = [canCustomizeGuild];
  const obj8 = { style: tmp.content, children: null };
  const obj4 = { paddingBottom: guild(15367).useYouBarTotalHeight(16) };
  const items6 = [closure_8(closure_5, { source: _modDef16595 }), , ,];
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: null, children: null };
  const items7 = [,];
  ({ text: arr8[0], headerText: arr8[1] } = tmp);
  obj10.style = items7;
  const intl2 = tmp2(1115).intl;
  obj10.children = intl2.string(guild(1115).t.o4s29v);
  items6[1] = closure_8(guild(4752).Text, obj10);
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
  const intl3 = tmp2(1115).intl;
  obj11.children = intl3.string(guild(1115).t.iypvFu);
  items6[2] = closure_8(guild(4752).Text, obj11);
  if (canCreateChannel) {
    const obj12 = { style: tmp.buttonWrapper, children: null };
    const obj13 = { shrink: true, size: "md", pillStyle: tmp.buttonPill, text: null, onPress: null };
    const intl4 = tmp2(1115).intl;
    obj13.text = intl4.string(tmp2(1115).t["63PyJQ"]);
    obj13.onPress = callback1;
    obj12.children = closure_8(tmp2(5187).BaseTextButton, obj13);
    canCreateChannel = closure_8(closure_4, obj12);
  }
  items6[3] = canCreateChannel;
  obj8.children = items6;
  items5[1] = closure_9(closure_4, obj8);
  obj3.children = items5;
  return closure_9(closure_4, obj3);
});
