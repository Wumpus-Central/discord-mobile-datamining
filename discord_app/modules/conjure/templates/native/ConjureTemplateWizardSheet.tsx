// === Module 16600: ConjureTemplateWizardSheet ===

// Module 16600 (ConjureTemplateWizardSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import TableRadioRow from "TableRadioRow" /* 6078 */;
import ConjureActionCreators from "ConjureActionCreators" /* 8735 */;
import ConjureCreateErrors from "ConjureCreateErrors" /* 12712 */;
import ConjureTemplateWizard from "ConjureTemplateWizard" /* 16603 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ConjureChatStore from "ConjureChatStore" /* 12924 */;

require = fn;
const View = fn(17).View;
const ConjureConnectionStore = fn(12923);
({ ensureConnection: c10, sendUserMessage: closure_11, stageModelSettings: closure_12 } = ConjureConnectionStore);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const VibegrationsTemplateWizardSheet = "VibegrationsTemplateWizardSheet";
const createStyles = fn(4896);
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
let obj9 = { shield: fn(16601).ChatShieldIcon, hammer: fn(8985).HammerIcon, group: fn(5880).GroupIcon };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/templates/native/ConjureTemplateWizardSheet.tsx");

export default function ConjureTemplateWizardSheet(template) {
  template = template.template;
  const guildId = template.guildId;
  ({ modelSettings: dependencyMap, nativeAppChannels: asyncGeneratorStep, onCreated } = template);
  c7 = undefined;
  let first;
  c16 = undefined;
  let ref;
  let num;
  closure_24 = undefined;
  let tmp = ref();
  noop = tmp;
  let obj = template;
  let result3 = dependencyMap;
  let items = [c7, first];
  const stateFromStores = template(504).useStateFromStores(items, () => template(16603).conjureTemplateWizardGuilds(_undefined.getGuildsArray(), "VibegrationsTemplateWizardSheet"));
  let obj2 = template(504);
  [tmp4, c7] = onCreated(noop.useState(0), 2);
  const tmp5 = onCreated(noop.useState(() => {
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
  }), 2);
  first = tmp5[0];
  closure_9 = tmp5[1];
  const first1 = onCreated(noop.useState(() => ConjureTemplateWizard.conjureWizardServerStep(guildId, stateFromStores)), 1)[0];
  const tmp8 = onCreated(noop.useState(null), 2);
  const first2 = tmp8[0];
  closure_11 = tmp8[1];
  const tmp10 = onCreated(noop.useState([]), 2);
  const first3 = tmp10[0];
  closure_13 = tmp10[1];
  const tmp12 = onCreated(noop.useState(false), 2);
  const first4 = tmp12[0];
  closure_15 = tmp12[1];
  const tmp3 = onCreated(noop.useState(0), 2);
  [tmp15, c16] = onCreated(noop.useState(null), 2);
  ref = noop.useRef(null);
  noop.useRef(null);
  noop.useRef(false);
  const effect = noop.useEffect(() => {
    if (null != first) {
      c0 = false;
      let obj2 = { guild_id: tmp, install_scope: "guild", flags: null };
      let obj = template(8735);
      obj2.flags = template(6757).conjureCreateFlags(closure_3);
      const project = obj.createProject(obj2);
      const obj3 = template(6757);
      project.then((current) => {
        closure_17.current = current;
        closure_18.current = current;
        if (c0) {
          ConjureActionCreators.deleteProject(current).catch(() => {

          });
          const deleteProjectResult = ConjureActionCreators.deleteProject(current);
        } else {
          v65535(current);
          __initData(current, dependencyMap);
          closure_3_11(current, ConjureTemplateWizard.conjureTemplateStartMessage(template.name));
          closure_11(current);
        }
      }).catch((error) => {
        if (!c0) {
          c16(ConjureCreateErrors.getConjureCreateErrorMessage(error));
        }
      });
      return () => {
        c0 = true;
      };
    }
  }, []);
  const tmp14 = onCreated(noop.useState(null), 2);
  let items1 = [closure_9];
  const items2 = [first2];
  const stateFromStores1 = template(504).useStateFromStores(items1, () => {
    let latestConjureIntakeResult = null;
    if (null != first2) {
      latestConjureIntakeResult = ConjureTemplateWizard.latestConjureIntake(ConjureChatStore.getMessages(tmp));
    }
    return latestConjureIntakeResult;
  }, items2);
  let obj4 = template(504);
  const items3 = [closure_9];
  const items4 = [first2];
  const tmp18 = template(504).useStateFromStores(items3, () => {
    let tmp2 = null != first2;
    if (tmp2) {
      tmp2 = null != ConjureChatStore.getFinishedAt(tmp);
    }
    return tmp2;
  }, items4) && null == stateFromStores1;
  closure_20 = tmp18;
  const items5 = [guildId, onCreated, first2, tmp18];
  const effect1 = obj3.useEffect(() => {
    let tmp = closure_20;
    if (closure_20) {
      tmp = null != first2;
    }
    if (tmp) {
      closure_19.current = true;
      ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsTemplateWizardSheet);
      let current = ref2.current;
      if (current == null) {
        current = guildId;
      }
      onCreated(first2, current);
    }
  }, items5);
  let obj5 = template(504);
  const conjureWizardIntroResult = obj(16603).conjureWizardIntro(stateFromStores1);
  const objResult = obj(16603);
  const result = obj(16603).conjureWizardServerCopy(stateFromStores1);
  const objResult5 = obj(16603);
  const result1 = obj(16603).conjureWizardQuestions(stateFromStores1);
  const objResult6 = obj(16603);
  const result2 = obj(16603).conjureTemplateWizardSteps(result1, first1);
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
    guildId(4860).hideActionSheet(c16);
  }, []);
  const items6 = [first3, onCreated, first, first2, result1, first4, template.id];
  closure_24 = obj3.useCallback(asyncGeneratorStep(async () => {
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
                    closure_15(true);
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
                      closure_1_11(closure_129_10, template(tmp63[15]).formatConjureWizardAnswers(closure_129_21, closure_129_12), undefined, obj10);
                      closure_129_19.current = true;
                      const obj4 = template(tmp63[15]);
                      tmp3(tmp63[19]).hideActionSheet(_undefined2);
                      closure_129_4(closure_129_10, closure_129_8);
                      c3 = 0;
                      const obj6 = tmp3(tmp63[19]);
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
          closure_129_16(template(tmp63[18]).getConjureCreateErrorMessage(closure_128_1));
          tmp7 = closure_129_15(false);
          const obj3 = template(tmp63[18]);
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
            const conjureCreateError = new template(tmp63[18]).ConjureCreateError(template(tmp63[18]).classifyCreateFailure(closure_128_0), closure_128_0.status);
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
    let tmp35Result2 = closure_13(obj(4892).Text, obj6);
    let tmp31 = closure_13;
  } else {
    tmp31 = closure_13;
    const obj7 = { style: tmp.loading, children: closure_13(obj(5975).ActivityIndicator, {}) };
    tmp35Result2 = closure_13(stateFromStores, obj7);
  }
  let obj8 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: callback, header: tmp31(obj(6651).BottomSheetTitleHeader, { title: name }), children: null };
  obj9 = { style: tmp.content, children: null };
  let tmp37 = null;
  if ("about" === tmp23) {
    let tmp35Result = tmp35Result2;
    if (null != conjureWizardIntroResult) {
      let obj10 = { children: null };
      let obj11 = { variant: "text-md/medium", color: "text-default", children: conjureWizardIntroResult.lead };
      const items7 = [tmp31(obj(4892).Text, obj11), ];
      const points = conjureWizardIntroResult.points;
      items7[1] = points.map((children, index) => {
        const obj = { style: closure_5.pointCard, children: null };
        const items = [__initData2(obj9[children.icon], { size: "sm", color: nativeDefault.colors.ICON_DEFAULT, style: closure_5.pointIcon }), ];
        const obj3 = { style: closure_5.point, children: null };
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
      tmp35Result = tmp35(closure_15, obj10);
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
                  closure_13((arg0) => {
                    const items = [...arg0, closure_0];
                    return items;
                  });
                  _undefined2(null);
                },
          disabled: first4
        };
        const items9 = [tmp31(obj(6587).TextArea, obj13), , ];
        let tmp31Result = null;
        if (null != tmp24.hint) {
          const obj14 = { variant: "text-sm/normal", color: "text-muted", children: tmp24.hint };
          tmp31Result = tmp31(obj(4892).Text, obj14);
        }
        items9[1] = tmp31Result;
        let tmp31Result4 = null;
        if (null != tmp15) {
          const obj15 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp15 };
          tmp31Result4 = tmp31(obj(4892).Text, obj15);
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
    obj17.children = tmp31(obj(5601).Button, obj19);
    const items10 = [tmp31(tmp36, obj17), ];
    if ("none" === first1) {
      items10[1] = null;
      obj16.children = items10;
      items8[3] = tmp35(tmp36, obj16);
      obj9.children = items8;
      obj8.children = tmp35(tmp36, obj9);
      return tmp31(obj(6708).ActionSheet, obj8);
    } else {
      const obj20 = { style: tmp.action, children: null };
      if (tmp4 === length - 1) {
        const obj21 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
        const intl5 = obj(1126).intl;
        obj21.text = intl5.string(guildId(3753)["5iv8MF"]);
        let tmp51 = null == first2 || null == first;
        if (!tmp51) {
          obj = obj(16603);
          result3 = obj.isConjureWizardComplete(result1, first3);
          tmp51 = !result3;
        }
        obj21.disabled = tmp51;
        obj21.loading = first4;
        obj21.onPress = function onPress() {
          closure_24().catch(() => {

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
            tmp49 = !obj(16603).canLeaveConjureWizardQuestion(tmp24, str);
            const objResult8 = obj(16603);
          }
          tmp40 = tmp49;
        }
        obj22.disabled = tmp40;
        obj22.onPress = function onPress() {
          return _undefined((arg0) => Math.min(length - 1, arg0 + 1));
        };
      }
      obj20.children = tmp31(obj(5601).Button, obj22);
      tmp31(tmp36, obj20);
    }
  } else if (0 === stateFromStores.length) {
    const obj23 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl2 = obj(1126).intl;
    obj23.children = intl2.string(guildId(3753)["6ys5dn"]);
    let tmp31Result6 = tmp31(obj(4892).Text, obj23);
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
          return closure_9(arg0);
        },
      accessibilityLabel: null,
      children: null
    };
    const intl = obj(1126).intl;
    obj25.accessibilityLabel = intl.string(guildId(3753).lHT5Dp);
    obj25.children = stateFromStores.map((label) => __initData2(TableRadioRow.TableRadioRow, { label: label.name, value: label.id, disabled: first4 }, label.id));
    const items11 = [tmp31(obj(6079).TableRadioGroup, obj25), ];
    const obj26 = { variant: "text-sm/normal", color: "text-muted", children: result.hint };
    items11[1] = tmp31(obj(4892).Text, obj26);
    obj24.children = items11;
    tmp31Result6 = tmp35(closure_15, obj24);
  }
};
export const CONJURE_TEMPLATE_WIZARD_SHEET_KEY = "VibegrationsTemplateWizardSheet";