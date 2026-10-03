// === Module 11836: useTrackPollEvents ===

// Module 11836 (useTrackPollEvents)
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import PollLayoutTypes from "PollLayoutTypes" /* 11350 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/useTrackPollEvents.tsx");

export const useTrackPollCreationEvents = ReactCompilerGating.isReactCompilerEnabled() ? ((attachments_count, arg1) => {
  _require = attachments_count;
  closure_1 = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === arg1) {
    if (cResult[1] === attachments_count) {
      let tmp2 = cResult[2];
    }
    if (cResult[3] !== tmp2) {
      const obj2 = { trackPollCreationCancelled: tmp2 };
      cResult[3] = tmp2;
      cResult[4] = obj2;
      let tmp3 = obj2;
    } else {
      tmp3 = cResult[4];
    }
    return tmp3;
  }
  const fn = function o() {
    attachments_count = 0;
    const allow_multiselect = 0;
    stickers_count = 0;
    const item = attachments_count.forEach((image) => {
      image = image.image;
      if (null != image) {
        if (null != image.emoji) {
          closure_1 = closure_1 + 1;
        } else if (null != image.stickerId) {
          closure_2 = closure_2 + 1;
        } else if (null != image.mediaAttachmentState) {
          closure_0 = closure_0 + 1;
        }
      }
    });
    const obj = AppAnalyticsUtilsDefault;
    obj.trackWithMetadata(AnalyticEvents.POLL_CREATION_CANCELLED, { answers_count: attachments_count.length, attachments_count, emojis_count: allow_multiselect, stickers_count, allow_multiselect, layout_type: PollLayoutTypes.PollLayoutTypes.DEFAULT });
  };
  cResult[0] = arg1;
  cResult[1] = attachments_count;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((attachments_count, arg1) => {
  closure_1 = arg1;
  let obj = { trackPollCreationCancelled: null };
  const items = [attachments_count, arg1];
  obj.trackPollCreationCancelled = noop.useCallback(() => {
    attachments_count = 0;
    const allow_multiselect = 0;
    stickers_count = 0;
    const item = attachments_count.forEach((image) => {
      image = image.image;
      if (null != image) {
        if (null != image.emoji) {
          closure_1 = closure_1 + 1;
        } else if (null != image.stickerId) {
          closure_2 = closure_2 + 1;
        } else if (null != image.mediaAttachmentState) {
          closure_0 = closure_0 + 1;
        }
      }
    });
    const obj = AppAnalyticsUtilsDefault;
    obj.trackWithMetadata(AnalyticEvents.POLL_CREATION_CANCELLED, { answers_count: attachments_count.length, attachments_count, emojis_count: allow_multiselect, stickers_count, allow_multiselect, layout_type: PollLayoutTypes.PollLayoutTypes.DEFAULT });
  }, items);
  return obj;
});