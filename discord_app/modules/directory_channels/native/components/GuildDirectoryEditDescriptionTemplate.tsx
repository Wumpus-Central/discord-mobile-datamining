// discord_app/modules/directory_channels/native/components/GuildDirectoryEditDescriptionTemplate.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildDirectoryStore from "../../GuildDirectoryStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Keyboard: closure_7 } = get_ActivityIndicator);
const GuildDirectoryConstants = fn(12305);
({ DirectoryEntryCategories: closure_9, getHubCategories: c10 } = GuildDirectoryConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles({ container: { marginHorizontal: 16, gap: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/directory_channels/native/components/GuildDirectoryEditDescriptionTemplate.tsx",
);

export default function GuildDirectoryEditDescriptionTemplate(buttonLabel) {
  ({ onSubmit: require, entry, directoryChannelId } = buttonLabel);
  let defaultValue;
  closure_3 = undefined;
  let first1;
  noop = undefined;
  c6 = undefined;
  closure_7 = async function _handleSubmit(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp8;
            noop(true);
            c3 = 2;
            c4 = 3;
            c5 = 1;
            const obj1 = { value: _require(first1, defaultValue), done: false };
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_5(false);
          throw tmp38;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_0 = tmp38;
            const tmp22 = new tmp4(tmp38[9])(closure_128_0);
            closure_129_6(tmp22);
            c3 = 0;
            closure_129_5(false);
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c3 = 1;
          }
          c3 = 0;
          closure_129_5(false);
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp38) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp38;
        } else if (tmp2 === tmp40) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp = closure_13();
  let obj = require("initialize");
  const items = [GuildDirectoryStore];
  let obj1 = noop;
  let primaryCategoryId;
  const stateFromStores = obj.useStateFromStores(items, () =>
    GuildDirectoryStore.getCurrentCategoryId(directoryChannelId),
  );
  if (entry != null) {
    primaryCategoryId = entry.primaryCategoryId;
  }
  if (primaryCategoryId == null) {
    primaryCategoryId = stateFromStores;
  }
  const tmp7 = first1(noop.useState(primaryCategoryId), 2);
  defaultValue = tmp7[0];
  closure_3 = tmp7[1];
  let str;
  if (entry != null) {
    str = entry.description;
  }
  if (str == null) {
    str = "";
  }
  let tmp6Result = tmp6(obj1.useState(str), 2);
  first1 = tmp6Result[0];
  tmp6Result = tmp6(obj1.useState(false), 2);
  [tmp11, c5] = tmp6Result;
  const arr = closure_10(directoryChannelId);
  [obj3, c6] = first1(obj1.useState(null), 2);
  obj = { style: tmp.container, children: null };
  obj = {
    label: null,
    description: null,
    value: null,
    onChange: null,
    placeholder: null,
    maxLength: 200,
    status: null,
    errorMessage: null,
    submitBehavior: "blurAndSubmit",
    returnKeyType: "done",
  };
  const intl = tmp2(tmp3[11]).intl;
  obj.label = intl.string(require("util").t.FFFAGt);
  const intl2 = tmp2(tmp3[11]).intl;
  obj.description = intl2.string(require("util").t["/zbXqm"]);
  obj.value = first1;
  obj.onChange = tmp6Result[1];
  const intl3 = tmp2(tmp3[11]).intl;
  obj.placeholder = intl3.string(require("util").t.VzuITC);
  let str2 = "default";
  if (null != obj2) {
    str2 = "error";
  }
  obj.status = str2;
  let anyErrorMessage;
  if (obj2 != null) {
    anyErrorMessage = obj2.getAnyErrorMessage();
  }
  obj.errorMessage = anyErrorMessage;
  const items1 = [closure_11(require("TextArea").TextArea, obj), ,];
  obj1 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
  const intl4 = tmp2(tmp3[11]).intl;
  obj1.title = intl4.string(require("util").t.Olo8FB);
  obj1.defaultValue = defaultValue;
  obj1.onChange = function onChange(arg0) {
    React5.dismiss();
    closure_3(arg0);
  };
  obj1.children = arr.map((label) =>
    closure_1_11(require("TableRadioRow").TableRadioRow, { label: label.label, value: label.value }, label.value),
  );
  items1[1] = closure_11(require("TableRadioGroup").TableRadioGroup, obj1);
  let tmp17 = 0 === first1.length;
  if (!tmp17) {
    tmp17 = defaultValue === constants.ALL;
  }
  obj2 = {
    disabled: tmp17,
    onPress: function handleSubmit() {
      const self = this;
      const apply = closure_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    loading: tmp11,
    text: buttonLabel.buttonLabel,
    size: "lg",
  };
  items1[2] = closure_11(require("components/Button/Button").Button, obj2);
  obj.children = items1;
  return closure_12(c6, obj);
}
