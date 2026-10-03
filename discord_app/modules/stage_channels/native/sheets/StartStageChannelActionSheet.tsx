// discord_app/modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import StageInstanceStore from "../../StageInstanceStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const StageChannelsConstants = fn(5571);
({ MAX_STAGE_TOPIC_LENGTH: closure_9, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c10 } = StageChannelsConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_11, Fonts } = Constants);
let closure_12 = fn(2057).GuildScheduledEventPrivacyLevel;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { padding: 16 },
  header: { alignItems: "center", paddingBottom: 24 },
  headerTitle: { marginTop: 16, marginBottom: 8 },
  headerSubtitle: { textAlign: "center" },
  startButton: { marginTop: 16 },
  buttonSubtitle: { paddingTop: 8, textAlign: "center" },
  ageVerificationNotice: { marginBottom: nativeDefault.space.PX_16 },
  error: null,
};
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj2.error = {
  paddingTop: 8,
  fontSize: 12,
  fontFamily: Fonts.PRIMARY_MEDIUM,
  color: nativeDefault.unsafe_rawColors.RED_400,
};
let closure_15 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  paddingTop: 8,
  fontSize: 12,
  fontFamily: Fonts.PRIMARY_MEDIUM,
  color: nativeDefault.unsafe_rawColors.RED_400,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = require("c").c(61);
      channel = channel.channel;
      _require = channel;
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageInstanceStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        const fn = function y() {
          return StageInstanceStore.getStageInstanceByChannel(closure_0.id);
        };
        cResult[1] = channel.id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      let str;
      if (stateFromStores != null) {
        str = stateFromStores.topic;
      }
      if (str == null) {
        str = "";
      }
      const tmp9 = _slicedToArray(noop.useState(str), 2);
      const first1 = tmp9[0];
      const tmpResult = require("initialize");
      [tmp12, dependencyMap] = noop.useState(false);
      const tmp11 = _slicedToArray(noop.useState(false), 2);
      [obj4, asyncGeneratorStep] = noop.useState(null);
      const tmp13 = _slicedToArray(noop.useState(null), 2);
      const shouldAgeVerifyToSpeakForCurrentUser =
        require("useStageSpeakingForCurrentUser").useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
      if (cResult[3] === channel.guild_id) {
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        if (cResult[4] === id) {
          let tmp16 = cResult[5];
        }
        stateFromStores(5590)(tmp16);
        if (cResult[6] === channel) {
          if (cResult[7] === stateFromStores) {
            if (cResult[8] === first1) {
              let tmp19 = cResult[9];
            }
            if (cResult[10] !== stateFromStores) {
              if (null == stateFromStores) {
                const intl2 = tmp(1126).intl;
                let stringResult = intl2.string(tmp(1126).t.DDF0cJ);
              } else {
                const intl = tmp(1126).intl;
                stringResult = intl.string(tmp(1126).t["5BKP4y"]);
              }
              cResult[10] = stateFromStores;
              cResult[11] = stringResult;
            } else {
              if (cResult[12] === tmp4.headerTitle) {
                if (cResult[13] === tmp21) {
                  let tmp24 = cResult[14];
                }
                if (cResult[15] !== stateFromStores) {
                  if (null == stateFromStores) {
                    const intl4 = tmp(1126).intl;
                    let stringResult1 = intl4.string(tmp(1126).t.bqQIwa);
                  } else {
                    const intl3 = tmp(1126).intl;
                    stringResult1 = intl3.string(tmp(1126).t["I+9bLx"]);
                  }
                  cResult[15] = stateFromStores;
                  cResult[16] = stringResult1;
                } else {
                  if (cResult[17] === tmp4.headerSubtitle) {
                    if (cResult[18] === tmp27) {
                      let tmp30 = cResult[19];
                    }
                    if (cResult[20] === tmp4.header) {
                      if (cResult[21] === tmp24) {
                        if (cResult[24] !== stateFromStores) {
                          let stringResult2;
                          if (null == stateFromStores) {
                            const intl5 = tmp(1126).intl;
                            stringResult2 = intl5.string(tmp(1126).t.gR66jX);
                          }
                          cResult[24] = stateFromStores;
                          cResult[25] = stringResult2;
                          let tmp37 = stringResult2;
                        } else {
                          tmp37 = cResult[25];
                        }
                        const _Symbol = Symbol;
                        const container = tmp4.container;
                        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl6 = tmp(1126).intl;
                          const stringResult3 = intl6.string(tmp(1126).t["5FPBOB"]);
                          cResult[26] = stringResult3;
                          let tmp39 = stringResult3;
                        } else {
                          tmp39 = cResult[26];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl7 = tmp(1126).intl;
                          const stringResult4 = intl7.string(tmp(1126).t.ZwWruY);
                          cResult[27] = stringResult4;
                          let tmp41 = stringResult4;
                        } else {
                          tmp41 = cResult[27];
                        }
                        if (cResult[28] === tmp19) {
                          const _Symbol3 = Symbol;
                          if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                            class Z {
                              constructor() {
                                obj = closure_1(closure_3[19]);
                                return obj.hideActionSheet(closure_1_10);
                              }
                            }
                            cResult[31] = Z;
                          } else {
                            class Z {
                              constructor() {
                                obj = closure_1(closure_3[19]);
                                return obj.hideActionSheet(closure_1_10);
                              }
                            }
                          }
                          if (cResult[32] === channel.id) {
                            class Z {
                              constructor() {
                                obj = closure_1(closure_3[19]);
                                return obj.hideActionSheet(closure_1_10);
                              }
                            }
                            if (cResult[35] === obj4) {
                              class Z {
                                constructor() {
                                  obj = closure_1(closure_3[19]);
                                  return obj.hideActionSheet(closure_1_10);
                                }
                              }
                              if (cResult[38] !== stateFromStores) {
                                class Z {
                                  constructor() {
                                    obj = closure_1(closure_3[19]);
                                    return obj.hideActionSheet(closure_1_10);
                                  }
                                }
                                cResult[38] = stateFromStores;
                                cResult[39] = tmp54;
                              } else {
                                class Z {
                                  constructor() {
                                    obj = closure_1(closure_3[19]);
                                    return obj.hideActionSheet(closure_1_10);
                                  }
                                }
                                if (cResult[40] === tmp19) {
                                  class Z {
                                    constructor() {
                                      obj = closure_1(closure_3[19]);
                                      return obj.hideActionSheet(closure_1_10);
                                    }
                                  }
                                }
                                let obj2 = {
                                  text: tmp53,
                                  onPress: tmp19,
                                  disabled: "" === first1,
                                  loading: tmp12,
                                  accessibilityHint: tmp37,
                                };
                                const tmp59 = closure_13(tmp(5594).Button, obj2);
                                cResult[40] = tmp19;
                                cResult[41] = tmp37;
                                cResult[42] = tmp12;
                                cResult[43] = tmp53;
                                cResult[44] = "" === first1;
                                cResult[45] = tmp59;
                              }
                            }
                            let tmp52 = null;
                            if (null != obj4) {
                              class Z {
                                constructor() {
                                  obj = closure_1(closure_3[19]);
                                  return obj.hideActionSheet(closure_1_10);
                                }
                              }
                              let obj5 = {
                                style: tmp4.error,
                                variant: "text-xs/medium",
                                color: "text-feedback-critical",
                                children: obj4.getAnyErrorMessage(),
                              };
                              tmp52 = closure_13(tmp(4886).Text, obj5);
                            }
                            cResult[35] = obj4;
                            cResult[36] = tmp4.error;
                            cResult[37] = tmp52;
                          }
                          let obj6 = { onConfirmPress: Z, style: tmp4.ageVerificationNotice, channelId: channel.id };
                          const tmp50 = closure_13(tmp17(8083), obj6);
                          cResult[32] = channel.id;
                          cResult[33] = tmp4.ageVerificationNotice;
                          cResult[34] = tmp50;
                        }
                        let obj7 = {
                          label: tmp39,
                          maxLength,
                          value: first1,
                          placeholder: tmp41,
                          onChange: tmp9[1],
                          autoFocus: true,
                          returnKeyType: "done",
                          clearable: true,
                          onSubmitEditing: tmp19,
                        };
                        const tmp46 = closure_13(tmp(6098).TextInput, obj7);
                        cResult[28] = tmp19;
                        cResult[29] = first1;
                        cResult[30] = tmp46;
                      }
                    }
                    let obj8 = { style: tmp4.header, children: null };
                    const items1 = [tmp24, tmp30];
                    obj8.children = items1;
                    const tmp36 = closure_14(View, obj8);
                    cResult[20] = tmp4.header;
                    cResult[21] = tmp24;
                    cResult[22] = tmp30;
                    cResult[23] = tmp36;
                  }
                  const obj9 = {
                    style: tmp4.headerSubtitle,
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: cResult[16],
                  };
                  const tmp32 = closure_13(tmp(4886).Text, obj9);
                  cResult[17] = tmp4.headerSubtitle;
                  cResult[18] = cResult[16];
                  cResult[19] = tmp32;
                  tmp30 = tmp32;
                }
              }
              const obj10 = {
                style: tmp4.headerTitle,
                accessibilityRole: "header",
                variant: "heading-lg/semibold",
                color: "mobile-text-heading-primary",
                children: cResult[11],
              };
              const tmp26 = closure_13(tmp(4886).Text, obj10);
              cResult[12] = tmp4.headerTitle;
              cResult[13] = cResult[11];
              cResult[14] = tmp26;
              tmp24 = tmp26;
            }
          }
        }
        _require = asyncGeneratorStep(async () => {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: "IconComponent" };
            }
          } else {
            try {
              c5 = 2;
              if (0 === v2) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_1 = tmp3;
                  closure_0 = tmp7;
                  closure_128_0 = undefined;
                  closure_128_1 = undefined;
                  if ("" !== tmp45.trim()) {
                    v0(true);
                    v2(null);
                    const result = first1(1881).dismissGlobalKeyboard();
                    v0 = 1;
                    if (null != closure_1) {
                      v2 = 3;
                      c5 = 1;
                      const obj6 = {
                        value: first1(8074).editStage(closure_0, tmp45, constants.GUILD_ONLY),
                        done: false,
                      };
                      return obj6;
                    } else {
                      const tmp33Result2 = first1(8074);
                      v2 = 2;
                      c5 = 1;
                      const obj7 = {
                        value: tmp33Result2.startStage(closure_0, tmp45, constants.GUILD_ONLY, false),
                        done: false,
                      };
                      return obj7;
                    }
                    const obj4 = first1(1881);
                  }
                }
              } else {
                if (1 === tmp7) {
                  v0 = 0;
                  closure_128_0 = tmp45;
                  const aPIError = new closure_0(5312).APIError(closure_128_0);
                  closure_128_1 = aPIError;
                  v2(closure_128_1);
                  v0(false);
                } else {
                  if (2 === tmp7) {
                    if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    }
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v0 = 0;
                    c5 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  stateFromStores(4854).hideActionSheet(v65535);
                  v0 = 0;
                  const obj2 = stateFromStores(4854);
                }
                v0 = 0;
                c5 = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
              c5 = 3;
            } catch (tmp45) {
              if (tmp4 === v0) {
                c5 = tmp2;
                throw tmp45;
              } else {
                v2 = tmp;
              }
            }
          }
        });
        function handleSave() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[6] = channel;
        cResult[7] = stateFromStores;
        cResult[8] = first1;
        cResult[9] = handleSave;
        tmp19 = handleSave;
        tmp17 = stateFromStores;
      }
      cResult[3] = channel.guild_id;
      if (stateFromStores != null) {
        class Z {
          constructor() {
            obj = closure_1(closure_3[19]);
            return obj.hideActionSheet(closure_1_10);
          }
        }
      }
      class A {
        constructor() {
          obj = closure_1(closure_3[15]);
          id = undefined;
          if (closure_1 != null) {
            id = closure_1.id;
          }
          obj1 = { stage_instance_id: id, can_start_public_stage: false, guild_id: closure_0.guild_id };
          trackResult = obj.track(AnalyticEvents.START_STAGE_OPENED, obj1);
          return;
        }
      }
      cResult[4] = undefined;
      cResult[5] = A;
      tmp16 = A;
      const tmpResult2 = require("useStageSpeakingForCurrentUser");
    }
  : (channel) => {
      channel = channel.channel;
      value = undefined;
      dependencyMap = undefined;
      c4 = undefined;
      _slicedToArray = async function _handleSave2(noop) {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (noop === 1) {
            throw value;
          } else if (noop === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (noop === 1) {
                c5 = 3;
                throw value;
              } else if (noop === 2) {
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                channel = tmp7;
                closure_128_0 = undefined;
                if ("" !== importAll.trim()) {
                  _undefined(true);
                  asyncGeneratorStep(null);
                  const result = tmp45(1881).dismissGlobalKeyboard();
                  dependencyMap = 1;
                  if (null != stateFromStores) {
                    c4 = 3;
                    c5 = 1;
                    const obj6 = {
                      value: tmp45(8074).editStage(channel, importAll, constants.GUILD_ONLY),
                      done: false,
                    };
                    return obj6;
                  } else {
                    const tmp33Result2 = tmp45(8074);
                    c4 = 2;
                    c5 = 1;
                    const obj7 = {
                      value: tmp33Result2.startStage(channel, importAll, constants.GUILD_ONLY, false),
                      done: false,
                    };
                    return obj7;
                  }
                  const obj4 = tmp45(1881);
                }
              }
            } else {
              if (1 === tmp7) {
                dependencyMap = 0;
                closure_128_1 = tmp45;
                const aPIError = new channel(5312).APIError(closure_128_1);
                closure_128_0 = aPIError;
                closure_129_4(closure_128_0);
                closure_129_3(false);
              } else {
                if (2 === tmp7) {
                  if (noop === 1) {
                    c5 = 3;
                    throw value;
                  }
                } else if (noop === 1) {
                  c5 = 3;
                  throw value;
                } else if (noop === 2) {
                  dependencyMap = 0;
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
                tmp3(4854).hideActionSheet(closure_1_10);
                dependencyMap = 0;
                const obj2 = tmp3(4854);
              }
              dependencyMap = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
            c5 = 3;
          } catch (tmp45) {
            if (tmp4 === dependencyMap) {
              c5 = tmp2;
              throw tmp45;
            } else {
              c4 = tmp;
            }
          }
        }
      };
      const tmp = closure_15();
      const items = [StageInstanceStore];
      const stateFromStores = channel(504).useStateFromStores(items, () =>
        StageInstanceStore.getStageInstanceByChannel(channel.id),
      );
      let str;
      if (stateFromStores != null) {
        str = stateFromStores.topic;
      }
      if (str == null) {
        str = "";
      }
      [value, obj8.onChange] = noop.useState(str);
      let obj = channel(504);
      [tmp8, c3] = _slicedToArray(noop.useState(false), 2);
      const tmp7 = _slicedToArray(noop.useState(false), 2);
      [obj3, c4] = _slicedToArray(noop.useState(null), 2);
      const tmp9 = _slicedToArray(noop.useState(null), 2);
      const shouldAgeVerifyToSpeakForCurrentUser = channel(5579).useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
      stateFromStores(5590)(() => {
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        AnalyticsUtilsDefault.track(constants.START_STAGE_OPENED, {
          stage_instance_id: id,
          can_start_public_stage: false,
          guild_id: channel.guild_id,
        });
      });
      let obj4 = { style: tmp.header, children: null };
      let obj5 = {
        style: tmp.headerTitle,
        accessibilityRole: "header",
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      if (null == stateFromStores) {
        const intl2 = tmp2(1126).intl;
        let stringResult = intl2.string(tmp2(1126).t.DDF0cJ);
      } else {
        const intl = tmp2(1126).intl;
        stringResult = intl.string(tmp2(1126).t["5BKP4y"]);
      }
      obj5.children = stringResult;
      const items1 = [closure_13(channel(4886).Text, obj5)];
      let obj6 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
      if (null == stateFromStores) {
        const intl4 = tmp2(1126).intl;
        let stringResult1 = intl4.string(tmp2(1126).t.bqQIwa);
      } else {
        const intl3 = tmp2(1126).intl;
        stringResult1 = intl3.string(tmp2(1126).t["I+9bLx"]);
      }
      obj6.children = stringResult1;
      items1[1] = closure_13(channel(4886).Text, obj6);
      obj4.children = items1;
      let stringResult2;
      const tmp11 = stateFromStores;
      const tmp2Result = channel(5579);
      if (null == stateFromStores) {
        const intl5 = tmp2(1126).intl;
        stringResult2 = intl5.string(tmp2(1126).t.gR66jX);
      }
      function handleSave() {
        const self = this;
        const apply = closure_5.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      let obj7 = { bottom: true, style: tmp.container, children: null };
      const items2 = [closure_14(View, obj4), , , , ,];
      let obj8 = {
        label: null,
        maxLength: null,
        value: null,
        placeholder: null,
        onChange: null,
        autoFocus: true,
        returnKeyType: "done",
        clearable: true,
        onSubmitEditing: null,
      };
      const intl6 = tmp2(1126).intl;
      obj8.label = intl6.string(channel(1126).t["5FPBOB"]);
      obj8.maxLength = maxLength;
      obj8.value = value;
      const intl7 = tmp2(1126).intl;
      obj8.placeholder = intl7.string(channel(1126).t.ZwWruY);
      obj8.onSubmitEditing = handleSave;
      items2[1] = closure_13(channel(6098).TextInput, obj8);
      items2[2] = closure_13(tmp11(8083), {
        onConfirmPress() {
          return stateFromStores(_undefined[19]).hideActionSheet(closure_1_10);
        },
        style: tmp.ageVerificationNotice,
        channelId: channel.id,
      });
      let tmp15Result = null;
      if (null != obj3) {
        const obj10 = {
          style: tmp.error,
          variant: "text-xs/medium",
          color: "text-feedback-critical",
          children: obj3.getAnyErrorMessage(),
        };
        tmp15Result = closure_13(tmp2(4886).Text, obj10);
      }
      items2[3] = tmp15Result;
      const obj11 = { style: tmp.startButton, children: null };
      if (null == stateFromStores) {
        const intl9 = tmp2(1126).intl;
        let stringResult3 = intl9.string(tmp2(1126).t.s8mM8A);
      } else {
        const intl8 = tmp2(1126).intl;
        stringResult3 = intl8.string(tmp2(1126).t.K344S7);
      }
      obj11.children = closure_13(channel(5594).Button, {
        text: stringResult3,
        onPress: handleSave,
        disabled: "" === value,
        loading: tmp8,
        accessibilityHint: stringResult2,
      });
      items2[4] = closure_13(View, obj11);
      let tmp15Result2 = null != stringResult2 && !shouldAgeVerifyToSpeakForCurrentUser;
      if (tmp15Result2) {
        const obj13 = {
          accessible: false,
          style: tmp.buttonSubtitle,
          variant: "text-xs/medium",
          color: "text-default",
          children: null,
        };
        const intl10 = tmp2(1126).intl;
        obj13.children = intl10.string(tmp2(1126).t.gR66jX);
        tmp15Result2 = closure_13(tmp2(4886).Text, obj13);
      }
      const obj12 = {
        text: stringResult3,
        onPress: handleSave,
        disabled: "" === value,
        loading: tmp8,
        accessibilityHint: stringResult2,
      };
      const obj9 = {
        onConfirmPress() {
          return stateFromStores(_undefined[19]).hideActionSheet(closure_1_10);
        },
        style: tmp.ageVerificationNotice,
        channelId: channel.id,
      };
      const tmp13Result = closure_14(View, obj4);
      items2[5] = tmp15Result2;
      obj7.children = items2;
      return closure_13(channel(6645).BottomSheet, {
        keyboardShouldPersistTaps: "always",
        children: closure_14(channel(6619).SafeAreaPaddingView, obj7),
      });
    };
