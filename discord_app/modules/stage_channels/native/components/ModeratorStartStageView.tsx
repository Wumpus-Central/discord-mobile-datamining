// discord_app/modules/stage_channels/native/components/ModeratorStartStageView.tsx
import _slicedToArray from "_slicedToArray";
import "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import jsxProd from "jsxProd";
import { useCurrentUserStageRoles } from "../../useCurrentUserStageRoles.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageView.tsx");

export default function ModeratorStartStageView(channel) {
  channel = channel.channel;
  let guild_id;
  guild_id = channel.guild_id;
  let obj = guild_id(589);
  const items = [createGuildRecordFromRust];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(guild_id), items1);
  let obj1 = guild_id(8932);
  const first = callback(obj1.useGuildChannelScheduledEvents(channel.id), 1)[0];
  let obj2 = guild_id(8880);
  const canManageGuildEventResult = obj2.useManageResourcePermissions(channel).canManageGuildEvent(first);
  const tmp5 = importDefault;
  let obj3 = guild_id(10627);
  const isLive = obj3.useStageChannelStartEvent(channel.id).isLive;
  let obj4 = guild_id(8836);
  const nextRecurrenceIdInEvent = obj4.getNextRecurrenceIdInEvent(first);
  let tmp10Result2 = null;
  if (null != stateFromStores) {
    obj = { title: null, body: null, children: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t.QGnDLs);
    const intl2 = tmp(1236).intl;
    obj[1] = intl2.string(tmp(1236).t["s/uXzq"]);
    let tmp10Result = null;
    if (canManageGuildEventResult) {
      tmp10Result = null;
      if (null != first) {
        obj = { channel: null, event: null, isLive: null, guild: null, recurrenceId: null };
        obj[0] = channel;
        obj[1] = first;
        obj[2] = isLive;
        obj[3] = stateFromStores;
        obj[4] = nextRecurrenceIdInEvent;
        tmp10Result = tmp10(tmp(10646).StartEventPrompt, obj);
      }
    }
    const items2 = [tmp10Result, , , ];
    tmp10Result = null;
    if (useCurrentUserStageRoles(channel.id, true).moderator) {
      obj1 = { channel: null, isLive: null };
      obj1[0] = channel;
      obj1[1] = isLive;
      tmp10Result = tmp10(tmp(10647).StartStagePrompt, obj1);
    }
    items2[1] = tmp10Result;
    let tmp10Result1 = null;
    if (tmp7) {
      obj2 = { channel: null, isLive: null, guild: null };
      obj2[0] = channel;
      obj2[1] = isLive;
      obj2[2] = stateFromStores;
      tmp10Result1 = tmp10(tmp(10646).ScheduleEventPrompt, obj2);
    }
    obj3 = { children: null };
    items2[2] = tmp10Result1;
    obj4 = { onContinue: null };
    obj4[0] = channel.onSkip;
    items2[3] = closure_5(tmp(10647).ContinueToStagePrompt, obj4);
    obj3[0] = items2;
    obj[2] = closure_7(closure_6, obj3);
    tmp10Result2 = tmp10(tmp5(10628), obj);
    const tmp12 = closure_7;
    const tmp13 = closure_6;
    const tmp5Result = tmp5(10628);
  }
  return tmp10Result2;
};