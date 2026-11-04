// === Module 19558: VoiceChannelAppSurface ===

// Module 19558 (VoiceChannelAppSurface)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5809 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 12442 */;
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
  items = [left, right];
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
  state = tmp5.state;
  if (channelId(left[5]).FrameLifecycleState.Launched === state) {
    const obj2 = { frameId: tmp5.frame.id, children: null };
    const obj3 = { frameId: tmp5.frame.id, level: null, presentation: null };
    const tmpResult = tmp(tmp2[8]);
    obj3.level = channelId(tmp2[10]).FrameStackLevel.WithinCallContent;
    obj3.presentation = memo;
    obj2.children = jsx(tmp(tmp2[9]), { frameId: tmp5.frame.id, level: null, presentation: null });
    return <tmpResult frameId={tmp5.frame.id}>{null}</tmpResult>;
  } else if (channelId(tmp2[5]).FrameLifecycleState.RenderingElsewhere === state) {
    const obj4 = { description: null };
    const intl5 = channelId(tmp2[12]).intl;
    obj4.description = intl5.string(channelId(tmp2[12]).t["2KIDX+"]);
    return jsx(channelId(tmp2[11]).FrameSurfaceExplanation, { description: null });
  } else if (channelId(tmp2[5]).FrameLifecycleState.NoApplication === state) {
    const obj5 = { description: null };
    const intl4 = channelId(tmp2[12]).intl;
    obj5.description = intl4.string(tmp(tmp2[13]).TQptZV);
    return jsx(channelId(tmp2[11]).FrameSurfaceExplanation, { description: null });
  } else if (channelId(tmp2[5]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const obj6 = { description: null };
    const intl3 = channelId(tmp2[12]).intl;
    obj6.description = intl3.string(tmp(tmp2[13])["13FYwI"]);
    return jsx(channelId(tmp2[11]).FrameSurfaceExplanation, { description: null });
  } else if (channelId(tmp2[5]).FrameLifecycleState.Error === state) {
    const obj = { heading: null, error: null };
    const intl = channelId(tmp2[12]).intl;
    obj.heading = intl.string(channelId(tmp2[12]).t.VquUff);
    const intl2 = channelId(tmp2[12]).intl;
    obj.error = intl2.string(channelId(tmp2[12]).t["Sd9D/R"]);
    return jsx(channelId(tmp2[11]).FrameSurfaceExplanation, { heading: null, error: null });
  } else {
    return jsx(channelId(tmp2[11]).FrameSurfaceLoading, {});
  }
  const tmp7 = guildId(left[7]);
};