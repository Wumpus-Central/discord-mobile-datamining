// discord_app/modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import GuildScheduledEventsConstants from "../../../guild_scheduled_events/GuildScheduledEventsConstants.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import StageInstanceStore from "../../StageInstanceStore.tsx";
import StageChannelsConstants from "../../StageChannelsConstants.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet, c5, channel, dependencyMap;

let Fonts;
let c10;
let c9;
let closure_14;
let map1;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
({ MAX_STAGE_TOPIC_LENGTH: c9, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c10 } = StageChannelsConstants);
({ AnalyticEvents: unpackModuleId, Fonts } = Constants);
let closure_12 = GuildScheduledEventsConstants.GuildScheduledEventPrivacyLevel;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { padding: 16 },
  header: { alignItems: "center", paddingBottom: 24 },
  headerTitle: { marginTop: 16, marginBottom: 8 },
  headerSubtitle: { textAlign: "center" },
  startButton: { marginTop: 16 },
  buttonSubtitle: { paddingTop: 8, textAlign: "center" },
  ageVerificationNotice: obj2,
  error: obj3,
};
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: 8, fontSize: 12, fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_15 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let first1;
      let items1;
      let obj4;
      let tmp11;
      let tmp13;
      let tmp7;
      const tmp = channel;
      let obj = channel(576);
      const cResult = obj.c(61);
      channel = channel.channel;
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageInstanceStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        const fn = function y() {
          return StageInstanceStore.getStageInstanceByChannel(channel.id);
        };
        cResult[1] = channel.id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      let str;
      const useState = react.useState;
      if (stateFromStores != null) {
        str = stateFromStores.topic;
      }
      if (str == null) {
        str = "";
      }
      [first1, tmp11] = useState(str);
      [tmp13, dependencyMap] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      [obj4, _asyncToGenerator] = _slicedToArray(react.useState(null), 2);
      const tmp14 = _slicedToArray(react.useState(null), 2);
      const tmpResult2 = tmp(5586);
      const shouldAgeVerifyToSpeakForCurrentUser = tmpResult2.useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
      if (cResult[3] === channel.guild_id) {
        let tmp18;
        let id;
        const tmp16 = cResult[4];
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        if (tmp16 === id) {
          tmp18 = cResult[5];
        }
        stateFromStores(5597)(tmp18);
        const tmp19 = stateFromStores;
        if (cResult[6] === channel) {
          if (cResult[7] === stateFromStores) {
            let tmp21;
            let tmp23;
            if (cResult[8] === first1) {
              tmp21 = cResult[9];
            }
            if (cResult[10] !== stateFromStores) {
              let stringResult;
              if (null == stateFromStores) {
                const intl2 = tmp(1126).intl;
                stringResult = intl2.string(tmp(1126).t.DDF0cJ);
              } else {
                const intl = tmp(1126).intl;
                stringResult = intl.string(tmp(1126).t["5BKP4y"]);
              }
              cResult[10] = stateFromStores;
              cResult[11] = stringResult;
              tmp23 = stringResult;
            } else {
              tmp23 = cResult[11];
            }
            if (cResult[12] === tmp4.headerTitle) {
              let tmp25;
              let tmp28;
              if (cResult[13] === tmp23) {
                tmp25 = cResult[14];
              }
              if (cResult[15] !== stateFromStores) {
                let stringResult1;
                if (null == stateFromStores) {
                  const intl4 = tmp(1126).intl;
                  stringResult1 = intl4.string(tmp(1126).t.bqQIwa);
                } else {
                  const intl3 = tmp(1126).intl;
                  stringResult1 = intl3.string(tmp(1126).t["I+9bLx"]);
                }
                cResult[15] = stateFromStores;
                cResult[16] = stringResult1;
                tmp28 = stringResult1;
              } else {
                tmp28 = cResult[16];
              }
              if (cResult[17] === tmp4.headerSubtitle) {
                let tmp30;
                if (cResult[18] === tmp28) {
                  tmp30 = cResult[19];
                }
                if (cResult[20] === tmp4.header) {
                  if (cResult[21] === tmp25) {
                    let tmp37;
                    let tmp39;
                    let tmp41;
                    if (cResult[24] !== stateFromStores) {
                      let stringResult2;
                      if (null == stateFromStores) {
                        const intl5 = tmp(1126).intl;
                        stringResult2 = intl5.string(tmp(1126).t.gR66jX);
                      }
                      cResult[24] = stateFromStores;
                      cResult[25] = stringResult2;
                      tmp37 = stringResult2;
                    } else {
                      tmp37 = cResult[25];
                    }
                    const _Symbol = Symbol;
                    const container = tmp4.container;
                    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl6 = tmp(1126).intl;
                      const stringResult3 = intl6.string(tmp(1126).t["5FPBOB"]);
                      cResult[26] = stringResult3;
                      tmp39 = stringResult3;
                    } else {
                      tmp39 = cResult[26];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl7 = tmp(1126).intl;
                      const stringResult4 = intl7.string(tmp(1126).t.ZwWruY);
                      cResult[27] = stringResult4;
                      tmp41 = stringResult4;
                    } else {
                      tmp41 = cResult[27];
                    }
                    if (cResult[28] === tmp21) {
                      const _Symbol3 = Symbol;
                      if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                        class Z {
                          constructor() {
                            const obj = stateFromStores(dependencyMap[19]);
                            return obj.hideActionSheet(closure_1_10);
                          }
                        }
                        cResult[31] = Z;
                      } else {
                        class Z {
                          constructor() {
                            const obj = stateFromStores(dependencyMap[19]);
                            return obj.hideActionSheet(closure_1_10);
                          }
                        }
                      }
                      if (cResult[32] === channel.id) {
                        class Z {
                          constructor() {
                            const obj = stateFromStores(dependencyMap[19]);
                            return obj.hideActionSheet(closure_1_10);
                          }
                        }
                        if (cResult[35] === obj4) {
                          class Z {
                            constructor() {
                              const obj = stateFromStores(dependencyMap[19]);
                              return obj.hideActionSheet(closure_1_10);
                            }
                          }
                          if (cResult[38] !== stateFromStores) {
                            class Z {
                              constructor() {
                                const obj = stateFromStores(dependencyMap[19]);
                                return obj.hideActionSheet(closure_1_10);
                              }
                            }
                            cResult[38] = stateFromStores;
                            cResult[39] = tmp54;
                          } else {
                            class Z {
                              constructor() {
                                const obj = stateFromStores(dependencyMap[19]);
                                return obj.hideActionSheet(closure_1_10);
                              }
                            }
                          }
                          if (cResult[40] === tmp21) {
                            class Z {
                              constructor() {
                                const obj = stateFromStores(dependencyMap[19]);
                                return obj.hideActionSheet(closure_1_10);
                              }
                            }
                          }
                          let obj2 = {
                            text: tmp54,
                            onPress: tmp21,
                            disabled: "" === first1,
                            loading: tmp13,
                            accessibilityHint: tmp37,
                          };
                          cResult[40] = tmp21;
                          cResult[41] = tmp37;
                          cResult[42] = tmp13;
                          cResult[43] = tmp54;
                          cResult[44] = "" === first1;
                          cResult[45] = closure_13(tmp(5601).Button, obj2);
                          const tmp58 = closure_13(tmp(5601).Button, obj2);
                        }
                        let tmp52 = null;
                        if (null != obj4) {
                          class Z {
                            constructor() {
                              const obj = stateFromStores(dependencyMap[19]);
                              return obj.hideActionSheet(closure_1_10);
                            }
                          }
                          let obj5 = {
                            style: tmp4.error,
                            variant: "text-xs/medium",
                            color: "text-feedback-critical",
                            children: obj4.getAnyErrorMessage(),
                          };
                          const Text = tmp(4892).Text;
                          tmp52 = closure_13(Text, obj5);
                        }
                        cResult[35] = obj4;
                        cResult[36] = tmp4.error;
                        cResult[37] = tmp52;
                      }
                      let obj6 = { onConfirmPress: Z, style: tmp4.ageVerificationNotice, channelId: channel.id };
                      cResult[32] = channel.id;
                      cResult[33] = tmp4.ageVerificationNotice;
                      cResult[34] = closure_13(tmp19(8116), obj6);
                      const tmp50 = closure_13(tmp19(8116), obj6);
                    }
                    let obj7 = {
                      label: tmp39,
                      maxLength,
                      value: first1,
                      placeholder: tmp41,
                      onChange: tmp11,
                      autoFocus: true,
                      returnKeyType: "done",
                      clearable: true,
                      onSubmitEditing: tmp21,
                    };
                    const tmp46 = closure_13(tmp(6105).TextInput, obj7);
                    cResult[28] = tmp21;
                    cResult[29] = first1;
                    cResult[30] = tmp46;
                  }
                }
                let obj8 = { style: tmp4.header, children: items1 };
                items1 = [tmp25, tmp30];
                const tmp36 = closure_14(View, obj8);
                cResult[20] = tmp4.header;
                cResult[21] = tmp25;
                cResult[22] = tmp30;
                cResult[23] = tmp36;
              }
              const obj9 = {
                style: tmp4.headerSubtitle,
                variant: "text-sm/medium",
                color: "text-default",
                children: tmp28,
              };
              const tmp32 = closure_13(tmp(4892).Text, obj9);
              cResult[17] = tmp4.headerSubtitle;
              cResult[18] = tmp28;
              cResult[19] = tmp32;
              tmp30 = tmp32;
            }
            const obj10 = {
              style: tmp4.headerTitle,
              accessibilityRole: "header",
              variant: "heading-lg/semibold",
              color: "mobile-text-heading-primary",
              children: tmp23,
            };
            const tmp27 = closure_13(tmp(4892).Text, obj10);
            cResult[12] = tmp4.headerTitle;
            cResult[13] = tmp23;
            cResult[14] = tmp27;
            tmp25 = tmp27;
          }
        }
        let closure_0 = _asyncToGenerator(async function () {
          let closure_2;
          let tmp28Result;
          let v0;
          let v1;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let aPIError;
              c5 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  let closure_1 = tmp;
                  closure_0 = undefined;
                  aPIError = undefined;
                  if ("" !== tmp40.trim()) {
                    v0(true);
                    v1(null);
                    const obj4 = first1(dependencyMap[17]);
                    const result = obj4.dismissGlobalKeyboard();
                    v0 = 1;
                    if (null != closure_1) {
                      v1 = 3;
                      c5 = 1;
                      const obj6 = {
                        value: tmp28Result.editStage(closure_0, tmp40, constants.GUILD_ONLY),
                        done: false,
                      };
                      tmp28Result = first1(dependencyMap[18]);
                      return obj6;
                    } else {
                      const tmp28Result2 = first1(dependencyMap[18]);
                      v1 = 2;
                      c5 = 1;
                      const obj7 = {
                        value: tmp28Result2.startStage(closure_0, tmp40, constants.GUILD_ONLY, false),
                        done: false,
                      };
                      return obj7;
                    }
                  }
                }
              } else if (1 === v1) {
                v0 = 0;
                closure_0 = tmp40;
                const self = this;
                const self2 = this;
                aPIError = new closure_0(dependencyMap[20]).APIError(closure_0);
                v1(aPIError);
                v0(false);
              } else {
                if (2 === v1) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v0 = 0;
                    c5 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
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
                const obj2 = stateFromStores(dependencyMap[19]);
                obj2.hideActionSheet(closure_2_10);
                v0 = 0;
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp40) {
              if (0 === v0) {
                c5 = 3;
                throw tmp40;
              } else {
                v1 = 1;
              }
            }
          }
        });
        function handleSave() {
          return closure_0(...arguments);
        }
        cResult[6] = channel;
        cResult[7] = stateFromStores;
        cResult[8] = first1;
        cResult[9] = handleSave;
        tmp21 = handleSave;
      }
      cResult[3] = channel.guild_id;
      if (stateFromStores != null) {
        class Z {
          constructor() {
            const obj = stateFromStores(dependencyMap[19]);
            return obj.hideActionSheet(closure_1_10);
          }
        }
      }
      class A {
        constructor() {
          let id;
          const track = AnalyticsUtilsDefault.track;
          const START_STAGE_OPENED = unpackModuleId.START_STAGE_OPENED;
          AnalyticsUtilsDefault;
          if (stateFromStores != null) {
            id = stateFromStores.id;
          }
          const obj = { stage_instance_id: id, can_start_public_stage: false, guild_id: channel.guild_id };
          track(START_STAGE_OPENED, obj);
        }
      }
      cResult[4] = undefined;
      cResult[5] = A;
      tmp18 = A;
    }
  : (channel) => {
      let Button;
      let _undefined;
      let c3;
      let c4;
      let intl10;
      let intl6;
      let intl7;
      let items1;
      let items2;
      let obj12;
      let obj3;
      let stringResult;
      let stringResult1;
      let stringResult3;
      let tmp9;
      channel = channel.channel;
      let value;
      dependencyMap = undefined;
      c4 = undefined;
      let obj = function _handleSave2() {
        obj = _asyncToGenerator(async function () {
          let closure_1;
          let closure_2;
          let tmp28Result;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let closure_0;
              let aPIError;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_0 = tmp4;
                  aPIError = undefined;
                  if ("" !== value.trim()) {
                    _undefined(true);
                    _undefined(null);
                    const obj4 = tmp40(c3[17]);
                    const result = obj4.dismissGlobalKeyboard();
                    c3 = 1;
                    if (null != stateFromStores) {
                      c4 = 3;
                      c5 = 1;
                      const obj6 = { value: tmp28Result.editStage(channel, value, constants.GUILD_ONLY), done: false };
                      tmp28Result = tmp40(c3[18]);
                      return obj6;
                    } else {
                      const tmp28Result2 = tmp40(c3[18]);
                      c4 = 2;
                      c5 = 1;
                      const obj7 = {
                        value: tmp28Result2.startStage(channel, value, constants.GUILD_ONLY, false),
                        done: false,
                      };
                      return obj7;
                    }
                  }
                }
              } else if (1 === c4) {
                c3 = 0;
                const self = this;
                const self2 = this;
                aPIError = new closure_0(c3[20]).APIError(tmp40);
                closure_129_4(aPIError);
                closure_129_3(false);
              } else {
                if (2 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c5 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
                  }
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  obj = { value, done: true };
                  return obj;
                }
                const obj2 = tmp40(c3[19]);
                obj2.hideActionSheet(closure_1_10);
                c3 = 0;
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp40) {
              if (0 === c3) {
                c5 = 3;
                throw tmp40;
              } else {
                c4 = 1;
              }
            }
          }
        });
        return obj(...arguments);
      };
      const tmp = closure_15();
      const tmp3 = dependencyMap;
      obj = channel(504);
      const items = [StageInstanceStore];
      const stateFromStores = obj.useStateFromStores(items, () =>
        StageInstanceStore.getStageInstanceByChannel(channel.id),
      );
      let str;
      const useState = react.useState;
      if (stateFromStores != null) {
        str = stateFromStores.topic;
      }
      if (str == null) {
        str = "";
      }
      const tmp5 = obj(useState(str), 2);
      value = tmp5[0];
      const tmp7 = tmp5[1];
      [tmp9, c3] = obj(react.useState(false), 2);
      obj(react.useState(false), 2);
      [obj3, c4] = obj(react.useState(null), 2);
      const tmp10 = obj(react.useState(null), 2);
      const tmp2Result = channel(5586);
      const shouldAgeVerifyToSpeakForCurrentUser = tmp2Result.useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
      stateFromStores(5597)(() => {
        let id;
        const track = AnalyticsUtilsDefault.track;
        const START_STAGE_OPENED = unpackModuleId.START_STAGE_OPENED;
        AnalyticsUtilsDefault;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        obj = { stage_instance_id: id, can_start_public_stage: false, guild_id: channel.guild_id };
        track(START_STAGE_OPENED, obj);
      });
      let obj4 = { style: tmp.header, children: items1 };
      let obj5 = {
        style: tmp.headerTitle,
        accessibilityRole: "header",
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        children: stringResult,
      };
      const Text = tmp2(4892).Text;
      const tmp12 = stateFromStores;
      if (null == stateFromStores) {
        const intl2 = tmp2(1126).intl;
        stringResult = intl2.string(tmp2(1126).t.DDF0cJ);
      } else {
        const intl = tmp2(1126).intl;
        stringResult = intl.string(tmp2(1126).t["5BKP4y"]);
      }
      items1 = [closure_13(Text, obj5)];
      let obj6 = {
        style: tmp.headerSubtitle,
        variant: "text-sm/medium",
        color: "text-default",
        children: stringResult1,
      };
      const Text2 = tmp2(4892).Text;
      if (null == stateFromStores) {
        const intl4 = tmp2(1126).intl;
        stringResult1 = intl4.string(tmp2(1126).t.bqQIwa);
      } else {
        const intl3 = tmp2(1126).intl;
        stringResult1 = intl3.string(tmp2(1126).t["I+9bLx"]);
      }
      items1[1] = closure_13(Text2, obj6);
      let stringResult2;
      const tmp14Result = closure_14(View, obj4);
      if (null == stateFromStores) {
        const intl5 = tmp2(1126).intl;
        stringResult2 = intl5.string(tmp2(1126).t.gR66jX);
      }
      function handleSave() {
        return obj(...arguments);
      }
      BottomSheet = tmp2(6652).BottomSheet;
      let obj7 = { bottom: true, style: tmp.container, children: items2 };
      items2 = [tmp14Result, , , , ,];
      const SafeAreaPaddingView = tmp2(6626).SafeAreaPaddingView;
      let obj8 = {
        label: intl6.string(channel(1126).t["5FPBOB"]),
        maxLength,
        value,
        placeholder: intl7.string(channel(1126).t.ZwWruY),
        onChange: tmp7,
        autoFocus: true,
        returnKeyType: "done",
        clearable: true,
        onSubmitEditing: handleSave,
      };
      const TextInput = tmp2(6105).TextInput;
      intl6 = tmp2(1126).intl;
      intl7 = tmp2(1126).intl;
      items2[1] = closure_13(TextInput, obj8);
      const obj9 = {
        onConfirmPress() {
          obj = stateFromStores(c3[19]);
          return obj.hideActionSheet(closure_1_10);
        },
        style: tmp.ageVerificationNotice,
        channelId: channel.id,
      };
      items2[2] = closure_13(tmp12(8116), obj9);
      let tmp16Result = null;
      if (null != obj3) {
        const obj10 = {
          style: tmp.error,
          variant: "text-xs/medium",
          color: "text-feedback-critical",
          children: obj3.getAnyErrorMessage(),
        };
        const Text3 = tmp2(4892).Text;
        tmp16Result = closure_13(Text3, obj10);
      }
      items2[3] = tmp16Result;
      const obj11 = { style: tmp.startButton, children: closure_13(Button, obj12) };
      Button = tmp2(5601).Button;
      if (null == stateFromStores) {
        const intl9 = tmp2(1126).intl;
        stringResult3 = intl9.string(tmp2(1126).t.s8mM8A);
      } else {
        const intl8 = tmp2(1126).intl;
        stringResult3 = intl8.string(tmp2(1126).t.K344S7);
      }
      obj12 = {
        text: stringResult3,
        onPress: handleSave,
        disabled: "" === value,
        loading: tmp9,
        accessibilityHint: stringResult2,
      };
      items2[4] = closure_13(View, obj11);
      let tmp16Result2 = null != stringResult2 && !shouldAgeVerifyToSpeakForCurrentUser;
      if (tmp16Result2) {
        const obj13 = {
          accessible: false,
          style: tmp.buttonSubtitle,
          variant: "text-xs/medium",
          color: "text-default",
          children: intl10.string(channel(1126).t.gR66jX),
        };
        const Text4 = tmp2(4892).Text;
        intl10 = tmp2(1126).intl;
        tmp16Result2 = closure_13(Text4, obj13);
      }
      items2[5] = tmp16Result2;
      const obj14 = { keyboardShouldPersistTaps: "always", children: closure_14(SafeAreaPaddingView, obj7) };
      return closure_13(BottomSheet, obj14);
    };
let result = size.fileFinishedImporting("modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx");

export default tmp6;
