// === Module 12315: JoinRequestRejectionReasonActionSheet ===

// Module 12315 (JoinRequestRejectionReasonActionSheet)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let BottomSheet, c4;

let metroImportDefault;
let metroRequire;
class JoinRequestRejectionReasonActionSheet {
  constructor(onDismiss) {
    let SafeAreaPaddingView;
    let bottomSheetClose;
    let bottomSheetRef;
    let c5;
    let intl;
    let intl2;
    let intl3;
    let items1;
    let items2;
    let joinRequest;
    let obj3;
    let onError;
    let tmp7;
    ({ joinRequest, onError } = onDismiss);
    let value;
    react = undefined;
    onDismiss = onDismiss.onDismiss;
    const tmp = closure_8();
    const userId = joinRequest.userId;
    let guildId = joinRequest.guildId;
    const joinRequestId = joinRequest.joinRequestId;
    const tmp2 = value(react.useState(), 2);
    value = tmp2[0];
    const tmp4 = tmp2[1];
    let obj = onError(guildId[5]);
    const bottomSheetRef1 = obj.useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
    [tmp7, c5] = value(react.useState(false), 2);
    const items = [guildId, joinRequestId, onError, value, userId];
    value(react.useState(false), 2);
    const callback = react.useCallback(joinRequestId(function*() {
      let closure_0;
      let closure_1;
      let closure_2;
      let intl;
      let intl2;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          v3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              v3(true);
              c3 = 2;
              const obj9 = tmp(guildId[6]);
              c4 = 3;
              v3 = 1;
              const obj5 = { value: obj9.updateGuildJoinRequest(guildId, userId, joinRequestId, tmp(guildId[7]).GuildJoinRequestApplicationStatuses.REJECTED, first), done: false };
              return obj5;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_5(false);
            throw guildId;
          } else {
            if (2 === c4) {
              c3 = 1;
              closure_129_0();
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_5(false);
              v3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const obj8 = tmp(guildId[8]);
              if (obj8.getDesignSystemsNotificationComponents("JoinRequestRejectionReasonActionSheet")) {
                const obj7 = { text: intl2.string(tmp(guildId[10]).t["TQY/Rd"]), variant: "critical" };
                const openMana = tmp(guildId[9]).openMana;
                const tmp18 = tmp(guildId[9]);
                intl2 = tmp(guildId[10]).intl;
                openMana("JOIN_REQUEST_REJECT", obj7);
              } else {
                let obj = {
                  key: "JOIN_REQUEST_REJECT",
                  content: intl.string(tmp(guildId[10]).t["TQY/Rd"]),
                  icon() {
                              const obj = { color: closure_1_1(closure_1_2[12]).colors.BACKGROUND_FEEDBACK_CRITICAL, secondaryColor: closure_1_1(closure_1_2[12]).colors.ICON_FEEDBACK_CRITICAL };
                              const CircleXIcon = closure_1_0(closure_1_2[11]).CircleXIcon;
                              return closure_1_6(CircleXIcon, obj);
                            }
                };
                const open = tmp(guildId[9]).open;
                const tmp9 = tmp(guildId[9]);
                intl = tmp(guildId[10]).intl;
                open(obj);
              }
              const obj3 = tmp(guildId[13]);
              obj3.hideAllActionSheets();
              c3 = 1;
            }
            c3 = 0;
            closure_129_5(false);
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp43) {
          guildId = tmp43;
          if (0 === c3) {
            v3 = 3;
            throw tmp43;
          } else if (1 === tmp45) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    }), items);
    let obj2 = { bodyStyles: tmp.container, onDismiss, ref: bottomSheetRef, children: closure_7(SafeAreaPaddingView, obj3) };
    BottomSheet = onError(guildId[14]).BottomSheet;
    obj3 = { bottom: true, children: items1 };
    SafeAreaPaddingView = onError(guildId[15]).SafeAreaPaddingView;
    let obj4 = { label: intl.string(onError(guildId[10]).t["mFP/qw"]), maxLength: 160, onChange: tmp4, value };
    const TextArea = onError(guildId[16]).TextArea;
    intl = onError(guildId[10]).intl;
    items1 = [closure_6(TextArea, obj4), ];
    let obj5 = { direction: "horizontal", style: tmp.buttonGroup, children: items2 };
    const ButtonGroup = onError(guildId[17]).ButtonGroup;
    let obj6 = { grow: true, variant: "secondary", text: intl2.string(onError(guildId[10]).t["ETE/oC"]), onPress: bottomSheetClose, disabled: tmp7 };
    const Button = onError(guildId[18]).Button;
    intl2 = onError(guildId[10]).intl;
    items2 = [closure_6(Button, obj6), ];
    let obj7 = { grow: true, variant: "destructive", text: intl3.string(onError(guildId[10]).t.hDtbsz), onPress: callback, disabled: tmp7 };
    const Button2 = onError(guildId[18]).Button;
    intl3 = onError(guildId[10]).intl;
    items2[1] = closure_6(Button2, obj7);
    items1[1] = closure_7(ButtonGroup, obj5);
    return closure_6(BottomSheet, obj2);
  }
}
let react = react_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const metroImportAll = createStyles.createStyles({ container: { padding: 20 }, buttonGroup: { marginTop: 16 } });
const memoResult = react.memo(JoinRequestRejectionReasonActionSheet);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestRejectionReasonActionSheet.tsx");

export default memoResult;
export { JoinRequestRejectionReasonActionSheet };