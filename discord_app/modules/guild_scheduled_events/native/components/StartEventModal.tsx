// === Module 9920: NavigationBar ===

// Module 9920 (NavigationBar)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import registerAssetDefault from "registerAsset" /* 7821 */;
import GuildEventCardControlsDefault from "GuildEventCardControls" /* 9919 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "ensureGuildLoaded" /* 1386 */;
import closure_8 from "createGuildRecordFromRust" /* 1908 */;
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1392 */;
import { START_EVENT_MODAL_KEY } from "CREATE_GUILD_EVENT_MODAL_KEY" /* 9682 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function NavigationBar(onClose) {
  onClose = onClose.onClose;
  let obj = { children: null };
  obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = onClose(1233).intl;
  obj[1] = intl.string(onClose(1233).t.cpT0Cq);
  obj[2] = function onPress() {
    return onClose();
  };
  obj = { source: registerAssetDefault };
  obj[3] = callback(onClose(1296).Icon, obj);
  obj[0] = callback(onClose(5076).PressableOpacity, obj);
  return callback(View, obj);
}
function StartEventHeader(children) {
  const tmp = callback3();
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.headerPrivacyLevel, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["q+fFJv"]);
  const items = [callback(Text.Text, obj), ];
  obj = { style: tmp.headerTitle, variant: "text-md/medium", color: "text-default", children: children.event.name };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
class PreviewEventCard {
  constructor(arg0) {
    tmp = closure_14();
    obj = { event: global.event, hideControls: true, style: tmp.previewCard, hideAgeVerificationNotice: true };
    return jsx(require("GuildEventCardControls"), obj);
  }
}
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: c9, GuildScheduledEventEntityTypes: c10 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { mainContainer: null, container: null, headerContainer: null, footerContainer: null, header: null, headerTitle: null, buttonContainer: null, previewCard: null, headerPrivacyLevel: null };
createCacheKey = { flex: 1, padding: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "column", justifyContent: "space-between", alignContent: "center" };
createCacheKey[2] = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_24 };
createCacheKey[3] = { display: "flex", flexDirection: "column" };
let obj1 = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_24 };
createCacheKey[4] = { alignItems: "center", paddingTop: ThemesDefault.space.PX_24 };
createCacheKey[5] = { lineHeight: 24, textAlign: "center" };
let obj2 = { alignItems: "center", paddingTop: ThemesDefault.space.PX_24 };
createCacheKey[6] = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_16 };
let obj3 = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_16 };
createCacheKey[7] = { borderColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 } };
createCacheKey[8] = { textAlign: "center", lineHeight: 18 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj4 = { borderColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 } };
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/StartEventModal.tsx");

export default function StartEventModal(event) {
  event = event.event;
  const onCloseActionSheet = event.onCloseActionSheet;
  let guild_id;
  closure_3 = undefined;
  let first;
  let React;
  c6 = undefined;
  function onCloseModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    onCloseActionSheet(guild_id[11]).popWithKey(closure_1_11);
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
            } else if (closure_1_3) {
              obj1 = { onSuccess: null };
              obj1[0] = function onSuccess() {
                v1(closure_1_2[11]).popWithKey(closure_1_11);
                if (v1 != null) {
                  tmp2(true);
                }
              };
              c1 = 1;
              c0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = closure_1_6(c0, closure_1_4, obj1);
              return obj2;
            } else {
              closure_1_7(false);
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
    closure_8 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  guild_id = event.guild_id;
  let obj = event(guild_id[18]);
  const items = [_handleStart];
  const stateFromStores = obj.useStateFromStores(items, () => _handleStart.getGuild(guild_id));
  obj1 = event(guild_id[18]);
  const items1 = [onCloseModal];
  const items2 = [event];
  let stateFromStores1 = obj1.useStateFromStores(items1, () => onCloseModal.getChannel(event.channel_id), items2);
  let obj2 = event(guild_id[19]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  closure_3 = obj2.useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
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