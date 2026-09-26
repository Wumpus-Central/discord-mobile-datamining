// discord_app/modules/guild_settings/native/GuildSettingsModalTemplate.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import CopyIcon2 from "../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import Input from "../../../design/components/Input/native/Input.native.tsx";
import CircleXIcon2 from "../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import HeaderActionButton from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import native from "../../../design/components/experimental/native.tsx";
import guild_templates_GuildTemplateActionCreatorsDefault from "../../guild_templates/native/GuildTemplateActionCreators.tsx";
import GuildTemplateSettingsUtils from "../../guild_templates/GuildTemplateSettingsUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const SceneLoadingIndicator = Text(6460);
const Form = Text(8053);
require = fn;
function TemplateForm(guildId) {
  guildId = guildId.guildId;
  const guildTemplate = guildId.guildTemplate;
  let navigation;
  _slicedToArray = undefined;
  first = undefined;
  closure_6 = undefined;
  first1 = undefined;
  closure_9 = undefined;
  c10 = undefined;
  str = undefined;
  str2 = undefined;
  closure_13 = undefined;
  let onDeleted;
  let callback1;
  let memo;
  closure_17 = async function _handleCreate() {
    React5(null);
    closure_2_10(true);
    await tmp3(tmp36[14]).createGuildTemplate(guildId, str, str2);
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = tmp36;
      const aPIError = new guildId(tmp36[15]).APIError(closure_128_0);
      closure_129_7(aPIError);
      closure_129_10(false);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_129_14();
      c3 = 0;
    }
    return value;
  };
  const tmp = c10();
  navigation = guildId(navigation[12]).useNavigation();
  let obj = guildId(navigation[12]);
  [str, tmp6] = first.useState(null);
  c3 = tmp6;
  const tmp5 = _slicedToArray(first.useState(null), 2);
  [str2, tmp8] = first.useState(null);
  _slicedToArray = tmp8;
  [first, closure_6] = first.useState(false);
  let tmp7 = _slicedToArray(first.useState(null), 2);
  [obj3, tmp12] = first.useState(null);
  c7 = tmp12;
  [first1, closure_9] = first.useState(false);
  const tmp11 = _slicedToArray(first.useState(null), 2);
  [tmp16, c10] = first.useState(false);
  if (str == null) {
    let name;
    if (guildTemplate != null) {
      name = guildTemplate.name;
    }
    str = name;
  }
  if (str == null) {
    str = "";
  }
  if (str2 == null) {
    let description;
    if (guildTemplate != null) {
      description = guildTemplate.description;
    }
    str2 = description;
  }
  if (str2 == null) {
    str2 = "";
  }
  let tmp19 = null != guildTemplate;
  if (tmp19) {
    tmp19 = str.trim() !== guildTemplate.name || str2.trim() !== guildTemplate.description;
    const tmp20 = str.trim() !== guildTemplate.name || str2.trim() !== guildTemplate.description;
  }
  closure_13 = tmp19;
  onDeleted = obj2.useCallback(() => {
    _undefined(null);
    _undefined2(null);
  }, []);
  const items = [tmp19];
  callback1 = obj2.useCallback(() => {
    if (closure_13) {
      let _Promise1 = new _Promise((arg0) => {
        closure_0 = arg0;
        const obj2 = {
          key: "guild-template-unsaved-changes",
          title: null,
          content: null,
          confirmText: null,
          cancelText: null,
          onConfirm: null,
          onCloseCallback: null,
        };
        const intl = guildId(1115).intl;
        obj2.title = intl.string(guildId(1115).t.pvRCSu);
        const intl2 = guildId(1115).intl;
        obj2.content = intl2.string(guildId(1115).t.DRi46S);
        const intl3 = guildId(1115).intl;
        obj2.confirmText = intl3.string(guildId(1115).t["6GQDFu"]);
        const intl4 = guildId(1115).intl;
        obj2.cancelText = intl4.string(guildId(1115).t.DmDzZB);
        obj2.onConfirm = function onConfirm() {
          return closure_0(true);
        };
        obj2.onCloseCallback = function onCloseCallback() {
          return closure_0(false);
        };
        guildId(5209).showConfirmModal(obj2);
      });
    } else {
      _Promise1 = _Promise.resolve(true);
    }
    return _Promise1;
  }, items);
  const items1 = [str];
  memo = obj2.useMemo(() => GuildTemplateSettingsUtils.isGuildTemplateNameValid(str), items1);
  const items2 = [str.length, first, memo];
  let memo1 = obj2.useMemo(() => {
    if (!first) {
      if (str.length >= 1) {
        if (!memo) {
          const intl = util.intl;
          return intl.string(util.t.IHAlh1);
        }
      }
    }
  }, items2);
  const items3 = [onDeleted, str2, guildId, guildTemplate, callback1, tmp19, str, memo, navigation, first1];
  const effect = obj2.useEffect(() => {
    function handleSave() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_1 = async function _handleSave() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c5 = 2;
          let tmp7 = c4;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              tmp7 = closure_1;
              if (null != closure_1) {
                closure_1_7(null);
                closure_1_9(true);
                c3 = 1;
                const obj2 = guildTemplate(11270);
                c4 = 2;
                c5 = 1;
                const obj5 = { value: obj2.updateGuildTemplate(closure_0, tmp7.code, str, str2), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_0 = closure_2;
              const aPIError = new handleSave(4735).APIError(closure_128_0);
              closure_1_7(aPIError);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              onDeleted();
              c3 = 0;
            }
            tmp7 = closure_1_9(false);
          }
          c5 = 3;
        } catch (tmp36) {
          closure_2 = tmp36;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp36;
          } else {
            c4 = tmp;
          }
        }
      }
    };
    if (first1) {
      let fn = () => null;
    } else {
      fn = guildId(navigation[16]).getHeaderConditionalBackButton(callback1);
      let obj = guildId(navigation[16]);
    }
    let obj2 = { headerLeft: fn, headerRight: null };
    if (first1) {
      let fn2 = () => closure_1_7(handleSave(navigation[16]).HeaderSubmittingIndicator, {});
    } else if (closure_13) {
      fn2 = () => {
        const obj = { onPress: handleSave, text: null, disabled: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["R3BPH+"]);
        obj.disabled = !memo;
        return React5(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    obj2.headerRight = fn2;
    navigation.setOptions(obj2);
  }, items3);
  let tmp29Result2 = null != obj3;
  if (tmp29Result2) {
    tmp29Result2 = null == obj3.getFirstFieldErrorMessage("name");
  }
  if (tmp29Result2) {
    tmp29Result2 = null == obj3.getFirstFieldErrorMessage("description");
  }
  let obj4 = { style: tmp.container, contentContainerStyle: null, children: null };
  const items4 = [tmp.containerContent, guildId.contentContainerStyle];
  obj4.contentContainerStyle = items4;
  let obj5 = { spacing: guildTemplate(navigation[6]).space.PX_24, children: null };
  const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  let intl = tmp2(tmp3[10]).intl;
  const tmp15 = _slicedToArray(first.useState(false), 2);
  const tmp28 = closure_9;
  obj6.children = intl.string(guildId(navigation[10]).t.c0m8bK).trim();
  const items5 = [c7(guildId(navigation[9]).Text, obj6), c7(str2, {}), , , ,];
  const obj7 = {
    label: null,
    required: true,
    value: null,
    onChange: null,
    placeholder: null,
    maxLength: 100,
    onFocus: null,
    onBlur: null,
    errorMessage: null,
  };
  let intl2 = tmp2(tmp3[10]).intl;
  obj7.label = intl2.string(guildId(navigation[10]).t.z1a9R1);
  obj7.value = str;
  obj7.onChange = tmp6;
  let intl3 = tmp2(tmp3[10]).intl;
  obj7.placeholder = intl3.string(guildId(navigation[10]).t.bMlpvk);
  obj7.onFocus = function onFocus() {
    return closure_6(true);
  };
  obj7.onBlur = function onBlur() {
    return closure_6(false);
  };
  if (memo1 == null) {
    let firstFieldErrorMessage;
    if (obj3 != null) {
      firstFieldErrorMessage = obj3.getFirstFieldErrorMessage("name");
    }
    memo1 = firstFieldErrorMessage;
  }
  obj7.errorMessage = memo1;
  items5[2] = c7(guildId(navigation[19]).TextInput, obj7);
  const obj8 = { label: null, value: null, onChange: null, placeholder: null, maxLength: 120, errorMessage: null };
  let intl4 = tmp2(tmp3[10]).intl;
  obj8.label = intl4.string(guildId(navigation[10]).t.GxirWa);
  obj8.value = str2;
  obj8.onChange = tmp8;
  const intl5 = tmp2(tmp3[10]).intl;
  obj8.placeholder = intl5.string(guildId(navigation[10]).t.n1FBXh);
  let firstFieldErrorMessage1;
  if (obj3 != null) {
    firstFieldErrorMessage1 = obj3.getFirstFieldErrorMessage("description");
  }
  obj8.errorMessage = firstFieldErrorMessage1;
  items5[3] = c7(guildId(navigation[20]).TextArea, obj8);
  if (null != guildTemplate) {
    const obj9 = { guildId, guildTemplate, onError: tmp12, onDeleted };
    let tmp29Result = tmp29(onDeleted, obj9);
  } else {
    const obj10 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
    const intl6 = tmp2(tmp3[10]).intl;
    obj10.text = intl6.string(tmp2(tmp3[10]).t.Wxdi8A);
    obj10.loading = tmp16;
    obj10.disabled = !memo;
    obj10.onPress = function handleCreate() {
      const self = this;
      const apply = closure_17.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    tmp29Result = tmp29(tmp2(tmp3[21]).Button, obj10);
  }
  items5[4] = tmp29Result;
  if (tmp29Result2) {
    const obj11 = { variant: "text-sm/normal", color: "text-feedback-critical", children: obj3.getAnyErrorMessage() };
    tmp29Result2 = tmp29(tmp2(tmp3[9]).Text, obj11);
  }
  const obj12 = { children: null };
  items5[5] = tmp29Result2;
  obj5.children = items5;
  obj4.children = first1(guildId(navigation[18]).Stack, obj5);
  const items6 = [c7(guildId(navigation[8]).Form, obj4), c7(guildId(navigation[22]).NavScrim, {})];
  obj12.children = items6;
  return first1(tmp28, obj12);
}
function CopyRow(children) {
  const copies = children.copies;
  if (copies) {
    let CircleXIcon = CircleCheckIcon.CircleCheckIcon;
    let tmp4 = require;
  } else {
    CircleXIcon = CircleXIcon2.CircleXIcon;
    tmp4 = require;
  }
  const obj = { style: closure_10().copyRow, children: null };
  const colors = nativeDefault.colors;
  if (copies) {
    let ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_POSITIVE;
    let tmp10 = importDefault;
  } else {
    ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_CRITICAL;
    tmp10 = importDefault;
  }
  const tmp = closure_10();
  const items = [
    React5(CircleXIcon, { size: "sm", color: ICON_FEEDBACK_CRITICAL, secondaryColor: tmp10(576).colors.WHITE }),
    React5(tmp4(4832).Text, { variant: "text-sm/normal", children: children.label }),
  ];
  obj.children = items;
  return React6(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4836);
let obj = {
  container: { flex: 1 },
  containerContent: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 },
  copyRow: null,
};
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.copyRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj);
let closure_12 = noop.memo(function DescriptionBox() {
  const obj = { children: null };
  const obj2 = { spacing: nativeDefault.space.PX_16, children: null };
  const obj3 = { spacing: nativeDefault.space.PX_12, children: null };
  const obj4 = { variant: "eyebrow", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["f8u+VO"]);
  const items = [React5(Text_Text.Heading, obj4), , ,];
  const obj5 = { copies: true, label: null };
  const intl2 = util.intl;
  obj5.label = intl2.string(util.t.K2tn16);
  items[1] = React5(CopyRow, obj5);
  const obj6 = { copies: true, label: null };
  const intl3 = util.intl;
  obj6.label = intl3.string(util.t.om5gNq);
  items[2] = React5(CopyRow, obj6);
  const obj7 = { copies: true, label: null };
  const intl4 = util.intl;
  obj7.label = intl4.string(util.t["/VNqdD"]);
  items[3] = React5(CopyRow, obj7);
  obj3.children = items;
  const items1 = [React6(Stack_Stack.Stack, obj3)];
  const obj8 = { spacing: nativeDefault.space.PX_12, children: null };
  const obj9 = { variant: "eyebrow", children: null };
  const intl5 = util.intl;
  obj9.children = intl5.string(util.t["8zhJEr"]);
  const items2 = [React5(Text_Text.Heading, obj9), , ,];
  const obj10 = { copies: false, label: null };
  const intl6 = util.intl;
  obj10.label = intl6.string(util.t.WOKI6t);
  items2[1] = React5(CopyRow, obj10);
  const obj11 = { copies: false, label: null };
  const intl7 = util.intl;
  obj11.label = intl7.string(util.t.ddhDJH);
  items2[2] = React5(CopyRow, obj11);
  const obj12 = { copies: false, label: null };
  const intl8 = util.intl;
  obj12.label = intl8.string(util.t["6Q/DHk"]);
  items2[3] = React5(CopyRow, obj12);
  obj8.children = items2;
  items1[1] = React6(Stack_Stack.Stack, obj8);
  obj2.children = items1;
  obj.children = React6(Stack_Stack.Stack, obj2);
  return React5(Card.Card, obj);
});
let closure_14 = noop.memo(function TemplateControls(arg0) {
  ({ guildId: require, guildTemplate } = arg0);
  ({ onError: dependencyMap, onDeleted: asyncGeneratorStep } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  closure_6 = async function _handleSync() {
    dependencyMap(null);
    _slicedToArray(true);
    await tmp3(tmp32[14]).syncGuildTemplate(closure_2_0, code.code);
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = tmp32;
      const aPIError = new closure_0(tmp32[15]).APIError(closure_128_0);
      closure_129_2(aPIError);
      closure_129_4(false);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    return value;
  };
  function handleDelete() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_8 = async function _handleDelete() {
    dependencyMap(null);
    await tmp3(tmp30[14]).deleteGuildTemplate(closure_2_0, code.code);
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = tmp30;
      const aPIError = new closure_0(tmp30[15]).APIError(closure_128_0);
      closure_129_2(aPIError);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_129_3();
      c3 = 0;
    }
    return value;
  };
  const tmp = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp[1];
  const tmp3 = guildTemplate(17449)(guildTemplate.code);
  noop = tmp3;
  let obj = { spacing: guildTemplate(576).space.PX_12, children: null };
  let obj2 = { label: null, children: null };
  let intl = util.intl;
  obj2.label = intl.string(util.t.zGGcLw);
  const obj3 = {
    text: tmp3,
    value: tmp3,
    icon: handleDelete(CopyIcon2.CopyIcon, {}),
    iconPosition: "end",
    onPress: function handleCopyLink() {
      ClipboardUtils.copy(closure_5);
      ToastUtils.presentLinkCopied();
    },
    accessibilityLabel: null,
    accessibilityHint: null,
  };
  let intl2 = util.intl;
  obj3.accessibilityLabel = intl2.string(util.t.zGGcLw);
  let intl3 = util.intl;
  obj3.accessibilityHint = intl3.string(util.t.WqhZss);
  obj2.children = handleDelete(native.InputButton, obj3);
  const items = [handleDelete(Input.Input, obj2), , , ,];
  let isDirty = guildTemplate.isDirty;
  if (isDirty) {
    const obj4 = { children: null };
    const obj5 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
    const intl4 = util.intl;
    obj5.children = intl4.string(util.t.aWsjtD);
    const items1 = [tmp6(Text_Text.Text, obj5)];
    const obj6 = { variant: "primary", text: null, loading: null, onPress: null };
    const intl5 = util.intl;
    obj6.text = intl5.string(util.t["Nw+0Y/"]);
    obj6.loading = tmp[0];
    obj6.onPress = function handleSync() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    items1[1] = tmp6(components_Button_Button.Button, obj6);
    obj4.children = items1;
    isDirty = tmp4(closure_9, obj4);
  }
  items[1] = isDirty;
  const obj7 = { variant: "critical-secondary", text: null, onPress: null };
  const intl6 = util.intl;
  obj7.text = intl6.string(util.t["cN/RFD"]);
  obj7.onPress = function confirmDelete() {
    const obj2 = { key: "delete-guild-template", title: null, content: null, confirmText: null, onConfirm: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t["cN/RFD"]);
    const intl2 = util.intl;
    obj2.content = intl2.string(util.t["apCQv/"]);
    const intl3 = util.intl;
    obj2.confirmText = intl3.string(util.t["cN/RFD"]);
    obj2.onConfirm = handleDelete;
    AlertModal.showConfirmModal(obj2);
  };
  items[2] = handleDelete(components_Button_Button.Button, obj7);
  const obj8 = { variant: "secondary", text: null, onPress: null };
  const intl7 = util.intl;
  obj8.text = intl7.string(util.t.YI3iV6);
  obj8.onPress = function onPress() {
    return guild_templates_GuildTemplateActionCreatorsDefault.showModal(guildTemplate.code, false);
  };
  items[3] = handleDelete(components_Button_Button.Button, obj8);
  let isDirty2 = guildTemplate.isDirty;
  if (isDirty2) {
    const obj9 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl8 = util.intl;
    const obj10 = { timestamp: null };
    const _Date = Date;
    const date = new Date(guildTemplate.updatedAt);
    obj10.timestamp = date;
    obj9.children = intl8.format(util.t.v0AVum, obj10);
    isDirty2 = tmp6(Text_Text.Text, obj9);
  }
  items[4] = isDirty2;
  obj.children = items;
  return closure_8(Stack_Stack.Stack, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalTemplate.tsx");

export default function GuildSettingsModalTemplate(arg0) {
  ({ guildId, contentContainerStyle } = arg0);
  let items = closure_10();
  let Text = require;
  let tmp = dependencyMap;
  const canViewAllChannels = GuildTemplateSettingsUtils.useCanViewAllChannels(guildId);
  let tmp3 = null;
  if (canViewAllChannels) {
    tmp3 = guildId;
  }
  const guildTemplate = GuildTemplateSettingsUtils.useGuildTemplate(tmp3);
  let message = guildTemplate.loadError;
  if (canViewAllChannels) {
    if (null != message) {
      const obj3 = { style: null, contentContainerStyle: null, children: null };
      ({ container: obj6.style, containerContent } = items);
      items = [containerContent, contentContainerStyle];
      obj3.contentContainerStyle = items;
      Text = Text_Text.Text;
      const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
      message = message.message;
      obj4.children = message;
      tmp = React5(Text, obj4);
      obj3.children = tmp;
      let tmp8Result = React5(Form.Form, obj3);
    } else if (tmp5) {
      tmp8Result = React5(SceneLoadingIndicator.SceneLoadingIndicator, {});
    } else {
      const obj5 = { guildId, guildTemplate: tmp6, contentContainerStyle };
      tmp8Result = React5(TemplateForm, obj5);
    }
  } else {
    const obj7 = { style: items.container, contentContainerStyle: null, children: null };
    const items1 = [items.containerContent, contentContainerStyle];
    obj7.contentContainerStyle = items1;
    const obj12 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl = util.intl;
    obj12.children = intl.string(util.t.f0IPAG);
    obj7.children = React5(Text_Text.Text, obj12);
    return React5(Form.Form, obj7);
  }
}
