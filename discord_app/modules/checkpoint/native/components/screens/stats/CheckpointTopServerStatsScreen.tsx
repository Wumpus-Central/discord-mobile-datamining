// === Module 13609: CheckpointTopServerStatsScreen ===

// Module 13609 (CheckpointTopServerStatsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import _modDef3091 from "module_3091" /* 3091 */;
import Text_Text from "Text/Text" /* 5619 */;
import GuildIcon from "GuildIcon" /* 6951 */;
import ServerIcon from "ServerIcon" /* 9738 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 13399 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 13585 */;
import CheckpointTextDefault from "CheckpointText" /* 13587 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 13600 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 13601 */;
import CheckpointGuildStatsDefault from "CheckpointGuildStats" /* 13607 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 13608 */;
import CheckpointStore from "CheckpointStore" /* 13386 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ CHECKPOINT_GUILD_CARD_BACKGROUND, CHECKPOINT_WHITE } = CheckpointConstants);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_64 }, spotlightContainer: { flexGrow: 1, justifyContent: "center", alignItems: "center" }, spotlight: { alignItems: "flex-start" }, card: null, guildIcon: null, guildDetails: null, guildName: null, copy: null, title: null, titleText: null, number: null };
let obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_64 };
obj.card = { gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, backgroundColor: CHECKPOINT_GUILD_CARD_BACKGROUND };
let size = { width: 192, height: 192, borderRadius: nativeDefault.radii.none };
obj.guildIcon = size;
let obj3 = { gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, backgroundColor: CHECKPOINT_GUILD_CARD_BACKGROUND };
obj.guildDetails = { width: 192, gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
obj.guildName = { color: CHECKPOINT_WHITE };
obj.copy = { flexShrink: 1 };
let obj4 = { width: 192, gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointTopServerStatsScreen.tsx");

export default function CheckpointTopServerStatsScreen() {
  const tmp = closure_8();
  const items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    stats = stats.stats;
    let first;
    if (stats != null) {
      const guilds = stats.guilds;
      if (guilds != null) {
        first = guilds.guilds[0];
      }
    }
    return first;
  });
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.numDaysInteracted;
  }
  if (num == null) {
    num = 0;
  }
  const rounded = Math.round(num);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.numDaysInteractedPercentile;
  }
  const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop);
  const intl = util.intl;
  const stringResult = intl.string(_modDef3091["M+a+t1"]);
  let formatToPlainStringResult;
  if (null != checkpointTopPercent) {
    const intl2 = util.intl;
    const obj2 = { numDays: rounded, percent: checkpointTopPercent };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3091.BRQODX, obj2);
  }
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.spotlightContainer, children: null };
  let tmp12Result = null != stateFromStores;
  const tmp2Result = CheckpointStatsUtils;
  if (tmp12Result) {
    const obj5 = { style: tmp.spotlight, children: null };
    const items1 = [timestampProducer(CheckpointRankTagDefault, { rank: 1 }), ];
    const obj6 = { style: tmp.card, children: null };
    const obj7 = { guild: stateFromStores.guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: tmp.guildIcon };
    const items2 = [timestampProducer(GuildIconDefault, obj7), ];
    const obj8 = { style: tmp.guildDetails, children: null };
    const obj9 = { variant: "heading-lg/medium", style: tmp.guildName, lineClamp: 1, ellipsizeMode: "tail", children: stateFromStores.guild.name };
    const items3 = [timestampProducer(Text_Text.Text, obj9), ];
    let num2 = stateFromStores.numVoiceMinutes;
    const tmp8Result5 = GuildIconDefault;
    if (num2 == null) {
      num2 = 0;
    }
    const obj10 = { numVoiceMinutes: num2, numMessagesSent: null };
    let num3 = stateFromStores.numMessagesSent;
    if (num3 == null) {
      num3 = 0;
    }
    obj10.numMessagesSent = num3;
    items3[1] = timestampProducer(CheckpointGuildStatsDefault, obj10);
    obj8.children = items3;
    items2[1] = React5(View, obj8);
    obj6.children = items2;
    items1[1] = React5(View, obj6);
    obj5.children = items1;
    tmp12Result = React5(View, obj5);
    const tmp8Result6 = CheckpointGuildStatsDefault;
  }
  obj4.children = tmp12Result;
  const items4 = [timestampProducer(View, obj4), ];
  const obj11 = { style: tmp.copy, children: null };
  const obj12 = { style: tmp.title, children: null };
  const items5 = [timestampProducer(ServerIcon.ServerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY }), ];
  const obj14 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj13 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  const tmp8Result = CheckpointScreenDefault;
  obj14.children = stringResult.toLocaleUpperCase();
  items5[1] = timestampProducer(CheckpointTextDefault, obj14);
  obj12.children = items5;
  const items6 = [React5(View, obj12), , ];
  const tmp8Result7 = CheckpointTextDefault;
  items6[1] = timestampProducer(View, { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult, style: tmp.number, children: timestampProducer(CheckpointCountUpStatNumberDefault, { end: rounded }) });
  const obj16 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const obj15 = { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult, style: tmp.number, children: timestampProducer(CheckpointCountUpStatNumberDefault, { end: rounded }) };
  if (null != checkpointTopPercent) {
    const intl4 = util.intl;
    const obj17 = {
      numDays: rounded,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
        }
    };
    let formatResult = intl4.format(_modDef3091.sIDTV1, obj17);
  } else {
    const intl3 = util.intl;
    const obj18 = { numDays: rounded };
    formatResult = intl3.format(_modDef3091.nLCUQ4, obj18);
  }
  const obj19 = { children: null };
  obj16.children = formatResult;
  items6[2] = timestampProducer(CheckpointTextDefault, obj16);
  obj11.children = items6;
  items4[1] = React5(View, obj11);
  obj3.children = items4;
  obj19.children = React5(View, obj3);
  return timestampProducer(tmp8Result, obj19);
};