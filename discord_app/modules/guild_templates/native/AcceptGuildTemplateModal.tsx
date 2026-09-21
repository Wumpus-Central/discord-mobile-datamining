// === Module 12047: AcceptGuildTemplateModal ===

// Module 12047 (AcceptGuildTemplateModal)
import NavigatorHeader from "NavigatorHeader" /* 5841 */;
import AcceptGuildTemplateActionCreatorsDefault from "AcceptGuildTemplateActionCreators" /* 12059 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7699 */;

require = fn;
function ConnectedAcceptGuildTemplate(code) {
  code = code.code;
  name = undefined;
  dependencyMap = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_10();
  const items = [GuildTemplateStore];
  const stateFromStores = code(504).useStateFromStores(items, () => GuildTemplateStore.getGuildTemplate(code));
  let obj = code(504);
  [name, dependencyMap] = noop.useState(name(5736).getGuildNameSuggestion());
  [first1, _slicedToArray] = noop.useState(null);
  const tmp7 = _slicedToArray(noop.useState(null), 2);
  noop = tmp7[1];
  stateFromStores(12048)(stateFromStores);
  let obj3 = { top: true, style: tmp.container, children: null };
  let obj4 = {
    code,
    guildTemplate: stateFromStores,
    name,
    setName(arg0) {
      return dependencyMap(arg0);
    },
    icon: first1,
    errors: tmp7[0],
    chooseIcon: null,
    createServer: null
  };
  const obj2 = name(5736);
  obj4.chooseIcon = first1(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        dependencyMap = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp2;
            let base64;
            const obj5 = { size };
            c2 = 1;
            dependencyMap = 1;
            const obj6 = { value: tmp5(dependencyMap[13]).openImagePicker(obj5), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          base64 = value.base64;
          if (null != base64) {
            closure_129_5(base64);
          }
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        dependencyMap = tmp;
        throw tmp17;
      }
    }
  });
  obj4.createServer = function createServer() {
    if (null != stateFromStores) {
      AcceptGuildTemplateActionCreatorsDefault.acceptGuildTemplate(tmp.code, first, first1).then(() => stateFromStores(dependencyMap[15]).hideModal(), (arg0) => closure_1_6(arg0));
      const acceptGuildTemplateResult = AcceptGuildTemplateActionCreatorsDefault.acceptGuildTemplate(tmp.code, first, first1);
    }
  };
  obj3.children = jsx(stateFromStores(12049), {
    code,
    guildTemplate: stateFromStores,
    name,
    setName(arg0) {
      return dependencyMap(arg0);
    },
    icon: first1,
    errors: tmp7[0],
    chooseIcon: null,
    createServer: null
  });
  return jsx(code(7368).SafeAreaPaddingView, { top: true, style: tmp.container, children: null });
}
const UPLOAD_MEDIUM_SIZE = fn(1074).UPLOAD_MEDIUM_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { container: { flex: 1, marginTop: fn(5899).NAV_BAR_HEIGHT } };
let closure_10 = createStyles.createStyles(obj2);
const ACCEPT_GUILD_TEMPLATE = "ACCEPT_GUILD_TEMPLATE";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/native/AcceptGuildTemplateModal.tsx");

export default function AcceptGuildTemplateModal(code) {
  code = code.code;
  const items = [code];
  const memo = noop.useMemo(() => {
    let obj = { code };
    const obj2 = {};
    const obj3 = {
      title: "",
      fullscreen: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(() => closure_1_1(closure_1_3[15]).hideModal()),
      render() {
        obj = {};
        const merged = Object.assign(obj);
        return <ConnectedAcceptGuildTemplate />;
      }
    };
    obj2[ACCEPT_GUILD_TEMPLATE] = obj3;
    return obj2;
  }, items);
  return jsx(code(7245).Navigator, { initialRouteName: ACCEPT_GUILD_TEMPLATE, screens: memo });
};