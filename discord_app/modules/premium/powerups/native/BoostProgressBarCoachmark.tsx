// === Module 16168: BoostProgressBarCoachmark ===

// Module 16168 (BoostProgressBarCoachmark)
import util from "util" /* 1114 */;
import _modDef2428 from "module_2428" /* 2428 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ riveContainer: { width: 120, height: 80, alignSelf: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/BoostProgressBarCoachmark.tsx");

export default function BoostProgressBarCoachmark(guild) {
  guild = guild.guild;
  const markAsDismissed = guild.markAsDismissed;
  let onDismiss;
  const tmp = closure_7();
  dependencyMap = tmp;
  const items = [markAsDismissed];
  onDismiss = onDismiss.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [guild.id, markAsDismissed];
  const callback1 = onDismiss.useCallback(() => {
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    GuildSettingsActionCreatorsDefault.saveGuild(guild.id, { premiumProgressBarEnabled: true });
  }, items1);
  const items2 = [onDismiss, callback1, tmp.riveContainer];
  const memo = onDismiss.useMemo(() => {
    const obj = { title: null, description: null, visible: true, position: "bottom", offsetY: 8, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef2428.uwV2dH);
    const intl2 = util.intl;
    obj.description = intl2.string(_modDef2428.MIwlcR);
    obj.onDismiss = onDismiss;
    obj.renderImgComponent = function renderImgComponent() {
      return <callback1 style={riveContainer.riveContainer}>{jsx(guild(riveContainer[8]).BoostThisServerRive, { stateMachine: "State Machine 1" })}</callback1>;
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t["0CJWP2"]);
    obj.onButtonPress = callback1;
    return obj;
  }, items2);
  const coachmark = guild(11127).useCoachmark(guild.targetRef, memo);
  return null;
};