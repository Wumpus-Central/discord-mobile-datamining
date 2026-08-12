// discord_app/modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx
import registerAsset from "registerAsset";
import { View } from "openCreateOrEditGuildEventModal";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import scheduledEventSort from "scheduledEventSort";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, eventHeader: { marginStart: 8, flexShrink: 0, flexGrow: 1 }, active: null, actions: null, secondarySmallButton: null, secondarySmallIcon: null };
createCacheKey = { backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_SELECTED, borderRadius: require("Themes").radii.xs };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { alignItems: "center", flexDirection: "row", flexShrink: 0 };
createCacheKey[4] = { flexShrink: 0, alignItems: "center", flexDirection: "row", padding: 8, marginLeft: 8, borderRadius: require("Themes").radii.xs };
let obj1 = { flexShrink: 0, alignItems: "center", flexDirection: "row", padding: 8, marginLeft: 8, borderRadius: require("Themes").radii.xs };
createCacheKey[5] = { tintColor: require("Themes").colors.TEXT_STRONG };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { tintColor: require("Themes").colors.TEXT_STRONG };
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx");

export default function GuildEventRecurrence(recurrenceId) {
  let dependencyMap;
  let isActive;
  recurrenceId = recurrenceId.recurrenceId;
  const guildEventId = recurrenceId.guildEventId;
  ({ onPress: dependencyMap, isActive } = recurrenceId);
  let stateFromStores;
  let stateFromStores1;
  let ensureGuildLoaded;
  let c6;
  let c7;
  const tmp = createCacheKey();
  let obj = recurrenceId(589);
  const items = [c7];
  stateFromStores = obj.useStateFromStores(items, () => _undefined2.getGuildScheduledEvent(guildEventId));
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  obj = guildEventId(8992)(recurrenceId, id);
  let tmp2Result = tmp2(589);
  const items1 = [c6];
  stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return _undefined.getGuild(guild_id);
  });
  tmp2Result = tmp2(589);
  const items2 = [ensureGuildLoaded];
  let stateFromStores2 = tmp2Result.useStateFromStores(items2, () => {
    let channel_id;
    if (stateFromStores != null) {
      channel_id = stateFromStores.channel_id;
    }
    return channel.getChannel(channel_id);
  });
  const tmp5 = guildEventId;
  const tmp6 = guildEventId(8992);
  if (stateFromStores2 == null) {
    stateFromStores2 = stateFromStores1;
  }
  ensureGuildLoaded = recurrenceId(9031).useManageResourcePermissions(stateFromStores2).canManageGuildEvent(stateFromStores);
  const tmp2Result1 = recurrenceId(9031);
  const eventScheduleById = recurrenceId(8993).useEventScheduleById(guildEventId, recurrenceId);
  let toISOStringResult;
  if (eventScheduleById != null) {
    const startTime = eventScheduleById.startTime;
    toISOStringResult = startTime.toISOString();
  }
  c6 = toISOStringResult;
  const items3 = [toISOStringResult];
  const memo = stateFromStores.useMemo(() => {
    let eventTimeData = null;
    if (null != c6) {
      eventTimeData = recurrenceId(outer1_2[12]).getEventTimeData(tmp);
      const obj = recurrenceId(outer1_2[12]);
    }
    return eventTimeData;
  }, items3);
  if (null == stateFromStores) {
    return null;
  } else {
    if (obj == null) {
      obj = {};
    }
    const is_canceled = obj.is_canceled;
    let tmp21Result = undefined !== is_canceled && is_canceled;
    c7 = tmp21Result;
    let str2 = "";
    if (tmp21Result) {
      const intl = tmp2(1236).intl;
      const _HermesInternal = HermesInternal;
      str2 = "" + intl.string(tmp2(1236).t.fyBVRm) + ", ";
    }
    let str4 = "";
    const sum = str2 + stateFromStores.name;
    if (null != memo) {
      const _HermesInternal2 = HermesInternal;
      str4 = ", " + memo.startDateTimeString;
    }
    const sum1 = sum + str4;
    const items4 = [tmp.container, ];
    let active;
    if (isActive) {
      active = tmp.active;
    }
    obj = { style: null, children: null };
    items4[1] = active;
    obj[0] = items4;
    const obj1 = { accessible: true, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    obj1[2] = sum1;
    obj1[3] = function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      if (!c7) {
        if (closure_2 != null) {
          tmp2(recurrenceId);
        }
      }
    };
    obj1[4] = tmp.eventHeader;
    const obj2 = { isActive: null, event: null, showUserCount: false, showCreator: false, recurrenceId: null };
    obj2[0] = isActive;
    obj2[1] = stateFromStores;
    obj2[4] = recurrenceId;
    obj1[5] = callback(tmp2(9002).GuildEventCardHeader, obj2);
    const items5 = [callback(tmp2(4886).PressableOpacity, obj1), ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.actions;
    if (tmp21Result) {
      const obj4 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
      const intl2 = tmp2(1236).intl;
      obj4[2] = intl2.string(tmp2(1236).t.fyBVRm);
      tmp21Result = tmp21(tmp2(4340).Text, obj4);
    }
    const items6 = [tmp21Result, ];
    const obj5 = { accessible: true, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl3 = tmp2(1236).intl;
    const _HermesInternal3 = HermesInternal;
    obj5[2] = "" + intl3.string(tmp2(1236).t.HIgA5a) + ", " + sum1;
    obj5[3] = function onPress(stopPropagation) {
      if (null != stateFromStores) {
        stopPropagation.stopPropagation();
        if (null != stateFromStores1) {
          const result = recurrenceId(outer1_2[17]).showGuildEventModeratorActionSheet(tmp, ensureGuildLoaded, recurrenceId);
          const obj = recurrenceId(outer1_2[17]);
        }
      }
    };
    obj5[4] = tmp.secondarySmallButton;
    const obj6 = { source: null, size: null, style: null };
    obj6[0] = tmp5(9096);
    obj6[1] = tmp2(1297).Icon.Sizes.REFRESH_SMALL_16;
    obj6[2] = tmp.secondarySmallIcon;
    obj5[5] = callback(tmp2(1297).Icon, obj6);
    items6[1] = callback(tmp2(4886).PressableOpacity, obj5);
    obj3[1] = items6;
    items5[1] = closure_9(stateFromStores1, obj3);
    obj[1] = items5;
    return closure_9(stateFromStores1, obj);
  }
  const tmp2Result2 = recurrenceId(8993);
};