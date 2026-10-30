// === Module 19223: VoiceChannelAppSurface ===

// Module 19223 (VoiceChannelAppSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 12058 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppSurface.tsx");

export default function VoiceChannelAppSurface(guildId) {
  ({ applicationId, channelId } = guildId);
  guildId = guildId.guildId;
  let left;
  let rect = guildId(left[2])();
  left = rect.left;
  const right = rect.right;
  const items = [left, right];
  const items1 = [channelId, guildId];
  const memo = right.useMemo(() => {
    const rect = { top: 0, bottom: 0, left, right };
    return getInlineFramePresentationDefault(rect, true);
  }, items);
  const memo1 = right.useMemo(() => ({ type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId, guildId }), items1);
  const tmp5 = guildId(left[5])({ applicationId, surface: memo1 });
  guildId(left[6])(applicationId, memo1);
  let tmp9 = null;
  if (tmp5.state === channelId(left[5]).FrameLifecycleState.Launched) {
    tmp9 = applicationId;
  }
  guildId(left[7])(tmp9);
  const state = tmp5.state;
  if (channelId(left[5]).FrameLifecycleState.Launched === state) {
    const obj2 = { frameId: tmp5.frame.id, level: channelId(tmp2[9]).FrameStackLevel.WithinCallContent, presentation: memo };
    return jsx(tmp(tmp2[8]), { frameId: tmp5.frame.id, level: channelId(tmp2[9]).FrameStackLevel.WithinCallContent, presentation: memo });
  } else if (channelId(tmp2[5]).FrameLifecycleState.RenderingElsewhere === state) {
    const obj3 = { description: null };
    const intl5 = channelId(tmp2[11]).intl;
    obj3.description = intl5.string(channelId(tmp2[11]).t["2KIDX+"]);
    return jsx(channelId(tmp2[10]).FrameSurfaceExplanation, { description: null });
  } else if (channelId(tmp2[5]).FrameLifecycleState.NoApplication === state) {
    const obj4 = { description: null };
    const intl4 = channelId(tmp2[11]).intl;
    obj4.description = intl4.string(tmp(tmp2[12]).TQptZV);
    return jsx(channelId(tmp2[10]).FrameSurfaceExplanation, { description: null });
  } else if (channelId(tmp2[5]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const obj5 = { description: null };
    const intl3 = channelId(tmp2[11]).intl;
    obj5.description = intl3.string(tmp(tmp2[12])["13FYwI"]);
    return jsx(channelId(tmp2[10]).FrameSurfaceExplanation, { description: null });
  } else if (channelId(tmp2[5]).FrameLifecycleState.Error === state) {
    const obj = { heading: null, error: null };
    const intl = channelId(tmp2[11]).intl;
    obj.heading = intl.string(channelId(tmp2[11]).t.VquUff);
    const intl2 = channelId(tmp2[11]).intl;
    obj.error = intl2.string(channelId(tmp2[11]).t["Sd9D/R"]);
    return jsx(channelId(tmp2[10]).FrameSurfaceExplanation, { heading: null, error: null });
  } else {
    return jsx(channelId(tmp2[10]).FrameSurfaceLoading, {});
  }
  const tmp7 = guildId(left[7]);
};