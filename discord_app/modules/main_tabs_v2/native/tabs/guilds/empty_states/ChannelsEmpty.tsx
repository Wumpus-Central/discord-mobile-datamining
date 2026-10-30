// discord_app/modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import CreateChannelModalActionCreatorsDefault from "../../../../../../actions/native/CreateChannelModalActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../../../../guild_settings/GuildSettingsActionCreators.tsx";
import _modDef18261 from "../../../../../../../_runtime/metro/18261__.js";
import _modDef18262 from "../../../../../../../_runtime/metro/18262__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../../../stores/PermissionStore.tsx";

const require = fn;
const View = fn(17).View;
const Permissions = fn(1072).Permissions;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
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
const merged = Object.assign(fn(5619).TextStyleSheet["heading-md/bold"]);
obj3.fontSize = 18;
obj3.marginTop = 16;
obj3.marginBottom = 8;
obj.headerText = obj3;
obj.text = { textAlign: "center" };
obj.buttonWrapper = { marginTop: 24 };
obj.buttonPill = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
obj.personalizeButtonWrapper = { marginHorizontal: 12, marginBottom: 12 };
let closure_9 = createStyles.createStyles(obj);
let obj4 = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default noop.memo(function ChannelsEmpty(guild) {
  guild = guild.guild;
  const tmp = closure_9();
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
  const obj2 = guild(17006);
  items4[1] = { paddingBottom: guild(17006).useYouBarTotalHeight(16) };
  obj3.style = items4;
  if (canCustomizeGuild) {
    const obj5 = { style: tmp.personalizeButtonWrapper, children: null };
    const obj6 = { icon: null, label: null, onPress: null };
    const obj7 = { source: _modDef18261, disableColor: true };
    obj6.icon = closure_7(tmp2(1188).Icon, obj7);
    const intl = tmp2(1114).intl;
    obj6.label = intl.string(tmp2(1114).t["Yhi9/N"]);
    obj6.onPress = callback;
    obj5.children = closure_7(tmp2(8171).RowButton, obj6);
    canCustomizeGuild = closure_7(View, obj5);
  }
  const items5 = [canCustomizeGuild];
  const obj8 = { style: tmp.content, children: null };
  const obj9 = { source: null };
  const obj4 = { paddingBottom: guild(17006).useYouBarTotalHeight(16) };
  obj9.source = _modDef18262;
  const items6 = [closure_7(FastImageDefault, obj9), , ,];
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: null, children: null };
  const items7 = [,];
  ({ text: arr8[0], headerText: arr8[1] } = tmp);
  obj10.style = items7;
  const intl2 = tmp2(1114).intl;
  obj10.children = intl2.string(guild(1114).t.o4s29v);
  items6[1] = closure_7(guild(5619).Text, obj10);
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
  const intl3 = tmp2(1114).intl;
  obj11.children = intl3.string(guild(1114).t.iypvFu);
  items6[2] = closure_7(guild(5619).Text, obj11);
  if (canCreateChannel) {
    const obj12 = { style: tmp.buttonWrapper, children: null };
    const obj13 = { shrink: true, size: "md", pillStyle: tmp.buttonPill, text: null, onPress: null };
    const intl4 = tmp2(1114).intl;
    obj13.text = intl4.string(tmp2(1114).t["63PyJQ"]);
    obj13.onPress = callback1;
    obj12.children = closure_7(tmp2(5630).BaseTextButton, obj13);
    canCreateChannel = closure_7(View, obj12);
  }
  items6[3] = canCreateChannel;
  obj8.children = items6;
  items5[1] = closure_8(View, obj8);
  obj3.children = items5;
  return closure_8(View, obj3);
});
