// discord_app/modules/conjure/share/native/ConjureFirstShareModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import _modDef4089 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import ModalScreen from "../../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent from "../../../../design/components/Modal/native/ModalContent.native.tsx";
import ModalFooter from "../../../../design/components/Modal/native/ModalFooter.native.tsx";
import useConjureSharingModeDefault from "../useConjureSharingMode.tsx";
import ConjureShareAccessDefault from "ConjureShareAccess.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function closeFirstShareModal() {
  ModalActionCreatorsDefault.popWithKey(ConjureFirstShareModal);
}
function showToast(text, arg1) {
  ToastActionCreatorsDefault.open(ConjureFirstShareModal, { text, variant: "critical" });
}
function FirstShareFlow(project) {
  project = project.project;
  const sharing = project.sharing;
  const tmp = sharing(18428)(project);
  dependencyMap = tmp;
  obj = project(6973);
  items = [project, tmp, sharing];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    obj = {};
    const obj2 = {
      headerLeft: project(review[8]).getHeaderCloseButton(closeFirstShareModal),
      render() {
        return closure_1_5(closure_1_15, {});
      },
    };
    obj[constants.REVIEW] = obj2;
    const obj4 = { headerLeft: null, render: null };
    const obj3 = project(review[8]);
    obj4.headerLeft = project(review[8]).getHeaderBackButton();
    obj4.render = function render() {
      return closure_1_5(closure_1_16, {});
    };
    obj[constants.ACCESS] = obj4;
    return obj;
  }, []);
  let obj2 = { value: noop.useMemo(() => ({ project, review, sharing }), items), children: null };
  let obj3 = {
    screens: navigatorScreens,
    initialRouteName: obj.REVIEW,
    steps: items,
    headerBackTitle: null,
    gradientColor: "blue",
  };
  const intl = project(1113).intl;
  obj3.headerBackTitle = intl.string(project(1113).t["13/7kX"]);
  obj2.children = closure_5(project(12205).StepModal, obj3);
  return closure_5(redux.Provider, obj2);
}
function StepHeading(arg0) {
  ({ title, description } = arg0);
  obj = { spacing: nativeDefault.space.PX_8, children: null };
  items = [
    hasOwnProperty(Text_Text.Text, {
      accessibilityRole: "header",
      variant: "heading-xl/semibold",
      color: "mobile-text-heading-primary",
      children: title,
    }),
    hasOwnProperty(Text_Text.Text, { variant: "body-md/normal", color: "text-subtle", children: description }),
  ];
  obj.children = items;
  return timestampProducer(Stack_Stack.Stack, obj);
}
function ReviewStep() {
  noop = async function _handleConjureIcon() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+60" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (ref.current) {
            c4 = 3;
          } else {
            ref.current = true;
            c3 = 2;
            v3 = 3;
            c4 = 1;
            const obj4 = { value: review.save(), done: false };
            return obj4;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_128_3.current = false;
          throw tmp36;
        } else if (2 === tmp8) {
          c3 = 1;
          const intl = tmp4(tmp36[10]).intl;
          showToast(intl.string(v3(tmp36[15]).Fi7boI), "critical");
          c3 = 0;
          closure_128_3.current = false;
          c4 = 3;
          return { value: "HermesInternal", done: "+60" };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
          closure_128_3.current = false;
          if (value) {
            closeFirstShareModal();
            v3(tmp36[16])(closure_128_0.id);
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: "+60" };
          }
        }
        c3 = 0;
        closure_128_3.current = false;
        c4 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp36) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp36;
        } else if (tmp2 === tmp38) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  };
  closure_5 = async function _handleNext(Button) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (Button === 1) {
        throw value;
      } else if (Button === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+60" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v3) {
          if (Button === 1) {
            c4 = 3;
            throw value;
          } else if (Button === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (ref.current) {
            c4 = 3;
          } else {
            ref.current = true;
            c3 = 2;
            v3 = 3;
            c4 = 1;
            const obj4 = { value: review.save(), done: false };
            return obj4;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_128_3.current = false;
          throw tmp32;
        } else if (2 === tmp8) {
          c3 = 1;
          const intl = tmp4(tmp32[10]).intl;
          showToast(intl.string(v3(tmp32[15]).Fi7boI), "critical");
          c3 = 0;
          closure_128_3.current = false;
          c4 = 3;
          return { value: "HermesInternal", done: "+60" };
        } else if (Button === 1) {
          c4 = 3;
          throw value;
        } else if (Button !== 2) {
          c3 = 0;
          closure_128_3.current = false;
          if (value) {
            closure_128_2.navigate(constants.ACCESS);
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: "+60" };
          }
        }
        c3 = 0;
        closure_128_3.current = false;
        c4 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp32) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp32;
        } else if (tmp2 === tmp34) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  };
  const context = noop.useContext(closure_10);
  if (null == context) {
    const _Error = Error;
    const error = new Error("A first share step rendered outside its modal");
    throw error;
  } else {
    ({ project: require, review } = context);
    dependencyMap = useNavigation.useNavigation();
    closure_3 = obj.useRef(false);
    let obj3 = { children: null };
    let obj4 = { children: null };
    const obj5 = { spacing: review(575).space.PX_16, children: null };
    const obj6 = { title: null, description: null };
    let intl = util.intl;
    obj6.title = intl.string(review(4089)["Vay+ld"]);
    const intl2 = util.intl;
    obj6.description = intl2.string(review(4089)["N2HM8/"]);
    items = [closure_5(StepHeading, obj6)];
    const obj7 = {
      review,
      onConjureIcon: function handleConjureIcon() {
        const self = this;
        const apply = closure_4.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
    };
    items[1] = closure_5(review(18431), obj7);
    obj5.children = items;
    obj4.children = closure_6(Stack_Stack.Stack, obj5);
    const items1 = [closure_5(ModalContent.ModalContent, obj4)];
    const obj8 = { children: null };
    const obj9 = { text: null, size: "lg", disabled: null, loading: null, onPress: null };
    const intl3 = util.intl;
    obj9.text = intl3.string(util.t.PDTjLN);
    obj9.disabled = null != review.nameError;
    obj9.loading = review.saving;
    obj9.onPress = function handleNext() {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj8.children = closure_5(components_Button_Button.Button, obj9);
    items1[1] = closure_5(ModalFooter.ModalFooter, obj8);
    obj3.children = items1;
    return closure_6(ModalScreen.ModalScreen, obj3);
  }
  obj = noop;
}
function AccessStep() {
  const context = noop.useContext(closure_10);
  if (null == context) {
    const _Error = Error;
    const error = new Error("A first share step rendered outside its modal");
    throw error;
  } else {
    ({ project, sharing } = context);
    obj = { children: null };
    const obj2 = { children: null };
    const obj3 = { spacing: nativeDefault.space.PX_16, children: null };
    const obj4 = { title: null, description: null };
    const intl = util.intl;
    obj4.title = intl.string(_modDef4089.IN5vt4);
    const intl2 = util.intl;
    obj4.description = intl2.string(_modDef4089.mbybxl);
    items = [hasOwnProperty(StepHeading, obj4)];
    const obj5 = { project, sharing };
    items[1] = hasOwnProperty(ConjureShareAccessDefault, obj5);
    obj3.children = items;
    obj2.children = timestampProducer(Stack_Stack.Stack, obj3);
    const items1 = [hasOwnProperty(ModalContent.ModalContent, obj2)];
    const obj6 = { children: null };
    const obj7 = { text: null, size: "lg", onPress: null };
    const intl3 = util.intl;
    obj7.text = intl3.string(util.t.i4jeWR);
    obj7.onPress = closeFirstShareModal;
    obj6.children = hasOwnProperty(components_Button_Button.Button, obj7);
    items1[1] = hasOwnProperty(ModalFooter.ModalFooter, obj6);
    obj.children = items1;
    return timestampProducer(ModalScreen.ModalScreen, obj);
  }
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const ConjureFirstShareModal = "ConjureFirstShareModal";
let obj = { REVIEW: "REVIEW", ACCESS: "ACCESS" };
let items = [,];
({ REVIEW: arr[0], ACCESS: arr[1] } = obj);
const redux = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureFirstShareModal.tsx");

export default function ConjureFirstShareModal(projectId) {
  const tmp = useConjureSharingModeDefault(projectId.projectId);
  const project = tmp.project;
  items = [project];
  const effect = noop.useEffect(() => {
    if (null == project) {
      ModalActionCreatorsDefault.popWithKey(ConjureFirstShareModal);
    }
  }, items);
  let tmp3 = null;
  if (null != project) {
    obj = { project, sharing: tmp };
    tmp3 = closure_5(FirstShareFlow, obj);
  }
  return tmp3;
}
export const CONJURE_FIRST_SHARE_MODAL_KEY = "ConjureFirstShareModal";
