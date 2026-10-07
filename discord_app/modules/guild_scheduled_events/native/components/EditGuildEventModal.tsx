// === Module 9237: EditGuildEventModal ===

// Module 9237 (EditGuildEventModal)
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9213 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9214 */;
import EntityUtils from "EntityUtils" /* 9215 */;
import EditGuildEventModalNavbarDefault from "EditGuildEventModalNavbar" /* 9218 */;
import useGetEventChannelsByType from "useGetEventChannelsByType" /* 9238 */;
import EditGuildEventWhereDefault from "EditGuildEventWhere" /* 9239 */;
import EditGuildEventDetailsDefault from "EditGuildEventDetails" /* 9291 */;
import EditGuildEventPreviewDefault from "EditGuildEventPreview" /* 9292 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_8 = fn(2057).GuildScheduledEventEntityTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, cardStyle: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.cardStyle = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModal.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(first[9]).c(65);
  guild = guild.guild;
  const onCloseModal = guild.onCloseModal;
  const initialGuildEvent = guild.initialGuildEvent;
  const targetChannel = guild.targetChannel;
  closure_10();
  let obj = guild(first[9]);
  ({ left, right } = onCloseModal(first[10])());
  if (cResult[0] === initialGuildEvent) {
    if (cResult[1] === targetChannel) {
      let tmp6 = cResult[2];
    }
    const tmp9 = first1(noop.useState(tmp6), 2);
    first = tmp9[0];
    closure_4 = tmp9[1];
    if (cResult[3] !== initialGuildEvent) {
      const isEditingEventResult = tmp(tmp2[11]).isEditingEvent(initialGuildEvent);
      cResult[3] = initialGuildEvent;
      cResult[4] = isEditingEventResult;
      let tmp11 = isEditingEventResult;
      const tmpResult = tmp(tmp2[11]);
    } else {
      tmp11 = cResult[4];
    }
    first1 = tmp8(noop.useState(tmp11), 1)[0];
    if (cResult[5] !== first1) {
      class I {
        constructor() {
          obj = { name: closure_0(closure_3[11]).EditGuildEventScreens.CHANNEL_SELECTOR };
          if (closure_5) {
            items = [, ];
            items[0] = obj;
            obj1 = { name: null };
            tmp = closure_0;
            tmp2 = closure_3;
            obj1.name = closure_0(closure_3[11]).EditGuildEventScreens.DETAILS;
            items[1] = obj1;
            items1 = items;
          } else {
            items1 = [];
            items1[0] = obj;
          }
          return items1;
        }
      }
      cResult[5] = first1;
      cResult[6] = I;
    } else {
      class I {
        constructor() {
          obj = { name: closure_0(closure_3[11]).EditGuildEventScreens.CHANNEL_SELECTOR };
          if (closure_5) {
            items = [, ];
            items[0] = obj;
            obj1 = { name: null };
            tmp = closure_0;
            tmp2 = closure_3;
            obj1.name = closure_0(closure_3[11]).EditGuildEventScreens.DETAILS;
            items[1] = obj1;
            items1 = items;
          } else {
            items1 = [];
            items1[0] = obj;
          }
          return items1;
        }
      }
    }
    const first2 = tmp8(noop.useState(I), 1)[0];
    if (cResult[7] === guild.id) {
      class I {
        constructor() {
          obj = { name: closure_0(closure_3[11]).EditGuildEventScreens.CHANNEL_SELECTOR };
          if (closure_5) {
            items = [, ];
            items[0] = obj;
            obj1 = { name: null };
            tmp = closure_0;
            tmp2 = closure_3;
            obj1.name = closure_0(closure_3[11]).EditGuildEventScreens.DETAILS;
            items[1] = obj1;
            items1 = items;
          } else {
            items1 = [];
            items1[0] = obj;
          }
          return items1;
        }
      }
    }
    class B {
      constructor() {
        tmp = closure_3;
        obj = closure_2(closure_3[12]);
        result = obj.dismissGlobalKeyboard();
        if (closure_5) {
          tmp3 = initialGuildEvent;
          tmp4 = null;
          id = undefined;
          if (initialGuildEvent != null) {
            id = tmp3.id;
          }
          if (null != id) {
            tmp7 = closure_1;
            obj3 = closure_1(tmp[13]);
            tmp8 = closure_3;
            tmp9 = closure_0;
            saveEventResult = obj3.saveEvent(tmp3.id, closure_3, closure_0.id);
          }
          return saveEventResult;
        }
        obj2 = closure_1(tmp[13]);
        saveEventResult = obj2.createGuildEvent(closure_3, closure_0.id);
        return;
      }
    }
    cResult[7] = guild.id;
    cResult[8] = first;
    cResult[9] = initialGuildEvent;
    cResult[10] = first1;
    cResult[11] = B;
  }
  const tmp5 = onCloseModal(first[10])();
  const initialGuildEventData = guild(first[11]).getInitialGuildEventData(initialGuildEvent, targetChannel);
  cResult[0] = initialGuildEvent;
  cResult[1] = targetChannel;
  cResult[2] = initialGuildEventData;
  tmp6 = initialGuildEventData;
  const tmpResult2 = guild(first[11]);
}) : ((guild) => {
  guild = guild.guild;
  let PREVIEW = guild;
  ({ onCloseModal: importDefault, initialGuildEvent } = guild);
  let guildEvent;
  let first1;
  noop = undefined;
  closure_7 = async function _handleSave2() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c1 = 1;
            c2 = 1;
            const obj4 = { value: noop(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else if (null == value) {
          c2 = 3;
          return { value: "IconComponent", done: null };
        } else {
          if (!closure_128_5) {
            const AccessibilityAnnouncer = tmp4(4596).AccessibilityAnnouncer;
            const intl = tmp4(1126).intl;
            AccessibilityAnnouncer.announce(intl.string(tmp4(1126).t["5HzXO5"]));
            closure_128_1();
          } else {
            let id;
            if (closure_128_2 != null) {
              id = closure_128_2.id;
            }
          }
          const AccessibilityAnnouncer2 = tmp4(4596).AccessibilityAnnouncer;
          const intl2 = tmp4(1126).intl;
          AccessibilityAnnouncer2.announce(intl2.string(tmp4(1126).t["F9On+q"]));
        }
      } catch (tmp26) {
        c2 = tmp;
        throw tmp26;
      }
    }
  };
  const tmp = closure_10();
  ({ left, right } = require("useSafeAreaInsets")());
  const tmp2 = require("useSafeAreaInsets")();
  let tmp3 = first1(noop.useState(PREVIEW(guildEvent[11]).getInitialGuildEventData(initialGuildEvent, guild.targetChannel)), 2);
  guildEvent = tmp3[0];
  closure_4 = tmp3[1];
  let obj = PREVIEW(guildEvent[11]);
  first1 = first1(noop.useState(PREVIEW(guildEvent[11]).isEditingEvent(initialGuildEvent)), 1)[0];
  let obj2 = PREVIEW(guildEvent[11]);
  [c6, tmp7] = first1(require("LazyAPIPromise")(() => {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    if (first1) {
      let id;
      if (initialGuildEvent != null) {
        id = initialGuildEvent.id;
      }
      if (null != id) {
        let saveEventResult = GuildScheduledEventsActionCreatorsDefault.saveEvent(initialGuildEvent.id, first, PREVIEW.id);
      }
      return saveEventResult;
    }
    saveEventResult = GuildScheduledEventsActionCreatorsDefault.createGuildEvent(first, PREVIEW.id);
  }), 2);
  constants = {
    guild,
    guildEvent,
    initialGuildEvent,
    isEdit: first1,
    error: tmp7.error,
    loading: tmp7.loading,
    onSave: function handleSave() {
      const self = this;
      const apply = closure_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    onChange: function handleChange(entityType) {
      closure_0 = entityType;
      if (null != entityType.entityType) {
        const channelTypeFromEntity = EntityUtils.getChannelTypeFromEntity(entityType.entityType);
        const first = _slicedToArray(useGetEventChannelsByType.getEventChannelsByType(PREVIEW.id, channelTypeFromEntity), 1)[0];
        let id;
        if (first != null) {
          id = first.id;
        }
        if (id == null) {
          id = null;
        }
        entityType.channelId = id;
        let tmp3 = entityType.entityType !== constants.EXTERNAL;
        if (tmp3) {
          tmp3 = first.entityType === tmp2.EXTERNAL;
        }
        if (tmp3) {
          entityType.entityMetadata = null;
        }
      }
      closure_4((arg0) => {
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return {};
      });
    }
  };
  let obj3 = {};
  let obj4 = { title: "", customNavbar: null, headerLeft: null, render: null, fullscreen: true };
  PREVIEW = PREVIEW(guildEvent[11]).EditGuildEventScreens.CHANNEL_SELECTOR;
  obj4.customNavbar = () => closure_9(closure_1(guildEvent[19]), { screen: PREVIEW, onClose: importDefault });
  obj4.headerLeft = function headerLeft() {
    return null;
  };
  obj4.render = function render() {
    const obj = {};
    const merged = Object.assign(closure_8);
    let id;
    if (initialGuildEvent != null) {
      id = initialGuildEvent.id;
    }
    obj.guildEventId = id;
    return jsx(EditGuildEventWhereDefault, {});
  };
  obj3[PREVIEW(guildEvent[11]).EditGuildEventScreens.CHANNEL_SELECTOR] = obj4;
  const obj5 = { title: "", customNavbar: null, render: null, fullscreen: true };
  PREVIEW = PREVIEW(guildEvent[11]).EditGuildEventScreens.DETAILS;
  obj5.customNavbar = () => closure_9(closure_1(guildEvent[19]), { screen: PREVIEW, onClose: importDefault });
  obj5.render = function render() {
    const merged = Object.assign(closure_8);
    return jsx(EditGuildEventDetailsDefault, {});
  };
  obj3[PREVIEW(guildEvent[11]).EditGuildEventScreens.DETAILS] = obj5;
  const obj6 = { title: "", customNavbar: null, render: null, fullscreen: true };
  PREVIEW = PREVIEW(guildEvent[11]).EditGuildEventScreens.PREVIEW;
  obj6.customNavbar = () => closure_9(closure_1(guildEvent[19]), { screen: PREVIEW, onClose: importDefault });
  obj6.render = function render() {
    const merged = Object.assign(closure_8);
    return jsx(EditGuildEventPreviewDefault, {});
  };
  obj3[PREVIEW(guildEvent[11]).EditGuildEventScreens.PREVIEW] = obj6;
  const obj7 = { style: null, children: null };
  let items = [tmp.container, { paddingLeft: left, paddingRight: right }];
  obj7.style = items;
  const tmp6 = first1(require("LazyAPIPromise")(() => {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    if (first1) {
      let id;
      if (initialGuildEvent != null) {
        id = initialGuildEvent.id;
      }
      if (null != id) {
        let saveEventResult = GuildScheduledEventsActionCreatorsDefault.saveEvent(initialGuildEvent.id, first, PREVIEW.id);
      }
      return saveEventResult;
    }
    saveEventResult = GuildScheduledEventsActionCreatorsDefault.createGuildEvent(first, PREVIEW.id);
  }), 2);
  obj7.children = jsx(PREVIEW(guildEvent[23]).Navigator, {
    screens: obj3,
    initialRouteName: PREVIEW(guildEvent[11]).EditGuildEventScreens.CHANNEL_SELECTOR,
    initialRouteStack: first1(noop.useState(() => {
      const obj = { name: EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR };
      if (first1) {
        const items = [obj, ];
        const obj2 = { name: EditGuildEventUtils.EditGuildEventScreens.DETAILS };
        items[1] = obj2;
        let items1 = items;
      } else {
        items1 = [obj];
      }
      return items1;
    }), 1)[0],
    cardShadowEnabled: false,
    cardOverlayEnabled: false,
    cardStyle: tmp.cardStyle
  });
  return <closure_7 style={null}>{null}</closure_7>;
}));