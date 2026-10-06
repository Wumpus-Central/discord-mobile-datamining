// discord_app/modules/tiny_bronco/native/TinyBroncoAgeGroupHeader.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../intl/index.native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import _modDef3105 from "../TinyBronco.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import TinyBroncoConstants from "../TinyBroncoConstants.tsx";
import useAgeGroupPresentation from "../../age_assurance/useAgeGroupPresentation.tsx";
import handleOpenUnconfirmedAgeGroupSupportArticle from "../handleOpenUnconfirmedAgeGroupSupportArticle.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, ageGroup;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
function handleOpenBlog() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(TINY_BRONCO_BLOG_URL);
}
const View = react_native.View;
const TINY_BRONCO_BLOG_URL = TinyBroncoConstants.TINY_BRONCO_BLOG_URL;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  header: obj2,
  notice: obj3,
  noticeIcon: { flexShrink: 0 },
  noticeBody: { flex: 1 },
  noticeDismiss: { flexShrink: 0 },
  description: obj4,
};
obj2 = { gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderColor: nativeDefault.colors.TEXT_LINK,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
};
obj4 = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let items = [dismissible_content.DismissibleContent.TINY_BRONCO_NOTICE];
let closure_12 = [];
let obj5 = {};
obj5[useAgeGroupPresentation.AgeGroupState.ADULT] = _modDef3105["8TWztV"];
obj5[useAgeGroupPresentation.AgeGroupState.TEEN] = _modDef3105.qSkhZH;
obj5[useAgeGroupPresentation.AgeGroupState.UNVERIFIED] = _modDef3105.vGxRDB;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (ageGroup) => {
      let closure_0;
      let tmp9;
      const obj = require("react");
      const cResult = obj.c(20);
      ageGroup = ageGroup.ageGroup;
      const tmp4 = closure_10();
      const obj2 = require("TinyBroncoLazy");
      const shouldShowAgeNotice = obj2.useShouldShowAgeNotice();
      const obj3 = require("useSelectedDismissibleContent");
      const tmp6 = _slicedToArray(obj3.useSelectedDismissibleContent(shouldShowAgeNotice ? items : closure_12), 2);
      _require = tmp8;
      const first = tmp6[0];
      if (cResult[0] !== tmp6[1]) {
        const fn = function l() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        };
        cResult[0] = tmp6[1];
        cResult[1] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[1];
      }
      if (shouldShowAgeNotice) {
        if (null != first) {
          let tmp11;
          let tmp14;
          let tmp18;
          const _Symbol3 = Symbol;
          const notice = tmp4.notice;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp13 = closure_8(require("CircleInformationIcon").CircleInformationIcon, {
              size: "xs",
              color: "text-link",
            });
            cResult[2] = tmp13;
            tmp11 = tmp13;
          } else {
            tmp11 = cResult[2];
          }
          if (cResult[3] !== tmp4.noticeIcon) {
            const obj4 = { style: tmp4.noticeIcon, children: tmp11 };
            const tmp17 = closure_8(View, obj4);
            cResult[3] = tmp4.noticeIcon;
            cResult[4] = tmp17;
            tmp14 = tmp17;
          } else {
            tmp14 = cResult[4];
          }
          const noticeBody = tmp4.noticeBody;
          if (cResult[5] !== ageGroup) {
            const intl = tmp(1126).intl;
            obj5 = { handleOnBlogHook: handleOpenBlog };
            const formatResult = intl.format(obj5[ageGroup], obj5);
            cResult[5] = ageGroup;
            cResult[6] = formatResult;
            tmp18 = formatResult;
          } else {
            tmp18 = cResult[6];
          }
          if (cResult[7] === tmp4.noticeBody) {
            let tmp22;
            let tmp25;
            let tmp27;
            if (cResult[8] === tmp18) {
              tmp22 = cResult[9];
            }
            const _Symbol = Symbol;
            const noticeDismiss = tmp4.noticeDismiss;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult = intl2.string(require("intl").t.WAI6xu);
              cResult[10] = stringResult;
              tmp25 = stringResult;
            } else {
              tmp25 = cResult[10];
            }
            const _Symbol2 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp29 = closure_8(require("XSmallIcon").XSmallIcon, { size: "sm", color: "icon-strong" });
              cResult[11] = tmp29;
              tmp27 = tmp29;
            } else {
              tmp27 = cResult[11];
            }
            if (cResult[12] === tmp9) {
              let tmp30;
              if (cResult[13] === tmp4.noticeDismiss) {
                tmp30 = cResult[14];
              }
              if (cResult[15] === tmp4.notice) {
                if (cResult[16] === tmp30) {
                  if (cResult[17] === tmp14) {
                    let tmp33;
                    if (cResult[18] === tmp22) {
                      tmp33 = cResult[19];
                    }
                    return tmp33;
                  }
                }
              }
              obj6 = { style: notice, children: items };
              items = [tmp14, tmp22, tmp30];
              const tmp36 = closure_9(View, obj6);
              cResult[15] = tmp4.notice;
              cResult[16] = tmp30;
              cResult[17] = tmp14;
              cResult[18] = tmp22;
              cResult[19] = tmp36;
              tmp33 = tmp36;
            }
            const obj7 = {
              style: noticeDismiss,
              activeOpacity: 0.5,
              accessibilityRole: "button",
              accessibilityLabel: tmp25,
              hitSlop: 12,
              onPress: tmp9,
              children: tmp27,
            };
            const tmp32 = closure_8(require("Pressables").PressableOpacity, obj7);
            cResult[12] = tmp9;
            cResult[13] = tmp4.noticeDismiss;
            cResult[14] = tmp32;
            tmp30 = tmp32;
          }
          const obj8 = { style: noticeBody, variant: "text-sm/normal", color: "text-default", children: tmp18 };
          const tmp24 = closure_8(require("Text/Text").Text, obj8);
          cResult[7] = tmp4.noticeBody;
          cResult[8] = tmp18;
          cResult[9] = tmp24;
          tmp22 = tmp24;
        }
      }
      return null;
    }
  : (ageGroup) => {
      let closure_0;
      let first;
      let intl;
      let intl2;
      _require = undefined;
      ageGroup = ageGroup.ageGroup;
      const tmp = closure_10();
      const obj = require("TinyBroncoLazy");
      const shouldShowAgeNotice = obj.useShouldShowAgeNotice();
      const obj2 = require("useSelectedDismissibleContent");
      [first, [][0]] = obj2.useSelectedDismissibleContent(shouldShowAgeNotice ? items : closure_12);
      _require = tmp7;
      let tmp9 = null;
      if (shouldShowAgeNotice) {
        tmp9 = null;
        if (null != first) {
          const obj3 = { style: tmp.notice, children: items };
          const obj4 = {
            style: tmp.noticeIcon,
            children: closure_8(require("CircleInformationIcon").CircleInformationIcon, {
              size: "xs",
              color: "text-link",
            }),
          };
          items = [closure_8(View, obj4), ,];
          obj5 = {
            style: tmp.noticeBody,
            variant: "text-sm/normal",
            color: "text-default",
            children: intl.format(obj5[ageGroup], obj6),
          };
          const Text = tmp2(4892).Text;
          intl = tmp2(1126).intl;
          obj6 = { handleOnBlogHook: handleOpenBlog };
          items[1] = closure_8(Text, obj5);
          const obj7 = {
            style: tmp.noticeDismiss,
            activeOpacity: 0.5,
            accessibilityRole: "button",
            accessibilityLabel: intl2.string(require("intl").t.WAI6xu),
            hitSlop: 12,
            onPress: tmp8,
            children: closure_8(require("XSmallIcon").XSmallIcon, { size: "sm", color: "icon-strong" }),
          };
          const PressableOpacity = tmp2(5916).PressableOpacity;
          intl2 = tmp2(1126).intl;
          items[2] = closure_8(PressableOpacity, obj7);
          tmp9 = closure_9(View, obj3);
        }
      }
      return tmp9;
    };
let obj6 = {};
obj6[useAgeGroupPresentation.AgeGroupState.ADULT] = _modDef3105.t5QjmQ;
obj6[useAgeGroupPresentation.AgeGroupState.TEEN] = _modDef3105["41MDhK"];
obj6[useAgeGroupPresentation.AgeGroupState.UNVERIFIED] = _modDef3105.m95jW8;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (ageGroup) => {
      let format;
      let format2;
      let format3;
      let gi4ulu;
      let obj3;
      let obj7;
      let prop;
      let v221iML;
      const obj = react2;
      const cResult = obj.c(3);
      ageGroup = ageGroup.ageGroup;
      if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
        let first;
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant: "text-sm/normal", color: "text-default", children: format3(gi4ulu, obj3) };
          const Text3 = Text_Text.Text;
          const intl3 = intl4.intl;
          format3 = intl3.format;
          obj3 = { handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle };
          gi4ulu = _modDef3105.gi4ulu;
          const tmp20 = metroImportAll(Text3, obj2);
          cResult[0] = tmp20;
          first = tmp20;
        } else {
          first = cResult[0];
        }
        return first;
      } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
        let tmp11;
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "text-sm/normal", color: "text-default", children: format2(v221iML, obj5) };
          const Text2 = Text_Text.Text;
          const intl2 = intl4.intl;
          format2 = intl2.format;
          obj5 = {
            handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle,
            handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification,
          };
          v221iML = _modDef3105["221iML"];
          const tmp15 = metroImportAll(Text2, obj4);
          cResult[1] = tmp15;
          tmp11 = tmp15;
        } else {
          tmp11 = cResult[1];
        }
        return tmp11;
      } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
        let tmp5;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          obj6 = { variant: "text-sm/normal", color: "text-default", children: format(prop, obj7) };
          const Text = Text_Text.Text;
          const intl = intl4.intl;
          format = intl.format;
          obj7 = {
            handleOnAgeGatedContentHook:
              handleOpenUnconfirmedAgeGroupSupportArticle.handleOpenUnconfirmedAgeGroupSupportArticle,
            handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification,
          };
          prop = _modDef3105["W0/7DD"];
          const tmp9 = metroImportAll(Text, obj6);
          cResult[2] = tmp9;
          tmp5 = tmp9;
        } else {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
    }
  : (ageGroup) => {
      let format;
      let format2;
      let format3;
      let gi4ulu;
      let obj3;
      let prop;
      let v221iML;
      ageGroup = ageGroup.ageGroup;
      if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
        const obj2 = { variant: "text-sm/normal", color: "text-default", children: format3(gi4ulu, obj3) };
        const Text3 = Text_Text.Text;
        const intl3 = intl4.intl;
        format3 = intl3.format;
        obj3 = { handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle };
        gi4ulu = _modDef3105.gi4ulu;
        return metroImportAll(Text3, obj2);
      } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
        const obj4 = { variant: "text-sm/normal", color: "text-default", children: format2(v221iML, obj5) };
        const Text2 = Text_Text.Text;
        const intl2 = intl4.intl;
        format2 = intl2.format;
        obj5 = {
          handleOnAgeGatedContentHook: useAgeGroupPresentation.handleOpenAgeGatedContentArticle,
          handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification,
        };
        v221iML = _modDef3105["221iML"];
        return metroImportAll(Text2, obj4);
      } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
        const obj = { variant: "text-sm/normal", color: "text-default", children: format(prop, obj6) };
        const Text = Text_Text.Text;
        const intl = intl4.intl;
        format = intl.format;
        obj6 = {
          handleOnAgeGatedContentHook:
            handleOpenUnconfirmedAgeGroupSupportArticle.handleOpenUnconfirmedAgeGroupSupportArticle,
          handleOnConfirmAgeHook: useAgeGroupPresentation.handleShowAgeVerification,
        };
        prop = _modDef3105["W0/7DD"];
        return metroImportAll(Text, obj);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (ageGroup) => {
      let intl;
      let intl2;
      const obj = react2;
      const cResult = obj.c(2);
      ageGroup = ageGroup.ageGroup;
      if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
        return null;
      } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
        let first;
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = {
            grow: true,
            variant: "secondary",
            size: "md",
            text: intl2.string(_modDef3105["+7NlgO"]),
            onPress: useAgeGroupPresentation.handleOpenAgeGatedContentArticle,
          };
          const Button2 = components_Button_Button.Button;
          intl2 = intl4.intl;
          const tmp13 = metroImportAll(Button2, obj2);
          cResult[0] = tmp13;
          first = tmp13;
        } else {
          first = cResult[0];
        }
        return first;
      } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
        let tmp5;
        const _Symbol = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            grow: true,
            variant: "secondary",
            size: "md",
            text: intl.string(_modDef3105["cI+bc/"]),
            onPress: useAgeGroupPresentation.handleShowAgeVerification,
          };
          const Button = components_Button_Button.Button;
          intl = intl4.intl;
          const tmp8 = metroImportAll(Button, obj3);
          cResult[1] = tmp8;
          tmp5 = tmp8;
        } else {
          tmp5 = cResult[1];
        }
        return tmp5;
      }
    }
  : (ageGroup) => {
      let intl;
      let intl2;
      ageGroup = ageGroup.ageGroup;
      if (useAgeGroupPresentation.AgeGroupState.ADULT === ageGroup) {
        return null;
      } else if (useAgeGroupPresentation.AgeGroupState.TEEN === ageGroup) {
        const obj2 = {
          grow: true,
          variant: "secondary",
          size: "md",
          text: intl2.string(_modDef3105["+7NlgO"]),
          onPress: useAgeGroupPresentation.handleOpenAgeGatedContentArticle,
        };
        const Button2 = components_Button_Button.Button;
        intl2 = intl4.intl;
        return metroImportAll(Button2, obj2);
      } else if (useAgeGroupPresentation.AgeGroupState.UNVERIFIED === ageGroup) {
        const obj = {
          grow: true,
          variant: "secondary",
          size: "md",
          text: intl.string(_modDef3105["cI+bc/"]),
          onPress: useAgeGroupPresentation.handleShowAgeVerification,
        };
        const Button = components_Button_Button.Button;
        intl = intl4.intl;
        return metroImportAll(Button, obj);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items1;
      let tmp10;
      let tmp13;
      let tmp16;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(19);
      const tmp4 = closure_10();
      const obj2 = useAgeGroupPresentation;
      const ageGroupState = obj2.useAgeGroupState();
      const header = tmp4.header;
      if (cResult[0] !== ageGroupState) {
        const obj3 = { ageGroup: ageGroupState };
        const tmp9 = metroImportAll(closure_15, obj3);
        cResult[0] = ageGroupState;
        cResult[1] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[1];
      }
      const description = tmp4.description;
      if (cResult[2] !== ageGroupState) {
        const intl = intl4.intl;
        const stringResult = intl.string(obj6[ageGroupState]);
        cResult[2] = ageGroupState;
        cResult[3] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== tmp10) {
        const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp10 };
        const tmp15 = metroImportAll(Text_Text.Heading, obj4);
        cResult[4] = tmp10;
        cResult[5] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] !== ageGroupState) {
        obj5 = { ageGroup: ageGroupState };
        const tmp19 = metroImportAll(closure_17, obj5);
        cResult[6] = ageGroupState;
        cResult[7] = tmp19;
        tmp16 = tmp19;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] === tmp4.description) {
        if (cResult[9] === tmp13) {
          let tmp20;
          let tmp22;
          if (cResult[10] === tmp16) {
            tmp20 = cResult[11];
          }
          if (cResult[12] !== ageGroupState) {
            obj6 = { ageGroup: ageGroupState };
            const tmp25 = metroImportAll(closure_18, obj6);
            cResult[12] = ageGroupState;
            cResult[13] = tmp25;
            tmp22 = tmp25;
          } else {
            tmp22 = cResult[13];
          }
          if (cResult[14] === tmp4.header) {
            if (cResult[15] === tmp6) {
              if (cResult[16] === tmp20) {
                let tmp26;
                if (cResult[17] === tmp22) {
                  tmp26 = cResult[18];
                }
                return tmp26;
              }
            }
          }
          const obj7 = { style: header, children: items };
          items = [tmp6, tmp20, tmp22];
          const tmp29 = React4(View, obj7);
          cResult[14] = tmp4.header;
          cResult[15] = tmp6;
          cResult[16] = tmp20;
          cResult[17] = tmp22;
          cResult[18] = tmp29;
          tmp26 = tmp29;
        }
      }
      const obj8 = { style: description, children: items1 };
      items1 = [tmp13, tmp16];
      const tmp21 = React4(View, obj8);
      cResult[8] = tmp4.description;
      cResult[9] = tmp13;
      cResult[10] = tmp16;
      cResult[11] = tmp21;
      tmp20 = tmp21;
    }
  : () => {
      let intl;
      let items1;
      const tmp = closure_10();
      const obj = useAgeGroupPresentation;
      const ageGroupState = obj.useAgeGroupState();
      const obj2 = { style: tmp.header, children: items };
      items = [metroImportAll(closure_15, { ageGroup: ageGroupState }), ,];
      const obj3 = { style: tmp.description, children: items1 };
      const obj4 = {
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        children: intl.string(obj6[ageGroupState]),
      };
      const Heading = Text_Text.Heading;
      intl = intl4.intl;
      items1 = [metroImportAll(Heading, obj4), metroImportAll(closure_17, { ageGroup: ageGroupState })];
      items[1] = React4(View, obj3);
      items[2] = metroImportAll(closure_18, { ageGroup: ageGroupState });
      return React4(View, obj2);
    };
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoAgeGroupHeader.tsx");

export const TinyBroncoAgeGroupHeader = tmp4;
