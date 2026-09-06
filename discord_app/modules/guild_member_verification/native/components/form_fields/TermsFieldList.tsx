// === Module 5601: TermsFieldListItem ===

// Module 5601 (TermsFieldListItem)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import get_defaultRulesDefault from "get defaultRules" /* 4550 */;
import Text from "Text" /* 4556 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function TermsFieldListItem(rowNumber) {
  rowNumber = rowNumber.rowNumber;
  ({ rowCount, rule, rulesChannelId } = rowNumber);
  const tmp = callback3();
  let obj = { style: tmp.termsRow, children: null };
  obj = { style: tmp.termsRowNumber, variant: "text-sm/medium", color: "text-muted", accessibilityLabel: null, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.formatToPlainString(getSystemLocale.t.XpgzeO, { number: rowNumber, total: rowCount });
  obj[4] = "" + rowNumber + ".";
  const items = [callback(Text.Text, obj), ];
  obj = { style: tmp.termsRowContent, variant: "text-md/medium", children: get_defaultRulesDefault.parseGuildVerificationFormRule(rule, true, { channelId: rulesChannelId }) };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { termsContainer: null, firstItem: null, lastItem: null, termsRow: null, termsRowContent: null, termsRowNumber: null, title: null };
createCacheKey = { padding: 16, flexDirection: "column", justifyContent: "space-between", backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderTopLeftRadius: ThemesDefault.radii.sm, borderTopRightRadius: ThemesDefault.radii.sm };
const obj1 = { borderTopLeftRadius: ThemesDefault.radii.sm, borderTopRightRadius: ThemesDefault.radii.sm };
createCacheKey[2] = { borderBottomLeftRadius: ThemesDefault.radii.sm, borderBottomRightRadius: ThemesDefault.radii.sm, marginBottom: 12 };
createCacheKey[3] = { flexDirection: "row" };
createCacheKey[4] = { flex: 1, lineHeight: 20 };
createCacheKey[5] = { paddingRight: 8, width: 20, height: 20 };
createCacheKey[6] = { marginBottom: 16 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const obj2 = { borderBottomLeftRadius: ThemesDefault.radii.sm, borderBottomRightRadius: ThemesDefault.radii.sm, marginBottom: 12 };
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsFieldList.tsx");

export default function TermsFieldList(rules) {
  rules = rules.rules;
  const rulesChannelId = rules.rulesChannelId;
  dependencyMap = undefined;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = { children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = rules(1114).intl;
  obj[4] = intl.string(rules(1114).t.prJqwT);
  let items = [callback(rules(4556).Text, obj), ];
  obj = {
    accessibilityRole: "list",
    children: rules.map((rule) => {
      const items = [termsContainer.termsContainer, , ];
      let firstItem = null;
      if (0 === arg1) {
        firstItem = tmp4.firstItem;
      }
      items[1] = firstItem;
      let lastItem = null;
      if (arg1 === rules.length - 1) {
        lastItem = tmp4.lastItem;
      }
      obj = { style: items, children: tmp2(closure_1_9, obj) };
      items[2] = lastItem;
      obj = { rule, rowNumber: arg1 + 1, rowCount: arr2.length, rulesChannelId };
      const children = [closure_1_5(closure_1_4, obj), ];
      let tmp2Result = null;
      if (arg1 !== rules.length - 1) {
        tmp2Result = tmp2(rules(termsContainer[8]).TableRowDivider, {});
      }
      children[1] = tmp2Result;
      return closure_1_6(closure_1_3.Fragment, { children }, "term-" + rule + "-" + arg1);
    })
  };
  items[1] = callback(View, obj);
  obj[0] = items;
  return callback2(closure_7, obj);
};