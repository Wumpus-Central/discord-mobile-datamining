// === Module 14742: UserSettingsAuthedApps ===

// Module 14742 (UserSettingsAuthedApps)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import TableRowGroup from "TableRowGroup" /* 6074 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6487 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6491 */;
import applications from "applications" /* 8723 */;
import noop from "module_19" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6602 */;

const require = globalThis.__r;

const CircleInformationIcon = GlobeEarthIcon(4812);
const GlobeEarthIcon2 = GlobeEarthIcon(8551);
const EmbedIcon = GlobeEarthIcon(8954);
require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const FetchState = fn(6602).FetchState;
const Constants = fn(1085);
({ AnalyticsPages: closure_9, UserSettingsSections: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PX_24 = nativeDefault.space.PX_24;
const createStyles = fn(4890);
let obj2 = { spinner: { padding: 16 }, emptyText: { marginTop: 24 }, emptyContainer: { padding: 16 }, container: { paddingHorizontal: 16, paddingTop: nativeDefault.space.PX_24 }, headerDescription: { marginTop: 12 }, appListHeader: { marginTop: 24 } };
let closure_15 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { paddingHorizontal: 16, paddingTop: nativeDefault.space.PX_24 };
const ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let GlobeEarthIcon = require;
  let tmp = dependencyMap;
  const cResult = c.c(6);
  ({ disclosure, style } = arg0);
  if (applications.ApplicationDisclosureType.IP_LOCATION === disclosure) {
    if (cResult[0] !== style) {
      GlobeEarthIcon = GlobeEarthIcon2.GlobeEarthIcon;
      const obj2 = { style, size: "xs" };
      tmp = closure_1_11(GlobeEarthIcon, obj2);
      cResult[0] = style;
      cResult[1] = tmp;
    }
  } else {
    if (applications.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
      if (cResult[2] !== style) {
        const obj3 = { style, size: "xs" };
        const tmp8 = closure_1_11(EmbedIcon.EmbedIcon, obj3);
        cResult[2] = style;
        cResult[3] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      let tmp3 = tmp6;
    } else if (cResult[4] !== style) {
      const obj4 = { style, size: "xs" };
      const tmp5 = closure_1_11(CircleInformationIcon.CircleInformationIcon, obj4);
      cResult[4] = style;
      cResult[5] = tmp5;
      tmp3 = tmp5;
    } else {
      tmp3 = cResult[5];
    }
    return tmp3;
  }
}) : ((disclosure) => {
  disclosure = disclosure.disclosure;
  const style = disclosure.style;
  const items = [disclosure, style];
  return noop.useMemo(() => {
    if (applications.ApplicationDisclosureType.IP_LOCATION === disclosure) {
      const obj2 = { style, size: "xs" };
      return closure_2_11(GlobeEarthIcon2.GlobeEarthIcon, obj2);
    } else if (applications.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
      const obj3 = { style, size: "xs" };
      return closure_2_11(EmbedIcon.EmbedIcon, obj3);
    } else {
      const obj = { style, size: "xs" };
      return closure_2_11(CircleInformationIcon.CircleInformationIcon, obj);
    }
  }, items);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(37);
  const tmp4 = closure_15();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthorizedAppsStore];
    const fn = function n() {
      return { fetchState: authStore.getFetchState(), appAuthTokens: authStore.getNewestTokensForNonChildrenApplications() };
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
    class A {
      constructor() {
        obj = appAuthTokens(closure_2[16]);
        return obj.fetch();
      }
    }
    cResult[2] = A;
  } else {
    class A {
      constructor() {
        obj = appAuthTokens(closure_2[16]);
        return obj.fetch();
      }
    }
  }
  const tmpResult3 = require("useNavigation");
  const focusEffect = require("Link").useFocusEffect(A);
  if (cResult[3] === tmp4.appListHeader) {
    class A {
      constructor() {
        obj = appAuthTokens(closure_2[16]);
        return obj.fetch();
      }
    }
    if (cResult[6] !== navigation) {
      class D {
        constructor(arg0) {
          item = arg0.item;
          index = arg0.index;
          obj = {
            icon: null,
            label: item.application.name,
            onPress() {
                      UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                      const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                      const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                      navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                    },
            arrow: true,
            start: 0 === index,
            end: index === arg0.numItems - 1
          };
          obj1 = { application: item.application };
          obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
          return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
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
            onPress() {
                      UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                      const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                      const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                      navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                    },
            arrow: true,
            start: 0 === index,
            end: index === arg0.numItems - 1
          };
          obj1 = { application: item.application };
          obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
          return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
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
            onPress() {
                      UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                      const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                      const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                      navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                    },
            arrow: true,
            start: 0 === index,
            end: index === arg0.numItems - 1
          };
          obj1 = { application: item.application };
          obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
          return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
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
              onPress() {
                          UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                          const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                          const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                          navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                        },
              arrow: true,
              start: 0 === index,
              end: index === arg0.numItems - 1
            };
            obj1 = { application: item.application };
            obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
            return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
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
                onPress() {
                              UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                              const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                              const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                              navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                            },
                arrow: true,
                start: 0 === index,
                end: index === arg0.numItems - 1
              };
              obj1 = { application: item.application };
              obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
              return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
            }
          }
          if (cResult[10] !== E) {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                obj = {
                  icon: null,
                  label: item.application.name,
                  onPress() {
                                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                },
                  arrow: true,
                  start: 0 === index,
                  end: index === arg0.numItems - 1
                };
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
              }
            }
            cResult[10] = E;
            cResult[11] = tmp29;
          } else {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                obj = {
                  icon: null,
                  label: item.application.name,
                  onPress() {
                                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                },
                  arrow: true,
                  start: 0 === index,
                  end: index === arg0.numItems - 1
                };
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                obj = {
                  icon: null,
                  label: item.application.name,
                  onPress() {
                                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                },
                  arrow: true,
                  start: 0 === index,
                  end: index === arg0.numItems - 1
                };
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
              }
            }
            const stringResult = obj6.string(tmp(tmp2[19]).t["E+SM6T"]);
            cResult[12] = stringResult;
            const tmp30 = stringResult;
          } else {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                obj = {
                  icon: null,
                  label: item.application.name,
                  onPress() {
                                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                },
                  arrow: true,
                  start: 0 === index,
                  end: index === arg0.numItems - 1
                };
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
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
                  onPress() {
                                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                },
                  arrow: true,
                  start: 0 === index,
                  end: index === arg0.numItems - 1
                };
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
              }
            }
            let obj2 = { color: "mobile-text-heading-primary", style: tmp4.emptyText, variant: "heading-md/extrabold", children: tmp30 };
            const tmp33 = closure_11(tmp(tmp2[18]).Text, obj2);
            cResult[13] = tmp4.emptyText;
            cResult[14] = tmp33;
          } else {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                obj = {
                  icon: null,
                  label: item.application.name,
                  onPress() {
                                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                },
                  arrow: true,
                  start: 0 === index,
                  end: index === arg0.numItems - 1
                };
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
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
                  onPress() {
                                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                },
                  arrow: true,
                  start: 0 === index,
                  end: index === arg0.numItems - 1
                };
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
              }
            }
          }
          let obj3 = { style: tmp27, children: null };
          let items1 = [tmp29, tmp32];
          obj3.children = items1;
          const tmp37 = closure_12(closure_4, obj3);
          cResult[15] = tmp4.emptyContainer;
          cResult[16] = tmp29;
          cResult[17] = tmp32;
          cResult[18] = tmp37;
        } else {
          class D {
            constructor(arg0) {
              item = arg0.item;
              index = arg0.index;
              obj = {
                icon: null,
                label: item.application.name,
                onPress() {
                              UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                              const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                              const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                              navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                            },
                arrow: true,
                start: 0 === index,
                end: index === arg0.numItems - 1
              };
              obj1 = { application: item.application };
              obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
              return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
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
                  onPress() {
                                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                },
                  arrow: true,
                  start: 0 === index,
                  end: index === arg0.numItems - 1
                };
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
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
                  onPress() {
                                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                },
                  arrow: true,
                  start: 0 === index,
                  end: index === arg0.numItems - 1
                };
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
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
                  onPress() {
                                  UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                  const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                  navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                },
                  arrow: true,
                  start: 0 === index,
                  end: index === arg0.numItems - 1
                };
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
              }
            }
            if (cResult[24] !== E) {
              class D {
                constructor(arg0) {
                  item = arg0.item;
                  index = arg0.index;
                  obj = {
                    icon: null,
                    label: item.application.name,
                    onPress() {
                                      UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                      const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                      const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                      navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                    },
                    arrow: true,
                    start: 0 === index,
                    end: index === arg0.numItems - 1
                  };
                  obj1 = { application: item.application };
                  obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                  return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
                }
              }
              cResult[24] = E;
              class M {
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
                    onPress() {
                                      UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                      const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                      const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                      navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                    },
                    arrow: true,
                    start: 0 === index,
                    end: index === arg0.numItems - 1
                  };
                  obj1 = { application: item.application };
                  obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                  return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
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
                    onPress() {
                                      UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                      const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                      const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                      navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                    },
                    arrow: true,
                    start: 0 === index,
                    end: index === arg0.numItems - 1
                  };
                  obj1 = { application: item.application };
                  obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                  return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
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
                      onPress() {
                                          UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
                                          const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
                                          const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
                                          navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
                                        },
                      arrow: true,
                      start: 0 === index,
                      end: index === arg0.numItems - 1
                    };
                    obj1 = { application: item.application };
                    obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                    return closure_1_11(closure_0(closure_2[21]).TableRow, obj, item.id);
                  }
                }
                if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                  class V {
                    constructor(arg0, arg1) {
                      NumberResult = Number(arg1.id);
                      return NumberResult - Number(arg0.id);
                    }
                  }
                  cResult[31] = V;
                  class M {
                    constructor(arg0) {
                      obj = { item: arg0.item, index: arg0.index, numItems: appAuthTokens.length };
                      return closure_3(obj);
                    }
                  }
                } else {
                  class V {
                    constructor(arg0, arg1) {
                      NumberResult = Number(arg1.id);
                      return NumberResult - Number(arg0.id);
                    }
                  }
                }
                class M {
                  constructor(arg0) {
                    obj = { item: arg0.item, index: arg0.index, numItems: appAuthTokens.length };
                    return closure_3(obj);
                  }
                }
                cResult[29] = appAuthTokens;
                cResult[30] = tmp22;
              } else {
                class V {
                  constructor(arg0, arg1) {
                    NumberResult = Number(arg1.id);
                    return NumberResult - Number(arg0.id);
                  }
                }
                if (cResult[32] === tmp21) {
                  class V {
                    constructor(arg0, arg1) {
                      NumberResult = Number(arg1.id);
                      return NumberResult - Number(arg0.id);
                    }
                  }
                }
                class M {
                  constructor(arg0) {
                    obj = { item: arg0.item, index: arg0.index, numItems: appAuthTokens.length };
                    return closure_3(obj);
                  }
                }
                let obj4 = { contentContainerStyle: tmp17, ListHeaderComponent: tmp19, renderItem: M, data: tmp21 };
                const tmp26 = closure_11(closure_6, obj4);
                cResult[32] = tmp21;
                cResult[33] = tmp17;
                cResult[34] = tmp19;
                cResult[35] = M;
                cResult[36] = tmp26;
              }
            }
            class M {
              constructor(arg0) {
                obj = { item: arg0.item, index: arg0.index, numItems: appAuthTokens.length };
                return closure_3(obj);
              }
            }
            cResult[26] = appAuthTokens.length;
            cResult[27] = D;
            cResult[28] = M;
          }
          const items2 = [tmp4.container, tmp16];
          cResult[21] = tmp4.container;
          cResult[22] = tmp16;
          cResult[23] = items2;
        }
      }
    }
    if (cResult[8] !== tmp4.spinner) {
      class V {
        constructor(arg0, arg1) {
          NumberResult = Number(arg1.id);
          return NumberResult - Number(arg0.id);
        }
      }
      class M {
        constructor(arg0) {
          obj = { item: arg0.item, index: arg0.index, numItems: appAuthTokens.length };
          return closure_3(obj);
        }
      }
      const tmp40 = closure_11(closure_5, { style: null, animating: true, size: "large" });
      cResult[8] = tmp4.spinner;
      cResult[9] = tmp40;
      let obj5 = { style: null, animating: true, size: "large" };
      const tmp38 = tmp40;
    } else {
      class V {
        constructor(arg0, arg1) {
          NumberResult = Number(arg1.id);
          return NumberResult - Number(arg0.id);
        }
      }
    }
    return tmp38;
  }
  class E {
    constructor() {
      obj = { children: null };
      obj1 = { children: null };
      obj7 = { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: null };
      intl = closure_0(closure_2[19]).intl;
      obj7.children = intl.string(closure_0(closure_2[19]).t.HU3RFw);
      items = [, ];
      items[0] = jsx(closure_0(closure_2[18]).Text, obj7);
      obj8 = { style: closure_0.headerDescription, variant: "heading-sm/medium", children: null };
      intl2 = closure_0(closure_2[19]).intl;
      obj8.children = intl2.string(closure_0(closure_2[19]).t.Nu5Yi0);
      items[1] = jsx(closure_0(closure_2[18]).Text, obj8);
      obj1.children = items;
      items1 = [, ];
      items1[0] = jsxs(View, obj1);
      obj9 = { style: closure_0.appListHeader, children: null };
      obj10 = { title: null };
      intl3 = closure_0(closure_2[19]).intl;
      obj10.title = intl3.string(closure_0(closure_2[19]).t.PHjkRE);
      obj9.children = jsx(closure_0(closure_2[20]).TableRowGroupTitle, obj10);
      items1[1] = jsx(View, obj9);
      obj.children = items1;
      return jsxs(Fragment, obj);
    }
  }
  cResult[3] = tmp4.appListHeader;
  cResult[4] = tmp4.headerDescription;
  cResult[5] = E;
  const tmpResult4 = require("Link");
}) : (() => {
  const tmp = closure_15();
  _require = tmp;
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ fetchState: authStore.getFetchState(), appAuthTokens: authStore.getNewestTokensForNonChildrenApplications() }));
  const appAuthTokens = stateFromStoresObject.appAuthTokens;
  let obj = require("initialize");
  navigation = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  const focusEffect = require("Link").useFocusEffect(noop.useCallback(() => appAuthTokens(navigation[16]).fetch(), []));
  let items1 = [navigation];
  noop = noop.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = {
      icon: closure_1_11(appAuthTokens(navigation[22]), { application: item.application }),
      label: item.application.name,
      onPress() {
        UserSettingsModalActionCreatorsDefault.setSection(constants2.AUTHORIZED_APP);
        const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: { page: constants.USER_SETTINGS }, applicationId: item.application.id };
        const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj3);
        navigation.push(constants2.AUTHORIZED_APP, { oauth2Token: item });
      },
      arrow: true,
      start: 0 === index,
      end: index === item.numItems - 1
    };
    return closure_1_11(closure_0(navigation[21]).TableRow, obj, item.id);
  }, items1);
  if (null != appAuthTokens) {
    if (stateFromStoresObject.fetchState === FetchState.FETCHED) {
      function renderHeader() {
        const obj = { children: null };
        const obj2 = { children: null };
        const obj3 = { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: null };
        const intl = util.intl;
        obj3.children = intl.string(util.t.HU3RFw);
        const items = [closure_2_11(Text_Text.Text, obj3), ];
        const obj4 = { style: closure_0.headerDescription, variant: "heading-sm/medium", children: null };
        const intl2 = util.intl;
        obj4.children = intl2.string(util.t.Nu5Yi0);
        items[1] = closure_2_11(Text_Text.Text, obj4);
        obj2.children = items;
        const items1 = [__initData(React4, obj2), ];
        const obj5 = { style: closure_0.appListHeader, children: null };
        const obj6 = { title: null };
        const intl3 = util.intl;
        obj6.title = intl3.string(util.t.PHjkRE);
        obj5.children = closure_2_11(TableRowGroup.TableRowGroupTitle, obj6);
        items1[1] = closure_2_11(React4, obj5);
        obj.children = items1;
        return __initData(__initData2, obj);
      }
      if (0 === appAuthTokens.length) {
        let obj4 = { style: tmp.emptyContainer, children: null };
        const items2 = [renderHeader(), ];
        let obj5 = { color: "mobile-text-heading-primary", style: tmp.emptyText, variant: "heading-md/extrabold", children: null };
        let intl = tmp3(tmp2[19]).intl;
        obj5.children = intl.string(tmp3(tmp2[19]).t["E+SM6T"]);
        items2[1] = closure_11(tmp3(tmp2[18]).Text, obj5);
        obj4.children = items2;
        let tmp10 = closure_12(closure_4, obj4);
      } else {
        let obj6 = { contentContainerStyle: null, ListHeaderComponent: null, renderItem: null, data: null };
        const items3 = [tmp.container, ];
        const obj7 = { paddingBottom: appAuthTokens(navigation[13])().bottom + PX_24 };
        items3[1] = obj7;
        obj6.contentContainerStyle = items3;
        obj6.ListHeaderComponent = renderHeader();
        obj6.renderItem = function renderItem(item) {
          return closure_3({ item: item.item, index: item.index, numItems: appAuthTokens.length });
        };
        obj6.data = appAuthTokens.sort((id, id2) => Number(id2.id) - Number(id.id));
        tmp10 = closure_11(closure_6, obj6);
      }
    }
    return tmp10;
  }
  tmp10 = closure_11(closure_5, { style: tmp.spinner, animating: true, size: "large" });
  let obj3 = require("Link");
  const obj8 = { style: tmp.spinner, animating: true, size: "large" };
});
export const DisclosureIcon = tmp5;