// discord_app/modules/directory_channels/native/components/GuildDirectoryEmpty.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const Constants = fn(1074);
({ InstantInviteSources: metroRequire, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, title: null, description: null, ctaContainer: null };
createStyles = {
  flex: 1,
  justifyContent: "flex-end",
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.container = createStyles;
createStyles.header = { marginBottom: 16, alignSelf: "center" };
createStyles.title = {
  fontFamily: Fonts.PRIMARY_BOLD,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  fontSize: 24,
  textAlign: "center",
  marginBottom: 8,
  alignSelf: "center",
};
createStyles.description = { textAlign: "center", alignSelf: "center", marginBottom: 24 };
createStyles.ctaContainer = { marginBottom: 8 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEmpty.tsx");

export default function GuildDirectoryEmpty(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const tmp = closure_9();
  let obj = guild(504);
  const items = [GuildChannelStore];
  dependencyMap = obj.useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  guild(12307);
  obj = { contentContainerStyle: null, children: null };
  const items1 = [tmp.container];
  obj = { paddingBottom: channel(1611)().bottom + 16 };
  items1[1] = obj;
  obj.contentContainerStyle = items1;
  const obj1 = { source: null, style: null };
  const canCreateOrAddGuildInDirectory = obj1.useCanCreateOrAddGuildInDirectory(channel);
  obj1.source = channel(12755);
  obj1.style = tmp.header;
  const items2 = [closure_7(closure_3, obj1), , , ,];
  const obj2 = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = guild(1114).intl;
  obj2.children = intl.format(guild(1114).t.vyvrpC, { guildName: guild.name });
  items2[1] = closure_7(guild(1178).LegacyText, obj2);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = guild(1114).intl;
  obj4.children = intl2.string(guild(1114).t.WypE0i);
  items2[2] = closure_7(guild(4556).Text, obj4);
  let tmp8Result = null;
  if (canCreateOrAddGuildInDirectory) {
    const obj5 = {
      style: tmp.ctaContainer,
      onPress() {
        const obj = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: channel.id };
        return obj.open(obj);
      },
      iconSource: tmp2(12756),
      title: null,
    };
    const intl3 = tmp4(1114).intl;
    obj5.title = intl3.string(tmp4(1114).t.hyK15i);
    tmp8Result = closure_7(tmp4(8593).FormCTA, obj5);
  }
  items2[3] = tmp8Result;
  const obj6 = {
    style: tmp.ctaContainer,
    onPress() {
      return instant_invite_InstantInviteUtils.handleOpenInviteActionsheet(
        guild,
        channel.id,
        closure_2,
        constants.HUB_EMPTY_STATE,
      );
    },
    iconSource: channel(12757),
    title: null,
  };
  const intl4 = tmp4(1114).intl;
  obj6.title = intl4.string(guild(1114).t.L4bwJ9);
  items2[4] = closure_7(guild(8593).FormCTA, obj6);
  obj.children = items2;
  return closure_8(closure_4, obj);
}
