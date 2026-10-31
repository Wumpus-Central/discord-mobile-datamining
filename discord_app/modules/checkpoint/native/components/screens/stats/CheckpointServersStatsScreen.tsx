// === Module 13642: CheckpointServersStatsScreen ===

// Module 13642 (CheckpointServersStatsScreen)
import nativeDefault from "native" /* 575 */;
import _modDef3060 from "module_3060" /* 3060 */;
import _modDef3092 from "module_3092" /* 3092 */;
import Text_Text from "Text/Text" /* 5624 */;
import GuildIcon from "GuildIcon" /* 6957 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 13622 */;
import CheckpointTextDefault from "CheckpointText" /* 13624 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 13629 */;
import _modDef13630 from "module_13630" /* 13630 */;
import _modDef13631 from "module_13631" /* 13631 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 13643 */;
import CheckpointGuildStatsDefault from "CheckpointGuildStats" /* 13644 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 13645 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;

require = fn;
function GuildCard(guild) {
  guild = guild.guild;
  ({ rank, iconStyle, children } = guild);
  const tmp = closure_8();
  const obj = { style: tmp.guildCard, children: null };
  const obj2 = { style: tmp.guildContent, children: null };
  const items = [timestampProducer(View, { style: tmp.guildRankRow, children: timestampProducer(CheckpointRankTagDefault, { rank, chamferCorner: "bottom-right" }) }), ];
  const obj4 = { style: tmp.guildDetails, children: null };
  const items1 = [timestampProducer(Text_Text.Text, { variant: "heading-lg/medium", style: tmp.guildName, lineClamp: 1, ellipsizeMode: "tail", children: guild.name }), children];
  obj4.children = items1;
  items[1] = React5(View, obj4);
  obj2.children = items;
  const items2 = [React5(View, obj2), ];
  const obj6 = { guild, size: null, style: null };
  const obj3 = { style: tmp.guildRankRow, children: timestampProducer(CheckpointRankTagDefault, { rank, chamferCorner: "bottom-right" }) };
  const obj5 = { variant: "heading-lg/medium", style: tmp.guildName, lineClamp: 1, ellipsizeMode: "tail", children: guild.name };
  obj6.size = GuildIcon.GuildIconSizes.XXLARGE;
  obj6.style = iconStyle;
  items2[1] = timestampProducer(GuildIconDefault, obj6);
  obj.children = items2;
  return React5(View, obj);
}
const View = fn(17).View;
const CheckpointConstants = fn(6066);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ CHECKPOINT_GUILD_CARD_BACKGROUND, CHECKPOINT_WHITE } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, globalContainer: null, header: null, heading: null, globalHeading: null, globe: null, title: null, titleText: null, guilds: null, globalGuilds: null, guildCard: null, guildContent: null, guildRankRow: null, guildDetails: null, guildName: null, topGuildIcon: null, guildIcon: null, globalGuildIcon: null };
let obj3 = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj2.globalContainer = { justifyContent: "flex-start", gap: nativeDefault.space.PX_24 };
let obj4 = { justifyContent: "flex-start", gap: nativeDefault.space.PX_24 };
obj2.header = { gap: nativeDefault.space.PX_12 };
let obj5 = { gap: nativeDefault.space.PX_12 };
obj2.heading = { gap: nativeDefault.space.PX_8 };
let obj6 = { gap: nativeDefault.space.PX_8 };
obj2.globalHeading = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj2.globe = { width: 75, height: 56 };
let obj7 = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleText = { flexShrink: 1 };
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.guilds = { gap: nativeDefault.space.PX_24 };
let obj9 = { gap: nativeDefault.space.PX_24 };
obj2.globalGuilds = { gap: nativeDefault.space.PX_16 };
let obj10 = { gap: nativeDefault.space.PX_16 };
obj2.guildCard = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, backgroundColor: CHECKPOINT_GUILD_CARD_BACKGROUND };
let obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, backgroundColor: CHECKPOINT_GUILD_CARD_BACKGROUND };
obj2.guildContent = { flex: 1, alignSelf: "stretch", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj2.guildRankRow = { flexDirection: "row" };
let obj12 = { flex: 1, alignSelf: "stretch", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj2.guildDetails = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
obj2.guildName = { color: CHECKPOINT_WHITE };
let size = { width: 96, height: 96, borderRadius: nativeDefault.radii.none };
obj2.topGuildIcon = size;
const size1 = { width: 72, height: 72, borderRadius: nativeDefault.radii.none };
obj2.guildIcon = size1;
const size2 = { width: 64, height: 64, borderRadius: nativeDefault.radii.none };
obj2.globalGuildIcon = size2;
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointServersStatsScreen.tsx");

export default function CheckpointServersStatsScreen() {
  let tmp = closure_8();
  _require = tmp;
  const items = [CheckpointStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    stats = stats.stats;
    let guilds1;
    if (stats != null) {
      const guilds = stats.guilds;
      if (guilds != null) {
        guilds1 = guilds.guilds;
      }
    }
    const obj = { guilds: guilds1, globalGuilds: null };
    const globalStats = stats.globalStats;
    let guildsByMembers;
    if (globalStats != null) {
      const guilds2 = globalStats.guilds;
      if (guilds2 != null) {
        guildsByMembers = guilds2.guildsByMembers;
      }
    }
    obj.globalGuilds = guildsByMembers;
    return obj;
  });
  ({ guilds, globalGuilds } = stateFromStoresObject);
  if (null != guilds) {
    if (0 !== guilds.length) {
      let obj2 = { children: null };
      const obj3 = { style: tmp.container, children: null };
      const obj4 = { style: tmp.header, children: null };
      const obj5 = { style: tmp.heading, children: null };
      const obj6 = { style: tmp.title, children: null };
      const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      const items1 = [closure_6(tmp2(9758).ServerIcon, obj7), ];
      const obj8 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: null };
      const tmp16 = CheckpointScreenDefault;
      const intl3 = tmp2(1113).intl;
      const tmp20 = CheckpointTextDefault;
      obj8.children = intl3.string(_modDef3092.Mb5E6r).toLocaleUpperCase();
      items1[1] = closure_6(tmp20, obj8);
      obj6.children = items1;
      const items2 = [closure_7(View, obj6), ];
      const obj9 = { children: null };
      const stringResult = intl3.string(_modDef3092.Mb5E6r);
      const intl4 = tmp2(1113).intl;
      const tmp21 = CheckpointDisplayTextDefault;
      obj9.children = intl4.string(_modDef3060.F0fkrh).toLocaleUpperCase();
      items2[1] = closure_6(tmp21, obj9);
      obj5.children = items2;
      const items3 = [closure_7(View, obj5), ];
      const obj10 = { variant: "heading-lg/medium", children: null };
      const stringResult1 = intl4.string(_modDef3060.F0fkrh);
      const intl5 = tmp2(1113).intl;
      obj10.children = intl5.string(_modDef3092.IN1DaS);
      items3[1] = closure_6(CheckpointTextDefault, obj10);
      obj4.children = items3;
      const items4 = [closure_7(View, obj4), ];
      const obj11 = {
        style: tmp.guilds,
        children: guilds.map((item, index) => {
              ({ guild, numMessagesSent, numVoiceMinutes } = item);
              let tmp = 0 === index;
              const obj = { guild, rank: index + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: null };
              if (tmp) {
                if (numMessagesSent == null) {
                  numMessagesSent = 0;
                }
                const obj2 = { numMessagesSent, numVoiceMinutes: null };
                if (numVoiceMinutes == null) {
                  numVoiceMinutes = 0;
                }
                obj2.numVoiceMinutes = numVoiceMinutes;
                tmp = timestampProducer(CheckpointGuildStatsDefault, obj2);
              }
              obj.children = tmp;
              return timestampProducer(GuildCard, obj, guild.id);
            })
      };
      items4[1] = closure_6(View, obj11);
      obj3.children = items4;
      obj2.children = closure_7(View, obj3);
      let tmp5Result = closure_6(tmp16, obj2);
    }
    return tmp5Result;
  }
  const obj12 = { style: null, children: null };
  const items5 = [, ];
  ({ container: arr2[0], globalContainer: arr2[1] } = tmp);
  obj12.style = items5;
  const obj13 = { style: tmp.header, children: null };
  const obj14 = { style: tmp.globalHeading, children: null };
  let obj = require("initialize");
  const obj15 = { animatedUri: null, staticUri: null, style: null };
  const tmp6 = CheckpointScreenDefault;
  obj15.animatedUri = _modDef13630;
  obj15.staticUri = _modDef13631;
  obj15.style = tmp.globe;
  const items6 = [closure_6(CheckpointApngPlayerDefault, obj15), ];
  const obj16 = { isStepHeading: true, children: null };
  const intl = tmp2(1113).intl;
  const tmp10 = CheckpointDisplayTextDefault;
  obj16.children = intl.string(_modDef3060.F0fkrh).toLocaleUpperCase();
  items6[1] = closure_6(tmp10, obj16);
  obj14.children = items6;
  const items7 = [closure_7(View, obj14), ];
  const obj17 = { variant: "heading-lg/medium", children: null };
  const stringResult2 = intl.string(_modDef3060.F0fkrh);
  const intl2 = tmp2(1113).intl;
  obj17.children = intl2.string(_modDef3092.bhnqop);
  items7[1] = closure_6(CheckpointTextDefault, obj17);
  obj13.children = items7;
  const items8 = [closure_7(View, obj13), ];
  const obj18 = { style: tmp.globalGuilds, children: null };
  let mapped;
  if (globalGuilds != null) {
    mapped = globalGuilds.map((guild, index) => timestampProducer(GuildCard, { guild, rank: index + 1, iconStyle: globalGuildIcon.globalGuildIcon }, guild.id));
  }
  const obj19 = { children: null };
  obj18.children = mapped;
  items8[1] = closure_6(View, obj18);
  obj12.children = items8;
  obj19.children = closure_7(View, obj12);
  tmp5Result = closure_6(tmp6, obj19);
};