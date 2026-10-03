// === Module 12135: ProgressItem ===

// Module 12135 (ProgressItem)
import nativeDefault from "native" /* 587 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { formCTAContainer: { marginBottom: 8 }, formCTA: { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT }, formCTAFullWidth: { width: "100%" } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_progress/native/components/ProgressItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((isCompleted) => {
  const cResult = onPress(analyticsSetupType[7]).c(22);
  ({ title, source, onPress } = isCompleted);
  isCompleted = isCompleted.isCompleted;
  ({ description, analyticsSetupType } = isCompleted);
  const analyticsAction = isCompleted.analyticsAction;
  ({ renderEndComponent, iconStyle } = isCompleted);
  const tmp4 = closure_7();
  if (cResult[0] === analyticsAction) {
    if (cResult[1] === analyticsSetupType) {
      if (cResult[2] === isCompleted) {
        if (cResult[3] === onPress) {
          let tmp5 = cResult[4];
        }
        let formCTAFullWidth;
        if (isCompleted.fullWidth) {
          formCTAFullWidth = tmp4.formCTAFullWidth;
        }
        if (cResult[5] === tmp4.formCTA) {
          if (cResult[6] === formCTAFullWidth) {
            let tmp7 = cResult[7];
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
            let tmp8 = renderEndComponentResult;
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
                        if (cResult[17] === title) {
                          let tmp11 = cResult[18];
                        }
                        if (cResult[19] === tmp4.formCTAContainer) {
                          if (cResult[20] === tmp11) {
                            let tmp14 = cResult[21];
                          }
                          return tmp14;
                        }
                        let obj2 = { style: tmp4.formCTAContainer, children: tmp11 };
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
          const obj3 = { variant: "row-button", style: tmp7, onPress: tmp5, iconSource: source, iconStyle, title, subtitle: description, completed: isCompleted, trailing: tmp8 };
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
    let tmp2 = null != analyticsAction;
    if (tmp2) {
      tmp2 = null != analyticsSetupType;
    }
    if (tmp2) {
      const obj2 = { setup_type: analyticsSetupType, action: analyticsAction, action_completed: isCompleted };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.SERVER_SETUP_CTA_CLICKED, obj2);
    }
    onPress();
  };
  cResult[0] = analyticsAction;
  cResult[1] = analyticsSetupType;
  cResult[2] = isCompleted;
  cResult[3] = onPress;
  cResult[4] = fn;
  tmp5 = fn;
  let obj = onPress(analyticsSetupType[7]);
}) : ((onPress) => {
  onPress = onPress.onPress;
  const isCompleted = onPress.isCompleted;
  const analyticsSetupType = onPress.analyticsSetupType;
  const analyticsAction = onPress.analyticsAction;
  const renderEndComponent = onPress.renderEndComponent;
  ({ title, source, description, fullWidth, iconStyle } = onPress);
  const tmp = closure_7();
  const items = [analyticsAction, analyticsSetupType, onPress, isCompleted];
  let obj = { style: tmp.formCTAContainer, children: null };
  const callback = analyticsAction.useCallback(() => {
    let tmp2 = null != analyticsAction;
    if (tmp2) {
      tmp2 = null != analyticsSetupType;
    }
    if (tmp2) {
      const obj2 = { setup_type: analyticsSetupType, action: analyticsAction, action_completed: isCompleted };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.SERVER_SETUP_CTA_CLICKED, obj2);
    }
    onPress();
  }, items);
  const items1 = [tmp.formCTA, ];
  let formCTAFullWidth;
  if (fullWidth) {
    formCTAFullWidth = tmp.formCTAFullWidth;
  }
  let obj2 = { variant: "row-button", style: items1, onPress: callback, iconSource: source, iconStyle, title, subtitle: description, completed: isCompleted, trailing: null };
  items1[1] = formCTAFullWidth;
  let renderEndComponentResult;
  if (renderEndComponent != null) {
    renderEndComponentResult = renderEndComponent();
  }
  if (renderEndComponentResult == null) {
    renderEndComponentResult = null;
  }
  obj2.trailing = renderEndComponentResult;
  obj.children = jsx(onPress(analyticsSetupType[9]).FormCTA, { variant: "row-button", style: items1, onPress: callback, iconSource: source, iconStyle, title, subtitle: description, completed: isCompleted, trailing: null });
  return <View style={tmp.formCTAContainer}>{null}</View>;
});