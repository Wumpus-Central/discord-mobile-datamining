// === Module 17295: AppChannel ===

// Module 17295 (AppChannel)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8610 */;
import AppChannelChat from "AppChannelChat" /* 9314 */;
import FrameSurfaceState from "FrameSurfaceState" /* 17302 */;
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 17303 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const FrameLayoutModes = fn(10802).FrameLayoutModes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { flex: 1, paddingBottom } };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppChannel(arg0) {
  const cResult = id(576).c(25);
  ({ applicationId, channel } = arg0);
  const tmp5 = closure_8(guild_id(1897)());
  if (cResult[0] === channel.guild_id) {
    if (cResult[1] === channel.id) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === applicationId) {
      if (cResult[4] === tmp6) {
        let tmp7 = cResult[5];
      }
      ({ frame, state } = tmp4(17296)(tmp7));
      const tmp8 = tmp4(17296)(tmp7);
      tmp4(17088)(state === tmp(17296).FrameLifecycleState.Launched);
      const tmp4Result = tmp4(17088);
      let tmp12 = null;
      if (state === tmp(17296).FrameLifecycleState.Launched) {
        tmp12 = applicationId;
      }
      tmp4(17089)(tmp12);
      const tmp4Result3 = tmp4(17089);
      const isConjureChannelCandidate = tmp(6945).useIsConjureChannelCandidate(channel, "AppChannel");
      id = channel.id;
      guild_id = channel.guild_id;
      if (cResult[6] === id) {
        if (cResult[7] === guild_id) {
          let tmp15 = cResult[8];
        }
        if (tmp(17296).FrameLifecycleState.Launched === state) {
          const _Symbol6 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { layoutMode: FrameLayoutModes.FOCUSED };
            cResult[9] = obj2;
            let tmp37 = obj2;
          } else {
            tmp37 = cResult[9];
          }
          if (cResult[10] !== frame.id) {
            const obj3 = { frameId: frame.id, level: tmp(17094).FrameStackLevel.WithinAppContent, presentation: tmp37 };
            const tmp42 = closure_6(tmp4(17090), obj3);
            cResult[10] = frame.id;
            cResult[11] = tmp42;
            let tmp39 = tmp42;
            const tmp4Result4 = tmp4(17090);
          } else {
            tmp39 = cResult[11];
          }
          if (cResult[12] === id) {
            if (cResult[13] === tmp15) {
              if (cResult[14] === isConjureChannelCandidate) {
                let tmp43 = cResult[15];
              }
              if (cResult[16] === tmp5.container) {
                if (cResult[17] === tmp39) {
                  if (cResult[18] === tmp43) {
                    let tmp46 = cResult[19];
                  }
                  return tmp46;
                }
              }
              const obj4 = { style: tmp5.container, children: null };
              const items = [tmp39, tmp43];
              obj4.children = items;
              const tmp49 = closure_7(View, obj4);
              cResult[16] = tmp5.container;
              cResult[17] = tmp39;
              cResult[18] = tmp43;
              cResult[19] = tmp49;
              tmp46 = tmp49;
            }
          }
          let tmp44 = null;
          if (isConjureChannelCandidate) {
            const obj5 = { channelId: id, onOpenChat: tmp15 };
            tmp44 = closure_6(tmp4(17299), obj5);
          }
          cResult[12] = id;
          cResult[13] = tmp15;
          cResult[14] = isConjureChannelCandidate;
          cResult[15] = tmp44;
          tmp43 = tmp44;
        } else if (tmp(17296).FrameLifecycleState.RenderingElsewhere === state) {
          const _Symbol5 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { description: null };
            const intl5 = tmp(1126).intl;
            obj6.description = intl5.string(tmp(1126).t["2KIDX+"]);
            const tmp35 = closure_6(tmp(17302).FrameSurfaceExplanation, obj6);
            cResult[20] = tmp35;
            let tmp33 = tmp35;
          } else {
            tmp33 = cResult[20];
          }
          return tmp33;
        } else if (tmp(17296).FrameLifecycleState.NoApplication === state) {
          const _Symbol4 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { description: null };
            const intl4 = tmp(1126).intl;
            obj7.description = intl4.string(tmp(1126).t.izggZO);
            const tmp31 = closure_6(tmp(17302).FrameSurfaceExplanation, obj7);
            cResult[21] = tmp31;
            let tmp29 = tmp31;
          } else {
            tmp29 = cResult[21];
          }
          return tmp29;
        } else if (tmp(17296).FrameLifecycleState.DoesNotSupportSurface === state) {
          const _Symbol3 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = { description: null };
            const intl3 = tmp(1126).intl;
            obj8.description = intl3.string(tmp(1126).t["iUWcU/"]);
            const tmp27 = closure_6(tmp(17302).FrameSurfaceExplanation, obj8);
            cResult[22] = tmp27;
            let tmp25 = tmp27;
          } else {
            tmp25 = cResult[22];
          }
          return tmp25;
        } else if (tmp(17296).FrameLifecycleState.Error === state) {
          const _Symbol2 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const obj9 = { heading: null, error: null };
            const intl = tmp(1126).intl;
            obj9.heading = intl.string(tmp(1126).t.VquUff);
            const intl2 = tmp(1126).intl;
            obj9.error = intl2.string(tmp(1126).t["Sd9D/R"]);
            const tmp23 = closure_6(tmp(17302).FrameSurfaceExplanation, obj9);
            cResult[23] = tmp23;
            let tmp21 = tmp23;
          } else {
            tmp21 = cResult[23];
          }
          return tmp21;
        } else {
          const _Symbol = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp19 = closure_6(tmp(17302).FrameSurfaceLoading, {});
            cResult[24] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[24];
          }
          return tmp17;
        }
      }
      const fn = function v(id) {
        AppChannelChat.openAppChannelChat(guild_id, id, id.id);
      };
      cResult[6] = id;
      cResult[7] = guild_id;
      cResult[8] = fn;
      tmp15 = fn;
      const tmpResult = tmp(6945);
    }
    const obj10 = { applicationId, surface: tmp6 };
    cResult[3] = applicationId;
    cResult[4] = tmp6;
    cResult[5] = obj10;
    tmp7 = obj10;
  }
  const obj11 = { type: id(8610).EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: channel.guild_id };
  cResult[0] = channel.guild_id;
  cResult[1] = channel.id;
  cResult[2] = obj11;
  tmp6 = obj11;
  const obj = id(576);
}) : (function AppChannel(arg0) {
  ({ applicationId, channel } = arg0);
  let id;
  let guild_id;
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const memo = noop.useMemo(() => ({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: channel.guild_id }), items);
  const tmp3 = closure_8(id(guild_id[7])());
  ({ state, frame } = id(guild_id[9])({ applicationId, surface: memo }));
  const tmp5 = id(guild_id[9])({ applicationId, surface: memo });
  id(guild_id[10])(state === channel(guild_id[9]).FrameLifecycleState.Launched);
  const tmp6 = id(guild_id[10]);
  let tmp10 = null;
  if (state === channel(guild_id[9]).FrameLifecycleState.Launched) {
    tmp10 = applicationId;
  }
  id(guild_id[11])(tmp10);
  const tmp9 = id(guild_id[11]);
  id = channel.id;
  guild_id = channel.guild_id;
  const items1 = [guild_id, id];
  const isConjureChannelCandidate = channel(guild_id[12]).useIsConjureChannelCandidate(channel, "AppChannel");
  const callback = noop.useCallback((id) => {
    AppChannelChat.openAppChannelChat(guild_id, id, id.id);
  }, items1);
  if (channel(guild_id[9]).FrameLifecycleState.Launched === state) {
    const obj2 = { style: tmp3.container, children: null };
    const obj3 = { frameId: frame.id, level: channel(tmp2[15]).FrameStackLevel.WithinAppContent, presentation: null };
    const obj4 = { layoutMode: FrameLayoutModes.FOCUSED };
    obj3.presentation = obj4;
    const items2 = [closure_6(tmp(tmp2[14]), obj3), ];
    let tmp21Result = null;
    if (isConjureChannelCandidate) {
      const obj5 = { channelId: id, onOpenChat: callback };
      tmp21Result = closure_6(tmp(tmp2[16]), obj5);
    }
    items2[1] = tmp21Result;
    obj2.children = items2;
    return closure_7(View, obj2);
  } else if (channel(tmp2[9]).FrameLifecycleState.RenderingElsewhere === state) {
    const obj6 = { description: null };
    const intl5 = channel(tmp2[18]).intl;
    obj6.description = intl5.string(channel(tmp2[18]).t["2KIDX+"]);
    return closure_6(channel(tmp2[17]).FrameSurfaceExplanation, obj6);
  } else if (channel(tmp2[9]).FrameLifecycleState.NoApplication === state) {
    const obj7 = { description: null };
    const intl4 = channel(tmp2[18]).intl;
    obj7.description = intl4.string(channel(tmp2[18]).t.izggZO);
    return closure_6(channel(tmp2[17]).FrameSurfaceExplanation, obj7);
  } else if (channel(tmp2[9]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const obj8 = { description: null };
    const intl3 = channel(tmp2[18]).intl;
    obj8.description = intl3.string(channel(tmp2[18]).t["iUWcU/"]);
    return closure_6(channel(tmp2[17]).FrameSurfaceExplanation, obj8);
  } else if (channel(tmp2[9]).FrameLifecycleState.Error === state) {
    const obj9 = { heading: null, error: null };
    const intl = channel(tmp2[18]).intl;
    obj9.heading = intl.string(channel(tmp2[18]).t.VquUff);
    const intl2 = channel(tmp2[18]).intl;
    obj9.error = intl2.string(channel(tmp2[18]).t["Sd9D/R"]);
    return closure_6(channel(tmp2[17]).FrameSurfaceExplanation, obj9);
  } else {
    return closure_6(channel(tmp2[17]).FrameSurfaceLoading, {});
  }
  const tmp7Result = channel(guild_id[12]);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedAppChannel(channel) {
  let stringResult = dependencyMap;
  const cResult = c.c(4);
  channel = channel.channel;
  const application_id = channel.application_id;
  useChannelAppFrameTeardownDefault(channel);
  if (null == application_id) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { heading: null, description: null };
      const intl = util.intl;
      obj2.heading = intl.string(util.t.tU5fiM);
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.E94mJf);
      obj2.description = stringResult;
      const tmp12 = timestampProducer(FrameSurfaceState.FrameSurfaceExplanation, obj2);
      cResult[0] = tmp12;
      let first = tmp12;
    } else {
      first = cResult[0];
    }
  } else {
    if (cResult[1] === application_id) {
      if (cResult[2] === channel) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
    const obj3 = { applicationId: application_id, channel };
    const tmp8 = timestampProducer(closure_9, obj3);
    cResult[1] = application_id;
    cResult[2] = channel;
    cResult[3] = tmp8;
    tmp5 = tmp8;
  }
}) : (function ConnectedAppChannel(channel) {
  channel = channel.channel;
  const application_id = channel.application_id;
  useChannelAppFrameTeardownDefault(channel);
  if (null == application_id) {
    const obj2 = { heading: null, description: null };
    const intl = util.intl;
    obj2.heading = intl.string(util.t.tU5fiM);
    const intl2 = util.intl;
    obj2.description = intl2.string(util.t.E94mJf);
    let tmp5 = timestampProducer(FrameSurfaceState.FrameSurfaceExplanation, obj2);
  } else {
    const obj = { applicationId: application_id, channel };
    tmp5 = timestampProducer(closure_9, obj);
  }
  return tmp5;
});