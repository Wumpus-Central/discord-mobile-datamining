// discord_app/modules/guild_member_verification/native/components/JoinRequestRejectionReasonActionSheet.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
class JoinRequestRejectionReasonActionSheet {
  constructor(arg0) {
    ({ joinRequest, onError } = global);
    userId = undefined;
    guildId = undefined;
    joinRequestId = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    tmp = closure_8();
    userId = joinRequest.userId;
    guildId = joinRequest.guildId;
    joinRequestId = joinRequest.joinRequestId;
    tmp2 = closure_4(closure_5.useState(), 2);
    first = tmp2[0];
    closure_4 = first;
    obj = onError(guildId[5]);
    bottomSheetRef = obj.useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
    tmp5 = closure_4(closure_5.useState(false), 2);
    [tmp6, closure_5] = tmp5;
    items = [, , , ,];
    items[0] = guildId;
    items[1] = joinRequestId;
    items[2] = onError;
    items[3] = first;
    items[4] = userId;
    callback = closure_5.useCallback(
      joinRequestId(function* () {
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            v3 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                v3(true);
                c3 = 2;
                const obj8 = tmp4(tmp24[6]);
                c4 = 3;
                v3 = 1;
                const obj1 = {
                  value: obj8.updateGuildJoinRequest(
                    guildId,
                    userId,
                    joinRequestId,
                    tmp4(tmp24[7]).GuildJoinRequestApplicationStatuses.REJECTED,
                    first,
                  ),
                  done: false,
                };
                return obj1;
              }
            } else if (1 === tmp8) {
              c3 = 0;
              closure_129_5(false);
              throw tmp24;
            } else {
              if (2 === tmp8) {
                c3 = 1;
                closure_129_0();
                c3 = 0;
                closure_129_5(false);
                v3 = 3;
              } else if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 !== 2) {
                const obj2 = { key: "JOIN_REQUEST_REJECT", content: null, icon: null };
                const intl = tmp4(tmp24[9]).intl;
                obj2.content = intl.string(tmp4(tmp24[9]).t["TQY/Rd"]);
                obj2.icon = function icon() {
                  return closure_1_6(closure_1_0(6616).CircleXIcon, {
                    color: closure_1_1(576).colors.BACKGROUND_FEEDBACK_CRITICAL,
                    secondaryColor: closure_1_1(576).colors.ICON_FEEDBACK_CRITICAL,
                  });
                };
                tmp4(tmp24[8]).open(obj2);
                const obj5 = tmp4(tmp24[8]);
                tmp4(tmp24[12]).hideAllActionSheets();
                c3 = 1;
                const obj7 = tmp4(tmp24[12]);
              }
              c3 = 0;
              closure_129_5(false);
              v3 = 3;
              obj = { value, done: true };
              return obj;
            }
          } catch (tmp24) {
            if (tmp5 === c3) {
              v3 = tmp3;
              throw tmp24;
            } else if (tmp2 === tmp26) {
              c4 = tmp2;
            } else {
              c4 = tmp;
            }
          }
        }
      }),
      items,
    );
    obj = { bodyStyles: tmp.container, onDismiss: global.onDismiss, ref: bottomSheetRef, children: null };
    obj1 = { bottom: true, children: null };
    obj2 = { label: null, maxLength: 160, onChange: null, value: null };
    intl = onError(guildId[9]).intl;
    obj2.label = intl.string(onError(guildId[9]).t["mFP/qw"]);
    obj2.onChange = tmp2[1];
    obj2.value = first;
    items1 = [,];
    items1[0] = jsx(onError(guildId[15]).TextArea, obj2);
    obj3 = { direction: "horizontal", style: tmp.buttonGroup, children: null };
    obj4 = { grow: true, variant: "secondary", text: null, onPress: null, disabled: null };
    intl2 = onError(guildId[9]).intl;
    obj4.text = intl2.string(onError(guildId[9]).t["ETE/oC"]);
    obj4.onPress = bottomSheetClose;
    obj4.disabled = tmp6;
    items2 = [,];
    items2[0] = jsx(onError(guildId[17]).Button, obj4);
    obj5 = { grow: true, variant: "destructive", text: null, onPress: null, disabled: null };
    intl3 = onError(guildId[9]).intl;
    obj5.text = intl3.string(onError(guildId[9]).t.hDtbsz);
    obj5.onPress = callback;
    obj5.disabled = tmp6;
    items2[1] = jsx(onError(guildId[17]).Button, obj5);
    obj3.children = items2;
    items1[1] = jsxs(onError(guildId[16]).ButtonGroup, obj3);
    obj1.children = items1;
    obj.children = jsxs(onError(guildId[14]).SafeAreaPaddingView, obj1);
    return jsx(onError(guildId[13]).BottomSheet, obj);
  }
}
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
const React6 = createStyles.createStyles({ container: { padding: 20 }, buttonGroup: { marginTop: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/JoinRequestRejectionReasonActionSheet.tsx",
);

export default noop.memo(JoinRequestRejectionReasonActionSheet);
export { JoinRequestRejectionReasonActionSheet };
