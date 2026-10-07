// === Module 15553: CheckpointWelcomeScreen ===

// Module 15553 (CheckpointWelcomeScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import _modDef3039 from "module_3039" /* 3039 */;
import _modDef3071 from "module_3071" /* 3071 */;
import UserUtils from "UserUtils" /* 4728 */;
import TextWritingAnimation from "TextWritingAnimation" /* 15554 */;
import CheckpointKnickKnacksDefault from "CheckpointKnickKnacks" /* 15556 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 15557 */;
import UserStore from "UserStore" /* 1377 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const TextWritingAnimationDefault = TextWritingAnimation;

const View = _mod17.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 100;
let obj = { container: { width: "100%", flexGrow: 1 }, title: { transformOrigin: "left", width: 340 }, titleText: { textTransform: "uppercase", fontSize: 72, lineHeight: 72, letterSpacing: -2.88 }, subtitle: { maxWidth: 327, marginTop: nativeDefault.space.PX_12 }, content: { flex: 1, justifyContent: "center" }, knickKnacks: null };
let obj2 = { maxWidth: 327, marginTop: nativeDefault.space.PX_12 };
obj.knickKnacks = { marginTop: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
let obj3 = { marginTop: nativeDefault.space.PX_16 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointWelcomeScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(26);
  const tmp4 = closure_8();
  const bound = Math.min(useWindowDimensionsDefault().width / 392, 1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function h() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  const tmpResult = initialize;
  const name = UserUtils.useName(stateFromStores);
  ({ container, content } = tmp4);
  if (cResult[2] !== bound) {
    const obj2 = { transform: null };
    const obj3 = { scale: bound };
    const items1 = [obj3];
    obj2.transform = items1;
    cResult[2] = bound;
    cResult[3] = obj2;
    let tmp12 = obj2;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp4.title) {
    if (cResult[5] === tmp12) {
      let tmp13 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(_modDef3039["CdU/PF"]);
      cResult[7] = stringResult;
      let tmp14 = stringResult;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === tmp4.titleText) {
      if (cResult[9] === tmp13) {
        let tmp16 = cResult[10];
      }
      if (cResult[11] !== name) {
        const intl2 = util.intl;
        const obj4 = { username: name };
        const formatToPlainStringResult = intl2.formatToPlainString(_modDef3071.xhZ23b, obj4);
        cResult[11] = name;
        cResult[12] = formatToPlainStringResult;
        let tmp20 = formatToPlainStringResult;
      } else {
        tmp20 = cResult[12];
      }
      if (cResult[13] === tmp4.subtitle) {
        if (cResult[14] === tmp20) {
          let tmp22 = cResult[15];
        }
        if (cResult[16] !== tmp4.knickKnacks) {
          const obj5 = { style: tmp4.knickKnacks };
          const tmp29 = hasOwnProperty(CheckpointKnickKnacksDefault, obj5);
          cResult[16] = tmp4.knickKnacks;
          cResult[17] = tmp29;
          let tmp27 = tmp29;
        } else {
          tmp27 = cResult[17];
        }
        if (cResult[18] === tmp4.content) {
          if (cResult[19] === tmp22) {
            if (cResult[20] === tmp27) {
              if (cResult[21] === tmp16) {
                let tmp30 = cResult[22];
              }
              if (cResult[23] === tmp4.container) {
                if (cResult[24] === tmp30) {
                  let tmp34 = cResult[25];
                }
                return tmp34;
              }
              const obj6 = { children: null };
              const obj7 = { style: container, children: tmp30 };
              obj6.children = hasOwnProperty(View, obj7);
              const tmp38 = hasOwnProperty(CheckpointScreenDefault, obj6);
              cResult[23] = tmp4.container;
              cResult[24] = tmp30;
              cResult[25] = tmp38;
              tmp34 = tmp38;
              const tmp5Result = CheckpointScreenDefault;
            }
          }
        }
        const obj8 = { style: content, children: null };
        const items2 = [tmp16, tmp22, tmp27];
        obj8.children = items2;
        const tmp33 = timestampProducer(View, obj8);
        cResult[18] = tmp4.content;
        cResult[19] = tmp22;
        cResult[20] = tmp27;
        cResult[21] = tmp16;
        cResult[22] = tmp33;
        tmp30 = tmp33;
      }
      const obj9 = { style: tmp4.subtitle, text: tmp20, delay: delay + TextWritingAnimation.DURATION, variant: "heading-xl/medium" };
      const tmp26 = hasOwnProperty(TextWritingAnimationDefault, obj9);
      cResult[13] = tmp4.subtitle;
      cResult[14] = tmp20;
      cResult[15] = tmp26;
      tmp22 = tmp26;
      const tmp5Result2 = TextWritingAnimationDefault;
    }
    const obj10 = { style: tmp13, textStyle: tmp4.titleText, text: tmp14, delay, variant: "display-lg" };
    const tmp19 = hasOwnProperty(TextWritingAnimationDefault, obj10);
    cResult[8] = tmp4.titleText;
    cResult[9] = tmp13;
    cResult[10] = tmp19;
    tmp16 = tmp19;
  }
  const items3 = [tmp4.title, tmp12];
  cResult[4] = tmp4.title;
  cResult[5] = tmp12;
  cResult[6] = items3;
  tmp13 = items3;
  const tmpResult2 = UserUtils;
}) : (() => {
  const tmp = closure_8();
  const bound = Math.min(useWindowDimensionsDefault().width / 392, 1);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const name = UserUtils.useName(stateFromStores);
  const obj3 = { children: null };
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.content, children: null };
  const obj6 = { style: null, textStyle: tmp.titleText, text: null, delay: null, variant: "display-lg" };
  const items1 = [tmp.title, ];
  const obj7 = { transform: null };
  const items2 = [{ scale: bound }];
  obj7.transform = items2;
  items1[1] = obj7;
  obj6.style = items1;
  const tmp5 = CheckpointScreenDefault;
  const intl = util.intl;
  obj6.text = intl.string(_modDef3039["CdU/PF"]);
  obj6.delay = delay;
  const items3 = [hasOwnProperty(TextWritingAnimationDefault, obj6), , ];
  const obj8 = { style: tmp.subtitle, text: null, delay: null, variant: "heading-xl/medium" };
  const intl2 = util.intl;
  obj8.text = intl2.formatToPlainString(_modDef3071.xhZ23b, { username: name });
  obj8.delay = delay + TextWritingAnimation.DURATION;
  items3[1] = hasOwnProperty(TextWritingAnimationDefault, obj8);
  items3[2] = hasOwnProperty(CheckpointKnickKnacksDefault, { style: tmp.knickKnacks });
  obj5.children = items3;
  obj4.children = timestampProducer(View, obj5);
  obj3.children = hasOwnProperty(View, obj4);
  return hasOwnProperty(tmp5, obj3);
});