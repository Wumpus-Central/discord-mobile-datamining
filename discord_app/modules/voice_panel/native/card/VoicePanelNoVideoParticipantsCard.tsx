// discord_app/modules/voice_panel/native/card/VoicePanelNoVideoParticipantsCard.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import setDefault from "../../../core/native/NativeView.tsx";
import dismissPanelDefault from "../VoicePanelStateContext.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { Pressable } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: null, label: null, button: null, buttonText: null };
obj = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: ThemesDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj[0] = obj;
obj[1] = { marginBottom: 16, textAlign: "center" };
createCacheKey = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: "white", borderRadius: ThemesDefault.radii.round };
obj[2] = createCacheKey;
obj[3] = { color: ThemesDefault.unsafe_rawColors.PRIMARY_860 };
let closure_7 = createCacheKey.createStyles(obj);
const obj2 = { color: ThemesDefault.unsafe_rawColors.PRIMARY_860 };
const memoResult = importAllResult.memo(function VoicePanelNoVideoParticipantsCard() {
  const channelId = importAllResult.useContext(dismissPanelDefault).channelId;
  const tmp = callback3();
  const items = [channelId];
  const callback = importAllResult.useCallback(() => {
    const result = closure_1_1(closure_1_2[6]).toggleVoiceParticipantsHidden(channelId, false);
  }, items);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.label, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = channelId(1236).intl;
  obj[3] = intl.string(channelId(1236).t["8eBJ73"]);
  const items1 = [callback(channelId(4441).Text, obj), ];
  obj = { style: tmp.button, onPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl2 = channelId(1236).intl;
  obj[3] = intl2.string(channelId(1236).t.kLQySL);
  obj1 = { variant: "text-sm/semibold", style: tmp.buttonText, children: null };
  const intl3 = channelId(1236).intl;
  obj1[2] = intl3.string(channelId(1236).t.kLQySL);
  obj[4] = callback(channelId(4441).Text, obj1);
  items1[1] = callback(Pressable, obj);
  obj[1] = items1;
  return callback2(setDefault, obj);
});
let result = require("set").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelNoVideoParticipantsCard.tsx");

export default memoResult;