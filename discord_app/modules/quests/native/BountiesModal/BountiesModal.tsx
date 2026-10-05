// discord_app/modules/quests/native/BountiesModal/BountiesModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import BountiesModalTypes from "BountiesModalTypes.tsx";
import BountiesModalContentScrollDefault from "BountiesModalContentScroll.tsx";
import BountiesModalContentDefault from "BountiesModalContent.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let bountyId;

const jsx = Fragment.jsx;
const bounty_main = "bounty_main";
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (bountyId) => {
        let first;
        let obj4;
        let variant;
        let obj = bountyId(variant[3]);
        const cResult = obj.c(11);
        const tmp = bountyId;
        bountyId = bountyId.bountyId;
        const sourceQuestContent = bountyId.sourceQuestContent;
        const tmp2 = variant;
        variant = bountyId.variant;
        const bounty = bountyId.bounty;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function s() {
            return null;
          };
          cResult[0] = fn;
          first = fn;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === bounty) {
          if (cResult[2] === bountyId) {
            if (cResult[3] === sourceQuestContent) {
              let tmp5;
              let tmp7;
              let tmp12;
              if (cResult[4] === variant) {
                tmp5 = cResult[5];
              }
              const _Symbol = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                class C {
                  constructor() {
                    const obj = bountyId(variant[7]);
                    obj.applyOrientationLock("PORTRAIT");
                    return bountyId(variant[7]).restoreDefaultOrientationLock;
                  }
                }
                const items = [];
                cResult[6] = C;
                cResult[7] = items;
                tmp7 = items;
              } else {
                class C {
                  constructor() {
                    const obj = bountyId(variant[7]);
                    obj.applyOrientationLock("PORTRAIT");
                    return bountyId(variant[7]).restoreDefaultOrientationLock;
                  }
                }
                tmp7 = cResult[7];
              }
              const layoutEffect = bounty.useLayoutEffect(C, tmp7);
              const _Symbol2 = Symbol;
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                class C {
                  constructor() {
                    const obj = bountyId(variant[7]);
                    obj.applyOrientationLock("PORTRAIT");
                    return bountyId(variant[7]).restoreDefaultOrientationLock;
                  }
                }
                cResult[8] = tmp11;
              } else {
                class C {
                  constructor() {
                    const obj = bountyId(variant[7]);
                    obj.applyOrientationLock("PORTRAIT");
                    return bountyId(variant[7]).restoreDefaultOrientationLock;
                  }
                }
              }
              if (cResult[9] !== tmp5) {
                class C {
                  constructor() {
                    const obj = bountyId(variant[7]);
                    obj.applyOrientationLock("PORTRAIT");
                    return bountyId(variant[7]).restoreDefaultOrientationLock;
                  }
                }
                const tmp14 = jsx(tmp(tmp2[8]).Modal, {
                  hideTitle: true,
                  initialRouteName: bounty_main,
                  screens: tmp5,
                  viewStyle: tmp11,
                });
                cResult[9] = tmp5;
                cResult[10] = tmp14;
                tmp12 = tmp14;
              } else {
                class C {
                  constructor() {
                    const obj = bountyId(variant[7]);
                    obj.applyOrientationLock("PORTRAIT");
                    return bountyId(variant[7]).restoreDefaultOrientationLock;
                  }
                }
              }
              return tmp12;
            }
          }
        }
        const obj3 = { [closure_5]: obj4 };
        obj4 = {
          fullscreen: true,
          headerLeft: first,
          render() {
            let tmp7;
            if (variant === BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL) {
              tmp7 = jsx(BountiesModalContentScrollDefault, { bountyId, sourceQuestContent });
            } else {
              tmp7 = jsx(BountiesModalContentDefault, { bountyId, sourceQuestContent, bounty });
            }
            return tmp7;
          },
        };
        cResult[1] = bounty;
        cResult[2] = bountyId;
        cResult[3] = sourceQuestContent;
        cResult[4] = variant;
        cResult[5] = obj3;
        tmp5 = obj3;
      }
    : (bountyId) => {
        bountyId = bountyId.bountyId;
        const sourceQuestContent = bountyId.sourceQuestContent;
        const variant = bountyId.variant;
        const bounty = bountyId.bounty;
        const items = [bounty, bountyId, sourceQuestContent, variant];
        const memo = bounty.useMemo(
          () => ({
            [closure_2_5]: {
              fullscreen: true,
              headerLeft() {
                return null;
              },
              render() {
                let tmp7;
                if (closure_1_2 === bountyId(variant[4]).BountiesModalVariant.VERTICAL_SCROLL) {
                  tmp7 = jsx(sourceQuestContent(variant[5]), { bountyId, sourceQuestContent });
                } else {
                  tmp7 = jsx(sourceQuestContent(variant[6]), { bountyId, sourceQuestContent, bounty });
                }
                return tmp7;
              },
            },
          }),
          items,
        );
        const layoutEffect = bounty.useLayoutEffect(() => {
          const obj = bountyId(variant[7]);
          obj.applyOrientationLock("PORTRAIT");
          return bountyId(variant[7]).restoreDefaultOrientationLock;
        }, []);
        return jsx(bountyId(variant[8]).Modal, {
          hideTitle: true,
          initialRouteName: bounty_main,
          screens: memo,
          viewStyle: { backgroundColor: "#000000" },
        });
      },
);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModal.tsx");

export default memoResult;
