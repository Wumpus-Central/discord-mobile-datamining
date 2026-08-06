// discord_app/modules/directory_channels/native/components/GuildDirectoryEmpty.tsx
import "set";
import get_ActivityIndicator from "showInstantInviteActionSheet";
import comparator from "comparator";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let Fonts;
let c3;
let c4;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ Image: c3, ScrollView: c4 } = get_ActivityIndicator);
({ InstantInviteSources: closure_6, Fonts } = ME);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, header: null, title: null, description: null, ctaContainer: null };
createCacheKey = { flex: 1, justifyContent: "flex-end", padding: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 16, alignSelf: "center" };
createCacheKey[2] = { fontFamily: Fonts.PRIMARY_BOLD, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8, alignSelf: "center" };
createCacheKey[3] = { textAlign: "center", alignSelf: "center", marginBottom: 24 };
createCacheKey[4] = { marginBottom: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { fontFamily: Fonts.PRIMARY_BOLD, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8, alignSelf: "center" };
const result = require("comparator").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEmpty.tsx");

export default function GuildDirectoryEmpty(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  let dependencyMap;
  const tmp = createCacheKey();
  let obj = guild(589);
  const items = [comparator];
  dependencyMap = obj.useStateFromStores(items, () => outer1_5.getChannels(guild.id));
  let obj1 = guild(11597);
  obj = { contentContainerStyle: items1, children: null };
  items1 = [tmp.container, ];
  obj = { paddingBottom: channel(1609)().bottom + 16 };
  items1[1] = obj;
  obj1 = { source: null, style: null };
  const canCreateOrAddGuildInDirectory = obj1.useCanCreateOrAddGuildInDirectory(channel);
  obj1[0] = channel(12028);
  obj1[1] = tmp.header;
  const items2 = [callback(closure_3, obj1), , , , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = guild(1236).intl;
  obj2[2] = intl.format(guild(1236).t.vyvrpC, { guildName: guild.name });
  items2[1] = callback(guild(1297).LegacyText, obj2);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = guild(1236).intl;
  obj4[3] = intl2.string(guild(1236).t.WypE0i);
  items2[2] = callback(guild(4281).Text, obj4);
  let tmp8Result = null;
  if (canCreateOrAddGuildInDirectory) {
    const obj5 = { style: null, onPress: null, iconSource: null, title: null };
    obj5[0] = tmp.ctaContainer;
    obj5[1] = function onPress() {
      let obj = channel(11598);
      obj = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: channel.id };
      return obj.open(obj);
    };
    obj5[2] = tmp2(12029);
    const intl3 = tmp4(1236).intl;
    obj5[3] = intl3.string(tmp4(1236).t.hyK15i);
    tmp8Result = tmp8(tmp4(7890).FormCTA, obj5);
  }
  items2[3] = tmp8Result;
  const obj6 = {
    style: tmp.ctaContainer,
    onPress() {
      return guild(8988).handleOpenInviteActionsheet(guild, channel.id, dependencyMap, outer1_6.HUB_EMPTY_STATE);
    },
    iconSource: null,
    title: null
  };
  obj6[2] = channel(12030);
  const intl4 = tmp4(1236).intl;
  obj6[3] = intl4.string(guild(1236).t.L4bwJ9);
  items2[4] = callback(guild(7890).FormCTA, obj6);
  obj[1] = items2;
  return closure_8(closure_4, obj);
};