// === Module 12375: JoinRequestRejectionReasonActionSheet ===

// Module 12375 (JoinRequestRejectionReasonActionSheet)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
    bottomSheetRef1 = obj.useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
    tmp5 = closure_4(closure_5.useState(false), 2);
    [tmp6, closure_5] = tmp5;
    items = [, , , , ];
    items[0] = guildId;
    items[1] = joinRequestId;
    items[2] = onError;
    items[3] = first;
    items[4] = userId;
    callback = closure_5.useCallback(joinRequestId(function*() {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              _undefined(true);
              c3 = 2;
              const obj8 = v3(tmp24[6]);
              v3 = 3;
              c4 = 1;
              const obj4 = { value: obj8.updateGuildJoinRequest(guildId, userId, joinRequestId, tmp4(tmp24[7]).GuildJoinRequestApplicationStatuses.REJECTED, first), done: false };
              return obj4;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_128_5(false);
            throw tmp24;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              closure_128_0();
              c3 = 0;
              closure_128_5(false);
              c4 = 3;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              const obj6 = { text: null, variant: "critical" };
              const intl = tmp4(tmp24[9]).intl;
              obj6.text = intl.string(tmp4(tmp24[9]).t["TQY/Rd"]);
              v3(tmp24[8]).open("JOIN_REQUEST_REJECT", obj6);
              const obj5 = v3(tmp24[8]);
              v3(tmp24[10]).hideAllActionSheets();
              c3 = 1;
              const obj7 = v3(tmp24[10]);
            }
            c3 = 0;
            closure_128_5(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp24) {
          if (tmp5 === c3) {
            c4 = tmp3;
            throw tmp24;
          } else if (tmp2 === tmp26) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    }), items);
    obj1 = { bodyStyles: tmp.container, onDismiss: global.onDismiss, ref: bottomSheetRef, children: null };
    obj8 = { bottom: true, children: null };
    obj9 = { label: null, maxLength: 160, onChange: null, value: null };
    intl = onError(guildId[9]).intl;
    obj9.label = intl.string(onError(guildId[9]).t["mFP/qw"]);
    obj9.onChange = tmp2[1];
    obj9.value = first;
    items1 = [, ];
    items1[0] = jsx(onError(guildId[13]).TextArea, obj9);
    obj10 = { direction: "horizontal", style: tmp.buttonGroup, children: null };
    obj11 = { grow: true, variant: "secondary", text: null, onPress: null, disabled: null };
    intl2 = onError(guildId[9]).intl;
    obj11.text = intl2.string(onError(guildId[9]).t["ETE/oC"]);
    obj11.onPress = bottomSheetClose;
    obj11.disabled = tmp6;
    items2 = [, ];
    items2[0] = jsx(onError(guildId[15]).Button, obj11);
    obj12 = { grow: true, variant: "destructive", text: null, onPress: null, disabled: null };
    intl3 = onError(guildId[9]).intl;
    obj12.text = intl3.string(onError(guildId[9]).t.hDtbsz);
    obj12.onPress = callback;
    obj12.disabled = tmp6;
    items2[1] = jsx(onError(guildId[15]).Button, obj12);
    obj10.children = items2;
    items1[1] = jsxs(onError(guildId[14]).ButtonGroup, obj10);
    obj8.children = items1;
    obj1.children = jsxs(onError(guildId[12]).SafeAreaPaddingView, obj8);
    return jsx(onError(guildId[11]).BottomSheet, obj1);
  }
}
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles({ container: { padding: 20 }, buttonGroup: { marginTop: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestRejectionReasonActionSheet.tsx");

export default noop.memo(JoinRequestRejectionReasonActionSheet);
export { JoinRequestRejectionReasonActionSheet };