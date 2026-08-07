// discord_app/modules/guild_communication_disabled/native/GuildDisableCommunication.tsx
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import importAllResult from "context";
import get_ActivityIndicator from "registerAsset";
import getFriendlyDurationString from "getFriendlyDurationString";
import { AnalyticEvents } from "ME";
import jsxProd from "TextArea";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { context } from "../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { TextArea } from "../../../design/components/TextInput/native/TextArea.native.tsx";
import { useMountLayoutEffect } from "../../../hooks/useMountEffect.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { _calculateScrollOffset } from "../../safe_area/useSafeAreaAvoidingInputs.native.tsx";
import { useSafeAreaInsetsKeyboardAware } from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";

let DisableCommunicationDuration;
let c9;
let closure_12;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
let c5 = importAllResult;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ DisableCommunicationDuration, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: metroImportAll, SET_COMMUNICATION_DISABLED_MODAL_NAME: c9 } = getFriendlyDurationString);
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
obj = { container: null, reasonTextArea: null, buttonContainer: null };
obj[0] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey = { marginVertical: require("Themes").space.PX_16 };
obj[1] = createCacheKey;
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[2] = { marginBottom: require("Themes").space.PX_16 };
let closure_15 = createCacheKey.createStyles(obj);
let obj3 = { marginBottom: require("Themes").space.PX_16 };
const memoResult = importAllResult.memo(function GuildDisableCommunication(arg0) {
  let c3;
  let c4;
  let dependencyMap;
  let importDefault;
  let require;
  ({ user: require, guildId: importDefault, onClose: dependencyMap } = arg0);
  c3 = undefined;
  let callback;
  let importAllResult;
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
          return { value: "T", done: null };
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
              let closure_1 = tmp4;
              let obj3 = outer1_1(11175);
              dependencyMap = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj3.setCommunicationDisabledDuration(outer1_1, outer1_0.id, outer1_14[c3].value, outer1_5.current);
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
            const intl = outer1_0(1236).intl;
            const obj8 = outer1_1(4002);
            const name = outer1_1(4491).getName(closure_1, null, c0);
            c0 = name;
            if (name == null) {
              c0 = "";
            }
            obj = { key: "GUILD_COMMUNICATION_DISABLED_SUCCESS", content: null, icon: null };
            obj3 = { user: null };
            obj3[0] = c0;
            obj[1] = intl.formatToPlainString(outer1_0(1236).t.O9C3Nt, obj3);
            obj[2] = outer1_1(9811);
            obj8.open(obj);
            dependencyMap();
            c3 = 3;
            return { value: "T", done: null };
          }
        } catch (tmp20) {
          c3 = tmp;
          throw tmp20;
        }
      }
    });
    const _handleSubmitButtonPressed = tmp;
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
  const insets = useSafeAreaInsetsKeyboardAware({ includeKeyboardHeight: true }).insets;
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  _calculateScrollOffset({ insets, inputs: items, scrollViewRef: ref });
  useMountLayoutEffect(() => {
    let obj = outer1_1(outer1_2[13]);
    obj = { type: outer1_9, guild_id: closure_1, other_user_id: lib.id };
    obj.track(outer1_10.OPEN_MODAL, obj);
  });
  let obj = { style: tmp.container, ref, contentContainerStyle: null, children: null };
  obj = { paddingHorizontal: Themes.space.PX_12, paddingBottom: insets.bottom };
  obj[2] = obj;
  obj = { children: null };
  let obj1 = { style: null, variant: "heading-md/semibold", children: null };
  let obj2 = { marginVertical: null };
  obj2[0] = Themes.space.PX_16;
  obj1[0] = obj2;
  let intl = getSystemLocale.intl;
  obj1[2] = intl.format(getSystemLocale.t.Ns83GT, { helpdeskArticle: closure_8 });
  const items1 = [callback2(Text.Text, obj1), , , ];
  const obj4 = { title: null, defaultValue: 0, onChange: null, hasIcons: false, children: null };
  const intl2 = getSystemLocale.intl;
  obj4[0] = intl2.string(getSystemLocale.t["9XsExm"]);
  obj4[2] = function onChange(arg0) {
    _undefined2(arg0);
  };
  obj4[4] = items.map((getLabel, value) => {
    const obj = { value, label: null };
    obj[1] = getLabel.getLabel();
    return callback(lib(table[20]).TableRadioRow, obj, value);
  });
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
const result = require("noop").fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunication.tsx");

export default memoResult;