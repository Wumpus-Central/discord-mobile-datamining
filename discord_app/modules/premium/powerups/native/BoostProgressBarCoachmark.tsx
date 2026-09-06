// discord_app/modules/premium/powerups/native/BoostProgressBarCoachmark.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ riveContainer: { width: 120, height: 80, alignSelf: "center" } });
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/BoostProgressBarCoachmark.tsx");

export default function BoostProgressBarCoachmark(guild) {
  guild = guild.guild;
  const markAsDismissed = guild.markAsDismissed;
  dependencyMap = undefined;
  let callback;
  let callback1;
  const tmp = callback();
  dependencyMap = tmp;
  const items = [markAsDismissed];
  callback = callback.useCallback(() => {
    markAsDismissed(closure_1_5.USER_DISMISS);
  }, items);
  const items1 = [guild.id, markAsDismissed];
  callback1 = callback.useCallback(() => {
    markAsDismissed(closure_1_5.TAKE_ACTION);
    markAsDismissed(9063).saveGuild(guild.id, { premiumProgressBarEnabled: true });
  }, items1);
  const items2 = [callback, callback1, tmp.riveContainer];
  const memo = callback.useMemo(() => {
    const obj = {
      title: null,
      description: null,
      visible: true,
      position: "bottom",
      offsetY: 8,
      onDismiss: null,
      renderImgComponent: null,
      buttonLabel: null,
      buttonVariant: "primary",
      onButtonPress: null,
    };
    const intl = guild(1114).intl;
    obj[0] = intl.string(markAsDismissed(2428).uwV2dH);
    const intl2 = guild(1114).intl;
    obj[1] = intl2.string(markAsDismissed(2428).MIwlcR);
    obj[5] = callback;
    obj[6] = function renderImgComponent() {
      return closure_1_6(closure_1_4, {
        style: riveContainer.riveContainer,
        children: closure_1_6(closure_1_0(closure_1_2[8]).BoostThisServerRive, { stateMachine: "State Machine 1" }),
      });
    };
    const intl3 = guild(1114).intl;
    obj[7] = intl3.string(guild(1114).t["0CJWP2"]);
    obj[9] = callback1;
    return obj;
  }, items2);
  const coachmark = guild(11127).useCoachmark(guild.targetRef, memo);
  return null;
}
