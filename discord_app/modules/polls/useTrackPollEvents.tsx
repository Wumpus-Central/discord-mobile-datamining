// === Module 11836: useTrackPollEvents ===

// Module 11836 (useTrackPollEvents)
import Constants from "Constants" /* 1085 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import PollLayoutTypes from "PollLayoutTypes" /* 11350 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, attachments_count, closure_0, closure_2, image, stickers_count;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((attachments_count, arg1) => {
  _require = attachments_count;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === arg1) {
    let tmp2;
    let tmp3;
    if (cResult[1] === attachments_count) {
      tmp2 = cResult[2];
    }
    if (cResult[3] !== tmp2) {
      let obj2 = { trackPollCreationCancelled: tmp2 };
      cResult[3] = tmp2;
      cResult[4] = obj2;
      tmp3 = obj2;
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
    const obj2 = { answers_count: attachments_count.length, attachments_count, emojis_count: allow_multiselect, stickers_count, allow_multiselect, layout_type: PollLayoutTypes.PollLayoutTypes.DEFAULT };
    obj.trackWithMetadata(AnalyticEvents.POLL_CREATION_CANCELLED, obj2);
  };
  cResult[0] = arg1;
  cResult[1] = attachments_count;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((attachments_count, arg1) => {
  let items;
  let closure_1 = arg1;
  let obj = {
    trackPollCreationCancelled: react.useCallback(() => {
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
      const obj2 = { answers_count: attachments_count.length, attachments_count, emojis_count: allow_multiselect, stickers_count, allow_multiselect, layout_type: PollLayoutTypes.PollLayoutTypes.DEFAULT };
      obj.trackWithMetadata(AnalyticEvents.POLL_CREATION_CANCELLED, obj2);
    }, items)
  };
  items = [attachments_count, arg1];
  return obj;
});
const result = size.fileFinishedImporting("modules/polls/useTrackPollEvents.tsx");

export const useTrackPollCreationEvents = tmp2;