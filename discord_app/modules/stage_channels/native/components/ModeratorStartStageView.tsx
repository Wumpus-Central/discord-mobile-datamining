// === Module 9812: ModeratorStartStageView ===

// Module 9812 (ModeratorStartStageView)
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 9821 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9824 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 9826 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1980 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageView.tsx");

export default function ModeratorStartStageView(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  const items = [GuildStore];
  const items1 = [guild_id];
  const stateFromStores = guild_id(504).useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  const obj = guild_id(504);
  const first = _slicedToArray(guild_id(9813).useGuildChannelScheduledEvents(channel.id), 1)[0];
  const obj2 = guild_id(9813);
  const obj3 = guild_id(9822);
  const canManageGuildEventResult = guild_id(9822).useManageResourcePermissions(channel).canManageGuildEvent(first);
  const tmp7 = useCanCreateAnEventDefault(guild_id);
  const isLive = guild_id(9825).useStageChannelStartEvent(channel.id).isLive;
  const obj4 = guild_id(9825);
  const nextRecurrenceIdInEvent = guild_id(9816).getNextRecurrenceIdInEvent(first);
  let tmp10Result6 = null;
  if (null != stateFromStores) {
    const obj6 = { title: null, body: null, children: null };
    const intl = tmp(1115).intl;
    obj6.title = intl.string(tmp(1115).t.QGnDLs);
    const intl2 = tmp(1115).intl;
    obj6.body = intl2.string(tmp(1115).t["s/uXzq"]);
    let tmp10Result = null;
    if (canManageGuildEventResult) {
      tmp10Result = null;
      if (null != first) {
        const obj7 = { channel, event: first, isLive, guild: stateFromStores, recurrenceId: nextRecurrenceIdInEvent };
        tmp10Result = closure_5(tmp(9848).StartEventPrompt, obj7);
      }
    }
    const items2 = [tmp10Result, , , ];
    let tmp10Result4 = null;
    if (useCurrentUserStageRolesDefault(channel.id, true).moderator) {
      const obj8 = { channel, isLive };
      tmp10Result4 = closure_5(tmp(10049).StartStagePrompt, obj8);
    }
    items2[1] = tmp10Result4;
    let tmp10Result5 = null;
    if (tmp7) {
      const obj9 = { channel, isLive, guild: stateFromStores };
      tmp10Result5 = closure_5(tmp(9848).ScheduleEventPrompt, obj9);
    }
    const obj10 = { children: null };
    items2[2] = tmp10Result5;
    const obj11 = { onContinue: channel.onSkip };
    items2[3] = closure_5(tmp(10049).ContinueToStagePrompt, obj11);
    obj10.children = items2;
    obj6.children = closure_7(closure_6, obj10);
    tmp10Result6 = closure_5(StageViewWithPromptsDefault, obj6);
    const tmp5Result = StageViewWithPromptsDefault;
  }
  return tmp10Result6;
};