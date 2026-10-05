// discord_app/modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import ContactSyncConstants from "../ContactSyncConstants.tsx";
import ContactSyncUtils from "../ContactSyncUtils.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import NavigatorHeader_mod from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c2, c4;

let NavigatorHeader;
let obj2;
function onClose() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
}
const View = react_native.View;
const ContactSyncScenes = ContactSyncConstants.ContactSyncScenes;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  justifyContent: "center",
  paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32,
};
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let onNext;
      let require;
      let tmp13;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(8);
      const tmp3 = closure_10();
      let obj2 = ContactSyncUtils;
      const contactSyncAccount = obj2.useContactSyncAccount();
      [tmp6, require] = _slicedToArray(react.useState(false), 2);
      const tmp5 = _slicedToArray(react.useState(false), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let closure_0 = _asyncToGenerator(async (arg0) => {
          let intl;
          closure_0 = arg0;
          if (c4 === 2) {
            c4 = 3;
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
              c4 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let closure_1 = tmp;
                  closure_0(true);
                  c3 = 1;
                  c2 = 2;
                  c4 = 1;
                  const obj5 = { value: obj3.updateName(closure_0), done: false };
                  obj3 = onNext(dependencyMap[13]);
                  return obj5;
                }
              } else {
                if (1 === tmp4) {
                  c3 = 0;
                  const obj6 = {
                    key: "ERROR_GENERIC_TITLE",
                    content: intl.string(closure_0(dependencyMap[15]).t.R0RpRX),
                    icon: onNext(dependencyMap[16]),
                  };
                  const open = onNext(dependencyMap[14]).open;
                  const tmp13 = onNext(dependencyMap[14]);
                  intl = closure_0(dependencyMap[15]).intl;
                  open(obj6);
                  closure_0(false);
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c4 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_0(false);
                  onClose();
                  c3 = 0;
                }
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp27) {
              if (0 === c3) {
                c4 = 3;
                throw tmp27;
              } else {
                c2 = 1;
              }
            }
          }
        });
        onNext = function onNext() {
          return closure_0(...arguments);
        };
        cResult[0] = onNext;
      } else {
        onNext = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return first(null);
          }
        }
        cResult[1] = E;
      } else {
        class E {
          constructor() {
            return first(null);
          }
        }
      }
      if (contactSyncAccount != null) {
        class E {
          constructor() {
            return first(null);
          }
        }
      }
      if (undefined == null) {
        class E {
          constructor() {
            return first(null);
          }
        }
      }
      if (cResult[2] === tmp6) {
        class E {
          constructor() {
            return first(null);
          }
        }
        if (cResult[5] === tmp3.container) {
          class E {
            constructor() {
              return first(null);
            }
          }
          return tmp13;
        }
        const tmp16 = <View style={tmp3.container}>{tmp11}</View>;
        cResult[5] = tmp3.container;
        cResult[6] = tmp11;
        cResult[7] = tmp16;
        tmp13 = tmp16;
      }
      cResult[2] = tmp6;
      cResult[3] = undefined;
      cResult[4] = jsx(onNext(12346), { onNext, onRemoveName: E, loading: tmp6, initialName: undefined });
      const tmp12 = jsx(onNext(12346), { onNext, onRemoveName: E, loading: tmp6, initialName: undefined });
    }
  : () => {
      let str;
      function onNext() {
        return obj(...arguments);
      }
      let obj = function _onNext2() {
        obj = _asyncToGenerator(async (arg0) => {
          let closure_1;
          let intl;
          closure_0 = arg0;
          if (c4 === 2) {
            c4 = 3;
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
              c4 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_2_0(true);
                  c3 = 1;
                  obj3 = tmp(c2[13]);
                  c2 = 2;
                  c4 = 1;
                  const obj5 = { value: obj3.updateName(closure_0), done: false };
                  return obj5;
                }
              } else {
                if (1 === tmp4) {
                  c3 = 0;
                  const obj6 = {
                    key: "ERROR_GENERIC_TITLE",
                    content: intl.string(closure_0(c2[15]).t.R0RpRX),
                    icon: tmp(c2[16]),
                  };
                  const open = tmp(c2[14]).open;
                  const tmp13 = tmp(c2[14]);
                  intl = closure_0(c2[15]).intl;
                  open(obj6);
                  closure_129_0(false);
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c4 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_129_0(false);
                  closure_1_9();
                  c3 = 0;
                }
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp27) {
              if (0 === c3) {
                c4 = 3;
                throw tmp27;
              } else {
                c2 = 1;
              }
            }
          }
        });
        return obj(...arguments);
      };
      const tmp = closure_10();
      obj = require("ContactSyncUtils");
      const contactSyncAccount = obj.useContactSyncAccount();
      const tmp3 = _slicedToArray(react.useState(false), 2);
      _require = tmp3[1];
      obj3 = {
        onNext,
        onRemoveName() {
          return onNext(null);
        },
        loading: tmp3[0],
        initialName: str,
      };
      str = undefined;
      onNext(obj[17]);
      if (contactSyncAccount != null) {
        str = contactSyncAccount.name;
      }
      if (str == null) {
        str = "";
      }
      return <View style={tmp.container}>{null}</View>;
    };
let obj3 = {};
let obj4 = {
  render() {
    return <closure_11 />;
  },
  ignoreKeyboard: true,
  fullscreen: true,
  headerLeft: NavigatorHeader.getHeaderCloseButton(onClose),
  title: "",
};
const NAME_INPUT = ContactSyncScenes.NAME_INPUT;
NavigatorHeader = NavigatorHeader_mod;
obj3[NAME_INPUT] = obj4;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = jsx(Navigator.Navigator, { initialRouteName: ContactSyncScenes.NAME_INPUT, screens: obj3 });
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => jsx(Navigator.Navigator, { initialRouteName: ContactSyncScenes.NAME_INPUT, screens: obj3 });
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx");

export default tmp2;
