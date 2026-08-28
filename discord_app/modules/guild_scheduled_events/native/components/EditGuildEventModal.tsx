// === Module 9634: ? ===

// Module 9634
import ThemesDefault from "Themes" /* 712 */;
import EditGuildEventModalNavbarDefault from "EditGuildEventModalNavbar" /* 9616 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { GuildScheduledEventEntityTypes as closure_7 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
let obj = { cardStyle: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((guild) => {
  guild = guild.guild;
  let PREVIEW = guild;
  ({ onCloseModal: importDefault, initialGuildEvent } = guild);
  let first;
  closure_4 = undefined;
  let first1;
  jsx = undefined;
  function _handleSave() {
    const self = this;
    const tmp = callback(function*() {
      if (id === 2) {
        id = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          id = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              id = 3;
              throw arg1;
            } else if (arg0 === 2) {
              id = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp4;
              v0 = 1;
              id = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_6();
              return obj1;
            }
          } else if (arg0 === 1) {
            id = 3;
            throw arg1;
          } else if (arg0 === 2) {
            id = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (null == arg1) {
            id = 3;
            return { value: "HermesInternal", done: null };
          } else {
            if (!closure_5) {
              const AccessibilityAnnouncer = closure_1_0(closure_1_3[11]).AccessibilityAnnouncer;
              const intl = closure_1_0(closure_1_3[12]).intl;
              AccessibilityAnnouncer.announce(intl.string(closure_1_0(closure_1_3[12]).t["5HzXO5"]));
              v0();
            } else {
              id = undefined;
              if (id != null) {
                id = id.id;
              }
            }
            const AccessibilityAnnouncer2 = closure_1_0(closure_1_3[11]).AccessibilityAnnouncer;
            const intl2 = closure_1_0(closure_1_3[12]).intl;
            AccessibilityAnnouncer2.announce(intl2.string(closure_1_0(closure_1_3[12]).t["F9On+q"]));
          }
        } catch (tmp26) {
          id = tmp;
          throw tmp26;
        }
      }
    });
    closure_7 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj = PREVIEW(first[7]);
  const tmp2 = first1(undefined.useState(obj.getInitialGuildEventData(initialGuildEvent, guild.targetChannel)), 2);
  first = tmp2[0];
  closure_4 = tmp2[1];
  obj1 = PREVIEW(first[7]);
  first1 = first1(importAllResult.useState(obj1.isEditingEvent(initialGuildEvent)), 1)[0];
  let tmp = callback();
  [c6, tmp6] = first1(importDefault(first[8])(() => {
    const result = initialGuildEvent(first[9]).dismissGlobalKeyboard();
    if (first1) {
      let id;
      if (initialGuildEvent != null) {
        id = tmp3.id;
      }
      if (null != id) {
        let saveEventResult = closure_1_1(tmp[10]).saveEvent(tmp3.id, first, PREVIEW.id);
        const obj3 = closure_1_1(tmp[10]);
      }
      return saveEventResult;
    }
    const obj = initialGuildEvent(first[9]);
    saveEventResult = closure_1_1(first[10]).createGuildEvent(first, PREVIEW.id);
  }), 2);
  jsx = {
    guild,
    guildEvent: first,
    initialGuildEvent,
    isEdit: first1,
    error: tmp6.error,
    loading: tmp6.loading,
    onSave: function handleSave() {
      const self = this;
      const apply = _handleSave.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    onChange: function handleChange(entityType) {
      PREVIEW = entityType;
      if (null != entityType.entityType) {
        const channelTypeFromEntity = PREVIEW(first[13]).getChannelTypeFromEntity(entityType.entityType);
        const obj = PREVIEW(first[13]);
        first = first1(PREVIEW(first[14]).getEventChannelsByType(PREVIEW.id, channelTypeFromEntity), 1)[0];
        let id;
        if (first != null) {
          id = first.id;
        }
        if (id == null) {
          id = null;
        }
        entityType.channelId = id;
        let tmp3 = entityType.entityType !== _handleSave.EXTERNAL;
        if (tmp3) {
          tmp3 = first.entityType === tmp2.EXTERNAL;
        }
        if (tmp3) {
          entityType.entityMetadata = null;
        }
        const obj2 = PREVIEW(first[14]);
      }
      callback((arg0) => {
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return {};
      });
    }
  };
  obj = {};
  obj = { title: "", customNavbar: null, headerLeft: null, render: null, fullscreen: true };
  PREVIEW = PREVIEW(first[7]).EditGuildEventScreens.CHANNEL_SELECTOR;
  obj[1] = () => jsx(EditGuildEventModalNavbarDefault, { screen: PREVIEW, onClose: closure_1_1 });
  obj[2] = function headerLeft() {
    return null;
  };
  obj[3] = function render() {
    const obj = {};
    const merged = Object.assign(closure_8);
    let id;
    if (initialGuildEvent != null) {
      id = initialGuildEvent.id;
    }
    obj.guildEventId = id;
    return closure_8(closure_1_1(first[16]), obj);
  };
  obj[PREVIEW(first[7]).EditGuildEventScreens.CHANNEL_SELECTOR] = obj;
  obj1 = { title: "", customNavbar: null, render: null, fullscreen: true };
  PREVIEW = PREVIEW(first[7]).EditGuildEventScreens.DETAILS;
  obj1[1] = () => jsx(EditGuildEventModalNavbarDefault, { screen: PREVIEW, onClose: closure_1_1 });
  obj1[2] = function render() {
    const merged = Object.assign(callback2);
    return callback2(closure_1_1(first[17]), {});
  };
  obj[PREVIEW(first[7]).EditGuildEventScreens.DETAILS] = obj1;
  let obj2 = { title: "", customNavbar: null, render: null, fullscreen: true };
  PREVIEW = PREVIEW(first[7]).EditGuildEventScreens.PREVIEW;
  obj2[1] = () => jsx(EditGuildEventModalNavbarDefault, { screen: PREVIEW, onClose: closure_1_1 });
  obj2[2] = function render() {
    const merged = Object.assign(callback2);
    return callback2(closure_1_1(first[18]), {});
  };
  obj[PREVIEW(first[7]).EditGuildEventScreens.PREVIEW] = obj2;
  const tmp5 = first1(importDefault(first[8])(() => {
    const result = initialGuildEvent(first[9]).dismissGlobalKeyboard();
    if (first1) {
      let id;
      if (initialGuildEvent != null) {
        id = tmp3.id;
      }
      if (null != id) {
        let saveEventResult = closure_1_1(tmp[10]).saveEvent(tmp3.id, first, PREVIEW.id);
        const obj3 = closure_1_1(tmp[10]);
      }
      return saveEventResult;
    }
    const obj = initialGuildEvent(first[9]);
    saveEventResult = closure_1_1(first[10]).createGuildEvent(first, PREVIEW.id);
  }), 2);
  return jsx(PREVIEW(first[19]).Navigator, {
    screens: obj,
    initialRouteName: PREVIEW(first[7]).EditGuildEventScreens.CHANNEL_SELECTOR,
    initialRouteStack: first1(undefined.useState(() => {
      let obj = { name: PREVIEW(first[7]).EditGuildEventScreens.CHANNEL_SELECTOR };
      if (first1) {
        const items = [obj, ];
        obj = { name: null };
        obj[0] = PREVIEW(first[7]).EditGuildEventScreens.DETAILS;
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
});
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModal.tsx");

export default memoResult;