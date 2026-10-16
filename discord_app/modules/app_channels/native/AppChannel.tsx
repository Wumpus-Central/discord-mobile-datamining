// discord_app/modules/app_channels/native/AppChannel.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import conjureDMAppChannel from "../../conjure/app_channel/conjureDMAppChannel.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import AppChannelChat from "../AppChannelChat.tsx";
import getInlineFramePresentationDefault from "../../frames/native/getInlineFramePresentation.tsx";
import FrameSurfaceState from "../../frames/native/FrameSurfaceState.tsx";
import useChannelAppFrameTeardownDefault from "../../frames/useChannelAppFrameTeardown.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5153);
let closure_7 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { flex: 1, paddingBottom } };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AppChannel(arg0) {
      const cResult = id(576).c(31);
      ({ applicationId, channel, headerVisible } = arg0);
      const tmp6 = closure_7(guild_id(1899)());
      ({ top, bottom, left, right } = guild_id(6887)().insets);
      if (cResult[0] === bottom) {
        if (cResult[1] === tmp4) {
          if (cResult[2] === left) {
            if (cResult[3] === right) {
              if (cResult[4] === top) {
                let tmp7 = cResult[5];
              }
              if (cResult[6] === channel.guild_id) {
                if (cResult[7] === channel.id) {
                  let tmp9 = cResult[8];
                }
                if (cResult[9] === applicationId) {
                  if (cResult[10] === tmp9) {
                    let tmp10 = cResult[11];
                  }
                  ({ frame, state } = tmp5(17665)(tmp10));
                  const tmp11 = tmp5(17665)(tmp10);
                  tmp5(11636)(state === tmp(17665).FrameLifecycleState.Launched);
                  const tmp5Result = tmp5(11636);
                  let tmp15 = null;
                  if (state === tmp(17665).FrameLifecycleState.Launched) {
                    tmp15 = applicationId;
                  }
                  tmp5(11640)(tmp15);
                  const tmp5Result3 = tmp5(11640);
                  const isConjureChannelCandidate = tmp(7167).useIsConjureChannelCandidate(channel, "AppChannel");
                  id = channel.id;
                  guild_id = channel.guild_id;
                  if (cResult[12] === id) {
                    if (cResult[13] === guild_id) {
                      let tmp18 = cResult[14];
                    }
                    if (tmp(17665).FrameLifecycleState.Launched === state) {
                      if (cResult[15] === frame.id) {
                        if (cResult[16] === tmp7) {
                          let tmp39 = cResult[17];
                        }
                        if (cResult[18] === id) {
                          if (cResult[19] === tmp18) {
                            if (cResult[20] === isConjureChannelCandidate) {
                              let tmp43 = cResult[21];
                            }
                            if (cResult[22] === tmp6.container) {
                              if (cResult[23] === tmp39) {
                                if (cResult[24] === tmp43) {
                                  let tmp46 = cResult[25];
                                }
                                return tmp46;
                              }
                            }
                            const obj3 = { style: tmp6.container, children: null };
                            const items = [tmp39, tmp43];
                            obj3.children = items;
                            const tmp49 = closure_6(View, obj3);
                            cResult[22] = tmp6.container;
                            cResult[23] = tmp39;
                            cResult[24] = tmp43;
                            cResult[25] = tmp49;
                            tmp46 = tmp49;
                          }
                        }
                        let tmp44 = null;
                        if (isConjureChannelCandidate) {
                          const obj4 = { channelId: id, onOpenChat: tmp18 };
                          tmp44 = closure_5(tmp5(17668), obj4);
                        }
                        cResult[18] = id;
                        cResult[19] = tmp18;
                        cResult[20] = isConjureChannelCandidate;
                        cResult[21] = tmp44;
                        tmp43 = tmp44;
                      }
                      const obj5 = {
                        frameId: frame.id,
                        level: tmp(11646).FrameStackLevel.WithinAppContent,
                        presentation: tmp7,
                      };
                      const tmp42 = closure_5(tmp5(11641), obj5);
                      cResult[15] = frame.id;
                      cResult[16] = tmp7;
                      cResult[17] = tmp42;
                      tmp39 = tmp42;
                      const tmp5Result4 = tmp5(11641);
                    } else if (tmp(17665).FrameLifecycleState.RenderingElsewhere === state) {
                      const _Symbol5 = Symbol;
                      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj6 = { description: null };
                        const intl5 = tmp(1128).intl;
                        obj6.description = intl5.string(tmp(1128).t["2KIDX+"]);
                        const tmp38 = closure_5(tmp(17671).FrameSurfaceExplanation, obj6);
                        cResult[26] = tmp38;
                        let tmp36 = tmp38;
                      } else {
                        tmp36 = cResult[26];
                      }
                      return tmp36;
                    } else if (tmp(17665).FrameLifecycleState.NoApplication === state) {
                      const _Symbol4 = Symbol;
                      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj7 = { description: null };
                        const intl4 = tmp(1128).intl;
                        obj7.description = intl4.string(tmp(1128).t.izggZO);
                        const tmp34 = closure_5(tmp(17671).FrameSurfaceExplanation, obj7);
                        cResult[27] = tmp34;
                        let tmp32 = tmp34;
                      } else {
                        tmp32 = cResult[27];
                      }
                      return tmp32;
                    } else if (tmp(17665).FrameLifecycleState.DoesNotSupportSurface === state) {
                      const _Symbol3 = Symbol;
                      if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj8 = { description: null };
                        const intl3 = tmp(1128).intl;
                        obj8.description = intl3.string(tmp(1128).t["iUWcU/"]);
                        const tmp30 = closure_5(tmp(17671).FrameSurfaceExplanation, obj8);
                        cResult[28] = tmp30;
                        let tmp28 = tmp30;
                      } else {
                        tmp28 = cResult[28];
                      }
                      return tmp28;
                    } else if (tmp(17665).FrameLifecycleState.Error === state) {
                      const _Symbol2 = Symbol;
                      if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj9 = { heading: null, error: null };
                        const intl = tmp(1128).intl;
                        obj9.heading = intl.string(tmp(1128).t.VquUff);
                        const intl2 = tmp(1128).intl;
                        obj9.error = intl2.string(tmp(1128).t["Sd9D/R"]);
                        const tmp26 = closure_5(tmp(17671).FrameSurfaceExplanation, obj9);
                        cResult[29] = tmp26;
                        let tmp24 = tmp26;
                      } else {
                        tmp24 = cResult[29];
                      }
                      return tmp24;
                    } else {
                      const _Symbol = Symbol;
                      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp22 = closure_5(tmp(17671).FrameSurfaceLoading, {});
                        cResult[30] = tmp22;
                        let tmp20 = tmp22;
                      } else {
                        tmp20 = cResult[30];
                      }
                      return tmp20;
                    }
                  }
                  const fn = function w(id) {
                    AppChannelChat.openAppChannelChat(guild_id, id, id.id);
                  };
                  cResult[12] = id;
                  cResult[13] = guild_id;
                  cResult[14] = fn;
                  tmp18 = fn;
                  const tmpResult = tmp(7167);
                }
                const obj10 = { applicationId, surface: tmp9 };
                cResult[9] = applicationId;
                cResult[10] = tmp9;
                cResult[11] = obj10;
                tmp10 = obj10;
              }
              const obj11 = { type: tmp(7261).EmbeddedSurfaceType.APP_CHANNEL, channelId: null, guildId: null };
              ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
              cResult[6] = channel.guild_id;
              cResult[7] = channel.id;
              cResult[8] = obj11;
              tmp9 = obj11;
            }
          }
        }
      }
      const tmp8 = guild_id(11639)({ top, bottom, left, right }, undefined === headerVisible || headerVisible);
      cResult[0] = bottom;
      cResult[1] = undefined === headerVisible || headerVisible;
      cResult[2] = left;
      cResult[3] = right;
      cResult[4] = top;
      cResult[5] = tmp8;
      tmp7 = tmp8;
      const obj = id(576);
    }
  : function AppChannel(headerVisible) {
      ({ applicationId, channel } = headerVisible);
      let flag = headerVisible.headerVisible;
      if (flag === undefined) {
        flag = true;
      }
      let top;
      let id;
      let guild_id;
      const insets = flag(top[7])().insets;
      top = insets.top;
      const bottom = insets.bottom;
      const left = insets.left;
      const right = insets.right;
      const items = [top, bottom, left, right, flag];
      const items1 = [,];
      ({ id: arr2[0], guild_id: arr2[1] } = channel);
      const memo = bottom.useMemo(() => {
        const rect = { top, bottom, left, right };
        return getInlineFramePresentationDefault(rect, flag);
      }, items);
      const memo1 = bottom.useMemo(
        () => ({
          type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL,
          channelId: channel.id,
          guildId: channel.guild_id,
        }),
        items1,
      );
      const obj = bottom;
      const tmp3 = guild_id(flag(top[6])());
      ({ state, frame } = flag(top[10])({ applicationId, surface: memo1 }));
      const tmp6 = flag(top[10])({ applicationId, surface: memo1 });
      flag(top[11])(state === channel(top[10]).FrameLifecycleState.Launched);
      const tmp7 = flag(top[11]);
      let tmp11 = null;
      if (state === channel(top[10]).FrameLifecycleState.Launched) {
        tmp11 = applicationId;
      }
      flag(top[12])(tmp11);
      const tmp10 = flag(top[12]);
      id = channel.id;
      guild_id = channel.guild_id;
      const items2 = [guild_id, id];
      const isConjureChannelCandidate = channel(top[13]).useIsConjureChannelCandidate(channel, "AppChannel");
      const callback = obj.useCallback((id) => {
        AppChannelChat.openAppChannelChat(guild_id, id, id.id);
      }, items2);
      if (channel(top[10]).FrameLifecycleState.Launched === state) {
        const obj2 = { style: tmp3.container, children: null };
        const obj3 = { frameId: frame.id, level: tmp8(tmp2[16]).FrameStackLevel.WithinAppContent, presentation: memo };
        const items3 = [right(tmp(tmp2[15]), obj3)];
        let tmp22Result = null;
        if (isConjureChannelCandidate) {
          const obj4 = { channelId: id, onOpenChat: callback };
          tmp22Result = right(tmp(tmp2[17]), obj4);
        }
        items3[1] = tmp22Result;
        obj2.children = items3;
        return id(left, obj2);
      } else if (tmp8(tmp2[10]).FrameLifecycleState.RenderingElsewhere === state) {
        const obj5 = { description: null };
        const intl5 = tmp8(tmp2[19]).intl;
        obj5.description = intl5.string(tmp8(tmp2[19]).t["2KIDX+"]);
        return right(tmp8(tmp2[18]).FrameSurfaceExplanation, obj5);
      } else if (tmp8(tmp2[10]).FrameLifecycleState.NoApplication === state) {
        const obj6 = { description: null };
        const intl4 = tmp8(tmp2[19]).intl;
        obj6.description = intl4.string(tmp8(tmp2[19]).t.izggZO);
        return right(tmp8(tmp2[18]).FrameSurfaceExplanation, obj6);
      } else if (tmp8(tmp2[10]).FrameLifecycleState.DoesNotSupportSurface === state) {
        const obj7 = { description: null };
        const intl3 = tmp8(tmp2[19]).intl;
        obj7.description = intl3.string(tmp8(tmp2[19]).t["iUWcU/"]);
        return right(tmp8(tmp2[18]).FrameSurfaceExplanation, obj7);
      } else if (tmp8(tmp2[10]).FrameLifecycleState.Error === state) {
        const obj8 = { heading: null, error: null };
        const intl = tmp8(tmp2[19]).intl;
        obj8.heading = intl.string(tmp8(tmp2[19]).t.VquUff);
        const intl2 = tmp8(tmp2[19]).intl;
        obj8.error = intl2.string(tmp8(tmp2[19]).t["Sd9D/R"]);
        return right(tmp8(tmp2[18]).FrameSurfaceExplanation, obj8);
      } else {
        return right(tmp8(tmp2[18]).FrameSurfaceLoading, {});
      }
      const tmp8Result = channel(top[13]);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectedAppChannel(channel) {
      let stringResult = dependencyMap;
      const cResult = c.c(4);
      channel = channel.channel;
      let application_id = channel.application_id;
      if (application_id == null) {
        application_id = obj2.useDMAppChannelApplicationId(channel);
      }
      useChannelAppFrameTeardownDefault(channel);
      if (null == application_id) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { heading: null, description: null };
          const intl = util.intl;
          obj3.heading = intl.string(util.t.tU5fiM);
          const intl2 = util.intl;
          stringResult = intl2.string(util.t.E94mJf);
          obj3.description = stringResult;
          const tmp12 = hasOwnProperty(FrameSurfaceState.FrameSurfaceExplanation, obj3);
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
        const obj4 = { applicationId: application_id, channel };
        const tmp8 = hasOwnProperty(closure_8, obj4);
        cResult[1] = application_id;
        cResult[2] = channel;
        cResult[3] = tmp8;
        tmp5 = tmp8;
      }
      obj2 = conjureDMAppChannel;
    }
  : function ConnectedAppChannel(channel) {
      channel = channel.channel;
      let application_id = channel.application_id;
      if (application_id == null) {
        application_id = obj.useDMAppChannelApplicationId(channel);
      }
      useChannelAppFrameTeardownDefault(channel);
      if (null == application_id) {
        const obj2 = { heading: null, description: null };
        const intl = util.intl;
        obj2.heading = intl.string(util.t.tU5fiM);
        const intl2 = util.intl;
        obj2.description = intl2.string(util.t.E94mJf);
        let tmp6 = hasOwnProperty(FrameSurfaceState.FrameSurfaceExplanation, obj2);
      } else {
        const obj3 = { applicationId: application_id, channel };
        tmp6 = hasOwnProperty(closure_8, obj3);
      }
      return tmp6;
    };
