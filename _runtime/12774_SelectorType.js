// === Module 12774: SelectorType ===

// Module 12774 (SelectorType)
SelectorType.SelectorType = undefined;
SelectorType.IgnoreCaseMode = undefined;
SelectorType.AttributeAction = undefined;
SelectorType = SelectorType.SelectorType;
if (!SelectorType) {
  const obj = {};
  SelectorType.SelectorType = obj;
  SelectorType = obj;
}
SelectorType.Attribute = "attribute";
SelectorType.Pseudo = "pseudo";
SelectorType.PseudoElement = "pseudo-element";
SelectorType.Tag = "tag";
SelectorType.Universal = "universal";
SelectorType.Adjacent = "adjacent";
SelectorType.Child = "child";
SelectorType.Descendant = "descendant";
SelectorType.Parent = "parent";
SelectorType.Sibling = "sibling";
SelectorType.ColumnCombinator = "column-combinator";
SelectorType.IgnoreCaseMode = { Unknown: null, QuirksMode: "quirks", IgnoreCase: true, CaseSensitive: false };
let AttributeAction = SelectorType.AttributeAction;
if (!AttributeAction) {
  const obj2 = {};
  SelectorType.AttributeAction = obj2;
  AttributeAction = obj2;
}
AttributeAction.Any = "any";
AttributeAction.Element = "element";
AttributeAction.End = "end";
AttributeAction.Equals = "equals";
AttributeAction.Exists = "exists";
AttributeAction.Hyphen = "hyphen";
AttributeAction.Not = "not";
AttributeAction.Start = "start";