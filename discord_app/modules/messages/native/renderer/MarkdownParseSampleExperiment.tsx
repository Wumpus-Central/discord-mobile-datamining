// === Module 8211: MarkdownParseSampleExperiment ===

// Module 8211 (MarkdownParseSampleExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-markdown-parse-sample", defaultConfig: { sampleRate: 0 }, variations: { 0: { sampleRate: 0.001 }, 1: { sampleRate: 0.0001 }, 2: { sampleRate: 0.01 } } });
const result = size.fileFinishedImporting("modules/messages/native/renderer/MarkdownParseSampleExperiment.tsx");

export default apexExperiment;
export const DEFAULT_MARKDOWN_PARSE_SAMPLE_RATE = 0;
export const BASELINE_MARKDOWN_PARSE_SAMPLE_RATE = 0.001;
export const getMarkdownParseSampleRate = function getMarkdownParseSampleRate() {
  const sampleRate = apexExperiment.getConfig({ location: "track_markdown_parse" }).sampleRate;
  let num = 0;
  if (typeof sampleRate === "number") {
    const _Number = Number;
    num = 0;
    if (Number.isFinite(sampleRate)) {
      const _Math = Math;
      const _Math2 = Math;
      num = Math.min(Math.max(sampleRate, 0), 1);
    }
  }
  return num;
};