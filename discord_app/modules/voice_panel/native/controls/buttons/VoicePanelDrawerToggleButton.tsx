// === Module 17376: VoicePanelDrawerToggleButton ===

// Module 17376 (VoicePanelDrawerToggleButton)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import NativeViewDefault from "NativeView" /* 5983 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 10857 */;
import ChevronSmallUpIcon2 from "ChevronSmallUpIcon" /* 13398 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 17341 */;
import VoicePanelStyles from "VoicePanelStyles" /* 17355 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 17356 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let size;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { circle: size, iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" } };
size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((props) => {
  let accessibilityLabel;
  let handlePress;
  let isDrawerOpen;
  let items;
  let items1;
  let openTab;
  let tmp8;
  let wrapperSpecs;
  const obj = react2;
  const cResult = obj.c(17);
  props = props.props;
  ({ openTab, wrapperSpecs } = props);
  const tmp4 = closure_5();
  const obj2 = VoicePanelStyles;
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  const color = voicePanelButtonStyles.iconFill.color;
  ({ isDrawerOpen, handlePress, accessibilityLabel } = useDrawerToggleDefault(openTab));
  useDrawerToggleDefault(openTab);
  if (cResult[0] !== backgroundColor) {
    const obj3 = { backgroundColor };
    cResult[0] = backgroundColor;
    cResult[1] = obj3;
    tmp8 = obj3;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp4.circle) {
    let tmp9;
    let ChevronSmallUpIcon;
    if (cResult[3] === tmp8) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === color) {
      let tmp11;
      if (cResult[6] === isDrawerOpen) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp4.iconContainer) {
        let tmp14;
        if (cResult[9] === tmp11) {
          tmp14 = cResult[10];
        }
        if (cResult[11] === accessibilityLabel) {
          if (cResult[12] === handlePress) {
            if (cResult[13] === props) {
              if (cResult[14] === tmp9) {
                let tmp17;
                if (cResult[15] === tmp14) {
                  tmp17 = cResult[16];
                }
                return tmp17;
              }
            }
          }
        }
        const element = { onPress: handlePress, props, accessibilityLabel, children: items };
        items = [tmp9, tmp14];
        const tmp19 = React3(VoicePanelAnimatedButtonWrapperDefault, element);
        cResult[11] = accessibilityLabel;
        cResult[12] = handlePress;
        cResult[13] = props;
        cResult[14] = tmp9;
        cResult[15] = tmp14;
        cResult[16] = tmp19;
        tmp17 = tmp19;
      }
      const obj4 = { style: tmp4.iconContainer, children: tmp11 };
      const tmp16 = _false(NativeViewDefault, obj4);
      cResult[8] = tmp4.iconContainer;
      cResult[9] = tmp11;
      cResult[10] = tmp16;
      tmp14 = tmp16;
    }
    if (isDrawerOpen) {
      ChevronSmallUpIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
    } else {
      ChevronSmallUpIcon = ChevronSmallUpIcon2.ChevronSmallUpIcon;
    }
    const obj5 = { color };
    const tmp12Result = _false(ChevronSmallUpIcon, obj5);
    cResult[5] = color;
    cResult[6] = isDrawerOpen;
    cResult[7] = tmp12Result;
    tmp11 = tmp12Result;
  }
  const obj6 = { style: items1 };
  items1 = [tmp4.circle, tmp8];
  const tmp10 = _false(NativeViewDefault, obj6);
  cResult[2] = tmp4.circle;
  cResult[3] = tmp8;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let ChevronSmallUpIcon;
  let accessibilityLabel;
  let handlePress;
  let isDrawerOpen;
  let items;
  let items1;
  let openTab;
  let props;
  let wrapperSpecs;
  ({ props, openTab, wrapperSpecs } = arg0);
  const tmp = closure_5();
  const obj = VoicePanelStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  const color = voicePanelButtonStyles.iconFill.color;
  ({ isDrawerOpen, handlePress, accessibilityLabel } = useDrawerToggleDefault(openTab));
  const element = { onPress: handlePress, props, accessibilityLabel, children: items1 };
  useDrawerToggleDefault(openTab);
  const obj2 = { style: items };
  items = [tmp.circle, { backgroundColor }];
  items1 = [, ];
  const tmp7 = VoicePanelAnimatedButtonWrapperDefault;
  items1[0] = _false(NativeViewDefault, obj2);
  const obj3 = { style: tmp.iconContainer, children: _false(ChevronSmallUpIcon, { color }) };
  const tmp9 = NativeViewDefault;
  if (isDrawerOpen) {
    ChevronSmallUpIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = ChevronSmallUpIcon2.ChevronSmallUpIcon;
  }
  items1[1] = _false(tmp9, obj3);
  return React3(tmp7, element);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx");

export default tmp4;