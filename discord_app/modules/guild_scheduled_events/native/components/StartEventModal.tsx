// === Module 9809: StartEventModal ===

// Module 9809 (StartEventModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import Pressables from "Pressables" /* 5123 */;
import _modDef7089 from "module_7089" /* 7089 */;
import GuildEventCardDefault from "GuildEventCard" /* 9808 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
function NavigationBar(onClose) {
  onClose = onClose.onClose;
  let obj = { children: null };
  obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.onPress = function onPress() {
    return onClose();
  };
  obj = { source: _modDef7089 };
  obj.children = closure_1_12(native.Icon, obj);
  obj.children = closure_1_12(Pressables.PressableOpacity, obj);
  return closure_1_12(View, obj);
}
function StartEventHeader(children) {
  const tmp = closure_14();
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.headerPrivacyLevel, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["q+fFJv"]);
  const items = [closure_1_12(Text_Text.Text, obj), ];
  obj = { style: tmp.headerTitle, variant: "text-md/medium", color: "text-default", children: children.event.name };
  items[1] = closure_1_12(Text_Text.Text, obj);
  obj.children = items;
  return map1(View, obj);
}
class PreviewEventCard {
  constructor(arg0) {
    tmp = closure_14();
    obj = { event: global.event, hideControls: true, style: tmp.previewCard, hideAgeVerificationNotice: true };
    return jsx(closure_1(closure_2[17]), obj);
  }
}
const View = fn(17).View;
const GuildScheduledEventsConstants = fn(1963);
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: closure_9, GuildScheduledEventEntityTypes: c10 } = GuildScheduledEventsConstants);
const START_EVENT_MODAL_KEY = fn(9699).START_EVENT_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = { mainContainer: null, container: null, headerContainer: null, footerContainer: null, header: null, headerTitle: null, buttonContainer: null, previewCard: null, headerPrivacyLevel: null };
createStyles = { flex: 1, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.mainContainer = createStyles;
createStyles.container = { flex: 1, flexDirection: "column", justifyContent: "space-between", alignContent: "center" };
createStyles.headerContainer = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_24 };
createStyles.footerContainer = { display: "flex", flexDirection: "column" };
let obj1 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_24 };
createStyles.header = { alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
createStyles.headerTitle = { lineHeight: 24, textAlign: "center" };
let obj2 = { alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
createStyles.buttonContainer = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
let obj3 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
createStyles.previewCard = { borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 } };
createStyles.headerPrivacyLevel = { textAlign: "center", lineHeight: 18 };
const value = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/StartEventModal.tsx");

export default function StartEventModal(event) {
  event = event.event;
  const onCloseActionSheet = event.onCloseActionSheet;
  closure_3 = undefined;
  let sendStartNotification;
  noop = undefined;
  c6 = undefined;
  function onCloseModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    ModalActionCreatorsDefault.popWithKey(START_EVENT_MODAL_KEY);
    if (onCloseActionSheet != null) {
      onCloseActionSheet(flag);
    }
  }
  closure_8 = async function _handleStart() {
    if (c0 === 2) {
      c0 = 3;
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else if (asyncGeneratorStep) {
            const obj1 = {
              onSuccess() {
                        c1(closure_2_2[11]).popWithKey(closure_2_11);
                        if (closure_1_1 != null) {
                          tmp2(true);
                        }
                      }
            };
            c1 = 1;
            c0 = 1;
            const obj2 = { value: View(event, sendStartNotification, obj1), done: false };
            return obj2;
          } else {
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
        return { value: "HermesInternal", done: null };
      } catch (tmp11) {
        c0 = tmp;
        throw tmp11;
      }
    }
  };
  const tmp = closure_14();
  const guild_id = event.guild_id;
  let obj = event(guild_id[18]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id));
  let obj1 = event(guild_id[18]);
  const items1 = [onCloseModal];
  const items2 = [event];
  let stateFromStores1 = obj1.useStateFromStores(items1, () => ChannelStore.getChannel(event.channel_id), items2);
  let obj2 = event(guild_id[19]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  closure_3 = obj2.useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  const tmp7 = sendStartNotification(noop.useState(event.entity_type === constants.STAGE_INSTANCE), 2);
  sendStartNotification = tmp7[0];
  noop = tmp7[1];
  [c6, tmp11] = sendStartNotification(onCloseActionSheet(guild_id[20])(), 2);
  ({ loading, error } = tmp11);
  const rect = { top: true, bottom: true, style: tmp.mainContainer, children: null };
  const items3 = [closure_12(NavigationBar, { onClose: onCloseModal }), ];
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.headerContainer, children: null };
  const items4 = [closure_12(StartEventHeader, { event }), closure_12(PreviewEventCard, { event })];
  obj.children = items4;
  const items5 = [closure_13(c6, obj), ];
  obj1 = { style: tmp.footerContainer, children: null };
  let hasItem = set.has(event.entity_type);
  if (hasItem) {
    obj2 = { channelId: event.channel_id };
    hasItem = closure_12(onCloseActionSheet(tmp3[22]), obj2);
  }
  const items6 = [hasItem, , ];
  let tmp13Result = null;
  if (event.entity_type === constants.STAGE_INSTANCE) {
    const obj3 = {
      sendStartNotification,
      onToggle: function handleToggleNotifyMembers() {
          closure_5((arg0) => !arg0);
        }
    };
    tmp13Result = closure_12(tmp2(tmp3[23]).NotificationToggle, obj3);
  }
  items6[1] = tmp13Result;
  const obj4 = { style: tmp.buttonContainer, children: null };
  tmp13Result = null;
  if (null != error) {
    const obj5 = { variant: "text-sm/medium", color: "text-feedback-critical", children: error.getAnyErrorMessage() };
    tmp13Result = closure_12(tmp2(tmp3[16]).Text, obj5);
  }
  const items7 = [tmp13Result, ];
  const obj6 = { variant: "active", text: null, onPress: null, disabled: null, loading: null };
  const intl = tmp2(tmp3[13]).intl;
  obj6.text = intl.string(event(guild_id[13]).t.cK1GGY);
  obj6.onPress = function handleStart() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj6.disabled = loading;
  obj6.loading = loading;
  items7[1] = closure_12(event(guild_id[24]).Button, obj6);
  obj4.children = items7;
  items6[2] = closure_13(c6, obj4);
  obj1.children = items6;
  items5[1] = closure_13(c6, obj1);
  obj.children = items5;
  items3[1] = closure_13(c6, obj);
  rect.children = items3;
  return closure_13(event(guild_id[21]).SafeAreaPaddingView, rect);
};
export { PreviewEventCard };