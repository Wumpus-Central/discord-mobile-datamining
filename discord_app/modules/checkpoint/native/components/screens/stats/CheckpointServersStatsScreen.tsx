// === Module 12686: CheckpointServersStatsScreen ===

// Module 12686 (CheckpointServersStatsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3091 from "module_3091" /* 3091 */;
import _modDef3123 from "module_3123" /* 3123 */;
import Text_Text from "Text/Text" /* 5149 */;
import GuildIcon from "GuildIcon" /* 6381 */;
import ChatIcon from "ChatIcon" /* 8424 */;
import ServerIcon from "ServerIcon" /* 9480 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11418 */;
import CheckpointTextDefault from "CheckpointText" /* 12676 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12678 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 12687 */;
import CheckpointStore from "CheckpointStore" /* 12654 */;
import CheckpointConstants from "CheckpointConstants" /* 5499 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5153 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, header: null, heading: null, title: null, titleText: null, guilds: null, guildCard: null, guildContent: null, guildRankRow: null, guildDetails: null, guildName: null, guildStats: null, guildStat: null, guildStatText: null, topGuildIcon: null, guildIcon: null };
let obj2 = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj.header = { gap: nativeDefault.space.PX_12 };
let obj3 = { gap: nativeDefault.space.PX_12 };
obj.heading = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.guilds = { gap: nativeDefault.space.PX_24 };
let obj6 = { gap: nativeDefault.space.PX_24 };
obj.guildCard = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, backgroundColor: "#04363ABF" };
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, backgroundColor: "#04363ABF" };
obj.guildContent = { flex: 1, alignSelf: "stretch", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj.guildRankRow = { flexDirection: "row" };
let obj8 = { flex: 1, alignSelf: "stretch", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj.guildDetails = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
obj.guildName = { color: CheckpointConstants.CHECKPOINT_WHITE };
let obj9 = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
obj.guildStats = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16 };
let obj10 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16 };
obj.guildStat = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.guildStatText = { fontSize: 16, lineHeight: 20 };
let size = { width: 96, height: 96, borderRadius: nativeDefault.radii.none };
obj.topGuildIcon = size;
const size1 = { width: 72, height: 72, borderRadius: nativeDefault.radii.none };
obj.guildIcon = size1;
let closure_8 = createStyles.createStyles(obj);
let obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildCard(arg0) {
  const cResult = c.c(50);
  ({ guild, index, numVoiceMinutes, numMessagesSent } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === guild.name) {
    if (cResult[1] === index) {
      if (cResult[2] === tmp5) {
        if (cResult[3] === numMessagesSent) {
          if (cResult[4] === numVoiceMinutes) {
            if (cResult[5] === tmp4.guildCard) {
              if (cResult[6] === tmp4.guildContent) {
                if (cResult[7] === tmp4.guildDetails) {
                  if (cResult[8] === tmp4.guildName) {
                    if (cResult[9] === tmp4.guildRankRow) {
                      if (cResult[10] === tmp4.guildStat) {
                        if (cResult[11] === tmp4.guildStatText) {
                          if (cResult[12] === tmp4.guildStats) {
                            let tmp6 = cResult[13];
                            let tmp7 = cResult[14];
                            let tmp8 = cResult[15];
                            let tmp9 = cResult[16];
                            let tmp10 = cResult[17];
                            let tmp11 = cResult[18];
                            let tmp12 = cResult[19];
                            let tmp13 = cResult[20];
                            let tmp14 = cResult[21];
                          }
                          if (cResult[32] === tmp6) {
                            if (cResult[33] === tmp9) {
                              if (cResult[34] === tmp10) {
                                if (cResult[35] === tmp11) {
                                  let tmp33 = cResult[36];
                                }
                                if (cResult[37] === tmp7) {
                                  if (cResult[38] === tmp12) {
                                    if (cResult[39] === tmp13) {
                                      if (cResult[40] === tmp33) {
                                        let tmp36 = cResult[41];
                                      }
                                      const tmp39 = tmp5 ? tmp4.topGuildIcon : tmp4.guildIcon;
                                      if (cResult[42] === guild) {
                                        if (cResult[43] === tmp39) {
                                          let tmp40 = cResult[44];
                                        }
                                        if (cResult[45] === tmp8) {
                                          if (cResult[46] === tmp40) {
                                            if (cResult[47] === tmp14) {
                                              if (cResult[48] === tmp36) {
                                                let tmp45 = cResult[49];
                                              }
                                              return tmp45;
                                            }
                                          }
                                        }
                                        const obj2 = { style: tmp14, children: null };
                                        const items = [tmp36, tmp40];
                                        obj2.children = items;
                                        const tmp47 = React5(tmp8, obj2);
                                        cResult[45] = tmp8;
                                        cResult[46] = tmp40;
                                        cResult[47] = tmp14;
                                        cResult[48] = tmp36;
                                        cResult[49] = tmp47;
                                        tmp45 = tmp47;
                                      }
                                      const obj3 = { guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: tmp39 };
                                      const tmp44 = timestampProducer(GuildIconDefault, obj3);
                                      cResult[42] = guild;
                                      cResult[43] = tmp39;
                                      cResult[44] = tmp44;
                                      tmp40 = tmp44;
                                    }
                                  }
                                }
                                const obj4 = { style: tmp12, children: null };
                                const items1 = [tmp13, tmp33];
                                obj4.children = items1;
                                const tmp38 = React5(tmp7, obj4);
                                cResult[37] = tmp7;
                                cResult[38] = tmp12;
                                cResult[39] = tmp13;
                                cResult[40] = tmp33;
                                cResult[41] = tmp38;
                                tmp36 = tmp38;
                              }
                            }
                          }
                          const obj5 = { style: tmp9, children: null };
                          const items2 = [tmp10, tmp11];
                          obj5.children = items2;
                          const tmp35 = React5(tmp6, obj5);
                          cResult[32] = tmp6;
                          cResult[33] = tmp9;
                          cResult[34] = tmp10;
                          cResult[35] = tmp11;
                          cResult[36] = tmp35;
                          tmp33 = tmp35;
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
  const rounded = Math.round(numVoiceMinutes);
  if (cResult[22] !== numMessagesSent) {
    const _Math = Math;
    const rounded1 = Math.round(numMessagesSent);
    cResult[22] = numMessagesSent;
    cResult[23] = rounded1;
    let tmp16 = rounded1;
  } else {
    tmp16 = cResult[23];
  }
  const intl = util.intl;
  const intl2 = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3091.UZbUtl, { numMinutes: rounded });
  ({ guildCard, guildContent } = tmp4);
  const sum = index + 1;
  if (cResult[24] !== sum) {
    const obj6 = { rank: sum, chamferCorner: "bottom-right" };
    const tmp23 = timestampProducer(CheckpointRankTagDefault, obj6);
    cResult[24] = sum;
    cResult[25] = tmp23;
    let tmp21 = tmp23;
  } else {
    tmp21 = cResult[25];
  }
  if (cResult[26] === tmp4.guildRankRow) {
    if (cResult[27] === tmp21) {
      let tmp24 = cResult[28];
    }
    const guildDetails = tmp4.guildDetails;
    if (cResult[29] === guild.name) {
      if (cResult[30] === tmp4.guildName) {
        let tmp26 = cResult[31];
      }
      let tmp29 = tmp5;
      if (tmp5) {
        const obj7 = { style: tmp4.guildStats, children: null };
        const obj8 = { accessible: true, accessibilityLabel: null, style: null, children: null };
        const _HermesInternal = HermesInternal;
        obj8.accessibilityLabel = "" + rounded + " " + formatToPlainStringResult.toLocaleLowerCase();
        obj8.style = tmp4.guildStat;
        const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
        const items3 = [timestampProducer(MicrophoneIcon.MicrophoneIcon, obj9), ];
        const obj10 = { variant: "experimental/mono-md/bold", style: tmp4.guildStatText, children: rounded };
        items3[1] = timestampProducer(CheckpointTextDefault, obj10);
        obj8.children = items3;
        const items4 = [React5(View, obj8), ];
        const obj11 = { accessible: true, accessibilityLabel: null, style: null, children: null };
        const _HermesInternal2 = HermesInternal;
        obj11.accessibilityLabel = "" + tmp16 + " " + stringResult.toLocaleLowerCase();
        obj11.style = tmp4.guildStat;
        const obj12 = { size: "xs", color: CHECKPOINT_PRIMARY };
        const items5 = [timestampProducer(ChatIcon.ChatIcon, obj12), ];
        const obj13 = { variant: "experimental/mono-md/bold", style: tmp4.guildStatText, children: tmp16 };
        items5[1] = timestampProducer(CheckpointTextDefault, obj13);
        obj11.children = items5;
        items4[1] = React5(View, obj11);
        obj7.children = items4;
        tmp29 = React5(View, obj7);
      }
      cResult[0] = guild.name;
      cResult[1] = index;
      cResult[2] = tmp5;
      cResult[3] = numMessagesSent;
      cResult[4] = numVoiceMinutes;
      cResult[5] = tmp4.guildCard;
      cResult[6] = tmp4.guildContent;
      cResult[7] = tmp4.guildDetails;
      cResult[8] = tmp4.guildName;
      cResult[9] = tmp4.guildRankRow;
      cResult[10] = tmp4.guildStat;
      cResult[11] = tmp4.guildStatText;
      cResult[12] = tmp4.guildStats;
      cResult[13] = View;
      cResult[14] = View;
      cResult[15] = View;
      cResult[16] = guildDetails;
      cResult[17] = tmp26;
      cResult[18] = tmp29;
      cResult[19] = guildContent;
      cResult[20] = tmp24;
      cResult[21] = guildCard;
      tmp11 = tmp29;
      tmp14 = guildCard;
      tmp13 = tmp24;
      tmp12 = guildContent;
      tmp10 = tmp26;
      tmp9 = guildDetails;
      tmp8 = View;
      tmp7 = View;
      tmp6 = View;
    }
    const obj14 = { variant: "heading-lg/medium", style: tmp4.guildName, lineClamp: 1, ellipsizeMode: "tail", children: guild.name };
    const tmp28 = timestampProducer(Text_Text.Text, obj14);
    cResult[29] = guild.name;
    cResult[30] = tmp4.guildName;
    cResult[31] = tmp28;
    tmp26 = tmp28;
  }
  const tmp25 = timestampProducer(View, { style: tmp4.guildRankRow, children: tmp21 });
  cResult[26] = tmp4.guildRankRow;
  cResult[27] = tmp21;
  cResult[28] = tmp25;
  tmp24 = tmp25;
  const obj15 = { style: tmp4.guildRankRow, children: tmp21 };
  stringResult = intl2.string(_modDef3091.wWKySP);
}) : (function GuildCard(arg0) {
  ({ guild, index } = arg0);
  ({ numVoiceMinutes, numMessagesSent } = arg0);
  const tmp = closure_8();
  const rounded = Math.round(numVoiceMinutes);
  const rounded1 = Math.round(numMessagesSent);
  const intl = util.intl;
  const intl2 = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3091.UZbUtl, { numMinutes: rounded });
  const obj = { style: tmp.guildCard, children: null };
  const obj2 = { style: tmp.guildContent, children: null };
  const obj3 = { style: tmp.guildRankRow, children: timestampProducer(CheckpointRankTagDefault, { rank: index + 1, chamferCorner: "bottom-right" }) };
  const items = [timestampProducer(View, obj3), ];
  const obj5 = { style: tmp.guildDetails, children: null };
  const items1 = [timestampProducer(Text_Text.Text, { variant: "heading-lg/medium", style: tmp.guildName, lineClamp: 1, ellipsizeMode: "tail", children: guild.name }), ];
  let tmp8Result = tmp2;
  if (0 === index) {
    const obj7 = { style: tmp.guildStats, children: null };
    const obj8 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const _HermesInternal = HermesInternal;
    obj8.accessibilityLabel = "" + rounded + " " + formatToPlainStringResult.toLocaleLowerCase();
    obj8.style = tmp.guildStat;
    const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
    const items2 = [timestampProducer(MicrophoneIcon.MicrophoneIcon, obj9), ];
    const obj10 = { variant: "experimental/mono-md/bold", style: tmp.guildStatText, children: rounded };
    items2[1] = timestampProducer(CheckpointTextDefault, obj10);
    obj8.children = items2;
    const items3 = [React5(View, obj8), ];
    const obj11 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const _HermesInternal2 = HermesInternal;
    obj11.accessibilityLabel = "" + rounded1 + " " + stringResult.toLocaleLowerCase();
    obj11.style = tmp.guildStat;
    const obj12 = { size: "xs", color: CHECKPOINT_PRIMARY };
    const items4 = [timestampProducer(ChatIcon.ChatIcon, obj12), ];
    const obj13 = { variant: "experimental/mono-md/bold", style: tmp.guildStatText, children: rounded1 };
    items4[1] = timestampProducer(CheckpointTextDefault, obj13);
    obj11.children = items4;
    items3[1] = React5(View, obj11);
    obj7.children = items3;
    tmp8Result = React5(View, obj7);
  }
  items1[1] = tmp8Result;
  obj5.children = items1;
  items[1] = React5(View, obj5);
  obj2.children = items;
  const items5 = [React5(View, obj2), ];
  const obj14 = { guild, size: null, style: null };
  const obj4 = { rank: index + 1, chamferCorner: "bottom-right" };
  const obj6 = { variant: "heading-lg/medium", style: tmp.guildName, lineClamp: 1, ellipsizeMode: "tail", children: guild.name };
  stringResult = intl2.string(_modDef3091.wWKySP);
  obj14.size = GuildIcon.GuildIconSizes.XXLARGE;
  obj14.style = 0 === index ? tmp.topGuildIcon : tmp.guildIcon;
  items5[1] = timestampProducer(GuildIconDefault, obj14);
  obj.children = items5;
  return React5(View, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointServersStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointServersStatsScreen() {
  const cResult = c.c(25);
  const tmp4 = closure_8();
  const items = [CheckpointStore];
  let stateFromStores = initialize.useStateFromStores(items, () => {
    stats = stats.stats;
    let guilds1;
    if (stats != null) {
      const guilds = stats.guilds;
      if (guilds != null) {
        guilds1 = guilds.guilds;
      }
    }
    return guilds1;
  });
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  ({ container, header, heading, title } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    const tmp8 = timestampProducer(ServerIcon.ServerIcon, obj3);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const toLocaleUpperCaseResult = intl.string(_modDef3123.Mb5E6r).toLocaleUpperCase();
    cResult[1] = toLocaleUpperCaseResult;
    let tmp9 = toLocaleUpperCaseResult;
    const stringResult = intl.string(_modDef3123.Mb5E6r);
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp4.titleText) {
    const obj4 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: tmp9 };
    const tmp15 = timestampProducer(CheckpointTextDefault, obj4);
    cResult[2] = tmp4.titleText;
    cResult[3] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp4.title) {
    if (cResult[5] === tmp12) {
      let tmp16 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { variant: "display-lg", children: null };
      const intl2 = util.intl;
      const tmp21 = CheckpointTextDefault;
      obj5.children = intl2.string(_modDef3091.F0fkrh).toLocaleUpperCase();
      const tmp22 = timestampProducer(tmp21, obj5);
      cResult[7] = tmp22;
      let tmp18 = tmp22;
      const stringResult1 = intl2.string(_modDef3091.F0fkrh);
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] === tmp4.heading) {
      if (cResult[9] === tmp16) {
        let tmp23 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { variant: "heading-lg/medium", children: null };
        const intl3 = util.intl;
        obj6.children = intl3.string(_modDef3123.IN1DaS);
        const tmp31 = timestampProducer(CheckpointTextDefault, obj6);
        cResult[11] = tmp31;
        let tmp27 = tmp31;
      } else {
        tmp27 = cResult[11];
      }
      if (cResult[12] === tmp4.header) {
        if (cResult[13] === tmp23) {
          let tmp32 = cResult[14];
        }
        if (cResult[15] !== stateFromStores) {
          const _Symbol3 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function k(arg0, index) {
              ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
              const obj = { guild, index, numMessagesSent: null, numVoiceMinutes: null };
              if (numMessagesSent == null) {
                numMessagesSent = 0;
              }
              obj.numMessagesSent = numMessagesSent;
              if (numVoiceMinutes == null) {
                numVoiceMinutes = 0;
              }
              obj.numVoiceMinutes = numVoiceMinutes;
              return closure_1_6(closure_1_9, obj, guild.id);
            };
            cResult[17] = fn;
            let tmp38 = fn;
          } else {
            tmp38 = cResult[17];
          }
          const mapped = stateFromStores.map(tmp38);
          cResult[15] = stateFromStores;
          cResult[16] = mapped;
        } else {
          if (cResult[18] === tmp4.guilds) {
            if (cResult[19] === tmp37) {
              let tmp41 = cResult[20];
            }
            if (cResult[21] === tmp4.container) {
              if (cResult[22] === tmp32) {
                if (cResult[23] === tmp41) {
                  let tmp45 = cResult[24];
                }
                return tmp45;
              }
            }
            const obj7 = { children: null };
            const obj8 = { style: container, children: null };
            const items1 = [tmp32, tmp41];
            obj8.children = items1;
            obj7.children = React5(View, obj8);
            const tmp51 = timestampProducer(CheckpointScreenDefault, obj7);
            cResult[21] = tmp4.container;
            cResult[22] = tmp32;
            cResult[23] = tmp41;
            cResult[24] = tmp51;
            tmp45 = tmp51;
          }
          const obj9 = { style: tmp36, children: cResult[16] };
          const tmp44 = timestampProducer(View, obj9);
          cResult[18] = tmp4.guilds;
          cResult[19] = cResult[16];
          cResult[20] = tmp44;
          tmp41 = tmp44;
        }
      }
      const obj10 = { style: header, children: null };
      const items2 = [tmp23, tmp27];
      obj10.children = items2;
      const tmp35 = React5(View, obj10);
      cResult[12] = tmp4.header;
      cResult[13] = tmp23;
      cResult[14] = tmp35;
      tmp32 = tmp35;
    }
    const obj11 = { style: heading, children: null };
    const items3 = [tmp16, tmp18];
    obj11.children = items3;
    const tmp26 = React5(View, obj11);
    cResult[8] = tmp4.heading;
    cResult[9] = tmp16;
    cResult[10] = tmp26;
    tmp23 = tmp26;
  }
  const obj12 = { style: title, children: null };
  const items4 = [first, tmp12];
  obj12.children = items4;
  const tmp17 = React5(View, obj12);
  cResult[4] = tmp4.title;
  cResult[5] = tmp12;
  cResult[6] = tmp17;
  tmp16 = tmp17;
}) : (function CheckpointServersStatsScreen() {
  const tmp = closure_8();
  const items = [CheckpointStore];
  let stateFromStores = initialize.useStateFromStores(items, () => {
    stats = stats.stats;
    let guilds1;
    if (stats != null) {
      const guilds = stats.guilds;
      if (guilds != null) {
        guilds1 = guilds.guilds;
      }
    }
    return guilds1;
  });
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  const obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { style: tmp.heading, children: null };
  const obj6 = { style: tmp.title, children: null };
  const items1 = [timestampProducer(ServerIcon.ServerIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY }), ];
  const obj8 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  const tmp4 = CheckpointScreenDefault;
  const intl = util.intl;
  const tmp5 = CheckpointTextDefault;
  obj8.children = intl.string(_modDef3123.Mb5E6r).toLocaleUpperCase();
  items1[1] = timestampProducer(tmp5, obj8);
  obj6.children = items1;
  const items2 = [React5(View, obj6), ];
  const obj9 = { variant: "display-lg", children: null };
  const stringResult = intl.string(_modDef3123.Mb5E6r);
  const intl2 = util.intl;
  const tmp6 = CheckpointTextDefault;
  obj9.children = intl2.string(_modDef3091.F0fkrh).toLocaleUpperCase();
  items2[1] = timestampProducer(tmp6, obj9);
  obj5.children = items2;
  const items3 = [React5(View, obj5), ];
  const obj10 = { variant: "heading-lg/medium", children: null };
  const stringResult1 = intl2.string(_modDef3091.F0fkrh);
  const intl3 = util.intl;
  obj10.children = intl3.string(_modDef3123.IN1DaS);
  items3[1] = timestampProducer(CheckpointTextDefault, obj10);
  obj4.children = items3;
  const items4 = [React5(View, obj4), ];
  items4[1] = timestampProducer(View, {
    style: tmp.guilds,
    children: stateFromStores.map((item, index) => {
      ({ guild, numMessagesSent, numVoiceMinutes } = item);
      const obj = { guild, index, numMessagesSent: null, numVoiceMinutes: null };
      if (numMessagesSent == null) {
        numMessagesSent = 0;
      }
      obj.numMessagesSent = numMessagesSent;
      if (numVoiceMinutes == null) {
        numVoiceMinutes = 0;
      }
      obj.numVoiceMinutes = numVoiceMinutes;
      return closure_1_6(closure_1_9, obj, guild.id);
    })
  });
  obj3.children = items4;
  obj2.children = React5(View, obj3);
  return timestampProducer(tmp4, obj2);
});