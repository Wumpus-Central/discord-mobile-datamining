// === Module 13260: VideoGuardExperiment ===

// Module 13260 (VideoGuardExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-08-video-guard", kind: "user", defaultConfig: { videoEnabled: true }, variations: null };
obj = { 1: null, 2: { videoEnabled: false } };
obj[2] = { videoEnabled: false };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoGuardExperiment.tsx");

export const VIDEO_GUARD_BLOG_POST_URL = "https://discord.com/blog/a-letter-to-the-discord-community-in-brazil";
export const VideoGuardExperiment = apexExperiment;