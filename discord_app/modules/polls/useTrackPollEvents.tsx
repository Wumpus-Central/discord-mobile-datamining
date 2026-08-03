import noop from "noop";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("collectGuildAnalyticsMetadata").fileFinishedImporting("modules/polls/useTrackPollEvents.tsx");

export const useTrackPollCreationEvents = function useTrackPollCreationEvents(answers, allowMultiSelect) {
  let closure_0 = answers;
  let closure_1 = allowMultiSelect;
  const items = [answers, allowMultiSelect];
  return {
    trackPollCreationCancelled: React.useCallback(() => {
      const answers = 0;
      let c1 = 0;
      let c2 = 0;
      const item = answers.forEach((image) => {
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
      let obj = allowMultiSelect(outer1_2[2]);
      obj = { answers_count: answers.length, attachments_count: answers, emojis_count: c1, stickers_count: c2, allow_multiselect: c1, layout_type: answers(outer1_2[3]).PollLayoutTypes.DEFAULT };
      obj.trackWithMetadata(outer1_4.POLL_CREATION_CANCELLED, obj);
    }, items)
  };
};