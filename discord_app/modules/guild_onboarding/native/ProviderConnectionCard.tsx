// discord_app/modules/guild_onboarding/native/ProviderConnectionCard.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../Constants.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import shared from "../../../design/shared.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import _asyncToGenerator_mod from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let c1, c2, connection;

let _asyncToGenerator = _asyncToGenerator_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (connection) => {
      let _location;
      let canConnect;
      let hasConnection;
      let startConnection;
      let tmp11;
      let tmp6;
      const tmp2 = _location;
      let obj = connection(_location[5]);
      const cResult = obj.c(25);
      connection = connection.connection;
      const guildId = connection.guildId;
      _location = connection.location;
      const tmp5 = guildId(_location[6])();
      if (cResult[0] !== connection.provider_id) {
        let stringResult = null;
        if (null != connection.provider_id) {
          const tmp4Result = guildId(tmp2[7]);
          const value = tmp4Result.get(connection.provider_id);
          let name;
          if (value != null) {
            name = value.name;
          }
          stringResult = name;
        }
        if (stringResult == null) {
          const intl = tmp(tmp2[8]).intl;
          stringResult = intl.string(tmp(tmp2[8]).t.NzCoRx);
        }
        cResult[0] = connection.provider_id;
        cResult[1] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === connection.description) {
        if (cResult[3] === connection.provider_id) {
          tmp11 = cResult[4];
        }
        const tmpResult = connection(tmp2[10]);
        const startProviderConnection = tmpResult.useStartProviderConnection(connection.provider_id);
        ({ hasConnection, canConnect, startConnection } = startProviderConnection);
        const loading = startProviderConnection.loading;
        if (cResult[5] === connection.provider_id) {
          if (cResult[6] === guildId) {
            if (cResult[7] === _location) {
              let tmp13;
              let tmp24;
              if (cResult[8] === startConnection) {
                tmp13 = cResult[9];
              }
              if (null == connection.provider_id) {
                let tmp28;
                const _Symbol2 = Symbol;
                if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp30 = jsx(connection(tmp2[16]).LinkIcon, { size: "lg", color: "text-subtle" });
                  cResult[16] = tmp30;
                  tmp28 = tmp30;
                } else {
                  tmp28 = cResult[16];
                }
                tmp24 = tmp28;
              } else {
                if (cResult[10] === connection.provider_id) {
                  let tmp16;
                  let tmp23;
                  if (cResult[11] === tmp5) {
                    tmp16 = cResult[12];
                  }
                  const _Symbol = Symbol;
                  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                    size = { width: 32, height: 32 };
                    cResult[13] = size;
                    tmp23 = size;
                  } else {
                    tmp23 = cResult[13];
                  }
                  if (cResult[14] !== tmp16) {
                    const tmp26 = jsx(connection(tmp2[15]).Icon, { source: tmp16, style: tmp23, disableColor: true });
                    cResult[14] = tmp16;
                    cResult[15] = tmp26;
                    tmp24 = tmp26;
                  } else {
                    tmp24 = cResult[15];
                  }
                }
                const tmp4Result2 = guildId(tmp2[7]);
                const value2 = tmp4Result2.get(connection.provider_id);
                let icon1;
                const makeSource = connection(tmp2[13]).makeSource;
                connection(tmp2[13]);
                if (value2 != null) {
                  icon1 = value2.icon;
                }
                let tmp20 = null;
                if (null != icon1) {
                  const icon = value2.icon;
                  const tmpResult4 = connection(tmp2[14]);
                  tmp20 = tmpResult4.isThemeDark(tmp5) ? icon.darkPNG : icon.lightPNG;
                }
                const source = makeSource(tmp20);
                cResult[10] = connection.provider_id;
                cResult[11] = tmp5;
                cResult[12] = source;
                tmp16 = source;
              }
              if (cResult[17] === canConnect) {
                if (cResult[18] === tmp11) {
                  if (cResult[19] === tmp6) {
                    if (cResult[20] === tmp13) {
                      if (cResult[21] === hasConnection) {
                        if (cResult[22] === tmp24) {
                          let tmp31;
                          if (cResult[23] === loading) {
                            tmp31 = cResult[24];
                          }
                          return tmp31;
                        }
                      }
                    }
                  }
                }
              }
              const tmp33 = jsx(guildId(tmp2[17]), {
                displayName: tmp6,
                description: tmp11,
                icon: tmp24,
                isLoading: loading,
                isConnected: hasConnection,
                canConnect,
                onConnect: tmp13,
              });
              cResult[17] = canConnect;
              cResult[18] = tmp11;
              cResult[19] = tmp6;
              cResult[20] = tmp13;
              cResult[21] = hasConnection;
              cResult[22] = tmp24;
              cResult[23] = loading;
              cResult[24] = tmp33;
              tmp31 = tmp33;
            }
          }
        }
        let closure_0 = startConnection(function* () {
          let provider_id;
          if (c1 === 2) {
            c1 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c1 = 2;
              if (0 === _location) {
                if (arg0 === 1) {
                  c1 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c1 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const obj4 = { connection_type: "provider", provider_id, location: _location };
                  const track = guildId(closure_2_2[11]).track;
                  const GUILD_ONBOARDING_CONNECTION_CLICKED = constants.GUILD_ONBOARDING_CONNECTION_CLICKED;
                  const tmp14 = guildId(closure_2_2[11]);
                  const obj6 = provider_id(closure_2_2[12]);
                  const merged = Object.assign(obj6.collectGuildAnalyticsMetadata(c1));
                  provider_id = provider_id.provider_id ?? undefined;
                  track(GUILD_ONBOARDING_CONNECTION_CLICKED, obj4);
                  _location = 1;
                  c1 = 1;
                  const obj5 = { value: startConnection("Guild Onboarding"), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                c1 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp8) {
              c1 = 3;
              throw tmp8;
            }
          }
        });
        const fn = function () {
          return closure_0(...arguments);
        };
        cResult[5] = connection.provider_id;
        cResult[6] = guildId;
        cResult[7] = _location;
        cResult[8] = startConnection;
        cResult[9] = fn;
        tmp13 = fn;
      }
      if (null != connection.description) {
        let description;
        if (connection.description.length > 0) {
          description = connection.description;
        }
        cResult[2] = connection.description;
        cResult[3] = connection.provider_id;
        cResult[4] = description;
        tmp11 = description;
      }
      description = tmp4(tmp2[9])(connection.provider_id);
    }
  : (connection) => {
      let canConnect;
      let closure_3;
      let hasConnection;
      let loading;
      connection = connection.connection;
      const guildId = connection.guildId;
      const _location = connection.location;
      let startConnection;
      const tmp = guildId;
      const tmp2 = _location;
      const tmp3 = guildId(_location[6])();
      _asyncToGenerator = tmp3;
      let stringResult = null;
      if (null != connection.provider_id) {
        const tmpResult = tmp(tmp2[7]);
        let value = tmpResult.get(connection.provider_id);
        let name;
        if (value != null) {
          name = value.name;
        }
        stringResult = name;
      }
      if (stringResult == null) {
        const intl = connection(tmp2[8]).intl;
        stringResult = intl.string(connection(tmp2[8]).t.NzCoRx);
      }
      if (null != connection.description) {
        let description;
        if (connection.description.length > 0) {
          description = connection.description;
        }
        const tmp8 = connection;
        let obj2 = connection(tmp2[10]);
        const startProviderConnection = obj2.useStartProviderConnection(connection.provider_id);
        startConnection = startProviderConnection.startConnection;
        ({ hasConnection, canConnect, loading } = startProviderConnection);
        const items = [startConnection, guildId, connection.provider_id, _location];
        const items1 = [connection.provider_id, tmp3];
        const callback = startConnection.useCallback(
          _asyncToGenerator(async () => {
            let provider_id;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    const obj4 = { connection_type: "provider", provider_id, location: _location };
                    const track = v3(c2[11]).track;
                    const GUILD_ONBOARDING_CONNECTION_CLICKED = constants.GUILD_ONBOARDING_CONNECTION_CLICKED;
                    const tmp14 = v3(c2[11]);
                    const obj6 = provider_id(c2[12]);
                    const merged = Object.assign(obj6.collectGuildAnalyticsMetadata(guildId));
                    provider_id = connection.provider_id ?? undefined;
                    track(GUILD_ONBOARDING_CONNECTION_CLICKED, obj4);
                    c2 = 1;
                    v3 = 1;
                    const obj5 = { value: startConnection("Guild Onboarding"), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp8) {
                v3 = 3;
                throw tmp8;
              }
            }
          }),
          items,
        );
        const memo = startConnection.useMemo(() => {
          if (null != connection.provider_id) {
            const obj = PlatformsDefault;
            const value = obj.get(tmp.provider_id);
            let icon1;
            const makeSource = AvatarUtils.makeSource;
            AvatarUtils;
            if (value != null) {
              icon1 = value.icon;
            }
            let tmp12 = null;
            if (null != icon1) {
              const icon = value.icon;
              const obj2 = shared;
              tmp12 = obj2.isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG;
            }
            const source = makeSource(tmp12);
            return jsx(native.Icon, { source, style: { width: 32, height: 32 }, disableColor: true });
          } else {
            return jsx(LinkIcon.LinkIcon, { size: "lg", color: "text-subtle" });
          }
        }, items1);
        return jsx(tmp(tmp2[17]), {
          displayName: stringResult,
          description,
          icon: memo,
          isLoading: loading,
          isConnected: hasConnection,
          canConnect,
          onConnect: callback,
        });
      }
      description = tmp(tmp2[9])(connection.provider_id);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ProviderConnectionCard.tsx");

export default tmp2;
