// discord_app/modules/messages/native/renderer/trackMarkdownParse.tsx
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import MarkdownParseSampleExperiment from "MarkdownParseSampleExperiment.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/messages/native/renderer/trackMarkdownParse.tsx");

export const trackMarkdownParse = function trackMarkdownParse(arg0) {
  let obj = MarkdownParseSampleExperiment;
  const markdownParseSampleRate = obj.getMarkdownParseSampleRate();
  if (markdownParseSampleRate > 0) {
    obj = { duration_ms: null, path: null, content_length: null, has_bailed_ast: null };
    ({
      durationMs: obj3.duration_ms,
      path: obj3.path,
      contentLength: obj3.content_length,
      hasBailedAst: obj3.has_bailed_ast,
    } = arg0);
    obj = { throttlePercent: markdownParseSampleRate };
    AnalyticsUtilsDefault.track(AnalyticEvents.MESSAGE_MARKUP_PARSE, obj, obj);
  }
};
