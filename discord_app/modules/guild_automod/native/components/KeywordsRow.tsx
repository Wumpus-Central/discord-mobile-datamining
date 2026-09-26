// === Module 17323: KeywordsRow ===

// Module 17323 (KeywordsRow)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/KeywordsRow.tsx");

export default function KeywordsRow(label) {
  label = label.label;
  ({ description: importDefault, type: dependencyMap, keywords } = label);
  ({ maxWordCount: closure_4, onChangeKeywords: closure_5 } = label);
  ({ start, end } = label);
  let obj = { start, end, label, trailing: null, arrow: true, onPress: null };
  if (keywords.length > 0) {
    const _String = String;
    let StringResult = String(keywords.length);
  } else {
    const intl = tmp2(1115).intl;
    StringResult = intl.string(tmp2(1115).t.PoWNfe);
  }
  obj.trailing = keywords(label(4832).Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: StringResult });
  obj.onPress = function onPress() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { title: label, description, keywords, onSave };
    if ("regex" === type) {
      const obj3 = { type };
      let obj4 = obj3;
    } else {
      obj4 = { type, maxWordCount };
    }
    const merged = Object.assign(obj4);
    obj.openLazy(asyncRequireImpl(17324, dependencyMap.paths), "AutomodKeywords", obj2);
    const tmp = asyncRequireImpl(17324, dependencyMap.paths);
  };
  return keywords(label(5917).TableRow, obj);
};