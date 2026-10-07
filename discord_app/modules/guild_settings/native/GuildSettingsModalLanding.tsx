// === Module 17702: GuildSettingsModalLanding ===

// Module 17702 (GuildSettingsModalLanding)
import util from "util" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import ClipboardListIcon from "ClipboardListIcon" /* 5935 */;
import TableRow2 from "TableRow" /* 6000 */;
import TableRowGroup2 from "TableRowGroup" /* 6081 */;
import HammerIcon from "HammerIcon" /* 8985 */;
import RobotIcon from "RobotIcon" /* 8987 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9267 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import _modDef13077 from "module_13077" /* 13077 */;
import ModerationIcon from "ModerationIcon" /* 17706 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import UserStore from "UserStore" /* 1377 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 16108 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9283 */;

require = fn;
const Constants = fn(1085);
({ GuildFeatures: closure_11, GuildSettingsSections: closure_12, ChannelTypes: map1, AnalyticEvents: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const createStyles = fn(4896);
let closure_18 = createStyles.createStyles({ container: { flex: 1 }, containerContent: { paddingTop: 16 } });
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let TableRowGroup = guild;
  let tmp = dependencyMap;
  const cResult = guild(576).c(38);
  guild = guild.guild;
  ({ isGuildAdmin, canManageGuild, canManageChannels, canManageWebhooks, canUnlinkChannelLobbies, categories, pushScreen } = guild);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = TableRowGroup(1126).intl;
    const stringResult = intl.string(TableRowGroup(1126).t["/dp6yY"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { IconComponent: TableRowGroup(4818).CircleInformationIcon };
    const tmp7 = closure_15(TableRowGroup(6000).TableRow.Icon, obj2);
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== pushScreen) {
    const obj3 = {
      label: first,
      arrow: true,
      icon: tmp5,
      onPress() {
          return pushScreen(constants2.OVERVIEW);
        }
    };
    const tmp10 = closure_15(TableRowGroup(6000).TableRow, obj3, "overview");
    cResult[2] = pushScreen;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === canManageChannels) {
    if (cResult[5] === canManageGuild) {
      if (cResult[6] === canManageWebhooks) {
        if (cResult[7] === canUnlinkChannelLobbies) {
          if (cResult[8] === categories) {
            if (cResult[9] === guild) {
              if (cResult[10] === isGuildAdmin) {
                if (cResult[11] === pushScreen) {
                  if (cResult[12] === tmp8) {
                    let arr = cResult[13];
                  }
                  if (0 === arr.length) {
                    return null;
                  } else {
                    const _Symbol9 = Symbol;
                    if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl7 = TableRowGroup(1126).intl;
                      const stringResult1 = intl7.string(TableRowGroup(1126).t["3D5yo/"]);
                      cResult[35] = stringResult1;
                      let tmp55 = stringResult1;
                    } else {
                      tmp55 = cResult[35];
                    }
                    if (cResult[36] !== arr) {
                      TableRowGroup = TableRowGroup(6081).TableRowGroup;
                      const obj4 = { title: tmp55, hasIcons: true, children: arr };
                      tmp = closure_15(TableRowGroup, obj4);
                      cResult[36] = arr;
                      cResult[37] = tmp;
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
  const items = [tmp8];
  const currentUser = UserStore.getCurrentUser();
  if (!canManageChannels) {
    if (null != currentUser) {
      PermissionUtilsAll;
    }
    if (!canManageGuild) {
      if (!canManageWebhooks) {
        if (!canUnlinkChannelLobbies) {
          if (!TableRowGroupResult.canUseMobileServerTagSettings(guild.id)) {
            if (isGuildAdmin) {
              if (TableRowGroupResult1.canSeeVanityUrlSettings(guild)) {
                const _Symbol5 = Symbol;
                if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl5 = TableRowGroup(1126).intl;
                  const stringResult2 = intl5.string(TableRowGroup(1126).t["5XZKy/"]);
                  cResult[27] = stringResult2;
                  let tmp36 = stringResult2;
                } else {
                  tmp36 = cResult[27];
                }
                const _Symbol6 = Symbol;
                if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { IconComponent: TableRowGroup(4845).LinkIcon };
                  const tmp40 = closure_15(TableRowGroup(6000).TableRow.Icon, obj5);
                  cResult[28] = tmp40;
                  let arr2 = tmp40;
                } else {
                  arr2 = cResult[28];
                }
                if (cResult[29] !== pushScreen) {
                  const obj6 = {
                    label: tmp36,
                    arrow: true,
                    icon: arr2,
                    onPress() {
                                      return pushScreen(constants2.VANITY_URL);
                                    }
                  };
                  const tmp43 = closure_15(TableRowGroup(6000).TableRow, obj6, "vanity");
                  cResult[29] = pushScreen;
                  cResult[30] = tmp43;
                  let tmp41 = tmp43;
                } else {
                  tmp41 = cResult[30];
                }
                arr2 = items.push(tmp41);
              }
              TableRowGroupResult1 = TableRowGroup(17705);
            }
            if (!canManageGuild) {
              cResult[4] = canManageChannels;
              cResult[5] = canManageGuild;
              cResult[6] = canManageWebhooks;
              cResult[7] = canUnlinkChannelLobbies;
              cResult[8] = categories;
              cResult[9] = guild;
              cResult[10] = isGuildAdmin;
              cResult[11] = pushScreen;
              cResult[12] = tmp8;
              cResult[13] = items;
              arr = items;
            } else {
              const _Symbol7 = Symbol;
              if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                const intl6 = TableRowGroup(1126).intl;
                const stringResult3 = intl6.string(TableRowGroup(1126).t.KUw7Ss);
                cResult[31] = stringResult3;
                let tmp44 = stringResult3;
              } else {
                tmp44 = cResult[31];
              }
              const _Symbol8 = Symbol;
              if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                const obj7 = { source: pushScreen(13077) };
                const tmp49 = closure_15(TableRowGroup(6000).TableRow.Icon, obj7);
                cResult[32] = tmp49;
                let tmp46 = tmp49;
              } else {
                tmp46 = cResult[32];
              }
              if (cResult[33] !== pushScreen) {
                const obj8 = {
                  label: tmp44,
                  arrow: true,
                  icon: tmp46,
                  onPress() {
                                  return pushScreen(constants2.GUILD_TEMPLATES);
                                }
                };
                const tmp52 = closure_15(TableRowGroup(6000).TableRow, obj8, "guild-template");
                cResult[33] = pushScreen;
                cResult[34] = tmp52;
                let tmp50 = tmp52;
              } else {
                tmp50 = cResult[34];
              }
              items.push(tmp50);
            }
          } else {
            const _Symbol3 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = TableRowGroup(1126).intl;
              const stringResult4 = intl4.string(TableRowGroup(1126).t["2QmKZ2"]);
              cResult[23] = stringResult4;
              let tmp28 = stringResult4;
            } else {
              tmp28 = cResult[23];
            }
            const _Symbol4 = Symbol;
            if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
              const obj9 = { IconComponent: TableRowGroup(8557).TagIcon };
              const tmp32 = closure_15(TableRowGroup(6000).TableRow.Icon, obj9);
              cResult[24] = tmp32;
              let arr8 = tmp32;
            } else {
              arr8 = cResult[24];
            }
            if (cResult[25] !== pushScreen) {
              const obj10 = {
                label: tmp28,
                arrow: true,
                icon: arr8,
                onPress() {
                              return pushScreen(constants2.TAG);
                            }
              };
              const tmp35 = closure_15(TableRowGroup(6000).TableRow, obj10, "server-tag");
              cResult[25] = pushScreen;
              cResult[26] = tmp35;
              let tmp33 = tmp35;
            } else {
              tmp33 = cResult[26];
            }
            arr8 = items.push(tmp33);
          }
          TableRowGroupResult = TableRowGroup(9285);
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = TableRowGroup(1126).intl;
      const stringResult5 = intl3.string(TableRowGroup(1126).t.CIsNZw);
      cResult[19] = stringResult5;
      let tmp20 = stringResult5;
    } else {
      tmp20 = cResult[19];
    }
    const _Symbol2 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      const obj11 = { IconComponent: TableRowGroup(14778).PuzzlePieceIcon };
      const tmp24 = closure_15(TableRowGroup(6000).TableRow.Icon, obj11);
      cResult[20] = tmp24;
      let arr9 = tmp24;
    } else {
      arr9 = cResult[20];
    }
    if (cResult[21] !== pushScreen) {
      const obj12 = {
        label: tmp20,
        arrow: true,
        icon: arr9,
        onPress() {
              return pushScreen(constants2.INTEGRATIONS);
            }
      };
      const tmp27 = closure_15(TableRowGroup(6000).TableRow, obj12, "integrations");
      cResult[21] = pushScreen;
      cResult[22] = tmp27;
      let tmp25 = tmp27;
    } else {
      tmp25 = cResult[22];
    }
    arr9 = items.push(tmp25);
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = TableRowGroup(1126).intl;
    const stringResult6 = intl2.string(TableRowGroup(1126).t.OGiMXJ);
    cResult[14] = stringResult6;
    let tmp13 = stringResult6;
  } else {
    tmp13 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const obj13 = { IconComponent: TableRowGroup(17703).ChannelListIcon };
    const tmp17 = closure_15(TableRowGroup(6000).TableRow.Icon, obj13);
    cResult[15] = tmp17;
    let arr10 = tmp17;
  } else {
    arr10 = cResult[15];
  }
  if (cResult[16] === guild.id) {
    if (cResult[17] === pushScreen) {
      let tmp18 = cResult[18];
    }
    arr10 = items.push(tmp18);
  }
  const tmp19 = closure_15(TableRowGroup(6000).TableRow, {
    label: tmp13,
    arrow: true,
    icon: arr10,
    onPress() {
      guild = GuildSettingsModalChannelsStore.initGuild(guild.id);
      pushScreen(constants2.CHANNELS);
    }
  }, "channels");
  cResult[16] = guild.id;
  cResult[17] = pushScreen;
  cResult[18] = tmp19;
  tmp18 = tmp19;
  const obj = guild(576);
  const obj14 = {
    label: tmp13,
    arrow: true,
    icon: arr10,
    onPress() {
      guild = GuildSettingsModalChannelsStore.initGuild(guild.id);
      pushScreen(constants2.CHANNELS);
    }
  };
}) : ((guild) => {
  guild = guild.guild;
  ({ isGuildAdmin, canManageGuild, canManageChannels, pushScreen: importDefault } = guild);
  ({ canManageWebhooks, canUnlinkChannelLobbies, categories } = guild);
  const obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl = guild(1126).intl;
  obj.label = intl.string(guild(1126).t["/dp6yY"]);
  obj.icon = closure_15(guild(6000).TableRow.Icon, { IconComponent: guild(4818).CircleInformationIcon });
  obj.onPress = function onPress() {
    return importDefault(constants2.OVERVIEW);
  };
  const items = [closure_15(guild(6000).TableRow, obj, "overview")];
  const currentUser = UserStore.getCurrentUser();
  if (!canManageChannels) {
    let canManageACategoryResult = null != currentUser;
    if (canManageACategoryResult) {
      canManageACategoryResult = PermissionUtilsAll.canManageACategory(currentUser, guild, categories);
    }
    canManageChannels = canManageACategoryResult;
  }
  if (canManageChannels) {
    const obj4 = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = tmp2(1126).intl;
    obj4.label = intl2.string(tmp2(1126).t.OGiMXJ);
    const obj5 = { IconComponent: tmp2(17703).ChannelListIcon };
    obj4.icon = closure_15(tmp2(6000).TableRow.Icon, obj5);
    obj4.onPress = function onPress() {
      guild = GuildSettingsModalChannelsStore.initGuild(guild.id);
      importDefault(constants2.CHANNELS);
    };
    items.push(closure_15(tmp2(6000).TableRow, obj4, "channels"));
  }
  let tmp9 = canManageGuild;
  if (!canManageGuild) {
    tmp9 = canManageWebhooks;
  }
  if (!tmp9) {
    tmp9 = canUnlinkChannelLobbies;
  }
  if (tmp9) {
    const obj6 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = tmp2(1126).intl;
    obj6.label = intl3.string(tmp2(1126).t.CIsNZw);
    const obj7 = { IconComponent: tmp2(14778).PuzzlePieceIcon };
    obj6.icon = closure_15(tmp2(6000).TableRow.Icon, obj7);
    obj6.onPress = function onPress() {
      return importDefault(constants2.INTEGRATIONS);
    };
    items.push(closure_15(tmp2(6000).TableRow, obj6, "integrations"));
  }
  const obj2 = { IconComponent: guild(4818).CircleInformationIcon };
  if (tmp2Result.canUseMobileServerTagSettings(guild.id)) {
    const obj8 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = tmp2(1126).intl;
    obj8.label = intl4.string(tmp2(1126).t["2QmKZ2"]);
    const obj9 = { IconComponent: tmp2(8557).TagIcon };
    obj8.icon = closure_15(tmp2(6000).TableRow.Icon, obj9);
    obj8.onPress = function onPress() {
      return importDefault(constants2.TAG);
    };
    items.push(closure_15(tmp2(6000).TableRow, obj8, "server-tag"));
  }
  if (isGuildAdmin) {
    isGuildAdmin = tmp2(17705).canSeeVanityUrlSettings(guild);
    const tmp2Result2 = tmp2(17705);
  }
  if (isGuildAdmin) {
    const obj10 = { label: null, arrow: true, icon: null, onPress: null };
    const intl5 = tmp2(1126).intl;
    obj10.label = intl5.string(tmp2(1126).t["5XZKy/"]);
    const obj11 = { IconComponent: tmp2(4845).LinkIcon };
    obj10.icon = closure_15(tmp2(6000).TableRow.Icon, obj11);
    obj10.onPress = function onPress() {
      return importDefault(constants2.VANITY_URL);
    };
    items.push(closure_15(tmp2(6000).TableRow, obj10, "vanity"));
  }
  if (canManageGuild) {
    const obj12 = { label: null, arrow: true, icon: null, onPress: null };
    const intl6 = tmp2(1126).intl;
    obj12.label = intl6.string(tmp2(1126).t.KUw7Ss);
    const obj13 = { source: _modDef13077 };
    obj12.icon = closure_15(tmp2(6000).TableRow.Icon, obj13);
    obj12.onPress = function onPress() {
      return importDefault(constants2.GUILD_TEMPLATES);
    };
    items.push(closure_15(tmp2(6000).TableRow, obj12, "guild-template"));
  }
  let tmpResult = null;
  if (0 !== items.length) {
    const obj14 = { title: null, hasIcons: true, children: null };
    const intl7 = tmp2(1126).intl;
    obj14.title = intl7.string(tmp2(1126).t["3D5yo/"]);
    obj14.children = items;
    tmpResult = closure_15(tmp2(6081).TableRowGroup, obj14);
  }
  return tmpResult;
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let TableRowGroup = pushScreen;
  let tmp = dependencyMap;
  const cResult = pushScreen(576).c(19);
  ({ canManageGuildExpressions, canConfigureOfficialMessages, pushScreen } = arg0);
  if (cResult[0] === canConfigureOfficialMessages) {
    if (cResult[1] === canManageGuildExpressions) {
      if (cResult[2] === pushScreen) {
        let arr = cResult[3];
      }
      if (0 === arr.length) {
        return null;
      } else {
        const _Symbol7 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = TableRowGroup(1126).intl;
          const stringResult = intl4.string(TableRowGroup(1126).t.m6lkGy);
          cResult[16] = stringResult;
          let tmp32 = stringResult;
        } else {
          tmp32 = cResult[16];
        }
        if (cResult[17] !== arr) {
          TableRowGroup = TableRowGroup(6081).TableRowGroup;
          const obj2 = { title: tmp32, hasIcons: true, children: arr };
          tmp = closure_15(TableRowGroup, obj2);
          cResult[17] = arr;
          cResult[18] = tmp;
        }
      }
    }
  }
  const items = [];
  if (!canManageGuildExpressions) {
    if (!canConfigureOfficialMessages) {
      cResult[0] = canConfigureOfficialMessages;
      cResult[1] = canManageGuildExpressions;
      cResult[2] = pushScreen;
      cResult[3] = items;
      arr = items;
    } else {
      const _Symbol5 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = TableRowGroup(1126).intl;
        const stringResult1 = intl3.string(TableRowGroup(1126).t.xHEzFh);
        cResult[12] = stringResult1;
        let tmp22 = stringResult1;
      } else {
        tmp22 = cResult[12];
      }
      const _Symbol6 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { IconComponent: TableRowGroup(11385).StampIcon };
        const tmp26 = closure_15(TableRowGroup(6000).TableRow.Icon, obj3);
        cResult[13] = tmp26;
        let tmp24 = tmp26;
      } else {
        tmp24 = cResult[13];
      }
      if (cResult[14] !== pushScreen) {
        const obj4 = {
          label: tmp22,
          arrow: true,
          icon: tmp24,
          onPress() {
                  return pushScreen(constants2.OFFICIAL_MESSAGES);
                }
        };
        const tmp29 = closure_15(TableRowGroup(6000).TableRow, obj4, "official-messages");
        cResult[14] = pushScreen;
        cResult[15] = tmp29;
        let tmp27 = tmp29;
      } else {
        tmp27 = cResult[15];
      }
      items.push(tmp27);
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = TableRowGroup(1126).intl;
      const stringResult2 = intl.string(TableRowGroup(1126).t.sMOuuS);
      cResult[4] = stringResult2;
      let tmp4 = stringResult2;
    } else {
      tmp4 = cResult[4];
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { IconComponent: TableRowGroup(8444).ReactionIcon };
      const tmp8 = closure_15(TableRowGroup(6000).TableRow.Icon, obj5);
      cResult[5] = tmp8;
      let tmp6 = tmp8;
    } else {
      tmp6 = cResult[5];
    }
    if (cResult[6] !== pushScreen) {
      const obj6 = {
        label: tmp4,
        arrow: true,
        icon: tmp6,
        onPress() {
              return pushScreen(constants2.EMOJI);
            }
      };
      const tmp11 = closure_15(TableRowGroup(6000).TableRow, obj6, "emoji");
      cResult[6] = pushScreen;
      cResult[7] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[7];
    }
    items.push(tmp9);
    const _Symbol3 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = TableRowGroup(1126).intl;
      const stringResult3 = intl2.string(TableRowGroup(1126).t.R5nQkS);
      cResult[8] = stringResult3;
      let tmp13 = stringResult3;
    } else {
      tmp13 = cResult[8];
    }
    const _Symbol4 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { IconComponent: TableRowGroup(12205).StickerIcon };
      const tmp17 = closure_15(TableRowGroup(6000).TableRow.Icon, obj7);
      cResult[9] = tmp17;
      let arr6 = tmp17;
    } else {
      arr6 = cResult[9];
    }
    if (cResult[10] !== pushScreen) {
      const obj8 = {
        label: tmp13,
        arrow: true,
        icon: arr6,
        onPress() {
              return pushScreen(constants2.STICKERS);
            }
      };
      const tmp20 = closure_15(TableRowGroup(6000).TableRow, obj8, "stickers");
      cResult[10] = pushScreen;
      cResult[11] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[11];
    }
    arr6 = items.push(tmp18);
  }
  const obj = pushScreen(576);
}) : ((pushScreen) => {
  pushScreen = pushScreen.pushScreen;
  const items = [];
  if (pushScreen.canManageGuildExpressions) {
    const obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = pushScreen(1126).intl;
    obj.label = intl.string(pushScreen(1126).t.sMOuuS);
    const obj2 = { IconComponent: pushScreen(8444).ReactionIcon };
    obj.icon = closure_15(pushScreen(6000).TableRow.Icon, obj2);
    obj.onPress = function onPress() {
      return pushScreen(constants2.EMOJI);
    };
    items.push(closure_15(pushScreen(6000).TableRow, obj, "emoji"));
    const obj3 = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = pushScreen(1126).intl;
    obj3.label = intl2.string(pushScreen(1126).t.R5nQkS);
    const obj4 = { IconComponent: pushScreen(12205).StickerIcon };
    obj3.icon = closure_15(pushScreen(6000).TableRow.Icon, obj4);
    obj3.onPress = function onPress() {
      return pushScreen(constants2.STICKERS);
    };
    items.push(closure_15(pushScreen(6000).TableRow, obj3, "stickers"));
  }
  if (pushScreen.canConfigureOfficialMessages) {
    const obj5 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = pushScreen(1126).intl;
    obj5.label = intl3.string(pushScreen(1126).t.xHEzFh);
    const obj6 = { IconComponent: pushScreen(11385).StampIcon };
    obj5.icon = closure_15(pushScreen(6000).TableRow.Icon, obj6);
    obj5.onPress = function onPress() {
      return pushScreen(constants2.OFFICIAL_MESSAGES);
    };
    items.push(closure_15(pushScreen(6000).TableRow, obj5, "official-messages"));
  }
  let tmp10 = null;
  if (0 !== items.length) {
    const obj7 = { title: null, hasIcons: true, children: null };
    const intl4 = pushScreen(1126).intl;
    obj7.title = intl4.string(pushScreen(1126).t.m6lkGy);
    obj7.children = items;
    tmp10 = closure_15(pushScreen(6081).TableRowGroup, obj7);
  }
  return tmp10;
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = pushScreen(576).c(20);
  ({ canManageGuild, canManageRoles, pushScreen } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = pushScreen(1126).intl;
    const stringResult = intl.string(pushScreen(1126).t["9Oq93m"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { IconComponent: pushScreen(5880).GroupIcon };
    const tmp8 = closure_15(pushScreen(6000).TableRow.Icon, obj2);
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== pushScreen) {
    const obj3 = {
      label: first,
      arrow: true,
      icon: tmp6,
      onPress() {
          return pushScreen(constants2.MEMBERS);
        }
    };
    const tmp11 = closure_15(pushScreen(6000).TableRow, obj3, "members");
    cResult[2] = pushScreen;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === canManageGuild) {
    if (cResult[5] === canManageRoles) {
      if (cResult[6] === pushScreen) {
        if (cResult[7] === tmp9) {
          let tmp12 = cResult[8];
        }
        const _Symbol5 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = pushScreen(1126).intl;
          const stringResult1 = intl4.string(pushScreen(1126).t.bMAKMK);
          cResult[17] = stringResult1;
          let tmp30 = stringResult1;
        } else {
          tmp30 = cResult[17];
        }
        if (cResult[18] !== tmp12) {
          const obj4 = { title: tmp30, hasIcons: true, children: tmp12 };
          const tmp34 = closure_15(pushScreen(6081).TableRowGroup, obj4);
          cResult[18] = tmp12;
          cResult[19] = tmp34;
          let tmp32 = tmp34;
        } else {
          tmp32 = cResult[19];
        }
        return tmp32;
      }
    }
  }
  const items = [tmp9];
  if (!canManageRoles) {
    if (!canManageGuild) {
      cResult[4] = canManageGuild;
      cResult[5] = canManageRoles;
      cResult[6] = pushScreen;
      cResult[7] = tmp9;
      cResult[8] = items;
      tmp12 = items;
    } else {
      const _Symbol3 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = pushScreen(1126).intl;
        const stringResult2 = intl3.string(pushScreen(1126).t.ngRFjZ);
        cResult[13] = stringResult2;
        let tmp21 = stringResult2;
      } else {
        tmp21 = cResult[13];
      }
      const _Symbol4 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { IconComponent: pushScreen(4845).LinkIcon };
        const tmp25 = closure_15(pushScreen(6000).TableRow.Icon, obj5);
        cResult[14] = tmp25;
        let tmp23 = tmp25;
      } else {
        tmp23 = cResult[14];
      }
      if (cResult[15] !== pushScreen) {
        const obj6 = {
          label: tmp21,
          arrow: true,
          icon: tmp23,
          onPress() {
                  return pushScreen(constants2.INSTANT_INVITES);
                }
        };
        const tmp28 = closure_15(pushScreen(6000).TableRow, obj6, "invites");
        cResult[15] = pushScreen;
        cResult[16] = tmp28;
        let tmp26 = tmp28;
      } else {
        tmp26 = cResult[16];
      }
      items.push(tmp26);
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = pushScreen(1126).intl;
      const stringResult3 = intl2.string(pushScreen(1126).t["LPJmL/"]);
      cResult[9] = stringResult3;
      let tmp13 = stringResult3;
    } else {
      tmp13 = cResult[9];
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { IconComponent: pushScreen(9267).ShieldUserIcon };
      const tmp17 = closure_15(pushScreen(6000).TableRow.Icon, obj7);
      cResult[10] = tmp17;
      let arr3 = tmp17;
    } else {
      arr3 = cResult[10];
    }
    if (cResult[11] !== pushScreen) {
      const obj8 = {
        label: tmp13,
        arrow: true,
        icon: arr3,
        onPress() {
              return pushScreen(constants2.ROLES);
            }
      };
      const tmp20 = closure_15(pushScreen(6000).TableRow, obj8, "roles");
      cResult[11] = pushScreen;
      cResult[12] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[12];
    }
    arr3 = items.push(tmp18);
  }
  const obj = pushScreen(576);
}) : ((pushScreen) => {
  pushScreen = pushScreen.pushScreen;
  ({ canManageGuild, canManageRoles } = pushScreen);
  const obj = { label: null, arrow: true, icon: null, onPress: null };
  const intl = pushScreen(1126).intl;
  obj.label = intl.string(pushScreen(1126).t["9Oq93m"]);
  obj.icon = closure_15(pushScreen(6000).TableRow.Icon, { IconComponent: pushScreen(5880).GroupIcon });
  obj.onPress = function onPress() {
    return pushScreen(constants2.MEMBERS);
  };
  const items = [closure_15(pushScreen(6000).TableRow, obj, "members")];
  if (canManageRoles) {
    const obj3 = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = tmp2(1126).intl;
    obj3.label = intl2.string(tmp2(1126).t["LPJmL/"]);
    const obj4 = { IconComponent: tmp2(9267).ShieldUserIcon };
    obj3.icon = closure_15(tmp2(6000).TableRow.Icon, obj4);
    obj3.onPress = function onPress() {
      return pushScreen(constants2.ROLES);
    };
    items.push(closure_15(tmp2(6000).TableRow, obj3, "roles"));
  }
  if (canManageGuild) {
    const obj5 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = tmp2(1126).intl;
    obj5.label = intl3.string(tmp2(1126).t.ngRFjZ);
    const obj6 = { IconComponent: tmp2(4845).LinkIcon };
    obj5.icon = closure_15(tmp2(6000).TableRow.Icon, obj6);
    obj5.onPress = function onPress() {
      return pushScreen(constants2.INSTANT_INVITES);
    };
    items.push(closure_15(tmp2(6000).TableRow, obj5, "invites"));
  }
  const obj7 = { title: null, hasIcons: true, children: null };
  const intl4 = tmp2(1126).intl;
  obj7.title = intl4.string(pushScreen(1126).t.bMAKMK);
  obj7.children = items;
  return closure_15(pushScreen(6081).TableRowGroup, obj7);
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let TableRowGroup = pushScreen;
  let tmp = dependencyMap;
  const cResult = pushScreen(576).c(28);
  ({ canManageGuild, canViewAuditLog, canManageBans, pushScreen } = arg0);
  if (cResult[0] === canManageBans) {
    if (cResult[1] === canManageGuild) {
      if (cResult[2] === canViewAuditLog) {
        if (cResult[3] === pushScreen) {
          let arr = cResult[4];
        }
        if (0 === arr.length) {
          return null;
        } else {
          const _Symbol11 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            const intl6 = TableRowGroup(1126).intl;
            const stringResult = intl6.string(TableRowGroup(1126).t["5tbTdV"]);
            cResult[25] = stringResult;
            let tmp50 = stringResult;
          } else {
            tmp50 = cResult[25];
          }
          if (cResult[26] !== arr) {
            TableRowGroup = TableRowGroup(6081).TableRowGroup;
            const obj2 = { title: tmp50, hasIcons: true, children: arr };
            tmp = closure_15(TableRowGroup, obj2);
            cResult[26] = arr;
            cResult[27] = tmp;
          }
        }
      }
    }
  }
  const items = [];
  if (!canManageGuild) {
    if (!canViewAuditLog) {
      if (!canManageBans) {
        if (!canViewAuditLog) {
          if (!canManageGuild) {
            cResult[0] = canManageBans;
            cResult[1] = canManageGuild;
            cResult[2] = canViewAuditLog;
            cResult[3] = pushScreen;
            cResult[4] = items;
            arr = items;
          } else {
            const _Symbol9 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const intl5 = TableRowGroup(1126).intl;
              const stringResult1 = intl5.string(TableRowGroup(1126).t.Am9YHi);
              cResult[21] = stringResult1;
              let tmp40 = stringResult1;
            } else {
              tmp40 = cResult[21];
            }
            const _Symbol10 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { IconComponent: TableRowGroup(9267).ShieldUserIcon };
              const tmp44 = closure_15(TableRowGroup(6000).TableRow.Icon, obj3);
              cResult[22] = tmp44;
              let tmp42 = tmp44;
            } else {
              tmp42 = cResult[22];
            }
            if (cResult[23] !== pushScreen) {
              const obj4 = {
                label: tmp40,
                arrow: true,
                icon: tmp42,
                onPress() {
                              return pushScreen(constants2.SECURITY);
                            }
              };
              const tmp47 = closure_15(TableRowGroup(6000).TableRow, obj4, "security");
              cResult[23] = pushScreen;
              cResult[24] = tmp47;
              let tmp45 = tmp47;
            } else {
              tmp45 = cResult[24];
            }
            items.push(tmp45);
          }
        }
      }
      const _Symbol7 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = TableRowGroup(1126).intl;
        const stringResult2 = intl4.string(TableRowGroup(1126).t.ZbeITS);
        cResult[17] = stringResult2;
        let tmp31 = stringResult2;
      } else {
        tmp31 = cResult[17];
      }
      const _Symbol8 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { IconComponent: TableRowGroup(8985).HammerIcon };
        const tmp35 = closure_15(TableRowGroup(6000).TableRow.Icon, obj5);
        cResult[18] = tmp35;
        let arr7 = tmp35;
      } else {
        arr7 = cResult[18];
      }
      if (cResult[19] !== pushScreen) {
        const obj6 = {
          label: tmp31,
          arrow: true,
          icon: arr7,
          onPress() {
                  return pushScreen(constants2.BANS);
                }
        };
        const tmp38 = closure_15(TableRowGroup(6000).TableRow, obj6, "bans");
        cResult[19] = pushScreen;
        cResult[20] = tmp38;
        let tmp36 = tmp38;
      } else {
        tmp36 = cResult[20];
      }
      arr7 = items.push(tmp36);
    } else {
      const _Symbol5 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = TableRowGroup(1126).intl;
        const stringResult3 = intl3.string(TableRowGroup(1126).t.SPWLyT);
        cResult[13] = stringResult3;
        let tmp22 = stringResult3;
      } else {
        tmp22 = cResult[13];
      }
      const _Symbol6 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { IconComponent: TableRowGroup(5935).ClipboardListIcon };
        const tmp26 = closure_15(TableRowGroup(6000).TableRow.Icon, obj7);
        cResult[14] = tmp26;
        let arr8 = tmp26;
      } else {
        arr8 = cResult[14];
      }
      if (cResult[15] !== pushScreen) {
        const obj8 = {
          label: tmp22,
          arrow: true,
          icon: arr8,
          onPress() {
                  return pushScreen(constants2.AUDIT_LOG);
                }
        };
        const tmp29 = closure_15(TableRowGroup(6000).TableRow, obj8, "auditlogs");
        cResult[15] = pushScreen;
        cResult[16] = tmp29;
        let tmp27 = tmp29;
      } else {
        tmp27 = cResult[16];
      }
      arr8 = items.push(tmp27);
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = TableRowGroup(1126).intl;
      const stringResult4 = intl.string(TableRowGroup(1126).t["5tbTdV"]);
      cResult[5] = stringResult4;
      let tmp4 = stringResult4;
    } else {
      tmp4 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = { IconComponent: TableRowGroup(17706).ModerationIcon };
      const tmp8 = closure_15(TableRowGroup(6000).TableRow.Icon, obj9);
      cResult[6] = tmp8;
      let tmp6 = tmp8;
    } else {
      tmp6 = cResult[6];
    }
    if (cResult[7] !== pushScreen) {
      const obj10 = {
        label: tmp4,
        arrow: true,
        icon: tmp6,
        onPress() {
              return pushScreen(constants2.MODERATION);
            }
      };
      const tmp11 = closure_15(TableRowGroup(6000).TableRow, obj10, "moderation");
      cResult[7] = pushScreen;
      cResult[8] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[8];
    }
    items.push(tmp9);
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = TableRowGroup(1126).intl;
      const stringResult5 = intl2.string(TableRowGroup(1126).t.uRelgx);
      cResult[9] = stringResult5;
      let tmp13 = stringResult5;
    } else {
      tmp13 = cResult[9];
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj11 = { IconComponent: TableRowGroup(8987).RobotIcon };
      const tmp17 = closure_15(TableRowGroup(6000).TableRow.Icon, obj11);
      cResult[10] = tmp17;
      let arr10 = tmp17;
    } else {
      arr10 = cResult[10];
    }
    if (cResult[11] !== pushScreen) {
      const obj12 = {
        label: tmp13,
        arrow: true,
        icon: arr10,
        onPress() {
              return pushScreen(constants2.GUILD_AUTOMOD);
            }
      };
      const tmp20 = closure_15(TableRowGroup(6000).TableRow, obj12, "automod");
      cResult[11] = pushScreen;
      cResult[12] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[12];
    }
    arr10 = items.push(tmp18);
  }
  const obj = pushScreen(576);
}) : ((arg0) => {
  ({ canManageGuild, canViewAuditLog, canManageBans, pushScreen: require } = arg0);
  const items = [];
  if (canManageGuild) {
    const obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["5tbTdV"]);
    const obj2 = { IconComponent: ModerationIcon.ModerationIcon };
    obj.icon = closure_15(TableRow2.TableRow.Icon, obj2);
    obj.onPress = function onPress() {
      return require(constants2.MODERATION);
    };
    items.push(closure_15(TableRow2.TableRow, obj, "moderation"));
    const obj3 = { label: null, arrow: true, icon: null, onPress: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.uRelgx);
    const obj4 = { IconComponent: RobotIcon.RobotIcon };
    obj3.icon = closure_15(TableRow2.TableRow.Icon, obj4);
    obj3.onPress = function onPress() {
      return require(constants2.GUILD_AUTOMOD);
    };
    items.push(closure_15(TableRow2.TableRow, obj3, "automod"));
  }
  if (canViewAuditLog) {
    const obj5 = { label: null, arrow: true, icon: null, onPress: null };
    const intl3 = util.intl;
    obj5.label = intl3.string(util.t.SPWLyT);
    const obj6 = { IconComponent: ClipboardListIcon.ClipboardListIcon };
    obj5.icon = closure_15(TableRow2.TableRow.Icon, obj6);
    obj5.onPress = function onPress() {
      return require(constants2.AUDIT_LOG);
    };
    items.push(closure_15(TableRow2.TableRow, obj5, "auditlogs"));
  }
  if (!canManageBans) {
    canManageBans = canViewAuditLog;
  }
  if (canManageBans) {
    const obj7 = { label: null, arrow: true, icon: null, onPress: null };
    const intl4 = util.intl;
    obj7.label = intl4.string(util.t.ZbeITS);
    const obj8 = { IconComponent: HammerIcon.HammerIcon };
    obj7.icon = closure_15(TableRow2.TableRow.Icon, obj8);
    obj7.onPress = function onPress() {
      return require(constants2.BANS);
    };
    items.push(closure_15(TableRow2.TableRow, obj7, "bans"));
  }
  if (canManageGuild) {
    const obj9 = { label: null, arrow: true, icon: null, onPress: null };
    const intl5 = util.intl;
    obj9.label = intl5.string(util.t.Am9YHi);
    const obj10 = { IconComponent: ShieldUserIcon.ShieldUserIcon };
    obj9.icon = closure_15(TableRow2.TableRow.Icon, obj10);
    obj9.onPress = function onPress() {
      return require(constants2.SECURITY);
    };
    items.push(closure_15(TableRow2.TableRow, obj9, "security"));
  }
  let tmp18 = null;
  if (0 !== items.length) {
    const obj11 = { title: null, hasIcons: true, children: null };
    const intl6 = util.intl;
    obj11.title = intl6.string(util.t["5tbTdV"]);
    obj11.children = items;
    tmp18 = closure_15(TableRowGroup2.TableRowGroup, obj11);
  }
  return tmp18;
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let TableRowGroup = pushScreen;
  let tmp = dependencyMap;
  const cResult = pushScreen(576).c(17);
  ({ guild, canManageGuild, canViewGuildAnalytics, pushScreen } = arg0);
  if (cResult[0] !== guild.features) {
    const features = guild.features;
    const hasItem = features.has(constants.COMMUNITY);
    cResult[0] = guild.features;
    cResult[1] = hasItem;
    let tmp3 = hasItem;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === canManageGuild) {
    if (cResult[3] === canViewGuildAnalytics) {
      if (cResult[4] === tmp3) {
        if (cResult[5] === pushScreen) {
          let arr = cResult[6];
        }
        if (0 === arr.length) {
          return null;
        } else {
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = TableRowGroup(1126).intl;
            const stringResult = intl2.string(TableRowGroup(1126).t["1g9A/f"]);
            cResult[14] = stringResult;
            let tmp21 = stringResult;
          } else {
            tmp21 = cResult[14];
          }
          if (cResult[15] !== arr) {
            TableRowGroup = TableRowGroup(6081).TableRowGroup;
            const obj2 = { title: tmp21, hasIcons: true, children: arr };
            tmp = closure_15(TableRowGroup, obj2);
            cResult[15] = arr;
            cResult[16] = tmp;
          }
        }
      }
    }
  }
  const items = [];
  if (!canManageGuild) {
    if (tmp3) {
      if (canViewGuildAnalytics) {
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = TableRowGroup(1126).intl;
          const stringResult1 = intl.string(TableRowGroup(1126).t["0wWfUG"]);
          cResult[10] = stringResult1;
          let tmp11 = stringResult1;
        } else {
          tmp11 = cResult[10];
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { IconComponent: TableRowGroup(10121).AnalyticsIcon };
          const tmp15 = closure_15(TableRowGroup(6000).TableRow.Icon, obj3);
          cResult[11] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[11];
        }
        if (cResult[12] !== pushScreen) {
          const obj4 = {
            label: tmp11,
            arrow: true,
            icon: tmp13,
            onPress() {
                      return pushScreen(constants2.ANALYTICS);
                    }
          };
          const tmp18 = closure_15(TableRowGroup(6000).TableRow, obj4, "analytics");
          cResult[12] = pushScreen;
          cResult[13] = tmp18;
          let tmp16 = tmp18;
        } else {
          tmp16 = cResult[13];
        }
        items.push(tmp16);
      }
    }
    cResult[2] = canManageGuild;
    cResult[3] = canViewGuildAnalytics;
    cResult[4] = tmp3;
    cResult[5] = pushScreen;
    cResult[6] = items;
    arr = items;
  } else {
    if (cResult[7] === tmp3) {
      if (cResult[8] === pushScreen) {
        items.push(cResult[9]);
      }
    }
    const TableRow = TableRowGroup(6000).TableRow;
    const obj5 = { label: null, arrow: true, icon: null, onPress: null };
    let TreehouseIcon = TableRowGroup(1126).intl;
    let Icon = TreehouseIcon.string;
    let str = TableRowGroup(1126).t;
    if (tmp3) {
      obj5.label = Icon(str.nRtNqn);
      Icon = TableRowGroup(6000).TableRow.Icon;
      const obj6 = { IconComponent: null };
      TreehouseIcon = TableRowGroup(15437).TreehouseIcon;
      obj6.IconComponent = TreehouseIcon;
      obj5.icon = closure_15(Icon, obj6);
      obj5.onPress = function onPress() {
        return pushScreen(constants2.COMMUNITY, {});
      };
      str = "community-overview";
      let tmp6Result = closure_15(TableRow, obj5, "community-overview");
    } else {
      obj5.label = Icon(`community-overview`.ElKTeb);
      const obj7 = { IconComponent: TableRowGroup(15437).TreehouseIcon };
      obj5.icon = closure_15(TableRowGroup(6000).TableRow.Icon, obj7);
      obj5.onPress = function onPress() {
        return pushScreen(constants2.COMMUNITY_INTRO, {});
      };
      tmp6Result = closure_15(TableRow, obj5, "community-intro");
    }
    cResult[7] = tmp3;
    cResult[8] = pushScreen;
    cResult[9] = tmp6Result;
  }
  const obj = pushScreen(576);
}) : ((pushScreen) => {
  pushScreen = pushScreen.pushScreen;
  const features = pushScreen.guild.features;
  ({ canManageGuild, canViewGuildAnalytics } = pushScreen);
  let hasItem = features.has(constants.COMMUNITY);
  const items = [];
  if (!canManageGuild) {
    if (hasItem) {
      hasItem = canViewGuildAnalytics;
    }
    if (hasItem) {
      const obj2 = { label: null, arrow: true, icon: null, onPress: null };
      const intl2 = pushScreen(1126).intl;
      obj2.label = intl2.string(pushScreen(1126).t["0wWfUG"]);
      const obj3 = { IconComponent: pushScreen(10121).AnalyticsIcon };
      obj2.icon = closure_15(pushScreen(6000).TableRow.Icon, obj3);
      obj2.onPress = function onPress() {
        return pushScreen(constants2.ANALYTICS);
      };
      items.push(closure_15(pushScreen(6000).TableRow, obj2, "analytics"));
    }
    let tmp9 = null;
    if (0 !== items.length) {
      const obj4 = { title: null, hasIcons: true, children: null };
      const intl3 = pushScreen(1126).intl;
      obj4.title = intl3.string(pushScreen(1126).t["1g9A/f"]);
      obj4.children = items;
      tmp9 = closure_15(pushScreen(6081).TableRowGroup, obj4);
    }
    return tmp9;
  } else {
    let TreehouseIcon = dependencyMap;
    const TableRow = pushScreen(6000).TableRow;
    const obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = pushScreen(1126).intl;
    let Icon = intl.string;
    let t = pushScreen(1126).t;
    if (hasItem) {
      obj.label = Icon(t.nRtNqn);
      Icon = tmp3(6000).TableRow.Icon;
      const obj5 = { IconComponent: null };
      TreehouseIcon = tmp3(15437).TreehouseIcon;
      obj5.IconComponent = TreehouseIcon;
      obj.icon = closure_15(Icon, obj5);
      obj.onPress = function onPress() {
        return pushScreen(constants2.COMMUNITY, {});
      };
      let tmp2Result = closure_15(TableRow, obj, "community-overview");
    } else {
      obj.label = Icon(t.ElKTeb);
      const obj6 = { IconComponent: tmp3(15437).TreehouseIcon };
      obj.icon = closure_15(tmp3(6000).TableRow.Icon, obj6);
      obj.onPress = function onPress() {
        return pushScreen(constants2.COMMUNITY_INTRO, {});
      };
      tmp2Result = closure_15(TableRow, obj, "community-intro");
    }
    t = items.push(tmp2Result);
  }
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(576).c(81);
  guild = guild.guild;
  ({ contentContainerStyle, updateErrors } = guild);
  let obj = guild(576);
  const token = guild(4586).useToken(updateErrors(587).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_18();
  let obj2 = guild(4586);
  const navigation = guild(1490).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function s() {
      let id;
      if (guild != null) {
        id = guild.id;
      }
      const channels = GuildChannelStore.getChannels(id);
      let tmp4;
      if (channels != null) {
        tmp4 = channels[constants3.GUILD_CATEGORY];
      }
      return tmp4;
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  let obj3 = guild(1490);
  const stateFromStores = guild(504).useStateFromStores(first, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [PermissionStore];
    cResult[3] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== guild) {
    const fn2 = function v() {
      return PermissionStore.getGuildPermissionProps(guild);
    };
    cResult[4] = guild;
    cResult[5] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult = guild(504);
  const stateFromStoresObject = guild(504).useStateFromStoresObject(tmp11, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        obj = updateErrors(closure_1_3[9]);
        obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
        obj1.destination_pane = closure_1_12.LANDING;
        trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
    const items2 = [];
    cResult[6] = O;
    cResult[7] = items2;
    let tmp16 = items2;
  } else {
    class O {
      constructor() {
        obj = updateErrors(closure_1_3[9]);
        obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
        obj1.destination_pane = closure_1_12.LANDING;
        trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
    tmp16 = cResult[7];
  }
  const effect = noop.useEffect(O, tmp16);
  if (cResult[8] !== navigation) {
    class O {
      constructor() {
        obj = updateErrors(closure_1_3[9]);
        obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
        obj1.destination_pane = closure_1_12.LANDING;
        trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
    cResult[8] = navigation;
    cResult[9] = tmp19;
  } else {
    class O {
      constructor() {
        obj = updateErrors(closure_1_3[9]);
        obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
        obj1.destination_pane = closure_1_12.LANDING;
        trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
  }
  ({ isGuildAdmin, canManageGuild, canManageRoles, canManageBans, canManageGuildExpressions, canManageChannels, canViewAuditLog, canManageWebhooks, canViewGuildAnalytics } = stateFromStoresObject);
  const tmpResult4 = guild(504);
  guild(17708).useChannelsAllowedToUnlink(guild.id).length > 0;
  const tmpResult5 = guild(17708);
  const canManageGuildRoleSubscriptions = guild(6773).useCanManageGuildRoleSubscriptions(guild);
  if (cResult[10] === canManageGuild) {
    class O {
      constructor() {
        obj = updateErrors(closure_1_3[9]);
        obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
        obj1.destination_pane = closure_1_12.LANDING;
        trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
    if (cResult[13] !== guild.id) {
      class O {
        constructor() {
          obj = updateErrors(closure_1_3[9]);
          obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
          obj1.destination_pane = closure_1_12.LANDING;
          trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
          return;
        }
      }
      cResult[13] = guild.id;
      cResult[14] = tmp24;
    } else {
      class O {
        constructor() {
          obj = updateErrors(closure_1_3[9]);
          obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
          obj1.destination_pane = closure_1_12.LANDING;
          trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
          return;
        }
      }
    }
    if (cResult[15] !== updateErrors.message) {
      class O {
        constructor() {
          obj = updateErrors(closure_1_3[9]);
          obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
          obj1.destination_pane = closure_1_12.LANDING;
          trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
          return;
        }
      }
      const items3 = [updateErrors.message];
      cResult[15] = updateErrors.message;
      cResult[16] = tmp27;
      cResult[17] = items3;
      let tmp26 = items3;
    } else {
      class O {
        constructor() {
          obj = updateErrors(closure_1_3[9]);
          obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
          obj1.destination_pane = closure_1_12.LANDING;
          trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
          return;
        }
      }
      tmp26 = cResult[17];
    }
    const layoutEffect = noop.useLayoutEffect(tmp27, tmp26);
    if (cResult[18] === contentContainerStyle) {
      class O {
        constructor() {
          obj = updateErrors(closure_1_3[9]);
          obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
          obj1.destination_pane = closure_1_12.LANDING;
          trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
          return;
        }
      }
      if (cResult[21] !== token) {
        class O {
          constructor() {
            obj = updateErrors(closure_1_3[9]);
            obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
            obj1.destination_pane = closure_1_12.LANDING;
            trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
            return;
          }
        }
        tmp31[0] = token;
        cResult[21] = token;
        cResult[22] = tmp31;
      } else {
        class O {
          constructor() {
            obj = updateErrors(closure_1_3[9]);
            obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
            obj1.destination_pane = closure_1_12.LANDING;
            trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
            return;
          }
        }
      }
      if (cResult[23] !== guild.id) {
        class O {
          constructor() {
            obj = updateErrors(closure_1_3[9]);
            obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
            obj1.destination_pane = closure_1_12.LANDING;
            trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
            return;
          }
        }
        cResult[23] = guild.id;
        cResult[24] = tmp33;
      } else {
        class O {
          constructor() {
            obj = updateErrors(closure_1_3[9]);
            obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
            obj1.destination_pane = closure_1_12.LANDING;
            trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
            return;
          }
        }
      }
      if (cResult[25] === guild.icon) {
        class O {
          constructor() {
            obj = updateErrors(closure_1_3[9]);
            obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
            obj1.destination_pane = closure_1_12.LANDING;
            trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
            return;
          }
        }
      }
      const obj4 = { onUpload: tmp24, type: "guild", icon: null, name: null, makeURL: null, disabled: null };
      ({ icon: obj10.icon, name: obj10.name } = guild);
      obj4.makeURL = tmp33;
      obj4.disabled = !stateFromStoresObject.canManageGuild;
      cResult[25] = guild.icon;
      cResult[26] = guild.name;
      cResult[27] = tmp24;
      cResult[28] = tmp33;
      cResult[29] = !stateFromStoresObject.canManageGuild;
      cResult[30] = obj4;
    }
    const items4 = [tmp5.containerContent, contentContainerStyle];
    cResult[18] = contentContainerStyle;
    cResult[19] = tmp5.containerContent;
    cResult[20] = items4;
  }
  let result = canManageGuild;
  if (canManageGuild) {
    class O {
      constructor() {
        obj = updateErrors(closure_1_3[9]);
        obj1 = { settings_type: "guild", origin_pane: "Array", destination_pane: "AFKTimeout" };
        obj1.destination_pane = closure_1_12.LANDING;
        trackWithMetadataResult = obj.trackWithMetadata(closure_1_14.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
    result = obj9.isGuildOfficialMessagesEnabled(guild, "GuildSettingsModalLanding");
  }
  cResult[10] = canManageGuild;
  cResult[11] = guild;
  cResult[12] = result;
  const tmpResult6 = guild(6773);
}) : ((guild) => {
  guild = guild.guild;
  const updateErrors = guild.updateErrors;
  const token = guild(4586).useToken(updateErrors(587).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_18();
  let obj = guild(4586);
  const navigation = guild(1490).useNavigation();
  let obj2 = guild(1490);
  let items = [GuildChannelStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    const channels = GuildChannelStore.getChannels(id);
    let tmp4;
    if (channels != null) {
      tmp4 = channels[constants3.GUILD_CATEGORY];
    }
    return tmp4;
  });
  let obj3 = guild(504);
  let items1 = [PermissionStore];
  const stateFromStoresObject = guild(504).useStateFromStoresObject(items1, () => PermissionStore.getGuildPermissionProps(guild));
  const effect = noop.useEffect(() => {
    const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: constants.LANDING };
    updateErrors(dependencyMap[9]).trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
  }, []);
  const items2 = [navigation];
  const callback = noop.useCallback(() => {
    const items = [...arguments];
    const first = items[0];
    state = navigation.getState();
    let name;
    if (state.routes[state.index] != null) {
      name = tmp4.name;
    }
    if (name !== first) {
      GuildSettingsActionCreatorsDefault.setSection(first);
      const navigate = navigation.navigate;
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      HermesBuiltin.apply(items1, navigation);
      const obj3 = { settings_type: "guild", origin_pane: constants2.LANDING, destination_pane: first };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants4.SETTINGS_PANE_VIEWED, obj3);
    }
  }, items2);
  ({ canManageGuild, isGuildAdmin, canManageRoles, canManageBans, canManageGuildExpressions, canManageChannels, canViewAuditLog, canManageWebhooks, canViewGuildAnalytics } = stateFromStoresObject);
  const obj4 = guild(504);
  const obj6 = guild(17708);
  const tmp11 = guild(17708).useChannelsAllowedToUnlink(guild.id).length > 0;
  const canManageGuildRoleSubscriptions = guild(6773).useCanManageGuildRoleSubscriptions(guild);
  let result = canManageGuild;
  if (canManageGuild) {
    result = tmp(6780).isGuildOfficialMessagesEnabled(guild, "GuildSettingsModalLanding");
    const tmpResult = tmp(6780);
  }
  const items3 = [updateErrors.message];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (null != updateErrors.message) {
      ToastUtils.presentError(tmp.message);
    }
  }, items3);
  const obj8 = { style: tmp5.container, contentContainerStyle: null, children: null };
  const items4 = [tmp5.containerContent, guild.contentContainerStyle];
  obj8.contentContainerStyle = items4;
  const obj9 = { style: { paddingHorizontal: token }, spacing: updateErrors(587).space.PX_24, children: null };
  const items5 = [
    closure_15(updateErrors(17056), {
      iconProps: {
        onUpload(icon) {
          GuildSettingsActionCreatorsDefault.updateIcon(guild.id, icon);
        },
        type: "guild",
        icon: guild.icon,
        name: guild.name,
        makeURL(icon) {
          let guildIconURL = icon;
          if (icon) {
            const obj2 = { id: guild.id, icon, canAnimate: true, size: 64 };
            guildIconURL = AvatarUtilsDefault.getGuildIconURL(obj2);
          }
          return guildIconURL;
        },
        disabled: !stateFromStoresObject.canManageGuild
      },
      text: guild.name,
      textAccessibilityRole: "header"
    }),
    closure_15(closure_19, { guild, categories: stateFromStores, isGuildAdmin, canManageGuild, canManageChannels, canUnlinkChannelLobbies: tmp11, canManageWebhooks, pushScreen: callback }),
    closure_15(closure_20, { canManageGuildExpressions, canConfigureOfficialMessages: result, pushScreen: callback }),
    closure_15(closure_21, { canManageGuild, canManageRoles, pushScreen: callback }),
    closure_15(closure_22, { canManageGuild, canViewAuditLog, canManageBans, pushScreen: callback }),
    closure_15(closure_23, { guild, canManageGuild, canViewGuildAnalytics, pushScreen: callback }),

  ];
  let tmp17Result = canManageGuildRoleSubscriptions;
  if (canManageGuildRoleSubscriptions) {
    const obj11 = { guild, pushScreen: callback };
    tmp17Result = closure_15(tmp3(17709), obj11);
  }
  const obj12 = { children: null };
  items5[6] = tmp17Result;
  obj9.children = items5;
  obj8.children = closure_16(guild(5600).Stack, obj9);
  const items6 = [closure_15(guild(8924).Form, obj8), closure_15(guild(6543).NavScrim, {})];
  obj12.children = items6;
  return closure_16(closure_17, obj12);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalLanding.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(10);
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = guildId(576);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildSettingsStore];
    class I {
      constructor() {
        obj = { errors: closure_1_10.getErrors() };
        return obj;
      }
    }
    const items2 = [];
    cResult[3] = items1;
    cResult[4] = I;
    cResult[5] = items2;
    let tmp10 = items2;
    let tmp9 = I;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const tmpResult = guildId(504);
  const errors = guildId(504).useStateFromStoresObject(tmp8, tmp9, tmp10).errors;
  if (cResult[6] === contentContainerStyle) {
    if (cResult[7] === errors) {
      if (cResult[8] === stateFromStores) {
        let tmp12 = cResult[9];
      }
      return tmp12;
    }
  }
  let tmp13 = null;
  if (null != stateFromStores) {
    const obj2 = { guild: null, contentContainerStyle: null, updateErrors: null };
    class I {
      constructor() {
        obj = { errors: closure_1_10.getErrors() };
        return obj;
      }
    }
    obj2.contentContainerStyle = contentContainerStyle;
    obj2.updateErrors = errors;
    tmp13 = closure_15(closure_24, obj2);
  }
  cResult[6] = contentContainerStyle;
  cResult[7] = errors;
  cResult[8] = stateFromStores;
  cResult[9] = tmp13;
  tmp12 = tmp13;
  const tmpResult2 = guildId(504);
}) : ((guildId) => {
  guildId = guildId.guildId;
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  guildId(504);
  [][0] = GuildSettingsStore;
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = { guild: stateFromStores, contentContainerStyle: guildId.contentContainerStyle, updateErrors: tmp3 };
    tmp4 = closure_15(closure_24, obj2);
  }
  return tmp4;
});