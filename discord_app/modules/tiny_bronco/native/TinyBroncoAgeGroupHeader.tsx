// === Module 14721: handleOpenBlog ===

// Module 14721 (handleOpenBlog)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Text from "Text" /* 4556 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 8411 */;
import AgeGroupState from "AgeGroupState" /* 14716 */;
import messagesProxyDefault from "messagesProxy" /* 14722 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { TINY_BRONCO_BLOG_URL } from "TINY_BRONCO_BLOG_URL" /* 14683 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1954 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function handleOpenBlog() {
  openIncodeAgeVerificationModalDefault.openUrl(TINY_BRONCO_BLOG_URL);
}
function AccountStatusNotice(arg0) {
  let _require;
  const tmp = callback4();
  let obj = _require(14717);
  const shouldShowTinyBroncoAccountStatus = obj.useShouldShowTinyBroncoAccountStatus();
  obj1 = _require(7388);
  const tmp5 = callback(obj1.useSelectedDismissibleContent(shouldShowTinyBroncoAccountStatus ? items : closure_12), 2);
  _require = tmp6;
  [][0] = tmp5[1];
  let tmp8 = null;
  if (shouldShowTinyBroncoAccountStatus) {
    tmp8 = null;
    if (null != tmp5[0]) {
      obj = { style: null, children: null };
      obj[0] = tmp.notice;
      obj = { style: null, children: null };
      obj[0] = tmp.noticeIcon;
      obj[1] = callback2(tmp2(4515).CircleInformationIcon, { size: "xs", color: "text-link" });
      items = [callback2(View, obj), , ];
      obj1 = { style: null, variant: "text-sm/normal", color: "text-default", children: null };
      obj1[0] = tmp.noticeBody;
      const intl = tmp2(1114).intl;
      const obj2 = { handleOnBlogHook: null };
      obj2[0] = handleOpenBlog;
      obj1[3] = intl.format(obj3[arg0.ageGroup], obj2);
      items[1] = callback2(tmp2(4556).Text, obj1);
      obj3 = { style: null, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 12, onPress: null, children: null };
      obj3[0] = tmp.noticeDismiss;
      const intl2 = tmp2(1114).intl;
      obj3[3] = intl2.string(tmp2(1114).t.WAI6xu);
      obj3[5] = tmp7;
      obj3[6] = callback2(tmp2(5680).XSmallIcon, { size: "sm", color: "icon-strong" });
      items[2] = callback2(tmp2(5123).PressableOpacity, obj3);
      obj[1] = items;
      tmp8 = callback3(View, obj);
    }
  }
  return tmp8;
}
function AgeGroupDescription(ageGroup) {
  ageGroup = ageGroup.ageGroup;
  if (AgeGroupState.AgeGroupState.ADULT === ageGroup) {
    let obj = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = tmp(1114).intl;
    obj = { handleOnAgeGatedContentHook: null };
    obj[0] = tmp(14754).handleOpenAgeGatedContentSupportArticle;
    obj[2] = intl3.format(messagesProxyDefault.gi4ulu, obj);
    return callback2(tmp(4556).Text, obj);
  } else if (tmp(14716).AgeGroupState.TEEN === ageGroup) {
    obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl2 = tmp(1114).intl;
    const obj2 = { handleOnAgeGatedContentHook: null, handleOnConfirmAgeHook: null };
    obj2[0] = tmp(14754).handleOpenAgeGatedContentSupportArticle;
    obj2[1] = tmp(14716).handleShowAgeVerification;
    obj1[2] = intl2.format(messagesProxyDefault["221iML"], obj2);
    return callback2(tmp(4556).Text, obj1);
  } else if (tmp(14716).AgeGroupState.UNVERIFIED === ageGroup) {
    obj = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl = tmp(1114).intl;
    obj3 = { handleOnAgeGatedContentHook: null, handleOnConfirmAgeHook: null };
    obj3[0] = tmp(14754).handleOpenAgeGatedContentSupportArticle;
    obj3[1] = tmp(14716).handleShowAgeVerification;
    obj[2] = intl.format(messagesProxyDefault["W0/7DD"], obj3);
    return callback2(tmp(4556).Text, obj);
  }
}
function AgeGroupCallToAction(ageGroup) {
  ageGroup = ageGroup.ageGroup;
  if (AgeGroupState.AgeGroupState.ADULT === ageGroup) {
    return null;
  } else if (tmp(14716).AgeGroupState.TEEN === ageGroup) {
    let obj = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
    const intl2 = tmp(1114).intl;
    obj[3] = intl2.string(messagesProxyDefault["+7NlgO"]);
    obj[4] = tmp(14754).handleOpenAgeGatedContentSupportArticle;
    return callback2(tmp(4975).Button, obj);
  } else if (tmp(14716).AgeGroupState.UNVERIFIED === ageGroup) {
    obj = { grow: true, variant: "secondary", size: "md", text: null, onPress: null };
    const intl = tmp(1114).intl;
    obj[3] = intl.string(messagesProxyDefault["cI+bc/"]);
    obj[4] = tmp(14716).handleShowAgeVerification;
    return callback2(tmp(4975).Button, obj);
  }
}
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { header: null, notice: null, noticeIcon: null, noticeBody: null, noticeDismiss: null, description: null };
createCacheKey = { gap: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "flex-start", gap: ThemesDefault.space.PX_8, padding: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.md, borderWidth: 1, borderColor: ThemesDefault.colors.TEXT_LINK, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_INFO };
createCacheKey[2] = { flexShrink: 0 };
createCacheKey[3] = { flex: 1 };
createCacheKey[4] = { flexShrink: 0 };
let obj1 = { flexDirection: "row", alignItems: "flex-start", gap: ThemesDefault.space.PX_8, padding: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.md, borderWidth: 1, borderColor: ThemesDefault.colors.TEXT_LINK, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_INFO };
createCacheKey[5] = { gap: ThemesDefault.space.PX_8 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let items = [require("DismissibleContent").DismissibleContent.TINY_BRONCO_NOTICE];
let closure_12 = [];
let obj3 = {};
obj3[require("AgeGroupState").AgeGroupState.ADULT] = messagesProxyDefault["8TWztV"];
obj3[require("AgeGroupState").AgeGroupState.TEEN] = messagesProxyDefault.qSkhZH;
obj3[require("AgeGroupState").AgeGroupState.UNVERIFIED] = messagesProxyDefault.vGxRDB;
const obj4 = {};
obj4[require("AgeGroupState").AgeGroupState.ADULT] = messagesProxyDefault.t5QjmQ;
obj4[require("AgeGroupState").AgeGroupState.TEEN] = messagesProxyDefault["41MDhK"];
obj4[require("AgeGroupState").AgeGroupState.UNVERIFIED] = messagesProxyDefault.m95jW8;
let obj2 = { gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoAgeGroupHeader.tsx");

export const TinyBroncoAgeGroupHeader = function TinyBroncoAgeGroupHeader() {
  const tmp = callback4();
  let obj = AgeGroupState;
  const ageGroupState = obj.useAgeGroupState();
  obj = { style: tmp.header, children: null };
  items = [callback2(AccountStatusNotice, { ageGroup: ageGroupState }), , ];
  obj = { style: tmp.description, children: null };
  obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj1[2] = intl.string(obj4[ageGroupState]);
  const items1 = [callback2(Text.Heading, obj1), callback2(AgeGroupDescription, { ageGroup: ageGroupState })];
  obj[1] = items1;
  items[1] = callback3(View, obj);
  items[2] = callback2(AgeGroupCallToAction, { ageGroup: ageGroupState });
  obj[1] = items;
  return callback3(View, obj);
};