// discord_app/modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createICYMIStyles from "../createICYMIStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let contentId;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const iCYMIStyles = createICYMIStyles.createICYMIStyles((marginBottom, arg1) => {
  let num2;
  let num3;
  let num4;
  let obj2;
  let num = 0;
  if (!arg1) {
    num = marginBottom.margin;
  }
  const obj = {
    pressable: { marginTop: num },
    container: obj2,
    screenshotContainer: { marginBottom: marginBottom.margin },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: nativeDefault.space.PX_12,
      marginBottom: marginBottom.margin,
    },
    headerInfo: { flex: 1 },
    title: { display: "flex", flexDirection: "row", alignItems: "center", gap: 6, marginBottom: num4, marginTop: 2 },
    subTitleContainer: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 },
  };
  obj2 = { marginHorizontal: marginBottom.margin, paddingBottom: num2, paddingTop: num3 };
  num2 = 0;
  if (!arg1) {
    num2 = marginBottom.margin;
  }
  num3 = 0;
  if (arg1) {
    num3 = marginBottom.margin;
  }
  ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_12,
    marginBottom: marginBottom.margin,
  });
  num4 = 1;
  const obj4 = PlatformUtils;
  if (obj4.isAndroid()) {
    num4 = -1;
  }
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  return obj;
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (contentId) => {
      let children;
      let highlight;
      let items1;
      let items2;
      let items3;
      let onPress;
      let renderForScreenshot;
      let subtitle;
      let title;
      let type;
      const tmp = contentId;
      let obj = contentId(type[8]);
      const cResult = obj.c(39);
      contentId = contentId.contentId;
      const userId = contentId.userId;
      ({ children, renderForScreenshot, title, subtitle, type } = contentId);
      ({ highlight, onPress } = contentId);
      const tmp6 = iCYMIStyles(undefined !== renderForScreenshot && renderForScreenshot);
      if (cResult[0] === contentId) {
        if (cResult[1] === onPress) {
          if (cResult[2] === type) {
            let tmp7;
            let tmp9;
            let tmp11;
            if (cResult[3] === userId) {
              tmp7 = cResult[4];
            }
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [UserStore];
              cResult[5] = items;
              tmp9 = items;
            } else {
              tmp9 = cResult[5];
            }
            if (cResult[6] !== userId) {
              const fn2 = function x() {
                return UserStore.getUser(userId);
              };
              cResult[6] = userId;
              cResult[7] = fn2;
              tmp11 = fn2;
            } else {
              tmp11 = cResult[7];
            }
            const tmpResult = tmp(type[11]);
            const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11);
            if (null == stateFromStores) {
              return null;
            } else {
              if (cResult[8] === tmp6.container) {
                let tmp15;
                let tmp16;
                if (
                  cResult[9] === (undefined !== renderForScreenshot && renderForScreenshot && tmp6.screenshotContainer)
                ) {
                  tmp15 = cResult[10];
                }
                if (cResult[11] !== stateFromStores) {
                  let obj2 = {
                    animate: true,
                    size: tmp(type[12]).AvatarSizes.NORMAL,
                    user: stateFromStores,
                    guildId: "Array",
                  };
                  const Avatar = tmp(type[12]).Avatar;
                  const tmp18 = closure_6(Avatar, obj2, stateFromStores.id);
                  cResult[11] = stateFromStores;
                  cResult[12] = tmp18;
                  tmp16 = tmp18;
                } else {
                  tmp16 = cResult[12];
                }
                if (cResult[13] === tmp6.title) {
                  let tmp19;
                  if (cResult[14] === title) {
                    tmp19 = cResult[15];
                  }
                  if (cResult[16] === tmp6.subTitleContainer) {
                    let tmp23;
                    if (cResult[17] === subtitle) {
                      tmp23 = cResult[18];
                    }
                    if (cResult[19] === tmp6.headerInfo) {
                      if (cResult[20] === tmp23) {
                        let tmp27;
                        if (cResult[21] === tmp19) {
                          tmp27 = cResult[22];
                        }
                        if (cResult[23] === tmp6.header) {
                          if (cResult[24] === tmp27) {
                            let tmp31;
                            if (cResult[25] === tmp16) {
                              tmp31 = cResult[26];
                            }
                            if (cResult[27] === children) {
                              if (cResult[28] === tmp31) {
                                let tmp35;
                                if (cResult[29] === tmp15) {
                                  tmp35 = cResult[30];
                                }
                                if (cResult[31] === (undefined !== highlight && highlight)) {
                                  if (cResult[32] === (undefined !== renderForScreenshot && renderForScreenshot)) {
                                    let tmp39;
                                    if (cResult[33] === tmp35) {
                                      tmp39 = cResult[34];
                                    }
                                    if (cResult[35] === tmp7) {
                                      if (cResult[36] === tmp6.pressable) {
                                        let tmp42;
                                        if (cResult[37] === tmp39) {
                                          tmp42 = cResult[38];
                                        }
                                        return tmp42;
                                      }
                                    }
                                    let obj3 = {
                                      unstable_pressDelay: 130,
                                      onPress: tmp7,
                                      accessibilityRole: "button",
                                      style: tmp6.pressable,
                                      children: tmp39,
                                    };
                                    const tmp44 = closure_6(tmp(type[14]).PressableHighlight, obj3);
                                    cResult[35] = tmp7;
                                    cResult[36] = tmp6.pressable;
                                    cResult[37] = tmp39;
                                    cResult[38] = tmp44;
                                    tmp42 = tmp44;
                                  }
                                }
                                let obj4 = {
                                  hideDivider: undefined !== renderForScreenshot && renderForScreenshot,
                                  highlight: undefined !== highlight && highlight,
                                  children: tmp35,
                                };
                                const tmp41 = closure_6(tmp(type[13]).SimplePost, obj4);
                                cResult[31] = undefined !== highlight && highlight;
                                cResult[32] = undefined !== renderForScreenshot && renderForScreenshot;
                                cResult[33] = tmp35;
                                cResult[34] = tmp41;
                                tmp39 = tmp41;
                              }
                            }
                            let obj5 = { style: tmp15, children: items1 };
                            items1 = [tmp31, children];
                            const tmp38 = closure_7(View, obj5);
                            cResult[27] = children;
                            cResult[28] = tmp31;
                            cResult[29] = tmp15;
                            cResult[30] = tmp38;
                            tmp35 = tmp38;
                          }
                        }
                        let obj6 = { style: tmp6.header, children: items2 };
                        items2 = [tmp16, tmp27];
                        const tmp34 = closure_7(View, obj6);
                        cResult[23] = tmp6.header;
                        cResult[24] = tmp27;
                        cResult[25] = tmp16;
                        cResult[26] = tmp34;
                        tmp31 = tmp34;
                      }
                    }
                    let obj7 = { style: tmp6.headerInfo, children: items3 };
                    items3 = [tmp19, tmp23];
                    const tmp30 = closure_7(View, obj7);
                    cResult[19] = tmp6.headerInfo;
                    cResult[20] = tmp23;
                    cResult[21] = tmp19;
                    cResult[22] = tmp30;
                    tmp27 = tmp30;
                  }
                  const obj8 = { style: tmp6.subTitleContainer, children: subtitle };
                  const tmp26 = closure_6(View, obj8);
                  cResult[16] = tmp6.subTitleContainer;
                  cResult[17] = subtitle;
                  cResult[18] = tmp26;
                  tmp23 = tmp26;
                }
                const obj9 = { style: tmp6.title, children: title };
                const tmp22 = closure_6(View, obj9);
                cResult[13] = tmp6.title;
                cResult[14] = title;
                cResult[15] = tmp22;
                tmp19 = tmp22;
              }
              const items4 = [
                tmp6.container,
                undefined !== renderForScreenshot && renderForScreenshot && tmp6.screenshotContainer,
              ];
              cResult[8] = tmp6.container;
              cResult[9] = undefined !== renderForScreenshot && renderForScreenshot && tmp6.screenshotContainer;
              cResult[10] = items4;
              tmp15 = items4;
            }
          }
        }
      }
      const fn = function o() {
        if (null != onPress) {
          const obj = ICYMIActionCreatorsDefault;
          obj.itemInteracted(contentId, type, "press");
          const obj3 = {
            itemId: contentId,
            itemType: type,
            actionParameters: {
              actionGestureType: "press",
              actionTargetElement: "item_container",
              actionIntentType: "open",
              actionDestinationType: null,
            },
          };
          const obj2 = ICYMIActionCreatorsDefault;
          obj2.feedItemActioned(obj3);
          tmp();
        } else {
          const obj4 = ICYMIActionCreatorsDefault;
          obj4.itemInteracted(contentId, type, "open_profile");
          const obj6 = {
            itemId: contentId,
            itemType: type,
            actionParameters: {
              actionGestureType: "press",
              actionTargetElement: "item_container",
              actionIntentType: "open",
              actionDestinationType: "user",
            },
          };
          const obj5 = ICYMIActionCreatorsDefault;
          obj5.feedItemActioned(obj6);
          const obj7 = { userId };
          showUserProfileActionSheetDefault(obj7);
        }
      };
      cResult[0] = contentId;
      cResult[1] = onPress;
      cResult[2] = type;
      cResult[3] = userId;
      cResult[4] = fn;
      tmp7 = fn;
    }
  : (contentId) => {
      let SimplePost;
      let highlight;
      let items3;
      let items4;
      let items5;
      let obj3;
      let obj4;
      let subtitle;
      let title;
      contentId = contentId.contentId;
      const userId = contentId.userId;
      let flag = contentId.renderForScreenshot;
      const children = contentId.children;
      if (flag === undefined) {
        flag = false;
      }
      const type = contentId.type;
      ({ highlight, title, subtitle } = contentId);
      if (highlight === undefined) {
        highlight = false;
      }
      const onPress = contentId.onPress;
      const tmp = iCYMIStyles(flag);
      const items = [contentId, type, userId, onPress];
      const callback = onPress.useCallback(() => {
        if (null != onPress) {
          const obj = ICYMIActionCreatorsDefault;
          obj.itemInteracted(contentId, type, "press");
          const obj3 = {
            itemId: contentId,
            itemType: type,
            actionParameters: {
              actionGestureType: "press",
              actionTargetElement: "item_container",
              actionIntentType: "open",
              actionDestinationType: null,
            },
          };
          const obj2 = ICYMIActionCreatorsDefault;
          obj2.feedItemActioned(obj3);
          tmp();
        } else {
          const obj4 = ICYMIActionCreatorsDefault;
          obj4.itemInteracted(contentId, type, "open_profile");
          const obj6 = {
            itemId: contentId,
            itemType: type,
            actionParameters: {
              actionGestureType: "press",
              actionTargetElement: "item_container",
              actionIntentType: "open",
              actionDestinationType: "user",
            },
          };
          const obj5 = ICYMIActionCreatorsDefault;
          obj5.feedItemActioned(obj6);
          const obj7 = { userId };
          showUserProfileActionSheetDefault(obj7);
        }
      }, items);
      let obj = contentId(type[11]);
      const items1 = [UserStore];
      const stateFromStores = obj.useStateFromStores(items1, () => UserStore.getUser(userId));
      let tmp7Result = null;
      if (null != stateFromStores) {
        let obj2 = {
          unstable_pressDelay: 130,
          onPress: callback,
          accessibilityRole: "button",
          style: tmp.pressable,
          children: closure_6(SimplePost, obj3),
        };
        const PressableHighlight = tmp3(tmp4[14]).PressableHighlight;
        obj3 = { hideDivider: flag, highlight, children: closure_7(View, obj4) };
        const items2 = [tmp.container];
        let screenshotContainer = flag;
        SimplePost = tmp3(tmp4[13]).SimplePost;
        if (flag) {
          screenshotContainer = tmp.screenshotContainer;
        }
        obj4 = { style: items2, children: items5 };
        items2[1] = screenshotContainer;
        let obj5 = { style: tmp.header, children: items3 };
        let obj6 = {
          animate: true,
          size: contentId(type[12]).AvatarSizes.NORMAL,
          user: stateFromStores,
          guildId: "Array",
        };
        const Avatar = tmp3(tmp4[12]).Avatar;
        items3 = [closure_6(Avatar, obj6, stateFromStores.id)];
        let obj7 = { style: tmp.headerInfo, children: items4 };
        const obj8 = { style: tmp.title, children: title };
        items4 = [closure_6(View, obj8)];
        const obj9 = { style: tmp.subTitleContainer, children: subtitle };
        items4[1] = closure_6(View, obj9);
        items3[1] = closure_7(View, obj7);
        items5 = [closure_7(View, obj5), children];
        tmp7Result = closure_6(PressableHighlight, obj2);
      }
      return tmp7Result;
    };
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx");

export default tmp4;
export const useStyles = iCYMIStyles;
