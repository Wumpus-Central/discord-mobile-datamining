// === Module 11710: useTrackPollCreationEvents ===

// Module 11710 (useTrackPollCreationEvents)
import closure_3 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/polls/useTrackPollEvents.tsx");

export const useTrackPollCreationEvents = function useTrackPollCreationEvents(answers, allowMultiSelect) {
  closure_0 = answers;
  closure_1 = allowMultiSelect;
  const items = [answers, allowMultiSelect];
  return {
    trackPollCreationCancelled: React.useCallback(() => {
      answers = 0;
      c1 = 0;
      c2 = 0;
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
      let obj = allowMultiSelect(closure_1_2[2]);
      obj = { answers_count: answers.length, attachments_count: answers, emojis_count: c1, stickers_count: c2, allow_multiselect: c1, layout_type: answers(closure_1_2[3]).PollLayoutTypes.DEFAULT };
      obj.trackWithMetadata(closure_1_4.POLL_CREATION_CANCELLED, obj);
    }, items)
  };
};