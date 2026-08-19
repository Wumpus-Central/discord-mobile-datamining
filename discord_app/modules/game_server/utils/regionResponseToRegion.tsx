// === Module 11656: regionResponseToRegion ===

// Module 11656 (regionResponseToRegion)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/game_server/utils/regionResponseToRegion.tsx");

export default function regionResponseToRegion(id) {
  return { id: id.id, name: id.name, countryCode: id.country_code, pingUrl: id.ping_url, enabled: id.enabled };
};