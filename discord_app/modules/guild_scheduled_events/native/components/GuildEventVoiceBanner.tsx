// === Module 13325: GuildEventVoiceBanner ===

// Module 13325 (GuildEventVoiceBanner)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 8976 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9080 */;
import noop from "module_19" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(6946).isGuildScheduledEventActive;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let obj = { header: { margin: 12, padding: 12, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, descriptionContainerStyle: { paddingTop: 4 }, buttonContainer: { marginTop: 12 } };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { margin: 12, padding: 12, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  let event;
  let nextRecurrenceIdInEvent;
  let tmp = closure_9();
  const activeEvent = channel(event[7]).useActiveEvent(channel.id);
  let obj = channel(event[7]);
  const imminentUpcomingGuildEvents = channel(event[7]).useImminentUpcomingGuildEvents(channel.id);
  let obj2 = channel(event[7]);
  const items = [SelectedChannelStore];
  let tmp7 = activeEvent;
  const stateFromStores = channel(event[8]).useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  if (activeEvent == null) {
    event = undefined;
    if (imminentUpcomingGuildEvents != null) {
      event = imminentUpcomingGuildEvents[0];
    }
    tmp7 = event;
  }
  event = tmp7;
  let obj3 = channel(event[8]);
  const tmp2Result = channel(event[9]);
  const canManageGuildEventResult = channel(event[9]).useManageResourcePermissions(channel).canManageGuildEvent(tmp7);
  nextRecurrenceIdInEvent = channel(event[10]).getNextRecurrenceIdInEvent(tmp7);
  const items1 = [tmp7, channel, activeEvent, nextRecurrenceIdInEvent];
  [][0] = tmp7;
  const callback = nextRecurrenceIdInEvent.useCallback(() => {
    let tmp = null == activeEvent;
    if (tmp) {
      tmp = null != first;
    }
    if (tmp) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      let result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(first, nextRecurrenceIdInEvent, () => {
        const result = channel(first[13]).openVoiceChannelActionSheet(closure_1_0);
      });
    }
  }, items1);
  if (null == tmp7) {
    return null;
  } else {
    let tmp18Result = stateFromStores === channel.id;
    const obj4 = { accessibilityRole: "button", onPress: tmp12, style: tmp.header, children: null };
    const obj5 = { event: tmp7, showUserCount: false };
    const items2 = [closure_7(tmp2(tmp3[16]).GuildEventCardHeader, obj5), , ];
    const obj6 = { event: tmp7, descriptionContainerStyle: tmp.descriptionContainerStyle, condensed: tmp18Result };
    items2[1] = closure_7(tmp2(tmp3[16]).GuildEventCardMetaInfo, obj6);
    if (tmp18Result) {
      tmp18Result = canManageGuildEventResult;
    }
    if (tmp18Result) {
      tmp18Result = !tmp16;
    }
    if (tmp18Result) {
      const obj7 = { style: tmp.buttonContainer, children: null };
      const obj8 = { text: null, onPress: null, variant: "active", size: "sm", grow: true };
      const intl = tmp2(tmp3[18]).intl;
      obj8.text = intl.string(tmp2(tmp3[18]).t.cK1GGY);
      obj8.onPress = callback;
      obj7.children = closure_7(tmp2(tmp3[17]).Button, obj8);
      tmp18Result = closure_7(View, obj7);
    }
    items2[2] = tmp18Result;
    obj4.children = items2;
    return closure_8(tmp2(tmp3[15]).PressableOpacity, obj4);
  }
  const tmp2Result2 = channel(event[10]);
});