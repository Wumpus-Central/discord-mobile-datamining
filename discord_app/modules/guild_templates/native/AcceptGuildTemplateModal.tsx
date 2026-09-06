// discord_app/modules/guild_templates/native/AcceptGuildTemplateModal.tsx
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import AcceptGuildTemplateActionCreatorsDefault from "../AcceptGuildTemplateActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildTemplateStore from "../GuildTemplateStore.tsx";

require = fn;
function ConnectedAcceptGuildTemplate(code) {
  code = code.code;
  let name;
  _slicedToArray = undefined;
  noop = undefined;
  let obj = code(504);
  const items = [GuildTemplateStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildTemplateStore.getGuildTemplate(code));
  const tmp = closure_10();
  const tmp3 = _slicedToArray(noop.useState(name(5519).getGuildNameSuggestion()), 2);
  name = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  const first1 = tmp5[0];
  _slicedToArray = tmp5[1];
  const tmp7 = _slicedToArray(noop.useState(null), 2);
  noop = tmp7[1];
  stateFromStores(11794)(stateFromStores);
  obj = { top: true, style: tmp.container, children: null };
  obj = {
    code,
    guildTemplate: stateFromStores,
    name,
    setName(arg0) {
      return dependencyMap(arg0);
    },
    icon: first1,
    errors: tmp7[0],
    chooseIcon: null,
    createServer: null,
  };
  let obj2 = name(5519);
  obj.chooseIcon = first1(function* (arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        dependencyMap = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp2;
            let base64;
            let obj1 = tmp5(dependencyMap[13]);
            obj1 = { size };
            c2 = 1;
            dependencyMap = 1;
            const obj2 = { value: obj1.openImagePicker(obj1), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
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
  obj.createServer = function createServer() {
    if (null != stateFromStores) {
      AcceptGuildTemplateActionCreatorsDefault.acceptGuildTemplate(tmp.code, first, first1).then(
        () => stateFromStores(dependencyMap[15]).hideModal(),
        (arg0) => closure_1_6(arg0),
      );
      const acceptGuildTemplateResult = AcceptGuildTemplateActionCreatorsDefault.acceptGuildTemplate(
        tmp.code,
        first,
        first1,
      );
    }
  };
  obj.children = jsx(stateFromStores(11795), {
    code,
    guildTemplate: stateFromStores,
    name,
    setName(arg0) {
      return dependencyMap(arg0);
    },
    icon: first1,
    errors: tmp7[0],
    chooseIcon: null,
    createServer: null,
  });
  return jsx(code(7123).SafeAreaPaddingView, {
    code,
    guildTemplate: stateFromStores,
    name,
    setName(arg0) {
      return dependencyMap(arg0);
    },
    icon: first1,
    errors: tmp7[0],
    chooseIcon: null,
    createServer: null,
  });
}
const UPLOAD_MEDIUM_SIZE = fn(1074).UPLOAD_MEDIUM_SIZE;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { flex: 1, marginTop: fn(5682).NAV_BAR_HEIGHT };
createStyles.container = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
const ACCEPT_GUILD_TEMPLATE = "ACCEPT_GUILD_TEMPLATE";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/native/AcceptGuildTemplateModal.tsx");

export default function AcceptGuildTemplateModal(code) {
  code = code.code;
  const items = [code];
  const memo = noop.useMemo(() => {
    let obj = { code };
    obj = {};
    obj = {
      title: "",
      fullscreen: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(() => closure_1_1(closure_1_3[15]).hideModal()),
      render() {
        obj = {};
        const merged = Object.assign(obj);
        return <ConnectedAcceptGuildTemplate />;
      },
    };
    obj[ACCEPT_GUILD_TEMPLATE] = obj;
    return obj;
  }, items);
  return jsx(code(7000).Navigator, { initialRouteName: ACCEPT_GUILD_TEMPLATE, screens: memo });
}
