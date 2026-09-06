// discord_app/modules/media_engine/VideoGuardExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { name: "2026-08-video-guard", kind: "user", defaultConfig: { videoEnabled: true }, variations: null };
obj = { 1: null, 2: { videoEnabled: false } };
obj[2] = { videoEnabled: false };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoGuardExperiment.tsx");

export const VIDEO_GUARD_BLOG_POST_URL = "https://discord.com/blog/a-letter-to-the-discord-community-in-brazil";
export const VideoGuardExperiment = apexExperiment;
