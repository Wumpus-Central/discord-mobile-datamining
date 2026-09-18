// discord_app/modules/vibegrations/native/VibegrationsCreateSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Sheet_showSimpleActionSheet from "../../../design/components/Sheet/native/showSimpleActionSheet.native.tsx";
import VibegrationsEffortPicker from "VibegrationsEffortPicker.tsx";
import VibegrationsTemplates from "../VibegrationsTemplates.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const VibegrationsConnectionStore = fn(16849);
({
  ensureConnection: closure_7,
  sendUserMessage: closure_8,
  stageModelSettings: closure_9,
} = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const VibegrationsCreateSheet = "VibegrationsCreateSheet";
const createStyles = fn(4722);
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
  let memo;
  const tmp = memo();
  [str, obj7.onChange] = first1.useState("");
  const tmp3 = _slicedToArray(first1.useState("guild"), 2);
  const first = tmp3[0];
  _slicedToArray = tmp3[1];
  const tmp7 = _slicedToArray(
    first1.useState(require("VibegrationsEffortPresets").VIBEGRATIONS_DEFAULT_MODEL_SETTINGS),
    2,
  );
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
    return (function* (arg0) {
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
                  _undefined(null);
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
              _undefined(guild_id(str[11]).getVibegrationsCreateErrorMessage(closure_130_2));
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
              onCreated(str[10]).hideActionSheet(c12);
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
  closure_10 = first1.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  const items1 = [guildId, first, first1, onCreated, first2];
  closure_11 = first1.useCallback(
    first(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp9;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              if (!first2) {
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: closure_0(tmp85[12]).pickVibegrationsArchive(), done: false };
                return obj5;
              }
            }
          } else if (1 === tmp9) {
            c3 = 0;
            const intl2 = closure_0(tmp85[13]).intl;
            closure_129_9(intl2.string(tmp4(tmp85[14])["02GpNr"]));
            c5 = 3;
            const obj8 = { value: undefined, done: true };
            return obj8;
          } else {
            if (2 === tmp9) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else {
                closure_128_0 = value;
                c3 = 0;
                if (null != closure_128_0) {
                  closure_128_1 = closure_0(tmp85[12]).describeVibegrationsArchiveRejection(closure_128_0);
                  if (null == closure_128_1) {
                    closure_129_8(true);
                    closure_129_9(null);
                    closure_128_2 = null;
                    c3 = 3;
                    const obj11 = { guild_id: closure_129_0, install_scope: closure_129_3 };
                    c4 = 5;
                    c5 = 1;
                    const obj12 = { value: closure_0(tmp85[9]).createProject(obj11), done: false };
                    return obj12;
                  } else {
                    closure_129_9(closure_128_1);
                  }
                  const obj19 = closure_0(tmp85[12]);
                }
              }
            } else if (3 === tmp9) {
              c3 = 0;
              closure_129_8(false);
              throw tmp85;
            } else {
              if (4 === tmp9) {
                c3 = 2;
                closure_128_3 = tmp85;
                if (null == closure_128_2) {
                  closure_129_9(closure_0(tmp85[11]).getVibegrationsCreateErrorMessage(closure_128_3));
                  const obj6 = closure_0(tmp85[11]);
                }
              } else if (5 === tmp9) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  closure_129_8(false);
                  c5 = 3;
                  const obj13 = { value, done: true };
                  return obj13;
                } else {
                  closure_128_2 = value;
                  closure_1_7(closure_128_2);
                  _undefined(closure_128_2, closure_129_5);
                  const intl3 = closure_0(tmp85[13]).intl;
                  c4 = 6;
                  c5 = 1;
                  const obj15 = {
                    value: closure_0(tmp85[12]).sendVibegrationsArchiveImport(
                      closure_128_2,
                      closure_128_0,
                      intl3.string(tmp4(tmp85[14]).KjEtrZ),
                    ),
                    done: false,
                  };
                  return obj15;
                }
              } else if (6 === tmp9) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  closure_129_8(false);
                  c5 = 3;
                  const obj16 = { value, done: true };
                  return obj16;
                } else {
                  tmp4(tmp85[10]).hideActionSheet(title);
                  closure_129_1(closure_128_2);
                  c3 = 2;
                  const obj2 = tmp4(tmp85[10]);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_8(false);
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                const intl = closure_0(tmp85[13]).intl;
                closure_129_9(intl.string(tmp4(tmp85[14])["02GpNr"]));
              }
              c3 = 0;
              closure_129_8(false);
            }
            const obj7 = closure_0(tmp85[9]);
            c4 = 7;
            c5 = 1;
            const obj17 = {
              value: closure_0(tmp85[9])
                .deleteProject(closure_128_2)
                .catch(() => {}),
              done: false,
            };
            return obj17;
          }
          c5 = 3;
        } catch (tmp85) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp85;
          } else if (tmp2 === tmp87) {
            c4 = tmp2;
          } else if (tmp === tmp87) {
            c4 = tmp3;
          } else {
            c4 = tmp6;
          }
        }
      }
    }),
    items1,
  );
  let intl = require("util").intl;
  const stringResult = intl.string(onCreated(str[14]).MLg0S8);
  c12 = stringResult;
  memo = first1.useMemo(() => {
    const obj = { guild: null, user: null };
    const intl = closure_0(str[13]).intl;
    obj.guild = intl.string(onCreated(str[14]).LdgKdI);
    const intl2 = closure_0(str[13]).intl;
    obj.user = intl2.string(onCreated(str[14]).iqXIRN);
    return obj;
  }, []);
  const items2 = [stringResult, memo];
  const callback = first1.useCallback(() => {
    const obj2 = { key: "VibegrationsInstallScope", header: { title }, hasIcons: false, options: null };
    const items = ["guild", "user"];
    obj2.options = items.map((item) => {
      closure_0 = item;
      return {
        label: closure_13[item],
        onPress() {
          return closure_2_4(closure_0);
        },
      };
    });
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items2);
  const tmp11 = _slicedToArray(first1.useState(null), 2);
  const landingModelChoicesResult = require("VibegrationsLandingModelChoices").landingModelChoices();
  c14 = landingModelChoicesResult;
  const items3 = [landingModelChoicesResult, first1];
  const callback1 = first1.useCallback(() => {
    const obj2 = {
      key: VibegrationsEffortPicker.VIBEGRATIONS_EFFORT_PICKER_SHEET_KEY,
      stackingBehavior: "stack",
      content: closure_2_10(VibegrationsEffortPicker.VibegrationsEffortPickerSheet, {
        initialSettings: first1,
        choices,
        onChange,
      }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items3);
  let obj = require("VibegrationsLandingModelChoices");
  let result = require("VibegrationsTemplates").vibegrationsTemplates();
  let intl2 = require("util").intl;
  const items4 = [intl2.string(onCreated(str[14])["E+Q26x"]), ,];
  let intl3 = require("util").intl;
  items4[1] = intl3.string(onCreated(str[14])["06/jqP"]);
  const intl4 = require("util").intl;
  items4[2] = intl4.string(onCreated(str[14])["3gSfUa"]);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj4 = { title: null };
  const intl5 = require("util").intl;
  obj4.title = intl5.string(onCreated(str[14])["2tYpRK"]);
  obj3.header = closure_10(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj4);
  let obj5 = { style: tmp.content, children: null };
  let obj6 = { style: tmp.form, children: null };
  let obj7 = { placeholder: null, autoComplete: "off", value: null, onChange: null, disabled: null };
  const intl6 = require("util").intl;
  obj7.placeholder = intl6.string(onCreated(str[14]).TU9IGR);
  obj7.value = str;
  obj7.disabled = first2;
  const items5 = [closure_10(require("TextArea").TextArea, obj7), , , ,];
  let obj8 = { hasIcons: false, children: null };
  const obj9 = {
    label: stringResult,
    trailing: closure_10(require("Text/Text").Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: memo[first],
    }),
    arrow: true,
    disabled: first2,
    onPress: callback,
  };
  obj8.children = closure_10(require("TableRow").TableRow, obj9);
  items5[1] = closure_10(require("TableRowGroup").TableRowGroup, obj8);
  let obj11 = { hasIcons: false, children: null };
  let obj12 = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
  const intl7 = require("util").intl;
  obj12.label = intl7.string(onCreated(str[14]).GDs9Vq);
  let obj13 = { variant: "text-md/normal", color: "text-muted", children: null };
  let obj10 = { variant: "text-md/normal", color: "text-muted", children: memo[first] };
  let obj2 = require("VibegrationsTemplates");
  obj13.children = require("VibegrationsEffortPicker").describeVibegrationsEffort(first1, landingModelChoicesResult);
  obj12.trailing = closure_10(require("Text/Text").Text, obj13);
  obj12.disabled = first2;
  obj12.onPress = callback1;
  obj11.children = closure_10(require("TableRow").TableRow, obj12);
  items5[2] = closure_10(require("TableRowGroup").TableRowGroup, obj11);
  let tmp19Result = null;
  if (null != tmp12) {
    let obj15 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp12 };
    tmp19Result = tmp19(tmp5(tmp6[24]).Text, obj15);
  }
  items5[3] = tmp19Result;
  let obj16 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
  const intl8 = tmp5(tmp6[13]).intl;
  obj16.text = intl8.string(require("util").t.CumH4u);
  obj16.disabled = "" === str.trim();
  obj16.loading = first2;
  obj16.onPress = function onPress() {
    return closure_10();
  };
  items5[4] = closure_10(require("components/Button/Button").Button, obj16);
  obj6.children = items5;
  const items6 = [closure_11(onChange, obj6), , ,];
  let obj17 = { style: tmp.section, children: null };
  const obj18 = { style: tmp.sectionHeading, children: null };
  let obj19 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl9 = tmp5(tmp6[13]).intl;
  obj19.children = intl9.string(onCreated(str[14]).NRqfBN);
  const items7 = [closure_10(require("Text/Text").Text, obj19)];
  const obj20 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl10 = tmp5(tmp6[13]).intl;
  obj20.children = intl10.string(onCreated(str[14]).ROtSe7);
  items7[1] = closure_10(require("Text/Text").Text, obj20);
  obj18.children = items7;
  const items8 = [closure_11(onChange, obj18)];
  const obj21 = { hasIcons: false, children: null };
  const obj22 = { label: null, arrow: true, disabled: null, onPress: null };
  const intl11 = tmp5(tmp6[13]).intl;
  obj22.label = intl11.string(onCreated(str[14])["bxn/qp"]);
  obj22.disabled = first2;
  obj22.onPress = function onPress() {
    closure_11().catch(() => {});
  };
  obj21.children = closure_10(require("TableRow").TableRow, obj22);
  items8[1] = closure_10(require("TableRowGroup").TableRowGroup, obj21);
  obj17.children = items8;
  items6[1] = closure_11(onChange, obj17);
  const obj23 = { style: tmp.section, children: null };
  const obj24 = { style: tmp.sectionHeading, children: null };
  const obj25 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl12 = tmp5(tmp6[13]).intl;
  obj25.children = intl12.string(onCreated(str[14]).FYK2xQ);
  const items9 = [closure_10(require("Text/Text").Text, obj25)];
  const obj26 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl13 = tmp5(tmp6[13]).intl;
  obj26.children = intl13.string(onCreated(str[14]).BTNdyX);
  items9[1] = closure_10(require("Text/Text").Text, obj26);
  obj24.children = items9;
  const items10 = [closure_11(onChange, obj24)];
  const obj14 = require("VibegrationsEffortPicker");
  items10[1] = closure_10(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: result.map((name) => {
      const obj = {
        label: name.name,
        subLabel: name.description,
        arrow: true,
        disabled: first2,
        accessibilityLabel: null,
        onPress: null,
      };
      const intl = name(str[13]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[14]).ER1uQ4, { name: name.name });
      obj.onPress = function onPress() {
        return closure_10(VibegrationsTemplates.templateImportMessage(name.name));
      };
      return closure_10(name(str[23]).TableRow, obj, name.id);
    }),
  });
  obj23.children = items10;
  items6[2] = closure_11(onChange, obj23);
  const obj28 = { style: tmp.section, children: null };
  const obj29 = { style: tmp.sectionHeading, children: null };
  const obj30 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl14 = tmp5(tmp6[13]).intl;
  obj30.children = intl14.string(onCreated(str[14])["/SUK82"]);
  const items11 = [closure_10(require("Text/Text").Text, obj30)];
  const obj31 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl15 = tmp5(tmp6[13]).intl;
  obj31.children = intl15.string(onCreated(str[14])["+aBXyx"]);
  items11[1] = closure_10(require("Text/Text").Text, obj31);
  obj29.children = items11;
  const items12 = [closure_11(onChange, obj29)];
  const obj27 = {
    hasIcons: false,
    children: result.map((name) => {
      const obj = {
        label: name.name,
        subLabel: name.description,
        arrow: true,
        disabled: first2,
        accessibilityLabel: null,
        onPress: null,
      };
      const intl = name(str[13]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[14]).ER1uQ4, { name: name.name });
      obj.onPress = function onPress() {
        return closure_10(VibegrationsTemplates.templateImportMessage(name.name));
      };
      return closure_10(name(str[23]).TableRow, obj, name.id);
    }),
  };
  items12[1] = closure_10(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: items4.map((label) => {
      closure_0 = label;
      return closure_10(
        closure_0(str[23]).TableRow,
        {
          label,
          arrow: true,
          disabled: first2,
          onPress() {
            return closure_10(closure_0);
          },
        },
        label,
      );
    }),
  });
  obj28.children = items12;
  items6[3] = closure_11(onChange, obj28);
  obj5.children = items6;
  obj3.children = closure_11(onChange, obj5);
  return closure_10(require("ActionSheet").ActionSheet, obj3);
}
export const VIBEGRATIONS_CREATE_SHEET_KEY = "VibegrationsCreateSheet";
