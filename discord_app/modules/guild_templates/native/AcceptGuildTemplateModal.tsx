// discord_app/modules/guild_templates/native/AcceptGuildTemplateModal.tsx
import jsxProd from "jsxProd";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import handleGuildTemplateResolveSuccess from "handleGuildTemplateResolveSuccess";
import { UPLOAD_MEDIUM_SIZE } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function ConnectedAcceptGuildTemplate(code) {
  code = code.code;
  let stateFromStores;
  let first;
  let dependencyMap;
  let first1;
  let callback;
  let React;
  let obj = code(589);
  const items = [handleGuildTemplateResolveSuccess];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuildTemplate(code));
  const tmp = createCacheKey();
  const tmp3 = callback(React.useState(first(5108).getGuildNameSuggestion()), 2);
  first = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp5 = callback(React.useState(null), 2);
  first1 = tmp5[0];
  callback = tmp5[1];
  const tmp7 = callback(React.useState(null), 2);
  React = tmp7[1];
  stateFromStores(11001)(stateFromStores);
  obj = { top: true, style: tmp.container, children: null };
  obj = {
    code,
    guildTemplate: stateFromStores,
    name: first,
    setName(arg0) {
      return dependencyMap(arg0);
    },
    icon: first1,
    errors: tmp7[0],
    chooseIcon: null,
    createServer: null
  };
  let obj2 = first(5108);
  obj[6] = first1(function*() {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        table = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let base64 = tmp2;
            base64 = undefined;
            let obj1 = outer1_1(table[13]);
            obj1 = { size: null };
            obj1[0] = outer1_8;
            c2 = 1;
            table = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = obj1.openImagePicker(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          base64 = arg1.base64;
          if (null != base64) {
            callback(base64);
          }
          table = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        table = tmp;
        throw tmp17;
      }
    }
  });
  obj[7] = function createServer() {
    if (null != stateFromStores) {
      const obj = stateFromStores(11005);
      stateFromStores(11005).acceptGuildTemplate(tmp.code, first, first1).then(() => callback(table[15]).hideModal(), (arg0) => callback2(arg0));
      const acceptGuildTemplateResult = stateFromStores(11005).acceptGuildTemplate(tmp.code, first, first1);
    }
  };
  obj[2] = jsx(stateFromStores(11002), {
    code,
    guildTemplate: stateFromStores,
    name: first,
    setName(arg0) {
      return dependencyMap(arg0);
    },
    icon: first1,
    errors: tmp7[0],
    chooseIcon: null,
    createServer: null
  });
  return jsx(code(5181).SafeAreaPaddingView, {
    code,
    guildTemplate: stateFromStores,
    name: first,
    setName(arg0) {
      return dependencyMap(arg0);
    },
    icon: first1,
    errors: tmp7[0],
    chooseIcon: null,
    createServer: null
  });
}
createCacheKey = { container: null };
createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const ACCEPT_GUILD_TEMPLATE = "ACCEPT_GUILD_TEMPLATE";
const result = require("noop").fileFinishedImporting("modules/guild_templates/native/AcceptGuildTemplateModal.tsx");

export default function AcceptGuildTemplateModal(code) {
  code = code.code;
  const items = [code];
  const memo = React.useMemo(() => {
    obj = { code: obj };
    obj = {};
    obj = { title: "", fullscreen: true, headerLeft: null, render: null };
    obj[2] = code(outer1_3[16]).getHeaderCloseButton(() => callback(table[15]).hideModal());
    obj[3] = function render() {
      const obj = {};
      const merged = Object.assign(obj);
      return outer1_9(outer1_11, obj);
    };
    obj[outer1_12] = obj;
    return obj;
  }, items);
  return jsx(code(5574).Navigator, { initialRouteName: ACCEPT_GUILD_TEMPLATE, screens: memo });
};