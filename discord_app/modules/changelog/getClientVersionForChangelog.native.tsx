// === Module 16167: getClientVersionForChangelog ===

// Module 16167 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16168) /* getAppMajorVersion */.getAppMajorVersion();
};