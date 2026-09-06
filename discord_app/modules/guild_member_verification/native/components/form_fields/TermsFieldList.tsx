// discord_app/modules/guild_member_verification/native/components/form_fields/TermsFieldList.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import MarkupUtilsDefault from "../../../../markup/MarkupUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TableRowDivider from "../../../../../design/components/TableRow/native/TableRowDivider.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function TermsFieldListItem(rowNumber) {
  rowNumber = rowNumber.rowNumber;
  ({ rowCount, rule, rulesChannelId } = rowNumber);
  const tmp = closure_8();
  let obj = { style: tmp.termsRow, children: null };
  obj = {
    style: tmp.termsRowNumber,
    variant: "text-sm/medium",
    color: "text-muted",
    accessibilityLabel: null,
    children: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.formatToPlainString(util.t.XpgzeO, { number: rowNumber, total: rowCount });
  obj.children = "" + rowNumber + ".";
  const items = [hasOwnProperty(Text_Text.Text, obj)];
  obj = {
    style: tmp.termsRowContent,
    variant: "text-md/medium",
    children: MarkupUtilsDefault.parseGuildVerificationFormRule(rule, true, { channelId: rulesChannelId }),
  };
  items[1] = hasOwnProperty(Text_Text.Text, obj);
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  termsContainer: null,
  firstItem: null,
  lastItem: null,
  termsRow: null,
  termsRowContent: null,
  termsRowNumber: null,
  title: null,
};
createStyles = {
  padding: 16,
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
};
createStyles.termsContainer = createStyles;
createStyles.firstItem = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
const obj1 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
createStyles.lastItem = {
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
  marginBottom: 12,
};
createStyles.termsRow = { flexDirection: "row" };
createStyles.termsRowContent = { flex: 1, lineHeight: 20 };
createStyles.termsRowNumber = { paddingRight: 8, width: 20, height: 20 };
createStyles.title = { marginBottom: 16 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/TermsFieldList.tsx",
);

export default function TermsFieldList(rules) {
  rules = rules.rules;
  const rulesChannelId = rules.rulesChannelId;
  const tmp = closure_8();
  dependencyMap = tmp;
  let obj = { children: null };
  obj = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-md/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = rules(1114).intl;
  obj.children = intl.string(rules(1114).t.prJqwT);
  let items = [closure_5(rules(4556).Text, obj)];
  obj = {
    accessibilityRole: "list",
    children: rules.map((rule, index) => {
      const items = [termsContainer.termsContainer, ,];
      let firstItem = null;
      if (0 === index) {
        firstItem = tmp4.firstItem;
      }
      items[1] = firstItem;
      let lastItem = null;
      if (index === rules.length - 1) {
        lastItem = tmp4.lastItem;
      }
      let obj = { style: items, children: null };
      items[2] = lastItem;
      obj = { rule, rowNumber: index + 1, rowCount: arr2.length, rulesChannelId };
      obj.children = hasOwnProperty(TermsFieldListItem, obj);
      const children = [hasOwnProperty(View, obj)];
      let tmp2Result = null;
      if (index !== rules.length - 1) {
        tmp2Result = tmp2(TableRowDivider.TableRowDivider, {});
      }
      children[1] = tmp2Result;
      return timestampProducer(noop.Fragment, { children }, "term-" + rule + "-" + index);
    }),
  };
  items[1] = closure_5(View, obj);
  obj.children = items;
  return closure_6(closure_7, obj);
}
