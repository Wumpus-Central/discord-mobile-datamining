// === Module 12248: GuildPowerupsGameServerCard ===

// Module 12248 (GuildPowerupsGameServerCard)
import nativeDefault from "native" /* 587 */;
import useGameServerPowerupStatusDefault from "useGameServerPowerupStatus" /* 12249 */;
import useGameServerPerkDefault from "useGameServerPerk" /* 12250 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import GameServerStore from "GameServerStore" /* 7683 */;

const useGuildPowerupOnShowMoreDefault = description(12240);
const GuildPowerupsPerkCardDefault = description(12245);
const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { riveContainer: { flex: 1, paddingVertical: nativeDefault.space.PX_8 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, paddingVertical: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp2 = dependencyMap;
  const cResult = guildId(576).c(17);
  guildId = guildId.guildId;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameServerStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function v() {
      return GameServerStore.getStateForGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = guildId(576);
  description = importDefault;
  const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
  const tmp9 = useGameServerPowerupStatusDefault(guildId);
  let title = useGameServerPerkDefault(guildId);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    class C {
      constructor() {
        return closure_1_4.useReducedMotion;
      }
    }
    cResult[3] = items1;
    cResult[4] = C;
    let tmp11 = C;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const tmpResult = guildId(504);
  const stateFromStores1 = guildId(504).useStateFromStores(tmp10, tmp11);
  const tmp14 = useGuildPowerupOnShowMoreDefault(guildId, title);
  let tmp15 = null;
  if (null != stateFromStores) {
    tmp15 = null;
    if (null != title) {
      if (cResult[5] !== stateFromStores1) {
        const obj2 = { stateMachine: "SM_Auto", dataBinding: null };
        class C {
          constructor() {
            return closure_1_4.useReducedMotion;
          }
        }
        obj2.dataBinding = { reducedMotion: null };
        const tmp18 = jsx(tmp(4684).GameServerHostingRive, { stateMachine: "SM_Auto", dataBinding: null });
        cResult[5] = stateFromStores1;
        cResult[6] = tmp18;
        let tmp16 = tmp18;
        const obj3 = { reducedMotion: null };
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] === tmp4.riveContainer) {
        if (cResult[8] === tmp16) {
          let tmp19 = cResult[9];
        }
        if (cResult[10] === title.cost) {
          if (cResult[11] === title.description) {
            if (cResult[12] === title.title) {
              if (cResult[13] === tmp14) {
                if (cResult[14] === tmp9) {
                }
              }
            }
          }
        }
        class C {
          constructor() {
            return closure_1_4.useReducedMotion;
          }
        }
        ({ title: tmp24[0], description: tmp24[1], cost: tmp24[2] } = title);
        tmp24[4] = tmp19;
        tmp24[6] = tmp9;
        tmp24[7] = tmp14;
        tmp2 = jsx(GuildPowerupsPerkCardDefault, tmp24);
        ({ cost: tmp3[10], description } = title);
        cResult[11] = description;
        title = title.title;
        cResult[12] = title;
        cResult[13] = tmp14;
        cResult[14] = tmp9;
        cResult[15] = tmp19;
        cResult[16] = tmp2;
      }
      class C {
        constructor() {
          return closure_1_4.useReducedMotion;
        }
      }
      const obj4 = { style: tmp4.riveContainer, children: tmp16 };
      const tmp21 = <View style={tmp4.riveContainer}>{tmp16}</View>;
      cResult[7] = tmp4.riveContainer;
      cResult[8] = tmp16;
      cResult[9] = tmp21;
      tmp19 = tmp21;
    }
  }
  return tmp15;
}) : ((guildId) => {
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
      obj5.children = jsx(tmp2(4684).GameServerHostingRive, { stateMachine: "SM_Auto", dataBinding: null });
      obj4.riveComponent = <View style={tmp.riveContainer}>{null}</View>;
      obj4.status = tmp6;
      obj4.onPress = tmp9;
      tmp10 = jsx(GuildPowerupsPerkCardDefault, { title: null, description: null, cost: null, costDecorator: "+", riveComponent: null, badge: "beta", status: null, onPress: null });
      const tmp5Result = GuildPowerupsPerkCardDefault;
    }
  }
  return tmp10;
});