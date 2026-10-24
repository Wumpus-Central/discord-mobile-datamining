// === Module 11745: ConjureCreateSheet ===

// Module 11745 (ConjureCreateSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5210 */;
import ConjureLandingModelChoices from "ConjureLandingModelChoices" /* 11748 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 11770 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 11775 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ConjureCreateSheet = "ConjureCreateSheet";
const createStyles = fn(4971);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, form: null, section: null, sectionHeading: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.form = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.sectionHeading = { gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/create/native/ConjureCreateSheet.tsx");

export default function ConjureCreateSheet(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  let initialInstallScope = guildId.initialInstallScope;
  const onCreated = guildId.onCreated;
  str = undefined;
  let str2;
  c6 = undefined;
  CONJURE_DEFAULT_TIER_SETTINGS = undefined;
  let disabled;
  closure_9 = undefined;
  c10 = undefined;
  let callback;
  closure_12 = undefined;
  let callback1;
  closure_14 = undefined;
  c15 = undefined;
  let callback3;
  closure_17 = undefined;
  const tmp = c10();
  [str, obj8.onChange] = str2.useState("");
  const tmp5 = onCreated;
  let obj2 = require("conjureCreateForm");
  let result = obj2.isConjureEligibleGuild(require("useConjureProjects").useConjureEligibleGuilds("ConjureCreateSheet"), guildId);
  _slicedToArray = result;
  let tmp7 = initialInstallScope;
  if (initialInstallScope == null) {
    str2 = "user";
    if (result) {
      str2 = "guild";
    }
    tmp7 = str2;
  }
  str2 = tmp7;
  let obj3 = require("useConjureProjects");
  [CONJURE_DEFAULT_TIER_SETTINGS, c6] = _slicedToArray(str2.useState(null), 2);
  if (CONJURE_DEFAULT_TIER_SETTINGS == null) {
    CONJURE_DEFAULT_TIER_SETTINGS = tmp4(tmp5[9]).CONJURE_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result3 = _slicedToArray(str2.useState(false), 2);
  disabled = tmp2Result3[0];
  closure_9 = tmp2Result3[1];
  const tmp2Result = _slicedToArray(str2.useState(null), 2);
  [tmp12, c10] = _slicedToArray(str2.useState(null), 2);
  const tmp14 = initialInstallScope(tmp5[10])();
  str((guildId, arg1) => {
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, value) {
      if (modelSettings === 2) {
        modelSettings = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          modelSettings = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              modelSettings = 3;
              throw value;
            } else if (arg0 === 2) {
              modelSettings = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_3 = tmp4;
              closure_2 = tmp8;
              closure_130_0 = guildId;
              closure_130_1 = undefined;
              closure_1_9(true);
              closure_1_10(null);
              c5 = 2;
              const obj5 = { guildId, modelSettings };
              const merged = Object.assign(closure_1);
              c6 = 3;
              modelSettings = 1;
              const obj6 = { value: initialInstallScope(onCreated[11])(obj5), done: false };
              return obj6;
            }
          } else if (1 === tmp8) {
            c5 = 0;
            closure_1_9(false);
            throw closure_4;
          } else {
            if (2 === tmp8) {
              c5 = 1;
              closure_130_2 = closure_4;
              closure_1_10(guildId(onCreated[13]).getConjureCreateErrorMessage(closure_130_2));
              c5 = 0;
              closure_1_9(false);
              modelSettings = 3;
              const obj3 = guildId(onCreated[13]);
            } else if (arg0 === 1) {
              modelSettings = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_130_1 = value;
              closure_130_0(closure_130_1);
              initialInstallScope(onCreated[12]).hideActionSheet(closure_9);
              closure_2(closure_130_1, guildId);
              c5 = 1;
              const obj = initialInstallScope(onCreated[12]);
            }
            c5 = 0;
            closure_1_9(false);
            modelSettings = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } catch (tmp42) {
          closure_4 = tmp42;
          if (tmp5 === c5) {
            modelSettings = tmp3;
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
  let items = [guildId, CONJURE_DEFAULT_TIER_SETTINGS, onCreated];
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
  str(function*(arg0) {
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
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            initialInstallScope = trimmed;
            if (trimmed == null) {
              initialInstallScope = c3;
            }
            trimmed = initialInstallScope.trim();
            let tmp8 = "" === trimmed;
            if (!tmp8) {
              tmp8 = first;
            }
            if (!tmp8) {
              let installScope = initialInstallScope;
              if (initialInstallScope == null) {
                installScope = null;
              }
              const obj4 = { installScope, prompt: trimmed };
              c4 = 1;
              c3 = 1;
              const obj5 = { value: callback((arg0) => trimmed(c2[14]).startConjurePrompt(arg0, trimmed), obj4), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  });
  const items1 = [callback, initialInstallScope, str, disabled];
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
  _require = str((guildId) => {
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
              closure_1 = tmp9;
              closure_129_0 = guildId;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              closure_129_3 = undefined;
              if (!first) {
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj5 = { value: guildId(onCreated[15]).pickConjureArchive(), done: false };
                return obj5;
              }
            }
          } else if (1 === tmp9) {
            c4 = 0;
            const intl2 = guildId(onCreated[16]).intl;
            closure_1_10(intl2.string(initialInstallScope(onCreated[17])["Q+l4Hv"]));
            c6 = 3;
            const obj8 = { value: undefined, done: true };
            return obj8;
          } else {
            if (2 === tmp9) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                closure_129_1 = value;
                c4 = 0;
                if (null != closure_129_1) {
                  closure_129_2 = guildId(onCreated[15]).describeConjureArchiveRejection(closure_129_1);
                  if (null == closure_129_2) {
                    closure_1_9(true);
                    closure_1_10(null);
                    closure_129_3 = null;
                    c4 = 3;
                    const obj10 = { guildId, installScope: closure_129_0, modelSettings };
                    c5 = 5;
                    c6 = 1;
                    const obj11 = { value: initialInstallScope(onCreated[11])(obj10), done: false };
                    return obj11;
                  } else {
                    closure_1_10(closure_129_2);
                  }
                  const obj18 = guildId(onCreated[15]);
                }
              }
            } else if (3 === tmp9) {
              c4 = 0;
              closure_1_9(false);
              throw closure_3;
            } else {
              if (4 === tmp9) {
                c4 = 2;
                closure_129_4 = closure_3;
                if (null == closure_129_3) {
                  closure_1_10(guildId(onCreated[13]).getConjureCreateErrorMessage(closure_129_4));
                  const obj6 = guildId(onCreated[13]);
                }
              } else if (5 === tmp9) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  closure_1_9(false);
                  c6 = 3;
                  const obj12 = { value, done: true };
                  return obj12;
                } else {
                  closure_129_3 = value;
                  const intl3 = guildId(onCreated[16]).intl;
                  c5 = 6;
                  c6 = 1;
                  const obj14 = { value: guildId(onCreated[15]).sendConjureArchiveImport(closure_129_3, closure_129_1, intl3.string(initialInstallScope(onCreated[17])["LUc7/5"])), done: false };
                  return obj14;
                }
              } else if (6 === tmp9) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  closure_1_9(false);
                  c6 = 3;
                  const obj15 = { value, done: true };
                  return obj15;
                } else {
                  initialInstallScope(onCreated[12]).hideActionSheet(closure_9);
                  tmp4(closure_129_3, guildId);
                  c4 = 2;
                  const obj2 = initialInstallScope(onCreated[12]);
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                closure_1_9(false);
                c6 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                const intl = guildId(onCreated[16]).intl;
                closure_1_10(intl.string(initialInstallScope(onCreated[17])["Q+l4Hv"]));
              }
              c4 = 0;
              closure_1_9(false);
            }
            const obj7 = guildId(onCreated[18]);
            c5 = 7;
            c6 = 1;
            const obj16 = {
              value: guildId(onCreated[18]).deleteProject(closure_129_3).catch(() => {

                    }),
              done: false
            };
            return obj16;
          }
          c6 = 3;
        } catch (tmp87) {
          closure_3 = tmp87;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp87;
          } else if (tmp2 === tmp89) {
            c5 = tmp2;
          } else if (tmp === tmp89) {
            c5 = tmp3;
          } else {
            c5 = tmp6;
          }
        }
      }
    })();
  });
  const items2 = [guildId, CONJURE_DEFAULT_TIER_SETTINGS, onCreated, disabled];
  callback1 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const items3 = [result, callback1, initialInstallScope, disabled];
  closure_14 = obj.useCallback(str(function*() {
    if (v3 === 2) {
      v3 = 3;
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
        v3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (!first) {
            let _null = initialInstallScope;
            if (initialInstallScope == null) {
              let tmp8 = "user";
              if (c4) {
                tmp8 = null;
              }
              _null = tmp8;
            }
            if (null == _null) {
              const obj5 = { key: "ConjureImportInstallScope", stackingBehavior: "stack", header: null, hasIcons: false, options: null };
              const obj6 = { title: null };
              let intl = _null(1128).intl;
              obj6.title = intl.string(v3(3830).NyVn6T);
              obj5.header = obj6;
              const items = ["guild", "user"];
              obj5.options = items.map((item) => {
                closure_0 = item;
                const intl = _null(dependencyMap[16]).intl;
                if ("guild" === item) {
                  let s1TsXl = v3(dependencyMap[17]).LlLIJw;
                } else {
                  s1TsXl = v3(dependencyMap[17]).s1TsXl;
                }
                return {
                  label: intl.string(s1TsXl),
                  onPress() {
                    return closure_2_13(closure_0);
                  }
                };
              });
              const result = _null(7291).showSimpleActionSheet(obj5);
              const obj3 = _null(7291);
            } else {
              dependencyMap = 1;
              v3 = 1;
              const obj7 = { value: callback1(tmp9), done: false };
              return obj7;
            }
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        }
        v3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp15) {
        v3 = tmp;
        throw tmp15;
      }
    }
  }), items3);
  const tmp2Result4 = _slicedToArray(str2.useState(null), 2);
  const landingModelChoicesResult = require("ConjureLandingModelChoices").landingModelChoices();
  c15 = landingModelChoicesResult;
  const items4 = [landingModelChoicesResult, CONJURE_DEFAULT_TIER_SETTINGS];
  const callback2 = obj.useCallback(() => {
    const obj2 = { key: ConjureEffortPicker.CONJURE_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: null };
    const obj = ActionSheetActionCreators;
    obj2.content = React5(ConjureEffortPicker.ConjureEffortPickerSheet, { initialSettings: CONJURE_DEFAULT_TIER_SETTINGS, tiers: ConjureLandingModelChoices.CONJURE_LANDING_TIER_SEATS, choices, onChange });
    obj.showActionSheet(obj2);
  }, items4);
  const tmp4Result = require("ConjureLandingModelChoices");
  const tmp4Result4 = require("ConjureTemplates");
  const items5 = [onCreated];
  callback3 = obj.useCallback((projectId, id) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureCreateSheet);
    onCreated(projectId, id);
  }, items5);
  const items6 = [callback, guildId, callback3, CONJURE_DEFAULT_TIER_SETTINGS, tmp7, disabled];
  closure_17 = obj.useCallback((wizard) => {
    guildId = wizard;
    if (null == wizard.wizard) {
      if (!first) {
        const obj = { installScope: str2, templateId: wizard.id };
        callback((arg0) => wizard(onCreated[21]).startConjureTemplateProject(arg0, wizard), obj).catch(() => {

        });
        const promise = callback((arg0) => wizard(onCreated[21]).startConjureTemplateProject(arg0, wizard), obj);
      }
    } else {
      const obj3 = { key: ConjureTemplateWizardSheet.CONJURE_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: null };
      const obj4 = { template: wizard, guildId, modelSettings: CONJURE_DEFAULT_TIER_SETTINGS, onCreated: callback3 };
      obj3.content = React5(ConjureTemplateWizardSheetDefault, obj4);
      ActionSheetActionCreators.showActionSheet(obj3);
    }
  }, items6);
  let intl = tmp4(tmp5[16]).intl;
  const items7 = [intl.string(initialInstallScope(tmp5[17])["9w+Chc"]), , ];
  let intl2 = tmp4(tmp5[16]).intl;
  items7[1] = intl2.string(initialInstallScope(tmp5[17]).WAvmdq);
  let intl3 = tmp4(tmp5[16]).intl;
  items7[2] = intl3.string(initialInstallScope(tmp5[17]).SKsrzl);
  let obj4 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj5 = { title: null };
  const intl4 = tmp4(tmp5[16]).intl;
  obj5.title = intl4.string(initialInstallScope(tmp5[17])["+5XyCR"]);
  obj4.header = CONJURE_DEFAULT_TIER_SETTINGS(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj5);
  let obj6 = { style: tmp.content, children: null };
  let obj7 = { style: tmp.form, children: null };
  let obj8 = { placeholder: null, autoComplete: "off", value: null, onChange: null, disabled: null };
  const intl5 = tmp4(tmp5[16]).intl;
  obj8.placeholder = intl5.string(initialInstallScope(tmp5[17]).ab1sMf);
  obj8.value = str;
  obj8.disabled = disabled;
  const items8 = [CONJURE_DEFAULT_TIER_SETTINGS(require("TextArea").TextArea, obj8), , , , , ];
  let obj9 = { hasIcons: false, children: null };
  let obj10 = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
  const intl6 = tmp4(tmp5[16]).intl;
  obj10.label = intl6.string(initialInstallScope(tmp5[17]).aBPQxX);
  let obj11 = { variant: "text-md/normal", color: "text-muted", children: null };
  const conjureTemplatesResult = require("ConjureTemplates").conjureTemplates();
  obj11.children = require("ConjureEffortTiers").conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier);
  obj10.trailing = CONJURE_DEFAULT_TIER_SETTINGS(require("Text/Text").Text, obj11);
  obj10.disabled = disabled;
  obj10.onPress = callback2;
  obj9.children = CONJURE_DEFAULT_TIER_SETTINGS(require("TableRow").TableRow, obj10);
  items8[1] = CONJURE_DEFAULT_TIER_SETTINGS(require("TableRowGroup").TableRowGroup, obj9);
  let tmp20Result = null;
  if (null != tmp14) {
    let str3 = "text-muted";
    if (0 === tmp14) {
      str3 = "text-feedback-warning";
    }
    let obj12 = { variant: "text-sm/normal", color: str3, children: tmp4(tmp5[30]).conjureAppSlotsLeftLabel(tmp14) };
    tmp20Result = tmp20(tmp4(tmp5[28]).Text, obj12);
    const tmp4Result6 = tmp4(tmp5[30]);
  }
  items8[2] = tmp20Result;
  let tmp20Result2 = null;
  if (null != tmp12) {
    const obj13 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp12 };
    tmp20Result2 = tmp20(tmp4(tmp5[28]).Text, obj13);
  }
  items8[3] = tmp20Result2;
  let obj14 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl7 = tmp4(tmp5[16]).intl;
  obj14.children = intl7.string(initialInstallScope(tmp5[17]).NvvCzX);
  items8[4] = CONJURE_DEFAULT_TIER_SETTINGS(require("Text/Text").Text, obj14);
  let obj15 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
  const intl8 = tmp4(tmp5[16]).intl;
  obj15.text = intl8.string(require("util").t.CumH4u);
  obj15.disabled = "" === str.trim();
  obj15.loading = disabled;
  obj15.onPress = function onPress() {
    return closure_12();
  };
  items8[5] = CONJURE_DEFAULT_TIER_SETTINGS(require("components/Button/Button").Button, obj15);
  obj7.children = items8;
  const items9 = [disabled(c6, obj7), , , ];
  let obj16 = { style: tmp.section, children: null };
  const obj17 = { style: tmp.sectionHeading, children: null };
  let obj18 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl9 = tmp4(tmp5[16]).intl;
  obj18.children = intl9.string(initialInstallScope(tmp5[17]).I7nPgX);
  const items10 = [CONJURE_DEFAULT_TIER_SETTINGS(require("Text/Text").Text, obj18), ];
  const obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl10 = tmp4(tmp5[16]).intl;
  obj19.children = intl10.string(initialInstallScope(tmp5[17]).FXB8wQ);
  items10[1] = CONJURE_DEFAULT_TIER_SETTINGS(require("Text/Text").Text, obj19);
  obj17.children = items10;
  const items11 = [disabled(c6, obj17), ];
  const obj20 = { hasIcons: false, children: null };
  const obj21 = { label: null, arrow: true, disabled: null, onPress: null };
  const intl11 = tmp4(tmp5[16]).intl;
  obj21.label = intl11.string(initialInstallScope(tmp5[17])["C8/T2E"]);
  obj21.disabled = disabled;
  obj21.onPress = function onPress() {
    closure_14().catch(() => {

    });
  };
  obj20.children = CONJURE_DEFAULT_TIER_SETTINGS(require("TableRow").TableRow, obj21);
  items11[1] = CONJURE_DEFAULT_TIER_SETTINGS(require("TableRowGroup").TableRowGroup, obj20);
  obj16.children = items11;
  items9[1] = disabled(c6, obj16);
  const obj22 = { style: tmp.section, children: null };
  const obj23 = { style: tmp.sectionHeading, children: null };
  const obj24 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl12 = tmp4(tmp5[16]).intl;
  obj24.children = intl12.string(initialInstallScope(tmp5[17]).zzYLlW);
  const items12 = [CONJURE_DEFAULT_TIER_SETTINGS(require("Text/Text").Text, obj24), ];
  const obj25 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl13 = tmp4(tmp5[16]).intl;
  obj25.children = intl13.string(initialInstallScope(tmp5[17])["N88+Ld"]);
  items12[1] = CONJURE_DEFAULT_TIER_SETTINGS(require("Text/Text").Text, obj25);
  obj23.children = items12;
  const items13 = [disabled(c6, obj23), ];
  const tmp4Result5 = require("ConjureEffortTiers");
  items13[1] = CONJURE_DEFAULT_TIER_SETTINGS(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled, accessibilityLabel: null, onPress: null };
      const intl = guildId(onCreated[16]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(initialInstallScope(onCreated[17]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_17(closure_0);
      };
      return CONJURE_DEFAULT_TIER_SETTINGS(guildId(onCreated[27]).TableRow, obj, name.id);
    })
  });
  obj22.children = items13;
  items9[2] = disabled(c6, obj22);
  const obj27 = { style: tmp.section, children: null };
  const obj28 = { style: tmp.sectionHeading, children: null };
  const obj29 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl14 = tmp4(tmp5[16]).intl;
  obj29.children = intl14.string(initialInstallScope(tmp5[17])["2XcV3x"]);
  const items14 = [CONJURE_DEFAULT_TIER_SETTINGS(require("Text/Text").Text, obj29), ];
  const obj30 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl15 = tmp4(tmp5[16]).intl;
  obj30.children = intl15.string(initialInstallScope(tmp5[17]).JnJOAn);
  items14[1] = CONJURE_DEFAULT_TIER_SETTINGS(require("Text/Text").Text, obj30);
  obj28.children = items14;
  const items15 = [disabled(c6, obj28), ];
  const obj26 = {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled, accessibilityLabel: null, onPress: null };
      const intl = guildId(onCreated[16]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(initialInstallScope(onCreated[17]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_17(closure_0);
      };
      return CONJURE_DEFAULT_TIER_SETTINGS(guildId(onCreated[27]).TableRow, obj, name.id);
    })
  };
  items15[1] = CONJURE_DEFAULT_TIER_SETTINGS(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: items7.map((label) => {
      guildId = label;
      return CONJURE_DEFAULT_TIER_SETTINGS(guildId(onCreated[27]).TableRow, {
        label,
        arrow: true,
        disabled,
        onPress() {
          return closure_12(closure_0);
        }
      }, label);
    })
  });
  obj27.children = items15;
  items9[3] = disabled(c6, obj27);
  obj6.children = items9;
  obj4.children = disabled(c6, obj6);
  return CONJURE_DEFAULT_TIER_SETTINGS(require("ActionSheet").ActionSheet, obj4);
};
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";