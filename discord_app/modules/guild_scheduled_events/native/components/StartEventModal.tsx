// discord_app/modules/guild_scheduled_events/native/components/StartEventModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import _modDef7336 from "../../../../../_runtime/metro/07336__.js";
import GuildEventCardDefault from "GuildEventCard.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
function NavigationBar(onClose) {
  onClose = onClose.onClose;
  const obj = { children: null };
  const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj2.onPress = function onPress() {
    return onClose();
  };
  obj2.children = closure_1_12(native.Icon, { source: _modDef7336 });
  obj.children = closure_1_12(Pressables.PressableOpacity, obj2);
  return closure_1_12(View, obj);
}
function StartEventHeader(children) {
  const tmp = closure_14();
  const obj = { style: tmp.header, children: null };
  const obj2 = {
    style: tmp.headerPrivacyLevel,
    variant: "heading-lg/bold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t["q+fFJv"]);
  const items = [
    closure_1_12(Text_Text.Text, obj2),
    closure_1_12(Text_Text.Text, {
      style: tmp.headerTitle,
      variant: "text-md/medium",
      color: "text-default",
      children: children.event.name,
    }),
  ];
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
const GuildScheduledEventsConstants = fn(2048);
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: closure_9, GuildScheduledEventEntityTypes: c10 } =
  GuildScheduledEventsConstants);
const START_EVENT_MODAL_KEY = fn(9790).START_EVENT_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  mainContainer: {
    flex: 1,
    padding: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  container: { flex: 1, flexDirection: "column", justifyContent: "space-between", alignContent: "center" },
  headerContainer: null,
  footerContainer: null,
  header: null,
  headerTitle: null,
  buttonContainer: null,
  previewCard: null,
  headerPrivacyLevel: null,
};
let obj3 = { flex: 1, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.headerContainer = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_24 };
obj2.footerContainer = { display: "flex", flexDirection: "column" };
let obj4 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_24 };
obj2.header = { alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
obj2.headerTitle = { lineHeight: 24, textAlign: "center" };
let obj5 = { alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
obj2.buttonContainer = {
  display: "flex",
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_16,
};
let obj6 = {
  display: "flex",
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_16,
};
obj2.previewCard = {
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 16,
  shadowOffset: { height: 8, width: 0 },
};
obj2.headerPrivacyLevel = { textAlign: "center", lineHeight: 18 };
const value = createStyles.createStyles(obj2);
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else if (asyncGeneratorStep) {
            const obj4 = {
              onSuccess() {
                c1(closure_2_2[11]).popWithKey(closure_2_11);
                if (closure_1_1 != null) {
                  tmp2(true);
                }
              },
            };
            c1 = 1;
            c0 = 1;
            const obj5 = { value: View(event, sendStartNotification, obj4), done: false };
            return obj5;
          } else {
            onCloseModal(false);
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
        return { value: "HermesInternal", done: null };
      } catch (tmp11) {
        c0 = tmp;
        throw tmp11;
      }
    }
  };
  const tmp = closure_14();
  const guild_id = event.guild_id;
  const items = [closure_8];
  const stateFromStores = event(guild_id[18]).useStateFromStores(items, () => GuildStore.getGuild(guild_id));
  let obj = event(guild_id[18]);
  const items1 = [onCloseModal];
  const items2 = [event];
  let stateFromStores1 = event(guild_id[18]).useStateFromStores(
    items1,
    () => ChannelStore.getChannel(event.channel_id),
    items2,
  );
  let obj2 = event(guild_id[18]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  closure_3 = event(guild_id[19]).useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  const tmp7 = sendStartNotification(noop.useState(event.entity_type === constants.STAGE_INSTANCE), 2);
  sendStartNotification = tmp7[0];
  noop = tmp7[1];
  let obj3 = event(guild_id[19]);
  const tmp9 = onCloseActionSheet;
  [c6, tmp11] = sendStartNotification(onCloseActionSheet(guild_id[20])(), 2);
  ({ loading, error } = tmp11);
  const rect = { top: true, bottom: true, style: tmp.mainContainer, children: null };
  const items3 = [closure_12(NavigationBar, { onClose: onCloseModal })];
  let obj4 = { style: tmp.container, children: null };
  let obj5 = { style: tmp.headerContainer, children: null };
  const items4 = [closure_12(StartEventHeader, { event }), closure_12(PreviewEventCard, { event })];
  obj5.children = items4;
  const items5 = [closure_13(c6, obj5)];
  const obj6 = { style: tmp.footerContainer, children: null };
  let hasItem = set.has(event.entity_type);
  if (hasItem) {
    const obj7 = { channelId: event.channel_id };
    hasItem = closure_12(tmp9(tmp3[22]), obj7);
  }
  const items6 = [hasItem, ,];
  let tmp13Result = null;
  if (event.entity_type === constants.STAGE_INSTANCE) {
    const obj8 = {
      sendStartNotification,
      onToggle: function handleToggleNotifyMembers() {
        closure_5((arg0) => !arg0);
      },
    };
    tmp13Result = closure_12(tmp2(tmp3[23]).NotificationToggle, obj8);
  }
  items6[1] = tmp13Result;
  const obj9 = { style: tmp.buttonContainer, children: null };
  let tmp13Result2 = null;
  if (null != error) {
    const obj10 = { variant: "text-sm/medium", color: "text-feedback-critical", children: error.getAnyErrorMessage() };
    tmp13Result2 = closure_12(tmp2(tmp3[16]).Text, obj10);
  }
  const items7 = [tmp13Result2];
  const obj11 = { variant: "active", text: null, onPress: null, disabled: null, loading: null };
  const intl = tmp2(tmp3[13]).intl;
  obj11.text = intl.string(event(guild_id[13]).t.cK1GGY);
  obj11.onPress = function handleStart() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj11.disabled = loading;
  obj11.loading = loading;
  items7[1] = closure_12(event(guild_id[24]).Button, obj11);
  obj9.children = items7;
  items6[2] = closure_13(c6, obj9);
  obj6.children = items6;
  items5[1] = closure_13(c6, obj6);
  obj4.children = items5;
  items3[1] = closure_13(c6, obj4);
  rect.children = items3;
  return closure_13(event(guild_id[21]).SafeAreaPaddingView, rect);
}
export { PreviewEventCard };
