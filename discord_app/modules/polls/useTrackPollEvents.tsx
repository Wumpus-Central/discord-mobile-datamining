// === Module 12207: useTrackPollEvents ===

// Module 12207 (useTrackPollEvents)
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import PollLayoutTypes from "PollLayoutTypes" /* 11720 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/useTrackPollEvents.tsx");

export const useTrackPollCreationEvents = function useTrackPollCreationEvents(answers, allowMultiSelect) {
  let attachments_count = answers;
  let obj = { trackPollCreationCancelled: null };
  const items = [answers, allowMultiSelect];
  obj.trackPollCreationCancelled = noop.useCallback(() => {
    attachments_count = 0;
    allowMultiSelect = 0;
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
    const obj = { answers_count: attachments_count.length, attachments_count, emojis_count: allowMultiSelect, stickers_count, allow_multiselect: allowMultiSelect, layout_type: PollLayoutTypes.PollLayoutTypes.DEFAULT };
    obj.trackWithMetadata(AnalyticEvents.POLL_CREATION_CANCELLED, obj);
  }, items);
  return obj;
};