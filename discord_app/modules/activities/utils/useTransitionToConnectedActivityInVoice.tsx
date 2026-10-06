// discord_app/modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx
import Constants from "../../../Constants.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channelId, onTransition;

const ComponentActions = Constants.ComponentActions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onTransition) => {
      let tmp2;
      let tmp3;
      let obj = onTransition(576);
      const cResult = obj.c(3);
      onTransition = onTransition.onTransition;
      if (cResult[0] !== onTransition) {
        const fn = function s() {
          let closure_0 = _asyncToGenerator(async (arg0) => {
            closure_0 = arg0;
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
                let guild_id;
                let embeddedActivityLocationChannelId;
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
                    let closure_1 = tmp2;
                    guild_id = undefined;
                    const _location = closure_0.location;
                    const obj6 = closure_0(closure_2_2[7]);
                    embeddedActivityLocationChannelId = obj6.getEmbeddedActivityLocationChannelId(_location);
                    if (null != embeddedActivityLocationChannelId) {
                      if (closure_2_1(closure_2_2[8])(embeddedActivityLocationChannelId)) {
                        if (voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId) {
                          const obj4 = { channelId: embeddedActivityLocationChannelId };
                          c3 = 1;
                          c4 = 1;
                          const obj5 = { value: closure_2_1(closure_2_2[9])(obj4), done: false };
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
                channel.getChannel(embeddedActivityLocationChannelId);
                guild_id = undefined;
                if (guild_id != null) {
                  guild_id = guild_id.guild_id;
                }
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => {
                  closure_3_1(closure_3_2[10])(closure_1_3, closure_1_0);
                  if (closure_0 != null) {
                    closure_0();
                  }
                }, 0);
              } catch (tmp16) {
                c4 = 3;
                throw tmp16;
              }
            }
          });
          function handler() {
            return closure_0(...arguments);
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
        tmp3 = items;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  : (onTransition) => {
      onTransition = onTransition.onTransition;
      const items = [onTransition];
      const effect = react.useEffect(() => {
        function handler() {
          return obj(...arguments);
        }
        let obj = function _handler2() {
          let channel;
          let voiceChannelId;
          obj = _asyncToGenerator(async (arg0) => {
            const _location = arg0;
            let c3 = 0;
            let c4 = 0;
            const iter = (async (arg0) => {
              if (c4 === 2) {
                c4 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  return { value, done: true };
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  let location;
                  c4 = 2;
                  if (0 === c3) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      return { value, done: true };
                    } else {
                      location = _location.location;
                      channelId = undefined;
                      guild_id = undefined;
                      c3 = 1;
                      c4 = 1;
                      return { value: "Reflect", done: true };
                    }
                  } else {
                    if (1 === c3) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        return { value, done: true };
                      } else {
                        const obj7 = handler(closure_2_2[7]);
                        channelId = obj7.getEmbeddedActivityLocationChannelId(location);
                        if (null != channelId) {
                          if (closure_2_1(closure_2_2[8])(channelId)) {
                            if (voiceChannelId.getVoiceChannelId() !== channelId) {
                              c3 = 2;
                              c4 = 1;
                              const obj5 = { channelId };
                              const obj6 = { value: closure_2_1(closure_2_2[9])(obj5), done: false };
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
                      obj = { value, done: true };
                      return obj;
                    }
                    channel.getChannel(channelId);
                    guild_id = undefined;
                    if (guild_id != null) {
                      guild_id = guild_id.guild_id;
                    }
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(() => {
                      obj(closure_3_2[10])(closure_1_3, closure_1_0);
                      if (closure_0 != null) {
                        closure_0();
                      }
                    }, 0);
                  }
                } catch (tmp24) {
                  c4 = 3;
                  throw tmp24;
                }
              }
            })();
            iter.next();
            return iter;
          });
          return obj(...arguments);
        };
        let ComponentDispatch = onTransition(dependencyMap[11]).ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(constants.OPEN_EMBEDDED_ACTIVITY, handler);
        return () => {
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.unsubscribe(ComponentActions.OPEN_EMBEDDED_ACTIVITY, handler);
        };
      }, items);
    };
const result = size.fileFinishedImporting("modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx");

export default tmp2;
