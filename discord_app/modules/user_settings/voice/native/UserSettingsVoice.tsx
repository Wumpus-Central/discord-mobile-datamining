// discord_app/modules/user_settings/voice/native/UserSettingsVoice.tsx
import "noop";
import { View } from "set";
import { isMobileOverlaySupported } from "getUserAgnosticState";
import { USER_SETTINGS_VOICE_GUILD_URL as closure_5 } from "combined";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const result = require("getUserAgnosticState").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = callback2();
  let obj = require("../../../media_engine/MobileAudioOutputExperiment.tsx");
  let nonContextualStreamOutputPresent = obj.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  obj = { style: tmp.container, children: null };
  const items = [callback(require("UserSettingsVoiceInputOptions.tsx"), {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp4(tmp2(10746), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  obj = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
  const intl = tmp7(1236).intl;
  obj[2] = intl.format(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["V+B3FH"], { guideURL: closure_5 });
  items[2] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  items[3] = callback(require("UserSettingsSoundboardVolume.tsx"), {});
  const obj2 = { spacing: 24, children: null };
  items[4] = isMobileOverlaySupported() && callback(require("UserSettingsVoiceOverlay.tsx"), {});
  items[5] = callback(require("UserSettingsVoiceProcessing.tsx"), {});
  items[6] = callback(require("../../../../components_native/common/SafeAreaView.tsx") /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true });
  obj2[1] = items;
  obj[1] = closure_7(require("../../../../design/components/Stack/native/Stack.native.tsx") /* Stack */.Stack, obj2);
  return callback(View, obj);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return callback(require("../../../../design/components/TableRow/native/TableRowGroup.native.tsx") /* TableRowGroupTitle */.TableRowGroup, {});
};