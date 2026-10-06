// === Module 17778: GuildSettingsModalIntegrations ===

// Module 17778 (GuildSettingsModalIntegrations)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9283 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, contentContainerStyle, importDefault, navigation;

let PlatformTypes;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const Image = react_native.Image;
({ GuildSettingsSections: metroRequire, PlatformTypes } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let items = [, ];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
let createStyles = createStyles_mod;
let obj = { screenContainer: obj2, screenContent: obj3, platformIcon: { width: 24, height: 24 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((contentContainerStyle) => {
  let _undefined;
  let canManageGuild;
  let canManageWebhooks;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items4;
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp17;
  let tmp18;
  let tmp8;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(41);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  let obj2 = require("useToken");
  const token = obj2.useToken(navigation(stateFromStores[7]).modules.mobile.TABLE_ROW_PADDING);
  const tmp6 = closure_11();
  _require = tmp6;
  let obj3 = require("useNavigation");
  navigation = obj3.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [GuildSettingsStore];
    const fn = function u() {
      return GuildSettingsStore.getGuild();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp9 = fn;
    tmp10 = items1;
    tmp8 = items;
  } else {
    [tmp8, tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(stateFromStores[12]);
  stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [c4];
    cResult[3] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class R {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = R;
  } else {
    class R {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  }
  const tmpResult4 = tmp(stateFromStores[12]);
  const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp13, R);
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  let closure_3 = tmp4(tmp2[13])();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
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
    tmp18 = fn2;
    tmp17 = items3;
  } else {
    class R {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    tmp18 = cResult[7];
  }
  const tmpResult5 = tmp(stateFromStores[12]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp17, tmp18);
  if (stateFromStores1 != null) {
    class R {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  }
  c4 = tmp20;
  const useChannelsAllowedToUnlink = tmp(stateFromStores[14]).useChannelsAllowedToUnlink;
  tmp(stateFromStores[14]);
  if (stateFromStores != null) {
    class R {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  }
  const tmp22 = useChannelsAllowedToUnlink(undefined).length > 0;
  if (canManageGuild) {
    class R {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    if (undefined != null) {
      class R {
        constructor() {
          let guildPermissionProps;
          if (null == stateFromStores) {
            guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
          } else {
            guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
          }
          return guildPermissionProps;
        }
      }
    }
    if (tmp23 == null) {
      class R {
        constructor() {
          let guildPermissionProps;
          if (null == stateFromStores) {
            guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
          } else {
            guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
          }
          return guildPermissionProps;
        }
      }
    }
    canManageGuild = tmp23 > 0;
  }
  if (null == stateFromStores) {
    class R {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  } else {
    class R {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    const Form = tmp(tmp2[15]).Form;
    if (cResult[8] === contentContainerStyle) {
      class R {
        constructor() {
          let guildPermissionProps;
          if (null == stateFromStores) {
            guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
          } else {
            guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
          }
          return guildPermissionProps;
        }
      }
      const Stack = tmp(tmp2[16]).Stack;
      if (cResult[11] !== token) {
        class R {
          constructor() {
            let guildPermissionProps;
            if (null == stateFromStores) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
        tmp26[0] = token;
        cResult[11] = token;
        cResult[12] = tmp26;
      } else {
        class R {
          constructor() {
            let guildPermissionProps;
            if (null == stateFromStores) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
      }
      navigation(stateFromStores[7]);
      const TableRowGroup = tmp(tmp2[17]).TableRowGroup;
      if (cResult[13] === canManageWebhooks) {
        class R {
          constructor() {
            let guildPermissionProps;
            if (null == stateFromStores) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
        if (cResult[16] === canManageWebhooks) {
          class R {
            constructor() {
              let guildPermissionProps;
              if (null == stateFromStores) {
                guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
              } else {
                guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
              }
              return guildPermissionProps;
            }
          }
          if (cResult[19] === navigation) {
            class R {
              constructor() {
                let guildPermissionProps;
                if (null == stateFromStores) {
                  guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                } else {
                  guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
                }
                return guildPermissionProps;
              }
            }
            if (canManageGuild) {
              class R {
                constructor() {
                  let guildPermissionProps;
                  if (null == stateFromStores) {
                    guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                  } else {
                    guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
                  }
                  return guildPermissionProps;
                }
              }
              canManageGuild = items.map((item) => {
                let intl;
                let obj4;
                let obj5;
                let obj6;
                const platformType = item;
                let someResult;
                if (_undefined != null) {
                  someResult = _undefined.some((type) => type.type === platformType);
                }
                if (someResult) {
                  const obj2 = navigation(stateFromStores[23]);
                  const value = obj2.get(item);
                  let tmp6Result = null;
                  if (null != value) {
                    const obj3 = {
                      label: value.name,
                      subLabel: intl.formatToPlainString(platformType(stateFromStores[19]).t.VXU4EU, obj4),
                      icon: closure_1_7(closure_3, obj6),
                      arrow: true,
                      onPress() {
                            const obj = { platformType };
                            return navigation.push(metroRequire.INTEGRATION_PLATFORM, obj);
                          }
                    };
                    const TableRow = platformType(stateFromStores[18]).TableRow;
                    intl = platformType(stateFromStores[19]).intl;
                    obj4 = { platformName: value.name };
                    const makeSource = platformType(stateFromStores[24]).makeSource;
                    platformType(stateFromStores[24]);
                    const icon = value.icon;
                    obj6 = { source: makeSource(obj5.isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
                    obj5 = platformType(stateFromStores[25]);
                    tmp6Result = closure_1_7(TableRow, obj3, item);
                  }
                  return tmp6Result;
                } else {
                  return null;
                }
              });
            }
            if (cResult[22] === TableRowGroup) {
              class R {
                constructor() {
                  let guildPermissionProps;
                  if (null == stateFromStores) {
                    guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                  } else {
                    guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
                  }
                  return guildPermissionProps;
                }
              }
            }
            let obj4 = { hasIcons: true, children: items4 };
            items4 = [tmp28, tmp30, tmp32, canManageGuild];
            cResult[22] = TableRowGroup;
            cResult[23] = tmp28;
            cResult[24] = tmp30;
            cResult[25] = tmp32;
            cResult[26] = canManageGuild;
            cResult[27] = closure_8(TableRowGroup, obj4);
            const tmp36 = closure_8(TableRowGroup, obj4);
          }
          let tmp33 = tmp22;
          if (tmp33) {
            class R {
              constructor() {
                let guildPermissionProps;
                if (null == stateFromStores) {
                  guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                } else {
                  guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
                }
                return guildPermissionProps;
              }
            }
            let obj5 = {
              label: intl5.string(tmp(stateFromStores[19]).t.tqtDXC),
              subLabel: intl6.string(tmp(stateFromStores[19]).t.v8819e),
              icon: closure_7(tmp(stateFromStores[22]).RefreshIcon, {}),
              arrow: true,
              onPress() {
                          return navigation.push(metroRequire.LOBBIES_LINKED);
                        }
            };
            const TableRow3 = tmp(tmp2[18]).TableRow;
            intl5 = tmp(tmp2[19]).intl;
            intl6 = tmp(tmp2[19]).intl;
            tmp33 = closure_7(TableRow3, obj5);
          }
          cResult[19] = navigation;
          cResult[20] = tmp22;
          cResult[21] = tmp33;
        }
        let tmp31 = canManageWebhooks;
        if (tmp31) {
          class R {
            constructor() {
              let guildPermissionProps;
              if (null == stateFromStores) {
                guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
              } else {
                guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
              }
              return guildPermissionProps;
            }
          }
          let obj6 = {
            label: intl3.string(tmp(stateFromStores[19]).t.OrV60r),
            subLabel: intl4.string(tmp(stateFromStores[19]).t.rQREJl),
            icon: closure_7(tmp(stateFromStores[21]).ChannelsFollowedIcon, {}),
            arrow: true,
            onPress() {
                      return navigation.push(metroRequire.CHANNELS_FOLLOWED);
                    }
          };
          const TableRow2 = tmp(tmp2[18]).TableRow;
          intl3 = tmp(tmp2[19]).intl;
          intl4 = tmp(tmp2[19]).intl;
          tmp31 = closure_7(TableRow2, obj6);
        }
        cResult[16] = canManageWebhooks;
        cResult[17] = navigation;
        cResult[18] = tmp31;
      }
      let tmp29 = canManageWebhooks;
      if (tmp29) {
        class R {
          constructor() {
            let guildPermissionProps;
            if (null == stateFromStores) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
        const obj7 = {
          label: intl.string(tmp(stateFromStores[19]).t.jp25Id),
          subLabel: intl2.string(tmp(stateFromStores[19]).t.mKIOkI),
          icon: closure_7(tmp(stateFromStores[20]).WebhookIcon, {}),
          arrow: true,
          onPress() {
                  return navigation.push(metroRequire.WEBHOOKS);
                }
        };
        let TableRow = tmp(tmp2[18]).TableRow;
        intl = tmp(tmp2[19]).intl;
        intl2 = tmp(tmp2[19]).intl;
        tmp29 = closure_7(TableRow, obj7);
      }
      cResult[13] = canManageWebhooks;
      cResult[14] = navigation;
      cResult[15] = tmp29;
    }
    const items5 = [tmp6.screenContent, contentContainerStyle];
    cResult[8] = contentContainerStyle;
    cResult[9] = tmp6.screenContent;
    cResult[10] = items5;
  }
}) : ((contentContainerStyle) => {
  let Stack;
  let TableRowGroup;
  let canManageGuild;
  let canManageWebhooks;
  let closure_0;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items3;
  let items5;
  let obj13;
  let obj7;
  let obj8;
  _require = undefined;
  importDefault = undefined;
  let stateFromStores;
  let found;
  const tmp = _require;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  let obj = require("useToken");
  const token = obj.useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_11();
  _require = tmp5;
  let obj2 = require("useNavigation");
  const tmp3 = importDefault;
  importDefault = obj2.useNavigation();
  let obj3 = require("get initialized");
  items = [GuildSettingsStore];
  stateFromStores = obj3.useStateFromStores(items, () => GuildSettingsStore.getGuild(), []);
  let obj4 = require("get initialized");
  const items1 = [found];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items1, () => {
    let guildPermissionProps;
    if (null == stateFromStores) {
      guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
    } else {
      guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
    }
    return guildPermissionProps;
  });
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  let closure_3 = require("useTheme")();
  let obj5 = require("get initialized");
  const items2 = [GuildSettingsStore];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => GuildSettingsStore.getProps().integrations);
  found = undefined;
  if (stateFromStores1 != null) {
    found = stateFromStores1.filter((type) => items.includes(type.type));
  }
  let id;
  const useChannelsAllowedToUnlink = tmp(stateFromStores[14]).useChannelsAllowedToUnlink;
  tmp(stateFromStores[14]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp16Result2 = useChannelsAllowedToUnlink(id).length > 0;
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
  let tmp12 = null;
  if (null != stateFromStores) {
    if (!canManageWebhooks) {
      let tmp14Result;
      if (!tmp16Result2) {
        tmp14Result = null;
      }
      tmp12 = tmp14Result;
    }
    let obj6 = { style: tmp5.screenContainer, contentContainerStyle: items3, children: closure_7(Stack, obj7) };
    items3 = [tmp5.screenContent, contentContainerStyle];
    const Form = tmp(tmp2[15]).Form;
    obj7 = { style: obj8, spacing: tmp3(stateFromStores[7]).space.PX_24, children: closure_8(TableRowGroup, obj13) };
    obj8 = { paddingHorizontal: token };
    Stack = tmp(tmp2[16]).Stack;
    let tmp16Result = canManageWebhooks;
    TableRowGroup = tmp(tmp2[17]).TableRowGroup;
    if (canManageWebhooks) {
      const obj9 = {
        label: intl.string(tmp(stateFromStores[19]).t.jp25Id),
        subLabel: intl2.string(tmp(stateFromStores[19]).t.mKIOkI),
        icon: closure_7(tmp(stateFromStores[20]).WebhookIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(metroRequire.WEBHOOKS);
            }
      };
      let TableRow = tmp(tmp2[18]).TableRow;
      intl = tmp(tmp2[19]).intl;
      intl2 = tmp(tmp2[19]).intl;
      tmp16Result = closure_7(TableRow, obj9);
    }
    const items4 = [tmp16Result, , , ];
    if (canManageWebhooks) {
      const obj10 = {
        label: intl3.string(tmp(stateFromStores[19]).t.OrV60r),
        subLabel: intl4.string(tmp(stateFromStores[19]).t.rQREJl),
        icon: closure_7(tmp(stateFromStores[21]).ChannelsFollowedIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(metroRequire.CHANNELS_FOLLOWED);
            }
      };
      const TableRow2 = tmp(tmp2[18]).TableRow;
      intl3 = tmp(tmp2[19]).intl;
      intl4 = tmp(tmp2[19]).intl;
      canManageWebhooks = closure_7(TableRow2, obj10);
    }
    items4[1] = canManageWebhooks;
    if (tmp16Result2) {
      const obj11 = {
        label: intl5.string(tmp(stateFromStores[19]).t.tqtDXC),
        subLabel: intl6.string(tmp(stateFromStores[19]).t.v8819e),
        icon: closure_7(tmp(stateFromStores[22]).RefreshIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(metroRequire.LOBBIES_LINKED);
            }
      };
      const TableRow3 = tmp(tmp2[18]).TableRow;
      intl5 = tmp(tmp2[19]).intl;
      intl6 = tmp(tmp2[19]).intl;
      tmp16Result2 = closure_7(TableRow3, obj11);
    }
    items4[2] = tmp16Result2;
    if (canManageGuild) {
      canManageGuild = items.map((item) => {
        let intl;
        let obj4;
        let obj5;
        let obj6;
        const platformType = item;
        let someResult;
        if (found != null) {
          someResult = found.some((type) => type.type === platformType);
        }
        if (someResult) {
          const obj2 = closure_1(stateFromStores[23]);
          const value = obj2.get(item);
          let tmp6Result = null;
          if (null != value) {
            const obj3 = {
              label: value.name,
              subLabel: intl.formatToPlainString(platformType(stateFromStores[19]).t.VXU4EU, obj4),
              icon: closure_1_7(closure_3, obj6),
              arrow: true,
              onPress() {
                    const obj = { platformType };
                    return closure_1.push(metroRequire.INTEGRATION_PLATFORM, obj);
                  }
            };
            const TableRow = platformType(stateFromStores[18]).TableRow;
            intl = platformType(stateFromStores[19]).intl;
            obj4 = { platformName: value.name };
            const makeSource = platformType(stateFromStores[24]).makeSource;
            platformType(stateFromStores[24]);
            const icon = value.icon;
            obj6 = { source: makeSource(obj5.isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
            obj5 = platformType(stateFromStores[25]);
            tmp6Result = closure_1_7(TableRow, obj3, item);
          }
          return tmp6Result;
        } else {
          return null;
        }
      });
    }
    const obj12 = { children: items5 };
    obj13 = { hasIcons: true, children: items4 };
    items4[3] = canManageGuild;
    items5 = [closure_7(Form, obj6), closure_7(tmp(stateFromStores[26]).NavScrim, {})];
    tmp14Result = closure_8(closure_9, obj12);
  }
  return tmp12;
});
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx");

export default tmp6;
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;