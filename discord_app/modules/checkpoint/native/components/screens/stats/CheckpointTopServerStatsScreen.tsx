// === Module 14516: CheckpointTopServerStatsScreen ===

// Module 14516 (CheckpointTopServerStatsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3317 from "module_3317" /* 3317 */;
import Text_Text from "Text/Text" /* 5929 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6747 */;
import GuildIcon from "GuildIcon" /* 7720 */;
import ServerIcon from "ServerIcon" /* 10939 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 14270 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import useIsCheckpointWide from "useIsCheckpointWide" /* 14485 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 14505 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14506 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 14507 */;
import CheckpointGuildStatsDefault from "CheckpointGuildStats" /* 14513 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 14514 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
const useIsCheckpointWideDefault = useIsCheckpointWide;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ CHECKPOINT_GUILD_CARD_BACKGROUND, CHECKPOINT_WHITE } = CheckpointConstants);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let obj = { container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_64 }, spotlightContainer: { flexGrow: 1, justifyContent: "center", alignItems: "center" }, spotlight: { alignItems: "flex-start" }, card: null, guildIcon: null, guildDetails: null, guildName: null, copy: null, title: null, titleText: null, number: null, wideContainer: null, wideSpotlightContainer: null, wideCopy: null };
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
let obj6 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj.wideContainer = { flexGrow: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH };
let obj7 = { flexGrow: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH };
obj.wideSpotlightContainer = { width: "50%", alignItems: "center", paddingRight: nativeDefault.space.PX_32 };
let obj8 = { width: "50%", alignItems: "center", paddingRight: nativeDefault.space.PX_32 };
obj.wideCopy = { width: "50%", paddingLeft: nativeDefault.space.PX_32 };
let closure_8 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointTopServerStatsScreen.tsx");

export default function CheckpointTopServerStatsScreen() {
  const tmp = closure_8();
  const tmp4 = useIsCheckpointWideDefault();
  items = [CheckpointStore];
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
  const tmp5Result = CheckpointStatsUtils;
  let formatToPlainStringResult;
  if (null != checkpointTopPercent) {
    const intl2 = util.intl;
    const obj2 = { numDays: rounded, percent: checkpointTopPercent };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3317.BRQODX, obj2);
  }
  const obj3 = { centered: tmp4, children: null };
  const obj4 = { style: tmp4 ? tmp.wideContainer : tmp.container, children: null };
  const obj5 = { style: tmp4 ? tmp.wideSpotlightContainer : tmp.spotlightContainer, children: null };
  let tmp13Result = null != stateFromStores;
  const stringResult = intl.string(_modDef3317["M+a+t1"]);
  if (tmp13Result) {
    const obj6 = { style: tmp.spotlight, children: null };
    const items1 = [timestampProducer(CheckpointRankTagDefault, { rank: 1 }), ];
    const obj7 = { style: tmp.card, children: null };
    const obj8 = { guild: stateFromStores.guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: tmp.guildIcon };
    const items2 = [timestampProducer(GuildIconDefault, obj8), ];
    const obj9 = { style: tmp.guildDetails, children: null };
    const obj10 = { variant: "heading-lg/medium", style: tmp.guildName, lineClamp: 1, ellipsizeMode: "tail", children: stateFromStores.guild.name };
    const items3 = [timestampProducer(Text_Text.Text, obj10), ];
    let num2 = stateFromStores.numVoiceMinutes;
    const tmp2Result5 = GuildIconDefault;
    if (num2 == null) {
      num2 = 0;
    }
    const obj11 = { numVoiceMinutes: num2, numMessagesSent: null };
    let num3 = stateFromStores.numMessagesSent;
    if (num3 == null) {
      num3 = 0;
    }
    obj11.numMessagesSent = num3;
    items3[1] = timestampProducer(CheckpointGuildStatsDefault, obj11);
    obj9.children = items3;
    items2[1] = metroImportDefault(View, obj9);
    obj7.children = items2;
    items1[1] = metroImportDefault(View, obj7);
    obj6.children = items1;
    tmp13Result = metroImportDefault(View, obj6);
    const tmp2Result6 = CheckpointGuildStatsDefault;
  }
  obj5.children = tmp13Result;
  const items4 = [timestampProducer(View, obj5), ];
  const obj12 = { style: tmp4 ? tmp.wideCopy : tmp.copy, children: null };
  const obj13 = { style: tmp.title, children: null };
  const items5 = [timestampProducer(ServerIcon.ServerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY }), ];
  const obj15 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: null };
  const obj14 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  const tmp2Result = CheckpointScreenDefault;
  obj15.children = stringResult.toLocaleUpperCase();
  items5[1] = timestampProducer(CheckpointTextDefault, obj15);
  obj13.children = items5;
  const items6 = [metroImportDefault(View, obj13), , ];
  const obj16 = { accessible: true, accessibilityLabel: null, style: null, children: null };
  const tmp2Result7 = CheckpointTextDefault;
  obj16.accessibilityLabel = CheckpointNumberUtils.formatCheckpointStatAccessibilityLabel("topServerDays", rounded);
  obj16.style = tmp.number;
  obj16.children = timestampProducer(CheckpointCountUpStatNumberDefault, { end: rounded });
  items6[1] = timestampProducer(View, obj16);
  const obj17 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp5Result2 = CheckpointNumberUtils;
  if (null != checkpointTopPercent) {
    const intl4 = util.intl;
    const obj18 = {
      numDays: rounded,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
        }
    };
    let formatResult = intl4.format(_modDef3317.sIDTV1, obj18);
  } else {
    const intl3 = util.intl;
    const obj19 = { numDays: rounded };
    formatResult = intl3.format(_modDef3317.nLCUQ4, obj19);
  }
  obj17.children = formatResult;
  items6[2] = timestampProducer(CheckpointTextDefault, obj17);
  obj12.children = items6;
  items4[1] = metroImportDefault(View, obj12);
  obj4.children = items4;
  obj3.children = metroImportDefault(View, obj4);
  return timestampProducer(tmp2Result, obj3);
};