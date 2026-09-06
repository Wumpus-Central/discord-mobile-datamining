// === Module 12754: GuildDirectoryEmpty ===

// Module 12754 (GuildDirectoryEmpty)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "comparator" /* 2012 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
noopAll;
({ Image: c3, ScrollView: c4 } = get_ActivityIndicator);
({ InstantInviteSources: closure_6, Fonts } = ME);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, header: null, title: null, description: null, ctaContainer: null };
createCacheKey = { flex: 1, justifyContent: "flex-end", padding: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 16, alignSelf: "center" };
createCacheKey[2] = { fontFamily: Fonts.PRIMARY_BOLD, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8, alignSelf: "center" };
createCacheKey[3] = { textAlign: "center", alignSelf: "center", marginBottom: 24 };
createCacheKey[4] = { marginBottom: 8 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { fontFamily: Fonts.PRIMARY_BOLD, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8, alignSelf: "center" };
const result = require("set").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEmpty.tsx");

export default function GuildDirectoryEmpty(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  dependencyMap = undefined;
  const tmp = callback2();
  let obj = guild(504);
  const items = [closure_5];
  dependencyMap = obj.useStateFromStores(items, () => closure_1_5.getChannels(guild.id));
  obj1 = guild(12307);
  obj = { contentContainerStyle: items1, children: null };
  items1 = [tmp.container, ];
  obj = { paddingBottom: channel(1611)().bottom + 16 };
  items1[1] = obj;
  obj1 = { source: null, style: null };
  const canCreateOrAddGuildInDirectory = obj1.useCanCreateOrAddGuildInDirectory(channel);
  obj1[0] = channel(12755);
  obj1[1] = tmp.header;
  const items2 = [callback(closure_3, obj1), , , , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = guild(1114).intl;
  obj2[2] = intl.format(guild(1114).t.vyvrpC, { guildName: guild.name });
  items2[1] = callback(guild(1178).LegacyText, obj2);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = guild(1114).intl;
  obj4[3] = intl2.string(guild(1114).t.WypE0i);
  items2[2] = callback(guild(4556).Text, obj4);
  let tmp8Result = null;
  if (canCreateOrAddGuildInDirectory) {
    const obj5 = { style: null, onPress: null, iconSource: null, title: null };
    obj5[0] = tmp.ctaContainer;
    obj5[1] = function onPress() {
      let obj = channel(12308);
      obj = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: channel.id };
      return obj.open(obj);
    };
    obj5[2] = tmp2(12756);
    const intl3 = tmp4(1114).intl;
    obj5[3] = intl3.string(tmp4(1114).t.hyK15i);
    tmp8Result = tmp8(tmp4(8593).FormCTA, obj5);
  }
  items2[3] = tmp8Result;
  const obj6 = {
    style: tmp.ctaContainer,
    onPress() {
      return guild(9820).handleOpenInviteActionsheet(guild, channel.id, dependencyMap, closure_1_6.HUB_EMPTY_STATE);
    },
    iconSource: channel(12757),
    title: null
  };
  const intl4 = tmp4(1114).intl;
  obj6[3] = intl4.string(guild(1114).t.L4bwJ9);
  items2[4] = callback(guild(8593).FormCTA, obj6);
  obj[1] = items2;
  return closure_8(closure_4, obj);
};