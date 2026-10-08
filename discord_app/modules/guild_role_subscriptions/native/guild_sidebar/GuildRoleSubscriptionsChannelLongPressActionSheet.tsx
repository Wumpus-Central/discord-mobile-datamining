// === Module 16430: GuildRoleSubscriptionsChannelLongPressActionSheet ===

// Module 16430 (GuildRoleSubscriptionsChannelLongPressActionSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6828 */;
import ActionSheet from "ActionSheet" /* 6885 */;
import Form from "Form" /* 8555 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 10314 */;
import _modDef12572 from "module_12572" /* 12572 */;
import _modDef16322 from "module_16322" /* 16322 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const StaticChannelRoute = fn(2070).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { headerIcon: null };
let size = { marginRight: 16, tintColor: nativeDefault.colors.CHANNEL_ICON, width: 20, height: 20 };
obj2.headerIcon = size;
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionsChannelLongPressActionSheet(guildId) {
  const cResult = guildId(576).c(14);
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disableColor: true, source: onClose(12572) };
    const tmp8 = closure_5(tmp(1200).Icon, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.headerIcon) {
    const obj3 = { style: tmp4.headerIcon, children: first };
    const tmp12 = closure_5(View, obj3);
    cResult[1] = tmp4.headerIcon;
    cResult[2] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["KzCF/6"]);
    cResult[3] = stringResult;
    let tmp13 = stringResult;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== tmp9) {
    const obj4 = { leading: tmp9, title: tmp13 };
    const tmp17 = closure_5(tmp(6828).BottomSheetTitleHeader, obj4);
    cResult[4] = tmp9;
    cResult[5] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { source: onClose(16322) };
    const tmp21 = closure_5(tmp(1200).Icon, obj5);
    cResult[6] = tmp21;
    let tmp18 = tmp21;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { text: null };
    const intl2 = tmp(1126).intl;
    obj6.text = intl2.string(tmp(1126).t.WqhZss);
    const tmp24 = closure_5(tmp(8555).FormLabel, obj6);
    cResult[7] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[7];
  }
  if (cResult[8] === guildId) {
    if (cResult[9] === onClose) {
      let tmp25 = cResult[10];
    }
    if (cResult[11] === tmp15) {
      if (cResult[12] === tmp25) {
        let tmp27 = cResult[13];
      }
      return tmp27;
    }
    const obj7 = { children: null };
    const items = [tmp15, tmp25];
    obj7.children = items;
    const tmp29 = closure_6(tmp(6885).ActionSheet, obj7);
    cResult[11] = tmp15;
    cResult[12] = tmp25;
    cResult[13] = tmp29;
    tmp27 = tmp29;
  }
  const tmp26 = closure_5(guildId(8555).FormRow, {
    leading: tmp18,
    label: tmp22,
    onPress() {
      onClose();
      const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    }
  });
  cResult[8] = guildId;
  cResult[9] = onClose;
  cResult[10] = tmp26;
  tmp25 = tmp26;
  const obj = guildId(576);
  const obj8 = {
    leading: tmp18,
    label: tmp22,
    onPress() {
      onClose();
      const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    }
  };
}) : (function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
  ({ guildId: require, onClose: importDefault } = arg0);
  const obj = { children: null };
  const obj2 = { leading: null, title: null };
  const obj3 = { style: closure_7().headerIcon, children: null };
  const tmp = closure_7();
  obj3.children = closure_5(native.Icon, { disableColor: true, source: _modDef12572 });
  obj2.leading = closure_5(View, obj3);
  const intl = util.intl;
  obj2.title = intl.string(util.t["KzCF/6"]);
  const items = [closure_5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2), ];
  const obj5 = { leading: null, label: null, onPress: null };
  const obj4 = { disableColor: true, source: _modDef12572 };
  obj5.leading = closure_5(native.Icon, { source: _modDef16322 });
  const obj7 = { text: null };
  const intl2 = util.intl;
  obj7.text = intl2.string(util.t.WqhZss);
  obj5.label = closure_5(Form.FormLabel, obj7);
  obj5.onPress = function onPress() {
    importDefault();
    const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(closure_1_0, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
  };
  items[1] = closure_5(Form.FormRow, obj5);
  obj.children = items;
  return closure_6(ActionSheet.ActionSheet, obj);
});