// === Module 16979: ConjureTemplateWizardSheet ===

// Module 16979 (ConjureTemplateWizardSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import TableRadioRow from "TableRadioRow" /* 6266 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11369 */;
import ConjureCreateErrors from "ConjureCreateErrors" /* 11382 */;
import ConjureTemplateWizard from "ConjureTemplateWizard" /* 16982 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ConjureChatStore from "ConjureChatStore" /* 12948 */;

require = fn;
const View = fn(17).View;
const ConjureConnectionStore = fn(13164);
({ ensureConnection: c10, sendUserMessage: closure_11, stageModelSettings: closure_12 } = ConjureConnectionStore);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const VibegrationsTemplateWizardSheet = "VibegrationsTemplateWizardSheet";
const createStyles = fn(5091);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, loading: null, pointCard: null, pointIcon: null, point: null, actions: null, action: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.loading = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let obj4 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj2.pointCard = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj5 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.pointIcon = { marginTop: nativeDefault.space.PX_4 / 2 };
let obj6 = { marginTop: nativeDefault.space.PX_4 / 2 };
obj2.point = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj7 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj2.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.action = { flex: 1 };
let closure_17 = createStyles.createStyles(obj2);
let obj9 = { shield: fn(16980).ChatShieldIcon, hammer: fn(11396).HammerIcon, group: fn(8200).GroupIcon };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/templates/native/ConjureTemplateWizardSheet.tsx");

export default function ConjureTemplateWizardSheet(template) {
  template = template.template;
  const guildId = template.guildId;
  ({ modelSettings: dependencyMap, onCreated } = template);
  c6 = undefined;
  first = undefined;
  closure_8 = undefined;
  first2 = undefined;
  closure_10 = undefined;
  first3 = undefined;
  closure_12 = undefined;
  first4 = undefined;
  closure_14 = undefined;
  c15 = undefined;
  let ref2;
  let num;
  closure_23 = undefined;
  let tmp = ref2();
  _slicedToArray = tmp;
  let obj = template;
  let result3 = dependencyMap;
  let items = [first, closure_8];
  const stateFromStores = template(504).useStateFromStores(items, () => template(16982).conjureTemplateWizardGuilds(first.getGuildsArray(), "VibegrationsTemplateWizardSheet"));
  let obj2 = template(504);
  [tmp4, c6] = stateFromStores.useState(0);
  [first, closure_8] = stateFromStores.useState(() => {
    if (stateFromStores.some((id) => id.id === guildId)) {
      let id = guildId;
    } else {
      first = stateFromStores[0];
      id = undefined;
      if (first != null) {
        id = first.id;
      }
      if (id == null) {
        id = null;
      }
    }
    return id;
  });
  const first1 = _slicedToArray(stateFromStores.useState(() => ConjureTemplateWizard.conjureWizardServerStep(guildId, stateFromStores)), 1)[0];
  [first2, closure_10] = stateFromStores.useState(null);
  [first3, closure_12] = stateFromStores.useState([]);
  [first4, closure_14] = stateFromStores.useState(false);
  const tmp3 = _slicedToArray(stateFromStores.useState(0), 2);
  [tmp15, c15] = stateFromStores.useState(null);
  stateFromStores.useRef(null);
  ref2 = stateFromStores.useRef(null);
  stateFromStores.useRef(false);
  const effect = stateFromStores.useEffect(() => {
    if (null != first) {
      c0 = false;
      let obj2 = { guild_id: tmp, install_scope: "guild" };
      const project = template(11369).createProject(obj2);
      let obj = template(11369);
      project.then((current) => {
        closure_16.current = current;
        closure_17.current = current;
        if (c0) {
          ConjureActionCreators.deleteProject(current).catch(() => {

          });
          const deleteProjectResult = ConjureActionCreators.deleteProject(current);
        } else {
          collapsed(current);
          __initData(current, dependencyMap);
          closure_3_11(current, ConjureTemplateWizard.conjureTemplateStartMessage(template.name));
          closure_10(current);
        }
      }).catch((error) => {
        if (!c0) {
          c15(ConjureCreateErrors.getConjureCreateErrorMessage(error));
        }
      });
      return () => {
        c0 = true;
      };
    }
  }, []);
  const tmp14 = _slicedToArray(stateFromStores.useState(null), 2);
  let items1 = [first2];
  const items2 = [first2];
  const stateFromStores1 = template(504).useStateFromStores(items1, () => {
    let latestConjureIntakeResult = null;
    if (null != first2) {
      latestConjureIntakeResult = ConjureTemplateWizard.latestConjureIntake(ConjureChatStore.getMessages(tmp));
    }
    return latestConjureIntakeResult;
  }, items2);
  let obj4 = template(504);
  const items3 = [first2];
  const items4 = [first2];
  const tmp18 = template(504).useStateFromStores(items3, () => {
    let tmp2 = null != first2;
    if (tmp2) {
      tmp2 = null != ConjureChatStore.getFinishedAt(tmp);
    }
    return tmp2;
  }, items4) && null == stateFromStores1;
  closure_19 = tmp18;
  const items5 = [guildId, onCreated, first2, tmp18];
  const effect1 = obj3.useEffect(() => {
    let tmp = closure_19;
    if (closure_19) {
      tmp = null != first2;
    }
    if (tmp) {
      closure_18.current = true;
      ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsTemplateWizardSheet);
      let current = ref2.current;
      if (current == null) {
        current = guildId;
      }
      onCreated(first2, current);
    }
  }, items5);
  let obj5 = template(504);
  const conjureWizardIntroResult = obj(16982).conjureWizardIntro(stateFromStores1);
  const objResult = obj(16982);
  const result = obj(16982).conjureWizardServerCopy(stateFromStores1);
  const objResult5 = obj(16982);
  const result1 = obj(16982).conjureWizardQuestions(stateFromStores1);
  const objResult6 = obj(16982);
  const result2 = obj(16982).conjureTemplateWizardSteps(result1, first1);
  const tmp23 = result2[Math.min(Math, tmp4, result2.length - 1)];
  const length = result2.length;
  let tmp24;
  if (typeof tmp23 === "object") {
    tmp24 = result1[tmp23.index];
  }
  num = 0;
  if (typeof tmp23 === "object") {
    num = tmp23.index;
  }
  let str = first3[num];
  if (str == null) {
    str = "";
  }
  let optional;
  if (tmp24 != null) {
    optional = tmp24.optional;
  }
  let tmp26 = true === optional;
  if (tmp26) {
    tmp26 = "" === str.trim();
  }
  const callback = obj3.useCallback(() => {
    let current = ref3.current;
    if (!current) {
      current = null == ref.current;
    }
    if (!current) {
      ConjureActionCreators.deleteProject(ref.current).catch(() => {

      });
      const deleteProjectResult = ConjureActionCreators.deleteProject(ref.current);
    }
  }, []);
  const callback1 = obj3.useCallback(() => {
    guildId(5055).hideActionSheet(closure_16);
  }, []);
  const items6 = [first3, onCreated, first, first2, result1, first4, template.id];
  closure_23 = obj3.useCallback(onCreated(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c5 = 2;
        let tmp7 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            template = tmp7;
            closure_128_0 = undefined;
            tmp7 = first4;
            if (!first4) {
              tmp7 = first2;
              if (null != first2) {
                tmp7 = preview_guild_id;
                if (null != preview_guild_id) {
                  if (obj12.isConjureWizardComplete(result1, first3)) {
                    closure_14(true);
                    _undefined2(null);
                    c3 = 1;
                    if (preview_guild_id !== ref.current) {
                      const obj8 = { guild_id: preview_guild_id, preview_guild_id };
                      c4 = 2;
                      c5 = 1;
                      obj9 = { value: template(tmp63[16]).setGuildHints(first2, obj8), done: false };
                      return obj9;
                    } else {
                      const obj10 = { templateId: closure_129_0.id };
                      closure_1_11(closure_129_9, template(tmp63[15]).formatConjureWizardAnswers(closure_129_20, closure_129_11), undefined, obj10);
                      closure_129_18.current = true;
                      const obj4 = template(tmp63[15]);
                      tmp3(tmp63[18]).hideActionSheet(closure_1_16);
                      closure_129_3(closure_129_9, closure_129_7);
                      c3 = 0;
                      const obj6 = tmp3(tmp63[18]);
                    }
                  }
                  obj12 = template(tmp63[15]);
                }
              }
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_1 = tmp63;
          closure_129_15(template(tmp63[17]).getConjureCreateErrorMessage(closure_128_1));
          tmp7 = closure_129_14(false);
          const obj3 = template(tmp63[17]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_128_0 = value;
          if (!closure_128_0.ok) {
            const conjureCreateError = new template(tmp63[17]).ConjureCreateError(template(tmp63[17]).classifyCreateFailure(closure_128_0), closure_128_0.status);
            throw conjureCreateError;
          }
        }
        c5 = 3;
      } catch (tmp63) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp63;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items6);
  if ("about" === tmp23) {
    let name = template.name;
  } else if ("server" === tmp23) {
    name = result.title;
  } else {
    name = undefined;
    if (tmp24 != null) {
      name = tmp24.title;
    }
    if (name == null) {
      name = template.name;
    }
  }
  if (null != tmp15) {
    let obj6 = { variant: "text-sm/normal", color: "text-feedback-critical", children: tmp15 };
    let tmp35Result2 = first4(obj(5087).Text, obj6);
    let tmp31 = first4;
  } else {
    tmp31 = first4;
    const obj7 = { style: tmp.loading, children: first4(obj(6160).ActivityIndicator, {}) };
    tmp35Result2 = first4(c6, obj7);
  }
  let obj8 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: callback, header: tmp31(obj(6835).BottomSheetTitleHeader, { title: name }), children: null };
  obj9 = { style: tmp.content, children: null };
  let tmp37 = null;
  if ("about" === tmp23) {
    let tmp35Result = tmp35Result2;
    if (null != conjureWizardIntroResult) {
      let obj10 = { children: null };
      let obj11 = { variant: "text-md/medium", color: "text-default", children: conjureWizardIntroResult.lead };
      const items7 = [tmp31(obj(5087).Text, obj11), ];
      const points = conjureWizardIntroResult.points;
      items7[1] = points.map((children, index) => {
        const obj = { style: closure_4.pointCard, children: null };
        const items = [__initData2(obj9[children.icon], { size: "sm", color: nativeDefault.colors.ICON_DEFAULT, style: closure_4.pointIcon }), ];
        const obj3 = { style: closure_4.point, children: null };
        const items1 = [__initData2(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: children.title }), ];
        let tmp3Result = null;
        if (null != children.subtext) {
          tmp3Result = null;
          if ("" !== children.subtext) {
            const obj5 = { variant: "text-sm/normal", color: "text-muted", children: children.subtext };
            tmp3Result = __initData2(Text_Text.Text, obj5);
          }
        }
        items1[1] = tmp3Result;
        obj3.children = items1;
        items[1] = state(View, obj3);
        obj.children = items;
        return state(View, obj, index);
      });
      obj10.children = items7;
      tmp35Result = tmp35(c15, obj10);
    }
    tmp37 = tmp35Result;
  }
  const items8 = [tmp37, , , ];
  let tmp40 = "server" === tmp23;
  if (!tmp40) {
    items8[1] = null;
    let tmp45 = null;
    if (typeof tmp23 === "object") {
      if (null != tmp24) {
        let obj12 = { style: tmp.point, children: null };
        const obj13 = {
          placeholder: tmp24.placeholder,
          autoComplete: "off",
          autoFocus: true,
          value: str,
          onChange(arg0) {
                  closure_0 = arg0;
                  closure_12((arg0) => {
                    const items = [...arg0, closure_0];
                    return items;
                  });
                  _undefined2(null);
                },
          disabled: first4
        };
        const items9 = [tmp31(obj(6770).TextArea, obj13), , ];
        let tmp31Result = null;
        if (null != tmp24.hint) {
          const obj14 = { variant: "text-sm/normal", color: "text-muted", children: tmp24.hint };
          tmp31Result = tmp31(obj(5087).Text, obj14);
        }
        items9[1] = tmp31Result;
        let tmp31Result4 = null;
        if (null != tmp15) {
          const obj15 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp15 };
          tmp31Result4 = tmp31(obj(5087).Text, obj15);
        }
        items9[2] = tmp31Result4;
        obj12.children = items9;
        tmp35Result2 = tmp35(tmp36, obj12, tmp24.id);
      }
      tmp45 = tmp35Result2;
    }
    items8[2] = tmp45;
    const obj16 = { style: tmp.actions, children: null };
    const obj17 = { style: tmp.action, children: null };
    if (0 === tmp4) {
      const obj18 = { variant: "secondary", text: null, disabled: null, onPress: null };
      const intl4 = obj(1126).intl;
      obj18.text = intl4.string(obj(1126).t["ETE/oC"]);
      obj18.disabled = first4;
      obj18.onPress = callback1;
      let obj19 = obj18;
    } else {
      obj19 = { variant: "secondary", text: null, disabled: null, onPress: null };
      const intl3 = obj(1126).intl;
      obj19.text = intl3.string(obj(1126).t["13/7kX"]);
      obj19.disabled = first4;
      obj19.onPress = function onPress() {
        return _undefined((arg0) => Math.max(0, arg0 - 1));
      };
    }
    obj17.children = tmp31(obj(5376).Button, obj19);
    const items10 = [tmp31(tmp36, obj17), ];
    if ("none" === first1) {
      items10[1] = null;
      obj16.children = items10;
      items8[3] = tmp35(tmp36, obj16);
      obj9.children = items8;
      obj8.children = tmp35(tmp36, obj9);
      return tmp31(obj(6892).ActionSheet, obj8);
    } else {
      const obj20 = { style: tmp.action, children: null };
      if (tmp4 === length - 1) {
        const obj21 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
        const intl5 = obj(1126).intl;
        obj21.text = intl5.string(guildId(3827)["5iv8MF"]);
        let tmp51 = null == first2 || null == first;
        if (!tmp51) {
          obj = obj(16982);
          result3 = obj.isConjureWizardComplete(result1, first3);
          tmp51 = !result3;
        }
        obj21.disabled = tmp51;
        obj21.loading = first4;
        obj21.onPress = function onPress() {
          closure_23().catch(() => {

          });
        };
        let obj22 = obj21;
      } else {
        const intl6 = obj(1126).intl;
        const t = obj(1126).t;
        obj22 = { variant: "primary", text: intl6.string(tmp26 ? t["5Wxrcd"] : t.PDTjLN), disabled: null, onPress: null };
        if (tmp40) {
          tmp40 = null == first;
        }
        if (!tmp40) {
          let tmp49 = typeof tmp23 === "object";
          if (typeof tmp23 === "object") {
            tmp49 = !obj(16982).canLeaveConjureWizardQuestion(tmp24, str);
            const objResult8 = obj(16982);
          }
          tmp40 = tmp49;
        }
        obj22.disabled = tmp40;
        obj22.onPress = function onPress() {
          return _undefined((arg0) => Math.min(length - 1, arg0 + 1));
        };
      }
      obj20.children = tmp31(obj(5376).Button, obj22);
      tmp31(tmp36, obj20);
    }
  } else if (0 === stateFromStores.length) {
    const obj23 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl2 = obj(1126).intl;
    obj23.children = intl2.string(guildId(3827)["6ys5dn"]);
    let tmp31Result6 = tmp31(obj(5087).Text, obj23);
  } else {
    let str4 = first;
    if (first == null) {
      str4 = "";
    }
    const obj24 = { children: null };
    const obj25 = {
      hasIcons: false,
      value: str4,
      onChange(arg0) {
          return closure_8(arg0);
        },
      accessibilityLabel: null,
      children: null
    };
    const intl = obj(1126).intl;
    obj25.accessibilityLabel = intl.string(guildId(3827).lHT5Dp);
    obj25.children = stateFromStores.map((label) => __initData2(TableRadioRow.TableRadioRow, { label: label.name, value: label.id, disabled: first4 }, label.id));
    const items11 = [tmp31(obj(6267).TableRadioGroup, obj25), ];
    const obj26 = { variant: "text-sm/normal", color: "text-muted", children: result.hint };
    items11[1] = tmp31(obj(5087).Text, obj26);
    obj24.children = items11;
    tmp31Result6 = tmp35(c15, obj24);
  }
};
export const CONJURE_TEMPLATE_WIZARD_SHEET_KEY = "VibegrationsTemplateWizardSheet";