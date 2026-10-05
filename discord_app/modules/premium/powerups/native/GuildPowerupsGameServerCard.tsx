// discord_app/modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useGuildPowerupOnShowMoreDefault from "hooks/useGuildPowerupOnShowMore.tsx";
import GuildPowerupsPerkCardDefault from "GuildPowerupsPerkCard.tsx";
import useGameServerPowerupStatusDefault from "../../../game_server/hooks/useGameServerPowerupStatus.tsx";
import useGameServerPerkDefault from "../../../game_server/hooks/useGameServerPerk.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GameServerStore from "../../../game_server/GameServerStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let guildId;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { riveContainer: obj2 };
obj2 = { flex: 1, paddingVertical: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let tmp12;
      let tmp13;
      let tmp7;
      let useReducedMotion;
      const obj = guildId(576);
      const cResult = obj.c(17);
      guildId = guildId.guildId;
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameServerStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function v() {
          return GameServerStore.getStateForGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = guildId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      const tmp10 = useGameServerPowerupStatusDefault(guildId);
      const tmp11 = useGameServerPerkDefault(guildId);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AccessibilityStore];
        class C {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        cResult[3] = items1;
        cResult[4] = C;
        tmp13 = C;
        tmp12 = items1;
      } else {
        tmp12 = cResult[3];
        tmp13 = cResult[4];
      }
      const tmpResult2 = guildId(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp12, tmp13);
      const tmp16 = useGuildPowerupOnShowMoreDefault(guildId, tmp11);
      let tmp17 = null;
      if (null != stateFromStores) {
        tmp17 = null;
        if (null != tmp11) {
          let tmp18;
          if (cResult[5] !== stateFromStores1) {
            const obj3 = { reducedMotion: null };
            class C {
              constructor() {
                return useReducedMotion.useReducedMotion;
              }
            }
            const tmp20 = jsx(guildId(4678).GameServerHostingRive, { stateMachine: "SM_Auto", dataBinding: obj3 });
            cResult[5] = stateFromStores1;
            cResult[6] = tmp20;
            tmp18 = tmp20;
          } else {
            tmp18 = cResult[6];
          }
          if (cResult[7] === tmp4.riveContainer) {
            let tmp21;
            if (cResult[8] === tmp18) {
              tmp21 = cResult[9];
            }
            if (cResult[10] === tmp11.cost) {
              if (cResult[11] === tmp11.description) {
                if (cResult[12] === tmp11.title) {
                  if (cResult[13] === tmp16) {
                    if (cResult[14] === tmp10) {
                      let tmp24;
                      if (cResult[15] === tmp21) {
                        tmp24 = cResult[16];
                      }
                      tmp17 = tmp24;
                    }
                  }
                }
              }
            }
            class C {
              constructor() {
                return useReducedMotion.useReducedMotion;
              }
            }
            ({ title: tmp26[0], description: tmp26[1], cost: tmp26[2] } = tmp11);
            tmp26[4] = tmp21;
            tmp26[6] = tmp10;
            tmp26[7] = tmp16;
            const tmp27 = jsx(GuildPowerupsPerkCardDefault, tmp26);
            cResult[10] = tmp11.cost;
            cResult[11] = tmp11.description;
            cResult[12] = tmp11.title;
            cResult[13] = tmp16;
            cResult[14] = tmp10;
            cResult[15] = tmp21;
            cResult[16] = tmp27;
            tmp24 = tmp27;
          }
          class C {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          const tmp23 = <View style={tmp4.riveContainer}>{tmp18}</View>;
          cResult[7] = tmp4.riveContainer;
          cResult[8] = tmp18;
          cResult[9] = tmp23;
          tmp21 = tmp23;
        }
      }
      return tmp17;
    }
  : (guildId) => {
      let useReducedMotion;
      guildId = guildId.guildId;
      const items = [GameServerStore];
      const tmp = closure_7();
      const obj = guildId(504);
      const stateFromStores = obj.useStateFromStores(items, () => GameServerStore.getStateForGuild(guildId));
      const tmp6 = useGameServerPowerupStatusDefault(guildId);
      const tmp7 = useGameServerPerkDefault(guildId);
      const items1 = [AccessibilityStore];
      const obj2 = guildId(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
      let tmp10 = null;
      if (null != stateFromStores) {
        tmp10 = null;
        if (null != tmp7) {
          ({ title: obj3.title, description: obj3.description, cost: obj3.cost } = tmp7);
          const obj10 = { reducedMotion: stateFromStores1 };
          GuildPowerupsPerkCardDefault;
          tmp10 = (
            <tmp5Result
              title={null}
              description={null}
              cost={null}
              costDecorator="+"
              riveComponent={null}
              badge="beta"
              status={tmp6}
              onPress={tmp9}
            />
          );
        }
      }
      return tmp10;
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx");

export default tmp3;
