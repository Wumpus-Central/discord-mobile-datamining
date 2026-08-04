const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require(4265) /* DCDDeviceManager */.getTimeZone();
};