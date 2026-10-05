// === Module 8354: GameProfileStoreLinksActionSheet ===

// Module 8354 (GameProfileStoreLinksActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import LinkingDefault from "Linking" /* 4565 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import BottomSheetModal from "BottomSheetModal" /* 6112 */;
import ActionSheet2 from "ActionSheet" /* 6701 */;
import useOpenExternalUrlFromGameProfileDefault from "useOpenExternalUrlFromGameProfile" /* 8328 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerText: { textAlign: "center" }, buttons: obj3 };
obj2 = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12 };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_1;
  let gameName;
  let header;
  let headerText;
  let items;
  let items1;
  let obj6;
  let tmp11;
  let tmp14;
  let tmp8;
  let tmp9;
  let trackAction;
  let websiteButtons;
  let obj = trackAction(576);
  const cResult = obj.c(28);
  ({ gameName, websiteButtons, trackAction } = arg0);
  const tmp4 = closure_6();
  const tmp5 = useOpenExternalUrlFromGameProfileDefault;
  const tmp5Result = tmp5(LinkingDefault.openURL);
  importDefault = tmp5Result;
  const sum = useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16;
  if (cResult[0] !== sum) {
    const obj2 = { paddingBottom: sum };
    cResult[0] = sum;
    cResult[1] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[1];
  }
  ({ header, headerText } = tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = trackAction(1126).intl;
    const stringResult = intl.string(trackAction(1126).t["/4gj6r"]);
    cResult[2] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp4.headerText) {
    const obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: headerText, children: tmp9 };
    const tmp13 = closure_4(trackAction(4886).Text, obj3);
    cResult[3] = tmp4.headerText;
    cResult[4] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  const headerText2 = tmp4.headerText;
  if (cResult[5] !== gameName) {
    const intl2 = trackAction(1126).intl;
    const obj4 = { gameName };
    const formatResult = intl2.format(trackAction(1126).t["0acM2Y"], obj4);
    cResult[5] = gameName;
    cResult[6] = formatResult;
    tmp14 = formatResult;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === tmp4.headerText) {
    let tmp16;
    if (cResult[8] === tmp14) {
      tmp16 = cResult[9];
    }
    if (cResult[10] === tmp4.header) {
      if (cResult[11] === tmp11) {
        let tmp18;
        let tmp23;
        if (cResult[12] === tmp16) {
          tmp18 = cResult[13];
        }
        if (cResult[14] === tmp5Result) {
          if (cResult[15] === trackAction) {
            if (cResult[16] === websiteButtons) {
              tmp23 = cResult[17];
            }
            if (cResult[21] === tmp4.buttons) {
              let tmp26;
              if (cResult[22] === tmp23) {
                tmp26 = cResult[23];
              }
              if (cResult[24] === tmp18) {
                if (cResult[25] === tmp26) {
                  let tmp30;
                  if (cResult[26] === tmp8) {
                    tmp30 = cResult[27];
                  }
                  return tmp30;
                }
              }
              const obj5 = { children: closure_5(trackAction(6112).BottomSheetScrollView, obj6) };
              const ActionSheet = trackAction(6701).ActionSheet;
              obj6 = { contentContainerStyle: tmp8, children: items };
              items = [tmp18, tmp26];
              const tmp33 = closure_4(ActionSheet, obj5);
              cResult[24] = tmp18;
              cResult[25] = tmp26;
              cResult[26] = tmp8;
              cResult[27] = tmp33;
              tmp30 = tmp33;
            }
            const obj7 = { style: tmp22, children: tmp23 };
            const tmp29 = closure_4(View, obj7);
            cResult[21] = tmp4.buttons;
            cResult[22] = tmp23;
            cResult[23] = tmp29;
            tmp26 = tmp29;
          }
        }
        if (cResult[18] === tmp5Result) {
          let tmp24;
          if (cResult[19] === trackAction) {
            tmp24 = cResult[20];
          }
          const mapped = websiteButtons.map(tmp24);
          cResult[14] = tmp5Result;
          cResult[15] = trackAction;
          cResult[16] = websiteButtons;
          cResult[17] = mapped;
          tmp23 = mapped;
        }
        const fn = function w(url) {
          let icon;
          let title;
          url = url.url;
          const action = url.action;
          ({ icon, title } = url);
          let obj = {
            icon,
            text: title,
            variant: "secondary",
            size: "md",
            onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              trackAction(action);
              action(url);
            }
          };
          return closure_1_4(trackAction(dependencyMap[12]).Button, obj, url);
        };
        cResult[18] = tmp5Result;
        cResult[19] = trackAction;
        cResult[20] = fn;
        tmp24 = fn;
      }
    }
    const obj8 = { style: header, children: items1 };
    items1 = [tmp11, tmp16];
    const tmp21 = closure_5(View, obj8);
    cResult[10] = tmp4.header;
    cResult[11] = tmp11;
    cResult[12] = tmp16;
    cResult[13] = tmp21;
    tmp18 = tmp21;
  }
  const tmp17 = closure_4(trackAction(4886).Text, { variant: "text-md/medium", color: "text-subtle", style: headerText2, children: tmp14 });
  cResult[7] = tmp4.headerText;
  cResult[8] = tmp14;
  cResult[9] = tmp17;
  tmp16 = tmp17;
}) : ((gameName) => {
  let BottomSheetScrollView;
  let closure_1;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj2;
  let obj3;
  let websiteButtons;
  ({ websiteButtons, trackAction: require } = gameName);
  gameName = gameName.gameName;
  const tmp = closure_6();
  const tmp2 = useOpenExternalUrlFromGameProfileDefault;
  importDefault = tmp2(LinkingDefault.openURL);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = { children: closure_5(BottomSheetScrollView, obj2) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { contentContainerStyle: obj3, children: items1 };
  obj3 = { paddingBottom: bottom + nativeDefault.space.PX_16 };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  const obj4 = { style: tmp.header, children: items };
  const obj5 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(intl3.t["/4gj6r"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [closure_4(Text, obj5), ];
  const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp.headerText, children: intl2.format(intl3.t["0acM2Y"], { gameName }) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items[1] = closure_4(Text2, obj6);
  items1 = [closure_5(View, obj4), ];
  const obj7 = {
    style: tmp.buttons,
    children: websiteButtons.map((url) => {
      let icon;
      let title;
      url = url.url;
      const action = url.action;
      ({ icon, title } = url);
      let obj = {
        icon,
        text: title,
        variant: "secondary",
        size: "md",
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          require(action);
          action(url);
        }
      };
      return closure_1_4(components_Button_Button.Button, obj, url);
    })
  };
  items1[1] = closure_4(View, obj7);
  return closure_4(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx");

export default tmp5;
export const ACTION_SHEET_KEY = "game-profile-store-links";