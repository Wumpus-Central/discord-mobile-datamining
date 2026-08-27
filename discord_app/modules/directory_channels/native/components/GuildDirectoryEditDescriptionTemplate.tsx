// === Module 11801: GuildDirectoryEditDescriptionTemplate ===

// Module 11801 (GuildDirectoryEditDescriptionTemplate)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "isFetching" /* 11796 */;
import DirectoryEntryTypes from "DirectoryEntryTypes" /* 11789 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ View: closure_6, Keyboard: error } = get_ActivityIndicator);
({ DirectoryEntryCategories: c9, getHubCategories: c10 } = DirectoryEntryTypes);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({ container: { marginHorizontal: 16, gap: 24 } });
const result = require("set").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionTemplate.tsx");

export default function GuildDirectoryEditDescriptionTemplate(buttonLabel) {
  ({ onSubmit: require, entry, directoryChannelId } = buttonLabel);
  let first;
  closure_3 = undefined;
  let first1;
  let React;
  c6 = undefined;
  function _handleSubmit() {
    const self = this;
    const tmp = callback2(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp4;
              closure_0 = tmp8;
              v0(true);
              c3 = 2;
              c4 = 3;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(c4, closure_1_2);
              return obj1;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            v0(false);
            throw closure_2;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              closure_0 = closure_2;
              const tmp22 = new closure_1_1(closure_1_2[9])(closure_0);
              callback(tmp22);
              c3 = 0;
              v0(false);
              v0 = 3;
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c3 = 1;
            }
            c3 = 0;
            v0(false);
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp38) {
          closure_2 = tmp38;
          if (tmp5 === c3) {
            v0 = tmp3;
            throw tmp38;
          } else if (tmp2 === tmp40) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    closure_7 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2();
  let obj = require(first[8]);
  const items = [closure_8];
  obj1 = React;
  let primaryCategoryId;
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getCurrentCategoryId(directoryChannelId));
  if (entry != null) {
    primaryCategoryId = entry.primaryCategoryId;
  }
  if (primaryCategoryId == null) {
    primaryCategoryId = stateFromStores;
  }
  const tmp7 = first1(React.useState(primaryCategoryId), 2);
  first = tmp7[0];
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
  const arr = callback(directoryChannelId);
  [obj3, c6] = first1(obj1.useState(null), 2);
  obj = { style: tmp.container, children: null };
  obj = { label: null, description: null, value: null, onChange: null, placeholder: null, maxLength: 200, status: null, errorMessage: null, submitBehavior: "blurAndSubmit", returnKeyType: "done" };
  const intl = tmp2(tmp3[11]).intl;
  obj[0] = intl.string(require(first[11]).t.FFFAGt);
  const intl2 = tmp2(tmp3[11]).intl;
  obj[1] = intl2.string(require(first[11]).t["/zbXqm"]);
  obj[2] = first1;
  obj[3] = tmp6Result[1];
  const intl3 = tmp2(tmp3[11]).intl;
  obj[4] = intl3.string(require(first[11]).t.VzuITC);
  let str2 = "default";
  if (null != obj2) {
    str2 = "error";
  }
  obj[6] = str2;
  let anyErrorMessage;
  if (obj2 != null) {
    anyErrorMessage = obj2.getAnyErrorMessage();
  }
  obj[7] = anyErrorMessage;
  const items1 = [closure_11(require(first[10]).TextArea, obj), , ];
  obj1 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
  const intl4 = tmp2(tmp3[11]).intl;
  obj1[0] = intl4.string(require(first[11]).t.Olo8FB);
  obj1[1] = first;
  obj1[2] = function onChange(arg0) {
    _handleSubmit.dismiss();
    callback2(arg0);
  };
  obj1[4] = arr.map((label) => callback3(callback(first[13]).TableRadioRow, { label: label.label, value: label.value }, label.value));
  items1[1] = closure_11(require(first[12]).TableRadioGroup, obj1);
  let tmp17 = 0 === first1.length;
  if (!tmp17) {
    tmp17 = first === constants.ALL;
  }
  obj2 = {
    disabled: tmp17,
    onPress: function handleSubmit() {
      const self = this;
      const apply = _handleSubmit.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    loading: tmp11,
    text: buttonLabel.buttonLabel,
    size: "lg"
  };
  items1[2] = closure_11(require(first[14]).Button, obj2);
  obj[1] = items1;
  return closure_12(c6, obj);
};