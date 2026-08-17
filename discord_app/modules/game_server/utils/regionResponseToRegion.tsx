// discord_app/modules/game_server/utils/regionResponseToRegion.tsx
import set from "../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/game_server/utils/regionResponseToRegion.tsx");

export default function regionResponseToRegion(id) {
  return { id: id.id, name: id.name, countryCode: id.country_code, pingUrl: id.ping_url, enabled: id.enabled };
};