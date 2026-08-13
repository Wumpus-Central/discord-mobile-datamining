// discord_app/modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx
import "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import handleGameServerInstanceCreated from "handleGameServerInstanceCreated";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { useGameServerPerk } from "../../../game_server/hooks/useGameServerPerk.tsx";

const require = arg1;
createCacheKey = { riveContainer: null };
createCacheKey = { flex: 1, paddingVertical: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx");

export default function GuildPowerupsGameServerCard(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  const items = [handleGameServerInstanceCreated];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getStateForGuild(guildId));
  const tmp = createCacheKey();
  const tmp2 = guildId;
  const tmp5 = importDefault;
  const tmp7 = useGameServerPerk(guildId);
  let obj1 = guildId(589);
  const items1 = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (null != tmp7) {
      obj = { title: null, description: null, cost: null, costDecorator: "+", riveComponent: null, badge: "beta", status: null, onPress: null };
      ({ title: obj3[0], description: obj3[1], cost: obj3[2] } = tmp7);
      obj = { style: null, children: null };
      obj[0] = tmp.riveContainer;
      obj1 = { stateMachine: "SM_Auto", dataBinding: null };
      const obj2 = { reducedMotion: null };
      obj2[0] = stateFromStores1;
      obj1[1] = obj2;
      obj[1] = jsx(tmp2(4072).GameServerHostingRive, { stateMachine: "SM_Auto", dataBinding: null });
      obj[4] = <View style={null}>{null}</View>;
      obj[6] = tmp6;
      obj[7] = tmp9;
      tmp10 = jsx(tmp5(11992), { style: null, children: null });
      const tmp5Result = tmp5(11992);
    }
  }
  return tmp10;
};