// discord_app/modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl3 from "../../../intl/index.native.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import useCoachmark from "../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import AssetRegistryDefault from "../../../../_runtime/11863_AssetRegistry.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = ["buttonRef"];
const Image = react_native.Image;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ image: { width: 100, height: 80 } });
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let buttonRef;
      let isVisible;
      let onDismiss;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = onDismiss(576);
      const cResult = obj.c(13);
      ({ buttonRef, isVisible, onDismiss } = arg0);
      const tmp4 = closure_9();
      const image = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = onDismiss(1126).intl;
        const stringResult = intl.string(onDismiss(1126).t.Pu7sCU);
        const intl2 = onDismiss(1126).intl;
        const formatResult = intl2.format(onDismiss(1126).t.Juk17F, {});
        cResult[0] = stringResult;
        cResult[1] = formatResult;
        tmp5 = stringResult;
        tmp6 = formatResult;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== onDismiss) {
        const fn = function f() {
          return onDismiss(ContentDismissActionType.USER_DISMISS);
        };
        cResult[2] = onDismiss;
        cResult[3] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp4.image) {
        const fn2 = function p() {
          return <Image source={AssetRegistryDefault} style={image.image} />;
        };
        cResult[4] = tmp4.image;
        cResult[5] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp9) {
        let tmp11;
        if (cResult[7] === tmp10) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === buttonRef) {
          if (cResult[10] === isVisible) {
            let tmp12;
            if (cResult[11] === tmp11) {
              tmp12 = cResult[12];
            }
            return tmp12;
          }
        }
        let tmp13 = null;
        if (isVisible) {
          const merged = Object.assign(tmp11);
          tmp13 = <closure_10 buttonRef={buttonRef} />;
        }
        cResult[9] = buttonRef;
        cResult[10] = isVisible;
        cResult[11] = tmp11;
        cResult[12] = tmp13;
        tmp12 = tmp13;
      }
      const obj3 = {
        title: tmp5,
        description: tmp6,
        position: "top",
        offsetY: 4,
        visible: true,
        onDismiss: tmp9,
        renderImgComponent: tmp10,
      };
      cResult[6] = tmp9;
      cResult[7] = tmp10;
      cResult[8] = obj3;
      tmp11 = obj3;
    }
  : (onDismiss) => {
      let buttonRef;
      let isVisible;
      onDismiss = onDismiss.onDismiss;
      ({ buttonRef, isVisible } = onDismiss);
      const tmp = closure_9();
      let closure_1 = tmp;
      const items = [onDismiss, tmp.image];
      const memo = react.useMemo(() => {
        let intl;
        let intl2;
        const obj = {
          title: intl.string(intl3.t.Pu7sCU),
          description: intl2.format(intl3.t.Juk17F, {}),
          position: "top",
          offsetY: 4,
          visible: true,
          onDismiss() {
            return onDismiss(constants.USER_DISMISS);
          },
          renderImgComponent() {
            return <Image source={closure_1(dependencyMap[9])} style={closure_1_1.image} />;
          },
        };
        intl = intl3.intl;
        intl2 = intl3.intl;
        return obj;
      }, items);
      let tmp3 = null;
      if (isVisible) {
        const merged = Object.assign(memo);
        tmp3 = <closure_10 buttonRef={buttonRef} />;
      }
      return tmp3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (buttonRef) => {
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] !== buttonRef) {
        buttonRef = buttonRef.buttonRef;
        const tmp8 = _objectWithoutProperties(buttonRef, closure_3);
        cResult[0] = buttonRef;
        cResult[1] = buttonRef;
        cResult[2] = tmp8;
        tmp5 = tmp8;
        tmp4 = buttonRef;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmpResult = useCoachmark;
      const coachmark = tmpResult.useCoachmark(tmp4, tmp5);
      return null;
    }
  : (buttonRef) => {
      buttonRef = buttonRef.buttonRef;
      const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
      const obj = useCoachmark;
      const coachmark = obj.useCoachmark(buttonRef, merged);
      return null;
    };
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx");

export default tmp2;
