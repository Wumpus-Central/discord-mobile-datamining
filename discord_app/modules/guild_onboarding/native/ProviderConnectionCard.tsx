// discord_app/modules/guild_onboarding/native/ProviderConnectionCard.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/00019_noop.js";
import { AnalyticEvents } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding/native/ProviderConnectionCard.tsx");

export default function ProviderConnectionCard(connection) {
  connection = connection.connection;
  const guildId = connection.guildId;
  const _location = connection.location;
  let startConnection;
  const tmp3 = guildId(_location[4])();
  let callback = tmp3;
  let stringResult = null;
  if (null != connection.provider_id) {
    let value = tmp(tmp2[5]).get(connection.provider_id);
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
    callback = startConnection.useCallback(callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v0 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = {};
              const obj5 = v0(698);
              const merged = Object.assign(connection(5042).collectGuildAnalyticsMetadata(v0));
              obj1.connection_type = "provider";
              const provider_id = connection.provider_id;
              c0 = provider_id;
              if (provider_id == null) {
                c0 = undefined;
              }
              obj1.provider_id = c0;
              obj1.location = dependencyMap;
              obj5.track(closure_1_5.GUILD_ONBOARDING_CONNECTION_CLICKED, obj1);
              dependencyMap = 1;
              v0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = startConnection("Guild Onboarding");
              return obj2;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp9) {
          v0 = tmp;
          throw tmp9;
        }
      }
    }), items);
    const memo = startConnection.useMemo(() => {
      if (null != connection.provider_id) {
        let obj = guildId(_location[5]);
        const value = obj.get(tmp.provider_id);
        let icon;
        if (value != null) {
          icon = value.icon;
        }
        if (null == icon) {
          const source = obj2.makeSource(null);
          obj = { source: null, style: null, disableColor: true };
          obj[0] = source;
          obj[1] = { width: 32, height: 32 };
          return jsx(connection(_location[13]).Icon, { source: null, style: null, disableColor: true });
        } else {
          icon = value.icon;
          connection(_location[12]).isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG;
          const obj3 = connection(_location[12]);
        }
        obj2 = connection(_location[11]);
      } else {
        return jsx(connection(_location[14]).LinkIcon, { size: "lg", color: "text-subtle" });
      }
    }, items1);
    let obj = { displayName: null, description: null, icon: null, isLoading: null, isConnected: null, canConnect: null, onConnect: null };
    obj[0] = stringResult;
    obj[1] = description;
    obj[2] = memo;
    obj[3] = loading;
    obj[4] = hasConnection;
    obj[5] = canConnect;
    obj[6] = callback;
    return jsx(tmp(tmp2[15]), { displayName: null, description: null, icon: null, isLoading: null, isConnected: null, canConnect: null, onConnect: null });
  }
  description = tmp(tmp2[7])(connection.provider_id);
};