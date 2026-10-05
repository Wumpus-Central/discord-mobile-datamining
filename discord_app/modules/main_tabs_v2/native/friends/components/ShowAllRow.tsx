// discord_app/modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TableRow2 from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import AvatarDuoPile2 from "../../../../../design/components/Pile/native/AvatarDuoPile.native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { labelContainer: { flexDirection: "row", alignItems: "center" }, showAllText: obj2 };
obj2 = { marginLeft: nativeDefault.space.PX_12 };
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let count;
      let items;
      let onPress;
      let tmp12;
      let tmp5;
      let tmp9;
      let users;
      let obj = react2;
      const cResult = obj.c(18);
      ({ users, onPress, count } = arg0);
      const tmp4 = closure_5();
      const labelContainer = tmp4.labelContainer;
      if (cResult[0] !== users) {
        let tmp7;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function c(getAvatarSource, arg1) {
            const obj = {
              source: getAvatarSource(null, false, native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL]),
              size: native.AvatarSizes.XSMALL_20,
            };
            const Avatar = native.Avatar;
            getAvatarSource = getAvatarSource.getAvatarSource;
            return closure_1_3(Avatar, obj, arg1);
          };
          cResult[2] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        const substr = users.slice(0, 2);
        const mapped = substr.map(tmp7);
        cResult[0] = users;
        cResult[1] = mapped;
        tmp5 = mapped;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[3] !== tmp5) {
        const obj2 = { size: native.AvatarSizes.XSMALL_20, "aria-label": "", children: tmp5 };
        const AvatarDuoPile = AvatarDuoPile2.AvatarDuoPile;
        const tmp11 = _false(AvatarDuoPile, obj2);
        cResult[3] = tmp5;
        cResult[4] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[4];
      }
      const showAllText = tmp4.showAllText;
      if (cResult[5] !== count) {
        const intl = intl2.intl;
        const obj3 = { count };
        const formatResult = intl.format(intl2.t.NrzztX, obj3);
        cResult[5] = count;
        cResult[6] = formatResult;
        tmp12 = formatResult;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === tmp4.showAllText) {
        let tmp14;
        if (cResult[8] === tmp12) {
          tmp14 = cResult[9];
        }
        if (cResult[10] === tmp4.labelContainer) {
          if (cResult[11] === tmp9) {
            let tmp16;
            let tmp21;
            if (cResult[12] === tmp14) {
              tmp16 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp23 = _false(TableRow2.TableRow.Arrow, {});
              cResult[14] = tmp23;
              tmp21 = tmp23;
            } else {
              tmp21 = cResult[14];
            }
            if (cResult[15] === onPress) {
              let tmp24;
              if (cResult[16] === tmp16) {
                tmp24 = cResult[17];
              }
              return tmp24;
            }
            const obj4 = { onPress, end: true, height: "100%", label: tmp16, trailing: tmp21 };
            const tmp26 = _false(TableRow2.TableRow, obj4);
            cResult[15] = onPress;
            cResult[16] = tmp16;
            cResult[17] = tmp26;
            tmp24 = tmp26;
          }
        }
        const obj5 = { style: labelContainer, children: items };
        items = [tmp9, tmp14];
        const tmp19 = React3(View, obj5);
        cResult[10] = tmp4.labelContainer;
        cResult[11] = tmp9;
        cResult[12] = tmp14;
        cResult[13] = tmp19;
        tmp16 = tmp19;
      }
      const tmp15 = _false(Text_Text.Text, {
        style: showAllText,
        variant: "text-md/semibold",
        color: "text-brand",
        children: tmp12,
      });
      cResult[7] = tmp4.showAllText;
      cResult[8] = tmp12;
      cResult[9] = tmp15;
      tmp14 = tmp15;
    }
  : (users) => {
      let count;
      let intl;
      let items;
      let obj2;
      let onPress;
      let substr;
      users = users.users;
      ({ onPress, count } = users);
      const tmp = closure_5();
      let obj = {
        onPress,
        end: true,
        height: "100%",
        label: React3(View, obj2),
        trailing: _false(TableRow2.TableRow.Arrow, {}),
      };
      obj2 = { style: tmp.labelContainer, children: items };
      const TableRow = TableRow2.TableRow;
      const obj3 = {
        size: native.AvatarSizes.XSMALL_20,
        "aria-label": "",
        children: substr.map((getAvatarSource, index) => {
          const obj = {
            source: getAvatarSource(null, false, native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL]),
            size: native.AvatarSizes.XSMALL_20,
          };
          const Avatar = native.Avatar;
          getAvatarSource = getAvatarSource.getAvatarSource;
          return closure_1_3(Avatar, obj, index);
        }),
      };
      const AvatarDuoPile = AvatarDuoPile2.AvatarDuoPile;
      substr = users.slice(0, 2);
      items = [_false(AvatarDuoPile, obj3)];
      const obj4 = {
        style: tmp.showAllText,
        variant: "text-md/semibold",
        color: "text-brand",
        children: intl.format(intl2.t.NrzztX, { count }),
      };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items[1] = _false(Text, obj4);
      return _false(TableRow, obj);
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx");

export default tmp4;
