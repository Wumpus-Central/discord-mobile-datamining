// === Module 11959: GuildDirectoryEditDescriptionTemplate ===

// Module 11959 (GuildDirectoryEditDescriptionTemplate)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 11954 */;
import GuildDirectoryConstants from "GuildDirectoryConstants" /* 11947 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, closure_2;

let c10;
let c9;
let closure_12;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ View: metroRequire, Keyboard: metroImportDefault } = react_native);
({ DirectoryEntryCategories: c9, getHubCategories: c10 } = GuildDirectoryConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ container: { marginHorizontal: 16, gap: 24 } });
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionTemplate.tsx");

export default function GuildDirectoryEditDescriptionTemplate(buttonLabel) {
  let _undefined;
  let anyErrorMessage;
  let c5;
  let c6;
  let directoryChannelId;
  let entry;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let obj3;
  let str2;
  let tmp12;
  ({ onSubmit: require, entry, directoryChannelId } = buttonLabel);
  let defaultValue;
  let closure_3;
  let first1;
  react = undefined;
  c6 = undefined;
  let obj = function _handleSubmit() {
    obj = _asyncToGenerator(async function() {
      let closure_1;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let closure_0;
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
              closure_0 = tmp4;
              _undefined(true);
              c3 = 2;
              c4 = 3;
              c5 = 1;
              const obj4 = { value: require(first1, defaultValue), done: false };
              return obj4;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_5(false);
            throw closure_2;
          } else {
            if (2 === c4) {
              c3 = 1;
              closure_0 = closure_2;
              const self = this;
              const self2 = this;
              const tmp16 = new tmp(closure_2[9])(closure_0);
              closure_129_6(tmp16);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_5(false);
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 1;
            }
            c3 = 0;
            closure_129_5(false);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp32) {
          closure_2 = tmp32;
          if (0 === c3) {
            c5 = 3;
            throw tmp32;
          } else if (1 === tmp34) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  buttonLabel = buttonLabel.buttonLabel;
  const tmp = closure_13();
  const tmp3 = defaultValue;
  const arr = closure_10(directoryChannelId);
  obj = require("get initialized");
  const items = [GuildDirectoryStore];
  let obj2 = react;
  let primaryCategoryId;
  const stateFromStores = obj.useStateFromStores(items, () => GuildDirectoryStore.getCurrentCategoryId(directoryChannelId));
  const useState = react.useState;
  if (entry != null) {
    primaryCategoryId = entry.primaryCategoryId;
  }
  if (primaryCategoryId == null) {
    primaryCategoryId = stateFromStores;
  }
  const tmp7 = first1(useState(primaryCategoryId), 2);
  defaultValue = tmp7[0];
  closure_3 = tmp7[1];
  let str;
  const useState2 = obj2.useState;
  if (entry != null) {
    str = entry.description;
  }
  if (str == null) {
    str = "";
  }
  const tmp6Result = first1(useState2(str), 2);
  first1 = tmp6Result[0];
  const tmp10 = tmp6Result[1];
  [tmp12, c5] = first1(obj2.useState(false), 2);
  first1(obj2.useState(false), 2);
  [obj3, c6] = first1(obj2.useState(null), 2);
  let obj4 = { style: tmp.container, children: items1 };
  const obj5 = { label: intl.string(require("intl").t.FFFAGt), description: intl2.string(require("intl").t["/zbXqm"]), value: first1, onChange: tmp10, placeholder: intl3.string(require("intl").t.VzuITC), maxLength: 200, status: str2, errorMessage: anyErrorMessage, submitBehavior: "blurAndSubmit", returnKeyType: "done" };
  first1(obj2.useState(null), 2);
  const TextArea = require("TextArea").TextArea;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  intl3 = require("intl").intl;
  str2 = "default";
  const tmp15 = c6;
  if (null != obj3) {
    str2 = "error";
  }
  anyErrorMessage = undefined;
  if (obj3 != null) {
    anyErrorMessage = obj3.getAnyErrorMessage();
  }
  items1 = [closure_11(TextArea, obj5), , ];
  const obj6 = {
    title: intl4.string(require("intl").t.Olo8FB),
    defaultValue,
    onChange(arg0) {
      metroImportDefault.dismiss();
      closure_3(arg0);
    },
    hasIcons: false,
    children: arr.map((label) => {
      obj = { label: label.label, value: label.value };
      return closure_1_11(require("TableRadioRow").TableRadioRow, obj, label.value);
    })
  };
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  intl4 = require("intl").intl;
  items1[1] = closure_11(TableRadioGroup, obj6);
  let tmp18 = 0 === first1.length;
  const Button = require("components/Button/Button").Button;
  if (!tmp18) {
    tmp18 = defaultValue === constants.ALL;
  }
  const obj7 = {
    disabled: tmp18,
    onPress: function handleSubmit() {
      return obj(...arguments);
    },
    loading: tmp12,
    text: buttonLabel,
    size: "lg"
  };
  items1[2] = closure_11(Button, obj7);
  return closure_12(tmp15, obj4);
};