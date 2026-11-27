// === Module 18883: ConjureCreateSheet ===

// Module 18883 (ConjureCreateSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5257 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 18567 */;
import ConjureLandingModelChoices from "ConjureLandingModelChoices" /* 18874 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 18886 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;

require = fn;
const View = fn(17).View;
const sendUserMessage = fn(7693).sendUserMessage;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const ConjureCreateSheet = "ConjureCreateSheet";
const createStyles = fn(5043);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, form: null, section: null, sectionHeading: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.form = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.sectionHeading = { gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/create/native/ConjureCreateSheet.tsx");

export default function ConjureCreateSheet(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const onCreated = guildId.onCreated;
  importDefault = onCreated;
  const onSubmittingChange = guildId.onSubmittingChange;
  asyncGeneratorStep = undefined;
  CONJURE_DEFAULT_TIER_SETTINGS = undefined;
  let disabled;
  closure_6 = undefined;
  c7 = undefined;
  let callback;
  closure_9 = undefined;
  let callback1;
  closure_11 = undefined;
  c12 = undefined;
  let callback3;
  closure_14 = undefined;
  const tmp = closure_11();
  const tmp3 = CONJURE_DEFAULT_TIER_SETTINGS(disabled.useState(""), 2);
  const str = tmp3[0];
  const tmp5 = str;
  const conjureLinkPrefetch = require("conjureLinkEmbeds").useConjureLinkPrefetch(str);
  let obj2 = require("conjureLinkEmbeds");
  [CONJURE_DEFAULT_TIER_SETTINGS, c3] = CONJURE_DEFAULT_TIER_SETTINGS(disabled.useState(null), 2);
  if (CONJURE_DEFAULT_TIER_SETTINGS == null) {
    CONJURE_DEFAULT_TIER_SETTINGS = tmp4(tmp5[9]).CONJURE_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result = CONJURE_DEFAULT_TIER_SETTINGS(disabled.useState(false), 2);
  importDefault = tmp2Result[1];
  items = [tmp2Result[0], ];
  const items1 = [onSubmittingChange];
  items[1] = disabled.useCallback((arg0) => {
    closure_1(arg0);
    guildId(arg0);
  }, items1);
  const tmp2Result3 = CONJURE_DEFAULT_TIER_SETTINGS(items, 2);
  disabled = tmp2Result3[0];
  closure_6 = tmp11;
  const tmp7 = CONJURE_DEFAULT_TIER_SETTINGS(disabled.useState(null), 2);
  [tmp13, c7] = CONJURE_DEFAULT_TIER_SETTINGS(disabled.useState(null), 2);
  const tmp15 = require("useConjureAppSlotsLeft")();
  asyncGeneratorStep(async (guildId, templateId) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (async (arg0, value) => {
      if (v32 === 2) {
        v32 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          v32 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              v32 = 3;
              throw value;
            } else if (arg0 === 2) {
              v32 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_3 = tmp4;
              closure_2 = tmp8;
              closure_130_0 = guildId;
              closure_130_1 = undefined;
              v3(true);
              v32(null);
              c5 = 2;
              const obj5 = { guildId, modelSettings, templateId };
              v3 = 3;
              v32 = 1;
              const obj6 = { value: templateId(str[11])(obj5), done: false };
              return obj6;
            }
          } else if (1 === tmp8) {
            c5 = 0;
            v3(false);
            throw modelSettings;
          } else {
            if (2 === tmp8) {
              c5 = 1;
              closure_130_2 = modelSettings;
              v32(guildId(str[13]).getConjureCreateErrorMessage(closure_130_2));
              c5 = 0;
              v3(false);
              v32 = 3;
              const obj3 = guildId(str[13]);
            } else if (arg0 === 1) {
              v32 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_130_1 = value;
              closure_130_0(closure_130_1);
              templateId(str[12]).hideActionSheet(callback1);
              templateId(closure_130_1, guildId);
              c5 = 1;
              const obj = templateId(str[12]);
            }
            c5 = 0;
            v3(false);
            v32 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } catch (tmp42) {
          modelSettings = tmp42;
          if (tmp5 === c5) {
            v32 = tmp3;
            throw tmp42;
          } else if (tmp2 === tmp44) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [guildId, CONJURE_DEFAULT_TIER_SETTINGS, onCreated, tmp2Result3[1]];
  callback = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  asyncGeneratorStep(async (arg0) => {
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
            closure_1 = closure_0;
            if (closure_0 == null) {
              closure_1 = c2;
            }
            const trimmed = closure_1.trim();
            let tmp8 = "" === trimmed;
            if (!tmp8) {
              tmp8 = first;
            }
            if (!tmp8) {
              c3 = 1;
              c2 = 1;
              const obj4 = { value: callback((arg0) => closure_2_7(arg0, trimmed)), done: false };
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
  const items3 = [callback, str, disabled];
  closure_9 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items3);
  _require = asyncGeneratorStep(async (guildId) => {
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (async (arg0) => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          v3 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              closure_129_0 = guildId;
              closure_129_1 = undefined;
              v3(true);
              closure_129_1 = null;
              modelSettings = 2;
              const obj4 = { guildId, modelSettings };
              c5 = 3;
              v3 = 1;
              const obj5 = { value: closure_1(str[11])(obj4), done: false };
              return obj5;
            }
          } else if (1 === tmp8) {
            modelSettings = 0;
            v3(false);
            throw closure_3;
          } else {
            if (2 === tmp8) {
              modelSettings = 1;
              closure_129_2 = closure_3;
              if (null != closure_129_1) {
                const obj8 = guildId(str[17]);
                c5 = 5;
                v3 = 1;
                const obj9 = {
                  value: guildId(str[17]).deleteProject(closure_129_1).catch(() => {

                            }),
                  done: false
                };
                return obj9;
              } else {
                const obj6 = guildId(str[18]);
                obj6.presentError(guildId(str[13]).getConjureCreateErrorMessage(closure_129_2));
                modelSettings = 0;
                v3(false);
                v3 = 3;
                const obj7 = guildId(str[13]);
              }
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                modelSettings = 0;
                v3(false);
                v3 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else {
                closure_129_1 = value;
                const intl2 = guildId(str[15]).intl;
                c5 = 4;
                v3 = 1;
                const obj11 = { value: guildId(str[14]).sendConjureArchiveImport(closure_129_1, closure_129_0, intl2.string(closure_1(str[16])["LUc7/5"])), done: false };
                return obj11;
              }
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                modelSettings = 0;
                v3(false);
                v3 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                closure_1(closure_129_1, guildId);
                modelSettings = 1;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              const intl = guildId(str[15]).intl;
              guildId(str[18]).presentError(intl.string(closure_1(str[16])["Q+l4Hv"]));
              const obj = guildId(str[18]);
            }
            modelSettings = 0;
            v3(false);
            v3 = 3;
            const obj13 = { value, done: true };
            return obj13;
          }
        } catch (tmp64) {
          closure_3 = tmp64;
          if (tmp5 === modelSettings) {
            v3 = tmp3;
            throw tmp64;
          } else if (tmp2 === tmp66) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const items4 = [guildId, CONJURE_DEFAULT_TIER_SETTINGS, onCreated, tmp2Result3[1]];
  callback1 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items4);
  const items5 = [callback1, disabled];
  closure_11 = obj.useCallback(asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            guildId = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            if (!first) {
              tmp3(5257).hideActionSheet(callback1);
              dependencyMap = 1;
              const obj7 = tmp3(5257);
              c3 = 2;
              c4 = 1;
              const obj6 = { value: guildId(18617).pickConjureArchive(), done: false };
              return obj6;
            }
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          const intl = guildId(1112).intl;
          guildId(5724).presentError(intl.string(tmp3(4245)["Q+l4Hv"]));
          c4 = 3;
          const obj9 = { value: undefined, done: true };
          return obj9;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c4 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_128_0 = value;
            dependencyMap = 0;
            if (null != closure_128_0) {
              closure_128_1 = guildId(18617).describeConjureArchiveRejection(closure_128_0);
              if (null != closure_128_1) {
                guildId(5724).presentError(closure_128_1);
                const obj2 = guildId(5724);
              }
              const obj12 = guildId(18617);
            }
            c3 = 3;
            c4 = 1;
            const obj11 = { value: closure_129_10(closure_128_0), done: false };
            return obj11;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c4 = 3;
      } catch (tmp32) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp32;
        } else {
          c3 = tmp;
        }
      }
    }
  }), items5);
  const tmp2Result4 = CONJURE_DEFAULT_TIER_SETTINGS(disabled.useState(null), 2);
  const landingModelChoicesResult = require("ConjureLandingModelChoices").landingModelChoices();
  c12 = landingModelChoicesResult;
  const items6 = [landingModelChoicesResult, CONJURE_DEFAULT_TIER_SETTINGS];
  const callback2 = obj.useCallback(() => {
    const obj2 = { key: ConjureEffortPicker.CONJURE_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: null };
    const obj = ActionSheetActionCreators;
    obj2.content = React5(ConjureEffortPicker.ConjureEffortPickerSheet, { initialSettings: CONJURE_DEFAULT_TIER_SETTINGS, tiers: ConjureLandingModelChoices.CONJURE_LANDING_TIER_SEATS, choices, onChange });
    obj.showActionSheet(obj2);
  }, items6);
  const tmp4Result = require("ConjureLandingModelChoices");
  const tmp4Result4 = require("ConjureTemplates");
  const items7 = [onCreated];
  callback3 = obj.useCallback((arg0, arg1) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureCreateSheet);
    closure_1(arg0, arg1);
  }, items7);
  const items8 = [callback, guildId, callback3, CONJURE_DEFAULT_TIER_SETTINGS, disabled];
  closure_14 = obj.useCallback((wizard) => {
    guildId = wizard;
    if (null == wizard.wizard) {
      if (!first) {
        callback((arg0) => wizard(str[20]).startConjureTemplateProject(arg0, wizard), wizard.id).catch(() => {

        });
        const promise = callback((arg0) => wizard(str[20]).startConjureTemplateProject(arg0, wizard), wizard.id);
      }
    } else {
      const obj2 = { key: ConjureTemplateWizardSheet.CONJURE_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: null };
      const obj3 = { template: wizard, guildId, modelSettings: CONJURE_DEFAULT_TIER_SETTINGS, onCreated: callback3 };
      obj2.content = React5(ConjureTemplateWizardSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items8);
  let intl = tmp4(tmp5[15]).intl;
  const items9 = [intl.string(require("module_4245")["9w+Chc"]), , ];
  let intl2 = tmp4(tmp5[15]).intl;
  items9[1] = intl2.string(require("module_4245").WAvmdq);
  const intl3 = tmp4(tmp5[15]).intl;
  items9[2] = intl3.string(require("module_4245").SKsrzl);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj4 = { title: null };
  const intl4 = tmp4(tmp5[15]).intl;
  obj4.title = intl4.string(require("module_4245")["+5XyCR"]);
  obj3.header = callback(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj4);
  let obj5 = { style: tmp.content, children: null };
  let obj6 = { style: tmp.form, children: null };
  let obj7 = { placeholder: null, autoComplete: "off", value: null, onChange: null, disabled: null };
  const intl5 = tmp4(tmp5[15]).intl;
  obj7.placeholder = intl5.string(require("module_4245").ab1sMf);
  obj7.value = str;
  obj7.onChange = tmp3[1];
  obj7.disabled = disabled;
  const items10 = [callback(require("TextArea").TextArea, obj7), , , , , ];
  let obj8 = { hasIcons: false, children: null };
  let obj9 = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
  const intl6 = tmp4(tmp5[15]).intl;
  obj9.label = intl6.string(require("module_4245").aBPQxX);
  let obj10 = { variant: "body-md/normal", color: "text-muted", children: null };
  const conjureTemplatesResult = require("ConjureTemplates").conjureTemplates();
  obj10.children = require("ConjureEffortTiers").conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier);
  obj9.trailing = callback(require("Text/Text").Text, obj10);
  obj9.disabled = disabled;
  obj9.onPress = callback2;
  obj8.children = callback(require("TableRow").TableRow, obj9);
  items10[1] = callback(require("TableRowGroup").TableRowGroup, obj8);
  let tmp21Result = null;
  if (null != tmp15) {
    let str2 = "text-muted";
    if (0 === tmp15) {
      str2 = "text-feedback-warning";
    }
    let obj11 = { variant: "body-sm/normal", color: str2, children: tmp4(tmp5[29]).conjureAppSlotsLeftLabel(tmp15) };
    tmp21Result = tmp21(tmp4(tmp5[27]).Text, obj11);
    const tmp4Result6 = tmp4(tmp5[29]);
  }
  items10[2] = tmp21Result;
  let tmp21Result2 = null;
  if (null != tmp13) {
    let obj12 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp13 };
    tmp21Result2 = tmp21(tmp4(tmp5[27]).Text, obj12);
  }
  items10[3] = tmp21Result2;
  let obj13 = { variant: "body-xs/normal", color: "text-muted", children: null };
  const intl7 = tmp4(tmp5[15]).intl;
  obj13.children = intl7.string(require("module_4245").NvvCzX);
  items10[4] = callback(require("Text/Text").Text, obj13);
  const obj14 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
  const intl8 = tmp4(tmp5[15]).intl;
  obj14.text = intl8.string(require("util").t.CumH4u);
  obj14.disabled = "" === str.trim();
  obj14.loading = disabled;
  obj14.onPress = function onPress() {
    return closure_9();
  };
  items10[5] = callback(require("components/Button/Button").Button, obj14);
  obj6.children = items10;
  const items11 = [closure_9(closure_6, obj6), , , ];
  const obj15 = { style: tmp.section, children: null };
  const obj16 = { style: tmp.sectionHeading, children: null };
  const obj17 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl9 = tmp4(tmp5[15]).intl;
  obj17.children = intl9.string(require("module_4245").I7nPgX);
  const items12 = [callback(require("Text/Text").Text, obj17), ];
  const obj18 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl10 = tmp4(tmp5[15]).intl;
  obj18.children = intl10.string(require("module_4245").FXB8wQ);
  items12[1] = callback(require("Text/Text").Text, obj18);
  obj16.children = items12;
  const items13 = [closure_9(closure_6, obj16), ];
  const obj19 = { hasIcons: false, children: null };
  const obj20 = { label: null, arrow: true, disabled: null, onPress: null };
  const intl11 = tmp4(tmp5[15]).intl;
  obj20.label = intl11.string(require("module_4245")["C8/T2E"]);
  obj20.disabled = disabled;
  obj20.onPress = function onPress() {
    closure_11().catch(() => {

    });
  };
  obj19.children = callback(require("TableRow").TableRow, obj20);
  items13[1] = callback(require("TableRowGroup").TableRowGroup, obj19);
  obj15.children = items13;
  items11[1] = closure_9(closure_6, obj15);
  const obj21 = { style: tmp.section, children: null };
  const obj22 = { style: tmp.sectionHeading, children: null };
  const obj23 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl12 = tmp4(tmp5[15]).intl;
  obj23.children = intl12.string(require("module_4245").zzYLlW);
  const items14 = [callback(require("Text/Text").Text, obj23), ];
  const obj24 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl13 = tmp4(tmp5[15]).intl;
  obj24.children = intl13.string(require("module_4245")["N88+Ld"]);
  items14[1] = callback(require("Text/Text").Text, obj24);
  obj22.children = items14;
  const items15 = [closure_9(closure_6, obj22), ];
  const tmp4Result5 = require("ConjureEffortTiers");
  items15[1] = callback(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[15]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(closure_1(str[16]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_14(closure_0);
      };
      return callback(guildId(str[26]).TableRow, obj, name.id);
    })
  });
  obj21.children = items15;
  items11[2] = closure_9(closure_6, obj21);
  const obj26 = { style: tmp.section, children: null };
  const obj27 = { style: tmp.sectionHeading, children: null };
  const obj28 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl14 = tmp4(tmp5[15]).intl;
  obj28.children = intl14.string(require("module_4245")["2XcV3x"]);
  const items16 = [callback(require("Text/Text").Text, obj28), ];
  const obj29 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl15 = tmp4(tmp5[15]).intl;
  obj29.children = intl15.string(require("module_4245").JnJOAn);
  items16[1] = callback(require("Text/Text").Text, obj29);
  obj27.children = items16;
  const items17 = [closure_9(closure_6, obj27), ];
  const obj25 = {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[15]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(closure_1(str[16]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_14(closure_0);
      };
      return callback(guildId(str[26]).TableRow, obj, name.id);
    })
  };
  items17[1] = callback(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: items9.map((label) => {
      guildId = label;
      return callback(guildId(str[26]).TableRow, {
        label,
        arrow: true,
        disabled,
        onPress() {
          return closure_9(closure_0);
        }
      }, label);
    })
  });
  obj26.children = items17;
  items11[3] = closure_9(closure_6, obj26);
  obj5.children = items11;
  obj3.children = closure_9(closure_6, obj5);
  return callback(require("ActionSheet").ActionSheet, obj3);
};
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";