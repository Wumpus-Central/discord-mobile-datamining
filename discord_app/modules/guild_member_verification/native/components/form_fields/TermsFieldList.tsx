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
  const obj = { style: tmp.termsRow, children: null };
  const obj2 = {
    style: tmp.termsRowNumber,
    variant: "text-sm/medium",
    color: "text-muted",
    accessibilityLabel: null,
    children: null,
  };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.formatToPlainString(util.t.XpgzeO, { number: rowNumber, total: rowCount });
  obj2.children = "" + rowNumber + ".";
  const items = [hasOwnProperty(Text_Text.Text, obj2)];
  const obj3 = {
    style: tmp.termsRowContent,
    variant: "text-md/medium",
    children: MarkupUtilsDefault.parseGuildVerificationFormRule(rule, true, { channelId: rulesChannelId }),
  };
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  termsContainer: {
    padding: 16,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  },
  firstItem: null,
  lastItem: null,
  termsRow: null,
  termsRowContent: null,
  termsRowNumber: null,
  title: null,
};
let obj3 = {
  padding: 16,
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
};
obj2.firstItem = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
const obj4 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj2.lastItem = {
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
  marginBottom: 12,
};
obj2.termsRow = { flexDirection: "row" };
obj2.termsRowContent = { flex: 1, lineHeight: 20 };
obj2.termsRowNumber = { paddingRight: 8, width: 20, height: 20 };
obj2.title = { marginBottom: 16 };
let closure_8 = createStyles.createStyles(obj2);
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
  const obj2 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-md/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = rules(1114).intl;
  obj2.children = intl.string(rules(1114).t.prJqwT);
  let items = [
    closure_5(rules(4632).Text, obj2),
    closure_5(View, {
      accessibilityRole: "list",
      children: rules.map((rule, index) => {
        const items = [termsContainer.termsContainer, ,];
        let firstItem = null;
        if (0 === index) {
          firstItem = termsContainer.firstItem;
        }
        items[1] = firstItem;
        let lastItem = null;
        if (index === rules.length - 1) {
          lastItem = termsContainer.lastItem;
        }
        const obj = {
          style: items,
          children: hasOwnProperty(TermsFieldListItem, {
            rule,
            rowNumber: index + 1,
            rowCount: rules.length,
            rulesChannelId,
          }),
        };
        items[2] = lastItem;
        const children = [hasOwnProperty(View, obj)];
        let tmp2Result = null;
        if (index !== rules.length - 1) {
          tmp2Result = hasOwnProperty(TableRowDivider.TableRowDivider, {});
        }
        children[1] = tmp2Result;
        return timestampProducer(noop.Fragment, { children }, "term-" + rule + "-" + index);
      }),
    }),
  ];
  obj.children = items;
  return closure_6(closure_7, obj);
}
