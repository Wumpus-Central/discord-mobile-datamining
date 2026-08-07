// discord_app/modules/guild_member_verification/native/components/form_fields/TermsFieldList.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
function TermsFieldListItem(arg0) {
  let rowNumber;
  let rule;
  let rulesChannelId;
  ({ rowNumber, rule, rulesChannelId } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.termsRow, children: null };
  obj = { style: tmp.termsRowNumber, variant: "text-sm/medium", color: "text-muted", children: null };
  obj[3] = "" + rowNumber + ".";
  const items = [callback(Text.Text, obj), ];
  obj = { style: tmp.termsRowContent, variant: "text-md/medium", children: null };
  obj[2] = require("../../../../markup/MarkupUtils.tsx") /* get defaultRules */.parseGuildVerificationFormRule(rule, true, { channelId: rulesChannelId });
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { termsContainer: null, firstItem: null, lastItem: null, termsRow: null, termsRowContent: null, termsRowNumber: null, title: null };
createCacheKey = { padding: 16, flexDirection: "column", justifyContent: "space-between", backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderTopLeftRadius: require("Themes").radii.sm, borderTopRightRadius: require("Themes").radii.sm };
const obj1 = { borderTopLeftRadius: require("Themes").radii.sm, borderTopRightRadius: require("Themes").radii.sm };
createCacheKey[2] = { borderBottomLeftRadius: require("Themes").radii.sm, borderBottomRightRadius: require("Themes").radii.sm, marginBottom: 12 };
createCacheKey[3] = { flexDirection: "row" };
createCacheKey[4] = { flex: 1, lineHeight: 20 };
createCacheKey[5] = { paddingRight: 8, width: 20, height: 20 };
createCacheKey[6] = { marginBottom: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { borderBottomLeftRadius: require("Themes").radii.sm, borderBottomRightRadius: require("Themes").radii.sm, marginBottom: 12 };
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsFieldList.tsx");

export default function TermsFieldList(rules) {
  rules = rules.rules;
  const rulesChannelId = rules.rulesChannelId;
  let dependencyMap;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = { children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = rules(1236).intl;
  obj[4] = intl.string(rules(1236).t.prJqwT);
  let items = [
    callback(rules(4298).Text, obj),
    rules.map((rule) => {
      const items = [_undefined.termsContainer, , ];
      let firstItem = null;
      if (0 === arg1) {
        firstItem = tmp4.firstItem;
      }
      items[1] = firstItem;
      let lastItem = null;
      if (arg1 === rules.length - 1) {
        lastItem = tmp4.lastItem;
      }
      obj = { style: items, children: tmp2(outer1_9, obj) };
      items[2] = lastItem;
      obj = { rule, rowNumber: arg1 + 1, rulesChannelId };
      const children = [outer1_5(outer1_4, obj), ];
      let tmp2Result = null;
      if (arg1 !== rules.length - 1) {
        tmp2Result = tmp2(rules(_undefined[8]).TableRowDivider, {});
      }
      children[1] = tmp2Result;
      return outer1_6(outer1_3.Fragment, { children }, "term-" + rule + "-" + arg1);
    })
  ];
  obj[0] = items;
  return callback2(closure_7, obj);
};