// === Module 11805: JoinRequestRejectionReasonActionSheet ===

// Module 11805 (JoinRequestRejectionReasonActionSheet)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
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
    obj = require("useBottomSheetRef");
    bottomSheetRef = obj.useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
    tmp5 = closure_4(closure_5.useState(false), 2);
    [tmp6, closure_5] = tmp5;
    items = [, , , , ];
    items[0] = guildId;
    items[1] = joinRequestId;
    items[2] = onError;
    items[3] = first;
    items[4] = userId;
    callback = closure_5.useCallback(joinRequestId(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp4;
              closure_0 = tmp4;
              v0(true);
              c3 = 2;
              const obj8 = closure_1_1(closure_1_2[6]);
              c4 = 3;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj8.updateGuildJoinRequest(closure_1_2, closure_1_1, c3, closure_1_0(closure_1_2[7]).GuildJoinRequestApplicationStatuses.REJECTED, c4);
              return obj1;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            v0(false);
            throw closure_2;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              closure_1_0();
              c3 = 0;
              v0(false);
              v0 = 3;
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              const obj2 = { key: "JOIN_REQUEST_REJECT", content: null, icon: null };
              const intl = closure_1_0(closure_1_2[9]).intl;
              obj2[1] = intl.string(closure_1_0(closure_1_2[9]).t["TQY/Rd"]);
              obj2[2] = function icon() {
                return callback(tmp4(tmp24[10]).CircleXIcon, { color: tmp42(tmp24[11]).colors.BACKGROUND_FEEDBACK_CRITICAL, secondaryColor: tmp42(tmp24[11]).colors.ICON_FEEDBACK_CRITICAL });
              };
              closure_1_1(closure_1_2[8]).open(obj2);
              const obj5 = closure_1_1(closure_1_2[8]);
              closure_1_1(closure_1_2[12]).hideAllActionSheets();
              c3 = 1;
              const obj7 = closure_1_1(closure_1_2[12]);
            }
            c3 = 0;
            v0(false);
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp24) {
          closure_2 = tmp24;
          if (tmp5 === c3) {
            v0 = tmp3;
            throw tmp24;
          } else if (tmp2 === tmp26) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    }), items);
    obj = { bodyStyles: tmp.container, onDismiss: global.onDismiss, ref: bottomSheetRef, children: null };
    obj1 = { bottom: true, children: null };
    obj2 = { label: null, maxLength: 160, onChange: null, value: null };
    intl = require("getSystemLocale").intl;
    obj2[0] = intl.string(require("getSystemLocale").t["mFP/qw"]);
    obj2[2] = tmp2[1];
    obj2[3] = first;
    items1 = [, ];
    items1[0] = jsx(require("TextArea").TextArea, obj2);
    obj3 = { direction: "horizontal", style: tmp.buttonGroup, children: null };
    obj4 = { grow: true, variant: "secondary", text: null, onPress: null, disabled: null };
    intl2 = require("getSystemLocale").intl;
    obj4[2] = intl2.string(require("getSystemLocale").t["ETE/oC"]);
    obj4[3] = bottomSheetClose;
    obj4[4] = tmp6;
    items2 = [, ];
    items2[0] = jsx(require("Button").Button, obj4);
    obj5 = { grow: true, variant: "destructive", text: null, onPress: null, disabled: null };
    intl3 = require("getSystemLocale").intl;
    obj5[2] = intl3.string(require("getSystemLocale").t.hDtbsz);
    obj5[3] = callback;
    obj5[4] = tmp6;
    items2[1] = jsx(require("Button").Button, obj5);
    obj3[2] = items2;
    items1[1] = jsxs(require("ButtonGroup").ButtonGroup, obj3);
    obj1[1] = items1;
    obj[3] = jsxs(require("SafeAreaPaddingView").SafeAreaPaddingView, obj1);
    return jsx(require("Background").BottomSheet, obj);
  }
}
let c5 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { padding: 20 }, buttonGroup: { marginTop: 16 } });
const memoResult = importAllResult.memo(JoinRequestRejectionReasonActionSheet);
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestRejectionReasonActionSheet.tsx");

export default memoResult;
export { JoinRequestRejectionReasonActionSheet };