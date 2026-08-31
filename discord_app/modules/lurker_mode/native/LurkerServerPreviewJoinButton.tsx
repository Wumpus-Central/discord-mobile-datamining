// === Module 15708: ? ===

// Module 15708
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import closure_6 from "ensureGuildLoaded" /* 1387 */;
import closure_7 from "initialize" /* 4092 */;
import { JoinGuildSources } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c5 = importAllResult;
const memoResult = importAllResult.memo(function LurkerServerPreviewJoinButton(guildId) {
  guildId = guildId.guildId;
  const joinSource = guildId.joinSource;
  let first;
  let callback;
  const tmp = callback2(importAllResult.useState(false), 2);
  first = tmp[0];
  callback = tmp[1];
  const items = [guildId, joinSource, first];
  callback = importAllResult.useCallback(callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp3;
            if (closure_1_2) {
              c4 = 3;
            } else {
              const lurkingSourceForGuild = closure_1_7.getLurkingSourceForGuild(closure_1_0);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              if (type === closure_1_8.DIRECTORY_ENTRY) {
                const channel = closure_1_6.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  guildId = channel.getGuildId();
                  const result = closure_1_0(closure_1_2[7]).setHubProgressActionComplete(guildId, closure_1_0(closure_1_2[8]).HubProgressStep.JOIN_GUILD);
                  const obj6 = closure_1_0(closure_1_2[7]);
                }
              }
              v02(true);
              v02 = 1;
              obj1 = { source: null };
              obj1[0] = v0;
              v0 = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = v0(closure_1_2[9]).joinGuild(closure_1_0, obj1);
              return obj2;
            }
          }
        } else if (1 === tmp7) {
          v02 = 0;
          v02(false);
          throw closure_2;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v02 = 0;
            v02(false);
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            obj1 = v0(closure_1_2[9]);
            v0 = 3;
            c4 = 1;
            const obj4 = { value: null, done: false };
            obj4[0] = obj1.waitForGuild(closure_0);
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          v02 = 0;
          v02(false);
        }
        v02 = 0;
        v02(false);
        c4 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp43) {
        closure_2 = tmp43;
        if (tmp4 === v02) {
          c4 = tmp2;
          throw tmp43;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items);
  let obj = { grow: true, variant: "primary", size: "md", loading: first, text: null, onPress: null };
  const intl = guildId(first[11]).intl;
  obj[4] = intl.string(guildId(first[11]).t.RLch70);
  obj[5] = callback;
  return jsx(guildId(first[10]).Button, { grow: true, variant: "primary", size: "md", loading: first, text: null, onPress: null });
});
let result = require("set").fileFinishedImporting("modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx");

export default memoResult;