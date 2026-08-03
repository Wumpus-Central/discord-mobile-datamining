// === Module 16231: getClientVersionForChangelog ===

// Module 16231 (getClientVersionForChangelog)
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16232) /* getAppMajorVersion */.getAppMajorVersion();
};