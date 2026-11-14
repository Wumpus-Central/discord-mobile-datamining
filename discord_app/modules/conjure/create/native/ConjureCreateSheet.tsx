// === Module 13982: ConjureCreateSheet ===

// Module 13982 (ConjureCreateSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5552 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 13258 */;
import ConjureLandingModelChoices from "ConjureLandingModelChoices" /* 13974 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 13988 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;

require = fn;
const View = fn(17).View;
const sendUserMessage = fn(7365).sendUserMessage;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const ConjureCreateSheet = "ConjureCreateSheet";
const createStyles = fn(5306);
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
  let onCreated = guildId.onCreated;
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
  disabled = tmp2Result[0];
  closure_7 = tmp2Result[1];
  let tmp8 = _slicedToArray(CONJURE_DEFAULT_TIER_SETTINGS.useState(null), 2);
  [tmp12, c8] = _slicedToArray(CONJURE_DEFAULT_TIER_SETTINGS.useState(null), 2);
  const tmp14 = onCreated(tmp5[12])();
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
              const obj6 = { value: onCreated(str[13])(obj5), done: false };
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
              onCreated(str[14]).hideActionSheet(closure_10);
              templateId(closure_130_1, guildId);
              modelSettings = 1;
              const obj = onCreated(str[14]);
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
  items = [guildId, CONJURE_DEFAULT_TIER_SETTINGS, onCreated];
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
            onCreated = closure_0;
            if (closure_0 == null) {
              onCreated = c2;
            }
            const trimmed = onCreated.trim();
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
  const items1 = [callback, str, disabled];
  closure_10 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
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
          const obj3 = { value, done: true };
          return obj3;
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
              closure_130_1 = null;
              modelSettings = 2;
              const obj5 = { guildId, installScope, modelSettings };
              c6 = 3;
              v3 = 1;
              const obj8 = { value: onCreated(str[13])(obj5), done: false };
              return obj8;
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
                const obj7 = guildId(str[19]);
                c6 = 5;
                v3 = 1;
                const obj9 = {
                  value: guildId(str[19]).deleteProject(closure_130_1).catch(() => {

                            }),
                  done: false
                };
                return obj9;
              } else {
                _undefined(guildId(str[15]).getConjureCreateErrorMessage(closure_130_2));
                modelSettings = 0;
                v3(false);
                v3 = 3;
                const obj6 = guildId(str[15]);
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
                const obj11 = { value: guildId(str[16]).sendConjureArchiveImport(closure_130_1, closure_130_0, intl2.string(onCreated(str[18])["LUc7/5"])), done: false };
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
                const obj13 = { value, done: true };
                return obj13;
              } else {
                onCreated(str[14]).hideActionSheet(closure_10);
                installScope(closure_130_1, guildId);
                modelSettings = 1;
                const obj2 = onCreated(str[14]);
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              const intl = guildId(str[17]).intl;
              _undefined(intl.string(onCreated(str[18])["Q+l4Hv"]));
            }
            modelSettings = 0;
            v3(false);
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp59) {
          closure_4 = tmp59;
          if (tmp5 === modelSettings) {
            v3 = tmp3;
            throw tmp59;
          } else if (tmp2 === tmp61) {
            c6 = tmp2;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [guildId, CONJURE_DEFAULT_TIER_SETTINGS, onCreated];
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
  const items3 = [result, callback1, disabled];
  closure_12 = obj.useCallback(asyncGeneratorStep(async () => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = undefined;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            if (!first) {
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj5 = { value: _null(13311).pickConjureArchive(), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp7) {
          c5 = 0;
          const intl2 = _null(1113).intl;
          closure_132_8(intl2.string(onCreated(4131)["Q+l4Hv"]));
          c7 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_131_0 = value;
              c5 = 0;
              if (null != closure_131_0) {
                closure_131_1 = _null(13311).describeConjureArchiveRejection(closure_131_0);
                if (null == closure_131_1) {
                  closure_131_2 = closure_131_0;
                  const tmp38 = _null(13985);
                  dependencyMap = tmp38;
                  onCreated = tmp38.importedConjureInstallScope;
                  c6 = 3;
                  c7 = 1;
                  const obj9 = { value: _null(13985).readConjureArchiveInstallScope(closure_131_2.bytes), done: false };
                  return obj9;
                } else {
                  closure_132_8(closure_131_1);
                }
                const obj15 = _null(13311);
              }
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              const tmp63 = onCreated(value, closure_132_3);
              _null = tmp63;
              if (tmp63 == null) {
                let tmp10 = "user";
                if (closure_132_3) {
                  tmp10 = null;
                }
                _null = tmp10;
              }
              closure_131_3 = _null;
              if (null == closure_131_3) {
                const obj10 = { key: "ConjureImportInstallScope", stackingBehavior: "stack", header: null, hasIcons: false, options: null };
                const obj12 = { title: null };
                let intl = _null(1113).intl;
                obj12.title = intl.string(onCreated(4131).NyVn6T);
                obj10.header = obj12;
                items = ["guild", "user"];
                obj10.options = items.map((item) => {
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
                const result = _null(7949).showSimpleActionSheet(obj10);
                const obj3 = _null(7949);
              } else {
                c6 = 4;
                c7 = 1;
                const obj13 = { value: closure_132_11(closure_131_2, closure_131_3), done: false };
                return obj13;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c7 = 3;
          const obj14 = { value, done: true };
          return obj14;
        }
        c7 = 3;
      } catch (tmp52) {
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp52;
        } else {
          c6 = tmp;
        }
      }
    }
  }), items3);
  const tmp2Result2 = _slicedToArray(CONJURE_DEFAULT_TIER_SETTINGS.useState(null), 2);
  const landingModelChoicesResult = require("ConjureLandingModelChoices").landingModelChoices();
  c13 = landingModelChoicesResult;
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
  callback3 = obj.useCallback((arg0, arg1) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureCreateSheet);
    onCreated(arg0, arg1);
  }, items5);
  const items6 = [callback, guildId, callback3, CONJURE_DEFAULT_TIER_SETTINGS, disabled];
  closure_15 = obj.useCallback((wizard) => {
    guildId = wizard;
    if (null == wizard.wizard) {
      if (!first) {
        callback((arg0) => wizard(str[23]).startConjureTemplateProject(arg0, wizard), wizard.id).catch(() => {

        });
        const promise = callback((arg0) => wizard(str[23]).startConjureTemplateProject(arg0, wizard), wizard.id);
      }
    } else {
      const obj2 = { key: ConjureTemplateWizardSheet.CONJURE_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: null };
      const obj3 = { template: wizard, guildId, modelSettings: CONJURE_DEFAULT_TIER_SETTINGS, onCreated: callback3 };
      obj2.content = React5(ConjureTemplateWizardSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items6);
  let intl = tmp4(tmp5[17]).intl;
  const items7 = [intl.string(onCreated(tmp5[18])["9w+Chc"]), , ];
  let intl2 = tmp4(tmp5[17]).intl;
  items7[1] = intl2.string(onCreated(tmp5[18]).WAvmdq);
  const intl3 = tmp4(tmp5[17]).intl;
  items7[2] = intl3.string(onCreated(tmp5[18]).SKsrzl);
  let obj5 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj6 = { title: null };
  const intl4 = tmp4(tmp5[17]).intl;
  obj6.title = intl4.string(onCreated(tmp5[18])["+5XyCR"]);
  obj5.header = c8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj6);
  let obj7 = { style: tmp.content, children: null };
  let obj8 = { style: tmp.form, children: null };
  let obj9 = { placeholder: null, autoComplete: "off", value: null, onChange: null, disabled: null };
  const intl5 = tmp4(tmp5[17]).intl;
  obj9.placeholder = intl5.string(onCreated(tmp5[18]).ab1sMf);
  obj9.value = str;
  obj9.disabled = disabled;
  const items8 = [c8(require("TextArea").TextArea, obj9), , , , , ];
  let obj10 = { hasIcons: false, children: null };
  let obj11 = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
  const intl6 = tmp4(tmp5[17]).intl;
  obj11.label = intl6.string(onCreated(tmp5[18]).aBPQxX);
  let obj12 = { variant: "body-md/normal", color: "text-muted", children: null };
  const conjureTemplatesResult = require("ConjureTemplates").conjureTemplates();
  obj12.children = require("ConjureEffortTiers").conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier);
  obj11.trailing = c8(require("Text/Text").Text, obj12);
  obj11.disabled = disabled;
  obj11.onPress = callback2;
  obj10.children = c8(require("TableRow").TableRow, obj11);
  items8[1] = c8(require("TableRowGroup").TableRowGroup, obj10);
  let tmp20Result = null;
  if (null != tmp14) {
    let str2 = "text-muted";
    if (0 === tmp14) {
      str2 = "text-feedback-warning";
    }
    let obj13 = { variant: "body-sm/normal", color: str2, children: tmp4(tmp5[32]).conjureAppSlotsLeftLabel(tmp14) };
    tmp20Result = tmp20(tmp4(tmp5[30]).Text, obj13);
    const tmp4Result6 = tmp4(tmp5[32]);
  }
  items8[2] = tmp20Result;
  let tmp20Result2 = null;
  if (null != tmp12) {
    let obj14 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp12 };
    tmp20Result2 = tmp20(tmp4(tmp5[30]).Text, obj14);
  }
  items8[3] = tmp20Result2;
  let obj15 = { variant: "body-xs/normal", color: "text-muted", children: null };
  const intl7 = tmp4(tmp5[17]).intl;
  obj15.children = intl7.string(onCreated(tmp5[18]).NvvCzX);
  items8[4] = c8(require("Text/Text").Text, obj15);
  const obj16 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
  const intl8 = tmp4(tmp5[17]).intl;
  obj16.text = intl8.string(require("util").t.CumH4u);
  obj16.disabled = "" === str.trim();
  obj16.loading = disabled;
  obj16.onPress = function onPress() {
    return closure_10();
  };
  items8[5] = c8(require("components/Button/Button").Button, obj16);
  obj8.children = items8;
  const items9 = [callback(disabled, obj8), , , ];
  const obj17 = { style: tmp.section, children: null };
  const obj18 = { style: tmp.sectionHeading, children: null };
  const obj19 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl9 = tmp4(tmp5[17]).intl;
  obj19.children = intl9.string(onCreated(tmp5[18]).I7nPgX);
  const items10 = [c8(require("Text/Text").Text, obj19), ];
  const obj20 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl10 = tmp4(tmp5[17]).intl;
  obj20.children = intl10.string(onCreated(tmp5[18]).FXB8wQ);
  items10[1] = c8(require("Text/Text").Text, obj20);
  obj18.children = items10;
  const items11 = [callback(disabled, obj18), ];
  const obj21 = { hasIcons: false, children: null };
  const obj22 = { label: null, arrow: true, disabled: null, onPress: null };
  const intl11 = tmp4(tmp5[17]).intl;
  obj22.label = intl11.string(onCreated(tmp5[18])["C8/T2E"]);
  obj22.disabled = disabled;
  obj22.onPress = function onPress() {
    closure_12().catch(() => {

    });
  };
  obj21.children = c8(require("TableRow").TableRow, obj22);
  items11[1] = c8(require("TableRowGroup").TableRowGroup, obj21);
  obj17.children = items11;
  items9[1] = callback(disabled, obj17);
  const obj23 = { style: tmp.section, children: null };
  const obj24 = { style: tmp.sectionHeading, children: null };
  const obj25 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl12 = tmp4(tmp5[17]).intl;
  obj25.children = intl12.string(onCreated(tmp5[18]).zzYLlW);
  const items12 = [c8(require("Text/Text").Text, obj25), ];
  const obj26 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl13 = tmp4(tmp5[17]).intl;
  obj26.children = intl13.string(onCreated(tmp5[18])["N88+Ld"]);
  items12[1] = c8(require("Text/Text").Text, obj26);
  obj24.children = items12;
  const items13 = [callback(disabled, obj24), ];
  const tmp4Result5 = require("ConjureEffortTiers");
  items13[1] = c8(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[17]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[18]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_15(closure_0);
      };
      return _undefined(guildId(str[29]).TableRow, obj, name.id);
    })
  });
  obj23.children = items13;
  items9[2] = callback(disabled, obj23);
  const obj28 = { style: tmp.section, children: null };
  const obj29 = { style: tmp.sectionHeading, children: null };
  const obj30 = { variant: "body-md/medium", color: "text-default", children: null };
  const intl14 = tmp4(tmp5[17]).intl;
  obj30.children = intl14.string(onCreated(tmp5[18])["2XcV3x"]);
  const items14 = [c8(require("Text/Text").Text, obj30), ];
  const obj31 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl15 = tmp4(tmp5[17]).intl;
  obj31.children = intl15.string(onCreated(tmp5[18]).JnJOAn);
  items14[1] = c8(require("Text/Text").Text, obj31);
  obj29.children = items14;
  const items15 = [callback(disabled, obj29), ];
  const obj27 = {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[17]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[18]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_15(closure_0);
      };
      return _undefined(guildId(str[29]).TableRow, obj, name.id);
    })
  };
  items15[1] = c8(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: items7.map((label) => {
      guildId = label;
      return _undefined(guildId(str[29]).TableRow, {
        label,
        arrow: true,
        disabled,
        onPress() {
          return closure_10(closure_0);
        }
      }, label);
    })
  });
  obj28.children = items15;
  items9[3] = callback(disabled, obj28);
  obj7.children = items9;
  obj5.children = callback(disabled, obj7);
  return c8(require("ActionSheet").ActionSheet, obj5);
};
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";