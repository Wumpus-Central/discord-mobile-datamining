// === Module 16592: ConjureCreateSheet ===

// Module 16592 (ConjureCreateSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4860 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6701 */;
import ConjureTypes from "ConjureTypes" /* 6757 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 16596 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 16600 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 12923 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;
let c2, closure_12, install_scope;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ ensureConnection: metroImportDefault, sendUserMessage: metroImportAll, stageModelSettings: c9 } = ConjureConnectionStore);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const ConjureCreateSheet_str = "ConjureCreateSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, form: obj3, section: obj4, sectionHeading: obj5 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_4 };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/create/native/ConjureCreateSheet.tsx");

export default function ConjureCreateSheet(guildId) {
  let BottomSheetTitleHeader;
  let CONJURE_DEFAULT_TIER_SETTINGS;
  let TableCheckboxRow;
  let TableRow;
  let TableRow2;
  let TableRow3;
  let Text;
  let _undefined;
  let c10;
  let c6;
  let choices;
  let closure_4;
  let first;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items8;
  let items9;
  let obj10;
  let obj11;
  let obj13;
  let obj15;
  let obj16;
  let obj25;
  let obj5;
  let obj6;
  let onChange;
  let str;
  let title;
  let tmp17;
  let tmp22Result;
  let tmp22Result2;
  let tmp4;
  guildId = guildId.guildId;
  const onCreated = guildId.onCreated;
  str = undefined;
  first = undefined;
  _slicedToArray = undefined;
  let first1;
  c6 = undefined;
  CONJURE_DEFAULT_TIER_SETTINGS = undefined;
  let first2;
  let closure_9;
  c10 = undefined;
  let callback;
  closure_12 = undefined;
  closure_13 = undefined;
  let c14;
  let memo;
  let c16;
  let callback3;
  let closure_18;
  let tmp = closure_13();
  let obj = first1;
  const tmp2 = _slicedToArray;
  [str, tmp4] = first1.useState("");
  [first, _slicedToArray] = first1.useState("guild");
  let tmp7 = _slicedToArray(first1.useState(true), 2);
  const tmp9 = "guild" === first;
  first1 = tmp9;
  const tmp8 = tmp7[1];
  if (tmp9) {
    first1 = tmp7[0];
  }
  [CONJURE_DEFAULT_TIER_SETTINGS, c6] = tmp2(obj.useState(null), 2);
  tmp2(obj.useState(null), 2);
  if (CONJURE_DEFAULT_TIER_SETTINGS == null) {
    CONJURE_DEFAULT_TIER_SETTINGS = guildId(str[8]).CONJURE_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result3 = tmp2(obj.useState(false), 2);
  first2 = tmp2Result3[0];
  closure_9 = tmp2Result3[1];
  [tmp17, c10] = tmp2(obj.useState(null), 2);
  tmp2(obj.useState(null), 2);
  const tmp20 = onCreated(str[9])();
  const useCallback = obj.useCallback;
  guildId = first((guild_id) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      let obj8;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = undefined;
              closure_1_9(true);
              closure_1_10(null);
              c4 = 2;
              const obj5 = { guild_id, install_scope, flags: obj8.conjureCreateFlags(c5) };
              const createProject = guild_id(str[10]).createProject;
              guild_id(str[10]);
              c5 = 3;
              c6 = 1;
              obj8 = guild_id(str[8]);
              const obj7 = { value: createProject(obj5), done: false };
              return obj7;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_1_9(false);
            throw install_scope;
          } else {
            if (2 === c5) {
              c4 = 1;
              closure_2 = install_scope;
              const obj2 = guild_id(str[12]);
              closure_1_10(obj2.getConjureCreateErrorMessage(closure_2));
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_1_9(false);
              c6 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              CONJURE_DEFAULT_TIER_SETTINGS(closure_1);
              closure_2_9(closure_1, closure_1_7);
              guild_id(closure_1);
              const obj6 = onCreated(str[11]);
              obj6.hideActionSheet(closure_2_12);
              closure_1(closure_1, guild_id);
              c4 = 1;
            }
            c4 = 0;
            closure_1_9(false);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          install_scope = tmp25;
          if (0 === c4) {
            c6 = 3;
            throw tmp25;
          } else if (1 === tmp27) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    })();
  });
  let items = [guildId, first, CONJURE_DEFAULT_TIER_SETTINGS, first1, onCreated];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const useCallback2 = obj.useCallback;
  guildId = first(function*(arg0) {
    closure_0 = arg0;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
            let closure_1 = closure_0;
            if (closure_0 == null) {
              closure_1 = c2;
            }
            const trimmed = closure_1.trim();
            const tmp7 = "" === trimmed || first2;
            if (!tmp7) {
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
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  });
  const items1 = [callback, str, first2];
  closure_12 = useCallback2(function() {
    return closure_0(...arguments);
  }, items1);
  const items2 = [guildId, first, CONJURE_DEFAULT_TIER_SETTINGS, first1, onCreated, first2];
  closure_13 = obj.useCallback(first(function*() {
    let closure_0;
    let closure_1;
    let deleteProjectResult;
    let obj10;
    let obj14;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      let closure_2;
      try {
        let tmp;
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
            guildId = undefined;
            tmp = undefined;
            closure_2 = undefined;
            if (!first2) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj14.pickConjureArchive(), done: false };
              obj14 = guildId(closure_2[13]);
              return obj5;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          const intl2 = guildId(closure_2[14]).intl;
          closure_129_10(intl2.string(tmp(closure_2[15])["Q+l4Hv"]));
          c5 = 3;
          const obj8 = { value: undefined, done: true };
          return obj8;
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            guildId = value;
            c3 = 0;
            if (null != guildId) {
              const obj18 = guildId(closure_2[13]);
              tmp = obj18.describeConjureArchiveRejection(guildId);
              if (null == tmp) {
                closure_129_9(true);
                closure_129_10(null);
                closure_2 = null;
                c3 = 3;
                const obj11 = { guild_id: closure_129_0, install_scope: closure_129_3, flags: obj10.conjureCreateFlags(closure_129_5) };
                const createProject = guildId(closure_2[10]).createProject;
                const tmp69 = guildId(closure_2[10]);
                obj10 = guildId(closure_2[8]);
                c4 = 5;
                c5 = 1;
                const obj12 = { value: createProject(obj11), done: false };
                return obj12;
              } else {
                closure_129_10(tmp);
              }
            }
          }
        } else if (3 === c4) {
          c3 = 0;
          closure_129_9(false);
          throw closure_2;
        } else {
          if (4 === c4) {
            c3 = 2;
            let closure_3 = closure_2;
            if (null != closure_2) {
              const obj7 = guildId(closure_2[10]);
              c4 = 7;
              c5 = 1;
              const obj13 = {
                value: deleteProjectResult.catch(() => {

                          }),
                done: false
              };
              deleteProjectResult = obj7.deleteProject(closure_2);
              return obj13;
            } else {
              const obj6 = guildId(closure_2[12]);
              closure_129_10(obj6.getConjureCreateErrorMessage(closure_3));
            }
          } else if (5 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_9(false);
              c5 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              closure_2 = value;
              CONJURE_DEFAULT_TIER_SETTINGS(closure_2);
              closure_1_9(closure_2, closure_129_7);
              const sendConjureArchiveImport = guildId(closure_2[13]).sendConjureArchiveImport;
              const tmp103 = guildId(closure_2[13]);
              const intl3 = guildId(closure_2[14]).intl;
              c4 = 6;
              c5 = 1;
              const obj16 = { value: sendConjureArchiveImport(closure_2, guildId, intl3.string(tmp(closure_2[15])["LUc7/5"])), done: false };
              return obj16;
            }
          } else if (6 === c4) {
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
              const obj2 = tmp(closure_2[11]);
              obj2.hideActionSheet(closure_1_12);
              closure_129_1(closure_2, closure_129_0);
              c3 = 2;
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
            const intl = guildId(closure_2[14]).intl;
            closure_129_10(intl.string(tmp(closure_2[15])["Q+l4Hv"]));
          }
          c3 = 0;
          closure_129_9(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp85) {
        closure_2 = tmp85;
        if (0 === c3) {
          c5 = 3;
          throw tmp85;
        } else if (1 === c3) {
          c4 = 1;
        } else if (2 === c3) {
          c4 = 3;
        } else {
          c4 = 4;
        }
      }
    }
  }), items2);
  let intl = guildId(str[14]).intl;
  const stringResult = intl.string(onCreated(str[15]).NyVn6T);
  c14 = stringResult;
  memo = obj.useMemo(() => {
    let intl;
    let intl2;
    const obj = { guild: intl.string(onCreated(str[15]).LlLIJw), user: intl2.string(onCreated(str[15]).s1TsXl) };
    intl = guildId(str[14]).intl;
    intl2 = guildId(str[14]).intl;
    return obj;
  }, []);
  const items3 = [stringResult, memo];
  const callback1 = obj.useCallback(() => {
    let items;
    let obj2;
    const obj = {
      key: "VibegrationsInstallScope",
      stackingBehavior: "stack",
      header: obj2,
      hasIcons: false,
      options: items.map((item) => {
        let closure_0 = item;
        return {
          label: closure_15[item],
          onPress() {
            return closure_2_4(item);
          }
        };
      })
    };
    items = ["guild", "user"];
    obj2 = { title };
    const showSimpleActionSheet = Sheet_showSimpleActionSheet.showSimpleActionSheet;
    Sheet_showSimpleActionSheet;
    const result = showSimpleActionSheet(obj);
  }, items3);
  let obj2 = guildId(str[17]);
  const landingModelChoicesResult = obj2.landingModelChoices();
  c16 = landingModelChoicesResult;
  const items4 = [landingModelChoicesResult, CONJURE_DEFAULT_TIER_SETTINGS];
  const callback2 = obj.useCallback(() => {
    let ConjureEffortPickerSheet;
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureEffortPicker.CONJURE_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: authStore(ConjureEffortPickerSheet, obj2) };
    obj2 = { initialSettings: CONJURE_DEFAULT_TIER_SETTINGS, tiers: ConjureTypes.CONJURE_LANDING_TIER_SEATS, choices, onChange };
    ConjureEffortPickerSheet = ConjureEffortPicker.ConjureEffortPickerSheet;
    showActionSheet(obj);
  }, items4);
  let obj3 = guildId(str[19]);
  const items5 = [onCreated];
  const conjureTemplatesResult = obj3.conjureTemplates();
  callback3 = obj.useCallback((arg0, arg1) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjureCreateSheet_str);
    onCreated(arg0, arg1);
  }, items5);
  const items6 = [callback, guildId, callback3, CONJURE_DEFAULT_TIER_SETTINGS, first1, first2];
  closure_18 = obj.useCallback((wizard) => {
    let obj2;
    let closure_0 = wizard;
    if (null == wizard.wizard) {
      if (!first2) {
        const promise = callback((arg0) => {
          const obj = guildId(str[19]);
          return obj.startConjureTemplateProject(arg0, closure_0);
        });
        promise.catch(() => {

        });
      }
    } else {
      let obj = { key: ConjureTemplateWizardSheet.CONJURE_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: authStore(ConjureTemplateWizardSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { template: wizard, guildId, modelSettings: CONJURE_DEFAULT_TIER_SETTINGS, nativeAppChannels: first1, onCreated: callback3 };
      showActionSheet(obj);
    }
  }, items6);
  let intl2 = guildId(str[14]).intl;
  const items7 = [intl2.string(onCreated(str[15])["9w+Chc"]), , ];
  let intl3 = guildId(str[14]).intl;
  items7[1] = intl3.string(onCreated(str[15]).WAvmdq);
  const intl4 = guildId(str[14]).intl;
  items7[2] = intl4.string(onCreated(str[15]).SKsrzl);
  let obj4 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: c10(BottomSheetTitleHeader, obj5), children: tmp30(tmp31, obj6) };
  const ActionSheet = guildId(str[21]).ActionSheet;
  obj5 = { title: intl5.string(onCreated(str[15])["+5XyCR"]) };
  BottomSheetTitleHeader = guildId(str[22]).BottomSheetTitleHeader;
  intl5 = guildId(str[14]).intl;
  obj6 = { style: tmp.content, children: items9 };
  let obj7 = { style: tmp.form, children: items8 };
  let obj8 = { placeholder: intl6.string(onCreated(str[15]).ab1sMf), autoComplete: "off", value: str, onChange: tmp4, disabled: first2 };
  const TextArea = guildId(str[23]).TextArea;
  intl6 = guildId(str[14]).intl;
  items8 = [c10(TextArea, obj8), , , , , , ];
  let obj9 = { hasIcons: false, children: c10(TableRow, obj10) };
  const TableRowGroup = guildId(str[24]).TableRowGroup;
  obj10 = { label: stringResult, trailing: c10(guildId(str[26]).Text, obj11), arrow: true, disabled: first2, onPress: callback1 };
  TableRow = guildId(str[25]).TableRow;
  obj11 = { variant: "text-md/normal", color: "text-muted", children: memo[first] };
  items8[1] = c10(TableRowGroup, obj9);
  let tmp29Result = null;
  if (tmp9) {
    let obj12 = { hasIcons: false, children: tmp29(TableCheckboxRow, obj13) };
    const TableRowGroup2 = tmp22(tmp19[24]).TableRowGroup;
    obj13 = { label: intl7.string(tmp18(tmp19[15]).qfAk5B), subLabel: intl8.string(tmp18(tmp19[15])["mq+Pml"]), checked: first1, disabled: first2, onPress: tmp8 };
    TableCheckboxRow = tmp22(tmp19[27]).TableCheckboxRow;
    intl7 = tmp22(tmp19[14]).intl;
    intl8 = tmp22(tmp19[14]).intl;
    tmp29Result = tmp29(TableRowGroup2, obj12);
  }
  items8[2] = tmp29Result;
  let obj14 = { hasIcons: false, children: tmp29(TableRow2, obj15) };
  const TableRowGroup3 = tmp22(tmp19[24]).TableRowGroup;
  obj15 = { label: intl9.string(tmp18(tmp19[15]).aBPQxX), trailing: tmp29(Text, obj16), arrow: true, disabled: first2, onPress: callback2 };
  TableRow2 = tmp22(tmp19[25]).TableRow;
  intl9 = tmp22(tmp19[14]).intl;
  obj16 = { variant: "text-md/normal", color: "text-muted", children: tmp22Result.conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier) };
  Text = tmp22(tmp19[26]).Text;
  tmp22Result = guildId(str[28]);
  items8[3] = c10(TableRowGroup3, obj14);
  let tmp29Result3 = null;
  if (null != tmp20) {
    let str2 = "text-muted";
    const Text2 = tmp22(tmp19[26]).Text;
    if (0 === tmp20) {
      str2 = "text-feedback-warning";
    }
    let obj17 = { variant: "text-sm/normal", color: str2, children: tmp22Result2.conjureAppSlotsLeftLabel(tmp20) };
    tmp22Result2 = guildId(str[29]);
    tmp29Result3 = tmp29(Text2, obj17);
  }
  items8[4] = tmp29Result3;
  let tmp29Result4 = null;
  if (null != tmp17) {
    let obj18 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp17 };
    tmp29Result4 = tmp29(tmp22(tmp19[26]).Text, obj18);
  }
  items8[5] = tmp29Result4;
  const obj19 = {
    variant: "primary",
    text: intl10.string(guildId(str[14]).t.CumH4u),
    disabled: "" === str.trim(),
    loading: first2,
    onPress() {
      return closure_12();
    }
  };
  const Button = tmp22(tmp19[30]).Button;
  intl10 = tmp22(tmp19[14]).intl;
  items8[6] = c10(Button, obj19);
  items9 = [tmp30(tmp31, obj7), , , ];
  const obj20 = { style: tmp.section, children: items11 };
  const obj21 = { style: tmp.sectionHeading, children: items10 };
  const obj22 = { variant: "text-md/medium", color: "text-default", children: intl11.string(onCreated(str[15]).I7nPgX) };
  const Text3 = tmp22(tmp19[26]).Text;
  intl11 = tmp22(tmp19[14]).intl;
  items10 = [tmp29(Text3, obj22), ];
  const obj23 = { variant: "text-sm/normal", color: "text-muted", children: intl12.string(onCreated(str[15]).FXB8wQ) };
  const Text4 = tmp22(tmp19[26]).Text;
  intl12 = tmp22(tmp19[14]).intl;
  items10[1] = c10(Text4, obj23);
  items11 = [tmp30(tmp31, obj21), ];
  const obj24 = { hasIcons: false, children: c10(TableRow3, obj25) };
  const TableRowGroup4 = tmp22(tmp19[24]).TableRowGroup;
  obj25 = {
    label: intl13.string(onCreated(str[15])["C8/T2E"]),
    arrow: true,
    disabled: first2,
    onPress() {
      const promise = closure_13();
      promise.catch(() => {

      });
    }
  };
  TableRow3 = tmp22(tmp19[25]).TableRow;
  intl13 = tmp22(tmp19[14]).intl;
  items11[1] = c10(TableRowGroup4, obj24);
  items9[1] = callback(c6, obj20);
  const obj26 = { style: tmp.section, children: items13 };
  const obj27 = { style: tmp.sectionHeading, children: items12 };
  const obj28 = { variant: "text-md/medium", color: "text-default", children: intl14.string(onCreated(str[15]).zzYLlW) };
  const Text5 = tmp22(tmp19[26]).Text;
  intl14 = tmp22(tmp19[14]).intl;
  items12 = [tmp29(Text5, obj28), ];
  const obj29 = { variant: "text-sm/normal", color: "text-muted", children: intl15.string(onCreated(str[15])["N88+Ld"]) };
  const Text6 = tmp22(tmp19[26]).Text;
  intl15 = tmp22(tmp19[14]).intl;
  items12[1] = c10(Text6, obj29);
  items13 = [tmp30(tmp31, obj27), ];
  const obj30 = {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      let intl;
      let obj2;
      let closure_0 = name;
      const obj = {
        label: name.name,
        subLabel: name.description,
        arrow: true,
        disabled: first2,
        accessibilityLabel: intl.formatToPlainString(onCreated(str[15]).jGyR6p, obj2),
        onPress() {
          return closure_18(name);
        }
      };
      const TableRow = guildId(str[25]).TableRow;
      intl = guildId(str[14]).intl;
      obj2 = { name: name.name };
      return _undefined(TableRow, obj, name.id);
    })
  };
  const TableRowGroup5 = tmp22(tmp19[24]).TableRowGroup;
  items13[1] = c10(TableRowGroup5, obj30);
  items9[2] = callback(c6, obj26);
  const obj31 = { style: tmp.section, children: items15 };
  const obj32 = { style: tmp.sectionHeading, children: items14 };
  const obj33 = { variant: "text-md/medium", color: "text-default", children: intl16.string(onCreated(str[15])["2XcV3x"]) };
  const Text7 = tmp22(tmp19[26]).Text;
  intl16 = tmp22(tmp19[14]).intl;
  items14 = [tmp29(Text7, obj33), ];
  const obj34 = { variant: "text-sm/normal", color: "text-muted", children: intl17.string(onCreated(str[15]).JnJOAn) };
  const Text8 = tmp22(tmp19[26]).Text;
  intl17 = tmp22(tmp19[14]).intl;
  items14[1] = c10(Text8, obj34);
  items15 = [tmp30(tmp31, obj32), ];
  const obj35 = {
    hasIcons: false,
    children: items7.map((label) => {
      let closure_0 = label;
      const obj = {
        label,
        arrow: true,
        disabled: first2,
        onPress() {
          return closure_12(label);
        }
      };
      return _undefined(guildId(str[25]).TableRow, obj, label);
    })
  };
  const TableRowGroup6 = tmp22(tmp19[24]).TableRowGroup;
  items15[1] = c10(TableRowGroup6, obj35);
  items9[3] = callback(c6, obj31);
  return c10(ActionSheet, obj4);
};
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";