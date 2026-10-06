// === Module 9194: ModeratorStartStageView ===

// Module 9194 (ModeratorStartStageView)
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 9203 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9206 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 9616 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let first;
  let guild_id;
  let items2;
  let obj4;
  let onSkip;
  let tmp6;
  let tmp7;
  const obj = guild_id(576);
  const cResult = obj.c(34);
  ({ channel, onSkip } = arg0);
  guild_id = channel.guild_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function v() {
      return GuildStore.getGuild(guild_id);
    };
    const items1 = [guild_id];
    cResult[1] = guild_id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = guild_id(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmpResult5 = guild_id(9195);
  const first1 = _slicedToArray(tmpResult5.useGuildChannelScheduledEvents(channel.id), 1)[0];
  const moderator = useCurrentUserStageRolesDefault(channel.id, true).moderator;
  const tmpResult6 = guild_id(9204);
  const canManageGuildEvent = tmpResult6.useManageResourcePermissions(channel).canManageGuildEvent;
  if (cResult[4] === canManageGuildEvent) {
    let tmp11;
    let tmp14;
    if (cResult[5] === first1) {
      tmp11 = cResult[6];
    }
    const tmp13 = useCanCreateAnEventDefault(guild_id);
    const tmpResult7 = guild_id(9207);
    const isLive = tmpResult7.useStageChannelStartEvent(channel.id).isLive;
    if (cResult[7] !== first1) {
      const tmpResult8 = guild_id(9198);
      const nextRecurrenceIdInEvent = tmpResult8.getNextRecurrenceIdInEvent(first1);
      cResult[7] = first1;
      cResult[8] = nextRecurrenceIdInEvent;
      tmp14 = nextRecurrenceIdInEvent;
    } else {
      tmp14 = cResult[8];
    }
    let tmp18 = null;
    if (null != stateFromStores) {
      let tmp20;
      let tmp19;
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(guild_id(1126).t.QGnDLs);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(guild_id(1126).t["s/uXzq"]);
        cResult[9] = stringResult;
        cResult[10] = stringResult1;
        tmp20 = stringResult1;
        tmp19 = stringResult;
      } else {
        tmp19 = cResult[9];
        tmp20 = cResult[10];
      }
      if (cResult[11] === tmp11) {
        if (cResult[12] === channel) {
          if (cResult[13] === first1) {
            if (cResult[14] === stateFromStores) {
              if (cResult[15] === isLive) {
                let tmp23;
                if (cResult[16] === tmp14) {
                  tmp23 = cResult[17];
                }
                if (cResult[18] === channel) {
                  if (cResult[19] === isLive) {
                    let tmp26;
                    if (cResult[20] === moderator) {
                      tmp26 = cResult[21];
                    }
                    if (cResult[22] === tmp13) {
                      if (cResult[23] === channel) {
                        if (cResult[24] === stateFromStores) {
                          let tmp29;
                          let tmp32;
                          if (cResult[25] === isLive) {
                            tmp29 = cResult[26];
                          }
                          if (cResult[27] !== onSkip) {
                            const obj2 = { onContinue: onSkip };
                            const tmp34 = closure_5(guild_id(9571).ContinueToStagePrompt, obj2);
                            cResult[27] = onSkip;
                            cResult[28] = tmp34;
                            tmp32 = tmp34;
                          } else {
                            tmp32 = cResult[28];
                          }
                          if (cResult[29] === tmp29) {
                            if (cResult[30] === tmp32) {
                              if (cResult[31] === tmp23) {
                                let tmp35;
                                if (cResult[32] === tmp26) {
                                  tmp35 = cResult[33];
                                }
                                tmp18 = tmp35;
                              }
                            }
                          }
                          const obj3 = { title: tmp19, body: tmp20, children: closure_7(closure_6, obj4) };
                          obj4 = { children: items2 };
                          items2 = [tmp23, tmp26, tmp29, tmp32];
                          const tmp10Result = StageViewWithPromptsDefault;
                          const tmp40 = closure_5(tmp10Result, obj3);
                          cResult[29] = tmp29;
                          cResult[30] = tmp32;
                          cResult[31] = tmp23;
                          cResult[32] = tmp26;
                          cResult[33] = tmp40;
                          tmp35 = tmp40;
                        }
                      }
                    }
                    let tmp30 = null;
                    if (tmp13) {
                      const obj5 = { channel, isLive, guild: stateFromStores };
                      tmp30 = closure_5(tmp(9208).ScheduleEventPrompt, obj5);
                    }
                    cResult[22] = tmp13;
                    cResult[23] = channel;
                    cResult[24] = stateFromStores;
                    cResult[25] = isLive;
                    cResult[26] = tmp30;
                    tmp29 = tmp30;
                  }
                }
                let tmp27 = null;
                if (moderator) {
                  const obj6 = { channel, isLive };
                  tmp27 = closure_5(tmp(9571).StartStagePrompt, obj6);
                }
                cResult[18] = channel;
                cResult[19] = isLive;
                cResult[20] = moderator;
                cResult[21] = tmp27;
                tmp26 = tmp27;
              }
            }
          }
        }
      }
      let tmp24 = null;
      if (tmp11) {
        tmp24 = null;
        if (null != first1) {
          const obj7 = { channel, event: first1, isLive, guild: stateFromStores, recurrenceId: tmp14 };
          tmp24 = closure_5(tmp(9208).StartEventPrompt, obj7);
        }
      }
      cResult[11] = tmp11;
      cResult[12] = channel;
      cResult[13] = first1;
      cResult[14] = stateFromStores;
      cResult[15] = isLive;
      cResult[16] = tmp14;
      cResult[17] = tmp24;
      tmp23 = tmp24;
    }
    return tmp18;
  }
  const canManageGuildEventResult = canManageGuildEvent(first1);
  cResult[4] = canManageGuildEvent;
  cResult[5] = first1;
  cResult[6] = canManageGuildEventResult;
  tmp11 = canManageGuildEventResult;
}) : ((channel) => {
  let intl;
  let intl2;
  let obj10;
  channel = channel.channel;
  const guild_id = channel.guild_id;
  const onSkip = channel.onSkip;
  const items = [GuildStore];
  const items1 = [guild_id];
  const obj = guild_id(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  const obj2 = guild_id(9195);
  const first = _slicedToArray(obj2.useGuildChannelScheduledEvents(channel.id), 1)[0];
  const moderator = useCurrentUserStageRolesDefault(channel.id, true).moderator;
  const obj3 = guild_id(9204);
  const canManageGuildEventResult = obj3.useManageResourcePermissions(channel).canManageGuildEvent(first);
  const tmp7 = useCanCreateAnEventDefault(guild_id);
  const obj4 = guild_id(9207);
  const isLive = obj4.useStageChannelStartEvent(channel.id).isLive;
  const obj5 = guild_id(9198);
  const nextRecurrenceIdInEvent = obj5.getNextRecurrenceIdInEvent(first);
  let tmp10Result6 = null;
  if (null != stateFromStores) {
    const obj6 = { title: intl.string(guild_id(1126).t.QGnDLs), body: intl2.string(guild_id(1126).t["s/uXzq"]), children: closure_7(closure_6, obj10) };
    const tmp5Result = StageViewWithPromptsDefault;
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    let tmp10Result = null;
    if (canManageGuildEventResult) {
      tmp10Result = null;
      if (null != first) {
        const obj7 = { channel, event: first, isLive, guild: stateFromStores, recurrenceId: nextRecurrenceIdInEvent };
        tmp10Result = closure_5(tmp(9208).StartEventPrompt, obj7);
      }
    }
    const items2 = [tmp10Result, , , ];
    let tmp10Result4 = null;
    if (moderator) {
      const obj8 = { channel, isLive };
      tmp10Result4 = closure_5(tmp(9571).StartStagePrompt, obj8);
    }
    items2[1] = tmp10Result4;
    let tmp10Result5 = null;
    if (tmp7) {
      const obj9 = { channel, isLive, guild: stateFromStores };
      tmp10Result5 = closure_5(tmp(9208).ScheduleEventPrompt, obj9);
    }
    obj10 = { children: items2 };
    items2[2] = tmp10Result5;
    const obj11 = { onContinue: onSkip };
    items2[3] = closure_5(guild_id(9571).ContinueToStagePrompt, obj11);
    tmp10Result6 = closure_5(tmp5Result, obj6);
  }
  return tmp10Result6;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageView.tsx");

export default tmp4;