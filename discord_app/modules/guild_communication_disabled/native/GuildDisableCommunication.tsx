// discord_app/modules/guild_communication_disabled/native/GuildDisableCommunication.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useMountEffectDefault from "../../../hooks/useMountEffect.tsx";
import TableRadioGroup from "../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import TextArea from "../../../design/components/TextInput/native/TextArea.native.tsx";
import useSafeAreaAvoidingInputsDefault from "../../safe_area/useSafeAreaAvoidingInputs.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const GuildDisableCommunicationConstants = fn(2023);
({
  DisableCommunicationDuration,
  GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: closure_8,
  SET_COMMUNICATION_DISABLED_MODAL_NAME: closure_9,
} = GuildDisableCommunicationConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
let obj = {
  value: DisableCommunicationDuration.DURATION_60_SEC,
  getLabel() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.iruf5E, { minutes: 1 });
  },
};
let items = [
  obj,
  {
    value: DisableCommunicationDuration.DURATION_5_MIN,
    getLabel() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iruf5E, { minutes: 5 });
    },
  },
  {
    value: DisableCommunicationDuration.DURATION_10_MIN,
    getLabel() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iruf5E, { minutes: 10 });
    },
  },
  {
    value: DisableCommunicationDuration.DURATION_1_HOUR,
    getLabel() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.LnvrA3, { hours: 1 });
    },
  },
  {
    value: DisableCommunicationDuration.DURATION_1_DAY,
    getLabel() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.jzH70Z, { days: 1 });
    },
  },
  {
    value: DisableCommunicationDuration.DURATION_1_WEEK,
    getLabel() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iVZYyl, { weeks: 1 });
    },
  },
];
fn(4560);
obj = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  reasonTextArea: null,
  buttonContainer: null,
};
const createStyles = { marginVertical: nativeDefault.space.PX_16 };
obj.reasonTextArea = createStyles;
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.buttonContainer = { marginBottom: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj);
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            let obj3 = tmp4(11842);
            dependencyMap = 1;
            c3 = 1;
            const obj1 = {
              value: obj3.setCommunicationDisabledDuration(
                guild_id,
                id.id,
                items[asyncGeneratorStep].value,
                ref.current,
              ),
              done: false,
            };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          const intl = user(1114).intl;
          const obj8 = tmp4(4259);
          const name = tmp4(4712).getName(closure_129_1, null, closure_129_0);
          user = name;
          if (name == null) {
            user = "";
          }
          obj = { key: "GUILD_COMMUNICATION_DISABLED_SUCCESS", content: null, icon: null };
          obj3 = { user };
          obj.content = intl.formatToPlainString(user(1114).t.O9C3Nt, obj3);
          obj.icon = tmp4(9566);
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
  [c3, c4] = _slicedToArray(noop.useState(0), 2);
  noop = noop.useRef("");
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  let obj = { insets, inputs: null, scrollViewRef: ref };
  items = [{ ref: ref1, offset: { type: "toBottom" } }];
  obj.inputs = items;
  useSafeAreaAvoidingInputsDefault(obj);
  useMountEffectDefault(() => {
    const obj = { type, guild_id, other_user_id: require.id };
    obj.track(AnalyticEvents.OPEN_MODAL, obj);
  });
  obj = { style: tmp.container, ref, contentContainerStyle: null, children: null };
  obj = { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: insets.bottom };
  obj.contentContainerStyle = obj;
  let obj1 = { children: null };
  let obj2 = { style: null, variant: "heading-md/semibold", children: null };
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  obj2.style = { marginVertical: nativeDefault.space.PX_16 };
  let intl = util.intl;
  obj2.children = intl.format(util.t.Ns83GT, { helpdeskArticle });
  const items1 = [closure_11(Text_Text.Text, obj2), , ,];
  const obj5 = { title: null, defaultValue: 0, onChange: null, hasIcons: false, children: null };
  const intl2 = util.intl;
  obj5.title = intl2.string(util.t["9XsExm"]);
  obj5.onChange = function onChange(arg0) {
    _undefined(arg0);
  };
  obj5.children = items.map((getLabel, value) =>
    closure_1_11(TableRadioRow.TableRadioRow, { value, label: getLabel.getLabel() }, value),
  );
  items1[1] = closure_11(TableRadioGroup.TableRadioGroup, obj5);
  const obj6 = {
    ref: ref1,
    containerStyle: tmp.reasonTextArea,
    placeholder: null,
    label: null,
    maxLength: 512,
    onChange: null,
  };
  const intl3 = util.intl;
  obj6.placeholder = intl3.string(util.t.GakiH1);
  const intl4 = util.intl;
  obj6.label = intl4.string(util.t.ewHW15);
  obj6.onChange = function onChange(current) {
    closure_5.current = current;
  };
  items1[2] = closure_11(TextArea.TextArea, obj6);
  const obj7 = { style: tmp.buttonContainer, children: null };
  let obj8 = { variant: "primary", text: null, onPress: null };
  const intl5 = util.intl;
  obj8.text = intl5.string(util.t.MlPTIi);
  obj8.onPress = function handleSubmitButtonPressed() {
    const self = this;
    const apply = closure_6.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj7.children = closure_11(components_Button_Button.Button, obj8);
  items1[3] = closure_11(closure_6, obj7);
  obj1.children = items1;
  obj.children = closure_13(closure_12, obj1);
  return closure_11(closure_7, obj);
});
