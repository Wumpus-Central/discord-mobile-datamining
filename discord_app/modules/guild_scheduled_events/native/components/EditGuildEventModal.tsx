// === Module 9725: EditGuildEventModal ===

// Module 9725 (EditGuildEventModal)
import nativeDefault from "native" /* 576 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1874 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9703 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9704 */;
import EntityUtils from "EntityUtils" /* 9705 */;
import useGetEventChannelsByType from "useGetEventChannelsByType" /* 9726 */;
import EditGuildEventWhereDefault from "EditGuildEventWhere" /* 9727 */;
import EditGuildEventDetailsDefault from "EditGuildEventDetails" /* 9767 */;
import EditGuildEventPreviewDefault from "EditGuildEventPreview" /* 9768 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_8 = fn(1963).GuildScheduledEventEntityTypes;
const jsx = fn(21).jsx;
fn(4560);
let obj = { container: null, cardStyle: null };
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.cardStyle = createStyles;
let closure_10 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModal.tsx");

export default noop.memo((guild) => {
  guild = guild.guild;
  let PREVIEW = guild;
  ({ onCloseModal: importDefault, initialGuildEvent } = guild);
  let guildEvent;
  let first1;
  noop = undefined;
  closure_7 = async function _handleSave() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 1;
            c2 = 1;
            const obj1 = { value: noop(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else if (null == value) {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } else {
          if (!closure_128_5) {
            const AccessibilityAnnouncer = tmp4(4272).AccessibilityAnnouncer;
            const intl = tmp4(1114).intl;
            AccessibilityAnnouncer.announce(intl.string(tmp4(1114).t["5HzXO5"]));
            closure_128_1();
          } else {
            let id;
            if (closure_128_2 != null) {
              id = closure_128_2.id;
            }
          }
          const AccessibilityAnnouncer2 = tmp4(4272).AccessibilityAnnouncer;
          const intl2 = tmp4(1114).intl;
          AccessibilityAnnouncer2.announce(intl2.string(tmp4(1114).t["F9On+q"]));
        }
      } catch (tmp26) {
        c2 = tmp;
        throw tmp26;
      }
    }
  };
  const tmp = closure_10();
  ({ left, right } = require("useSafeAreaInsets")());
  let obj = PREVIEW(guildEvent[9]);
  let tmp3 = first1(noop.useState(obj.getInitialGuildEventData(initialGuildEvent, guild.targetChannel)), 2);
  guildEvent = tmp3[0];
  closure_4 = tmp3[1];
  let obj1 = PREVIEW(guildEvent[9]);
  first1 = first1(noop.useState(obj1.isEditingEvent(initialGuildEvent)), 1)[0];
  const tmp2 = require("useSafeAreaInsets")();
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
  obj = {};
  obj = { title: "", customNavbar: null, headerLeft: null, render: null, fullscreen: true };
  PREVIEW = PREVIEW(guildEvent[9]).EditGuildEventScreens.CHANNEL_SELECTOR;
  obj.customNavbar = () => closure_9(closure_1(guildEvent[17]), { screen: PREVIEW, onClose: importDefault });
  obj.headerLeft = function headerLeft() {
    return null;
  };
  obj.render = function render() {
    const obj = {};
    const merged = Object.assign(closure_8);
    let id;
    if (initialGuildEvent != null) {
      id = initialGuildEvent.id;
    }
    obj.guildEventId = id;
    return jsx(EditGuildEventWhereDefault, {});
  };
  obj[PREVIEW(guildEvent[9]).EditGuildEventScreens.CHANNEL_SELECTOR] = obj;
  obj1 = { title: "", customNavbar: null, render: null, fullscreen: true };
  PREVIEW = PREVIEW(guildEvent[9]).EditGuildEventScreens.DETAILS;
  obj1.customNavbar = () => closure_9(closure_1(guildEvent[17]), { screen: PREVIEW, onClose: importDefault });
  obj1.render = function render() {
    const merged = Object.assign(closure_8);
    return jsx(EditGuildEventDetailsDefault, {});
  };
  obj[PREVIEW(guildEvent[9]).EditGuildEventScreens.DETAILS] = obj1;
  let obj2 = { title: "", customNavbar: null, render: null, fullscreen: true };
  PREVIEW = PREVIEW(guildEvent[9]).EditGuildEventScreens.PREVIEW;
  obj2.customNavbar = () => closure_9(closure_1(guildEvent[17]), { screen: PREVIEW, onClose: importDefault });
  obj2.render = function render() {
    const merged = Object.assign(closure_8);
    return jsx(EditGuildEventPreviewDefault, {});
  };
  obj[PREVIEW(guildEvent[9]).EditGuildEventScreens.PREVIEW] = obj2;
  let obj3 = { style: null, children: null };
  let items = [tmp.container, { paddingLeft: left, paddingRight: right }];
  obj3.style = items;
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
  obj3.children = jsx(PREVIEW(guildEvent[21]).Navigator, {
    screens: obj,
    initialRouteName: PREVIEW(guildEvent[9]).EditGuildEventScreens.CHANNEL_SELECTOR,
    initialRouteStack: first1(noop.useState(() => {
      let obj = { name: EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR };
      if (first1) {
        const items = [obj, ];
        obj = { name: EditGuildEventUtils.EditGuildEventScreens.DETAILS };
        items[1] = obj;
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
});