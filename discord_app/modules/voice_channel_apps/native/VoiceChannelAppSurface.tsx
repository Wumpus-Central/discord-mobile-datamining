// === Module 18593: VoiceChannelAppSurface ===

// Module 18593 (VoiceChannelAppSurface)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import _modDef3928 from "module_3928" /* 3928 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5626 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 11886 */;
import useInlineFrameOAuthNavigationDefault from "useInlineFrameOAuthNavigation" /* 11887 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 11888 */;
import FrameStackLevel from "FrameStackLevel" /* 11892 */;
import useFrameLifecycle from "useFrameLifecycle" /* 18044 */;
import conjureBackgroundFramesDefault from "conjureBackgroundFrames" /* 18047 */;
import FrameSurfaceState from "FrameSurfaceState" /* 18054 */;
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
        conjureBackgroundFramesDefault(applicationId, tmp8);
        let tmp13 = null;
        if (tmp10.state === useFrameLifecycle.FrameLifecycleState.Launched) {
          tmp13 = applicationId;
        }
        useInlineFrameOAuthNavigationDefault(tmp13);
        const state = tmp10.state;
        if (useFrameLifecycle.FrameLifecycleState.Launched === state) {
          if (cResult[9] === tmp10.frame.id) {
            if (cResult[10] === tmp6) {
              let tmp35 = cResult[11];
            }
            return tmp35;
          }
          const obj2 = { frameId: tmp10.frame.id, level: FrameStackLevel.FrameStackLevel.WithinCallContent, presentation: tmp6 };
          const tmp38 = jsx(FrameRenderTargetDefault, { frameId: tmp10.frame.id, level: FrameStackLevel.FrameStackLevel.WithinCallContent, presentation: tmp6 });
          cResult[9] = tmp10.frame.id;
          cResult[10] = tmp6;
          cResult[11] = tmp38;
          tmp35 = tmp38;
          const tmp4Result2 = FrameRenderTargetDefault;
        } else if (useFrameLifecycle.FrameLifecycleState.RenderingElsewhere === state) {
          const _Symbol5 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { description: null };
            const intl5 = util.intl;
            obj3.description = intl5.string(util.t["2KIDX+"]);
            const tmp34 = jsx(FrameSurfaceState.FrameSurfaceExplanation, { description: null });
            cResult[12] = tmp34;
            let tmp32 = tmp34;
          } else {
            tmp32 = cResult[12];
          }
          return tmp32;
        } else if (useFrameLifecycle.FrameLifecycleState.NoApplication === state) {
          const _Symbol4 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { description: null };
            const intl4 = util.intl;
            obj4.description = intl4.string(_modDef3928.TQptZV);
            const tmp30 = jsx(FrameSurfaceState.FrameSurfaceExplanation, { description: null });
            cResult[13] = tmp30;
            let tmp28 = tmp30;
          } else {
            tmp28 = cResult[13];
          }
          return tmp28;
        } else if (useFrameLifecycle.FrameLifecycleState.DoesNotSupportSurface === state) {
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { description: null };
            const intl3 = util.intl;
            obj5.description = intl3.string(_modDef3928["13FYwI"]);
            const tmp26 = jsx(FrameSurfaceState.FrameSurfaceExplanation, { description: null });
            cResult[14] = tmp26;
            let tmp24 = tmp26;
          } else {
            tmp24 = cResult[14];
          }
          return tmp24;
        } else if (useFrameLifecycle.FrameLifecycleState.Error === state) {
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { heading: null, error: null };
            const intl = util.intl;
            obj6.heading = intl.string(util.t.VquUff);
            const intl2 = util.intl;
            obj6.error = intl2.string(util.t["Sd9D/R"]);
            const tmp22 = jsx(FrameSurfaceState.FrameSurfaceExplanation, { heading: null, error: null });
            cResult[15] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[15];
          }
          return tmp20;
        } else {
          const _Symbol = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp18 = jsx(FrameSurfaceState.FrameSurfaceLoading, {});
            cResult[16] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[16];
          }
          return tmp16;
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
  guildId(left[8])(applicationId, memo1);
  let tmp9 = null;
  if (tmp5.state === channelId(left[7]).FrameLifecycleState.Launched) {
    tmp9 = applicationId;
  }
  guildId(left[9])(tmp9);
  const state = tmp5.state;
  if (channelId(left[7]).FrameLifecycleState.Launched === state) {
    const obj2 = { frameId: tmp5.frame.id, level: channelId(tmp2[11]).FrameStackLevel.WithinCallContent, presentation: memo };
    return jsx(tmp(tmp2[10]), { frameId: tmp5.frame.id, level: channelId(tmp2[11]).FrameStackLevel.WithinCallContent, presentation: memo });
  } else if (channelId(tmp2[7]).FrameLifecycleState.RenderingElsewhere === state) {
    const obj3 = { description: null };
    const intl5 = channelId(tmp2[13]).intl;
    obj3.description = intl5.string(channelId(tmp2[13]).t["2KIDX+"]);
    return jsx(channelId(tmp2[12]).FrameSurfaceExplanation, { description: null });
  } else if (channelId(tmp2[7]).FrameLifecycleState.NoApplication === state) {
    const obj4 = { description: null };
    const intl4 = channelId(tmp2[13]).intl;
    obj4.description = intl4.string(tmp(tmp2[14]).TQptZV);
    return jsx(channelId(tmp2[12]).FrameSurfaceExplanation, { description: null });
  } else if (channelId(tmp2[7]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const obj5 = { description: null };
    const intl3 = channelId(tmp2[13]).intl;
    obj5.description = intl3.string(tmp(tmp2[14])["13FYwI"]);
    return jsx(channelId(tmp2[12]).FrameSurfaceExplanation, { description: null });
  } else if (channelId(tmp2[7]).FrameLifecycleState.Error === state) {
    const obj = { heading: null, error: null };
    const intl = channelId(tmp2[13]).intl;
    obj.heading = intl.string(channelId(tmp2[13]).t.VquUff);
    const intl2 = channelId(tmp2[13]).intl;
    obj.error = intl2.string(channelId(tmp2[13]).t["Sd9D/R"]);
    return jsx(channelId(tmp2[12]).FrameSurfaceExplanation, { heading: null, error: null });
  } else {
    return jsx(channelId(tmp2[12]).FrameSurfaceLoading, {});
  }
  const tmp7 = guildId(left[9]);
});