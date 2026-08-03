// === Module 6694: MobileLurkerServerPreviewExperiment ===

// Module 6694 (MobileLurkerServerPreviewExperiment)
const obj = { 1: null, 2: { enabled: true, stickyLurk: false } };
obj[2] = { enabled: true, stickyLurk: true };
const tmp2 = require("getUnitId")({ name: "2026-05-mobile-lurker-server-preview", kind: "user", defaultConfig: { enabled: false, stickyLurk: false }, variations: obj });
let c0 = tmp2;
const result = require("set").fileFinishedImporting("modules/lurker_mode/experiments/MobileLurkerServerPreviewExperiment.tsx");

export default tmp2;
export const MobileLurkerServerPreviewExperiment = tmp2;
export const useMobileLurkerServerPreview = function useMobileLurkerServerPreview(ChannelListStickyHeader) {
  return tmp2.useConfig({ location: ChannelListStickyHeader });
};
export const getMobileLurkerServerPreview = function getMobileLurkerServerPreview(AcceptInviteManager) {
  return tmp2.getConfig({ location: AcceptInviteManager });
};