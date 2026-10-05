// discord_app/modules/game_profile/native/components/GameProfileStoreLinks.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import useOpenExternalUrlFromGameProfileDefault from "../../hooks/useOpenExternalUrlFromGameProfile.tsx";
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GameProfileStoreLinksActionSheetDefault = GameProfileStoreLinksActionSheet;
let data, websiteButtons;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { flexDirection: "column", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (data) => {
      const obj = react2;
      const cResult = obj.c(9);
      data = data.data;
      const trackAction = data.trackAction;
      const tmp4 = useOpenExternalUrlFromGameProfileDefault;
      const tmp4Result = tmp4(LinkingDefault.openURL);
      let closure_2 = tmp4Result;
      if (cResult[0] === data.action) {
        if (cResult[1] === data.url) {
          if (cResult[2] === tmp4Result) {
            let tmp6;
            if (cResult[3] === trackAction) {
              tmp6 = cResult[4];
            }
            if (cResult[5] === data.icon) {
              if (cResult[6] === data.title) {
                let tmp7;
                if (cResult[7] === tmp6) {
                  tmp7 = cResult[8];
                }
                return tmp7;
              }
            }
            const obj3 = { variant: "secondary", size: "md", text: null, icon: null, onPress: tmp6 };
            ({ title: obj2.text, icon: obj2.icon } = data);
            const tmp9 = React3(components_Button_Button.Button, obj3);
            cResult[5] = data.icon;
            cResult[6] = data.title;
            cResult[7] = tmp6;
            cResult[8] = tmp9;
            tmp7 = tmp9;
          }
        }
      }
      const fn = function n() {
        trackAction(data.action);
        closure_2(data.url);
      };
      cResult[0] = data.action;
      cResult[1] = data.url;
      cResult[2] = tmp4Result;
      cResult[3] = trackAction;
      cResult[4] = fn;
      tmp6 = fn;
    }
  : (data) => {
      data = data.data;
      const trackAction = data.trackAction;
      const tmp = useOpenExternalUrlFromGameProfileDefault;
      let closure_2 = tmp(LinkingDefault.openURL);
      const obj = {
        variant: "secondary",
        size: "md",
        text: data.title,
        icon: data.icon,
        onPress() {
          trackAction(data.action);
          closure_2(data.url);
        },
      };
      return React3(components_Button_Button.Button, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (websiteButtons) => {
      let game;
      let items;
      let items1;
      let name;
      let trackAction;
      let obj = trackAction(name[6]);
      const cResult = obj.c(25);
      ({ game, trackAction } = websiteButtons);
      websiteButtons = websiteButtons.websiteButtons;
      const tmp4 = closure_6();
      name = undefined;
      if (game != null) {
        name = game.name;
      }
      if (0 !== websiteButtons.length) {
        if (null != name) {
          if (1 === websiteButtons.length) {
            if (cResult[0] === trackAction) {
              let tmp34;
              if (cResult[1] === websiteButtons[0]) {
                tmp34 = cResult[2];
              }
              return tmp34;
            }
            let obj2 = { data: websiteButtons[0], trackAction };
            const tmp37 = closure_4(closure_7, obj2);
            cResult[0] = trackAction;
            cResult[1] = websiteButtons[0];
            cResult[2] = tmp37;
            tmp34 = tmp37;
          } else if (2 === websiteButtons.length) {
            if (cResult[3] === trackAction) {
              let tmp22;
              if (cResult[4] === websiteButtons[0]) {
                tmp22 = cResult[5];
              }
              if (cResult[6] === trackAction) {
                let tmp26;
                if (cResult[7] === websiteButtons[1]) {
                  tmp26 = cResult[8];
                }
                if (cResult[9] === tmp4.container) {
                  if (cResult[10] === tmp22) {
                    let tmp30;
                    if (cResult[11] === tmp26) {
                      tmp30 = cResult[12];
                    }
                    return tmp30;
                  }
                }
                const obj3 = { style: tmp4.container, children: items };
                items = [tmp22, tmp26];
                const tmp33 = closure_5(View, obj3);
                cResult[9] = tmp4.container;
                cResult[10] = tmp22;
                cResult[11] = tmp26;
                cResult[12] = tmp33;
                tmp30 = tmp33;
              }
              const obj4 = { data: websiteButtons[1], trackAction };
              const tmp29 = closure_4(closure_7, obj4);
              cResult[6] = trackAction;
              cResult[7] = websiteButtons[1];
              cResult[8] = tmp29;
              tmp26 = tmp29;
            }
            const obj5 = { data: websiteButtons[0], trackAction };
            const tmp25 = closure_4(closure_7, obj5);
            cResult[3] = trackAction;
            cResult[4] = websiteButtons[0];
            cResult[5] = tmp25;
            tmp22 = tmp25;
          } else {
            let tmp6;
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = trackAction(tmp2[10]).intl;
              const stringResult = intl.string(trackAction(name[10]).t["/hMurx"]);
              cResult[13] = stringResult;
              tmp6 = stringResult;
            } else {
              tmp6 = cResult[13];
            }
            if (cResult[14] === name) {
              if (cResult[15] === trackAction) {
                let tmp8;
                if (cResult[16] === websiteButtons) {
                  tmp8 = cResult[17];
                }
                const first = websiteButtons[0];
                let action;
                if (first != null) {
                  action = first.action;
                }
                let tmp13 = tmp8;
                if (action === trackAction(name[13]).GameProfileTrackActionActions.XboxGamePassStoreLink) {
                  if (cResult[18] === trackAction) {
                    let tmp14;
                    if (cResult[19] === websiteButtons[0]) {
                      tmp14 = cResult[20];
                    }
                    if (cResult[21] === tmp8) {
                      if (cResult[22] === tmp4.container) {
                        let tmp18;
                        if (cResult[23] === tmp14) {
                          tmp18 = cResult[24];
                        }
                        tmp13 = tmp18;
                      }
                    }
                    const obj6 = { style: tmp4.container, children: items1 };
                    items1 = [tmp14, tmp8];
                    const tmp21 = closure_5(View, obj6);
                    cResult[21] = tmp8;
                    cResult[22] = tmp4.container;
                    cResult[23] = tmp14;
                    cResult[24] = tmp21;
                    tmp18 = tmp21;
                  }
                  const obj7 = { data: websiteButtons[0], trackAction };
                  const tmp17 = closure_4(closure_7, obj7);
                  cResult[18] = trackAction;
                  cResult[19] = websiteButtons[0];
                  cResult[20] = tmp17;
                  tmp14 = tmp17;
                }
                return tmp13;
              }
            }
            const obj8 = {
              variant: "secondary",
              size: "md",
              text: tmp6,
              onPress() {
                let obj2;
                const tmp = ActionSheetActionCreators;
                const showActionSheet = tmp.showActionSheet;
                const obj = {
                  key: GameProfileStoreLinksActionSheet.ACTION_SHEET_KEY,
                  content: React3(GameProfileStoreLinksActionSheetDefault, obj2),
                };
                obj2 = { gameName: name, websiteButtons, trackAction };
                return showActionSheet(obj);
              },
            };
            const tmp10 = closure_4(trackAction(name[9]).Button, obj8);
            cResult[14] = name;
            cResult[15] = trackAction;
            cResult[16] = websiteButtons;
            cResult[17] = tmp10;
            tmp8 = tmp10;
          }
        }
      }
      return null;
    }
  : (websiteButtons) => {
      let game;
      let intl;
      let items;
      let items1;
      let trackAction;
      ({ game, trackAction } = websiteButtons);
      websiteButtons = websiteButtons.websiteButtons;
      let tmp = closure_6();
      let name;
      if (game != null) {
        name = game.name;
      }
      if (0 !== websiteButtons.length) {
        if (null != name) {
          if (1 === websiteButtons.length) {
            let obj2 = { data: websiteButtons[0], trackAction };
            return closure_4(closure_7, obj2);
          } else if (2 === websiteButtons.length) {
            const obj3 = { style: tmp.container, children: items };
            const obj4 = { data: websiteButtons[0], trackAction };
            items = [closure_4(closure_7, obj4)];
            const obj5 = { data: websiteButtons[1], trackAction };
            items[1] = closure_4(closure_7, obj5);
            return closure_5(View, obj3);
          } else {
            const obj6 = {
              variant: "secondary",
              size: "md",
              text: intl.string(trackAction(name[10]).t["/hMurx"]),
              onPress() {
                let obj2;
                const tmp = ActionSheetActionCreators;
                const showActionSheet = tmp.showActionSheet;
                const obj = {
                  key: GameProfileStoreLinksActionSheet.ACTION_SHEET_KEY,
                  content: React3(GameProfileStoreLinksActionSheetDefault, obj2),
                };
                obj2 = { gameName: name, websiteButtons, trackAction };
                return showActionSheet(obj);
              },
            };
            const Button = trackAction(name[9]).Button;
            intl = trackAction(name[10]).intl;
            const tmp17 = closure_4(Button, obj6);
            const first = websiteButtons[0];
            let action;
            const tmp16 = name;
            if (first != null) {
              action = first.action;
            }
            let tmp4 = tmp17;
            if (action === trackAction(tmp16[13]).GameProfileTrackActionActions.XboxGamePassStoreLink) {
              let obj = { style: tmp.container, children: items1 };
              const obj7 = { data: websiteButtons[0], trackAction };
              items1 = [closure_4(closure_7, obj7), tmp17];
              tmp4 = closure_5(View, obj);
            }
            return tmp4;
          }
        }
      }
      return null;
    };
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinks.tsx");

export default tmp4;
