// === Module 15429: BoostProgressBarCoachmark ===

// Module 15429 (BoostProgressBarCoachmark)
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_7 = createCacheKey.createStyles({ riveContainer: { width: 120, height: 80, alignSelf: "center" } });
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/native/BoostProgressBarCoachmark.tsx");

export default function BoostProgressBarCoachmark(guild) {
  guild = guild.guild;
  const markAsDismissed = guild.markAsDismissed;
  let callback;
  const tmp = callback();
  dependencyMap = tmp;
  const items = [markAsDismissed];
  callback = callback.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [guild.id, markAsDismissed];
  const callback1 = callback.useCallback(() => {
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    markAsDismissed(8874).saveGuild(guild.id, { premiumProgressBarEnabled: true });
  }, items1);
  const items2 = [callback, callback1, tmp.riveContainer];
  const memo = callback.useMemo(() => {
    const obj = { title: null, description: null, visible: true, position: "bottom", offsetY: 8, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = guild(1236).intl;
    obj[0] = intl.string(markAsDismissed(2367).uwV2dH);
    const intl2 = guild(1236).intl;
    obj[1] = intl2.string(markAsDismissed(2367).MIwlcR);
    obj[5] = callback;
    obj[6] = function renderImgComponent() {
      return closure_1_6(callback1, { style: riveContainer.riveContainer, children: closure_1_6(guild(closure_1_2[8]).BoostThisServerRive, { stateMachine: "State Machine 1" }) });
    };
    const intl3 = guild(1236).intl;
    obj[7] = intl3.string(guild(1236).t["0CJWP2"]);
    obj[9] = callback1;
    return obj;
  }, items2);
  const coachmark = guild(9314).useCoachmark(guild.targetRef, memo);
  return null;
};