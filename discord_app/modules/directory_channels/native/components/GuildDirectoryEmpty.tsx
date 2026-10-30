// discord_app/modules/directory_channels/native/components/GuildDirectoryEmpty.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";

require = fn;
const ScrollView = fn(17).ScrollView;
const Constants = fn(1072);
({ InstantInviteSources: hasOwnProperty, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  header: { marginBottom: 16, alignSelf: "center" },
  title: null,
  description: null,
  ctaContainer: null,
};
let obj3 = {
  flex: 1,
  justifyContent: "flex-end",
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.title = {
  fontFamily: Fonts.PRIMARY_BOLD,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  fontSize: 24,
  textAlign: "center",
  marginBottom: 8,
  alignSelf: "center",
};
obj2.description = { textAlign: "center", alignSelf: "center", marginBottom: 24 };
obj2.ctaContainer = { marginBottom: 8 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEmpty.tsx");

export default function GuildDirectoryEmpty(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const tmp = closure_8();
  const items = [GuildChannelStore];
  dependencyMap = guild(504).useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  const obj = guild(504);
  const obj3 = { contentContainerStyle: null, children: null };
  const items1 = [tmp.container];
  const obj2 = guild(13805);
  items1[1] = { paddingBottom: channel(1626)().bottom + 16 };
  obj3.contentContainerStyle = items1;
  const canCreateOrAddGuildInDirectory = obj2.useCanCreateOrAddGuildInDirectory(channel);
  const obj5 = { source: null, style: null };
  const obj4 = { paddingBottom: channel(1626)().bottom + 16 };
  obj5.source = channel(14315);
  obj5.style = tmp.header;
  const items2 = [closure_6(channel(5712), obj5), , , ,];
  const obj6 = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = guild(1114).intl;
  obj6.children = intl.format(guild(1114).t.vyvrpC, { guildName: guild.name });
  items2[1] = closure_6(guild(1188).LegacyText, obj6);
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = guild(1114).intl;
  obj8.children = intl2.string(guild(1114).t.WypE0i);
  items2[2] = closure_6(guild(5619).Text, obj8);
  let tmp8Result = null;
  if (canCreateOrAddGuildInDirectory) {
    const obj9 = {
      style: tmp.ctaContainer,
      onPress() {
        return GuildDirectoryAddModalActionCreatorsDefault.open({
          directoryGuildName: guild.name,
          directoryGuildId: guild.id,
          directoryChannelId: channel.id,
        });
      },
      iconSource: tmp2(14316),
      title: null,
    };
    const intl3 = tmp4(1114).intl;
    obj9.title = intl3.string(tmp4(1114).t.hyK15i);
    tmp8Result = closure_6(tmp4(8169).FormCTA, obj9);
  }
  items2[3] = tmp8Result;
  const obj10 = {
    style: tmp.ctaContainer,
    onPress() {
      return instant_invite_InstantInviteUtils.handleOpenInviteActionsheet(
        guild,
        channel.id,
        closure_2,
        constants.HUB_EMPTY_STATE,
      );
    },
    iconSource: channel(14317),
    title: null,
  };
  const intl4 = tmp4(1114).intl;
  obj10.title = intl4.string(guild(1114).t.L4bwJ9);
  items2[4] = closure_6(guild(8169).FormCTA, obj10);
  obj3.children = items2;
  return closure_7(ScrollView, obj3);
}
