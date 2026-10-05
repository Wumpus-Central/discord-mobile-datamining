// discord_app/modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ButtonGroup2 from "../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import LinkExternalSmallIcon2 from "../../../design/components/Icon/native/redesign/generated/LinkExternalSmallIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_8, alignSelf: "center", textAlign: "center" };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let LinkExternalSmallIcon;
      let container;
      let first;
      let header;
      let intl3;
      let items;
      let items1;
      let obj4;
      let tmp11;
      let tmp13;
      let tmp17;
      let tmp6;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(10);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj = HelpdeskUtilsDefault;
          openURL(obj.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED));
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      ({ container, header } = tmp4);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t.euks4U);
        cResult[1] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== tmp4.header) {
        const obj2 = {
          variant: "heading-md/medium",
          color: "mobile-text-heading-primary",
          accessibilityRole: "header",
          style: header,
          children: tmp6,
        };
        const tmp10 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[2] = tmp4.header;
        cResult[3] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl4.intl;
        const stringResult1 = intl2.string(intl4.t.hvVgAZ);
        cResult[4] = stringResult1;
        tmp11 = stringResult1;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          size: "lg",
          text: tmp11,
          onPress: first,
          icon: hasOwnProperty(LinkExternalSmallIcon, obj4),
          iconPosition: "end",
        };
        const Button = components_Button_Button.Button;
        obj4 = { color: nativeDefault.colors.WHITE };
        LinkExternalSmallIcon = LinkExternalSmallIcon2.LinkExternalSmallIcon;
        const tmp16 = hasOwnProperty(Button, obj3);
        cResult[5] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { children: items };
        items = [tmp13];
        const ButtonGroup = ButtonGroup2.ButtonGroup;
        const obj6 = {
          variant: "tertiary",
          size: "lg",
          text: intl3.string(intl4.t.WAI6xu),
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            return obj.hideActionSheet();
          },
        };
        const Button2 = components_Button_Button.Button;
        intl3 = intl4.intl;
        items[1] = hasOwnProperty(Button2, obj6);
        const tmp20 = metroRequire(ButtonGroup, obj5);
        cResult[6] = tmp20;
        tmp17 = tmp20;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] === tmp4.container) {
        let tmp21;
        if (cResult[8] === tmp8) {
          tmp21 = cResult[9];
        }
        return tmp21;
      }
      const obj7 = { contentStyles: container, children: items1 };
      items1 = [tmp8, tmp17];
      const tmp22 = metroRequire(Sheet_BottomSheet.BottomSheet, obj7);
      cResult[7] = tmp4.container;
      cResult[8] = tmp8;
      cResult[9] = tmp22;
      tmp21 = tmp22;
    }
  : () => {
      let LinkExternalSmallIcon;
      let intl;
      let intl2;
      let intl3;
      let items;
      let items1;
      let obj5;
      const tmp = closure_7();
      const callback = react.useCallback(() => {
        const openURL = LinkingDefault.openURL;
        LinkingDefault;
        const obj = HelpdeskUtilsDefault;
        openURL(obj.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED));
      }, []);
      let obj = { contentStyles: tmp.container, children: items };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      const obj2 = {
        variant: "heading-md/medium",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        style: tmp.header,
        children: intl.string(intl4.t.euks4U),
      };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items = [hasOwnProperty(Text, obj2)];
      const obj3 = { children: items1 };
      const ButtonGroup = ButtonGroup2.ButtonGroup;
      const obj4 = {
        size: "lg",
        text: intl2.string(intl4.t.hvVgAZ),
        onPress: callback,
        icon: hasOwnProperty(LinkExternalSmallIcon, obj5),
        iconPosition: "end",
      };
      const Button = components_Button_Button.Button;
      intl2 = intl4.intl;
      obj5 = { color: nativeDefault.colors.WHITE };
      LinkExternalSmallIcon = LinkExternalSmallIcon2.LinkExternalSmallIcon;
      items1 = [hasOwnProperty(Button, obj4)];
      const obj6 = {
        variant: "tertiary",
        size: "lg",
        text: intl3.string(intl4.t.WAI6xu),
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideActionSheet();
        },
      };
      const Button2 = components_Button_Button.Button;
      intl3 = intl4.intl;
      items1[1] = hasOwnProperty(Button2, obj6);
      items[1] = metroRequire(ButtonGroup, obj3);
      return metroRequire(BottomSheet, obj);
    };
const result = size.fileFinishedImporting("modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx");

export default tmp4;
