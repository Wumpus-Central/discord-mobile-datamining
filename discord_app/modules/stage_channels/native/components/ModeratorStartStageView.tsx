// === Module 10119: ModeratorStartStageView ===

// Module 10119 (ModeratorStartStageView)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8471 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 10120 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 10122 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4788 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: closure_6, jsxs: metroImportDefault } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageView.tsx");

export default function ModeratorStartStageView(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  items = [GuildStore];
  const items1 = [guild_id];
  const stateFromStores = guild_id(504).useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  const obj = guild_id(504);
  const first = _slicedToArray(guild_id(8322).useGuildChannelScheduledEvents(channel.id), 1)[0];
  const obj2 = guild_id(8322);
  const obj3 = guild_id(8330);
  const canManageGuildEventResult = guild_id(8330).useManageResourcePermissions(channel).canManageGuildEvent(first);
  const tmp7 = useCanCreateAnEventDefault(guild_id);
  const isLive = guild_id(10121).useStageChannelStartEvent(channel.id).isLive;
  const obj4 = guild_id(10121);
  const nextRecurrenceIdInEvent = guild_id(8325).getNextRecurrenceIdInEvent(first);
  let tmp10Result6 = null;
  if (null != stateFromStores) {
    const obj6 = { title: null, body: null, children: null };
    const intl = tmp(1112).intl;
    obj6.title = intl.string(tmp(1112).t.QGnDLs);
    const intl2 = tmp(1112).intl;
    obj6.body = intl2.string(tmp(1112).t["s/uXzq"]);
    let tmp10Result = null;
    if (canManageGuildEventResult) {
      tmp10Result = null;
      if (null != first) {
        const obj7 = { channel, event: first, isLive, guild: stateFromStores, recurrenceId: nextRecurrenceIdInEvent };
        tmp10Result = closure_5(tmp(10152).StartEventPrompt, obj7);
      }
    }
    const items2 = [tmp10Result, , , ];
    let tmp10Result4 = null;
    if (useCurrentUserStageRolesDefault(channel.id, true).moderator) {
      const obj8 = { channel, isLive };
      tmp10Result4 = closure_5(tmp(10153).StartStagePrompt, obj8);
    }
    items2[1] = tmp10Result4;
    let tmp10Result5 = null;
    if (tmp7) {
      const obj9 = { channel, isLive, guild: stateFromStores };
      tmp10Result5 = closure_5(tmp(10152).ScheduleEventPrompt, obj9);
    }
    const obj10 = { children: null };
    items2[2] = tmp10Result5;
    const obj11 = { onContinue: channel.onSkip };
    items2[3] = closure_5(tmp(10153).ContinueToStagePrompt, obj11);
    obj10.children = items2;
    obj6.children = closure_7(closure_6, obj10);
    tmp10Result6 = closure_5(StageViewWithPromptsDefault, obj6);
    const tmp5Result = StageViewWithPromptsDefault;
  }
  return tmp10Result6;
};