// === Module 18704: ConjureCreateSheet ===

// Module 18704 (ConjureCreateSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5037 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 18379 */;
import ConjureLandingModelChoices from "ConjureLandingModelChoices" /* 18696 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 18710 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;

require = fn;
const View = fn(17).View;
const sendUserMessage = fn(6878).sendUserMessage;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const ConjureCreateSheet = "ConjureCreateSheet";
const createStyles = fn(4823);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, form: null, section: null, sectionHeading: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.form = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.sectionHeading = { gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/create/native/ConjureCreateSheet.tsx");

export default function ConjureCreateSheet(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const onCreated = guildId.onCreated;
  importDefault = onCreated;
  const onSubmittingChange = guildId.onSubmittingChange;
  str = undefined;
  _slicedToArray = undefined;
  CONJURE_DEFAULT_TIER_SETTINGS = undefined;
  let disabled;
  closure_7 = undefined;
  c8 = undefined;
  let callback;
  closure_10 = undefined;
  let callback1;
  closure_12 = undefined;
  c13 = undefined;
  let callback3;
  closure_15 = undefined;
  const tmp = callback1();
  [str, obj9.onChange] = CONJURE_DEFAULT_TIER_SETTINGS.useState("");
  const tmp5 = str;
  const conjureLinkPrefetch = require("conjureLinkEmbeds").useConjureLinkPrefetch(str);
  let obj2 = require("conjureLinkEmbeds");
  let obj3 = require("conjureCreateForm");
  let result = obj3.isConjureEligibleGuild(require("useConjureProjects").useConjureEligibleGuilds("ConjureCreateSheet"), guildId);
  asyncGeneratorStep = result;
  let obj4 = require("useConjureProjects");
  [CONJURE_DEFAULT_TIER_SETTINGS, c4] = _slicedToArray(CONJURE_DEFAULT_TIER_SETTINGS.useState(null), 2);
  if (CONJURE_DEFAULT_TIER_SETTINGS == null) {
    CONJURE_DEFAULT_TIER_SETTINGS = tmp4(tmp5[11]).CONJURE_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result = _slicedToArray(CONJURE_DEFAULT_TIER_SETTINGS.useState(false), 2);
  importDefault = tmp2Result[1];
  items = [tmp2Result[0], ];
  const items1 = [onSubmittingChange];
  items[1] = CONJURE_DEFAULT_TIER_SETTINGS.useCallback((arg0) => {
    closure_1(arg0);
    guildId(arg0);
  }, items1);
  const tmp2Result3 = _slicedToArray(items, 2);
  disabled = tmp2Result3[0];
  closure_7 = tmp12;
  let tmp8 = _slicedToArray(CONJURE_DEFAULT_TIER_SETTINGS.useState(null), 2);
  [tmp14, c8] = _slicedToArray(CONJURE_DEFAULT_TIER_SETTINGS.useState(null), 2);
  let tmp16 = require("useConjureAppSlotsLeft")();
  asyncGeneratorStep(async (guildId, templateId) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (async (arg0, value) => {
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
          if (0 === c6) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_3 = tmp4;
              closure_2 = tmp8;
              closure_130_0 = guildId;
              closure_130_1 = undefined;
              v3(true);
              _undefined(null);
              modelSettings = 2;
              const obj5 = { guildId, modelSettings, templateId };
              c6 = 3;
              v3 = 1;
              const obj6 = { value: templateId(str[13])(obj5), done: false };
              return obj6;
            }
          } else if (1 === tmp8) {
            modelSettings = 0;
            v3(false);
            throw closure_4;
          } else {
            if (2 === tmp8) {
              modelSettings = 1;
              closure_130_2 = closure_4;
              _undefined(guildId(str[15]).getConjureCreateErrorMessage(closure_130_2));
              modelSettings = 0;
              v3(false);
              v3 = 3;
              const obj3 = guildId(str[15]);
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_130_1 = value;
              closure_130_0(closure_130_1);
              templateId(str[14]).hideActionSheet(closure_10);
              templateId(closure_130_1, guildId);
              modelSettings = 1;
              const obj = templateId(str[14]);
            }
            modelSettings = 0;
            v3(false);
            v3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } catch (tmp42) {
          closure_4 = tmp42;
          if (tmp5 === modelSettings) {
            v3 = tmp3;
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
  closure_10 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items3);
  _require = asyncGeneratorStep(async (guildId, installScope) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (async (arg0, value) => {
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
          if (0 === c6) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp4;
              closure_2 = tmp8;
              closure_130_0 = guildId;
              closure_130_1 = undefined;
              v3(true);
              closure_130_1 = null;
              modelSettings = 2;
              const obj4 = { guildId, installScope, modelSettings };
              c6 = 3;
              v3 = 1;
              const obj5 = { value: installScope(str[13])(obj4), done: false };
              return obj5;
            }
          } else if (1 === tmp8) {
            modelSettings = 0;
            v3(false);
            throw closure_4;
          } else {
            if (2 === tmp8) {
              modelSettings = 1;
              closure_130_2 = closure_4;
              if (null != closure_130_1) {
                const obj8 = guildId(str[19]);
                c6 = 5;
                v3 = 1;
                const obj9 = {
                  value: guildId(str[19]).deleteProject(closure_130_1).catch(() => {

                            }),
                  done: false
                };
                return obj9;
              } else {
                const obj6 = guildId(str[20]);
                obj6.presentError(guildId(str[15]).getConjureCreateErrorMessage(closure_130_2));
                modelSettings = 0;
                v3(false);
                v3 = 3;
                const obj7 = guildId(str[15]);
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
                closure_130_1 = value;
                const intl2 = guildId(str[17]).intl;
                c6 = 4;
                v3 = 1;
                const obj11 = { value: guildId(str[16]).sendConjureArchiveImport(closure_130_1, closure_130_0, intl2.string(installScope(str[18])["LUc7/5"])), done: false };
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
                installScope(closure_130_1, guildId);
                modelSettings = 1;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              const intl = guildId(str[17]).intl;
              guildId(str[20]).presentError(intl.string(installScope(str[18])["Q+l4Hv"]));
              const obj = guildId(str[20]);
            }
            modelSettings = 0;
            v3(false);
            v3 = 3;
            const obj14 = { value, done: true };
            return obj14;
          }
        } catch (tmp57) {
          closure_4 = tmp57;
          if (tmp5 === modelSettings) {
            v3 = tmp3;
            throw tmp57;
          } else if (tmp2 === tmp59) {
            c6 = tmp2;
          } else {
            c6 = tmp;
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
  const items5 = [result, callback1, tmp2Result3[1], disabled];
  closure_12 = obj.useCallback(asyncGeneratorStep(async () => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = undefined;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            if (!first) {
              closure_1(5037).hideActionSheet(closure_1_10);
              c5 = 1;
              const obj11 = closure_1(5037);
              c7 = 2;
              c8 = 1;
              const obj4 = { value: _null(18420).pickConjureArchive(), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp7) {
          c5 = 0;
          let intl = _null(1113).intl;
          _null(5504).presentError(intl.string(closure_1(4121)["Q+l4Hv"]));
          c8 = 3;
          const obj7 = { value: undefined, done: true };
          return obj7;
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c8 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_131_0 = value;
              c5 = 0;
              if (null != closure_131_0) {
                closure_131_1 = _null(18420).describeConjureArchiveRejection(closure_131_0);
                if (null == closure_131_1) {
                  closure_131_2 = closure_131_0;
                  closure_132_7(true);
                  c5 = 2;
                  const tmp48 = _null(18707);
                  dependencyMap = tmp48;
                  closure_1 = tmp48.importedConjureInstallScope;
                  c7 = 4;
                  c8 = 1;
                  const obj10 = { value: _null(18707).readConjureArchiveInstallScope(closure_131_2.bytes), done: false };
                  return obj10;
                } else {
                  _null(5504).presentError(closure_131_1);
                  const obj5 = _null(5504);
                }
                const obj19 = _null(18420);
              }
            }
          } else if (3 === tmp7) {
            c5 = 0;
            closure_132_7(false);
            throw closure_6;
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_132_7(false);
              c8 = 3;
              const obj13 = { value, done: true };
              return obj13;
            } else {
              const tmp78 = closure_1(value, closure_132_3);
              _null = tmp78;
              if (tmp78 == null) {
                let tmp16 = "user";
                if (closure_132_3) {
                  tmp16 = null;
                }
                _null = tmp16;
              }
              closure_131_3 = _null;
              if (null == closure_131_3) {
                c5 = 0;
                closure_132_7(false);
                const obj14 = { key: "ConjureImportInstallScope", stackingBehavior: "stack", header: null, hasIcons: false, options: null };
                const obj15 = { title: null };
                const intl2 = _null(1113).intl;
                obj15.title = intl2.string(closure_1(4121).NyVn6T);
                obj14.header = obj15;
                items = ["guild", "user"];
                obj14.options = items.map((item) => {
                  closure_0 = item;
                  const intl = c0(dependencyMap[17]).intl;
                  if ("guild" === item) {
                    let s1TsXl = closure_1(dependencyMap[18]).LlLIJw;
                  } else {
                    s1TsXl = closure_1(dependencyMap[18]).s1TsXl;
                  }
                  return {
                    label: intl.string(s1TsXl),
                    onPress() {
                      return callback1(dependencyMap, closure_0);
                    }
                  };
                });
                const result = _null(7462).showSimpleActionSheet(obj14);
                const obj16 = _null(7462);
              }
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_132_7(false);
            c8 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            c5 = 0;
            closure_132_7(false);
            c8 = 3;
            const obj = { value: undefined, done: true };
            return obj;
          }
          c7 = 5;
          c8 = 1;
          const obj18 = { value: closure_132_11(closure_131_2, closure_131_3), done: false };
          return obj18;
        }
        c8 = 3;
      } catch (tmp66) {
        closure_6 = tmp66;
        if (tmp4 === c5) {
          c8 = tmp2;
          throw tmp66;
        } else if (tmp === tmp68) {
          c7 = tmp;
        } else {
          c7 = tmp2;
        }
      }
    }
  }), items5);
  const tmp2Result4 = _slicedToArray(CONJURE_DEFAULT_TIER_SETTINGS.useState(null), 2);
  const landingModelChoicesResult = require("ConjureLandingModelChoices").landingModelChoices();
  c13 = landingModelChoicesResult;
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
  closure_15 = obj.useCallback((wizard) => {
    guildId = wizard;
    if (null == wizard.wizard) {
      if (!first) {
        callback((arg0) => wizard(str[24]).startConjureTemplateProject(arg0, wizard), wizard.id).catch(() => {

        });
        const promise = callback((arg0) => wizard(str[24]).startConjureTemplateProject(arg0, wizard), wizard.id);
      }
    } else {
      const obj2 = { key: ConjureTemplateWizardSheet.CONJURE_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: null };
      const obj3 = { template: wizard, guildId, modelSettings: CONJURE_DEFAULT_TIER_SETTINGS, onCreated: callback3 };
      obj2.content = React5(ConjureTemplateWizardSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items8);
  let intl = tmp4(tmp5[17]).intl;
  const items9 = [intl.string(require("module_4121")["9w+Chc"]), , ];
  let intl2 = tmp4(tmp5[17]).intl;
  items9[1] = intl2.string(require("module_4121").WAvmdq);
  const intl3 = tmp4(tmp5[17]).intl;
  items9[2] = intl3.string(require("module_4121").SKsrzl);
  let obj5 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj6 = { title: null };
  const intl4 = tmp4(tmp5[17]).intl;
  obj6.title = intl4.string(require("module_4121")["+5XyCR"]);
  obj5.header = c8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj6);
  let obj7 = { style: tmp.content, children: null };
  let obj8 = { style: tmp.form, children: null };
  let obj9 = { placeholder: null, autoComplete: "off", value: null, onChange: null, disabled: null };
  const intl5 = tmp4(tmp5[17]).intl;
  obj9.placeholder = intl5.string(require("module_4121").ab1sMf);
  obj9.value = str;
  obj9.disabled = disabled;
  const items10 = [c8(require("TextArea").TextArea, obj9), , , , , ];
  let obj10 = { hasIcons: false, children: null };
  let obj11 = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
  const intl6 = tmp4(tmp5[17]).intl;
  obj11.label = intl6.string(require("module_4121").aBPQxX);
  let obj12 = { variant: "body-md/normal", color: "text-muted", children: null };
  const conjureTemplatesResult = require("ConjureTemplates").conjureTemplates();
  obj12.children = require("ConjureEffortTiers").conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier);
  obj11.trailing = c8(require("Text/Text").Text, obj12);
  obj11.disabled = disabled;
  obj11.onPress = callback2;
  obj10.children = c8(require("TableRow").TableRow, obj11);
  items10[1] = c8(require("TableRowGroup").TableRowGroup, obj10);
  let tmp22Result = null;
  if (null != tmp16) {
    let str2 = "text-muted";
    if (0 === tmp16) {
      str2 = "text-feedback-warning";
    }
    let obj13 = { variant: "body-sm/normal", color: str2, children: tmp4(tmp5[33]).conjureAppSlotsLeftLabel(tmp16) };
    tmp22Result = tmp22(tmp4(tmp5[31]).Text, obj13);
    const tmp4Result6 = tmp4(tmp5[33]);
  }
  items10[2] = tmp22Result;
  let tmp22Result2 = null;
  if (null != tmp14) {
    let obj14 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp14 };
    tmp22Result2 = tmp22(tmp4(tmp5[31]).Text, obj14);
  }
  items10[3] = tmp22Result2;
  let obj15 = { variant: "body-xs/normal", color: "text-muted", children: null };
  const intl7 = tmp4(tmp5[17]).intl;
  obj15.children = intl7.string(require("module_4121").NvvCzX);
  items10[4] = c8(require("Text/Text").Text, obj15);
  let obj16 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
  const intl8 = tmp4(tmp5[17]).intl;
  obj16.text = intl8.string(require("util").t.CumH4u);
  obj16.disabled = "" === str.trim();
  obj16.loading = disabled;
  obj16.onPress = function onPress() {
    return closure_10();
  };
  items10[5] = c8(require("components/Button/Button").Button, obj16);
  obj8.children = items10;
  const items11 = [callback(disabled, obj8), , , ];
  let obj17 = { style: tmp.section, children: null };
  let obj18 = { style: tmp.sectionHeading, children: null };
  let obj19 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl9 = tmp4(tmp5[17]).intl;
  obj19.children = intl9.string(require("module_4121").I7nPgX);
  const items12 = [c8(require("Text/Text").Text, obj19), ];
  const obj20 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl10 = tmp4(tmp5[17]).intl;
  obj20.children = intl10.string(require("module_4121").FXB8wQ);
  items12[1] = c8(require("Text/Text").Text, obj20);
  obj18.children = items12;
  const items13 = [callback(disabled, obj18), ];
  const obj21 = { hasIcons: false, children: null };
  const obj22 = { label: null, arrow: true, disabled: null, onPress: null };
  const intl11 = tmp4(tmp5[17]).intl;
  obj22.label = intl11.string(require("module_4121")["C8/T2E"]);
  obj22.disabled = disabled;
  obj22.onPress = function onPress() {
    closure_12().catch(() => {

    });
  };
  obj21.children = c8(require("TableRow").TableRow, obj22);
  items13[1] = c8(require("TableRowGroup").TableRowGroup, obj21);
  obj17.children = items13;
  items11[1] = callback(disabled, obj17);
  const obj23 = { style: tmp.section, children: null };
  const obj24 = { style: tmp.sectionHeading, children: null };
  const obj25 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl12 = tmp4(tmp5[17]).intl;
  obj25.children = intl12.string(require("module_4121").zzYLlW);
  const items14 = [c8(require("Text/Text").Text, obj25), ];
  const obj26 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl13 = tmp4(tmp5[17]).intl;
  obj26.children = intl13.string(require("module_4121")["N88+Ld"]);
  items14[1] = c8(require("Text/Text").Text, obj26);
  obj24.children = items14;
  const items15 = [callback(disabled, obj24), ];
  const tmp4Result5 = require("ConjureEffortTiers");
  items15[1] = c8(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[17]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(closure_1(str[18]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_15(closure_0);
      };
      return _undefined(guildId(str[30]).TableRow, obj, name.id);
    })
  });
  obj23.children = items15;
  items11[2] = callback(disabled, obj23);
  const obj28 = { style: tmp.section, children: null };
  const obj29 = { style: tmp.sectionHeading, children: null };
  const obj30 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl14 = tmp4(tmp5[17]).intl;
  obj30.children = intl14.string(require("module_4121")["2XcV3x"]);
  const items16 = [c8(require("Text/Text").Text, obj30), ];
  const obj31 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl15 = tmp4(tmp5[17]).intl;
  obj31.children = intl15.string(require("module_4121").JnJOAn);
  items16[1] = c8(require("Text/Text").Text, obj31);
  obj29.children = items16;
  const items17 = [callback(disabled, obj29), ];
  const obj27 = {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[17]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(closure_1(str[18]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_15(closure_0);
      };
      return _undefined(guildId(str[30]).TableRow, obj, name.id);
    })
  };
  items17[1] = c8(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: items9.map((label) => {
      guildId = label;
      return _undefined(guildId(str[30]).TableRow, {
        label,
        arrow: true,
        disabled,
        onPress() {
          return closure_10(closure_0);
        }
      }, label);
    })
  });
  obj28.children = items17;
  items11[3] = callback(disabled, obj28);
  obj7.children = items11;
  obj5.children = callback(disabled, obj7);
  return c8(require("ActionSheet").ActionSheet, obj5);
};
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";