// discord_app/modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function onClose() {
  let arr = ModalActionCreatorsDefault;
  arr = arr.pop();
}
function ContactSyncNameInputScreen() {
  function onNext() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  dependencyMap = async function _onNext(arg0) {
    _require(true);
    await tmp3(12684).updateName(closure_0);
    if (1 === tmp7) {
      c3 = 0;
      const obj2 = { key: "ERROR_GENERIC_TITLE", content: null, icon: null };
      const intl = closure_0(1114).intl;
      obj2.content = intl.string(closure_0(1114).t.R0RpRX);
      obj2.icon = tmp3(5597);
      tmp3(4259).open(obj2);
      closure_129_0(false);
      c4 = 3;
      tmp3(4259);
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_129_0(false);
      onClose();
      c3 = 0;
    }
    return value;
  };
  let obj = require("ContactSyncUtils");
  const contactSyncAccount = obj.useContactSyncAccount();
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  _require = tmp3[1];
  obj = { style: closure_10().container, children: null };
  obj = {
    onNext,
    onRemoveName() {
      return onNext(null);
    },
    loading: tmp3[0],
    initialName: null,
  };
  let str;
  const tmp = closure_10();
  if (contactSyncAccount != null) {
    str = contactSyncAccount.name;
  }
  if (str == null) {
    str = "";
  }
  obj.initialName = str;
  obj.children = jsx(onNext(12697), {
    onNext,
    onRemoveName() {
      return onNext(null);
    },
    loading: tmp3[0],
    initialName: null,
  });
  return (
    <View
      onNext={onNext}
      onRemoveName={function onRemoveName() {
        return onNext(null);
      }}
      loading={tmp3[0]}
      initialName={null}
    />
  );
}
const View = fn(17).View;
const ContactSyncScenes = fn(12678).ContactSyncScenes;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  justifyContent: "center",
  paddingTop: fn(5682).NAV_BAR_HEIGHT + 32,
};
createStyles.container = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
const obj1 = {};
let obj2 = {
  render() {
    return <ContactSyncNameInputScreen />;
  },
  ignoreKeyboard: true,
  fullscreen: true,
  headerLeft: null,
  title: "",
};
const NavigatorHeader = fn(5624);
obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
obj1[ContactSyncScenes.NAME_INPUT] = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx");

export default function ContactSyncNameUpdateModal() {
  return jsx(Navigator.Navigator, { initialRouteName: ContactSyncScenes.NAME_INPUT, screens: obj1 });
}
