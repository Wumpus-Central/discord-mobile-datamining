// discord_app/modules/conjure/projects/native/openConjureDeleteAppChannelAlert.tsx
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ConjureDeleteAppChannelAlert(arg0) {
  ({ app, onDeleteChannel: require, onAppRemoved: importDefault } = arg0);
  let conjureServerApp;
  let items;
  let checked;
  noop = undefined;
  closure_6 = async function _submit() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            if (0 !== length.length) {
              if (checked) {
                noop(null);
                dependencyMap = 1;
                c3 = 1;
                const obj4 = { value: tmp2(13265)(conjureServerApp), done: false };
                return obj4;
              }
            }
            _require();
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value) {
            closure_129_1();
          } else {
            const intl = tmp3(1113).intl;
            closure_128_0 = intl.string(tmp2(3868).PJ2Fkn);
            closure_129_5(closure_128_0);
            const _Error = Error;
            const error = new Error(closure_128_0);
            throw error;
          }
        }
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp34) {
        c3 = tmp;
        throw tmp34;
      }
    }
  };
  ({ applicationId, channelId } = arg0);
  conjureServerApp = require("conjureServerAppRemoval").useConjureServerApp(app.guildId, applicationId);
  if (conjureServerApp == null) {
    conjureServerApp = app;
  }
  if (null == conjureServerApp.rest) {
    items = [];
  } else {
    items = require("conjureServerAppRemoval").conjureDeleteAppChannelItems(conjureServerApp.rest, channelId);
    const tmpResult = require("conjureServerAppRemoval");
  }
  const tmp4 = checked(noop.useState(true), 2);
  checked = tmp4[0];
  let obj = require("conjureServerAppRemoval");
  [tmp7, c5] = checked(noop.useState(null), 2);
  let obj2 = { title: null, content: null, extraContent: null, actions: null };
  let intl = require("util").intl;
  obj2.title = intl.string(require("util").t["8D8Rsb"]);
  const tmp6 = checked(noop.useState(null), 2);
  obj2.content = require("ConjureRemovedItems").formatWithAppTag(
    require("../../intl/ConjureUntranslated.messages.js")["HmNT/r"],
    conjureServerApp.targetAppName,
  );
  if (items.length > 0) {
    let tmp8Result = null;
    if (items.length > 0) {
      let obj3 = { checked, onChange: tmp4[1], items };
      tmp8Result = tmp8(require("ConjureRemovedItems").ConjureRemoveEverythingField, obj3);
    }
    const items1 = [tmp8Result];
    let tmp8Result2 = null;
    if (null != tmp7) {
      let obj4 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp7 };
      tmp8Result2 = tmp8(require("Text/Text").Text, obj4);
    }
    const obj5 = { spacing: 12, children: null };
    items1[1] = tmp8Result2;
    obj5.children = items1;
    const tmp10Result = closure_7(require("Stack/Stack").Stack, obj5);
  }
  obj2.extraContent = tmp10Result;
  const obj6 = { children: null };
  const obj7 = { variant: "destructive", text: null, onPress: null };
  const intl2 = require("util").intl;
  obj7.text = intl2.string(require("util").t["8D8Rsb"]);
  obj7.onPress = function submit() {
    const self = this;
    const apply = closure_6.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const items2 = [closure_6(require("AlertModal").AlertActionButton, obj7)];
  const obj8 = { variant: "secondary", text: null };
  const intl3 = require("util").intl;
  obj8.text = intl3.string(require("util").t["ETE/oC"]);
  items2[1] = closure_6(require("AlertModal").AlertActionButton, obj8);
  obj6.children = items2;
  obj2.actions = closure_7(closure_8, obj6);
  return closure_6(require("AlertModal").AlertModal, obj2);
}
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureDeleteAppChannelAlert.tsx");

export default function openConjureDeleteAppChannelAlert(arg0) {
  const merged = Object.assign(arg0);
  useAlertStore.openAlert("ConjureDeleteAppChannel", timestampProducer(ConjureDeleteAppChannelAlert, {}));
}
