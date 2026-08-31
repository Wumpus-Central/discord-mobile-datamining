// === Module 5919: ConnectionCard ===

// Module 5919 (ConnectionCard)
import noopAll from "noop" /* 19 */;
import ApplicationConnectionCardDefault from "ApplicationConnectionCard" /* 5920 */;
import ProviderConnectionCardDefault from "ProviderConnectionCard" /* 5937 */;
import { OnboardingConnectionType } from "serverPromptToClientPrompt" /* 5436 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("set").fileFinishedImporting("modules/guild_onboarding/native/ConnectionCard.tsx");

export default function ConnectionCard(arg0) {
  ({ connection, guildId, location: _location } = arg0);
  const connection_type = connection.connection_type;
  if (OnboardingConnectionType.APPLICATION === connection_type) {
    let obj = { connection: null, guildId: null, location: null };
    obj[0] = connection;
    obj[1] = guildId;
    obj[2] = _location;
    return jsx(ApplicationConnectionCardDefault, { connection: null, guildId: null, location: null });
  } else if (tmp.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    obj = { connection: null, guildId: null, location: null };
    obj[0] = connection;
    obj[1] = guildId;
    obj[2] = _location;
    return jsx(ProviderConnectionCardDefault, { connection: null, guildId: null, location: null });
  } else {
    const connection_type2 = connection.connection_type;
    return null;
  }
};