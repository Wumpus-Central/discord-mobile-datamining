// === Module 13321: ? ===

// Module 13321
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "handleConnectionOpen" /* 1981 */;
import { isGuildScheduledEventActive as closure_6 } from "scheduledEventSort" /* 7198 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { header: null, descriptionContainerStyle: null, buttonContainer: null };
obj = { margin: 12, padding: 12, borderRadius: ThemesDefault.radii.sm, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[0] = obj;
obj[1] = { paddingTop: 4 };
obj[2] = { marginTop: 12 };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  let activeEvent;
  let first;
  let nextRecurrenceIdInEvent;
  let tmp = callback3();
  let obj = channel(first[7]);
  activeEvent = obj.useActiveEvent(channel.id);
  obj1 = channel(first[7]);
  const imminentUpcomingGuildEvents = obj1.useImminentUpcomingGuildEvents(channel.id);
  let obj2 = channel(first[8]);
  const items = [closure_5];
  let tmp7 = activeEvent;
  const stateFromStores = obj2.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  if (activeEvent == null) {
    first = undefined;
    if (imminentUpcomingGuildEvents != null) {
      first = imminentUpcomingGuildEvents[0];
    }
    tmp7 = first;
  }
  first = tmp7;
  let tmp2Result = tmp2(tmp3[9]);
  tmp2Result = tmp2(tmp3[10]);
  nextRecurrenceIdInEvent = tmp2Result.getNextRecurrenceIdInEvent(tmp7);
  const items1 = [tmp7, channel, activeEvent, nextRecurrenceIdInEvent];
  [][0] = tmp7;
  const callback = nextRecurrenceIdInEvent.useCallback(() => {
    let tmp = null == activeEvent;
    if (tmp) {
      tmp = null != first;
    }
    if (tmp) {
      activeEvent(first[11]).hideActionSheet();
      const obj = activeEvent(first[11]);
      let result = channel(first[12]).openStartGuildEventModal(first, nextRecurrenceIdInEvent, () => {
        const result = closure_1_0(closure_1_2[13]).openVoiceChannelActionSheet(closure_0);
      });
      const obj2 = channel(first[12]);
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
    const items2 = [callback2(tmp2(tmp3[16]).GuildEventCardHeader, obj), , ];
    obj1 = { event: null, descriptionContainerStyle: null, condensed: null };
    obj1[0] = tmp7;
    obj1[1] = tmp.descriptionContainerStyle;
    obj1[2] = tmp18Result;
    items2[1] = callback2(tmp2(tmp3[16]).GuildEventCardMetaInfo, obj1);
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
      const intl = tmp2(tmp3[18]).intl;
      obj3[0] = intl.string(tmp2(tmp3[18]).t.cK1GGY);
      obj3[1] = callback;
      obj2[1] = tmp18(tmp2(tmp3[17]).Button, obj3);
      tmp18Result = tmp18(View, obj2);
    }
    items2[2] = tmp18Result;
    obj[3] = items2;
    return closure_8(tmp2(tmp3[15]).PressableOpacity, obj);
  }
  canManageGuildEventResult = tmp2Result.useManageResourcePermissions(channel).canManageGuildEvent(tmp7);
});
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx");

export default memoResult;