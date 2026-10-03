// === Module 11791: AppLauncherCommandOptionActionSheet ===

// Module 11791 (AppLauncherCommandOptionActionSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["option", "children", "contentContainerStyles", "scrollable", "startExpanded"];
const View = fn(17).View;
const DEFAULT_CONTENT_PADDING = fn(1489).DEFAULT_CONTENT_PADDING;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { actionSheetBackground: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND }, titleContainer: { backgroundColor: "transparent" }, titleWrapper: { alignItems: "center" }, subtitleWrapper: { paddingHorizontal: 12, textAlign: "center" }, contentContainer: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx");

export const AppLauncherCommandOptionActionSheet = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(32);
  if (cResult[0] !== arg0) {
    ({ option, children, contentContainerStyles, scrollable, startExpanded } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
    _require = tmp12;
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = contentContainerStyles;
    cResult[3] = option;
    cResult[4] = tmp12;
    cResult[5] = scrollable;
    cResult[6] = startExpanded;
    let tmp6 = option;
    let tmp5 = contentContainerStyles;
    let tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    _require = cResult[4];
  }
  const tmp15 = closure_7();
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { alignSelf: "flex-start" };
    cResult[7] = obj2;
    let tmp16 = obj2;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] !== tmp7) {
    const obj3 = { style: tmp16, children: null };
    const obj4 = {
      onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          onDismiss = onDismiss.onDismiss;
          if (onDismiss != null) {
            onDismiss();
          }
        }
    };
    obj3.children = jsx(tmp(6696).ActionSheetCloseButton, {
      onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          onDismiss = onDismiss.onDismiss;
          if (onDismiss != null) {
            onDismiss();
          }
        }
    });
    const tmp20 = <View style={tmp16}>{null}</View>;
    cResult[8] = tmp7;
    cResult[9] = tmp20;
    let tmp17 = tmp20;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp23 = jsx(tmp(1188).Spacer, { size: 24 });
    cResult[10] = tmp23;
    let tmp21 = tmp23;
  } else {
    tmp21 = cResult[10];
  }
  if (cResult[11] === tmp6.displayDescription) {
    if (cResult[12] === tmp6.displayName) {
      if (cResult[13] === tmp15.subtitleWrapper) {
        if (cResult[14] === tmp15.titleContainer) {
          if (cResult[15] === tmp15.titleWrapper) {
            if (cResult[16] === tmp17) {
              let tmp24 = cResult[17];
            }
            if (cResult[18] === tmp5) {
              if (cResult[19] === tmp15.contentContainer) {
                let tmp26 = cResult[20];
              }
              if (cResult[21] === tmp4) {
                if (cResult[22] === tmp26) {
                  let tmp27 = cResult[23];
                }
                if (cResult[24] === tmp6.name) {
                  if (cResult[25] === tmp7) {
                    if (cResult[26] === tmp13) {
                      if (cResult[27] === tmp14) {
                        if (cResult[28] === tmp15.actionSheetBackground) {
                          if (cResult[29] === tmp24) {
                            if (cResult[30] === tmp27) {
                              let tmp31 = cResult[31];
                            }
                            return tmp31;
                          }
                        }
                      }
                    }
                  }
                }
                const obj5 = {};
                const merged = Object.assign(tmp7);
                obj5.backgroundStyles = tmp15.actionSheetBackground;
                obj5.scrollable = tmp13;
                obj5.startExpanded = tmp14;
                obj5.header = tmp24;
                obj5.children = tmp27;
                const tmp36 = jsx(tmp(6645).BottomSheet, {}, tmp6.name);
                cResult[24] = tmp6.name;
                cResult[25] = tmp7;
                cResult[26] = tmp13;
                cResult[27] = tmp14;
                cResult[28] = tmp15.actionSheetBackground;
                cResult[29] = tmp24;
                cResult[30] = tmp27;
                cResult[31] = tmp36;
                tmp31 = tmp36;
              }
              const obj6 = { style: tmp26, children: tmp4 };
              const tmp30 = <View style={tmp26}>{tmp4}</View>;
              cResult[21] = tmp4;
              cResult[22] = tmp26;
              cResult[23] = tmp30;
              tmp27 = tmp30;
            }
            const items = [tmp15.contentContainer, tmp5];
            cResult[18] = tmp5;
            cResult[19] = tmp15.contentContainer;
            cResult[20] = items;
            tmp26 = items;
          }
        }
      }
    }
  }
  const tmp25 = jsx(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { titleContainerStyle: tmp15.titleContainer, titleWrapperStyle: tmp15.titleWrapper, subtitleStyle: tmp15.subtitleWrapper, leading: tmp17, title: tmp6.displayName, subtitle: tmp6.displayDescription, trailing: tmp21 });
  cResult[11] = tmp6.displayDescription;
  cResult[12] = tmp6.displayName;
  cResult[13] = tmp15.subtitleWrapper;
  cResult[14] = tmp15.titleContainer;
  cResult[15] = tmp15.titleWrapper;
  cResult[16] = tmp17;
  cResult[17] = tmp25;
  tmp24 = tmp25;
  const obj = require("c");
  const obj7 = { titleContainerStyle: tmp15.titleContainer, titleWrapperStyle: tmp15.titleWrapper, subtitleStyle: tmp15.subtitleWrapper, leading: tmp17, title: tmp6.displayName, subtitle: tmp6.displayDescription, trailing: tmp21 };
}) : ((startExpanded) => {
  ({ option, scrollable } = startExpanded);
  ({ children, contentContainerStyles } = startExpanded);
  if (scrollable === undefined) {
    scrollable = true;
  }
  let flag = startExpanded.startExpanded;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(startExpanded, Object.assign({ option: 0, children: 0, contentContainerStyles: 0, scrollable: 0, startExpanded: 0 }));
  const tmp2 = closure_7();
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.backgroundStyles = tmp2.actionSheetBackground;
  obj.scrollable = scrollable;
  obj.startExpanded = flag;
  const obj3 = { titleContainerStyle: tmp2.titleContainer, titleWrapperStyle: tmp2.titleWrapper, subtitleStyle: tmp2.subtitleWrapper, leading: null, title: null, subtitle: null, trailing: null };
  const obj4 = {
    style: { alignSelf: "flex-start" },
    children: jsx(merged(6696).ActionSheetCloseButton, {
      onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const onDismiss = merged.onDismiss;
        if (onDismiss != null) {
          onDismiss();
        }
      }
    })
  };
  obj3.leading = <View style={{ alignSelf: "flex-start" }}>{jsx(merged(6696).ActionSheetCloseButton, {
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const onDismiss = merged.onDismiss;
      if (onDismiss != null) {
        onDismiss();
      }
    }
  })}</View>;
  ({ displayName: obj2.title, displayDescription: obj2.subtitle } = option);
  obj3.trailing = jsx(merged(1188).Spacer, { size: 24 });
  obj.header = jsx(merged(6644).BottomSheetTitleHeader, { titleContainerStyle: tmp2.titleContainer, titleWrapperStyle: tmp2.titleWrapper, subtitleStyle: tmp2.subtitleWrapper, leading: null, title: null, subtitle: null, trailing: null });
  const obj9 = { style: null, children };
  const items = [tmp2.contentContainer, contentContainerStyles];
  obj9.style = items;
  obj.children = <View style={null}>{children}</View>;
  return jsx(merged(6645).BottomSheet, {}, option.name);
});