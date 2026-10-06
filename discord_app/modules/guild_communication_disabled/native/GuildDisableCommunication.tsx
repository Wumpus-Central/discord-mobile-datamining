// === Module 11466: GuildDisableCommunication ===

// Module 11466 (GuildDisableCommunication)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Text_Text from "Text/Text" /* 4892 */;
import useMountEffectDefault from "useMountEffect" /* 5597 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import TableRadioRow2 from "TableRadioRow" /* 6078 */;
import TableRadioGroup2 from "TableRadioGroup" /* 6079 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import TextArea2 from "TextArea" /* 6587 */;
import useSafeAreaAvoidingInputsDefault from "useSafeAreaAvoidingInputs" /* 10849 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 2114 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;

let DisableCommunicationDuration;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ DisableCommunicationDuration, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: metroImportAll, SET_COMMUNICATION_DISABLED_MODAL_NAME: c9 } = GuildDisableCommunicationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let obj = {
  value: DisableCommunicationDuration.DURATION_60_SEC,
  getLabel() {
    const intl = intl6.intl;
    return intl.formatToPlainString(intl6.t.iruf5E, { minutes: 1 });
  }
};
let items = [
  obj,
  {
    value: DisableCommunicationDuration.DURATION_5_MIN,
    getLabel() {
      const intl = intl6.intl;
      return intl.formatToPlainString(intl6.t.iruf5E, { minutes: 5 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_10_MIN,
    getLabel() {
      const intl = intl6.intl;
      return intl.formatToPlainString(intl6.t.iruf5E, { minutes: 10 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_HOUR,
    getLabel() {
      const intl = intl6.intl;
      return intl.formatToPlainString(intl6.t.LnvrA3, { hours: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_DAY,
    getLabel() {
      const intl = intl6.intl;
      return intl.formatToPlainString(intl6.t.jzH70Z, { days: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_WEEK,
    getLabel() {
      const intl = intl6.intl;
      return intl.formatToPlainString(intl6.t.iVZYyl, { weeks: 1 });
    }
  }
];
let createStyles = createStyles_mod;
let obj2 = { container: obj3, reasonTextArea: obj4, buttonContainer: obj5 };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj4 = { marginVertical: nativeDefault.space.PX_16 };
obj5 = { marginBottom: nativeDefault.space.PX_16 };
let closure_15 = createStyles(obj2);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let closure_4;
  let closure_5;
  let first;
  let first1;
  let intl;
  let items1;
  let obj8;
  let onClose;
  let tmp11;
  let tmp12;
  const tmp2 = onClose;
  let obj = user(onClose[11]);
  const cResult = obj.c(37);
  user = user.user;
  const guildId = user.guildId;
  onClose = user.onClose;
  const tmp4 = closure_15();
  [first, _slicedToArray] = react.useState(0);
  react = react.useRef("");
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first1 = obj2;
  } else {
    first1 = cResult[0];
  }
  const insets = guildId(tmp2[12])(first1).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { ref: ref1, offset: { type: "toBottom" } };
    items = [obj3];
    cResult[1] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== insets) {
    let obj4 = { insets, inputs: tmp11, scrollViewRef: ref };
    cResult[2] = insets;
    cResult[3] = obj4;
    tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  guildId(tmp2[13])(tmp12);
  if (cResult[4] === guildId) {
    let tmp14;
    if (cResult[5] === user.id) {
      tmp14 = cResult[6];
    }
    guildId(tmp2[15])(tmp14);
    if (cResult[7] === guildId) {
      if (cResult[8] === onClose) {
        if (cResult[9] === first) {
          let tmp16;
          let tmp18;
          let tmp19;
          let tmp20;
          let tmp24;
          let tmp27;
          let tmp31;
          let tmp30;
          let tmp37;
          let tmp39;
          if (cResult[10] === user) {
            tmp16 = cResult[11];
          }
          const container = tmp4.container;
          if (cResult[12] !== insets.bottom) {
            let obj5 = { paddingHorizontal: tmp10(tmp2[9]).space.PX_12, paddingBottom: insets.bottom };
            cResult[12] = insets.bottom;
            cResult[13] = obj5;
            tmp18 = obj5;
          } else {
            tmp18 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            let obj6 = { marginVertical: tmp10(tmp2[9]).space.PX_16 };
            cResult[14] = obj6;
            tmp19 = obj6;
          } else {
            tmp19 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            let obj7 = { style: tmp19, variant: "heading-md/semibold", children: intl.format(tmp(tmp2[7]).t.Ns83GT, obj8) };
            const Text = tmp(tmp2[20]).Text;
            intl = tmp(tmp2[7]).intl;
            obj8 = { helpdeskArticle };
            const tmp23 = closure_11(Text, obj7);
            cResult[15] = tmp23;
            tmp20 = tmp23;
          } else {
            tmp20 = cResult[15];
          }
          const _Symbol3 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[7]).intl;
            const stringResult = intl2.string(user(tmp2[7]).t["9XsExm"]);
            cResult[16] = stringResult;
            tmp24 = stringResult;
          } else {
            tmp24 = cResult[16];
          }
          const _Symbol4 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor(arg0) {
                closure_4(arg0);
              }
            }
            cResult[17] = X;
          } else {
            class X {
              constructor(arg0) {
                closure_4(arg0);
              }
            }
          }
          const _Symbol5 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor(arg0) {
                closure_4(arg0);
              }
            }
            const obj9 = {
              title: tmp24,
              defaultValue: 0,
              onChange: X,
              hasIcons: false,
              children: items.map((getLabel, value) => {
                          const obj = { value, label: getLabel.getLabel() };
                          const TableRadioRow = user(onClose[22]).TableRadioRow;
                          return closure_1_11(TableRadioRow, obj, value);
                        })
            };
            const TableRadioGroup = tmp(tmp2[21]).TableRadioGroup;
            const tmp29 = closure_11(TableRadioGroup, obj9);
            cResult[18] = tmp29;
            tmp27 = tmp29;
          } else {
            class X {
              constructor(arg0) {
                closure_4(arg0);
              }
            }
          }
          const _Symbol6 = Symbol;
          const reasonTextArea = tmp4.reasonTextArea;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor(arg0) {
                closure_4(arg0);
              }
            }
            const stringResult1 = obj10.string(user(tmp2[7]).t.GakiH1);
            const intl3 = tmp(tmp2[7]).intl;
            const stringResult2 = intl3.string(user(tmp2[7]).t.ewHW15);
            cResult[19] = stringResult1;
            cResult[20] = stringResult2;
            tmp31 = stringResult2;
            tmp30 = stringResult1;
          } else {
            class X {
              constructor(arg0) {
                closure_4(arg0);
              }
            }
            tmp31 = cResult[20];
          }
          const _Symbol7 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor(current) {
                closure_5.current = current;
              }
            }
            cResult[21] = Y;
          } else {
            class Y {
              constructor(current) {
                closure_5.current = current;
              }
            }
          }
          if (cResult[22] !== tmp4.reasonTextArea) {
            class Y {
              constructor(current) {
                closure_5.current = current;
              }
            }
            const obj11 = { ref: ref1, containerStyle: reasonTextArea, placeholder: tmp30, label: tmp31, maxLength: 512, onChange: Y };
            cResult[22] = tmp4.reasonTextArea;
            cResult[23] = closure_11(user(tmp2[23]).TextArea, obj11);
            const tmp36 = closure_11(user(tmp2[23]).TextArea, obj11);
          } else {
            class Y {
              constructor(current) {
                closure_5.current = current;
              }
            }
          }
          const _Symbol8 = Symbol;
          const buttonContainer = tmp4.buttonContainer;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor(current) {
                closure_5.current = current;
              }
            }
            const stringResult3 = obj12.string(user(tmp2[7]).t.MlPTIi);
            cResult[24] = stringResult3;
            tmp37 = stringResult3;
          } else {
            class Y {
              constructor(current) {
                closure_5.current = current;
              }
            }
          }
          if (cResult[25] !== tmp16) {
            class Y {
              constructor(current) {
                closure_5.current = current;
              }
            }
            const obj13 = { variant: "primary", text: tmp37, onPress: tmp16 };
            const tmp40 = closure_11(user(tmp2[24]).Button, obj13);
            cResult[25] = tmp16;
            cResult[26] = tmp40;
            tmp39 = tmp40;
          } else {
            class Y {
              constructor(current) {
                closure_5.current = current;
              }
            }
          }
          if (cResult[27] === tmp4.buttonContainer) {
            class Y {
              constructor(current) {
                closure_5.current = current;
              }
            }
            if (cResult[30] === tmp35) {
              class Y {
                constructor(current) {
                  closure_5.current = current;
                }
              }
              if (cResult[33] === tmp4.container) {
                class Y {
                  constructor(current) {
                    closure_5.current = current;
                  }
                }
              }
              const obj14 = { style: container, ref, contentContainerStyle: tmp18, children: tmp45 };
              cResult[33] = tmp4.container;
              cResult[34] = tmp45;
              cResult[35] = tmp18;
              cResult[36] = closure_11(closure_7, obj14);
              const tmp52 = closure_11(closure_7, obj14);
            }
            const obj15 = { children: items1 };
            items1 = [tmp20, tmp27, tmp35, tmp41];
            cResult[30] = tmp35;
            cResult[31] = tmp41;
            cResult[32] = closure_13(closure_12, obj15);
            const tmp48 = closure_13(closure_12, obj15);
          }
          const obj16 = { style: buttonContainer, children: tmp39 };
          cResult[27] = tmp4.buttonContainer;
          const tmp44 = closure_11(closure_6, obj16);
          class U {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { type, guild_id: guildId, other_user_id: user.id };
              obj.track(AnalyticEvents.OPEN_MODAL, obj2);
            }
          }
          cResult[29] = tmp44;
        }
      }
    }
    let closure_0 = first(function*() {
      let obj7;
      let v1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          let closure_1;
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
              closure_1 = tmp3;
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
            const open = guildId(onClose[17]).open;
            const tmp26 = guildId(onClose[17]);
            const intl = user(onClose[7]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const O9C3Nt = user(onClose[7]).t.O9C3Nt;
            const obj8 = guildId(onClose[18]);
            const name = obj8.getName(closure_1, null, user);
            user = name;
            if (name == null) {
              user = "";
            }
            const obj = { key: "GUILD_COMMUNICATION_DISABLED_SUCCESS", content: formatToPlainString(O9C3Nt, obj7), icon: guildId(onClose[19]) };
            obj7 = { user };
            open(obj);
            v1();
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          c3 = 3;
          throw tmp19;
        }
      }
    });
    function handleSubmitButtonPressed() {
      return closure_0(...arguments);
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
      const obj = AnalyticsUtilsDefault;
      const obj2 = { type, guild_id: guildId, other_user_id: user.id };
      obj.track(AnalyticEvents.OPEN_MODAL, obj2);
    }
  }
  cResult[4] = guildId;
  cResult[5] = user.id;
  cResult[6] = U;
  tmp14 = U;
}) : ((arg0) => {
  let Button;
  let _undefined;
  let c3;
  let c4;
  let closure_5;
  let guild_id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let obj11;
  let obj3;
  let obj4;
  let obj6;
  let obj7;
  ({ user: require, guildId: importDefault, onClose: dependencyMap } = arg0);
  c3 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let obj = function _handleSubmitButtonPressed2() {
    let id;
    let ref;
    obj = _asyncToGenerator(async () => {
      let closure_1;
      let obj7;
      let user;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj4 = tmp3(c2[16]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj4.setCommunicationDisabledDuration(guild_id, id.id, closure_1_14[closure_2_3].value, ref.current), done: false };
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
            const open = tmp3(c2[17]).open;
            const tmp26 = tmp3(c2[17]);
            const intl = user(c2[7]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const O9C3Nt = user(c2[7]).t.O9C3Nt;
            const obj8 = tmp3(c2[18]);
            const name = obj8.getName(closure_129_1, null, closure_129_0);
            user = name;
            if (name == null) {
              user = "";
            }
            obj = { key: "GUILD_COMMUNICATION_DISABLED_SUCCESS", content: formatToPlainString(O9C3Nt, obj7), icon: tmp3(c2[19]) };
            obj7 = { user };
            open(obj);
            closure_129_2();
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          c3 = 3;
          throw tmp19;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_15();
  const tmp2 = _slicedToArray(react.useState(0), 2);
  [c3, c4] = tmp2;
  react = react.useRef("");
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  obj = { insets, inputs: items, scrollViewRef: ref };
  items = [{ ref: ref1, offset: { type: "toBottom" } }];
  useSafeAreaAvoidingInputsDefault(obj);
  useMountEffectDefault(() => {
    obj = AnalyticsUtilsDefault;
    const obj2 = { type, guild_id: importDefault, other_user_id: require.id };
    obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  });
  let obj2 = { style: tmp.container, ref, contentContainerStyle: obj3, children: closure_13(closure_12, obj4) };
  obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: insets.bottom };
  obj4 = { children: items1 };
  let obj5 = { style: obj6, variant: "heading-md/semibold", children: intl.format(intl6.t.Ns83GT, obj7) };
  obj6 = { marginVertical: nativeDefault.space.PX_16 };
  const Text = Text_Text.Text;
  intl = intl6.intl;
  obj7 = { helpdeskArticle };
  items1 = [closure_11(Text, obj5), , , ];
  let obj8 = {
    title: intl2.string(intl6.t["9XsExm"]),
    defaultValue: 0,
    onChange(arg0) {
      _undefined(arg0);
    },
    hasIcons: false,
    children: items.map((getLabel, value) => {
      obj = { value, label: getLabel.getLabel() };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      return closure_1_11(TableRadioRow, obj, value);
    })
  };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  intl2 = intl6.intl;
  items1[1] = closure_11(TableRadioGroup, obj8);
  const obj9 = {
    ref: ref1,
    containerStyle: tmp.reasonTextArea,
    placeholder: intl3.string(intl6.t.GakiH1),
    label: intl4.string(intl6.t.ewHW15),
    maxLength: 512,
    onChange(current) {
      closure_5.current = current;
    }
  };
  const TextArea = TextArea2.TextArea;
  intl3 = intl6.intl;
  intl4 = intl6.intl;
  items1[2] = closure_11(TextArea, obj9);
  const obj10 = { style: tmp.buttonContainer, children: closure_11(Button, obj11) };
  obj11 = {
    variant: "primary",
    text: intl5.string(intl6.t.MlPTIi),
    onPress: function handleSubmitButtonPressed() {
      return obj(...arguments);
    }
  };
  Button = components_Button_Button.Button;
  intl5 = intl6.intl;
  items1[3] = closure_11(obj, obj10);
  return closure_11(closure_7, obj2);
}));
const result = size.fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunication.tsx");

export default memoResult;