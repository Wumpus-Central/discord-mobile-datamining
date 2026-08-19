// === Module 10972: ConnectedAcceptGuildTemplate ===

// Module 10972 (ConnectedAcceptGuildTemplate)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import handleGuildTemplateResolveSuccess from "handleGuildTemplateResolveSuccess" /* 7429 */;
import { UPLOAD_MEDIUM_SIZE } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
function ConnectedAcceptGuildTemplate(code) {
  code = code.code;
  let first;
  let callback;
  let React;
  let obj = code(589);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getGuildTemplate(code));
  const tmp = callback2();
  const tmp3 = callback(React.useState(first(6777).getGuildNameSuggestion()), 2);
  first = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp5 = callback(React.useState(null), 2);
  const first1 = tmp5[0];
  callback = tmp5[1];
  const tmp7 = callback(React.useState(null), 2);
  React = tmp7[1];
  stateFromStores(10973)(stateFromStores);
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
  let obj2 = first(6777);
  obj[6] = first1(function*() {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw base64;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = base64;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        table = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            table = 3;
            throw base64;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = base64;
            return obj;
          } else {
            closure_1 = tmp5;
            base64 = tmp2;
            base64 = undefined;
            obj1 = stateFromStores(table[13]);
            obj1 = { size: null };
            obj1[0] = closure_1_8;
            c2 = 1;
            table = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = obj1.openImagePicker(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          table = 3;
          throw base64;
        } else if (arg0 === 2) {
          table = 3;
          obj = { value: null, done: true };
          obj[0] = base64;
          return obj;
        } else {
          base64 = base64.base64;
          if (null != base64) {
            callback(base64);
          }
          table = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp17) {
        table = tmp;
        throw tmp17;
      }
    }
  });
  obj[7] = function createServer() {
    if (null != stateFromStores) {
      const obj = stateFromStores(10984);
      stateFromStores(10984).acceptGuildTemplate(tmp.code, first, first1).then((result) => callback(table[15]).hideModal(), (arg0) => callback2(arg0));
      const acceptGuildTemplateResult = stateFromStores(10984).acceptGuildTemplate(tmp.code, first, first1);
    }
  };
  obj[2] = jsx(stateFromStores(10974), {
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
  return jsx(code(6803).SafeAreaPaddingView, {
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
const createCacheKey = { flex: 1, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
const ACCEPT_GUILD_TEMPLATE = "ACCEPT_GUILD_TEMPLATE";
const result = require("obj132").fileFinishedImporting("modules/guild_templates/native/AcceptGuildTemplateModal.tsx");

export default function AcceptGuildTemplateModal(code) {
  code = code.code;
  const items = [code];
  const memo = React.useMemo(() => {
    let obj = {
      title: "",
      fullscreen: true,
      headerLeft: code(dependencyMap[16]).getHeaderCloseButton(() => callback(table[15]).hideModal()),
      render() {
        obj = {};
        const merged = Object.assign(obj);
        return closure_1_9(closure_1_11, obj);
      }
    };
    obj[ACCEPT_GUILD_TEMPLATE] = obj;
    return obj;
  }, items);
  return jsx(code(6312).Navigator, { initialRouteName: ACCEPT_GUILD_TEMPLATE, screens: memo });
};