// === Module 11805: AppLauncherCommandOptionActionSheet ===

// Module 11805 (AppLauncherCommandOptionActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

let obj2;
let closure_3 = ["option", "children", "contentContainerStyles", "scrollable", "startExpanded"];
const View = react_native.View;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const jsx = Fragment.jsx;
let obj = { actionSheetBackground: obj2, titleContainer: { backgroundColor: "transparent" }, titleWrapper: { alignItems: "center" }, subtitleWrapper: { paddingHorizontal: 12, textAlign: "center" }, contentContainer: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let contentContainerStyles;
  let option;
  let scrollable;
  let startExpanded;
  let tmp16;
  let tmp17;
  let tmp21;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(32);
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
    tmp9 = startExpanded;
    tmp8 = scrollable;
    tmp6 = option;
    tmp5 = contentContainerStyles;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    _require = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  const tmp15 = closure_7();
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { alignSelf: "flex-start" };
    cResult[7] = obj2;
    tmp16 = obj2;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] !== tmp7) {
    const tmp20 = <View style={tmp16}>{null}</View>;
    cResult[8] = tmp7;
    cResult[9] = tmp20;
    tmp17 = tmp20;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp23 = jsx(require("native").Spacer, { size: 24 });
    cResult[10] = tmp23;
    tmp21 = tmp23;
  } else {
    tmp21 = cResult[10];
  }
  if (cResult[11] === tmp6.displayDescription) {
    if (cResult[12] === tmp6.displayName) {
      if (cResult[13] === tmp15.subtitleWrapper) {
        if (cResult[14] === tmp15.titleContainer) {
          if (cResult[15] === tmp15.titleWrapper) {
            let tmp24;
            if (cResult[16] === tmp17) {
              tmp24 = cResult[17];
            }
            if (cResult[18] === tmp5) {
              let tmp26;
              if (cResult[19] === tmp15.contentContainer) {
                tmp26 = cResult[20];
              }
              if (cResult[21] === tmp4) {
                let tmp27;
                if (cResult[22] === tmp26) {
                  tmp27 = cResult[23];
                }
                if (cResult[24] === tmp6.name) {
                  if (cResult[25] === tmp7) {
                    if (cResult[26] === (undefined === tmp8 || tmp8)) {
                      if (cResult[27] === (undefined === tmp9 || tmp9)) {
                        if (cResult[28] === tmp15.actionSheetBackground) {
                          if (cResult[29] === tmp24) {
                            let tmp31;
                            if (cResult[30] === tmp27) {
                              tmp31 = cResult[31];
                            }
                            return tmp31;
                          }
                        }
                      }
                    }
                  }
                }
                BottomSheet = tmp(6652).BottomSheet;
                const merged = Object.assign(tmp7);
                const tmp36 = <BottomSheet key={tmp6.name} backgroundStyles={tmp15.actionSheetBackground} scrollable={undefined === tmp8 || tmp8} startExpanded={undefined === tmp9 || tmp9} header={tmp24}>{tmp27}</BottomSheet>;
                cResult[24] = tmp6.name;
                cResult[25] = tmp7;
                cResult[26] = undefined === tmp8 || tmp8;
                cResult[27] = undefined === tmp9 || tmp9;
                cResult[28] = tmp15.actionSheetBackground;
                cResult[29] = tmp24;
                cResult[30] = tmp27;
                cResult[31] = tmp36;
                tmp31 = tmp36;
              }
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
}) : ((startExpanded) => {
  let children;
  let contentContainerStyles;
  let option;
  let scrollable;
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
  BottomSheet = merged(6652).BottomSheet;
  const merged1 = Object.assign(merged);
  const BottomSheetTitleHeader = merged(6651).BottomSheetTitleHeader;
  ({ displayName: obj2.title, displayDescription: obj2.subtitle } = option);
  const items = [tmp2.contentContainer, contentContainerStyles];
  return <BottomSheet key={option.name} backgroundStyles={tmp2.actionSheetBackground} scrollable={scrollable} startExpanded={flag} header={<BottomSheetTitleHeader titleContainerStyle={tmp2.titleContainer} titleWrapperStyle={tmp2.titleWrapper} subtitleStyle={tmp2.subtitleWrapper} leading={null} title={null} subtitle={null} trailing={null} />}><View style={items}>{children}</View></BottomSheet>;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx");

export const AppLauncherCommandOptionActionSheet = tmp3;