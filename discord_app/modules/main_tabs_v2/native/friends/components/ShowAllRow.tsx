// === Module 17245: ShowAllRow ===

// Module 17245 (ShowAllRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5086 */;
import TableRow from "TableRow" /* 6184 */;
import AvatarDuoPile from "AvatarDuoPile" /* 14117 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { labelContainer: { flexDirection: "row", alignItems: "center" }, showAllText: { marginLeft: nativeDefault.space.PX_12 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginLeft: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ShowAllRow(arg0) {
  const cResult = c.c(18);
  ({ users, onPress, count } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== users) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function c(getAvatarSource, arg1) {
        return closure_1_3(native.Avatar, { source: getAvatarSource.getAvatarSource(null, false, native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL]), size: native.AvatarSizes.XSMALL_20 }, arg1);
      };
      cResult[2] = fn;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[2];
    }
    const substr = users.slice(0, 2);
    const mapped = substr.map(tmp8);
    cResult[0] = users;
    cResult[1] = mapped;
  } else {
    if (cResult[3] !== cResult[1]) {
      const obj2 = { size: native.AvatarSizes.XSMALL_20, "aria-label": "", children: tmp6 };
      const tmp13 = React3(AvatarDuoPile.AvatarDuoPile, obj2);
      cResult[3] = tmp6;
      cResult[4] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== count) {
      const intl = util.intl;
      const obj3 = { count };
      const formatResult = intl.format(util.t.NrzztX, obj3);
      cResult[5] = count;
      cResult[6] = formatResult;
      let tmp14 = formatResult;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] === tmp4.showAllText) {
      if (cResult[8] === tmp14) {
        let tmp16 = cResult[9];
      }
      if (cResult[10] === tmp4.labelContainer) {
        if (cResult[11] === tmp11) {
          if (cResult[12] === tmp16) {
            let tmp19 = cResult[13];
          }
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp26 = React3(TableRow.TableRow.Arrow, {});
            cResult[14] = tmp26;
            let tmp24 = tmp26;
          } else {
            tmp24 = cResult[14];
          }
          if (cResult[15] === onPress) {
            if (cResult[16] === tmp19) {
              let tmp27 = cResult[17];
            }
            return tmp27;
          }
          const obj4 = { onPress, end: true, height: "100%", label: tmp19, trailing: tmp24 };
          const tmp29 = React3(TableRow.TableRow, obj4);
          cResult[15] = onPress;
          cResult[16] = tmp19;
          cResult[17] = tmp29;
          tmp27 = tmp29;
        }
      }
      const obj5 = { style: tmp5, children: null };
      const items = [tmp11, tmp16];
      obj5.children = items;
      const tmp22 = React4(View, obj5);
      cResult[10] = tmp4.labelContainer;
      cResult[11] = tmp11;
      cResult[12] = tmp16;
      cResult[13] = tmp22;
      tmp19 = tmp22;
    }
    const obj6 = { style: tmp4.showAllText, variant: "text-md/semibold", color: "text-brand", children: tmp14 };
    const tmp18 = React3(Text_Text.Text, obj6);
    cResult[7] = tmp4.showAllText;
    cResult[8] = tmp14;
    cResult[9] = tmp18;
    tmp16 = tmp18;
  }
}) : (function ShowAllRow(users) {
  users = users.users;
  ({ onPress, count } = users);
  const tmp = closure_5();
  const obj = { onPress, end: true, height: "100%", label: null, trailing: null };
  const obj2 = { style: tmp.labelContainer, children: null };
  const obj3 = { size: native.AvatarSizes.XSMALL_20, "aria-label": "", children: null };
  const substr = users.slice(0, 2);
  obj3.children = substr.map((getAvatarSource, index) => closure_1_3(native.Avatar, { source: getAvatarSource.getAvatarSource(null, false, native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL]), size: native.AvatarSizes.XSMALL_20 }, index));
  const items = [React3(AvatarDuoPile.AvatarDuoPile, obj3), ];
  const obj4 = { style: tmp.showAllText, variant: "text-md/semibold", color: "text-brand", children: null };
  const intl = util.intl;
  obj4.children = intl.format(util.t.NrzztX, { count });
  items[1] = React3(Text_Text.Text, obj4);
  obj2.children = items;
  obj.label = React4(View, obj2);
  obj.trailing = React3(TableRow.TableRow.Arrow, {});
  return React3(TableRow.TableRow, obj);
});