// === Module 15101: ContactSyncNameUpdateModal ===

// Module 15101 (ContactSyncNameUpdateModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import Navigator from "Navigator" /* 6687 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function onClose() {
  ModalActionCreatorsDefault.pop();
}
const View = fn(17).View;
const ContactSyncScenes = fn(12400).ContactSyncScenes;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: fn(6258).NAV_BAR_HEIGHT + 32 } };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContactSyncNameInputScreen() {
  const cResult = require("c").c(8);
  const tmp3 = closure_10();
  const obj = require("c");
  const contactSyncAccount = require("ContactSyncUtils").useContactSyncAccount();
  const obj2 = require("ContactSyncUtils");
  [tmp6, closure_0] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    _require = asyncGeneratorStep(async (arg0) => {
      closure_1 = tmp3;
      closure_0(true);
      await first(12406).updateName(closure_0);
      if (1 === tmp7) {
        c3 = 0;
        const obj7 = { text: null, variant: "critical" };
        const intl = closure_0(1126).intl;
        obj7.text = intl.string(closure_0(1126).t.R0RpRX);
        first(4809).open("ERROR_GENERIC_TITLE", obj7);
        closure_0(false);
        c4 = 3;
        first(4809);
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_0(false);
        onClose();
        c3 = 0;
      }
      return value;
    });
    function onNext() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[0] = onNext;
  } else {
    onNext = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_1(null);
      }
    }
    cResult[1] = S;
  } else {
    class S {
      constructor() {
        return closure_1(null);
      }
    }
  }
  if (contactSyncAccount != null) {
    class S {
      constructor() {
        return closure_1(null);
      }
    }
  }
  if (undefined == null) {
    class S {
      constructor() {
        return closure_1(null);
      }
    }
  }
  if (cResult[2] === tmp6) {
    class S {
      constructor() {
        return closure_1(null);
      }
    }
    if (cResult[5] === tmp3.container) {
      class S {
        constructor() {
          return closure_1(null);
        }
      }
      return tmp13;
    }
    const obj3 = { style: tmp3.container, children: tmp11 };
    const tmp16 = <View style={tmp3.container}>{tmp11}</View>;
    cResult[5] = tmp3.container;
    cResult[6] = tmp11;
    cResult[7] = tmp16;
    tmp13 = tmp16;
  }
  const tmp12 = jsx(onNext(12420), { onNext, onRemoveName: S, loading: tmp6, initialName: undefined });
  cResult[2] = tmp6;
  cResult[3] = undefined;
  cResult[4] = tmp12;
  const tmp5 = _slicedToArray(noop.useState(false), 2);
}) : (function ContactSyncNameInputScreen() {
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
  dependencyMap = async function _onNext2(arg0) {
    _require(true);
    await tmp3(12406).updateName(closure_0);
    if (1 === tmp7) {
      c3 = 0;
      const obj7 = { text: null, variant: "critical" };
      const intl = closure_0(1126).intl;
      obj7.text = intl.string(closure_0(1126).t.R0RpRX);
      tmp3(4809).open("ERROR_GENERIC_TITLE", obj7);
      closure_129_0(false);
      c4 = 3;
      tmp3(4809);
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
  const tmp = closure_10();
  const contactSyncAccount = require("ContactSyncUtils").useContactSyncAccount();
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  _require = tmp3[1];
  const obj2 = { style: tmp.container, children: null };
  const obj3 = {
    onNext,
    onRemoveName() {
      return onNext(null);
    },
    loading: tmp3[0],
    initialName: null
  };
  let str;
  const obj = require("ContactSyncUtils");
  if (contactSyncAccount != null) {
    str = contactSyncAccount.name;
  }
  if (str == null) {
    str = "";
  }
  obj3.initialName = str;
  obj2.children = jsx(onNext(12420), {
    onNext,
    onRemoveName() {
      return onNext(null);
    },
    loading: tmp3[0],
    initialName: null
  });
  return <View style={tmp.container}>{null}</View>;
});
const obj5 = {};
const obj6 = {
  render() {
    return <closure_11 />;
  },
  ignoreKeyboard: true,
  fullscreen: true,
  headerLeft: null,
  title: ""
};
const NavigatorHeader = fn(6200);
obj6.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
obj5[ContactSyncScenes.NAME_INPUT] = obj6;
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: fn(6258).NAV_BAR_HEIGHT + 32 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ContactSyncNameUpdateModal() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { initialRouteName: ContactSyncScenes.NAME_INPUT, screens: obj5 };
    const tmp8 = jsx(Navigator.Navigator, { initialRouteName: ContactSyncScenes.NAME_INPUT, screens: obj5 });
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ContactSyncNameUpdateModal() {
  return jsx(Navigator.Navigator, { initialRouteName: ContactSyncScenes.NAME_INPUT, screens: obj5 });
});