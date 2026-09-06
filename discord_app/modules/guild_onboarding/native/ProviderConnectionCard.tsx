// === Module 7178: ProviderConnectionCard ===

// Module 7178 (ProviderConnectionCard)
import native from "native" /* 1178 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import shared from "shared" /* 4411 */;
import LinkIcon from "LinkIcon" /* 4503 */;
import PlatformsDefault from "Platforms" /* 5283 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ProviderConnectionCard.tsx");

export default function ProviderConnectionCard(connection) {
  connection = connection.connection;
  const guildId = connection.guildId;
  const _location = connection.location;
  let startConnection;
  const tmp3 = guildId(_location[4])();
  asyncGeneratorStep = tmp3;
  let stringResult = null;
  if (null != connection.provider_id) {
    value = tmp(tmp2[5]).get(connection.provider_id);
    let name;
    if (value != null) {
      name = value.name;
    }
    stringResult = name;
    const tmpResult = tmp(tmp2[5]);
  }
  if (stringResult == null) {
    const intl = connection(tmp2[6]).intl;
    stringResult = intl.string(connection(tmp2[6]).t.NzCoRx);
  }
  if (null != connection.description) {
    if (connection.description.length > 0) {
      let description = connection.description;
    }
    const startProviderConnection = connection(tmp2[8]).useStartProviderConnection(connection.provider_id);
    startConnection = startProviderConnection.startConnection;
    ({ hasConnection, canConnect, loading } = startProviderConnection);
    const items = [startConnection, guildId, connection.provider_id, _location];
    const items1 = [connection.provider_id, tmp3];
    const callback = startConnection.useCallback(asyncGeneratorStep(async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const obj1 = {};
              const obj5 = v3(1242);
              const merged = Object.assign(provider_id(4740).collectGuildAnalyticsMetadata(guildId));
              obj1.connection_type = "provider";
              provider_id = connection.provider_id;
              if (provider_id == null) {
                provider_id = undefined;
              }
              obj1.provider_id = provider_id;
              obj1.location = _location;
              obj5.track(constants.GUILD_ONBOARDING_CONNECTION_CLICKED, obj1);
              dependencyMap = 1;
              v3 = 1;
              const obj2 = { value: startConnection("Guild Onboarding"), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          v3 = tmp;
          throw tmp9;
        }
      }
    }), items);
    const memo = startConnection.useMemo(() => {
      if (null != connection.provider_id) {
        let obj = PlatformsDefault;
        value = obj.get(tmp.provider_id);
        let icon;
        if (value != null) {
          icon = value.icon;
        }
        if (null == icon) {
          const source = obj2.makeSource(null);
          obj = { source, style: { width: 32, height: 32 }, disableColor: true };
          return jsx(native.Icon, { source, style: { width: 32, height: 32 }, disableColor: true });
        } else {
          icon = value.icon;
          shared.isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG;
        }
        obj2 = AvatarUtils;
      } else {
        return jsx(LinkIcon.LinkIcon, { size: "lg", color: "text-subtle" });
      }
    }, items1);
    let obj = { displayName: stringResult, description, icon: memo, isLoading: loading, isConnected: hasConnection, canConnect, onConnect: callback };
    return jsx(tmp(tmp2[15]), { displayName: stringResult, description, icon: memo, isLoading: loading, isConnected: hasConnection, canConnect, onConnect: callback });
  }
  description = tmp(tmp2[7])(connection.provider_id);
};