// === Module 11402: items ===

// Module 11402 (items)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4376 */;
import Button from "Button" /* 4815 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4831 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5475 */;
import TextArea from "TextArea" /* 8127 */;
import context from "context" /* 8136 */;
import _calculateScrollOffsetDefault from "_calculateScrollOffset" /* 9608 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import getFriendlyDurationString from "getFriendlyDurationString" /* 1994 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
let c5 = importAllResult;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ DisableCommunicationDuration, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: closure_8, SET_COMMUNICATION_DISABLED_MODAL_NAME: c9 } = getFriendlyDurationString);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
let obj = {
  value: DisableCommunicationDuration.DURATION_60_SEC,
  getLabel() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.iruf5E, { minutes: 1 });
  }
};
let items = [
  obj,
  {
    value: DisableCommunicationDuration.DURATION_5_MIN,
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.iruf5E, { minutes: 5 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_10_MIN,
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.iruf5E, { minutes: 10 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_HOUR,
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.LnvrA3, { hours: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_DAY,
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.jzH70Z, { days: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_WEEK,
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.iVZYyl, { weeks: 1 });
    }
  }
];
obj = { container: { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW }, reasonTextArea: null, buttonContainer: null };
createCacheKey = { marginVertical: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[2] = { marginBottom: ThemesDefault.space.PX_16 };
let closure_15 = createCacheKey.createStyles(obj);
let obj3 = { marginBottom: ThemesDefault.space.PX_16 };
const memoResult = importAllResult.memo(function GuildDisableCommunication(arg0) {
  ({ user: require, guildId: importDefault, onClose: dependencyMap } = arg0);
  c3 = undefined;
  let callback;
  importAllResult = undefined;
  function _handleSubmitButtonPressed() {
    const self = this;
    const tmp = _undefined(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp4;
              let obj3 = closure_1_1(11403);
              dependencyMap = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.setCommunicationDisabledDuration(closure_1_1, closure_1_0.id, closure_1_14[c3].value, closure_1_5.current);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            const intl = closure_1_0(1236).intl;
            const obj8 = closure_1_1(4098);
            const name = closure_1_1(4573).getName(closure_1, null, c0);
            c0 = name;
            if (name == null) {
              c0 = "";
            }
            obj = { key: "GUILD_COMMUNICATION_DISABLED_SUCCESS", content: null, icon: null };
            obj3 = { user: null };
            obj3[0] = c0;
            obj[1] = intl.formatToPlainString(closure_1_0(1236).t.O9C3Nt, obj3);
            obj[2] = closure_1_1(10028);
            obj8.open(obj);
            dependencyMap();
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp20) {
          c3 = tmp;
          throw tmp20;
        }
      }
    });
    closure_6 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback4();
  [c3, c4] = callback(importAllResult.useState(0), 2);
  importAllResult = importAllResult.useRef("");
  const ref = importAllResult.useRef(null);
  const ref1 = importAllResult.useRef(null);
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  items = [{ ref: ref1, offset: { type: "toBottom" } }];
  _calculateScrollOffsetDefault({ insets, inputs: items, scrollViewRef: ref });
  useMountLayoutEffectDefault(() => {
    let obj = closure_1_1(closure_1_2[13]);
    obj = { type: closure_1_9, guild_id: closure_1, other_user_id: lib.id };
    obj.track(closure_1_10.OPEN_MODAL, obj);
  });
  let obj = { style: tmp.container, ref, contentContainerStyle: null, children: null };
  obj = { paddingHorizontal: ThemesDefault.space.PX_12, paddingBottom: insets.bottom };
  obj[2] = obj;
  obj = { children: null };
  obj1 = { style: null, variant: "heading-md/semibold", children: null };
  const tmp2 = callback(importAllResult.useState(0), 2);
  obj1[0] = { marginVertical: ThemesDefault.space.PX_16 };
  let intl = getSystemLocale.intl;
  obj1[2] = intl.format(getSystemLocale.t.Ns83GT, { helpdeskArticle: closure_8 });
  const items1 = [callback2(Text.Text, obj1), , , ];
  const obj4 = { title: null, defaultValue: 0, onChange: null, hasIcons: false, children: null };
  const intl2 = getSystemLocale.intl;
  obj4[0] = intl2.string(getSystemLocale.t["9XsExm"]);
  obj4[2] = function onChange(arg0) {
    _undefined2(arg0);
  };
  obj4[4] = items.map((getLabel, value) => callback(lib(table[20]).TableRadioRow, { value, label: getLabel.getLabel() }, value));
  items1[1] = callback2(context.TableRadioGroup, obj4);
  const obj5 = { ref: ref1, containerStyle: tmp.reasonTextArea, placeholder: null, label: null, maxLength: 512, onChange: null };
  const intl3 = getSystemLocale.intl;
  obj5[2] = intl3.string(getSystemLocale.t.GakiH1);
  const intl4 = getSystemLocale.intl;
  obj5[3] = intl4.string(getSystemLocale.t.ewHW15);
  obj5[5] = function onChange(current) {
    closure_5.current = current;
  };
  items1[2] = callback2(TextArea.TextArea, obj5);
  const obj6 = { style: tmp.buttonContainer, children: null };
  const obj7 = { variant: "primary", text: null, onPress: null };
  const intl5 = getSystemLocale.intl;
  obj7[1] = intl5.string(getSystemLocale.t.MlPTIi);
  obj7[2] = function handleSubmitButtonPressed() {
    const self = this;
    const apply = _handleSubmitButtonPressed.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj6[1] = callback2(Button.Button, obj7);
  items1[3] = callback2(_handleSubmitButtonPressed, obj6);
  obj[0] = items1;
  obj[3] = callback3(closure_12, obj);
  return callback2(closure_7, obj);
});
const result = require("set").fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunication.tsx");

export default memoResult;