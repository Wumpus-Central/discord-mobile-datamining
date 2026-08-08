// discord_app/modules/chat_input/native/accessories/ChatInputCharCounter.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import { UpsellTypes } from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { alignItems: "center", paddingBottom: 6 } });
const forwardRefResult = importAllResult.forwardRef((analyticsLocations, ref) => {
  let c2;
  let tmp6;
  analyticsLocations = analyticsLocations.analyticsLocations;
  let stateFromStores;
  let dependencyMap;
  let callback;
  let obj = analyticsLocations(589);
  const items = [mergeGuildAvatar];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores(_undefined[8]).canUseIncreasedMessageLength(currentUser.getCurrentUser()));
  const tmp = callback4();
  [tmp6, c2] = callback(importAllResult.useState(0), 2);
  const tmp7 = stateFromStores(8353)();
  callback = tmp7;
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    onMessageLengthChanged(length) {
      callback(Math.max(0, length - _slicedToArray));
    }
  }));
  const items1 = [analyticsLocations, stateFromStores, tmp7];
  let tmp10 = null;
  if (tmp6 > 0) {
    obj = { onPress: null, style: null, children: null };
    obj[0] = tmp9;
    obj[1] = tmp.container;
    obj = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xs/medium", children: null };
    const _HermesInternal = HermesInternal;
    obj[3] = "-" + tmp6;
    const items2 = [callback2(tmp2(4299).Text, obj), callback2(tmp2(7704).NitroWheelIcon, { size: "sm" })];
    obj[2] = items2;
    tmp10 = callback3(tmp2(4846).PressableOpacity, obj);
  }
  return tmp10;
});
forwardRefResult.displayName = "ChatInputCharCounter";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default memoResult;