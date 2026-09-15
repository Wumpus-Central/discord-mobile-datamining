// === Module 8213: trackMarkdownParse ===

// Module 8213 (trackMarkdownParse)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import MarkdownParseSampleExperiment from "MarkdownParseSampleExperiment" /* 8214 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/messages/native/renderer/trackMarkdownParse.tsx");

export const trackMarkdownParse = function trackMarkdownParse(arg0) {
  const markdownParseSampleRate = MarkdownParseSampleExperiment.getMarkdownParseSampleRate();
  if (markdownParseSampleRate > 0) {
    ({ durationMs: obj3.duration_ms, path: obj3.path, contentLength: obj3.content_length, hasBailedAst: obj3.has_bailed_ast } = arg0);
    const obj6 = { throttlePercent: markdownParseSampleRate };
    AnalyticsUtilsDefault.track(AnalyticEvents.MESSAGE_MARKUP_PARSE, { duration_ms: null, path: null, content_length: null, has_bailed_ast: null }, obj6);
    const obj4 = { duration_ms: null, path: null, content_length: null, has_bailed_ast: null };
  }
};