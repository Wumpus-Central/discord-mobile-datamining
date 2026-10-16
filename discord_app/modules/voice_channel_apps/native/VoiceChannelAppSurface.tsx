// === Module 18217: VoiceChannelAppSurface ===

// Module 18217 (VoiceChannelAppSurface)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import _modDef3963 from "module_3963" /* 3963 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7261 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 11639 */;
import useInlineFrameOAuthNavigationDefault from "useInlineFrameOAuthNavigation" /* 11640 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 11641 */;
import FrameStackLevel from "FrameStackLevel" /* 11646 */;
import useFrameLifecycle from "useFrameLifecycle" /* 17665 */;
import FrameSurfaceState from "FrameSurfaceState" /* 17671 */;
import noop from "module_19" /* 19 */;

const useFrameLifecycleDefault = useFrameLifecycle;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppSurface.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChannelAppSurface(arg0) {
  const cResult = c.c(17);
  ({ applicationId, channelId, guildId } = arg0);
  ({ left, right } = useSafeAreaInsetsDefault());
  if (cResult[0] === left) {
    if (cResult[1] === right) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === channelId) {
      if (cResult[4] === guildId) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === applicationId) {
        if (cResult[7] === tmp8) {
          let tmp9 = cResult[8];
        }
        const tmp10 = useFrameLifecycleDefault(tmp9);
        let tmp12 = null;
        if (tmp10.state === useFrameLifecycle.FrameLifecycleState.Launched) {
          tmp12 = applicationId;
        }
        useInlineFrameOAuthNavigationDefault(tmp12);
        const state = tmp10.state;
        if (useFrameLifecycle.FrameLifecycleState.Launched === state) {
          if (cResult[9] === tmp10.frame.id) {
            if (cResult[10] === tmp6) {
              let tmp34 = cResult[11];
            }
            return tmp34;
          }
          const obj2 = { frameId: tmp10.frame.id, level: FrameStackLevel.FrameStackLevel.WithinCallContent, presentation: tmp6 };
          const tmp37 = jsx(FrameRenderTargetDefault, { frameId: tmp10.frame.id, level: FrameStackLevel.FrameStackLevel.WithinCallContent, presentation: tmp6 });
          cResult[9] = tmp10.frame.id;
          cResult[10] = tmp6;
          cResult[11] = tmp37;
          tmp34 = tmp37;
          const tmp4Result2 = FrameRenderTargetDefault;
        } else if (useFrameLifecycle.FrameLifecycleState.RenderingElsewhere === state) {
          const _Symbol5 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { description: null };
            const intl5 = util.intl;
            obj3.description = intl5.string(util.t["2KIDX+"]);
            const tmp33 = jsx(FrameSurfaceState.FrameSurfaceExplanation, { description: null });
            cResult[12] = tmp33;
            let tmp31 = tmp33;
          } else {
            tmp31 = cResult[12];
          }
          return tmp31;
        } else if (useFrameLifecycle.FrameLifecycleState.NoApplication === state) {
          const _Symbol4 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { description: null };
            const intl4 = util.intl;
            obj4.description = intl4.string(_modDef3963.TQptZV);
            const tmp29 = jsx(FrameSurfaceState.FrameSurfaceExplanation, { description: null });
            cResult[13] = tmp29;
            let tmp27 = tmp29;
          } else {
            tmp27 = cResult[13];
          }
          return tmp27;
        } else if (useFrameLifecycle.FrameLifecycleState.DoesNotSupportSurface === state) {
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { description: null };
            const intl3 = util.intl;
            obj5.description = intl3.string(_modDef3963["13FYwI"]);
            const tmp25 = jsx(FrameSurfaceState.FrameSurfaceExplanation, { description: null });
            cResult[14] = tmp25;
            let tmp23 = tmp25;
          } else {
            tmp23 = cResult[14];
          }
          return tmp23;
        } else if (useFrameLifecycle.FrameLifecycleState.Error === state) {
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { heading: null, error: null };
            const intl = util.intl;
            obj6.heading = intl.string(util.t.VquUff);
            const intl2 = util.intl;
            obj6.error = intl2.string(util.t["Sd9D/R"]);
            const tmp21 = jsx(FrameSurfaceState.FrameSurfaceExplanation, { heading: null, error: null });
            cResult[15] = tmp21;
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[15];
          }
          return tmp19;
        } else {
          const _Symbol = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp17 = jsx(FrameSurfaceState.FrameSurfaceLoading, {});
            cResult[16] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[16];
          }
          return tmp15;
        }
        const tmp4Result = useInlineFrameOAuthNavigationDefault;
      }
      const obj7 = { applicationId, surface: tmp8 };
      cResult[6] = applicationId;
      cResult[7] = tmp8;
      cResult[8] = obj7;
      tmp9 = obj7;
    }
    const obj8 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId, guildId };
    cResult[3] = channelId;
    cResult[4] = guildId;
    cResult[5] = obj8;
    tmp8 = obj8;
  }
  const tmp7 = getInlineFramePresentationDefault({ top: 0, bottom: 0, left, right }, true);
  cResult[0] = left;
  cResult[1] = right;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  const tmp5 = useSafeAreaInsetsDefault();
}) : (function VoiceChannelAppSurface(guildId) {
  ({ applicationId, channelId } = guildId);
  guildId = guildId.guildId;
  let left;
  let rect = guildId(left[4])();
  left = rect.left;
  const right = rect.right;
  const items = [left, right];
  const items1 = [channelId, guildId];
  const memo = right.useMemo(() => {
    const rect = { top: 0, bottom: 0, left, right };
    return getInlineFramePresentationDefault(rect, true);
  }, items);
  const memo1 = right.useMemo(() => ({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId, guildId }), items1);
  const tmp5 = guildId(left[7])({ applicationId, surface: memo1 });
  let tmp8 = null;
  if (tmp5.state === channelId(left[7]).FrameLifecycleState.Launched) {
    tmp8 = applicationId;
  }
  guildId(left[8])(tmp8);
  const state = tmp5.state;
  if (channelId(left[7]).FrameLifecycleState.Launched === state) {
    const obj2 = { frameId: tmp5.frame.id, level: channelId(tmp2[10]).FrameStackLevel.WithinCallContent, presentation: memo };
    return jsx(tmp(tmp2[9]), { frameId: tmp5.frame.id, level: channelId(tmp2[10]).FrameStackLevel.WithinCallContent, presentation: memo });
  } else if (channelId(tmp2[7]).FrameLifecycleState.RenderingElsewhere === state) {
    const obj3 = { description: null };
    const intl5 = channelId(tmp2[12]).intl;
    obj3.description = intl5.string(channelId(tmp2[12]).t["2KIDX+"]);
    return jsx(channelId(tmp2[11]).FrameSurfaceExplanation, { description: null });
  } else if (channelId(tmp2[7]).FrameLifecycleState.NoApplication === state) {
    const obj4 = { description: null };
    const intl4 = channelId(tmp2[12]).intl;
    obj4.description = intl4.string(tmp(tmp2[13]).TQptZV);
    return jsx(channelId(tmp2[11]).FrameSurfaceExplanation, { description: null });
  } else if (channelId(tmp2[7]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const obj5 = { description: null };
    const intl3 = channelId(tmp2[12]).intl;
    obj5.description = intl3.string(tmp(tmp2[13])["13FYwI"]);
    return jsx(channelId(tmp2[11]).FrameSurfaceExplanation, { description: null });
  } else if (channelId(tmp2[7]).FrameLifecycleState.Error === state) {
    const obj = { heading: null, error: null };
    const intl = channelId(tmp2[12]).intl;
    obj.heading = intl.string(channelId(tmp2[12]).t.VquUff);
    const intl2 = channelId(tmp2[12]).intl;
    obj.error = intl2.string(channelId(tmp2[12]).t["Sd9D/R"]);
    return jsx(channelId(tmp2[11]).FrameSurfaceExplanation, { heading: null, error: null });
  } else {
    return jsx(channelId(tmp2[11]).FrameSurfaceLoading, {});
  }
  const tmp6 = guildId(left[8]);
});