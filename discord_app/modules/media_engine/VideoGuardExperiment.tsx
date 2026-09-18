// === Module 13507: VideoGuardExperiment ===

// Module 13507 (VideoGuardExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-video-guard", kind: "user", defaultConfig: { videoEnabled: true }, variations: null };
const obj2 = { 1: null, 2: { videoEnabled: false } };
obj2[2] = { videoEnabled: false };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoGuardExperiment.tsx");

export const VIDEO_GUARD_BLOG_POST_URL = "https://discord.com/blog/a-letter-to-the-discord-community-in-brazil";
export const VideoGuardExperiment = apexExperiment;