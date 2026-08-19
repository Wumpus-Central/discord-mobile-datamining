// === Module 13106: articleURL ===

// Module 13106 (articleURL)
import ApexExperiment from "ApexExperiment" /* 1472 */;
import importDefaultResult from "combined" /* 1993 */;

const articleURL = importDefaultResult.getArticleURL("42704051358359");
const obj = { 1: null, 2: { videoEnabled: false } };
obj[2] = { videoEnabled: false };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-video-guard", kind: "user", defaultConfig: { videoEnabled: true }, variations: obj });
const result = require("obj132").fileFinishedImporting("modules/media_engine/VideoGuardExperiment.tsx");

export const VIDEO_GUARD_HELP_ARTICLE_URL = articleURL;
export const VideoGuardExperiment = apexExperiment;