// discord_app/modules/media_engine/VideoGuardExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import importDefaultResult from "../../utils/HelpdeskUtils.tsx";

const articleURL = importDefaultResult.getArticleURL("42704051358359");
const obj = { 1: null, 2: { videoEnabled: false } };
obj[2] = { videoEnabled: false };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-video-guard", kind: "user", defaultConfig: { videoEnabled: true }, variations: obj });
const result = require("obj132").fileFinishedImporting("modules/media_engine/VideoGuardExperiment.tsx");

export const VIDEO_GUARD_HELP_ARTICLE_URL = articleURL;
export const VideoGuardExperiment = apexExperiment;