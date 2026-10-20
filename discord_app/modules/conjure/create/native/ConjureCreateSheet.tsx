// === Module 11627: ConjureCreateSheet ===

// Module 11627 (ConjureCreateSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5171 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7240 */;
import ConjureLandingModelChoices from "ConjureLandingModelChoices" /* 11630 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 11647 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 11652 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;

require = fn;
const View = fn(17).View;
const ConjureConnectionStore = fn(11001);
({ ensureConnection: closure_7, sendUserMessage: closure_8, stageModelSettings: closure_9 } = ConjureConnectionStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const ConjureCreateSheet = "ConjureCreateSheet";
const createStyles = fn(4945);
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
  ({ initialInstallScope, onCreated } = guildId);
  str = undefined;
  _slicedToArray = undefined;
  let str3;
  c6 = undefined;
  CONJURE_DEFAULT_TIER_SETTINGS = undefined;
  let disabled;
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
  [str, obj8.onChange] = str3.useState("");
  const tmp5 = str;
  let obj2 = require("conjureCreateForm");
  let result = obj2.isConjureEligibleGuild(require("useConjureProjects").useConjureEligibleGuilds("ConjureCreateSheet"), guildId);
  asyncGeneratorStep = result;
  if (initialInstallScope == null) {
    initialInstallScope = null;
  }
  let obj3 = require("useConjureProjects");
  [str2, c4] = _slicedToArray(str3.useState(initialInstallScope), 2);
  str3 = "user";
  if (result) {
    str3 = str2;
  }
  const tmp2Result = _slicedToArray(str3.useState(initialInstallScope), 2);
  [CONJURE_DEFAULT_TIER_SETTINGS, c6] = _slicedToArray(str3.useState(null), 2);
  if (CONJURE_DEFAULT_TIER_SETTINGS == null) {
    CONJURE_DEFAULT_TIER_SETTINGS = tmp4(tmp5[10]).CONJURE_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result5 = _slicedToArray(str3.useState(false), 2);
  disabled = tmp2Result5[0];
  closure_9 = tmp2Result5[1];
  const tmp2Result4 = _slicedToArray(str3.useState(null), 2);
  [tmp12, c10] = _slicedToArray(str3.useState(null), 2);
  const tmp14 = onCreated(tmp5[11])();
  asyncGeneratorStep(async (guild_id, arg1) => {
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
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
              closure_3 = tmp4;
              closure_2 = tmp8;
              closure_130_0 = guild_id;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              closure_1_9(true);
              _undefined(null);
              install_scope = 2;
              const obj5 = { guild_id, install_scope };
              c6 = 3;
              c7 = 1;
              const obj6 = { value: guild_id(str[12]).createProject(obj5), done: false };
              return obj6;
            }
          } else if (1 === tmp8) {
            install_scope = 0;
            closure_1_9(false);
            throw closure_4;
          } else {
            if (2 === tmp8) {
              install_scope = 1;
              closure_130_3 = closure_4;
              _undefined(guild_id(str[14]).getConjureCreateErrorMessage(closure_130_3));
              install_scope = 0;
              closure_1_9(false);
              c7 = 3;
              const obj2 = guild_id(str[14]);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_130_2 = value;
              const obj9 = { templateId: closure_130_1 };
              CONJURE_DEFAULT_TIER_SETTINGS(closure_130_2, obj9);
              closure_9(closure_130_2, c7);
              closure_130_0(closure_130_2);
              onCreated(str[13]).hideActionSheet(closure_12);
              closure_1(closure_130_2, guild_id);
              install_scope = 1;
              const obj7 = onCreated(str[13]);
            }
            install_scope = 0;
            closure_1_9(false);
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp29) {
          closure_4 = tmp29;
          if (tmp5 === install_scope) {
            c7 = tmp3;
            throw tmp29;
          } else if (tmp2 === tmp31) {
            c6 = tmp2;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const items = [guildId, str3, CONJURE_DEFAULT_TIER_SETTINGS, onCreated];
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
  _require = asyncGeneratorStep(async (arg0) => {
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
              tmp8 = first;
            }
            if (!tmp8) {
              c3 = 1;
              c2 = 1;
              const obj4 = { value: callback((noop) => first(noop, trimmed)), done: false };
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
  const items1 = [callback, str, disabled];
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
  const items2 = [guildId, str3, CONJURE_DEFAULT_TIER_SETTINGS, onCreated, disabled];
  closure_13 = obj.useCallback(asyncGeneratorStep(async () => {
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
            if (!first) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: guildId(tmp86[15]).pickConjureArchive(), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp9) {
          c3 = 0;
          const intl2 = guildId(tmp86[16]).intl;
          closure_129_10(intl2.string(tmp4(tmp86[17])["Q+l4Hv"]));
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
                closure_128_1 = guildId(tmp86[15]).describeConjureArchiveRejection(closure_128_0);
                if (null == closure_128_1) {
                  closure_129_9(true);
                  closure_129_10(null);
                  closure_128_2 = null;
                  c3 = 3;
                  const obj11 = { guild_id: closure_129_0, install_scope: closure_129_5 };
                  c4 = 5;
                  c5 = 1;
                  const obj12 = { value: guildId(tmp86[12]).createProject(obj11), done: false };
                  return obj12;
                } else {
                  closure_129_10(closure_128_1);
                }
                const obj19 = guildId(tmp86[15]);
              }
            }
          } else if (3 === tmp9) {
            c3 = 0;
            closure_129_9(false);
            throw tmp86;
          } else {
            if (4 === tmp9) {
              c3 = 2;
              closure_128_3 = tmp86;
              if (null == closure_128_2) {
                closure_129_10(guildId(tmp86[14]).getConjureCreateErrorMessage(closure_128_3));
                const obj6 = guildId(tmp86[14]);
              }
            } else if (5 === tmp9) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_9(false);
                c5 = 3;
                const obj13 = { value, done: true };
                return obj13;
              } else {
                closure_128_2 = value;
                CONJURE_DEFAULT_TIER_SETTINGS(closure_128_2);
                closure_1_9(closure_128_2, closure_129_7);
                const intl3 = guildId(tmp86[16]).intl;
                c4 = 6;
                c5 = 1;
                const obj15 = { value: guildId(tmp86[15]).sendConjureArchiveImport(closure_128_2, closure_128_0, intl3.string(tmp4(tmp86[17])["LUc7/5"])), done: false };
                return obj15;
              }
            } else if (6 === tmp9) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_9(false);
                c5 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                tmp4(tmp86[13]).hideActionSheet(closure_1_12);
                closure_129_1(closure_128_2, closure_129_0);
                c3 = 2;
                const obj2 = tmp4(tmp86[13]);
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
              const intl = guildId(tmp86[16]).intl;
              closure_129_10(intl.string(tmp4(tmp86[17])["Q+l4Hv"]));
            }
            c3 = 0;
            closure_129_9(false);
          }
          const obj7 = guildId(tmp86[12]);
          c4 = 7;
          c5 = 1;
          const obj17 = {
            value: guildId(tmp86[12]).deleteProject(closure_128_2).catch(() => {

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
  let intl = tmp4(tmp5[16]).intl;
  const stringResult = intl.string(onCreated(tmp5[17]).NyVn6T);
  c14 = stringResult;
  memo = obj.useMemo(() => {
    const obj = { guild: null, user: null };
    const intl = guildId(str[16]).intl;
    obj.guild = intl.string(onCreated(str[17]).LlLIJw);
    const intl2 = guildId(str[16]).intl;
    obj.user = intl2.string(onCreated(str[17]).s1TsXl);
    return obj;
  }, []);
  const items3 = [result, stringResult, memo];
  const callback1 = obj.useCallback(() => {
    const obj2 = {
      key: "ConjureInstallScope",
      stackingBehavior: "stack",
      header: { title },
      hasIcons: false,
      options: c3 ? ["guild", "user"] : ["user"].map((item) => {
        closure_0 = item;
        return {
          label: closure_15[item],
          onPress() {
            return closure_2_4(closure_0);
          }
        };
      })
    };
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items3);
  const tmp2Result6 = _slicedToArray(str3.useState(null), 2);
  const landingModelChoicesResult = require("ConjureLandingModelChoices").landingModelChoices();
  c16 = landingModelChoicesResult;
  const items4 = [landingModelChoicesResult, CONJURE_DEFAULT_TIER_SETTINGS];
  const callback2 = obj.useCallback(() => {
    const obj2 = { key: ConjureEffortPicker.CONJURE_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: null };
    const obj = ActionSheetActionCreators;
    obj2.content = collapsed(ConjureEffortPicker.ConjureEffortPickerSheet, { initialSettings: CONJURE_DEFAULT_TIER_SETTINGS, tiers: ConjureLandingModelChoices.CONJURE_LANDING_TIER_SEATS, choices, onChange });
    obj.showActionSheet(obj2);
  }, items4);
  const tmp4Result = require("ConjureLandingModelChoices");
  const tmp4Result4 = require("ConjureTemplates");
  const items5 = [onCreated];
  callback3 = obj.useCallback((projectId, id) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureCreateSheet);
    onCreated(projectId, id);
  }, items5);
  const items6 = [callback, guildId, callback3, CONJURE_DEFAULT_TIER_SETTINGS, disabled];
  closure_18 = obj.useCallback((wizard) => {
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
      obj2.content = collapsed(ConjureTemplateWizardSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items6);
  let intl2 = tmp4(tmp5[16]).intl;
  const items7 = [intl2.string(onCreated(tmp5[17])["9w+Chc"]), , ];
  let intl3 = tmp4(tmp5[16]).intl;
  items7[1] = intl3.string(onCreated(tmp5[17]).WAvmdq);
  const intl4 = tmp4(tmp5[16]).intl;
  items7[2] = intl4.string(onCreated(tmp5[17]).SKsrzl);
  let obj4 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj5 = { title: null };
  const intl5 = tmp4(tmp5[16]).intl;
  obj5.title = intl5.string(onCreated(tmp5[17])["+5XyCR"]);
  obj4.header = c10(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj5);
  let obj6 = { style: tmp.content, children: null };
  let obj7 = { style: tmp.form, children: null };
  let obj8 = { placeholder: null, autoComplete: "off", value: null, onChange: null, disabled: null };
  const intl6 = tmp4(tmp5[16]).intl;
  obj8.placeholder = intl6.string(onCreated(tmp5[17]).ab1sMf);
  obj8.value = str;
  obj8.disabled = disabled;
  const items8 = [c10(require("TextArea").TextArea, obj8), , , , , , ];
  let obj9 = { hasIcons: false, children: null };
  let obj10 = { label: stringResult, trailing: c10(require("Text/Text").Text, { variant: "text-md/normal", color: "text-muted", children: memo[str3] }), arrow: true, disabled, onPress: callback1 };
  obj9.children = c10(require("TableRow").TableRow, obj10);
  items8[1] = c10(require("TableRowGroup").TableRowGroup, obj9);
  let obj12 = { hasIcons: false, children: null };
  let obj13 = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
  const intl7 = tmp4(tmp5[16]).intl;
  obj13.label = intl7.string(onCreated(tmp5[17]).aBPQxX);
  const obj14 = { variant: "text-md/normal", color: "text-muted", children: null };
  const conjureTemplatesResult = require("ConjureTemplates").conjureTemplates();
  let obj11 = { variant: "text-md/normal", color: "text-muted", children: memo[str3] };
  obj14.children = require("ConjureEffortTiers").conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier);
  obj13.trailing = c10(require("Text/Text").Text, obj14);
  obj13.disabled = disabled;
  obj13.onPress = callback2;
  obj12.children = c10(require("TableRow").TableRow, obj13);
  items8[2] = c10(require("TableRowGroup").TableRowGroup, obj12);
  let tmp22Result = null;
  if (null != tmp14) {
    let str4 = "text-muted";
    if (0 === tmp14) {
      str4 = "text-feedback-warning";
    }
    let obj15 = { variant: "text-sm/normal", color: str4, children: tmp4(tmp5[29]).conjureAppSlotsLeftLabel(tmp14) };
    tmp22Result = tmp22(tmp4(tmp5[27]).Text, obj15);
    const tmp4Result6 = tmp4(tmp5[29]);
  }
  items8[3] = tmp22Result;
  let tmp22Result2 = null;
  if (null != tmp12) {
    let obj16 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp12 };
    tmp22Result2 = tmp22(tmp4(tmp5[27]).Text, obj16);
  }
  items8[4] = tmp22Result2;
  let obj17 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl8 = tmp4(tmp5[16]).intl;
  obj17.children = intl8.string(onCreated(tmp5[17]).NvvCzX);
  items8[5] = c10(require("Text/Text").Text, obj17);
  const obj18 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
  const intl9 = tmp4(tmp5[16]).intl;
  obj18.text = intl9.string(require("util").t.CumH4u);
  obj18.disabled = "" === str.trim();
  obj18.loading = disabled;
  obj18.onPress = function onPress() {
    return closure_12();
  };
  items8[6] = c10(require("components/Button/Button").Button, obj18);
  obj7.children = items8;
  const items9 = [callback(c6, obj7), , , ];
  let obj19 = { style: tmp.section, children: null };
  const obj20 = { style: tmp.sectionHeading, children: null };
  const obj21 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl10 = tmp4(tmp5[16]).intl;
  obj21.children = intl10.string(onCreated(tmp5[17]).I7nPgX);
  const items10 = [c10(require("Text/Text").Text, obj21), ];
  const obj22 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl11 = tmp4(tmp5[16]).intl;
  obj22.children = intl11.string(onCreated(tmp5[17]).FXB8wQ);
  items10[1] = c10(require("Text/Text").Text, obj22);
  obj20.children = items10;
  const items11 = [callback(c6, obj20), ];
  const obj23 = { hasIcons: false, children: null };
  const obj24 = { label: null, arrow: true, disabled: null, onPress: null };
  const intl12 = tmp4(tmp5[16]).intl;
  obj24.label = intl12.string(onCreated(tmp5[17])["C8/T2E"]);
  obj24.disabled = disabled;
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
  const intl13 = tmp4(tmp5[16]).intl;
  obj27.children = intl13.string(onCreated(tmp5[17]).zzYLlW);
  const items12 = [c10(require("Text/Text").Text, obj27), ];
  const obj28 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl14 = tmp4(tmp5[16]).intl;
  obj28.children = intl14.string(onCreated(tmp5[17])["N88+Ld"]);
  items12[1] = c10(require("Text/Text").Text, obj28);
  obj26.children = items12;
  const items13 = [callback(c6, obj26), ];
  const tmp4Result5 = require("ConjureEffortTiers");
  items13[1] = c10(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[16]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[17]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_18(closure_0);
      };
      return _undefined(guildId(str[26]).TableRow, obj, name.id);
    })
  });
  obj25.children = items13;
  items9[2] = callback(c6, obj25);
  const obj30 = { style: tmp.section, children: null };
  const obj31 = { style: tmp.sectionHeading, children: null };
  const obj32 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl15 = tmp4(tmp5[16]).intl;
  obj32.children = intl15.string(onCreated(tmp5[17])["2XcV3x"]);
  const items14 = [c10(require("Text/Text").Text, obj32), ];
  const obj33 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl16 = tmp4(tmp5[16]).intl;
  obj33.children = intl16.string(onCreated(tmp5[17]).JnJOAn);
  items14[1] = c10(require("Text/Text").Text, obj33);
  obj31.children = items14;
  const items15 = [callback(c6, obj31), ];
  const obj29 = {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[16]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[17]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_18(closure_0);
      };
      return _undefined(guildId(str[26]).TableRow, obj, name.id);
    })
  };
  items15[1] = c10(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: items7.map((label) => {
      guildId = label;
      return _undefined(guildId(str[26]).TableRow, {
        label,
        arrow: true,
        disabled,
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
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";