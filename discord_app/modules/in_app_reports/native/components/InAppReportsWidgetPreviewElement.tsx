// discord_app/modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useTypeConsolidationTextTransform from "../../../design/useTypeConsolidationTextTransform.tsx";
import UserProfileGameWidgetTypes from "../../../user_profile/UserProfileGameWidgetTypes.tsx";
import UserProfilePersonalWidget from "../../../user_profile/UserProfilePersonalWidget.tsx";
import UserProfileSharedStylesDefault from "../../../user_profile/native/UserProfileSharedStyles.tsx";
import UserProfilePersonalWidgetCardDefault from "../../../user_profile/native/UserProfilePersonalWidgetCard.tsx";
import UserProfileWidgetsBoard from "../../../user_profile/native/UserProfileWidgetsBoard.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {
  container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 },
  title: { lineHeight: 16, marginBottom: 8 },
  card: obj2,
};
obj2 = { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let items2;
      let items3;
      let tmp9;
      let userId;
      let widget;
      const obj = react2;
      const cResult = obj.c(18);
      ({ widget, userId } = arg0);
      const tmp4 = closure_6();
      const obj2 = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("InAppReportsWidgetPreview", "text-xs/bold");
      const tmp7 = UserProfileSharedStylesDefault();
      if (cResult[0] === tmp7) {
        if (cResult[1] === tmp4) {
          if (cResult[2] === userId) {
            let tmp8;
            if (cResult[3] === widget) {
              tmp8 = cResult[4];
            }
            let tmp13 = null;
            if (null !== tmp8) {
              let title;
              if (cResult[5] === typeConsolidationEyebrow.style) {
                let tmp14;
                let tmp15;
                if (cResult[6] === tmp4.title) {
                  tmp14 = cResult[7];
                }
                if (cResult[8] !== typeConsolidationEyebrow.style) {
                  let stringResult;
                  if (null != typeConsolidationEyebrow.style) {
                    const intl2 = intl3.intl;
                    stringResult = intl2.string(intl3.t.SpsnDY);
                  } else {
                    const intl = intl3.intl;
                    const str = intl.string(intl3.t.SpsnDY);
                    stringResult = str.toUpperCase();
                  }
                  cResult[8] = typeConsolidationEyebrow.style;
                  cResult[9] = stringResult;
                  tmp15 = stringResult;
                } else {
                  tmp15 = cResult[9];
                }
                if (cResult[10] === typeConsolidationEyebrow.variant) {
                  if (cResult[11] === tmp14) {
                    let tmp17;
                    if (cResult[12] === tmp15) {
                      tmp17 = cResult[13];
                    }
                    if (cResult[14] === tmp8) {
                      if (cResult[15] === tmp4.container) {
                        let tmp20;
                        if (cResult[16] === tmp17) {
                          tmp20 = cResult[17];
                        }
                        tmp13 = tmp20;
                      }
                    }
                    const obj3 = { style: tmp4.container, children: items };
                    items = [tmp17, tmp8];
                    const tmp23 = hasOwnProperty(View, obj3);
                    cResult[14] = tmp8;
                    cResult[15] = tmp4.container;
                    cResult[16] = tmp17;
                    cResult[17] = tmp23;
                    tmp20 = tmp23;
                  }
                }
                const obj4 = {
                  style: tmp14,
                  accessibilityRole: "header",
                  variant: typeConsolidationEyebrow.variant,
                  children: tmp15,
                };
                const tmp19 = React3(Text_Text.Text, obj4);
                cResult[10] = typeConsolidationEyebrow.variant;
                cResult[11] = tmp14;
                cResult[12] = tmp15;
                cResult[13] = tmp19;
                tmp17 = tmp19;
              }
              if (null != typeConsolidationEyebrow.style) {
                const items1 = [tmp4.title, typeConsolidationEyebrow.style];
                title = items1;
              } else {
                title = tmp4.title;
              }
              cResult[5] = typeConsolidationEyebrow.style;
              cResult[6] = tmp4.title;
              cResult[7] = title;
              tmp14 = title;
            }
            return tmp13;
          }
        }
      }
      if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
        const obj5 = { userId, widget, disableInteraction: true, cardStyle: items2 };
        items2 = [tmp7.card, tmp4.card];
        tmp9 = React3(UserProfilePersonalWidgetCardDefault, obj5);
      } else {
        tmp9 = null;
        const tmpResult = UserProfileGameWidgetTypes;
        if (tmpResult.isGameWidget(widget)) {
          tmp9 = null;
          if (widget.games.length > 0) {
            const obj6 = { userId, widget, disableInteraction: true, cardStyle: items3 };
            items3 = [tmp7.card, tmp4.card];
            tmp9 = React3(UserProfileWidgetsBoard.WidgetSection, obj6);
          }
        }
      }
      cResult[0] = tmp7;
      cResult[1] = tmp4;
      cResult[2] = userId;
      cResult[3] = widget;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (arg0) => {
      let items;
      let items1;
      let items3;
      let stringResult;
      let tmp7;
      let userId;
      let widget;
      ({ widget, userId } = arg0);
      const tmp = closure_6();
      const obj = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("InAppReportsWidgetPreview", "text-xs/bold");
      const tmp6 = UserProfileSharedStylesDefault();
      if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
        const obj2 = { userId, widget, disableInteraction: true, cardStyle: items };
        items = [tmp6.card, tmp.card];
        tmp7 = React3(UserProfilePersonalWidgetCardDefault, obj2);
      } else {
        tmp7 = null;
        const tmp2Result = UserProfileGameWidgetTypes;
        if (tmp2Result.isGameWidget(widget)) {
          tmp7 = null;
          if (widget.games.length > 0) {
            const obj3 = { userId, widget, disableInteraction: true, cardStyle: items1 };
            items1 = [tmp6.card, tmp.card];
            tmp7 = React3(UserProfileWidgetsBoard.WidgetSection, obj3);
          }
        }
      }
      let tmp12Result = null;
      if (null !== tmp7) {
        let title;
        const obj4 = { style: tmp.container, children: items3 };
        const Text = Text_Text.Text;
        if (null != typeConsolidationEyebrow.style) {
          const items2 = [tmp.title, typeConsolidationEyebrow.style];
          title = items2;
        } else {
          title = tmp.title;
        }
        const obj5 = {
          style: title,
          accessibilityRole: "header",
          variant: typeConsolidationEyebrow.variant,
          children: stringResult,
        };
        if (null != typeConsolidationEyebrow.style) {
          const intl2 = intl3.intl;
          stringResult = intl2.string(intl3.t.SpsnDY);
        } else {
          const intl = intl3.intl;
          const str = intl.string(intl3.t.SpsnDY);
          stringResult = str.toUpperCase();
        }
        items3 = [React3(Text, obj5), tmp7];
        tmp12Result = hasOwnProperty(View, obj4);
      }
      return tmp12Result;
    };
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx",
);

export default tmp4;
