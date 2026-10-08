// === Module 11450: GuildDisableCommunication ===

// Module 11450 (GuildDisableCommunication)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import useMountEffectDefault from "useMountEffect" /* 5392 */;
import TableRadioGroup from "TableRadioGroup" /* 6265 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6656 */;
import TextArea from "TextArea" /* 6763 */;
import useSafeAreaAvoidingInputsDefault from "useSafeAreaAvoidingInputs" /* 10500 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const GuildDisableCommunicationConstants = fn(2126);
({ DisableCommunicationDuration, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: closure_8, SET_COMMUNICATION_DISABLED_MODAL_NAME: closure_9 } = GuildDisableCommunicationConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
let items = [
  {
    value: DisableCommunicationDuration.DURATION_60_SEC,
    getLabel() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iruf5E, { minutes: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_5_MIN,
    getLabel() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iruf5E, { minutes: 5 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_10_MIN,
    getLabel() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iruf5E, { minutes: 10 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_HOUR,
    getLabel() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.LnvrA3, { hours: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_DAY,
    getLabel() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.jzH70Z, { days: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_WEEK,
    getLabel() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iVZYyl, { weeks: 1 });
    }
  }
];
const createStyles = fn(5090);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, reasonTextArea: null, buttonContainer: null };
let obj = {
  value: DisableCommunicationDuration.DURATION_60_SEC,
  getLabel() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.iruf5E, { minutes: 1 });
  }
};
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.reasonTextArea = { marginVertical: nativeDefault.space.PX_16 };
let obj5 = { marginVertical: nativeDefault.space.PX_16 };
obj2.buttonContainer = { marginBottom: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunication.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDisableCommunication(user) {
  const cResult = require("c").c(37);
  user = user.user;
  _require = user;
  const guildId = user.guildId;
  onClose = user.onClose;
  const tmp4 = closure_15();
  [first, _slicedToArray] = noop.useState(0);
  noop = noop.useRef("");
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first1 = obj2;
  } else {
    first1 = cResult[0];
  }
  const insets = guildId(tmp2[12])(first1).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { ref: ref1, offset: { type: "toBottom" } };
    items = [obj3];
    cResult[1] = items;
    let tmp11 = items;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== insets) {
    let obj4 = { insets, inputs: tmp11, scrollViewRef: ref };
    cResult[2] = insets;
    cResult[3] = obj4;
    let tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  guildId(onClose[13])(tmp12);
  if (cResult[4] === guildId) {
    if (cResult[5] === user.id) {
      let tmp14 = cResult[6];
    }
    tmp10(tmp2[15])(tmp14);
    if (cResult[7] === guildId) {
      if (cResult[8] === onClose) {
        if (cResult[9] === first) {
          if (cResult[10] === user) {
            let tmp16 = cResult[11];
          }
          if (cResult[12] !== insets.bottom) {
            let obj5 = { paddingHorizontal: tmp10(tmp2[9]).space.PX_12, paddingBottom: insets.bottom };
            cResult[12] = insets.bottom;
            cResult[13] = obj5;
            let tmp18 = obj5;
          } else {
            tmp18 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            let obj6 = { marginVertical: tmp10(tmp2[9]).space.PX_16 };
            cResult[14] = obj6;
            let tmp19 = obj6;
          } else {
            tmp19 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            let obj7 = { style: tmp19, variant: "heading-md/semibold", children: null };
            let intl = tmp(tmp2[7]).intl;
            let obj8 = { helpdeskArticle };
            obj7.children = intl.format(tmp(tmp2[7]).t.Ns83GT, obj8);
            const tmp23 = closure_11(tmp(tmp2[20]).Text, obj7);
            cResult[15] = tmp23;
            let tmp20 = tmp23;
          } else {
            tmp20 = cResult[15];
          }
          const _Symbol3 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[7]).intl;
            const stringResult = intl2.string(tmp(tmp2[7]).t["9XsExm"]);
            cResult[16] = stringResult;
            let tmp24 = stringResult;
          } else {
            tmp24 = cResult[16];
          }
          const _Symbol4 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor(arg0) {
                tmp = closure_4(user);
                return;
              }
            }
            cResult[17] = X;
          } else {
            class X {
              constructor(arg0) {
                tmp = closure_4(user);
                return;
              }
            }
          }
          const _Symbol5 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor(arg0) {
                tmp = closure_4(user);
                return;
              }
            }
            const obj9 = { title: tmp24, defaultValue: 0, onChange: X, hasIcons: false, children: items.map((getLabel, value) => closure_1_11(closure_0(onClose[22]).TableRadioRow, { value, label: getLabel.getLabel() }, value)) };
            const tmp29 = closure_11(tmp(tmp2[21]).TableRadioGroup, obj9);
            cResult[18] = tmp29;
            const tmp27 = tmp29;
          } else {
            class X {
              constructor(arg0) {
                tmp = closure_4(user);
                return;
              }
            }
          }
          const _Symbol6 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor(arg0) {
                tmp = closure_4(user);
                return;
              }
            }
            const stringResult1 = obj10.string(tmp(tmp2[7]).t.GakiH1);
            const intl3 = tmp(tmp2[7]).intl;
            const stringResult2 = intl3.string(tmp(tmp2[7]).t.ewHW15);
            cResult[19] = stringResult1;
            cResult[20] = stringResult2;
            let tmp31 = stringResult2;
            const tmp30 = stringResult1;
          } else {
            class X {
              constructor(arg0) {
                tmp = closure_4(user);
                return;
              }
            }
            tmp31 = cResult[20];
          }
          const _Symbol7 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor(arg0) {
                closure_5.current = user;
                return;
              }
            }
            cResult[21] = Y;
          } else {
            class Y {
              constructor(arg0) {
                closure_5.current = user;
                return;
              }
            }
          }
          if (cResult[22] !== tmp4.reasonTextArea) {
            class Y {
              constructor(arg0) {
                closure_5.current = user;
                return;
              }
            }
            const obj11 = { ref: ref1, containerStyle: tmp4.reasonTextArea, placeholder: tmp30, label: tmp31, maxLength: 512, onChange: Y };
            const tmp36 = closure_11(tmp(tmp2[23]).TextArea, obj11);
            cResult[22] = tmp4.reasonTextArea;
            cResult[23] = tmp36;
          } else {
            class Y {
              constructor(arg0) {
                closure_5.current = user;
                return;
              }
            }
          }
          const _Symbol8 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor(arg0) {
                closure_5.current = user;
                return;
              }
            }
            const stringResult3 = obj12.string(tmp(tmp2[7]).t.MlPTIi);
            cResult[24] = stringResult3;
            const tmp37 = stringResult3;
          } else {
            class Y {
              constructor(arg0) {
                closure_5.current = user;
                return;
              }
            }
          }
          if (cResult[25] !== tmp16) {
            class Y {
              constructor(arg0) {
                closure_5.current = user;
                return;
              }
            }
            const obj13 = { variant: "primary", text: tmp37, onPress: tmp16 };
            const tmp40 = closure_11(tmp(tmp2[24]).Button, obj13);
            cResult[25] = tmp16;
            cResult[26] = tmp40;
            const tmp39 = tmp40;
          } else {
            class Y {
              constructor(arg0) {
                closure_5.current = user;
                return;
              }
            }
          }
          if (cResult[27] === tmp4.buttonContainer) {
            class Y {
              constructor(arg0) {
                closure_5.current = user;
                return;
              }
            }
            if (cResult[30] === tmp35) {
              class Y {
                constructor(arg0) {
                  closure_5.current = user;
                  return;
                }
              }
              if (cResult[33] === tmp4.container) {
                class Y {
                  constructor(arg0) {
                    closure_5.current = user;
                    return;
                  }
                }
              }
              const obj14 = { style: tmp4.container, ref, contentContainerStyle: tmp18, children: tmp45 };
              const tmp52 = closure_11(closure_7, obj14);
              cResult[33] = tmp4.container;
              cResult[34] = tmp45;
              cResult[35] = tmp18;
              cResult[36] = tmp52;
            }
            const obj15 = { children: null };
            const items1 = [tmp20, tmp27, tmp35, tmp41];
            obj15.children = items1;
            const tmp48 = closure_13(closure_12, obj15);
            cResult[30] = tmp35;
            cResult[31] = tmp41;
            cResult[32] = tmp48;
          }
          const obj16 = { style: tmp4.buttonContainer, children: tmp39 };
          const tmp44 = closure_11(closure_6, obj16);
          cResult[27] = tmp4.buttonContainer;
          class U {
            constructor() {
              obj = closure_1(closure_2[14]);
              obj1 = { type: closure_9, guild_id: guildId, other_user_id: closure_0.id };
              trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
              return;
            }
          }
          cResult[29] = tmp44;
        }
      }
    }
    _require = first(function*() {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp4;
              const obj4 = guildId(onClose[16]);
              v1 = 1;
              c3 = 1;
              const obj5 = { value: obj4.setCommunicationDisabledDuration(closure_1, user.id, items[c3].value, ref.current), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const intl = user(onClose[7]).intl;
            const obj8 = guildId(onClose[17]);
            const name = guildId(onClose[18]).getName(closure_1, null, user);
            user = name;
            if (name == null) {
              user = "";
            }
            const obj = { key: "GUILD_COMMUNICATION_DISABLED_SUCCESS", content: null, icon: null };
            const obj7 = { user };
            obj.content = intl.formatToPlainString(user(onClose[7]).t.O9C3Nt, obj7);
            obj.icon = guildId(onClose[19]);
            obj8.open(obj);
            v1();
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp20) {
          c3 = tmp;
          throw tmp20;
        }
      }
    });
    function handleSubmitButtonPressed() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[7] = guildId;
    cResult[8] = onClose;
    cResult[9] = first;
    cResult[10] = user;
    cResult[11] = handleSubmitButtonPressed;
    tmp16 = handleSubmitButtonPressed;
  }
  class U {
    constructor() {
      obj = closure_1(closure_2[14]);
      obj1 = { type: closure_9, guild_id: guildId, other_user_id: closure_0.id };
      trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
      return;
    }
  }
  cResult[4] = guildId;
  cResult[5] = user.id;
  cResult[6] = U;
  tmp14 = U;
  let obj = require("c");
}) : (function GuildDisableCommunication(arg0) {
  ({ user: require, guildId: importDefault, onClose: dependencyMap } = arg0);
  c3 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_6 = async function _handleSubmitButtonPressed2() {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = tmp4(11451);
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: obj4.setCommunicationDisabledDuration(guild_id, id.id, items[asyncGeneratorStep].value, ref.current), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const intl = user(1126).intl;
          const obj8 = tmp4(4766);
          const name = tmp4(5405).getName(closure_129_1, null, closure_129_0);
          user = name;
          if (name == null) {
            user = "";
          }
          const obj = { key: "GUILD_COMMUNICATION_DISABLED_SUCCESS", content: null, icon: null };
          const obj7 = { user };
          obj.content = intl.formatToPlainString(user(1126).t.O9C3Nt, obj7);
          obj.icon = tmp4(5005);
          obj8.open(obj);
          closure_129_2();
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        c3 = tmp;
        throw tmp20;
      }
    }
  };
  const tmp = closure_15();
  [c3, c4] = noop.useState(0);
  noop = noop.useRef("");
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  let obj = { insets, inputs: null, scrollViewRef: ref };
  items = [{ ref: ref1, offset: { type: "toBottom" } }];
  obj.inputs = items;
  useSafeAreaAvoidingInputsDefault(obj);
  useMountEffectDefault(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, guild_id, other_user_id: _require.id });
  });
  let obj2 = { style: tmp.container, ref, contentContainerStyle: null, children: null };
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  obj2.contentContainerStyle = { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: insets.bottom };
  let obj4 = { children: null };
  let obj5 = { style: null, variant: "heading-md/semibold", children: null };
  let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: insets.bottom };
  obj5.style = { marginVertical: nativeDefault.space.PX_16 };
  let intl = util.intl;
  obj5.children = intl.format(util.t.Ns83GT, { helpdeskArticle });
  const items1 = [closure_11(Text_Text.Text, obj5), , , ];
  let obj8 = { title: null, defaultValue: 0, onChange: null, hasIcons: false, children: null };
  const intl2 = util.intl;
  obj8.title = intl2.string(util.t["9XsExm"]);
  obj8.onChange = function onChange(arg0) {
    _undefined(arg0);
  };
  obj8.children = items.map((getLabel, value) => closure_1_11(require("TableRadioRow").TableRadioRow, { value, label: getLabel.getLabel() }, value));
  items1[1] = closure_11(TableRadioGroup.TableRadioGroup, obj8);
  const obj9 = { ref: ref1, containerStyle: tmp.reasonTextArea, placeholder: null, label: null, maxLength: 512, onChange: null };
  const intl3 = util.intl;
  obj9.placeholder = intl3.string(util.t.GakiH1);
  const intl4 = util.intl;
  obj9.label = intl4.string(util.t.ewHW15);
  obj9.onChange = function onChange(current) {
    closure_5.current = current;
  };
  items1[2] = closure_11(TextArea.TextArea, obj9);
  const obj10 = { style: tmp.buttonContainer, children: null };
  const obj11 = { variant: "primary", text: null, onPress: null };
  const intl5 = util.intl;
  obj11.text = intl5.string(util.t.MlPTIi);
  obj11.onPress = function handleSubmitButtonPressed() {
    const self = this;
    const apply = closure_6.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj10.children = closure_11(components_Button_Button.Button, obj11);
  items1[3] = closure_11(closure_6, obj10);
  obj4.children = items1;
  obj2.children = closure_13(closure_12, obj4);
  return closure_11(closure_7, obj2);
}));