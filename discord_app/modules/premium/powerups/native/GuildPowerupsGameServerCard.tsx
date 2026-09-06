// discord_app/modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useGameServerPerkDefault from "../../../game_server/hooks/useGameServerPerk.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GameServerStore from "../../../game_server/GameServerStore.tsx";

const GuildPowerupsPerkCardDefault = tmp5(12571);
const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { riveContainer: null };
createStyles = { flex: 1, paddingVertical: nativeDefault.space.PX_8 };
createStyles.riveContainer = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx");

export default function GuildPowerupsGameServerCard(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
  const items = [GameServerStore];
  const stateFromStores = obj.useStateFromStores(items, () => GameServerStore.getStateForGuild(guildId));
  const tmp = closure_7();
  const tmp2 = guildId;
  const tmp7 = useGameServerPerkDefault(guildId);
  let obj1 = guildId(504);
  const items1 = [AccessibilityStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (null != tmp7) {
      obj = {
        title: null,
        description: null,
        cost: null,
        costDecorator: "+",
        riveComponent: null,
        badge: "beta",
        status: null,
        onPress: null,
      };
      ({ title: obj3.title, description: obj3.description, cost: obj3.cost } = tmp7);
      obj = { style: tmp.riveContainer, children: null };
      obj1 = { stateMachine: "SM_Auto", dataBinding: null };
      const obj2 = { reducedMotion: stateFromStores1 };
      obj1.dataBinding = obj2;
      obj.children = jsx(tmp2(4271).GameServerHostingRive, { stateMachine: "SM_Auto", dataBinding: null });
      obj.riveComponent = <View style={tmp.riveContainer}>{null}</View>;
      obj.status = tmp6;
      obj.onPress = tmp9;
      tmp10 = jsx(GuildPowerupsPerkCardDefault, { style: tmp.riveContainer, children: null });
      const tmp5Result = GuildPowerupsPerkCardDefault;
    }
  }
  return tmp10;
}
