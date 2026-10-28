// === Module 19613: GuildRoleSubscriptionBenefitModalHeader ===

// Module 19613 (GuildRoleSubscriptionBenefitModalHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import Text_Text from "Text/Text" /* 5270 */;
import NavigatorHeader from "NavigatorHeader" /* 6960 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7257 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9074 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 16855 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5004);
let obj2 = { headerContainer: { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", paddingBottom: 8, paddingHorizontal: 16 }, headerButtonContainer: { flexDirection: "row", alignSelf: "center", minWidth: 60 }, headerButtonStart: { alignItems: "flex-start" }, headerButtonEnd: { alignItems: "flex-end" }, titleContainer: { flex: 1 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", paddingBottom: 8, paddingHorizontal: 16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionBenefitModalHeader(arg0) {
  const cResult = c.c(29);
  ({ title, canSave, onSave, onClose } = arg0);
  const tmp4 = closure_8();
  const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useName(arg0.listingId), 1)[0];
  if (cResult[0] === tmp4.headerButtonContainer) {
    if (cResult[1] === tmp4.headerButtonStart) {
      let tmp7 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-md/medium", color: "interactive-text-active", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t["ETE/oC"]);
      const tmp11 = timestampProducer(Text_Text.Text, obj3);
      cResult[3] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === onClose) {
      if (cResult[5] === tmp7) {
        let tmp12 = cResult[6];
      }
      if (cResult[7] === first) {
        if (cResult[8] === title) {
          let tmp16 = cResult[9];
        }
        if (cResult[10] === tmp4.titleContainer) {
          if (cResult[11] === tmp16) {
            let tmp19 = cResult[12];
          }
          if (cResult[13] === tmp4.headerButtonContainer) {
            if (cResult[14] === tmp4.headerButtonEnd) {
              let tmp23 = cResult[15];
            }
            let str2 = "text-muted";
            if (canSave) {
              str2 = "interactive-text-active";
            }
            const _Symbol2 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = util.intl;
              const stringResult = intl2.string(util.t["R3BPH+"]);
              cResult[16] = stringResult;
              let tmp25 = stringResult;
            } else {
              tmp25 = cResult[16];
            }
            if (cResult[17] !== str2) {
              const obj4 = { variant: "text-md/medium", color: str2, children: tmp25 };
              const tmp29 = timestampProducer(Text_Text.Text, obj4);
              cResult[17] = str2;
              cResult[18] = tmp29;
              let tmp27 = tmp29;
            } else {
              tmp27 = cResult[18];
            }
            if (cResult[19] === onSave) {
              if (cResult[20] === tmp27) {
                if (cResult[21] === tmp23) {
                  if (cResult[22] === tmp24) {
                    let tmp30 = cResult[23];
                  }
                  if (cResult[24] === tmp4.headerContainer) {
                    if (cResult[25] === tmp30) {
                      if (cResult[26] === tmp12) {
                        if (cResult[27] === tmp19) {
                          let tmp34 = cResult[28];
                        }
                        return tmp34;
                      }
                    }
                  }
                  const obj5 = { top: true, style: tmp6, children: null };
                  const items = [tmp12, tmp19, tmp30];
                  obj5.children = items;
                  const tmp36 = React5(common_SafeAreaView.SafeAreaPaddingView, obj5);
                  cResult[24] = tmp4.headerContainer;
                  cResult[25] = tmp30;
                  cResult[26] = tmp12;
                  cResult[27] = tmp19;
                  cResult[28] = tmp36;
                  tmp34 = tmp36;
                }
              }
            }
            const obj6 = { style: tmp23, accessibilityRole: "button", disabled: !canSave, onPress: onSave, children: tmp27 };
            const tmp33 = timestampProducer(TouchableHitBoxDefault, obj6);
            cResult[19] = onSave;
            cResult[20] = tmp27;
            cResult[21] = tmp23;
            cResult[22] = !canSave;
            cResult[23] = tmp33;
            tmp30 = tmp33;
          }
          const items1 = [, ];
          ({ headerButtonContainer: arr2[0], headerButtonEnd: arr2[1] } = tmp4);
          cResult[13] = tmp4.headerButtonContainer;
          cResult[14] = tmp4.headerButtonEnd;
          cResult[15] = items1;
          tmp23 = items1;
        }
        const obj7 = { style: tmp4.titleContainer, children: tmp16 };
        const tmp22 = timestampProducer(View, obj7);
        cResult[10] = tmp4.titleContainer;
        cResult[11] = tmp16;
        cResult[12] = tmp22;
        tmp19 = tmp22;
      }
      const obj8 = { title, subtitle: first };
      const tmp18 = timestampProducer(NavigatorHeader.NavigatorHeader, obj8);
      cResult[7] = first;
      cResult[8] = title;
      cResult[9] = tmp18;
      tmp16 = tmp18;
    }
    const obj9 = { style: tmp7, accessibilityRole: "button", onPress: onClose, children: tmp9 };
    const tmp15 = timestampProducer(TouchableHitBoxDefault, obj9);
    cResult[4] = onClose;
    cResult[5] = tmp7;
    cResult[6] = tmp15;
    tmp12 = tmp15;
  }
  const items2 = [, ];
  ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp4);
  ({ headerButtonContainer: tmp3[0], headerButtonStart: tmp3[1] } = tmp4);
  cResult[2] = items2;
  tmp7 = items2;
}) : (function GuildRoleSubscriptionBenefitModalHeader(canSave) {
  canSave = canSave.canSave;
  ({ title, onSave, onClose, listingId } = canSave);
  const tmp = closure_8();
  const obj2 = { top: true, style: tmp.headerContainer, children: null };
  const obj3 = { style: null, accessibilityRole: "button", onPress: onClose, children: null };
  const items = [, ];
  ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp);
  obj3.style = items;
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj4 = { variant: "text-md/medium", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["ETE/oC"]);
  obj3.children = timestampProducer(Text_Text.Text, obj4);
  const items1 = [timestampProducer(TouchableHitBoxDefault, obj3), , ];
  items1[1] = timestampProducer(View, { style: tmp.titleContainer, children: timestampProducer(NavigatorHeader.NavigatorHeader, { title, subtitle: _slicedToArray(obj.useName(listingId), 1)[0] }) });
  const obj6 = { style: null, accessibilityRole: "button", disabled: !canSave, onPress: onSave, children: null };
  const items2 = [, ];
  ({ headerButtonContainer: arr3[0], headerButtonEnd: arr3[1] } = tmp);
  obj6.style = items2;
  const obj5 = { style: tmp.titleContainer, children: timestampProducer(NavigatorHeader.NavigatorHeader, { title, subtitle: _slicedToArray(obj.useName(listingId), 1)[0] }) };
  let str = "text-muted";
  if (canSave) {
    str = "interactive-text-active";
  }
  const obj7 = { variant: "text-md/medium", color: str, children: null };
  const intl2 = util.intl;
  obj7.children = intl2.string(util.t["R3BPH+"]);
  obj6.children = timestampProducer(Text_Text.Text, obj7);
  items1[2] = timestampProducer(TouchableHitBoxDefault, obj6);
  obj2.children = items1;
  return React5(common_SafeAreaView.SafeAreaPaddingView, obj2);
});