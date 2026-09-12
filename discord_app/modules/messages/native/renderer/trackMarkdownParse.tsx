// === Module 8210: trackMarkdownParse ===

// Module 8210 (trackMarkdownParse)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import MarkdownParseSampleExperiment from "MarkdownParseSampleExperiment" /* 8211 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/messages/native/renderer/trackMarkdownParse.tsx");

export const trackMarkdownParse = function trackMarkdownParse(arg0) {
  let obj = MarkdownParseSampleExperiment;
  const markdownParseSampleRate = obj.getMarkdownParseSampleRate();
  if (markdownParseSampleRate > 0) {
    obj = { duration_ms: null, path: null, content_length: null, has_bailed_ast: null };
    ({ durationMs: obj3.duration_ms, path: obj3.path, contentLength: obj3.content_length, hasBailedAst: obj3.has_bailed_ast } = arg0);
    obj = { throttlePercent: markdownParseSampleRate };
    AnalyticsUtilsDefault.track(AnalyticEvents.MESSAGE_MARKUP_PARSE, obj, obj);
  }
};