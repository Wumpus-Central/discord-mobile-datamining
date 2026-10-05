// discord_app/modules/conversations/components/native/ConversationCoachmark.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let obj2;
let obj3;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const TOPICAL_NAVIGATION_HEADER_COACHMARK = dismissible_content.DismissibleContent.TOPICAL_NAVIGATION_HEADER_COACHMARK;
let items = [TOPICAL_NAVIGATION_HEADER_COACHMARK];
let createStyles = createStyles_mod;
let obj = { badge: obj2, coachmarkWrapper: obj3 };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  paddingVertical: 2,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
};
createStyles = createStyles.createStyles;
obj3 = { marginRight: nativeDefault.space.PX_12 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const Text = Text_Text.Text;
        const intl = intl3.intl;
        const tmp7 = (
          <Text variant="text-sm/bold" color="text-default">
            {intl.string(intl3.t.c2GSIl)}
          </Text>
        );
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.badge) {
        const tmp11 = <View style={tmp4.badge}>{first}</View>;
        cResult[1] = tmp4.badge;
        cResult[2] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : () => {
      let intl;
      ({ variant: "text-sm/bold", color: "text-default", children: intl.string(intl3.t.c2GSIl) });
      const Text = Text_Text.Text;
      intl = intl3.intl;
      return <View style={closure_9().badge}>{null}</View>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let closure_0;
      let obj5;
      let tmp10;
      let tmp14;
      let tmp25;
      let tmp9;
      const obj = require("react");
      const cResult = obj.c(18);
      children = children.children;
      const isLast = children.isLast;
      closure_9();
      const ref = react.useRef(null);
      const obj2 = require("useSelectedDismissibleContent");
      const tmp6 = _slicedToArray(obj2.useSelectedDismissibleContent(items), 2);
      _require = tmp8;
      const first = tmp6[0];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(require("intl").t.UcQjDe);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(require("intl").t.QeJIbA);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp10 = stringResult1;
        tmp9 = stringResult;
      } else {
        [tmp9, tmp10] = cResult;
      }
      if (cResult[2] !== tmp6[1]) {
        const fn = function x() {
          closure_0(ContentDismissActionType.USER_DISMISS);
        };
        cResult[2] = tmp6[1];
        cResult[3] = fn;
        tmp14 = fn;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return <closure_1_10 />;
          }
        }
        cResult[4] = E;
      } else {
        class E {
          constructor() {
            return <closure_1_10 />;
          }
        }
      }
      if ((cResult[5] === first) === TOPICAL_NAVIGATION_HEADER_COACHMARK) {
        class E {
          constructor() {
            return <closure_1_10 />;
          }
        }
        const tmpResult = require("useCoachmark");
        const coachmark = tmpResult.useCoachmark(ref, obj5);
        if (cResult[8] !== tmp6[1]) {
          class O {
            constructor() {
              closure_0(ContentDismissActionType.USER_DISMISS);
            }
          }
          cResult[8] = tmp6[1];
          cResult[9] = O;
        } else {
          class O {
            constructor() {
              closure_0(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (!isLast) {
          class O {
            constructor() {
              closure_0(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[10] === children) {
          class O {
            constructor() {
              closure_0(ContentDismissActionType.USER_DISMISS);
            }
          }
          if (cResult[13] !== tmp20) {
            class O {
              constructor() {
                closure_0(ContentDismissActionType.USER_DISMISS);
              }
            }
            const tmp24 = <View ref={ref}>{tmp20}</View>;
            cResult[13] = tmp20;
            cResult[14] = tmp24;
          } else {
            class O {
              constructor() {
                closure_0(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          if (cResult[15] === tmp22) {
            class O {
              constructor() {
                closure_0(ContentDismissActionType.USER_DISMISS);
              }
            }
            return tmp25;
          }
          const tmp28 = <View style={tmp19}>{tmp22}</View>;
          cResult[15] = tmp22;
          cResult[16] = tmp19;
          cResult[17] = tmp28;
          tmp25 = tmp28;
        }
        cResult[10] = children;
        cResult[11] = O;
        cResult[12] = children(O);
        const childrenResult = children(O);
      }
      obj5 = {
        title: tmp9,
        description: tmp10,
        position: "bottom",
        visible: first === TOPICAL_NAVIGATION_HEADER_COACHMARK,
        onDismiss: tmp14,
        renderImgComponent: E,
      };
      cResult[5] = first === TOPICAL_NAVIGATION_HEADER_COACHMARK;
      cResult[6] = tmp14;
      cResult[7] = obj5;
    }
  : (arg0) => {
      let children;
      let closure_1;
      let isLast;
      let first;
      ({ children, isLast } = arg0);
      const tmp = closure_9();
      const ref = react.useRef(null);
      let obj = first(6891);
      const tmp3 = _slicedToArray(obj.useSelectedDismissibleContent(items), 2);
      first = tmp3[0];
      dependencyMap = tmp5;
      items = [tmp3[1], first];
      const memo = react.useMemo(() => {
        let intl;
        let intl2;
        const obj = {
          title: intl.string(intl3.t.UcQjDe),
          description: intl2.string(intl3.t.QeJIbA),
          position: "bottom",
          visible: first === TOPICAL_NAVIGATION_HEADER_COACHMARK,
          onDismiss() {
            closure_1_1(constants.USER_DISMISS);
          },
          renderImgComponent() {
            return closure_1_6(closure_1_10, {});
          },
        };
        intl = intl3.intl;
        intl2 = intl3.intl;
        return obj;
      }, items);
      const obj2 = first(9882);
      const coachmark = obj2.useCoachmark(ref, memo);
      const items1 = [tmp3[1]];
      let coachmarkWrapper;
      const callback = react.useCallback(() => {
        closure_1(ContentDismissActionType.USER_DISMISS);
      }, items1);
      if (!isLast) {
        coachmarkWrapper = tmp.coachmarkWrapper;
      }
      ({ ref, children: children(callback) });
      return <View style={coachmarkWrapper}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationCoachmark.tsx");

export const ConversationCoachmark = tmp3;
