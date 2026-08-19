// discord_app/modules/directory_channels/native/components/GuildDirectoryEmpty.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import comparator from "../../../../stores/GuildChannelStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ Image: c3, ScrollView: c4 } = get_ActivityIndicator);
({ InstantInviteSources: closure_6, Fonts } = ME);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { flex: 1, justifyContent: "flex-end", padding: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 16, alignSelf: "center" };
createCacheKey[2] = { fontFamily: Fonts.PRIMARY_BOLD, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8, alignSelf: "center" };
createCacheKey[3] = { textAlign: "center", alignSelf: "center", marginBottom: 24 };
createCacheKey[4] = { marginBottom: 8 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEmpty.tsx");

export default function GuildDirectoryEmpty(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const tmp = callback2();
  let obj = guild(589);
  const items = [closure_5];
  dependencyMap = obj.useStateFromStores(items, () => closure_1_5.getChannels(guild.id));
  guild(11474);
  const items1 = [tmp.container, ];
  obj = { paddingBottom: channel(1629)().bottom + 16 };
  items1[1] = obj;
  obj1 = { source: null, style: null };
  const canCreateOrAddGuildInDirectory = obj1.useCanCreateOrAddGuildInDirectory(channel);
  obj1[0] = channel(11934);
  obj1[1] = tmp.header;
  const items2 = [callback(closure_3, obj1), , , , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = guild(1236).intl;
  obj2[2] = intl.format(guild(1236).t.vyvrpC, { guildName: guild.name });
  items2[1] = callback(guild(1297).LegacyText, obj2);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = guild(1236).intl;
  obj4[3] = intl2.string(guild(1236).t.WypE0i);
  items2[2] = callback(guild(4734).Text, obj4);
  let tmp8Result = null;
  if (canCreateOrAddGuildInDirectory) {
    const obj5 = { style: null, onPress: null, iconSource: null, title: null };
    obj5[0] = tmp.ctaContainer;
    obj5[1] = function onPress() {
      channel(11475);
      const obj = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: channel.id };
      return obj.open(obj);
    };
    obj5[2] = tmp2(11935);
    const intl3 = tmp4(1236).intl;
    obj5[3] = intl3.string(tmp4(1236).t.hyK15i);
    tmp8Result = callback(tmp4(8083).FormCTA, obj5);
  }
  items2[3] = tmp8Result;
  const obj6 = {
    style: tmp.ctaContainer,
    onPress() {
      return guild(8918).handleOpenInviteActionsheet(guild, channel.id, dependencyMap, closure_1_6.HUB_EMPTY_STATE);
    },
    iconSource: channel(11936),
    title: null
  };
  const intl4 = tmp4(1236).intl;
  obj6[3] = intl4.string(guild(1236).t.L4bwJ9);
  items2[4] = callback(guild(8083).FormCTA, obj6);
  obj[1] = items2;
  return callback(closure_4, obj);
};