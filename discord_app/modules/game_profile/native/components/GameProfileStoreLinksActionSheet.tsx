// discord_app/modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import BottomSheetModal from "../../../../../_runtime/06298_BottomSheetModal.js";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import useOpenExternalUrlFromGameProfileDefault from "../../hooks/useOpenExternalUrlFromGameProfile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  header: {
    gap: nativeDefault.space.PX_8,
    paddingTop: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_24,
  },
  headerText: { textAlign: "center" },
  buttons: null,
};
let obj3 = {
  gap: nativeDefault.space.PX_8,
  paddingTop: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_24,
};
obj2.buttons = { gap: nativeDefault.space.PX_12 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { gap: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileStoreLinksActionSheet(arg0) {
      const cResult = trackAction(576).c(28);
      ({ gameName, websiteButtons, trackAction } = arg0);
      const tmp4 = closure_6();
      const obj = trackAction(576);
      const tmp5Result = useOpenExternalUrlFromGameProfileDefault(LinkingDefault.openURL);
      importDefault = tmp5Result;
      const sum = useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16;
      if (cResult[0] !== sum) {
        const obj2 = { paddingBottom: sum };
        cResult[0] = sum;
        cResult[1] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[1];
      }
      ({ header, headerText } = tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = trackAction(1126).intl;
        const stringResult = intl.string(trackAction(1126).t["/4gj6r"]);
        cResult[2] = stringResult;
        let tmp9 = stringResult;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== tmp4.headerText) {
        const obj3 = {
          variant: "heading-lg/semibold",
          color: "mobile-text-heading-primary",
          style: headerText,
          children: tmp9,
        };
        const tmp13 = closure_4(trackAction(5086).Text, obj3);
        cResult[3] = tmp4.headerText;
        cResult[4] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== gameName) {
        const intl2 = trackAction(1126).intl;
        const obj4 = { gameName };
        const formatResult = intl2.format(trackAction(1126).t["0acM2Y"], obj4);
        cResult[5] = gameName;
        cResult[6] = formatResult;
        let tmp14 = formatResult;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === tmp4.headerText) {
        if (cResult[8] === tmp14) {
          let tmp16 = cResult[9];
        }
        if (cResult[10] === tmp4.header) {
          if (cResult[11] === tmp11) {
            if (cResult[12] === tmp16) {
              let tmp18 = cResult[13];
            }
            if (cResult[14] === tmp5Result) {
              if (cResult[15] === trackAction) {
                if (cResult[16] === websiteButtons) {
                  if (cResult[21] === tmp4.buttons) {
                    if (cResult[22] === tmp23) {
                      let tmp27 = cResult[23];
                    }
                    if (cResult[24] === tmp18) {
                      if (cResult[25] === tmp27) {
                        if (cResult[26] === tmp8) {
                          let tmp31 = cResult[27];
                        }
                        return tmp31;
                      }
                    }
                    const obj5 = { children: null };
                    const obj6 = { contentContainerStyle: tmp8, children: null };
                    const items = [tmp18, tmp27];
                    obj6.children = items;
                    obj5.children = closure_5(trackAction(6298).BottomSheetScrollView, obj6);
                    const tmp34 = closure_4(trackAction(6885).ActionSheet, obj5);
                    cResult[24] = tmp18;
                    cResult[25] = tmp27;
                    cResult[26] = tmp8;
                    cResult[27] = tmp34;
                    tmp31 = tmp34;
                  }
                  const obj7 = { style: tmp22, children: cResult[17] };
                  const tmp30 = closure_4(View, obj7);
                  cResult[21] = tmp4.buttons;
                  cResult[22] = cResult[17];
                  cResult[23] = tmp30;
                  tmp27 = tmp30;
                }
              }
            }
            if (cResult[18] === tmp5Result) {
              if (cResult[19] === trackAction) {
                let tmp24 = cResult[20];
              }
              const mapped = websiteButtons.map(tmp24);
              cResult[14] = tmp5Result;
              cResult[15] = trackAction;
              cResult[16] = websiteButtons;
              cResult[17] = mapped;
            }
            const fn = function j(url) {
              url = url.url;
              const action = url.action;
              ({ icon, title } = url);
              return closure_1_4(
                trackAction(dependencyMap[12]).Button,
                {
                  icon,
                  text: title,
                  variant: "secondary",
                  size: "md",
                  onPress() {
                    ActionSheetActionCreatorsDefault.hideActionSheet();
                    trackAction(action);
                    action(url);
                  },
                },
                url,
              );
            };
            cResult[18] = tmp5Result;
            cResult[19] = trackAction;
            cResult[20] = fn;
            tmp24 = fn;
          }
        }
        const obj8 = { style: header, children: null };
        const items1 = [tmp11, tmp16];
        obj8.children = items1;
        const tmp21 = closure_5(View, obj8);
        cResult[10] = tmp4.header;
        cResult[11] = tmp11;
        cResult[12] = tmp16;
        cResult[13] = tmp21;
        tmp18 = tmp21;
      }
      const tmp17 = closure_4(trackAction(5086).Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        style: tmp4.headerText,
        children: tmp14,
      });
      cResult[7] = tmp4.headerText;
      cResult[8] = tmp14;
      cResult[9] = tmp17;
      tmp16 = tmp17;
    }
  : function GameProfileStoreLinksActionSheet(gameName) {
      ({ websiteButtons, trackAction: require } = gameName);
      const tmp = closure_6();
      importDefault = useOpenExternalUrlFromGameProfileDefault(LinkingDefault.openURL);
      const obj = { children: null };
      const obj2 = { contentContainerStyle: null, children: null };
      obj2.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
      const obj4 = { style: tmp.header, children: null };
      const obj5 = {
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        style: tmp.headerText,
        children: null,
      };
      const intl = util.intl;
      obj5.children = intl.string(util.t["/4gj6r"]);
      const items = [closure_4(Text_Text.Text, obj5)];
      const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp.headerText, children: null };
      const intl2 = util.intl;
      obj6.children = intl2.format(util.t["0acM2Y"], { gameName: gameName.gameName });
      items[1] = closure_4(Text_Text.Text, obj6);
      obj4.children = items;
      const items1 = [closure_5(View, obj4)];
      const obj3 = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
      items1[1] = closure_4(View, {
        style: tmp.buttons,
        children: websiteButtons.map((url) => {
          url = url.url;
          const action = url.action;
          ({ icon, title } = url);
          return closure_1_4(
            components_Button_Button.Button,
            {
              icon,
              text: title,
              variant: "secondary",
              size: "md",
              onPress() {
                ActionSheetActionCreatorsDefault.hideActionSheet();
                require(action);
                action(url);
              },
            },
            url,
          );
        }),
      });
      obj2.children = items1;
      obj.children = closure_5(BottomSheetModal.BottomSheetScrollView, obj2);
      return closure_4(ActionSheet.ActionSheet, obj);
    };
export const ACTION_SHEET_KEY = "game-profile-store-links";
