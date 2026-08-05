// discord_app/modules/changelog/getClientVersionForChangelog.native.tsx
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return require(16264) /* getAppMajorVersion */.getAppMajorVersion();
};