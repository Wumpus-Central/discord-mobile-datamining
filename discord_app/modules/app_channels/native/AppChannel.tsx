// === Module 16793: AppChannel ===

// Module 16793 (AppChannel)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1126 */;
import AppChannelChat from "AppChannelChat" /* 7526 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8547 */;
import FramesConstants from "FramesConstants" /* 8738 */;
import FrameSurfaceState from "FrameSurfaceState" /* 16800 */;
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 16801 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const FrameLayoutModes = FramesConstants.FrameLayoutModes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: obj2 };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let applicationId;
  let channel;
  let frame;
  let guild_id;
  let id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let state;
  let obj = id(576);
  const cResult = obj.c(25);
  ({ applicationId, channel } = arg0);
  const tmp5 = closure_8(guild_id(1884)());
  if (cResult[0] === channel.guild_id) {
    let tmp6;
    if (cResult[1] === channel.id) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === applicationId) {
      let tmp7;
      if (cResult[4] === tmp6) {
        tmp7 = cResult[5];
      }
      ({ frame, state } = guild_id(16794)(tmp7));
      guild_id(16794)(tmp7);
      const tmp4Result = guild_id(16630);
      tmp4Result(state === id(16794).FrameLifecycleState.Launched);
      let tmp12 = null;
      const tmp4Result3 = guild_id(16631);
      if (state === id(16794).FrameLifecycleState.Launched) {
        tmp12 = applicationId;
      }
      tmp4Result3(tmp12);
      const tmpResult = id(6756);
      const isConjureChannelCandidate = tmpResult.useIsConjureChannelCandidate(channel, "AppChannel");
      id = channel.id;
      guild_id = channel.guild_id;
      if (cResult[6] === id) {
        let tmp15;
        if (cResult[7] === guild_id) {
          tmp15 = cResult[8];
        }
        if (id(16794).FrameLifecycleState.Launched === state) {
          let tmp37;
          let tmp39;
          const _Symbol6 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { layoutMode: FrameLayoutModes.FOCUSED };
            cResult[9] = obj2;
            tmp37 = obj2;
          } else {
            tmp37 = cResult[9];
          }
          if (cResult[10] !== frame.id) {
            const obj3 = { frameId: frame.id, level: id(16636).FrameStackLevel.WithinAppContent, presentation: tmp37 };
            const tmp4Result4 = guild_id(16632);
            const tmp42 = closure_6(tmp4Result4, obj3);
            cResult[10] = frame.id;
            cResult[11] = tmp42;
            tmp39 = tmp42;
          } else {
            tmp39 = cResult[11];
          }
          if (cResult[12] === id) {
            if (cResult[13] === tmp15) {
              let tmp43;
              if (cResult[14] === isConjureChannelCandidate) {
                tmp43 = cResult[15];
              }
              if (cResult[16] === tmp5.container) {
                if (cResult[17] === tmp39) {
                  let tmp46;
                  if (cResult[18] === tmp43) {
                    tmp46 = cResult[19];
                  }
                  return tmp46;
                }
              }
              const obj4 = { style: tmp5.container, children: items };
              items = [tmp39, tmp43];
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
            tmp44 = closure_6(tmp4(16797), obj5);
          }
          cResult[12] = id;
          cResult[13] = tmp15;
          cResult[14] = isConjureChannelCandidate;
          cResult[15] = tmp44;
          tmp43 = tmp44;
        } else if (id(16794).FrameLifecycleState.RenderingElsewhere === state) {
          let tmp33;
          const _Symbol5 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { description: intl5.string(id(1126).t["2KIDX+"]) };
            const FrameSurfaceExplanation4 = tmp(16800).FrameSurfaceExplanation;
            intl5 = tmp(1126).intl;
            const tmp35 = closure_6(FrameSurfaceExplanation4, obj6);
            cResult[20] = tmp35;
            tmp33 = tmp35;
          } else {
            tmp33 = cResult[20];
          }
          return tmp33;
        } else if (id(16794).FrameLifecycleState.NoApplication === state) {
          let tmp29;
          const _Symbol4 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { description: intl4.string(id(1126).t.izggZO) };
            const FrameSurfaceExplanation3 = tmp(16800).FrameSurfaceExplanation;
            intl4 = tmp(1126).intl;
            const tmp31 = closure_6(FrameSurfaceExplanation3, obj7);
            cResult[21] = tmp31;
            tmp29 = tmp31;
          } else {
            tmp29 = cResult[21];
          }
          return tmp29;
        } else if (id(16794).FrameLifecycleState.DoesNotSupportSurface === state) {
          let tmp25;
          const _Symbol3 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = { description: intl3.string(id(1126).t["iUWcU/"]) };
            const FrameSurfaceExplanation2 = tmp(16800).FrameSurfaceExplanation;
            intl3 = tmp(1126).intl;
            const tmp27 = closure_6(FrameSurfaceExplanation2, obj8);
            cResult[22] = tmp27;
            tmp25 = tmp27;
          } else {
            tmp25 = cResult[22];
          }
          return tmp25;
        } else if (id(16794).FrameLifecycleState.Error === state) {
          let tmp21;
          const _Symbol2 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const obj9 = { heading: intl.string(id(1126).t.VquUff), error: intl2.string(id(1126).t["Sd9D/R"]) };
            const FrameSurfaceExplanation = tmp(16800).FrameSurfaceExplanation;
            intl = tmp(1126).intl;
            intl2 = tmp(1126).intl;
            const tmp23 = closure_6(FrameSurfaceExplanation, obj9);
            cResult[23] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[23];
          }
          return tmp21;
        } else {
          let tmp17;
          const _Symbol = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp19 = closure_6(id(16800).FrameSurfaceLoading, {});
            cResult[24] = tmp19;
            tmp17 = tmp19;
          } else {
            tmp17 = cResult[24];
          }
          return tmp17;
        }
      }
      const fn = function v(id) {
        const obj = AppChannelChat;
        obj.openAppChannelChat(guild_id, id, id.id);
      };
      cResult[6] = id;
      cResult[7] = guild_id;
      cResult[8] = fn;
      tmp15 = fn;
    }
    const obj10 = { applicationId, surface: tmp6 };
    cResult[3] = applicationId;
    cResult[4] = tmp6;
    cResult[5] = obj10;
    tmp7 = obj10;
  }
  const obj11 = { type: id(8547).EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: channel.guild_id };
  cResult[0] = channel.guild_id;
  cResult[1] = channel.id;
  cResult[2] = obj11;
  tmp6 = obj11;
}) : ((arg0) => {
  let applicationId;
  let channel;
  let frame;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let obj4;
  let state;
  ({ applicationId, channel } = arg0);
  let id;
  let guild_id;
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const tmp3 = closure_8(id(guild_id[7])());
  const memo = react.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: channel.guild_id };
    return obj;
  }, items);
  ({ state, frame } = id(guild_id[9])({ applicationId, surface: memo }));
  id(guild_id[9])({ applicationId, surface: memo });
  const tmp6 = id(guild_id[10]);
  tmp6(state === channel(guild_id[9]).FrameLifecycleState.Launched);
  let tmp10 = null;
  const tmp9 = id(guild_id[11]);
  if (state === channel(guild_id[9]).FrameLifecycleState.Launched) {
    tmp10 = applicationId;
  }
  tmp9(tmp10);
  id = channel.id;
  const tmp7Result = channel(guild_id[12]);
  guild_id = channel.guild_id;
  const items1 = [guild_id, id];
  const isConjureChannelCandidate = tmp7Result.useIsConjureChannelCandidate(channel, "AppChannel");
  const callback = react.useCallback((id) => {
    const obj = AppChannelChat;
    obj.openAppChannelChat(guild_id, id, id.id);
  }, items1);
  if (channel(guild_id[9]).FrameLifecycleState.Launched === state) {
    const obj2 = { style: tmp3.container, children: items2 };
    const obj3 = { frameId: frame.id, level: channel(guild_id[15]).FrameStackLevel.WithinAppContent, presentation: obj4 };
    obj4 = { layoutMode: FrameLayoutModes.FOCUSED };
    const tmpResult = id(guild_id[14]);
    items2 = [closure_6(tmpResult, obj3), ];
    let tmp21Result = null;
    if (isConjureChannelCandidate) {
      const obj5 = { channelId: id, onOpenChat: callback };
      tmp21Result = closure_6(tmp(tmp2[16]), obj5);
    }
    items2[1] = tmp21Result;
    return closure_7(View, obj2);
  } else if (channel(guild_id[9]).FrameLifecycleState.RenderingElsewhere === state) {
    const obj6 = { description: intl5.string(channel(guild_id[18]).t["2KIDX+"]) };
    const FrameSurfaceExplanation4 = channel(tmp2[17]).FrameSurfaceExplanation;
    intl5 = channel(tmp2[18]).intl;
    return closure_6(FrameSurfaceExplanation4, obj6);
  } else if (channel(guild_id[9]).FrameLifecycleState.NoApplication === state) {
    const obj7 = { description: intl4.string(channel(guild_id[18]).t.izggZO) };
    const FrameSurfaceExplanation3 = channel(tmp2[17]).FrameSurfaceExplanation;
    intl4 = channel(tmp2[18]).intl;
    return closure_6(FrameSurfaceExplanation3, obj7);
  } else if (channel(guild_id[9]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const obj8 = { description: intl3.string(channel(guild_id[18]).t["iUWcU/"]) };
    const FrameSurfaceExplanation2 = channel(tmp2[17]).FrameSurfaceExplanation;
    intl3 = channel(tmp2[18]).intl;
    return closure_6(FrameSurfaceExplanation2, obj8);
  } else if (channel(guild_id[9]).FrameLifecycleState.Error === state) {
    const obj9 = { heading: intl.string(channel(guild_id[18]).t.VquUff), error: intl2.string(channel(guild_id[18]).t["Sd9D/R"]) };
    const FrameSurfaceExplanation = channel(tmp2[17]).FrameSurfaceExplanation;
    intl = channel(tmp2[18]).intl;
    intl2 = channel(tmp2[18]).intl;
    return closure_6(FrameSurfaceExplanation, obj9);
  } else {
    return closure_6(channel(guild_id[17]).FrameSurfaceLoading, {});
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let intl;
  let intl2;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  channel = channel.channel;
  const application_id = channel.application_id;
  useChannelAppFrameTeardownDefault(channel);
  if (null == application_id) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { heading: intl.string(intl6.t.tU5fiM), description: intl2.string(intl6.t.E94mJf) };
      const FrameSurfaceExplanation = FrameSurfaceState.FrameSurfaceExplanation;
      intl = intl6.intl;
      intl2 = intl6.intl;
      const tmp12 = metroRequire(FrameSurfaceExplanation, obj2);
      cResult[0] = tmp12;
      first = tmp12;
    } else {
      first = cResult[0];
    }
    tmp5 = first;
  } else {
    if (cResult[1] === application_id) {
      if (cResult[2] === channel) {
        tmp5 = cResult[3];
      }
    }
    const obj3 = { applicationId: application_id, channel };
    const tmp8 = metroRequire(closure_9, obj3);
    cResult[1] = application_id;
    cResult[2] = channel;
    cResult[3] = tmp8;
    tmp5 = tmp8;
  }
  return tmp5;
}) : ((channel) => {
  let intl;
  let intl2;
  let tmp5;
  channel = channel.channel;
  const application_id = channel.application_id;
  useChannelAppFrameTeardownDefault(channel);
  if (null == application_id) {
    const obj2 = { heading: intl.string(intl6.t.tU5fiM), description: intl2.string(intl6.t.E94mJf) };
    const FrameSurfaceExplanation = FrameSurfaceState.FrameSurfaceExplanation;
    intl = intl6.intl;
    intl2 = intl6.intl;
    tmp5 = metroRequire(FrameSurfaceExplanation, obj2);
  } else {
    const obj = { applicationId: application_id, channel };
    tmp5 = metroRequire(closure_9, obj);
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannel.tsx");

export default tmp3;