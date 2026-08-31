// === Module 16595: useTransitionToConnectedActivityInVoice ===

// Module 16595 (useTransitionToConnectedActivityInVoice)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import closure_6 from "handleConnectionOpen" /* 1981 */;
import { ComponentActions } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx");

export default function useTransitionToConnectedActivityInVoice(onTransition) {
  onTransition = onTransition.onTransition;
  const items = [onTransition];
  const effect = React.useEffect(() => {
    function handler() {
      const self = this;
      const apply = _handler.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function _handler() {
      const self = this;
      const tmp = closure_2_3((arg0) => {
        closure_0 = arg0;
        c3 = 0;
        c4 = 0;
        const iter = (function*(arg0) {
          if (c4 === 2) {
            c4 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
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
              if (0 === guild_id) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  guild_id = tmp5;
                  let callback = tmp2;
                  let location;
                  location = location.location;
                  callback = undefined;
                  guild_id = undefined;
                  guild_id = undefined;
                  guild_id = 1;
                  c4 = 1;
                  return { value: "Object", done: true };
                }
              } else {
                if (1 === tmp5) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    obj1 = { value: null, done: true };
                    obj1[0] = arg1;
                    return obj1;
                  } else {
                    callback = closure_2_0(closure_2_2[5]).getEmbeddedActivityLocationChannelId(location);
                    if (null != callback) {
                      if (callback(closure_2_2[6])(callback)) {
                        if (closure_2_6.getVoiceChannelId() !== callback) {
                          const obj2 = { channelId: null };
                          obj2[0] = callback;
                          guild_id = 2;
                          c4 = 1;
                          const obj3 = { value: null, done: false };
                          obj3[0] = callback(closure_2_2[7])(obj2);
                          return obj3;
                        }
                      }
                    }
                    c4 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                }
                guild_id = closure_2_5.getChannel(callback);
                guild_id = undefined;
                if (guild_id != null) {
                  guild_id = guild_id.guild_id;
                }
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => { ... }, 0);
              }
            } catch (tmp25) {
              c4 = tmp;
              throw tmp25;
            }
          }
        })();
        iter.next();
        return iter;
      });
      closure_1 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let ComponentDispatch = onTransition(closure_1_2[9]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(closure_1_7.OPEN_EMBEDDED_ACTIVITY, handler);
    return () => {
      const ComponentDispatch = onTransition(closure_2_2[9]).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_2_7.OPEN_EMBEDDED_ACTIVITY, handler);
    };
  }, items);
};