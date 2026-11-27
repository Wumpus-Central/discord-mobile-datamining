// === Module 18724: ConjureSecretsSheet ===

// Module 18724 (ConjureSecretsSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import Text_Text from "Text/Text" /* 5634 */;
import components_Button_Button from "components/Button/Button" /* 5641 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7480 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7507 */;
import ActionSheet from "ActionSheet" /* 7546 */;
import ActionSheetCloseButton from "ActionSheetCloseButton" /* 7547 */;
import conjureSetupForm from "conjureSetupForm" /* 18531 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 7710 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const sendUserMessage = fn(7693).sendUserMessage;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5043);
let closure_11 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_24, paddingBottom }, footer: null, step: null, stepHeader: null, copyRow: null, copyInfo: null };
  const obj2 = { gap: nativeDefault.space.PX_24, paddingBottom };
  obj.footer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
  const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
  obj.step = { gap: nativeDefault.space.PX_12 };
  const obj4 = { gap: nativeDefault.space.PX_12 };
  obj.stepHeader = { gap: nativeDefault.space.PX_4 };
  const obj5 = { gap: nativeDefault.space.PX_4 };
  obj.copyRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.copyInfo = { flex: 1, gap: nativeDefault.space.PX_4 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretsSheet.tsx");

export default function ConjureSecretsSheet(arg0) {
  ({ projectId: require, request } = arg0);
  dependencyMap = undefined;
  closure_3 = undefined;
  let ref1;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  let loading;
  closure_10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  closure_14 = undefined;
  closure_15 = undefined;
  let found;
  closure_17 = undefined;
  c18 = undefined;
  closure_19 = undefined;
  closure_20 = async function _handleSubmit() {
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
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp7;
            if (closure_2_17) {
              if (!first) {
                refs(true);
                _undefined4(false);
                if (true === request.over_mcp) {
                  const result = closure_0(tmp78[13]).markMcpSecretRequestSaved(request.request_id);
                  const obj6 = closure_0(tmp78[13]);
                }
                c3 = 1;
                let submitProjectSecretsResult = require;
                const obj4 = { secrets: null };
                const _Object = Object;
                obj4.secrets = Object.fromEntries(found.map((item) => {
                  items = [item, closure_1_5[item].trim()];
                  return items;
                }));
                if (null != request.request_id) {
                  const obj8 = { request_id: request.request_id };
                  let obj9 = obj8;
                } else {
                  obj9 = {};
                }
                const merged = Object.assign(obj9);
                submitProjectSecretsResult = closure_0(tmp78[14]).submitProjectSecrets(submitProjectSecretsResult, obj4);
                c4 = 2;
                c5 = 1;
                const obj7 = closure_0(tmp78[14]);
              }
            }
            c5 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_0 = tmp78;
          const result1 = closure_0(tmp78[13]).unmarkMcpSecretRequestSaved(closure_129_1.request_id);
          closure_129_10(false);
          if (closure_128_0 instanceof closure_0(tmp78[14]).ConjureSecretRequestExpiredError) {
            if (true !== closure_129_1.over_mcp) {
              const intl3 = closure_0(tmp78[15]).intl;
              _undefined3(closure_129_0, intl3.string(tmp3(tmp78[16]).KVBvVy));
            }
            const current2 = closure_129_4.current;
            if (current2 != null) {
              current2.closeActionSheet();
            }
          } else {
            closure_129_11(true);
          }
          c5 = 3;
          const obj5 = closure_0(tmp78[13]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
          closure_129_6({});
          closure_129_8({});
          if (true === closure_129_1.over_mcp) {
            if (closure_129_19) {
              const obj10 = { text: null, variant: "success" };
              const intl2 = closure_0(tmp78[15]).intl;
              const obj11 = { items: closure_129_18 };
              obj10.text = intl2.formatToPlainString(tmp3(tmp78[16])["xfz7+k"], obj11);
              closure_0(tmp78[17]).showToast(obj10);
              const obj = closure_0(tmp78[17]);
            }
            const current = closure_129_4.current;
            if (current != null) {
              current.closeActionSheet();
            }
          } else {
            const intl = closure_0(tmp78[15]).intl;
            const tmp17 = tmp3(tmp78[16]);
            if (closure_129_19) {
              let UGqnoV = tmp17.sMQt5O;
            } else {
              UGqnoV = tmp17.UGqnoV;
            }
            _undefined3(closure_129_0, intl.string(UGqnoV));
          }
        }
        c3 = 0;
        c5 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } catch (tmp78) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp78;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp3 = request(8487)();
  const height = tmp3.height;
  let num = 0;
  ({ ref, onLayout } = tmp3);
  if (undefined !== height) {
    num = height;
  }
  const tmp4Result = c11(num);
  dependencyMap = tmp4Result;
  items = [c8];
  closure_3 = initialize.useStateFromStores(items, () => ConjureSettingsStore.getSettings(require));
  ref1 = noop.useRef(null);
  [c5, c6] = ref1(noop.useState({}), 2);
  const tmp8 = ref1(noop.useState({}), 2);
  [c7, c8] = ref1(noop.useState({}), 2);
  const tmp10 = ref1(noop.useState(false), 2);
  loading = tmp10[0];
  closure_10 = tmp10[1];
  const tmp9 = ref1(noop.useState({}), 2);
  [tmp13, c11] = ref1(noop.useState(false), 2);
  const tmp12 = ref1(noop.useState(false), 2);
  [c12, c13] = ref1(noop.useState(null), 2);
  closure_14 = noop.useCallback((arg0) => {
    closure_0 = arg0;
    require("ClipboardUtils").copy(arg0, () => c13(closure_0));
  }, []);
  closure_15 = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined4(false);
    _undefined2((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[closure_0] = closure_1;
      return obj;
    });
  }, []);
  const fields1 = request.fields;
  const mapped = fields1.map((name) => name.name);
  found = mapped.filter((item) => {
    let str = _undefined[item];
    if (str == null) {
      str = "";
    }
    return "" !== str.trim();
  });
  closure_17 = tmp15;
  const tmp14 = ref1(noop.useState(null), 2);
  const fields2 = request.fields;
  const found1 = fields2.filter((name) => {
    const hasItem = found.includes(name.name);
    let tmp2 = !hasItem;
    if (!hasItem) {
      name = name.name;
      let someResult;
      if (closure_3 != null) {
        const secrets = closure_3.secrets;
        someResult = secrets.some((name) => name.name === name && name.set);
      }
      tmp2 = true !== someResult;
    }
    return tmp2;
  });
  let result = conjureSetupForm.conjureSetupNeededText(found1.map((label) => label.label));
  c18 = result;
  closure_19 = "" !== result;
  ({ fields, copy_values } = request);
  if (copy_values == null) {
    copy_values = [];
  }
  const fields3 = request.fields;
  const mapped1 = fields3.map((label) => {
    let obj = { label: label.label, help: label.hint, hosts: label.hosts, stored: null, replacing: null, onReplace: null, value: null, onChange: null, disabled: null };
    const name = label.name;
    let someResult;
    if (closure_3 != null) {
      const secrets = closure_3.secrets;
      someResult = secrets.some((name) => name.name === name && name.set);
    }
    obj.stored = true === someResult;
    obj.replacing = true === _undefined3[label.name];
    obj.onReplace = function onReplace() {
      return c8((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[name.name] = true;
        return obj;
      });
    };
    let str = _undefined[label.name];
    if (str == null) {
      str = "";
    }
    obj.value = str;
    obj.onChange = function onChange(arg0) {
      return closure_15(name.name, arg0);
    };
    obj.disabled = disabled;
    return disabled(request(closure_2[18]), obj, label.name);
  });
  const fields4 = request.fields;
  let result1 = conjureSetupForm.conjureSetupStatusText(fields4.map((key) => {
    let hasItem = found.includes(key.name);
    if (!hasItem) {
      const name = key.name;
      let someResult;
      if (closure_3 != null) {
        const secrets = closure_3.secrets;
        someResult = secrets.some((name) => name.name === name && name.set);
      }
      hasItem = true === someResult;
    }
    return { key: key.name, label: key.label, filled: hasItem, needed: !hasItem };
  }));
  let obj3 = { ref: ref1, startExpanded: true, keyboardShouldPersistTaps: "always", header: null, footer: null, children: null };
  let obj4 = { title: null, subtitle: null, trailing: null };
  let intl = util.intl;
  obj4.title = intl.string(request(4245).TuMGZp);
  let intl2 = util.intl;
  const tmp6Result = conjureSetupForm;
  obj4.subtitle = intl2.formatToPlainString(request(4245).hoevP8, {
    filled: fields.filter((name) => {
      let hasItem = found.includes(name.name);
      if (!hasItem) {
        name = name.name;
        let someResult;
        if (closure_3 != null) {
          const secrets = closure_3.secrets;
          someResult = secrets.some((name) => name.name === name && name.set);
        }
        hasItem = true === someResult;
      }
      return hasItem;
    }).length,
    total: request.fields.length
  });
  obj4.trailing = loading(ActionSheetCloseButton.ActionSheetCloseButton, {
    onPress() {
      const current = ref1.current;
      let closeActionSheetResult;
      if (current != null) {
        closeActionSheetResult = current.closeActionSheet();
      }
      return closeActionSheetResult;
    }
  });
  obj3.header = loading(BottomSheetTitleHeader.BottomSheetTitleHeader, obj4);
  let obj7 = { style: tmp4Result.footer, ref, onLayout, children: null };
  let tmp19Result = null;
  if (null != result1) {
    let obj8 = { variant: "body-xs/normal", color: "text-muted", lineClamp: conjureSetupForm.SETUP_STATUS_MAX_LINES, accessibilityLabel: result1, accessibilityLiveRegion: "polite", children: result1 };
    tmp19Result = tmp19(Text_Text.Text, obj8);
  }
  let items1 = [tmp19Result, ];
  let obj9 = { bottom: true, children: null };
  let obj10 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  let intl3 = util.intl;
  obj10.text = intl3.string(request(4245).DUdtms);
  obj10.loading = loading;
  obj10.disabled = found.length <= 0;
  obj10.onPress = function handleSubmit() {
    const self = this;
    const apply = closure_20.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj9.children = loading(components_Button_Button.Button, obj10);
  items1[1] = loading(common_SafeAreaView.SafeAreaPaddingView, obj9);
  obj7.children = items1;
  obj3.footer = closure_10(c6, obj7);
  let obj11 = { style: tmp4Result.container, children: null };
  let tmp19Result3 = null;
  if (null != request.note) {
    tmp19Result3 = null;
    if ("" !== request.note) {
      let obj12 = { text: request.note, variant: "body-sm/normal", color: "text-default", shortLinks: true };
      tmp19Result3 = tmp19(request(18533), obj12);
    }
  }
  const items2 = [tmp19Result3, , , ];
  let tmp20Result = null;
  if (copy_values.length > 0) {
    const obj13 = { style: tmp4Result.step, children: null };
    const obj14 = { style: tmp4Result.stepHeader, children: null };
    const obj15 = { variant: "heading-sm/semibold", children: null };
    const intl4 = util.intl;
    obj15.children = intl4.string(request(4245)["6sN6pA"]);
    const items3 = [tmp19(Text_Text.Heading, obj15), ];
    const obj16 = { variant: "body-xs/normal", color: "text-muted", children: null };
    const intl5 = util.intl;
    obj16.children = intl5.string(request(4245).u0vpJw);
    items3[1] = tmp19(Text_Text.Text, obj16);
    obj14.children = items3;
    const items4 = [
      tmp20(tmp21, obj14),
      copy_values.map((children) => {
          value = children;
          const obj = { style: closure_2.copyRow, children: null };
          const obj2 = { style: closure_2.copyInfo, children: null };
          items = [first(require("Text/Text").Text, { variant: "body-xs/semibold", color: "text-muted", children: children.label }), first(require("Text/Text").Text, { variant: "body-xs/normal", color: "text-default", children: children.value })];
          obj2.children = items;
          const items1 = [closure_10(c6, obj2), ];
          const intl = require("util").intl;
          if (c12 === children.value) {
            let OpuAlK = require("util").t.t5VZ88;
          } else {
            OpuAlK = require("util").t.OpuAlK;
          }
          items1[1] = first(require("components/Button/Button").Button, {
            variant: "secondary",
            size: "sm",
            text: intl.string(OpuAlK),
            onPress() {
              return closure_14(value.value);
            }
          });
          obj.children = items1;
          return closure_10(c6, obj, children.label);
        })
    ];
    obj13.children = items4;
    tmp20Result = tmp20(tmp21, obj13);
  }
  items2[1] = tmp20Result;
  let obj5 = {
    filled: fields.filter((name) => {
      let hasItem = found.includes(name.name);
      if (!hasItem) {
        name = name.name;
        let someResult;
        if (closure_3 != null) {
          const secrets = closure_3.secrets;
          someResult = secrets.some((name) => name.name === name && name.set);
        }
        hasItem = true === someResult;
      }
      return hasItem;
    }).length,
    total: request.fields.length
  };
  let obj6 = {
    onPress() {
      const current = ref1.current;
      let closeActionSheetResult;
      if (current != null) {
        closeActionSheetResult = current.closeActionSheet();
      }
      return closeActionSheetResult;
    }
  };
  const intl6 = util.intl;
  if (copy_values.length > 0) {
    let ekefN9 = request(4245).ekefN9;
  } else {
    ekefN9 = request(4245)["xEfQj/"];
  }
  const tmpResult = request(18551);
  items2[2] = loading(tmpResult, { title: intl6.string(ekefN9), children: mapped1 });
  let tmp19Result4 = null;
  if (tmp13) {
    const obj18 = { variant: "body-xs/normal", color: "text-feedback-critical", children: null };
    const intl7 = util.intl;
    obj18.children = intl7.string(request(4245).IrMuew);
    tmp19Result4 = tmp19(Text_Text.Text, obj18);
  }
  items2[3] = tmp19Result4;
  obj11.children = items2;
  obj3.children = closure_10(c6, obj11);
  return loading(ActionSheet.ActionSheet, obj3);
};
export const CONJURE_SECRETS_SHEET_KEY = "ConjureSecretsSheet";