// === Module 9237: EditGuildEventModal ===

// Module 9237 (EditGuildEventModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9213 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9214 */;
import EntityUtils from "EntityUtils" /* 9215 */;
import EditGuildEventModalNavbarDefault from "EditGuildEventModalNavbar" /* 9218 */;
import useGetEventChannelsByType from "useGetEventChannelsByType" /* 9238 */;
import EditGuildEventWhereDefault from "EditGuildEventWhere" /* 9239 */;
import EditGuildEventDetailsDefault from "EditGuildEventDetails" /* 9291 */;
import EditGuildEventPreviewDefault from "EditGuildEventPreview" /* 9292 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, constants, guild, obj1, tmp10, tmp4;

let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
let closure_8 = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, cardStyle: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let first;
  let first1;
  let left;
  let right;
  const tmp = guild;
  const tmp2 = first;
  let obj = guild(first[9]);
  const cResult = obj.c(65);
  guild = guild.guild;
  const onCloseModal = guild.onCloseModal;
  const initialGuildEvent = guild.initialGuildEvent;
  const targetChannel = guild.targetChannel;
  closure_10();
  ({ left, right } = onCloseModal(first[10])());
  const tmp5 = onCloseModal(first[10])();
  if (cResult[0] === initialGuildEvent) {
    let tmp6;
    let tmp11;
    if (cResult[1] === targetChannel) {
      tmp6 = cResult[2];
    }
    const tmp9 = first1(react.useState(tmp6), 2);
    first = tmp9[0];
    let closure_4 = tmp9[1];
    if (cResult[3] !== initialGuildEvent) {
      const tmpResult = tmp(tmp2[11]);
      const isEditingEventResult = tmpResult.isEditingEvent(initialGuildEvent);
      cResult[3] = initialGuildEvent;
      cResult[4] = isEditingEventResult;
      tmp11 = isEditingEventResult;
    } else {
      tmp11 = cResult[4];
    }
    first1 = tmp8(react.useState(tmp11), 1)[0];
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
    const first2 = tmp8(react.useState(I), 1)[0];
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
        tmp3 = closure_5;
        if (tmp3) {
          tmp4 = initialGuildEvent;
          tmp5 = null;
          id = undefined;
          if (initialGuildEvent != null) {
            id = tmp4.id;
          }
          if (null != id) {
            tmp8 = closure_1;
            obj3 = closure_1(tmp[13]);
            tmp9 = closure_3;
            tmp10 = guild;
            saveEventResult = obj3.saveEvent(tmp4.id, closure_3, guild.id);
          }
          return saveEventResult;
        }
        obj2 = closure_1(tmp[13]);
        saveEventResult = obj2.createGuildEvent(closure_3, guild.id);
        return;
      }
    }
    cResult[7] = guild.id;
    cResult[8] = first;
    cResult[9] = initialGuildEvent;
    cResult[10] = first1;
    cResult[11] = B;
  }
  const tmpResult2 = tmp(tmp2[11]);
  const initialGuildEventData = tmpResult2.getInitialGuildEventData(initialGuildEvent, targetChannel);
  cResult[0] = initialGuildEvent;
  cResult[1] = targetChannel;
  cResult[2] = initialGuildEventData;
  tmp6 = initialGuildEventData;
}) : ((guild) => {
  let _undefined;
  let c6;
  let initialGuildEvent;
  let left;
  let onClose;
  let right;
  let tmp8;
  const f99947 = () => {
    obj = KeyboardManagerUtilsAll;
    const result = obj.dismissGlobalKeyboard();
    if (first1) {
      let saveEventResult;
      let id;
      if (initialGuildEvent != null) {
        id = initialGuildEvent.id;
      }
      if (null != id) {
        const obj3 = GuildScheduledEventsActionCreatorsDefault;
        saveEventResult = obj3.saveEvent(initialGuildEvent.id, first, guild.id);
      }
      return saveEventResult;
    }
    const obj2 = GuildScheduledEventsActionCreatorsDefault;
    saveEventResult = obj2.createGuildEvent(first, guild.id);
  };
  const customNavbar = () => jsx(EditGuildEventModalNavbarDefault, { screen: PREVIEW2, onClose: importDefault });
  guild = guild.guild;
  ({ onCloseModal: importDefault, initialGuildEvent } = guild);
  let guildEvent;
  let first1;
  react = undefined;
  let obj = function _handleSave2() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
              const obj4 = { value: _undefined(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (null != value) {
              if (closure_128_5) {
                let id;
                if (closure_128_2 != null) {
                  id = closure_128_2.id;
                }
                if (null != id) {
                  const AccessibilityAnnouncer2 = tmp3(guildEvent[15]).AccessibilityAnnouncer;
                  const announce2 = AccessibilityAnnouncer2.announce;
                  const intl2 = tmp3(guildEvent[16]).intl;
                  announce2(intl2.string(tmp3(guildEvent[16]).t["F9On+q"]));
                }
                closure_128_1();
              }
              const AccessibilityAnnouncer = tmp3(guildEvent[15]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = tmp3(guildEvent[16]).intl;
              announce(intl.string(tmp3(guildEvent[16]).t["5HzXO5"]));
            }
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          c2 = 3;
          throw tmp25;
        }
      }
    });
    return obj(...arguments);
  };
  const targetChannel = guild.targetChannel;
  const tmp = closure_10();
  const tmp2 = require("useSafeAreaInsets")();
  ({ left, right } = tmp2);
  obj = guild(guildEvent[11]);
  let tmp3 = first1(react.useState(obj.getInitialGuildEventData(initialGuildEvent, targetChannel)), 2);
  guildEvent = tmp3[0];
  let closure_4 = tmp3[1];
  const useState = react.useState;
  let obj2 = guild(guildEvent[11]);
  first1 = first1(useState(obj2.isEditingEvent(initialGuildEvent)), 1)[0];
  const first2 = first1(react.useState(() => {
    let items1;
    obj = { name: EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR };
    if (first1) {
      const items = [obj, ];
      items[1] = { name: EditGuildEventUtils.EditGuildEventScreens.DETAILS };
      items1 = items;
      const obj2 = { name: EditGuildEventUtils.EditGuildEventScreens.DETAILS };
    } else {
      items1 = [obj];
    }
    return items1;
  }), 1)[0];
  [c6, tmp8] = first1(require("LazyAPIPromise")(f99947), 2);
  constants = {
    guild,
    guildEvent,
    initialGuildEvent,
    isEdit: first1,
    error: tmp8.error,
    loading: tmp8.loading,
    onSave: function handleSave() {
      return obj(...arguments);
    },
    onChange: function handleChange(entityType) {
      let closure_0 = entityType;
      if (null != entityType.entityType) {
        obj = EntityUtils;
        const channelTypeFromEntity = obj.getChannelTypeFromEntity(entityType.entityType);
        const obj2 = useGetEventChannelsByType;
        const first = _slicedToArray(obj2.getEventChannelsByType(guild.id, channelTypeFromEntity), 1)[0];
        let id;
        if (first != null) {
          id = first.id;
        }
        if (id == null) {
          id = null;
        }
        entityType.channelId = id;
        const tmp3 = entityType.entityType !== constants.EXTERNAL && first.entityType === tmp2.EXTERNAL;
        if (tmp3) {
          entityType.entityMetadata = null;
        }
      }
      closure_4((arg0) => {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return obj;
      });
    }
  };
  let obj3 = {};
  let obj4 = {
    title: "",
    customNavbar,
    headerLeft() {
      return null;
    },
    render() {
      EditGuildEventWhereDefault;
      const merged = Object.assign(constants);
      let id;
      if (initialGuildEvent != null) {
        id = initialGuildEvent.id;
      }
      return <tmp2 guildEventId={id} />;
    },
    fullscreen: true
  };
  first1(require("LazyAPIPromise")(f99947), 2);
  const CHANNEL_SELECTOR = guild(guildEvent[11]).EditGuildEventScreens.CHANNEL_SELECTOR;
  const CHANNEL_SELECTOR2 = guild(guildEvent[11]).EditGuildEventScreens.CHANNEL_SELECTOR;
  obj3[CHANNEL_SELECTOR] = obj4;
  const obj5 = {
    title: "",
    customNavbar,
    render() {
      EditGuildEventDetailsDefault;
      const merged = Object.assign(constants);
      return <tmp />;
    },
    fullscreen: true
  };
  const DETAILS = guild(guildEvent[11]).EditGuildEventScreens.DETAILS;
  const DETAILS2 = guild(guildEvent[11]).EditGuildEventScreens.DETAILS;
  obj3[DETAILS] = obj5;
  const obj6 = {
    title: "",
    customNavbar,
    render() {
      EditGuildEventPreviewDefault;
      const merged = Object.assign(constants);
      return <tmp />;
    },
    fullscreen: true
  };
  const PREVIEW = guild(guildEvent[11]).EditGuildEventScreens.PREVIEW;
  const PREVIEW2 = guild(guildEvent[11]).EditGuildEventScreens.PREVIEW;
  obj3[PREVIEW] = obj6;
  let items = [tmp.container, { paddingLeft: left, paddingRight: right }];
  ({ screens: obj3, initialRouteName: guild(guildEvent[11]).EditGuildEventScreens.CHANNEL_SELECTOR, initialRouteStack: first2, cardShadowEnabled: false, cardOverlayEnabled: false, cardStyle: tmp.cardStyle });
  const Navigator = guild(guildEvent[23]).Navigator;
  return <obj style={items}>{null}</obj>;
}));
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModal.tsx");

export default memoResult;