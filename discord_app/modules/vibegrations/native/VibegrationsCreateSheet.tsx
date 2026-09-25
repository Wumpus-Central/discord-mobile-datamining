// === Module 16217: VibegrationsCreateSheet ===

// Module 16217 (VibegrationsCreateSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4796 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5364 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6611 */;
import VibegrationsEffortPicker from "VibegrationsEffortPicker" /* 16220 */;
import VibegrationsTemplates from "VibegrationsTemplates" /* 16223 */;
import VibegrationsTemplateWizardSheet from "VibegrationsTemplateWizardSheet" /* 16224 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const VibegrationsTemplateWizardSheetDefault = VibegrationsTemplateWizardSheet;

require = fn;
const View = fn(17).View;
const VibegrationsConnectionStore = fn(12607);
({ ensureConnection: closure_7, sendUserMessage: closure_8, stageModelSettings: closure_9 } = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const VibegrationsCreateSheet = "VibegrationsCreateSheet";
const createStyles = fn(4829);
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
  noop = undefined;
  VIBEGRATIONS_DEFAULT_TIER_SETTINGS = undefined;
  let first1;
  closure_8 = undefined;
  c9 = undefined;
  let callback;
  closure_11 = undefined;
  c12 = undefined;
  let memo;
  c14 = undefined;
  let callback3;
  closure_16 = undefined;
  const tmp = memo();
  [str, obj8.onChange] = noop.useState("");
  const tmp4 = _slicedToArray(noop.useState("guild"), 2);
  const first = tmp4[0];
  _slicedToArray = tmp4[1];
  [VIBEGRATIONS_DEFAULT_TIER_SETTINGS, c5] = _slicedToArray(noop.useState(null), 2);
  if (VIBEGRATIONS_DEFAULT_TIER_SETTINGS == null) {
    VIBEGRATIONS_DEFAULT_TIER_SETTINGS = require("VibegrationsTypes").VIBEGRATIONS_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result = _slicedToArray(noop.useState(false), 2);
  first1 = tmp2Result[0];
  closure_8 = tmp2Result[1];
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  [tmp12, c9] = _slicedToArray(noop.useState(null), 2);
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
              first1(closure_130_1);
              c9(closure_130_1, c6);
              closure_8(closure_130_1, closure_130_0);
              onCreated(str[10]).hideActionSheet(c12);
              closure_1(closure_130_1, guild_id);
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
  let items = [guildId, first, VIBEGRATIONS_DEFAULT_TIER_SETTINGS, onCreated, str, first1];
  callback = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  const items1 = [guildId, first, VIBEGRATIONS_DEFAULT_TIER_SETTINGS, onCreated, first1];
  closure_11 = obj.useCallback(first(function*() {
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
            guildId = tmp9;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            if (!first1) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: guildId(tmp86[12]).pickVibegrationsArchive(), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp9) {
          c3 = 0;
          const intl2 = guildId(tmp86[13]).intl;
          closure_129_9(intl2.string(tmp4(tmp86[14])["02GpNr"]));
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
                closure_128_1 = guildId(tmp86[12]).describeVibegrationsArchiveRejection(closure_128_0);
                if (null == closure_128_1) {
                  closure_129_8(true);
                  closure_129_9(null);
                  closure_128_2 = null;
                  c3 = 3;
                  const obj11 = { guild_id: closure_129_0, install_scope: closure_129_3 };
                  c4 = 5;
                  c5 = 1;
                  const obj12 = { value: guildId(tmp86[9]).createProject(obj11), done: false };
                  return obj12;
                } else {
                  closure_129_9(closure_128_1);
                }
                const obj19 = guildId(tmp86[12]);
              }
            }
          } else if (3 === tmp9) {
            c3 = 0;
            closure_129_8(false);
            throw tmp86;
          } else {
            if (4 === tmp9) {
              c3 = 2;
              closure_128_3 = tmp86;
              if (null == closure_128_2) {
                closure_129_9(guildId(tmp86[11]).getVibegrationsCreateErrorMessage(closure_128_3));
                const obj6 = guildId(tmp86[11]);
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
                _undefined(closure_128_2, closure_129_6);
                const intl3 = guildId(tmp86[13]).intl;
                c4 = 6;
                c5 = 1;
                const obj15 = { value: guildId(tmp86[12]).sendVibegrationsArchiveImport(closure_128_2, closure_128_0, intl3.string(tmp4(tmp86[14]).KjEtrZ)), done: false };
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
                tmp4(tmp86[10]).hideActionSheet(title);
                closure_129_1(closure_128_2, closure_129_0);
                c3 = 2;
                const obj2 = tmp4(tmp86[10]);
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
              const intl = guildId(tmp86[13]).intl;
              closure_129_9(intl.string(tmp4(tmp86[14])["02GpNr"]));
            }
            c3 = 0;
            closure_129_8(false);
          }
          const obj7 = guildId(tmp86[9]);
          c4 = 7;
          c5 = 1;
          const obj17 = {
            value: guildId(tmp86[9]).deleteProject(closure_128_2).catch(() => {

                  }),
            done: false
          };
          return obj17;
        }
        c5 = 3;
      } catch (tmp86) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp86;
        } else if (tmp2 === tmp88) {
          c4 = tmp2;
        } else if (tmp === tmp88) {
          c4 = tmp3;
        } else {
          c4 = tmp6;
        }
      }
    }
  }), items1);
  let intl = require("util").intl;
  const stringResult = intl.string(onCreated(str[14]).MLg0S8);
  c12 = stringResult;
  memo = obj.useMemo(() => {
    const obj = { guild: null, user: null };
    const intl = guildId(str[13]).intl;
    obj.guild = intl.string(onCreated(str[14]).LdgKdI);
    const intl2 = guildId(str[13]).intl;
    obj.user = intl2.string(onCreated(str[14]).iqXIRN);
    return obj;
  }, []);
  const items2 = [stringResult, memo];
  const callback1 = obj.useCallback(() => {
    const obj2 = { key: "VibegrationsInstallScope", header: { title }, hasIcons: false, options: null };
    const items = ["guild", "user"];
    obj2.options = items.map((item) => {
      closure_0 = item;
      return {
        label: closure_13[item],
        onPress() {
          return closure_2_4(closure_0);
        }
      };
    });
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items2);
  const tmp2Result2 = _slicedToArray(noop.useState(null), 2);
  const landingModelChoicesResult = require("VibegrationsLandingModelChoices").landingModelChoices();
  c14 = landingModelChoicesResult;
  const items3 = [landingModelChoicesResult, VIBEGRATIONS_DEFAULT_TIER_SETTINGS];
  const callback2 = obj.useCallback(() => {
    const obj2 = { key: VibegrationsEffortPicker.VIBEGRATIONS_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: null };
    const obj = ActionSheetActionCreators;
    obj2.content = closure_2_10(VibegrationsEffortPicker.VibegrationsEffortPickerSheet, { initialSettings: VIBEGRATIONS_DEFAULT_TIER_SETTINGS, tiers: VibegrationsTypes.VIBEGRATIONS_LANDING_TIER_SEATS, choices, onChange });
    obj.showActionSheet(obj2);
  }, items3);
  let obj2 = require("VibegrationsLandingModelChoices");
  let result = require("VibegrationsTemplates").vibegrationsTemplates();
  const items4 = [onCreated];
  callback3 = obj.useCallback((arg0, arg1) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsCreateSheet);
    onCreated(arg0, arg1);
  }, items4);
  const items5 = [guildId, callback, callback3, VIBEGRATIONS_DEFAULT_TIER_SETTINGS];
  closure_16 = obj.useCallback((wizard) => {
    if (null == wizard.wizard) {
      callback(VibegrationsTemplates.templateImportMessage(wizard.name)).catch(() => {

      });
      const promise = callback(VibegrationsTemplates.templateImportMessage(wizard.name));
    } else {
      const obj3 = { key: VibegrationsTemplateWizardSheet.VIBEGRATIONS_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: null };
      const obj4 = { template: wizard, guildId, modelSettings: VIBEGRATIONS_DEFAULT_TIER_SETTINGS, onCreated: callback3 };
      obj3.content = closure_2_10(VibegrationsTemplateWizardSheetDefault, obj4);
      ActionSheetActionCreators.showActionSheet(obj3);
    }
  }, items5);
  let intl2 = require("util").intl;
  const items6 = [intl2.string(onCreated(str[14])["E+Q26x"]), , ];
  let intl3 = require("util").intl;
  items6[1] = intl3.string(onCreated(str[14])["06/jqP"]);
  const intl4 = require("util").intl;
  items6[2] = intl4.string(onCreated(str[14])["3gSfUa"]);
  let obj4 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj5 = { title: null };
  const intl5 = require("util").intl;
  obj5.title = intl5.string(onCreated(str[14])["2tYpRK"]);
  obj4.header = callback(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj5);
  let obj6 = { style: tmp.content, children: null };
  let obj7 = { style: tmp.form, children: null };
  let obj8 = { placeholder: null, autoComplete: "off", value: null, onChange: null, disabled: null };
  const intl6 = require("util").intl;
  obj8.placeholder = intl6.string(onCreated(str[14]).TU9IGR);
  obj8.value = str;
  obj8.disabled = first1;
  const items7 = [callback(require("TextArea").TextArea, obj8), , , , ];
  const obj9 = { hasIcons: false, children: null };
  let obj10 = { label: stringResult, trailing: callback(require("Text/Text").Text, { variant: "text-md/normal", color: "text-muted", children: memo[first] }), arrow: true, disabled: first1, onPress: callback1 };
  obj9.children = callback(require("TableRow").TableRow, obj10);
  items7[1] = callback(require("TableRowGroup").TableRowGroup, obj9);
  let obj12 = { hasIcons: false, children: null };
  let obj13 = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
  const intl7 = require("util").intl;
  obj13.label = intl7.string(onCreated(str[14]).GDs9Vq);
  const obj14 = { variant: "text-md/normal", color: "text-muted", children: null };
  let obj11 = { variant: "text-md/normal", color: "text-muted", children: memo[first] };
  let obj3 = require("VibegrationsTemplates");
  obj14.children = require("VibegrationsEffortTiers").vibegrationsTierDescription(VIBEGRATIONS_DEFAULT_TIER_SETTINGS.tier);
  obj13.trailing = callback(require("Text/Text").Text, obj14);
  obj13.disabled = first1;
  obj13.onPress = callback2;
  obj12.children = callback(require("TableRow").TableRow, obj13);
  items7[2] = callback(require("TableRowGroup").TableRowGroup, obj12);
  let tmp23Result = null;
  if (null != tmp12) {
    let obj16 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp12 };
    tmp23Result = tmp23(tmp14(tmp15[25]).Text, obj16);
  }
  items7[3] = tmp23Result;
  let obj17 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
  const intl8 = tmp14(tmp15[13]).intl;
  obj17.text = intl8.string(require("util").t.CumH4u);
  obj17.disabled = "" === str.trim();
  obj17.loading = first1;
  obj17.onPress = function onPress() {
    return callback();
  };
  items7[4] = callback(require("components/Button/Button").Button, obj17);
  obj7.children = items7;
  const items8 = [closure_11(VIBEGRATIONS_DEFAULT_TIER_SETTINGS, obj7), , , ];
  const obj18 = { style: tmp.section, children: null };
  let obj19 = { style: tmp.sectionHeading, children: null };
  const obj20 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl9 = tmp14(tmp15[13]).intl;
  obj20.children = intl9.string(onCreated(str[14]).NRqfBN);
  const items9 = [callback(require("Text/Text").Text, obj20), ];
  const obj21 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl10 = tmp14(tmp15[13]).intl;
  obj21.children = intl10.string(onCreated(str[14]).ROtSe7);
  items9[1] = callback(require("Text/Text").Text, obj21);
  obj19.children = items9;
  const items10 = [closure_11(VIBEGRATIONS_DEFAULT_TIER_SETTINGS, obj19), ];
  const obj22 = { hasIcons: false, children: null };
  const obj23 = { label: null, arrow: true, disabled: null, onPress: null };
  const intl11 = tmp14(tmp15[13]).intl;
  obj23.label = intl11.string(onCreated(str[14])["bxn/qp"]);
  obj23.disabled = first1;
  obj23.onPress = function onPress() {
    closure_11().catch(() => {

    });
  };
  obj22.children = callback(require("TableRow").TableRow, obj23);
  items10[1] = callback(require("TableRowGroup").TableRowGroup, obj22);
  obj18.children = items10;
  items8[1] = closure_11(VIBEGRATIONS_DEFAULT_TIER_SETTINGS, obj18);
  const obj24 = { style: tmp.section, children: null };
  const obj25 = { style: tmp.sectionHeading, children: null };
  const obj26 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl12 = tmp14(tmp15[13]).intl;
  obj26.children = intl12.string(onCreated(str[14]).FYK2xQ);
  const items11 = [callback(require("Text/Text").Text, obj26), ];
  const obj27 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl13 = tmp14(tmp15[13]).intl;
  obj27.children = intl13.string(onCreated(str[14]).BTNdyX);
  items11[1] = callback(require("Text/Text").Text, obj27);
  obj25.children = items11;
  const items12 = [closure_11(VIBEGRATIONS_DEFAULT_TIER_SETTINGS, obj25), ];
  let obj15 = require("VibegrationsEffortTiers");
  items12[1] = callback(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: result.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled: first1, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[13]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[14]).ER1uQ4, { name: name.name });
      obj.onPress = function onPress() {
        return closure_16(closure_0);
      };
      return callback(guildId(str[24]).TableRow, obj, name.id);
    })
  });
  obj24.children = items12;
  items8[2] = closure_11(VIBEGRATIONS_DEFAULT_TIER_SETTINGS, obj24);
  const obj29 = { style: tmp.section, children: null };
  const obj30 = { style: tmp.sectionHeading, children: null };
  const obj31 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl14 = tmp14(tmp15[13]).intl;
  obj31.children = intl14.string(onCreated(str[14])["/SUK82"]);
  const items13 = [callback(require("Text/Text").Text, obj31), ];
  const obj32 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl15 = tmp14(tmp15[13]).intl;
  obj32.children = intl15.string(onCreated(str[14])["+aBXyx"]);
  items13[1] = callback(require("Text/Text").Text, obj32);
  obj30.children = items13;
  const items14 = [closure_11(VIBEGRATIONS_DEFAULT_TIER_SETTINGS, obj30), ];
  const obj28 = {
    hasIcons: false,
    children: result.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled: first1, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[13]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[14]).ER1uQ4, { name: name.name });
      obj.onPress = function onPress() {
        return closure_16(closure_0);
      };
      return callback(guildId(str[24]).TableRow, obj, name.id);
    })
  };
  items14[1] = callback(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: items6.map((label) => {
      guildId = label;
      return callback(guildId(str[24]).TableRow, {
        label,
        arrow: true,
        disabled: first1,
        onPress() {
          return callback(closure_0);
        }
      }, label);
    })
  });
  obj29.children = items14;
  items8[3] = closure_11(VIBEGRATIONS_DEFAULT_TIER_SETTINGS, obj29);
  obj6.children = items8;
  obj4.children = closure_11(VIBEGRATIONS_DEFAULT_TIER_SETTINGS, obj6);
  return callback(require("ActionSheet").ActionSheet, obj4);
};
export const VIBEGRATIONS_CREATE_SHEET_KEY = "VibegrationsCreateSheet";