// discord_app/modules/tiny_bronco/native/TinyBroncoAgeGroupHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import useAgeGroupPresentation from "../../age_assurance/useAgeGroupPresentation.tsx";
import _modDef14722 from "../TinyBronco.messages.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function handleOpenBlog() {
  AgeVerificationActionCreatorsDefault.openUrl(TINY_BRONCO_BLOG_URL);
}
function AccountStatusNotice(arg0) {
  _require = undefined;
  const tmp = closure_10();
  let obj = require("TinyBroncoAccountStatusVisibility");
  const shouldShowTinyBroncoAccountStatus = obj.useShouldShowTinyBroncoAccountStatus();
  let obj1 = require("useSelectedDismissibleContent");
  const tmp5 = _slicedToArray(
    obj1.useSelectedDismissibleContent(shouldShowTinyBroncoAccountStatus ? items : closure_12),
    2,
  );
  _require = tmp6;
  [][0] = tmp5[1];
  let tmp8 = null;
  if (shouldShowTinyBroncoAccountStatus) {
    tmp8 = null;
    if (null != tmp5[0]) {
      obj = { style: tmp.notice, children: null };
      obj = {
        style: tmp.noticeIcon,
        children: closure_8(tmp2(4515).CircleInformationIcon, { size: "xs", color: "text-link" }),
      };
      items = [closure_8(View, obj), ,];
      obj1 = { style: tmp.noticeBody, variant: "text-sm/normal", color: "text-default", children: null };
      const intl = tmp2(1114).intl;
      const obj2 = { handleOnBlogHook: handleOpenBlog };
      obj1.children = intl.format(obj3[arg0.ageGroup], obj2);
      items[1] = closure_8(tmp2(4556).Text, obj1);
      obj3 = {
        style: tmp.noticeDismiss,
        activeOpacity: 0.5,
        accessibilityRole: "button",
        accessibilityLabel: null,
        hitSlop: 12,
        onPress: null,
        children: null,
      };
      const intl2 = tmp2(1114).intl;
      obj3.accessibilityLabel = intl2.string(tmp2(1114).t.WAI6xu);
      obj3.onPress = tmp7;
      obj3.children = closure_8(tmp2(5680).XSmallIcon, { size: "sm", color: "icon-strong" });
      items[2] = closure_8(tmp2(5123).PressableOpacity, obj3);
      obj.children = items;
      tmp8 = closure_9(View, obj);
    }
  }
  return tmp8;
}
function AgeGroupDescription(ageGroup) {
  ageGroup = ageGroup.ageGroup;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
    let obj = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = tmp(1114).intl;
    obj = { handleOnAgeGatedContentHook: tmp(14754).handleOpenAgeGatedContentSupportArticle };
    obj.children = intl3.format(_modDef14722.gi4ulu, obj);
    return React6(tmp(4556).Text, obj);
  } else if (tmp(14716).AgeGroupState.TEEN === ageGroup) {
    const obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl2 = tmp(1114).intl;
    const obj2 = {
      handleOnAgeGatedContentHook: tmp(14754).handleOpenAgeGatedContentSupportArticle,
      handleOnConfirmAgeHook: tmp(14716).handleShowAgeVerification,
    };
    obj1.children = intl2.format(_modDef14722["221iML"], obj2);
    return React6(tmp(4556).Text, obj1);
  } else if (tmp(14716).AgeGroupState.UNVERIFIED === ageGroup) {
    obj = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl = tmp(1114).intl;
    obj3 = {
      handleOnAgeGatedContentHook: tmp(14754).handleOpenAgeGatedContentSupportArticle,
      handleOnConfirmAgeHook: tmp(14716).handleShowAgeVerification,
    };
    obj.children = intl.format(_modDef14722["W0/7DD"], obj3);
    return React6(tmp(4556).Text, obj);
  }
}
function AgeGroupCallToAction(ageGroup) {
  ageGroup = ageGroup.ageGroup;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
    return null;
  } else if (tmp(14716).AgeGroupState.TEEN === ageGroup) {
    let obj = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
    const intl2 = tmp(1114).intl;
    obj.text = intl2.string(_modDef14722["+7NlgO"]);
    obj.onPress = tmp(14754).handleOpenAgeGatedContentSupportArticle;
    return React6(tmp(4975).Button, obj);
  } else if (tmp(14716).AgeGroupState.UNVERIFIED === ageGroup) {
    obj = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
    const intl = tmp(1114).intl;
    obj.text = intl.string(_modDef14722["cI+bc/"]);
    obj.onPress = tmp(14716).handleShowAgeVerification;
    return React6(tmp(4975).Button, obj);
  }
}
const View = fn(17).View;
const TINY_BRONCO_BLOG_URL = fn(14683).TINY_BRONCO_BLOG_URL;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = {
  header: null,
  notice: null,
  noticeIcon: null,
  noticeBody: null,
  noticeDismiss: null,
  description: null,
};
createStyles = { gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 };
createStyles.header = createStyles;
createStyles.notice = {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderColor: nativeDefault.colors.TEXT_LINK,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
};
createStyles.noticeIcon = { flexShrink: 0 };
createStyles.noticeBody = { flex: 1 };
createStyles.noticeDismiss = { flexShrink: 0 };
let obj1 = {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderColor: nativeDefault.colors.TEXT_LINK,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
};
createStyles.description = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(createStyles);
let items = [fn(1943).DismissibleContent.TINY_BRONCO_NOTICE];
let closure_12 = [];
let obj3 = {};
obj3[fn(14716).AgeGroupState.ADULT] = _modDef14722["8TWztV"];
obj3[fn(14716).AgeGroupState.TEEN] = _modDef14722.qSkhZH;
obj3[fn(14716).AgeGroupState.UNVERIFIED] = _modDef14722.vGxRDB;
const obj4 = {};
obj4[fn(14716).AgeGroupState.ADULT] = _modDef14722.t5QjmQ;
obj4[fn(14716).AgeGroupState.TEEN] = _modDef14722["41MDhK"];
obj4[fn(14716).AgeGroupState.UNVERIFIED] = _modDef14722.m95jW8;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoAgeGroupHeader.tsx");

export const TinyBroncoAgeGroupHeader = function TinyBroncoAgeGroupHeader() {
  const tmp = closure_10();
  let obj = useAgeGroupPresentation;
  const ageGroupState = obj.useAgeGroupState();
  obj = { style: tmp.header, children: null };
  items = [React6(AccountStatusNotice, { ageGroup: ageGroupState }), ,];
  obj = { style: tmp.description, children: null };
  const obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj1.children = intl.string(obj4[ageGroupState]);
  const items1 = [React6(Text_Text.Heading, obj1), React6(AgeGroupDescription, { ageGroup: ageGroupState })];
  obj.children = items1;
  items[1] = React7(View, obj);
  items[2] = React6(AgeGroupCallToAction, { ageGroup: ageGroupState });
  obj.children = items;
  return React7(View, obj);
};
