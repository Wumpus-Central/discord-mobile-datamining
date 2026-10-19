// discord_app/modules/app_channels/native/AppChannel.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import useSystemKeyboardHeightDefault from "../../keyboard/native/useSystemKeyboardHeight.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import conjureDMAppChannel from "../../conjure/app_channel/conjureDMAppChannel.tsx";
import ApplicationActionCreators from "../../applications/ApplicationActionCreators.tsx";
import openChannelSecondaryViewChat from "openChannelSecondaryViewChat.tsx";
import useEdgeOnlySwipeExitDefault from "../../main_tabs_v2/native/panels/useEdgeOnlySwipeExit.tsx";
import getInlineFramePresentationDefault from "../../frames/native/getInlineFramePresentation.tsx";
import useInlineFrameOAuthNavigationDefault from "../../frames/native/useInlineFrameOAuthNavigation.tsx";
import FrameRenderTargetDefault from "../../frames/native/FrameRenderTarget.tsx";
import useFrameLifecycleDefault from "../../frames/useFrameLifecycle.tsx";
import FrameSurfaceState from "../../frames/native/FrameSurfaceState.tsx";
import useAppChannelClosedDefault from "../useAppChannelClosed.tsx";
import useChannelAppFrameTeardownDefault from "../../frames/useChannelAppFrameTeardown.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const useChannelContentGate = obj(10685);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let createStyles = fn(4945);
let obj2 = { icon: null };
let size = { width: 64, height: 64, borderRadius: nativeDefault.radii.lg };
obj2.icon = size;
let closure_7 = createStyles.createStyles(obj2);
createStyles = fn(4945);
let closure_8 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { flex: 1, paddingBottom } };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OpenAppChannel(arg0) {
      const cResult = id(576).c(27);
      ({ applicationId, channel, surface, headerVisible } = arg0);
      closure_8(useSystemKeyboardHeightDefault());
      ({ top, bottom, left, right } = useSafeAreaInsetsKeyboardAwareDefault().insets);
      if (cResult[0] === bottom) {
        if (cResult[1] === tmp4) {
          if (cResult[2] === left) {
            if (cResult[3] === right) {
              if (cResult[4] === top) {
                let tmp7 = cResult[5];
              }
              if (cResult[6] === applicationId) {
                if (cResult[7] === surface) {
                  let tmp9 = cResult[8];
                }
                ({ frame, state } = useFrameLifecycleDefault(tmp9));
                const tmp10 = useFrameLifecycleDefault(tmp9);
                useEdgeOnlySwipeExitDefault(state === tmp(17771).FrameLifecycleState.Launched);
                const tmp5Result = useEdgeOnlySwipeExitDefault;
                let tmp14 = null;
                if (state === tmp(17771).FrameLifecycleState.Launched) {
                  tmp14 = applicationId;
                }
                useInlineFrameOAuthNavigationDefault(tmp14);
                const tmp5Result3 = useInlineFrameOAuthNavigationDefault;
                const isConjureChannelCandidate = tmp(7291).useIsConjureChannelCandidate(channel, "AppChannel");
                id = channel.id;
                if (cResult[9] !== id) {
                  class M {
                    constructor(arg0) {
                      obj = closure_0(closure_2[14]);
                      transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                      return;
                    }
                  }
                  cResult[9] = id;
                  cResult[10] = M;
                } else {
                  class M {
                    constructor(arg0) {
                      obj = closure_0(closure_2[14]);
                      transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                      return;
                    }
                  }
                }
                if (tmp(17771).FrameLifecycleState.Launched === state) {
                  class M {
                    constructor(arg0) {
                      obj = closure_0(closure_2[14]);
                      transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                      return;
                    }
                  }
                  const obj2 = {
                    frameId: frame.id,
                    level: tmp(11744).FrameStackLevel.WithinAppContent,
                    presentation: tmp7,
                  };
                  const tmp21 = closure_5(FrameRenderTargetDefault, obj2);
                  cResult[11] = frame.id;
                  cResult[12] = tmp7;
                  cResult[13] = tmp21;
                  const tmp5Result4 = FrameRenderTargetDefault;
                } else {
                  class M {
                    constructor(arg0) {
                      obj = closure_0(closure_2[14]);
                      transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                      return;
                    }
                  }
                }
                const tmpResult = tmp(7291);
              }
              const obj3 = { applicationId, surface };
              cResult[6] = applicationId;
              cResult[7] = surface;
              cResult[8] = obj3;
              tmp9 = obj3;
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
  : function OpenAppChannel(surface) {
      ({ applicationId, channel, headerVisible } = surface);
      if (headerVisible === undefined) {
        headerVisible = true;
      }
      let top;
      let bottom;
      let id;
      const insets = top(bottom[8])().insets;
      top = insets.top;
      bottom = insets.bottom;
      const left = insets.left;
      const right = insets.right;
      const items = [top, bottom, left, right, headerVisible];
      const memo = left.useMemo(() => {
        const rect = { top, bottom, left, right };
        return getInlineFramePresentationDefault(rect, headerVisible);
      }, items);
      const obj = left;
      const tmp3 = closure_8(top(bottom[7])());
      ({ state, frame } = top(bottom[10])({ applicationId, surface: surface.surface }));
      const tmp5 = top(bottom[10])({ applicationId, surface: surface.surface });
      top(bottom[11])(state === headerVisible(bottom[10]).FrameLifecycleState.Launched);
      const tmp6 = top(bottom[11]);
      let tmp10 = null;
      if (state === headerVisible(bottom[10]).FrameLifecycleState.Launched) {
        tmp10 = applicationId;
      }
      top(bottom[12])(tmp10);
      const tmp9 = top(bottom[12]);
      id = channel.id;
      const items1 = [id];
      const isConjureChannelCandidate = headerVisible(bottom[13]).useIsConjureChannelCandidate(channel, "AppChannel");
      const callback = obj.useCallback((id) => {
        transitionToChannel.transitionToMessage(id, id.id);
      }, items1);
      if (headerVisible(bottom[10]).FrameLifecycleState.Launched === state) {
        const obj2 = { style: tmp3.container, children: null };
        const obj3 = { frameId: frame.id, level: tmp7(tmp2[16]).FrameStackLevel.WithinAppContent, presentation: memo };
        const items2 = [id(tmp(tmp2[15]), obj3)];
        let tmp21Result = null;
        if (isConjureChannelCandidate) {
          const obj4 = { channelId: id, onOpenChat: callback };
          tmp21Result = id(tmp(tmp2[17]), obj4);
        }
        items2[1] = tmp21Result;
        obj2.children = items2;
        return closure_6(right, obj2);
      } else if (tmp7(tmp2[10]).FrameLifecycleState.RenderingElsewhere === state) {
        const obj5 = { description: null };
        const intl5 = tmp7(tmp2[19]).intl;
        obj5.description = intl5.string(tmp7(tmp2[19]).t["2KIDX+"]);
        return id(tmp7(tmp2[18]).FrameSurfaceExplanation, obj5);
      } else if (tmp7(tmp2[10]).FrameLifecycleState.NoApplication === state) {
        const obj6 = { description: null };
        const intl4 = tmp7(tmp2[19]).intl;
        obj6.description = intl4.string(tmp7(tmp2[19]).t.izggZO);
        return id(tmp7(tmp2[18]).FrameSurfaceExplanation, obj6);
      } else if (tmp7(tmp2[10]).FrameLifecycleState.DoesNotSupportSurface === state) {
        const obj7 = { description: null };
        const intl3 = tmp7(tmp2[19]).intl;
        obj7.description = intl3.string(tmp7(tmp2[19]).t["iUWcU/"]);
        return id(tmp7(tmp2[18]).FrameSurfaceExplanation, obj7);
      } else if (tmp7(tmp2[10]).FrameLifecycleState.Error === state) {
        const obj8 = { heading: null, error: null };
        const intl = tmp7(tmp2[19]).intl;
        obj8.heading = intl.string(tmp7(tmp2[19]).t.VquUff);
        const intl2 = tmp7(tmp2[19]).intl;
        obj8.error = intl2.string(tmp7(tmp2[19]).t["Sd9D/R"]);
        return id(tmp7(tmp2[18]).FrameSurfaceExplanation, obj8);
      } else {
        return id(tmp7(tmp2[18]).FrameSurfaceLoading, {});
      }
      const tmp7Result = headerVisible(bottom[13]);
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ClosedAppChannel(onLaunch) {
      const cResult = c.c(10);
      onLaunch = onLaunch.onLaunch;
      const tmp4 = closure_7();
      const data = ApplicationActionCreators.useApplication(onLaunch.applicationId).data;
      if (cResult[0] === data) {
        if (cResult[1] === tmp4) {
          let tmp5 = cResult[2];
        }
        let name;
        if (data != null) {
          name = data.name;
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.PPYvuv);
          cResult[3] = stringResult;
          let tmp14 = stringResult;
        } else {
          tmp14 = cResult[3];
        }
        if (cResult[4] !== onLaunch) {
          const obj3 = { text: tmp14, onPress: onLaunch };
          const tmp18 = hasOwnProperty(components_Button_Button.Button, obj3);
          cResult[4] = onLaunch;
          cResult[5] = tmp18;
          let tmp16 = tmp18;
        } else {
          tmp16 = cResult[5];
        }
        if (cResult[6] === tmp5) {
          if (cResult[7] === name) {
            if (cResult[8] === tmp16) {
              let tmp19 = cResult[9];
            }
            return tmp19;
          }
        }
        const obj6 = { icon: tmp5, heading: name, action: tmp16 };
        const tmp21 = hasOwnProperty(FrameSurfaceState.FrameSurfaceExplanation, obj6);
        cResult[6] = tmp5;
        cResult[7] = name;
        cResult[8] = tmp16;
        cResult[9] = tmp21;
        tmp19 = tmp21;
      }
      let icon;
      if (data != null) {
        icon = data.icon;
      }
      let tmp7 = null;
      if (null != icon) {
        const obj7 = { source: null, style: null };
        const tmp10 = FastImageDefault;
        ({ id: obj5.id, icon: obj5.icon } = data);
        obj7.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null, size: 64 });
        obj7.style = tmp4.icon;
        tmp7 = hasOwnProperty(tmp10, obj7);
        const obj11 = { id: null, icon: null, size: 64 };
      }
      cResult[0] = data;
      cResult[1] = tmp4;
      cResult[2] = tmp7;
      tmp5 = tmp7;
    }
  : function ClosedAppChannel(arg0) {
      ({ applicationId, onLaunch } = arg0);
      const tmp = closure_7();
      const data = ApplicationActionCreators.useApplication(applicationId).data;
      let icon;
      if (data != null) {
        icon = data.icon;
      }
      let tmp4Result = null;
      if (null != icon) {
        const obj2 = { source: null, style: null };
        const tmp8 = FastImageDefault;
        ({ id: obj4.id, icon: obj4.icon } = data);
        obj2.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null, size: 64 });
        obj2.style = tmp.icon;
        tmp4Result = hasOwnProperty(tmp8, obj2);
        const obj5 = { id: null, icon: null, size: 64 };
      }
      const obj6 = { icon: tmp4Result, heading: null, action: null };
      let name;
      if (data != null) {
        name = data.name;
      }
      obj6.heading = name;
      const obj10 = { text: null, onPress: null };
      const intl = util.intl;
      obj10.text = intl.string(util.t.PPYvuv);
      obj10.onPress = onLaunch;
      obj6.action = hasOwnProperty(components_Button_Button.Button, obj10);
      return hasOwnProperty(FrameSurfaceState.FrameSurfaceExplanation, obj6);
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AppChannel(arg0) {
      const cResult = channel(576).c(15);
      ({ applicationId, channel } = arg0);
      if (cResult[0] === channel.guild_id) {
        if (cResult[1] === channel.id) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] !== channel.id) {
          const fn = function p() {
            return -1 !== openChannelSecondaryViewChat.getChannelSecondaryViewChatIndex(channel.id);
          };
          cResult[3] = channel.id;
          cResult[4] = fn;
          let tmp5 = fn;
        } else {
          tmp5 = cResult[4];
        }
        if (cResult[5] === applicationId) {
          if (cResult[6] === tmp4) {
            if (cResult[7] === tmp5) {
              let tmp6 = cResult[8];
            }
            const tmp8 = useAppChannelClosedDefault(tmp6);
            const launch = tmp8.launch;
            if (tmp8.isClosed) {
              if (cResult[9] === applicationId) {
              }
              const obj2 = { applicationId, onLaunch: launch };
              const tmp19 = closure_5(closure_10, obj2);
              cResult[9] = applicationId;
              cResult[10] = launch;
              cResult[11] = tmp19;
            } else {
              if (cResult[12] === arg0) {
                if (cResult[13] === tmp4) {
                  let tmp9 = cResult[14];
                }
                return tmp9;
              }
              const obj3 = {};
              const merged = Object.assign(arg0);
              obj3.surface = tmp4;
              const tmp15 = closure_5(closure_9, obj3);
              cResult[12] = arg0;
              cResult[13] = tmp4;
              cResult[14] = tmp15;
              tmp9 = tmp15;
            }
          }
        }
        const obj4 = { applicationId, surface: tmp4, shouldStartClosed: tmp5 };
        cResult[5] = applicationId;
        cResult[6] = tmp4;
        cResult[7] = tmp5;
        cResult[8] = obj4;
        tmp6 = obj4;
      }
      const obj5 = {
        type: channel(5587).EmbeddedSurfaceType.APP_CHANNEL,
        channelId: channel.id,
        guildId: channel.guild_id,
      };
      cResult[0] = channel.guild_id;
      cResult[1] = channel.id;
      cResult[2] = obj5;
      tmp4 = obj5;
      const obj = channel(576);
    }
  : function AppChannel(arg0) {
      ({ applicationId, channel } = arg0);
      const items = [,];
      ({ id: arr[0], guild_id: arr[1] } = channel);
      const memo = noop.useMemo(
        () => ({
          type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL,
          channelId: channel.id,
          guildId: channel.guild_id,
        }),
        items,
      );
      if (tmp2.isClosed) {
        const obj2 = { applicationId, onLaunch: tmp3 };
        let tmp4Result = closure_5(closure_10, obj2);
      } else {
        const obj3 = {};
        const merged = Object.assign(arg0);
        obj3.surface = memo;
        tmp4Result = closure_5(closure_9, obj3);
      }
      return tmp4Result;
    };
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/app_channels/native/AppChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectedAppChannel(channel) {
      let obj = require;
      let result = dependencyMap;
      const cResult = c.c(6);
      channel = channel.channel;
      let application_id = channel.application_id;
      if (application_id == null) {
        application_id = obj3.useDMAppChannelApplicationId(channel);
      }
      useChannelAppFrameTeardownDefault(channel);
      obj3 = conjureDMAppChannel;
      const channelContentGate = useChannelContentGate.useChannelContentGate(channel.guild_id, channel);
      if (null != channelContentGate) {
        if (cResult[0] !== channelContentGate) {
          obj = useChannelContentGate;
          result = obj.renderChannelContentGate(channelContentGate);
          cResult[0] = channelContentGate;
          cResult[1] = result;
        }
      } else if (null == application_id) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { heading: null, description: null };
          const intl = util.intl;
          obj4.heading = intl.string(util.t.tU5fiM);
          const intl2 = util.intl;
          obj4.description = intl2.string(util.t.E94mJf);
          const tmp12 = hasOwnProperty(FrameSurfaceState.FrameSurfaceExplanation, obj4);
          cResult[2] = tmp12;
        }
      } else {
        if (cResult[3] === application_id) {
          if (cResult[4] === channel) {
            let tmp5 = cResult[5];
          }
          return tmp5;
        }
        const obj5 = { applicationId: application_id, channel };
        const tmp8 = hasOwnProperty(closure_11, obj5);
        cResult[3] = application_id;
        cResult[4] = channel;
        cResult[5] = tmp8;
        tmp5 = tmp8;
      }
      const objResult = useChannelContentGate;
    }
  : function ConnectedAppChannel(channel) {
      channel = channel.channel;
      let application_id = channel.application_id;
      if (application_id == null) {
        application_id = obj.useDMAppChannelApplicationId(channel);
      }
      useChannelAppFrameTeardownDefault(channel);
      obj = conjureDMAppChannel;
      const channelContentGate = useChannelContentGate.useChannelContentGate(channel.guild_id, channel);
      if (null != channelContentGate) {
        let result = useChannelContentGate.renderChannelContentGate(channelContentGate);
        const tmpResult2 = useChannelContentGate;
      } else if (null == application_id) {
        const obj2 = { heading: null, description: null };
        const intl = util.intl;
        obj2.heading = intl.string(util.t.tU5fiM);
        const intl2 = util.intl;
        obj2.description = intl2.string(util.t.E94mJf);
        result = hasOwnProperty(FrameSurfaceState.FrameSurfaceExplanation, obj2);
      } else {
        const obj3 = { applicationId: application_id, channel };
        result = hasOwnProperty(closure_11, obj3);
      }
      return result;
    };
