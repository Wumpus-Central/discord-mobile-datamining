// discord_app/modules/tiny_bronco/native/TinyBroncoAgeGroupHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3071 from "../TinyBronco.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import useAgeGroupPresentation from "../../age_assurance/useAgeGroupPresentation.tsx";
import handleOpenUnconfirmedAgeGroupSupportArticle from "../handleOpenUnconfirmedAgeGroupSupportArticle.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function handleOpenBlog() {
  AgeVerificationActionCreatorsDefault.openUrl(TINY_BRONCO_BLOG_URL);
}
function AccountStatusNotice(arg0) {
  _require = undefined;
  const tmp = closure_10();
  const shouldShowAgeNotice = require("TinyBroncoLazy").useShouldShowAgeNotice();
  const obj = require("TinyBroncoLazy");
  const tmp5 = _slicedToArray(
    require("useSelectedDismissibleContent").useSelectedDismissibleContent(shouldShowAgeNotice ? items : closure_12),
    2,
  );
  _require = tmp6;
  [][0] = tmp5[1];
  let tmp8 = null;
  if (shouldShowAgeNotice) {
    tmp8 = null;
    if (null != tmp5[0]) {
      const obj3 = { style: tmp.notice, children: null };
      const obj4 = {
        style: tmp.noticeIcon,
        children: closure_8(tmp2(4787).CircleInformationIcon, { size: "xs", color: "text-link" }),
      };
      items = [closure_8(View, obj4), ,];
      const obj5 = { style: tmp.noticeBody, variant: "text-sm/normal", color: "text-default", children: null };
      const intl = tmp2(1115).intl;
      obj6 = { handleOnBlogHook: handleOpenBlog };
      obj5.children = intl.format(obj6[arg0.ageGroup], obj6);
      items[1] = closure_8(tmp2(4832).Text, obj5);
      obj7 = {
        style: tmp.noticeDismiss,
        activeOpacity: 0.5,
        accessibilityRole: "button",
        accessibilityLabel: null,
        hitSlop: 12,
        onPress: null,
        children: null,
      };
      const intl2 = tmp2(1115).intl;
      obj7.accessibilityLabel = intl2.string(tmp2(1115).t.WAI6xu);
      obj7.onPress = tmp7;
      obj7.children = closure_8(tmp2(5992).XSmallIcon, { size: "sm", color: "icon-strong" });
      items[2] = closure_8(tmp2(5435).PressableOpacity, obj7);
      obj3.children = items;
      tmp8 = closure_9(View, obj3);
    }
  }
  return tmp8;
}
function AgeGroupDescription(ageGroup) {
  ageGroup = ageGroup.ageGroup;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
    const obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = util.intl;
    const obj3 = { handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle };
    obj2.children = intl3.format(_modDef3071.gi4ulu, obj3);
    return React6(Text_Text.Text, obj2);
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
    const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj5 = {
      handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle,
      handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification,
    };
    obj4.children = intl2.format(_modDef3071["221iML"], obj5);
    return React6(Text_Text.Text, obj4);
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
    const obj = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl = util.intl;
    obj6 = {
      handleOnAgeGatedContentHook:
        handleOpenUnconfirmedAgeGroupSupportArticle.handleOpenUnconfirmedAgeGroupSupportArticle,
      handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification,
    };
    obj.children = intl.format(_modDef3071["W0/7DD"], obj6);
    return React6(Text_Text.Text, obj);
  }
}
function AgeGroupCallToAction(ageGroup) {
  ageGroup = ageGroup.ageGroup;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
    return null;
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
    const obj2 = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
    const intl2 = util.intl;
    obj2.text = intl2.string(_modDef3071["+7NlgO"]);
    obj2.onPress = useAgeGroupPresentation.handleOpenAgeGatedContentArticle;
    return React6(components_Button_Button.Button, obj2);
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
    const obj = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
    const intl = util.intl;
    obj.text = intl.string(_modDef3071["cI+bc/"]);
    obj.onPress = useAgeGroupPresentation.handleShowAgeVerification;
    return React6(components_Button_Button.Button, obj);
  }
}
const View = fn(17).View;
const TINY_BRONCO_BLOG_URL = fn(9231).TINY_BRONCO_BLOG_URL;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  header: { gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 },
  notice: null,
  noticeIcon: null,
  noticeBody: null,
  noticeDismiss: null,
  description: null,
};
let obj3 = { gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 };
obj2.notice = {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderColor: nativeDefault.colors.TEXT_LINK,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
};
obj2.noticeIcon = { flexShrink: 0 };
obj2.noticeBody = { flex: 1 };
obj2.noticeDismiss = { flexShrink: 0 };
let obj4 = {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderColor: nativeDefault.colors.TEXT_LINK,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
};
obj2.description = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
let items = [fn(2029).DismissibleContent.TINY_BRONCO_NOTICE];
let closure_12 = [];
let obj6 = {};
obj6[fn(14275).AgeGroupState.ADULT] = _modDef3071["8TWztV"];
obj6[fn(14275).AgeGroupState.TEEN] = _modDef3071.qSkhZH;
obj6[fn(14275).AgeGroupState.UNVERIFIED] = _modDef3071.vGxRDB;
let obj7 = {};
obj7[fn(14275).AgeGroupState.ADULT] = _modDef3071.t5QjmQ;
obj7[fn(14275).AgeGroupState.TEEN] = _modDef3071["41MDhK"];
obj7[fn(14275).AgeGroupState.UNVERIFIED] = _modDef3071.m95jW8;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoAgeGroupHeader.tsx");

export const TinyBroncoAgeGroupHeader = function TinyBroncoAgeGroupHeader() {
  const tmp = closure_10();
  const ageGroupState = useAgeGroupPresentation.useAgeGroupState();
  const obj2 = { style: tmp.header, children: null };
  items = [React6(AccountStatusNotice, { ageGroup: ageGroupState }), ,];
  const obj3 = { style: tmp.description, children: null };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(obj7[ageGroupState]);
  const items1 = [React6(Text_Text.Heading, obj4), React6(AgeGroupDescription, { ageGroup: ageGroupState })];
  obj3.children = items1;
  items[1] = React7(View, obj3);
  items[2] = React6(AgeGroupCallToAction, { ageGroup: ageGroupState });
  obj2.children = items;
  return React7(View, obj2);
};
