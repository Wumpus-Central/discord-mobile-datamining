// discord_app/modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import useCoachmark from "../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import _modDef11849 from "../../../../_runtime/metro/11849__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["buttonRef"];
const Image = fn(17).Image;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles({ image: { width: 100, height: 80 } });
fn(558);
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (buttonRef) => {
      const cResult = c.c(3);
      if (cResult[0] !== buttonRef) {
        buttonRef = buttonRef.buttonRef;
        const tmp8 = _objectWithoutProperties(buttonRef, closure_3);
        cResult[0] = buttonRef;
        cResult[1] = buttonRef;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = buttonRef;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const coachmark = useCoachmark.useCoachmark(tmp4, tmp5);
      return null;
    }
  : (buttonRef) => {
      const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
      const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
      return null;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = onDismiss(576).c(13);
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
        let tmp9 = fn;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp4.image) {
        const fn2 = function p() {
          return <Image source={_modDef11849} style={image.image} />;
        };
        cResult[4] = tmp4.image;
        cResult[5] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp9) {
        if (cResult[7] === tmp10) {
          let tmp11 = cResult[8];
        }
        if (cResult[9] === buttonRef) {
          if (cResult[10] === isVisible) {
            if (cResult[11] === tmp11) {
              let tmp12 = cResult[12];
            }
            return tmp12;
          }
        }
        let tmp13 = null;
        if (isVisible) {
          const obj2 = { buttonRef };
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
      const obj = onDismiss(576);
    }
  : (onDismiss) => {
      onDismiss = onDismiss.onDismiss;
      ({ buttonRef, isVisible } = onDismiss);
      const tmp = closure_9();
      closure_1 = tmp;
      const items = [onDismiss, tmp.image];
      const memo = noop.useMemo(() => {
        const obj = {
          title: null,
          description: null,
          position: "top",
          offsetY: 4,
          visible: true,
          onDismiss: null,
          renderImgComponent: null,
        };
        const intl = util.intl;
        obj.title = intl.string(util.t.Pu7sCU);
        const intl2 = util.intl;
        obj.description = intl2.format(util.t.Juk17F, {});
        obj.onDismiss = function onDismiss() {
          return onDismiss(constants.USER_DISMISS);
        };
        obj.renderImgComponent = function renderImgComponent() {
          return <Image source={closure_1(dependencyMap[9])} style={closure_1_1.image} />;
        };
        return obj;
      }, items);
      let tmp3 = null;
      if (isVisible) {
        let obj = { buttonRef };
        const merged = Object.assign(memo);
        tmp3 = <closure_10 buttonRef={buttonRef} />;
      }
      return tmp3;
    };
