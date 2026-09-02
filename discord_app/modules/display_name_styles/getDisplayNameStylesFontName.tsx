// === Module 14492: getDisplayNameStylesFontName ===

// Module 14492 (getDisplayNameStylesFontName)
import messagesProxyDefault from "messagesProxy" /* 2758 */;

const obj = {};
obj[require("DisplayNameFont").DisplayNameFont.DEFAULT] = messagesProxyDefault.ZEL6mz;
obj[require("DisplayNameFont").DisplayNameFont.CHERRY_BOMB] = messagesProxyDefault.rN7cuX;
obj[require("DisplayNameFont").DisplayNameFont.CHICLE] = messagesProxyDefault.CbHHnL;
obj[require("DisplayNameFont").DisplayNameFont.MUSEO_MODERNO] = messagesProxyDefault.iEcEKO;
obj[require("DisplayNameFont").DisplayNameFont.NEO_CASTEL] = messagesProxyDefault.DL7jLZ;
obj[require("DisplayNameFont").DisplayNameFont.PIXELIFY] = messagesProxyDefault.jq4aRp;
obj[require("DisplayNameFont").DisplayNameFont.SINISTRE] = messagesProxyDefault.jV9DN4;
obj[require("DisplayNameFont").DisplayNameFont.ZILLA_SLAB] = messagesProxyDefault.KMR8rT;
obj[require("DisplayNameFont").DisplayNameFont.PLAYPEN_SANS] = messagesProxyDefault.RP8HFf;
obj[require("DisplayNameFont").DisplayNameFont.ORBITRON] = messagesProxyDefault.pwbAIk;
obj[require("DisplayNameFont").DisplayNameFont.NEW_ROCKER] = messagesProxyDefault["Llo/Ia"];
obj[require("DisplayNameFont").DisplayNameFont.KALAM] = messagesProxyDefault.t9Les4;
const result = require("set").fileFinishedImporting("modules/display_name_styles/getDisplayNameStylesFontName.tsx");

export default function getDisplayNameStylesFontName(arg0) {
  let ZEL6mz = obj[arg0];
  if (ZEL6mz == null) {
    ZEL6mz = messagesProxyDefault.ZEL6mz;
  }
  return ZEL6mz;
};
export const DISPLAY_NAME_STYLES_FONT_NAMES = obj;