// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import ApplicationConstants from "../../../applications/ApplicationConstants.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let _require, c1, c2, closure_12, guildId, navigation;

let c10;
let c9;
let _slicedToArray = _slicedToArray_mod;
const ScrollView = react_native.ScrollView;
const ApplicationTypes = ApplicationConstants.ApplicationTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_5;
      let first;
      let first1;
      let first3;
      let isFullServerGating;
      let items1;
      let loading;
      let tmp10;
      const tmp = guildId;
      let obj = guildId(isFullServerGating[7]);
      const cResult = obj.c(33);
      guildId = guildId.guildId;
      let obj2 = guildId(isFullServerGating[8]);
      navigation = obj2.useNavigation();
      let obj3 = guildId(isFullServerGating[9]);
      const subscriptionsSettings = obj3.useSubscriptionsSettings(guildId);
      isFullServerGating = navigation(isFullServerGating[10])(guildId).isFullServerGating;
      const application = navigation(isFullServerGating[11])(guildId, loading.GUILD_ROLE_SUBSCRIPTIONS).application;
      let obj4 = first1;
      [first, tmp10] = first1.useState(null);
      _slicedToArray = tmp10;
      let description;
      const useState = first1.useState;
      if (subscriptionsSettings != null) {
        description = subscriptionsSettings.description;
      }
      const tmp7Result = _slicedToArray(useState(description), 2);
      first1 = tmp7Result[0];
      const tmp13 = tmp7Result[1];
      const tmp7Result2 = _slicedToArray(obj4.useState(isFullServerGating), 2);
      const first2 = tmp7Result2[0];
      const tmp16 = tmp7Result2[1];
      const tmpResult = tmp(isFullServerGating[9]);
      const updateSubscriptionsSettings1 = tmpResult.useUpdateSubscriptionsSettings();
      loading = updateSubscriptionsSettings1.loading;
      const updateSubscriptionsSettings = updateSubscriptionsSettings1.updateSubscriptionsSettings;
      const error = updateSubscriptionsSettings1.error;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj5 = {};
        cResult[0] = obj5;
        first3 = obj5;
      } else {
        first3 = cResult[0];
      }
      let tmp19 = null != first;
      const insets = tmp6(tmp2[12])(first3).insets;
      if (!tmp19) {
        let tmp20 = null != first1;
        if (tmp20) {
          let description1;
          if (subscriptionsSettings != null) {
            description1 = subscriptionsSettings.description;
          }
          tmp20 = first1 !== description1;
        }
        if (tmp20) {
          tmp20 = 0 !== first1.length;
        }
        tmp19 = tmp20;
      }
      if (!tmp19) {
        tmp19 = isFullServerGating !== first2;
      }
      closure_11 = tmp19;
      if (cResult[1] === application) {
        if (cResult[2] === first) {
          let tmp22;
          if (cResult[3] === subscriptionsSettings) {
            tmp22 = cResult[4];
          }
          if (cResult[5] === first) {
            if (cResult[6] === first1) {
              if (cResult[7] === guildId) {
                if (cResult[8] === first2) {
                  if (cResult[9] === isFullServerGating) {
                    let description2;
                    const tmp26 = cResult[10];
                    if (subscriptionsSettings != null) {
                      description2 = subscriptionsSettings.description;
                    }
                    if (tmp26 === description2) {
                      let tmp28;
                      if (cResult[11] === updateSubscriptionsSettings) {
                        tmp28 = cResult[12];
                      }
                      closure_12 = tmp28;
                      if (cResult[13] === tmp28) {
                        if (cResult[14] === tmp19) {
                          if (cResult[15] === loading) {
                            let tmp31;
                            let tmp32;
                            let tmp35;
                            if (cResult[16] === navigation) {
                              tmp31 = cResult[17];
                              tmp32 = cResult[18];
                            }
                            const layoutEffect = obj4.useLayoutEffect(tmp31, tmp32);
                            if (cResult[19] !== error) {
                              class V {
                                constructor() {
                                  if (null != error) {
                                    const presentError = ToastUtils.presentError;
                                    ToastUtils;
                                    let anyErrorMessage = error.getAnyErrorMessage();
                                    if (anyErrorMessage == null) {
                                      const intl = intl2.intl;
                                      anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                                    }
                                    presentError(anyErrorMessage);
                                  }
                                }
                              }
                              const items = [error];
                              cResult[19] = error;
                              cResult[20] = V;
                              cResult[21] = items;
                              tmp35 = items;
                            } else {
                              class V {
                                constructor() {
                                  if (null != error) {
                                    const presentError = ToastUtils.presentError;
                                    ToastUtils;
                                    let anyErrorMessage = error.getAnyErrorMessage();
                                    if (anyErrorMessage == null) {
                                      const intl = intl2.intl;
                                      anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                                    }
                                    presentError(anyErrorMessage);
                                  }
                                }
                              }
                              tmp35 = cResult[21];
                            }
                            const effect = obj4.useEffect(V, tmp35);
                            const sum = insets.bottom + tmp6(tmp2[19]).space.PX_16;
                            if (cResult[22] !== sum) {
                              class V {
                                constructor() {
                                  if (null != error) {
                                    const presentError = ToastUtils.presentError;
                                    ToastUtils;
                                    let anyErrorMessage = error.getAnyErrorMessage();
                                    if (anyErrorMessage == null) {
                                      const intl = intl2.intl;
                                      anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                                    }
                                    presentError(anyErrorMessage);
                                  }
                                }
                              }
                              tmp39[0] = sum;
                              cResult[22] = sum;
                              cResult[23] = tmp39;
                            } else {
                              class V {
                                constructor() {
                                  if (null != error) {
                                    const presentError = ToastUtils.presentError;
                                    ToastUtils;
                                    let anyErrorMessage = error.getAnyErrorMessage();
                                    if (anyErrorMessage == null) {
                                      const intl = intl2.intl;
                                      anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                                    }
                                    presentError(anyErrorMessage);
                                  }
                                }
                              }
                            }
                            if (cResult[24] !== first2) {
                              class V {
                                constructor() {
                                  if (null != error) {
                                    const presentError = ToastUtils.presentError;
                                    ToastUtils;
                                    let anyErrorMessage = error.getAnyErrorMessage();
                                    if (anyErrorMessage == null) {
                                      const intl = intl2.intl;
                                      anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                                    }
                                    presentError(anyErrorMessage);
                                  }
                                }
                              }
                              let obj6 = { isFullServerGating: first2, onChange: tmp16 };
                              cResult[24] = first2;
                              cResult[25] = updateSubscriptionsSettings(navigation(isFullServerGating[20]), obj6);
                              const tmp41 = updateSubscriptionsSettings(navigation(isFullServerGating[20]), obj6);
                            } else {
                              class V {
                                constructor() {
                                  if (null != error) {
                                    const presentError = ToastUtils.presentError;
                                    ToastUtils;
                                    let anyErrorMessage = error.getAnyErrorMessage();
                                    if (anyErrorMessage == null) {
                                      const intl = intl2.intl;
                                      anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                                    }
                                    presentError(anyErrorMessage);
                                  }
                                }
                              }
                            }
                            if (first1 == null) {
                              class V {
                                constructor() {
                                  if (null != error) {
                                    const presentError = ToastUtils.presentError;
                                    ToastUtils;
                                    let anyErrorMessage = error.getAnyErrorMessage();
                                    if (anyErrorMessage == null) {
                                      const intl = intl2.intl;
                                      anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                                    }
                                    presentError(anyErrorMessage);
                                  }
                                }
                              }
                              if (subscriptionsSettings != null) {
                                class V {
                                  constructor() {
                                    if (null != error) {
                                      const presentError = ToastUtils.presentError;
                                      ToastUtils;
                                      let anyErrorMessage = error.getAnyErrorMessage();
                                      if (anyErrorMessage == null) {
                                        const intl = intl2.intl;
                                        anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                                      }
                                      presentError(anyErrorMessage);
                                    }
                                  }
                                }
                              }
                              first1 = tmp42;
                            }
                            if (first1 == null) {
                              class V {
                                constructor() {
                                  if (null != error) {
                                    const presentError = ToastUtils.presentError;
                                    ToastUtils;
                                    let anyErrorMessage = error.getAnyErrorMessage();
                                    if (anyErrorMessage == null) {
                                      const intl = intl2.intl;
                                      anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                                    }
                                    presentError(anyErrorMessage);
                                  }
                                }
                              }
                            }
                            if (cResult[26] === tmp22) {
                              class V {
                                constructor() {
                                  if (null != error) {
                                    const presentError = ToastUtils.presentError;
                                    ToastUtils;
                                    let anyErrorMessage = error.getAnyErrorMessage();
                                    if (anyErrorMessage == null) {
                                      const intl = intl2.intl;
                                      anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                                    }
                                    presentError(anyErrorMessage);
                                  }
                                }
                              }
                              if (cResult[29] === tmp40) {
                                class V {
                                  constructor() {
                                    if (null != error) {
                                      const presentError = ToastUtils.presentError;
                                      ToastUtils;
                                      let anyErrorMessage = error.getAnyErrorMessage();
                                      if (anyErrorMessage == null) {
                                        const intl = intl2.intl;
                                        anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                                      }
                                      presentError(anyErrorMessage);
                                    }
                                  }
                                }
                              }
                              const obj8 = { contentContainerStyle: tmp39, children: items1 };
                              items1 = [tmp40, tmp43];
                              cResult[29] = tmp40;
                              cResult[30] = tmp43;
                              cResult[31] = tmp39;
                              cResult[32] = error(first2, obj8);
                              const tmp49 = error(first2, obj8);
                            }
                            const obj9 = { cover: tmp22, setCover: tmp10, description: first1, setDescription: tmp13 };
                            cResult[26] = tmp22;
                            cResult[27] = first1;
                            cResult[28] = updateSubscriptionsSettings(tmp(isFullServerGating[21]).Content, obj9);
                            const tmp45 = updateSubscriptionsSettings(tmp(isFullServerGating[21]).Content, obj9);
                          }
                        }
                      }
                      const fn2 = function k() {
                        let fn;
                        let onPress;
                        const setOptions = navigation.setOptions;
                        if (loading) {
                          fn = () =>
                            updateSubscriptionsSettings(guildId(isFullServerGating[15]).HeaderSubmittingIndicator, {});
                        } else if (closure_11) {
                          fn = () => {
                            let intl;
                            const obj = { text: intl.string(guildId(isFullServerGating[17]).t["R3BPH+"]), onPress };
                            const HeaderActionButton = guildId(isFullServerGating[16]).HeaderActionButton;
                            intl = guildId(isFullServerGating[17]).intl;
                            return updateSubscriptionsSettings(HeaderActionButton, obj);
                          };
                        } else {
                          fn = () => null;
                        }
                        setOptions({ headerRight: fn });
                      };
                      const items2 = [navigation, tmp19, loading, tmp28];
                      cResult[13] = tmp28;
                      cResult[14] = tmp19;
                      cResult[15] = loading;
                      cResult[16] = navigation;
                      cResult[17] = fn2;
                      cResult[18] = items2;
                      tmp32 = items2;
                      tmp31 = fn2;
                    }
                  }
                }
              }
            }
          }
          _require = first(function* () {
            let description;
            if (description === 2) {
              description = 3;
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
                description = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    description = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    description = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_0 = tmp;
                    let tmp10 = null != description2;
                    if (tmp10) {
                      description = undefined;
                      if (description != null) {
                        description = description.description;
                      }
                      tmp10 = description2 !== description;
                    }
                    if (tmp10) {
                      tmp10 = 0 !== description2.length;
                    }
                    const obj5 = {};
                    if (tmp10) {
                      obj5.description = description2;
                    }
                    if (null != uri) {
                      obj5.cover_image = uri.uri;
                    }
                    if (closure_1_3 !== full_server_gate) {
                      obj5.full_server_gate = full_server_gate;
                    }
                    const obj3 = navigation(isFullServerGating[14]);
                    if (!obj3.isEmpty(obj5)) {
                      c1 = 1;
                      description = 1;
                      const obj6 = { value: updateSubscriptionsSettings(closure_0, obj5), done: false };
                      return obj6;
                    }
                  }
                } else if (arg0 === 1) {
                  description = 3;
                  throw value;
                } else if (arg0 === 2) {
                  description = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_1_5(null);
                }
                description = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp16) {
                description = 3;
                throw tmp16;
              }
            }
          });
          cResult[5] = first;
          cResult[6] = first1;
          cResult[7] = guildId;
          cResult[8] = first2;
          cResult[9] = isFullServerGating;
          if (subscriptionsSettings != null) {
            class V {
              constructor() {
                if (null != error) {
                  const presentError = ToastUtils.presentError;
                  ToastUtils;
                  let anyErrorMessage = error.getAnyErrorMessage();
                  if (anyErrorMessage == null) {
                    const intl = intl2.intl;
                    anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                  }
                  presentError(anyErrorMessage);
                }
              }
            }
          }
          let fn = function () {
            return closure_0(...arguments);
          };
          cResult[10] = undefined;
          cResult[11] = updateSubscriptionsSettings;
          cResult[12] = fn;
          tmp28 = fn;
        }
      }
      let tmp23 = first;
      if (first == null) {
        class V {
          constructor() {
            if (null != error) {
              const presentError = ToastUtils.presentError;
              ToastUtils;
              let anyErrorMessage = error.getAnyErrorMessage();
              if (anyErrorMessage == null) {
                const intl = intl2.intl;
                anyErrorMessage = intl.string(intl2.t.ZUEGFn);
              }
              presentError(anyErrorMessage);
            }
          }
        }
        if (subscriptionsSettings != null) {
          class V {
            constructor() {
              if (null != error) {
                const presentError = ToastUtils.presentError;
                ToastUtils;
                let anyErrorMessage = error.getAnyErrorMessage();
                if (anyErrorMessage == null) {
                  const intl = intl2.intl;
                  anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                }
                presentError(anyErrorMessage);
              }
            }
          }
        }
        let source = null;
        if (null != tmp24) {
          class V {
            constructor() {
              if (null != error) {
                const presentError = ToastUtils.presentError;
                ToastUtils;
                let anyErrorMessage = error.getAnyErrorMessage();
                if (anyErrorMessage == null) {
                  const intl = intl2.intl;
                  anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                }
                presentError(anyErrorMessage);
              }
            }
          }
          if (null != application) {
            class V {
              constructor() {
                if (null != error) {
                  const presentError = ToastUtils.presentError;
                  ToastUtils;
                  let anyErrorMessage = error.getAnyErrorMessage();
                  if (anyErrorMessage == null) {
                    const intl = intl2.intl;
                    anyErrorMessage = intl.string(intl2.t.ZUEGFn);
                  }
                  presentError(anyErrorMessage);
                }
              }
            }
            const obj10 = { application_id: application.id, image_asset: subscriptionsSettings.cover_image_asset };
            const obj7 = subscriptionsSettings(isFullServerGating[13]);
            source = obj7.getSource(obj10);
          }
        }
        tmp23 = source;
      }
      cResult[1] = application;
      cResult[2] = first;
      cResult[3] = subscriptionsSettings;
      cResult[4] = tmp23;
      tmp22 = tmp23;
    }
  : (guildId) => {
      let closure_5;
      let first1;
      let items3;
      let str;
      let tmp12;
      let tmp15;
      guildId = guildId.guildId;
      let isFullServerGating;
      _slicedToArray = undefined;
      str = undefined;
      first1 = undefined;
      let loading;
      let updateSubscriptionsSettings;
      let error;
      closure_11 = undefined;
      let callback;
      const tmp = guildId;
      let obj = guildId(isFullServerGating[8]);
      navigation = obj.useNavigation();
      let obj2 = guildId(isFullServerGating[9]);
      const subscriptionsSettings = obj2.useSubscriptionsSettings(guildId);
      isFullServerGating = navigation(isFullServerGating[10])(guildId).isFullServerGating;
      const application = navigation(isFullServerGating[11])(guildId, loading.GUILD_ROLE_SUBSCRIPTIONS).application;
      let obj3 = str;
      const tmp7 = _slicedToArray(str.useState(null), 2);
      const first = tmp7[0];
      _slicedToArray = tmp9;
      let description;
      const useState = str.useState;
      if (subscriptionsSettings != null) {
        description = subscriptionsSettings.description;
      }
      [str, tmp12] = useState(description);
      [first1, tmp15] = obj3.useState(isFullServerGating);
      const tmpResult = tmp(isFullServerGating[9]);
      const updateSubscriptionsSettings1 = tmpResult.useUpdateSubscriptionsSettings();
      loading = updateSubscriptionsSettings1.loading;
      updateSubscriptionsSettings = updateSubscriptionsSettings1.updateSubscriptionsSettings;
      error = updateSubscriptionsSettings1.error;
      let tmp17 = null != first;
      const insets = tmp5(tmp2[12])({}).insets;
      if (!tmp17) {
        let tmp18 = null != str;
        if (tmp18) {
          let description1;
          if (subscriptionsSettings != null) {
            description1 = subscriptionsSettings.description;
          }
          tmp18 = str !== description1;
        }
        if (tmp18) {
          tmp18 = 0 !== str.length;
        }
        tmp17 = tmp18;
      }
      if (!tmp17) {
        tmp17 = isFullServerGating !== first1;
      }
      closure_11 = tmp17;
      let tmp20 = first;
      if (first == null) {
        let cover_image_asset;
        if (subscriptionsSettings != null) {
          cover_image_asset = subscriptionsSettings.cover_image_asset;
        }
        let source = null;
        if (null != cover_image_asset) {
          source = null;
          if (null != application) {
            let obj5 = subscriptionsSettings(tmp2[13]);
            let obj4 = { application_id: application.id, image_asset: subscriptionsSettings.cover_image_asset };
            source = obj5.getSource(obj4);
          }
        }
        tmp20 = source;
      }
      const items = [
        str,
        guildId,
        updateSubscriptionsSettings,
        subscriptionsSettings,
        first,
        first1,
        isFullServerGating,
      ];
      callback = obj3.useCallback(
        first(function* () {
          let v1;
          if (c2 === 2) {
            c2 = 3;
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
              c2 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let closure_0 = tmp;
                  let tmp10 = null != str;
                  if (tmp10) {
                    let description;
                    if (subscriptionsSettings != null) {
                      description = subscriptionsSettings.description;
                    }
                    tmp10 = arr !== description;
                  }
                  if (tmp10) {
                    tmp10 = 0 !== arr.length;
                  }
                  const obj5 = {};
                  if (tmp10) {
                    obj5.description = str;
                  }
                  if (null != first) {
                    obj5.cover_image = first.uri;
                  }
                  if (isFullServerGating !== first1) {
                    obj5.full_server_gate = first1;
                  }
                  const obj3 = v1(isFullServerGating[14]);
                  if (!obj3.isEmpty(obj5)) {
                    v1 = 1;
                    c2 = 1;
                    const obj6 = { value: updateSubscriptionsSettings(guildId, obj5), done: false };
                    return obj6;
                  }
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_128_5(null);
              }
              c2 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp16) {
              c2 = 3;
              throw tmp16;
            }
          }
        }),
        items,
      );
      const items1 = [navigation, tmp17, loading, callback];
      const layoutEffect = obj3.useLayoutEffect(() => {
        let fn;
        let onPress;
        const setOptions = navigation.setOptions;
        if (loading) {
          fn = () => updateSubscriptionsSettings(guildId(isFullServerGating[15]).HeaderSubmittingIndicator, {});
        } else if (closure_11) {
          fn = () => {
            let intl;
            const obj = { text: intl.string(guildId(isFullServerGating[17]).t["R3BPH+"]), onPress };
            const HeaderActionButton = guildId(isFullServerGating[16]).HeaderActionButton;
            intl = guildId(isFullServerGating[17]).intl;
            return updateSubscriptionsSettings(HeaderActionButton, obj);
          };
        } else {
          fn = () => null;
        }
        setOptions({ headerRight: fn });
      }, items1);
      const items2 = [error];
      const effect = obj3.useEffect(() => {
        if (null != error) {
          const presentError = ToastUtils.presentError;
          ToastUtils;
          let anyErrorMessage = error.getAnyErrorMessage();
          if (anyErrorMessage == null) {
            const intl = intl2.intl;
            anyErrorMessage = intl.string(intl2.t.ZUEGFn);
          }
          presentError(anyErrorMessage);
        }
      }, items2);
      let obj6 = {
        contentContainerStyle: { paddingBottom: insets.bottom + tmp5(isFullServerGating[19]).space.PX_16 },
        children: items3,
      };
      items3 = [,];
      ({ paddingBottom: insets.bottom + navigation(isFullServerGating[19]).space.PX_16 });
      items3[0] = updateSubscriptionsSettings(navigation(isFullServerGating[20]), {
        isFullServerGating: first1,
        onChange: tmp15,
      });
      const obj8 = { cover: tmp20, setCover: tmp7[1], description: str, setDescription: tmp12 };
      const Content = tmp(tmp2[21]).Content;
      const tmp27 = error;
      const tmp28 = first1;
      const tmp29 = updateSubscriptionsSettings;
      if (str == null) {
        let description2;
        if (subscriptionsSettings != null) {
          description2 = subscriptionsSettings.description;
        }
        str = description2;
      }
      if (str == null) {
        str = "";
      }
      items3[1] = tmp29(Content, obj8);
      return tmp27(tmp28, obj6);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(5);
      guildId = guildId.guildId;
      if (cResult[0] !== guildId) {
        const obj2 = { guildId };
        const tmp6 = React4(closure_11, obj2);
        cResult[0] = guildId;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === guildId) {
        let tmp7;
        if (cResult[3] === tmp3) {
          tmp7 = cResult[4];
        }
        return tmp7;
      }
      const tmp8 = React4(GuildSettingsRoleSubscriptionContainerDefault, { guildId, children: tmp3 });
      cResult[2] = guildId;
      cResult[3] = tmp3;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const obj = { guildId, children: React4(closure_11, { guildId }) };
      const tmp = GuildSettingsRoleSubscriptionContainerDefault;
      return React4(tmp, obj);
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx",
);

export default tmp3;
