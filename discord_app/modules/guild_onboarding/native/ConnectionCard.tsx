// discord_app/modules/guild_onboarding/native/ConnectionCard.tsx
import ApplicationConnectionCardDefault from "ApplicationConnectionCard.tsx";
import ProviderConnectionCardDefault from "ProviderConnectionCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const OnboardingConnectionType = fn(7101).OnboardingConnectionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ConnectionCard.tsx");

export default function ConnectionCard(arg0) {
  ({ connection, guildId, location: _location } = arg0);
  const connection_type = connection.connection_type;
  if (OnboardingConnectionType.APPLICATION === connection_type) {
    let obj = { connection, guildId, location: _location };
    return jsx(ApplicationConnectionCardDefault, { connection, guildId, location: _location });
  } else if (tmp.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    obj = { connection, guildId, location: _location };
    return jsx(ProviderConnectionCardDefault, { connection, guildId, location: _location });
  } else {
    const connection_type2 = connection.connection_type;
    return null;
  }
}
