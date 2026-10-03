// discord_app/modules/instant_invite/native/components/InstantInviteAgeText.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import instant_invite_InstantInviteUtils from "../InstantInviteUtils.tsx";
import InstantInviteUtils from "../../../../utils/InstantInviteUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: closure_4, jsx: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({
  inviteAgeContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteAgeText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (callbackActionSheet) => {
      const cResult = channel(callbackActionSheet[6]).c(22);
      ({ style, channel } = callbackActionSheet);
      callbackActionSheet = callbackActionSheet.callbackActionSheet;
      ({ canEditInvite, onEdit } = callbackActionSheet);
      const source = callbackActionSheet.source;
      const tmp5 = closure_6();
      const obj = channel(callbackActionSheet[6]);
      const manaTypeConsolidationExperiment = channel(callbackActionSheet[7]).useManaTypeConsolidationExperiment(
        "InstantInviteAgeText",
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [source];
        const fn = function v() {
          return source.getInviteSettings();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult = channel(callbackActionSheet[7]);
      const stateFromStores = channel(callbackActionSheet[8]).useStateFromStores(tmp7, tmp8);
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[2] === style) {
          if (cResult[3] === tmp5.inviteAgeContainer) {
            let tmp11 = cResult[4];
          }
          let str = "text-xs/normal";
          let str2 = "text-xs/normal";
          if (manaTypeConsolidationExperiment) {
            str2 = "experimental/body-md/normal";
          }
          if (cResult[5] === stateFromStores.maxAge) {
            if (cResult[6] === stateFromStores.maxUses) {
              let tmp12 = cResult[7];
            }
            if (cResult[8] === str2) {
              if (cResult[9] === tmp12) {
                let tmp14 = cResult[10];
              }
              if (cResult[11] === callbackActionSheet) {
                if (cResult[12] === tmp4) {
                  if (cResult[13] === channel) {
                    if (cResult[14] === manaTypeConsolidationExperiment) {
                      if (cResult[15] === onEdit) {
                        if (cResult[16] === source) {
                          let tmp17 = cResult[17];
                        }
                        if (cResult[18] === tmp11) {
                          if (cResult[19] === tmp14) {
                            if (cResult[20] === tmp17) {
                              let tmp20 = cResult[21];
                            }
                            return tmp20;
                          }
                        }
                        const obj2 = { style: tmp11, children: null };
                        const items1 = [tmp14, tmp17];
                        obj2.children = items1;
                        const tmp23 = closure_4(onEdit, obj2);
                        cResult[18] = tmp11;
                        cResult[19] = tmp14;
                        cResult[20] = tmp17;
                        cResult[21] = tmp23;
                        tmp20 = tmp23;
                      }
                    }
                  }
                }
              }
              let tmp19Result = tmp4;
              if (tmp4) {
                const obj3 = {
                  onPress() {
                    instant_invite_InstantInviteUtils.handlePressSettings(channel, callbackActionSheet, source);
                    if (onEdit != null) {
                      onEdit();
                    }
                  },
                  accessibilityRole: "link",
                  accessibilityLabel: null,
                  hitSlop: null,
                  children: null,
                };
                const intl = channel(tmp2[13]).intl;
                obj3.accessibilityLabel = intl.string(channel(tmp2[13]).t["VNe8P/"]);
                obj3.hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };
                if (manaTypeConsolidationExperiment) {
                  str = "experimental/body-md/medium";
                }
                const obj4 = { variant: str, color: "text-link", children: null };
                const intl2 = channel(tmp2[13]).intl;
                obj4.children = intl2.string(channel(tmp2[13]).t["VNe8P/"]);
                obj3.children = closure_5(channel(tmp2[10]).Text, obj4);
                tmp19Result = closure_5(channel(tmp2[11]).PressableOpacity, obj3);
              }
              cResult[11] = callbackActionSheet;
              cResult[12] = tmp4;
              cResult[13] = channel;
              cResult[14] = manaTypeConsolidationExperiment;
              cResult[15] = onEdit;
              cResult[16] = source;
              cResult[17] = tmp19Result;
              tmp17 = tmp19Result;
            }
            const obj5 = { variant: str2, children: null };
            const items2 = [tmp12, " "];
            obj5.children = items2;
            const tmp16 = closure_4(channel(tmp2[10]).Text, obj5);
            cResult[8] = str2;
            cResult[9] = tmp12;
            cResult[10] = tmp16;
            tmp14 = tmp16;
          }
          const maxAgeStringResult = channel(tmp2[9]).maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses);
          cResult[5] = stateFromStores.maxAge;
          cResult[6] = stateFromStores.maxUses;
          cResult[7] = maxAgeStringResult;
          tmp12 = maxAgeStringResult;
          const tmpResult4 = channel(tmp2[9]);
        }
        const items3 = [tmp5.inviteAgeContainer, style];
        cResult[2] = style;
        cResult[3] = tmp5.inviteAgeContainer;
        cResult[4] = items3;
        tmp11 = items3;
      }
      const tmpResult3 = channel(callbackActionSheet[8]);
    }
  : (style) => {
      ({ channel: require, callbackActionSheet: dependencyMap, canEditInvite } = style);
      if (canEditInvite === undefined) {
        canEditInvite = true;
      }
      ({ onEdit: View, source: CreateInviteModalStore } = style);
      const tmp = closure_6();
      const manaTypeConsolidationExperiment =
        ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("InstantInviteAgeText");
      const items = [CreateInviteModalStore];
      const stateFromStores = initialize.useStateFromStores(items, () => inviteSettings.getInviteSettings());
      let tmp7Result = null;
      if (null != stateFromStores) {
        const obj3 = { style: null, children: null };
        const items1 = [tmp.inviteAgeContainer, style.style];
        obj3.style = items1;
        let str = "text-xs/normal";
        let str2 = "text-xs/normal";
        if (manaTypeConsolidationExperiment) {
          str2 = "experimental/body-md/normal";
        }
        const obj4 = { variant: str2, children: null };
        const items2 = [InstantInviteUtils.maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses), " "];
        obj4.children = items2;
        const items3 = [closure_4(Text_Text.Text, obj4)];
        if (canEditInvite) {
          const obj5 = {
            onPress() {
              instant_invite_InstantInviteUtils.handlePressSettings(closure_1_0, dependencyMap, inviteSettings);
              if (View != null) {
                View();
              }
            },
            accessibilityRole: "link",
            accessibilityLabel: null,
            hitSlop: null,
            children: null,
          };
          const intl = util.intl;
          obj5.accessibilityLabel = intl.string(util.t["VNe8P/"]);
          obj5.hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };
          if (manaTypeConsolidationExperiment) {
            str = "experimental/body-md/medium";
          }
          const obj6 = { variant: str, color: "text-link", children: null };
          const intl2 = util.intl;
          obj6.children = intl2.string(util.t["VNe8P/"]);
          obj5.children = closure_5(Text_Text.Text, obj6);
          canEditInvite = closure_5(Pressables.PressableOpacity, obj5);
        }
        items3[1] = canEditInvite;
        obj3.children = items3;
        tmp7Result = closure_4(View, obj3);
        const tmp2Result = InstantInviteUtils;
      }
      return tmp7Result;
    };
