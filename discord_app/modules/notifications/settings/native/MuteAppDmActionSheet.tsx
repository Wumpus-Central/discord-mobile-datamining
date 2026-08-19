// === Module 11768: MuteAppDMActionSheet ===

// Module 11768 (MuteAppDMActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { iconContainer: { alignItems: "center", marginBottom: 8 }, iconBackground: null, content: null, headerText: null, infoText: null, dismissButtonContainer: null, mutedNotificationContainer: null, mutedNotification: null };
createCacheKey = { width: 48, height: 48, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { padding: 16 };
createCacheKey[3] = { textAlign: "center", marginBottom: 8, paddingHorizontal: 16 };
createCacheKey[4] = { textAlign: "center", marginBottom: 16, paddingHorizontal: 16 };
createCacheKey[5] = { marginTop: 8 };
createCacheKey[6] = { borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, height: 24, width: 24, padding: 4, alignContent: "center" };
createCacheKey[7] = { width: 16, height: 16 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj1 = { borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, height: 24, width: 24, padding: 4, alignContent: "center" };
let result = require("set").fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default function MuteAppDMActionSheet(channel) {
  const tmp = callback3();
  const _require = tmp;
  channel = channel.channel;
  let obj = { startExpanded: true, children: null };
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.iconContainer, children: callback(View, { style: tmp.iconBackground, "aria-hidden": true, children: callback(_require(10003).BellIcon, { size: "md", color: "interactive-text-default" }) }) };
  const items = [callback(View, obj), , , , ];
  let obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
  let intl = _require(1236).intl;
  obj2[3] = intl.string(_require(1236).t.uAmAiL);
  items[1] = callback(_require(4734).Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.infoText, children: null };
  const intl2 = _require(1236).intl;
  obj3[3] = intl2.string(_require(1236).t.mscFJU);
  items[2] = callback(_require(4734).Text, obj3);
  const obj4 = { variant: "destructive", text: null, onPress: null };
  const intl3 = _require(1236).intl;
  obj4[1] = intl3.string(_require(1236).t.uAmAiL);
  obj4[2] = function onPress() {
    let obj = channel(closure_1_2[10]);
    const result = obj.updateChannelOverrideSettings(null, channel.id, { muted: true }, callback(closure_1_2[11]).NotificationLabels.Muted);
    channel(closure_1_2[12]).hideActionSheet();
    const obj2 = channel(closure_1_2[12]);
    obj = { key: "NOTIFICATIONS_MUTED", content: null, icon: null };
    const intl = callback(closure_1_2[8]).intl;
    obj[1] = intl.string(callback(closure_1_2[8]).t.EgGpkx);
    obj[2] = function icon() {
      let obj = { style: closure_0.mutedNotificationContainer, children: null };
      obj = { source: closure_1_1(closure_1_2[15]), color: closure_1_1(closure_1_2[4]).unsafe_rawColors.WHITE, style: closure_0.mutedNotification };
      obj[1] = closure_1_4(closure_1_0(closure_1_2[14]).Icon, obj);
      return closure_1_4(closure_1_3, obj);
    };
    channel(closure_1_2[13]).open(obj);
  };
  items[3] = callback(_require(4745).Button, obj4);
  const obj5 = { style: tmp.dismissButtonContainer, children: null };
  const obj6 = { variant: "secondary", text: null, onPress: null };
  const intl4 = _require(1236).intl;
  obj6[1] = intl4.string(_require(1236).t.WAI6xu);
  obj6[2] = function onPress() {
    channel(table[12]).hideActionSheet();
  };
  obj5[1] = callback(_require(4745).Button, obj6);
  items[4] = callback(View, obj5);
  obj[1] = items;
  obj[1] = callback2(View, obj);
  return callback(_require(6950).BottomSheet, obj);
};