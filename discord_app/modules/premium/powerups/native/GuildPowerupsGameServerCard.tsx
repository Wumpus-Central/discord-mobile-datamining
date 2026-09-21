// === Module 12828: GuildPowerupsGameServerCard ===

// Module 12828 (GuildPowerupsGameServerCard)
import nativeDefault from "native" /* 576 */;
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard" /* 12825 */;
import useGameServerPowerupStatusDefault from "useGameServerPowerupStatus" /* 12829 */;
import useGameServerPerkDefault from "useGameServerPerk" /* 12830 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;
import GameServerStore from "GameServerStore" /* 4665 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
const obj2 = { riveContainer: { flex: 1, paddingVertical: nativeDefault.space.PX_8 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx");

export default function GuildPowerupsGameServerCard(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_7();
  const tmp2 = guildId;
  const items = [GameServerStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GameServerStore.getStateForGuild(guildId));
  const obj = guildId(504);
  const tmp7 = useGameServerPerkDefault(guildId);
  const tmp6 = useGameServerPowerupStatusDefault(guildId);
  const items1 = [AccessibilityStore];
  const stateFromStores1 = guildId(504).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (null != tmp7) {
      const obj4 = { title: null, description: null, cost: null, costDecorator: "+", riveComponent: null, badge: "beta", status: null, onPress: null };
      ({ title: obj3.title, description: obj3.description, cost: obj3.cost } = tmp7);
      const obj5 = { style: tmp.riveContainer, children: null };
      const obj6 = { stateMachine: "SM_Auto", dataBinding: null };
      const obj10 = { reducedMotion: stateFromStores1 };
      obj6.dataBinding = obj10;
      obj5.children = jsx(tmp2(4466).GameServerHostingRive, { stateMachine: "SM_Auto", dataBinding: null });
      obj4.riveComponent = <View style={tmp.riveContainer}>{null}</View>;
      obj4.status = tmp6;
      obj4.onPress = tmp9;
      tmp10 = jsx(GuildPowerupsPerkCardDefault, { title: null, description: null, cost: null, costDecorator: "+", riveComponent: null, badge: "beta", status: null, onPress: null });
      const tmp5Result = GuildPowerupsPerkCardDefault;
    }
  }
  return tmp10;
};