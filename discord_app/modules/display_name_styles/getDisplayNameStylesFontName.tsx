// discord_app/modules/display_name_styles/getDisplayNameStylesFontName.tsx
import _modDef2932 from "intl/DisplayNameStyles.messages.js";
import _modDef4285 from "../hexagon_campaign/HexagonCampaign.messages.js";

const DISPLAY_NAME_STYLES_FONT_NAMES = {};
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.DEFAULT] = _modDef2932.ZEL6mz;
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.CHERRY_BOMB] = _modDef2932.rN7cuX;
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.CHICLE] = _modDef2932.CbHHnL;
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.MUSEO_MODERNO] = _modDef2932.iEcEKO;
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.NEO_CASTEL] = _modDef2932.DL7jLZ;
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.PIXELIFY] = _modDef2932.jq4aRp;
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.SINISTRE] = _modDef2932.jV9DN4;
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.ZILLA_SLAB] = _modDef2932.KMR8rT;
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.PLAYPEN_SANS] = _modDef2932.RP8HFf;
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.ORBITRON] = _modDef2932.pwbAIk;
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.NEW_ROCKER] = _modDef2932["Llo/Ia"];
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.KALAM] = _modDef2932.t9Les4;
DISPLAY_NAME_STYLES_FONT_NAMES[fn(1403).DisplayNameFont.HEXAGON] = _modDef4285.ALTlzk;
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/getDisplayNameStylesFontName.tsx");

export default function getDisplayNameStylesFontName(arg0) {
  let ZEL6mz = obj[arg0];
  if (ZEL6mz == null) {
    ZEL6mz = _modDef2932.ZEL6mz;
  }
  return ZEL6mz;
}
export { DISPLAY_NAME_STYLES_FONT_NAMES };
