// === Module 12308: ProvisionalAccountExplainer ===

// Module 12308 (ProvisionalAccountExplainer)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import CircleErrorIcon from "CircleErrorIcon" /* 4806 */;
import Text_Text from "Text/Text" /* 4892 */;
import Card_Card from "Card/Card" /* 6002 */;
import UserProfileCardDefault from "UserProfileCard" /* 6713 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12309 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles(() => {
  const obj = { chatContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, gap: nativeDefault.space.PX_8 }, header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((textVariant) => {
  let iconSize;
  let userId;
  let obj = iconSize(576);
  const cResult = obj.c(6);
  ({ userId, iconSize } = textVariant);
  textVariant = textVariant.textVariant;
  if (cResult[0] === iconSize) {
    let tmp4;
    if (cResult[1] === textVariant) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === tmp4) {
      let tmp5;
      if (cResult[4] === userId) {
        tmp5 = cResult[5];
      }
      const tmpResult = iconSize(12310);
      return tmpResult.useProvisionalAccountExplanationText(tmp5);
    }
    const obj2 = { userId, renderApplicationName: tmp4 };
    cResult[3] = tmp4;
    cResult[4] = userId;
    cResult[5] = obj2;
    tmp5 = obj2;
  }
  const fn = function n(application) {
    const obj = { application, textVariant, iconSize };
    return hasOwnProperty(ApplicationIconAndNameDefault, obj, application.id);
  };
  cResult[0] = iconSize;
  cResult[1] = textVariant;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((iconSize) => {
  iconSize = iconSize.iconSize;
  const textVariant = iconSize.textVariant;
  const items = [iconSize, textVariant];
  const userId = iconSize.userId;
  const renderApplicationName = react.useCallback((application) => {
    const obj = { application, textVariant, iconSize };
    return hasOwnProperty(ApplicationIconAndNameDefault, obj, application.id);
  }, items);
  let obj = iconSize(12310);
  return obj.useProvisionalAccountExplanationText({ userId, renderApplicationName });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let iconSize;
  let intl;
  let items;
  let items1;
  let style;
  let userId;
  const obj = react2;
  const cResult = obj.c(16);
  ({ style, userId, iconSize } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === iconSize) {
    let tmp5;
    if (cResult[1] === userId) {
      tmp5 = cResult[2];
    }
    const tmp7 = closure_8(tmp5);
    if (cResult[3] === style) {
      let tmp8;
      let tmp11;
      let tmp10;
      let tmp15;
      let tmp19;
      if (cResult[4] === tmp4.chatContainer) {
        tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(intl2.t.Iyka0U) };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        const tmp13 = hasOwnProperty(Text, obj2);
        const tmp14 = hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "xs", color: "text-default" });
        cResult[6] = tmp13;
        cResult[7] = tmp14;
        tmp11 = tmp14;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[6];
        tmp11 = cResult[7];
      }
      if (cResult[8] !== tmp4.header) {
        const obj3 = { style: tmp4.header, children: items };
        items = [tmp10, tmp11];
        const tmp18 = metroRequire(View, obj3);
        cResult[8] = tmp4.header;
        cResult[9] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] !== tmp7) {
        const obj4 = { variant: "text-sm/normal", color: "text-default", children: tmp7 };
        const tmp21 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[10] = tmp7;
        cResult[11] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] === tmp8) {
        if (cResult[13] === tmp15) {
          let tmp22;
          if (cResult[14] === tmp19) {
            tmp22 = cResult[15];
          }
          return tmp22;
        }
      }
      const obj5 = { style: tmp8, children: items1 };
      items1 = [tmp15, tmp19];
      const tmp24 = metroRequire(Card_Card.Card, obj5);
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
  let iconSize;
  let intl;
  let items;
  let items1;
  let items2;
  let style;
  let userId;
  ({ style, userId, iconSize } = arg0);
  const tmp = closure_7();
  const obj = { style: items, children: items2 };
  items = [tmp.chatContainer, style];
  const obj2 = { style: tmp.header, children: items1 };
  const tmp2 = closure_8({ userId, iconSize, textVariant: "text-sm/semibold" });
  const Card = Card_Card.Card;
  const obj3 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(intl2.t.Iyka0U) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1 = [hasOwnProperty(Text, obj3), hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "xs", color: "text-default" })];
  items2 = [metroRequire(View, obj2), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: tmp2 })];
  return metroRequire(Card, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let iconSize;
  let style;
  let userId;
  const obj = react2;
  const cResult = obj.c(10);
  ({ style, userId, iconSize } = arg0);
  if (cResult[0] === iconSize) {
    let tmp4;
    let tmp9;
    let tmp8;
    let tmp13;
    if (cResult[1] === userId) {
      tmp4 = cResult[2];
    }
    const tmp6 = closure_8(tmp4);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t.Iyka0U);
      const tmp12 = hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "xs", color: "text-default" });
      cResult[3] = stringResult;
      cResult[4] = tmp12;
      tmp9 = tmp12;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    if (cResult[5] !== tmp6) {
      const obj2 = { variant: "text-md/normal", color: "text-default", children: tmp6 };
      const tmp15 = hasOwnProperty(Text_Text.Text, obj2);
      cResult[5] = tmp6;
      cResult[6] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === style) {
      let tmp16;
      if (cResult[8] === tmp13) {
        tmp16 = cResult[9];
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
  let intl;
  let tmp;
  const style = userId.style;
  const obj = { userId: userId.userId, iconSize: userId.iconSize, textVariant: "text-md/semibold" };
  const obj2 = { style, title: intl.string(intl2.t.Iyka0U), titleIcon: hasOwnProperty(CircleErrorIcon.CircleErrorIcon, { size: "xs", color: "text-default" }), children: hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: tmp }) };
  tmp = closure_8(obj);
  const tmp2 = UserProfileCardDefault;
  intl = intl2.intl;
  return hasOwnProperty(tmp2, obj2);
});
const result = size.fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountExplainer.tsx");

export const ChatProvisionalAccountExplainerCard = tmp3;
export const UserProfileProvisionalAccountExplainerCard = tmp4;