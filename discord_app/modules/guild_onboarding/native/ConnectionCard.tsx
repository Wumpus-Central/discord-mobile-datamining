// discord_app/modules/guild_onboarding/native/ConnectionCard.tsx
import c from "../../../../_runtime/00576_c.js";
import ApplicationConnectionCardDefault from "ApplicationConnectionCard.tsx";
import ProviderConnectionCardDefault from "ProviderConnectionCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const OnboardingConnectionType = fn(6779).OnboardingConnectionType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ConnectionCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectionCard(arg0) {
      const cResult = c.c(8);
      ({ connection, guildId, location: _location } = arg0);
      const connection_type = connection.connection_type;
      if (OnboardingConnectionType.APPLICATION === connection_type) {
        if (cResult[0] === connection) {
          if (cResult[1] === guildId) {
            if (cResult[2] === _location) {
              let tmp9 = cResult[3];
            }
            return tmp9;
          }
        }
        const obj2 = { connection, guildId, location: _location };
        const tmp12 = jsx(ApplicationConnectionCardDefault, { connection, guildId, location: _location });
        cResult[0] = connection;
        cResult[1] = guildId;
        cResult[2] = _location;
        cResult[3] = tmp12;
        tmp9 = tmp12;
      } else if (tmp3.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
        if (cResult[4] === connection) {
          if (cResult[5] === guildId) {
            if (cResult[6] === _location) {
              let tmp5 = cResult[7];
            }
            return tmp5;
          }
        }
        const obj3 = { connection, guildId, location: _location };
        const tmp8 = jsx(ProviderConnectionCardDefault, { connection, guildId, location: _location });
        cResult[4] = connection;
        cResult[5] = guildId;
        cResult[6] = _location;
        cResult[7] = tmp8;
        tmp5 = tmp8;
      } else {
        return null;
      }
    }
  : function ConnectionCard(arg0) {
      ({ connection, guildId, location: _location } = arg0);
      const connection_type = connection.connection_type;
      if (OnboardingConnectionType.APPLICATION === connection_type) {
        const obj2 = { connection, guildId, location: _location };
        return jsx(ApplicationConnectionCardDefault, { connection, guildId, location: _location });
      } else if (tmp.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
        const obj = { connection, guildId, location: _location };
        return jsx(ProviderConnectionCardDefault, { connection, guildId, location: _location });
      } else {
        const connection_type2 = connection.connection_type;
        return null;
      }
    };
