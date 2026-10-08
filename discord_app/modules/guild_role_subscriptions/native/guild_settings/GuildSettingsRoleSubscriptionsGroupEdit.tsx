// === Module 18249: GuildSettingsRoleSubscriptionsGroupEdit ===

// Module 18249 (GuildSettingsRoleSubscriptionsGroupEdit)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 18262 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const ApplicationTypes = fn(1372).ApplicationTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleSubscriptionsGroupEditInner(guildId) {
  const cResult = require("c").c(33);
  guildId = guildId.guildId;
  _require = guildId;
  let obj = require("c");
  const navigation = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  const subscriptionsSettings = require("GuildRoleSubscriptionsHooks").useSubscriptionsSettings(guildId);
  isFullServerGating = navigation(isFullServerGating[10])(guildId).isFullServerGating;
  const application = navigation(isFullServerGating[11])(guildId, loading.GUILD_ROLE_SUBSCRIPTIONS).application;
  [first] = first1.useState(null);
  _slicedToArray = tmp10;
  let description;
  if (subscriptionsSettings != null) {
    description = subscriptionsSettings.description;
  }
  const tmp7Result = _slicedToArray(first1.useState(description), 2);
  first1 = tmp7Result[0];
  const tmp7Result2 = _slicedToArray(first1.useState(isFullServerGating), 2);
  const first2 = tmp7Result2[0];
  let obj3 = require("GuildRoleSubscriptionsHooks");
  const updateSubscriptionsSettings1 = require("GuildRoleSubscriptionsHooks").useUpdateSubscriptionsSettings();
  loading = updateSubscriptionsSettings1.loading;
  const updateSubscriptionsSettings = updateSubscriptionsSettings1.updateSubscriptionsSettings;
  const error = updateSubscriptionsSettings1.error;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj5 = {};
    cResult[0] = obj5;
    let first3 = obj5;
  } else {
    first3 = cResult[0];
  }
  let tmp17 = null != first;
  if (!tmp17) {
    let tmp18 = null != first1;
    if (tmp18) {
      let description1;
      if (subscriptionsSettings != null) {
        description1 = subscriptionsSettings.description;
      }
      tmp18 = first1 !== description1;
    }
    if (tmp18) {
      tmp18 = 0 !== first1.length;
    }
    tmp17 = tmp18;
  }
  if (!tmp17) {
    tmp17 = isFullServerGating !== first2;
  }
  closure_11 = tmp17;
  if (cResult[1] === application) {
    if (cResult[2] === first) {
      if (cResult[3] === subscriptionsSettings) {
        let tmp20 = cResult[4];
      }
      if (cResult[5] === first) {
        if (cResult[6] === first1) {
          if (cResult[7] === guildId) {
            if (cResult[8] === first2) {
              if (cResult[9] === isFullServerGating) {
                let description2;
                if (subscriptionsSettings != null) {
                  description2 = subscriptionsSettings.description;
                }
                if (cResult[10] === description2) {
                  if (cResult[11] === updateSubscriptionsSettings) {
                    let tmp25 = cResult[12];
                  }
                  closure_12 = tmp25;
                  if (cResult[13] === tmp25) {
                    if (cResult[14] === tmp17) {
                      if (cResult[15] === loading) {
                        if (cResult[16] === navigation) {
                          let tmp28 = cResult[17];
                          let tmp29 = cResult[18];
                        }
                        const layoutEffect = obj4.useLayoutEffect(tmp28, tmp29);
                        if (cResult[19] !== error) {
                          class V {
                            constructor() {
                              obj = error;
                              if (null != error) {
                                tmp = closure_0;
                                tmp2 = closure_3;
                                obj2 = closure_0(closure_3[18]);
                                anyErrorMessage = obj.getAnyErrorMessage();
                                if (anyErrorMessage == null) {
                                  intl = tmp(tmp2[17]).intl;
                                  anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
                                }
                                presentErrorResult = obj2.presentError(anyErrorMessage);
                              }
                              return;
                            }
                          }
                          const items = [error];
                          cResult[19] = error;
                          cResult[20] = V;
                          cResult[21] = items;
                          let tmp32 = items;
                        } else {
                          class V {
                            constructor() {
                              obj = error;
                              if (null != error) {
                                tmp = closure_0;
                                tmp2 = closure_3;
                                obj2 = closure_0(closure_3[18]);
                                anyErrorMessage = obj.getAnyErrorMessage();
                                if (anyErrorMessage == null) {
                                  intl = tmp(tmp2[17]).intl;
                                  anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
                                }
                                presentErrorResult = obj2.presentError(anyErrorMessage);
                              }
                              return;
                            }
                          }
                          tmp32 = cResult[21];
                        }
                        const effect = obj4.useEffect(V, tmp32);
                        const sum = tmp6(tmp2[12])(first3).insets.bottom + tmp6(tmp2[19]).space.PX_16;
                        if (cResult[22] !== sum) {
                          class V {
                            constructor() {
                              obj = error;
                              if (null != error) {
                                tmp = closure_0;
                                tmp2 = closure_3;
                                obj2 = closure_0(closure_3[18]);
                                anyErrorMessage = obj.getAnyErrorMessage();
                                if (anyErrorMessage == null) {
                                  intl = tmp(tmp2[17]).intl;
                                  anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
                                }
                                presentErrorResult = obj2.presentError(anyErrorMessage);
                              }
                              return;
                            }
                          }
                          tmp36[0] = sum;
                          cResult[22] = sum;
                          cResult[23] = tmp36;
                        } else {
                          class V {
                            constructor() {
                              obj = error;
                              if (null != error) {
                                tmp = closure_0;
                                tmp2 = closure_3;
                                obj2 = closure_0(closure_3[18]);
                                anyErrorMessage = obj.getAnyErrorMessage();
                                if (anyErrorMessage == null) {
                                  intl = tmp(tmp2[17]).intl;
                                  anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
                                }
                                presentErrorResult = obj2.presentError(anyErrorMessage);
                              }
                              return;
                            }
                          }
                        }
                        if (cResult[24] !== first2) {
                          class V {
                            constructor() {
                              obj = error;
                              if (null != error) {
                                tmp = closure_0;
                                tmp2 = closure_3;
                                obj2 = closure_0(closure_3[18]);
                                anyErrorMessage = obj.getAnyErrorMessage();
                                if (anyErrorMessage == null) {
                                  intl = tmp(tmp2[17]).intl;
                                  anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
                                }
                                presentErrorResult = obj2.presentError(anyErrorMessage);
                              }
                              return;
                            }
                          }
                          let obj6 = { isFullServerGating: first2, onChange: tmp7Result2[1] };
                          const tmp38 = updateSubscriptionsSettings(tmp6(tmp2[20]), obj6);
                          cResult[24] = first2;
                          cResult[25] = tmp38;
                        } else {
                          class V {
                            constructor() {
                              obj = error;
                              if (null != error) {
                                tmp = closure_0;
                                tmp2 = closure_3;
                                obj2 = closure_0(closure_3[18]);
                                anyErrorMessage = obj.getAnyErrorMessage();
                                if (anyErrorMessage == null) {
                                  intl = tmp(tmp2[17]).intl;
                                  anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
                                }
                                presentErrorResult = obj2.presentError(anyErrorMessage);
                              }
                              return;
                            }
                          }
                        }
                        if (first1 == null) {
                          class V {
                            constructor() {
                              obj = error;
                              if (null != error) {
                                tmp = closure_0;
                                tmp2 = closure_3;
                                obj2 = closure_0(closure_3[18]);
                                anyErrorMessage = obj.getAnyErrorMessage();
                                if (anyErrorMessage == null) {
                                  intl = tmp(tmp2[17]).intl;
                                  anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
                                }
                                presentErrorResult = obj2.presentError(anyErrorMessage);
                              }
                              return;
                            }
                          }
                          if (subscriptionsSettings != null) {
                            class V {
                              constructor() {
                                obj = error;
                                if (null != error) {
                                  tmp = closure_0;
                                  tmp2 = closure_3;
                                  obj2 = closure_0(closure_3[18]);
                                  anyErrorMessage = obj.getAnyErrorMessage();
                                  if (anyErrorMessage == null) {
                                    intl = tmp(tmp2[17]).intl;
                                    anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
                                  }
                                  presentErrorResult = obj2.presentError(anyErrorMessage);
                                }
                                return;
                              }
                            }
                          }
                          first1 = tmp39;
                        }
                        if (first1 == null) {
                          class V {
                            constructor() {
                              obj = error;
                              if (null != error) {
                                tmp = closure_0;
                                tmp2 = closure_3;
                                obj2 = closure_0(closure_3[18]);
                                anyErrorMessage = obj.getAnyErrorMessage();
                                if (anyErrorMessage == null) {
                                  intl = tmp(tmp2[17]).intl;
                                  anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
                                }
                                presentErrorResult = obj2.presentError(anyErrorMessage);
                              }
                              return;
                            }
                          }
                        }
                        if (cResult[26] === tmp20) {
                          class V {
                            constructor() {
                              obj = error;
                              if (null != error) {
                                tmp = closure_0;
                                tmp2 = closure_3;
                                obj2 = closure_0(closure_3[18]);
                                anyErrorMessage = obj.getAnyErrorMessage();
                                if (anyErrorMessage == null) {
                                  intl = tmp(tmp2[17]).intl;
                                  anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
                                }
                                presentErrorResult = obj2.presentError(anyErrorMessage);
                              }
                              return;
                            }
                          }
                          if (cResult[29] === tmp37) {
                            class V {
                              constructor() {
                                obj = error;
                                if (null != error) {
                                  tmp = closure_0;
                                  tmp2 = closure_3;
                                  obj2 = closure_0(closure_3[18]);
                                  anyErrorMessage = obj.getAnyErrorMessage();
                                  if (anyErrorMessage == null) {
                                    intl = tmp(tmp2[17]).intl;
                                    anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
                                  }
                                  presentErrorResult = obj2.presentError(anyErrorMessage);
                                }
                                return;
                              }
                            }
                          }
                          const obj8 = { contentContainerStyle: tmp36, children: null };
                          const items1 = [tmp37, tmp40];
                          obj8.children = items1;
                          const tmp46 = error(first2, obj8);
                          cResult[29] = tmp37;
                          cResult[30] = tmp40;
                          cResult[31] = tmp36;
                          cResult[32] = tmp46;
                        }
                        const obj9 = { cover: tmp20, setCover: tmp10, description: first1, setDescription: tmp7Result[1] };
                        const tmp42 = updateSubscriptionsSettings(tmp(tmp2[21]).Content, obj9);
                        cResult[26] = tmp20;
                        cResult[27] = first1;
                        cResult[28] = tmp42;
                      }
                    }
                  }
                  let fn = function k() {
                    if (loading) {
                      let fn = () => updateSubscriptionsSettings(closure_1_0(isFullServerGating[15]).HeaderSubmittingIndicator, {});
                    } else if (closure_11) {
                      fn = () => {
                        const obj = { text: null, onPress: null };
                        const intl = closure_0(isFullServerGating[17]).intl;
                        obj.text = intl.string(closure_0(isFullServerGating[17]).t["R3BPH+"]);
                        obj.onPress = onPress;
                        return updateSubscriptionsSettings(closure_0(isFullServerGating[16]).HeaderActionButton, obj);
                      };
                    } else {
                      fn = () => null;
                    }
                    navigation.setOptions({ headerRight: fn });
                  };
                  const items2 = [navigation, tmp17, loading, tmp25];
                  cResult[13] = tmp25;
                  cResult[14] = tmp17;
                  cResult[15] = loading;
                  cResult[16] = navigation;
                  cResult[17] = fn;
                  cResult[18] = items2;
                  tmp29 = items2;
                  tmp28 = fn;
                }
              }
            }
          }
        }
      }
      _require = first(function*() {
        if (description === 2) {
          description = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
                closure_0 = tmp2;
                let tmp11 = null != first1;
                if (tmp11) {
                  description = undefined;
                  if (description != null) {
                    description = description.description;
                  }
                  tmp11 = first1 !== description;
                }
                if (tmp11) {
                  tmp11 = 0 !== first1.length;
                }
                const obj5 = {};
                if (tmp11) {
                  obj5.description = first1;
                }
                if (null != uri) {
                  obj5.cover_image = uri.uri;
                }
                if (closure_1_3 !== full_server_gate) {
                  obj5.full_server_gate = full_server_gate;
                }
                if (obj3.isEmpty(obj5)) {
                  description = 3;
                } else {
                  c1 = 1;
                  description = 1;
                  const obj6 = { value: updateSubscriptionsSettings(closure_0, obj5), done: false };
                  return obj6;
                }
                obj3 = navigation(isFullServerGating[14]);
              }
            } else if (arg0 === 1) {
              description = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_1_5(null);
            }
            description = 3;
            const obj = { value, done: true };
            return obj;
          } catch (tmp17) {
            description = tmp;
            throw tmp17;
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
            obj = error;
            if (null != error) {
              tmp = closure_0;
              tmp2 = closure_3;
              obj2 = closure_0(closure_3[18]);
              anyErrorMessage = obj.getAnyErrorMessage();
              if (anyErrorMessage == null) {
                intl = tmp(tmp2[17]).intl;
                anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
              }
              presentErrorResult = obj2.presentError(anyErrorMessage);
            }
            return;
          }
        }
      }
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
      cResult[10] = undefined;
      cResult[11] = updateSubscriptionsSettings;
      cResult[12] = t3;
      tmp25 = t3;
    }
  }
  let tmp21 = first;
  if (first == null) {
    class V {
      constructor() {
        obj = error;
        if (null != error) {
          tmp = closure_0;
          tmp2 = closure_3;
          obj2 = closure_0(closure_3[18]);
          anyErrorMessage = obj.getAnyErrorMessage();
          if (anyErrorMessage == null) {
            intl = tmp(tmp2[17]).intl;
            anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
          }
          presentErrorResult = obj2.presentError(anyErrorMessage);
        }
        return;
      }
    }
    if (subscriptionsSettings != null) {
      class V {
        constructor() {
          obj = error;
          if (null != error) {
            tmp = closure_0;
            tmp2 = closure_3;
            obj2 = closure_0(closure_3[18]);
            anyErrorMessage = obj.getAnyErrorMessage();
            if (anyErrorMessage == null) {
              intl = tmp(tmp2[17]).intl;
              anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
            }
            presentErrorResult = obj2.presentError(anyErrorMessage);
          }
          return;
        }
      }
    }
    let source = null;
    if (null != tmp22) {
      class V {
        constructor() {
          obj = error;
          if (null != error) {
            tmp = closure_0;
            tmp2 = closure_3;
            obj2 = closure_0(closure_3[18]);
            anyErrorMessage = obj.getAnyErrorMessage();
            if (anyErrorMessage == null) {
              intl = tmp(tmp2[17]).intl;
              anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
            }
            presentErrorResult = obj2.presentError(anyErrorMessage);
          }
          return;
        }
      }
      if (null != application) {
        class V {
          constructor() {
            obj = error;
            if (null != error) {
              tmp = closure_0;
              tmp2 = closure_3;
              obj2 = closure_0(closure_3[18]);
              anyErrorMessage = obj.getAnyErrorMessage();
              if (anyErrorMessage == null) {
                intl = tmp(tmp2[17]).intl;
                anyErrorMessage = intl.string(tmp(tmp2[17]).t.ZUEGFn);
              }
              presentErrorResult = obj2.presentError(anyErrorMessage);
            }
            return;
          }
        }
        const obj10 = { application_id: application.id, image_asset: subscriptionsSettings.cover_image_asset };
        source = subscriptionsSettings(tmp2[13]).getSource(obj10);
        const obj7 = subscriptionsSettings(tmp2[13]);
      }
    }
    tmp21 = source;
  }
  cResult[1] = application;
  cResult[2] = first;
  cResult[3] = subscriptionsSettings;
  cResult[4] = tmp21;
  tmp20 = tmp21;
  const tmpResult = require("GuildRoleSubscriptionsHooks");
}) : (function GuildSettingsRoleSubscriptionsGroupEditInner(guildId) {
  guildId = guildId.guildId;
  let isFullServerGating;
  _slicedToArray = undefined;
  str = undefined;
  let first1;
  let loading;
  let updateSubscriptionsSettings;
  let error;
  closure_11 = undefined;
  let callback;
  const navigation = guildId(isFullServerGating[8]).useNavigation();
  let obj = guildId(isFullServerGating[8]);
  const subscriptionsSettings = guildId(isFullServerGating[9]).useSubscriptionsSettings(guildId);
  isFullServerGating = navigation(isFullServerGating[10])(guildId).isFullServerGating;
  const application = navigation(isFullServerGating[11])(guildId, loading.GUILD_ROLE_SUBSCRIPTIONS).application;
  const tmp7 = _slicedToArray(str.useState(null), 2);
  const first = tmp7[0];
  _slicedToArray = tmp9;
  let description;
  if (subscriptionsSettings != null) {
    description = subscriptionsSettings.description;
  }
  [str, obj8.setDescription] = str.useState(description);
  const tmp6Result2 = _slicedToArray(str.useState(isFullServerGating), 2);
  first1 = tmp6Result2[0];
  let obj2 = guildId(isFullServerGating[9]);
  const updateSubscriptionsSettings1 = guildId(isFullServerGating[9]).useUpdateSubscriptionsSettings();
  loading = updateSubscriptionsSettings1.loading;
  updateSubscriptionsSettings = updateSubscriptionsSettings1.updateSubscriptionsSettings;
  error = updateSubscriptionsSettings1.error;
  let tmp15 = null != first;
  if (!tmp15) {
    let tmp16 = null != str;
    if (tmp16) {
      let description1;
      if (subscriptionsSettings != null) {
        description1 = subscriptionsSettings.description;
      }
      tmp16 = str !== description1;
    }
    if (tmp16) {
      tmp16 = 0 !== str.length;
    }
    tmp15 = tmp16;
  }
  if (!tmp15) {
    tmp15 = isFullServerGating !== first1;
  }
  closure_11 = tmp15;
  let tmp18 = first;
  if (first == null) {
    let cover_image_asset;
    if (subscriptionsSettings != null) {
      cover_image_asset = subscriptionsSettings.cover_image_asset;
    }
    let source = null;
    if (null != cover_image_asset) {
      source = null;
      if (null != application) {
        let obj4 = { application_id: application.id, image_asset: subscriptionsSettings.cover_image_asset };
        source = subscriptionsSettings(tmp2[13]).getSource(obj4);
        let obj5 = subscriptionsSettings(tmp2[13]);
      }
    }
    tmp18 = source;
  }
  const items = [str, guildId, updateSubscriptionsSettings, subscriptionsSettings, first, first1, isFullServerGating];
  callback = obj3.useCallback(first(function*() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
            closure_0 = tmp2;
            let tmp11 = null != str;
            if (tmp11) {
              let description;
              if (subscriptionsSettings != null) {
                description = subscriptionsSettings.description;
              }
              tmp11 = arr !== description;
            }
            if (tmp11) {
              tmp11 = 0 !== arr.length;
            }
            const obj5 = {};
            if (tmp11) {
              obj5.description = arr;
            }
            if (null != first) {
              obj5.cover_image = first.uri;
            }
            if (isFullServerGating !== first1) {
              obj5.full_server_gate = first1;
            }
            if (obj3.isEmpty(obj5)) {
              c2 = 3;
            } else {
              v1 = 1;
              c2 = 1;
              const obj6 = { value: updateSubscriptionsSettings(guildId, obj5), done: false };
              return obj6;
            }
            obj3 = v1(isFullServerGating[14]);
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_5(null);
        }
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp17) {
        c2 = tmp;
        throw tmp17;
      }
    }
  }), items);
  const items1 = [navigation, tmp15, loading, callback];
  const layoutEffect = obj3.useLayoutEffect(() => {
    if (loading) {
      let fn = () => updateSubscriptionsSettings(guildId(isFullServerGating[15]).HeaderSubmittingIndicator, {});
    } else if (closure_11) {
      fn = () => {
        const obj = { text: null, onPress: null };
        const intl = guildId(isFullServerGating[17]).intl;
        obj.text = intl.string(guildId(isFullServerGating[17]).t["R3BPH+"]);
        obj.onPress = onPress;
        return updateSubscriptionsSettings(guildId(isFullServerGating[16]).HeaderActionButton, obj);
      };
    } else {
      fn = () => null;
    }
    navigation.setOptions({ headerRight: fn });
  }, items1);
  const items2 = [error];
  const effect = obj3.useEffect(() => {
    if (null != error) {
      let anyErrorMessage = error.getAnyErrorMessage();
      if (anyErrorMessage == null) {
        const intl = util.intl;
        anyErrorMessage = intl.string(util.t.ZUEGFn);
      }
      ToastUtils.presentError(anyErrorMessage);
    }
  }, items2);
  let obj6 = { contentContainerStyle: null, children: null };
  const tmpResult = guildId(isFullServerGating[9]);
  obj6.contentContainerStyle = { paddingBottom: navigation(isFullServerGating[12])({}).insets.bottom + navigation(isFullServerGating[19]).space.PX_16 };
  const items3 = [updateSubscriptionsSettings(navigation(isFullServerGating[20]), { isFullServerGating: first1, onChange: tmp6Result2[1] }), ];
  const obj8 = { cover: tmp18, setCover: tmp7[1], description: null, setDescription: null };
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
  obj8.description = str;
  items3[1] = updateSubscriptionsSettings(guildId(isFullServerGating[21]).Content, obj8);
  obj6.children = items3;
  return error(first1, obj6);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleSubscriptionsGroupEdit(guildId) {
  const cResult = c.c(5);
  guildId = guildId.guildId;
  if (cResult[0] !== guildId) {
    const obj2 = { guildId };
    const tmp6 = options(closure_11, obj2);
    cResult[0] = guildId;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === guildId) {
    if (cResult[3] === tmp3) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = options(GuildSettingsRoleSubscriptionContainerDefault, { guildId, children: tmp3 });
  cResult[2] = guildId;
  cResult[3] = tmp3;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function GuildSettingsRoleSubscriptionsGroupEdit(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: options(closure_11, { guildId }) };
  return options(GuildSettingsRoleSubscriptionContainerDefault, obj);
});