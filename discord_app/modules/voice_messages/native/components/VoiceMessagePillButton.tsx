// discord_app/modules/voice_messages/native/components/VoiceMessagePillButton.tsx
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let closure_4 = createCacheKey.createStyles((width, width2, backgroundColor) => {
  const button = { width, height: width, borderRadius: importDefault(712).radii.sm, alignItems: "center", justifyContent: "center", backgroundColor, borderWidth: null, borderColor: null };
  let num = 0;
  if (null != arg3) {
    num = 1;
  }
  button[6] = num;
  button[7] = arg3;
  const icon = { width: width2, height: width2 };
  return { button, icon };
});
const forwardRefResult = require("noop").forwardRef((boxSize, ref) => {
  let accessibilityLabel;
  let icon;
  let onPress;
  let onPressIn;
  let tintColor;
  ({ icon, tintColor, accessibilityLabel, onPress, onPressIn } = boxSize);
  const tmp = callback(boxSize.boxSize, boxSize.iconSize, boxSize.backgroundColor, boxSize.borderColor);
  let obj = { ref, style: tmp.button, accessibilityRole: "button", accessibilityLabel, onPress, onPressIn, children: null };
  obj = { source: icon, size: null, style: null };
  obj[1] = require(1297) /* Button */.Icon.Sizes.CUSTOM;
  const items = [tmp.icon, { tintColor }];
  obj[2] = items;
  obj[6] = jsx(require(1297) /* Button */.Icon, { source: icon, size: null, style: null });
  return jsx(require(4721) /* PressableBase */.PressableOpacity, { source: icon, size: null, style: null });
});
const result = require("createCacheKey").fileFinishedImporting("modules/voice_messages/native/components/VoiceMessagePillButton.tsx");

export default forwardRefResult;