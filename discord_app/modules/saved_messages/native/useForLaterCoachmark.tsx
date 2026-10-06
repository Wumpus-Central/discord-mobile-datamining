// discord_app/modules/saved_messages/native/useForLaterCoachmark.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl3 from "../../../intl/index.native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import AssetRegistryDefault from "../../../../_runtime/13153_AssetRegistry.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const Image = react_native.Image;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_8 = dismissible_content.DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
let closure_9 = createStyles.createStyles({ imageContainer: { width: 100, height: 80 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp3 = closure_9();
      if (cResult[0] !== tmp3.imageContainer) {
        const tmp8 = <Image source={AssetRegistryDefault} style={tmp3.imageContainer} />;
        cResult[0] = tmp3.imageContainer;
        cResult[1] = tmp8;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const tmp = closure_9();
      return <Image source={AssetRegistryDefault} style={tmp.imageContainer} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let obj3;
      let tmp10;
      let tmp11;
      let tmp5;
      const obj = require("react");
      const cResult = obj.c(10);
      const obj2 = require("ForLaterExperiment");
      const isForLaterExperimentOn = obj2.useIsForLaterExperimentOn("forLaterCoachmark");
      if (cResult[0] !== isForLaterExperimentOn) {
        let items1;
        if (isForLaterExperimentOn) {
          const items = [closure_8];
          items1 = items;
        } else {
          items1 = [];
        }
        cResult[0] = isForLaterExperimentOn;
        cResult[1] = items1;
        tmp5 = items1;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult = require("useSelectedDismissibleContent");
      const tmp7 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp5, undefined, true), 2);
      _require = tmp9;
      const first = tmp7[0];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(require("intl").t.qPbFK2);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(require("intl").t.URrJq1);
        cResult[2] = stringResult;
        cResult[3] = stringResult1;
        tmp11 = stringResult1;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      if (cResult[4] !== tmp7[1]) {
        class R {
          constructor() {
            tmp = closure_0(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        cResult[4] = tmp7[1];
        cResult[5] = R;
      } else {
        class R {
          constructor() {
            tmp = closure_0(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            return closure_1_7(closure_1_10, {});
          }
        }
        cResult[6] = D;
      } else {
        class D {
          constructor() {
            return closure_1_7(closure_1_10, {});
          }
        }
      }
      if ((cResult[7] === first) === closure_8) {
        class D {
          constructor() {
            return closure_1_7(closure_1_10, {});
          }
        }
        const tmpResult2 = require("useCoachmark");
        const coachmark = tmpResult2.useCoachmark(arg0, obj3);
        return tmp7[1];
      }
      obj3 = {
        title: tmp10,
        description: tmp11,
        position: "bottom",
        visible: first === closure_8,
        onDismiss: R,
        renderImgComponent: D,
      };
      cResult[7] = first === closure_8;
      cResult[8] = R;
      cResult[9] = obj3;
    }
  : (arg0) => {
      let first;
      let items1;
      let obj = first(7496);
      if (obj.useIsForLaterExperimentOn("forLaterCoachmark")) {
        const items = [closure_8];
        items1 = items;
      } else {
        items1 = [];
      }
      const tmpResult = first(6901);
      const tmp4 = _slicedToArray(tmpResult.useSelectedDismissibleContent(items1, undefined, true), 2);
      first = tmp4[0];
      let closure_1 = tmp6;
      const items2 = [tmp4[1], first];
      const memo = react.useMemo(() => {
        let intl;
        let intl2;
        const obj = {
          title: intl.string(intl3.t.qPbFK2),
          description: intl2.string(intl3.t.URrJq1),
          position: "bottom",
          visible: first === closure_8,
          onDismiss() {
            closure_1_1(constants.USER_DISMISS);
          },
          renderImgComponent() {
            return closure_1_7(closure_1_10, {});
          },
        };
        intl = intl3.intl;
        intl2 = intl3.intl;
        return obj;
      }, items2);
      const tmpResult2 = first(9895);
      const coachmark = tmpResult2.useCoachmark(arg0, memo);
      return tmp4[1];
    };
const result = size.fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default tmp2;
