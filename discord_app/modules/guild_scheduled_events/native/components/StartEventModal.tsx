// discord_app/modules/guild_scheduled_events/native/components/StartEventModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import AssetRegistryDefault from "../../../../../_runtime/06584_AssetRegistry.js";
import GuildEventModalConstants from "../GuildEventModalConstants.tsx";
import GuildEventCardDefault from "GuildEventCard.tsx";
import _asyncToGenerator_mod from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildScheduledEventsConstants from "../../GuildScheduledEventsConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c0, c1, event, onClose;

let c10;
let c9;
let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: c9, GuildScheduledEventEntityTypes: c10 } = GuildScheduledEventsConstants);
const START_EVENT_MODAL_KEY = GuildEventModalConstants.START_EVENT_MODAL_KEY;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  mainContainer: obj2,
  container: { flex: 1, flexDirection: "column", justifyContent: "space-between", alignContent: "center" },
  headerContainer: obj3,
  footerContainer: { display: "flex", flexDirection: "column" },
  header: obj4,
  headerTitle: { lineHeight: 24, textAlign: "center" },
  buttonContainer: obj5,
  previewCard: obj6,
  headerPrivacyLevel: { textAlign: "center", lineHeight: 18 },
};
obj2 = { flex: 1, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_24 };
obj4 = { alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
obj5 = {
  display: "flex",
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_16,
};
obj6 = {
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 16,
  shadowOffset: { height: 8, width: 0 },
};
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let first;
      let obj4;
      let tmp11;
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(6);
      onClose = onClose.onClose;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.cpT0Cq);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== onClose) {
        const fn = function o() {
          return onClose();
        };
        cResult[1] = onClose;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { source: AssetRegistryDefault };
        const Icon = native.Icon;
        const tmp10 = closure_12(Icon, obj2);
        cResult[3] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== tmp6) {
        const obj3 = { children: closure_12(Pressables.PressableOpacity, obj4) };
        obj4 = { accessibilityRole: "button", accessibilityLabel: first, onPress: tmp6, children: tmp7 };
        const tmp14 = closure_12(View, obj3);
        cResult[4] = tmp6;
        cResult[5] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[5];
      }
      return tmp11;
    }
  : (onClose) => {
      let Icon;
      let PressableOpacity;
      let intl;
      let obj2;
      let obj3;
      onClose = onClose.onClose;
      const obj = { children: closure_12(PressableOpacity, obj2) };
      obj2 = {
        accessibilityRole: "button",
        accessibilityLabel: intl.string(intl2.t.cpT0Cq),
        onPress() {
          return onClose();
        },
        children: closure_12(Icon, obj3),
      };
      PressableOpacity = Pressables.PressableOpacity;
      intl = intl2.intl;
      obj3 = { source: AssetRegistryDefault };
      Icon = native.Icon;
      return closure_12(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (event) => {
      let first;
      let header;
      let headerPrivacyLevel;
      let items;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(10);
      event = event.event;
      const tmp4 = closure_14();
      ({ header, headerPrivacyLevel } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t["q+fFJv"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.headerPrivacyLevel) {
        const obj2 = {
          style: headerPrivacyLevel,
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          children: first,
        };
        const tmp9 = closure_12(Text_Text.Text, obj2);
        cResult[1] = tmp4.headerPrivacyLevel;
        cResult[2] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === event.name) {
        let tmp10;
        if (cResult[4] === tmp4.headerTitle) {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp4.header) {
          if (cResult[7] === tmp7) {
            let tmp12;
            if (cResult[8] === tmp10) {
              tmp12 = cResult[9];
            }
            return tmp12;
          }
        }
        const obj3 = { style: header, children: items };
        items = [tmp7, tmp10];
        const tmp15 = map1(View, obj3);
        cResult[6] = tmp4.header;
        cResult[7] = tmp7;
        cResult[8] = tmp10;
        cResult[9] = tmp15;
        tmp12 = tmp15;
      }
      const obj4 = { style: tmp4.headerTitle, variant: "text-md/medium", color: "text-default", children: event.name };
      const tmp11 = closure_12(Text_Text.Text, obj4);
      cResult[3] = event.name;
      cResult[4] = tmp4.headerTitle;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : (event) => {
      let intl;
      let items;
      event = event.event;
      const tmp = closure_14();
      const obj = { style: tmp.header, children: items };
      const obj2 = {
        style: tmp.headerPrivacyLevel,
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        children: intl.string(intl2.t["q+fFJv"]),
      };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items = [closure_12(Text, obj2)];
      const obj3 = { style: tmp.headerTitle, variant: "text-md/medium", color: "text-default", children: event.name };
      items[1] = closure_12(Text_Text.Text, obj3);
      return map1(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (event) => {
      const obj = react2;
      const cResult = obj.c(3);
      event = event.event;
      const tmp3 = closure_14();
      if (cResult[0] === event) {
        let tmp4;
        if (cResult[1] === tmp3.previewCard) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      const obj2 = { event, hideControls: true, style: tmp3.previewCard, hideAgeVerificationNotice: true };
      const tmp5 = closure_12(GuildEventCardDefault, obj2);
      cResult[0] = event;
      cResult[1] = tmp3.previewCard;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (event) => {
      event = event.event;
      const obj = { event, hideControls: true, style: closure_14().previewCard, hideAgeVerificationNotice: true };
      return closure_12(GuildEventCardDefault, obj);
    };
let closure_17 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (event) => {
      let closure_3;
      let closure_5;
      let error;
      let first;
      let first1;
      let guild_id;
      let loading;
      let tmp7;
      let tmp9;
      let tmp = event;
      const tmp2 = guild_id;
      let obj = event(guild_id[13]);
      const cResult = obj.c(58);
      event = event.event;
      const onCloseActionSheet = event.onCloseActionSheet;
      closure_14();
      guild_id = event.guild_id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild_id) {
        const fn = function f() {
          return GuildStore.getGuild(guild_id);
        };
        cResult[1] = guild_id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(tmp2[20]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp10 = F;
        const items1 = [F];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== event.channel_id) {
        class G {
          constructor() {
            return ChannelStore.getChannel(event.channel_id);
          }
        }
        cResult[4] = event.channel_id;
        cResult[5] = G;
      } else {
        class G {
          constructor() {
            return ChannelStore.getChannel(event.channel_id);
          }
        }
      }
      if (cResult[6] !== event) {
        class G {
          constructor() {
            return ChannelStore.getChannel(event.channel_id);
          }
        }
        tmp13[0] = event;
        cResult[6] = event;
        cResult[7] = tmp13;
      } else {
        class G {
          constructor() {
            return ChannelStore.getChannel(event.channel_id);
          }
        }
      }
      const tmpResult3 = tmp(tmp2[20]);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, G, tmp13);
      const useManageResourcePermissions = tmp(tmp2[21]).useManageResourcePermissions;
      tmp(tmp2[21]);
      if (stateFromStores1 == null) {
        class G {
          constructor() {
            return ChannelStore.getChannel(event.channel_id);
          }
        }
      }
      const canManageGuildEvent = useManageResourcePermissions(stateFromStores1).canManageGuildEvent;
      if (cResult[8] === canManageGuildEvent) {
        class G {
          constructor() {
            return ChannelStore.getChannel(event.channel_id);
          }
        }
        _asyncToGenerator = tmp16;
        const tmp19 = event.entity_type === constants.STAGE_INSTANCE;
        const tmp22 = first1(react.useState(tmp19), 2);
        first1 = tmp22[0];
        react = tmp22[1];
        const tmp25 = first1(onCloseActionSheet(tmp2[22])(), 2);
        const first2 = tmp25[0];
        ({ loading, error } = tmp25[1]);
        if (cResult[11] !== onCloseActionSheet) {
          class F {
            constructor(arg0) {
              const tmp = undefined !== arg0 && arg0;
              const obj = ModalActionCreatorsDefault;
              obj.popWithKey(START_EVENT_MODAL_KEY);
              if (onCloseActionSheet != null) {
                onCloseActionSheet(tmp);
              }
            }
          }
          cResult[11] = onCloseActionSheet;
          cResult[12] = F;
        } else {
          class F {
            constructor(arg0) {
              const tmp = undefined !== arg0 && arg0;
              const obj = ModalActionCreatorsDefault;
              obj.popWithKey(START_EVENT_MODAL_KEY);
              if (onCloseActionSheet != null) {
                onCloseActionSheet(tmp);
              }
            }
          }
        }
        F = tmp27;
        if (cResult[13] === tmp16) {
          class F {
            constructor(arg0) {
              const tmp = undefined !== arg0 && arg0;
              const obj = ModalActionCreatorsDefault;
              obj.popWithKey(START_EVENT_MODAL_KEY);
              if (onCloseActionSheet != null) {
                onCloseActionSheet(tmp);
              }
            }
          }
        }
        let closure_0 = _asyncToGenerator(async () => {
          if (c0 === 2) {
            c0 = 3;
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
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else if (closure_1_3) {
                  const obj4 = {
                    onSuccess() {
                      return closure_1_7(true);
                    },
                  };
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: first2(c0, first1, obj4), done: false };
                  return obj5;
                } else {
                  closure_1_7(false);
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c0 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp10) {
              c0 = 3;
              throw tmp10;
            }
          }
        });
        function handleStart() {
          return closure_0(...arguments);
        }
        cResult[13] = tmp16;
        cResult[14] = event;
        cResult[15] = first1;
        cResult[16] = tmp27;
        cResult[17] = first2;
        cResult[18] = handleStart;
      }
      cResult[8] = canManageGuildEvent;
      cResult[9] = event;
      cResult[10] = canManageGuildEvent(event);
      const canManageGuildEventResult = canManageGuildEvent(event);
    }
  : (event) => {
      let _undefined;
      let c6;
      let closure_5;
      let error;
      let intl;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let loading;
      let tmp12;
      event = event.event;
      const onCloseActionSheet = event.onCloseActionSheet;
      let closure_3;
      let sendStartNotification;
      react = undefined;
      c6 = undefined;
      function onCloseModal() {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        obj = ModalActionCreatorsDefault;
        obj.popWithKey(START_EVENT_MODAL_KEY);
        if (onCloseActionSheet != null) {
          onCloseActionSheet(flag);
        }
      }
      let obj = function _handleStart2() {
        obj = _asyncToGenerator(async () => {
          if (c0 === 2) {
            c0 = 3;
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
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else if (closure_2_3) {
                  const obj4 = {
                    onSuccess() {
                      obj = c1(closure_2_2[11]);
                      obj.popWithKey(closure_2_11);
                      if (closure_1_1 != null) {
                        tmp2(true);
                      }
                    },
                  };
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: _undefined(event, sendStartNotification, obj4), done: false };
                  return obj5;
                } else {
                  const flag = false;
                  onCloseModal(false);
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                obj = { value, done: true };
                return obj;
              }
              c0 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp10) {
              c0 = 3;
              throw tmp10;
            }
          }
        });
        return obj(...arguments);
      };
      const tmp = closure_14();
      const guild_id = event.guild_id;
      const tmp2 = event;
      obj = event(guild_id[20]);
      const items = [obj];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id));
      let obj2 = event(guild_id[20]);
      const items1 = [onCloseModal];
      const items2 = [event];
      let stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(event.channel_id), items2);
      const useManageResourcePermissions = event(guild_id[21]).useManageResourcePermissions;
      const tmp6 = event(guild_id[21]);
      if (stateFromStores1 == null) {
        stateFromStores1 = stateFromStores;
      }
      closure_3 = useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
      const tmp8 = sendStartNotification(react.useState(event.entity_type === constants.STAGE_INSTANCE), 2);
      sendStartNotification = tmp8[0];
      react = tmp8[1];
      const tmp10 = onCloseActionSheet;
      [c6, tmp12] = sendStartNotification(onCloseActionSheet(guild_id[22])(), 2);
      ({ loading, error } = tmp12);
      const rect = { top: true, bottom: true, style: tmp.mainContainer, children: items3 };
      const tmp11 = sendStartNotification(onCloseActionSheet(guild_id[22])(), 2);
      const SafeAreaPaddingView = tmp2(tmp3[26]).SafeAreaPaddingView;
      items3 = [closure_12(closure_15, { onClose: onCloseModal })];
      let obj3 = { style: tmp.container, children: items5 };
      let obj4 = { style: tmp.headerContainer, children: items4 };
      items4 = [closure_12(closure_16, { event }), closure_12(closure_17, { event })];
      items5 = [closure_13(c6, obj4)];
      let obj5 = { style: tmp.footerContainer, children: items6 };
      let hasItem = set.has(event.entity_type);
      if (hasItem) {
        const obj6 = { channelId: event.channel_id };
        hasItem = closure_12(tmp10(tmp3[23]), obj6);
      }
      items6 = [hasItem, ,];
      let tmp14Result = null;
      if (event.entity_type === constants.STAGE_INSTANCE) {
        const obj7 = {
          sendStartNotification,
          onToggle: function handleToggleNotifyMembers() {
            closure_5((arg0) => !arg0);
          },
        };
        tmp14Result = closure_12(tmp2(tmp3[24]).NotificationToggle, obj7);
      }
      items6[1] = tmp14Result;
      let tmp14Result2 = null;
      const obj8 = { style: tmp.buttonContainer, children: items7 };
      if (null != error) {
        const obj9 = {
          variant: "text-sm/medium",
          color: "text-feedback-critical",
          children: error.getAnyErrorMessage(),
        };
        const Text = tmp2(tmp3[18]).Text;
        tmp14Result2 = closure_12(Text, obj9);
      }
      items7 = [tmp14Result2];
      const obj10 = {
        variant: "active",
        text: intl.string(tmp2(guild_id[14]).t.cK1GGY),
        onPress: function handleStart() {
          return obj(...arguments);
        },
        disabled: loading,
        loading,
      };
      const Button = tmp2(tmp3[25]).Button;
      intl = tmp2(tmp3[14]).intl;
      items7[1] = closure_12(Button, obj10);
      items6[2] = closure_13(c6, obj8);
      items5[1] = closure_13(c6, obj5);
      items3[1] = closure_13(c6, obj3);
      return closure_13(SafeAreaPaddingView, rect);
    };
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/StartEventModal.tsx");

export default tmp6;
export const PreviewEventCard = tmp5;
