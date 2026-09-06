// === Module 17050: useTransitionToConnectedActivityInVoice ===

// Module 17050 (useTransitionToConnectedActivityInVoice)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
const ComponentActions = fn(1074).ComponentActions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx");

export default function useTransitionToConnectedActivityInVoice(onTransition) {
  onTransition = onTransition.onTransition;
  const items = [onTransition];
  const effect = noop.useEffect(() => {
    function handler() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_1 = async function _handler(arg0) {
      let _location = arg0;
      c3 = 0;
      c4 = 0;
      let iter = (async (arg0, value) => {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_2 = tmp5;
                closure_1 = tmp2;
                let _location2;
                _location2 = _location.location;
                let embeddedActivityLocationChannelId;
                let channel2;
                closure_129_3 = undefined;
                c3 = 1;
                c4 = 1;
                return { value: "PX_16", done: true };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj1 = { value, done: true };
                  return obj1;
                } else {
                  embeddedActivityLocationChannelId = handler(4189).getEmbeddedActivityLocationChannelId(_location2);
                  if (null != embeddedActivityLocationChannelId) {
                    if (closure_2_1(9526)(embeddedActivityLocationChannelId)) {
                      if (voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId) {
                        const obj2 = { channelId: embeddedActivityLocationChannelId };
                        c3 = 2;
                        c4 = 1;
                        const obj3 = { value: closure_2_1(9545)(obj2), done: false };
                        return obj3;
                      }
                    }
                  }
                  c4 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              }
              channel2 = channel.getChannel(embeddedActivityLocationChannelId);
              let guild_id;
              if (channel2 != null) {
                guild_id = channel2.guild_id;
              }
              closure_129_3 = guild_id;
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => {
                closure_3_1(9535)(closure_1_3, _location);
                if (closure_0 != null) {
                  closure_0();
                }
              }, 0);
            }
          } catch (tmp25) {
            c4 = tmp;
            throw tmp25;
          }
        }
      })();
      iter.next();
      return iter;
    };
    let ComponentDispatch = onTransition(dependencyMap[9]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.OPEN_EMBEDDED_ACTIVITY, handler);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.OPEN_EMBEDDED_ACTIVITY, handler);
    };
  }, items);
};