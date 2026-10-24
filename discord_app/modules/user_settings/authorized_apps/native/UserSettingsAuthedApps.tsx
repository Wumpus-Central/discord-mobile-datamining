// discord_app/modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import applications from "../../../../../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthorizedAppsStore from "../../../oauth2/AuthorizedAppsStore.tsx";

const require = globalThis.__r;

const CircleInformationIcon = GlobeEarthIcon(5686);
const GlobeEarthIcon2 = GlobeEarthIcon(9492);
const EmbedIcon = GlobeEarthIcon(14061);
require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const FetchState = fn(7203).FetchState;
const Constants = fn(1087);
({ AnalyticsPages: closure_8, UserSettingsSections: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const PX_24 = nativeDefault.space.PX_24;
const createStyles = fn(4971);
let obj2 = {
  spinner: { padding: 16 },
  emptyText: { marginTop: 24 },
  emptyContainer: { padding: 16 },
  container: { paddingHorizontal: 16, paddingTop: nativeDefault.space.PX_24 },
  headerDescription: { marginTop: 12 },
  appListHeader: { marginTop: 24 },
};
let closure_14 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { paddingHorizontal: 16, paddingTop: nativeDefault.space.PX_24 };
const ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DisclosureIcon(arg0) {
      let GlobeEarthIcon = require;
      let tmp = dependencyMap;
      const cResult = c.c(6);
      ({ disclosure, style } = arg0);
      if (applications.ApplicationDisclosureType.IP_LOCATION === disclosure) {
        if (cResult[0] !== style) {
          GlobeEarthIcon = GlobeEarthIcon2.GlobeEarthIcon;
          const obj2 = { style, size: "xs" };
          tmp = v65535(GlobeEarthIcon, obj2);
          cResult[0] = style;
          cResult[1] = tmp;
        }
      } else {
        if (applications.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
          if (cResult[2] !== style) {
            const obj3 = { style, size: "xs" };
            const tmp8 = v65535(EmbedIcon.EmbedIcon, obj3);
            cResult[2] = style;
            cResult[3] = tmp8;
            let tmp6 = tmp8;
          } else {
            tmp6 = cResult[3];
          }
          let tmp3 = tmp6;
        } else if (cResult[4] !== style) {
          const obj4 = { style, size: "xs" };
          const tmp5 = v65535(CircleInformationIcon.CircleInformationIcon, obj4);
          cResult[4] = style;
          cResult[5] = tmp5;
          tmp3 = tmp5;
        } else {
          tmp3 = cResult[5];
        }
        return tmp3;
      }
    }
  : function DisclosureIcon(disclosure) {
      disclosure = disclosure.disclosure;
      const style = disclosure.style;
      const items = [disclosure, style];
      return noop.useMemo(() => {
        if (applications.ApplicationDisclosureType.IP_LOCATION === disclosure) {
          const obj2 = { style, size: "xs" };
          return v65535(GlobeEarthIcon2.GlobeEarthIcon, obj2);
        } else if (applications.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
          const obj3 = { style, size: "xs" };
          return v65535(EmbedIcon.EmbedIcon, obj3);
        } else {
          const obj = { style, size: "xs" };
          return v65535(CircleInformationIcon.CircleInformationIcon, obj);
        }
      }, items);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserSettingsAuthedApps() {
      const cResult = require("c").c(38);
      const tmp4 = closure_14();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AuthorizedAppsStore];
        const fn = function n() {
          return {
            fetchState: authStore.getFetchState(),
            appAuthTokens: authStore.getNewestTokensForNonChildrenApplications(),
          };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = require("c");
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp5, tmp6);
      const appAuthTokens = stateFromStoresObject.appAuthTokens;
      const tmpResult = require("initialize");
      navigation = require("useNavigation").useNavigation();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function x() {
          return appAuthTokens(navigation[16]).fetch();
        };
        cResult[2] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[2];
      }
      const tmpResult3 = require("useNavigation");
      const focusEffect = require("Link").useFocusEffect(tmp10);
      if (cResult[3] === tmp4.appListHeader) {
        if (cResult[4] === tmp4.headerDescription) {
          let tmp12 = cResult[5];
        }
        if (cResult[6] !== navigation) {
          class D {
            constructor(arg0) {
              item = arg0.item;
              index = arg0.index;
              obj = {
                icon: null,
                label: item.application.name,
                onPress: function handleAppPress() {
                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = {
                    destinationPane: constants2.AUTHORIZED_APP,
                    source: { page: constants.USER_SETTINGS },
                    applicationId: item.application.id,
                  };
                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                },
                arrow: true,
                start: 0 === index,
                end: index === arg0.numItems - 1,
              };
              obj1 = { application: item.application };
              obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
              return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
            }
          }
          cResult[6] = navigation;
          cResult[7] = D;
        } else {
          class D {
            constructor(arg0) {
              item = arg0.item;
              index = arg0.index;
              obj = {
                icon: null,
                label: item.application.name,
                onPress: function handleAppPress() {
                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = {
                    destinationPane: constants2.AUTHORIZED_APP,
                    source: { page: constants.USER_SETTINGS },
                    applicationId: item.application.id,
                  };
                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                },
                arrow: true,
                start: 0 === index,
                end: index === arg0.numItems - 1,
              };
              obj1 = { application: item.application };
              obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
              return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
            }
          }
        }
        noop = D;
        if (null != appAuthTokens) {
          class D {
            constructor(arg0) {
              item = arg0.item;
              index = arg0.index;
              obj = {
                icon: null,
                label: item.application.name,
                onPress: function handleAppPress() {
                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = {
                    destinationPane: constants2.AUTHORIZED_APP,
                    source: { page: constants.USER_SETTINGS },
                    applicationId: item.application.id,
                  };
                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                },
                arrow: true,
                start: 0 === index,
                end: index === arg0.numItems - 1,
              };
              obj1 = { application: item.application };
              obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
              return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
            }
          }
          if (stateFromStoresObject.fetchState === FetchState.FETCHED) {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                obj = {
                  icon: null,
                  label: item.application.name,
                  onPress: function handleAppPress() {
                    UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                    const obj3 = {
                      destinationPane: constants2.AUTHORIZED_APP,
                      source: { page: constants.USER_SETTINGS },
                      applicationId: item.application.id,
                    };
                    const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                    navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                  },
                  arrow: true,
                  start: 0 === index,
                  end: index === arg0.numItems - 1,
                };
                obj1 = { application: item.application };
                obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
              }
            }
            if (0 === appAuthTokens.length) {
              class D {
                constructor(arg0) {
                  item = arg0.item;
                  index = arg0.index;
                  obj = {
                    icon: null,
                    label: item.application.name,
                    onPress: function handleAppPress() {
                      UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                      const obj3 = {
                        destinationPane: constants2.AUTHORIZED_APP,
                        source: { page: constants.USER_SETTINGS },
                        applicationId: item.application.id,
                      };
                      const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                      navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                    },
                    arrow: true,
                    start: 0 === index,
                    end: index === arg0.numItems - 1,
                  };
                  obj1 = { application: item.application };
                  obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                  return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                }
              }
              if (cResult[10] !== tmp12) {
                class D {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    obj = {
                      icon: null,
                      label: item.application.name,
                      onPress: function handleAppPress() {
                        UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                        const obj3 = {
                          destinationPane: constants2.AUTHORIZED_APP,
                          source: { page: constants.USER_SETTINGS },
                          applicationId: item.application.id,
                        };
                        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                        navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                      },
                      arrow: true,
                      start: 0 === index,
                      end: index === arg0.numItems - 1,
                    };
                    obj1 = { application: item.application };
                    obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                    return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                  }
                }
                cResult[10] = tmp12;
                cResult[11] = tmp31;
              } else {
                class D {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    obj = {
                      icon: null,
                      label: item.application.name,
                      onPress: function handleAppPress() {
                        UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                        const obj3 = {
                          destinationPane: constants2.AUTHORIZED_APP,
                          source: { page: constants.USER_SETTINGS },
                          applicationId: item.application.id,
                        };
                        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                        navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                      },
                      arrow: true,
                      start: 0 === index,
                      end: index === arg0.numItems - 1,
                    };
                    obj1 = { application: item.application };
                    obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                    return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                class D {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    obj = {
                      icon: null,
                      label: item.application.name,
                      onPress: function handleAppPress() {
                        UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                        const obj3 = {
                          destinationPane: constants2.AUTHORIZED_APP,
                          source: { page: constants.USER_SETTINGS },
                          applicationId: item.application.id,
                        };
                        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                        navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                      },
                      arrow: true,
                      start: 0 === index,
                      end: index === arg0.numItems - 1,
                    };
                    obj1 = { application: item.application };
                    obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                    return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                  }
                }
                const stringResult = obj6.string(tmp(tmp2[19]).t["E+SM6T"]);
                cResult[12] = stringResult;
                const tmp32 = stringResult;
              } else {
                class D {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    obj = {
                      icon: null,
                      label: item.application.name,
                      onPress: function handleAppPress() {
                        UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                        const obj3 = {
                          destinationPane: constants2.AUTHORIZED_APP,
                          source: { page: constants.USER_SETTINGS },
                          applicationId: item.application.id,
                        };
                        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                        navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                      },
                      arrow: true,
                      start: 0 === index,
                      end: index === arg0.numItems - 1,
                    };
                    obj1 = { application: item.application };
                    obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                    return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                  }
                }
              }
              if (cResult[13] !== tmp4.emptyText) {
                class D {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    obj = {
                      icon: null,
                      label: item.application.name,
                      onPress: function handleAppPress() {
                        UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                        const obj3 = {
                          destinationPane: constants2.AUTHORIZED_APP,
                          source: { page: constants.USER_SETTINGS },
                          applicationId: item.application.id,
                        };
                        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                        navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                      },
                      arrow: true,
                      start: 0 === index,
                      end: index === arg0.numItems - 1,
                    };
                    obj1 = { application: item.application };
                    obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                    return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                  }
                }
                let obj2 = {
                  color: "mobile-text-heading-primary",
                  style: tmp4.emptyText,
                  variant: "heading-md/extrabold",
                  children: tmp32,
                };
                const tmp35 = closure_10(tmp(tmp2[18]).Text, obj2);
                cResult[13] = tmp4.emptyText;
                cResult[14] = tmp35;
              } else {
                class D {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    obj = {
                      icon: null,
                      label: item.application.name,
                      onPress: function handleAppPress() {
                        UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                        const obj3 = {
                          destinationPane: constants2.AUTHORIZED_APP,
                          source: { page: constants.USER_SETTINGS },
                          applicationId: item.application.id,
                        };
                        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                        navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                      },
                      arrow: true,
                      start: 0 === index,
                      end: index === arg0.numItems - 1,
                    };
                    obj1 = { application: item.application };
                    obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                    return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                  }
                }
              }
              if (cResult[15] === tmp4.emptyContainer) {
                class D {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    obj = {
                      icon: null,
                      label: item.application.name,
                      onPress: function handleAppPress() {
                        UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                        const obj3 = {
                          destinationPane: constants2.AUTHORIZED_APP,
                          source: { page: constants.USER_SETTINGS },
                          applicationId: item.application.id,
                        };
                        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                        navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                      },
                      arrow: true,
                      start: 0 === index,
                      end: index === arg0.numItems - 1,
                    };
                    obj1 = { application: item.application };
                    obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                    return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                  }
                }
              }
              let obj3 = { style: tmp29, children: null };
              let items1 = [tmp31, tmp34];
              obj3.children = items1;
              const tmp39 = closure_11(closure_4, obj3);
              cResult[15] = tmp4.emptyContainer;
              cResult[16] = tmp31;
              cResult[17] = tmp34;
              cResult[18] = tmp39;
            } else {
              class D {
                constructor(arg0) {
                  item = arg0.item;
                  index = arg0.index;
                  obj = {
                    icon: null,
                    label: item.application.name,
                    onPress: function handleAppPress() {
                      UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                      const obj3 = {
                        destinationPane: constants2.AUTHORIZED_APP,
                        source: { page: constants.USER_SETTINGS },
                        applicationId: item.application.id,
                      };
                      const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                      navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                    },
                    arrow: true,
                    start: 0 === index,
                    end: index === arg0.numItems - 1,
                  };
                  obj1 = { application: item.application };
                  obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                  return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                }
              }
              const sum = appAuthTokens(navigation[13])().bottom + PX_24;
              if (cResult[19] !== sum) {
                class D {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    obj = {
                      icon: null,
                      label: item.application.name,
                      onPress: function handleAppPress() {
                        UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                        const obj3 = {
                          destinationPane: constants2.AUTHORIZED_APP,
                          source: { page: constants.USER_SETTINGS },
                          applicationId: item.application.id,
                        };
                        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                        navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                      },
                      arrow: true,
                      start: 0 === index,
                      end: index === arg0.numItems - 1,
                    };
                    obj1 = { application: item.application };
                    obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                    return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                  }
                }
                tmp16[0] = sum;
                cResult[19] = sum;
                cResult[20] = tmp16;
              } else {
                class D {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    obj = {
                      icon: null,
                      label: item.application.name,
                      onPress: function handleAppPress() {
                        UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                        const obj3 = {
                          destinationPane: constants2.AUTHORIZED_APP,
                          source: { page: constants.USER_SETTINGS },
                          applicationId: item.application.id,
                        };
                        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                        navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                      },
                      arrow: true,
                      start: 0 === index,
                      end: index === arg0.numItems - 1,
                    };
                    obj1 = { application: item.application };
                    obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                    return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                  }
                }
              }
              if (cResult[21] === tmp4.container) {
                class D {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    obj = {
                      icon: null,
                      label: item.application.name,
                      onPress: function handleAppPress() {
                        UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                        const obj3 = {
                          destinationPane: constants2.AUTHORIZED_APP,
                          source: { page: constants.USER_SETTINGS },
                          applicationId: item.application.id,
                        };
                        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                        navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                      },
                      arrow: true,
                      start: 0 === index,
                      end: index === arg0.numItems - 1,
                    };
                    obj1 = { application: item.application };
                    obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                    return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                  }
                }
                if (cResult[24] !== tmp12) {
                  class D {
                    constructor(arg0) {
                      item = arg0.item;
                      index = arg0.index;
                      obj = {
                        icon: null,
                        label: item.application.name,
                        onPress: function handleAppPress() {
                          UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                          const obj3 = {
                            destinationPane: constants2.AUTHORIZED_APP,
                            source: { page: constants.USER_SETTINGS },
                            applicationId: item.application.id,
                          };
                          const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                          navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                        },
                        arrow: true,
                        start: 0 === index,
                        end: index === arg0.numItems - 1,
                      };
                      obj1 = { application: item.application };
                      obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                      return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                    }
                  }
                  cResult[24] = tmp12;
                  class G {
                    constructor(arg0) {
                      obj = { item: arg0.item, index: arg0.index, numItems: appAuthTokens.length };
                      return closure_3(obj);
                    }
                  }
                  cResult[25] = tmp19;
                } else {
                  class D {
                    constructor(arg0) {
                      item = arg0.item;
                      index = arg0.index;
                      obj = {
                        icon: null,
                        label: item.application.name,
                        onPress: function handleAppPress() {
                          UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                          const obj3 = {
                            destinationPane: constants2.AUTHORIZED_APP,
                            source: { page: constants.USER_SETTINGS },
                            applicationId: item.application.id,
                          };
                          const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                          navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                        },
                        arrow: true,
                        start: 0 === index,
                        end: index === arg0.numItems - 1,
                      };
                      obj1 = { application: item.application };
                      obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                      return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                    }
                  }
                }
                if (cResult[26] === appAuthTokens.length) {
                  class D {
                    constructor(arg0) {
                      item = arg0.item;
                      index = arg0.index;
                      obj = {
                        icon: null,
                        label: item.application.name,
                        onPress: function handleAppPress() {
                          UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                          const obj3 = {
                            destinationPane: constants2.AUTHORIZED_APP,
                            source: { page: constants.USER_SETTINGS },
                            applicationId: item.application.id,
                          };
                          const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                          navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                        },
                        arrow: true,
                        start: 0 === index,
                        end: index === arg0.numItems - 1,
                      };
                      obj1 = { application: item.application };
                      obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                      return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                    }
                  }
                  if (cResult[29] !== appAuthTokens) {
                    class D {
                      constructor(arg0) {
                        item = arg0.item;
                        index = arg0.index;
                        obj = {
                          icon: null,
                          label: item.application.name,
                          onPress: function handleAppPress() {
                            UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                            const obj3 = {
                              destinationPane: constants2.AUTHORIZED_APP,
                              source: { page: constants.USER_SETTINGS },
                              applicationId: item.application.id,
                            };
                            const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                            navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                          },
                          arrow: true,
                          start: 0 === index,
                          end: index === arg0.numItems - 1,
                        };
                        obj1 = { application: item.application };
                        obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                        return closure_1_10(closure_0(closure_2[21]).TableRow, obj);
                      }
                    }
                    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                      class Z {
                        constructor(arg0, arg1) {
                          NumberResult = Number(arg1.id);
                          return NumberResult - Number(arg0.id);
                        }
                      }
                      cResult[31] = Z;
                      class G {
                        constructor(arg0) {
                          obj = { item: arg0.item, index: arg0.index, numItems: appAuthTokens.length };
                          return closure_3(obj);
                        }
                      }
                    } else {
                      class Z {
                        constructor(arg0, arg1) {
                          NumberResult = Number(arg1.id);
                          return NumberResult - Number(arg0.id);
                        }
                      }
                    }
                    class G {
                      constructor(arg0) {
                        obj = { item: arg0.item, index: arg0.index, numItems: appAuthTokens.length };
                        return closure_3(obj);
                      }
                    }
                    cResult[29] = appAuthTokens;
                    cResult[30] = tmp22;
                  } else {
                    class Z {
                      constructor(arg0, arg1) {
                        NumberResult = Number(arg1.id);
                        return NumberResult - Number(arg0.id);
                      }
                    }
                    const _Symbol = Symbol;
                    class G {
                      constructor(arg0) {
                        obj = { item: arg0.item, index: arg0.index, numItems: appAuthTokens.length };
                        return closure_3(obj);
                      }
                    }
                    if (cResult[33] === tmp21) {
                      class Z {
                        constructor(arg0, arg1) {
                          NumberResult = Number(arg1.id);
                          return NumberResult - Number(arg0.id);
                        }
                      }
                    }
                    let obj4 = {
                      contentContainerStyle: tmp17,
                      ListHeaderComponent: tmp19,
                      renderItem: G,
                      data: tmp21,
                      keyExtractor: tmp25,
                    };
                    const tmp28 = closure_10(tmp(tmp2[25]).FlashList, obj4);
                    cResult[33] = tmp21;
                    cResult[34] = tmp17;
                    cResult[35] = tmp19;
                    cResult[36] = G;
                    cResult[37] = tmp28;
                  }
                }
                class G {
                  constructor(arg0) {
                    obj = { item: arg0.item, index: arg0.index, numItems: appAuthTokens.length };
                    return closure_3(obj);
                  }
                }
                cResult[26] = appAuthTokens.length;
                cResult[27] = D;
                cResult[28] = G;
              }
              const items2 = [tmp4.container, tmp16];
              cResult[21] = tmp4.container;
              cResult[22] = tmp16;
              cResult[23] = items2;
            }
          }
        }
        if (cResult[8] !== tmp4.spinner) {
          class Z {
            constructor(arg0, arg1) {
              NumberResult = Number(arg1.id);
              return NumberResult - Number(arg0.id);
            }
          }
          class G {
            constructor(arg0) {
              obj = { item: arg0.item, index: arg0.index, numItems: appAuthTokens.length };
              return closure_3(obj);
            }
          }
          const tmp42 = closure_10(closure_5, { style: null, animating: true, size: "large" });
          cResult[8] = tmp4.spinner;
          cResult[9] = tmp42;
          let obj5 = { style: null, animating: true, size: "large" };
          const tmp40 = tmp42;
        } else {
          class Z {
            constructor(arg0, arg1) {
              NumberResult = Number(arg1.id);
              return NumberResult - Number(arg0.id);
            }
          }
        }
        return tmp40;
      }
      function renderHeader() {
        const obj = { children: null };
        const obj2 = { children: null };
        const obj3 = { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: null };
        const intl = util.intl;
        obj3.children = intl.string(util.t.HU3RFw);
        const items = [v65535(Text_Text.Text, obj3)];
        const obj4 = { style: closure_0.headerDescription, variant: "heading-sm/medium", children: null };
        const intl2 = util.intl;
        obj4.children = intl2.string(util.t.Nu5Yi0);
        items[1] = v65535(Text_Text.Text, obj4);
        obj2.children = items;
        const items1 = [closure_2_11(React4, obj2)];
        const obj5 = { style: closure_0.appListHeader, children: null };
        const obj6 = { title: null };
        const intl3 = util.intl;
        obj6.title = intl3.string(util.t.PHjkRE);
        obj5.children = v65535(TableRowGroup.TableRowGroupTitle, obj6);
        items1[1] = v65535(React4, obj5);
        obj.children = items1;
        return closure_2_11(__initData, obj);
      }
      cResult[3] = tmp4.appListHeader;
      cResult[4] = tmp4.headerDescription;
      cResult[5] = renderHeader;
      tmp12 = renderHeader;
      const tmpResult4 = require("Link");
    }
  : function UserSettingsAuthedApps() {
      const tmp = closure_14();
      _require = tmp;
      let items = [AuthorizedAppsStore];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({
        fetchState: authStore.getFetchState(),
        appAuthTokens: authStore.getNewestTokensForNonChildrenApplications(),
      }));
      const appAuthTokens = stateFromStoresObject.appAuthTokens;
      let obj = require("initialize");
      navigation = require("useNavigation").useNavigation();
      let obj2 = require("useNavigation");
      const focusEffect = require("Link").useFocusEffect(
        noop.useCallback(() => appAuthTokens(navigation[16]).fetch(), []),
      );
      let items1 = [navigation];
      noop = noop.useCallback((item) => {
        item = item.item;
        const index = item.index;
        let obj = {
          icon: closure_1_10(appAuthTokens(navigation[22]), { application: item.application }),
          label: item.application.name,
          onPress: function handleAppPress() {
            UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
            const obj3 = {
              destinationPane: constants2.AUTHORIZED_APP,
              source: { page: constants.USER_SETTINGS },
              applicationId: item.application.id,
            };
            const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
            navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
          },
          arrow: true,
          start: 0 === index,
          end: index === item.numItems - 1,
        };
        return closure_1_10(closure_0(navigation[21]).TableRow, obj);
      }, items1);
      if (null != appAuthTokens) {
        if (stateFromStoresObject.fetchState === FetchState.FETCHED) {
          function renderHeader() {
            const obj = { children: null };
            const obj2 = { children: null };
            const obj3 = { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: null };
            const intl = util.intl;
            obj3.children = intl.string(util.t.HU3RFw);
            const items = [v65535(Text_Text.Text, obj3)];
            const obj4 = { style: closure_0.headerDescription, variant: "heading-sm/medium", children: null };
            const intl2 = util.intl;
            obj4.children = intl2.string(util.t.Nu5Yi0);
            items[1] = v65535(Text_Text.Text, obj4);
            obj2.children = items;
            const items1 = [closure_2_11(React4, obj2)];
            const obj5 = { style: closure_0.appListHeader, children: null };
            const obj6 = { title: null };
            const intl3 = util.intl;
            obj6.title = intl3.string(util.t.PHjkRE);
            obj5.children = v65535(TableRowGroup.TableRowGroupTitle, obj6);
            items1[1] = v65535(React4, obj5);
            obj.children = items1;
            return closure_2_11(__initData, obj);
          }
          if (0 === appAuthTokens.length) {
            let obj4 = { style: tmp.emptyContainer, children: null };
            const items2 = [renderHeader()];
            let obj5 = {
              color: "mobile-text-heading-primary",
              style: tmp.emptyText,
              variant: "heading-md/extrabold",
              children: null,
            };
            let intl = tmp3(tmp2[19]).intl;
            obj5.children = intl.string(tmp3(tmp2[19]).t["E+SM6T"]);
            items2[1] = closure_10(tmp3(tmp2[18]).Text, obj5);
            obj4.children = items2;
            let tmp10 = closure_11(closure_4, obj4);
          } else {
            let obj6 = {
              contentContainerStyle: null,
              ListHeaderComponent: null,
              renderItem: null,
              data: null,
              keyExtractor: null,
            };
            const items3 = [tmp.container];
            const obj7 = { paddingBottom: appAuthTokens(navigation[13])().bottom + PX_24 };
            items3[1] = obj7;
            obj6.contentContainerStyle = items3;
            obj6.ListHeaderComponent = renderHeader();
            obj6.renderItem = function renderItem(item) {
              return closure_3({ item: item.item, index: item.index, numItems: appAuthTokens.length });
            };
            obj6.data = appAuthTokens.sort((id, id2) => Number(id2.id) - Number(id.id));
            obj6.keyExtractor = function keyExtractor(id) {
              return id.id;
            };
            tmp10 = closure_10(tmp3(tmp2[25]).FlashList, obj6);
          }
        }
        return tmp10;
      }
      tmp10 = closure_10(closure_5, { style: tmp.spinner, animating: true, size: "large" });
      let obj3 = require("Link");
      const obj8 = { style: tmp.spinner, animating: true, size: "large" };
    };
export const DisclosureIcon = tmp5;
