// === Module 16715: VibegrationsCreateSheet ===

// Module 16715 (VibegrationsCreateSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4606 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7302 */;
import VibegrationsEffortPicker from "VibegrationsEffortPicker" /* 16719 */;
import VibegrationsTemplates from "VibegrationsTemplates" /* 16720 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const VibegrationsConnectionStore = fn(16705);
({ ensureConnection: closure_7, sendUserMessage: closure_8, stageModelSettings: closure_9 } = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const VibegrationsCreateSheet = "VibegrationsCreateSheet";
const createStyles = fn(4639);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, form: null, section: null, sectionHeading: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.form = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.sectionHeading = { gap: nativeDefault.space.PX_4 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsCreateSheet.tsx");

export default function VibegrationsCreateSheet(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const onCreated = guildId.onCreated;
  str = undefined;
  _slicedToArray = undefined;
  let first1;
  c9 = undefined;
  c13 = undefined;
  const tmp = c13();
  [str, obj7.onChange] = first1.useState("");
  const tmp3 = _slicedToArray(first1.useState("guild"), 2);
  const first = tmp3[0];
  _slicedToArray = tmp3[1];
  const tmp7 = _slicedToArray(first1.useState(require("VibegrationsEffortPresets").VIBEGRATIONS_DEFAULT_MODEL_SETTINGS), 2);
  first1 = tmp7[0];
  const onChange = tmp7[1];
  const tmp9 = _slicedToArray(first1.useState(false), 2);
  const first2 = tmp9[0];
  closure_8 = tmp9[1];
  [tmp12, c9] = _slicedToArray(first1.useState(null), 2);
  _require = first((guild_id) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              install_scope = tmp4;
              closure_2 = tmp6;
              closure_130_0 = undefined;
              closure_130_1 = undefined;
              closure_1 = guild_id;
              if (guild_id == null) {
                closure_1 = closure_2;
              }
              const trimmed = closure_1.trim();
              closure_130_0 = trimmed;
              if ("" !== trimmed) {
                if (!c7) {
                  closure_1_8(true);
                  closure_1_9(null);
                  c5 = 2;
                  const obj6 = { guild_id, install_scope };
                  c6 = 3;
                  c7 = 1;
                  const obj7 = { value: guild_id(str[9]).createProject(obj6), done: false };
                  return obj7;
                }
              }
              c7 = 3;
            }
          } else if (1 !== tmp9) {
            if (2 === tmp9) {
              c5 = 1;
              closure_130_2 = closure_4;
              closure_1_9(guild_id(str[11]).getVibegrationsCreateErrorMessage(closure_130_2));
              const obj2 = guild_id(str[11]);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_1_8(false);
              c7 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_130_1 = value;
              first2(closure_130_1);
              c9(closure_130_1, c5);
              closure_8(closure_130_1, closure_130_0);
              onCreated(str[10]).hideActionSheet(memo);
              closure_1(closure_130_1);
              c5 = 1;
              const obj8 = onCreated(str[10]);
            }
            c5 = 0;
            closure_1_8(false);
          }
          c5 = 0;
          closure_1_8(false);
          throw closure_4;
        } catch (tmp42) {
          closure_4 = tmp42;
          if (tmp5 === c5) {
            c7 = tmp3;
            throw tmp42;
          } else if (tmp2 === tmp44) {
            c6 = tmp2;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  let items = [guildId, first, first1, onCreated, str, first2];
  closure_10 = first1.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  let intl = require("util").intl;
  const stringResult = intl.string(onCreated(str[13]).MLg0S8);
  c11 = stringResult;
  const memo = first1.useMemo(() => {
    const obj = { guild: null, user: null };
    const intl = closure_0(str[12]).intl;
    obj.guild = intl.string(onCreated(str[13]).LdgKdI);
    const intl2 = closure_0(str[12]).intl;
    obj.user = intl2.string(onCreated(str[13]).iqXIRN);
    return obj;
  }, []);
  const items1 = [stringResult, memo];
  const callback = first1.useCallback(() => {
    const obj2 = { key: "VibegrationsInstallScope", header: { title }, hasIcons: false, options: null };
    const items = ["guild", "user"];
    obj2.options = items.map((item) => {
      closure_0 = item;
      return {
        label: closure_12[item],
        onPress() {
          return closure_2_4(closure_0);
        }
      };
    });
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items1);
  const tmp11 = _slicedToArray(first1.useState(null), 2);
  const landingModelChoicesResult = require("VibegrationsLandingModelChoices").landingModelChoices();
  c13 = landingModelChoicesResult;
  const items2 = [landingModelChoicesResult, first1];
  const callback1 = first1.useCallback(() => {
    const obj2 = { key: VibegrationsEffortPicker.VIBEGRATIONS_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: closure_2_10(VibegrationsEffortPicker.VibegrationsEffortPickerSheet, { initialSettings: first1, choices, onChange }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items2);
  let obj = require("VibegrationsLandingModelChoices");
  let result = require("VibegrationsTemplates").vibegrationsTemplates();
  let intl2 = require("util").intl;
  const items3 = [intl2.string(onCreated(str[13])["E+Q26x"]), , ];
  const intl3 = require("util").intl;
  items3[1] = intl3.string(onCreated(str[13])["06/jqP"]);
  const intl4 = require("util").intl;
  items3[2] = intl4.string(onCreated(str[13])["3gSfUa"]);
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj4 = { title: null };
  const intl5 = require("util").intl;
  obj4.title = intl5.string(onCreated(str[13])["2tYpRK"]);
  obj3.header = closure_10(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj4);
  let obj5 = { style: tmp.content, children: null };
  let obj6 = { style: tmp.form, children: null };
  let obj7 = { placeholder: null, autoComplete: "off", value: null, onChange: null, isDisabled: null };
  const intl6 = require("util").intl;
  obj7.placeholder = intl6.string(onCreated(str[13]).TU9IGR);
  obj7.value = str;
  obj7.isDisabled = first2;
  const items4 = [closure_10(require("TextArea").TextArea, obj7), , , , ];
  let obj8 = { hasIcons: false, children: null };
  const obj9 = { label: stringResult, trailing: closure_10(require("Text/Text").Text, { variant: "text-md/normal", color: "text-muted", children: memo[first] }), arrow: true, disabled: first2, onPress: callback };
  obj8.children = closure_10(require("TableRow").TableRow, obj9);
  items4[1] = closure_10(require("TableRowGroup").TableRowGroup, obj8);
  const obj11 = { hasIcons: false, children: null };
  const obj12 = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
  const intl7 = require("util").intl;
  obj12.label = intl7.string(onCreated(str[13]).GDs9Vq);
  const obj13 = { variant: "text-md/normal", color: "text-muted", children: null };
  const obj10 = { variant: "text-md/normal", color: "text-muted", children: memo[first] };
  let obj2 = require("VibegrationsTemplates");
  obj13.children = require("VibegrationsEffortPicker").describeVibegrationsEffort(first1, landingModelChoicesResult);
  obj12.trailing = closure_10(require("Text/Text").Text, obj13);
  obj12.disabled = first2;
  obj12.onPress = callback1;
  obj11.children = closure_10(require("TableRow").TableRow, obj12);
  items4[2] = closure_10(require("TableRowGroup").TableRowGroup, obj11);
  let tmp19Result = null;
  if (null != tmp12) {
    const obj15 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp12 };
    tmp19Result = tmp19(tmp5(tmp6[23]).Text, obj15);
  }
  items4[3] = tmp19Result;
  const obj16 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
  const intl8 = tmp5(tmp6[12]).intl;
  obj16.text = intl8.string(require("util").t.CumH4u);
  obj16.disabled = "" === str.trim();
  obj16.loading = first2;
  obj16.onPress = function onPress() {
    return closure_10();
  };
  items4[4] = closure_10(require("components/Button/Button").Button, obj16);
  obj6.children = items4;
  const items5 = [c11(onChange, obj6), , ];
  const obj17 = { style: tmp.section, children: null };
  const obj18 = { style: tmp.sectionHeading, children: null };
  const obj19 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl9 = tmp5(tmp6[12]).intl;
  obj19.children = intl9.string(onCreated(str[13]).FYK2xQ);
  const items6 = [closure_10(require("Text/Text").Text, obj19), ];
  const obj20 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl10 = tmp5(tmp6[12]).intl;
  obj20.children = intl10.string(onCreated(str[13]).BTNdyX);
  items6[1] = closure_10(require("Text/Text").Text, obj20);
  obj18.children = items6;
  const items7 = [c11(onChange, obj18), ];
  const obj14 = require("VibegrationsEffortPicker");
  items7[1] = closure_10(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: result.map((name) => {
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled: first2, accessibilityLabel: null, onPress: null };
      const intl = name(str[12]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[13]).ER1uQ4, { name: name.name });
      obj.onPress = function onPress() {
        return closure_10(VibegrationsTemplates.templateImportMessage(name.name));
      };
      return closure_10(name(str[22]).TableRow, obj, name.id);
    })
  });
  obj17.children = items7;
  items5[1] = c11(onChange, obj17);
  const obj22 = { style: tmp.section, children: null };
  const obj23 = { style: tmp.sectionHeading, children: null };
  const obj24 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl11 = tmp5(tmp6[12]).intl;
  obj24.children = intl11.string(onCreated(str[13])["/SUK82"]);
  const items8 = [closure_10(require("Text/Text").Text, obj24), ];
  const obj25 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl12 = tmp5(tmp6[12]).intl;
  obj25.children = intl12.string(onCreated(str[13])["+aBXyx"]);
  items8[1] = closure_10(require("Text/Text").Text, obj25);
  obj23.children = items8;
  const items9 = [c11(onChange, obj23), ];
  const obj21 = {
    hasIcons: false,
    children: result.map((name) => {
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled: first2, accessibilityLabel: null, onPress: null };
      const intl = name(str[12]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[13]).ER1uQ4, { name: name.name });
      obj.onPress = function onPress() {
        return closure_10(VibegrationsTemplates.templateImportMessage(name.name));
      };
      return closure_10(name(str[22]).TableRow, obj, name.id);
    })
  };
  items9[1] = closure_10(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: items3.map((label) => {
      closure_0 = label;
      return closure_10(closure_0(str[22]).TableRow, {
        label,
        arrow: true,
        disabled: first2,
        onPress() {
          return closure_10(closure_0);
        }
      }, label);
    })
  });
  obj22.children = items9;
  items5[2] = c11(onChange, obj22);
  obj5.children = items5;
  obj3.children = c11(onChange, obj5);
  return closure_10(require("ActionSheet").ActionSheet, obj3);
};
export const VIBEGRATIONS_CREATE_SHEET_KEY = "VibegrationsCreateSheet";