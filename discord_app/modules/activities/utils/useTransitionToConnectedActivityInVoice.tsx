// === Module 17827: useTransitionToConnectedActivityInVoice ===

// Module 17827 (useTransitionToConnectedActivityInVoice)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;

require = fn;
const ComponentActions = fn(1085).ComponentActions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useTransitionToConnectedActivityInVoice(onTransition) {
  const cResult = onTransition(576).c(3);
  onTransition = onTransition.onTransition;
  if (cResult[0] !== onTransition) {
    const fn = function l() {
      closure_129_0 = asyncGeneratorStep(async (arg0) => {
        let _location = arg0;
        c3 = 0;
        c4 = 0;
        return (async (arg0) => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp5 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
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
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_2 = tmp2;
                  closure_1 = tmp3;
                  closure_129_0 = undefined;
                  closure_129_1 = undefined;
                  let channel2;
                  closure_129_3 = undefined;
                  _location = _location.location;
                  closure_129_0 = _location;
                  const embeddedActivityLocationChannelId = handler(4698).getEmbeddedActivityLocationChannelId(_location);
                  closure_129_1 = embeddedActivityLocationChannelId;
                  if (null != embeddedActivityLocationChannelId) {
                    if (closure_2_1(10447)(embeddedActivityLocationChannelId)) {
                      if (voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId) {
                        const obj4 = { channelId: embeddedActivityLocationChannelId };
                        c3 = 1;
                        c4 = 1;
                        const obj5 = { value: closure_2_1(10805)(obj4), done: false };
                        return obj5;
                      }
                    }
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              }
              channel2 = channel.getChannel(closure_129_1);
              let guild_id;
              if (channel2 != null) {
                guild_id = channel2.guild_id;
              }
              closure_129_3 = guild_id;
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => {
                closure_3_1(10814)(closure_1_3, _location);
                if (closure_0 != null) {
                  closure_0();
                }
              }, 0);
            } catch (tmp17) {
              c4 = tmp;
              throw tmp17;
            }
          }
        })();
      });
      function handler() {
        const self = this;
        const apply = handler.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      let ComponentDispatch = onTransition(dependencyMap[11]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.OPEN_EMBEDDED_ACTIVITY, handler);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.OPEN_EMBEDDED_ACTIVITY, handler);
      };
    };
    const items = [onTransition];
    cResult[0] = onTransition;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (function useTransitionToConnectedActivityInVoice(onTransition) {
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
    closure_1 = async function _handler2(arg0) {
      let _location = arg0;
      c3 = 0;
      c4 = 0;
      let iter = (async (arg0) => {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
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
                const obj3 = { value, done: true };
                return obj3;
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
                return { value: "Set", done: true };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  embeddedActivityLocationChannelId = handler(4698).getEmbeddedActivityLocationChannelId(_location2);
                  if (null != embeddedActivityLocationChannelId) {
                    if (closure_2_1(10447)(embeddedActivityLocationChannelId)) {
                      if (voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId) {
                        const obj5 = { channelId: embeddedActivityLocationChannelId };
                        c3 = 2;
                        c4 = 1;
                        const obj6 = { value: closure_2_1(10805)(obj5), done: false };
                        return obj6;
                      }
                    }
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj = { value, done: true };
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
                closure_3_1(10814)(closure_1_3, _location);
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
    let ComponentDispatch = onTransition(dependencyMap[11]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.OPEN_EMBEDDED_ACTIVITY, handler);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.OPEN_EMBEDDED_ACTIVITY, handler);
    };
  }, items);
});