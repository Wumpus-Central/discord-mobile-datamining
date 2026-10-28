// === Module 13225: CheckpointTopServerStatsScreen ===

// Module 13225 (CheckpointTopServerStatsScreen)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3089 from "module_3089" /* 3089 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 13217 */;
import CheckpointStore from "CheckpointStore" /* 13015 */;
import CheckpointConstants from "CheckpointConstants" /* 6050 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const initialize = intl(504);
const util = intl(1125);
const Text_Text = intl(5270);
const GuildIcon = intl(6919);
const GuildIconDefault = sIDTV1(6919);
const ServerIcon = intl(9680);
const CheckpointStatsUtils = intl(13018);
const CheckpointTextDefault = sIDTV1(13204);
const CheckpointScreenDefault = sIDTV1(13206);
const CheckpointCountUpStatNumberDefault = sIDTV1(13214);
const CheckpointGuildStatsDefault = sIDTV1(13223);
const CheckpointRankTagDefault = sIDTV1(13224);
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
let obj6 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointTopServerStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointTopServerStatsScreen() {
  let intl = require;
  title = dependencyMap;
  const cResult = c.c(61);
  let titleText = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function s() {
      stats = stats.stats;
      let first;
      if (stats != null) {
        const guilds = stats.guilds;
        if (guilds != null) {
          first = guilds.guilds[0];
        }
      }
      return first;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp2 = items;
    tmp3 = fn;
  } else {
    [tmp2, tmp3] = cResult;
  }
  let str = initialize.useStateFromStores(tmp2, tmp3);
  if (cResult[2] === titleText.card) {
    if (cResult[3] === titleText.container) {
      if (cResult[4] === titleText.copy) {
        if (cResult[5] === titleText.guildDetails) {
          if (cResult[6] === titleText.guildIcon) {
            if (cResult[7] === titleText.guildName) {
              if (cResult[8] === titleText.number) {
                if (cResult[9] === titleText.spotlight) {
                  if (cResult[10] === titleText.spotlightContainer) {
                    if (cResult[11] === titleText.title) {
                      if (cResult[12] === titleText.titleText) {
                        if (cResult[13] === str) {
                          if (cResult[42] === cResult[14]) {
                            if (cResult[43] === tmp9) {
                              if (cResult[44] === tmp10) {
                                if (cResult[45] === tmp11) {
                                  let tmp57 = cResult[46];
                                }
                                if (cResult[47] === tmp6) {
                                  if (cResult[48] === tmp57) {
                                    if (cResult[49] === tmp12) {
                                      if (cResult[50] === tmp13) {
                                        if (cResult[51] === tmp14) {
                                          let tmp60 = cResult[52];
                                        }
                                        if (cResult[53] === tmp7) {
                                          if (cResult[54] === tmp60) {
                                            if (cResult[55] === tmp15) {
                                              if (cResult[56] === tmp16) {
                                                let tmp63 = cResult[57];
                                              }
                                              if (cResult[58] === tmp8) {
                                                if (cResult[59] === tmp63) {
                                                  let tmp66 = cResult[60];
                                                }
                                                return tmp66;
                                              }
                                              const obj2 = { children: tmp63 };
                                              const tmp68 = timestampProducer(tmp8, obj2);
                                              cResult[58] = tmp8;
                                              cResult[59] = tmp63;
                                              cResult[60] = tmp68;
                                              tmp66 = tmp68;
                                            }
                                          }
                                        }
                                        const obj3 = { style: tmp15, children: null };
                                        const items1 = [tmp16, tmp60];
                                        obj3.children = items1;
                                        const tmp65 = React5(tmp7, obj3);
                                        cResult[53] = tmp7;
                                        cResult[54] = tmp60;
                                        cResult[55] = tmp15;
                                        cResult[56] = tmp16;
                                        cResult[57] = tmp65;
                                        tmp63 = tmp65;
                                      }
                                    }
                                  }
                                }
                                const obj4 = { style: tmp12, children: null };
                                const items2 = [tmp13, tmp14, tmp57];
                                obj4.children = items2;
                                const tmp62 = React5(tmp6, obj4);
                                cResult[47] = tmp6;
                                cResult[48] = tmp57;
                                cResult[49] = tmp12;
                                cResult[50] = tmp13;
                                cResult[51] = tmp14;
                                cResult[52] = tmp62;
                                tmp60 = tmp62;
                              }
                            }
                          }
                          const obj5 = { variant: cResult[18], accessibilityLabel: cResult[19], children: cResult[20] };
                          const tmp59 = timestampProducer(cResult[14], obj5);
                          cResult[42] = cResult[14];
                          cResult[43] = cResult[18];
                          cResult[44] = cResult[19];
                          cResult[45] = cResult[20];
                          cResult[46] = tmp59;
                          tmp57 = tmp59;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  let num3;
  if (str != null) {
    num3 = str.numDaysInteracted;
  }
  if (num3 == null) {
    num3 = 0;
  }
  const rounded = Math.round(num3);
  const intlResult = initialize;
  let prop;
  if (str != null) {
    prop = str.numDaysInteractedPercentile;
  }
  let percentHook = CheckpointStatsUtils.getCheckpointTopPercent(prop);
  const intl2 = util.intl;
  let sIDTV1 = importDefault;
  const stringResult = intl2.string(_modDef3089["M+a+t1"]);
  if (null != percentHook) {
    const intl3 = util.intl;
    const obj6 = {
      numDays: rounded,
      percent: percentHook,
      percentHook(arg0) {
          return arg0;
        }
    };
    const formatToPlainStringResult = intl3.formatToPlainString(_modDef3089.sIDTV1, obj6);
  }
  const sIDTV1Result = CheckpointScreenDefault;
  const container = titleText.container;
  if (cResult[26] === titleText.card) {
    if (cResult[27] === titleText.guildDetails) {
      if (cResult[28] === titleText.guildIcon) {
        if (cResult[29] === titleText.guildName) {
          if (cResult[30] === titleText.spotlight) {
            if (cResult[31] === str) {
              let tmp22 = cResult[32];
            }
            if (cResult[33] === titleText.spotlightContainer) {
              if (cResult[34] === tmp22) {
                let tmp28 = cResult[35];
              }
              const copy = titleText.copy;
              const _Symbol = Symbol;
              if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
                const tmp34 = timestampProducer(ServerIcon.ServerIcon, obj7);
                cResult[36] = tmp34;
                let tmp31 = tmp34;
              } else {
                tmp31 = cResult[36];
              }
              if (cResult[37] !== titleText.titleText) {
                const obj8 = { variant: "heading-md/extrabold", style: titleText.titleText, children: stringResult.toLocaleUpperCase() };
                const tmp38 = timestampProducer(CheckpointTextDefault, obj8);
                cResult[37] = titleText.titleText;
                cResult[38] = tmp38;
                let tmp35 = tmp38;
                const sIDTV1Result1 = CheckpointTextDefault;
              } else {
                tmp35 = cResult[38];
              }
              if (cResult[39] === titleText.title) {
                if (cResult[40] === tmp35) {
                  let tmp39 = cResult[41];
                }
                const obj9 = { accessible: true, accessibilityLabel: null, style: null, children: null };
                const _HermesInternal = HermesInternal;
                obj9.accessibilityLabel = "" + rounded + " " + stringResult;
                obj9.style = titleText.number;
                const obj10 = { end: rounded };
                obj9.children = timestampProducer(CheckpointCountUpStatNumberDefault, obj10);
                const tmp43 = timestampProducer(View, obj9);
                const sIDTV1Result2 = CheckpointTextDefault;
                if (null != percentHook) {
                  intl = util.intl;
                  sIDTV1 = _modDef3089.sIDTV1;
                  const obj11 = { numDays: rounded, percent: percentHook, percentHook: null };
                  percentHook = function percentHook(children, arg1) {
                    return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
                  };
                  obj11.percentHook = percentHook;
                  let formatResult = intl.format(sIDTV1, obj11);
                } else {
                  const intl4 = util.intl;
                  const obj12 = { numDays: rounded };
                  formatResult = intl4.format(_modDef3089.nLCUQ4, obj12);
                }
                cResult[2] = titleText.card;
                cResult[3] = titleText.container;
                cResult[4] = titleText.copy;
                cResult[5] = titleText.guildDetails;
                cResult[6] = titleText.guildIcon;
                cResult[7] = titleText.guildName;
                cResult[8] = titleText.number;
                cResult[9] = titleText.spotlight;
                ({ spotlightContainer: tmp[10], title } = titleText);
                cResult[11] = title;
                titleText = titleText.titleText;
                cResult[12] = titleText;
                cResult[13] = str;
                cResult[14] = sIDTV1Result2;
                cResult[15] = View;
                cResult[16] = View;
                cResult[17] = sIDTV1Result;
                str = "heading-lg/medium";
                cResult[18] = "heading-lg/medium";
                cResult[19] = formatToPlainStringResult;
                cResult[20] = formatResult;
                cResult[21] = copy;
                cResult[22] = tmp39;
                cResult[23] = tmp43;
                cResult[24] = container;
                cResult[25] = tmp28;
              }
              const obj13 = { style: titleText.title, children: null };
              const items3 = [tmp31, tmp35];
              obj13.children = items3;
              const tmp41 = React5(View, obj13);
              cResult[39] = titleText.title;
              cResult[40] = tmp35;
              cResult[41] = tmp41;
              tmp39 = tmp41;
            }
            const obj14 = { style: titleText.spotlightContainer, children: tmp22 };
            const tmp30 = timestampProducer(View, obj14);
            cResult[33] = titleText.spotlightContainer;
            cResult[34] = tmp22;
            cResult[35] = tmp30;
            tmp28 = tmp30;
          }
        }
      }
    }
  }
  let tmp24Result = null != str;
  if (tmp24Result) {
    const obj15 = { style: titleText.spotlight, children: null };
    const items4 = [timestampProducer(CheckpointRankTagDefault, { rank: 1 }), ];
    const obj16 = { style: titleText.card, children: null };
    const obj17 = { guild: str.guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: titleText.guildIcon };
    const items5 = [timestampProducer(GuildIconDefault, obj17), ];
    const obj18 = { style: titleText.guildDetails, children: null };
    const obj19 = { variant: "heading-lg/medium", style: titleText.guildName, lineClamp: 1, ellipsizeMode: "tail", children: str.guild.name };
    const items6 = [timestampProducer(Text_Text.Text, obj19), ];
    let num4 = str.numVoiceMinutes;
    const sIDTV1Result3 = GuildIconDefault;
    if (num4 == null) {
      num4 = 0;
    }
    const obj20 = { numVoiceMinutes: num4, numMessagesSent: null };
    let num5 = str.numMessagesSent;
    if (num5 == null) {
      num5 = 0;
    }
    obj20.numMessagesSent = num5;
    items6[1] = timestampProducer(CheckpointGuildStatsDefault, obj20);
    obj18.children = items6;
    items5[1] = React5(View, obj18);
    obj16.children = items5;
    items4[1] = React5(View, obj16);
    obj15.children = items4;
    tmp24Result = React5(View, obj15);
    const sIDTV1Result4 = CheckpointGuildStatsDefault;
  }
  cResult[26] = titleText.card;
  cResult[27] = titleText.guildDetails;
  cResult[28] = titleText.guildIcon;
  cResult[29] = titleText.guildName;
  cResult[30] = titleText.spotlight;
  cResult[31] = str;
  cResult[32] = tmp24Result;
  tmp22 = tmp24Result;
  const intlResult1 = CheckpointStatsUtils;
}) : (function CheckpointTopServerStatsScreen() {
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
  const stringResult = intl.string(_modDef3089["M+a+t1"]);
  let formatToPlainStringResult;
  if (null != checkpointTopPercent) {
    const intl2 = util.intl;
    const obj2 = {
      numDays: rounded,
      percent: checkpointTopPercent,
      percentHook(arg0) {
          return arg0;
        }
    };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3089.sIDTV1, obj2);
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
  const obj14 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
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
    let formatResult = intl4.format(_modDef3089.sIDTV1, obj17);
  } else {
    const intl3 = util.intl;
    const obj18 = { numDays: rounded };
    formatResult = intl3.format(_modDef3089.nLCUQ4, obj18);
  }
  const obj19 = { children: null };
  obj16.children = formatResult;
  items6[2] = timestampProducer(CheckpointTextDefault, obj16);
  obj11.children = items6;
  items4[1] = React5(View, obj11);
  obj3.children = items4;
  obj19.children = React5(View, obj3);
  return timestampProducer(tmp8Result, obj19);
});