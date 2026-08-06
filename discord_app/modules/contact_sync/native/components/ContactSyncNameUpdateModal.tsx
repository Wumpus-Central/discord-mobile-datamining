// discord_app/modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx
import jsxProd from "jsxProd";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "NavigationStack";
import { ContactSyncScenes } from "ContactSyncLandingPage";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import HeaderBackImage from "HeaderBackImage";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";

const require = arg1;
function onClose() {
  let arr = ModalActionCreators;
  arr = arr.pop();
}
function ContactSyncNameInputScreen() {
  function onNext(arg0) {
    const self = this;
    const apply = _onNext.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _onNext() {
    const self = this;
    const tmp = outer1_3((arg0) => {
      let closure_0 = arg0;
      let c2 = 0;
      let c4 = 0;
      let c3 = 0;
      return (function*(arg0) {
        let closure_1 = tmp3;
        callback(true);
        let c3 = 1;
        yield outer1_1(11957).updateName(callback);
        if (1 === tmp7) {
          c3 = 0;
          const obj1 = outer1_1(3985);
          const obj2 = { key: "ERROR_GENERIC_TITLE", content: null, icon: null };
          const intl = callback(1236).intl;
          obj2[1] = intl.string(callback(1236).t.R0RpRX);
          obj2[2] = outer1_1(8368);
          obj1.open(obj2);
          callback(false);
          let c4 = 3;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          callback(false);
          outer1_9();
          c3 = 0;
        }
        c3 = 0;
        return arg1;
      })();
    });
    const _onNext = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj = _require(_onNext[10]);
  const contactSyncAccount = obj.useContactSyncAccount();
  const tmp3 = callback(React.useState(false), 2);
  _require = tmp3[1];
  obj = { style: createCacheKey().container, children: null };
  obj = {
    onNext,
    onRemoveName(arg0) {
      return onNext(null);
    },
    loading: tmp3[0],
    initialName: null
  };
  let str;
  let tmp = createCacheKey();
  const tmp5 = View;
  if (contactSyncAccount != null) {
    str = contactSyncAccount.name;
  }
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[1] = jsx(onNext(_onNext[15]), {
    onNext,
    onRemoveName(arg0) {
      return onNext(null);
    },
    loading: tmp3[0],
    initialName: null
  });
  return <tmp5 onNext={onNext} onRemoveName={function onRemoveName(arg0) {
    return onNext(null);
  }} loading={tmp3[0]} initialName={null} />;
}
createCacheKey = { container: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = {};
let obj2 = {
  render() {
    return <ContactSyncNameInputScreen />;
  },
  ignoreKeyboard: true,
  fullscreen: true,
  headerLeft: null,
  title: ""
};
obj2[3] = HeaderBackImage.getHeaderCloseButton(onClose);
obj1[ContactSyncScenes.NAME_INPUT] = obj2;
const result = require("noop").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx");

export default function ContactSyncNameUpdateModal() {
  return jsx(NavigationStack.Navigator, { initialRouteName: ContactSyncScenes.NAME_INPUT, screens: obj1 });
};