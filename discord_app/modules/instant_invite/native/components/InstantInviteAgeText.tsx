// === Module 9564: InstantInviteAgeText ===

// Module 9564 (InstantInviteAgeText)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6477 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9494 */;
import InstantInviteUtils from "InstantInviteUtils" /* 9496 */;
import react from "react" /* 19 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9495 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let callbackActionSheet;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsxs: closure_4, jsx: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ inviteAgeContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" } });
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((callbackActionSheet) => {
  let Text;
  let canEditInvite;
  let channel;
  let intl;
  let intl2;
  let items1;
  let items2;
  let obj4;
  let onEdit;
  let style;
  let tmp7;
  let tmp8;
  let obj = channel(callbackActionSheet[6]);
  const cResult = obj.c(22);
  ({ style, channel } = callbackActionSheet);
  callbackActionSheet = callbackActionSheet.callbackActionSheet;
  ({ canEditInvite, onEdit } = callbackActionSheet);
  const source = callbackActionSheet.source;
  const tmp5 = closure_6();
  const tmpResult = channel(callbackActionSheet[7]);
  const manaTypeConsolidationExperiment = tmpResult.useManaTypeConsolidationExperiment("InstantInviteAgeText");
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
  const tmpResult3 = channel(callbackActionSheet[8]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp7, tmp8);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[2] === style) {
      let tmp11;
      if (cResult[3] === tmp5.inviteAgeContainer) {
        tmp11 = cResult[4];
      }
      let str = "text-xs/normal";
      let str2 = "text-xs/normal";
      if (manaTypeConsolidationExperiment) {
        str2 = "experimental/body-md/normal";
      }
      if (cResult[5] === stateFromStores.maxAge) {
        let tmp12;
        if (cResult[6] === stateFromStores.maxUses) {
          tmp12 = cResult[7];
        }
        if (cResult[8] === str2) {
          let tmp14;
          if (cResult[9] === tmp12) {
            tmp14 = cResult[10];
          }
          if (cResult[11] === callbackActionSheet) {
            if (cResult[12] === (undefined === canEditInvite || canEditInvite)) {
              if (cResult[13] === channel) {
                if (cResult[14] === manaTypeConsolidationExperiment) {
                  if (cResult[15] === onEdit) {
                    let tmp17;
                    if (cResult[16] === source) {
                      tmp17 = cResult[17];
                    }
                    if (cResult[18] === tmp11) {
                      if (cResult[19] === tmp14) {
                        let tmp20;
                        if (cResult[20] === tmp17) {
                          tmp20 = cResult[21];
                        }
                        return tmp20;
                      }
                    }
                    const obj2 = { style: tmp11, children: items1 };
                    items1 = [tmp14, tmp17];
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
          if (tmp19Result) {
            const obj3 = {
              onPress() {
                          const obj = instant_invite_InstantInviteUtils;
                          obj.handlePressSettings(channel, callbackActionSheet, source);
                          if (onEdit != null) {
                            onEdit();
                          }
                        },
              accessibilityRole: "link",
              accessibilityLabel: intl.string(channel(callbackActionSheet[13]).t["VNe8P/"]),
              hitSlop: { top: 8, left: 8, bottom: 8, right: 8 },
              children: closure_5(Text, obj4)
            };
            const PressableOpacity = channel(tmp2[11]).PressableOpacity;
            intl = channel(tmp2[13]).intl;
            Text = channel(tmp2[10]).Text;
            if (manaTypeConsolidationExperiment) {
              str = "experimental/body-md/medium";
            }
            obj4 = { variant: str, color: "text-link", children: intl2.string(channel(callbackActionSheet[13]).t["VNe8P/"]) };
            intl2 = channel(tmp2[13]).intl;
            tmp19Result = closure_5(PressableOpacity, obj3);
          }
          cResult[11] = callbackActionSheet;
          cResult[12] = undefined === canEditInvite || canEditInvite;
          cResult[13] = channel;
          cResult[14] = manaTypeConsolidationExperiment;
          cResult[15] = onEdit;
          cResult[16] = source;
          cResult[17] = tmp19Result;
          tmp17 = tmp19Result;
        }
        const obj5 = { variant: str2, children: items2 };
        items2 = [tmp12, " "];
        const tmp16 = closure_4(channel(callbackActionSheet[10]).Text, obj5);
        cResult[8] = str2;
        cResult[9] = tmp12;
        cResult[10] = tmp16;
        tmp14 = tmp16;
      }
      const tmpResult4 = channel(callbackActionSheet[9]);
      const maxAgeStringResult = tmpResult4.maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses);
      cResult[5] = stateFromStores.maxAge;
      cResult[6] = stateFromStores.maxUses;
      cResult[7] = maxAgeStringResult;
      tmp12 = maxAgeStringResult;
    }
    const items3 = [tmp5.inviteAgeContainer, style];
    cResult[2] = style;
    cResult[3] = tmp5.inviteAgeContainer;
    cResult[4] = items3;
    tmp11 = items3;
  }
}) : ((style) => {
  let Text2;
  let canEditInvite;
  let intl;
  let intl2;
  let inviteSettings;
  let items1;
  let items2;
  let items3;
  let obj6;
  ({ channel: require, callbackActionSheet: dependencyMap, canEditInvite } = style);
  style = style.style;
  if (canEditInvite === undefined) {
    canEditInvite = true;
  }
  ({ onEdit: View, source: CreateInviteModalStore } = style);
  const tmp = closure_6();
  let obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("InstantInviteAgeText");
  const items = [CreateInviteModalStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => CreateInviteModalStore.getInviteSettings());
  let tmp7Result = null;
  if (null != stateFromStores) {
    const obj3 = { style: items1, children: items3 };
    items1 = [tmp.inviteAgeContainer, style];
    let str = "text-xs/normal";
    let str2 = "text-xs/normal";
    const Text = Text_Text.Text;
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/body-md/normal";
    }
    const obj4 = { variant: str2, children: items2 };
    items2 = [, ];
    const tmp2Result = InstantInviteUtils;
    items2[0] = tmp2Result.maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses);
    items2[1] = " ";
    items3 = [closure_4(Text, obj4), ];
    if (canEditInvite) {
      const obj5 = {
        onPress() {
              const obj = instant_invite_InstantInviteUtils;
              obj.handlePressSettings(require, dependencyMap, CreateInviteModalStore);
              if (View != null) {
                View();
              }
            },
        accessibilityRole: "link",
        accessibilityLabel: intl.string(intl3.t["VNe8P/"]),
        hitSlop: { top: 8, left: 8, bottom: 8, right: 8 },
        children: closure_5(Text2, obj6)
      };
      const PressableOpacity = Pressables.PressableOpacity;
      intl = intl3.intl;
      Text2 = Text_Text.Text;
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-md/medium";
      }
      obj6 = { variant: str, color: "text-link", children: intl2.string(intl3.t["VNe8P/"]) };
      intl2 = intl3.intl;
      canEditInvite = closure_5(PressableOpacity, obj5);
    }
    items3[1] = canEditInvite;
    tmp7Result = closure_4(View, obj3);
  }
  return tmp7Result;
});
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteAgeText.tsx");

export default tmp4;