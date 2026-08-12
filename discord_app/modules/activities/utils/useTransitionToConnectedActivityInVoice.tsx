// discord_app/modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx
import getEmbeddedActivityLocationChannelId from "getEmbeddedActivityLocationChannelId";
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import { ComponentActions } from "ME";

const require = arg1;
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx");

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
      const tmp = outer2_3((arg0) => {
        let closure_0 = arg0;
        let c3 = 0;
        let c4 = 0;
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
              return { value: "HermesInternal", done: null };
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
                  return { value: "ct", done: true };
                }
              } else {
                if (1 === tmp5) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj1 = { value: null, done: true };
                    obj1[0] = arg1;
                    return obj1;
                  } else {
                    callback = outer2_0(outer2_2[5]).getEmbeddedActivityLocationChannelId(location);
                    if (null != callback) {
                      if (callback(outer2_2[6])(callback)) {
                        if (outer2_6.getVoiceChannelId() !== callback) {
                          const obj2 = { channelId: null };
                          obj2[0] = callback;
                          guild_id = 2;
                          c4 = 1;
                          const obj3 = { value: null, done: false };
                          obj3[0] = callback(outer2_2[7])(obj2);
                          return obj3;
                        }
                      }
                    }
                    c4 = 3;
                    return { value: "HermesInternal", done: null };
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
                guild_id = outer2_5.getChannel(callback);
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
      const _handler = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let ComponentDispatch = onTransition(outer1_2[9]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(outer1_7.OPEN_EMBEDDED_ACTIVITY, handler);
    return () => {
      const ComponentDispatch = onTransition(outer2_2[9]).ComponentDispatch;
      ComponentDispatch.unsubscribe(outer2_7.OPEN_EMBEDDED_ACTIVITY, handler);
    };
  }, items);
};