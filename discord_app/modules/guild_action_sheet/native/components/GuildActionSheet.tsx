// discord_app/modules/guild_action_sheet/native/components/GuildActionSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import BottomSheetModal from "../../../../../_runtime/06112_BottomSheetModal.js";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import ActionSheetHeaderBar from "../../../../design/components/Sheet/native/ActionSheetHeaderBar.native.tsx";
import useBottomSheetRef from "../../../../design/components/Sheet/native/useBottomSheetRef.tsx";
import GuildActionSheetActions from "GuildActionSheetActions.tsx";
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader.tsx";
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems.tsx";
import GuildActionSheetProgressDefault from "GuildActionSheetProgress.tsx";
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
  actions: { paddingHorizontal: 16, gap: 24 },
};
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(36);
        ({ guild, expanded } = arg0);
        const tmp5 = closure_6();
        const bottomSheetRef1 = useBottomSheetRef.useBottomSheetRef();
        ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
        const tmpResult = useBottomSheetRef;
        let num = 0;
        if (tmpResult2.isAndroid()) {
          num = 16;
        }
        const sum = useSafeAreaInsetsDefault().bottom + num;
        if (cResult[0] !== sum) {
          const obj2 = { paddingBottom: sum };
          cResult[0] = sum;
          cResult[1] = obj2;
          let tmp9 = obj2;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] !== guild) {
          const obj3 = { guild };
          const tmp13 = React4(GuildActionSheetHeaderDefault, obj3);
          const obj4 = { guild };
          const tmp14 = React4(GuildActionSheetTabItemsDefault, obj4);
          cResult[2] = guild;
          cResult[3] = tmp13;
          cResult[4] = tmp14;
          let tmp11 = tmp14;
          let tmp10 = tmp13;
        } else {
          tmp10 = cResult[3];
          tmp11 = cResult[4];
        }
        if (cResult[5] !== guild) {
          const obj5 = { guild };
          const tmp22 = React4(GuildActionSheetActions.GuildUnreadAction, obj5);
          const obj6 = { guild };
          const tmp23 = React4(GuildActionSheetProgressDefault, obj6);
          const obj7 = { guild };
          const tmp24 = React4(GuildActionSheetActions.GuildActionSheetPrimaryActions, obj7);
          const obj8 = { guild };
          const tmp25 = React4(GuildActionSheetActions.GuildActionSheetGameOrganizationActions, obj8);
          const obj9 = { guild };
          const tmp26 = React4(GuildActionSheetActions.GuildActionSheetSecondaryActions, obj9);
          const obj10 = { guild };
          const tmp27 = React4(GuildActionSheetActions.GuildDeveloperOptionAction, obj10);
          cResult[5] = guild;
          cResult[6] = tmp26;
          cResult[7] = tmp27;
          cResult[8] = tmp22;
          cResult[9] = tmp23;
          cResult[10] = tmp24;
          cResult[11] = tmp25;
          let tmp20 = tmp25;
          let tmp19 = tmp24;
          let tmp18 = tmp23;
          let tmp17 = tmp22;
          let tmp16 = tmp27;
          let tmp15 = tmp26;
        } else {
          tmp15 = cResult[6];
          tmp16 = cResult[7];
          tmp17 = cResult[8];
          tmp18 = cResult[9];
          tmp19 = cResult[10];
          tmp20 = cResult[11];
        }
        if (cResult[12] !== guild.id) {
          const obj11 = { guildId: guild.id };
          const tmp30 = React4(GuildActionSheetEmojiSectionDefault, obj11);
          cResult[12] = guild.id;
          cResult[13] = tmp30;
          let tmp28 = tmp30;
        } else {
          tmp28 = cResult[13];
        }
        if (cResult[14] === tmp5.actions) {
          if (cResult[15] === tmp15) {
            if (cResult[16] === tmp16) {
              if (cResult[17] === tmp28) {
                if (cResult[18] === tmp17) {
                  if (cResult[19] === tmp18) {
                    if (cResult[20] === tmp19) {
                      if (cResult[21] === tmp20) {
                        let tmp31 = cResult[22];
                      }
                      if (cResult[23] !== bottomSheetClose) {
                        const obj12 = { variant: "floating", onPress: bottomSheetClose };
                        const tmp35 = React4(ActionSheetHeaderBar.ActionSheetHeaderBar, obj12);
                        cResult[23] = bottomSheetClose;
                        cResult[24] = tmp35;
                        let tmp33 = tmp35;
                      } else {
                        tmp33 = cResult[24];
                      }
                      if (cResult[25] === tmp5.container) {
                        if (cResult[26] === tmp31) {
                          if (cResult[27] === tmp33) {
                            if (cResult[28] === tmp9) {
                              if (cResult[29] === tmp10) {
                                if (cResult[30] === tmp11) {
                                  let tmp36 = cResult[31];
                                }
                                if (cResult[32] === bottomSheetRef) {
                                  if (cResult[33] === tmp4) {
                                    if (cResult[34] === tmp36) {
                                      let tmp39 = cResult[35];
                                    }
                                    return tmp39;
                                  }
                                }
                                const obj13 = {
                                  ref: bottomSheetRef,
                                  handleDisabled: true,
                                  showGradient: true,
                                  scrollable: true,
                                  startExpanded: tmp4,
                                  children: tmp36,
                                };
                                const tmp41 = React4(Sheet_BottomSheet.BottomSheet, obj13);
                                cResult[32] = bottomSheetRef;
                                cResult[33] = tmp4;
                                cResult[34] = tmp36;
                                cResult[35] = tmp41;
                                tmp39 = tmp41;
                              }
                            }
                          }
                        }
                      }
                      const obj14 = {
                        scrollsToTop: false,
                        style: tmp5.container,
                        contentContainerStyle: tmp9,
                        children: null,
                      };
                      const items = [tmp10, tmp11, tmp31, tmp33];
                      obj14.children = items;
                      const tmp38 = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj14);
                      cResult[25] = tmp5.container;
                      cResult[26] = tmp31;
                      cResult[27] = tmp33;
                      cResult[28] = tmp9;
                      cResult[29] = tmp10;
                      cResult[30] = tmp11;
                      cResult[31] = tmp38;
                      tmp36 = tmp38;
                    }
                  }
                }
              }
            }
          }
        }
        const obj15 = { style: tmp5.actions, children: null };
        const items1 = [tmp17, tmp18, tmp19, tmp20, tmp15, tmp16, tmp28];
        obj15.children = items1;
        const tmp32 = hasOwnProperty(View, obj15);
        cResult[14] = tmp5.actions;
        cResult[15] = tmp15;
        cResult[16] = tmp16;
        cResult[17] = tmp28;
        cResult[18] = tmp17;
        cResult[19] = tmp18;
        cResult[20] = tmp19;
        cResult[21] = tmp20;
        cResult[22] = tmp32;
        tmp31 = tmp32;
        tmpResult2 = PlatformUtils;
      }
    : (arg0) => {
        ({ guild, expanded } = arg0);
        if (expanded === undefined) {
          expanded = false;
        }
        const tmp = closure_6();
        const bottomSheetRef1 = useBottomSheetRef.useBottomSheetRef();
        ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
        const obj2 = {
          ref: bottomSheetRef,
          handleDisabled: true,
          showGradient: true,
          scrollable: true,
          startExpanded: expanded,
          children: null,
        };
        const obj3 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, children: null };
        let num = 0;
        if (obj4.isAndroid()) {
          num = 16;
        }
        obj3.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + num };
        const items = [
          React4(GuildActionSheetHeaderDefault, { guild }),
          React4(GuildActionSheetTabItemsDefault, { guild }),
          ,
        ];
        const obj5 = { style: tmp.actions, children: null };
        const items1 = [
          React4(GuildActionSheetActions.GuildUnreadAction, { guild }),
          React4(GuildActionSheetProgressDefault, { guild }),
          React4(GuildActionSheetActions.GuildActionSheetPrimaryActions, { guild }),
          React4(GuildActionSheetActions.GuildActionSheetGameOrganizationActions, { guild }),
          React4(GuildActionSheetActions.GuildActionSheetSecondaryActions, { guild }),
          React4(GuildActionSheetActions.GuildDeveloperOptionAction, { guild }),
          React4(GuildActionSheetEmojiSectionDefault, { guildId: guild.id }),
        ];
        obj5.children = items1;
        items[2] = hasOwnProperty(View, obj5);
        items[3] = React4(ActionSheetHeaderBar.ActionSheetHeaderBar, {
          variant: "floating",
          onPress: bottomSheetClose,
        });
        obj3.children = items;
        obj2.children = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj3);
        return React4(Sheet_BottomSheet.BottomSheet, obj2);
      },
);
