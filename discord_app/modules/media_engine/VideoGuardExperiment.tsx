// discord_app/modules/media_engine/VideoGuardExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null, 2: { videoEnabled: false } };
obj[2] = { videoEnabled: false };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-video-guard", kind: "user", defaultConfig: { videoEnabled: true }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/VideoGuardExperiment.tsx");

export const VIDEO_GUARD_BLOG_POST_URL = "https://discord.com/blog/a-letter-to-the-discord-community-in-brazil";
export const VideoGuardExperiment = apexExperiment;