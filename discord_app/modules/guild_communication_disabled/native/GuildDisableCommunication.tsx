// === Module 12184: GuildDisableCommunication ===

// Module 12184 (GuildDisableCommunication)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4825 */;
import components_Button_Button from "components/Button/Button" /* 5273 */;
import useMountEffectDefault from "useMountEffect" /* 5290 */;
import TableRadioGroup from "TableRadioGroup" /* 5990 */;
import TableRadioRow from "TableRadioRow" /* 5993 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7314 */;
import TextArea from "TextArea" /* 7418 */;
import useSafeAreaAvoidingInputsDefault from "useSafeAreaAvoidingInputs" /* 11499 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const GuildDisableCommunicationConstants = fn(2109);
({ DisableCommunicationDuration, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: closure_8, SET_COMMUNICATION_DISABLED_MODAL_NAME: closure_9 } = GuildDisableCommunicationConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
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
const createStyles = fn(4829);
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
let obj6 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunication.tsx");

export default noop.memo(function GuildDisableCommunication(arg0) {
  ({ user: require, guildId: importDefault, onClose: dependencyMap } = arg0);
  c3 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_6 = async function _handleSubmitButtonPressed() {
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
        return { value: "HermesInternal", done: null };
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
            const obj4 = tmp4(12185);
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
          const intl = user(1115).intl;
          const obj8 = tmp4(4523);
          const name = tmp4(4981).getName(closure_129_1, null, closure_129_0);
          user = name;
          if (name == null) {
            user = "";
          }
          const obj = { key: "GUILD_COMMUNICATION_DISABLED_SUCCESS", content: null, icon: null };
          const obj7 = { user };
          obj.content = intl.formatToPlainString(user(1115).t.O9C3Nt, obj7);
          obj.icon = tmp4(9704);
          obj8.open(obj);
          closure_129_2();
          c3 = 3;
          return { value: "HermesInternal", done: null };
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
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, guild_id, other_user_id: require.id });
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
  obj8.children = items.map((getLabel, value) => closure_1_11(TableRadioRow.TableRadioRow, { value, label: getLabel.getLabel() }, value));
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
});