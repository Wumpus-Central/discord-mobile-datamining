// === Module 10932: ModeratorStartStageView ===

// Module 10932 (ModeratorStartStageView)
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 10933 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;

const useCanCreateAnEventDefault = tmp10(8637);
const StageViewWithPromptsDefault = tmp10(10979);
const require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ModeratorStartStageView(arg0) {
  let tmp2 = dependencyMap;
  const cResult = guild_id(576).c(34);
  ({ channel, onSkip } = arg0);
  guild_id = channel.guild_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
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
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = guild_id(576);
  const stateFromStores = guild_id(504).useStateFromStores(first, tmp6, tmp7);
  const tmpResult = guild_id(504);
  const first1 = _slicedToArray(guild_id(8638).useGuildChannelScheduledEvents(channel.id), 1)[0];
  let tmp10 = importDefault;
  const moderator = useCurrentUserStageRolesDefault(channel.id, true).moderator;
  const tmpResult5 = guild_id(8638);
  const canManageGuildEvent = guild_id(8556).useManageResourcePermissions(channel).canManageGuildEvent;
  if (cResult[4] === canManageGuildEvent) {
    if (cResult[5] === first1) {
      let tmp11 = cResult[6];
    }
    const tmp13 = useCanCreateAnEventDefault(guild_id);
    const isLive = tmp(10934).useStageChannelStartEvent(channel.id).isLive;
    if (cResult[7] !== first1) {
      const nextRecurrenceIdInEvent = tmp(8504).getNextRecurrenceIdInEvent(first1);
      cResult[7] = first1;
      cResult[8] = nextRecurrenceIdInEvent;
      let tmp14 = nextRecurrenceIdInEvent;
      const tmpResult8 = tmp(8504);
    } else {
      tmp14 = cResult[8];
    }
    if (null == stateFromStores) {
      return null;
    } else {
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.QGnDLs);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t["s/uXzq"]);
        cResult[9] = stringResult;
        cResult[10] = stringResult1;
        let tmp20 = stringResult1;
        let tmp19 = stringResult;
      } else {
        tmp19 = cResult[9];
        tmp20 = cResult[10];
      }
      if (cResult[11] === tmp11) {
        if (cResult[12] === channel) {
          if (cResult[13] === first1) {
            if (cResult[14] === stateFromStores) {
              if (cResult[15] === isLive) {
                if (cResult[16] === tmp14) {
                  let tmp23 = cResult[17];
                }
                if (cResult[18] === channel) {
                  if (cResult[19] === isLive) {
                    if (cResult[20] === moderator) {
                      let tmp26 = cResult[21];
                    }
                    if (cResult[22] === tmp13) {
                      if (cResult[23] === channel) {
                        if (cResult[24] === stateFromStores) {
                          if (cResult[25] === isLive) {
                            let tmp29 = cResult[26];
                          }
                          if (cResult[27] !== onSkip) {
                            const obj2 = { onContinue: onSkip };
                            const tmp34 = closure_5(tmp(10936).ContinueToStagePrompt, obj2);
                            cResult[27] = onSkip;
                            cResult[28] = tmp34;
                            let tmp32 = tmp34;
                          } else {
                            tmp32 = cResult[28];
                          }
                          if (cResult[29] === tmp29) {
                            if (cResult[30] === tmp32) {
                              if (cResult[31] === tmp23) {
                              }
                            }
                          }
                          tmp10 = StageViewWithPromptsDefault;
                          const obj3 = { title: tmp19, body: tmp20, children: null };
                          tmp19 = closure_7;
                          tmp20 = closure_6;
                          const obj4 = { children: null };
                          const items2 = [tmp23, tmp26, tmp29, tmp32];
                          obj4.children = items2;
                          obj3.children = closure_7(closure_6, obj4);
                          tmp2 = closure_5(tmp10, obj3);
                          cResult[29] = tmp29;
                          cResult[30] = tmp32;
                          cResult[31] = tmp23;
                          cResult[32] = tmp26;
                          cResult[33] = tmp2;
                        }
                      }
                    }
                    let tmp30 = null;
                    if (tmp13) {
                      const obj5 = { channel, isLive, guild: stateFromStores };
                      tmp30 = closure_5(tmp(10935).ScheduleEventPrompt, obj5);
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
                  tmp27 = closure_5(tmp(10936).StartStagePrompt, obj6);
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
          tmp24 = closure_5(tmp(10935).StartEventPrompt, obj7);
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
    const tmpResult7 = tmp(10934);
  }
  const canManageGuildEventResult = canManageGuildEvent(first1);
  cResult[4] = canManageGuildEvent;
  cResult[5] = first1;
  cResult[6] = canManageGuildEventResult;
  tmp11 = canManageGuildEventResult;
  const tmpResult6 = guild_id(8556);
}) : (function ModeratorStartStageView(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  const items = [GuildStore];
  const items1 = [guild_id];
  const stateFromStores = guild_id(504).useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  const obj = guild_id(504);
  const first = _slicedToArray(guild_id(8638).useGuildChannelScheduledEvents(channel.id), 1)[0];
  const obj2 = guild_id(8638);
  const obj3 = guild_id(8556);
  const canManageGuildEventResult = guild_id(8556).useManageResourcePermissions(channel).canManageGuildEvent(first);
  const tmp7 = useCanCreateAnEventDefault(guild_id);
  const isLive = guild_id(10934).useStageChannelStartEvent(channel.id).isLive;
  const obj4 = guild_id(10934);
  const nextRecurrenceIdInEvent = guild_id(8504).getNextRecurrenceIdInEvent(first);
  let tmp10Result6 = null;
  if (null != stateFromStores) {
    const obj6 = { title: null, body: null, children: null };
    const intl = tmp(1126).intl;
    obj6.title = intl.string(tmp(1126).t.QGnDLs);
    const intl2 = tmp(1126).intl;
    obj6.body = intl2.string(tmp(1126).t["s/uXzq"]);
    let tmp10Result = null;
    if (canManageGuildEventResult) {
      tmp10Result = null;
      if (null != first) {
        const obj7 = { channel, event: first, isLive, guild: stateFromStores, recurrenceId: nextRecurrenceIdInEvent };
        tmp10Result = closure_5(tmp(10935).StartEventPrompt, obj7);
      }
    }
    const items2 = [tmp10Result, , , ];
    let tmp10Result4 = null;
    if (useCurrentUserStageRolesDefault(channel.id, true).moderator) {
      const obj8 = { channel, isLive };
      tmp10Result4 = closure_5(tmp(10936).StartStagePrompt, obj8);
    }
    items2[1] = tmp10Result4;
    let tmp10Result5 = null;
    if (tmp7) {
      const obj9 = { channel, isLive, guild: stateFromStores };
      tmp10Result5 = closure_5(tmp(10935).ScheduleEventPrompt, obj9);
    }
    const obj10 = { children: null };
    items2[2] = tmp10Result5;
    const obj11 = { onContinue: channel.onSkip };
    items2[3] = closure_5(tmp(10936).ContinueToStagePrompt, obj11);
    obj10.children = items2;
    obj6.children = closure_7(closure_6, obj10);
    tmp10Result6 = closure_5(StageViewWithPromptsDefault, obj6);
    const tmp5Result = StageViewWithPromptsDefault;
  }
  return tmp10Result6;
});