// === Module 12293: ProvisionalAccountExplainer ===

// Module 12293 (ProvisionalAccountExplainer)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import CircleErrorIcon from "CircleErrorIcon" /* 4800 */;
import Text_Text from "Text/Text" /* 4886 */;
import Card from "Card" /* 5995 */;
import UserProfileCardDefault from "UserProfileCard" /* 6706 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12294 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles(() => {
  const obj = { chatContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, gap: nativeDefault.space.PX_8 }, header: null };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, gap: nativeDefault.space.PX_8 };
  obj.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((textVariant) => {
  const cResult = iconSize(576).c(6);
  ({ userId, iconSize } = textVariant);
  textVariant = textVariant.textVariant;
  if (cResult[0] === iconSize) {
    if (cResult[1] === textVariant) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === tmp4) {
      if (cResult[4] === userId) {
        let tmp5 = cResult[5];
      }
      return iconSize(12295).useProvisionalAccountExplanationText(tmp5);
    }
    const obj2 = { userId, renderApplicationName: tmp4 };
    cResult[3] = tmp4;
    cResult[4] = userId;
    cResult[5] = obj2;
    tmp5 = obj2;
  }
  const fn = function n(application) {
    return hasOwnProperty(ApplicationIconAndNameDefault, { application, textVariant, iconSize }, application.id);
  };
  cResult[0] = iconSize;
  cResult[1] = textVariant;
  cResult[2] = fn;
  tmp4 = fn;
  const obj = iconSize(576);
}) : ((userId) => {
  const iconSize = userId.iconSize;
  const textVariant = userId.textVariant;
  const items = [iconSize, textVariant];
  const renderApplicationName = noop.useCallback((application) => hasOwnProperty(ApplicationIconAndNameDefault, { application, textVariant, iconSize }, application.id), items);
  return iconSize(12295).useProvisionalAccountExplanationText({ userId: userId.userId, renderApplicationName });
});
fn(558);
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(16);
  ({ style, userId, iconSize } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === iconSize) {
    if (cResult[1] === userId) {
      let tmp5 = cResult[2];
    }
    const tmp7 = closure_8(tmp5);
    if (cResult[3] === style) {
      if (cResult[4] === tmp4.chatContainer) {
        let tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-sm/semibold", color: "text-default", children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t.Iyka0U);
        const tmp13 = hasOwnProperty(Text_Text.Text, obj2);
        const tmp14 = hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "xs", color: "text-default" });
        cResult[6] = tmp13;
        cResult[7] = tmp14;
        let tmp11 = tmp14;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[6];
        tmp11 = cResult[7];
      }
      if (cResult[8] !== tmp4.header) {
        const obj3 = { style: tmp4.header, children: null };
        const items = [tmp10, tmp11];
        obj3.children = items;
        const tmp18 = timestampProducer(View, obj3);
        cResult[8] = tmp4.header;
        cResult[9] = tmp18;
        let tmp15 = tmp18;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] !== tmp7) {
        const obj4 = { variant: "text-sm/normal", color: "text-default", children: tmp7 };
        const tmp21 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[10] = tmp7;
        cResult[11] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] === tmp8) {
        if (cResult[13] === tmp15) {
          if (cResult[14] === tmp19) {
            let tmp22 = cResult[15];
          }
          return tmp22;
        }
      }
      const obj5 = { style: tmp8, children: null };
      const items1 = [tmp15, tmp19];
      obj5.children = items1;
      const tmp24 = timestampProducer(Card.Card, obj5);
      cResult[12] = tmp8;
      cResult[13] = tmp15;
      cResult[14] = tmp19;
      cResult[15] = tmp24;
      tmp22 = tmp24;
    }
    const items2 = [tmp4.chatContainer, style];
    cResult[3] = style;
    cResult[4] = tmp4.chatContainer;
    cResult[5] = items2;
    tmp8 = items2;
  }
  const obj6 = { userId, iconSize, textVariant: "text-sm/semibold" };
  cResult[0] = iconSize;
  cResult[1] = userId;
  cResult[2] = obj6;
  tmp5 = obj6;
}) : ((arg0) => {
  ({ style, userId, iconSize } = arg0);
  const tmp = closure_7();
  const obj = { style: null, children: null };
  const items = [tmp.chatContainer, style];
  obj.style = items;
  const obj2 = { style: tmp.header, children: null };
  const obj3 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.Iyka0U);
  const items1 = [hasOwnProperty(Text_Text.Text, obj3), hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "xs", color: "text-default" })];
  obj2.children = items1;
  const items2 = [timestampProducer(View, obj2), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: closure_8({ userId, iconSize, textVariant: "text-sm/semibold" }) })];
  obj.children = items2;
  return timestampProducer(Card.Card, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountExplainer.tsx");

export const ChatProvisionalAccountExplainerCard = tmp3;
export const UserProfileProvisionalAccountExplainerCard = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ style, userId, iconSize } = arg0);
  if (cResult[0] === iconSize) {
    if (cResult[1] === userId) {
      let tmp4 = cResult[2];
    }
    const tmp6 = closure_8(tmp4);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.Iyka0U);
      const tmp12 = hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "xs", color: "text-default" });
      cResult[3] = stringResult;
      cResult[4] = tmp12;
      let tmp9 = tmp12;
      let tmp8 = stringResult;
    } else {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    if (cResult[5] !== tmp6) {
      const obj2 = { variant: "text-md/normal", color: "text-default", children: tmp6 };
      const tmp15 = hasOwnProperty(Text_Text.Text, obj2);
      cResult[5] = tmp6;
      cResult[6] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === style) {
      if (cResult[8] === tmp13) {
        let tmp16 = cResult[9];
      }
      return tmp16;
    }
    const obj3 = { style, title: tmp8, titleIcon: tmp9, children: tmp13 };
    const tmp19 = hasOwnProperty(UserProfileCardDefault, obj3);
    cResult[7] = style;
    cResult[8] = tmp13;
    cResult[9] = tmp19;
    tmp16 = tmp19;
  }
  const obj4 = { userId, iconSize, textVariant: "text-md/semibold" };
  cResult[0] = iconSize;
  cResult[1] = userId;
  cResult[2] = obj4;
  tmp4 = obj4;
}) : ((userId) => {
  const obj2 = { style: userId.style, title: null, titleIcon: null, children: null };
  const obj = { userId: userId.userId, iconSize: userId.iconSize, textVariant: "text-md/semibold" };
  const tmp = closure_8({ userId: userId.userId, iconSize: userId.iconSize, textVariant: "text-md/semibold" });
  const intl = util.intl;
  obj2.title = intl.string(util.t.Iyka0U);
  obj2.titleIcon = hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "xs", color: "text-default" });
  obj2.children = hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: tmp });
  return hasOwnProperty(UserProfileCardDefault, obj2);
});