// === Module 13780: GuildEventVoiceBanner ===

// Module 13780 (GuildEventVoiceBanner)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9698 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9789 */;
import noop from "module_19" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(7526).isGuildScheduledEventActive;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let obj = { header: null, descriptionContainerStyle: null, buttonContainer: null };
obj = { margin: 12, padding: 12, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.header = obj;
obj.descriptionContainerStyle = { paddingTop: 4 };
obj.buttonContainer = { marginTop: 12 };
let closure_9 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  let first;
  let nextRecurrenceIdInEvent;
  let tmp = closure_9();
  let obj = channel(first[7]);
  const activeEvent = obj.useActiveEvent(channel.id);
  let obj1 = channel(first[7]);
  const imminentUpcomingGuildEvents = obj1.useImminentUpcomingGuildEvents(channel.id);
  let obj2 = channel(first[8]);
  const items = [SelectedChannelStore];
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
  tmp2(tmp3[9]);
  const tmp2Result = tmp2(tmp3[10]);
  nextRecurrenceIdInEvent = tmp2Result.getNextRecurrenceIdInEvent(tmp7);
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
    obj = { accessibilityRole: "button", onPress: tmp12, style: tmp.header, children: null };
    obj = { event: tmp7, showUserCount: false };
    const items2 = [closure_7(tmp2(tmp3[16]).GuildEventCardHeader, obj), , ];
    obj1 = { event: tmp7, descriptionContainerStyle: tmp.descriptionContainerStyle, condensed: tmp18Result };
    items2[1] = closure_7(tmp2(tmp3[16]).GuildEventCardMetaInfo, obj1);
    if (tmp18Result) {
      tmp18Result = canManageGuildEventResult;
    }
    if (tmp18Result) {
      tmp18Result = !tmp16;
    }
    if (tmp18Result) {
      obj2 = { style: tmp.buttonContainer, children: null };
      const obj3 = { text: null, onPress: null, variant: "active", size: "sm", grow: true };
      const intl = tmp2(tmp3[18]).intl;
      obj3.text = intl.string(tmp2(tmp3[18]).t.cK1GGY);
      obj3.onPress = callback;
      obj2.children = tmp18(tmp2(tmp3[17]).Button, obj3);
      tmp18Result = tmp18(View, obj2);
    }
    items2[2] = tmp18Result;
    obj.children = items2;
    return closure_8(tmp2(tmp3[15]).PressableOpacity, obj);
  }
  canManageGuildEventResult = tmp2Result.useManageResourcePermissions(channel).canManageGuildEvent(tmp7);
});