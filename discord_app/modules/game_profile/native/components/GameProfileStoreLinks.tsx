// discord_app/modules/game_profile/native/components/GameProfileStoreLinks.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import useOpenExternalUrlFromGameProfileDefault from "../../hooks/useOpenExternalUrlFromGameProfile.tsx";
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GameProfileStoreLinksActionSheetDefault = GameProfileStoreLinksActionSheet;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flexDirection: "column", gap: nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function WebsiteGameStoreLinkButton(data) {
      const cResult = c.c(9);
      data = data.data;
      const trackAction = data.trackAction;
      const tmp4Result = useOpenExternalUrlFromGameProfileDefault(LinkingDefault.openURL);
      closure_2 = tmp4Result;
      if (cResult[0] === data.action) {
        if (cResult[1] === data.url) {
          if (cResult[2] === tmp4Result) {
            if (cResult[3] === trackAction) {
              let tmp6 = cResult[4];
            }
            if (cResult[5] === data.icon) {
              if (cResult[6] === data.title) {
                if (cResult[7] === tmp6) {
                  let tmp7 = cResult[8];
                }
                return tmp7;
              }
            }
            const obj3 = { variant: "secondary", size: "md", text: null, icon: null, onPress: null };
            ({ title: obj2.text, icon: obj2.icon } = data);
            obj3.onPress = tmp6;
            const tmp9 = React4(components_Button_Button.Button, obj3);
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
  : function WebsiteGameStoreLinkButton(data) {
      data = data.data;
      const trackAction = data.trackAction;
      closure_2 = useOpenExternalUrlFromGameProfileDefault(LinkingDefault.openURL);
      return React4(components_Button_Button.Button, {
        variant: "secondary",
        size: "md",
        text: data.title,
        icon: data.icon,
        onPress() {
          trackAction(data.action);
          closure_2(data.url);
        },
      });
    };
ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "column", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinks.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileStoreLinks(websiteButtons) {
      const cResult = trackAction(name[6]).c(25);
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
              if (cResult[1] === websiteButtons[0]) {
                let tmp34 = cResult[2];
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
              if (cResult[4] === websiteButtons[0]) {
                let tmp22 = cResult[5];
              }
              if (cResult[6] === trackAction) {
                if (cResult[7] === websiteButtons[1]) {
                  let tmp26 = cResult[8];
                }
                if (cResult[9] === tmp4.container) {
                  if (cResult[10] === tmp22) {
                    if (cResult[11] === tmp26) {
                      let tmp30 = cResult[12];
                    }
                    return tmp30;
                  }
                }
                const obj3 = { style: tmp4.container, children: null };
                const items = [tmp22, tmp26];
                obj3.children = items;
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
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = trackAction(tmp2[10]).intl;
              const stringResult = intl.string(trackAction(tmp2[10]).t["/hMurx"]);
              cResult[13] = stringResult;
              let tmp6 = stringResult;
            } else {
              tmp6 = cResult[13];
            }
            if (cResult[14] === name) {
              if (cResult[15] === trackAction) {
                if (cResult[16] === websiteButtons) {
                  let container = cResult[17];
                }
                const first = websiteButtons[0];
                let action;
                if (first != null) {
                  action = first.action;
                }
                if (action !== trackAction(tmp2[13]).GameProfileTrackActionActions.XboxGamePassStoreLink) {
                  return container;
                } else {
                  if (cResult[18] === trackAction) {
                    if (cResult[19] === websiteButtons[0]) {
                      let tmp13 = cResult[20];
                    }
                    if (cResult[21] === container) {
                      if (cResult[22] === tmp4.container) {
                      }
                    }
                    const obj6 = { style: tmp4.container, children: null };
                    const items1 = [tmp13, container];
                    obj6.children = items1;
                    const tmp20 = closure_5(View, obj6);
                    cResult[21] = container;
                    container = tmp4.container;
                    cResult[22] = container;
                    cResult[23] = tmp13;
                    cResult[24] = tmp20;
                  }
                  const obj7 = { data: websiteButtons[0], trackAction };
                  const tmp16 = closure_4(closure_7, obj7);
                  cResult[18] = trackAction;
                  cResult[19] = websiteButtons[0];
                  cResult[20] = tmp16;
                  tmp13 = tmp16;
                }
              }
            }
            const obj8 = {
              variant: "secondary",
              size: "md",
              text: tmp6,
              onPress() {
                const obj2 = {
                  key: GameProfileStoreLinksActionSheet.ACTION_SHEET_KEY,
                  content: React4(GameProfileStoreLinksActionSheetDefault, {
                    gameName: name,
                    websiteButtons,
                    trackAction,
                  }),
                };
                return ActionSheetActionCreators.showActionSheet(obj2);
              },
            };
            const tmp9 = closure_4(trackAction(tmp2[9]).Button, obj8);
            cResult[14] = name;
            cResult[15] = trackAction;
            cResult[16] = websiteButtons;
            cResult[17] = tmp9;
            container = tmp9;
          }
        }
      }
      return null;
    }
  : function GameProfileStoreLinks(websiteButtons) {
      ({ game, trackAction } = websiteButtons);
      websiteButtons = websiteButtons.websiteButtons;
      const tmp = closure_6();
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
            const obj3 = { style: tmp.container, children: null };
            const obj4 = { data: websiteButtons[0], trackAction };
            const items = [closure_4(closure_7, obj4)];
            const obj5 = { data: websiteButtons[1], trackAction };
            items[1] = closure_4(closure_7, obj5);
            obj3.children = items;
            return closure_5(View, obj3);
          } else {
            const obj6 = { variant: "secondary", size: "md", text: null, onPress: null };
            const intl = trackAction(name[10]).intl;
            obj6.text = intl.string(trackAction(name[10]).t["/hMurx"]);
            obj6.onPress = function onPress() {
              const obj2 = {
                key: GameProfileStoreLinksActionSheet.ACTION_SHEET_KEY,
                content: React4(GameProfileStoreLinksActionSheetDefault, {
                  gameName: name,
                  websiteButtons,
                  trackAction,
                }),
              };
              return ActionSheetActionCreators.showActionSheet(obj2);
            };
            const tmp17 = closure_4(trackAction(name[9]).Button, obj6);
            const first = websiteButtons[0];
            let action;
            if (first != null) {
              action = first.action;
            }
            let tmp4 = tmp17;
            if (action === trackAction(name[13]).GameProfileTrackActionActions.XboxGamePassStoreLink) {
              const obj = { style: tmp.container, children: null };
              const obj7 = { data: websiteButtons[0], trackAction };
              const items1 = [closure_4(closure_7, obj7), tmp17];
              obj.children = items1;
              tmp4 = closure_5(View, obj);
            }
            return tmp4;
          }
        }
      }
      return null;
    };
