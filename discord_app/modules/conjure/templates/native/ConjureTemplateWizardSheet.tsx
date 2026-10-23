// === Module 11730: ConjureTemplateWizardSheet ===

// Module 11730 (ConjureTemplateWizardSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import Text_Text from "Text/Text" /* 5220 */;
import TableRadioRow from "TableRadioRow" /* 6969 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10697 */;
import ConjureCreateErrors from "ConjureCreateErrors" /* 10701 */;
import ConjureTemplateWizard from "ConjureTemplateWizard" /* 11735 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4843 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import ConjureChatStore from "ConjureChatStore" /* 10676 */;

require = fn;
const View = fn(17).View;
const ConjureConnectionStore = fn(10675);
({ ensureConnection: c10, sendUserMessage: closure_11, stageModelSettings: closure_12 } = ConjureConnectionStore);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const ConjureTemplateWizardSheet = "ConjureTemplateWizardSheet";
const createStyles = fn(4969);
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
let obj9 = { shield: fn(11731).ChatShieldIcon, hammer: fn(11733).HammerIcon, group: fn(8546).GroupIcon };
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
  c11 = undefined;
  first3 = undefined;
  closure_13 = undefined;
  first4 = undefined;
  closure_15 = undefined;
  c16 = undefined;
  let ref;
  let stateFromStores2;
  let result1;
  let length;
  let num;
  closure_24 = undefined;
  let tmp = ref();
  _slicedToArray = tmp;
  let obj = template;
  let result3 = dependencyMap;
  let items = [first, closure_8];
  const stateFromStores = template(504).useStateFromStores(items, () => template(11735).conjureTemplateWizardGuilds(first.getGuildsArray(), "ConjureTemplateWizardSheet"));
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
  const tmp3 = _slicedToArray(stateFromStores.useState(0), 2);
  [tmp11, c11] = stateFromStores.useState(null);
  [first3, closure_13] = stateFromStores.useState([]);
  [first4, closure_15] = stateFromStores.useState(false);
  const tmp10 = _slicedToArray(stateFromStores.useState(null), 2);
  [tmp17, c16] = stateFromStores.useState(null);
  ref = stateFromStores.useRef(null);
  stateFromStores.useRef(null);
  stateFromStores.useRef(false);
  const effect = stateFromStores.useEffect(() => {
    if (null != first) {
      c0 = false;
      const obj2 = { guild_id: tmp, install_scope: "guild" };
      const project = template(10697).createProject(obj2);
      let obj = template(10697);
      project.then((current) => {
        closure_0 = current;
        ref.current = current;
        ref2.current = current;
        if (closure_0) {
          const obj3 = template(10697);
          template(10697).deleteProject(current).catch(() => {

          });
          const deleteProjectResult = template(10697).deleteProject(current);
        } else {
          const obj = { templateId: _true.id };
          closure_10(current, obj);
          first3(current, dependencyMap);
          const result = template(11735).startConjureTemplateWizard(current, _true);
          return result.then((result) => {
            if (!c0) {
              c11(result);
              closure_10(closure_0);
            }
          });
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
  const tmp16 = _slicedToArray(stateFromStores.useState(null), 2);
  let items1 = [first2];
  const items2 = [first2];
  const stateFromStores1 = template(504).useStateFromStores(items1, () => {
    let latestConjureIntakeResult = null;
    if (null != first2) {
      latestConjureIntakeResult = ConjureTemplateWizard.latestConjureIntake(ConjureChatStore.getMessages(tmp));
    }
    return latestConjureIntakeResult;
  }, items2);
  let tmp21 = tmp11;
  if (tmp11 == null) {
    tmp21 = stateFromStores1;
  }
  let obj4 = template(504);
  const tmp19 = first2;
  const items3 = [tmp19];
  const items4 = [first2];
  stateFromStores2 = obj(504).useStateFromStores(items3, () => {
    let tmp2 = null != first2;
    if (tmp2) {
      tmp2 = null != ConjureChatStore.getFinishedAt(tmp);
    }
    return tmp2;
  }, items4);
  let tmp25 = null == tmp11;
  const objResult = obj(504);
  if (tmp25) {
    tmp25 = null != stateFromStores1;
  }
  guildId(11737)(first2, template.id, tmp25);
  if (stateFromStores2) {
    stateFromStores2 = null == tmp21;
  }
  const items5 = [guildId, onCreated, first2, stateFromStores2];
  const effect1 = obj3.useEffect(() => {
    let tmp = stateFromStores2;
    if (stateFromStores2) {
      tmp = null != first2;
    }
    if (tmp) {
      closure_19.current = true;
      ActionSheetActionCreatorsDefault.hideActionSheet(ConjureTemplateWizardSheet);
      let current = ref2.current;
      if (current == null) {
        current = guildId;
      }
      onCreated(first2, current);
    }
  }, items5);
  const tmp24 = guildId(11737);
  const conjureWizardIntroResult = obj(11735).conjureWizardIntro(tmp21);
  const objResult6 = obj(11735);
  let result = obj(11735).conjureWizardServerCopy(tmp21);
  const objResult7 = obj(11735);
  result1 = obj(11735).conjureWizardQuestions(tmp21);
  const objResult8 = obj(11735);
  const result2 = obj(11735).conjureTemplateWizardSteps(result1, first1);
  const tmp31 = result2[Math.min(Math, tmp4, result2.length - 1)];
  length = result2.length;
  let tmp32;
  if (typeof tmp31 === "object") {
    tmp32 = result1[tmp31.index];
  }
  num = 0;
  if (typeof tmp31 === "object") {
    num = tmp31.index;
  }
  let str = first3[num];
  if (str == null) {
    str = "";
  }
  let optional;
  if (tmp32 != null) {
    optional = tmp32.optional;
  }
  let tmp34 = true === optional;
  if (tmp34) {
    tmp34 = "" === str.trim();
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
    guildId(5196).hideActionSheet(c16);
  }, []);
  const items6 = [first3, onCreated, first, first2, result1, first4, template.id];
  closure_24 = obj3.useCallback(onCreated(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        let result = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            result = first4;
            if (!first4) {
              result = first2;
              if (null != first2) {
                result = preview_guild_id;
                if (null != preview_guild_id) {
                  result = result(tmp48[15]).isConjureWizardComplete(result1, first3);
                  if (result) {
                    closure_15(true);
                    _undefined2(null);
                    c3 = 1;
                    if (preview_guild_id !== ref.current) {
                      const obj8 = { guild_id: preview_guild_id, preview_guild_id };
                      const obj6 = result(tmp48[16]);
                      c4 = 2;
                      c5 = 1;
                      obj9 = {
                        value: result(tmp48[16]).setGuildHints(first2, obj8).catch((error) => {
                                            result = closure_1_0(10701).classifyCreateFailure(error);
                                            const obj = closure_1_0(10701);
                                            const conjureCreateError = new closure_1_0(10701).ConjureCreateError(result, closure_1_0(10701).createFailureStatus(error));
                                            throw conjureCreateError;
                                          }),
                        done: false
                      };
                      return obj9;
                    } else {
                      const obj10 = { templateId: closure_129_0.id };
                      _undefined(closure_129_9, result(tmp48[15]).formatConjureWizardAnswers(closure_129_21, closure_129_12), undefined, obj10);
                      closure_129_19.current = true;
                      const obj3 = result(tmp48[15]);
                      tmp3(tmp48[19]).hideActionSheet(_undefined2);
                      result = closure_129_3(closure_129_9, closure_129_7);
                      c3 = 0;
                      const obj5 = tmp3(tmp48[19]);
                    }
                  }
                  const obj11 = result(tmp48[15]);
                }
              }
            }
          }
        } else if (1 === result) {
          c3 = 0;
          closure_128_0 = tmp48;
          closure_129_16(result(tmp48[17]).getConjureCreateErrorMessage(closure_128_0));
          result = closure_129_15(false);
          const obj2 = result(tmp48[17]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          let obj = { value, done: true };
          return obj;
        }
        c5 = 3;
      } catch (tmp48) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp48;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items6);
  if ("about" === tmp31) {
    let name = template.name;
  } else if ("server" === tmp31) {
    name = result.title;
  } else {
    name = undefined;
    if (tmp32 != null) {
      name = tmp32.title;
    }
    if (name == null) {
      name = template.name;
    }
  }
  if (null != tmp17) {
    let obj5 = { variant: "text-sm/normal", color: "text-feedback-critical", children: tmp17 };
    let tmp43Result2 = closure_13(obj(5220).Text, obj5);
    let tmp39 = closure_13;
  } else {
    tmp39 = closure_13;
    let obj6 = { style: tmp.loading, children: closure_13(obj(6865).ActivityIndicator, {}) };
    tmp43Result2 = closure_13(c6, obj6);
  }
  let obj7 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: callback, header: tmp39(obj(7233).BottomSheetTitleHeader, { title: name }), children: null };
  let obj8 = { style: tmp.content, children: null };
  let tmp45 = null;
  if ("about" === tmp31) {
    let tmp43Result = tmp43Result2;
    if (null != conjureWizardIntroResult) {
      obj9 = { children: null };
      let obj10 = { variant: "text-md/medium", color: "text-default", children: conjureWizardIntroResult.lead };
      const items7 = [tmp39(obj(5220).Text, obj10), ];
      const points = conjureWizardIntroResult.points;
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
      tmp43Result = tmp43(closure_15, obj9);
    }
    tmp45 = tmp43Result;
  }
  const items8 = [tmp45, , , ];
  let tmp48 = "server" === tmp31;
  if (!tmp48) {
    items8[1] = null;
    let tmp51 = null;
    if (typeof tmp31 === "object") {
      if (null != tmp32) {
        let obj11 = { style: tmp.point, children: null };
        const obj12 = {
          placeholder: tmp32.placeholder,
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
        const items9 = [tmp39(obj(7165).TextArea, obj12), , ];
        let tmp39Result = null;
        if (null != tmp32.hint) {
          const obj13 = { variant: "text-sm/normal", color: "text-muted", children: tmp32.hint };
          tmp39Result = tmp39(obj(5220).Text, obj13);
        }
        items9[1] = tmp39Result;
        let tmp39Result4 = null;
        if (null != tmp17) {
          const obj14 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp17 };
          tmp39Result4 = tmp39(obj(5220).Text, obj14);
        }
        items9[2] = tmp39Result4;
        obj11.children = items9;
        tmp43Result2 = tmp43(tmp44, obj11, tmp32.id);
      }
      tmp51 = tmp43Result2;
    }
    items8[2] = tmp51;
    const obj15 = { style: tmp.actions, children: null };
    const obj16 = { style: tmp.action, children: null };
    if (0 === tmp4) {
      const obj17 = { variant: "secondary", text: null, disabled: null, onPress: null };
      const intl4 = obj(1128).intl;
      obj17.text = intl4.string(obj(1128).t["ETE/oC"]);
      obj17.disabled = first4;
      obj17.onPress = callback1;
      let obj18 = obj17;
    } else {
      obj18 = { variant: "secondary", text: null, disabled: null, onPress: null };
      const intl3 = obj(1128).intl;
      obj18.text = intl3.string(obj(1128).t["13/7kX"]);
      obj18.disabled = first4;
      obj18.onPress = function onPress() {
        return _undefined((arg0) => Math.max(0, arg0 - 1));
      };
    }
    obj16.children = tmp39(obj(5230).Button, obj18);
    const items10 = [tmp39(tmp44, obj16), ];
    if ("none" === first1) {
      items10[1] = null;
      obj15.children = items10;
      items8[3] = tmp43(tmp44, obj15);
      obj8.children = items8;
      obj7.children = tmp43(tmp44, obj8);
      return tmp39(obj(7283).ActionSheet, obj7);
    } else {
      const obj19 = { style: tmp.action, children: null };
      if (tmp4 === length - 1) {
        const obj20 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
        const intl5 = obj(1128).intl;
        obj20.text = intl5.string(tmp23(3830)["5iv8MF"]);
        let tmp56 = null == first2 || null == first;
        if (!tmp56) {
          obj = obj(11735);
          result3 = obj.isConjureWizardComplete(result1, first3);
          tmp56 = !result3;
        }
        obj20.disabled = tmp56;
        obj20.loading = first4;
        obj20.onPress = function onPress() {
          closure_24().catch(() => {

          });
        };
        let obj21 = obj20;
      } else {
        const intl6 = obj(1128).intl;
        const t = obj(1128).t;
        obj21 = { variant: "primary", text: intl6.string(tmp34 ? t["5Wxrcd"] : t.PDTjLN), disabled: null, onPress: null };
        if (tmp48) {
          tmp48 = null == first;
        }
        if (!tmp48) {
          let tmp55 = typeof tmp31 === "object";
          if (typeof tmp31 === "object") {
            tmp55 = !obj(11735).canLeaveConjureWizardQuestion(tmp32, str);
            const objResult10 = obj(11735);
          }
          tmp48 = tmp55;
        }
        obj21.disabled = tmp48;
        obj21.onPress = function onPress() {
          return _undefined((arg0) => Math.min(length - 1, arg0 + 1));
        };
      }
      obj19.children = tmp39(obj(5230).Button, obj21);
      tmp39(tmp44, obj19);
    }
  } else if (0 === stateFromStores.length) {
    const obj22 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl2 = obj(1128).intl;
    obj22.children = intl2.string(tmp23(3830)["6ys5dn"]);
    let tmp39Result6 = tmp39(obj(5220).Text, obj22);
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
    const intl = obj(1128).intl;
    obj24.accessibilityLabel = intl.string(tmp23(3830).lHT5Dp);
    obj24.children = stateFromStores.map((label) => map1(TableRadioRow.TableRadioRow, { label: label.name, value: label.id, disabled: first4 }, label.id));
    const items11 = [tmp39(obj(6970).TableRadioGroup, obj24), ];
    const obj25 = { variant: "text-sm/normal", color: "text-muted", children: result.hint };
    items11[1] = tmp39(obj(5220).Text, obj25);
    obj23.children = items11;
    tmp39Result6 = tmp43(closure_15, obj23);
  }
};
export const CONJURE_TEMPLATE_WIZARD_SHEET_KEY = "ConjureTemplateWizardSheet";