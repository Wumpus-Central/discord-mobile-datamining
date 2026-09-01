// discord_app/modules/guild_onboarding/native/ConnectionCard.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ApplicationConnectionCardDefault from "ApplicationConnectionCard.tsx";
import ProviderConnectionCardDefault from "ProviderConnectionCard.tsx";
import { OnboardingConnectionType } from "../GuildOnboardingPromptsConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

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
}
