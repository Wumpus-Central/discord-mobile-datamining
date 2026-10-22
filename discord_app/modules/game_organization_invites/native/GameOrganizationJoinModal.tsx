// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2406 from "../GameOrganizationInvitesUntranslated.messages.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import getGameOrganizationDisplayNounDefault from "../getGameOrganizationDisplayNoun.tsx";
import StepModal from "../../../design/components/Modal/native/StepModal.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameOrganizationInviteStore from "../GameOrganizationInviteStore.tsx";

require = fn;
function closeModal() {
  ModalActionCreatorsDefault.pop();
}
let closure_5 = fn(10994).GameOrganizationInviteStates;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { CONFIRM: "CONFIRM" };
let items = [obj.CONFIRM];
const createStyles = fn(4969);
let obj3 = { container: { padding: nativeDefault.space.PX_16 }, text: { textAlign: "center" } };
let closure_10 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConfirmStep(code) {
      let intl = code;
      let formatToPlainStringResult = dependencyMap;
      const cResult = code(576).c(26);
      code = code.code;
      let text = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [GameOrganizationInviteStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== code) {
        const fn = function u() {
          const invite = GameOrganizationInviteStore.getInvite(code);
          let state;
          if (invite != null) {
            state = invite.state;
          }
          let tmp3 = null;
          if (state === constants.RESOLVED) {
            tmp3 = invite;
          }
          return tmp3;
        };
        cResult[1] = code;
        cResult[2] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
      }
      obj = code(576);
      let container = intl(504).useStateFromStores(first, tmp5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            arr = closure_1_1(closure_1_2[6]);
            arr1 = arr.pop();
            return;
          }
        }
        cResult[3] = M;
      } else {
        class M {
          constructor() {
            arr = closure_1_1(closure_1_2[6]);
            arr1 = arr.pop();
            return;
          }
        }
      }
      if (null == container) {
        class M {
          constructor() {
            arr = closure_1_1(closure_1_2[6]);
            arr1 = arr.pop();
            return;
          }
        }
      } else {
        class M {
          constructor() {
            arr = closure_1_1(closure_1_2[6]);
            arr1 = arr.pop();
            return;
          }
        }
        let displayNoun = importDefault;
        const obj2 = { displayNoun: container.displayNoun };
        const Stack = intl(5964).Stack;
        const PX_24 = nativeDefault.space.PX_24;
        const container2 = text.container;
        if (cResult[14] === container.organization.name) {
          class M {
            constructor() {
              arr = closure_1_1(closure_1_2[6]);
              arr1 = arr.pop();
              return;
            }
          }
          const Button = intl(5230).Button;
          intl = intl(1128).intl;
          const obj3 = { noun: tmp7 };
          formatToPlainStringResult = intl.formatToPlainString(displayNoun(2406)["Cz/ZUM"], obj3);
          displayNoun = container.displayNoun;
          cResult[4] = displayNoun;
          cResult[5] = container.organization.name;
          container = text.container;
          cResult[6] = container;
          text = text.text;
          cResult[7] = text;
          cResult[8] = Button;
          cResult[9] = Stack;
          cResult[10] = formatToPlainStringResult;
          cResult[11] = PX_24;
          cResult[12] = container2;
          cResult[13] = tmp8;
        }
        const obj4 = { variant: "heading-xl/bold", style: text.text, children: container.organization.name };
        const tmp10 = closure_6(intl(5220).Text, obj4);
        cResult[14] = container.organization.name;
        cResult[15] = text.text;
        cResult[16] = tmp10;
        tmp7 = getGameOrganizationDisplayNounDefault(obj2);
      }
      const intlResult = intl(504);
    }
  : function ConfirmStep(code) {
      code = code.code;
      const tmp = closure_10();
      items = [GameOrganizationInviteStore];
      const stateFromStores = code(504).useStateFromStores(items, () => {
        const invite = GameOrganizationInviteStore.getInvite(code);
        let state;
        if (invite != null) {
          state = invite.state;
        }
        let tmp3 = null;
        if (state === constants.RESOLVED) {
          tmp3 = invite;
        }
        return tmp3;
      });
      if (null == stateFromStores) {
        return null;
      } else {
        const obj2 = { displayNoun: stateFromStores.displayNoun };
        const obj3 = { spacing: nativeDefault.space.PX_24, style: tmp.container, children: null };
        const obj4 = { variant: "heading-xl/bold", style: tmp.text, children: stateFromStores.organization.name };
        const items1 = [closure_6(tmp2(5220).Text, obj4)];
        const obj5 = { text: null, size: "lg", onPress: null };
        const intl = tmp2(1128).intl;
        const obj6 = { noun: getGameOrganizationDisplayNounDefault(obj2) };
        obj5.text = intl.formatToPlainString(_modDef2406["Cz/ZUM"], obj6);
        obj5.onPress = tmp5;
        items1[1] = closure_6(tmp2(5230).Button, obj5);
        obj3.children = items1;
        return closure_7(tmp2(5964).Stack, obj3);
      }
      obj = code(504);
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useScreens(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] !== arg0) {
        const fn = function t() {
          obj = {};
          const obj2 = {
            headerTitle() {
              return null;
            },
            headerLeft: NavigatorHeader.getHeaderCloseButton(closeModal),
            render() {
              return closure_2_6(closure_2_12, { code });
            },
          };
          obj[obj.CONFIRM] = obj2;
          return obj;
        };
        items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp5 = items;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      obj = require("c");
      return require("Navigator").useNavigatorScreens(tmp4, tmp5);
    }
  : function useScreens(arg0) {
      _require = arg0;
      items = [arg0];
      return require("Navigator").useNavigatorScreens(() => {
        obj = {};
        const obj2 = {
          headerTitle() {
            return null;
          },
          headerLeft: NavigatorHeader.getHeaderCloseButton(closeModal),
          render() {
            return closure_2_6(closure_2_12, { code });
          },
        };
        obj[obj.CONFIRM] = obj2;
        return obj;
      }, items);
    };
ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameOrganizationJoinModal(code) {
      obj = c;
      const cResult = obj.c(3);
      const tmp4 = closure_13(code.code);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["13/7kX"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const obj2 = { screens: tmp4, initialRouteName: obj.CONFIRM, steps: items, headerBackTitle: first };
        const tmp11 = timestampProducer(StepModal.StepModal, obj2);
        cResult[1] = tmp4;
        cResult[2] = tmp11;
        let tmp7 = tmp11;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : function GameOrganizationJoinModal(code) {
      obj = { screens: closure_13(code.code), initialRouteName: obj.CONFIRM, steps: items, headerBackTitle: null };
      const intl = util.intl;
      obj.headerBackTitle = intl.string(util.t["13/7kX"]);
      return timestampProducer(StepModal.StepModal, obj);
    };
