// === Module 11599: ChatInputCharCounter ===

// Module 11599 (ChatInputCharCounter)
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import { UpsellTypes } from "ME" /* 676 */;
import { PremiumUpsellTypes } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
let c4 = importAllResult;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { alignItems: "center", paddingBottom: 6 } });
const forwardRefResult = importAllResult.forwardRef((analyticsLocations, ref) => {
  analyticsLocations = analyticsLocations.analyticsLocations;
  let stateFromStores;
  dependencyMap = undefined;
  let callback;
  let obj = analyticsLocations(589);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores(_undefined[8]).canUseIncreasedMessageLength(currentUser.getCurrentUser()));
  const tmp = callback4();
  [tmp6, c2] = callback(importAllResult.useState(0), 2);
  const tmp7 = stateFromStores(8462)();
  callback = tmp7;
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    onMessageLengthChanged(length) {
      callback(Math.max(0, length - closure_3));
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
    const items2 = [callback2(tmp2(4734).Text, obj), callback2(tmp2(7988).NitroWheelIcon, { size: "sm" })];
    obj[2] = items2;
    tmp10 = callback3(tmp2(5433).PressableOpacity, obj);
  }
  return tmp10;
});
forwardRefResult.displayName = "ChatInputCharCounter";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("set").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default memoResult;