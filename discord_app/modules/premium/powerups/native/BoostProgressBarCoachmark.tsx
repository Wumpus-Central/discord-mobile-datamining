import noop from "noop";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ riveContainer: { width: 120, height: 80, alignSelf: "center" } });
const result = require("ContentDismissActionType").fileFinishedImporting("modules/premium/powerups/native/BoostProgressBarCoachmark.tsx");

export default function BoostProgressBarCoachmark(guild) {
  guild = guild.guild;
  const markAsDismissed = guild.markAsDismissed;
  let dependencyMap;
  let callback;
  let callback1;
  const tmp = callback();
  dependencyMap = tmp;
  const items = [markAsDismissed];
  callback = callback.useCallback(() => {
    markAsDismissed(outer1_5.USER_DISMISS);
  }, items);
  const items1 = [guild.id, markAsDismissed];
  callback1 = callback.useCallback(() => {
    markAsDismissed(outer1_5.TAKE_ACTION);
    markAsDismissed(_undefined[5]).saveGuild(guild.id, { premiumProgressBarEnabled: true });
  }, items1);
  const items2 = [callback, callback1, tmp.riveContainer];
  const memo = callback.useMemo(() => {
    const obj = { title: null, description: null, visible: true, position: "bottom", offsetY: 8, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = guild(_undefined[6]).intl;
    obj[0] = intl.string(markAsDismissed(_undefined[7]).uwV2dH);
    const intl2 = guild(_undefined[6]).intl;
    obj[1] = intl2.string(markAsDismissed(_undefined[7]).MIwlcR);
    obj[5] = callback;
    obj[6] = function renderImgComponent() {
      return outer1_6(outer1_4, { style: riveContainer.riveContainer, children: outer1_6(outer1_0(outer1_2[8]).BoostThisServerRive, { stateMachine: "State Machine 1" }) });
    };
    const intl3 = guild(_undefined[6]).intl;
    obj[7] = intl3.string(guild(_undefined[6]).t["0CJWP2"]);
    obj[9] = callback1;
    return obj;
  }, items2);
  const coachmark = guild(8440).useCoachmark(guild.targetRef, memo);
  return null;
};