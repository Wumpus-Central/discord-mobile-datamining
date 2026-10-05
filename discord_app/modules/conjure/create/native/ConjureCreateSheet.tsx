// === Module 16552: ConjureCreateSheet ===

// Module 16552 (ConjureCreateSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6694 */;
import ConjureTypes from "ConjureTypes" /* 6747 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 16556 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 16560 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;

require = fn;
const View = fn(17).View;
const ConjureConnectionStore = fn(12904);
({ ensureConnection: closure_7, sendUserMessage: closure_8, stageModelSettings: closure_9 } = ConjureConnectionStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const ConjureCreateSheet = "ConjureCreateSheet";
const createStyles = fn(4890);
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
  let first1;
  c6 = undefined;
  CONJURE_DEFAULT_TIER_SETTINGS = undefined;
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
  const tmp6 = _slicedToArray(first1.useState(true), 2);
  first1 = tmp7;
  if ("guild" === first) {
    first1 = tmp6[0];
  }
  [CONJURE_DEFAULT_TIER_SETTINGS, c6] = _slicedToArray(first1.useState(null), 2);
  if (CONJURE_DEFAULT_TIER_SETTINGS == null) {
    CONJURE_DEFAULT_TIER_SETTINGS = require("ConjureTypes").CONJURE_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result3 = _slicedToArray(first1.useState(false), 2);
  first2 = tmp2Result3[0];
  closure_9 = tmp2Result3[1];
  const tmp2Result = _slicedToArray(first1.useState(null), 2);
  [tmp15, c10] = _slicedToArray(first1.useState(null), 2);
  const tmp18 = onCreated(str[9])();
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
              closure_1_9(true);
              _undefined(null);
              c4 = 2;
              const obj5 = { guild_id, install_scope, flags: null };
              const obj7 = guild_id(str[10]);
              obj5.flags = guild_id(str[8]).conjureCreateFlags(c5);
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
              _undefined(guild_id(str[12]).getConjureCreateErrorMessage(closure_129_2));
              c4 = 0;
              closure_1_9(false);
              c6 = 3;
              const obj2 = guild_id(str[12]);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_1 = value;
              CONJURE_DEFAULT_TIER_SETTINGS(closure_129_1);
              closure_9(closure_129_1, closure_1_7);
              closure_129_0(closure_129_1);
              onCreated(str[11]).hideActionSheet(closure_12);
              closure_1(closure_129_1, guild_id);
              c4 = 1;
              const obj6 = onCreated(str[11]);
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
  let items = [guildId, first, CONJURE_DEFAULT_TIER_SETTINGS, first1, onCreated];
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
        return { value: "IconComponent", done: null };
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
  const items2 = [guildId, first, CONJURE_DEFAULT_TIER_SETTINGS, first1, onCreated, first2];
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
            if (!first2) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: guildId(tmp89[13]).pickConjureArchive(), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp9) {
          c3 = 0;
          const intl2 = guildId(tmp89[14]).intl;
          closure_129_10(intl2.string(tmp4(tmp89[15])["Q+l4Hv"]));
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
                closure_128_1 = guildId(tmp89[13]).describeConjureArchiveRejection(closure_128_0);
                if (null == closure_128_1) {
                  closure_129_9(true);
                  closure_129_10(null);
                  closure_128_2 = null;
                  c3 = 3;
                  const obj12 = { guild_id: closure_129_0, install_scope: closure_129_3, flags: null };
                  const obj9 = guildId(tmp89[10]);
                  obj12.flags = guildId(tmp89[8]).conjureCreateFlags(closure_129_5);
                  c4 = 5;
                  c5 = 1;
                  const obj13 = { value: obj9.createProject(obj12), done: false };
                  return obj13;
                } else {
                  closure_129_10(closure_128_1);
                }
                const obj20 = guildId(tmp89[13]);
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
                closure_129_10(guildId(tmp89[12]).getConjureCreateErrorMessage(closure_128_3));
                const obj6 = guildId(tmp89[12]);
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
                CONJURE_DEFAULT_TIER_SETTINGS(closure_128_2);
                closure_1_9(closure_128_2, closure_129_7);
                const intl3 = guildId(tmp89[14]).intl;
                c4 = 6;
                c5 = 1;
                const obj16 = { value: guildId(tmp89[13]).sendConjureArchiveImport(closure_128_2, closure_128_0, intl3.string(tmp4(tmp89[15])["LUc7/5"])), done: false };
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
                tmp4(tmp89[11]).hideActionSheet(closure_1_12);
                closure_129_1(closure_128_2, closure_129_0);
                c3 = 2;
                const obj2 = tmp4(tmp89[11]);
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
              const intl = guildId(tmp89[14]).intl;
              closure_129_10(intl.string(tmp4(tmp89[15])["Q+l4Hv"]));
            }
            c3 = 0;
            closure_129_9(false);
          }
          const obj7 = guildId(tmp89[10]);
          c4 = 7;
          c5 = 1;
          const obj18 = {
            value: guildId(tmp89[10]).deleteProject(closure_128_2).catch(() => {

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
  const stringResult = intl.string(onCreated(str[15]).NyVn6T);
  c14 = stringResult;
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
        label: closure_15[item],
        onPress() {
          return closure_2_4(closure_0);
        }
      };
    });
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items3);
  const tmp2Result4 = _slicedToArray(first1.useState(null), 2);
  const landingModelChoicesResult = require("ConjureLandingModelChoices").landingModelChoices();
  c16 = landingModelChoicesResult;
  const items4 = [landingModelChoicesResult, CONJURE_DEFAULT_TIER_SETTINGS];
  const callback2 = obj.useCallback(() => {
    const obj2 = { key: ConjureEffortPicker.CONJURE_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: null };
    const obj = ActionSheetActionCreators;
    obj2.content = v65535(ConjureEffortPicker.ConjureEffortPickerSheet, { initialSettings: CONJURE_DEFAULT_TIER_SETTINGS, tiers: ConjureTypes.CONJURE_LANDING_TIER_SEATS, choices, onChange });
    obj.showActionSheet(obj2);
  }, items4);
  let obj2 = require("ConjureLandingModelChoices");
  let obj3 = require("ConjureTemplates");
  const items5 = [onCreated];
  callback3 = obj.useCallback((arg0, arg1) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureCreateSheet);
    onCreated(arg0, arg1);
  }, items5);
  const items6 = [callback, guildId, callback3, CONJURE_DEFAULT_TIER_SETTINGS, first1, first2];
  closure_18 = obj.useCallback((wizard) => {
    guildId = wizard;
    if (null == wizard.wizard) {
      if (!first2) {
        callback((arg0) => wizard(str[19]).startConjureTemplateProject(arg0, wizard)).catch(() => {

        });
        const promise = callback((arg0) => wizard(str[19]).startConjureTemplateProject(arg0, wizard));
      }
    } else {
      const obj2 = { key: ConjureTemplateWizardSheet.CONJURE_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: null };
      const obj3 = { template: wizard, guildId, modelSettings: CONJURE_DEFAULT_TIER_SETTINGS, nativeAppChannels: first1, onCreated: callback3 };
      obj2.content = v65535(ConjureTemplateWizardSheetDefault, obj3);
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
  obj4.header = c10(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj5);
  let obj6 = { style: tmp.content, children: null };
  let obj7 = { style: tmp.form, children: null };
  let obj8 = { placeholder: null, autoComplete: "off", value: null, onChange: null, disabled: null };
  const intl6 = require("util").intl;
  obj8.placeholder = intl6.string(onCreated(str[15]).ab1sMf);
  obj8.value = str;
  obj8.disabled = first2;
  const items8 = [c10(require("TextArea").TextArea, obj8), , , , , , ];
  let obj9 = { hasIcons: false, children: null };
  let obj10 = { label: stringResult, trailing: c10(require("Text/Text").Text, { variant: "text-md/normal", color: "text-muted", children: memo[first] }), arrow: true, disabled: first2, onPress: callback1 };
  obj9.children = c10(require("TableRow").TableRow, obj10);
  items8[1] = c10(require("TableRowGroup").TableRowGroup, obj9);
  let tmp27Result = null;
  if ("guild" === first) {
    let obj12 = { hasIcons: false, children: null };
    let obj13 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl7 = tmp20(tmp17[14]).intl;
    obj13.label = intl7.string(tmp16(tmp17[15]).qfAk5B);
    const intl8 = tmp20(tmp17[14]).intl;
    obj13.subLabel = intl8.string(tmp16(tmp17[15])["mq+Pml"]);
    obj13.checked = first1;
    obj13.disabled = first2;
    obj13.onPress = tmp6[1];
    obj12.children = tmp27(tmp20(tmp17[27]).TableCheckboxRow, obj13);
    tmp27Result = tmp27(tmp20(tmp17[24]).TableRowGroup, obj12);
  }
  items8[2] = tmp27Result;
  let obj14 = { hasIcons: false, children: null };
  const obj15 = { label: null, trailing: null, arrow: true, disabled: null, onPress: null };
  const intl9 = tmp20(tmp17[14]).intl;
  obj15.label = intl9.string(onCreated(str[15]).aBPQxX);
  let obj16 = { variant: "text-md/normal", color: "text-muted", children: null };
  const conjureTemplatesResult = require("ConjureTemplates").conjureTemplates();
  const obj11 = { variant: "text-md/normal", color: "text-muted", children: memo[first] };
  obj16.children = require("ConjureEffortTiers").conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier);
  obj15.trailing = c10(require("Text/Text").Text, obj16);
  obj15.disabled = first2;
  obj15.onPress = callback2;
  obj14.children = c10(require("TableRow").TableRow, obj15);
  items8[3] = c10(require("TableRowGroup").TableRowGroup, obj14);
  let tmp27Result3 = null;
  if (null != tmp18) {
    let str2 = "text-muted";
    if (0 === tmp18) {
      str2 = "text-feedback-warning";
    }
    let obj17 = { variant: "text-sm/normal", color: str2, children: tmp20(tmp17[29]).conjureAppSlotsLeftLabel(tmp18) };
    tmp27Result3 = tmp27(tmp20(tmp17[26]).Text, obj17);
    const tmp20Result2 = tmp20(tmp17[29]);
  }
  items8[4] = tmp27Result3;
  let tmp27Result4 = null;
  if (null != tmp15) {
    let obj18 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp15 };
    tmp27Result4 = tmp27(tmp20(tmp17[26]).Text, obj18);
  }
  items8[5] = tmp27Result4;
  const obj19 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
  const intl10 = tmp20(tmp17[14]).intl;
  obj19.text = intl10.string(require("util").t.CumH4u);
  obj19.disabled = "" === str.trim();
  obj19.loading = first2;
  obj19.onPress = function onPress() {
    return closure_12();
  };
  items8[6] = c10(require("components/Button/Button").Button, obj19);
  obj7.children = items8;
  const items9 = [callback(c6, obj7), , , ];
  let obj20 = { style: tmp.section, children: null };
  const obj21 = { style: tmp.sectionHeading, children: null };
  const obj22 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl11 = tmp20(tmp17[14]).intl;
  obj22.children = intl11.string(onCreated(str[15]).I7nPgX);
  const items10 = [c10(require("Text/Text").Text, obj22), ];
  const obj23 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl12 = tmp20(tmp17[14]).intl;
  obj23.children = intl12.string(onCreated(str[15]).FXB8wQ);
  items10[1] = c10(require("Text/Text").Text, obj23);
  obj21.children = items10;
  const items11 = [callback(c6, obj21), ];
  const obj24 = { hasIcons: false, children: null };
  const obj25 = { label: null, arrow: true, disabled: null, onPress: null };
  const intl13 = tmp20(tmp17[14]).intl;
  obj25.label = intl13.string(onCreated(str[15])["C8/T2E"]);
  obj25.disabled = first2;
  obj25.onPress = function onPress() {
    closure_13().catch(() => {

    });
  };
  obj24.children = c10(require("TableRow").TableRow, obj25);
  items11[1] = c10(require("TableRowGroup").TableRowGroup, obj24);
  obj20.children = items11;
  items9[1] = callback(c6, obj20);
  const obj26 = { style: tmp.section, children: null };
  const obj27 = { style: tmp.sectionHeading, children: null };
  const obj28 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl14 = tmp20(tmp17[14]).intl;
  obj28.children = intl14.string(onCreated(str[15]).zzYLlW);
  const items12 = [c10(require("Text/Text").Text, obj28), ];
  const obj29 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl15 = tmp20(tmp17[14]).intl;
  obj29.children = intl15.string(onCreated(str[15])["N88+Ld"]);
  items12[1] = c10(require("Text/Text").Text, obj29);
  obj27.children = items12;
  const items13 = [callback(c6, obj27), ];
  const tmp20Result = require("ConjureEffortTiers");
  items13[1] = c10(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled: first2, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[14]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[15]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_18(closure_0);
      };
      return _undefined(guildId(str[25]).TableRow, obj, name.id);
    })
  });
  obj26.children = items13;
  items9[2] = callback(c6, obj26);
  const obj31 = { style: tmp.section, children: null };
  const obj32 = { style: tmp.sectionHeading, children: null };
  const obj33 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl16 = tmp20(tmp17[14]).intl;
  obj33.children = intl16.string(onCreated(str[15])["2XcV3x"]);
  const items14 = [c10(require("Text/Text").Text, obj33), ];
  const obj34 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl17 = tmp20(tmp17[14]).intl;
  obj34.children = intl17.string(onCreated(str[15]).JnJOAn);
  items14[1] = c10(require("Text/Text").Text, obj34);
  obj32.children = items14;
  const items15 = [callback(c6, obj32), ];
  const obj30 = {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      guildId = name;
      const obj = { label: name.name, subLabel: name.description, arrow: true, disabled: first2, accessibilityLabel: null, onPress: null };
      const intl = guildId(str[14]).intl;
      obj.accessibilityLabel = intl.formatToPlainString(onCreated(str[15]).jGyR6p, { name: name.name });
      obj.onPress = function onPress() {
        return closure_18(closure_0);
      };
      return _undefined(guildId(str[25]).TableRow, obj, name.id);
    })
  };
  items15[1] = c10(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: items7.map((label) => {
      guildId = label;
      return _undefined(guildId(str[25]).TableRow, {
        label,
        arrow: true,
        disabled: first2,
        onPress() {
          return closure_12(closure_0);
        }
      }, label);
    })
  });
  obj31.children = items15;
  items9[3] = callback(c6, obj31);
  obj6.children = items9;
  obj4.children = callback(c6, obj6);
  return c10(require("ActionSheet").ActionSheet, obj4);
};
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";