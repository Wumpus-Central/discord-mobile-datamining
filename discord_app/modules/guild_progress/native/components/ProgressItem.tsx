// === Module 12150: ProgressItem ===

// Module 12150 (ProgressItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let obj = { formCTAContainer: { marginBottom: 8 }, formCTA: obj2, formCTAFullWidth: { width: "100%" } };
obj2 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
let closure_7 = createStyles.createStyles(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((isCompleted) => {
  let analyticsSetupType;
  let description;
  let iconStyle;
  let onPress;
  let renderEndComponent;
  let source;
  let title;
  let obj = onPress(analyticsSetupType[7]);
  const cResult = obj.c(22);
  ({ title, source, onPress } = isCompleted);
  isCompleted = isCompleted.isCompleted;
  ({ description, analyticsSetupType } = isCompleted);
  const analyticsAction = isCompleted.analyticsAction;
  ({ renderEndComponent, iconStyle } = isCompleted);
  const fullWidth = isCompleted.fullWidth;
  const tmp4 = closure_7();
  if (cResult[0] === analyticsAction) {
    if (cResult[1] === analyticsSetupType) {
      if (cResult[2] === isCompleted) {
        let tmp5;
        if (cResult[3] === onPress) {
          tmp5 = cResult[4];
        }
        let formCTAFullWidth;
        if (fullWidth) {
          formCTAFullWidth = tmp4.formCTAFullWidth;
        }
        if (cResult[5] === tmp4.formCTA) {
          let tmp7;
          let tmp8;
          if (cResult[6] === formCTAFullWidth) {
            tmp7 = cResult[7];
          }
          if (cResult[8] !== renderEndComponent) {
            let renderEndComponentResult;
            if (renderEndComponent != null) {
              renderEndComponentResult = renderEndComponent();
            }
            if (renderEndComponentResult == null) {
              renderEndComponentResult = null;
            }
            cResult[8] = renderEndComponent;
            cResult[9] = renderEndComponentResult;
            tmp8 = renderEndComponentResult;
          } else {
            tmp8 = cResult[9];
          }
          if (cResult[10] === description) {
            if (cResult[11] === iconStyle) {
              if (cResult[12] === isCompleted) {
                if (cResult[13] === tmp5) {
                  if (cResult[14] === source) {
                    if (cResult[15] === tmp7) {
                      if (cResult[16] === tmp8) {
                        let tmp11;
                        if (cResult[17] === title) {
                          tmp11 = cResult[18];
                        }
                        if (cResult[19] === tmp4.formCTAContainer) {
                          let tmp14;
                          if (cResult[20] === tmp11) {
                            tmp14 = cResult[21];
                          }
                          return tmp14;
                        }
                        const tmp17 = <View style={tmp4.formCTAContainer}>{tmp11}</View>;
                        cResult[19] = tmp4.formCTAContainer;
                        cResult[20] = tmp11;
                        cResult[21] = tmp17;
                        tmp14 = tmp17;
                      }
                    }
                  }
                }
              }
            }
          }
          const tmp13 = jsx(onPress(analyticsSetupType[9]).FormCTA, { variant: "row-button", style: tmp7, onPress: tmp5, iconSource: source, iconStyle, title, subtitle: description, completed: isCompleted, trailing: tmp8 });
          cResult[10] = description;
          cResult[11] = iconStyle;
          cResult[12] = isCompleted;
          cResult[13] = tmp5;
          cResult[14] = source;
          cResult[15] = tmp7;
          cResult[16] = tmp8;
          cResult[17] = title;
          cResult[18] = tmp13;
          tmp11 = tmp13;
        }
        const items = [tmp4.formCTA, formCTAFullWidth];
        cResult[5] = tmp4.formCTA;
        cResult[6] = formCTAFullWidth;
        cResult[7] = items;
        tmp7 = items;
      }
    }
  }
  const fn = function s() {
    const tmp2 = null != analyticsAction && null != analyticsSetupType;
    if (tmp2) {
      const obj2 = { setup_type: analyticsSetupType, action: analyticsAction, action_completed: isCompleted };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(AnalyticEvents.SERVER_SETUP_CTA_CLICKED, obj2);
    }
    onPress();
  };
  cResult[0] = analyticsAction;
  cResult[1] = analyticsSetupType;
  cResult[2] = isCompleted;
  cResult[3] = onPress;
  cResult[4] = fn;
  tmp5 = fn;
}) : ((onPress) => {
  let description;
  let fullWidth;
  let iconStyle;
  let renderEndComponentResult;
  let source;
  let title;
  onPress = onPress.onPress;
  const isCompleted = onPress.isCompleted;
  const analyticsSetupType = onPress.analyticsSetupType;
  const analyticsAction = onPress.analyticsAction;
  const renderEndComponent = onPress.renderEndComponent;
  ({ title, source, description, fullWidth, iconStyle } = onPress);
  const tmp = closure_7();
  const items = [analyticsAction, analyticsSetupType, onPress, isCompleted];
  const callback = analyticsAction.useCallback(() => {
    const tmp2 = null != analyticsAction && null != analyticsSetupType;
    if (tmp2) {
      const obj2 = { setup_type: analyticsSetupType, action: analyticsAction, action_completed: isCompleted };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(AnalyticEvents.SERVER_SETUP_CTA_CLICKED, obj2);
    }
    onPress();
  }, items);
  const items1 = [tmp.formCTA, ];
  let formCTAFullWidth;
  const FormCTA = onPress(analyticsSetupType[9]).FormCTA;
  if (fullWidth) {
    formCTAFullWidth = tmp.formCTAFullWidth;
  }
  let obj2 = { variant: "row-button", style: items1, onPress: callback, iconSource: source, iconStyle, title, subtitle: description, completed: isCompleted, trailing: renderEndComponentResult };
  items1[1] = formCTAFullWidth;
  renderEndComponentResult = undefined;
  if (renderEndComponent != null) {
    renderEndComponentResult = renderEndComponent();
  }
  if (renderEndComponentResult == null) {
    renderEndComponentResult = null;
  }
  return <View style={tmp.formCTAContainer}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/guild_progress/native/components/ProgressItem.tsx");

export default tmp2;