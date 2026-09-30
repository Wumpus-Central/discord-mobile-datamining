// === Module 16450: VibegrationsCreateSheet ===

// Module 16450 (VibegrationsCreateSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4830 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5567 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6812 */;
import VibegrationsEffortPicker from "VibegrationsEffortPicker" /* 16453 */;
import VibegrationsTemplateWizardSheet from "VibegrationsTemplateWizardSheet" /* 16457 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const VibegrationsTemplateWizardSheetDefault = VibegrationsTemplateWizardSheet;

require = fn;
const View = fn(17).View;
const VibegrationsConnectionStore = fn(12842);
({ ensureConnection: closure_7, sendUserMessage: closure_8, stageModelSettings: closure_9 } = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const VibegrationsCreateSheet = "VibegrationsCreateSheet";
const createStyles = fn(4866);
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
  let onCreated = guildId.onCreated;
  str = undefined;
  _slicedToArray = undefined;
  let first1;
  c6 = undefined;
  VIBEGRATIONS_DEFAULT_TIER_SETTINGS = undefined;
  let first2;
  closure_9 = undefined;
  c10 = undefined;
  let callback;
  closure_12 = undefined;
  closure_13 = undefined;
  c14 = undefined;
  let memo;
  c16 = undefined;
  let callback3;
  closure_18 = undefined;
  const tmp = closure_13();
  [str, obj8.onChange] = first1.useState("");
  const tmp4 = _slicedToArray(first1.useState("guild"), 2);
  const first = tmp4[0];
  _slicedToArray = tmp4[1];
  const tmp6 = _slicedToArray(first1.useState(false), 2);
  first1 = tmp7;
  if ("guild" === first) {
    first1 = tmp6[0];
  }
  [VIBEGRATIONS_DEFAULT_TIER_SETTINGS, c6] = _slicedToArray(first1.useState(null), 2);
  if (VIBEGRATIONS_DEFAULT_TIER_SETTINGS == null) {
    VIBEGRATIONS_DEFAULT_TIER_SETTINGS = require("VibegrationsTypes").VIBEGRATIONS_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result3 = _slicedToArray(first1.useState(false), 2);
  first2 = tmp2Result3[0];
  closure_9 = tmp2Result3[1];
  const tmp2Result = _slicedToArray(first1.useState(null), 2);
  [tmp15, c10] = _slicedToArray(first1.useState(null), 2);
  first((guild_id) => {
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              closure_129_0 = guild_id;
              closure_129_1 = undefined;
              closure_1_9(true);
              _undefined(null);
              c4 = 2;
              const obj5 = { guild_id, install_scope, flags: null };
              const obj7 = guild_id(str[9]);
              obj5.flags = guild_id(str[8]).vibegrationsCreateFlags(c5);
              c5 = 3;
              c6 = 1;
              const obj8 = { value: obj7.createProject(obj5), done: false };
              return obj8;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            closure_1_9(false);
            throw install_scope;
          } else {
            if (2 === tmp8) {
              c4 = 1;
              closure_129_2 = install_scope;
              _undefined(guild_id(str[11]).getVibegrationsCreateErrorMessage(closure_129_2));
              c4 = 0;
              closure_1_9(false);
              c6 = 3;
              const obj2 = guild_id(str[11]);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_1 = value;
              VIBEGRATIONS_DEFAULT_TIER_SETTINGS(closure_129_1);
              closure_9(closure_129_1, closure_1_7);
              closure_129_0(closure_129_1);
              onCreated(str[10]).hideActionSheet(closure_12);
              closure_1(closure_129_1, guild_id);
              c4 = 1;
              const obj6 = onCreated(str[10]);
            }
            c4 = 0;
            closure_1_9(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp29) {
          install_scope = tmp29;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp29;
          } else if (tmp2 === tmp31) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  let items = [guildId, first, VIBEGRATIONS_DEFAULT_TIER_SETTINGS, first1, onCreated];
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
  _require = first(function*(arg0) {
    if (c2 === 2) {
      c2 = 3;
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
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            onCreated = closure_0;
            if (closure_0 == null) {
              onCreated = c2;
            }
            const trimmed = onCreated.trim();
            let tmp8 = "" === trimmed;
            if (!tmp8) {
              tmp8 = first2;
            }
            if (!tmp8) {
              c3 = 1;
              c2 = 1;
              const obj4 = { value: callback((arg0) => first2(arg0, trimmed)), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp10) {
        c2 = tmp;
        throw tmp10;
      }
    }
  });
  const items1 = [callback, str, first2];
  closure_12 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const items2 = [guildId, first, VIBEGRATIONS_DEFAULT_TIER_SETTINGS, first1, onCreated, first2];
  closure_13 = obj.useCallback(first(function*() {
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
            if (!first2) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: guildId(tmp89[12]).pickVibegrationsArchive(), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp9) {
          c3 = 0;
          const intl2 = guildId(tmp89[13]).intl;
          closure_129_10(intl2.string(tmp4(tmp89[14])["02GpNr"]));
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
                closure_128_1 = guildId(tmp89[12]).describeVibegrationsArchiveRejection(closure_128_0);
                if (null == closure_128_1) {
                  closure_129_9(true);
                  closure_129_10(null);
                  closure_128_2 = null;
                  c3 = 3;
                  const obj12 = { guild_id: closure_129_0, install_scope: closure_129_3, flags: null };
                  const obj9 = guildId(tmp89[9]);
                  obj12.flags = guildId(tmp89[8]).vibegrationsCreateFlags(closure_129_5);
                  c4 = 5;
                  c5 = 1;
                  const obj13 = { value: obj9.createProject(obj12), done: false };
                  return obj13;
                } else {
                  closure_129_10(closure_128_1);
                }
                const obj20 = guildId(tmp89[12]);
              }
            }
          } else if (3 === tmp9) {
            c3 = 0;
            closure_129_9(false);
            throw tmp89;
          } else {
            if (4 === tmp9) {
              c3 = 2;
              closure_128_3 = tmp89;
              if (null == closure_128_2) {
                closure_129_10(guildId(tmp89[11]).getVibegrationsCreateErrorMessage(closure_128_3));
                const obj6 = guildId(tmp89[11]);
              }
            } else if (5 === tmp9) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_9(false);
                c5 = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                closure_128_2 = value;
                VIBEGRATIONS_DEFAULT_TIER_SETTINGS(closure_128_2);
                closure_1_9(closure_128_2, closure_129_7);
                const intl3 = guildId(tmp89[13]).intl;
                c4 = 6;
                c5 = 1;
                const obj16 = { value: guildId(tmp89[12]).sendVibegrationsArchiveImport(closure_128_2, closure_128_0, intl3.string(tmp4(tmp89[14]).KjEtrZ)), done: false };
                return obj16;
              }
            } else if (6 === tmp9) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_9(false);
                c5 = 3;
                const obj17 = { value, done: true };
                return obj17;
              } else {
                tmp4(tmp89[10]).hideActionSheet(closure_1_12);
                closure_129_1(closure_128_2, closure_129_0);
                c3 = 2;
                const obj2 = tmp4(tmp89[10]);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_9(false);
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const intl = guildId(tmp89[13]).intl;
              closure_129_10(intl.string(tmp4(tmp89[14])["02GpNr"]));
            }
            c3 = 0;
            closure_129_9(false);
          }
          const obj7 = guildId(tmp89[9]);
          c4 = 7;
          c5 = 1;
          const obj18 = {
            value: guildId(tmp89[9]).deleteProject(closure_128_2).catch(() => {

                  }),
            done: false
          };
          return obj18;
        }
        c5 = 3;
      } catch (tmp89) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp89;
        } else if (tmp2 === tmp91) {
          c4 = tmp2;
        } else if (tmp === tmp91) {
          c4 = tmp3;
        } else {
          c4 = tmp6;
        }
      }
    }
  }), items2);
  let intl = require("util").intl;
  const stringResult = intl.string(onCreated(str[14]).MLg0S8);
  c14 = stringResult;
  memo = obj.useMemo(() => {
    const obj = { guild: null, user: null };
    const intl = guildId(str[13]).intl;
    obj.guild = intl.string(onCreated(str[14]).LdgKdI);
    const intl2 = guildId(str[13]).intl;
    obj.user = intl2.string(onCreated(str[14]).iqXIRN);
    return obj;
  }, []);
  const items3 = [stringResult, memo];
  const callback1 = obj.useCallback(() => {
    const obj2 = { key: "VibegrationsInstallScope", header: { title }, hasIcons: false, options: null };
    const items = ["guild", "user"];
    obj2.options = items.map((item) => {
      closure_0 = item;
      return {
        label: closure_15[item],
        onPress() {
          return closure_2_4(closure_0);
        }
      };
    });
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items3);
  const tmp2Result4 = _slicedToArray(first1.useState(null), 2);
  const landingModelChoicesResult = require("VibegrationsLandingModelChoices").landingModelChoices();
  c16 = landingModelChoicesResult;
  const items4 = [landingModelChoicesResult, VIBEGRATIONS_DEFAULT_TIER_SETTINGS];
  const callback2 = obj.useCallback(() => {
    const obj2 = { key: VibegrationsEffortPicker.VIBEGRATIONS_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: null };
    const obj = ActionSheetActionCreators;
    obj2.content = closure_2_10(VibegrationsEffortPicker.VibegrationsEffortPickerSheet, { initialSettings: VIBEGRATIONS_DEFAULT_TIER_SETTINGS, tiers: VibegrationsTypes.VIBEGRATIONS_LANDING_TIER_SEATS, choices, onChange });
    obj.showActionSheet(obj2);
  }, items4);
  let obj2 = require("VibegrationsLandingModelChoices");
  let result = require("VibegrationsTemplates").vibegrationsTemplates();
  const items5 = [onCreated];
  callback3 = obj.useCallback((arg0, arg1) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsCreateSheet);
    onCreated(arg0, arg1);
  }, items5);
  const items6 = [callback, guildId, callback3, VIBEGRATIONS_DEFAULT_TIER_SETTINGS, first1, first2];
  closure_18 = obj.useCallback((wizard) => {
    guildId = wizard;
    if (null == wizard.wizard) {
      if (!first2) {
        callback((arg0) => wizard(str[18]).startVibegrationsTemplateProject(arg0, wizard)).catch(() => {

        });
        const promise = callback((arg0) => wizard(str[18]).startVibegrationsTemplateProject(arg0, wizard));
      }
    } else {
      const obj2 = { key: VibegrationsTemplateWizardSheet.VIBEGRATIONS_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: null };
      const obj3 = { template: wizard, guildId, modelSettings: VIBEGRATIONS_DEFAULT_TIER_SETTINGS, nativeAppChannels: first1, onCreated: callback3 };
      obj2.content = closure_2_10(VibegrationsTemplateWizardSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items6);
  let intl2 = require("util").intl;
  const items7 = [intl2.string(onCreated(str[14])["E+Q26x"]), , ];
  let intl3 = require("util").intl;
  items7[1] = intl3.string(onCreated(str[14])["06/jqP"]);
  const intl4 = require("util").intl;
  items7[2] = intl4.string(onCreated(str[14])["3gSfUa"]);
  let obj4 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj5 = { title: null };
  const intl5 = require("util").intl;
  obj5.title = intl5.string(onCreated(str[14])["2tYpRK"]);
  obj4.header = c10(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj5);
  let obj6 = { style: tmp.content, children: null };
  let obj7 = { style: tmp.form, children: null };
  let obj8 = { placeholder: null, autoComplete: "off", value: null, onChange: null, disabled: null };
  const intl6 = require("util").intl;
  obj8.placeholder = intl6.string(onCreated(str[14]).TU9IGR);
  obj8.value = str;
  obj8.disabled = first2;
  const items8 = [c10(require("TextArea").TextArea, obj8), , , , , ];
  let obj9 = { hasIcons: false, children: null };
  let obj10 = { label: stringResult, trailing: c10(require("Text/Text").Text, { variant: "text-md/normal", color: "text-muted", children: memo[first] }), arrow: true, disabled: first2, onPress: callback1 };
  obj9.children = c10(require("TableRow").TableRow, obj10);
  items8[1] = c10(require("TableRowGroup").TableRowGroup, obj9);
  let tmp26Result = null;
  if ("guild" === first) {
    let obj12 = { hasIcons: false, children: null };
    let obj13 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl7 = tmp17(tmp18[13]).intl;
    obj13.label = intl7.string(tmp19(tmp18[14]).nyY2CS);
    const intl8 = tmp17(tmp18[13]).intl;
    obj13.subLabel = intl8.string(tmp19(tmp18[14]).EwshDz);
    obj13.checked = first1;
    obj13.disabled = first2;
    obj13.onPress = tmp6[1];
    obj12.children = tmp26(tmp17(tmp18[26]).TableCheckboxRow, obj13);
    tmp26Result = tmp26(tmp17(tmp18[23]).TableRowGroup, obj12);
  }
  items8[2] = tmp26Result;
  let obj14 = { hasIcons: false, children: null };
  const obj15 = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
  const intl9 = tmp17(tmp18[13]).intl;
  obj15.label = intl9.string(onCreated(str[14]).GDs9Vq);
  let obj16 = { variant: "text-md/normal", color: "text-muted", children: null };
  const obj11 = { variant: "text-md/normal", color: "text-muted", children: memo[first] };
  let obj3 = require("VibegrationsTemplates");
  obj16.children = require("VibegrationsEffortTiers").vibegrationsTierDescription(VIBEGRATIONS_DEFAULT_TIER_SETTINGS.tier);
  obj15.trailing = c10(require("Text/Text").Text, obj16);
  obj15.disabled = first2;
  obj15.onPress = callback2;
  obj14.children = c10(require("TableRow").TableRow, obj15);
  items8[3] = c10(require("TableRowGroup").TableRowGroup, obj14);
  let tmp26Result2 = null;
  if (null != tmp15) {
    let obj17 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp15 };
    tmp26Result2 = tmp26(tmp17(tmp18[25]).Text, obj17);
  }
  items8[4] = tmp26Result2;
  let obj18 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
  const intl10 = tmp17(tmp18[13]).intl;
  obj18.text = intl10.string(require("util").t.CumH4u);
  obj18.disabled = "" === str.trim();
  obj18.loading = first2;
  obj18.onPress = function onPress() {
    return closure_12();
  };
  items8[5] = c10(require("components/Button/Button").Button, obj18);
  obj7.children = items8;
  const items9 = [callback(c6, obj7), , , ];
  const obj19 = { style: tmp.section, children: null };
  let obj20 = { style: tmp.sectionHeading, children: null };
  const obj21 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl11 = tmp17(tmp18[13]).intl;
  obj21.children = intl11.string(onCreated(str[14]).NRqfBN);
  const items10 = [c10(require("Text/Text").Text, obj21), ];
  const obj22 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl12 = tmp17(tmp18[13]).intl;
  obj22.children = intl12.string(onCreated(str[14]).ROtSe7);
  items10[1] = c10(require("Text/Text").Text, obj22);
  obj20.children = items10;
  const items11 = [callback(c6, obj20), ];
  const obj23 = { hasIcons: false, children: null };
  const obj24 = { label: null, arrow: true, disabled: null, onPress: null };
  const intl13 = tmp17(tmp18[13]).intl;
  obj24.label = intl13.string(onCreated(str[14])["bxn/qp"]);
  obj24.disabled = first2;
  obj24.onPress = function onPress() {
    closure_13().catch(() => {

    });
  };
  obj23.children = c10(require("TableRow").TableRow, obj24);
  items11[1] = c10(require("TableRowGroup").TableRowGroup, obj23);
  obj19.children = items11;
  items9[1] = callback(c6, obj19);
  const obj25 = { style: tmp.section, children: null };
  const obj26 = { style: tmp.sectionHeading, children: null };
  const obj27 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl14 = tmp17(tmp18[13]).intl;
  obj27.children = intl14.string(onCreated(str[14]).FYK2xQ);
  const items12 = [c10(require("Text/Text").Text, obj27), ];
  const obj28 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl15 = tmp17(tmp18[13]).intl;
  obj28.children = intl15.string(onCreated(str[14]).BTNdyX);
  items12[1] = c10(require("Text/Text").Text, obj28);
  obj26.children = items12;
  const items13 = [callback(c6, obj26), ];
  const tmp17Result = require("VibegrationsEffortTiers");
  items13[1] = c10(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: result.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled: first2, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[13]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[14]).ER1uQ4, { name: name.name });
      obj.onPress = function onPress() {
        return closure_18(closure_0);
      };
      return _undefined(guildId(str[24]).TableRow, obj, name.id);
    })
  });
  obj25.children = items13;
  items9[2] = callback(c6, obj25);
  const obj30 = { style: tmp.section, children: null };
  const obj31 = { style: tmp.sectionHeading, children: null };
  const obj32 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl16 = tmp17(tmp18[13]).intl;
  obj32.children = intl16.string(onCreated(str[14])["/SUK82"]);
  const items14 = [c10(require("Text/Text").Text, obj32), ];
  const obj33 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl17 = tmp17(tmp18[13]).intl;
  obj33.children = intl17.string(onCreated(str[14])["+aBXyx"]);
  items14[1] = c10(require("Text/Text").Text, obj33);
  obj31.children = items14;
  const items15 = [callback(c6, obj31), ];
  const obj29 = {
    hasIcons: false,
    children: result.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled: first2, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[13]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[14]).ER1uQ4, { name: name.name });
      obj.onPress = function onPress() {
        return closure_18(closure_0);
      };
      return _undefined(guildId(str[24]).TableRow, obj, name.id);
    })
  };
  items15[1] = c10(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: items7.map((label) => {
      guildId = label;
      return _undefined(guildId(str[24]).TableRow, {
        label,
        arrow: true,
        disabled: first2,
        onPress() {
          return closure_12(closure_0);
        }
      }, label);
    })
  });
  obj30.children = items15;
  items9[3] = callback(c6, obj30);
  obj6.children = items9;
  obj4.children = callback(c6, obj6);
  return c10(require("ActionSheet").ActionSheet, obj4);
};
export const VIBEGRATIONS_CREATE_SHEET_KEY = "VibegrationsCreateSheet";