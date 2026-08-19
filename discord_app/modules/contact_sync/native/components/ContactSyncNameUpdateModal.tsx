// discord_app/modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef5260 from "../../../../actions/ModalActionCreators.tsx";
import NavigationStack from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ContactSyncScenes } from "../ContactSyncConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import HeaderBackImage from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";

require = fn;
function onClose() {
  let arr = _modDef5260;
  arr = arr.pop();
}
function ContactSyncNameInputScreen() {
  function onNext(allowPhone) {
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
    const tmp = closure_1_3((arg0) => {
      closure_0 = arg0;
      c2 = 0;
      c4 = 0;
      c3 = 0;
      return (function*(arg0) {
        closure_1 = tmp3;
        callback(true);
        c3 = 1;
        yield closure_1_1(11857).updateName(callback);
        if (1 === tmp7) {
          c3 = 0;
          obj1 = closure_1_1(4094);
          const obj2 = { key: "ERROR_GENERIC_TITLE", content: null, icon: null };
          const intl = callback(1236).intl;
          obj2[1] = intl.string(callback(1236).t.R0RpRX);
          obj2[2] = closure_1_1(8555);
          obj1.open(obj2);
          callback(false);
          c4 = 3;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          callback(false);
          closure_1_9();
          c3 = 0;
        }
        c3 = 0;
        return arg1;
      })();
    });
    closure_2 = tmp;
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
  { style: callback2().container, children: null };
  obj = {
    onNext,
    onRemoveName(arg0) {
      return onNext(null);
    },
    loading: tmp3[0],
    initialName: null
  };
  let str;
  let tmp = callback2();
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
  return <View onNext={onNext} onRemoveName={function onRemoveName(arg0) {
    return onNext(null);
  }} loading={tmp3[0]} initialName={null} />;
}
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
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
const result = require("obj132").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx");

export default function ContactSyncNameUpdateModal() {
  return jsx(NavigationStack.Navigator, { initialRouteName: ContactSyncScenes.NAME_INPUT, screens: obj1 });
};