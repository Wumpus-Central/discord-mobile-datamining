// discord_app/modules/user_settings/voice/native/UserSettingsVoice.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import apexExperimentDefault from "../../../media_engine/MobileAudioOutputExperiment.tsx";
import handleInputModePressDefault from "UserSettingsVoiceInputOptions.tsx";
import SoundboardVolumeDefault from "UserSettingsSoundboardVolume.tsx";
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay.tsx";
import VoiceProcessingOptionsDefault from "UserSettingsVoiceProcessing.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { isMobileOverlaySupported } from "../../../../stores/native/MobileVoiceOverlayStore.tsx";
import { USER_SETTINGS_VOICE_GUILD_URL as closure_5 } from "UserSettingsVoiceConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const result = require("set").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = callback2();
  let obj = apexExperimentDefault;
  let nonContextualStreamOutputPresent = obj.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  obj = { style: tmp.container, children: null };
  const items = [callback(handleInputModePressDefault, {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp4(tmp2(10006), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  obj = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
  const intl = tmp7(1236).intl;
  obj[2] = intl.format(getSystemLocale.t["V+B3FH"], { guideURL: closure_5 });
  items[2] = callback(Text.Text, obj);
  items[3] = callback(SoundboardVolumeDefault, {});
  const obj2 = { spacing: 24, children: null };
  items[4] = isMobileOverlaySupported() && callback(UserSettingsVoiceOverlayDefault, {});
  items[5] = callback(VoiceProcessingOptionsDefault, {});
  items[6] = callback(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true });
  obj2[1] = items;
  obj[1] = closure_7(Stack.Stack, obj2);
  return callback(View, obj);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return callback(TableRowGroupTitle.TableRowGroup, {});
};