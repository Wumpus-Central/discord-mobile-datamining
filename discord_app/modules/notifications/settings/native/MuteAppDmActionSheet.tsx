// discord_app/modules/notifications/settings/native/MuteAppDmActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { width: 48, height: 48, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { padding: 16 };
createCacheKey[3] = { textAlign: "center", marginBottom: 8, paddingHorizontal: 16 };
createCacheKey[4] = { textAlign: "center", marginBottom: 16, paddingHorizontal: 16 };
createCacheKey[5] = { marginTop: 8 };
createCacheKey[6] = { borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, height: 24, width: 24, padding: 4, alignContent: "center" };
createCacheKey[7] = { width: 16, height: 16 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default function MuteAppDMActionSheet(channel) {
  const tmp = callback3();
  const _require = tmp;
  channel = channel.channel;
  let obj = { style: tmp.iconContainer, children: callback(View, { style: tmp.iconBackground, "aria-hidden": true, children: callback(require("../../../../design/components/Icon/native/redesign/generated/BellIcon.tsx").BellIcon, { size: "md", color: "interactive-text-default" }) }) };
  const items = [callback(View, obj), , , , ];
  let obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
  let intl = require("../../../../intl/index.native.tsx").intl;
  obj2[3] = intl.string(require("../../../../intl/index.native.tsx").t.uAmAiL);
  items[1] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.infoText, children: null };
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj3[3] = intl2.string(require("../../../../intl/index.native.tsx").t.mscFJU);
  items[2] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj3);
  const obj4 = { variant: "destructive", text: null, onPress: null };
  const intl3 = require("../../../../intl/index.native.tsx").intl;
  obj4[1] = intl3.string(require("../../../../intl/index.native.tsx").t.uAmAiL);
  obj4[2] = function onPress() {
    let obj = channel(dependencyMap[10]);
    const result = obj.updateChannelOverrideSettings(null, channel.id, { muted: true }, callback(dependencyMap[11]).NotificationLabels.Muted);
    channel(dependencyMap[12]).hideActionSheet();
    const obj2 = channel(dependencyMap[12]);
    obj = { key: "NOTIFICATIONS_MUTED", content: null, icon: null };
    const intl = callback(dependencyMap[8]).intl;
    obj[1] = intl.string(callback(dependencyMap[8]).t.EgGpkx);
    obj[2] = function icon() {
      const obj = { source: channel(closure_1_2[15]), color: channel(closure_1_2[4]).unsafe_rawColors.WHITE, style: closure_0.mutedNotification };
      obj[1] = closure_1_4(closure_1_0(closure_1_2[14]).Icon, obj);
      return closure_1_4(closure_1_3, obj);
    };
    channel(dependencyMap[13]).open(obj);
  };
  items[3] = callback(require("../../../../design/components/Button/native/Button.native.tsx").Button, obj4);
  const obj5 = { style: tmp.dismissButtonContainer, children: null };
  const obj6 = { variant: "secondary", text: null, onPress: null };
  const intl4 = require("../../../../intl/index.native.tsx").intl;
  obj6[1] = intl4.string(require("../../../../intl/index.native.tsx").t.WAI6xu);
  obj6[2] = function onPress() {
    channel(table[12]).hideActionSheet();
  };
  obj5[1] = callback(require("../../../../design/components/Button/native/Button.native.tsx").Button, obj6);
  items[4] = callback(View, obj5);
  obj[1] = items;
  obj[1] = callback2(View, obj);
  return callback(require("../../../../design/components/Sheet/native/BottomSheet.native.tsx").BottomSheet, obj);
};