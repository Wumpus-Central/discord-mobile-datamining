// === Module 16896: AgeNoticeAgeGroupHeader ===

// Module 16896 (AgeNoticeAgeGroupHeader)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3255 from "module_3255" /* 3255 */;
import Text_Text from "Text/Text" /* 5763 */;
import components_Button_Button from "components/Button/Button" /* 5770 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8100 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 10318 */;
import handleOpenUnconfirmedAgeGroupSupportArticle from "handleOpenUnconfirmedAgeGroupSupportArticle" /* 16897 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function handleOpenBlog() {
  AgeVerificationActionCreatorsDefault.openUrl(AGE_NOTICE_BLOG_URL);
}
function AccountStatusNotice(arg0) {
  _require = undefined;
  const tmp = closure_10();
  const shouldShowAgeNotice = require("AgeNoticeLazy").useShouldShowAgeNotice();
  const obj = require("AgeNoticeLazy");
  const tmp5 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(shouldShowAgeNotice ? items : closure_12), 2);
  _require = tmp6;
  [][0] = tmp5[1];
  let tmp8 = null;
  if (shouldShowAgeNotice) {
    tmp8 = null;
    if (null != tmp5[0]) {
      const obj3 = { style: tmp.notice, children: null };
      const obj4 = { style: tmp.noticeIcon, children: closure_8(tmp2(5872).CircleInformationIcon, { size: "xs", color: "text-link" }) };
      items = [closure_8(View, obj4), , ];
      const obj5 = { style: tmp.noticeBody, variant: "body-sm/normal", color: "text-default", children: null };
      const intl = tmp2(1113).intl;
      obj6 = { handleOnBlogHook: handleOpenBlog };
      obj5.children = intl.format(obj6[arg0.ageGroup], obj6);
      items[1] = closure_8(tmp2(5763).Text, obj5);
      obj7 = { style: tmp.noticeDismiss, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 12, onPress: null, children: null };
      const intl2 = tmp2(1113).intl;
      obj7.accessibilityLabel = intl2.string(tmp2(1113).t.WAI6xu);
      obj7.onPress = tmp7;
      obj7.children = closure_8(tmp2(7198).XSmallIcon, { size: "sm", color: "icon-strong" });
      items[2] = closure_8(tmp2(7124).PressableOpacity, obj7);
      obj3.children = items;
      tmp8 = closure_9(View, obj3);
    }
  }
  return tmp8;
}
function AgeGroupDescription(ageGroup) {
  ageGroup = ageGroup.ageGroup;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
    const obj2 = { variant: "body-sm/normal", color: "text-default", children: null };
    const intl3 = util.intl;
    const obj3 = { handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle };
    obj2.children = intl3.format(_modDef3255.gi4ulu, obj3);
    return React5(Text_Text.Text, obj2);
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
    const obj4 = { variant: "body-sm/normal", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj5 = { handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle, handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification };
    obj4.children = intl2.format(_modDef3255["221iML"], obj5);
    return React5(Text_Text.Text, obj4);
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
    const obj = { variant: "body-sm/normal", color: "text-default", children: null };
    const intl = util.intl;
    obj6 = { handleOnAgeGatedContentHook: handleOpenUnconfirmedAgeGroupSupportArticle.handleOpenUnconfirmedAgeGroupSupportArticle, handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification };
    obj.children = intl.format(_modDef3255["W0/7DD"], obj6);
    return React5(Text_Text.Text, obj);
  }
}
function AgeGroupCallToAction(ageGroup) {
  ageGroup = ageGroup.ageGroup;
  if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
    return null;
  } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
    const obj2 = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
    const intl2 = util.intl;
    obj2.text = intl2.string(_modDef3255["+7NlgO"]);
    obj2.onPress = useAgeGroupPresentation.handleOpenAgeGatedContentArticle;
    return React5(components_Button_Button.Button, obj2);
  } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
    const obj = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
    const intl = util.intl;
    obj.text = intl.string(_modDef3255["cI+bc/"]);
    obj.onPress = useAgeGroupPresentation.handleShowAgeVerification;
    return React5(components_Button_Button.Button, obj);
  }
}
const View = fn(17).View;
const AGE_NOTICE_BLOG_URL = fn(6875).AGE_NOTICE_BLOG_URL;
const ContentDismissActionType = fn(4989).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5143);
let obj2 = { header: { gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 }, notice: null, noticeIcon: null, noticeBody: null, noticeDismiss: null, description: null };
let obj3 = { gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 };
obj2.notice = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_INFO };
obj2.noticeIcon = { flexShrink: 0 };
obj2.noticeBody = { flex: 1 };
obj2.noticeDismiss = { flexShrink: 0 };
let obj4 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_INFO };
obj2.description = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
let items = [fn(4976).DismissibleContent.TINY_BRONCO_NOTICE];
let closure_12 = [];
let obj6 = {};
obj6[fn(10318).AgeGroupState.ADULT] = _modDef3255["8TWztV"];
obj6[fn(10318).AgeGroupState.TEEN] = _modDef3255.qSkhZH;
obj6[fn(10318).AgeGroupState.UNVERIFIED] = _modDef3255.vGxRDB;
let obj7 = {};
obj7[fn(10318).AgeGroupState.ADULT] = _modDef3255.t5QjmQ;
obj7[fn(10318).AgeGroupState.TEEN] = _modDef3255["41MDhK"];
obj7[fn(10318).AgeGroupState.UNVERIFIED] = _modDef3255.m95jW8;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeAgeGroupHeader.tsx");

export function AgeNoticeAgeGroupHeader() {
  const tmp = closure_10();
  const ageGroupState = useAgeGroupPresentation.useAgeGroupState();
  const obj2 = { style: tmp.header, children: null };
  items = [React5(AccountStatusNotice, { ageGroup: ageGroupState }), , ];
  const obj3 = { style: tmp.description, children: null };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(obj7[ageGroupState]);
  const items1 = [React5(Text_Text.Heading, obj4), React5(AgeGroupDescription, { ageGroup: ageGroupState })];
  obj3.children = items1;
  items[1] = React6(View, obj3);
  items[2] = React5(AgeGroupCallToAction, { ageGroup: ageGroupState });
  obj2.children = items;
  return React6(View, obj2);
}