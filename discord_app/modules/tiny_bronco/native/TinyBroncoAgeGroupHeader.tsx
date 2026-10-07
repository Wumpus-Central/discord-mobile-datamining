// === Module 14552: TinyBroncoAgeGroupHeader ===

// Module 14552 (TinyBroncoAgeGroupHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3105 from "module_3105" /* 3105 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8117 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 9441 */;
import handleOpenUnconfirmedAgeGroupSupportArticle from "handleOpenUnconfirmedAgeGroupSupportArticle" /* 14553 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function handleOpenBlog() {
  AgeVerificationActionCreatorsDefault.openUrl(TINY_BRONCO_BLOG_URL);
}
const View = fn(17).View;
const TINY_BRONCO_BLOG_URL = fn(9435).TINY_BRONCO_BLOG_URL;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { header: { gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 }, notice: null, noticeIcon: null, noticeBody: null, noticeDismiss: null, description: null };
let obj3 = { gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 };
obj2.notice = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
obj2.noticeIcon = { flexShrink: 0 };
obj2.noticeBody = { flex: 1 };
obj2.noticeDismiss = { flexShrink: 0 };
let obj4 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
obj2.description = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
let items = [fn(2036).DismissibleContent.TINY_BRONCO_NOTICE];
let closure_12 = [];
let obj6 = {};
obj6[fn(9441).AgeGroupState.ADULT] = _modDef3105["8TWztV"];
obj6[fn(9441).AgeGroupState.TEEN] = _modDef3105.qSkhZH;
obj6[fn(9441).AgeGroupState.UNVERIFIED] = _modDef3105.vGxRDB;
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((ageGroup) => {
  const cResult = require("c").c(20);
  ageGroup = ageGroup.ageGroup;
  const tmp4 = closure_10();
  const obj = require("c");
  const shouldShowAgeNotice = require("TinyBroncoLazy").useShouldShowAgeNotice();
  const obj2 = require("TinyBroncoLazy");
  const tmp6 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(shouldShowAgeNotice ? items : closure_12), 2);
  _require = tmp7;
  if (cResult[0] !== tmp6[1]) {
    const fn = function l() {
      return closure_0(ContentDismissActionType.USER_DISMISS);
    };
    cResult[0] = tmp7;
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (shouldShowAgeNotice) {
    if (null != tmp6[0]) {
      const _Symbol3 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = closure_8(tmp(4818).CircleInformationIcon, { size: "xs", color: "text-link" });
        cResult[2] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp4.noticeIcon) {
        const obj4 = { style: tmp4.noticeIcon, children: tmp10 };
        const tmp16 = closure_8(View, obj4);
        cResult[3] = tmp4.noticeIcon;
        cResult[4] = tmp16;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] !== ageGroup) {
        const intl = tmp(1126).intl;
        const obj5 = { handleOnBlogHook: handleOpenBlog };
        const formatResult = intl.format(obj6[ageGroup], obj5);
        cResult[5] = ageGroup;
        cResult[6] = formatResult;
        let tmp17 = formatResult;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] === tmp4.noticeBody) {
        if (cResult[8] === tmp17) {
          let tmp21 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(tmp(1126).t.WAI6xu);
          cResult[10] = stringResult;
          let tmp24 = stringResult;
        } else {
          tmp24 = cResult[10];
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp28 = closure_8(tmp(6024).XSmallIcon, { size: "sm", color: "icon-strong" });
          cResult[11] = tmp28;
          let tmp26 = tmp28;
        } else {
          tmp26 = cResult[11];
        }
        if (cResult[12] === tmp8) {
          if (cResult[13] === tmp4.noticeDismiss) {
            let tmp29 = cResult[14];
          }
          if (cResult[15] === tmp4.notice) {
            if (cResult[16] === tmp29) {
              if (cResult[17] === tmp13) {
                if (cResult[18] === tmp21) {
                  let tmp32 = cResult[19];
                }
                return tmp32;
              }
            }
          }
          obj6 = { style: tmp4.notice, children: null };
          items = [tmp13, tmp21, tmp29];
          obj6.children = items;
          const tmp35 = closure_9(View, obj6);
          cResult[15] = tmp4.notice;
          cResult[16] = tmp29;
          cResult[17] = tmp13;
          cResult[18] = tmp21;
          cResult[19] = tmp35;
          tmp32 = tmp35;
        }
        const obj7 = { style: tmp4.noticeDismiss, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: tmp24, hitSlop: 12, onPress: tmp8, children: tmp26 };
        const tmp31 = closure_8(tmp(5916).PressableOpacity, obj7);
        cResult[12] = tmp8;
        cResult[13] = tmp4.noticeDismiss;
        cResult[14] = tmp31;
        tmp29 = tmp31;
      }
      obj8 = { style: tmp4.noticeBody, variant: "text-sm/normal", color: "text-default", children: tmp17 };
      const tmp23 = closure_8(tmp(4892).Text, obj8);
      cResult[7] = tmp4.noticeBody;
      cResult[8] = tmp17;
      cResult[9] = tmp23;
      tmp21 = tmp23;
    }
  }
  return null;
}) : ((arg0) => {
  _require = undefined;
  const tmp = closure_10();
  const shouldShowAgeNotice = require("TinyBroncoLazy").useShouldShowAgeNotice();
  const obj = require("TinyBroncoLazy");
  const tmp5 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(shouldShowAgeNotice ? items : closure_12), 2);
  _require = tmp6;
  [][0] = tmp5[1];
  let tmp8 = null;
  if (shouldShowAgeNotice) {
    tmp8 = null;
    if (null != tmp5[0]) {
      const obj3 = { style: tmp.notice, children: null };
      const obj4 = { style: tmp.noticeIcon, children: closure_8(tmp2(4818).CircleInformationIcon, { size: "xs", color: "text-link" }) };
      items = [closure_8(View, obj4), , ];
      const obj5 = { style: tmp.noticeBody, variant: "text-sm/normal", color: "text-default", children: null };
      const intl = tmp2(1126).intl;
      obj6 = { handleOnBlogHook: handleOpenBlog };
      obj5.children = intl.format(obj6[arg0.ageGroup], obj6);
      items[1] = closure_8(tmp2(4892).Text, obj5);
      const obj7 = { style: tmp.noticeDismiss, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 12, onPress: null, children: null };
      const intl2 = tmp2(1126).intl;
      obj7.accessibilityLabel = intl2.string(tmp2(1126).t.WAI6xu);
      obj7.onPress = tmp7;
      obj7.children = closure_8(tmp2(6024).XSmallIcon, { size: "sm", color: "icon-strong" });
      items[2] = closure_8(tmp2(5916).PressableOpacity, obj7);
      obj3.children = items;
      tmp8 = closure_9(View, obj3);
    }
  }
  return tmp8;
});
let obj8 = {};
obj8[fn(9441).AgeGroupState.ADULT] = _modDef3105.t5QjmQ;
obj8[fn(9441).AgeGroupState.TEEN] = _modDef3105["41MDhK"];
obj8[fn(9441).AgeGroupState.UNVERIFIED] = _modDef3105.m95jW8;
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((ageGroup) => {
  const cResult = c.c(3);
  ageGroup = ageGroup.ageGroup;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
      const intl3 = util.intl;
      const obj3 = { handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle };
      obj2.children = intl3.format(_modDef3105.gi4ulu, obj3);
      const tmp18 = closure_1_8(Text_Text.Text, obj2);
      cResult[0] = tmp18;
      let first = tmp18;
    } else {
      first = cResult[0];
    }
    return first;
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
      const intl2 = util.intl;
      const obj5 = { handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle, handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification };
      obj4.children = intl2.format(_modDef3105["221iML"], obj5);
      const tmp13 = closure_1_8(Text_Text.Text, obj4);
      cResult[1] = tmp13;
      let tmp10 = tmp13;
    } else {
      tmp10 = cResult[1];
    }
    return tmp10;
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
      const intl = util.intl;
      const obj7 = { handleOnAgeGatedContentHook: handleOpenUnconfirmedAgeGroupSupportArticle.handleOpenUnconfirmedAgeGroupSupportArticle, handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification };
      obj6.children = intl.format(_modDef3105["W0/7DD"], obj7);
      const tmp8 = closure_1_8(Text_Text.Text, obj6);
      cResult[2] = tmp8;
      let tmp5 = tmp8;
    } else {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
}) : ((ageGroup) => {
  ageGroup = ageGroup.ageGroup;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
    const obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = util.intl;
    const obj3 = { handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle };
    obj2.children = intl3.format(_modDef3105.gi4ulu, obj3);
    return closure_1_8(Text_Text.Text, obj2);
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
    const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj5 = { handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle, handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification };
    obj4.children = intl2.format(_modDef3105["221iML"], obj5);
    return closure_1_8(Text_Text.Text, obj4);
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
    const obj = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl = util.intl;
    obj6 = { handleOnAgeGatedContentHook: handleOpenUnconfirmedAgeGroupSupportArticle.handleOpenUnconfirmedAgeGroupSupportArticle, handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification };
    obj.children = intl.format(_modDef3105["W0/7DD"], obj6);
    return closure_1_8(Text_Text.Text, obj);
  }
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((ageGroup) => {
  const cResult = c.c(2);
  ageGroup = ageGroup.ageGroup;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
    return null;
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
      const intl2 = util.intl;
      obj2.text = intl2.string(_modDef3105["+7NlgO"]);
      obj2.onPress = useAgeGroupPresentation.handleOpenAgeGatedContentArticle;
      const tmp13 = closure_1_8(components_Button_Button.Button, obj2);
      cResult[0] = tmp13;
      let first = tmp13;
    } else {
      first = cResult[0];
    }
    return first;
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
      const intl = util.intl;
      obj3.text = intl.string(_modDef3105["cI+bc/"]);
      obj3.onPress = useAgeGroupPresentation.handleShowAgeVerification;
      const tmp8 = closure_1_8(components_Button_Button.Button, obj3);
      cResult[1] = tmp8;
      let tmp5 = tmp8;
    } else {
      tmp5 = cResult[1];
    }
    return tmp5;
  }
}) : ((ageGroup) => {
  ageGroup = ageGroup.ageGroup;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
    return null;
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
    const obj2 = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
    const intl2 = util.intl;
    obj2.text = intl2.string(_modDef3105["+7NlgO"]);
    obj2.onPress = useAgeGroupPresentation.handleOpenAgeGatedContentArticle;
    return closure_1_8(components_Button_Button.Button, obj2);
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
    const obj = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
    const intl = util.intl;
    obj.text = intl.string(_modDef3105["cI+bc/"]);
    obj.onPress = useAgeGroupPresentation.handleShowAgeVerification;
    return closure_1_8(components_Button_Button.Button, obj);
  }
});
ReactCompilerGating = fn(558);
let obj5 = { gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoAgeGroupHeader.tsx");

export const TinyBroncoAgeGroupHeader = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(19);
  const tmp4 = closure_10();
  const ageGroupState = useAgeGroupPresentation.useAgeGroupState();
  if (cResult[0] !== ageGroupState) {
    const obj3 = { ageGroup: ageGroupState };
    const tmp9 = closure_1_8(closure_15, obj3);
    cResult[0] = ageGroupState;
    cResult[1] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== ageGroupState) {
    const intl = util.intl;
    const stringResult = intl.string(obj8[ageGroupState]);
    cResult[2] = ageGroupState;
    cResult[3] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp10) {
    const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp10 };
    const tmp15 = closure_1_8(Text_Text.Heading, obj4);
    cResult[4] = tmp10;
    cResult[5] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== ageGroupState) {
    const obj5 = { ageGroup: ageGroupState };
    const tmp19 = closure_1_8(closure_17, obj5);
    cResult[6] = ageGroupState;
    cResult[7] = tmp19;
    let tmp16 = tmp19;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === tmp4.description) {
    if (cResult[9] === tmp13) {
      if (cResult[10] === tmp16) {
        let tmp20 = cResult[11];
      }
      if (cResult[12] !== ageGroupState) {
        obj6 = { ageGroup: ageGroupState };
        const tmp25 = closure_1_8(closure_18, obj6);
        cResult[12] = ageGroupState;
        cResult[13] = tmp25;
        let tmp22 = tmp25;
      } else {
        tmp22 = cResult[13];
      }
      if (cResult[14] === tmp4.header) {
        if (cResult[15] === tmp6) {
          if (cResult[16] === tmp20) {
            if (cResult[17] === tmp22) {
              let tmp26 = cResult[18];
            }
            return tmp26;
          }
        }
      }
      const obj7 = { style: tmp4.header, children: null };
      items = [tmp6, tmp20, tmp22];
      obj7.children = items;
      const tmp29 = options(View, obj7);
      cResult[14] = tmp4.header;
      cResult[15] = tmp6;
      cResult[16] = tmp20;
      cResult[17] = tmp22;
      cResult[18] = tmp29;
      tmp26 = tmp29;
    }
  }
  obj8 = { style: tmp4.description, children: null };
  const items1 = [tmp13, tmp16];
  obj8.children = items1;
  const tmp21 = options(View, obj8);
  cResult[8] = tmp4.description;
  cResult[9] = tmp13;
  cResult[10] = tmp16;
  cResult[11] = tmp21;
  tmp20 = tmp21;
}) : (() => {
  const tmp = closure_10();
  const ageGroupState = useAgeGroupPresentation.useAgeGroupState();
  const obj2 = { style: tmp.header, children: null };
  items = [closure_1_8(closure_15, { ageGroup: ageGroupState }), , ];
  const obj3 = { style: tmp.description, children: null };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(obj8[ageGroupState]);
  const items1 = [closure_1_8(Text_Text.Heading, obj4), closure_1_8(closure_17, { ageGroup: ageGroupState })];
  obj3.children = items1;
  items[1] = options(View, obj3);
  items[2] = closure_1_8(closure_18, { ageGroup: ageGroupState });
  obj2.children = items;
  return options(View, obj2);
});