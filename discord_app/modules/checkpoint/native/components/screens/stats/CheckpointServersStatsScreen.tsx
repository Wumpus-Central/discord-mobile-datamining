// === Module 12984: CheckpointServersStatsScreen ===

// Module 12984 (CheckpointServersStatsScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import Text_Text from "Text/Text" /* 5234 */;
import GuildIcon from "GuildIcon" /* 6883 */;
import CheckpointTextDefault from "CheckpointText" /* 12967 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12969 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 12972 */;
import _modDef12978 from "module_12978" /* 12978 */;
import _modDef12979 from "module_12979" /* 12979 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 12985 */;
import CheckpointGuildStatsDefault from "CheckpointGuildStats" /* 12986 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 12987 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12949 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(6015);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ CHECKPOINT_GUILD_CARD_BACKGROUND, CHECKPOINT_WHITE } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4971);
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
fn(558);
let obj13 = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildCard(arg0) {
  const cResult = c.c(23);
  ({ guild, rank, iconStyle, children } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== rank) {
    const obj2 = { rank, chamferCorner: "bottom-right" };
    const tmp8 = timestampProducer(CheckpointRankTagDefault, obj2);
    cResult[0] = rank;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.guildRankRow) {
    if (cResult[3] === tmp5) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === guild.name) {
      if (cResult[6] === tmp4.guildName) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] === children) {
        if (cResult[9] === tmp4.guildDetails) {
          if (cResult[10] === tmp11) {
            let tmp14 = cResult[11];
          }
          if (cResult[12] === tmp4.guildContent) {
            if (cResult[13] === tmp9) {
              if (cResult[14] === tmp14) {
                let tmp18 = cResult[15];
              }
              if (cResult[16] === guild) {
                if (cResult[17] === iconStyle) {
                  let tmp22 = cResult[18];
                }
                if (cResult[19] === tmp4.guildCard) {
                  if (cResult[20] === tmp18) {
                    if (cResult[21] === tmp22) {
                      let tmp27 = cResult[22];
                    }
                    return tmp27;
                  }
                }
                const obj3 = { style: tmp4.guildCard, children: null };
                const items = [tmp18, tmp22];
                obj3.children = items;
                const tmp30 = React5(View, obj3);
                cResult[19] = tmp4.guildCard;
                cResult[20] = tmp18;
                cResult[21] = tmp22;
                cResult[22] = tmp30;
                tmp27 = tmp30;
              }
              const obj4 = { guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: iconStyle };
              const tmp26 = timestampProducer(GuildIconDefault, obj4);
              cResult[16] = guild;
              cResult[17] = iconStyle;
              cResult[18] = tmp26;
              tmp22 = tmp26;
            }
          }
          const obj5 = { style: tmp4.guildContent, children: null };
          const items1 = [tmp9, tmp14];
          obj5.children = items1;
          const tmp21 = React5(View, obj5);
          cResult[12] = tmp4.guildContent;
          cResult[13] = tmp9;
          cResult[14] = tmp14;
          cResult[15] = tmp21;
          tmp18 = tmp21;
        }
      }
      const obj6 = { style: tmp4.guildDetails, children: null };
      const items2 = [tmp11, children];
      obj6.children = items2;
      const tmp17 = React5(View, obj6);
      cResult[8] = children;
      cResult[9] = tmp4.guildDetails;
      cResult[10] = tmp11;
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
    const obj7 = { variant: "heading-lg/medium", style: tmp4.guildName, lineClamp: 1, ellipsizeMode: "tail", children: guild.name };
    const tmp13 = timestampProducer(Text_Text.Text, obj7);
    cResult[5] = guild.name;
    cResult[6] = tmp4.guildName;
    cResult[7] = tmp13;
    tmp11 = tmp13;
  }
  const tmp10 = timestampProducer(View, { style: tmp4.guildRankRow, children: tmp5 });
  cResult[2] = tmp4.guildRankRow;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj8 = { style: tmp4.guildRankRow, children: tmp5 };
}) : (function GuildCard(guild) {
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
});
size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointServersStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointServersStatsScreen() {
  const cResult = require("c").c(57);
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function o() {
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
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp5, tmp6);
  ({ guilds: topGuildIcon, globalGuilds } = stateFromStoresObject);
  if (null != topGuildIcon) {
    if (0 !== topGuildIcon.length) {
      const _Symbol6 = Symbol;
      ({ container, header, heading, title } = tmp4);
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
        const tmp12 = closure_6(tmp(9646).ServerIcon, obj2);
        cResult[26] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[26];
      }
      const _Symbol = Symbol;
      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1128).intl;
        const toLocaleUpperCaseResult = intl.string(_modDef3088.Mb5E6r).toLocaleUpperCase();
        cResult[27] = toLocaleUpperCaseResult;
        let tmp13 = toLocaleUpperCaseResult;
        const stringResult = intl.string(_modDef3088.Mb5E6r);
      } else {
        tmp13 = cResult[27];
      }
      if (cResult[28] === tmp4.titleText) {
        if (cResult[29] === tmp13) {
          let tmp16 = cResult[30];
        }
        if (cResult[31] === tmp4.title) {
          if (cResult[32] === tmp16) {
            let tmp20 = cResult[33];
          }
          const _Symbol2 = Symbol;
          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { children: null };
            const intl2 = tmp(1128).intl;
            const tmp26 = CheckpointDisplayTextDefault;
            obj3.children = intl2.string(_modDef3056.F0fkrh).toLocaleUpperCase();
            const tmp27 = closure_6(tmp26, obj3);
            cResult[34] = tmp27;
            let tmp23 = tmp27;
            const stringResult1 = intl2.string(_modDef3056.F0fkrh);
          } else {
            tmp23 = cResult[34];
          }
          if (cResult[35] === tmp4.heading) {
            if (cResult[36] === tmp20) {
              if (cResult[37] === tmp23) {
                let tmp28 = cResult[38];
              }
              const _Symbol3 = Symbol;
              if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = { variant: "heading-lg/medium", children: null };
                const intl3 = tmp(1128).intl;
                obj4.children = intl3.string(_modDef3088.IN1DaS);
                const tmp36 = closure_6(CheckpointTextDefault, obj4);
                cResult[39] = tmp36;
                let tmp32 = tmp36;
              } else {
                tmp32 = cResult[39];
              }
              if (cResult[40] === tmp4.header) {
                if (cResult[41] === tmp28) {
                  let tmp37 = cResult[42];
                }
                if (cResult[43] === topGuildIcon) {
                  if (cResult[44] === tmp4.guildIcon) {
                    if (cResult[45] === tmp4.topGuildIcon) {
                      if (cResult[50] === tmp4.guilds) {
                        if (cResult[51] === tmp42) {
                          let tmp46 = cResult[52];
                        }
                        if (cResult[53] === tmp4.container) {
                          if (cResult[54] === tmp37) {
                            if (cResult[55] === tmp46) {
                              let tmp49 = cResult[56];
                            }
                            return tmp49;
                          }
                        }
                        class B {
                          constructor(arg0, arg1) {
                            ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
                            tmp = 0 === arg1;
                            tmp2 = jsx;
                            obj = { guild, rank: arg1 + 1, iconStyle: null, children: null };
                            tmp4 = closure_0;
                            obj.iconStyle = tmp ? tmp4.topGuildIcon : tmp4.guildIcon;
                            tmp3 = GuildCard;
                            if (tmp) {
                              tmp5 = closure_1;
                              tmp6 = closure_2;
                              tmp8 = null;
                              tmp7 = closure_1(closure_2[20]);
                              if (numMessagesSent == null) {
                                numMessagesSent = 0;
                              }
                              obj1 = { numMessagesSent: null, numVoiceMinutes: null };
                              obj1.numMessagesSent = numMessagesSent;
                              if (numVoiceMinutes == null) {
                                numVoiceMinutes = 0;
                              }
                              obj1.numVoiceMinutes = numVoiceMinutes;
                              tmp = tmp2(tmp7, obj1);
                            }
                            obj.children = tmp;
                            return tmp2(tmp3, obj, guild.id);
                          }
                        }
                        const obj5 = { children: null };
                        const obj6 = { style: container, children: null };
                        const items1 = [tmp37, tmp46];
                        obj6.children = items1;
                        obj5.children = closure_7(View, obj6);
                        const tmp54 = closure_6(CheckpointScreenDefault, obj5);
                        cResult[53] = tmp4.container;
                        cResult[54] = tmp37;
                        cResult[55] = tmp46;
                        cResult[56] = tmp54;
                        tmp49 = tmp54;
                      }
                      class B {
                        constructor(arg0, arg1) {
                          ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
                          tmp = 0 === arg1;
                          tmp2 = jsx;
                          obj = { guild, rank: arg1 + 1, iconStyle: null, children: null };
                          tmp4 = closure_0;
                          obj.iconStyle = tmp ? tmp4.topGuildIcon : tmp4.guildIcon;
                          tmp3 = GuildCard;
                          if (tmp) {
                            tmp5 = closure_1;
                            tmp6 = closure_2;
                            tmp8 = null;
                            tmp7 = closure_1(closure_2[20]);
                            if (numMessagesSent == null) {
                              numMessagesSent = 0;
                            }
                            obj1 = { numMessagesSent: null, numVoiceMinutes: null };
                            obj1.numMessagesSent = numMessagesSent;
                            if (numVoiceMinutes == null) {
                              numVoiceMinutes = 0;
                            }
                            obj1.numVoiceMinutes = numVoiceMinutes;
                            tmp = tmp2(tmp7, obj1);
                          }
                          obj.children = tmp;
                          return tmp2(tmp3, obj, guild.id);
                        }
                      }
                      const obj7 = { style: tmp41, children: cResult[46] };
                      const tmp48 = closure_6(View, obj7);
                      cResult[50] = tmp4.guilds;
                      cResult[51] = cResult[46];
                      cResult[52] = tmp48;
                      tmp46 = tmp48;
                    }
                  }
                }
                if (cResult[47] === tmp4.guildIcon) {
                  if (cResult[48] === tmp4.topGuildIcon) {
                    let tmp43 = cResult[49];
                  }
                  const mapped = topGuildIcon.map(tmp43);
                  class B {
                    constructor(arg0, arg1) {
                      ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
                      tmp = 0 === arg1;
                      tmp2 = jsx;
                      obj = { guild, rank: arg1 + 1, iconStyle: null, children: null };
                      tmp4 = closure_0;
                      obj.iconStyle = tmp ? tmp4.topGuildIcon : tmp4.guildIcon;
                      tmp3 = GuildCard;
                      if (tmp) {
                        tmp5 = closure_1;
                        tmp6 = closure_2;
                        tmp8 = null;
                        tmp7 = closure_1(closure_2[20]);
                        if (numMessagesSent == null) {
                          numMessagesSent = 0;
                        }
                        obj1 = { numMessagesSent: null, numVoiceMinutes: null };
                        obj1.numMessagesSent = numMessagesSent;
                        if (numVoiceMinutes == null) {
                          numVoiceMinutes = 0;
                        }
                        obj1.numVoiceMinutes = numVoiceMinutes;
                        tmp = tmp2(tmp7, obj1);
                      }
                      obj.children = tmp;
                      return tmp2(tmp3, obj, guild.id);
                    }
                  }
                  ({ guildIcon: tmp3[44], topGuildIcon } = tmp4);
                  cResult[45] = topGuildIcon;
                  cResult[46] = mapped;
                }
                class B {
                  constructor(arg0, arg1) {
                    ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
                    tmp = 0 === arg1;
                    tmp2 = jsx;
                    obj = { guild, rank: arg1 + 1, iconStyle: null, children: null };
                    tmp4 = closure_0;
                    obj.iconStyle = tmp ? tmp4.topGuildIcon : tmp4.guildIcon;
                    tmp3 = GuildCard;
                    if (tmp) {
                      tmp5 = closure_1;
                      tmp6 = closure_2;
                      tmp8 = null;
                      tmp7 = closure_1(closure_2[20]);
                      if (numMessagesSent == null) {
                        numMessagesSent = 0;
                      }
                      obj1 = { numMessagesSent: null, numVoiceMinutes: null };
                      obj1.numMessagesSent = numMessagesSent;
                      if (numVoiceMinutes == null) {
                        numVoiceMinutes = 0;
                      }
                      obj1.numVoiceMinutes = numVoiceMinutes;
                      tmp = tmp2(tmp7, obj1);
                    }
                    obj.children = tmp;
                    return tmp2(tmp3, obj, guild.id);
                  }
                }
                cResult[47] = tmp4.guildIcon;
                cResult[48] = tmp4.topGuildIcon;
                cResult[49] = B;
                tmp43 = B;
              }
              const obj8 = { style: header, children: null };
              const items2 = [tmp28, tmp32];
              obj8.children = items2;
              const tmp40 = closure_7(View, obj8);
              cResult[40] = tmp4.header;
              cResult[41] = tmp28;
              cResult[42] = tmp40;
              tmp37 = tmp40;
            }
          }
          const obj9 = { style: heading, children: null };
          const items3 = [tmp20, tmp23];
          obj9.children = items3;
          const tmp31 = closure_7(View, obj9);
          cResult[35] = tmp4.heading;
          cResult[36] = tmp20;
          cResult[37] = tmp23;
          cResult[38] = tmp31;
          tmp28 = tmp31;
        }
        const obj10 = { style: title, children: null };
        const items4 = [tmp9, tmp16];
        obj10.children = items4;
        const tmp22 = closure_7(View, obj10);
        cResult[31] = tmp4.title;
        cResult[32] = tmp16;
        cResult[33] = tmp22;
        tmp20 = tmp22;
      }
      const obj11 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: tmp13 };
      const tmp19 = closure_6(CheckpointTextDefault, obj11);
      cResult[28] = tmp4.titleText;
      cResult[29] = tmp13;
      cResult[30] = tmp19;
      tmp16 = tmp19;
    }
  }
  if (cResult[2] === tmp4.container) {
    if (cResult[3] === tmp4.globalContainer) {
      let tmp55 = cResult[4];
    }
    if (cResult[5] !== tmp4.globe) {
      const obj12 = { animatedUri: null, staticUri: null, style: null };
      class B {
        constructor(arg0, arg1) {
          ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
          tmp = 0 === arg1;
          tmp2 = jsx;
          obj = { guild, rank: arg1 + 1, iconStyle: null, children: null };
          tmp4 = closure_0;
          obj.iconStyle = tmp ? tmp4.topGuildIcon : tmp4.guildIcon;
          tmp3 = GuildCard;
          if (tmp) {
            tmp5 = closure_1;
            tmp6 = closure_2;
            tmp8 = null;
            tmp7 = closure_1(closure_2[20]);
            if (numMessagesSent == null) {
              numMessagesSent = 0;
            }
            obj1 = { numMessagesSent: null, numVoiceMinutes: null };
            obj1.numMessagesSent = numMessagesSent;
            if (numVoiceMinutes == null) {
              numVoiceMinutes = 0;
            }
            obj1.numVoiceMinutes = numVoiceMinutes;
            tmp = tmp2(tmp7, obj1);
          }
          obj.children = tmp;
          return tmp2(tmp3, obj, guild.id);
        }
      }
      obj12.animatedUri = _modDef12978;
      obj12.staticUri = _modDef12979;
      obj12.style = tmp4.globe;
      const tmp60 = closure_6(tmp59, obj12);
      cResult[5] = tmp4.globe;
      cResult[6] = tmp60;
      let tmp56 = tmp60;
    } else {
      tmp56 = cResult[6];
    }
    const _Symbol4 = Symbol;
    class B {
      constructor(arg0, arg1) {
        ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
        tmp = 0 === arg1;
        tmp2 = jsx;
        obj = { guild, rank: arg1 + 1, iconStyle: null, children: null };
        tmp4 = closure_0;
        obj.iconStyle = tmp ? tmp4.topGuildIcon : tmp4.guildIcon;
        tmp3 = GuildCard;
        if (tmp) {
          tmp5 = closure_1;
          tmp6 = closure_2;
          tmp8 = null;
          tmp7 = closure_1(closure_2[20]);
          if (numMessagesSent == null) {
            numMessagesSent = 0;
          }
          obj1 = { numMessagesSent: null, numVoiceMinutes: null };
          obj1.numMessagesSent = numMessagesSent;
          if (numVoiceMinutes == null) {
            numVoiceMinutes = 0;
          }
          obj1.numVoiceMinutes = numVoiceMinutes;
          tmp = tmp2(tmp7, obj1);
        }
        obj.children = tmp;
        return tmp2(tmp3, obj, guild.id);
      }
    }
    if (tmp61 === Symbol.for("react.memo_cache_sentinel")) {
      const obj13 = { children: null };
      class B {
        constructor(arg0, arg1) {
          ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
          tmp = 0 === arg1;
          tmp2 = jsx;
          obj = { guild, rank: arg1 + 1, iconStyle: null, children: null };
          tmp4 = closure_0;
          obj.iconStyle = tmp ? tmp4.topGuildIcon : tmp4.guildIcon;
          tmp3 = GuildCard;
          if (tmp) {
            tmp5 = closure_1;
            tmp6 = closure_2;
            tmp8 = null;
            tmp7 = closure_1(closure_2[20]);
            if (numMessagesSent == null) {
              numMessagesSent = 0;
            }
            obj1 = { numMessagesSent: null, numVoiceMinutes: null };
            obj1.numMessagesSent = numMessagesSent;
            if (numVoiceMinutes == null) {
              numVoiceMinutes = 0;
            }
            obj1.numVoiceMinutes = numVoiceMinutes;
            tmp = tmp2(tmp7, obj1);
          }
          obj.children = tmp;
          return tmp2(tmp3, obj, guild.id);
        }
      }
      const intl4 = tmp(1128).intl;
      obj13.children = intl4.string(_modDef3056.F0fkrh).toLocaleUpperCase();
      const tmp66 = closure_6(tmp65, obj13);
      cResult[7] = tmp66;
      let tmp62 = tmp66;
      const stringResult2 = intl4.string(_modDef3056.F0fkrh);
    } else {
      tmp62 = cResult[7];
    }
    if (cResult[8] === tmp4.globalHeading) {
      if (cResult[9] === tmp56) {
        if (cResult[10] === tmp62) {
          let tmp67 = cResult[11];
        }
        const _Symbol5 = Symbol;
        class B {
          constructor(arg0, arg1) {
            ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
            tmp = 0 === arg1;
            tmp2 = jsx;
            obj = { guild, rank: arg1 + 1, iconStyle: null, children: null };
            tmp4 = closure_0;
            obj.iconStyle = tmp ? tmp4.topGuildIcon : tmp4.guildIcon;
            tmp3 = GuildCard;
            if (tmp) {
              tmp5 = closure_1;
              tmp6 = closure_2;
              tmp8 = null;
              tmp7 = closure_1(closure_2[20]);
              if (numMessagesSent == null) {
                numMessagesSent = 0;
              }
              obj1 = { numMessagesSent: null, numVoiceMinutes: null };
              obj1.numMessagesSent = numMessagesSent;
              if (numVoiceMinutes == null) {
                numVoiceMinutes = 0;
              }
              obj1.numVoiceMinutes = numVoiceMinutes;
              tmp = tmp2(tmp7, obj1);
            }
            obj.children = tmp;
            return tmp2(tmp3, obj, guild.id);
          }
        }
        if (cResult[13] === tmp4.header) {
          if (cResult[14] === tmp67) {
            let tmp73 = cResult[15];
          }
          if (cResult[16] === globalGuilds) {
            if (cResult[17] === tmp4.globalGuildIcon) {
              let tmp77 = cResult[18];
            }
            if (cResult[19] === tmp4.globalGuilds) {
              if (cResult[20] === tmp77) {
                let tmp79 = cResult[21];
              }
              if (cResult[22] === tmp55) {
                if (cResult[23] === tmp73) {
                  if (cResult[24] === tmp79) {
                    let tmp82 = cResult[25];
                  }
                  return tmp82;
                }
              }
              class B {
                constructor(arg0, arg1) {
                  ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
                  tmp = 0 === arg1;
                  tmp2 = jsx;
                  obj = { guild, rank: arg1 + 1, iconStyle: null, children: null };
                  tmp4 = closure_0;
                  obj.iconStyle = tmp ? tmp4.topGuildIcon : tmp4.guildIcon;
                  tmp3 = GuildCard;
                  if (tmp) {
                    tmp5 = closure_1;
                    tmp6 = closure_2;
                    tmp8 = null;
                    tmp7 = closure_1(closure_2[20]);
                    if (numMessagesSent == null) {
                      numMessagesSent = 0;
                    }
                    obj1 = { numMessagesSent: null, numVoiceMinutes: null };
                    obj1.numMessagesSent = numMessagesSent;
                    if (numVoiceMinutes == null) {
                      numVoiceMinutes = 0;
                    }
                    obj1.numVoiceMinutes = numVoiceMinutes;
                    tmp = tmp2(tmp7, obj1);
                  }
                  obj.children = tmp;
                  return tmp2(tmp3, obj, guild.id);
                }
              }
              const obj14 = { children: null };
              const obj15 = { style: tmp55, children: null };
              const items5 = [tmp73, tmp79];
              obj15.children = items5;
              obj14.children = closure_7(View, obj15);
              const tmp87 = closure_6(CheckpointScreenDefault, obj14);
              cResult[22] = tmp55;
              cResult[23] = tmp73;
              cResult[24] = tmp79;
              cResult[25] = tmp87;
              tmp82 = tmp87;
            }
            class B {
              constructor(arg0, arg1) {
                ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
                tmp = 0 === arg1;
                tmp2 = jsx;
                obj = { guild, rank: arg1 + 1, iconStyle: null, children: null };
                tmp4 = closure_0;
                obj.iconStyle = tmp ? tmp4.topGuildIcon : tmp4.guildIcon;
                tmp3 = GuildCard;
                if (tmp) {
                  tmp5 = closure_1;
                  tmp6 = closure_2;
                  tmp8 = null;
                  tmp7 = closure_1(closure_2[20]);
                  if (numMessagesSent == null) {
                    numMessagesSent = 0;
                  }
                  obj1 = { numMessagesSent: null, numVoiceMinutes: null };
                  obj1.numMessagesSent = numMessagesSent;
                  if (numVoiceMinutes == null) {
                    numVoiceMinutes = 0;
                  }
                  obj1.numVoiceMinutes = numVoiceMinutes;
                  tmp = tmp2(tmp7, obj1);
                }
                obj.children = tmp;
                return tmp2(tmp3, obj, guild.id);
              }
            }
            const obj16 = { style: tmp4.globalGuilds, children: tmp77 };
            const tmp81 = closure_6(View, obj16);
            cResult[19] = tmp4.globalGuilds;
            cResult[20] = tmp77;
            cResult[21] = tmp81;
            tmp79 = tmp81;
          }
          class B {
            constructor(arg0, arg1) {
              ({ guild, numMessagesSent, numVoiceMinutes } = arg0);
              tmp = 0 === arg1;
              tmp2 = jsx;
              obj = { guild, rank: arg1 + 1, iconStyle: null, children: null };
              tmp4 = closure_0;
              obj.iconStyle = tmp ? tmp4.topGuildIcon : tmp4.guildIcon;
              tmp3 = GuildCard;
              if (tmp) {
                tmp5 = closure_1;
                tmp6 = closure_2;
                tmp8 = null;
                tmp7 = closure_1(closure_2[20]);
                if (numMessagesSent == null) {
                  numMessagesSent = 0;
                }
                obj1 = { numMessagesSent: null, numVoiceMinutes: null };
                obj1.numMessagesSent = numMessagesSent;
                if (numVoiceMinutes == null) {
                  numVoiceMinutes = 0;
                }
                obj1.numVoiceMinutes = numVoiceMinutes;
                tmp = tmp2(tmp7, obj1);
              }
              obj.children = tmp;
              return tmp2(tmp3, obj, guild.id);
            }
          }
          cResult[16] = globalGuilds;
          cResult[17] = tmp4.globalGuildIcon;
          cResult[18] = undefined;
          tmp77 = tmp78;
        }
        const obj17 = { style: tmp4.header, children: null };
        const items6 = [tmp67, tmp72];
        obj17.children = items6;
        const tmp76 = closure_7(View, obj17);
        cResult[13] = tmp4.header;
        cResult[14] = tmp67;
        cResult[15] = tmp76;
        tmp73 = tmp76;
      }
    }
    const obj18 = { style: tmp4.globalHeading, children: null };
    const items7 = [tmp56, tmp62];
    obj18.children = items7;
    const tmp70 = closure_7(View, obj18);
    cResult[8] = tmp4.globalHeading;
    cResult[9] = tmp56;
    cResult[10] = tmp62;
    cResult[11] = tmp70;
    tmp67 = tmp70;
  }
  const items8 = [, ];
  ({ container: arr6[0], globalContainer: arr6[1] } = tmp4);
  cResult[2] = tmp4.container;
  cResult[3] = tmp4.globalContainer;
  cResult[4] = items8;
  tmp55 = items8;
  const tmpResult = require("initialize");
}) : (function CheckpointServersStatsScreen() {
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
      const items1 = [closure_6(tmp2(9646).ServerIcon, obj7), ];
      const obj8 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
      const tmp16 = CheckpointScreenDefault;
      const intl3 = tmp2(1128).intl;
      const tmp20 = CheckpointTextDefault;
      obj8.children = intl3.string(_modDef3088.Mb5E6r).toLocaleUpperCase();
      items1[1] = closure_6(tmp20, obj8);
      obj6.children = items1;
      const items2 = [closure_7(View, obj6), ];
      const obj9 = { children: null };
      const stringResult = intl3.string(_modDef3088.Mb5E6r);
      const intl4 = tmp2(1128).intl;
      const tmp21 = CheckpointDisplayTextDefault;
      obj9.children = intl4.string(_modDef3056.F0fkrh).toLocaleUpperCase();
      items2[1] = closure_6(tmp21, obj9);
      obj5.children = items2;
      const items3 = [closure_7(View, obj5), ];
      const obj10 = { variant: "heading-lg/medium", children: null };
      const stringResult1 = intl4.string(_modDef3056.F0fkrh);
      const intl5 = tmp2(1128).intl;
      obj10.children = intl5.string(_modDef3088.IN1DaS);
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
              return timestampProducer(closure_9, obj, guild.id);
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
  obj15.animatedUri = _modDef12978;
  obj15.staticUri = _modDef12979;
  obj15.style = tmp.globe;
  const items6 = [closure_6(CheckpointApngPlayerDefault, obj15), ];
  const obj16 = { children: null };
  const intl = tmp2(1128).intl;
  const tmp10 = CheckpointDisplayTextDefault;
  obj16.children = intl.string(_modDef3056.F0fkrh).toLocaleUpperCase();
  items6[1] = closure_6(tmp10, obj16);
  obj14.children = items6;
  const items7 = [closure_7(View, obj14), ];
  const obj17 = { variant: "heading-lg/medium", children: null };
  const stringResult2 = intl.string(_modDef3056.F0fkrh);
  const intl2 = tmp2(1128).intl;
  obj17.children = intl2.string(_modDef3088.bhnqop);
  items7[1] = closure_6(CheckpointTextDefault, obj17);
  obj13.children = items7;
  const items8 = [closure_7(View, obj13), ];
  const obj18 = { style: tmp.globalGuilds, children: null };
  let mapped;
  if (globalGuilds != null) {
    mapped = globalGuilds.map((guild, index) => timestampProducer(closure_9, { guild, rank: index + 1, iconStyle: globalGuildIcon.globalGuildIcon }, guild.id));
  }
  const obj19 = { children: null };
  obj18.children = mapped;
  items8[1] = closure_6(View, obj18);
  obj12.children = items8;
  obj19.children = closure_7(View, obj12);
  tmp5Result = closure_6(tmp6, obj19);
});