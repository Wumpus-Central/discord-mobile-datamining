// discord_app/modules/stage_channels/native/components/ModeratorStartStageView.tsx
import noopAll from "noop" /* 19 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 12489 */;
import stylesDefault from "styles" /* 12491 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageView.tsx");

export default function ModeratorStartStageView(channel) {
  channel = channel.channel;
  let guild_id;
  guild_id = channel.guild_id;
  let obj = guild_id(589);
  const items = [closure_4];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getGuild(guild_id), items1);
  obj1 = guild_id(8891);
  const first = callback(obj1.useGuildChannelScheduledEvents(channel.id), 1)[0];
  let obj2 = guild_id(8839);
  const canManageGuildEventResult = obj2.useManageResourcePermissions(channel).canManageGuildEvent(first);
  const tmp5 = importDefault;
  let obj3 = guild_id(12490);
  const isLive = obj3.useStageChannelStartEvent(channel.id).isLive;
  let obj4 = guild_id(8785);
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
        tmp10Result = tmp10(tmp(12504).StartEventPrompt, obj);
      }
    }
    const items2 = [tmp10Result, , , ];
    tmp10Result = null;
    if (useCurrentUserStageRolesDefault(channel.id, true).moderator) {
      obj1 = { channel: null, isLive: null };
      obj1[0] = channel;
      obj1[1] = isLive;
      tmp10Result = tmp10(tmp(12505).StartStagePrompt, obj1);
    }
    items2[1] = tmp10Result;
    let tmp10Result1 = null;
    if (tmp7) {
      obj2 = { channel: null, isLive: null, guild: null };
      obj2[0] = channel;
      obj2[1] = isLive;
      obj2[2] = stateFromStores;
      tmp10Result1 = tmp10(tmp(12504).ScheduleEventPrompt, obj2);
    }
    obj3 = { children: null };
    items2[2] = tmp10Result1;
    obj4 = { onContinue: null };
    obj4[0] = channel.onSkip;
    items2[3] = closure_5(tmp(12505).ContinueToStagePrompt, obj4);
    obj3[0] = items2;
    obj[2] = closure_7(closure_6, obj3);
    tmp10Result2 = tmp10(stylesDefault, obj);
    const tmp12 = closure_7;
    const tmp13 = closure_6;
    const tmp5Result = stylesDefault;
  }
  return tmp10Result2;
};