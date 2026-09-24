// === Module 17034: VibegrationsTemplateWizardSheet ===

// Module 17034 (VibegrationsTemplateWizardSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import Text_Text from "Text/Text" /* 4825 */;
import TableRadioRow from "TableRadioRow" /* 5993 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 9390 */;
import VibegrationsCreateErrors from "VibegrationsCreateErrors" /* 13283 */;
import VibegrationsTemplateWizard from "VibegrationsTemplateWizard" /* 17037 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;
import PermissionStore from "PermissionStore" /* 4464 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 13458 */;

require = fn;
const View = fn(17).View;
const VibegrationsConnectionStore = fn(13457);
({ ensureConnection: c10, sendUserMessage: closure_11, stageModelSettings: closure_12 } = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const VibegrationsTemplateWizardSheet = "VibegrationsTemplateWizardSheet";
const createStyles = fn(4829);
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
let obj9 = { shield: fn(17035).ChatShieldIcon, hammer: fn(9630).HammerIcon, group: fn(5395).GroupIcon };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTemplateWizardSheet.tsx");

export default function VibegrationsTemplateWizardSheet(template) {
  template = template.template;
  const guildId = template.guildId;
  ({ modelSettings: dependencyMap, onCreated } = template);
  c6 = undefined;
  first = undefined;
  closure_8 = undefined;
  first1 = undefined;
  closure_10 = undefined;
  first2 = undefined;
  closure_12 = undefined;
  first3 = undefined;
  closure_14 = undefined;
  c15 = undefined;
  let ref2;
  let num;
  closure_23 = undefined;
  let tmp = ref2();
  _slicedToArray = tmp;
  let items = [first, closure_8];
  const stateFromStores = template(504).useStateFromStores(items, () => template(17037).vibegrationsTemplateWizardGuilds(first.getGuildsArray(), "VibegrationsTemplateWizardSheet"));
  let obj = template(504);
  [tmp5, c6] = stateFromStores.useState(0);
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
  [first1, closure_10] = stateFromStores.useState(null);
  [first2, closure_12] = stateFromStores.useState([]);
  [first3, closure_14] = stateFromStores.useState(false);
  const tmp4 = _slicedToArray(stateFromStores.useState(0), 2);
  [tmp15, c15] = stateFromStores.useState(null);
  stateFromStores.useRef(null);
  ref2 = stateFromStores.useRef(null);
  stateFromStores.useRef(false);
  const effect = stateFromStores.useEffect(() => {
    if (null != first) {
      c0 = false;
      let obj2 = { guild_id: tmp, install_scope: "guild" };
      const project = template(9390).createProject(obj2);
      let obj = template(9390);
      project.then((current) => {
        closure_16.current = current;
        closure_17.current = current;
        if (c0) {
          VibegrationsActionCreators.deleteProject(current).catch(() => {

          });
          const deleteProjectResult = VibegrationsActionCreators.deleteProject(current);
        } else {
          closure_3_10(current);
          closure_3_12(current, dependencyMap);
          closure_3_11(current, VibegrationsTemplateWizard.vibegrationsTemplateStartMessage(template.name));
          closure_10(current);
        }
      }).catch((error) => {
        if (!c0) {
          c15(VibegrationsCreateErrors.getVibegrationsCreateErrorMessage(error));
        }
      });
      return () => {
        c0 = true;
      };
    }
  }, []);
  const tmp14 = _slicedToArray(stateFromStores.useState(null), 2);
  let items1 = [first1];
  const items2 = [first1];
  const stateFromStores1 = template(504).useStateFromStores(items1, () => {
    let result = null;
    if (null != first1) {
      result = VibegrationsTemplateWizard.latestVibegrationsIntake(VibegrationsChatStore.getMessages(tmp));
    }
    return result;
  }, items2);
  let obj3 = template(504);
  const items3 = [first1];
  const items4 = [first1];
  const tmp18 = template(504).useStateFromStores(items3, () => {
    let tmp2 = null != first1;
    if (tmp2) {
      tmp2 = null != VibegrationsChatStore.getFinishedAt(tmp);
    }
    return tmp2;
  }, items4) && null == stateFromStores1;
  closure_19 = tmp18;
  const items5 = [guildId, onCreated, first1, tmp18];
  const effect1 = obj2.useEffect(() => {
    let tmp = closure_19;
    if (closure_19) {
      tmp = null != first1;
    }
    if (tmp) {
      closure_18.current = true;
      ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsTemplateWizardSheet);
      let current = ref2.current;
      if (current == null) {
        current = guildId;
      }
      onCreated(first1, current);
    }
  }, items5);
  let obj4 = template(504);
  let result = template(17037).vibegrationsWizardIntro(stateFromStores1);
  const tmp2Result = template(17037);
  const result1 = template(17037).vibegrationsWizardServerCopy(stateFromStores1);
  const tmp2Result6 = template(17037);
  const result2 = template(17037).vibegrationsWizardQuestions(stateFromStores1);
  const tmp2Result7 = template(17037);
  const result3 = template(17037).vibegrationsTemplateWizardSteps(result2);
  const tmp23 = result3[Math.min(Math, tmp5, result3.length - 1)];
  const length = result3.length;
  let tmp24;
  if (typeof tmp23 === "object") {
    tmp24 = result2[tmp23.index];
  }
  num = 0;
  if (typeof tmp23 === "object") {
    num = tmp23.index;
  }
  let str = first2[num];
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
  const callback = obj2.useCallback(() => {
    let current = ref3.current;
    if (!current) {
      current = null == ref.current;
    }
    if (!current) {
      VibegrationsActionCreators.deleteProject(ref.current).catch(() => {

      });
      const deleteProjectResult = VibegrationsActionCreators.deleteProject(ref.current);
    }
  }, []);
  const callback1 = obj2.useCallback(() => {
    guildId(4796).hideActionSheet(closure_16);
  }, []);
  const items6 = [first2, onCreated, first, first1, result2, first3];
  closure_23 = obj2.useCallback(onCreated(function*() {
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
        return { value: "HermesInternal", done: null };
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
            const obj8 = { value, done: true };
            return obj8;
          } else {
            template = tmp7;
            closure_128_0 = undefined;
            tmp7 = first3;
            if (!first3) {
              tmp7 = first1;
              if (null != first1) {
                tmp7 = preview_guild_id;
                if (null != preview_guild_id) {
                  if (obj12.isVibegrationsWizardComplete(result2, first2)) {
                    closure_14(true);
                    _undefined2(null);
                    c3 = 1;
                    if (preview_guild_id !== ref.current) {
                      obj9 = { guild_id: preview_guild_id, preview_guild_id };
                      c4 = 2;
                      c5 = 1;
                      const obj10 = { value: template(tmp64[16]).setGuildHints(first1, obj9), done: false };
                      return obj10;
                    } else {
                      closure_1_11(closure_129_9, template(tmp64[15]).formatVibegrationsWizardAnswers(closure_129_20, closure_129_11));
                      const obj4 = template(tmp64[15]);
                      const result = template(tmp64[19]).markVibegrationsTemplateConjured(closure_129_9);
                      closure_129_18.current = true;
                      const obj5 = template(tmp64[19]);
                      tmp3(tmp64[18]).hideActionSheet(closure_1_16);
                      closure_129_3(closure_129_9, closure_129_7);
                      c3 = 0;
                      const obj6 = tmp3(tmp64[18]);
                    }
                  }
                  obj12 = template(tmp64[15]);
                }
              }
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_1 = tmp64;
          closure_129_15(template(tmp64[17]).getVibegrationsCreateErrorMessage(closure_128_1));
          tmp7 = closure_129_14(false);
          const obj3 = template(tmp64[17]);
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
            const vibegrationsCreateError = new template(tmp64[17]).VibegrationsCreateError(template(tmp64[17]).classifyCreateFailure(closure_128_0), closure_128_0.status);
            throw vibegrationsCreateError;
          }
        }
        c5 = 3;
      } catch (tmp64) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp64;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items6);
  if ("about" === tmp23) {
    let name = template.name;
  } else if ("server" === tmp23) {
    name = result1.title;
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
    let obj5 = { variant: "text-sm/normal", color: "text-feedback-critical", children: tmp15 };
    let tmp35Result2 = first3(tmp2(4825).Text, obj5);
    let tmp31 = first3;
  } else {
    tmp31 = first3;
    let obj6 = { style: tmp.loading, children: first3(tmp2(5882).ActivityIndicator, {}) };
    tmp35Result2 = first3(c6, obj6);
  }
  const obj7 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: callback, header: tmp31(template(7482).BottomSheetTitleHeader, { title: name }), children: null };
  let obj8 = { style: tmp.content, children: null };
  let tmp37 = null;
  if ("about" === tmp23) {
    let tmp35Result = tmp35Result2;
    if (null != result) {
      obj9 = { children: null };
      let obj10 = { variant: "text-md/medium", color: "text-default", children: result.lead };
      const items7 = [tmp31(tmp2(4825).Text, obj10), ];
      const points = result.points;
      items7[1] = points.map((children, index) => {
        const obj = { style: closure_4.pointCard, children: null };
        const items = [map1(obj9[children.icon], { size: "sm", color: nativeDefault.colors.ICON_DEFAULT, style: closure_4.pointIcon }), ];
        const obj3 = { style: closure_4.point, children: null };
        const items1 = [map1(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: children.title }), ];
        let tmp3Result = null;
        if (null != children.subtext) {
          tmp3Result = null;
          if ("" !== children.subtext) {
            const obj5 = { variant: "text-sm/normal", color: "text-muted", children: children.subtext };
            tmp3Result = map1(Text_Text.Text, obj5);
          }
        }
        items1[1] = tmp3Result;
        obj3.children = items1;
        items[1] = closure_2_14(View, obj3);
        obj.children = items;
        return closure_2_14(View, obj, index);
      });
      obj9.children = items7;
      tmp35Result = tmp35(c15, obj9);
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
        let obj11 = { style: tmp.point, children: null };
        let obj12 = {
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
          disabled: first3
        };
        const items9 = [tmp31(tmp2(7418).TextArea, obj12), , ];
        let tmp31Result = null;
        if (null != tmp24.hint) {
          const obj13 = { variant: "text-sm/normal", color: "text-muted", children: tmp24.hint };
          tmp31Result = tmp31(tmp2(4825).Text, obj13);
        }
        items9[1] = tmp31Result;
        let tmp31Result3 = null;
        if (null != tmp15) {
          const obj14 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp15 };
          tmp31Result3 = tmp31(tmp2(4825).Text, obj14);
        }
        items9[2] = tmp31Result3;
        obj11.children = items9;
        tmp35Result2 = tmp35(tmp36, obj11, tmp24.id);
      }
      tmp45 = tmp35Result2;
    }
    items8[2] = tmp45;
    const obj15 = { style: tmp.actions, children: null };
    const obj16 = { style: tmp.action, children: null };
    if (0 === tmp5) {
      const obj17 = { variant: "secondary", text: null, disabled: null, onPress: null };
      const intl4 = tmp2(1115).intl;
      obj17.text = intl4.string(tmp2(1115).t["ETE/oC"]);
      obj17.disabled = first3;
      obj17.onPress = callback1;
      let obj18 = obj17;
    } else {
      obj18 = { variant: "secondary", text: null, disabled: null, onPress: null };
      const intl3 = tmp2(1115).intl;
      obj18.text = intl3.string(tmp2(1115).t["13/7kX"]);
      obj18.disabled = first3;
      obj18.onPress = function onPress() {
        return _undefined((arg0) => Math.max(0, arg0 - 1));
      };
    }
    obj16.children = tmp31(tmp2(5273).Button, obj18);
    const items10 = [tmp31(tmp36, obj16), ];
    const obj19 = { style: tmp.action, children: null };
    if (tmp5 === length - 1) {
      const obj20 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
      const intl5 = tmp2(1115).intl;
      obj20.text = intl5.string(guildId(3714).KD2m2Y);
      let tmp50 = null == first1 || null == first;
      if (!tmp50) {
        tmp50 = !tmp2(17037).isVibegrationsWizardComplete(result2, first2);
        const tmp2Result9 = tmp2(17037);
      }
      obj20.disabled = tmp50;
      obj20.loading = first3;
      obj20.onPress = function onPress() {
        closure_23().catch(() => {

        });
      };
      let obj21 = obj20;
    } else {
      const intl6 = tmp2(1115).intl;
      const t = tmp2(1115).t;
      obj21 = { variant: "primary", text: intl6.string(tmp26 ? t["5Wxrcd"] : t.PDTjLN), disabled: null, onPress: null };
      if (tmp40) {
        tmp40 = null == first;
      }
      if (!tmp40) {
        let tmp48 = typeof tmp23 === "object";
        if (typeof tmp23 === "object") {
          tmp48 = !tmp2(17037).canLeaveVibegrationsWizardQuestion(tmp24, str);
          const tmp2Result10 = tmp2(17037);
        }
        tmp40 = tmp48;
      }
      obj21.disabled = tmp40;
      obj21.onPress = function onPress() {
        return _undefined((arg0) => Math.min(length - 1, arg0 + 1));
      };
    }
    obj19.children = tmp31(tmp2(5273).Button, obj21);
    items10[1] = tmp31(tmp36, obj19);
    obj15.children = items10;
    items8[3] = tmp35(tmp36, obj15);
    obj8.children = items8;
    obj7.children = tmp35(tmp36, obj8);
    return tmp31(tmp2(7530).ActionSheet, obj7);
  } else if (0 === stateFromStores.length) {
    const obj22 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl2 = tmp2(1115).intl;
    obj22.children = intl2.string(guildId(3714).ipwoYO);
    let tmp31Result4 = tmp31(tmp2(4825).Text, obj22);
  } else {
    let str4 = first;
    if (first == null) {
      str4 = "";
    }
    const obj23 = { children: null };
    const obj24 = {
      hasIcons: false,
      value: str4,
      onChange(arg0) {
          return closure_8(arg0);
        },
      accessibilityLabel: null,
      children: null
    };
    const intl = tmp2(1115).intl;
    obj24.accessibilityLabel = intl.string(guildId(3714)["6NyGSZ"]);
    obj24.children = stateFromStores.map((label) => map1(TableRadioRow.TableRadioRow, { label: label.name, value: label.id, disabled: first3 }, label.id));
    const items11 = [tmp31(tmp2(5990).TableRadioGroup, obj24), ];
    const obj25 = { variant: "text-sm/normal", color: "text-muted", children: result1.hint };
    items11[1] = tmp31(tmp2(4825).Text, obj25);
    obj23.children = items11;
    tmp31Result4 = tmp35(c15, obj23);
  }
  const tmp2Result8 = template(17037);
};
export const VIBEGRATIONS_TEMPLATE_WIZARD_SHEET_KEY = "VibegrationsTemplateWizardSheet";