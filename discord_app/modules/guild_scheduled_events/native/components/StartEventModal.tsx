// discord_app/modules/guild_scheduled_events/native/components/StartEventModal.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _slicedToArray from "_slicedToArray";
import canManageResource from "canManageResource";
import { View } from "GuildEventCardControls";
import ensureGuildLoaded from "ensureGuildLoaded";
import closure_8 from "createGuildRecordFromRust";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import { START_EVENT_MODAL_KEY } from "CREATE_GUILD_EVENT_MODAL_KEY";
import jsxProd from "SafeAreaPaddingView";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let map1;
const require = arg1;
function NavigationBar(onClose) {
  onClose = onClose.onClose;
  let obj = { children: null };
  obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = onClose(1236).intl;
  obj[1] = intl.string(onClose(1236).t.cpT0Cq);
  obj[2] = function onPress() {
    return onClose();
  };
  obj = { source: null };
  obj[0] = require("../../../../../_runtime/07870_registerAsset.js");
  obj[3] = callback(onClose(1297).Icon, obj);
  obj[0] = callback(onClose(4812).PressableOpacity, obj);
  return callback(View, obj);
}
function StartEventHeader(children) {
  const tmp = createCacheKey();
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.headerPrivacyLevel, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["q+fFJv"]);
  const items = [callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), ];
  obj = { style: tmp.headerTitle, variant: "text-md/medium", color: "text-default", children: children.event.name };
  items[1] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
class PreviewEventCard {
  constructor(arg0) {
    tmp = jsxs();
    obj = { event: global.event, hideControls: true, style: tmp.previewCard, hideAgeVerificationNotice: true };
    return jsx(require("GuildEventCardControls"), obj);
  }
}
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: c9, GuildScheduledEventEntityTypes: c10 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { mainContainer: null, container: null, headerContainer: null, footerContainer: null, header: null, headerTitle: null, buttonContainer: null, previewCard: null, headerPrivacyLevel: null };
createCacheKey = { flex: 1, padding: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "column", justifyContent: "space-between", alignContent: "center" };
createCacheKey[2] = { display: "flex", flexDirection: "column", gap: require("Themes").space.PX_24 };
createCacheKey[3] = { display: "flex", flexDirection: "column" };
let obj1 = { display: "flex", flexDirection: "column", gap: require("Themes").space.PX_24 };
createCacheKey[4] = { alignItems: "center", paddingTop: require("Themes").space.PX_24 };
createCacheKey[5] = { lineHeight: 24, textAlign: "center" };
let obj2 = { alignItems: "center", paddingTop: require("Themes").space.PX_24 };
createCacheKey[6] = { display: "flex", flexDirection: "column", gap: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_16 };
let obj3 = { display: "flex", flexDirection: "column", gap: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_16 };
createCacheKey[7] = { borderColor: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 } };
createCacheKey[8] = { textAlign: "center", lineHeight: 18 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { borderColor: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 } };
const result = require("noop").fileFinishedImporting("modules/guild_scheduled_events/native/components/StartEventModal.tsx");

export default function StartEventModal(event) {
  let c6;
  let error;
  let loading;
  let tmp11;
  event = event.event;
  const onCloseActionSheet = event.onCloseActionSheet;
  let guild_id;
  let createGuildRecordFromRust;
  let first;
  let React;
  c6 = undefined;
  function onCloseModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    onCloseActionSheet(guild_id[11]).popWithKey(outer1_11);
    if (onCloseActionSheet != null) {
      onCloseActionSheet(flag);
    }
  }
  function _handleStart() {
    const self = this;
    const tmp = callback(function*() {
      if (c0 === 2) {
        c0 = 3;
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
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (outer1_3) {
              const obj1 = { onSuccess: null };
              obj1[0] = function onSuccess() {
                v1(outer1_2[11]).popWithKey(outer1_11);
                if (v1 != null) {
                  tmp2(true);
                }
              };
              c1 = 1;
              c0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = outer1_6(c0, outer1_4, obj1);
              return obj2;
            } else {
              outer1_7(false);
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp11) {
          c0 = tmp;
          throw tmp11;
        }
      }
    });
    const _handleStart = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = createCacheKey();
  guild_id = event.guild_id;
  let obj = event(guild_id[18]);
  const items = [_handleStart];
  const stateFromStores = obj.useStateFromStores(items, () => _handleStart.getGuild(guild_id));
  let obj1 = event(guild_id[18]);
  const items1 = [onCloseModal];
  const items2 = [event];
  let stateFromStores1 = obj1.useStateFromStores(items1, () => onCloseModal.getChannel(event.channel_id), items2);
  let obj2 = event(guild_id[19]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  createGuildRecordFromRust = obj2.useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  const tmp7 = first(React.useState(event.entity_type === constants.STAGE_INSTANCE), 2);
  first = tmp7[0];
  React = tmp7[1];
  [c6, tmp11] = first(onCloseActionSheet(guild_id[20])(), 2);
  ({ loading, error } = tmp11);
  obj = { top: true, bottom: true, style: tmp.mainContainer, children: null };
  const items3 = [callback(NavigationBar, { onClose: onCloseModal }), ];
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.headerContainer, children: null };
  const items4 = [callback(StartEventHeader, { event }), callback(PreviewEventCard, { event })];
  obj1[1] = items4;
  const items5 = [callback2(c6, obj1), ];
  obj2 = { style: tmp.footerContainer, children: null };
  let hasItem = set.has(event.entity_type);
  if (hasItem) {
    const obj3 = { channelId: null };
    obj3[0] = event.channel_id;
    hasItem = tmp13(onCloseActionSheet(tmp3[22]), obj3);
  }
  const items6 = [hasItem, , ];
  let tmp13Result = null;
  if (event.entity_type === constants.STAGE_INSTANCE) {
    const obj4 = { sendStartNotification: null, onToggle: null };
    obj4[0] = first;
    obj4[1] = function handleToggleNotifyMembers() {
      callback2((arg0) => !arg0);
    };
    tmp13Result = tmp13(tmp2(tmp3[23]).NotificationToggle, obj4);
  }
  items6[1] = tmp13Result;
  const obj5 = { style: tmp.buttonContainer, children: null };
  tmp13Result = null;
  if (null != error) {
    const obj6 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    obj6[2] = error.getAnyErrorMessage();
    tmp13Result = tmp13(tmp2(tmp3[16]).Text, obj6);
  }
  const items7 = [tmp13Result, ];
  const obj7 = { variant: "active", text: null, onPress: null, disabled: null, loading: null };
  const intl = tmp2(tmp3[13]).intl;
  obj7[1] = intl.string(event(guild_id[13]).t.cK1GGY);
  obj7[2] = function handleStart() {
    const self = this;
    const apply = _handleStart.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj7[3] = loading;
  obj7[4] = loading;
  items7[1] = callback(event(guild_id[24]).Button, obj7);
  obj5[1] = items7;
  items6[2] = callback2(c6, obj5);
  obj2[1] = items6;
  items5[1] = callback2(c6, obj2);
  obj[1] = items5;
  items3[1] = callback2(c6, obj);
  obj[3] = items3;
  return callback2(event(guild_id[21]).SafeAreaPaddingView, obj);
};
export { PreviewEventCard };