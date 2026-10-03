// === Module 17708: GuildSettingsModalIntegrations ===

// Module 17708 (GuildSettingsModalIntegrations)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;

const require = globalThis.__r;

const require = fn;
const Image = fn(17).Image;
const Constants = fn(1085);
({ GuildSettingsSections: metroRequire, PlatformTypes } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let items = [, ];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
const createStyles = fn(4890);
let obj2 = { screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, screenContent: null, platformIcon: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.screenContent = { paddingTop: nativeDefault.space.PX_16 };
obj2.platformIcon = { width: 24, height: 24 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((contentContainerStyle) => {
  const cResult = require("c").c(41);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const obj = require("c");
  const token = require("useToken").useToken(navigation(stateFromStores[7]).modules.mobile.TABLE_ROW_PADDING);
  const tmp6 = closure_11();
  _require = tmp6;
  let obj2 = require("useToken");
  navigation = require("useNavigation").useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [GuildSettingsStore];
    const fn = function u() {
      return GuildSettingsStore.getGuild();
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
    const items2 = [c4];
    cResult[3] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class R {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_4;
          guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = R;
  } else {
    class R {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_4;
          guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp13, R);
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  closure_3 = tmp4(tmp2[13])();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_4;
          guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    const items3 = [GuildSettingsStore];
    const fn2 = function w() {
      return GuildSettingsStore.getProps().integrations;
    };
    cResult[6] = items3;
    cResult[7] = fn2;
    let tmp18 = fn2;
    const tmp17 = items3;
  } else {
    class R {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_4;
          guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    tmp18 = cResult[7];
  }
  const tmpResult4 = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp17, tmp18);
  if (stateFromStores1 != null) {
    class R {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_4;
          guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  }
  c4 = tmp20;
  const tmpResult5 = require("initialize");
  if (stateFromStores != null) {
    class R {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_4;
          guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  }
  const tmp21 = require("useChannelsAllowedToUnlink").useChannelsAllowedToUnlink(undefined).length > 0;
  if (canManageGuild) {
    class R {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_4;
          guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    if (tmp20 != null) {
      class R {
        constructor() {
          if (null == closure_2) {
            guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
          } else {
            tmp2 = closure_4;
            guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
          }
          return guildPermissionProps;
        }
      }
    }
    if (tmp22 == null) {
      class R {
        constructor() {
          if (null == closure_2) {
            guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
          } else {
            tmp2 = closure_4;
            guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
          }
          return guildPermissionProps;
        }
      }
    }
    canManageGuild = tmp22 > 0;
  }
  if (null == stateFromStores) {
    class R {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_4;
          guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  } else {
    class R {
      constructor() {
        if (null == closure_2) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          tmp2 = closure_4;
          guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    const Form = tmp(tmp2[15]).Form;
    if (cResult[8] === contentContainerStyle) {
      class R {
        constructor() {
          if (null == closure_2) {
            guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
          } else {
            tmp2 = closure_4;
            guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
          }
          return guildPermissionProps;
        }
      }
      const Stack = tmp(tmp2[16]).Stack;
      if (cResult[11] !== token) {
        class R {
          constructor() {
            if (null == closure_2) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              tmp2 = closure_4;
              guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
        tmp25[0] = token;
        cResult[11] = token;
        cResult[12] = tmp25;
      } else {
        class R {
          constructor() {
            if (null == closure_2) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              tmp2 = closure_4;
              guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
      }
      tmp4(tmp2[7]);
      const TableRowGroup = tmp(tmp2[17]).TableRowGroup;
      if (cResult[13] === canManageWebhooks) {
        class R {
          constructor() {
            if (null == closure_2) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              tmp2 = closure_4;
              guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
        if (cResult[16] === canManageWebhooks) {
          class R {
            constructor() {
              if (null == closure_2) {
                guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
              } else {
                tmp2 = closure_4;
                guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
              }
              return guildPermissionProps;
            }
          }
          if (cResult[19] === navigation) {
            class R {
              constructor() {
                if (null == closure_2) {
                  guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                } else {
                  tmp2 = closure_4;
                  guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
                }
                return guildPermissionProps;
              }
            }
            if (canManageGuild) {
              class R {
                constructor() {
                  if (null == closure_2) {
                    guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                  } else {
                    tmp2 = closure_4;
                    guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
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
                  value = navigation(stateFromStores[23]).get(item);
                  if (null == value) {
                    return null;
                  } else {
                    const obj3 = { label: value.name, subLabel: null, icon: null, arrow: true, onPress: null };
                    const intl = platformType(stateFromStores[19]).intl;
                    const obj4 = { platformName: value.name };
                    obj3.subLabel = intl.formatToPlainString(platformType(stateFromStores[19]).t.VXU4EU, obj4);
                    const obj5 = platformType(stateFromStores[24]);
                    let icon = value.icon;
                    const obj7 = { source: obj5.makeSource(platformType(stateFromStores[25]).isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
                    icon = closure_1_7(closure_3, obj7);
                    obj3.icon = icon;
                    obj3.onPress = function onPress() {
                      return navigation.push(constants.INTEGRATION_PLATFORM, { platformType });
                    };
                    closure_1_7(platformType(stateFromStores[18]).TableRow, obj3, item);
                    const obj6 = platformType(stateFromStores[25]);
                  }
                  const obj2 = navigation(stateFromStores[23]);
                } else {
                  return null;
                }
              });
            }
            if (cResult[22] === TableRowGroup) {
              class R {
                constructor() {
                  if (null == closure_2) {
                    guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                  } else {
                    tmp2 = closure_4;
                    guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
                  }
                  return guildPermissionProps;
                }
              }
            }
            let obj4 = { hasIcons: true, children: null };
            const items4 = [tmp27, tmp29, tmp31, canManageGuild];
            obj4.children = items4;
            const tmp35 = closure_8(TableRowGroup, obj4);
            cResult[22] = TableRowGroup;
            cResult[23] = tmp27;
            cResult[24] = tmp29;
            cResult[25] = tmp31;
            cResult[26] = canManageGuild;
            cResult[27] = tmp35;
          }
          let tmp32 = tmp21;
          if (tmp21) {
            class R {
              constructor() {
                if (null == closure_2) {
                  guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                } else {
                  tmp2 = closure_4;
                  guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
                }
                return guildPermissionProps;
              }
            }
            let obj5 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
            const intl5 = tmp(tmp2[19]).intl;
            obj5.label = intl5.string(tmp(tmp2[19]).t.tqtDXC);
            const intl6 = tmp(tmp2[19]).intl;
            obj5.subLabel = intl6.string(tmp(tmp2[19]).t.v8819e);
            obj5.icon = closure_7(tmp(tmp2[22]).RefreshIcon, {});
            obj5.onPress = function onPress() {
              return navigation.push(constants.LOBBIES_LINKED);
            };
            tmp32 = closure_7(tmp(tmp2[18]).TableRow, obj5);
          }
          cResult[19] = navigation;
          cResult[20] = tmp21;
          cResult[21] = tmp32;
        }
        let tmp30 = canManageWebhooks;
        if (canManageWebhooks) {
          class R {
            constructor() {
              if (null == closure_2) {
                guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
              } else {
                tmp2 = closure_4;
                guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
              }
              return guildPermissionProps;
            }
          }
          let obj6 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
          const intl3 = tmp(tmp2[19]).intl;
          obj6.label = intl3.string(tmp(tmp2[19]).t.OrV60r);
          const intl4 = tmp(tmp2[19]).intl;
          obj6.subLabel = intl4.string(tmp(tmp2[19]).t.rQREJl);
          obj6.icon = closure_7(tmp(tmp2[21]).ChannelsFollowedIcon, {});
          obj6.onPress = function onPress() {
            return navigation.push(constants.CHANNELS_FOLLOWED);
          };
          tmp30 = closure_7(tmp(tmp2[18]).TableRow, obj6);
        }
        cResult[16] = canManageWebhooks;
        cResult[17] = navigation;
        cResult[18] = tmp30;
      }
      let tmp28 = canManageWebhooks;
      if (canManageWebhooks) {
        class R {
          constructor() {
            if (null == closure_2) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              tmp2 = closure_4;
              guildPermissionProps = closure_4.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
        let obj7 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
        let intl = tmp(tmp2[19]).intl;
        obj7.label = intl.string(tmp(tmp2[19]).t.jp25Id);
        const intl2 = tmp(tmp2[19]).intl;
        obj7.subLabel = intl2.string(tmp(tmp2[19]).t.mKIOkI);
        obj7.icon = closure_7(tmp(tmp2[20]).WebhookIcon, {});
        obj7.onPress = function onPress() {
          return navigation.push(constants.WEBHOOKS);
        };
        tmp28 = closure_7(tmp(tmp2[18]).TableRow, obj7);
      }
      cResult[13] = canManageWebhooks;
      cResult[14] = navigation;
      cResult[15] = tmp28;
    }
    const items5 = [tmp6.screenContent, contentContainerStyle];
    cResult[8] = contentContainerStyle;
    cResult[9] = tmp6.screenContent;
    cResult[10] = items5;
  }
  const tmpResult6 = require("useChannelsAllowedToUnlink");
}) : ((contentContainerStyle) => {
  _require = undefined;
  importDefault = undefined;
  let stateFromStores;
  let found;
  const token = require("useToken").useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_11();
  _require = tmp5;
  const obj = require("useToken");
  const tmp3 = importDefault;
  importDefault = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  items = [GuildSettingsStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildSettingsStore.getGuild(), []);
  let obj3 = require("initialize");
  const items1 = [found];
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
  const items2 = [GuildSettingsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => GuildSettingsStore.getProps().integrations);
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
    obj7.spacing = tmp3(tmp2[7]).space.PX_24;
    let tmp15Result = canManageWebhooks;
    if (canManageWebhooks) {
      const obj9 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      let intl = tmp(tmp2[19]).intl;
      obj9.label = intl.string(tmp(tmp2[19]).t.jp25Id);
      const intl2 = tmp(tmp2[19]).intl;
      obj9.subLabel = intl2.string(tmp(tmp2[19]).t.mKIOkI);
      obj9.icon = closure_7(tmp(tmp2[20]).WebhookIcon, {});
      obj9.onPress = function onPress() {
        return closure_1.push(constants.WEBHOOKS);
      };
      tmp15Result = closure_7(tmp(tmp2[18]).TableRow, obj9);
    }
    const items4 = [tmp15Result, , , ];
    if (canManageWebhooks) {
      const obj10 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl3 = tmp(tmp2[19]).intl;
      obj10.label = intl3.string(tmp(tmp2[19]).t.OrV60r);
      const intl4 = tmp(tmp2[19]).intl;
      obj10.subLabel = intl4.string(tmp(tmp2[19]).t.rQREJl);
      obj10.icon = closure_7(tmp(tmp2[21]).ChannelsFollowedIcon, {});
      obj10.onPress = function onPress() {
        return closure_1.push(constants.CHANNELS_FOLLOWED);
      };
      canManageWebhooks = closure_7(tmp(tmp2[18]).TableRow, obj10);
    }
    items4[1] = canManageWebhooks;
    if (tmp15Result2) {
      const obj11 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl5 = tmp(tmp2[19]).intl;
      obj11.label = intl5.string(tmp(tmp2[19]).t.tqtDXC);
      const intl6 = tmp(tmp2[19]).intl;
      obj11.subLabel = intl6.string(tmp(tmp2[19]).t.v8819e);
      obj11.icon = closure_7(tmp(tmp2[22]).RefreshIcon, {});
      obj11.onPress = function onPress() {
        return closure_1.push(constants.LOBBIES_LINKED);
      };
      tmp15Result2 = closure_7(tmp(tmp2[18]).TableRow, obj11);
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
          value = closure_1(stateFromStores[23]).get(item);
          if (null == value) {
            return null;
          } else {
            const obj3 = { label: value.name, subLabel: null, icon: null, arrow: true, onPress: null };
            const intl = platformType(stateFromStores[19]).intl;
            const obj4 = { platformName: value.name };
            obj3.subLabel = intl.formatToPlainString(platformType(stateFromStores[19]).t.VXU4EU, obj4);
            const obj5 = platformType(stateFromStores[24]);
            let icon = value.icon;
            const obj7 = { source: obj5.makeSource(platformType(stateFromStores[25]).isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
            icon = closure_1_7(closure_3, obj7);
            obj3.icon = icon;
            obj3.onPress = function onPress() {
              return closure_1.push(constants.INTEGRATION_PLATFORM, { platformType });
            };
            closure_1_7(platformType(stateFromStores[18]).TableRow, obj3, item);
            const obj6 = platformType(stateFromStores[25]);
          }
          const obj2 = closure_1(stateFromStores[23]);
        } else {
          return null;
        }
      });
    }
    const obj12 = { children: null };
    const obj13 = { hasIcons: true, children: null };
    items4[3] = canManageGuild;
    obj13.children = items4;
    obj7.children = closure_8(tmp(tmp2[17]).TableRowGroup, obj13);
    obj6.children = closure_7(tmp(tmp2[16]).Stack, obj7);
    const items5 = [closure_7(tmp(tmp2[15]).Form, obj6), closure_7(tmp(tmp2[26]).NavScrim, {})];
    obj12.children = items5;
    tmp13Result = closure_8(closure_9, obj12);
  }
  return tmp11;
});
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;