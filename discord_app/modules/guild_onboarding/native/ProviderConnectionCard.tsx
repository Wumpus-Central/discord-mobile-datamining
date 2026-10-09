// discord_app/modules/guild_onboarding/native/ProviderConnectionCard.tsx
import native from "../../../design/void/native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import shared from "../../../design/shared.tsx";
import LinkIcon2 from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ProviderConnectionCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ProviderConnectionCard(connection) {
      let LinkIcon = _require;
      const cResult = require("c").c(25);
      connection = connection.connection;
      _require = connection;
      const guildId = connection.guildId;
      _location = connection.location;
      const tmp4 = guildId(_location[6])();
      if (cResult[0] !== connection.provider_id) {
        let stringResult = null;
        if (null != connection.provider_id) {
          value = tmp3(tmp[7]).get(connection.provider_id);
          let name;
          if (value != null) {
            name = value.name;
          }
          stringResult = name;
          const tmp3Result = tmp3(tmp[7]);
        }
        if (stringResult == null) {
          const intl = LinkIcon(tmp[8]).intl;
          stringResult = intl.string(LinkIcon(tmp[8]).t.NzCoRx);
        }
        cResult[0] = connection.provider_id;
        cResult[1] = stringResult;
        let tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === connection.description) {
        if (cResult[3] === connection.provider_id) {
          const startProviderConnection = LinkIcon(tmp[10]).useStartProviderConnection(connection.provider_id);
          ({ hasConnection, canConnect, startConnection } = startProviderConnection);
          const loading = startProviderConnection.loading;
          if (cResult[5] === connection.provider_id) {
            if (cResult[6] === guildId) {
              if (cResult[7] === _location) {
                if (cResult[8] === startConnection) {
                  let tmp13 = cResult[9];
                }
                if (null == connection.provider_id) {
                  const _Symbol2 = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    LinkIcon = LinkIcon(tmp[16]).LinkIcon;
                    const tmp30 = <LinkIcon size="lg" color="text-subtle" />;
                    cResult[16] = tmp30;
                  }
                } else {
                  if (cResult[10] === connection.provider_id) {
                    if (cResult[11] === tmp4) {
                      let tmp16 = cResult[12];
                    }
                    const _Symbol = Symbol;
                    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                      const size = { width: 32, height: 32 };
                      cResult[13] = size;
                      let tmp23 = size;
                    } else {
                      tmp23 = cResult[13];
                    }
                    if (cResult[14] !== tmp16) {
                      let obj2 = { source: tmp16, style: tmp23, disableColor: true };
                      const tmp26 = jsx(LinkIcon(tmp[15]).Icon, { source: tmp16, style: tmp23, disableColor: true });
                      cResult[14] = tmp16;
                      cResult[15] = tmp26;
                      let tmp24 = tmp26;
                    } else {
                      tmp24 = cResult[15];
                    }
                    if (cResult[17] === canConnect) {
                      if (cResult[18] === tmp10) {
                        if (cResult[19] === tmp5) {
                          if (cResult[20] === tmp13) {
                            if (cResult[21] === hasConnection) {
                              if (cResult[22] === tmp24) {
                                if (cResult[23] === loading) {
                                  let tmp32 = cResult[24];
                                }
                                return tmp32;
                              }
                            }
                          }
                        }
                      }
                    }
                    let obj3 = {
                      displayName: tmp5,
                      description: tmp10,
                      icon: tmp24,
                      isLoading: loading,
                      isConnected: hasConnection,
                      canConnect,
                      onConnect: tmp13,
                    };
                    const tmp34 = jsx(tmp3(tmp[17]), {
                      displayName: tmp5,
                      description: tmp10,
                      icon: tmp24,
                      isLoading: loading,
                      isConnected: hasConnection,
                      canConnect,
                      onConnect: tmp13,
                    });
                    cResult[17] = canConnect;
                    cResult[18] = tmp10;
                    cResult[19] = tmp5;
                    cResult[20] = tmp13;
                    cResult[21] = hasConnection;
                    cResult[22] = tmp24;
                    cResult[23] = loading;
                    cResult[24] = tmp34;
                    tmp32 = tmp34;
                  }
                  value2 = tmp3(tmp[7]).get(connection.provider_id);
                  const tmp3Result2 = tmp3(tmp[7]);
                  let icon1;
                  if (value2 != null) {
                    icon1 = value2.icon;
                  }
                  if (null == icon1) {
                    const source = LinkIconResult1.makeSource(null);
                    cResult[10] = connection.provider_id;
                    cResult[11] = tmp4;
                    cResult[12] = source;
                    tmp16 = source;
                  } else {
                    const icon = value2.icon;
                    LinkIcon(tmp[14]).isThemeDark(tmp4) ? icon.darkPNG : icon.lightPNG;
                    const LinkIconResult2 = LinkIcon(tmp[14]);
                  }
                  LinkIconResult1 = LinkIcon(tmp[13]);
                }
              }
            }
          }
          _require = startConnection(function* () {
            if (c1 === 2) {
              c1 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
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
                    const obj4 = {};
                    const obj5 = guildId(_location[11]);
                    const merged = Object.assign(provider_id(_location[12]).collectGuildAnalyticsMetadata(c1));
                    obj4.connection_type = "provider";
                    provider_id = provider_id.provider_id;
                    if (provider_id == null) {
                      provider_id = undefined;
                    }
                    obj4.provider_id = provider_id;
                    obj4.location = _location;
                    obj5.track(constants.GUILD_ONBOARDING_CONNECTION_CLICKED, obj4);
                    _location = 1;
                    c1 = 1;
                    const obj6 = { value: startConnection("Guild Onboarding"), done: false };
                    return obj6;
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
              } catch (tmp9) {
                c1 = tmp;
                throw tmp9;
              }
            }
          });
          function t3() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          cResult[5] = connection.provider_id;
          cResult[6] = guildId;
          cResult[7] = _location;
          cResult[8] = startConnection;
          cResult[9] = t3;
          tmp13 = t3;
          const LinkIconResult = LinkIcon(tmp[10]);
        }
      }
      if (null == connection.description) {
        let description = tmp3(tmp[9])(connection.provider_id);
        cResult[2] = connection.description;
        cResult[3] = connection.provider_id;
        cResult[4] = description;
      }
      description = connection.description;
      let obj = require("c");
    }
  : function ProviderConnectionCard(connection) {
      connection = connection.connection;
      const guildId = connection.guildId;
      const _location = connection.location;
      let startConnection;
      const tmp3 = guildId(_location[6])();
      asyncGeneratorStep = tmp3;
      let stringResult = null;
      if (null != connection.provider_id) {
        value = tmp(tmp2[7]).get(connection.provider_id);
        let name;
        if (value != null) {
          name = value.name;
        }
        stringResult = name;
        const tmpResult = tmp(tmp2[7]);
      }
      if (stringResult == null) {
        const intl = connection(tmp2[8]).intl;
        stringResult = intl.string(connection(tmp2[8]).t.NzCoRx);
      }
      if (null != connection.description) {
        if (connection.description.length > 0) {
          let description = connection.description;
        }
        const startProviderConnection = connection(tmp2[10]).useStartProviderConnection(connection.provider_id);
        startConnection = startProviderConnection.startConnection;
        ({ hasConnection, canConnect, loading } = startProviderConnection);
        const items = [startConnection, guildId, connection.provider_id, _location];
        const items1 = [connection.provider_id, tmp3];
        const callback = startConnection.useCallback(
          asyncGeneratorStep(async () => {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
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
                if (0 === dependencyMap) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    const obj4 = {};
                    const obj5 = v3(1265);
                    const merged = Object.assign(provider_id(5106).collectGuildAnalyticsMetadata(guildId));
                    obj4.connection_type = "provider";
                    provider_id = connection.provider_id;
                    if (provider_id == null) {
                      provider_id = undefined;
                    }
                    obj4.provider_id = provider_id;
                    obj4.location = _location;
                    obj5.track(constants.GUILD_ONBOARDING_CONNECTION_CLICKED, obj4);
                    dependencyMap = 1;
                    v3 = 1;
                    const obj6 = { value: startConnection("Guild Onboarding"), done: false };
                    return obj6;
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
              } catch (tmp9) {
                v3 = tmp;
                throw tmp9;
              }
            }
          }),
          items,
        );
        const memo = startConnection.useMemo(() => {
          if (null != connection.provider_id) {
            value = PlatformsDefault.get(tmp.provider_id);
            let icon1;
            if (value != null) {
              icon1 = value.icon;
            }
            if (null == icon1) {
              const source = obj2.makeSource(null);
              const obj4 = { source, style: { width: 32, height: 32 }, disableColor: true };
              return jsx(native.Icon, { source, style: { width: 32, height: 32 }, disableColor: true });
            } else {
              const icon = value.icon;
              shared.isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG;
            }
            obj2 = AvatarUtils;
          } else {
            return jsx(LinkIcon2.LinkIcon, { size: "lg", color: "text-subtle" });
          }
        }, items1);
        let obj = {
          displayName: stringResult,
          description,
          icon: memo,
          isLoading: loading,
          isConnected: hasConnection,
          canConnect,
          onConnect: callback,
        };
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
