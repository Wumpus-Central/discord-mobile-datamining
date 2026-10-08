// === Module 18065: GuildSettingsModalIntegrations ===

// Module 18065 (GuildSettingsModalIntegrations)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8614 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1085);
({ GuildSettingsSections: hasOwnProperty, PlatformTypes } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let items = [, ];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
const createStyles = fn(5090);
let obj2 = { screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, screenContent: null, platformIcon: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.screenContent = { paddingTop: nativeDefault.space.PX_16 };
obj2.platformIcon = { width: 24, height: 24 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalIntegrations(contentContainerStyle) {
  const cResult = require("c").c(41);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const obj = require("c");
  const token = require("useToken").useToken(navigation(stateFromStores[6]).modules.mobile.TABLE_ROW_PADDING);
  const tmp6 = closure_10();
  _require = tmp6;
  let obj2 = require("useToken");
  const tmp4 = navigation;
  navigation = require("useNavigation").useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [c4];
    const fn = function c() {
      return _undefined.getGuild();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp10 = items1;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9, tmp10] = cResult;
  }
  let obj3 = require("useNavigation");
  stateFromStores = require("initialize").useStateFromStores(tmp8, tmp9, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[3] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class N {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_3;
          guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = N;
  } else {
    class N {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_3;
          guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp13, N);
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  PermissionStore = tmp4(tmp2[12])();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_3;
          guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    const items3 = [c4];
    class G {
      constructor() {
        return closure_4.getProps().integrations;
      }
    }
    cResult[6] = items3;
    cResult[7] = G;
    let tmp18 = G;
    const tmp17 = items3;
  } else {
    class N {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_3;
          guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    tmp18 = cResult[7];
  }
  const tmpResult4 = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp17, tmp18);
  if (stateFromStores1 != null) {
    class N {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_3;
          guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  }
  c4 = tmp20;
  const tmpResult5 = require("initialize");
  if (stateFromStores != null) {
    class N {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_3;
          guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  }
  const tmp21 = require("useChannelsAllowedToUnlink").useChannelsAllowedToUnlink(undefined).length > 0;
  if (canManageGuild) {
    class N {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_3;
          guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    if (tmp20 != null) {
      class N {
        constructor() {
          if (null == closure_2) {
            guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
          } else {
            tmp2 = closure_3;
            guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
          }
          return guildPermissionProps;
        }
      }
    }
    if (tmp22 == null) {
      class N {
        constructor() {
          if (null == closure_2) {
            guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
          } else {
            tmp2 = closure_3;
            guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
          }
          return guildPermissionProps;
        }
      }
    }
    class G {
      constructor() {
        return closure_4.getProps().integrations;
      }
    }
  }
  if (null == stateFromStores) {
    class N {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_3;
          guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  } else {
    class N {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_3;
          guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    const Form = tmp(tmp2[14]).Form;
    if (cResult[8] === contentContainerStyle) {
      class N {
        constructor() {
          if (null == closure_2) {
            guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
          } else {
            tmp2 = closure_3;
            guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
          }
          return guildPermissionProps;
        }
      }
      const Stack = tmp(tmp2[15]).Stack;
      if (cResult[11] !== token) {
        class N {
          constructor() {
            if (null == closure_2) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              tmp2 = closure_3;
              guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
        tmp26[0] = token;
        class G {
          constructor() {
            return closure_4.getProps().integrations;
          }
        }
        cResult[12] = tmp26;
      } else {
        class N {
          constructor() {
            if (null == closure_2) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              tmp2 = closure_3;
              guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
      }
      class G {
        constructor() {
          return closure_4.getProps().integrations;
        }
      }
      const TableRowGroup = tmp(tmp2[16]).TableRowGroup;
      if (cResult[13] === canManageWebhooks) {
        class N {
          constructor() {
            if (null == closure_2) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              tmp2 = closure_3;
              guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
        if (cResult[16] === canManageWebhooks) {
          class N {
            constructor() {
              if (null == closure_2) {
                guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
              } else {
                tmp2 = closure_3;
                guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
              }
              return guildPermissionProps;
            }
          }
          if (cResult[19] === navigation) {
            class N {
              constructor() {
                if (null == closure_2) {
                  guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                } else {
                  tmp2 = closure_3;
                  guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
                }
                return guildPermissionProps;
              }
            }
            if (canManageGuild) {
              class N {
                constructor() {
                  if (null == closure_2) {
                    guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                  } else {
                    tmp2 = closure_3;
                    guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
                  }
                  return guildPermissionProps;
                }
              }
              canManageGuild = items.map((item) => {
                const platformType = item;
                let someResult;
                if (_undefined != null) {
                  someResult = _undefined.some((type) => type.type === closure_0);
                }
                if (someResult) {
                  value = navigation(stateFromStores[22]).get(item);
                  if (null == value) {
                    return null;
                  } else {
                    const obj3 = { label: value.name, subLabel: null, icon: null, arrow: true, onPress: null };
                    const intl = platformType(stateFromStores[18]).intl;
                    const obj4 = { platformName: value.name };
                    obj3.subLabel = intl.formatToPlainString(platformType(stateFromStores[18]).t.VXU4EU, obj4);
                    const tmp2Result = navigation(stateFromStores[23]);
                    const obj5 = platformType(stateFromStores[24]);
                    let icon = value.icon;
                    const obj7 = { source: obj5.makeSource(platformType(stateFromStores[25]).isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
                    icon = closure_1_6(tmp2Result, obj7);
                    obj3.icon = icon;
                    obj3.onPress = function onPress() {
                      return navigation.push(constants.INTEGRATION_PLATFORM, { platformType });
                    };
                    closure_1_6(platformType(stateFromStores[17]).TableRow, obj3, item);
                    const obj6 = platformType(stateFromStores[25]);
                  }
                  const obj2 = navigation(stateFromStores[22]);
                } else {
                  return null;
                }
              });
            }
            if (cResult[22] === TableRowGroup) {
              class N {
                constructor() {
                  if (null == closure_2) {
                    guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                  } else {
                    tmp2 = closure_3;
                    guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
                  }
                  return guildPermissionProps;
                }
              }
            }
            class G {
              constructor() {
                return closure_4.getProps().integrations;
              }
            }
            let obj4 = { hasIcons: true, children: null };
            const items4 = [tmp27, canManageWebhooks, tmp31, canManageGuild];
            obj4.children = items4;
            const tmp34 = closure_7(TableRowGroup, obj4);
            cResult[22] = TableRowGroup;
            cResult[23] = tmp27;
            cResult[24] = canManageWebhooks;
            cResult[25] = tmp31;
            cResult[26] = canManageGuild;
            cResult[27] = tmp34;
          }
          class G {
            constructor() {
              return closure_4.getProps().integrations;
            }
          }
          cResult[19] = navigation;
          cResult[20] = tmp21;
          cResult[21] = tmp21;
        }
        class G {
          constructor() {
            return closure_4.getProps().integrations;
          }
        }
        cResult[16] = canManageWebhooks;
        cResult[17] = navigation;
        cResult[18] = canManageWebhooks;
      }
      let tmp28 = canManageWebhooks;
      if (canManageWebhooks) {
        class N {
          constructor() {
            if (null == closure_2) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              tmp2 = closure_3;
              guildPermissionProps = closure_3.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
        let obj5 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
        class G {
          constructor() {
            return closure_4.getProps().integrations;
          }
        }
        obj5.label = obj9.string(tmp(tmp2[18]).t.jp25Id);
        let intl = tmp(tmp2[18]).intl;
        obj5.subLabel = intl.string(tmp(tmp2[18]).t.mKIOkI);
        obj5.icon = closure_6(tmp(tmp2[19]).WebhookIcon, {});
        obj5.onPress = function onPress() {
          return navigation.push(constants.WEBHOOKS);
        };
        tmp28 = closure_6(tmp(tmp2[17]).TableRow, obj5);
      }
      cResult[13] = canManageWebhooks;
      cResult[14] = navigation;
      cResult[15] = tmp28;
    }
    class G {
      constructor() {
        return closure_4.getProps().integrations;
      }
    }
    tmp24[0] = tmp6.screenContent;
    tmp24[1] = contentContainerStyle;
    cResult[8] = contentContainerStyle;
    cResult[9] = tmp6.screenContent;
    cResult[10] = tmp24;
  }
  const tmpResult6 = require("useChannelsAllowedToUnlink");
}) : (function GuildSettingsModalIntegrations(contentContainerStyle) {
  _require = undefined;
  importDefault = undefined;
  let stateFromStores;
  closure_3 = undefined;
  let found;
  const token = require("useToken").useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_10();
  _require = tmp5;
  const obj = require("useToken");
  const tmp3 = importDefault;
  importDefault = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  items = [found];
  stateFromStores = require("initialize").useStateFromStores(items, () => found.getGuild(), []);
  let obj3 = require("initialize");
  const items1 = [closure_3];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => {
    if (null == stateFromStores) {
      let guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
    } else {
      guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
    }
    return guildPermissionProps;
  });
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  closure_3 = require("useTheme")();
  let obj4 = require("initialize");
  const items2 = [found];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => found.getProps().integrations);
  found = undefined;
  if (stateFromStores1 != null) {
    found = stateFromStores1.filter((type) => items.includes(type.type));
  }
  let obj5 = require("initialize");
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp15Result2 = require("useChannelsAllowedToUnlink").useChannelsAllowedToUnlink(id).length > 0;
  if (canManageGuild) {
    let num;
    if (found != null) {
      num = found.length;
    }
    if (num == null) {
      num = 0;
    }
    canManageGuild = num > 0;
  }
  let tmp11 = null;
  if (null != stateFromStores) {
    if (!canManageWebhooks) {
      if (!tmp15Result2) {
        let tmp13Result = null;
      }
      tmp11 = tmp13Result;
    }
    let obj6 = { style: tmp5.screenContainer, contentContainerStyle: null, children: null };
    const items3 = [tmp5.screenContent, contentContainerStyle.contentContainerStyle];
    obj6.contentContainerStyle = items3;
    let obj7 = { style: null, spacing: null, children: null };
    const obj8 = { paddingHorizontal: token };
    obj7.style = obj8;
    obj7.spacing = tmp3(tmp2[6]).space.PX_24;
    let tmp15Result = canManageWebhooks;
    if (canManageWebhooks) {
      const obj9 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      let intl = tmp(tmp2[18]).intl;
      obj9.label = intl.string(tmp(tmp2[18]).t.jp25Id);
      const intl2 = tmp(tmp2[18]).intl;
      obj9.subLabel = intl2.string(tmp(tmp2[18]).t.mKIOkI);
      obj9.icon = closure_6(tmp(tmp2[19]).WebhookIcon, {});
      obj9.onPress = function onPress() {
        return closure_1.push(constants.WEBHOOKS);
      };
      tmp15Result = closure_6(tmp(tmp2[17]).TableRow, obj9);
    }
    const items4 = [tmp15Result, , , ];
    if (canManageWebhooks) {
      const obj10 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl3 = tmp(tmp2[18]).intl;
      obj10.label = intl3.string(tmp(tmp2[18]).t.OrV60r);
      const intl4 = tmp(tmp2[18]).intl;
      obj10.subLabel = intl4.string(tmp(tmp2[18]).t.rQREJl);
      obj10.icon = closure_6(tmp(tmp2[20]).ChannelsFollowedIcon, {});
      obj10.onPress = function onPress() {
        return closure_1.push(constants.CHANNELS_FOLLOWED);
      };
      canManageWebhooks = closure_6(tmp(tmp2[17]).TableRow, obj10);
    }
    items4[1] = canManageWebhooks;
    if (tmp15Result2) {
      const obj11 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl5 = tmp(tmp2[18]).intl;
      obj11.label = intl5.string(tmp(tmp2[18]).t.tqtDXC);
      const intl6 = tmp(tmp2[18]).intl;
      obj11.subLabel = intl6.string(tmp(tmp2[18]).t.v8819e);
      obj11.icon = closure_6(tmp(tmp2[21]).RefreshIcon, {});
      obj11.onPress = function onPress() {
        return closure_1.push(constants.LOBBIES_LINKED);
      };
      tmp15Result2 = closure_6(tmp(tmp2[17]).TableRow, obj11);
    }
    items4[2] = tmp15Result2;
    if (canManageGuild) {
      canManageGuild = items.map((item) => {
        const platformType = item;
        let someResult;
        if (found != null) {
          someResult = found.some((type) => type.type === closure_0);
        }
        if (someResult) {
          value = closure_1(stateFromStores[22]).get(item);
          if (null == value) {
            return null;
          } else {
            const obj3 = { label: value.name, subLabel: null, icon: null, arrow: true, onPress: null };
            const intl = platformType(stateFromStores[18]).intl;
            const obj4 = { platformName: value.name };
            obj3.subLabel = intl.formatToPlainString(platformType(stateFromStores[18]).t.VXU4EU, obj4);
            const tmp2Result = closure_1(stateFromStores[23]);
            const obj5 = platformType(stateFromStores[24]);
            let icon = value.icon;
            const obj7 = { source: obj5.makeSource(platformType(stateFromStores[25]).isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
            icon = closure_1_6(tmp2Result, obj7);
            obj3.icon = icon;
            obj3.onPress = function onPress() {
              return closure_1.push(constants.INTEGRATION_PLATFORM, { platformType });
            };
            closure_1_6(platformType(stateFromStores[17]).TableRow, obj3, item);
            const obj6 = platformType(stateFromStores[25]);
          }
          const obj2 = closure_1(stateFromStores[22]);
        } else {
          return null;
        }
      });
    }
    const obj12 = { children: null };
    const obj13 = { hasIcons: true, children: null };
    items4[3] = canManageGuild;
    obj13.children = items4;
    obj7.children = closure_7(tmp(tmp2[16]).TableRowGroup, obj13);
    obj6.children = closure_6(tmp(tmp2[15]).Stack, obj7);
    const items5 = [closure_6(tmp(tmp2[14]).Form, obj6), closure_6(tmp(tmp2[26]).NavScrim, {})];
    obj12.children = items5;
    tmp13Result = closure_7(closure_8, obj12);
  }
  return tmp11;
});
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;