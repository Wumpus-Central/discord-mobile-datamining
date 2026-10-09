// discord_app/modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import useCoachmark from "../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["buttonRef"];
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AttachedCoachmark(buttonRef) {
      const cResult = c.c(3);
      if (cResult[0] !== buttonRef) {
        buttonRef = buttonRef.buttonRef;
        const tmp8 = _objectWithoutProperties(buttonRef, closure_2);
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
  : function AttachedCoachmark(buttonRef) {
      const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
      const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
      return null;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ScheduledMessageDraftCoachmark(arg0) {
      const cResult = onDismiss(576).c(11);
      ({ buttonRef, isVisible, onDismiss } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = onDismiss(1126).intl;
        const stringResult = intl.string(onDismiss(1126).t.ZT58S4);
        const intl2 = onDismiss(1126).intl;
        const formatResult = intl2.format(onDismiss(1126).t.Juk17F, {});
        cResult[0] = stringResult;
        cResult[1] = formatResult;
        tmp4 = stringResult;
        tmp5 = formatResult;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] !== onDismiss) {
        const fn = function c() {
          return onDismiss(ContentDismissActionType.USER_DISMISS);
        };
        cResult[2] = onDismiss;
        cResult[3] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function f() {
          return jsx(onDismiss(dependencyMap[7]).ScheduleMessageSpotIllustration, {
            width: 120,
            height: 80,
            accessible: false,
          });
        };
        cResult[4] = fn2;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== tmp8) {
        const obj2 = {
          title: tmp4,
          description: tmp5,
          position: "top",
          offsetY: 4,
          visible: true,
          onDismiss: tmp8,
          renderImgComponent: tmp9,
        };
        cResult[5] = tmp8;
        cResult[6] = obj2;
        let tmp10 = obj2;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === buttonRef) {
        if (cResult[8] === isVisible) {
          if (cResult[9] === tmp10) {
            let tmp11 = cResult[10];
          }
          return tmp11;
        }
      }
      let tmp12 = null;
      if (isVisible) {
        const obj3 = { buttonRef };
        const merged = Object.assign(tmp10);
        tmp12 = <closure_7 buttonRef={buttonRef} />;
      }
      cResult[7] = buttonRef;
      cResult[8] = isVisible;
      cResult[9] = tmp10;
      cResult[10] = tmp12;
      tmp11 = tmp12;
      const obj = onDismiss(576);
    }
  : function ScheduledMessageDraftCoachmark(onDismiss) {
      onDismiss = onDismiss.onDismiss;
      const items = [onDismiss];
      ({ buttonRef, isVisible } = onDismiss);
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
        obj.title = intl.string(util.t.ZT58S4);
        const intl2 = util.intl;
        obj.description = intl2.format(util.t.Juk17F, {});
        obj.onDismiss = function onDismiss() {
          return onDismiss(constants.USER_DISMISS);
        };
        obj.renderImgComponent = function renderImgComponent() {
          return closure_1_6(onDismiss(closure_1_1[7]).ScheduleMessageSpotIllustration, {
            width: 120,
            height: 80,
            accessible: false,
          });
        };
        return obj;
      }, items);
      let tmp2 = null;
      if (isVisible) {
        let obj = { buttonRef };
        const merged = Object.assign(memo);
        tmp2 = <closure_7 buttonRef={buttonRef} />;
      }
      return tmp2;
    };
