// discord_app/modules/guild_scheduled_events/native/components/GuildScheduledEventDetailsActionSheet.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "scheduledEventSort" /* 4370 */;
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ EventDetailSections: closure_8, MAX_RSVP_USER_DISPLAY_COUNT: c9 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { segmentedControl: null, header: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "column" };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventDetailsActionSheet.tsx");

export default function GuildScheduledEventDetailsActionSheet(eventId) {
  eventId = eventId.eventId;
  const event = eventId.event;
  const onCloseActionSheet = eventId.onCloseActionSheet;
  let stateFromStores;
  let callback;
  let React;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  let items4;
  let tmp = callback3();
  let obj = React;
  const tmp6 = callback(React.useState(eventId.recurrenceId), 2);
  const first = tmp6[0];
  obj1 = eventId(stateFromStores[12]);
  let items = [c7];
  const items1 = [eventId, event];
  stateFromStores = obj1.useStateFromStores(items, () => {
    let guildScheduledEvent = _undefined3.getGuildScheduledEvent(eventId);
    if (guildScheduledEvent == null) {
      guildScheduledEvent = event;
    }
    return guildScheduledEvent;
  }, items1);
  let obj2 = eventId(stateFromStores[12]);
  const items2 = [c6];
  let id;
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return null != _undefined2.getGuild(guild_id);
  });
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let guild_id;
  let tmp4 = event(stateFromStores[10]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const tmp2ResultResult = event(stateFromStores[13])(guild_id, id, first);
  callback = tmp2ResultResult;
  const tmp15 = event(stateFromStores[14])(id, first);
  React = tmp15;
  const items3 = [tmp15, tmp2ResultResult];
  const memo = obj.useMemo(() => {
    let num = 0;
    if (tmp2) {
      const _Math = Math;
      num = Math.max(tmp - length, 0);
    }
    let tmp4 = arr;
    if (num > 0) {
      tmp4 = arr;
      if (arr.length > 0) {
        const items = [];
        const obj = { count: null };
        obj[0] = num;
        items[HermesBuiltin.arraySpread(arr, 0)] = obj;
        tmp4 = items;
      }
    }
    return tmp4;
  }, items3);
  let tmp5Result = tmp5(tmp2(tmp3[15])(() => {
    let id;
    if (stateFromStores != null) {
      id = tmp.id;
    }
    let guild_id;
    if (stateFromStores != null) {
      guild_id = tmp.guild_id;
    }
    return event(stateFromStores[16]).getGuildEventUsers(id, null, guild_id);
  }), 2);
  [c5, tmp18] = tmp5Result;
  ({ loading, error } = tmp18);
  tmp5Result = tmp5(obj.useState(0), 2);
  [tmp20, c6] = tmp5Result;
  const tmp2Result = event(stateFromStores[13]);
  [tmp22, c7] = callback(obj.useState(0), 2);
  const bottom = tmp2(tmp3[17])().bottom;
  callback = obj.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.height);
  }, []);
  items4 = [];
  items4[0] = items4.EVENT_INFO;
  const callback1 = obj.useCallback(() => {

  }, []);
  if (stateFromStores1) {
    items4.push(tmp25.RSVP_LIST);
  }
  eventId(stateFromStores[18]);
  obj = {
    pageWidth: 0,
    defaultIndex: tmp20,
    onSetActiveIndex(arg0) {
      let tmp = arg0 < items4.length;
      if (tmp) {
        tmp = items4[arg0] === items4.RSVP_LIST;
      }
      if (tmp) {
        _undefined();
      }
      _undefined2(arg0);
    },
    items: items4.map((arg0) => {
      if (items4.EVENT_INFO === arg0) {
        const intl3 = eventId(stateFromStores[9]).intl;
        let id = intl3.string(eventId(stateFromStores[9]).t.iW6Xuo);
      } else if (tmp2.RSVP_LIST === arg0) {
        const intl2 = eventId(stateFromStores[9]).intl;
        const obj = { userCount: null };
        obj[0] = tmp;
        id = intl2.formatToPlainString(eventId(stateFromStores[9]).t["ZrTT/N"], obj);
      } else {
        const intl = eventId(stateFromStores[9]).intl;
        id = intl.string(eventId(stateFromStores[9]).t.iW6Xuo);
      }
      return { id, label: id, page: null };
    })
  };
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { style: null, onLayout: null, children: null };
    obj[0] = tmp.header;
    obj[1] = callback1;
    obj1 = { event: null };
    obj1[0] = stateFromStores;
    const items5 = [callback2(tmp8(tmp3[19]).GuildEventCardImageHeader, obj1), ];
    let tmp35Result = null;
    if (items4.length > 1) {
      obj2 = { style: null, children: null };
      obj2[0] = tmp.segmentedControl;
      const obj3 = { state: null };
      obj3[0] = tmp28;
      obj2[1] = tmp35(tmp8(tmp3[20]).SegmentedControl, obj3);
      tmp35Result = tmp35(tmp34, obj2);
    }
    items5[1] = tmp35Result;
    obj[2] = items5;
    const obj4 = { value: null, children: null };
    obj4[0] = tmp4(event(stateFromStores[11]).GUILD_EVENT_MODAL).analyticsLocations;
    const obj5 = { scrollable: true, startExpanded: true, onDismiss: null, header: null, children: null };
    obj5[2] = onCloseActionSheet;
    obj5[3] = closure_11(c5, obj);
    if (tmp31 === tmp25.EVENT_INFO) {
      const obj6 = { children: null };
      const obj7 = { guildEvent: null, safeBottomPadding: null, onCloseActionSheet: null, onLayout: null, recurrenceId: null, onRecurrencePress: null };
      obj7[0] = stateFromStores;
      obj7[1] = bottom;
      obj7[2] = onCloseActionSheet;
      obj7[3] = callback;
      obj7[4] = first;
      obj7[5] = tmp6[1];
      obj6[0] = tmp35(tmp2(tmp3[23]), obj7);
      tmp35Result = tmp35(tmp8(tmp3[22]).BottomSheetScrollView, obj6);
    } else {
      const obj8 = { userListItems: null, guildId: null, loading: null, error: null, contentHeight: null, safeBottomPadding: null };
      obj8[0] = memo;
      obj8[1] = stateFromStores.guild_id;
      obj8[2] = loading;
      obj8[3] = error;
      obj8[4] = tmp22 - bottom;
      obj8[5] = bottom;
      tmp35Result = tmp35(tmp2(tmp3[24]), obj8);
    }
    obj5[4] = tmp35Result;
    obj4[1] = callback2(tmp8(tmp3[21]).BottomSheet, obj5);
    return callback2(tmp8(tmp3[10]).AnalyticsLocationProvider, obj4);
  }
  const tmp5Result1 = callback(obj.useState(0), 2);
};