// discord_app/modules/guild_scheduled_events/native/components/GuildScheduledEventPrompts.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import canManageResource from "../../../permissions/useManageResourcePermissions.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { actionBarCTAContainer: { marginVertical: 4 }, iconStyle: null, iconContainerStyle: null, greenIcon: null };
createCacheKey = { tintColor: ThemesDefault.colors.WHITE, width: 20, height: 20 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.lg, padding: 4 };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.lg, padding: 4 };
createCacheKey[3] = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj2 = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventPrompts.tsx");

export const ScheduleEventPrompt = function ScheduleEventPrompt(isLive) {
  ({ guild: require, channel } = isLive);
  const tmp = callback();
  let obj = canManageResource;
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canCreateGuildEvent) {
    obj = { style: null, onPress: null, iconSource: null, iconStyle: null, iconContainerStyle: null, completed: null, title: null, subtitle: null };
    obj[0] = tmp.actionBarCTAContainer;
    obj[1] = function onPress() {
      let obj = closure_1_0(closure_1_2[6]);
      obj = { channel };
      const result = obj.openCreateOrEditGuildEventModal(closure_0, obj);
    };
    obj[2] = channel(9674);
    ({ iconStyle: obj2[3], iconContainerStyle: obj2[4] } = tmp);
    obj[5] = isLive.isLive;
    const intl = tmp2(1236).intl;
    obj[6] = intl.string(tmp2(1236).t["60lJ0C"]);
    const intl2 = tmp2(1236).intl;
    obj[7] = intl2.string(tmp2(1236).t["EYn7/y"]);
    tmp4 = jsx(tmp2(8295).FormCTA, { style: null, onPress: null, iconSource: null, iconStyle: null, iconContainerStyle: null, completed: null, title: null, subtitle: null });
  }
  return tmp4;
};
export const StartEventPrompt = function StartEventPrompt(event) {
  event = event.event;
  const recurrenceId = event.recurrenceId;
  ({ channel, isLive } = event);
  const tmp = callback();
  ({ name, scheduled_start_time } = event);
  let obj = event(9561);
  let tmp4 = null;
  if (obj.useManageResourcePermissions(channel).canManageGuildEvent(event)) {
    obj = { style: null, onPress: null, iconSource: null, iconStyle: null, iconContainerStyle: null, completed: null, title: null, subtitle: null };
    obj[0] = tmp.actionBarCTAContainer;
    obj[1] = function onPress() {
      const result = event(closure_1_2[6]).openStartGuildEventModal(event, recurrenceId);
    };
    obj[2] = recurrenceId(9674);
    obj[3] = tmp.iconStyle;
    const items = [, ];
    ({ iconContainerStyle: arr[0], greenIcon: arr[1] } = tmp);
    obj[4] = items;
    obj[5] = isLive;
    const intl = tmp2(1236).intl;
    obj = { eventName: null };
    obj[0] = name;
    obj[6] = intl.formatToPlainString(tmp2(1236).t["1vGXqM"], obj);
    const intl2 = tmp2(1236).intl;
    obj1 = { startTime: null };
    obj1[0] = tmp2(4131).calendarFormat(recurrenceId(4043)(scheduled_start_time));
    obj[7] = intl2.formatToPlainString(tmp2(1236).t.PTebCR, obj1);
    tmp4 = jsx(tmp2(8295).FormCTA, { eventName: null });
    const tmp2Result = tmp2(4131);
  }
  return tmp4;
};