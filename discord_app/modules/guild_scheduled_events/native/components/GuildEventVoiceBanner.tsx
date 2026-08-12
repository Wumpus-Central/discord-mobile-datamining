// discord_app/modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx
import importAllResult from "set";
import { View } from "Button";
import handleConnectionOpen from "handleConnectionOpen";
import { isGuildScheduledEventActive as closure_6 } from "scheduledEventSort";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let obj = { header: null, descriptionContainerStyle: null, buttonContainer: null };
obj = { margin: 12, padding: 12, borderRadius: require("Themes").radii.sm, borderColor: require("Themes").colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
obj[0] = obj;
obj[1] = { paddingTop: 4 };
obj[2] = { marginTop: 12 };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  let activeEvent;
  let dependencyMap;
  let nextRecurrenceIdInEvent;
  let tmp = callback3();
  let obj = channel(9083);
  activeEvent = obj.useActiveEvent(channel.id);
  let obj1 = channel(9083);
  const imminentUpcomingGuildEvents = obj1.useImminentUpcomingGuildEvents(channel.id);
  let obj2 = channel(589);
  const items = [handleConnectionOpen];
  let tmp7 = activeEvent;
  const stateFromStores = obj2.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  if (activeEvent == null) {
    let first;
    if (imminentUpcomingGuildEvents != null) {
      first = imminentUpcomingGuildEvents[0];
    }
    tmp7 = first;
  }
  dependencyMap = tmp7;
  let tmp2Result = tmp2(9031);
  tmp2Result = tmp2(8987);
  nextRecurrenceIdInEvent = tmp2Result.getNextRecurrenceIdInEvent(tmp7);
  const items1 = [tmp7, channel, activeEvent, nextRecurrenceIdInEvent];
  [][0] = tmp7;
  const callback = nextRecurrenceIdInEvent.useCallback(() => {
    let tmp = null == activeEvent;
    if (tmp) {
      tmp = null != _undefined;
    }
    if (tmp) {
      activeEvent(_undefined[11]).hideActionSheet();
      const obj = activeEvent(_undefined[11]);
      let result = channel(_undefined[12]).openStartGuildEventModal(_undefined, nextRecurrenceIdInEvent, () => {
        const result = outer1_0(outer1_2[13]).openVoiceChannelActionSheet(closure_0);
      });
      const obj2 = channel(_undefined[12]);
    }
  }, items1);
  if (null == tmp7) {
    return null;
  } else {
    let tmp18Result = stateFromStores === channel.id;
    obj = { accessibilityRole: "button", onPress: null, style: null, children: null };
    obj[1] = tmp12;
    obj[2] = tmp.header;
    obj = { event: null, showUserCount: false };
    obj[0] = tmp7;
    const items2 = [callback2(tmp2(9002).GuildEventCardHeader, obj), , ];
    obj1 = { event: null, descriptionContainerStyle: null, condensed: null };
    obj1[0] = tmp7;
    obj1[1] = tmp.descriptionContainerStyle;
    obj1[2] = tmp18Result;
    items2[1] = callback2(tmp2(9002).GuildEventCardMetaInfo, obj1);
    if (tmp18Result) {
      tmp18Result = canManageGuildEventResult;
    }
    if (tmp18Result) {
      tmp18Result = !tmp16;
    }
    if (tmp18Result) {
      obj2 = { style: null, children: null };
      obj2[0] = tmp.buttonContainer;
      const obj3 = { text: null, onPress: null, variant: "active", size: "sm", grow: true };
      const intl = tmp2(1236).intl;
      obj3[0] = intl.string(tmp2(1236).t.cK1GGY);
      obj3[1] = callback;
      obj2[1] = tmp18(tmp2(4754).Button, obj3);
      tmp18Result = tmp18(View, obj2);
    }
    items2[2] = tmp18Result;
    obj[3] = items2;
    return closure_8(tmp2(4886).PressableOpacity, obj);
  }
  canManageGuildEventResult = tmp2Result.useManageResourcePermissions(channel).canManageGuildEvent(tmp7);
});
let result = require("handleConnectionOpen").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx");

export default memoResult;