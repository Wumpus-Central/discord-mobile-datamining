// discord_app/modules/app_channels/native/AppChannel.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import useSystemKeyboardHeightDefault from "../../keyboard/native/useSystemKeyboardHeight.native.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import conjureDMAppChannel from "../../conjure/app_channel/conjureDMAppChannel.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import useDisallowSwipeExitDefault from "../../main_tabs_v2/native/panels/useDisallowSwipeExit.tsx";
import getInlineFramePresentationDefault from "../../frames/native/getInlineFramePresentation.tsx";
import useInlineFrameOAuthNavigationDefault from "../../frames/native/useInlineFrameOAuthNavigation.tsx";
import FrameRenderTargetDefault from "../../frames/native/FrameRenderTarget.tsx";
import useFrameLifecycleDefault from "../../frames/useFrameLifecycle.tsx";
import FrameSurfaceState from "../../frames/native/FrameSurfaceState.tsx";
import useChannelAppFrameTeardownDefault from "../../frames/useChannelAppFrameTeardown.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5154);
let closure_7 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { flex: 1, paddingBottom } };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AppChannel(arg0) {
      const cResult = id(576).c(30);
      ({ applicationId, channel, headerVisible } = arg0);
      closure_7(useSystemKeyboardHeightDefault());
      ({ top, bottom, left, right } = useSafeAreaInsetsKeyboardAwareDefault().insets);
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
                  ({ frame, state } = useFrameLifecycleDefault(tmp10));
                  const tmp11 = useFrameLifecycleDefault(tmp10);
                  useDisallowSwipeExitDefault(state === tmp(17675).FrameLifecycleState.Launched);
                  const tmp5Result = useDisallowSwipeExitDefault;
                  let tmp15 = null;
                  if (state === tmp(17675).FrameLifecycleState.Launched) {
                    tmp15 = applicationId;
                  }
                  useInlineFrameOAuthNavigationDefault(tmp15);
                  const tmp5Result3 = useInlineFrameOAuthNavigationDefault;
                  const isConjureChannelCandidate = tmp(7169).useIsConjureChannelCandidate(channel, "AppChannel");
                  id = channel.id;
                  if (cResult[12] !== id) {
                    class U {
                      constructor(arg0) {
                        obj = closure_0(closure_2[14]);
                        transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                        return;
                      }
                    }
                    cResult[12] = id;
                    cResult[13] = U;
                  } else {
                    class U {
                      constructor(arg0) {
                        obj = closure_0(closure_2[14]);
                        transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                        return;
                      }
                    }
                  }
                  if (tmp(17675).FrameLifecycleState.Launched === state) {
                    class U {
                      constructor(arg0) {
                        obj = closure_0(closure_2[14]);
                        transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                        return;
                      }
                    }
                    const obj3 = {
                      frameId: frame.id,
                      level: tmp(11643).FrameStackLevel.WithinAppContent,
                      presentation: tmp7,
                    };
                    const tmp22 = closure_5(FrameRenderTargetDefault, obj3);
                    cResult[14] = frame.id;
                    cResult[15] = tmp7;
                    cResult[16] = tmp22;
                    const tmp5Result4 = FrameRenderTargetDefault;
                  } else {
                    class U {
                      constructor(arg0) {
                        obj = closure_0(closure_2[14]);
                        transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                        return;
                      }
                    }
                  }
                  const tmpResult = tmp(7169);
                }
                const obj4 = { applicationId, surface: tmp9 };
                cResult[9] = applicationId;
                cResult[10] = tmp9;
                cResult[11] = obj4;
                tmp10 = obj4;
              }
              const obj5 = { type: tmp(7263).EmbeddedSurfaceType.APP_CHANNEL, channelId: null, guildId: null };
              ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
              cResult[6] = channel.guild_id;
              cResult[7] = channel.id;
              cResult[8] = obj5;
              tmp9 = obj5;
            }
          }
        }
      }
      const tmp8 = getInlineFramePresentationDefault(
        { top, bottom, left, right },
        undefined === headerVisible || headerVisible,
      );
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
      const tmp3 = closure_7(flag(top[6])());
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
      const items2 = [id];
      const isConjureChannelCandidate = channel(top[13]).useIsConjureChannelCandidate(channel, "AppChannel");
      const callback = obj.useCallback((id) => {
        transitionToChannel.transitionToMessage(id, id.id);
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
