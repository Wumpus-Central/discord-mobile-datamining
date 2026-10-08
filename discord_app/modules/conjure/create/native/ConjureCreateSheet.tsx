// === Module 16847: ConjureCreateSheet ===

// Module 16847 (ConjureCreateSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5054 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6878 */;
import ConjureTypes from "ConjureTypes" /* 6933 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 16851 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 16855 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;

require = fn;
const View = fn(17).View;
const ConjureConnectionStore = fn(13072);
({ ensureConnection: closure_7, sendUserMessage: closure_8, stageModelSettings: closure_9 } = ConjureConnectionStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const ConjureCreateSheet = "ConjureCreateSheet";
const createStyles = fn(5090);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, form: null, section: null, sectionHeading: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.form = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.sectionHeading = { gap: nativeDefault.space.PX_4 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/create/native/ConjureCreateSheet.tsx");

export default function ConjureCreateSheet(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  let onCreated = guildId.onCreated;
  str = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  CONJURE_DEFAULT_TIER_SETTINGS = undefined;
  let first1;
  closure_8 = undefined;
  c9 = undefined;
  let callback;
  closure_11 = undefined;
  closure_12 = undefined;
  c13 = undefined;
  let memo;
  c15 = undefined;
  let callback3;
  closure_17 = undefined;
  const tmp = c13();
  [str, obj8.onChange] = noop.useState("");
  const tmp4 = _slicedToArray(noop.useState("guild"), 2);
  const first = tmp4[0];
  _slicedToArray = tmp4[1];
  [CONJURE_DEFAULT_TIER_SETTINGS, c5] = _slicedToArray(noop.useState(null), 2);
  if (CONJURE_DEFAULT_TIER_SETTINGS == null) {
    CONJURE_DEFAULT_TIER_SETTINGS = require("ConjureTypes").CONJURE_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result = _slicedToArray(noop.useState(false), 2);
  first1 = tmp2Result[0];
  closure_8 = tmp2Result[1];
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  [tmp12, c9] = _slicedToArray(noop.useState(null), 2);
  const tmp15 = onCreated(str[9])();
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
          return { value: "IconComponent", done: null };
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
              closure_1_8(true);
              _undefined(null);
              c4 = 2;
              const obj5 = { guild_id, install_scope };
              c5 = 3;
              c6 = 1;
              const obj8 = { value: guild_id(str[10]).createProject(obj5), done: false };
              return obj8;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            closure_1_8(false);
            throw install_scope;
          } else {
            if (2 === tmp8) {
              c4 = 1;
              closure_129_2 = install_scope;
              _undefined(guild_id(str[12]).getConjureCreateErrorMessage(closure_129_2));
              c4 = 0;
              closure_1_8(false);
              c6 = 3;
              const obj2 = guild_id(str[12]);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_1 = value;
              first1(closure_129_1);
              c9(closure_129_1, c6);
              closure_129_0(closure_129_1);
              onCreated(str[11]).hideActionSheet(closure_12);
              closure_1(closure_129_1, guild_id);
              c4 = 1;
              const obj6 = onCreated(str[11]);
            }
            c4 = 0;
            closure_1_8(false);
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
  let items = [guildId, first, CONJURE_DEFAULT_TIER_SETTINGS, onCreated];
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
        return { value: "IconComponent", done: null };
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
              tmp8 = first1;
            }
            if (!tmp8) {
              c3 = 1;
              c2 = 1;
              const obj4 = { value: callback((arg0) => closure_2_8(arg0, trimmed)), done: false };
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
        return { value: "IconComponent", done: null };
      } catch (tmp10) {
        c2 = tmp;
        throw tmp10;
      }
    }
  });
  const items1 = [callback, str, first1];
  closure_11 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const items2 = [guildId, first, CONJURE_DEFAULT_TIER_SETTINGS, onCreated, first1];
  closure_12 = obj.useCallback(first(function*() {
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
        return { value: "IconComponent", done: null };
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
              const obj5 = { value: guildId(tmp86[13]).pickConjureArchive(), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp9) {
          c3 = 0;
          const intl2 = guildId(tmp86[14]).intl;
          closure_129_9(intl2.string(tmp4(tmp86[15])["Q+l4Hv"]));
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
                closure_128_1 = guildId(tmp86[13]).describeConjureArchiveRejection(closure_128_0);
                if (null == closure_128_1) {
                  closure_129_8(true);
                  closure_129_9(null);
                  closure_128_2 = null;
                  c3 = 3;
                  const obj11 = { guild_id: closure_129_0, install_scope: closure_129_3 };
                  c4 = 5;
                  c5 = 1;
                  const obj12 = { value: guildId(tmp86[10]).createProject(obj11), done: false };
                  return obj12;
                } else {
                  closure_129_9(closure_128_1);
                }
                const obj19 = guildId(tmp86[13]);
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
                closure_129_9(guildId(tmp86[12]).getConjureCreateErrorMessage(closure_128_3));
                const obj6 = guildId(tmp86[12]);
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
                const intl3 = guildId(tmp86[14]).intl;
                c4 = 6;
                c5 = 1;
                const obj15 = { value: guildId(tmp86[13]).sendConjureArchiveImport(closure_128_2, closure_128_0, intl3.string(tmp4(tmp86[15])["LUc7/5"])), done: false };
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
                tmp4(tmp86[11]).hideActionSheet(closure_1_12);
                closure_129_1(closure_128_2, closure_129_0);
                c3 = 2;
                const obj2 = tmp4(tmp86[11]);
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
              const intl = guildId(tmp86[14]).intl;
              closure_129_9(intl.string(tmp4(tmp86[15])["Q+l4Hv"]));
            }
            c3 = 0;
            closure_129_8(false);
          }
          const obj7 = guildId(tmp86[10]);
          c4 = 7;
          c5 = 1;
          const obj17 = {
            value: guildId(tmp86[10]).deleteProject(closure_128_2).catch(() => {

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
  }), items2);
  let intl = require("util").intl;
  const stringResult = intl.string(onCreated(str[15]).NyVn6T);
  c13 = stringResult;
  memo = obj.useMemo(() => {
    const obj = { guild: null, user: null };
    const intl = guildId(str[14]).intl;
    obj.guild = intl.string(onCreated(str[15]).LlLIJw);
    const intl2 = guildId(str[14]).intl;
    obj.user = intl2.string(onCreated(str[15]).s1TsXl);
    return obj;
  }, []);
  const items3 = [stringResult, memo];
  const callback1 = obj.useCallback(() => {
    const obj2 = { key: "VibegrationsInstallScope", stackingBehavior: "stack", header: { title }, hasIcons: false, options: null };
    const items = ["guild", "user"];
    obj2.options = items.map((item) => {
      closure_0 = item;
      return {
        label: closure_14[item],
        onPress() {
          return closure_2_4(closure_0);
        }
      };
    });
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items3);
  const tmp2Result2 = _slicedToArray(noop.useState(null), 2);
  const landingModelChoicesResult = require("ConjureLandingModelChoices").landingModelChoices();
  c15 = landingModelChoicesResult;
  const items4 = [landingModelChoicesResult, CONJURE_DEFAULT_TIER_SETTINGS];
  const callback2 = obj.useCallback(() => {
    const obj2 = { key: ConjureEffortPicker.CONJURE_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: null };
    const obj = ActionSheetActionCreators;
    obj2.content = collapsed(ConjureEffortPicker.ConjureEffortPickerSheet, { initialSettings: CONJURE_DEFAULT_TIER_SETTINGS, tiers: ConjureTypes.CONJURE_LANDING_TIER_SEATS, choices, onChange });
    obj.showActionSheet(obj2);
  }, items4);
  let obj2 = require("ConjureLandingModelChoices");
  let obj3 = require("ConjureTemplates");
  const items5 = [onCreated];
  callback3 = obj.useCallback((arg0, arg1) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureCreateSheet);
    onCreated(arg0, arg1);
  }, items5);
  const items6 = [callback, guildId, callback3, CONJURE_DEFAULT_TIER_SETTINGS, first1];
  closure_17 = obj.useCallback((wizard) => {
    guildId = wizard;
    if (null == wizard.wizard) {
      if (!first1) {
        callback((arg0) => wizard(str[19]).startConjureTemplateProject(arg0, wizard)).catch(() => {

        });
        const promise = callback((arg0) => wizard(str[19]).startConjureTemplateProject(arg0, wizard));
      }
    } else {
      const obj2 = { key: ConjureTemplateWizardSheet.CONJURE_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: null };
      const obj3 = { template: wizard, guildId, modelSettings: CONJURE_DEFAULT_TIER_SETTINGS, onCreated: callback3 };
      obj2.content = collapsed(ConjureTemplateWizardSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items6);
  let intl2 = require("util").intl;
  const items7 = [intl2.string(onCreated(str[15])["9w+Chc"]), , ];
  let intl3 = require("util").intl;
  items7[1] = intl3.string(onCreated(str[15]).WAvmdq);
  const intl4 = require("util").intl;
  items7[2] = intl4.string(onCreated(str[15]).SKsrzl);
  let obj4 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj5 = { title: null };
  const intl5 = require("util").intl;
  obj5.title = intl5.string(onCreated(str[15])["+5XyCR"]);
  obj4.header = callback(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj5);
  let obj6 = { style: tmp.content, children: null };
  let obj7 = { style: tmp.form, children: null };
  let obj8 = { placeholder: null, autoComplete: "off", value: null, onChange: null, disabled: null };
  const intl6 = require("util").intl;
  obj8.placeholder = intl6.string(onCreated(str[15]).ab1sMf);
  obj8.value = str;
  obj8.disabled = first1;
  const items8 = [callback(require("TextArea").TextArea, obj8), , , , , ];
  const obj9 = { hasIcons: false, children: null };
  let obj10 = { label: stringResult, trailing: callback(require("Text/Text").Text, { variant: "text-md/normal", color: "text-muted", children: memo[first] }), arrow: true, disabled: first1, onPress: callback1 };
  obj9.children = callback(require("TableRow").TableRow, obj10);
  items8[1] = callback(require("TableRowGroup").TableRowGroup, obj9);
  let obj12 = { hasIcons: false, children: null };
  let obj13 = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
  const intl7 = require("util").intl;
  obj13.label = intl7.string(onCreated(str[15]).aBPQxX);
  const obj14 = { variant: "text-md/normal", color: "text-muted", children: null };
  const conjureTemplatesResult = require("ConjureTemplates").conjureTemplates();
  let obj11 = { variant: "text-md/normal", color: "text-muted", children: memo[first] };
  obj14.children = require("ConjureEffortTiers").conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier);
  obj13.trailing = callback(require("Text/Text").Text, obj14);
  obj13.disabled = first1;
  obj13.onPress = callback2;
  obj12.children = callback(require("TableRow").TableRow, obj13);
  items8[2] = callback(require("TableRowGroup").TableRowGroup, obj12);
  let tmp24Result = null;
  if (null != tmp15) {
    let str2 = "text-muted";
    if (0 === tmp15) {
      str2 = "text-feedback-warning";
    }
    let obj16 = { variant: "text-sm/normal", color: str2, children: tmp17(tmp14[28]).conjureAppSlotsLeftLabel(tmp15) };
    tmp24Result = tmp24(tmp17(tmp14[26]).Text, obj16);
    const tmp17Result = tmp17(tmp14[28]);
  }
  items8[3] = tmp24Result;
  let tmp24Result2 = null;
  if (null != tmp12) {
    let obj17 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp12 };
    tmp24Result2 = tmp24(tmp17(tmp14[26]).Text, obj17);
  }
  items8[4] = tmp24Result2;
  const obj18 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
  const intl8 = tmp17(tmp14[14]).intl;
  obj18.text = intl8.string(require("util").t.CumH4u);
  obj18.disabled = "" === str.trim();
  obj18.loading = first1;
  obj18.onPress = function onPress() {
    return closure_11();
  };
  items8[5] = callback(require("components/Button/Button").Button, obj18);
  obj7.children = items8;
  const items9 = [closure_11(CONJURE_DEFAULT_TIER_SETTINGS, obj7), , , ];
  let obj19 = { style: tmp.section, children: null };
  const obj20 = { style: tmp.sectionHeading, children: null };
  const obj21 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl9 = tmp17(tmp14[14]).intl;
  obj21.children = intl9.string(onCreated(str[15]).I7nPgX);
  const items10 = [callback(require("Text/Text").Text, obj21), ];
  const obj22 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl10 = tmp17(tmp14[14]).intl;
  obj22.children = intl10.string(onCreated(str[15]).FXB8wQ);
  items10[1] = callback(require("Text/Text").Text, obj22);
  obj20.children = items10;
  const items11 = [closure_11(CONJURE_DEFAULT_TIER_SETTINGS, obj20), ];
  const obj23 = { hasIcons: false, children: null };
  const obj24 = { label: null, arrow: true, disabled: null, onPress: null };
  const intl11 = tmp17(tmp14[14]).intl;
  obj24.label = intl11.string(onCreated(str[15])["C8/T2E"]);
  obj24.disabled = first1;
  obj24.onPress = function onPress() {
    closure_12().catch(() => {

    });
  };
  obj23.children = callback(require("TableRow").TableRow, obj24);
  items11[1] = callback(require("TableRowGroup").TableRowGroup, obj23);
  obj19.children = items11;
  items9[1] = closure_11(CONJURE_DEFAULT_TIER_SETTINGS, obj19);
  const obj25 = { style: tmp.section, children: null };
  const obj26 = { style: tmp.sectionHeading, children: null };
  const obj27 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl12 = tmp17(tmp14[14]).intl;
  obj27.children = intl12.string(onCreated(str[15]).zzYLlW);
  const items12 = [callback(require("Text/Text").Text, obj27), ];
  const obj28 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl13 = tmp17(tmp14[14]).intl;
  obj28.children = intl13.string(onCreated(str[15])["N88+Ld"]);
  items12[1] = callback(require("Text/Text").Text, obj28);
  obj26.children = items12;
  const items13 = [closure_11(CONJURE_DEFAULT_TIER_SETTINGS, obj26), ];
  let obj15 = require("ConjureEffortTiers");
  items13[1] = callback(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled: first1, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[14]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[15]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_17(closure_0);
      };
      return callback(guildId(str[25]).TableRow, obj, name.id);
    })
  });
  obj25.children = items13;
  items9[2] = closure_11(CONJURE_DEFAULT_TIER_SETTINGS, obj25);
  const obj30 = { style: tmp.section, children: null };
  const obj31 = { style: tmp.sectionHeading, children: null };
  const obj32 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl14 = tmp17(tmp14[14]).intl;
  obj32.children = intl14.string(onCreated(str[15])["2XcV3x"]);
  const items14 = [callback(require("Text/Text").Text, obj32), ];
  const obj33 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl15 = tmp17(tmp14[14]).intl;
  obj33.children = intl15.string(onCreated(str[15]).JnJOAn);
  items14[1] = callback(require("Text/Text").Text, obj33);
  obj31.children = items14;
  const items15 = [closure_11(CONJURE_DEFAULT_TIER_SETTINGS, obj31), ];
  const obj29 = {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled: first1, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[14]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[15]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_17(closure_0);
      };
      return callback(guildId(str[25]).TableRow, obj, name.id);
    })
  };
  items15[1] = callback(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: items7.map((label) => {
      guildId = label;
      return callback(guildId(str[25]).TableRow, {
        label,
        arrow: true,
        disabled: first1,
        onPress() {
          return closure_11(closure_0);
        }
      }, label);
    })
  });
  obj30.children = items15;
  items9[3] = closure_11(CONJURE_DEFAULT_TIER_SETTINGS, obj30);
  obj6.children = items9;
  obj4.children = closure_11(CONJURE_DEFAULT_TIER_SETTINGS, obj6);
  return callback(require("ActionSheet").ActionSheet, obj4);
};
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";