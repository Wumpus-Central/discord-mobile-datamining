// === Module 6662: ConnectionCard ===

// Module 6662 (ConnectionCard)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 6603 */;
import ApplicationConnectionCardDefault from "ApplicationConnectionCard" /* 6663 */;
import ProviderConnectionCardDefault from "ProviderConnectionCard" /* 6680 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const OnboardingConnectionType = GuildOnboardingPromptsConstants.OnboardingConnectionType;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let _location;
  let connection;
  let guildId;
  const obj = react2;
  const cResult = obj.c(8);
  ({ connection, guildId, location: _location } = arg0);
  const connection_type = connection.connection_type;
  if (OnboardingConnectionType.APPLICATION === connection_type) {
    if (cResult[0] === connection) {
      if (cResult[1] === guildId) {
        let tmp9;
        if (cResult[2] === _location) {
          tmp9 = cResult[3];
        }
        return tmp9;
      }
    }
    const tmp12 = jsx(ApplicationConnectionCardDefault, { connection, guildId, location: _location });
    cResult[0] = connection;
    cResult[1] = guildId;
    cResult[2] = _location;
    cResult[3] = tmp12;
    tmp9 = tmp12;
  } else if (tmp3.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    if (cResult[4] === connection) {
      if (cResult[5] === guildId) {
        let tmp5;
        if (cResult[6] === _location) {
          tmp5 = cResult[7];
        }
        return tmp5;
      }
    }
    const tmp8 = jsx(ProviderConnectionCardDefault, { connection, guildId, location: _location });
    cResult[4] = connection;
    cResult[5] = guildId;
    cResult[6] = _location;
    cResult[7] = tmp8;
    tmp5 = tmp8;
  } else {
    return null;
  }
}) : ((arg0) => {
  let _location;
  let connection;
  let guildId;
  ({ connection, guildId, location: _location } = arg0);
  const connection_type = connection.connection_type;
  if (OnboardingConnectionType.APPLICATION === connection_type) {
    return jsx(ApplicationConnectionCardDefault, { connection, guildId, location: _location });
  } else if (tmp.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    return jsx(ProviderConnectionCardDefault, { connection, guildId, location: _location });
  } else {
    const connection_type2 = connection.connection_type;
    return null;
  }
});
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ConnectionCard.tsx");

export default tmp3;