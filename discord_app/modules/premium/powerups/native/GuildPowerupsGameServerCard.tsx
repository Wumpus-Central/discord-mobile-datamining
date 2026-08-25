// discord_app/modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard.tsx";
import useGameServerPerkDefault from "../../../game_server/hooks/useGameServerPerk.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../a11y/AccessibilityStore.tsx";
import closure_5 from "../../../game_server/GameServerStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
createCacheKey = { riveContainer: null };
createCacheKey = { flex: 1, paddingVertical: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx");

export default function GuildPowerupsGameServerCard(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getStateForGuild(guildId));
  const tmp = callback();
  const tmp2 = guildId;
  const tmp5 = importDefault;
  const tmp7 = useGameServerPerkDefault(guildId);
  obj1 = guildId(589);
  const items1 = [closure_4];
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
      obj[1] = jsx(tmp2(4108).GameServerHostingRive, { stateMachine: "SM_Auto", dataBinding: null });
      obj[4] = <View style={null}>{null}</View>;
      obj[6] = tmp6;
      obj[7] = tmp9;
      tmp10 = jsx(GuildPowerupsPerkCardDefault, { style: null, children: null });
      const tmp5Result = GuildPowerupsPerkCardDefault;
    }
  }
  return tmp10;
};