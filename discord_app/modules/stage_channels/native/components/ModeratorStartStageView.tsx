// discord_app/modules/stage_channels/native/components/ModeratorStartStageView.tsx
import useCurrentUserStageRolesDefault from "../../useCurrentUserStageRoles.tsx";
import StageViewWithPromptsDefault from "StageViewWithPrompts.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageView.tsx");

export default function ModeratorStartStageView(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  let obj = guild_id(504);
  const items = [GuildStore];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  let obj1 = guild_id(9662);
  const first = _slicedToArray(obj1.useGuildChannelScheduledEvents(channel.id), 1)[0];
  let obj2 = guild_id(9671);
  const canManageGuildEventResult = obj2.useManageResourcePermissions(channel).canManageGuildEvent(first);
  let obj3 = guild_id(9674);
  const isLive = obj3.useStageChannelStartEvent(channel.id).isLive;
  let obj4 = guild_id(9665);
  const nextRecurrenceIdInEvent = obj4.getNextRecurrenceIdInEvent(first);
  let tmp10Result2 = null;
  if (null != stateFromStores) {
    obj = { title: null, body: null, children: null };
    const intl = tmp(1114).intl;
    obj.title = intl.string(tmp(1114).t.QGnDLs);
    const intl2 = tmp(1114).intl;
    obj.body = intl2.string(tmp(1114).t["s/uXzq"]);
    let tmp10Result = null;
    if (canManageGuildEventResult) {
      tmp10Result = null;
      if (null != first) {
        obj = { channel, event: first, isLive, guild: stateFromStores, recurrenceId: nextRecurrenceIdInEvent };
        tmp10Result = closure_5(tmp(9697).StartEventPrompt, obj);
      }
    }
    const items2 = [tmp10Result, , ,];
    tmp10Result = null;
    if (useCurrentUserStageRolesDefault(channel.id, true).moderator) {
      obj1 = { channel, isLive };
      tmp10Result = closure_5(tmp(9898).StartStagePrompt, obj1);
    }
    items2[1] = tmp10Result;
    let tmp10Result1 = null;
    if (tmp7) {
      obj2 = { channel, isLive, guild: stateFromStores };
      tmp10Result1 = closure_5(tmp(9697).ScheduleEventPrompt, obj2);
    }
    obj3 = { children: null };
    items2[2] = tmp10Result1;
    obj4 = { onContinue: channel.onSkip };
    items2[3] = closure_5(tmp(9898).ContinueToStagePrompt, obj4);
    obj3.children = items2;
    obj.children = closure_7(closure_6, obj3);
    tmp10Result2 = closure_5(StageViewWithPromptsDefault, obj);
    const tmp5Result = StageViewWithPromptsDefault;
  }
  return tmp10Result2;
}
